const INR_FORMATTER = new Intl.NumberFormat('en-IN', {
  maximumFractionDigits: 0,
});

const PERCENT_FORMATTER = new Intl.NumberFormat('en-IN', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function toNumber(value, fallback = 0) {
  const parsed = typeof value === 'string' && value.trim() === '' ? Number.NaN : Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function clamp(value, min = 0, max = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(value, min), max);
}

function round(value, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round((Number(value) + Number.EPSILON) * factor) / factor;
}

function formatCurrency(value) {
  return `₹${INR_FORMATTER.format(Math.round(value || 0))}`;
}

function formatPercent(value) {
  return `${PERCENT_FORMATTER.format(value || 0)}%`;
}

function yesNoLabel(value) {
  return value === 'yes' ? 'Yes' : 'No';
}

export function calculateGstLateFeeInterest(inputs = {}) {
  const warnings = [];
  const taxAmount = clamp(toNumber(inputs.taxAmount), 0);
  const daysDelayed = clamp(toNumber(inputs.daysDelayed), 0, 3650);
  const isNilReturn = inputs.isNilReturn === 'yes';
  const returnType = inputs.returnType || 'gstr3b';

  const dailyLateFee = isNilReturn ? 20 : 50;
  const lateFee = Math.min(daysDelayed * dailyLateFee, 10000);
  const interest = taxAmount * 0.18 * (daysDelayed / 365);
  const totalOutflow = taxAmount + lateFee + interest;

  if (daysDelayed > 0 && taxAmount === 0 && !isNilReturn) {
    warnings.push('Interest becomes nil because the overdue tax amount entered was ₹0. Use the nil-return toggle if that matches the case.');
  }

  return {
    cards: [
      { label: 'Estimated late fee', value: formatCurrency(lateFee), tone: 'accent' },
      { label: 'Estimated interest', value: formatCurrency(interest) },
      { label: 'Total compliance outflow', value: formatCurrency(totalOutflow), tone: 'positive' },
      { label: 'Daily late-fee rate', value: `${formatCurrency(dailyLateFee)} / day` },
    ],
    callout:
      returnType === 'gstr3b'
        ? 'This estimate is useful when a GSTR-3B delay has both tax interest and daily late-fee impact.'
        : 'This estimate is useful when a GST return delay needs a quick late-fee and interest checkpoint before filing.',
    sections: [
      {
        title: 'Input summary',
        rows: [
          { label: 'Tax payable considered', value: formatCurrency(taxAmount) },
          { label: 'Days delayed', value: `${daysDelayed} days` },
          { label: 'Nil return', value: isNilReturn ? 'Yes' : 'No' },
          { label: 'Return type', value: returnType === 'gstr1' ? 'GSTR-1' : 'GSTR-3B' },
        ],
      },
      {
        title: 'How the estimate works',
        rows: [
          { label: 'Late fee rule used', value: isNilReturn ? '₹20 per day, capped at ₹10,000' : '₹50 per day, capped at ₹10,000' },
          { label: 'Interest rule used', value: '18% per annum on the overdue tax amount' },
        ],
      },
    ],
    warnings,
  };
}

export function calculateHraExemption(inputs = {}) {
  const warnings = [];
  const basicSalary = clamp(toNumber(inputs.basicSalary), 0);
  const hraReceived = clamp(toNumber(inputs.hraReceived), 0);
  const rentPaid = clamp(toNumber(inputs.rentPaid), 0);
  const metroCity = inputs.metroCity === 'metro';

  const rentMinusTenPercent = Math.max(0, rentPaid - basicSalary * 0.1);
  const salaryPercentageCap = basicSalary * (metroCity ? 0.5 : 0.4);
  const hraExempt = Math.min(hraReceived, rentMinusTenPercent, salaryPercentageCap);
  const taxableHra = Math.max(0, hraReceived - hraExempt);
  const exemptionRatio = hraReceived > 0 ? (hraExempt / hraReceived) * 100 : 0;

  if (rentPaid <= basicSalary * 0.1) {
    warnings.push('Rent paid did not exceed 10% of basic salary, so the rent-based exemption limb became nil in this estimate.');
  }

  return {
    cards: [
      { label: 'Estimated HRA exemption', value: formatCurrency(hraExempt), tone: 'positive' },
      { label: 'Taxable HRA', value: formatCurrency(taxableHra), tone: 'accent' },
      { label: 'Rent minus 10% of salary', value: formatCurrency(rentMinusTenPercent) },
      { label: 'Exemption ratio', value: formatPercent(exemptionRatio) },
    ],
    callout: 'This uses the standard three-limb HRA rule: actual HRA received, rent minus 10% of salary, and 40% or 50% of salary depending on city type.',
    sections: [
      {
        title: 'Comparison limbs used',
        rows: [
          { label: 'Actual HRA received', value: formatCurrency(hraReceived) },
          { label: metroCity ? '50% of salary' : '40% of salary', value: formatCurrency(salaryPercentageCap) },
          { label: 'Rent paid minus 10% of salary', value: formatCurrency(rentMinusTenPercent) },
        ],
      },
      {
        title: 'Input summary',
        rows: [
          { label: 'Basic salary considered', value: formatCurrency(basicSalary) },
          { label: 'Annual rent paid', value: formatCurrency(rentPaid) },
          { label: 'Metro city assumed', value: metroCity ? 'Yes' : 'No' },
        ],
      },
    ],
    warnings,
  };
}

const TDS_OPTIONS = {
  professional: {
    label: 'Professional fees (Section 194J)',
    rate: 10,
    threshold: 30000,
  },
  contractorIndividual: {
    label: 'Contractor payment to individual / HUF (Section 194C)',
    rate: 1,
    threshold: 30000,
  },
  contractorOther: {
    label: 'Contractor payment to others (Section 194C)',
    rate: 2,
    threshold: 30000,
  },
  rent: {
    label: 'Rent for land / building (Section 194I)',
    rate: 10,
    threshold: 240000,
  },
  commission: {
    label: 'Commission / brokerage (Section 194H)',
    rate: 5,
    threshold: 15000,
  },
};

export function calculateTds(inputs = {}) {
  const warnings = [];
  const paymentAmount = clamp(toNumber(inputs.paymentAmount), 0);
  const sectionKey = inputs.sectionKey || 'professional';
  const section = TDS_OPTIONS[sectionKey] || TDS_OPTIONS.professional;

  const thresholdCrossed = paymentAmount > section.threshold;
  const tdsAmount = thresholdCrossed ? paymentAmount * (section.rate / 100) : 0;
  const netPayable = paymentAmount - tdsAmount;

  if (!thresholdCrossed) {
    warnings.push(`The payment amount did not cross the quick-estimate threshold of ${formatCurrency(section.threshold)} for ${section.label}.`);
  }

  return {
    cards: [
      { label: 'Applicable TDS', value: formatCurrency(tdsAmount), tone: 'accent' },
      { label: 'Net payment after TDS', value: formatCurrency(netPayable), tone: 'positive' },
      { label: 'Applied TDS rate', value: formatPercent(section.rate) },
      { label: 'Threshold status', value: thresholdCrossed ? 'Above threshold' : 'Below threshold' },
    ],
    callout: 'This is a quick deduction estimate using common section rates. Actual applicability can change with PAN status, declarations, lower-deduction certificates, and cumulative yearly payments.',
    sections: [
      {
        title: 'Section assumptions used',
        rows: [
          { label: 'Selected section', value: section.label },
          { label: 'Threshold considered', value: formatCurrency(section.threshold) },
          { label: 'Payment amount entered', value: formatCurrency(paymentAmount) },
        ],
      },
    ],
    warnings,
  };
}

export function calculateAdvanceTax(inputs = {}) {
  const warnings = [];
  const estimatedAnnualTax = clamp(toNumber(inputs.estimatedAnnualTax), 0);
  const tdsAlreadyDeducted = clamp(toNumber(inputs.tdsAlreadyDeducted), 0);
  const paidByJune = clamp(toNumber(inputs.paidByJune), 0);
  const paidBySeptember = clamp(toNumber(inputs.paidBySeptember), 0);
  const paidByDecember = clamp(toNumber(inputs.paidByDecember), 0);

  const netAdvanceTax = Math.max(0, estimatedAnnualTax - tdsAlreadyDeducted);
  const juneDue = netAdvanceTax * 0.15;
  const septemberDue = netAdvanceTax * 0.45;
  const decemberDue = netAdvanceTax * 0.75;
  const marchDue = netAdvanceTax;
  const remainingByMarch = Math.max(0, marchDue - paidByDecember);

  const juneShortfall = Math.max(0, juneDue - paidByJune);
  const septemberShortfall = Math.max(0, septemberDue - paidBySeptember);
  const decemberShortfall = Math.max(0, decemberDue - paidByDecember);

  if (netAdvanceTax < 10000) {
    warnings.push('Advance tax is generally not payable if the net tax liability after TDS is below ₹10,000.');
  }

  return {
    cards: [
      { label: 'Net advance tax', value: formatCurrency(netAdvanceTax), tone: 'positive' },
      { label: 'Paid till December', value: formatCurrency(paidByDecember) },
      { label: 'Remaining by March 15', value: formatCurrency(remainingByMarch), tone: 'accent' },
      { label: 'TDS considered', value: formatCurrency(tdsAlreadyDeducted) },
    ],
    callout: 'The schedule shown here uses the standard non-presumptive advance-tax pattern of 15%, 45%, 75%, and 100% cumulative dues.',
    sections: [
      {
        title: 'Cumulative schedule',
        rows: [
          { label: 'By 15 June', value: `${formatCurrency(juneDue)} | shortfall: ${formatCurrency(juneShortfall)}` },
          { label: 'By 15 September', value: `${formatCurrency(septemberDue)} | shortfall: ${formatCurrency(septemberShortfall)}` },
          { label: 'By 15 December', value: `${formatCurrency(decemberDue)} | shortfall: ${formatCurrency(decemberShortfall)}` },
          { label: 'By 15 March', value: formatCurrency(marchDue) },
        ],
      },
    ],
    warnings,
  };
}

export function calculateGratuity(inputs = {}) {
  const warnings = [];
  const monthlyBasicDa = clamp(toNumber(inputs.monthlyBasicDa), 0);
  const completedYears = clamp(toNumber(inputs.completedYears), 0, 60);
  const extraMonths = clamp(toNumber(inputs.extraMonths), 0, 11);

  const countedYears = completedYears + (extraMonths >= 6 ? 1 : 0);
  const gratuity = monthlyBasicDa * (15 / 26) * countedYears;
  const eligible = countedYears >= 5;

  if (!eligible) {
    warnings.push('Most gratuity cases require at least 5 years of completed service, subject to specific legal exceptions.');
  }

  return {
    cards: [
      { label: 'Estimated gratuity', value: formatCurrency(gratuity), tone: 'positive' },
      { label: 'Counted service years', value: `${countedYears} years` },
      { label: 'Last drawn basic + DA', value: formatCurrency(monthlyBasicDa) },
      { label: 'Standard eligibility check', value: eligible ? 'Usually eligible' : 'Below 5 years' },
    ],
    callout: 'This applies the standard formula of 15/26 of last drawn basic plus DA for each counted year of service.',
    sections: [
      {
        title: 'Service rounding used',
        rows: [
          { label: 'Completed years entered', value: `${completedYears} years` },
          { label: 'Extra months entered', value: `${extraMonths} months` },
          { label: 'Years counted in formula', value: `${countedYears} years` },
        ],
      },
    ],
    warnings,
  };
}

export function calculateEmi(inputs = {}) {
  const warnings = [];
  const loanAmount = clamp(toNumber(inputs.loanAmount), 0);
  const annualInterestRate = clamp(toNumber(inputs.annualInterestRate), 0, 100);
  const tenureYears = clamp(toNumber(inputs.tenureYears), 0, 50);
  const processingFeePercent = clamp(toNumber(inputs.processingFeePercent), 0, 10);

  const totalMonths = Math.max(0, Math.round(tenureYears * 12));
  const monthlyRate = annualInterestRate / 12 / 100;
  const emi =
    totalMonths === 0
      ? 0
      : monthlyRate === 0
        ? loanAmount / totalMonths
        : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
          (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalWithoutFee = emi * totalMonths;
  const totalInterest = Math.max(0, totalWithoutFee - loanAmount);
  const processingFee = loanAmount * (processingFeePercent / 100);
  const totalOutflow = totalWithoutFee + processingFee;

  return {
    cards: [
      { label: 'Estimated EMI', value: formatCurrency(emi), tone: 'positive' },
      { label: 'Total interest', value: formatCurrency(totalInterest), tone: 'accent' },
      { label: 'Processing fee', value: formatCurrency(processingFee) },
      { label: 'Total outflow', value: formatCurrency(totalOutflow) },
    ],
    callout: 'EMI estimates are useful for affordability checks, but actual loan offers can differ because of reducing-balance conventions, insurance, and lender fees.',
    sections: [
      {
        title: 'Loan summary',
        rows: [
          { label: 'Principal amount', value: formatCurrency(loanAmount) },
          { label: 'Annual interest rate', value: formatPercent(annualInterestRate) },
          { label: 'Tenure', value: `${tenureYears} years (${totalMonths} months)` },
          { label: 'Monthly rate used', value: formatPercent(monthlyRate * 100) },
        ],
      },
    ],
    warnings,
  };
}

export function calculateBreakEven(inputs = {}) {
  const warnings = [];
  const fixedCostsMonthly = clamp(toNumber(inputs.fixedCostsMonthly), 0);
  const sellingPricePerUnit = clamp(toNumber(inputs.sellingPricePerUnit), 0);
  const variableCostPerUnit = clamp(toNumber(inputs.variableCostPerUnit), 0);
  const expectedMonthlyUnits = clamp(toNumber(inputs.expectedMonthlyUnits), 0);

  const contributionPerUnit = sellingPricePerUnit - variableCostPerUnit;
  const breakEvenUnits = contributionPerUnit > 0 ? fixedCostsMonthly / contributionPerUnit : 0;
  const breakEvenRevenue = breakEvenUnits * sellingPricePerUnit;
  const marginOfSafetyUnits = Math.max(0, expectedMonthlyUnits - breakEvenUnits);
  const marginOfSafetyPercent = expectedMonthlyUnits > 0 ? (marginOfSafetyUnits / expectedMonthlyUnits) * 100 : 0;

  if (contributionPerUnit <= 0) {
    warnings.push('Variable cost is equal to or above selling price per unit, so the model does not generate a positive contribution margin.');
  }

  return {
    cards: [
      { label: 'Break-even units', value: contributionPerUnit > 0 ? `${Math.ceil(breakEvenUnits)} units` : 'Not achievable', tone: 'accent' },
      { label: 'Break-even revenue', value: contributionPerUnit > 0 ? formatCurrency(breakEvenRevenue) : 'Not achievable' },
      { label: 'Contribution per unit', value: formatCurrency(contributionPerUnit), tone: 'positive' },
      { label: 'Margin of safety', value: contributionPerUnit > 0 ? formatPercent(marginOfSafetyPercent) : '0.00%' },
    ],
    callout: 'This model is most useful when unit economics are clear and you want a quick signal on volume required to cover fixed costs.',
    sections: [
      {
        title: 'Unit economics used',
        rows: [
          { label: 'Monthly fixed costs', value: formatCurrency(fixedCostsMonthly) },
          { label: 'Selling price per unit', value: formatCurrency(sellingPricePerUnit) },
          { label: 'Variable cost per unit', value: formatCurrency(variableCostPerUnit) },
          { label: 'Expected monthly sales volume', value: `${Math.round(expectedMonthlyUnits)} units` },
        ],
      },
    ],
    warnings,
  };
}

const GST_SCHEME_RULES = {
  trader: { label: 'Trader', threshold: 15000000, compositionRate: '1%' },
  manufacturer: { label: 'Manufacturer', threshold: 15000000, compositionRate: '1%' },
  restaurant: { label: 'Restaurant (non-alcohol)', threshold: 15000000, compositionRate: '5%' },
  service: { label: 'Service provider', threshold: 5000000, compositionRate: '6%' },
  mixed: { label: 'Mixed / unclear model', threshold: 0, compositionRate: 'Not standard' },
};

export function calculateGstSchemeChecker(inputs = {}) {
  const warnings = [];
  const annualTurnover = clamp(toNumber(inputs.annualTurnover), 0);
  const businessType = inputs.businessType || 'trader';
  const b2bSharePercent = clamp(toNumber(inputs.b2bSharePercent), 0, 100);
  const inputTaxCreditNeed = inputs.inputTaxCreditNeed || 'medium';
  const interstateSales = inputs.interstateSales === 'yes';
  const ecommerceSales = inputs.ecommerceSales === 'yes';

  const rule = GST_SCHEME_RULES[businessType] || GST_SCHEME_RULES.trader;
  const eligible =
    rule.threshold > 0 &&
    annualTurnover <= rule.threshold &&
    !interstateSales &&
    !ecommerceSales;

  let regularScore = 0;
  let compositionScore = 0;

  if (b2bSharePercent >= 40) regularScore += 2;
  else compositionScore += 1;

  if (inputTaxCreditNeed === 'high') regularScore += 2;
  if (inputTaxCreditNeed === 'medium') {
    regularScore += 1;
    compositionScore += 1;
  }
  if (inputTaxCreditNeed === 'low') compositionScore += 2;

  if (annualTurnover > rule.threshold * 0.8) regularScore += 1;
  else compositionScore += 1;

  const recommendation = !eligible || regularScore >= compositionScore ? 'Regular Scheme' : 'Composition Scheme';
  const primaryReason = !eligible
    ? 'Regular scheme is safer because the quick eligibility screen failed.'
    : recommendation === 'Regular Scheme'
      ? 'Regular scheme scores better when ITC dependency, B2B billing, or scale headroom matter.'
      : 'Composition scheme scores better when simplicity matters more than input-credit flow.';

  if (!eligible) {
    warnings.push('Composition eligibility is a simplified screen here. Actual eligibility can also depend on nature of supplies, state rules, and disqualifying transactions.');
  }

  return {
    cards: [
      { label: 'Recommended route', value: recommendation, tone: 'positive' },
      { label: 'Composition eligibility', value: eligible ? 'Appears eligible' : 'Check failed', tone: 'accent' },
      { label: 'Composition turnover limit', value: rule.threshold > 0 ? formatCurrency(rule.threshold) : 'Not standard' },
      { label: 'Indicative composition rate', value: rule.compositionRate },
    ],
    callout: primaryReason,
    sections: [
      {
        title: 'Business profile used',
        rows: [
          { label: 'Business type', value: rule.label },
          { label: 'Annual turnover entered', value: formatCurrency(annualTurnover) },
          { label: 'B2B share', value: formatPercent(b2bSharePercent) },
          { label: 'High ITC dependency', value: inputTaxCreditNeed },
          { label: 'Interstate supplies', value: yesNoLabel(interstateSales ? 'yes' : 'no') },
          { label: 'E-commerce supplies', value: yesNoLabel(ecommerceSales ? 'yes' : 'no') },
        ],
      },
    ],
    warnings,
  };
}
