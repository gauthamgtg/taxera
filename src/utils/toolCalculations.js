const INDIAN_CURRENCY_FORMATTER = new Intl.NumberFormat('en-IN', {
  maximumFractionDigits: 0,
});

const INDIAN_CURRENCY_DECIMAL_FORMATTER = new Intl.NumberFormat('en-IN', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const CURRENT_ASSESSMENT_YEAR = '2026-27';
export const CURRENT_FY_LABEL = 'FY 2025-26';
export const INCOME_TAX_YEAR_NOTE =
  'Income tax assumptions in this calculator use the Indian assessment year 2026-27 slabs and rebates as amended through Finance Act 2025.';

const OLD_REGIME_SLABS = {
  adult: [
    { upperLimit: 250000, rate: 0 },
    { upperLimit: 500000, rate: 0.05 },
    { upperLimit: 1000000, rate: 0.2 },
    { upperLimit: Number.POSITIVE_INFINITY, rate: 0.3 },
  ],
  senior: [
    { upperLimit: 300000, rate: 0 },
    { upperLimit: 500000, rate: 0.05 },
    { upperLimit: 1000000, rate: 0.2 },
    { upperLimit: Number.POSITIVE_INFINITY, rate: 0.3 },
  ],
  superSenior: [
    { upperLimit: 500000, rate: 0 },
    { upperLimit: 1000000, rate: 0.2 },
    { upperLimit: Number.POSITIVE_INFINITY, rate: 0.3 },
  ],
};

const NEW_REGIME_SLABS = [
  { upperLimit: 400000, rate: 0 },
  { upperLimit: 800000, rate: 0.05 },
  { upperLimit: 1200000, rate: 0.1 },
  { upperLimit: 1600000, rate: 0.15 },
  { upperLimit: 2000000, rate: 0.2 },
  { upperLimit: 2400000, rate: 0.25 },
  { upperLimit: Number.POSITIVE_INFINITY, rate: 0.3 },
];

function toFiniteNumber(value, fallback = 0) {
  const numeric = typeof value === 'string' && value.trim() === '' ? Number.NaN : Number(value);
  return Number.isFinite(numeric) ? numeric : fallback;
}

function coerceNumber(value, fieldName, warnings, { min = 0, max = Number.POSITIVE_INFINITY } = {}) {
  const numeric = toFiniteNumber(value, Number.NaN);
  if (!Number.isFinite(numeric)) {
    warnings.push(`${fieldName} was not a valid number and was treated as 0.`);
    return 0;
  }

  if (numeric < min) {
    warnings.push(`${fieldName} cannot be below ${min}. It was clamped to ${min}.`);
    return min;
  }

  if (numeric > max) {
    warnings.push(`${fieldName} was above the supported maximum and was clamped to ${max}.`);
    return max;
  }

  return numeric;
}

function round(value, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round((Number(value) + Number.EPSILON) * factor) / factor;
}

function formatCurrencyINR(value, { decimals = 0 } = {}) {
  const numeric = Number(value) || 0;
  if (decimals === 0) {
    return `₹${INDIAN_CURRENCY_FORMATTER.format(Math.round(numeric))}`;
  }

  return `₹${INDIAN_CURRENCY_DECIMAL_FORMATTER.format(round(numeric, decimals))}`;
}

function formatPercent(value, decimals = 2) {
  return `${round(value, decimals).toFixed(decimals)}%`;
}

function buildSlabTaxBreakdown(taxableIncome, slabs) {
  let remainingIncome = Math.max(0, taxableIncome);
  let previousUpperLimit = 0;
  let totalTax = 0;
  const breakdown = [];

  for (const slab of slabs) {
    if (remainingIncome <= 0) break;

    const slabWidth =
      slab.upperLimit === Number.POSITIVE_INFINITY ? remainingIncome : Math.max(0, slab.upperLimit - previousUpperLimit);
    const taxablePortion = Math.min(remainingIncome, slabWidth);
    const slabTax = taxablePortion * slab.rate;

    breakdown.push({
      lowerLimit: previousUpperLimit,
      upperLimit: slab.upperLimit,
      taxablePortion: round(taxablePortion, 2),
      rate: slab.rate,
      tax: round(slabTax, 2),
    });

    totalTax += slabTax;
    remainingIncome -= taxablePortion;
    previousUpperLimit = slab.upperLimit;
  }

  return {
    tax: round(totalTax, 2),
    breakdown,
  };
}

function getOldRegimeSlabs(ageGroup) {
  if (ageGroup === 'senior') return OLD_REGIME_SLABS.senior;
  if (ageGroup === 'superSenior') return OLD_REGIME_SLABS.superSenior;
  return OLD_REGIME_SLABS.adult;
}

function getSurchargeRate(totalIncome, regime) {
  if (totalIncome <= 5000000) return 0;
  if (totalIncome <= 10000000) return 0.1;
  if (totalIncome <= 20000000) return 0.15;
  if (totalIncome <= 50000000) return 0.25;

  return regime === 'new' ? 0.25 : 0.37;
}

function getSurchargeThreshold(totalIncome) {
  if (totalIncome > 50000000) return 50000000;
  if (totalIncome > 20000000) return 20000000;
  if (totalIncome > 10000000) return 10000000;
  if (totalIncome > 5000000) return 5000000;
  return null;
}

function computeTaxWithRebateAndSurcharge({
  taxableIncome,
  regime,
  ageGroup,
  allowRebate = true,
  warningSink,
}) {
  const slabs = regime === 'new' ? NEW_REGIME_SLABS : getOldRegimeSlabs(ageGroup);
  const baseTaxResult = buildSlabTaxBreakdown(taxableIncome, slabs);
  const rebateThreshold = regime === 'new' ? 1200000 : 500000;
  const rebateCap = regime === 'new' ? 60000 : 12500;

  let rebate = 0;
  if (allowRebate) {
    if (taxableIncome <= rebateThreshold) {
      rebate = Math.min(baseTaxResult.tax, rebateCap);
    }
  }

  const taxAfterRebate = Math.max(0, baseTaxResult.tax - rebate);
  const excessOverThreshold = Math.max(0, taxableIncome - rebateThreshold);
  let taxAfterRebateWithMarginalRelief = taxAfterRebate;
  if (taxableIncome > rebateThreshold && taxAfterRebate > excessOverThreshold) {
    rebate += taxAfterRebate - excessOverThreshold;
    taxAfterRebateWithMarginalRelief = excessOverThreshold;
    warningSink?.push(
      `Marginal relief was applied around the section 87A rebate threshold of ${formatCurrencyINR(rebateThreshold)}.`
    );
  }

  const finalTaxAfterRebate = taxAfterRebateWithMarginalRelief;
  const surchargeRate = getSurchargeRate(taxableIncome, regime);
  let surcharge = finalTaxAfterRebate * surchargeRate;
  let marginalReliefApplied = false;

  const surchargeThreshold = getSurchargeThreshold(taxableIncome);
  if (surchargeThreshold) {
    const thresholdTax = buildSlabTaxBreakdown(
      surchargeThreshold,
      regime === 'new' ? NEW_REGIME_SLABS : getOldRegimeSlabs(ageGroup)
    ).tax;
    const surchargeCap = thresholdTax + Math.max(0, taxableIncome - surchargeThreshold);

    if (finalTaxAfterRebate + surcharge > surchargeCap) {
      surcharge = Math.max(0, surchargeCap - finalTaxAfterRebate);
      marginalReliefApplied = true;
      warningSink?.push(
        `Marginal relief was applied near the surcharge threshold of ${formatCurrencyINR(surchargeThreshold)}.`
      );
    }
  }

  const cess = (finalTaxAfterRebate + surcharge) * 0.04;
  const totalTax = finalTaxAfterRebate + surcharge + cess;

  return {
    taxableIncome: round(taxableIncome, 2),
    baseTax: round(baseTaxResult.tax, 2),
    rebate: round(rebate, 2),
    taxAfterRebate: round(finalTaxAfterRebate, 2),
    surchargeRate,
    surcharge: round(surcharge, 2),
    marginalReliefApplied,
    cess: round(cess, 2),
    totalTax: round(totalTax, 2),
    slabBreakdown: baseTaxResult.breakdown,
  };
}

function normalizeAgeGroup(ageGroup) {
  if (ageGroup === 'senior' || ageGroup === 'superSenior') return ageGroup;
  return 'adult';
}

export function formatCurrency(value, options) {
  return formatCurrencyINR(value, options);
}

export function formatPercentage(value, decimals = 2) {
  return formatPercent(value, decimals);
}

export function calculateIncomeTax(inputs = {}) {
  const warnings = [];
  const ageGroup = normalizeAgeGroup(inputs.ageGroup);

  const annualSalaryIncome = coerceNumber(inputs.annualSalaryIncome, 'Annual salary income', warnings);
  const annualOtherIncome = coerceNumber(inputs.annualOtherIncome, 'Other income', warnings);
  const deductions80C = Math.min(coerceNumber(inputs.deductions80C, 'Section 80C deduction', warnings), 150000);
  const deductions80DLimit = ageGroup === 'adult' ? 25000 : 50000;
  const deductions80D = Math.min(coerceNumber(inputs.deductions80D, 'Section 80D deduction', warnings), deductions80DLimit);
  const homeLoanInterest = Math.min(
    coerceNumber(inputs.homeLoanInterest, 'Home-loan interest deduction', warnings),
    200000
  );
  const hraExemption = coerceNumber(inputs.hraExemption, 'HRA exemption', warnings);
  const otherOldRegimeDeductions = coerceNumber(
    inputs.otherOldRegimeDeductions,
    'Other old-regime deductions',
    warnings
  );
  const employerNpsContribution = coerceNumber(
    inputs.employerNpsContribution,
    'Employer NPS contribution deduction',
    warnings
  );

  const grossIncome = annualSalaryIncome + annualOtherIncome;
  const oldRegimeDeductions =
    (annualSalaryIncome > 0 ? 50000 : 0) +
    deductions80C +
    deductions80D +
    homeLoanInterest +
    hraExemption +
    otherOldRegimeDeductions;
  const newRegimeDeductions = (annualSalaryIncome > 0 ? 75000 : 0) + employerNpsContribution;

  const oldTaxableIncome = Math.max(0, grossIncome - oldRegimeDeductions);
  const newTaxableIncome = Math.max(0, grossIncome - newRegimeDeductions);

  const oldRegime = computeTaxWithRebateAndSurcharge({
    taxableIncome: oldTaxableIncome,
    regime: 'old',
    ageGroup,
    allowRebate: true,
    warningSink: warnings,
  });

  const newRegime = computeTaxWithRebateAndSurcharge({
    taxableIncome: newTaxableIncome,
    regime: 'new',
    ageGroup,
    allowRebate: true,
    warningSink: warnings,
  });

  const recommendedRegime = oldRegime.totalTax <= newRegime.totalTax ? 'old' : 'new';
  const taxDifference = Math.abs(oldRegime.totalTax - newRegime.totalTax);

  return {
    inputs: {
      annualSalaryIncome,
      annualOtherIncome,
      deductions80C,
      deductions80D,
      homeLoanInterest,
      hraExemption,
      otherOldRegimeDeductions,
      employerNpsContribution,
      ageGroup,
    },
    summary: {
      grossIncome: round(grossIncome, 2),
      oldRegimeTaxableIncome: round(oldTaxableIncome, 2),
      newRegimeTaxableIncome: round(newTaxableIncome, 2),
      recommendedRegime,
      taxDifference: round(taxDifference, 2),
      taxDifferenceLabel:
        recommendedRegime === 'old'
          ? `Old regime is lower by ${formatCurrency(taxDifference)}`
          : `New regime is lower by ${formatCurrency(taxDifference)}`,
    },
    regimes: {
      old: {
        label: 'Old regime',
        ...oldRegime,
        effectiveTaxRate:
          grossIncome > 0 ? round((oldRegime.totalTax / grossIncome) * 100, 2) : 0,
        totalDeductionsUsed: round(oldRegimeDeductions, 2),
        standardDeduction: annualSalaryIncome > 0 ? 50000 : 0,
      },
      new: {
        label: 'New regime',
        ...newRegime,
        effectiveTaxRate:
          grossIncome > 0 ? round((newRegime.totalTax / grossIncome) * 100, 2) : 0,
        totalDeductionsUsed: round(newRegimeDeductions, 2),
        standardDeduction: annualSalaryIncome > 0 ? 75000 : 0,
      },
    },
    warnings,
  };
}

export function calculateSipProjection(inputs = {}) {
  const warnings = [];
  const monthlyInvestment = coerceNumber(inputs.monthlyInvestment, 'Monthly SIP amount', warnings);
  const expectedAnnualReturn = coerceNumber(
    inputs.expectedAnnualReturn,
    'Expected annual return',
    warnings,
    { min: 0, max: 100 }
  );
  const durationYears = coerceNumber(inputs.durationYears, 'Investment duration', warnings, { min: 0, max: 50 });
  const stepUpPercent = coerceNumber(inputs.stepUpPercent, 'Annual step-up', warnings, { min: 0, max: 100 });

  const totalMonths = Math.max(0, Math.round(durationYears * 12));
  const monthlyRate = expectedAnnualReturn / 12 / 100;
  let corpus = 0;
  let investedAmount = 0;
  let currentMonthlyContribution = monthlyInvestment;
  const yearlySnapshots = [];

  for (let month = 1; month <= totalMonths; month += 1) {
    corpus = corpus * (1 + monthlyRate) + currentMonthlyContribution;
    investedAmount += currentMonthlyContribution;

    if (month % 12 === 0 || month === totalMonths) {
      yearlySnapshots.push({
        month,
        year: Math.ceil(month / 12),
        investedAmount: round(investedAmount, 2),
        futureValue: round(corpus, 2),
      });
    }

    if (stepUpPercent > 0 && month % 12 === 0) {
      currentMonthlyContribution *= 1 + stepUpPercent / 100;
    }
  }

  const estimatedGain = Math.max(0, corpus - investedAmount);
  const wealthMultiple = investedAmount > 0 ? corpus / investedAmount : 0;

  return {
    inputs: {
      monthlyInvestment,
      expectedAnnualReturn,
      durationYears,
      stepUpPercent,
    },
    summary: {
      totalMonths,
      investedAmount: round(investedAmount, 2),
      futureValue: round(corpus, 2),
      estimatedGain: round(estimatedGain, 2),
      wealthMultiple: round(wealthMultiple, 2),
      monthlyRate: round(monthlyRate * 100, 4),
    },
    yearlySnapshots,
    warnings,
  };
}

export function calculateLumpsumReturn(inputs = {}) {
  const warnings = [];
  const investedAmount = coerceNumber(inputs.investedAmount, 'Invested amount', warnings);
  const currentValue = coerceNumber(inputs.currentValue, 'Current value', warnings);
  const durationYears = coerceNumber(inputs.durationYears, 'Holding period', warnings, { min: 0, max: 100 });

  const absoluteGain = currentValue - investedAmount;
  const absoluteReturnPercent = investedAmount > 0 ? (absoluteGain / investedAmount) * 100 : 0;
  const cagr =
    investedAmount > 0 && currentValue > 0 && durationYears > 0
      ? (Math.pow(currentValue / investedAmount, 1 / durationYears) - 1) * 100
      : 0;
  const wealthMultiple = investedAmount > 0 ? currentValue / investedAmount : 0;

  return {
    inputs: {
      investedAmount,
      currentValue,
      durationYears,
    },
    summary: {
      investedAmount: round(investedAmount, 2),
      currentValue: round(currentValue, 2),
      absoluteGain: round(absoluteGain, 2),
      absoluteReturnPercent: round(absoluteReturnPercent, 2),
      cagr: round(cagr, 2),
      wealthMultiple: round(wealthMultiple, 2),
    },
    warnings,
  };
}

export function calculateInflationImpact(inputs = {}) {
  const warnings = [];
  const amount = coerceNumber(inputs.amount, 'Current amount', warnings);
  const inflationRate = coerceNumber(inputs.inflationRate, 'Inflation rate', warnings, { min: 0, max: 100 });
  const years = coerceNumber(inputs.years, 'Time horizon', warnings, { min: 0, max: 100 });
  const futureGoalAmount = inputs.futureGoalAmount === undefined || inputs.futureGoalAmount === null
    ? null
    : coerceNumber(inputs.futureGoalAmount, 'Future goal amount', warnings);

  const inflationFactor = Math.pow(1 + inflationRate / 100, years);
  const futureCost = amount * inflationFactor;
  const presentValueOfFutureGoal =
    futureGoalAmount === null ? null : futureGoalAmount / inflationFactor;
  const purchasingPowerLoss = Math.max(0, futureCost - amount);
  const cumulativeInflationPercent = inflationFactor > 0 ? (inflationFactor - 1) * 100 : 0;

  return {
    inputs: {
      amount,
      inflationRate,
      years,
      futureGoalAmount,
    },
    summary: {
      futureCost: round(futureCost, 2),
      presentValueOfFutureGoal: futureGoalAmount === null ? null : round(presentValueOfFutureGoal, 2),
      purchasingPowerLoss: round(purchasingPowerLoss, 2),
      cumulativeInflationPercent: round(cumulativeInflationPercent, 2),
      inflationFactor: round(inflationFactor, 6),
    },
    warnings,
  };
}

export function calculateToolBySlug(slug, inputs = {}) {
  switch (slug) {
    case 'income-tax-calculator':
    case 'income-tax-calculator-india':
      return calculateIncomeTax(inputs);
    case 'sip-calculator':
      return calculateSipProjection(inputs);
    case 'mutual-fund-return-calculator':
      return calculateLumpsumReturn(inputs);
    case 'inflation-calculator':
      return calculateInflationImpact(inputs);
    default:
      return null;
  }
}

export const toolCalculationMetadata = {
  currentAssessmentYear: CURRENT_ASSESSMENT_YEAR,
  currentFiscalYear: CURRENT_FY_LABEL,
  notes: [
    INCOME_TAX_YEAR_NOTE,
    'Tax calculations use a simplified salary-and-deductions estimate. They are intended for comparison and lead generation, not filing-grade compliance.',
    'SIP, lumpsum return, and inflation projections assume periodic compounding and do not model taxes, exit loads, or inflation volatility.',
  ],
};
