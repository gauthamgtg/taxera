const INR_FORMATTER = new Intl.NumberFormat('en-IN', {
  maximumFractionDigits: 0,
});

const PERCENT_FORMATTER = new Intl.NumberFormat('en-IN', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 2,
});

export function formatCurrency(value) {
  const amount = Number.isFinite(value) ? value : 0;
  return `Rs. ${INR_FORMATTER.format(Math.round(amount))}`;
}

export function formatPercent(value) {
  const amount = Number.isFinite(value) ? value : 0;
  return `${PERCENT_FORMATTER.format(amount)}%`;
}

export function clampNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function slugToTitle(slug = '') {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function calculateSlabTax(amount, slabs) {
  let remaining = Math.max(0, amount);
  let previousLimit = 0;
  let tax = 0;

  slabs.forEach((slab) => {
    if (remaining <= 0) return;
    const ceiling = slab.limit === Infinity ? Infinity : slab.limit;
    const taxablePortion = ceiling === Infinity ? remaining : Math.min(remaining, ceiling - previousLimit);
    if (taxablePortion > 0) {
      tax += taxablePortion * slab.rate;
      remaining -= taxablePortion;
    }
    previousLimit = ceiling === Infinity ? previousLimit : ceiling;
  });

  return tax;
}

function getOldRegimeThreshold(ageCategory) {
  if (ageCategory === 'senior') return 300000;
  if (ageCategory === 'super-senior') return 500000;
  return 250000;
}

function getOldRegimeSlabs(ageCategory) {
  const threshold = getOldRegimeThreshold(ageCategory);
  if (ageCategory === 'super-senior') {
    return [
      { limit: threshold, rate: 0 },
      { limit: 1000000, rate: 0.2 },
      { limit: Infinity, rate: 0.3 },
    ];
  }

  return [
    { limit: threshold, rate: 0 },
    { limit: 500000, rate: 0.05 },
    { limit: 1000000, rate: 0.2 },
    { limit: Infinity, rate: 0.3 },
  ];
}

function getSurchargeRate(taxableIncome, regime) {
  if (taxableIncome <= 5000000) return 0;
  if (taxableIncome <= 10000000) return 0.1;
  if (taxableIncome <= 20000000) return 0.15;
  if (taxableIncome <= 50000000) return 0.25;
  return regime === 'new' ? 0.25 : 0.37;
}

function calculateIncomeTaxForRegime({
  taxableIncome,
  regime,
  ageCategory,
}) {
  const slabs = regime === 'old'
    ? getOldRegimeSlabs(ageCategory)
    : [
        { limit: 400000, rate: 0 },
        { limit: 800000, rate: 0.05 },
        { limit: 1200000, rate: 0.1 },
        { limit: 1600000, rate: 0.15 },
        { limit: 2000000, rate: 0.2 },
        { limit: 2400000, rate: 0.25 },
        { limit: Infinity, rate: 0.3 },
      ];

  const taxBeforeRebate = calculateSlabTax(taxableIncome, slabs);
  const rebateLimit = regime === 'new' ? 25000 : 12500;
  const rebateThreshold = regime === 'new' ? 700000 : 500000;
  const rebate = taxableIncome <= rebateThreshold ? Math.min(taxBeforeRebate, rebateLimit) : 0;
  const taxAfterRebate = Math.max(0, taxBeforeRebate - rebate);
  const surchargeRate = getSurchargeRate(taxableIncome, regime);
  const surcharge = taxAfterRebate * surchargeRate;
  const cess = (taxAfterRebate + surcharge) * 0.04;
  const totalTax = taxAfterRebate + surcharge + cess;

  return {
    taxableIncome,
    taxBeforeRebate,
    rebate,
    surchargeRate,
    surcharge,
    cess,
    totalTax,
    effectiveTaxRate: taxableIncome > 0 ? (totalTax / taxableIncome) * 100 : 0,
    monthlyTax: totalTax / 12,
  };
}

export function calculateIncomeTax(values = {}) {
  const grossAnnualIncome = clampNumber(values.grossAnnualIncome);
  const annualDeductions = clampNumber(values.annualDeductions);
  const standardDeduction = clampNumber(values.standardDeduction, values.regime === 'old' ? 50000 : 75000);
  const ageCategory = values.ageCategory || 'general';

  const taxableIncome = Math.max(0, grossAnnualIncome - annualDeductions - standardDeduction);
  const oldRegime = calculateIncomeTaxForRegime({ taxableIncome, regime: 'old', ageCategory });
  const newRegime = calculateIncomeTaxForRegime({ taxableIncome, regime: 'new', ageCategory });
  const recommendedRegime = oldRegime.totalTax <= newRegime.totalTax ? 'old' : 'new';

  return {
    title: 'Income Tax Estimate',
    summary: 'Compare the estimated liability under the old and new regimes before you choose a filing strategy.',
    taxableIncome,
    metrics: [
      {
        label: 'Taxable income',
        value: formatCurrency(taxableIncome),
      },
      {
        label: 'Lower tax regime',
        value: recommendedRegime === 'old' ? 'Old regime' : 'New regime',
      },
      {
        label: 'Estimated monthly tax',
        value: formatCurrency(Math.min(oldRegime.monthlyTax, newRegime.monthlyTax)),
      },
    ],
    comparison: [
      {
        label: 'Tax before rebate',
        oldValue: formatCurrency(oldRegime.taxBeforeRebate),
        newValue: formatCurrency(newRegime.taxBeforeRebate),
      },
      {
        label: 'Rebate',
        oldValue: formatCurrency(oldRegime.rebate),
        newValue: formatCurrency(newRegime.rebate),
      },
      {
        label: 'Surcharge + cess',
        oldValue: formatCurrency(oldRegime.surcharge + oldRegime.cess),
        newValue: formatCurrency(newRegime.surcharge + newRegime.cess),
      },
      {
        label: 'Total tax payable',
        oldValue: formatCurrency(oldRegime.totalTax),
        newValue: formatCurrency(newRegime.totalTax),
      },
    ],
    comparisonNote: recommendedRegime === 'old'
      ? 'The old regime is estimated to be cheaper for this input set.'
      : 'The new regime is estimated to be cheaper for this input set.',
    explanation: [
      'This estimate uses the current Indian slab structure for individuals, a 4% health and education cess, and the standard rebate thresholds used for quick planning.',
      'Always validate with the exact FY, deductions, and salary components before filing or changing your TDS plan.',
    ],
  };
}

export function calculateSip(values = {}) {
  const monthlyInvestment = clampNumber(values.monthlyInvestment);
  const annualReturnRate = clampNumber(values.annualReturnRate);
  const years = clampNumber(values.years);
  const stepUpPercent = clampNumber(values.stepUpPercent);
  const monthlyRate = annualReturnRate / 12 / 100;
  const totalMonths = Math.max(0, Math.round(years * 12));
  const stepUpRate = stepUpPercent / 100;

  let corpus = 0;
  let investedAmount = 0;
  let monthlyContribution = monthlyInvestment;

  for (let month = 1; month <= totalMonths; month += 1) {
    corpus *= 1 + monthlyRate;
    corpus += monthlyContribution;
    investedAmount += monthlyContribution;

    if (month % 12 === 0) {
      monthlyContribution *= 1 + stepUpRate;
    }
  }

  const gains = corpus - investedAmount;

  return {
    title: 'SIP Growth Estimate',
    summary: 'See how a monthly SIP can compound over time with an optional annual step-up.',
    metrics: [
      { label: 'Invested amount', value: formatCurrency(investedAmount) },
      { label: 'Estimated corpus', value: formatCurrency(corpus) },
      { label: 'Wealth created', value: formatCurrency(gains) },
      { label: 'Expected return rate', value: formatPercent(annualReturnRate) },
    ],
    explanation: [
      'The calculation compounds monthly and increases the SIP amount every 12 months if a step-up is provided.',
      'Actual mutual fund results will vary because of market volatility, expense ratios, exit loads, and taxes.',
    ],
  };
}

export function calculateMutualFundReturn(values = {}) {
  const investmentAmount = clampNumber(values.investmentAmount);
  const annualReturnRate = clampNumber(values.annualReturnRate);
  const years = clampNumber(values.years);
  const growthFactor = Math.pow(1 + annualReturnRate / 100, years);
  const futureValue = investmentAmount * growthFactor;
  const absoluteGain = futureValue - investmentAmount;
  const cagr = years > 0 ? Math.pow(futureValue / Math.max(investmentAmount, 1), 1 / years) - 1 : 0;

  return {
    title: 'Mutual Fund Return Estimate',
    summary: 'Estimate a lumpsum mutual fund outcome using a compound-growth model.',
    metrics: [
      { label: 'Investment amount', value: formatCurrency(investmentAmount) },
      { label: 'Estimated value', value: formatCurrency(futureValue) },
      { label: 'Absolute gain', value: formatCurrency(absoluteGain) },
      { label: 'Implied CAGR', value: formatPercent(cagr * 100) },
    ],
    explanation: [
      'This is a lumpsum-style projection. If you are investing monthly, use the SIP calculator instead.',
      'Taxation, exit loads, and fund expense ratios can change the realised outcome.',
    ],
  };
}

export function calculateInflation(values = {}) {
  const currentAmount = clampNumber(values.currentAmount);
  const inflationRate = clampNumber(values.inflationRate);
  const years = clampNumber(values.years);
  const futureValue = currentAmount * Math.pow(1 + inflationRate / 100, years);
  const gap = futureValue - currentAmount;

  return {
    title: 'Inflation Impact Estimate',
    summary: "Understand how rising prices change the future cost of today's amount.",
    metrics: [
      { label: 'Current amount', value: formatCurrency(currentAmount) },
      { label: 'Future cost', value: formatCurrency(futureValue) },
      { label: 'Inflation gap', value: formatCurrency(gap) },
      { label: 'Rate used', value: formatPercent(inflationRate) },
    ],
    explanation: [
      'The calculator shows what the same amount is likely to cost after compounding inflation for the selected period.',
      'Use this to plan education, healthcare, rent escalation, and retirement assumptions with a wider safety margin.',
    ],
  };
}

export const TOOLS = [
  {
    slug: 'income-tax-calculator',
    name: 'Income Tax Calculator',
    category: 'Tax planning',
    heroTitle: 'Income Tax Calculator for India',
    heroDescription: 'Estimate taxable income, compare old and new regime outcomes, and plan TDS or advance-tax decisions with a cleaner view of your numbers.',
    metaTitle: 'Income Tax Calculator India | Compare Old vs New Regime | Taxera',
    metaDescription: "Use Taxera's income tax calculator to estimate taxable income, compare old and new regime tax payable, and plan better filing decisions.",
    keywords: ['income tax calculator india', 'old regime vs new regime', 'income tax estimate', 'tax planning calculator', 'advance tax calculator'],
    calculator: {
      type: 'income-tax',
      primaryButtonLabel: 'Calculate tax',
      fields: [
        { name: 'grossAnnualIncome', label: 'Gross annual income', type: 'currency', placeholder: '1200000', help: 'Include salary, business income, or total annual income before deductions.' },
        { name: 'annualDeductions', label: 'Annual deductions', type: 'currency', placeholder: '150000', help: 'Section 80C, 80D, HRA, and other deductible items.' },
        {
          name: 'regime',
          label: 'Preferred view',
          type: 'select',
          options: [
            { label: 'Compare both regimes', value: 'compare' },
            { label: 'Old regime focus', value: 'old' },
            { label: 'New regime focus', value: 'new' },
          ],
          defaultValue: 'compare',
        },
        {
          name: 'ageCategory',
          label: 'Age category',
          type: 'select',
          options: [
            { label: 'General', value: 'general' },
            { label: 'Senior citizen', value: 'senior' },
            { label: 'Super senior citizen', value: 'super-senior' },
          ],
          defaultValue: 'general',
        },
        { name: 'standardDeduction', label: 'Standard deduction', type: 'currency', placeholder: '75000', help: 'Use the salary standard deduction that applies to your case.' },
      ],
      initialValues: {
        grossAnnualIncome: 1200000,
        annualDeductions: 150000,
        regime: 'compare',
        ageCategory: 'general',
        standardDeduction: 75000,
      },
      calculate: calculateIncomeTax,
    },
    whatItIs: [
      "A quick planning tool that estimates taxable income and the likely tax payable under India's current income-tax slab structure.",
      'It is designed to help salaried employees, founders, freelancers, and business owners compare tax outcomes before filing.',
    ],
    whoItsFor: [
      'Salaried employees comparing Form 16 deductions and the best filing regime.',
      'Freelancers and consultants who need a quick estimate before paying advance tax.',
      'Business owners who want a planning view before closing books or setting aside tax reserves.',
      'Finance teams preparing TDS or quarterly tax provisioning assumptions.',
    ],
    uses: [
      'Estimate tax payable before filing an ITR.',
      'Compare old and new regime outcomes before choosing deductions.',
      'Plan TDS deductions and quarterly advance tax provision.',
      'Set aside cash for self-assessment tax and year-end tax payments.',
    ],
    examples: [
      'A salaried employee with Rs 12 lakh gross income and Rs 1.5 lakh deductions can quickly see which regime is cheaper.',
      'A consultant can estimate whether the year-to-date income justifies a higher advance-tax provision.',
      'A founder can compare compensation packages and tax impact before choosing a payout structure.',
    ],
    recommendations: [
      'Recalculate whenever your salary, deductions, or bonus assumptions change.',
      'Treat the result as a planning estimate and confirm the final filing with the exact FY rules and your supporting records.',
      'If deductions are low, the new regime may be simpler; if they are high, the old regime may still win.',
    ],
    faqs: [
      { question: 'Does this calculator include cess and rebate?', answer: 'Yes. The estimate includes the 4% health and education cess and the common rebate thresholds used for quick planning.' },
      { question: 'Can I compare old and new regimes?', answer: 'Yes. The tool is designed to show both regimes so you can see which one produces the lower tax liability.' },
      { question: 'Is this a filing tool?', answer: 'No. It is a planning and estimation tool. You should still validate the final filing with your exact income proof and deduction documents.' },
      { question: 'Can I use this for advance tax planning?', answer: 'Yes. The monthly tax output can help you decide how much to reserve for advance tax or self-assessment tax.' },
    ],
    relatedTools: ['sip-calculator', 'mutual-fund-return-calculator', 'inflation-calculator'],
    relatedServices: [
      { label: 'Individual ITR filing', href: '/services/tax/individual-itr-salary-only' },
      { label: 'Business ITR filing', href: '/services/tax/business-itr-filing-simple' },
      { label: 'Income tax notice handling', href: '/services/notices/detailed-gst-income-tax-notice-audit-support' },
    ],
  },
  {
    slug: 'sip-calculator',
    name: 'SIP Calculator',
    category: 'Wealth planning',
    heroTitle: 'SIP Calculator for Monthly Investing',
    heroDescription: 'Estimate how a monthly SIP can grow over time, including an optional annual step-up for salary-linked investing.',
    metaTitle: 'SIP Calculator India | Monthly SIP Growth Estimate | Taxera',
    metaDescription: "Calculate SIP growth, invested amount, and wealth creation with Taxera's free SIP calculator for long-term investing planning.",
    keywords: ['sip calculator', 'sip growth calculator', 'monthly investment calculator', 'mutual fund sip', 'wealth creation calculator'],
    calculator: {
      type: 'sip',
      primaryButtonLabel: 'Calculate SIP',
      fields: [
        { name: 'monthlyInvestment', label: 'Monthly investment', type: 'currency', placeholder: '10000' },
        { name: 'annualReturnRate', label: 'Expected annual return', type: 'percent', placeholder: '12' },
        { name: 'years', label: 'Investment horizon (years)', type: 'number', placeholder: '10', step: '1', min: 1 },
        { name: 'stepUpPercent', label: 'Annual step-up', type: 'percent', placeholder: '10', help: 'Optional. Increase the SIP amount each year to match salary growth.' },
      ],
      initialValues: {
        monthlyInvestment: 10000,
        annualReturnRate: 12,
        years: 10,
        stepUpPercent: 10,
      },
      calculate: calculateSip,
    },
    whatItIs: [
      'A compounding calculator that estimates the future value of a monthly mutual fund SIP over a selected period.',
      'It helps you understand how disciplined monthly investing can grow into a larger corpus over time.',
    ],
    whoItsFor: [
      'First-time investors starting with a fixed monthly amount.',
      'Salaried professionals who want a salary-linked wealth plan.',
      'Parents planning long-term education or goal-based investments.',
      'Founders and business owners who want a simple long-term investing estimate.',
    ],
    uses: [
      'Estimate corpus at retirement, education, or home-down-payment milestones.',
      'Test how a salary-linked step-up can affect the final corpus.',
      'Compare different SIP ticket sizes before committing monthly cash flow.',
      'Build a realistic goal plan around monthly investing discipline.',
    ],
    examples: [
      'A Rs 10,000 SIP over 10 years at 12 percent return can show the power of compounding before you start investing.',
      'A new salaried employee can check how a 10 percent annual step-up improves the final corpus materially.',
    ],
    recommendations: [
      'If your salary grows regularly, test a step-up instead of keeping the SIP flat.',
      'Keep the expected return conservative when planning important goals.',
      'Use this as an allocation planning tool, then validate fund selection separately.',
    ],
    faqs: [
      { question: 'Does the SIP calculator include step-up?', answer: 'Yes. You can add an annual step-up to see how rising monthly contributions change the corpus.' },
      { question: 'Is the return guaranteed?', answer: 'No. The calculator uses an estimate based on the expected annual return you enter.' },
      { question: 'Can I use this for mutual fund goal planning?', answer: 'Yes. It is useful for long-term goals such as education, house buying, retirement, or business reserve planning.' },
    ],
    relatedTools: ['income-tax-calculator', 'mutual-fund-return-calculator', 'inflation-calculator'],
    relatedServices: [
      { label: 'Bookkeeping for small businesses', href: '/services/accounting/bookkeeping-small-business' },
      { label: 'Virtual CFO services', href: '/services/advisory/virtual-cfo-services' },
      { label: 'Basic MIS and monthly reporting', href: '/services/advisory/basic-mis-monthly-reporting' },
    ],
  },
  {
    slug: 'mutual-fund-return-calculator',
    name: 'Mutual Fund Return Calculator',
    category: 'Investment planning',
    heroTitle: 'Mutual Fund Return Calculator for Lumpsum Growth',
    heroDescription: 'Estimate how a lumpsum mutual fund investment may grow over time using a compound-growth projection.',
    metaTitle: 'Mutual Fund Return Calculator | Lumpsum Growth Estimate | Taxera',
    metaDescription: "Use Taxera's mutual fund return calculator to estimate lumpsum growth, absolute gain, and implied CAGR over your chosen horizon.",
    keywords: ['mutual fund return calculator', 'lumpsum return calculator', 'cagr calculator mutual fund', 'investment growth calculator'],
    calculator: {
      type: 'lumpsum',
      primaryButtonLabel: 'Calculate return',
      fields: [
        { name: 'investmentAmount', label: 'Investment amount', type: 'currency', placeholder: '250000' },
        { name: 'annualReturnRate', label: 'Expected annual return', type: 'percent', placeholder: '12' },
        { name: 'years', label: 'Investment horizon (years)', type: 'number', placeholder: '5', step: '1', min: 1 },
      ],
      initialValues: {
        investmentAmount: 250000,
        annualReturnRate: 12,
        years: 5,
      },
      calculate: calculateMutualFundReturn,
    },
    whatItIs: [
      'A lumpsum projection tool that estimates the future value of a mutual fund investment using compound growth.',
      'It helps investors estimate the growth of a one-time investment before allocating capital.',
    ],
    whoItsFor: [
      'Investors with a lumpsum amount ready to deploy.',
      'Founders parking surplus cash in a long-term instrument.',
      'Families planning medium-term goals with a single investment.',
      'Advisors comparing scenarios before recommending an allocation.',
    ],
    uses: [
      'Estimate future corpus from a one-time investment.',
      'Compare different return assumptions before investing.',
      'Convert investment targets into a time-based plan.',
      'Explain expected growth to clients or family members in simple terms.',
    ],
    examples: [
      'A Rs 2.5 lakh investment at 12 percent for 5 years can be compared against other savings options.',
      'A surplus business reserve can be modelled to see how much it may grow if left invested for three years.',
    ],
    recommendations: [
      'Use a conservative expected return to avoid over-planning.',
      'Pair the calculator with fund risk and category analysis before investing.',
      'Review tax treatment separately if you are comparing equity and debt funds.',
    ],
    faqs: [
      { question: 'Is this calculator for SIPs or lumpsum?', answer: 'This version is for lumpsum mutual fund growth estimates. For monthly investing, use the SIP calculator.' },
      { question: 'Does it calculate CAGR?', answer: 'Yes. It shows an implied CAGR based on the amount, horizon, and future value.' },
      { question: 'Does it account for taxes and exit loads?', answer: 'No. Those depend on the fund category, holding period, and taxpayer profile, so the calculator focuses on growth only.' },
    ],
    relatedTools: ['sip-calculator', 'income-tax-calculator', 'inflation-calculator'],
    relatedServices: [
      { label: 'Virtual CFO services', href: '/services/advisory/virtual-cfo-services' },
      { label: 'CMA data and bank loan projections', href: '/services/advisory/cma-data-bank-loan-projections' },
      { label: 'Bookkeeping for medium businesses', href: '/services/accounting/bookkeeping-medium-business' },
    ],
  },
  {
    slug: 'inflation-calculator',
    name: 'Inflation Calculator',
    category: 'Goal planning',
    heroTitle: 'Inflation Calculator for Future Cost Planning',
    heroDescription: "Estimate how today's amount may change over time as prices rise, so your future goals stay realistic.",
    metaTitle: 'Inflation Calculator India | Future Cost Estimate | Taxera',
    metaDescription: "Use Taxera's inflation calculator to estimate future costs, planning gaps, and long-term goal requirements with a simple compounding model.",
    keywords: ['inflation calculator', 'future cost calculator', 'purchasing power calculator', 'goal planning calculator'],
    calculator: {
      type: 'inflation',
      primaryButtonLabel: 'Estimate future cost',
      fields: [
        { name: 'currentAmount', label: 'Current cost / amount', type: 'currency', placeholder: '500000' },
        { name: 'inflationRate', label: 'Expected annual inflation', type: 'percent', placeholder: '6' },
        { name: 'years', label: 'Years ahead', type: 'number', placeholder: '10', step: '1', min: 1 },
      ],
      initialValues: {
        currentAmount: 500000,
        inflationRate: 6,
        years: 10,
      },
      calculate: calculateInflation,
    },
    whatItIs: [
      "A simple way to estimate how inflation changes the future cost of today's amount.",
      'It is useful for retirement, education, healthcare, rent, and business cost planning.',
    ],
    whoItsFor: [
      'Families planning future education or healthcare costs.',
      'Professionals building retirement or savings targets.',
      'Business owners forecasting overhead escalation.',
      'Advisors comparing present-day amounts with future buying power.',
    ],
    uses: [
      'Estimate future education, rent, or medical expenses.',
      'Plan how much corpus you may need for long-term goals.',
      "Translate today's budget into a realistic future budget.",
      'Understand how purchasing power changes when prices rise steadily.',
    ],
    examples: [
      'A home or education budget can be projected 10 years ahead to see the likely future expense.',
      'A business can estimate how much operating overhead may increase over a multi-year period.',
    ],
    recommendations: [
      'Use this alongside SIP and lumpsum calculators so your investment target keeps pace with inflation.',
      'Be conservative with the inflation rate if the goal is critical.',
      'Revisit the assumption each year instead of setting it once and forgetting it.',
    ],
    faqs: [
      { question: 'What does the inflation calculator show?', answer: 'It estimates how much a current amount may cost in the future after compounding inflation for the selected number of years.' },
      { question: 'Can I use it for retirement planning?', answer: 'Yes. It is useful for building realistic retirement and long-term goal estimates.' },
      { question: 'Is the result exact?', answer: 'No. It is a planning estimate. Actual inflation will vary by category, geography, and time period.' },
    ],
    relatedTools: ['sip-calculator', 'mutual-fund-return-calculator', 'income-tax-calculator'],
    relatedServices: [
      { label: 'Virtual CFO services', href: '/services/advisory/virtual-cfo-services' },
      { label: 'Basic MIS and monthly reporting', href: '/services/advisory/basic-mis-monthly-reporting' },
      { label: 'Bookkeeping for small businesses', href: '/services/accounting/bookkeeping-small-business' },
    ],
  },
];

export function getToolBySlug(slug) {
  return TOOLS.find((tool) => tool.slug === slug) || null;
}
