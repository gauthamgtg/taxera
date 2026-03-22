const serviceLink = (categoryId, serviceSlug, title, description) => ({
  categoryId,
  serviceSlug,
  title,
  description,
  href: `/services/${categoryId}/${serviceSlug}`,
});

export const ROADMAP_TOOLS_DATA = [
  {
    slug: 'gst-late-fee-interest-calculator',
    shortName: 'GST Delay',
    name: 'GST Late Fee & Interest Calculator',
    category: 'GST Compliance',
    badge: 'Free GST tool',
    hubLabel: 'GST Late Fee & Interest Calculator',
    hubDescription: 'Estimate GST late fee, interest, and total outflow for delayed return filing in one quick view.',
    metaTitle: 'GST Late Fee & Interest Calculator | Taxera',
    metaDescription: 'Use Taxera’s free GST late fee and interest calculator to estimate return-filing delay cost before you clear pending compliance.',
    keywords: ['gst late fee calculator', 'gst interest calculator', 'gstr 3b late fee', 'gst delay cost calculator'],
    heroTitle: 'GST Late Fee & Interest Calculator',
    heroDescription: 'Estimate the likely cost of delayed GST return filing before you move into reconciliation, filing cleanup, or notice response.',
    highlights: [
      'Shows daily late-fee impact and interest in the same result',
      'Useful for pending GSTR-3B or GSTR-1 clean-up decisions',
      'Helps businesses understand delay cost before filing catches up',
    ],
    calculator: {
      title: 'Estimate GST delay cost',
      description: 'Enter tax payable, delay period, and whether the return was nil to estimate late fee and interest.',
      note: 'This is a planning estimate. Actual portal computation can vary with return type, nil-return status, and prior-period compliance history.',
      defaultValues: {
        taxAmount: '50000',
        daysDelayed: '30',
        returnType: 'gstr3b',
        isNilReturn: 'no',
      },
      fields: [
        { name: 'taxAmount', label: 'Overdue tax amount', type: 'number', placeholder: '50000', min: 0, step: 1000, helper: 'Use the tax amount that remained unpaid for the delayed period.' },
        { name: 'daysDelayed', label: 'Days delayed', type: 'number', placeholder: '30', min: 0, max: 3650, step: 1, helper: 'Enter the approximate delay from the due date.' },
        {
          name: 'returnType',
          label: 'Return type',
          type: 'select',
          options: [
            { label: 'GSTR-3B', value: 'gstr3b' },
            { label: 'GSTR-1', value: 'gstr1' },
          ],
          helper: 'Use the return type you are trying to clear.',
        },
        {
          name: 'isNilReturn',
          label: 'Nil return?',
          type: 'select',
          options: [
            { label: 'No', value: 'no' },
            { label: 'Yes', value: 'yes' },
          ],
          helper: 'Nil returns usually follow a lower daily late-fee rule.',
        },
      ],
    },
    overview: {
      title: 'What this tool is',
      paragraphs: [
        'This calculator gives businesses a quick sense of the likely cost of delayed GST filing by combining daily late fee with interest on overdue tax.',
        'It is useful when someone already knows they are behind and wants to quantify the damage before deciding whether to clear the backlog alone or bring in help.',
      ],
    },
    whoItsFor: {
      title: 'Who this calculator is for',
      items: [
        'Businesses catching up on overdue GST returns.',
        'Founders trying to understand the financial impact of filing delays.',
        'Accounts teams estimating clean-up cost before portal filing.',
        'Users comparing whether nil-return treatment changes their exposure meaningfully.',
      ],
    },
    uses: {
      title: 'Where this calculator helps',
      items: [
        'Estimating delayed filing cost before initiating compliance cleanup.',
        'Creating a quicker internal approval path for overdue GST filing.',
        'Understanding whether tax interest or late fee is the bigger component.',
        'Starting a more informed conversation about GST filing support.',
      ],
    },
    howToUse: {
      title: 'How to use this GST calculator',
      steps: [
        { title: 'Enter overdue tax amount', description: 'Use the tax that remained unpaid for the delayed return.' },
        { title: 'Add delay period', description: 'Estimate the number of delayed days from the original due date.' },
        { title: 'Select return context', description: 'Choose the return type and whether the return is nil.' },
        { title: 'Review late fee and interest', description: 'Use the result to plan filing and cleanup action.' },
      ],
    },
    examples: {
      title: 'Examples',
      items: [
        {
          title: 'Standard delayed GST return',
          summary: 'A business with overdue tax and a 30-day delay can see the combined impact of late fee and interest before filing.',
          outcome: 'That helps the owner decide whether to clear the return immediately or bundle the cleanup with broader GST support.',
        },
        {
          title: 'Nil return check',
          summary: 'A small entity unsure whether nil-return treatment materially reduces the cost can compare that scenario quickly.',
          outcome: 'This avoids assumptions before portal filing begins.',
        },
      ],
    },
    recommendations: {
      title: 'Recommendations before you rely on the result',
      items: [
        'Use the result as a planning checkpoint, not a substitute for actual portal computation.',
        'If multiple periods are pending, calculate each return separately instead of combining them into one number.',
        'If the delay involves reconciliations, mismatches, or notices, clean-up support usually matters more than the estimate itself.',
        'Keep supporting books and invoice records ready before you file backlog returns.',
      ],
    },
    resultExplainer: {
      title: 'What the result means',
      paragraphs: [
        'Late fee reflects the daily penalty estimate based on return type and nil-return status. Interest is estimated separately on the overdue tax amount.',
        'The combined outflow gives a practical number to plan around before actual filing, reconciliation, and payment execution.',
      ],
    },
    faqs: [
      { question: 'Does this calculator replace the GST portal value?', answer: 'No. It is a quick estimate for planning. The GST portal remains the final reference point when the return is filed.' },
      { question: 'Why does nil return matter here?', answer: 'Nil returns often attract a lower daily late fee than non-nil returns, which can materially change the estimate.' },
      { question: 'Does the tool handle multiple delayed months together?', answer: 'It is better to calculate each period separately because actual liability and filing context can vary by month.' },
      { question: 'When should I contact Taxera after using it?', answer: 'Reach out when there are multiple pending periods, reconciliations, portal mismatches, or notice exposure beyond a simple delay-cost estimate.' },
    ],
    relatedTools: ['gst-composition-vs-regular-scheme-checker', 'tds-calculator', 'advance-tax-calculator'],
    relatedServices: [
      serviceLink('gst', 'monthly-gst-return-filing-small-business', 'Monthly GST Return Filing for Small Businesses', 'Useful when delayed GST filing needs fast clean-up and routine compliance continuity.'),
      serviceLink('gst', 'gst-notice-reply-basic', 'GST Notice Reply (Basic)', 'Relevant if delay has already triggered compliance follow-up or notice risk.'),
      serviceLink('accounting', 'expert-accounting-cleanup-hourly', 'Expert Accounting Cleanup Support', 'Useful when missing books and reconciliations are the real blocker behind delayed GST filing.'),
    ],
    cta: {
      title: 'Need help clearing delayed GST returns?',
      description: 'Taxera can handle return clean-up, reconciliations, portal filing, and follow-up when the delay is more than a simple payment issue.',
      topic: 'gst cleanup and delayed return filing',
    },
  },
  {
    slug: 'hra-exemption-calculator',
    shortName: 'HRA',
    name: 'HRA Exemption Calculator',
    category: 'Salary Tax Planning',
    badge: 'Free salary tax tool',
    hubLabel: 'HRA Exemption Calculator',
    hubDescription: 'Estimate exempt HRA, taxable HRA, and the salary-vs-rent comparison used in old-regime planning.',
    metaTitle: 'HRA Exemption Calculator | Taxera',
    metaDescription: 'Use Taxera’s free HRA exemption calculator to estimate exempt HRA and taxable HRA based on salary, rent, and city type.',
    keywords: ['hra exemption calculator', 'hra calculator india', 'taxable hra calculator', 'rent salary hra exemption'],
    heroTitle: 'HRA Exemption Calculator for Salary Tax Planning',
    heroDescription: 'Quickly estimate how much HRA may stay exempt under the standard rule before you choose the old regime or finalise salary tax planning.',
    highlights: [
      'Applies the standard three-limb HRA comparison',
      'Shows exempt and taxable HRA side by side',
      'Useful before payroll declarations and return filing',
    ],
    calculator: {
      title: 'Estimate HRA exemption',
      description: 'Enter annual basic salary, annual HRA received, annual rent, and city type to estimate exempt HRA.',
      note: 'This quick estimate assumes a standard salary structure and does not handle every payroll edge case or document issue.',
      defaultValues: {
        basicSalary: '600000',
        hraReceived: '240000',
        rentPaid: '216000',
        metroCity: 'metro',
      },
      fields: [
        { name: 'basicSalary', label: 'Annual basic salary', type: 'number', placeholder: '600000', min: 0, step: 1000, helper: 'Use the basic-salary amount considered for HRA comparison.' },
        { name: 'hraReceived', label: 'Annual HRA received', type: 'number', placeholder: '240000', min: 0, step: 1000, helper: 'Use the HRA component shown in salary structure.' },
        { name: 'rentPaid', label: 'Annual rent paid', type: 'number', placeholder: '216000', min: 0, step: 1000, helper: 'Enter the total annual rent relevant for the claim.' },
        {
          name: 'metroCity',
          label: 'City type',
          type: 'select',
          options: [
            { label: 'Metro city', value: 'metro' },
            { label: 'Non-metro city', value: 'nonMetro' },
          ],
          helper: 'Metro cities use the 50% salary comparison limb; non-metro cities use 40%.',
        },
      ],
    },
    overview: {
      title: 'What this tool is',
      paragraphs: [
        'This HRA calculator estimates exempt and taxable HRA using the standard comparison between actual HRA received, rent minus 10% of salary, and the salary-percentage cap.',
        'It is most useful when a salaried person needs a fast checkpoint before payroll declaration or return filing under the old regime.',
      ],
    },
    whoItsFor: {
      title: 'Who this HRA calculator is for',
      items: [
        'Salaried taxpayers comparing old-regime deductions.',
        'Employees checking whether rent paid is enough to justify an HRA claim.',
        'Users reviewing payroll declaration assumptions before year-end tax planning.',
        'People who want a fast HRA estimate before speaking to a filing advisor.',
      ],
    },
    uses: {
      title: 'Where this calculator helps',
      items: [
        'Estimating HRA exemption under the standard rule.',
        'Understanding how much HRA remains taxable.',
        'Comparing metro and non-metro assumptions quickly.',
        'Creating a cleaner starting point for salary tax planning.',
      ],
    },
    howToUse: {
      title: 'How to use this HRA calculator',
      steps: [
        { title: 'Enter annual basic salary', description: 'Use the salary figure relevant for HRA calculation.' },
        { title: 'Enter HRA and rent', description: 'Add the annual HRA received and annual rent actually paid.' },
        { title: 'Choose city type', description: 'Select metro or non-metro to apply the correct salary cap.' },
        { title: 'Review exempt and taxable HRA', description: 'Use the result to guide declaration and filing decisions.' },
      ],
    },
    examples: {
      title: 'Examples',
      items: [
        {
          title: 'Metro employee with strong rent outflow',
          summary: 'A salaried employee in a metro city can compare whether rent paid supports a meaningful HRA exemption.',
          outcome: 'That reduces guesswork before selecting the old regime or finalising declarations.',
        },
        {
          title: 'Low-rent case with limited benefit',
          summary: 'A user paying relatively low rent can see when the rent-minus-10%-of-salary limb becomes the real limiting factor.',
          outcome: 'This helps avoid overestimating old-regime benefit from HRA alone.',
        },
      ],
    },
    recommendations: {
      title: 'Recommendations before you rely on the result',
      items: [
        'Keep rent receipts, PAN details where required, and salary break-up ready before filing.',
        'Use the result as a planning estimate, not as a substitute for final payroll records.',
        'If regime comparison is still close, combine this tool with the broader income-tax calculator.',
        'Document quality matters as much as the raw calculation when HRA is reviewed later.',
      ],
    },
    resultExplainer: {
      title: 'What the result means',
      paragraphs: [
        'Exempt HRA is the lowest of the three standard comparison limbs. Any HRA above that amount remains taxable in this simplified model.',
        'The comparison rows help show which limb is actually limiting the exemption instead of relying on a rough guess.',
      ],
    },
    faqs: [
      { question: 'Does this work for new regime?', answer: 'No. HRA exemption is typically relevant when the old regime is being considered.' },
      { question: 'Why does city type matter?', answer: 'Metro cities use 50% of salary as one comparison limb, while non-metro cities use 40%.' },
      { question: 'Can I claim HRA without rent proof?', answer: 'The calculator can estimate the number, but actual claim support depends on documentation and payroll or filing rules.' },
      { question: 'When should I move to professional help?', answer: 'Move to help when salary has multiple allowances, there is regime ambiguity, or the filing position needs document-backed review.' },
    ],
    relatedTools: ['income-tax-calculator', 'advance-tax-calculator', 'tds-calculator'],
    relatedServices: [
      serviceLink('tax', 'individual-itr-salary-only', 'Individual ITR Filing (Salary Only)', 'Useful when HRA estimation needs to turn into clean salary return filing.'),
      serviceLink('tax', 'income-tax-notice-handling', 'Income Tax Notice Handling', 'Relevant if salary exemptions or declarations are under review after filing.'),
      serviceLink('payroll', 'payroll-processing-pf-esi-small-company', 'Payroll Processing with PF / ESI for Small Companies', 'Helpful when payroll setup and salary-component handling need to improve at source.'),
    ],
    cta: {
      title: 'Need help beyond an HRA estimate?',
      description: 'Taxera can help you convert salary tax planning into an actual filing or payroll-cleanup workflow with fewer mismatches.',
      topic: 'salary tax planning and itr filing',
    },
  },
  {
    slug: 'tds-calculator',
    shortName: 'TDS',
    name: 'TDS Calculator',
    category: 'Tax Deduction',
    badge: 'Free compliance tool',
    hubLabel: 'TDS Calculator',
    hubDescription: 'Estimate TDS on common payment types and see the net amount payable after deduction.',
    metaTitle: 'TDS Calculator for Common Payment Types | Taxera',
    metaDescription: 'Use Taxera’s free TDS calculator to estimate common TDS deductions and net payable amount before you process payments.',
    keywords: ['tds calculator', 'tds deduction calculator', 'professional fees tds calculator', 'contractor payment tds'],
    heroTitle: 'TDS Calculator for Common Payment Types',
    heroDescription: 'Estimate likely TDS on routine payment types before you process vendor, professional, rent, or commission payments.',
    highlights: [
      'Covers common section-rate combinations in one tool',
      'Shows threshold context and estimated net payout',
      'Useful for founders, finance teams, and deductors handling routine payments',
    ],
    calculator: {
      title: 'Estimate TDS deduction',
      description: 'Select the payment type and enter the amount to estimate TDS and net payout after deduction.',
      note: 'This is a quick estimator for common cases. Actual TDS applicability depends on payment nature, cumulative yearly value, PAN status, and specific section conditions.',
      defaultValues: {
        paymentAmount: '150000',
        sectionKey: 'professional',
      },
      fields: [
        { name: 'paymentAmount', label: 'Payment amount', type: 'number', placeholder: '150000', min: 0, step: 1000, helper: 'Enter the payment amount you want to evaluate.' },
        {
          name: 'sectionKey',
          label: 'Payment type',
          type: 'select',
          options: [
            { label: 'Professional fees (194J)', value: 'professional' },
            { label: 'Contractor - individual/HUF (194C)', value: 'contractorIndividual' },
            { label: 'Contractor - others (194C)', value: 'contractorOther' },
            { label: 'Rent for land/building (194I)', value: 'rent' },
            { label: 'Commission / brokerage (194H)', value: 'commission' },
          ],
          helper: 'Choose the payment context closest to your case.',
        },
      ],
    },
    overview: {
      title: 'What this tool is',
      paragraphs: [
        'This TDS calculator gives a quick deduction estimate for common payment sections so users can see what may be withheld before a payment is processed.',
        'It is useful when someone wants a decision-support tool first, before validating exact deductor obligations in books, payroll, or return filing.',
      ],
    },
    whoItsFor: {
      title: 'Who this TDS calculator is for',
      items: [
        'Founders or operators processing vendor and professional payments.',
        'Accounts teams checking withholding impact before releasing funds.',
        'Deductors estimating whether threshold and rate are likely to matter.',
        'Users who want a quick TDS number before moving into return filing support.',
      ],
    },
    uses: {
      title: 'Where this calculator helps',
      items: [
        'Estimating TDS on routine outward payments.',
        'Checking whether the selected payment amount crosses the quick threshold used in the tool.',
        'Understanding net payout after deduction.',
        'Creating a better starting point for TDS-return compliance discussions.',
      ],
    },
    howToUse: {
      title: 'How to use this TDS calculator',
      steps: [
        { title: 'Choose payment type', description: 'Select the section context closest to the payment you are making.' },
        { title: 'Enter payment amount', description: 'Use the gross amount before deduction.' },
        { title: 'Review threshold context', description: 'See whether the quick threshold used in the tool is crossed.' },
        { title: 'Check TDS and net payment', description: 'Use the result to plan payout and compliance follow-up.' },
      ],
    },
    examples: {
      title: 'Examples',
      items: [
        {
          title: 'Professional-fee deduction check',
          summary: 'A business paying a consultant can estimate the likely TDS and the post-deduction amount before processing the transfer.',
          outcome: 'That helps avoid rough manual calculations and supports quicker payment approvals.',
        },
        {
          title: 'Contractor-payment planning',
          summary: 'A finance user can compare contractor payment sections and understand the withholding impact before month-end releases.',
          outcome: 'This is especially useful when multiple vendor payouts need quick checks.',
        },
      ],
    },
    recommendations: {
      title: 'Recommendations before you rely on the result',
      items: [
        'Use the right section first; the deduction rate only matters after section applicability is correct.',
        'If the payment is part of a larger yearly series, threshold treatment may differ from a single isolated transaction.',
        'PAN status, declarations, and lower-deduction certificates can change the real outcome.',
        'If you are already behind on TDS returns or reconciliations, treat this tool as the starting point, not the solution.',
      ],
    },
    resultExplainer: {
      title: 'What the result means',
      paragraphs: [
        'The tool shows the section rate used, whether the quick threshold is crossed, the estimated TDS amount, and the net amount that may be released after deduction.',
        'This helps users move from rough intuition to an actionable estimate before they process the payment or speak to a compliance team.',
      ],
    },
    faqs: [
      { question: 'Does this cover every TDS section?', answer: 'No. It covers a set of common payment types for quick estimation, not the full TDS rulebook.' },
      { question: 'What if the threshold is not crossed?', answer: 'The quick estimate will usually show no deduction, but cumulative yearly payments should still be reviewed carefully.' },
      { question: 'Does PAN or non-filer status change TDS?', answer: 'Yes. Special rates and compliance conditions can change the real deduction. This tool does not model all of those cases.' },
      { question: 'When should I get help after using this?', answer: 'Get help when you need TDS returns, reconciliation, correction statements, or section selection support beyond a quick estimate.' },
    ],
    relatedTools: ['advance-tax-calculator', 'income-tax-calculator', 'gst-late-fee-interest-calculator'],
    relatedServices: [
      serviceLink('tax', 'tds-return-filing-small', 'TDS Return Filing (Small Deductor)', 'Useful when estimated TDS needs to turn into actual quarterly filing and compliance.'),
      serviceLink('tax', 'tds-return-filing-medium', 'TDS Return Filing (Medium Deductor)', 'Relevant for larger deductor volumes and more reconciliation-heavy TDS work.'),
      serviceLink('tax', 'form-15ca-15cb-filing', 'Form 15CA / 15CB Filing', 'Useful when outward payments and withholding questions extend into cross-border tax documentation.'),
    ],
    cta: {
      title: 'Need help after estimating TDS?',
      description: 'Taxera can support TDS deduction workflow, quarterly returns, correction statements, and related tax documentation.',
      topic: 'tds deduction and return filing support',
    },
  },
  {
    slug: 'advance-tax-calculator',
    shortName: 'Advance Tax',
    name: 'Advance Tax Calculator',
    category: 'Tax Planning',
    badge: 'Free tax planning tool',
    hubLabel: 'Advance Tax Calculator',
    hubDescription: 'Estimate cumulative advance-tax dues, shortfalls, and the amount still payable by the March deadline.',
    metaTitle: 'Advance Tax Calculator | Taxera',
    metaDescription: 'Use Taxera’s free advance tax calculator to estimate instalment dues, shortfalls, and remaining advance tax after TDS.',
    keywords: ['advance tax calculator', 'advance tax instalment calculator', 'advance tax due calculator india'],
    heroTitle: 'Advance Tax Calculator for Instalment Planning',
    heroDescription: 'Estimate advance-tax dues across the standard quarterly schedule so shortfalls and remaining tax become visible before interest kicks in.',
    highlights: [
      'Shows cumulative 15%, 45%, 75%, and 100% due points',
      'Calculates remaining amount after TDS and tax already paid',
      'Useful for freelancers, professionals, founders, and business taxpayers',
    ],
    calculator: {
      title: 'Estimate advance-tax dues',
      description: 'Enter annual tax liability, TDS already deducted, and tax paid till each due date to estimate cumulative dues and shortfalls.',
      note: 'This is a planning calculator for the standard advance-tax pattern. Presumptive-tax and special-case treatment may differ.',
      defaultValues: {
        estimatedAnnualTax: '180000',
        tdsAlreadyDeducted: '20000',
        paidByJune: '0',
        paidBySeptember: '0',
        paidByDecember: '0',
      },
      fields: [
        { name: 'estimatedAnnualTax', label: 'Estimated annual tax liability', type: 'number', placeholder: '180000', min: 0, step: 1000, helper: 'Use your estimated full-year tax before subtracting TDS.' },
        { name: 'tdsAlreadyDeducted', label: 'TDS already deducted', type: 'number', placeholder: '20000', min: 0, step: 1000, helper: 'Subtract tax already covered through TDS or similar withholding.' },
        { name: 'paidByJune', label: 'Advance tax paid by 15 June', type: 'number', placeholder: '0', min: 0, step: 1000, helper: 'Enter cumulative advance tax actually paid till the June due date.' },
        { name: 'paidBySeptember', label: 'Advance tax paid by 15 September', type: 'number', placeholder: '0', min: 0, step: 1000, helper: 'Enter cumulative advance tax actually paid till the September due date.' },
        { name: 'paidByDecember', label: 'Advance tax paid by 15 December', type: 'number', placeholder: '0', min: 0, step: 1000, helper: 'Enter cumulative advance tax actually paid till the December due date.' },
      ],
    },
    overview: {
      title: 'What this tool is',
      paragraphs: [
        'This advance-tax calculator estimates the standard quarterly due schedule after accounting for TDS and tax already paid till each cut-off date.',
        'It helps users identify whether they are underpaid and how much may still remain by the March instalment deadline.',
      ],
    },
    whoItsFor: {
      title: 'Who this calculator is for',
      items: [
        'Freelancers and professionals with tax outside salary withholding.',
        'Founders and business owners estimating quarterly tax commitments.',
        'Taxpayers checking whether they are underpaid before year-end.',
        'Users who want an instalment view before filing or rectification support.',
      ],
    },
    uses: {
      title: 'Where this calculator helps',
      items: [
        'Estimating net advance tax after TDS.',
        'Checking cumulative dues against actual tax paid.',
        'Spotting shortfalls before the last instalment date.',
        'Creating a clearer basis for tax-payment planning.',
      ],
    },
    howToUse: {
      title: 'How to use this advance-tax calculator',
      steps: [
        { title: 'Enter annual tax estimate', description: 'Start with the total tax you expect for the year.' },
        { title: 'Subtract TDS already covered', description: 'Enter the tax already deducted through TDS or similar withholding.' },
        { title: 'Add payments made till each due date', description: 'Use actual cumulative advance-tax payments through June, September, and December.' },
        { title: 'Review shortfalls and remaining amount', description: 'Use the result to plan the final instalment or discuss filing support.' },
      ],
    },
    examples: {
      title: 'Examples',
      items: [
        {
          title: 'Freelancer underpaying early instalments',
          summary: 'A freelancer can compare expected annual tax against actual payments made till the first three due dates.',
          outcome: 'That highlights whether a larger March payment is needed to catch up.',
        },
        {
          title: 'Business-owner planning year-end tax',
          summary: 'A founder with uneven quarterly payments can use the cumulative schedule to identify shortfall risk before filing.',
          outcome: 'This creates a better checkpoint than looking only at the final annual number.',
        },
      ],
    },
    recommendations: {
      title: 'Recommendations before you rely on the result',
      items: [
        'If net advance tax is under ₹10,000, the usual advance-tax obligation may not arise, but confirm the actual filing context.',
        'Use realistic tax estimates instead of optimistic assumptions; underestimation weakens the value of the schedule.',
        'If income is volatile, revisit the estimate more than once during the year.',
        'If there are business income, capital gains, or notices involved, move from estimate to document review quickly.',
      ],
    },
    resultExplainer: {
      title: 'What the result means',
      paragraphs: [
        'The cards show net advance tax after TDS, the amount already paid through December, and what may still remain for the March instalment.',
        'The schedule rows show cumulative due points and approximate shortfalls, which are useful for planning before actual payment and filing decisions.',
      ],
    },
    faqs: [
      { question: 'Does this calculator include advance-tax interest?', answer: 'No. It focuses on dues and shortfalls so the payment gap is visible first.' },
      { question: 'Is this for salaried employees only?', answer: 'It is most useful where tax is not fully covered by TDS, such as freelance, professional, or business income.' },
      { question: 'What if my income changes during the year?', answer: 'Update the annual estimate and recompute. Advance-tax planning works best when reviewed more than once.' },
      { question: 'When should I get professional help?', answer: 'Get help when tax is spread across business income, capital gains, notices, or underpayment concerns that need actual review.' },
    ],
    relatedTools: ['income-tax-calculator', 'tds-calculator', 'hra-exemption-calculator'],
    relatedServices: [
      serviceLink('tax', 'individual-itr-business-capital-gains', 'ITR Filing for Business / Capital Gains', 'Useful when advance-tax planning connects to a more complex filing position.'),
      serviceLink('tax', 'business-itr-filing-simple', 'Business ITR Filing', 'Relevant for business taxpayers who need cleaner annual execution beyond the estimate.'),
      serviceLink('tax', 'income-tax-notice-handling', 'Income Tax Notice Handling', 'Helpful if underpayment or filing issues have already triggered follow-up.'),
    ],
    cta: {
      title: 'Need help turning the estimate into actual tax action?',
      description: 'Taxera can help with tax planning, payments, filing, and clean-up when advance-tax underpayment is not just a calculation issue.',
      topic: 'advance tax planning and filing support',
    },
  },
  {
    slug: 'gratuity-calculator',
    shortName: 'Gratuity',
    name: 'Gratuity Calculator',
    category: 'Payroll Planning',
    badge: 'Free payroll tool',
    hubLabel: 'Gratuity Calculator',
    hubDescription: 'Estimate gratuity using last drawn basic plus DA and counted service years under the standard formula.',
    metaTitle: 'Gratuity Calculator | Taxera',
    metaDescription: 'Use Taxera’s free gratuity calculator to estimate gratuity based on monthly basic plus DA and service years.',
    keywords: ['gratuity calculator', 'gratuity formula calculator', 'employee gratuity estimate'],
    heroTitle: 'Gratuity Calculator for Quick Service-Payout Estimates',
    heroDescription: 'Estimate gratuity under the standard formula using last drawn basic plus DA and counted years of service.',
    highlights: [
      'Uses the standard 15/26 gratuity formula',
      'Rounds service years using the common 6-month rule',
      'Useful for employees, HR teams, and payroll planning conversations',
    ],
    calculator: {
      title: 'Estimate gratuity amount',
      description: 'Enter last drawn monthly basic plus DA, completed years, and extra months of service to estimate gratuity.',
      note: 'This is a quick estimate based on the standard formula. Final eligibility and payout can depend on employment facts and legal exceptions.',
      defaultValues: {
        monthlyBasicDa: '45000',
        completedYears: '8',
        extraMonths: '6',
      },
      fields: [
        { name: 'monthlyBasicDa', label: 'Last drawn monthly basic + DA', type: 'number', placeholder: '45000', min: 0, step: 500, helper: 'Use the monthly basic-salary plus dearness-allowance amount used in the formula.' },
        { name: 'completedYears', label: 'Completed years of service', type: 'number', placeholder: '8', min: 0, max: 60, step: 1, helper: 'Enter full completed years of service.' },
        { name: 'extraMonths', label: 'Extra months of service', type: 'number', placeholder: '6', min: 0, max: 11, step: 1, helper: 'Extra months at or above 6 are commonly counted as an additional year in the standard estimate.' },
      ],
    },
    overview: {
      title: 'What this tool is',
      paragraphs: [
        'This gratuity calculator gives a standard-formula estimate based on last drawn monthly basic plus DA and counted service years.',
        'It helps users understand service-linked payout value before they move into payroll, HR, or exit-settlement discussions.',
      ],
    },
    whoItsFor: {
      title: 'Who this gratuity calculator is for',
      items: [
        'Employees estimating gratuity before resignation or settlement discussions.',
        'HR or payroll users checking the size of a standard gratuity obligation.',
        'Founders wanting a quick service-payout estimate for planning.',
        'Users who need a clean starting point before payroll or legal review.',
      ],
    },
    uses: {
      title: 'Where this calculator helps',
      items: [
        'Estimating gratuity under the standard formula.',
        'Understanding how month-rounding affects counted service years.',
        'Checking whether the five-year threshold is met in a standard case.',
        'Supporting employee-exit and payroll-planning discussions.',
      ],
    },
    howToUse: {
      title: 'How to use this gratuity calculator',
      steps: [
        { title: 'Enter monthly basic + DA', description: 'Use the last drawn monthly figure relevant for gratuity.' },
        { title: 'Add completed years', description: 'Enter the number of full completed service years.' },
        { title: 'Add extra months', description: 'Use the remaining months to see whether service rounds up.' },
        { title: 'Review counted years and gratuity', description: 'Use the result as a practical estimate before final settlement checks.' },
      ],
    },
    examples: {
      title: 'Examples',
      items: [
        {
          title: 'Employee nearing exit settlement',
          summary: 'An employee can estimate likely gratuity based on last drawn salary and total service period.',
          outcome: 'That creates a clearer benchmark before final settlement discussions start.',
        },
        {
          title: 'HR payout planning',
          summary: 'A payroll or HR user can assess the rough gratuity impact of a service-linked exit case.',
          outcome: 'This is useful for initial planning before legal and payroll verification.',
        },
      ],
    },
    recommendations: {
      title: 'Recommendations before you rely on the result',
      items: [
        'Treat the output as a standard-formula estimate, not a legal conclusion.',
        'Check actual employment records, salary structure, and service continuity before finalising settlement.',
        'If service is under five years, review whether any legal exception applies instead of relying on the quick estimate alone.',
        'Use payroll support if multiple exit payouts, leave encashment, or compliance checks are involved.',
      ],
    },
    resultExplainer: {
      title: 'What the result means',
      paragraphs: [
        'The cards show the estimated gratuity, the counted service years after the month-rounding rule, and whether the standard five-year threshold is broadly met.',
        'This makes the estimate useful for early planning, even though the final payout should still be validated against actual records.',
      ],
    },
    faqs: [
      { question: 'Does the tool guarantee gratuity eligibility?', answer: 'No. It only applies the common rule-of-thumb formula and standard threshold check.' },
      { question: 'Why are extra months important?', answer: 'In the standard estimate, service beyond 6 months is often counted as an extra year.' },
      { question: 'Is this enough for final settlement?', answer: 'No. Final settlement should still be verified against actual payroll and employment records.' },
      { question: 'When should I get help?', answer: 'Get help when gratuity is part of a broader payroll, settlement, or compliance process that needs document-backed execution.' },
    ],
    relatedTools: ['emi-calculator', 'break-even-calculator', 'tds-calculator'],
    relatedServices: [
      serviceLink('payroll', 'payroll-processing-pf-esi-small-company', 'Payroll Processing with PF / ESI for Small Companies', 'Useful when gratuity questions sit inside wider monthly payroll and employee-compliance work.'),
      serviceLink('payroll', 'payroll-processing-pf-esi-medium-company', 'Payroll Processing with PF / ESI for Medium Companies', 'Relevant for larger teams and more complex payroll administration.'),
      serviceLink('advisory', 'virtual-cfo-services', 'Virtual CFO Services', 'Helpful when people cost planning and exit liabilities need to be tied to broader business finance decisions.'),
    ],
    cta: {
      title: 'Need help beyond a gratuity estimate?',
      description: 'Taxera can help when gratuity, payroll, compliance, and employee-cost planning need to move from rough numbers to actual execution.',
      topic: 'payroll processing and gratuity planning',
    },
  },
  {
    slug: 'emi-calculator',
    shortName: 'EMI',
    name: 'EMI Calculator',
    category: 'Finance Planning',
    badge: 'Free finance tool',
    hubLabel: 'EMI Calculator',
    hubDescription: 'Estimate EMI, total interest, processing fee, and overall loan outflow for quick borrowing decisions.',
    metaTitle: 'EMI Calculator | Taxera',
    metaDescription: 'Use Taxera’s free EMI calculator to estimate EMI, total interest, processing fee, and overall loan outflow.',
    keywords: ['emi calculator', 'loan emi calculator', 'emi interest calculator', 'loan outflow calculator'],
    heroTitle: 'EMI Calculator for Borrowing and Affordability Checks',
    heroDescription: 'Estimate monthly EMI, total interest, and total outflow before you commit to a loan or compare lender offers.',
    highlights: [
      'Projects EMI using principal, interest rate, and tenure',
      'Adds optional processing fee into overall outflow',
      'Useful for affordability checks and founder cash-flow decisions',
    ],
    calculator: {
      title: 'Estimate EMI and loan outflow',
      description: 'Enter the loan amount, annual rate, tenure, and optional processing fee to estimate EMI and total cost.',
      note: 'This is a reducing-balance EMI estimate for quick comparison. Actual lender schedules can differ because of fees, insurance, and specific product structures.',
      defaultValues: {
        loanAmount: '2500000',
        annualInterestRate: '9.5',
        tenureYears: '15',
        processingFeePercent: '0.5',
      },
      fields: [
        { name: 'loanAmount', label: 'Loan amount', type: 'number', placeholder: '2500000', min: 0, step: 10000, helper: 'Enter the principal loan amount you expect to borrow.' },
        { name: 'annualInterestRate', label: 'Annual interest rate (%)', type: 'number', placeholder: '9.5', min: 0, max: 100, step: 0.1, helper: 'Use the nominal annual interest rate offered by the lender.' },
        { name: 'tenureYears', label: 'Loan tenure (years)', type: 'number', placeholder: '15', min: 0, max: 50, step: 1, helper: 'Use the full tenure you want to compare.' },
        { name: 'processingFeePercent', label: 'Processing fee (%)', type: 'number', placeholder: '0.5', min: 0, max: 10, step: 0.1, helper: 'Optional lender processing fee as a percentage of principal.' },
      ],
    },
    overview: {
      title: 'What this tool is',
      paragraphs: [
        'This EMI calculator estimates monthly instalment, total interest, processing fee, and total outflow for a standard reducing-balance loan.',
        'It is useful for quick affordability checks and for comparing how rate, tenure, and fees change the real cost of borrowing.',
      ],
    },
    whoItsFor: {
      title: 'Who this EMI calculator is for',
      items: [
        'Individuals comparing home, business, or working-capital borrowing scenarios.',
        'Founders evaluating whether debt fits current cash-flow capacity.',
        'Finance users comparing offers with different rate and fee structures.',
        'Search users who want a fast borrowing estimate before moving into projections.',
      ],
    },
    uses: {
      title: 'Where this calculator helps',
      items: [
        'Checking EMI affordability quickly.',
        'Comparing how tenure changes monthly outflow and total interest.',
        'Including processing fee in the real borrowing picture.',
        'Starting debt-planning conversations with a clearer number base.',
      ],
    },
    howToUse: {
      title: 'How to use this EMI calculator',
      steps: [
        { title: 'Enter principal amount', description: 'Use the loan amount you plan to borrow.' },
        { title: 'Set rate and tenure', description: 'Add the annual interest rate and repayment duration.' },
        { title: 'Add processing fee if relevant', description: 'Use the lender fee percentage to improve the total-cost estimate.' },
        { title: 'Review EMI and total outflow', description: 'Compare affordability and total cost together instead of looking only at EMI.' },
      ],
    },
    examples: {
      title: 'Examples',
      items: [
        {
          title: 'Loan affordability check',
          summary: 'A user comparing a 15-year borrowing scenario can see the monthly EMI and total interest before choosing a lender.',
          outcome: 'This helps avoid focusing only on the headline rate while ignoring the long-term cost.',
        },
        {
          title: 'Founder cash-flow planning',
          summary: 'A founder considering debt can check whether the EMI fits current operating capacity.',
          outcome: 'That makes the calculator useful as an early cash-flow decision tool, not just a consumer loan widget.',
        },
      ],
    },
    recommendations: {
      title: 'Recommendations before you rely on the result',
      items: [
        'Look at total interest and total outflow, not EMI alone.',
        'Compare loan products with the same tenure before deciding which rate is meaningfully better.',
        'Fees, insurance, and prepayment rules can materially change the real cost.',
        'If borrowing affects working capital or runway, review the decision in the context of broader cash-flow visibility.',
      ],
    },
    resultExplainer: {
      title: 'What the result means',
      paragraphs: [
        'The cards show monthly EMI, total interest, lender processing fee, and total outflow over the full repayment period.',
        'This makes it easier to compare borrowing options using both monthly affordability and long-run cost instead of one number alone.',
      ],
    },
    faqs: [
      { question: 'Does this guarantee the lender EMI schedule?', answer: 'No. It is a quick reducing-balance estimate for planning and comparison.' },
      { question: 'Why include processing fee?', answer: 'Because total borrowing cost is not just principal plus interest; lender fees also affect real outflow.' },
      { question: 'Should I compare EMI or total interest?', answer: 'Compare both. EMI affects affordability, while total interest affects the real long-term cost.' },
      { question: 'When should I get help after using this?', answer: 'Get help when the borrowing decision affects business projections, working capital, or finance strategy beyond a simple EMI check.' },
    ],
    relatedTools: ['break-even-calculator', 'inflation-calculator', 'gratuity-calculator'],
    relatedServices: [
      serviceLink('advisory', 'cma-data-bank-loan-projections', 'CMA Data & Bank Loan Projections', 'Useful when a loan estimate needs to turn into a lender-facing projection or credit discussion.'),
      serviceLink('advisory', 'virtual-cfo-services', 'Virtual CFO Services', 'Relevant when debt decisions need to be tied to business cash flow and planning.'),
      serviceLink('accounting', 'bookkeeping-small-business', 'Bookkeeping for Small Businesses', 'Helpful when debt planning depends on cleaner financial visibility first.'),
    ],
    cta: {
      title: 'Need help turning EMI math into a finance decision?',
      description: 'Taxera can help connect loan assumptions to cash flow, reporting, and lender-ready projections so the borrowing decision is grounded in actual numbers.',
      topic: 'loan planning and financial projections',
    },
  },
  {
    slug: 'break-even-calculator',
    shortName: 'Break-even',
    name: 'Break-Even Calculator',
    category: 'Business Planning',
    badge: 'Free business tool',
    hubLabel: 'Break-Even Calculator',
    hubDescription: 'Estimate break-even units, break-even revenue, contribution per unit, and margin of safety for a business model.',
    metaTitle: 'Break-Even Calculator | Taxera',
    metaDescription: 'Use Taxera’s free break-even calculator to estimate break-even volume, revenue, contribution margin, and margin of safety.',
    keywords: ['break even calculator', 'break even point calculator', 'contribution margin calculator', 'margin of safety calculator'],
    heroTitle: 'Break-Even Calculator for Unit Economics and Planning',
    heroDescription: 'Estimate how many units you need to sell to cover fixed costs and how much safety margin your current plan really has.',
    highlights: [
      'Shows break-even units and break-even revenue',
      'Calculates contribution per unit and margin of safety',
      'Useful for pricing, sales planning, and founder decision support',
    ],
    calculator: {
      title: 'Estimate your break-even point',
      description: 'Enter monthly fixed costs, selling price per unit, variable cost per unit, and expected monthly sales volume.',
      note: 'This model is useful when unit economics are reasonably stable. If costs vary sharply by product mix, treat the result as directional only.',
      defaultValues: {
        fixedCostsMonthly: '300000',
        sellingPricePerUnit: '2500',
        variableCostPerUnit: '1400',
        expectedMonthlyUnits: '180',
      },
      fields: [
        { name: 'fixedCostsMonthly', label: 'Monthly fixed costs', type: 'number', placeholder: '300000', min: 0, step: 1000, helper: 'Use the recurring monthly cost base you need to recover.' },
        { name: 'sellingPricePerUnit', label: 'Selling price per unit', type: 'number', placeholder: '2500', min: 0, step: 10, helper: 'Use the realised selling price per unit, not just list price.' },
        { name: 'variableCostPerUnit', label: 'Variable cost per unit', type: 'number', placeholder: '1400', min: 0, step: 10, helper: 'Include the direct cost that changes with each unit sold.' },
        { name: 'expectedMonthlyUnits', label: 'Expected monthly units sold', type: 'number', placeholder: '180', min: 0, step: 1, helper: 'Use your realistic sales volume assumption for the month.' },
      ],
    },
    overview: {
      title: 'What this tool is',
      paragraphs: [
        'This break-even calculator converts unit economics into a simple planning view by estimating contribution per unit, break-even units, revenue required, and margin of safety.',
        'It is especially useful for founders and operators who need a fast reality check on pricing, cost structure, or sales volume before deeper modelling begins.',
      ],
    },
    whoItsFor: {
      title: 'Who this calculator is for',
      items: [
        'Founders checking whether their current sales plan covers fixed costs.',
        'Teams comparing pricing and variable-cost assumptions quickly.',
        'Operators who want to quantify margin of safety instead of relying on rough intuition.',
        'Users moving from surface-level planning into finance-aware decision-making.',
      ],
    },
    uses: {
      title: 'Where this calculator helps',
      items: [
        'Estimating monthly break-even volume.',
        'Checking whether the current contribution margin is viable.',
        'Understanding how much safety cushion exists at expected sales volume.',
        'Starting better conversations around pricing, growth, and financial planning.',
      ],
    },
    howToUse: {
      title: 'How to use this break-even calculator',
      steps: [
        { title: 'Enter fixed costs', description: 'Use the monthly cost base that needs to be covered.' },
        { title: 'Enter unit economics', description: 'Add selling price and variable cost per unit.' },
        { title: 'Add expected sales volume', description: 'Use your realistic monthly volume assumption.' },
        { title: 'Review break-even and margin of safety', description: 'Use the result to judge how resilient the plan actually is.' },
      ],
    },
    examples: {
      title: 'Examples',
      items: [
        {
          title: 'Pricing sanity check',
          summary: 'A founder can test whether the current pricing and variable-cost structure creates enough contribution to cover fixed costs.',
          outcome: 'This turns vague pricing intuition into a clearer break-even target.',
        },
        {
          title: 'Sales-plan stress test',
          summary: 'An operator can compare expected monthly sales volume against break-even units to see whether the margin of safety is healthy.',
          outcome: 'That gives a stronger planning signal before committing to growth spending.',
        },
      ],
    },
    recommendations: {
      title: 'Recommendations before you rely on the result',
      items: [
        'Use realised selling price and realistic variable cost instead of optimistic assumptions.',
        'If variable cost is near or above selling price, fix unit economics before relying on sales growth alone.',
        'For mixed product lines, create separate break-even views instead of one blended assumption where possible.',
        'Pair this tool with reporting and cash-flow visibility if you are making operating decisions from the output.',
      ],
    },
    resultExplainer: {
      title: 'What the result means',
      paragraphs: [
        'Break-even units show how many units need to be sold to fully cover fixed costs at the current contribution margin. Break-even revenue converts that into a top-line target.',
        'Margin of safety shows how much room the expected sales plan has above break-even, which helps assess whether the model is resilient or fragile.',
      ],
    },
    faqs: [
      { question: 'What if contribution per unit is negative?', answer: 'That means the current unit economics do not support break-even at all. Price, cost, or both need attention first.' },
      { question: 'Can I use this for services too?', answer: 'Yes, as long as you can model a sensible selling-price and variable-cost unit for the service.' },
      { question: 'Why does margin of safety matter?', answer: 'Because a business can technically be above break-even and still be too fragile if the cushion is too thin.' },
      { question: 'When should I get help after using it?', answer: 'Get help when pricing, reporting, and operating decisions need a stronger financial structure than a standalone break-even estimate.' },
    ],
    relatedTools: ['emi-calculator', 'gst-composition-vs-regular-scheme-checker', 'inflation-calculator'],
    relatedServices: [
      serviceLink('advisory', 'virtual-cfo-services', 'Virtual CFO Services', 'Useful when break-even planning needs to tie into operating metrics and financial decisions.'),
      serviceLink('advisory', 'cma-data-bank-loan-projections', 'CMA Data & Bank Loan Projections', 'Relevant when break-even assumptions need to feed a broader projection model.'),
      serviceLink('analytics', 'executive-dashboard-creation', 'Executive Dashboard Creation', 'Helpful when break-even thinking needs to become a repeatable KPI view instead of a one-time estimate.'),
    ],
    cta: {
      title: 'Need help moving from break-even math to real planning?',
      description: 'Taxera can help turn unit economics into dashboards, projections, and operating decisions that support growth with better financial discipline.',
      topic: 'break-even planning and business reporting',
    },
  },
  {
    slug: 'gst-composition-vs-regular-scheme-checker',
    shortName: 'GST Scheme',
    name: 'GST Composition vs Regular Scheme Checker',
    category: 'GST Decision Support',
    badge: 'Free GST decision tool',
    hubLabel: 'GST Composition vs Regular Scheme Checker',
    hubDescription: 'Use a quick eligibility and fit check to compare composition and regular GST routes for your business profile.',
    metaTitle: 'GST Composition vs Regular Scheme Checker | Taxera',
    metaDescription: 'Use Taxera’s free GST scheme checker to compare composition and regular GST routes using turnover, business type, ITC need, and supply profile.',
    keywords: ['gst composition scheme checker', 'composition vs regular gst', 'gst scheme decision tool', 'gst composition eligibility'],
    heroTitle: 'GST Composition vs Regular Scheme Checker',
    heroDescription: 'Run a quick fit check before choosing between composition and regular GST so the decision is not based on rate alone.',
    highlights: [
      'Screens quick composition eligibility factors',
      'Compares simplicity against ITC and B2B reality',
      'Useful for new registrants and businesses reconsidering their GST route',
    ],
    calculator: {
      title: 'Check likely GST scheme fit',
      description: 'Enter turnover, business type, ITC dependence, B2B share, and supply profile to compare composition and regular scheme fit.',
      note: 'This is a decision-support tool, not a legal opinion. Actual GST eligibility can depend on transaction type, state position, and detailed facts.',
      defaultValues: {
        annualTurnover: '6000000',
        businessType: 'trader',
        b2bSharePercent: '20',
        inputTaxCreditNeed: 'low',
        interstateSales: 'no',
        ecommerceSales: 'no',
      },
      fields: [
        { name: 'annualTurnover', label: 'Annual turnover', type: 'number', placeholder: '6000000', min: 0, step: 10000, helper: 'Enter the expected annual turnover used for the decision.' },
        {
          name: 'businessType',
          label: 'Business type',
          type: 'select',
          options: [
            { label: 'Trader', value: 'trader' },
            { label: 'Manufacturer', value: 'manufacturer' },
            { label: 'Restaurant (non-alcohol)', value: 'restaurant' },
            { label: 'Service provider', value: 'service' },
            { label: 'Mixed / unclear model', value: 'mixed' },
          ],
          helper: 'Choose the closest business model for this quick fit check.',
        },
        { name: 'b2bSharePercent', label: 'B2B sales share (%)', type: 'number', placeholder: '20', min: 0, max: 100, step: 1, helper: 'Higher B2B dependence often makes ITC flow more important.' },
        {
          name: 'inputTaxCreditNeed',
          label: 'Input-tax-credit dependence',
          type: 'select',
          options: [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
          ],
          helper: 'Use this to express how important input-credit flow is in your model.',
        },
        {
          name: 'interstateSales',
          label: 'Interstate supplies?',
          type: 'select',
          options: [
            { label: 'No', value: 'no' },
            { label: 'Yes', value: 'yes' },
          ],
          helper: 'Interstate supplies can affect composition eligibility.' ,
        },
        {
          name: 'ecommerceSales',
          label: 'E-commerce supplies?',
          type: 'select',
          options: [
            { label: 'No', value: 'no' },
            { label: 'Yes', value: 'yes' },
          ],
          helper: 'E-commerce participation can affect composition eligibility in many cases.',
        },
      ],
    },
    overview: {
      title: 'What this tool is',
      paragraphs: [
        'This checker combines a simple eligibility screen with a practical fit test so users can compare composition and regular GST routes more intelligently.',
        'It is designed for decision support, especially when a business is tempted by the simpler rate view without accounting for ITC, B2B expectations, or supply restrictions.',
      ],
    },
    whoItsFor: {
      title: 'Who this GST checker is for',
      items: [
        'New businesses deciding how to register under GST.',
        'Existing businesses rethinking whether composition still fits their model.',
        'Operators who want a quick route check before speaking to an advisor.',
        'Users trying to balance simplicity against credit flow and business reality.',
      ],
    },
    uses: {
      title: 'Where this checker helps',
      items: [
        'Screening for composition-scheme fit.',
        'Understanding why ITC and B2B sales can push the decision toward regular GST.',
        'Checking whether turnover and supply profile change the picture.',
        'Starting a better GST-registration or advisory conversation.',
      ],
    },
    howToUse: {
      title: 'How to use this GST scheme checker',
      steps: [
        { title: 'Enter turnover and business type', description: 'Use the expected annual scale and closest business model.' },
        { title: 'Add B2B and ITC context', description: 'Express how much your business depends on B2B billing and input credit.' },
        { title: 'Answer supply-profile questions', description: 'Use interstate and e-commerce flags to screen quick eligibility issues.' },
        { title: 'Review the recommendation', description: 'Use the recommendation as a discussion starter, not the final legal conclusion.' },
      ],
    },
    examples: {
      title: 'Examples',
      items: [
        {
          title: 'Low-ITC local trader',
          summary: 'A local trader with low ITC dependency and mostly B2C sales may find composition more attractive if the quick screen is clean.',
          outcome: 'This clarifies when simplicity may genuinely matter more than the credit chain.',
        },
        {
          title: 'B2B-heavy business with credit sensitivity',
          summary: 'A business with higher B2B sales and strong ITC dependence may see the recommendation tilt toward regular GST.',
          outcome: 'That helps avoid a scheme choice that looks simple upfront but hurts operations later.',
        },
      ],
    },
    recommendations: {
      title: 'Recommendations before you rely on the result',
      items: [
        'Treat this tool as a structured discussion starter, not as a replacement for actual GST advice.',
        'If your business model is mixed or evolving, a scheme choice should be reviewed more carefully than a simple form output.',
        'Do not choose composition on rate alone if ITC, interstate growth, or B2B billing matter materially.',
        'If registration is not yet done, align scheme choice with the next 12 months of business reality, not just the current month.',
      ],
    },
    resultExplainer: {
      title: 'What the result means',
      paragraphs: [
        'The cards show a quick recommendation, a simplified composition-eligibility screen, the relevant turnover limit, and the indicative composition rate for the business type entered.',
        'The profile rows explain which business factors were considered so the user understands why the recommendation leans one way or the other.',
      ],
    },
    faqs: [
      { question: 'Does this legally confirm composition eligibility?', answer: 'No. It is a quick screen and fit checker, not a legal determination.' },
      { question: 'Why does B2B share matter here?', answer: 'Higher B2B dependency often makes input-tax-credit flow and invoice treatment more commercially important.' },
      { question: 'Why can interstate or e-commerce sales matter?', answer: 'Those supply characteristics can create composition-scheme restrictions or make the route commercially less practical.' },
      { question: 'When should I speak to Taxera after using it?', answer: 'Speak to Taxera when the registration choice affects actual GST setup, invoicing flow, monthly returns, or advisory decisions.' },
    ],
    relatedTools: ['gst-late-fee-interest-calculator', 'break-even-calculator', 'emi-calculator'],
    relatedServices: [
      serviceLink('reg', 'gst-registration', 'GST Registration', 'Useful when the scheme choice needs to move into actual GST registration and setup.'),
      serviceLink('gst', 'monthly-gst-return-filing-small-business', 'Monthly GST Return Filing for Small Businesses', 'Relevant when regular GST becomes the practical route and monthly compliance needs support.'),
      serviceLink('gst', 'monthly-gst-return-filing-medium-business', 'Monthly GST Return Filing for Medium Businesses', 'Helpful for growing businesses where GST route and compliance complexity rise together.'),
    ],
    cta: {
      title: 'Need help choosing the right GST route?',
      description: 'Taxera can review your business model, turnover, invoicing flow, and credit dependency before the scheme decision turns into live compliance.',
      topic: 'gst registration and scheme selection',
    },
  },
];
