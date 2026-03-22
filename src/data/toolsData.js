import { ROADMAP_TOOLS_DATA } from './roadmapToolsData.js';

const serviceLink = (categoryId, serviceSlug, title, description) => ({
  categoryId,
  serviceSlug,
  title,
  description,
  href: `/services/${categoryId}/${serviceSlug}`,
});

export const TOOL_HUB_FAQS = [
  {
    question: 'Are these calculators free to use?',
    answer:
      'Yes. Every calculator in the Taxera tools section is free to use, available without signup, and designed to help visitors estimate numbers before they decide whether they need execution support.',
  },
  {
    question: 'Are these tools meant for India-specific planning?',
    answer:
      'The income tax calculator is India-focused. The SIP, mutual fund return, and inflation calculators use general finance formulas that work for Indian planning scenarios, but they do not replace investment advice or filing guidance.',
  },
  {
    question: 'Can these tools replace professional tax or compliance advice?',
    answer:
      'No. These pages are designed for estimation, education, and quick decision support. If your case involves filing, notices, capital gains, entity-level tax, reconciliations, or audits, Taxera should review the actual documents before you act.',
  },
  {
    question: 'Why build calculator pages if Taxera is primarily a service website?',
    answer:
      'Calculator pages capture high-intent search traffic from people who are already thinking about tax, returns, compliance, and money decisions. When those visitors need help beyond a simple estimate, the page can route them directly into the right service conversation.',
  },
];

export const NEXT_TOOL_IDEAS = [
  {
    title: 'GST Late Fee & Interest Calculator',
    description: 'High-intent search demand from businesses trying to estimate return filing delays and compliance cleanup cost.',
  },
  {
    title: 'HRA Exemption Calculator',
    description: 'Strong search volume from salaried users who may later need individual return filing support.',
  },
  {
    title: 'TDS Calculator',
    description: 'Useful for SMEs, deductors, and founders comparing monthly or quarterly withholding impact.',
  },
  {
    title: 'Advance Tax Calculator',
    description: 'Relevant for freelancers, professionals, and businesses trying to estimate instalments before due dates.',
  },
  {
    title: 'Gratuity Calculator',
    description: 'Natural fit for payroll-related search traffic and HR compliance intent.',
  },
  {
    title: 'EMI Calculator',
    description: 'Broad traffic opportunity that can support internal linking into finance, bookkeeping, and CFO advisory pages.',
  },
  {
    title: 'Break-Even Calculator',
    description: 'Attracts founders and operators who are closer to business planning and service conversion intent.',
  },
  {
    title: 'GST Composition vs Regular Scheme Checker',
    description: 'A high-value decision tool that can directly convert into registration and GST advisory enquiries.',
  },
];

export const TOOLS_DATA = [
  {
    slug: 'income-tax-calculator',
    shortName: 'Income Tax',
    name: 'Income Tax Calculator India',
    category: 'Tax Planning',
    badge: 'Free tax tool',
    hubLabel: 'Income Tax Calculator',
    hubDescription:
      'Estimate income tax for FY 2025-26, compare old vs new regime, and understand how deductions change your outflow.',
    metaTitle: 'Income Tax Calculator India for FY 2025-26 | Old vs New Regime | Taxera',
    metaDescription:
      'Use Taxera’s free income tax calculator for India to compare old vs new regime for FY 2025-26, estimate tax, and understand deductions, rebate, cess, and next steps.',
    keywords: [
      'income tax calculator india',
      'old vs new regime calculator',
      'income tax calculator fy 2025-26',
      'salary tax calculator india',
      'tax calculator india free',
      'section 80c tax calculator',
    ],
    heroTitle: 'Income Tax Calculator India for FY 2025-26',
    heroDescription:
      'Estimate your income tax under the old and new regime in one place. This calculator is structured for India-focused salary and deduction planning so visitors can get clarity before filing, revising payroll declarations, or booking professional help.',
    highlights: [
      'Compares old and new regime in the same view',
      'Lets users account for salary, other income, Section 80C, 80D, home-loan interest, HRA, and employer NPS',
      'Useful for salaried taxpayers, founders drawing salary, and people planning before return filing',
    ],
    calculator: {
      title: 'Calculate your estimated income tax',
      description:
        'Enter annual income and deduction assumptions to estimate tax under both regimes. This is an estimate for planning and comparison, not a filing-grade computation.',
      note:
        'Assumptions use the FY 2025-26 / AY 2026-27 new-regime slab structure and simplified deduction handling. Capital gains, special-rate income, and edge-case rebate rules are not modelled.',
      defaultValues: {
        annualSalaryIncome: '1200000',
        annualOtherIncome: '0',
        deductions80C: '150000',
        deductions80D: '25000',
        homeLoanInterest: '0',
        hraExemption: '0',
        otherOldRegimeDeductions: '0',
        employerNpsContribution: '0',
        ageGroup: 'adult',
      },
      fields: [
        {
          name: 'annualSalaryIncome',
          label: 'Annual salary income',
          type: 'number',
          placeholder: '1200000',
          min: 0,
          step: 1000,
          helper: 'Enter gross annual salary before standard deduction.',
        },
        {
          name: 'annualOtherIncome',
          label: 'Other taxable income',
          type: 'number',
          placeholder: '0',
          min: 0,
          step: 1000,
          helper: 'Add interest income, freelance income, or other taxable income you want to include.',
        },
        {
          name: 'deductions80C',
          label: 'Section 80C deduction',
          type: 'number',
          placeholder: '150000',
          min: 0,
          step: 1000,
          helper: 'Example: EPF, PPF, ELSS, tuition fees, life insurance. Capped at ₹1.5 lakh.',
        },
        {
          name: 'deductions80D',
          label: 'Section 80D deduction',
          type: 'number',
          placeholder: '25000',
          min: 0,
          step: 1000,
          helper: 'Medical insurance deduction. Limit varies by age band.',
        },
        {
          name: 'homeLoanInterest',
          label: 'Home-loan interest (old regime)',
          type: 'number',
          placeholder: '0',
          min: 0,
          step: 1000,
          helper: 'Self-occupied property interest is capped at ₹2 lakh in this estimate.',
        },
        {
          name: 'hraExemption',
          label: 'HRA exemption (old regime)',
          type: 'number',
          placeholder: '0',
          min: 0,
          step: 1000,
          helper: 'Use the exempt portion if you already know the eligible amount.',
        },
        {
          name: 'otherOldRegimeDeductions',
          label: 'Other deductions under old regime',
          type: 'number',
          placeholder: '0',
          min: 0,
          step: 1000,
          helper: 'Use this for additional eligible deductions not separately shown above.',
        },
        {
          name: 'employerNpsContribution',
          label: 'Employer NPS contribution (new regime)',
          type: 'number',
          placeholder: '0',
          min: 0,
          step: 1000,
          helper: 'Add only the employer contribution portion you want to count in the estimate.',
        },
        {
          name: 'ageGroup',
          label: 'Age group',
          type: 'select',
          options: [
            { label: 'Below 60 years', value: 'adult' },
            { label: '60 to 79 years', value: 'senior' },
            { label: '80 years or above', value: 'superSenior' },
          ],
          helper: 'Age group affects old-regime slabs used in this estimate.',
        },
      ],
    },
    overview: {
      title: 'What this tool is',
      paragraphs: [
        'This income tax calculator is a planning tool that estimates how much tax a user may pay under the old and new regime based on annual salary, other taxable income, and a set of common deductions.',
        'The page is designed for visitors who want quick clarity before they file, decide payroll declarations, evaluate deductions, or speak to a tax professional. It is especially useful when a taxpayer knows the broad numbers but wants a directionally correct comparison first.',
      ],
    },
    whoItsFor: {
      title: 'Who this income tax calculator is for',
      items: [
        'Salaried individuals comparing old vs new regime before return filing or payroll declaration submission.',
        'Founders, directors, and professionals drawing salary who want a quick estimate before speaking to an advisor.',
        'People with home-loan interest, insurance deductions, or Section 80C investments who need a regime comparison.',
        'Visitors searching for a free India income tax calculator and likely to need filing or notice support afterwards.',
      ],
    },
    uses: {
      title: 'Where this calculator helps',
      items: [
        'Comparing tax outflow between the old and new regime for the same annual income.',
        'Understanding whether deductions are enough to make the old regime more attractive.',
        'Estimating likely tax before annual proof submission, salary structuring, or return filing.',
        'Starting a higher-intent conversation with Taxera when the user needs filing, rectification, or notice handling support.',
      ],
    },
    howToUse: {
      title: 'How to use this income tax calculator',
      steps: [
        { title: 'Enter annual salary', description: 'Start with total salary income before standard deduction.' },
        { title: 'Add other taxable income', description: 'Include interest, side income, or any additional taxable amount you want to compare.' },
        { title: 'Fill in deductions', description: 'Use Section 80C, 80D, home-loan interest, HRA exemption, and any additional old-regime deductions where relevant.' },
        { title: 'Review both regimes', description: 'Compare the total tax, taxable income, rebate, cess, and estimated savings side by side.' },
      ],
    },
    examples: {
      title: 'Examples',
      items: [
        {
          title: 'Salaried employee with moderate deductions',
          summary: 'A salaried user earning ₹12 lakh with ₹1.5 lakh under Section 80C and ₹25,000 under 80D can use this page to see whether deductions are enough to justify the old regime.',
          outcome: 'The side-by-side output helps the user see which regime results in the lower total tax and how much the difference is.',
        },
        {
          title: 'High-income employee with low deductions',
          summary: 'A user earning ₹18 lakh with minimal deductions can quickly see how the newer slab structure impacts tax even without old-regime optimisation.',
          outcome: 'This is useful before payroll declaration changes or before booking filing support for a more detailed review.',
        },
      ],
    },
    recommendations: {
      title: 'Recommendations before you rely on the result',
      items: [
        'Use the calculator for quick comparison, then validate final numbers before filing if capital gains, arrears, foreign income, or exempt allowances are involved.',
        'Do not assume the lowest-regime estimate automatically means the best filing outcome if your deductions, exemptions, or special-rate income are more complex.',
        'If you received a notice, refund mismatch, or AIS/TIS discrepancy, this calculator is only the first step. Document review matters more than an estimate.',
        'If the result is close between regimes, a professional review is usually worth it because filing choices, documentation quality, and classification errors can change the real outcome.',
      ],
    },
    resultExplainer: {
      title: 'What the result means',
      paragraphs: [
        'The calculator shows estimated taxable income, tax before rebate, rebate impact, surcharge where relevant, health and education cess, and total tax under each regime.',
        'The recommendation highlights the lower estimated regime in this simplified model. It is a planning signal, not a legal conclusion. Filing decisions should still be based on actual documents and a full review where needed.',
      ],
    },
    faqs: [
      {
        question: 'Does this calculator work for both old and new regime?',
        answer:
          'Yes. The page estimates tax under both regimes and highlights the lower estimated outflow based on the numbers entered.',
      },
      {
        question: 'Does this include rebate, cess, and surcharge?',
        answer:
          'Yes, the estimate includes rebate handling in the simplified model, health and education cess, and surcharge logic for higher income bands. It does not cover every exception or special-rate case.',
      },
      {
        question: 'Can I use this calculator for filing my return directly?',
        answer:
          'No. This is designed for estimation and comparison. Use it to understand directionally where you stand, then rely on complete document review before filing.',
      },
      {
        question: 'When should I contact Taxera after using this tool?',
        answer:
          'You should reach out when you have multiple income heads, notices, refund issues, business income, capital gains, cross-border elements, or when the regime choice is not obvious from the estimate.',
      },
    ],
    relatedTools: ['sip-calculator', 'mutual-fund-return-calculator', 'inflation-calculator'],
    relatedServices: [
      serviceLink(
        'tax',
        'individual-itr-salary-only',
        'Individual ITR Filing (Salary Only)',
        'For salaried taxpayers who need clean, compliant filing after estimating tax.'
      ),
      serviceLink(
        'tax',
        'individual-itr-business-capital-gains',
        'ITR Filing for Business or Capital Gains',
        'For users whose tax situation is beyond a simple salary estimate.'
      ),
      serviceLink(
        'notices',
        'income-tax-refund-follow-up-rectification',
        'Income Tax Refund Follow-up & Rectification',
        'Useful if the estimate is fine but your actual processing, refund, or rectification has stalled.'
      ),
    ],
    cta: {
      title: 'Need help after estimating your tax?',
      description:
        'Taxera can review your actual income, deductions, notices, refund position, and filing route so you move from estimate to execution with fewer mistakes.',
      topic: 'income tax planning, filing, or rectification',
    },
  },
  {
    slug: 'sip-calculator',
    shortName: 'SIP',
    name: 'SIP Calculator',
    category: 'Investment Planning',
    badge: 'Free investment tool',
    hubLabel: 'SIP Calculator',
    hubDescription:
      'Estimate future SIP corpus, invested amount, gains, and wealth multiple using monthly contributions, expected return, and duration.',
    metaTitle: 'SIP Calculator for Monthly Investment Planning | Taxera',
    metaDescription:
      'Use Taxera’s free SIP calculator to project future value, invested amount, gains, and wealth multiple for monthly mutual fund SIPs.',
    keywords: [
      'sip calculator',
      'monthly investment calculator',
      'sip return calculator',
      'sip future value calculator',
      'mutual fund sip calculator india',
      'step up sip calculator',
    ],
    heroTitle: 'SIP Calculator for Monthly Investment Planning',
    heroDescription:
      'This SIP calculator helps visitors estimate how regular monthly investing can compound over time. It is designed for users who want a fast future-value projection without opening a spreadsheet first.',
    highlights: [
      'Projects corpus using monthly SIP amount, expected annual return, and time horizon',
      'Supports annual step-up for people increasing SIPs as income grows',
      'Useful for comparing savings discipline against long-term goals such as education, house down payment, or retirement',
    ],
    calculator: {
      title: 'Estimate your SIP corpus',
      description:
        'Enter the monthly SIP amount, expected annual return, investment duration, and optional annual step-up to see how the corpus may grow.',
      note:
        'This calculator uses a compounding projection. It does not model taxes, expense ratios, market volatility, or specific scheme performance.',
      defaultValues: {
        monthlyInvestment: '10000',
        expectedAnnualReturn: '12',
        durationYears: '15',
        stepUpPercent: '0',
      },
      fields: [
        {
          name: 'monthlyInvestment',
          label: 'Monthly SIP amount',
          type: 'number',
          placeholder: '10000',
          min: 0,
          step: 500,
          helper: 'Enter the amount invested every month.',
        },
        {
          name: 'expectedAnnualReturn',
          label: 'Expected annual return (%)',
          type: 'number',
          placeholder: '12',
          min: 0,
          max: 100,
          step: 0.1,
          helper: 'Use a reasonable return assumption instead of an aggressive best-case number.',
        },
        {
          name: 'durationYears',
          label: 'Investment duration (years)',
          type: 'number',
          placeholder: '15',
          min: 0,
          max: 50,
          step: 1,
          helper: 'Longer duration usually has a bigger impact than chasing unrealistic returns.',
        },
        {
          name: 'stepUpPercent',
          label: 'Annual SIP step-up (%)',
          type: 'number',
          placeholder: '0',
          min: 0,
          max: 100,
          step: 0.5,
          helper: 'Optional. Use this if you plan to increase your SIP every year.',
        },
      ],
    },
    overview: {
      title: 'What this tool is',
      paragraphs: [
        'This SIP calculator estimates the future value of a monthly investment plan using a fixed annual return assumption and a chosen time horizon.',
        'The output helps users understand the relationship between contribution size, investing duration, step-up discipline, and expected wealth creation. It is useful for educational planning, broad financial planning, and high-intent organic search capture.',
      ],
    },
    whoItsFor: {
      title: 'Who this SIP calculator is for',
      items: [
        'First-time investors trying to understand how monthly investing compounds over time.',
        'Young professionals or founders building long-term wealth outside fixed deposits.',
        'Parents planning future goals such as education funding.',
        'Users comparing whether increasing the SIP amount or extending the time horizon has a bigger effect.',
      ],
    },
    uses: {
      title: 'Where this calculator helps',
      items: [
        'Projecting future corpus for a monthly mutual fund SIP.',
        'Testing how annual step-up changes the final amount.',
        'Comparing different return assumptions before selecting an investment strategy.',
        'Creating an educational entry point into broader finance and advisory discussions.',
      ],
    },
    howToUse: {
      title: 'How to use this SIP calculator',
      steps: [
        { title: 'Enter the monthly SIP amount', description: 'Start with the amount you can actually invest consistently every month.' },
        { title: 'Set a return assumption', description: 'Use a realistic annual return rather than the highest possible market scenario.' },
        { title: 'Choose the time horizon', description: 'Add the number of years you expect to stay invested.' },
        { title: 'Optional: add a step-up', description: 'If your income is likely to grow, include an annual step-up to see the long-term effect.' },
      ],
    },
    examples: {
      title: 'Examples',
      items: [
        {
          title: 'Base SIP projection',
          summary: 'A user investing ₹10,000 every month for 15 years can see the likely invested amount, estimated corpus, and gains at a chosen return assumption.',
          outcome: 'This makes it easier to compare whether the goal needs a higher SIP, more time, or both.',
        },
        {
          title: 'Step-up SIP comparison',
          summary: 'A professional who increases the SIP by 10% every year can estimate whether the added discipline meaningfully changes the final corpus.',
          outcome: 'This is especially useful for users planning to align investing with salary growth.',
        },
      ],
    },
    recommendations: {
      title: 'Recommendations before you rely on the result',
      items: [
        'Do not treat the projected return as guaranteed. Real market performance is uneven and can differ from a simple compounding assumption.',
        'A step-up SIP often improves corpus more sustainably than forcing an unrealistic return number in the calculator.',
        'Use the result for planning, not scheme selection. Fund choice requires risk, time horizon, and portfolio-fit analysis.',
        'If this calculator is part of a founder’s personal or business-linked planning, Taxera’s CFO and advisory support can help translate the projection into cash-flow decisions.',
      ],
    },
    resultExplainer: {
      title: 'What the result means',
      paragraphs: [
        'The result shows how much was invested, the projected future value, the estimated gain, and the wealth multiple based on your assumptions.',
        'The yearly snapshot table gives a clearer sense of how compounding accelerates over time and why duration matters so much in SIP planning.',
      ],
    },
    faqs: [
      {
        question: 'Does this SIP calculator guarantee returns?',
        answer:
          'No. It is a projection tool based on a fixed return assumption. Market-linked investments do not generate guaranteed outcomes.',
      },
      {
        question: 'What is a good return assumption for SIP planning?',
        answer:
          'That depends on the asset mix and the goal horizon. Use a conservative, realistic assumption when planning instead of a best-case estimate.',
      },
      {
        question: 'What does SIP step-up mean in this calculator?',
        answer:
          'Step-up means the monthly SIP amount increases every year by a selected percentage. It is a useful way to model higher contributions as income grows.',
      },
      {
        question: 'How can this tool help Taxera convert visitors into services?',
        answer:
          'Visitors who use the calculator are already thinking about money planning, cash flow, and long-term financial discipline. Those users can be routed into CFO, bookkeeping, or tax advisory conversations when planning needs become operational.',
      },
    ],
    relatedTools: ['mutual-fund-return-calculator', 'inflation-calculator', 'income-tax-calculator'],
    relatedServices: [
      serviceLink(
        'advisory',
        'virtual-cfo-services',
        'Virtual CFO Services',
        'For founders who need investment thinking tied back to cash flow, runway, or promoter planning.'
      ),
      serviceLink(
        'advisory',
        'basic-mis-monthly-reporting',
        'Basic MIS & Monthly Reporting',
        'Useful when long-term planning needs to sit on top of better monthly visibility.'
      ),
      serviceLink(
        'accounting',
        'bookkeeping-small-business',
        'Bookkeeping for Small Businesses',
        'Relevant for business owners who need cleaner numbers before making financial decisions.'
      ),
    ],
    cta: {
      title: 'Need help turning projections into a real financial plan?',
      description:
        'Taxera can help founders and business owners connect investing, cash flow, taxation, and reporting so decisions are not made in isolation.',
      topic: 'financial planning and advisory support',
    },
  },
  {
    slug: 'mutual-fund-return-calculator',
    shortName: 'Mutual Fund Return',
    name: 'Mutual Fund Return Calculator',
    category: 'Investment Review',
    badge: 'Free return tool',
    hubLabel: 'Mutual Fund Return Calculator',
    hubDescription:
      'Measure absolute gain, absolute return, CAGR, and wealth multiple on a lumpsum investment based on invested value and current value.',
    metaTitle: 'Mutual Fund Return Calculator | CAGR and Absolute Return | Taxera',
    metaDescription:
      'Use Taxera’s free mutual fund return calculator to estimate absolute gain, absolute return, CAGR, and wealth multiple on a lumpsum investment.',
    keywords: [
      'mutual fund return calculator',
      'cagr calculator mutual fund',
      'lumpsum return calculator',
      'absolute return calculator',
      'mutual fund cagr calculator',
      'investment return calculator',
    ],
    heroTitle: 'Mutual Fund Return Calculator for CAGR and Absolute Return',
    heroDescription:
      'This mutual fund return calculator helps users understand how a lumpsum investment has performed by comparing invested value, current value, and holding period.',
    highlights: [
      'Shows absolute gain, absolute return percentage, CAGR, and wealth multiple',
      'Useful for reviewing whether an investment has actually compounded well over time',
      'A strong organic-entry page for users searching around fund returns and portfolio performance',
    ],
    calculator: {
      title: 'Check your investment return',
      description:
        'Enter the original amount invested, current value, and holding period to estimate gain, absolute return, CAGR, and wealth multiple.',
      note:
        'This tool is best for simple lumpsum return analysis. It does not calculate IRR for multiple cash flows or account for exit load and taxation.',
      defaultValues: {
        investedAmount: '500000',
        currentValue: '760000',
        durationYears: '4',
      },
      fields: [
        {
          name: 'investedAmount',
          label: 'Invested amount',
          type: 'number',
          placeholder: '500000',
          min: 0,
          step: 1000,
          helper: 'Enter the original lumpsum investment amount.',
        },
        {
          name: 'currentValue',
          label: 'Current value',
          type: 'number',
          placeholder: '760000',
          min: 0,
          step: 1000,
          helper: 'Use the latest market value you want to compare against the original amount.',
        },
        {
          name: 'durationYears',
          label: 'Holding period (years)',
          type: 'number',
          placeholder: '4',
          min: 0,
          max: 100,
          step: 0.1,
          helper: 'The holding period helps convert overall growth into CAGR.',
        },
      ],
    },
    overview: {
      title: 'What this tool is',
      paragraphs: [
        'This mutual fund return calculator is designed for lumpsum investments where a visitor knows the invested amount, the current value, and the approximate holding period.',
        'It answers a common search intent clearly: how much did the investment grow, what is the absolute return, and what is the implied CAGR. That makes it useful both for users and for SEO-led traffic acquisition.',
      ],
    },
    whoItsFor: {
      title: 'Who this return calculator is for',
      items: [
        'Investors reviewing past lumpsum mutual fund investments.',
        'Users comparing whether a fund’s performance has been worth the holding period.',
        'Professionals preparing to rebalance or exit and wanting a simple return checkpoint.',
        'Visitors who search for CAGR and return calculations before moving into deeper finance or tax decisions.',
      ],
    },
    uses: {
      title: 'Where this calculator helps',
      items: [
        'Turning a raw invested-vs-current-value comparison into a clearer performance view.',
        'Understanding the difference between absolute return and annualised return.',
        'Evaluating whether a holding period justifies the current performance.',
        'Creating a bridge into capital-gains-aware tax filing or financial planning conversations.',
      ],
    },
    howToUse: {
      title: 'How to use this mutual fund return calculator',
      steps: [
        { title: 'Enter the original investment', description: 'Add the lumpsum amount you initially invested.' },
        { title: 'Enter the latest value', description: 'Use the current market value or redemption value you want to analyse.' },
        { title: 'Add the holding period', description: 'The duration helps estimate CAGR instead of just absolute growth.' },
        { title: 'Review the output', description: 'Look at absolute gain, return percentage, CAGR, and wealth multiple together.' },
      ],
    },
    examples: {
      title: 'Examples',
      items: [
        {
          title: 'Lumpsum investment review',
          summary: 'A user invested ₹5 lakh and now holds units worth ₹7.6 lakh after four years. The calculator shows gain, overall return, and annualised CAGR in a single view.',
          outcome: 'That makes it easier to compare the investment against alternatives or against personal expectations.',
        },
        {
          title: 'Portfolio checkpoint before tax filing',
          summary: 'A visitor preparing for redemption can use this tool to understand growth before moving into a capital-gains-aware filing conversation.',
          outcome: 'The page gives clarity quickly, then routes the user toward the right next service when simple return math is no longer enough.',
        },
      ],
    },
    recommendations: {
      title: 'Recommendations before you rely on the result',
      items: [
        'Use CAGR to compare performance across different holding periods more fairly than absolute return alone.',
        'If you invested multiple times rather than once, this lumpsum calculator is not the right IRR/XIRR model.',
        'Do not make redemption decisions on return numbers alone; taxation, asset allocation, and goal timing also matter.',
        'If a redemption will trigger tax impact, use the estimate as a first step and then get filing support for the actual reporting requirement.',
      ],
    },
    resultExplainer: {
      title: 'What the result means',
      paragraphs: [
        'Absolute gain shows how many rupees the investment is up or down. Absolute return shows that gain as a percentage of the original investment.',
        'CAGR converts the growth into an annualised rate over the full holding period. The wealth multiple shows how many times the original amount the investment has become.',
      ],
    },
    faqs: [
      {
        question: 'What is the difference between absolute return and CAGR?',
        answer:
          'Absolute return measures total growth over the full period. CAGR annualises that growth so returns can be compared across different time periods.',
      },
      {
        question: 'Can I use this for SIPs as well?',
        answer:
          'No. This page is designed for lumpsum investments. SIPs involve multiple cash flows and should be modelled separately.',
      },
      {
        question: 'Does this calculator include tax on gains?',
        answer:
          'No. It focuses on investment performance. Taxation depends on asset type, holding period, and actual realised gain at redemption.',
      },
      {
        question: 'When should I move from this tool to a professional service?',
        answer:
          'Move to professional help when the return connects to redemption planning, capital gains, entity-level accounting, or financial reporting decisions that need more than a simple performance estimate.',
      },
    ],
    relatedTools: ['sip-calculator', 'inflation-calculator', 'income-tax-calculator'],
    relatedServices: [
      serviceLink(
        'tax',
        'individual-itr-business-capital-gains',
        'ITR Filing for Business / Capital Gains',
        'For users whose investment exit decisions will affect capital gains reporting.'
      ),
      serviceLink(
        'advisory',
        'virtual-cfo-services',
        'Virtual CFO Services',
        'Useful when investment performance needs to be viewed alongside broader financial strategy.'
      ),
      serviceLink(
        'accounting',
        'expert-accounting-cleanup-hourly',
        'Expert Accounting Cleanup Support',
        'Relevant when owner-level and business-level investment records need cleanup before reporting.',
      ),
    ],
    cta: {
      title: 'Need help beyond simple return math?',
      description:
        'Taxera can help when your investment return decisions spill into capital gains, reporting, accounting cleanup, or broader finance planning.',
      topic: 'capital gains and finance advisory support',
    },
  },
  {
    slug: 'inflation-calculator',
    shortName: 'Inflation',
    name: 'Inflation Calculator',
    category: 'Financial Planning',
    badge: 'Free planning tool',
    hubLabel: 'Inflation Calculator',
    hubDescription:
      'Estimate future cost, purchasing-power loss, and present value using a compounding inflation rate and time horizon.',
    metaTitle: 'Inflation Calculator for Future Cost Planning | Taxera',
    metaDescription:
      'Use Taxera’s free inflation calculator to estimate future cost, purchasing-power loss, and present value over a chosen time horizon.',
    keywords: [
      'inflation calculator',
      'future value inflation calculator',
      'purchasing power calculator',
      'future cost calculator',
      'inflation adjusted value calculator',
      'present value inflation calculator',
    ],
    heroTitle: 'Inflation Calculator for Future Cost Planning',
    heroDescription:
      'This inflation calculator helps visitors understand how today’s expenses can grow over time and how much purchasing power declines when inflation compounds.',
    highlights: [
      'Projects future cost based on current amount, inflation rate, and time horizon',
      'Shows purchasing-power erosion in a simple, readable way',
      'Useful for budgeting, goal planning, pricing decisions, and finance education content',
    ],
    calculator: {
      title: 'Estimate the impact of inflation',
      description:
        'Enter today’s amount, expected inflation, and the number of years to see future cost, cumulative inflation, and loss of purchasing power.',
      note:
        'This is a fixed-rate inflation model. It is useful for planning but does not capture volatile year-by-year inflation patterns.',
      defaultValues: {
        amount: '100000',
        inflationRate: '6',
        years: '10',
        futureGoalAmount: '',
      },
      fields: [
        {
          name: 'amount',
          label: 'Current amount',
          type: 'number',
          placeholder: '100000',
          min: 0,
          step: 1000,
          helper: 'Enter the current value of the expense, goal, or budget item.',
        },
        {
          name: 'inflationRate',
          label: 'Expected inflation rate (%)',
          type: 'number',
          placeholder: '6',
          min: 0,
          max: 100,
          step: 0.1,
          helper: 'Use the annual inflation assumption you want to test.',
        },
        {
          name: 'years',
          label: 'Time horizon (years)',
          type: 'number',
          placeholder: '10',
          min: 0,
          max: 100,
          step: 1,
          helper: 'Longer time horizons typically show a much sharper erosion in purchasing power.',
        },
        {
          name: 'futureGoalAmount',
          label: 'Optional future goal amount',
          type: 'number',
          placeholder: '0',
          min: 0,
          step: 1000,
          helper: 'Optional. Use this to estimate the present value of a future amount.',
        },
      ],
    },
    overview: {
      title: 'What this tool is',
      paragraphs: [
        'This inflation calculator estimates what a present-day amount may cost in the future after compounding inflation for a chosen number of years.',
        'It is a simple but powerful planning page because it makes an abstract concept visible. Users immediately see why budgets, savings goals, salaries, and pricing assumptions need more than flat numbers.',
      ],
    },
    whoItsFor: {
      title: 'Who this inflation calculator is for',
      items: [
        'Individuals planning long-term financial goals and trying to understand future cost inflation.',
        'Parents budgeting for education or lifestyle goals several years ahead.',
        'Founders and business owners evaluating future operating cost assumptions.',
        'Search users looking for a quick future-cost projection before seeking deeper financial guidance.',
      ],
    },
    uses: {
      title: 'Where this calculator helps',
      items: [
        'Estimating what today’s expense may cost after 5, 10, or 20 years.',
        'Understanding how purchasing power declines over time.',
        'Testing whether savings and investment goals are large enough once inflation is factored in.',
        'Helping founders and planners think more realistically about future costs, budgets, or salary expectations.',
      ],
    },
    howToUse: {
      title: 'How to use this inflation calculator',
      steps: [
        { title: 'Enter the current amount', description: 'Use the present-day cost of the expense or goal you want to model.' },
        { title: 'Choose an inflation rate', description: 'Add the annual inflation assumption you want to test.' },
        { title: 'Set the time horizon', description: 'Add the number of years over which inflation will compound.' },
        { title: 'Review future cost and purchasing-power loss', description: 'Use the result to judge whether your current savings or pricing assumptions are realistic.' },
      ],
    },
    examples: {
      title: 'Examples',
      items: [
        {
          title: 'Education planning',
          summary: 'A family estimating what a current annual education expense of ₹1 lakh may cost after ten years can use this tool to model the likely future burden.',
          outcome: 'That gives a clearer target for saving or investing today.',
        },
        {
          title: 'Business cost planning',
          summary: 'A founder estimating how a current recurring cost may rise over several years can use the result to pressure-test longer-term planning assumptions.',
          outcome: 'This makes the calculator useful for both personal planning and financially aware business operators.',
        },
      ],
    },
    recommendations: {
      title: 'Recommendations before you rely on the result',
      items: [
        'Use multiple inflation assumptions when planning long-term goals instead of relying on a single optimistic number.',
        'Remember that some costs, such as education or healthcare, may inflate faster than general inflation.',
        'If a goal is important, pair inflation planning with a savings or investment projection rather than viewing future cost in isolation.',
        'For founders, use inflation thinking alongside cash-flow visibility and reporting quality so planning is tied to actual business capacity.',
      ],
    },
    resultExplainer: {
      title: 'What the result means',
      paragraphs: [
        'Future cost shows how much the present amount may grow to after inflation compounds for the selected number of years.',
        'Purchasing-power loss shows how much more money may be needed in the future to buy what the same amount can buy today. If a future goal amount was entered, the tool also estimates its present value.',
      ],
    },
    faqs: [
      {
        question: 'What is a good inflation rate to use in this calculator?',
        answer:
          'That depends on the category of expense and the time horizon. Many users compare multiple rates to see a range of outcomes rather than relying on one number.',
      },
      {
        question: 'Does this calculator predict actual inflation?',
        answer:
          'No. It applies a fixed annual inflation assumption to help with planning. Real inflation moves unevenly over time.',
      },
      {
        question: 'Why is inflation important for financial planning?',
        answer:
          'Because a goal amount that looks sufficient today may be far too small in the future if inflation is ignored.',
      },
      {
        question: 'How does this page help convert visitors into services?',
        answer:
          'It attracts users thinking seriously about future money needs. Those users often move naturally into bookkeeping, MIS, or CFO conversations once planning becomes operational or business-linked.',
      },
    ],
    relatedTools: ['sip-calculator', 'mutual-fund-return-calculator', 'income-tax-calculator'],
    relatedServices: [
      serviceLink(
        'advisory',
        'virtual-cfo-services',
        'Virtual CFO Services',
        'For founders who need inflation-aware planning linked to financial decision-making.'
      ),
      serviceLink(
        'advisory',
        'cma-data-bank-loan-projections',
        'CMA Data & Bank Loan Projections',
        'Useful when future cost assumptions need to be turned into a financing-ready projection model.'
      ),
      serviceLink(
        'accounting',
        'bookkeeping-medium-business',
        'Bookkeeping for Medium Businesses',
        'Relevant when planning quality depends on having clean operating numbers first.',
      ),
    ],
    cta: {
      title: 'Need help turning future-cost assumptions into a working plan?',
      description:
        'Taxera helps founders and growing teams connect budgets, projections, reporting, and decision-making so inflation is not ignored in strategy.',
      topic: 'budgeting, projections, and financial planning',
    },
  },
  ...ROADMAP_TOOLS_DATA,
];

export const TOOLS_BY_SLUG = Object.fromEntries(TOOLS_DATA.map((tool) => [tool.slug, tool]));

export function getToolBySlug(slug) {
  return TOOLS_BY_SLUG[slug] ?? null;
}
