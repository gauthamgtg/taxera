const PROBLEM_ENTRIES = [
  { id: 1, category: 'GST', problem: 'GST Late Filing Penalty', slug: 'gst-late-filing-penalty-help', intent: 'High', monetization: '₹₹' },
  { id: 2, category: 'GST', problem: 'GST Notice Received', slug: 'gst-notice-help', intent: 'High', monetization: '₹₹₹' },
  { id: 3, category: 'GST', problem: 'GSTR-1 vs 3B Mismatch', slug: 'gstr1-3b-mismatch-fix', intent: 'High', monetization: '₹₹' },
  { id: 4, category: 'GST', problem: 'ITC Mismatch', slug: 'itc-mismatch-fix', intent: 'High', monetization: '₹₹' },
  { id: 5, category: 'GST', problem: 'GST Registration Cancelled', slug: 'gst-registration-cancelled-revive', intent: 'High', monetization: '₹₹₹' },
  { id: 6, category: 'GST', problem: 'Wrong GST Filing', slug: 'gst-filing-error-fix', intent: 'High', monetization: '₹₹' },
  { id: 7, category: 'GST', problem: 'GST Refund Stuck', slug: 'gst-refund-stuck-help', intent: 'High', monetization: '₹₹' },
  { id: 8, category: 'GST', problem: 'GST Paid but Not Filed', slug: 'gst-paid-but-not-filed', intent: 'High', monetization: '₹₹' },
  { id: 9, category: 'GST', problem: 'GST Filed but Not Paid', slug: 'gst-filed-but-not-paid', intent: 'High', monetization: '₹₹' },
  { id: 10, category: 'GST', problem: 'Wrong HSN Code', slug: 'wrong-hsn-code-fix', intent: 'Medium', monetization: '₹₹' },
  { id: 11, category: 'GST', problem: 'E-Way Bill Penalty', slug: 'eway-bill-penalty-help', intent: 'High', monetization: '₹₹₹' },
  { id: 12, category: 'GST', problem: 'E-Invoicing Not Done', slug: 'e-invoicing-non-compliance', intent: 'High', monetization: '₹₹₹' },
  { id: 13, category: 'GST', problem: 'Vendor Not Filing (ITC Block)', slug: 'vendor-not-filing-gst', intent: 'High', monetization: '₹₹₹' },
  { id: 14, category: 'GST', problem: 'ITC Blocked', slug: 'itc-blocked-fix', intent: 'High', monetization: '₹₹' },
  { id: 15, category: 'GST', problem: 'GST Interest Increasing', slug: 'gst-interest-problem', intent: 'High', monetization: '₹₹' },
  { id: 16, category: 'Income Tax', problem: 'Income Tax Notice', slug: 'income-tax-notice-help', intent: 'High', monetization: '₹₹₹' },
  { id: 17, category: 'Income Tax', problem: 'Defective Return 139(9)', slug: 'defective-return-fix', intent: 'High', monetization: '₹₹' },
  { id: 18, category: 'Income Tax', problem: 'Tax Demand Notice', slug: 'tax-demand-notice-help', intent: 'High', monetization: '₹₹₹' },
  { id: 19, category: 'Income Tax', problem: 'Scrutiny Case', slug: 'income-tax-scrutiny-help', intent: 'High', monetization: '₹₹₹' },
  { id: 20, category: 'Income Tax', problem: 'Incorrect ITR Filing', slug: 'itr-error-correction', intent: 'High', monetization: '₹₹' },
  { id: 21, category: 'Income Tax', problem: 'AIS vs ITR Mismatch', slug: 'ais-itr-mismatch-fix', intent: 'High', monetization: '₹₹' },
  { id: 22, category: 'Income Tax', problem: 'Cash Deposit Notice', slug: 'cash-deposit-notice-help', intent: 'High', monetization: '₹₹₹' },
  { id: 23, category: 'Income Tax', problem: 'High Spending Notice', slug: 'high-spending-notice', intent: 'High', monetization: '₹₹' },
  { id: 24, category: 'Income Tax', problem: 'Refund Delay', slug: 'itr-refund-delay', intent: 'Medium', monetization: '₹' },
  { id: 25, category: 'Income Tax', problem: 'Late Filing Penalty 234F', slug: 'itr-late-filing-penalty', intent: 'High', monetization: '₹' },
  { id: 26, category: 'ROC', problem: 'ROC Late Filing', slug: 'roc-late-filing-penalty', intent: 'High', monetization: '₹₹' },
  { id: 27, category: 'ROC', problem: 'Director Disqualification', slug: 'director-disqualification-fix', intent: 'High', monetization: '₹₹₹' },
  { id: 28, category: 'ROC', problem: 'Company Strike Off', slug: 'company-strike-off-revival', intent: 'High', monetization: '₹₹₹' },
  { id: 29, category: 'ROC', problem: 'DIN Issues', slug: 'din-issue-fix', intent: 'Medium', monetization: '₹₹' },
  { id: 30, category: 'ROC', problem: 'Multi-Year Non Compliance', slug: 'roc-multiple-year-pending', intent: 'High', monetization: '₹₹₹' },
  { id: 31, category: 'ROC', problem: 'Company Non-Compliant', slug: 'company-non-compliance-fix', intent: 'High', monetization: '₹₹₹' },
  { id: 32, category: 'ROC', problem: 'Show Cause Notice', slug: 'show-cause-notice-help', intent: 'High', monetization: '₹₹₹' },
  { id: 33, category: 'TDS', problem: 'TDS Late Filing', slug: 'tds-late-filing-penalty', intent: 'High', monetization: '₹₹' },
  { id: 34, category: 'TDS', problem: 'TDS Demand Notice', slug: 'tds-demand-notice-help', intent: 'High', monetization: '₹₹₹' },
  { id: 35, category: 'Payroll', problem: 'PF/ESI Issues', slug: 'pf-esi-non-compliance-fix', intent: 'High', monetization: '₹₹' },
  { id: 36, category: 'Accounting', problem: 'No Bookkeeping', slug: 'no-bookkeeping-fix', intent: 'High', monetization: '₹₹' },
  { id: 37, category: 'Accounting', problem: 'Books vs GST Mismatch', slug: 'books-gst-mismatch', intent: 'High', monetization: '₹₹' },
  { id: 38, category: 'Accounting', problem: 'Financial Cleanup', slug: 'accounting-cleanup-service', intent: 'High', monetization: '₹₹₹' },
  { id: 39, category: 'Accounting', problem: 'Excel Mess', slug: 'excel-accounting-fix', intent: 'High', monetization: '₹₹' },
  { id: 40, category: 'Accounting', problem: 'No Profit Clarity', slug: 'profit-tracking-issue', intent: 'High', monetization: '₹₹' },
  { id: 41, category: 'Website', problem: 'No Leads', slug: 'website-no-leads', intent: 'Medium', monetization: '₹₹' },
  { id: 42, category: 'Website', problem: 'Slow Website', slug: 'slow-website-fix', intent: 'Medium', monetization: '₹' },
  { id: 43, category: 'Website', problem: 'High Bounce Rate', slug: 'high-bounce-rate-fix', intent: 'Medium', monetization: '₹' },
  { id: 44, category: 'Website', problem: 'No Funnel', slug: 'no-sales-funnel', intent: 'High', monetization: '₹₹' },
  { id: 45, category: 'Website', problem: 'Not Mobile Optimized', slug: 'mobile-website-fix', intent: 'Medium', monetization: '₹' },
  { id: 46, category: 'Website', problem: 'Not Ranking', slug: 'website-seo-problem', intent: 'Medium', monetization: '₹₹' },
  { id: 47, category: 'Website', problem: 'Not Converting', slug: 'website-not-converting', intent: 'High', monetization: '₹₹' },
  { id: 48, category: 'Automation', problem: 'Manual Work', slug: 'manual-process-automation', intent: 'High', monetization: '₹₹₹' },
  { id: 49, category: 'Automation', problem: 'Invoice Automation', slug: 'invoice-automation', intent: 'Medium', monetization: '₹₹' },
  { id: 50, category: 'Automation', problem: 'No Lead Followup', slug: 'lead-followup-automation', intent: 'High', monetization: '₹₹₹' },
  { id: 51, category: 'Automation', problem: 'Tools Not Integrated', slug: 'tools-not-integrated', intent: 'High', monetization: '₹₹' },
  { id: 52, category: 'Automation', problem: 'Ops Taking Too Long', slug: 'operations-automation', intent: 'High', monetization: '₹₹₹' },
  { id: 53, category: 'Automation', problem: 'WhatsApp Automation', slug: 'whatsapp-automation', intent: 'High', monetization: '₹₹' },
  { id: 54, category: 'Automation', problem: 'No CRM', slug: 'crm-setup', intent: 'High', monetization: '₹₹' },
  { id: 55, category: 'Data', problem: 'No Visibility', slug: 'no-business-visibility', intent: 'High', monetization: '₹₹₹' },
  { id: 56, category: 'Data', problem: 'No Dashboard', slug: 'dashboard-setup', intent: 'High', monetization: '₹₹₹' },
  { id: 57, category: 'Data', problem: 'Data Scattered', slug: 'data-centralization', intent: 'High', monetization: '₹₹' },
  { id: 58, category: 'Data', problem: 'Cash Flow Not Clear', slug: 'cashflow-visibility', intent: 'High', monetization: '₹₹' },
  { id: 59, category: 'Data', problem: 'No KPI Tracking', slug: 'kpi-dashboard', intent: 'High', monetization: '₹₹' },
  { id: 60, category: 'Data', problem: 'Marketing Not Tracked', slug: 'marketing-analytics-fix', intent: 'Medium', monetization: '₹₹' },
  { id: 61, category: 'Hybrid', problem: 'GST + Data Mismatch', slug: 'gst-data-mismatch-dashboard', intent: 'High', monetization: '₹₹₹' },
  { id: 62, category: 'Hybrid', problem: 'Financial Dashboard Needed', slug: 'financial-dashboard', intent: 'High', monetization: '₹₹₹' },
  { id: 63, category: 'Hybrid', problem: 'Compliance Not Automated', slug: 'compliance-automation', intent: 'High', monetization: '₹₹₹' },
  { id: 64, category: 'Hybrid', problem: 'GST Excel Chaos', slug: 'gst-excel-chaos', intent: 'High', monetization: '₹₹' },
  { id: 65, category: 'Hybrid', problem: 'Sales + Accounts Not Linked', slug: 'sales-accounting-integration', intent: 'High', monetization: '₹₹' },
  { id: 66, category: 'Psychology', problem: 'CA Not Responding', slug: 'ca-not-responding-help', intent: 'High', monetization: '₹₹₹' },
  { id: 67, category: 'Psychology', problem: 'Penalty Too High', slug: 'reduce-tax-penalty', intent: 'High', monetization: '₹₹₹' },
  { id: 68, category: 'Psychology', problem: 'Missed Deadline', slug: 'missed-tax-deadline-help', intent: 'High', monetization: '₹₹' },
  { id: 69, category: 'Psychology', problem: 'Urgent Help', slug: 'urgent-gst-help', intent: 'High', monetization: '₹₹' },
  { id: 70, category: 'Psychology', problem: 'Ignore Notice Fear', slug: 'ignore-gst-notice', intent: 'High', monetization: '₹₹' },
  { id: 71, category: 'Psychology', problem: 'High Penalty (1L+)', slug: 'high-penalty-fix', intent: 'High', monetization: '₹₹₹' },
];

const CATEGORY_CONTEXT = {
  GST: {
    audience: 'GST-registered businesses in India',
    riskSummary: 'late fee, interest, ITC blockage, and GST notice escalation',
    reassurance: 'Most GST cases can be corrected when filing and response sequence is handled properly.',
    painPoints: [
      'Portal alerts, pending returns, and penalty values keep increasing every cycle.',
      'Your internal team or external accountant is unsure of the right correction path.',
      'You are worried this may trigger additional notice, suspension, or vendor trust issues.',
    ],
    consequences: [
      { title: 'Financial hit compounds monthly', description: 'Late fee and interest continue until return, payment, and mismatch corrections are aligned.' },
      { title: 'Legal and compliance pressure rises', description: 'Unresolved filing gaps increase the chance of formal notice and stronger departmental action.' },
      { title: 'Cash flow gets tighter', description: 'Blocked ITC and delayed refunds directly affect working capital and vendor confidence.' },
    ],
    causes: [
      'Returns were filed without full invoice-level reconciliation against books and 2B.',
      'Payments, filings, and corrections happened in the wrong order.',
      'No monthly compliance control checklist existed to catch errors early.',
    ],
    steps: [
      { title: 'Case diagnosis in plain language', description: 'We map exactly where your return, payment, ledger, or notice timeline broke down.' },
      { title: 'Mismatch and liability computation', description: 'We reconcile books, GST data, and exposure amounts so there is no guesswork.' },
      { title: 'Correction plan with priority order', description: 'You get a clear sequence for filing, payment, response, and rectification.' },
      { title: 'Execution and department follow-up', description: 'We execute submissions and track acknowledgement until status is stabilized.' },
      { title: 'Control checklist going forward', description: 'We set a repeatable process so this issue does not return next month.' },
    ],
    beforeState: [
      'No clarity on whether to file first, pay first, or respond first.',
      'Fear of escalating penalty, blocked credit, and legal exposure.',
      'Constant follow-up stress and no accountability tracker.',
    ],
    afterState: [
      'A clear step-by-step fix route with documented timeline.',
      'Reduced liability exposure and stronger compliance control.',
      'Confidence that future GST cycles are monitored and predictable.',
    ],
    caseProfile: 'A Chennai-based distribution business with unresolved GST compliance backlog',
    seoTerms: [
      'gst issue resolution india',
      'gst penalty help',
      'gst mismatch fix',
      'gst notice response',
      'gst compliance consultant',
    ],
    proofLabels: {
      exposure: 'Potential GST liability before intervention',
      saved: 'Liability reduced or prevented',
      timeline: 'Time to stabilize the case',
    },
    faqFocus: 'GST filings, reconciliations, notices, and restoration support',
  },
  'Income Tax': {
    audience: 'Indian taxpayers, founders, and SMEs',
    riskSummary: 'demand notices, scrutiny, interest, and legal escalation',
    reassurance: 'Income tax cases are manageable when facts, filings, and response documents are aligned correctly.',
    painPoints: [
      'You have received a demand, defect, or mismatch communication and are unsure of the section-wise response.',
      'You fear the case may escalate because return data and supporting records do not match.',
      'You do not want an avoidable issue to become a prolonged scrutiny matter.',
    ],
    consequences: [
      { title: 'Tax demand can become enforceable', description: 'If left unattended, outstanding demand can move toward recovery proceedings.' },
      { title: 'Scrutiny intensity can increase', description: 'Delayed or weak replies increase the chance of deeper departmental review.' },
      { title: 'Financial planning gets disrupted', description: 'Refund blocks, demand pressure, and unresolved notices hurt cash predictability.' },
    ],
    causes: [
      'AIS, 26AS, books, and ITR schedules were not reconciled before filing.',
      'Responses were attempted without section-wise evidence mapping.',
      'Return corrections were delayed until after notice pressure increased.',
    ],
    steps: [
      { title: 'Notice and filing health check', description: 'We decode your issue in plain language and identify exact risk points.' },
      { title: 'Data reconciliation and evidence pack', description: 'We align AIS, ITR, books, and proofs into a defendable case file.' },
      { title: 'Section-wise response drafting', description: 'Every point is answered with relevant legal and factual backing.' },
      { title: 'Submission and follow-through', description: 'We track portal actions, acknowledgements, and required next filings.' },
      { title: 'Future-proof compliance setup', description: 'You get a practical review process before the next filing cycle.' },
    ],
    beforeState: [
      'Stress from notices with no clear response strategy.',
      'Uncertainty about actual demand versus correct tax position.',
      'Fear of long scrutiny cycles and repeat issues.',
    ],
    afterState: [
      'A structured response file and timeline you can trust.',
      'Lower risk of unnecessary demand escalation.',
      'Cleaner annual filing discipline for future cycles.',
    ],
    caseProfile: 'A founder-led SME in Pune handling complex personal and business tax records',
    seoTerms: [
      'income tax notice help india',
      'tax demand response',
      'itr correction support',
      'scrutiny case consultant',
      'ais itr mismatch fix',
    ],
    proofLabels: {
      exposure: 'Potential income-tax exposure before intervention',
      saved: 'Demand or penalty impact contained',
      timeline: 'Time to stabilize the case',
    },
    faqFocus: 'ITR corrections, notice replies, scrutiny handling, and demand mitigation',
  },
  ROC: {
    audience: 'Private limited companies and LLPs in India',
    riskSummary: 'additional filing fee, director disqualification, and strike-off risk',
    reassurance: 'Even delayed ROC cases can be regularized with the right filing sequence and documentation.',
    painPoints: [
      'Pending annual filings are piling up and penalties are rising.',
      'You are worried about DIN status, director compliance, or strike-off action.',
      'Company records are not audit-ready for investors, banks, or diligence.',
    ],
    consequences: [
      { title: 'Additional fee and penalties keep increasing', description: 'Each pending form and delayed year raises compliance costs significantly.' },
      { title: 'Directors and company records face legal risk', description: 'Non-compliance can trigger disqualification, strike-off, or show cause proceedings.' },
      { title: 'Business transactions get blocked', description: 'Banking, funding, and contractual activities are impacted when MCA records are weak.' },
    ],
    causes: [
      'Annual filings were deferred without a clear regularization plan.',
      'DSC, DIN, and signatory readiness were not monitored proactively.',
      'Supporting documentation and resolutions were incomplete or inconsistent.',
    ],
    steps: [
      { title: 'Compliance gap mapping', description: 'We list pending years, forms, and immediate legal-risk points.' },
      { title: 'Document and signatory readiness', description: 'We prepare DSC, DIN, and supporting records to avoid filing failures.' },
      { title: 'Priority filing sequence', description: 'Forms are filed in the right order to reduce risk and avoid rejections.' },
      { title: 'Notice or restoration handling', description: 'Where needed, we support replies and revival workflows.' },
      { title: 'Annual compliance rhythm setup', description: 'You get a practical calendar to prevent repeat defaults.' },
    ],
    beforeState: [
      'No clarity on pending forms and legal exposure.',
      'Growing fear around disqualification or strike-off.',
      'Uncertainty during due diligence or lender checks.',
    ],
    afterState: [
      'Pending years resolved with clear filing evidence.',
      'Improved MCA standing and lower legal pressure.',
      'A stable annual compliance routine.',
    ],
    caseProfile: 'A services company with multiple years of overdue MCA filings',
    seoTerms: [
      'roc late filing help',
      'director disqualification fix',
      'company strike off revival',
      'mca non compliance support',
      'din issue resolution',
    ],
    proofLabels: {
      exposure: 'Potential ROC liability before intervention',
      saved: 'Penalty and legal impact contained',
      timeline: 'Time to stabilize the case',
    },
    faqFocus: 'MCA filings, DIN/DSC readiness, strike-off revival, and ROC regularization',
  },
  TDS: {
    audience: 'Indian businesses deducting tax at source',
    riskSummary: 'late fee, interest, demand notices, and deductee credit disputes',
    reassurance: 'TDS issues are usually fixable with correct reconciliation and correction statements.',
    painPoints: [
      'Quarterly statements are delayed or mismatch with challan data.',
      'Demand notices are appearing and PAN-level credits are affected.',
      'You are unsure how to fix defaults without causing more mismatches.',
    ],
    consequences: [
      { title: 'Late fee and interest continue to grow', description: 'Unresolved TDS defaults can become expensive very quickly.' },
      { title: 'Demand and notices become repetitive', description: 'Incorrect corrections often trigger repeated defaults and follow-up communication.' },
      { title: 'Vendor and employee confidence drops', description: 'Credit mismatch affects counterparties and creates avoidable disputes.' },
    ],
    causes: [
      'Challan mapping and deductee details were not reconciled before filing.',
      'Correction statements were filed without full default analysis.',
      'No quarter-end process existed for data validation.',
    ],
    steps: [
      { title: 'Default analysis', description: 'We decode demand and statement status to identify exact cause.' },
      { title: 'Challan and deductee reconciliation', description: 'Data is corrected at source before filing revisions.' },
      { title: 'Statement correction filing', description: 'We submit the right corrections to address defaults and credit issues.' },
      { title: 'Demand follow-up', description: 'We monitor status and respond to pending action items.' },
      { title: 'Quarterly control setup', description: 'A repeatable system is created for future TDS cycles.' },
    ],
    beforeState: [
      'Frequent defaults and confusion around TRACES status.',
      'Growing pressure from notices and deductee complaints.',
      'No confidence in quarterly TDS process.',
    ],
    afterState: [
      'Clean correction workflow and better default control.',
      'Lower risk of repeated TDS demand notices.',
      'More predictable quarterly compliance operations.',
    ],
    caseProfile: 'A payroll-heavy SME struggling with repeated quarterly TDS defaults',
    seoTerms: [
      'tds late filing penalty help',
      'tds demand notice response',
      'traces default correction',
      'tds return correction support',
      'quarterly tds compliance',
    ],
    proofLabels: {
      exposure: 'Potential TDS liability before intervention',
      saved: 'Demand and penalty impact contained',
      timeline: 'Time to stabilize the case',
    },
    faqFocus: 'TDS return corrections, demand notices, and TRACES default resolution',
  },
  Payroll: {
    audience: 'Indian employers managing PF and ESI obligations',
    riskSummary: 'PF/ESI dues, inspection exposure, and employee trust impact',
    reassurance: 'PF and ESI non-compliance can be regularized with correct records and filing workflow.',
    painPoints: [
      'PF/ESI records are inconsistent across payroll, challans, and portal filings.',
      'You are worried about non-compliance notices and inspection risk.',
      'Employee-level issues are growing due to delayed or incorrect filings.',
    ],
    consequences: [
      { title: 'Dues and penalties can rise quickly', description: 'Delayed contribution and filing errors often attract additional burden.' },
      { title: 'Regulatory scrutiny can increase', description: 'Non-compliance can trigger notices, inspections, and repeated follow-ups.' },
      { title: 'People operations suffer', description: 'Employee claims and trust are affected when compliance records are weak.' },
    ],
    causes: [
      'Payroll data, attendance, and statutory records were not synchronized.',
      'Contribution calculations and filing calendars were inconsistent.',
      'No owner was accountable for statutory month-close checks.',
    ],
    steps: [
      { title: 'Statutory compliance audit', description: 'We identify PF/ESI gaps in contributions, returns, and records.' },
      { title: 'Data and challan correction', description: 'Employee-wise and month-wise discrepancies are reconciled.' },
      { title: 'Pending filing execution', description: 'Required filings and payments are completed in proper order.' },
      { title: 'Notice-risk mitigation', description: 'We support clarification and response where escalation exists.' },
      { title: 'Payroll compliance system', description: 'A repeatable monthly control process is set up.' },
    ],
    beforeState: [
      'Monthly payroll closes without confidence in statutory accuracy.',
      'Fear of notices, audits, and employee grievances.',
      'No clear statutory tracker for PF/ESI obligations.',
    ],
    afterState: [
      'Payroll and statutory data aligned with documented checks.',
      'Lower compliance risk and smoother employee handling.',
      'Month-close process with stronger control and accountability.',
    ],
    caseProfile: 'A growing employer regularizing delayed PF and ESI compliance',
    seoTerms: [
      'pf esi compliance fix',
      'pf esi notice help',
      'payroll statutory correction',
      'pf esi filing support',
      'employee compliance regularization',
    ],
    proofLabels: {
      exposure: 'Potential PF/ESI exposure before intervention',
      saved: 'Compliance impact contained',
      timeline: 'Time to stabilize the case',
    },
    faqFocus: 'PF and ESI reconciliation, delayed filing, and statutory payroll controls',
  },
  Accounting: {
    audience: 'Indian SMEs needing reliable books and finance clarity',
    riskSummary: 'tax mismatch, reporting errors, and poor decision quality',
    reassurance: 'Messy books can be cleaned and converted into decision-ready financial visibility.',
    painPoints: [
      'Books are incomplete, delayed, or disconnected from GST and bank records.',
      'You cannot trust P&L or cash numbers for business decisions.',
      'Year-end compliance pressure keeps increasing because monthly books are weak.',
    ],
    consequences: [
      { title: 'Tax and compliance mismatches increase', description: 'Weak bookkeeping leads to recurring gaps in GST, TDS, and ITR positions.' },
      { title: 'Business decisions become risky', description: 'Without clean books, pricing, hiring, and spending decisions are guesswork.' },
      { title: 'Cleanup cost becomes larger later', description: 'The longer data chaos continues, the harder and costlier the correction becomes.' },
    ],
    causes: [
      'No monthly close process or owner accountability for books.',
      'Data stayed fragmented across Excel files, bank statements, and GST exports.',
      'Reconciliation work was delayed until annual deadlines approached.',
    ],
    steps: [
      { title: 'Book health assessment', description: 'We identify missing periods, mismatches, and high-risk accounting gaps.' },
      { title: 'Ledger and source reconciliation', description: 'Bank, GST, and transaction-level data are aligned into clean books.' },
      { title: 'Backlog cleanup execution', description: 'Pending months are closed with documented corrections.' },
      { title: 'Management reporting reset', description: 'P&L, cash, and margin views are rebuilt for decision use.' },
      { title: 'Monthly close control system', description: 'A practical accounting rhythm is set to prevent future chaos.' },
    ],
    beforeState: [
      'Books are always behind and hard to trust.',
      'Tax filings and finance reports do not align.',
      'Owners make decisions without clean financial visibility.',
    ],
    afterState: [
      'Up-to-date books with clear reconciliation trail.',
      'GST and accounting numbers move in sync.',
      'Reliable monthly reporting for faster decisions.',
    ],
    caseProfile: 'A multi-service business rebuilding books after prolonged Excel-led tracking',
    seoTerms: [
      'bookkeeping cleanup service india',
      'books and gst mismatch fix',
      'accounting backlog cleanup',
      'excel accounting correction',
      'profit visibility setup',
    ],
    proofLabels: {
      exposure: 'Estimated monthly leakage before intervention',
      saved: 'Monthly improvement unlocked',
      timeline: 'Time to stabilize the finance system',
    },
    faqFocus: 'bookkeeping cleanup, reconciliation, and management reporting setup',
  },
  Website: {
    audience: 'Indian businesses trying to generate qualified leads online',
    riskSummary: 'traffic loss, poor conversion, and wasted marketing spend',
    reassurance: 'Website performance issues can be fixed with conversion-focused structure and technical cleanup.',
    painPoints: [
      'Traffic is coming in but leads are not converting consistently.',
      'Users are dropping off due to slow speed, weak mobile UX, or unclear messaging.',
      'You are spending on ads or SEO but results are not compounding.',
    ],
    consequences: [
      { title: 'Lead leakage continues every week', description: 'Without conversion fixes, qualified visitors keep leaving without action.' },
      { title: 'Marketing spend efficiency drops', description: 'Poor UX and weak funnel structure increase cost per acquisition.' },
      { title: 'Brand trust gets affected', description: 'Slow or broken pages reduce credibility during buyer evaluation.' },
    ],
    causes: [
      'Page messaging and offer hierarchy are unclear for high-intent visitors.',
      'Technical issues like speed, mobile UX, and SEO hygiene were ignored.',
      'No funnel or follow-up layer exists after the first page visit.',
    ],
    steps: [
      { title: 'Conversion and UX diagnosis', description: 'We audit page speed, messaging, mobile experience, and funnel gaps.' },
      { title: 'Priority fix blueprint', description: 'You get a ranked action plan by impact and implementation effort.' },
      { title: 'Page and funnel optimization', description: 'We execute copy, structure, CTA, and flow changes that move conversion.' },
      { title: 'Tracking and measurement setup', description: 'Events, forms, and source data are set up for decision-ready reporting.' },
      { title: 'Continuous performance iteration', description: 'We run focused improvements to keep conversion and lead quality growing.' },
    ],
    beforeState: [
      'Website traffic without consistent lead outcomes.',
      'No confidence in which page or step is leaking conversions.',
      'High bounce and weak mobile performance hurting growth.',
    ],
    afterState: [
      'Clear funnel with stronger lead conversion flow.',
      'Better speed, usability, and buyer trust signals.',
      'Actionable reporting tied to real pipeline outcomes.',
    ],
    caseProfile: 'A B2B services brand with traffic but low enquiry-to-call conversion',
    seoTerms: [
      'website conversion fix india',
      'website no leads solution',
      'slow website optimization',
      'high bounce rate fix',
      'sales funnel setup service',
    ],
    proofLabels: {
      exposure: 'Estimated monthly pipeline leakage before intervention',
      saved: 'Monthly conversion value recovered',
      timeline: 'Time to stabilize website performance',
    },
    faqFocus: 'website speed, SEO, conversion optimization, and funnel setup',
  },
  Automation: {
    audience: 'Indian teams with repetitive operations and manual workflows',
    riskSummary: 'time waste, delayed response, and process inconsistency',
    reassurance: 'Manual workload can be reduced quickly with practical, workflow-first automation.',
    painPoints: [
      'Critical tasks still depend on manual copy-paste and follow-up.',
      'Lead response, invoice flow, or internal operations are delayed and inconsistent.',
      'Tools are disconnected, causing duplicate work and status confusion.',
    ],
    consequences: [
      { title: 'Operational time cost keeps growing', description: 'Manual operations consume team bandwidth that should drive growth.' },
      { title: 'Revenue opportunities are missed', description: 'Slow follow-up and handoff delays cause lead and collection leakage.' },
      { title: 'Error risk remains high', description: 'Repetitive manual steps increase mistakes and rework across teams.' },
    ],
    causes: [
      'No workflow map existed to identify high-impact automation opportunities.',
      'Existing tools were configured in isolation without integration logic.',
      'No owner tracked automation uptime and exception handling.',
    ],
    steps: [
      { title: 'Workflow bottleneck audit', description: 'We identify repetitive tasks and their business impact.' },
      { title: 'Automation architecture design', description: 'Triggers, actions, and tool connections are defined with fallback logic.' },
      { title: 'Implementation and testing', description: 'Automations are deployed with real data and edge-case checks.' },
      { title: 'Team handover and SOPs', description: 'Your team gets clear operating instructions for daily use.' },
      { title: 'Optimization and scaling', description: 'We improve flow quality and expand automation coverage over time.' },
    ],
    beforeState: [
      'Manual tasks dominate core operations.',
      'Lead or process response time is inconsistent.',
      'No visibility into workflow efficiency.',
    ],
    afterState: [
      'Key workflows run automatically with fewer errors.',
      'Faster response and cleaner team coordination.',
      'Operational capacity increases without adding headcount pressure.',
    ],
    caseProfile: 'A fast-growing team replacing manual lead and ops workflows with automations',
    seoTerms: [
      'business process automation india',
      'lead followup automation setup',
      'invoice automation service',
      'whatsapp automation setup',
      'crm and tools integration',
    ],
    proofLabels: {
      exposure: 'Estimated monthly process loss before intervention',
      saved: 'Monthly operational value recovered',
      timeline: 'Time to stabilize automated operations',
    },
    faqFocus: 'automation roadmap, implementation, CRM integration, and WhatsApp workflows',
  },
  Data: {
    audience: 'Indian businesses lacking decision-ready reporting',
    riskSummary: 'blind decisions, delayed actions, and inaccurate performance tracking',
    reassurance: 'Scattered data can be centralized into a practical dashboard system quickly.',
    painPoints: [
      'Data lives in multiple sheets, tools, and portals with no single source of truth.',
      'You cannot see daily KPI movement or cash trends in one view.',
      'Marketing and operations decisions are being made on incomplete reports.',
    ],
    consequences: [
      { title: 'Decision latency increases', description: 'Without live visibility, corrective action is delayed and outcomes worsen.' },
      { title: 'Cash and growth risks are hidden', description: 'Teams miss early warning signals for cost overrun and pipeline drop.' },
      { title: 'Reporting workload keeps expanding', description: 'Manual reporting cycles consume time without improving clarity.' },
    ],
    causes: [
      'No centralized data model existed across finance, sales, and marketing systems.',
      'KPIs were not defined with clear owners and refresh cadence.',
      'Dashboards were either missing or not trusted by decision-makers.',
    ],
    steps: [
      { title: 'Data visibility audit', description: 'We identify data sources, gaps, and decision-critical metrics.' },
      { title: 'Metric and model design', description: 'A unified KPI structure is built with clear definitions.' },
      { title: 'Dashboard implementation', description: 'High-signal views are deployed for founders and operating teams.' },
      { title: 'Alert and review cadence setup', description: 'Regular review rhythm is created to drive action, not just reporting.' },
      { title: 'Scale and optimization', description: 'Dashboard logic is expanded as business complexity grows.' },
    ],
    beforeState: [
      'No single view for revenue, cash, and performance KPIs.',
      'Reports are delayed and inconsistent across departments.',
      'Leaders rely on assumptions instead of live numbers.',
    ],
    afterState: [
      'Centralized dashboard with trusted KPI definitions.',
      'Faster, data-backed business decisions.',
      'Lower reporting effort with stronger visibility.',
    ],
    caseProfile: 'A multi-channel business centralizing scattered reporting into one control tower',
    seoTerms: [
      'business dashboard setup india',
      'data centralization service',
      'kpi tracking dashboard',
      'cashflow visibility dashboard',
      'marketing analytics fix',
    ],
    proofLabels: {
      exposure: 'Estimated monthly decision loss before intervention',
      saved: 'Monthly value unlocked with visibility',
      timeline: 'Time to stabilize data reporting',
    },
    faqFocus: 'dashboard setup, data centralization, KPI tracking, and reporting cadence',
  },
  Hybrid: {
    audience: 'Businesses where compliance and operations data are disconnected',
    riskSummary: 'mismatch risk, duplicate work, and poor control over financial truth',
    reassurance: 'Hybrid finance-compliance problems can be fixed when process and data are solved together.',
    painPoints: [
      'GST, accounting, and dashboard numbers do not match each other.',
      'Teams are managing compliance from spreadsheets without system control.',
      'Sales, accounts, and reporting are disconnected, causing rework every month.',
    ],
    consequences: [
      { title: 'Mismatch exposure compounds', description: 'When compliance and data systems are disconnected, errors repeat each cycle.' },
      { title: 'Decision quality drops', description: 'Leaders cannot trust numbers when each team reports different figures.' },
      { title: 'Execution speed slows down', description: 'Manual reconciliation consumes time that should drive growth and control.' },
    ],
    causes: [
      'Compliance and reporting systems were built separately without integration design.',
      'Excel-dependent workflows replaced process discipline.',
      'No unified owner existed for data correctness across functions.',
    ],
    steps: [
      { title: 'Cross-system diagnostic', description: 'We identify where GST, books, sales, and dashboard pipelines diverge.' },
      { title: 'Unified data and compliance model', description: 'A single reconciliation logic is defined across systems.' },
      { title: 'Automation and dashboard rollout', description: 'Key reconciliations are automated with high-signal visibility.' },
      { title: 'Operational handover', description: 'Teams get clear SOPs for month-close and compliance review.' },
      { title: 'Continuous controls', description: 'Exceptions and alerts are tracked to prevent future drift.' },
    ],
    beforeState: [
      'No shared truth between GST, accounting, and business reports.',
      'Manual month-end reconciliation stress every cycle.',
      'Low confidence in numbers used for decisions.',
    ],
    afterState: [
      'Integrated compliance and reporting workflow.',
      'Faster closes with fewer reconciliation surprises.',
      'Decision-ready financial and operational visibility.',
    ],
    caseProfile: 'A scaling company aligning GST, accounting, and dashboard logic into one operating system',
    seoTerms: [
      'gst data mismatch fix',
      'financial dashboard setup',
      'compliance automation service',
      'sales accounting integration',
      'gst excel chaos solution',
    ],
    proofLabels: {
      exposure: 'Estimated monthly risk before intervention',
      saved: 'Monthly value recovered through integration',
      timeline: 'Time to stabilize hybrid operations',
    },
    faqFocus: 'cross-system reconciliation, dashboard integration, and compliance automation',
  },
  Psychology: {
    audience: 'Founders and business owners under urgent compliance stress',
    riskSummary: 'panic decisions, delayed action, and rapidly escalating penalties',
    reassurance: 'Urgent cases can be stabilized quickly when handled by a focused response team.',
    painPoints: [
      'You feel stuck because previous advisor support is delayed or unclear.',
      'You are worried the issue is already too late to fix.',
      'Stress is high and you need a clear route today, not generic advice.',
    ],
    consequences: [
      { title: 'Delay converts anxiety into real financial damage', description: 'Penalty, interest, and legal pressure often rise when action is postponed.' },
      { title: 'Wrong quick fixes can worsen the case', description: 'Unstructured responses can create additional mismatch and notice risk.' },
      { title: 'Business focus drops', description: 'Founder bandwidth gets consumed by unresolved compliance emergencies.' },
    ],
    causes: [
      'No owner drove an immediate, structured triage process.',
      'Past support focused on partial actions instead of full case control.',
      'Evidence, filings, and response timeline were not mapped together.',
    ],
    steps: [
      { title: 'Rapid triage call', description: 'We assess urgency and lock the first set of risk-control actions immediately.' },
      { title: 'Exposure and timeline clarity', description: 'You get a direct view of risk and the fastest safe correction route.' },
      { title: 'Execution support', description: 'Our team handles filing, response, and follow-up tasks end-to-end.' },
      { title: 'Penalty and escalation control', description: 'We prioritize actions that stop compounding damage first.' },
      { title: 'Stability plan', description: 'Once urgent pressure is controlled, we set a prevention framework.' },
    ],
    beforeState: [
      'High anxiety and no clear action sequence.',
      'Fear of severe penalty or notice escalation.',
      'Too many opinions and no accountable owner.',
    ],
    afterState: [
      'Immediate clarity on what to do first and why.',
      'Lower panic with a controlled execution timeline.',
      'Confidence that the case is being managed end-to-end.',
    ],
    caseProfile: 'A founder facing urgent compliance pressure with no reliable response support',
    seoTerms: [
      'urgent gst help',
      'tax penalty reduction support',
      'missed tax deadline help',
      'ca not responding solution',
      'high penalty fix india',
    ],
    proofLabels: {
      exposure: 'Potential emergency exposure before intervention',
      saved: 'Immediate financial risk contained',
      timeline: 'Time to stabilize urgent case',
    },
    faqFocus: 'urgent compliance triage, penalty control, and immediate response support',
  },
};

const PATTERN_RULES = [
  {
    test: /notice|show cause|demand|scrutiny/i,
    signals: ['A notice or formal communication is already active, and the response timeline feels risky.'],
    consequences: [{ title: 'Response window can close quickly', description: 'If no quality reply is submitted in time, escalation risk increases sharply.' }],
    causes: ['Teams often respond late because the notice is not mapped to supporting evidence quickly enough.'],
    steps: [{ title: 'Notice response drafting', description: 'We prepare section-wise responses with supporting evidence and clear submission logic.' }],
    keywords: ['notice reply support', 'show cause notice help', 'demand notice response'],
  },
  {
    test: /mismatch|wrong|error|defective|not linked|chaos/i,
    signals: ['Figures in returns, books, or reports do not match, and no one is confident about the correct number.'],
    consequences: [{ title: 'Mismatch multiplies downstream errors', description: 'One unresolved mismatch usually causes repeat problems in future cycles.' }],
    causes: ['Data was filed or reported before complete reconciliation across systems.'],
    steps: [{ title: 'Source-level reconciliation', description: 'We align source data first, then file or report using corrected numbers.' }],
    keywords: ['mismatch fix service', 'data reconciliation help', 'filing error correction'],
  },
  {
    test: /late|penalty|interest|missed deadline|high penalty/i,
    signals: ['Penalty and interest values are already moving upward, and delay is making the case heavier.'],
    consequences: [{ title: 'Compounding cost accelerates', description: 'Delayed corrective action usually increases direct financial burden each period.' }],
    causes: ['Corrective action started too late, without a priority-first damage-control sequence.'],
    steps: [{ title: 'Penalty containment sequence', description: 'We execute the highest-impact actions first to stop further compounding.' }],
    keywords: ['penalty reduction help', 'late filing fix', 'interest problem solution'],
  },
  {
    test: /refund|delay|stuck/i,
    signals: ['A refund or payout is delayed and cash flow planning is now under stress.'],
    consequences: [{ title: 'Working capital stays blocked', description: 'Delayed processing affects vendor payments and operating flexibility.' }],
    causes: ['Submission quality and follow-up rhythm were not aligned with processing requirements.'],
    steps: [{ title: 'Refund unblocking workflow', description: 'We review filing quality, correct gaps, and drive follow-up until movement starts.' }],
    keywords: ['refund stuck help', 'refund delay fix', 'cashflow recovery support'],
  },
  {
    test: /cancelled|revive|revival|strike off|disqualification/i,
    signals: ['Core legal status is impacted, and you need restoration before regular operations can continue.'],
    consequences: [{ title: 'Business continuity is at risk', description: 'Entity status issues can block contracts, banking, and statutory workflows.' }],
    causes: ['Compliance restoration actions were delayed or filed without complete documentation.'],
    steps: [{ title: 'Restoration and revival execution', description: 'We handle the filing path needed to restore legal and compliance continuity.' }],
    keywords: ['registration revival help', 'strike off revival', 'director disqualification remedy'],
  },
  {
    test: /no |not |manual|scattered|urgent|not responding|visibility|dashboard|funnel|leads/i,
    signals: ['The core system is currently reactive, with no reliable process control.'],
    consequences: [{ title: 'Operational leakage continues', description: 'Without a system fix, the same losses repeat every week.' }],
    causes: ['Work stayed dependent on ad-hoc execution rather than a documented operating system.'],
    steps: [{ title: 'System design and ownership setup', description: 'We set ownership, cadence, and controls so performance becomes predictable.' }],
    keywords: ['business process fix', 'operations stabilization', 'high intent problem support'],
  },
];

const COMPLIANCE_CATEGORIES = new Set(['GST', 'Income Tax', 'ROC', 'TDS', 'Payroll', 'Psychology']);
const MONEY_MULTIPLIER = { '₹': 1, '₹₹': 1.9, '₹₹₹': 3.1 };

function uniqueStrings(values) {
  const seen = new Set();
  const result = [];

  values.forEach((value) => {
    if (!value) return;
    const trimmed = value.trim();
    if (!trimmed) return;
    const key = trimmed.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    result.push(trimmed);
  });

  return result;
}

function uniqueByTitle(items) {
  const map = new Map();
  items.forEach((item) => {
    if (!item || !item.title || !item.description) return;
    const key = item.title.trim().toLowerCase();
    if (!map.has(key)) {
      map.set(key, { title: item.title.trim(), description: item.description.trim() });
    }
  });
  return Array.from(map.values());
}

function normalizeProblemPhrase(problem) {
  return problem.replace(/\s+/g, ' ').trim();
}

function toSlugPhrase(slug) {
  return slug.replace(/-/g, ' ');
}

function formatInr(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

function collectPatternContent(problem) {
  const matchedRules = PATTERN_RULES.filter((rule) => rule.test.test(problem));

  return {
    signals: uniqueStrings(matchedRules.flatMap((rule) => rule.signals ?? [])),
    consequences: uniqueByTitle(matchedRules.flatMap((rule) => rule.consequences ?? [])),
    causes: uniqueStrings(matchedRules.flatMap((rule) => rule.causes ?? [])),
    steps: matchedRules.flatMap((rule) => rule.steps ?? []),
    keywords: uniqueStrings(matchedRules.flatMap((rule) => rule.keywords ?? [])),
  };
}

function buildMetaTitle(entry) {
  const urgencyTag = entry.intent === 'High' ? 'Urgent Help' : 'Expert Help';
  return `${entry.problem} ${urgencyTag} | Taxera`;
}

function buildMetaDescription(entry) {
  const actionLine =
    entry.intent === 'High'
      ? 'Do not wait, act now before it gets worse.'
      : 'Fix this early before it turns into a bigger issue.';

  return `Facing ${entry.problem} in India? Taxera helps you diagnose the root cause, execute the right fix, and reduce risk. ${actionLine}`;
}

function buildKeywords(entry, context, patternKeywords) {
  const problemPhrase = normalizeProblemPhrase(entry.problem);
  const problemLower = problemPhrase.toLowerCase();
  const categoryLower = entry.category.toLowerCase();
  const slugPhrase = toSlugPhrase(entry.slug);

  return uniqueStrings([
    problemPhrase,
    `${problemPhrase} help`,
    `${problemPhrase} fix`,
    `${problemLower} india`,
    `${problemLower} solution`,
    `${categoryLower} consultant india`,
    `${categoryLower} compliance support`,
    `${slugPhrase}`,
    'taxera',
    ...context.seoTerms,
    ...patternKeywords,
  ]);
}

function buildExposureMetrics(entry) {
  const categoryIsCompliance = COMPLIANCE_CATEGORIES.has(entry.category);
  const base = categoryIsCompliance ? 38000 : 26000;
  const multiplier = MONEY_MULTIPLIER[entry.monetization] ?? 1.4;
  const urgency = entry.intent === 'High' ? 1.24 : 0.96;
  const variance = 1 + (entry.id % 6) * 0.11;
  const exposure = Math.round(base * multiplier * urgency * variance);
  const captureRatio = categoryIsCompliance ? 0.66 + (entry.id % 3) * 0.07 : 0.54 + (entry.id % 3) * 0.08;
  const reduction = Math.round(exposure * Math.min(captureRatio, 0.82));
  const timelineDays = 4 + (entry.id % 7);

  return { exposure, reduction, timelineDays };
}

function buildFaqs(entry, context) {
  const problem = normalizeProblemPhrase(entry.problem);
  const topic = entry.category;

  return [
    {
      question: `Can "${problem}" still be fixed if I have already delayed action?`,
      answer: `In most cases, yes. The key is to act immediately, map current exposure, and follow a correct execution sequence. Delay usually increases cost and risk.`,
    },
    {
      question: `How quickly can your team start work on this ${topic} issue?`,
      answer: 'We start with an urgent triage review, usually on priority. The first objective is to stabilize risk and stop further compounding damage.',
    },
    {
      question: 'What should I keep ready before the first discussion?',
      answer: 'Share notices, return history, ledger or data extracts, and any previous advisor communication. We use these to produce a practical action plan quickly.',
    },
    {
      question: 'Will you only advise, or also execute the correction and follow-up?',
      answer: 'We handle execution, filing support, response drafting, and follow-up until the issue reaches a controlled state.',
    },
    {
      question: 'Can you work with my current CA, accountant, or internal team?',
      answer: 'Yes. We can operate as a specialist intervention layer while coordinating with your existing team to complete the fix faster.',
    },
    {
      question: `Do you support ongoing prevention after this is fixed?`,
      answer: `Yes. After closure, we set practical controls for ${context.faqFocus} so the same issue does not return.`,
    },
  ];
}

function buildProblemPage(entry) {
  const context = CATEGORY_CONTEXT[entry.category] ?? CATEGORY_CONTEXT.Psychology;
  const patternContent = collectPatternContent(entry.problem);
  const metrics = buildExposureMetrics(entry);
  const keywords = buildKeywords(entry, context, patternContent.keywords);
  const problem = normalizeProblemPhrase(entry.problem);
  const urgencyLine =
    entry.intent === 'High'
      ? 'Do not wait. This usually gets more expensive and riskier each day.'
      : 'Act now and fix this before it compounds into a bigger problem.';

  const problemSignals = uniqueStrings([
    ...context.painPoints,
    ...patternContent.signals,
    `You are searching for immediate clarity because ${problem.toLowerCase()} is already affecting business decisions.`,
  ]).slice(0, 5);

  const consequences = uniqueByTitle([
    ...context.consequences,
    ...patternContent.consequences,
    {
      title: 'Compounding damage reduces your options',
      description: 'The longer this stays unresolved, the fewer low-friction correction options remain available.',
    },
  ]).slice(0, 4);

  const causes = uniqueStrings([
    ...context.causes,
    ...patternContent.causes,
    `Ownership and accountability for ${problem.toLowerCase()} were not clearly assigned.`,
  ]).slice(0, 5);

  const solutionSteps = [...context.steps, ...patternContent.steps]
    .slice(0, 6)
    .map((step, index) => ({
      num: String(index + 1).padStart(2, '0'),
      title: step.title,
      description: step.description,
    }));

  const beforeState = uniqueStrings([
    ...context.beforeState,
    `Pressure keeps rising because ${problem.toLowerCase()} is still unresolved.`,
  ]).slice(0, 4);

  const afterState = uniqueStrings([
    ...context.afterState,
    `You regain control with a documented plan and active monitoring for ${problem.toLowerCase()}.`,
  ]).slice(0, 4);

  const whatsappMessage = `Hi Taxera, I need urgent help for "${problem}". Please share the fastest plan to fix this today.`;

  return {
    ...entry,
    slug: entry.slug.toLowerCase(),
    seo: {
      title: buildMetaTitle(entry),
      description: buildMetaDescription(entry),
      keywords,
    },
    hero: {
      headline: `${problem}? Fix This Before It Gets Worse.`,
      subheadline: `If ignored, this can trigger ${context.riskSummary}. ${context.reassurance}`,
      urgencyLine,
      primaryCta: 'Get Help Now',
      secondaryCta: 'Fix This Today',
      whatsappMessage,
      highlights: [
        'Fear to clarity in one focused review',
        'Actionable fix plan with clear timelines',
        'Hands-on execution, not just advisory',
      ],
    },
    amplification: {
      title: `Why "${problem}" Feels Overwhelming Right Now`,
      intro: `If this page feels uncomfortably accurate, that is expected. Most businesses facing ${problem.toLowerCase()} report the same stress pattern.`,
      bullets: problemSignals,
    },
    consequences: {
      title: 'What Happens If You Ignore It',
      intro: 'This is the critical part: unresolved issues usually become more expensive, more legal, and harder to reverse.',
      items: consequences,
    },
    diagnosis: {
      title: 'What Usually Went Wrong',
      intro: `The issue is rarely one single mistake. It is usually a chain of missed checks, delayed actions, and unclear ownership.`,
      bullets: causes,
    },
    solution: {
      title: 'How We Fix It Step by Step',
      intro: 'You get a clear process with accountability at each step, so action starts immediately and moves in the right order.',
      steps: solutionSteps,
    },
    outcome: {
      title: 'Outcome: From Panic to Control',
      beforeLabel: 'Before',
      afterLabel: 'After',
      beforeBullets: beforeState,
      afterBullets: afterState,
    },
    proof: {
      title: `Real Case Example: ${problem} Stabilized in ${metrics.timelineDays} Working Days`,
      scenario: `${context.caseProfile} came to us with ${problem.toLowerCase()} and rising pressure.`,
      action: 'We diagnosed root cause, executed corrections in sequence, and managed follow-up until the case moved into a stable state.',
      result: `Estimated exposure of ${formatInr(metrics.exposure)} was contained by ${formatInr(metrics.reduction)} through priority-led execution.`,
      metrics: [
        { label: context.proofLabels.exposure, value: formatInr(metrics.exposure) },
        { label: context.proofLabels.saved, value: formatInr(metrics.reduction) },
        { label: context.proofLabels.timeline, value: `${metrics.timelineDays} working days` },
      ],
    },
    faqs: buildFaqs(entry, context),
    finalCta: {
      title: `Do Not Wait on "${problem}"`,
      description: 'Act now. Get a focused specialist review, a practical fix sequence, and direct execution support.',
      urgencyLine: 'Fix this before it gets worse. The earlier you act, the more options you keep.',
      whatsappMessage,
    },
  };
}

export const PROBLEM_PAGES = PROBLEM_ENTRIES.map(buildProblemPage);

const PROBLEM_PAGE_MAP = new Map(PROBLEM_PAGES.map((page) => [page.slug, page]));

export function getProblemPage(slug) {
  if (!slug) return null;
  return PROBLEM_PAGE_MAP.get(slug.toLowerCase()) ?? null;
}

export function getRelatedProblemPages(slug, category, limit = 4) {
  const sameCategory = PROBLEM_PAGES.filter((page) => page.slug !== slug && page.category === category);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const remaining = PROBLEM_PAGES.filter((page) => page.slug !== slug && page.category !== category);
  return [...sameCategory, ...remaining].slice(0, limit);
}
