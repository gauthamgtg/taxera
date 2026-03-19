import { SERVICES_DATA } from './servicesData';

const SERVICE_CONTENT = {
  'sole-proprietorship-registration': {
    intro: 'Start quickly under your own name with clean tax setup and compliant business documentation.',
    detailed: [
      'Sole proprietorship is the fastest way to start a business when ownership, control, and operations are managed by one person. There is no separate legal entity, so approvals are tied to the proprietor and business trade name.',
      'The practical challenge is not forming the structure, but getting all support registrations in the right order: business proof, bank account readiness, GST if required, and industry-specific local registrations.',
    ],
    documents: ['PAN and Aadhaar of proprietor', 'Business address proof and utility bill', 'Passport-size photo and mobile-linked email', 'Bank account details or cancelled cheque'],
    whoNeeds: ['Freelancers and consultants billing clients in their own name', 'Retail and local trade businesses starting with low compliance overhead', 'New founders testing a business model before incorporating a company'],
  },
  'msme-udyam-registration': {
    intro: 'Secure Udyam registration to access MSME benefits, priority lending, and subsidy-linked schemes.',
    detailed: [
      'MSME and Udyam registration is often the first compliance milestone for small businesses because it unlocks practical benefits such as delayed payment protection, loan support, and tender preference.',
      'Most delays happen due to mismatch in PAN-linked business details and NIC activity selection. Correct classification matters because banks and departments refer to this data when reviewing benefits.',
    ],
    documents: ['PAN and Aadhaar of owner or authorised signatory', 'Business activity details for manufacturing or services', 'Business address and contact details', 'Turnover and investment information where applicable'],
    whoNeeds: ['Manufacturing units and small service providers', 'Businesses applying for MSME-friendly credit lines', 'Founders participating in government or institutional vendor onboarding'],
  },
  'private-limited-company-registration': {
    intro: 'Build a funding-ready company structure with clear ownership, limited liability, and MCA-compliant incorporation.',
    detailed: [
      'Private limited company registration is preferred when founders need a scalable legal structure with shareholding clarity, investor readiness, and better credibility in contracts and banking.',
      'Incorporation quality depends on accurate drafting of object clauses, director details, and registered office documentation. Fixing these later costs time and can disrupt compliance timelines.',
    ],
    documents: ['PAN, Aadhaar, and address proof of all directors', 'Passport-size photos and email and mobile of all directors', 'Registered office address proof and NOC from owner', 'Preferred company names and business activity summary'],
    whoNeeds: ['Startup founders preparing for funding', 'Businesses onboarding enterprise clients requiring company structure', 'Teams with multiple co-founders requiring formal equity and governance'],
  },
  'llp-registration': {
    intro: 'Set up an LLP for partnership-driven operations with limited liability and structured partner roles.',
    detailed: [
      'LLP suits founders who want operational flexibility with a legally recognised partnership framework. It is widely used by agencies, professional firms, and service-led businesses.',
      'The LLP Agreement is the critical document. Profit-sharing, authority limits, and withdrawal rules should be drafted clearly from day one to prevent disputes later.',
    ],
    documents: ['PAN, Aadhaar, and address proof of designated partners', 'Registered office proof with utility bill and NOC', 'Preferred LLP name options and business description', 'Partner contribution and profit-sharing understanding'],
    whoNeeds: ['Professional partnerships such as design, legal, and consulting firms', 'Two or more founders who prefer partnership-style governance', 'Service businesses not immediately planning equity fundraising'],
  },
  'opc-registration': {
    intro: 'Register a one-person company when you want company benefits without adding co-founders.',
    detailed: [
      'OPC gives a solo founder the legal comfort of a company while retaining single ownership. It works well when operations are founder-led but clients expect corporate structure.',
      'Nominee selection and shareholding documentation should be handled carefully to avoid future rework when converting to private limited at scale.',
    ],
    documents: ['PAN, Aadhaar, and address proof of founder', 'Nominee PAN, Aadhaar, and consent documents', 'Registered office proof and NOC', 'Business activity brief and proposed company name'],
    whoNeeds: ['Solo founders seeking limited liability', 'Consultants moving from individual invoicing to company billing', 'Owner-led businesses planning structured growth'],
  },
  'partnership-firm-registration': {
    intro: 'Formalise partnership operations with deed drafting, role clarity, and registrar-level compliance support.',
    detailed: [
      'Partnership firms remain common for local businesses and family-run ventures. A strong deed is essential because it governs contributions, profit split, withdrawals, and dispute handling.',
      'Registration and tax alignment should be done together so banking, GST, and contract records match the exact legal name and partner details.',
    ],
    documents: ['PAN, Aadhaar, and address proof of all partners', 'Business address proof and rental agreement if applicable', 'Partnership terms covering contribution, profit ratio, and authority rules', 'Witness details for deed execution'],
    whoNeeds: ['Family-run businesses and local trading entities', 'Two or more founders needing low-cost setup', 'Businesses wanting formal partnership terms before expansion'],
  },
  'gst-registration': {
    intro: 'Apply for GST correctly with clean documentation and filing-ready profile setup from the first submission.',
    detailed: [
      'GST registration is a compliance gatekeeper for many businesses. Rejections usually happen due to address proof mismatch, bank document issues, or incomplete business activity details.',
      'A filing-ready GST profile needs more than GSTIN approval. You should set up return calendar, invoice format basics, and login controls to avoid missed deadlines.',
    ],
    documents: ['PAN and Aadhaar of proprietor or authorised signatory', 'Business constitution proof such as COI or deed', 'Address proof with utility bill and NOC if rented', 'Bank statement or cancelled cheque with matching name'],
    whoNeeds: ['Businesses crossing turnover threshold', 'E-commerce sellers with mandatory GST requirement', 'B2B vendors needing tax invoice and input credit flow'],
  },
  'pan-tan-registration-business': {
    intro: 'Get business PAN and TAN filings handled correctly for taxation, banking, and payroll-linked compliance.',
    detailed: [
      'PAN and TAN are foundational registrations for tax compliance and financial operations. Errors in legal name mapping can delay bank onboarding and return filings.',
      'When planned along with incorporation and GST, PAN and TAN setup becomes smoother and avoids repetitive correction requests.',
    ],
    documents: ['Entity formation documents or proprietor identification', 'Address proof and authorised signatory details', 'Incorporation acknowledgement where applicable', 'Contact details for verification and dispatch'],
    whoNeeds: ['Newly registered companies and LLPs', 'Businesses starting payroll and TDS deduction', 'Entities opening current accounts and compliance dashboards'],
  },
  'import-export-code-iec': {
    intro: 'Secure IEC registration for cross-border trade and set up your export-import profile without DGFT confusion.',
    detailed: [
      'IEC is mandatory for most import and export transactions and is linked to DGFT records used during customs and remittance workflows.',
      'Businesses benefit when IEC filing is aligned with GST, bank AD code readiness, and product-level compliance checks before the first shipment.',
    ],
    documents: ['PAN and Aadhaar of owner or signatory', 'Business constitution proof and GST details', 'Current account details and cancelled cheque', 'Registered office proof and contact details'],
    whoNeeds: ['Product exporters and import resellers', 'Manufacturers entering international markets', 'Global marketplace sellers handling cross-border orders'],
  },
  'shop-establishment-license': {
    intro: 'Register your business under state Shop and Establishment rules to operate legally and avoid local compliance notices.',
    detailed: [
      'Shop and Establishment registration validates commercial operation at the local authority level and is frequently requested by banks, vendors, and labour inspections.',
      'State-specific rule differences matter. Working hour rules, employee record formats, and renewal conditions should be understood early.',
    ],
    documents: ['Business address proof and rental or ownership details', 'Identity proof of proprietor or authorised signatory', 'Business activity details and employee count', 'Supporting registration references where already available'],
    whoNeeds: ['Retail stores and local service offices', 'Early-stage companies opening a physical office', 'Businesses needing local trade proof for banking or vendor onboarding'],
  },
  'fssai-license-food-businesses': {
    intro: 'Apply for the right FSSAI category with practical guidance on document readiness and post-license obligations.',
    detailed: [
      'Food businesses are required to obtain the correct FSSAI category: Basic, State, or Central, based on turnover and business model. Wrong category selection can trigger re-filing.',
      'Beyond approval, hygiene documentation and labelling compliance are important for inspections and marketplace onboarding.',
    ],
    documents: ['PAN or Aadhaar and passport photo of applicant', 'Address proof of food premises', 'Food category and business model details', 'Water test report and supporting declarations where required'],
    whoNeeds: ['Cloud kitchens, restaurants, and food manufacturers', 'Packaged food and D2C edible brands', 'Distributors and aggregators handling food products'],
  },
  'professional-tax-registration': {
    intro: 'Register for Professional Tax correctly based on your state rules, staffing model, and payroll timeline.',
    detailed: [
      'Professional Tax obligations are state-driven and often missed during initial setup. Correct registration avoids notices and payroll blockages later.',
      'For employers, registration and enrollment flows can differ. Handling both at setup stage reduces compliance friction.',
    ],
    documents: ['Entity PAN and constitution documents', 'Address proof and authorised signatory identity', 'Employee and salary slab estimate', 'Bank details and contact information'],
    whoNeeds: ['Employers running monthly payroll', 'Self-employed professionals in PT-applicable states', 'Growing teams moving from informal to structured payroll'],
  },
  'digital-signature-certificate-dsc': {
    intro: 'Issue Class 3 DSC with verified identity and secure setup for MCA, GST, and tax filings.',
    detailed: [
      'DSC is required for multiple statutory filings and procurement portals. Invalid documentation or video KYC mismatch usually delays issuance.',
      'Teams should maintain active DSC validity tracking because expired signatures can halt urgent filings at the worst time.',
    ],
    documents: ['PAN and Aadhaar of applicant', 'Passport photo and video verification readiness', 'Mobile and email linked to Aadhaar', 'Address proof if required by certifying authority'],
    whoNeeds: ['Directors, designated partners, and authorised signatories', 'Businesses filing MCA, GST, and income tax returns', 'Teams participating in tenders and e-procurement'],
  },
  'director-kyc-dir-3-kyc': {
    intro: 'Complete annual DIR-3 KYC on time to keep director DIN status active and avoid penalties.',
    detailed: [
      'DIR-3 KYC is a mandatory annual MCA compliance for directors holding DIN. Missing deadline can deactivate DIN and create filing blocks across company compliance.',
      'Many penalties are avoidable with timely filing and updated personal contact details matched with MCA records.',
    ],
    documents: ['Director DIN and PAN', 'Aadhaar-linked mobile and email access', 'Address proof and passport-size photo', 'Digital Signature Certificate of director'],
    whoNeeds: ['All directors with active DIN', 'Companies with multiple directors requiring yearly MCA hygiene', 'Founders restoring DIN after non-filing periods'],
  },
  'dpiit-startup-india-recognition': {
    intro: 'Apply for Startup India recognition with clear eligibility positioning and documentation quality checks.',
    detailed: [
      'DPIIT recognition can unlock tax and ecosystem benefits, but application quality matters. Business innovation explanation, incorporation details, and sector positioning should be written clearly.',
      'Founders preparing for grants, incubation, or tax planning usually benefit from recognition when timelines and eligibility are reviewed in advance.',
    ],
    documents: ['Certificate of incorporation and entity details', 'Founder profile and shareholding details', 'Problem statement, solution summary, and innovation note', 'Website, pitch material, and product proof where available'],
    whoNeeds: ['Early-stage startups seeking policy-backed benefits', 'Tech and innovation-led businesses planning funding outreach', 'Founders applying for grant, accelerator, or incubation programs'],
  },
  'legal-contract-drafting': {
    intro: 'Get business contracts drafted with practical commercial terms, risk controls, and enforceable legal language.',
    detailed: [
      'Contract quality directly affects payment safety, scope control, and dispute risk. Generic templates often miss the commercial realities of your specific deal.',
      'A properly drafted agreement should define deliverables, timelines, liability, confidentiality, and exit terms in language both parties can operationalise.',
    ],
    documents: ['Party details and signatory information', 'Scope, milestones, and commercial terms', 'Payment schedule, refund conditions, and penalties', 'Specific clauses required such as NDA, IP, non-compete, or termination'],
    whoNeeds: ['Agencies and service providers signing recurring contracts', 'Founders onboarding vendors or partners', 'Businesses formalising client agreements before scaling'],
  },
  'iso-certification-consulting': {
    intro: 'Prepare for ISO assessment with process documentation, internal alignment, and audit-ready evidence.',
    detailed: [
      'ISO certification is not just a form submission. It requires process documentation, role accountability, and records that auditors can verify against standard requirements.',
      'Companies that prepare with structured internal checklists typically complete certification faster and avoid repeated non-conformity cycles.',
    ],
    documents: ['Business process map and responsibility matrix', 'Quality policy and SOP drafts', 'Existing operational records and templates', 'Scope definition for the target ISO standard'],
    whoNeeds: ['Service and manufacturing teams bidding for enterprise contracts', 'Companies formalising quality management practices', 'Businesses preparing for audits and vendor qualification reviews'],
  },
  'gst-lut-application': {
    intro: 'File LUT correctly each financial year so export billing and zero-rated supply workflows stay uninterrupted.',
    detailed: [
      'LUT filing looks simple, but exporters often miss the timing, declaration route, or support documents needed to keep the zero-rated supply position clean for the new year.',
      'When LUT is not filed correctly or on time, export documentation and downstream GST working can become messier than expected. The practical value is in getting the filing completed before billing pressure starts.',
    ],
    documents: ['GST login access and authorised signatory details', 'IEC and export business details where relevant', 'Previous LUT reference if this is a renewal cycle', 'Current financial year filing confirmation details'],
    whoNeeds: ['Exporters making zero-rated supplies without paying integrated tax', 'Service exporters renewing LUT each financial year', 'Businesses aligning export invoicing with annual GST compliance'],
    seoTerms: ['gst lut application', 'letter of undertaking under gst', 'lut for export'],
    metaDescription: 'GST LUT application support for exporters and zero-rated suppliers in India. File Letter of Undertaking correctly with Taxera and keep export GST workflows on track.',
  },
  'monthly-gst-return-filing-small-business': {
    intro: 'Keep monthly GST returns clean and on time when your business has one GSTIN and manageable invoice volume.',
    detailed: [
      'Small-business GST filing still needs discipline around sales summaries, purchase records, and portal review. Most filing issues come from delayed data collation rather than complexity alone.',
      'A good monthly process helps smaller teams avoid late filing pressure and keeps the annual return cycle cleaner later in the year.',
    ],
    documents: ['Monthly sales and purchase summary', 'Invoice records and reconciliation notes', 'GST portal access or filed-data export', 'Previous return reference if corrections are needed'],
    whoNeeds: ['Small traders with routine monthly GST obligations', 'Service businesses operating under one GSTIN', 'Founder-led businesses that want a stable filing rhythm without in-house GST staff'],
    seoTerms: ['monthly gst return filing', 'gst filing for small business', 'gstr-1 gstr-3b support'],
  },
  'monthly-gst-return-filing-medium-business': {
    intro: 'Manage recurring GST filings with better control when invoice volume, reconciliations, and monthly adjustments are heavier.',
    detailed: [
      'Medium-volume GST filing usually involves more reconciliation work, more invoice movement, and a higher chance of mismatch between books and return data.',
      'What matters here is not just filing on time but keeping the process organised enough that notices, annual return cleanup, and internal review do not become recurring pain points.',
    ],
    documents: ['Detailed sales and purchase data', 'Reconciliation workings across books and GST figures', 'Credit and adjustment notes for the month', 'GST portal access and previous filing history'],
    whoNeeds: ['Businesses with higher invoice count across monthly returns', 'Growing companies that need stronger reconciliation before filing', 'Finance teams that want GST filing support tied to monthly record accuracy'],
    seoTerms: ['gst compliance for medium business', 'high volume gst return filing', 'gst reconciliation support'],
  },
  'gst-annual-return-gstr-9': {
    intro: 'Prepare GSTR-9 with proper year-end reconciliation so the annual return reflects the real GST position of the business.',
    detailed: [
      'GSTR-9 filing becomes difficult when monthly returns, books, and annual summaries are not aligned before the annual return process starts.',
      'The work is usually less about one final upload and more about tracing mismatches, reviewing turnover and ITC positions, and documenting what changed across the year.',
    ],
    documents: ['Year-wise GST return filings', 'Books of accounts or annual turnover summaries', 'Input tax credit reconciliation workings', 'Adjustments, reversals, and audit-related notes where relevant'],
    whoNeeds: ['GST-registered businesses filing annual return obligations', 'Companies with year-end reconciliation gaps across books and GST data', 'Teams preparing cleaner annual GST records before notice or audit risk increases'],
    seoTerms: ['gstr-9 filing', 'gst annual return', 'annual gst return reconciliation'],
    metaDescription: 'GSTR-9 annual return filing support in India with year-end GST reconciliation, turnover review, and cleaner annual compliance support from Taxera.',
  },
  'gst-notice-reply-basic': {
    intro: 'Respond to routine GST notices with a structured draft, supporting records, and a clearer view of what triggered the query.',
    detailed: [
      'Basic GST notices are often tied to filing mismatches, return data inconsistency, or document gaps that were not handled properly at the earlier filing stage.',
      'A good reply should address the department query directly, back the response with records, and reduce the chance of the same issue escalating into a more detailed matter.',
    ],
    documents: ['Copy of GST notice or communication', 'Relevant GST returns and working papers', 'Sales, purchase, or reconciliation evidence linked to the issue', 'Previous reply history if any'],
    whoNeeds: ['Businesses that received routine GST mismatch or clarification notices', 'Taxpayers responding to portal-driven department queries', 'Teams that need a practical reply route before the issue escalates further'],
    seoTerms: ['gst notice reply', 'reply to gst notice', 'gst mismatch response'],
    metaDescription: 'GST notice reply support for routine mismatch, clarification, and filing-related department queries. Taxera helps draft responses with supporting GST records.',
  },
  'individual-itr-salary-only': {
    intro: 'File salary-only ITR accurately with cleaner disclosure of deductions, tax credits, and annual income records.',
    detailed: [
      'Salary-only returns are usually straightforward, but mismatched tax credits, missed deductions, or incorrect disclosure can still create processing issues or later notices.',
      'The real benefit is making sure Form 16, AIS, TIS, and tax payment records are reconciled before filing rather than corrected after the return is processed.',
    ],
    documents: ['PAN, Form 16, and login details', 'AIS, TIS, and Form 26AS access or copies', 'Deduction proofs and investment details where relevant', 'Bank details for refund credit'],
    whoNeeds: ['Salaried individuals with annual ITR filing obligations', 'Employees claiming deductions or refunds', 'Taxpayers who want cleaner personal tax records with lower correction risk'],
    seoTerms: ['salary itr filing', 'individual income tax return salary', 'itr for salaried employee'],
  },
  'individual-itr-business-capital-gains': {
    intro: 'Handle individual tax filing properly when business income, capital gains, or multiple income heads make the return more sensitive.',
    detailed: [
      'Returns involving business income, capital gains, or multiple properties need a stronger review because disclosure mistakes can affect tax computation and later compliance responses.',
      'These cases usually depend on cleaner schedules, supporting workings, and a sharper understanding of how different income heads interact in the final return.',
    ],
    documents: ['PAN and tax portal access', 'Business income details, capital gains statements, or property income records', 'Bank statements and tax payment details', 'Previous year return and related supporting schedules'],
    whoNeeds: ['Individuals reporting business or professional income', 'Taxpayers with capital market or property transactions', 'Filers with mixed income heads and more complex return schedules'],
    seoTerms: ['itr with capital gains', 'business income itr filing', 'complex individual itr'],
  },
  'business-itr-filing-simple': {
    intro: 'File business income tax returns with a cleaner link between books, tax computation, and annual compliance.',
    detailed: [
      'Simple business ITR work still requires careful review of books, tax adjustments, and entity-level disclosures so the return remains supportable if reviewed later.',
      'When entity returns are handled in isolation from books or related compliance records, the risk of mismatch grows across tax, ROC, and management reporting.',
    ],
    documents: ['Books of account and financial statements', 'PAN, portal access, and entity profile details', 'Tax payment challans and related schedules', 'Previous return copy and adjustment notes if applicable'],
    whoNeeds: ['Proprietors, firms, LLPs, and companies with standard annual tax filing needs', 'Entities with clean books that need reliable return preparation', 'Businesses aligning year-end accounting and tax filing timelines'],
    seoTerms: ['business itr filing', 'llp company income tax return', 'firm tax return filing'],
  },
  'complex-itr-filing': {
    intro: 'Manage complex income tax return preparation when the case involves multiple branches, heavier books, or a more layered tax position.',
    detailed: [
      'Complex ITR cases usually involve more schedules, more reconciliations, and a higher chance that book figures, tax positions, and supporting documents need deeper review before filing.',
      'These returns benefit from a more deliberate process because a weak first submission can create downstream notice or correction work later.',
    ],
    documents: ['Detailed books and branch-level financial records', 'Supporting schedules for tax adjustments and disclosures', 'Tax computation workings and challan details', 'Previous return, assessments, or notice history where relevant'],
    whoNeeds: ['Businesses with multi-branch or high-volume accounting environments', 'Entities with layered tax adjustments and complex disclosures', 'Teams that need a more review-heavy tax filing process'],
    seoTerms: ['complex itr filing', 'company tax return with multiple branches', 'advanced income tax return support'],
  },
  'tds-return-filing-small': {
    intro: 'Keep quarterly TDS compliance on track when the deductee count is manageable but deadlines still matter.',
    detailed: [
      'Small-volume TDS work can still become messy when challans, deductee details, and deduction records are not organised through the quarter.',
      'A clean quarterly process helps avoid correction statements, delayed credits, and avoidable confusion for vendors or employees.',
    ],
    documents: ['Quarter-wise deduction data', 'Challan details and payment references', 'Deductee PAN and related records', 'Prior TDS filing history if corrections are pending'],
    whoNeeds: ['Lean businesses filing quarterly TDS statements', 'Employers and payers with a smaller deductee base', 'Teams that want regular TDS filing without building an internal compliance desk'],
    seoTerms: ['tds return filing', 'quarterly tds filing', 'small deductor tds compliance'],
  },
  'tds-return-filing-medium': {
    intro: 'Handle TDS return filing more reliably when deductee volume and quarterly complexity are higher.',
    detailed: [
      'Medium-volume TDS filing often needs more control around deductee mapping, challan usage, and quarter-end reconciliation because corrections can multiply quickly once the data set gets larger.',
      'The main value lies in keeping the quarterly process stable so tax credits reflect properly and later correction work is reduced.',
    ],
    documents: ['Deduction and challan data for the quarter', 'Larger deductee list with PAN validation details', 'Correction history where earlier filings need follow-up', 'Payment summaries linked to the TDS cycle'],
    whoNeeds: ['Businesses with higher deductee volume in each quarter', 'Finance teams managing recurring vendor and employee deductions', 'Companies that want tighter quarterly TDS control and fewer corrections'],
    seoTerms: ['medium deductor tds return filing', 'tds compliance for businesses', 'quarterly tds statement support'],
  },
  'form-15ca-15cb-filing': {
    intro: 'Complete Form 15CA and 15CB correctly for outward remittances so bank processing and tax documentation stay aligned.',
    detailed: [
      '15CA and 15CB filings often become difficult when the payment nature, taxability, or supporting documents are not reviewed clearly before the remittance is initiated.',
      'A strong filing process helps avoid back-and-forth with banks and reduces the risk of making a tax declaration that does not match the underlying transaction.',
    ],
    documents: ['Remittance details and payment purpose', 'Agreement, invoice, or supporting transaction document', 'Taxability analysis inputs and PAN or entity details', 'Bank documentation requirements and beneficiary details'],
    whoNeeds: ['Businesses making outward remittances to overseas vendors or affiliates', 'Teams that need 15CA or 15CB support before bank processing', 'Finance leads handling tax-linked remittance documentation'],
    seoTerms: ['form 15ca 15cb filing', '15ca 15cb for remittance', 'foreign remittance tax forms'],
    metaDescription: 'Form 15CA and 15CB filing support for outward remittances in India. Taxera helps businesses prepare remittance tax forms with cleaner documentation and review.',
  },
  'income-tax-notice-handling': {
    intro: 'Respond to income tax notices with a clear review of the issue, the records behind it, and the strongest available response path.',
    detailed: [
      'Income tax notices usually point back to a mismatch in disclosure, processing data, or supporting records, and the right response depends on understanding that root cause early.',
      'A strong notice-response process is less about sending a quick reply and more about tying the explanation back to filings, books, and evidence that can support the case properly.',
    ],
    documents: ['Copy of notice and section reference', 'Relevant ITR, computation, and supporting schedules', 'Books, statements, or evidence linked to the issue', 'Earlier replies, orders, or rectification history if available'],
    whoNeeds: ['Individuals and businesses facing income tax notices', 'Taxpayers handling mismatch, scrutiny, or clarification-stage issues', 'Teams that need a more structured response than a one-line portal reply'],
    seoTerms: ['income tax notice handling', 'reply to income tax notice', 'income tax scrutiny support'],
    metaDescription: 'Income tax notice handling support in India for mismatch, clarification, and scrutiny-stage matters. Taxera helps review notices and draft evidence-backed responses.',
  },
  'annual-roc-filing-small-private-limited': {
    intro: 'Complete annual ROC compliance for a private limited company with cleaner preparation of AOC-4, MGT-7, and related supporting records.',
    detailed: [
      'Annual ROC filing for companies depends on more than just form submission. Financial statements, signatory readiness, annual return details, and attachments all have to line up before filing.',
      'Most delays come from incomplete annual records, expired DSCs, or late coordination around approvals and annexures rather than the MCA portal itself.',
    ],
    documents: ['Financial statements and annual compliance records', 'AOC-4 and MGT-7 or MGT-7A support inputs', 'DSC availability of authorised signatories', 'Board report, annual return details, and related attachments'],
    whoNeeds: ['Small private limited companies completing yearly MCA compliance', 'Founders that need AOC-4 and MGT-7 filing support without internal secretarial teams', 'Businesses regularising annual ROC obligations before diligence or funding activity'],
    seoTerms: ['annual roc filing private limited', 'aoc-4 mgt-7 filing', 'roc compliance for private limited company'],
    metaDescription: 'Annual ROC filing support for private limited companies including AOC-4 and MGT-7 or MGT-7A workflows. Taxera helps with yearly MCA compliance and attachments.',
  },
  'annual-roc-filing-llp': {
    intro: 'Handle LLP annual ROC compliance with structured preparation of Form 8, Form 11, and supporting annual records.',
    detailed: [
      'LLP annual filing depends on timely preparation of the forms and cleaner annual records around contributions, business status, and compliance history.',
      'When LLP filings are delayed or handled without proper review, penalties and future MCA friction build up faster than most founders expect.',
    ],
    documents: ['LLP annual data and compliance records', 'Form 8 and Form 11 filing inputs', 'DSC details of designated partners', 'Previous MCA filing history if delays or corrections exist'],
    whoNeeds: ['LLPs completing annual MCA obligations', 'Service partnerships that want cleaner Form 8 and Form 11 support', 'Businesses regularising pending LLP compliance before future filings or closure work'],
    seoTerms: ['annual roc filing llp', 'form 8 form 11 filing', 'llp annual compliance'],
    metaDescription: 'Annual ROC filing support for LLPs including Form 8 and Form 11 preparation, DSC readiness, and recurring MCA compliance follow-through.',
  },
  'company-change-filings': {
    intro: 'File company changes properly when directors, registered office, or capital records need to be updated with MCA.',
    detailed: [
      'Change filings look simple until the supporting resolutions, signatory readiness, or filing sequence are wrong. Director, address, and capital changes often affect more than one compliance record at the same time.',
      'The key is choosing the right MCA route, supporting the event with the correct approvals, and making sure the updated record reflects what actually changed on ground.',
    ],
    documents: ['Details of the event being changed', 'Board or shareholder approvals where required', 'Updated identity, address, or capital records', 'DSC-ready authorised signatory documents'],
    whoNeeds: ['Companies changing directors, office address, or authorised capital', 'Founders updating MCA master data after structural changes', 'Businesses that need event-based MCA compliance handled with correct sequencing'],
    seoTerms: ['mca change in directors address capital', 'director change filing', 'registered office change mca'],
  },
  'new-dsc-class-3': {
    intro: 'Issue a fresh Class 3 DSC with proper verification so signatories stay ready for statutory filings and portal submissions.',
    detailed: [
      'Fresh DSC issuance depends on clean identity records, correct KYC, and completion of verification steps without mismatch.',
      'Businesses benefit most when DSC work is planned before urgent filing dates rather than treated as a same-day admin step.',
    ],
    documents: ['PAN and Aadhaar of applicant', 'Live mobile number and email for verification', 'Photo and KYC or video-verification inputs', 'Role details showing where the DSC will be used'],
    whoNeeds: ['Directors, partners, and authorised signatories needing a fresh DSC', 'Businesses activating signatories for MCA, GST, or tax filing systems', 'Teams that need DSC issuance before filings or tenders can move ahead'],
    seoTerms: ['new class 3 dsc', 'fresh digital signature certificate', 'dsc application india'],
  },
  'dsc-renewal': {
    intro: 'Renew expiring DSCs before compliance deadlines get blocked by last-minute signatory issues.',
    detailed: [
      'DSC renewals are often delayed until a filing deadline is close, which is when KYC or verification issues become the most disruptive.',
      'A cleaner renewal cycle helps maintain continuity across MCA, GST, tax, and procurement work without scrambling for signatory readiness at the last minute.',
    ],
    documents: ['Existing DSC details and expiry information', 'PAN, Aadhaar, and current verification inputs', 'Updated mobile number and email of signatory', 'Platform usage context for the renewed DSC'],
    whoNeeds: ['Directors or signatories with expiring DSCs', 'Businesses planning ROC, GST, or tax filings in upcoming cycles', 'Teams that want renewal handled before compliance gets interrupted'],
    seoTerms: ['dsc renewal', 'renew digital signature certificate', 'class 3 dsc renewal'],
    metaDescription: 'DSC renewal support in India for expiring digital signature certificates used in MCA, GST, income tax, and filing workflows.',
  },
  'payroll-processing-pf-esi-small-company': {
    intro: 'Run payroll with cleaner monthly control when your company has a smaller employee base but recurring PF and ESI obligations.',
    detailed: [
      'Small-company payroll needs structure from the beginning because salary inputs, deduction logic, and employee compliance records can drift quickly without a routine.',
      'A repeatable process keeps payroll manageable even when there is no dedicated in-house payroll desk.',
    ],
    documents: ['Employee master and salary structure', 'Attendance and monthly variable inputs', 'PF and ESI registration details', 'Payroll history or opening balances if shifting from another setup'],
    whoNeeds: ['Smaller companies setting up recurring payroll discipline', 'Employers handling PF and ESI with 10 to 20 employees', 'Founder-led teams that need consistent payroll processing support'],
    seoTerms: ['payroll processing small company', 'pf esi filing for small business', 'monthly payroll support'],
  },
  'payroll-processing-pf-esi-medium-company': {
    intro: 'Support payroll at a higher employee volume with better process control across salary runs, PF, ESI, and monthly changes.',
    detailed: [
      'Medium-company payroll usually means more moving parts every month: employee changes, reimbursements, deductions, and compliance records all need tighter coordination.',
      'The goal is to keep the monthly process stable enough that scale does not immediately create payroll delay or compliance drift.',
    ],
    documents: ['Employee master and category-wise salary data', 'Attendance, leave, and monthly revision inputs', 'PF, ESI, and payroll registration references', 'Prior payroll outputs and exception cases where relevant'],
    whoNeeds: ['Medium-sized employers with recurring payroll complexity', 'Businesses with growing headcount and more monthly payroll movement', 'Teams that need payroll and employee compliance handled together'],
    seoTerms: ['payroll processing medium company', 'pf esi payroll support', 'employee compliance payroll services'],
  },
  'bookkeeping-very-small-business': {
    intro: 'Maintain monthly books properly when your business is lean but still needs usable records for tax and decision-making.',
    detailed: [
      'Very small businesses often delay bookkeeping because transaction volume feels manageable, but that usually creates a backlog just before GST, tax, or reporting deadlines.',
      'Consistent monthly bookkeeping helps prevent year-end cleanup and keeps the numbers usable for founders throughout the year.',
    ],
    documents: ['Bank statements and invoice data', 'Expense proofs and payment summaries', 'Basic ledger or software export where available', 'GST references if the business is registered'],
    whoNeeds: ['Very small businesses with limited monthly transactions', 'Founders who want monthly books without a full finance team', 'Businesses that want cleaner tax readiness with minimal internal admin load'],
    seoTerms: ['bookkeeping for very small business', 'small business bookkeeping india', 'monthly bookkeeping support'],
  },
  'bookkeeping-small-business': {
    intro: 'Keep monthly books updated as your business grows and transaction volume starts affecting tax, reporting, and compliance timing.',
    detailed: [
      'Small-business bookkeeping usually needs more regular reconciliation across sales, purchases, expenses, and bank movement than founders initially expect.',
      'The value comes from keeping accounts usable month after month instead of allowing cleanup work to accumulate into a larger finance problem.',
    ],
    documents: ['Bank statements, invoices, and expense data', 'Accounting software export or ledger reports', 'GST and tax mapping references', 'Prior bookkeeping status and pending reconciliation notes'],
    whoNeeds: ['Small businesses with recurring monthly transaction flow', 'Teams that need accounting support as they move beyond founder-managed books', 'Businesses preparing cleaner records for tax filing and MIS'],
    seoTerms: ['bookkeeping for small business', 'monthly accounting small business', 'business bookkeeping service'],
  },
  'bookkeeping-medium-business': {
    intro: 'Support more structured monthly accounting when transaction volume, reconciliations, and reporting expectations are higher.',
    detailed: [
      'Medium-business accounting usually requires stronger process around reconciliations, ledger discipline, and month-end review because the books feed more decisions and compliance outputs.',
      'This level of work is less about one-off bookkeeping and more about keeping finance operations stable as the business scales.',
    ],
    documents: ['Higher-volume bank and ledger records', 'Sales, purchase, and expense datasets', 'Month-end reconciliation workings', 'Reporting or review outputs tied to the accounting cycle'],
    whoNeeds: ['Medium businesses with more complex monthly accounts', 'Finance teams that need support on higher transaction load', 'Companies using accounting outputs for compliance and management review'],
    seoTerms: ['bookkeeping for medium business', 'monthly accounting services india', 'high volume accounting support'],
  },
  'expert-accounting-cleanup-hourly': {
    intro: 'Use specialist accounting cleanup support when books need rectification, backlog clearing, or deeper reconciliation before the next deadline.',
    detailed: [
      'Cleanup work is different from normal monthly bookkeeping because the real issue is usually missing entries, poor mapping, unresolved reconciliations, or backlogged books.',
      'What matters most is identifying the root accounting gaps quickly and repairing them without creating fresh inconsistency in the records.',
    ],
    documents: ['Current books or ledger export', 'Backlog period bank statements and invoice data', 'Reconciliation issues or correction notes', 'Reporting or filing deadline that the cleanup must support'],
    whoNeeds: ['Businesses with pending accounting backlog', 'Teams preparing for tax filing, audit, or lender review after weak bookkeeping periods', 'Companies that need targeted cleanup rather than full monthly outsourcing'],
    seoTerms: ['accounting cleanup support', 'bookkeeping backlog cleanup', 'reconciliation cleanup service'],
    metaDescription: 'Accounting cleanup support for backlog books, reconciliation issues, and rectification-heavy finance work. Taxera helps businesses repair records before key deadlines.',
  },
  'basic-mis-monthly-reporting': {
    intro: 'Set up monthly MIS reporting that gives management a cleaner picture of operating and financial performance.',
    detailed: [
      'MIS support is most valuable when leadership needs repeatable reporting rather than one-off finance summaries that are never used again.',
      'The work usually involves defining what should be tracked, standardising the reporting rhythm, and turning raw accounting data into something management can actually act on.',
    ],
    documents: ['Monthly books or finance summaries', 'Management reporting expectations and key metrics', 'Historical reporting format if one already exists', 'Notes on decisions or reviews tied to the MIS cycle'],
    whoNeeds: ['Founders needing consistent monthly reporting', 'Growing businesses formalising management review rhythm', 'Finance teams that want cleaner presentation of monthly operating numbers'],
    seoTerms: ['monthly mis reporting', 'management reporting services', 'mis support for businesses'],
  },
  'cma-data-bank-loan-projections': {
    intro: 'Prepare lender-ready CMA data and projections when the business is entering a bank loan, renewal, or credit discussion.',
    detailed: [
      'CMA data work requires more than optimistic projections. Banks expect structured assumptions, cleaner financial logic, and numbers that connect to the actual business story.',
      'The main value lies in preparing a usable projection set that can hold up in lender review and follow-up questioning.',
    ],
    documents: ['Historical financial statements and books', 'Loan requirement details and lender expectations', 'Projected revenue, cost, and working capital assumptions', 'Existing repayment or facility history where relevant'],
    whoNeeds: ['Businesses applying for bank loans or credit facilities', 'Promoters preparing working capital or term-loan discussions', 'Teams that need structured projections for lender review'],
    seoTerms: ['cma data for bank loan', 'bank loan projections', 'cma data preparation services'],
    metaDescription: 'CMA data and bank loan projection support for businesses seeking working capital or term finance. Taxera helps prepare lender-ready financial projections and supporting analysis.',
  },
  'virtual-cfo-services': {
    intro: 'Get recurring CFO-style finance support when the business needs stronger reporting, review discipline, and decision support without a full-time CFO hire.',
    detailed: [
      'Virtual CFO work is usually most useful when founders have numbers but not enough interpretation, reporting rhythm, or follow-through around the decisions those numbers should inform.',
      'The service works best when it is tied to books, compliance, cash-flow visibility, and management review instead of staying at a purely advisory level.',
    ],
    documents: ['Latest financial statements or monthly books', 'Current reporting packs and cash-flow visibility', 'Management questions or finance priorities', 'Existing budgets, projections, or lender obligations if any'],
    whoNeeds: ['Founder-led teams without a full-time CFO', 'SMEs that need recurring finance review and planning support', 'Leadership teams wanting better reporting and financial visibility'],
    seoTerms: ['virtual cfo services', 'outsourced cfo india', 'finance advisory for startups and smes'],
    metaDescription: 'Virtual CFO services for founder-led businesses and SMEs in India. Taxera supports reporting, projections, cash-flow review, and recurring finance decision support.',
  },
  'gst-refund-application': {
    intro: 'Handle GST refund applications with stronger documentation, reconciliation, and follow-up when export or inverted-duty claims need to move cleanly.',
    detailed: [
      'GST refunds often get delayed because the filing trail, export documents, or reconciliation set is not strong enough when the claim is prepared.',
      'The real work is in connecting the refund claim to the underlying GST record, evidence set, and follow-up path so the matter can progress with fewer avoidable objections.',
    ],
    documents: ['GST refund filing details and claim context', 'Relevant returns, export or invoice documentation, and reconciliations', 'Bank realisation or supporting claim evidence where required', 'Past query or refund history if follow-up is already underway'],
    whoNeeds: ['Exporters and businesses filing GST refund claims', 'Taxpayers dealing with inverted-duty refund situations', 'Teams that need stronger documentation before or after a refund submission'],
    seoTerms: ['gst refund application', 'gst refund for exporters', 'inverted duty refund support'],
    metaDescription: 'GST refund application support in India for exporters and inverted-duty cases. Taxera helps prepare refund claims with reconciliations, documents, and follow-up support.',
  },
  'income-tax-refund-follow-up-rectification': {
    intro: 'Track pending income tax refunds and handle rectification work when processing outcomes do not match the filed return position.',
    detailed: [
      'Refund follow-up and rectification matters usually come from a processing mismatch, tax credit issue, or return detail that needs to be corrected through the right follow-up route.',
      'These cases benefit from structured review because a refund problem is often tied to a filing issue that has to be understood before it can be resolved cleanly.',
    ],
    documents: ['Filed return copy and processing communication', 'Refund status and bank account details', '26AS, AIS, TIS, or tax credit records linked to the mismatch', 'Rectification history or prior follow-up references if available'],
    whoNeeds: ['Taxpayers with delayed or mismatched income tax refunds', 'Individuals or businesses needing rectification support after processing', 'Filers that want a clearer route to correct refund-linked tax issues'],
    seoTerms: ['income tax refund follow up', 'rectification support income tax', 'refund mismatch rectification'],
    metaDescription: 'Income tax refund follow-up and rectification support in India for delayed refunds, processing mismatches, and tax credit-related correction matters.',
  },
  'detailed-gst-income-tax-notice-audit-support': {
    intro: 'Get deeper support for GST or income tax notices and audit-stage matters where the response needs more analysis, evidence, and drafting discipline.',
    detailed: [
      'Detailed notices and audit support cases usually involve larger evidence review, a more sensitive tax position, or a higher-risk response environment than a routine clarification notice.',
      'These matters need a stronger connection between records, reconciliations, and the written response so the case is handled strategically rather than reactively.',
    ],
    documents: ['Notice, audit communication, or order copy', 'Relevant returns, books, and supporting records', 'Reconciliations, working papers, and legal or tax-position notes', 'Previous response trail, hearing notes, or department follow-up history'],
    whoNeeds: ['Businesses facing higher-stakes GST or income tax notices', 'Taxpayers preparing for detailed department review or audit-stage work', 'Teams that need stronger evidence-backed drafting and follow-up support'],
    seoTerms: ['gst audit support', 'income tax audit support', 'detailed notice reply service'],
    metaDescription: 'GST and income tax notice or audit support in India for detailed response matters that need deeper evidence review, drafting quality, and compliance follow-through.',
  },
};

const CATEGORY_CONTEXT = {
  reg: {
    label: 'business registration and legal setup',
    defaultDocuments: ['Identity proof of proprietor, director, or signatory', 'Business address proof and utility record', 'Entity-specific supporting documents or declarations', 'Working contact details for OTP and portal verification'],
    whoNeeds: ['New founders starting business operations in India', 'Growing companies adding statutory registrations in sequence', 'Businesses regularising pending setup items before launch or expansion'],
    keywords: ['business registration india', 'company setup services', 'legal registration consultant'],
  },
  gst: {
    label: 'GST filing and indirect tax compliance',
    defaultDocuments: ['GST login access or filing data export', 'Sales and purchase summary with invoice records', 'Reconciliation notes for mismatches or pending action items', 'Previous filing acknowledgements and notice references if any'],
    whoNeeds: ['GST-registered businesses with regular monthly filing obligations', 'Exporters and B2B suppliers needing cleaner GST workflow', 'Founders who want GST deadlines and reconciliations handled correctly'],
    keywords: ['gst filing services india', 'gst compliance consultant', 'gstr return filing support'],
  },
  tax: {
    label: 'income tax and TDS compliance',
    defaultDocuments: ['PAN, login access, and profile details of taxpayer or entity', 'Bank statements, books, or capital gains summaries as applicable', 'Form 16, Form 26AS, AIS, TIS, or TDS records', 'Previous year return copy and tax notice references where relevant'],
    whoNeeds: ['Individuals with income tax filing obligations', 'Businesses managing TDS and annual income tax timelines', 'Teams handling complex tax positions, remittances, or notices'],
    keywords: ['income tax filing india', 'tds return filing service', 'tax notice response support'],
  },
  mca: {
    label: 'MCA and ROC compliance',
    defaultDocuments: ['MCA login details and entity master data', 'Financial statements, board resolutions, or member approvals', 'DSC availability of authorised signatories', 'Supporting annexures for annual or event-based filings'],
    whoNeeds: ['Private limited companies managing annual ROC obligations', 'LLPs filing yearly MCA forms and partner compliance', 'Founders updating company records with the Registrar of Companies'],
    keywords: ['roc filing india', 'mca compliance service', 'annual roc filing consultant'],
  },
  dsc: {
    label: 'digital signature issuance and renewal support',
    defaultDocuments: ['PAN and Aadhaar of applicant', 'Live mobile number and email for verification', 'Photo, KYC, and video verification inputs', 'Existing DSC details if this is a renewal case'],
    whoNeeds: ['Directors and partners signing statutory filings', 'Business owners renewing signature credentials before deadlines', 'Teams that need active DSCs for tax, MCA, GST, or tender submissions'],
    keywords: ['digital signature certificate india', 'class 3 dsc service', 'dsc renewal support'],
  },
  payroll: {
    label: 'payroll processing and employee compliance',
    defaultDocuments: ['Employee master, salary structure, and attendance inputs', 'PF, ESI, and payroll registration details', 'Previous payroll records or opening balances', 'Monthly joining, exit, and reimbursement updates'],
    whoNeeds: ['Small companies formalising monthly payroll operations', 'Growing businesses managing PF and ESI along with payroll', 'Founders that want payroll accuracy without building an internal team'],
    keywords: ['payroll processing service india', 'pf esi filing support', 'payroll compliance consultant'],
  },
  accounting: {
    label: 'bookkeeping and accounting support',
    defaultDocuments: ['Bank statements, invoice data, and expense records', 'Accounting software export or ledger backup', 'GST and tax mapping references', 'Pending reconciliation notes or cleanup requirements'],
    whoNeeds: ['Businesses that need monthly books updated consistently', 'Teams with backlog cleanup or reconciliation-heavy workload', 'Founders who need cleaner accounting before tax or funding reviews'],
    keywords: ['bookkeeping service india', 'monthly accounting support', 'accounting cleanup consultant'],
  },
  advisory: {
    label: 'finance reporting and strategic advisory',
    defaultDocuments: ['Historical financials and operating assumptions', 'Revenue, expense, and working capital inputs', 'Bank or investor-specific format requirements', 'Management questions, targets, and reporting expectations'],
    whoNeeds: ['SMEs that need structured reporting for decision-making', 'Founders preparing bank loan proposals or lender discussions', 'Leadership teams needing CFO-style review and finance planning support'],
    keywords: ['virtual cfo services india', 'mis reporting support', 'cma data preparation'],
  },
  notices: {
    label: 'notices, refunds, and audit response support',
    defaultDocuments: ['Department notice, order, or refund communication copy', 'Relevant filings, returns, and working papers', 'Evidence set, reconciliations, and response history', 'Authorisation and timelines linked to the matter'],
    whoNeeds: ['Businesses facing GST or income tax notice pressure', 'Taxpayers tracking delayed refunds or rectification issues', 'Teams needing stronger drafting and evidence support for audits or escalations'],
    keywords: ['gst refund support', 'income tax refund rectification', 'audit notice reply service'],
  },
};

const COMMON_REASONS = [
  'You avoid filing errors that usually delay approvals, acknowledgements, or departmental closure.',
  'You get a clear document checklist before time is spent on a filing that is not submission-ready.',
  'You can plan timelines realistically instead of guessing based on portal status or incomplete advice.',
  'You get direct support if authority queries, mismatches, or clarification notices appear during the process.',
];

const COMMON_WHY_CHOOSE = [
  'One team handles review, drafting, filing, and follow-through instead of splitting work across vendors.',
  'Updates are shared clearly, without vague status messages or portal jargon.',
  'Inputs are reviewed before submission so avoidable rework is reduced.',
  'Support continues after filing with practical next-step guidance where the workflow requires it.',
];

const COMMON_PROCESS = [
  { title: 'Requirement check', desc: 'We confirm the exact filing route, current status, and dependencies before document collection starts.' },
  { title: 'Document preparation', desc: 'Inputs are reviewed, corrected if required, and arranged in the format accepted by the relevant authority or workflow.' },
  { title: 'Filing and follow-up', desc: 'Submission is completed with coordinated follow-up on acknowledgements, clarifications, or portal status movement.' },
  { title: 'Closure and next steps', desc: 'You receive the final status, record set, and immediate compliance actions that matter after completion.' },
];

function buildFaq(serviceName, categoryId, details) {
  if (details.faqs) {
    return details.faqs;
  }

  const lowerName = serviceName.toLowerCase();

  switch (categoryId) {
    case 'gst':
      return [
        {
          question: `What data is usually required for ${lowerName}?`,
          answer:
            'Most GST work needs return history, invoice records, reconciliations, and GST login access or exports from the accounting system. We confirm the exact checklist after reviewing the case.',
        },
        {
          question: `Can Taxera help if ${lowerName} is already delayed?`,
          answer:
            'Yes. We first check where the GST workflow broke down, then rebuild the filing or response route around the current status, records, and portal position.',
        },
        {
          question: 'Will this support only the filing or also the follow-up?',
          answer:
            'It covers both. We help with the submission itself and share the practical next actions needed after filing, query, or acknowledgement.',
        },
        {
          question: 'How should businesses prepare for smoother GST compliance going forward?',
          answer:
            'The biggest improvement usually comes from cleaner monthly data collation, stronger reconciliation, and filing before the last-minute deadline window starts.',
        },
      ];
    case 'tax':
      return [
        {
          question: `What records should I keep ready for ${lowerName}?`,
          answer:
            'That depends on the service, but most tax cases need portal data, tax documents, books or income schedules, and any earlier filing or notice references connected to the matter.',
        },
        {
          question: `Can Taxera support revisions or issue correction in ${lowerName}?`,
          answer:
            'Yes. Where the case involves mismatch, correction, or delayed action, we review the earlier filing trail first and then recommend the safest next route.',
        },
        {
          question: 'How long does tax filing or response work usually take?',
          answer:
            'Turnaround depends on the record quality, the complexity of the tax position, and whether any department communication or bank-side dependency is involved.',
        },
        {
          question: 'Do I get clarity on next compliance steps too?',
          answer:
            'Yes. We close with filing or response status plus practical next actions so the same issue does not repeat in the next compliance cycle.',
        },
      ];
    case 'mca':
      return [
        {
          question: `What usually delays ${lowerName}?`,
          answer:
            'MCA delays often come from expired DSCs, missing approvals, incomplete attachments, or the wrong filing sequence rather than the form itself.',
        },
        {
          question: 'Can annual filings and event-based changes both be handled?',
          answer:
            'Yes. We can review the entity status and map the right combination of annual ROC work and event-based MCA compliance where both are pending.',
        },
        {
          question: 'Do signatories need to be ready before filing starts?',
          answer:
            'Yes. DSC readiness and the availability of the correct authorised signatories should be checked before form preparation moves too far ahead.',
        },
        {
          question: 'Will I receive updated compliance guidance after filing?',
          answer:
            'Yes. We share the filing closure status and what needs to be tracked next for the entity after the MCA submission is completed.',
        },
      ];
    case 'dsc':
      return [
        {
          question: `What is usually needed to start ${lowerName}?`,
          answer:
            'Most DSC cases need PAN, Aadhaar-linked verification readiness, live contact details, and clean signatory identity information before the application can move smoothly.',
        },
        {
          question: 'Can a DSC renewal be done before expiry?',
          answer:
            'Yes. In fact, renewing before the expiry window becomes urgent is usually the best way to avoid filing interruptions later.',
        },
        {
          question: 'Why do DSC applications get delayed?',
          answer:
            'The most common reasons are identity mismatch, incomplete verification, outdated mobile or email details, and late signatory coordination.',
        },
        {
          question: 'Will the renewed or new DSC be ready for compliance use?',
          answer:
            'We share the practical next-use guidance so the signatory knows how the DSC fits into the relevant filing workflow after issuance or renewal.',
        },
      ];
    case 'payroll':
      return [
        {
          question: `What inputs are usually required for ${lowerName}?`,
          answer:
            'Payroll support typically needs employee master data, salary structure, attendance inputs, monthly changes, and PF or ESI registration context where applicable.',
        },
        {
          question: 'Can payroll and employee compliance be handled together?',
          answer:
            'Yes. The strongest payroll process usually combines salary execution with PF, ESI, and related compliance follow-through instead of splitting them apart.',
        },
        {
          question: 'How do monthly changes get managed?',
          answer:
            'A structured input cycle is used for attendance, revisions, reimbursements, new hires, exits, and any compliance-impacting employee updates.',
        },
        {
          question: 'Is this useful even for smaller teams?',
          answer:
            'Yes. Smaller companies often benefit the most from building a clean payroll rhythm early, before employee compliance gaps start appearing.',
        },
      ];
    case 'accounting':
      return [
        {
          question: `What is usually needed to start ${lowerName}?`,
          answer:
            'Most accounting work needs bank statements, invoice data, expense records, and system exports or ledgers that reflect the current condition of the books.',
        },
        {
          question: 'Can Taxera support backlog cleanup as well as monthly books?',
          answer:
            'Yes. We support both recurring bookkeeping and cleanup-focused work where prior accounting periods need to be repaired before normal monthly processing resumes.',
        },
        {
          question: 'How does accounting support help with compliance?',
          answer:
            'Cleaner books make GST, income tax, MIS, lender discussions, and year-end closure work easier because the records are more usable and defensible.',
        },
        {
          question: 'What changes the amount of accounting effort required?',
          answer:
            'Volume of transactions, bank accounts, reconciliations, backlog condition, and reporting expectations all influence how much accounting work a business really needs.',
        },
      ];
    case 'advisory':
      return [
        {
          question: `What does ${lowerName} usually include?`,
          answer:
            'That depends on the service, but advisory work usually centres on reporting quality, projections, management visibility, and practical finance decision support.',
        },
        {
          question: 'Can this be used for bank or lender discussions?',
          answer:
            'Yes. Projection-heavy and CMA-related work is often designed specifically to support lender or credit conversations, provided the underlying records are in place.',
        },
        {
          question: 'Is this a one-time engagement or recurring support?',
          answer:
            'Both models are possible. Some businesses need a one-time output, while others benefit more from a recurring CFO-style review cadence.',
        },
        {
          question: 'Does this work better with bookkeeping and compliance support in place?',
          answer:
            'Yes. Advisory becomes much more effective when the books, compliance records, and management questions are all aligned into one reporting workflow.',
        },
      ];
    case 'notices':
      return [
        {
          question: `What should I keep ready before starting ${lowerName}?`,
          answer:
            'Keep the notice or refund communication, prior filings, supporting books or reconciliations, and any response history ready so the matter can be assessed properly.',
        },
        {
          question: 'Can Taxera help if the matter is already at a detailed or audit stage?',
          answer:
            'Yes. We review the current stage, the evidence position, and the response risk before recommending the most practical next step.',
        },
        {
          question: 'How is refund support different from notice-response support?',
          answer:
            'Refund work usually focuses on claim preparation and follow-up, while notice or audit support is driven more by explanation, evidence, and department response strategy.',
        },
        {
          question: 'Will I get next-step guidance after the response or claim is submitted?',
          answer:
            'Yes. We share what to track next, what evidence must stay ready, and how the matter may progress after the first submission or reply.',
        },
      ];
    default:
      return [
        {
          question: `How long does ${lowerName} usually take?`,
          answer:
            'Turnaround depends on document readiness, portal workload, and whether any authority clarification is triggered. We share a practical timeline after reviewing your case.',
        },
        {
          question: `Can Taxera help if my ${lowerName} work is already delayed or rejected?`,
          answer:
            'Yes. We first review the existing status, identify the gap in documents or filing approach, and then rebuild the next submission or response route around that issue.',
        },
        {
          question: 'What do I need to keep ready before we start?',
          answer:
            'We usually need identity and login details, entity records, financial or filing data, and any authority communication already received. The exact checklist is shared once scope is confirmed.',
        },
        {
          question: 'Do I get support after the filing or submission is done?',
          answer:
            'Yes. We close the loop with practical next actions so you know what needs to be tracked, renewed, replied to, or filed next.',
        },
      ];
  }
}

function buildOverview(service, category, context, details) {
  if (details.overview) {
    return details.overview;
  }

  switch (category.id) {
    case 'gst':
      return [
        `${service.name} sits inside an ongoing GST workflow where filing quality depends on invoice alignment, reconciliation discipline, and cleaner record review before submission.`,
        `Taxera approaches ${service.name.toLowerCase()} as part of a compliance cycle, not a one-off upload, so the work stays connected to the next GST step that follows after filing or reply.`,
      ];
    case 'tax':
      return [
        `${service.name} depends on the quality of tax records, supporting schedules, and the way the underlying income or compliance issue is documented before filing or reply preparation starts.`,
        `Taxera handles ${service.name.toLowerCase()} with a tax-workflow mindset: review the records, prepare the right output, and reduce the chance that the same issue returns in a later tax cycle.`,
      ];
    case 'mca':
      return [
        `${service.name} is driven by form accuracy, signatory readiness, and supporting approvals. In MCA work, weak preparation usually creates more delay than the portal itself.`,
        `Taxera handles ${service.name.toLowerCase()} with attention to filings, attachments, and the exact company or LLP record that needs to remain consistent after submission.`,
      ];
    case 'dsc':
      return [
        `${service.name} is foundational to many statutory filings because DSC issues often surface right before an urgent compliance deadline.`,
        `Taxera treats ${service.name.toLowerCase()} as part of signatory readiness, so the certificate is aligned to the filing systems and timelines it is meant to support next.`,
      ];
    case 'payroll':
      return [
        `${service.name} is most effective when payroll inputs, employee compliance obligations, and monthly review happen in one coordinated process rather than in disconnected admin steps.`,
        `Taxera handles ${service.name.toLowerCase()} with a recurring payroll-cycle approach so the output stays usable month after month as employee movement increases.`,
      ];
    case 'accounting':
      return [
        `${service.name} matters because books affect tax, management reporting, lender confidence, and compliance readiness far beyond the accounting function itself.`,
        `Taxera handles ${service.name.toLowerCase()} with a practical focus on record usability, cleanup discipline, and keeping the finance trail supportable for whatever comes next.`,
      ];
    case 'advisory':
      return [
        `${service.name} is most useful when finance reporting and decision-making are tied together. Strong advisory work turns raw numbers into a reporting structure management can actually use.`,
        `Taxera handles ${service.name.toLowerCase()} with an execution-led finance lens so the outcome supports lenders, leadership review, or recurring CFO-style oversight rather than staying theoretical.`,
      ];
    case 'notices':
      return [
        `${service.name} usually starts with understanding the filing trail or processing issue that created the matter in the first place, not just the communication received from the department.`,
        `Taxera handles ${service.name.toLowerCase()} by connecting the matter back to evidence, reconciliations, and the strongest practical response or follow-up path available.`,
      ];
    default:
      return [
        `${service.name} is part of the ${category.name.toLowerCase()} workflow and usually needs more than a single form submission. Document readiness, sequencing, and follow-up quality are what keep the process moving without unnecessary delay.`,
        `Taxera handles ${service.name.toLowerCase()} with a practical execution approach: scope review, checklist validation, submission support, and next-step clarity once the filing or response is complete.`,
      ];
  }
}

function buildDetailedInformation(service, category, context, details) {
  if (details.detailed) {
    return details.detailed;
  }

  switch (category.id) {
    case 'gst':
      return [
        `${service.name} is time-sensitive because GST workflows are linked to filing deadlines, portal accuracy, and the quality of reconciliations behind the return or notice response.`,
        `The strongest results usually come when records are reviewed before submission rather than corrected after the department or portal highlights the mismatch.`,
      ];
    case 'tax':
      return [
        `${service.name} depends heavily on cleaner schedules, supporting data, and the exact tax position being taken in the filing or reply.`,
        `When records are weak or disclosures are inconsistent, the follow-up burden usually grows later through corrections, notices, or refund delay.`,
      ];
    case 'mca':
      return [
        `${service.name} is sensitive to timing because MCA filings often depend on valid approvals, active DSCs, and the right sequence of form submission.`,
        `Preventing rework is usually about making sure the entity record, attachments, and authorisations are clean before the filing enters the portal.`,
      ];
    case 'dsc':
      return [
        `${service.name} is mostly operational, but mistakes in identity verification or signatory readiness can block larger filings at the worst possible time.`,
        `The practical value lies in keeping the certificate valid and usable for the actual compliance systems the signatory relies on next.`,
      ];
    case 'payroll':
      return [
        `${service.name} becomes harder when attendance, salary changes, and employee compliance data are collected late or in inconsistent formats every month.`,
        `The right process makes payroll more stable by reducing manual back-and-forth and ensuring employee compliance obligations stay connected to the salary cycle.`,
      ];
    case 'accounting':
      return [
        `${service.name} is strongest when the books are maintained as a recurring operating system instead of a deadline-driven cleanup exercise.`,
        `Accounting quality matters because it shapes later tax filings, MIS quality, lender discussions, and the business's confidence in its own numbers.`,
      ];
    case 'advisory':
      return [
        `${service.name} works best when the reporting base is strong enough to support interpretation, planning, and management-level action.`,
        `A useful finance advisory process should narrow decisions, sharpen assumptions, and connect recommendations back to the underlying business numbers.`,
      ];
    case 'notices':
      return [
        `${service.name} is usually more about evidence control and response strategy than speed alone. A rushed reply without the right backing often creates more work later.`,
        `The matter should be reviewed with the underlying return, records, and department context in mind so the response or follow-up route is defensible.`,
      ];
    default:
      return [
        `${service.name} is usually time-sensitive because the underlying workflow sits inside ${context.label}. When inputs are incomplete or records do not match the authority profile, rework can slow the case down quickly.`,
        `A strong ${service.name.toLowerCase()} process starts with accurate records, correctly sequenced action points, and clean review before submission. That is especially important when the work affects future compliance, tax positions, or operational continuity.`,
      ];
  }
}

function buildJourney(service, categoryId) {
  switch (categoryId) {
    case 'gst':
      return [
        { title: 'GST status review', desc: `We review the current GST position and confirm what ${service.name.toLowerCase()} needs to solve.` },
        { title: 'Data and reconciliation check', desc: 'Returns, invoice records, and supporting GST data are validated before filing or reply drafting.' },
        { title: 'Submission stage', desc: 'The filing or response is completed with active follow-up on acknowledgement or portal movement.' },
        { title: 'Next compliance step', desc: 'You receive closure details and the next GST action point to track after submission.' },
      ];
    case 'tax':
      return [
        { title: 'Tax review', desc: `We review the tax context and confirm the exact route for ${service.name.toLowerCase()}.` },
        { title: 'Record preparation', desc: 'Schedules, books, and tax records are reviewed before the return, form, or response is prepared.' },
        { title: 'Filing or response', desc: 'The tax output is filed or submitted with support on related clarifications where needed.' },
        { title: 'Closure guidance', desc: 'You receive acknowledgement and practical next actions tied to the tax cycle or matter stage.' },
      ];
    case 'mca':
      return [
        { title: 'Entity status check', desc: `We confirm the filing route and readiness for ${service.name.toLowerCase()}.` },
        { title: 'Approval and attachment prep', desc: 'Resolutions, financials, DSCs, and supporting annexures are validated.' },
        { title: 'MCA filing', desc: 'The required form set is prepared and filed with portal follow-up support.' },
        { title: 'Record update', desc: 'You receive post-filing clarity on updated MCA status and the next compliance milestone.' },
      ];
    case 'payroll':
      return [
        { title: 'Payroll review', desc: `We understand the employee count, compliance setup, and scope needed for ${service.name.toLowerCase()}.` },
        { title: 'Input collection', desc: 'Salary data, attendance, and compliance records are gathered in a repeatable monthly format.' },
        { title: 'Processing cycle', desc: 'Payroll and related employee compliance work are executed as part of the agreed monthly run.' },
        { title: 'Output handover', desc: 'You receive the payroll output and the action list needed for the next cycle.' },
      ];
    case 'accounting':
      return [
        { title: 'Books review', desc: `We assess the current accounting position and define the scope for ${service.name.toLowerCase()}.` },
        { title: 'Record collation', desc: 'Bank data, invoices, expenses, and ledger references are organised for accounting use.' },
        { title: 'Bookkeeping or cleanup', desc: 'Monthly books or rectification work are completed with reconciliation support.' },
        { title: 'Usable finance trail', desc: 'You receive updated records and clarity on what should happen in the next cycle.' },
      ];
    case 'advisory':
      return [
        { title: 'Management objective review', desc: `We confirm what leadership needs from ${service.name.toLowerCase()}.` },
        { title: 'Data and assumption build', desc: 'Financial data, assumptions, and reporting expectations are gathered and organised.' },
        { title: 'Output preparation', desc: 'MIS, projections, CMA data, or CFO review material is prepared based on the scope.' },
        { title: 'Decision follow-through', desc: 'You receive interpretation, next actions, and the reporting cadence to maintain going forward.' },
      ];
    case 'notices':
      return [
        { title: 'Matter review', desc: `We review the current status and evidence position behind ${service.name.toLowerCase()}.` },
        { title: 'Document mapping', desc: 'Returns, books, reconciliations, and response history are aligned to the issue.' },
        { title: 'Drafting and submission', desc: 'The response, claim, or rectification route is prepared and submitted with follow-up support.' },
        { title: 'Progress tracking', desc: 'You receive next-step guidance on what to monitor after the first submission or reply.' },
      ];
    default:
      return [
        { title: 'Scope review', desc: `We review your exact requirement and confirm whether ${service.name.toLowerCase()} is the right route for the current case.` },
        { title: 'Input validation', desc: 'Documents, records, and portal data are checked before drafting or filing begins.' },
        { title: 'Submission support', desc: 'The filing, response, or working paper set is prepared and submitted with active follow-up.' },
        { title: 'Final handover', desc: 'You receive acknowledgement, status clarity, and practical next actions after closure.' },
      ];
  }
}

function buildExecution(service, category, details) {
  if (details.execution) {
    return details.execution;
  }

  switch (category.id) {
    case 'gst':
      return [
        `GST workflow review for ${service.name.toLowerCase()}.`,
        'Return, notice, or annual data scrutiny before submission.',
        'Portal filing or response handling with follow-up support.',
        'Closure notes and next GST action points.',
      ];
    case 'tax':
      return [
        `Tax route and record check for ${service.name.toLowerCase()}.`,
        'Return, schedule, or notice-drafting support tied to the tax position.',
        'Submission and follow-up on the relevant tax platform or matter stage.',
        'Final status handover with next-step tax guidance.',
      ];
    case 'mca':
      return [
        `Entity-level compliance review for ${service.name.toLowerCase()}.`,
        'Approval, DSC, and attachment readiness checks.',
        'Form preparation and MCA or ROC submission support.',
        'Updated filing status with practical post-filing actions.',
      ];
    case 'advisory':
      return [
        `Finance objective mapping for ${service.name.toLowerCase()}.`,
        'Data, assumptions, and reporting inputs review.',
        'Output preparation for reporting, projections, or CFO discussion.',
        'Management-level next actions and review rhythm guidance.',
      ];
    case 'notices':
      return [
        `Matter review for ${service.name.toLowerCase()}.`,
        'Evidence collection and reconciliation support.',
        'Response, refund, or rectification drafting and submission.',
        'Follow-up guidance after the first department interaction.',
      ];
    default:
      return [
        `Eligibility and route check for ${service.name.toLowerCase()}.`,
        `Document review and preparation aligned to ${category.name.toLowerCase()}.`,
        'Submission, follow-up, and authority query handling support.',
        'Final record handover with next-step compliance guidance.',
      ];
  }
}

function buildMetaKeywords(service, category, context, details) {
  return [
    `${service.name.toLowerCase()} india`,
    `${service.name.toLowerCase()} services`,
    `${service.name.toLowerCase()} consultant`,
    category.name.toLowerCase(),
    ...(details.seoTerms || []),
    ...context.keywords,
  ];
}

function buildServicePage(category, service, index) {
  const details = SERVICE_CONTENT[service.slug] || {};
  const context = CATEGORY_CONTEXT[category.id] || CATEGORY_CONTEXT.reg;
  const heading = `${service.name} Services in India`;

  return {
    ...service,
    index: index + 1,
    categoryId: category.id,
    categoryName: category.name,
    heading,
    intro:
      details.intro ||
      `${service.name} with end-to-end support for review, documentation, filing, follow-up, and the immediate next compliance actions that matter after completion.`,
    overview: buildOverview(service, category, context, details),
    detailedInformation: buildDetailedInformation(service, category, context, details),
    documents: details.documents || context.defaultDocuments,
    journey: buildJourney(service, category.id),
    execution: buildExecution(service, category, details),
    reasonsToBook: COMMON_REASONS,
    whoNeeds: details.whoNeeds || context.whoNeeds,
    whyChoose: COMMON_WHY_CHOOSE,
    howItWorks: COMMON_PROCESS,
    faqs: buildFaq(service.name, category.id, details),
    metaTitle: details.metaTitle || `${service.name} in India | ${category.name} | Taxera`,
    metaDescription:
      details.metaDescription ||
      `${service.name} with practical support on documents, timelines, filing flow, and post-submission next steps. Explore Taxera's ${category.name.toLowerCase()} support in India.`,
    metaKeywords: details.metaKeywords || buildMetaKeywords(service, category, context, details),
  };
}

export const SERVICE_PAGES = SERVICES_DATA.flatMap((category) =>
  category.services.map((service, index) => buildServicePage(category, service, index))
);

export const SERVICE_PAGE_MAP = Object.fromEntries(
  SERVICE_PAGES.map((service) => [`${service.categoryId}/${service.slug}`, service])
);

export function getServicePage(categoryId, serviceSlug) {
  return SERVICE_PAGE_MAP[`${categoryId}/${serviceSlug}`] || null;
}
