export type FieldType = 'text' | 'textarea' | 'date' | 'select' | 'number'

export interface TemplateField {
  id: string
  label: string
  type: FieldType
  placeholder?: string
  required?: boolean
  options?: string[]
  group?: string
}

export interface TemplateSchema {
  title: string
  fields: TemplateField[]
  document: string
}

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
  'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
  'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
  'Wisconsin','Wyoming',
]

export const templateSchemas: Record<string, TemplateSchema> = {

  /* ─────────────────────────────────────────────────────────────────── */
  'non-disclosure-agreement': {
    title: 'Non-Disclosure Agreement (NDA)',
    fields: [
      { id: 'effective_date', label: 'Effective Date', type: 'date', required: true, group: 'Parties & Date' },
      { id: 'disclosing_party', label: 'Disclosing Party Full Name', type: 'text', placeholder: 'Acme Corp or John Smith', required: true, group: 'Parties & Date' },
      { id: 'disclosing_type', label: 'Disclosing Party Type', type: 'select', options: ['an individual','a corporation','a limited liability company','a partnership','a sole proprietorship'], required: true, group: 'Parties & Date' },
      { id: 'disclosing_address', label: 'Disclosing Party Address', type: 'text', placeholder: '123 Main St, Austin, TX 78701', required: true, group: 'Parties & Date' },
      { id: 'receiving_party', label: 'Receiving Party Full Name', type: 'text', placeholder: 'Beta Inc or Jane Doe', required: true, group: 'Parties & Date' },
      { id: 'receiving_type', label: 'Receiving Party Type', type: 'select', options: ['an individual','a corporation','a limited liability company','a partnership','a sole proprietorship'], required: true, group: 'Parties & Date' },
      { id: 'receiving_address', label: 'Receiving Party Address', type: 'text', placeholder: '456 Oak Ave, San Francisco, CA 94102', required: true, group: 'Parties & Date' },
      { id: 'purpose', label: 'Purpose of Disclosure', type: 'textarea', placeholder: 'evaluating a potential business partnership between the parties', required: true, group: 'Terms' },
      { id: 'duration', label: 'Duration (Years)', type: 'number', placeholder: '3', required: true, group: 'Terms' },
      { id: 'governing_state', label: 'Governing State', type: 'select', options: US_STATES, required: true, group: 'Terms' },
      { id: 'disclosing_title', label: 'Disclosing Party Signatory Title', type: 'text', placeholder: 'CEO', group: 'Signatures' },
      { id: 'receiving_title', label: 'Receiving Party Signatory Title', type: 'text', placeholder: 'President', group: 'Signatures' },
    ],
    document: `NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement ("Agreement") is entered into as of {{effective_date}}, by and between {{disclosing_party}}, {{disclosing_type}}, located at {{disclosing_address}} ("Disclosing Party"), and {{receiving_party}}, {{receiving_type}}, located at {{receiving_address}} ("Receiving Party") (collectively the "Parties").

1. PURPOSE
The Parties wish to explore {{purpose}} ("Purpose"). In connection with the Purpose, the Disclosing Party may share certain Confidential Information with the Receiving Party.

2. CONFIDENTIAL INFORMATION
"Confidential Information" means any non-public information disclosed by the Disclosing Party to the Receiving Party, directly or indirectly, in writing, orally, or by inspection of tangible objects, including but not limited to: business plans, customer data, financial information, trade secrets, technical data, product plans, research, inventions, processes, designs, and know-how. Confidential Information does not include information that: (a) is or becomes publicly known through no breach of this Agreement; (b) was rightfully known to the Receiving Party before disclosure; (c) is independently developed by the Receiving Party without use of Confidential Information; or (d) is required to be disclosed by law or court order, provided the Receiving Party gives prompt written notice to the Disclosing Party.

3. OBLIGATIONS
The Receiving Party agrees to: (a) hold all Confidential Information in strict confidence using at least the same degree of care it uses for its own confidential information, but no less than reasonable care; (b) use Confidential Information solely for the Purpose; (c) not disclose Confidential Information to any third party without prior written consent of the Disclosing Party; and (d) limit access to Confidential Information to those employees, agents, or contractors who have a need to know for the Purpose and who are bound by obligations at least as protective as those herein.

4. TERM
This Agreement shall remain in effect for a period of {{duration}} years from the Effective Date, unless earlier terminated by mutual written agreement of the Parties. Obligations with respect to trade secrets shall survive termination of this Agreement.

5. RETURN OF INFORMATION
Upon request or termination of this Agreement, the Receiving Party shall promptly return or destroy all Confidential Information and any copies thereof, and certify in writing that it has done so.

6. REMEDIES
The Receiving Party acknowledges that breach of this Agreement would cause irreparable harm to the Disclosing Party for which monetary damages may be inadequate. The Disclosing Party shall be entitled to seek equitable relief, including injunction and specific performance, without the requirement of posting a bond or other security, in addition to all other remedies available at law or equity.

7. NO LICENSE
Nothing herein grants the Receiving Party any intellectual property rights, title, or interest in the Confidential Information.

8. GOVERNING LAW
This Agreement shall be governed by the laws of the State of {{governing_state}}, without regard to its conflict-of-law provisions. Any dispute arising hereunder shall be resolved in the courts of {{governing_state}}.

9. ENTIRE AGREEMENT
This Agreement constitutes the entire agreement between the Parties regarding its subject matter and supersedes all prior discussions and agreements relating to the same.

IN WITNESS WHEREOF, the Parties have executed this Non-Disclosure Agreement as of the date first written above.

DISCLOSING PARTY:

Signature: _______________________________
Name: {{disclosing_party}}
Title: {{disclosing_title}}
Date: {{effective_date}}

RECEIVING PARTY:

Signature: _______________________________
Name: {{receiving_party}}
Title: {{receiving_title}}
Date: {{effective_date}}`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'residential-lease-agreement': {
    title: 'Residential Lease Agreement',
    fields: [
      { id: 'landlord', label: 'Landlord Full Name / Company', type: 'text', placeholder: 'John Smith or Smith Properties LLC', required: true, group: 'Parties' },
      { id: 'tenant', label: 'Tenant Full Name(s)', type: 'text', placeholder: 'Jane Doe and Michael Doe', required: true, group: 'Parties' },
      { id: 'property_address', label: 'Rental Property Address', type: 'text', placeholder: '789 Maple St, Apt 2B, Denver, CO 80203', required: true, group: 'Property' },
      { id: 'lease_start', label: 'Lease Start Date', type: 'date', required: true, group: 'Term & Rent' },
      { id: 'lease_end', label: 'Lease End Date', type: 'date', required: true, group: 'Term & Rent' },
      { id: 'monthly_rent', label: 'Monthly Rent ($)', type: 'number', placeholder: '1500', required: true, group: 'Term & Rent' },
      { id: 'rent_due_day', label: 'Rent Due Day of Month', type: 'number', placeholder: '1', required: true, group: 'Term & Rent' },
      { id: 'security_deposit', label: 'Security Deposit ($)', type: 'number', placeholder: '1500', required: true, group: 'Term & Rent' },
      { id: 'late_fee', label: 'Late Fee ($)', type: 'number', placeholder: '50', group: 'Term & Rent' },
      { id: 'grace_days', label: 'Grace Period (Days)', type: 'number', placeholder: '5', group: 'Term & Rent' },
      { id: 'utilities_included', label: 'Utilities Included', type: 'textarea', placeholder: 'Water, trash. Tenant responsible for electricity, gas, internet.', group: 'Property' },
      { id: 'pets_allowed', label: 'Pets Policy', type: 'select', options: ['No pets allowed','Cats only','Dogs allowed (under 25 lbs)','Pets allowed with written approval'], group: 'Property' },
      { id: 'governing_state', label: 'State', type: 'select', options: US_STATES, required: true, group: 'Property' },
    ],
    document: `RESIDENTIAL LEASE AGREEMENT

This Residential Lease Agreement ("Lease") is entered into between {{landlord}} ("Landlord") and {{tenant}} ("Tenant"). The parties agree as follows:

1. PROPERTY
Landlord leases to Tenant the residential property located at {{property_address}} ("Premises") for use as a private residence only.

2. TERM
The lease term begins on {{lease_start}} and ends on {{lease_end}} ("Term"). After expiration, this Lease converts to a month-to-month tenancy unless either party provides 30 days written notice of termination.

3. RENT
Tenant agrees to pay monthly rent of \${{monthly_rent}}, due on the {{rent_due_day}}th of each month. Rent shall be paid by check, electronic transfer, or other method agreed by the parties. If rent is not received within {{grace_days}} days of the due date, Tenant shall pay a late fee of \${{late_fee}}. Continued failure to pay rent is grounds for eviction under {{governing_state}} law.

4. SECURITY DEPOSIT
Tenant shall pay a security deposit of \${{security_deposit}} prior to occupancy. Landlord shall hold the deposit in a separate account as required by {{governing_state}} law. Landlord may deduct from the deposit: unpaid rent, damage beyond normal wear and tear, and reasonable cleaning costs. Landlord shall return the deposit, with an itemized statement of deductions, within the time required by {{governing_state}} law.

5. UTILITIES AND SERVICES
{{utilities_included}}. Tenant is responsible for all other utilities and services not listed above.

6. PETS
{{pets_allowed}}. Any violation of the pet policy may result in additional charges or termination of this Lease.

7. OCCUPANCY
The Premises shall be occupied only by the Tenant named above. Tenant shall not sublet or assign this Lease without prior written consent of Landlord.

8. MAINTENANCE
Tenant shall keep the Premises clean and in good condition. Tenant shall promptly notify Landlord of any needed repairs. Tenant shall not make alterations or improvements without Landlord's prior written consent.

9. ENTRY BY LANDLORD
Landlord shall provide Tenant with at least 24 hours advance written notice before entering the Premises, except in cases of emergency.

10. TERMINATION
Landlord may terminate this Lease upon material breach by Tenant, including non-payment of rent or violation of any Lease term, subject to the notice requirements of {{governing_state}} law.

11. GOVERNING LAW
This Lease is governed by the laws of the State of {{governing_state}}.

LANDLORD:

Signature: _______________________________
Name: {{landlord}}
Date: _______________

TENANT:

Signature: _______________________________
Name: {{tenant}}
Date: _______________`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'independent-contractor-agreement': {
    title: 'Independent Contractor Agreement',
    fields: [
      { id: 'effective_date', label: 'Effective Date', type: 'date', required: true, group: 'Parties' },
      { id: 'client', label: 'Client Name / Company', type: 'text', placeholder: 'Acme Corp', required: true, group: 'Parties' },
      { id: 'client_address', label: 'Client Address', type: 'text', placeholder: '100 Business Blvd, New York, NY 10001', required: true, group: 'Parties' },
      { id: 'contractor', label: 'Contractor Full Name / Company', type: 'text', placeholder: 'Jane Doe or Doe Consulting LLC', required: true, group: 'Parties' },
      { id: 'contractor_address', label: 'Contractor Address', type: 'text', placeholder: '500 Freelance Ave, Austin, TX 78701', required: true, group: 'Parties' },
      { id: 'services', label: 'Services to be Performed', type: 'textarea', placeholder: 'Web development services including front-end development, API integration, and code review...', required: true, group: 'Services' },
      { id: 'start_date', label: 'Start Date', type: 'date', required: true, group: 'Services' },
      { id: 'end_date', label: 'End Date (or "Ongoing")', type: 'text', placeholder: 'December 31, 2026 or Ongoing until terminated', required: true, group: 'Services' },
      { id: 'rate', label: 'Compensation Rate', type: 'text', placeholder: '$150 per hour or $5,000 per project', required: true, group: 'Compensation' },
      { id: 'payment_terms', label: 'Payment Terms', type: 'select', options: ['Net 15 days','Net 30 days','Net 45 days','Upon completion','Weekly','Bi-weekly','Monthly'], required: true, group: 'Compensation' },
      { id: 'expense_policy', label: 'Expense Reimbursement', type: 'select', options: ['No expenses reimbursed','Pre-approved expenses reimbursed','All reasonable business expenses reimbursed'], group: 'Compensation' },
      { id: 'governing_state', label: 'Governing State', type: 'select', options: US_STATES, required: true, group: 'Terms' },
    ],
    document: `INDEPENDENT CONTRACTOR AGREEMENT

This Independent Contractor Agreement ("Agreement") is made as of {{effective_date}}, between {{client}}, located at {{client_address}} ("Client"), and {{contractor}}, located at {{contractor_address}} ("Contractor").

1. SERVICES
Contractor agrees to perform the following services for Client: {{services}} ("Services"). Contractor shall commence Services on {{start_date}} and continue through {{end_date}}, unless earlier terminated as provided herein.

2. INDEPENDENT CONTRACTOR STATUS
Contractor is an independent contractor and not an employee of Client. Contractor shall have sole control over the manner and means of performing the Services. This Agreement does not create a partnership, joint venture, or employment relationship. Contractor is solely responsible for all taxes, insurance, and employment-related obligations arising from this engagement. Client shall not withhold taxes on Contractor's behalf. Contractor shall provide Form W-9 upon request and shall receive Form 1099 if required by applicable law.

3. COMPENSATION
Client shall pay Contractor {{rate}}. Payment shall be made {{payment_terms}} from receipt of Contractor's invoice. Contractor shall submit invoices describing Services performed and time or deliverables completed. {{expense_policy}}.

4. INTELLECTUAL PROPERTY
All work product, deliverables, inventions, and materials created by Contractor in connection with the Services ("Work Product") shall be the sole and exclusive property of Client. Contractor hereby assigns to Client all right, title, and interest in and to such Work Product, including all intellectual property rights therein. Contractor shall execute any additional documents reasonably requested by Client to perfect such assignment.

5. CONFIDENTIALITY
Contractor acknowledges that in performing the Services, Contractor may have access to confidential and proprietary information of Client. Contractor agrees to hold all such information in strict confidence, use it solely for the purpose of performing the Services, and not disclose it to any third party without Client's prior written consent. This obligation survives termination of this Agreement for a period of three (3) years.

6. NON-SOLICITATION
During the term of this Agreement and for twelve (12) months thereafter, Contractor shall not solicit or hire any employee or contractor of Client.

7. TERM AND TERMINATION
Either party may terminate this Agreement upon thirty (30) days written notice. Client may terminate immediately for Contractor's material breach. Upon termination, Client shall pay for all Services rendered and accepted prior to the termination date.

8. GOVERNING LAW
This Agreement shall be governed by the laws of the State of {{governing_state}}. Any disputes shall be resolved in the courts of {{governing_state}}.

9. ENTIRE AGREEMENT
This Agreement is the complete agreement between the parties and supersedes all prior discussions and agreements regarding the Services.

CLIENT:

Signature: _______________________________
Name: {{client}}
Date: {{effective_date}}

CONTRACTOR:

Signature: _______________________________
Name: {{contractor}}
Date: {{effective_date}}`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'employment-contract': {
    title: 'Employment Contract',
    fields: [
      { id: 'effective_date', label: 'Contract Date', type: 'date', required: true, group: 'Parties' },
      { id: 'employer', label: 'Employer Name / Company', type: 'text', placeholder: 'Acme Corporation', required: true, group: 'Parties' },
      { id: 'employer_address', label: 'Employer Address', type: 'text', placeholder: '100 Corporate Dr, Chicago, IL 60601', required: true, group: 'Parties' },
      { id: 'employee', label: 'Employee Full Name', type: 'text', placeholder: 'John Doe', required: true, group: 'Parties' },
      { id: 'position', label: 'Position / Job Title', type: 'text', placeholder: 'Senior Software Engineer', required: true, group: 'Employment Terms' },
      { id: 'department', label: 'Department', type: 'text', placeholder: 'Engineering', group: 'Employment Terms' },
      { id: 'start_date', label: 'Start Date', type: 'date', required: true, group: 'Employment Terms' },
      { id: 'employment_type', label: 'Employment Type', type: 'select', options: ['Full-time','Part-time','Temporary','At-will'], required: true, group: 'Employment Terms' },
      { id: 'work_location', label: 'Work Location', type: 'text', placeholder: 'Chicago, IL office or Remote', required: true, group: 'Employment Terms' },
      { id: 'salary', label: 'Annual Salary ($)', type: 'number', placeholder: '90000', required: true, group: 'Compensation' },
      { id: 'payment_frequency', label: 'Pay Frequency', type: 'select', options: ['Weekly','Bi-weekly','Semi-monthly','Monthly'], required: true, group: 'Compensation' },
      { id: 'benefits', label: 'Benefits', type: 'textarea', placeholder: 'Health, dental, and vision insurance; 401(k) with 4% employer match; 15 days PTO per year', group: 'Compensation' },
      { id: 'reporting_to', label: 'Reports To', type: 'text', placeholder: 'VP of Engineering', group: 'Employment Terms' },
      { id: 'governing_state', label: 'Governing State', type: 'select', options: US_STATES, required: true, group: 'Terms' },
    ],
    document: `EMPLOYMENT CONTRACT

This Employment Contract ("Agreement") is entered into as of {{effective_date}}, between {{employer}}, located at {{employer_address}} ("Employer"), and {{employee}} ("Employee").

1. POSITION AND DUTIES
Employer hereby employs Employee as {{position}} in the {{department}} department, reporting to {{reporting_to}}. Employee's primary work location shall be {{work_location}}. Employee shall perform all duties customarily associated with the position and such other duties as Employer may reasonably assign from time to time.

2. TERM OF EMPLOYMENT
Employment shall commence on {{start_date}}. This is {{employment_type}} employment. If at-will, either party may terminate this Agreement at any time, with or without cause, subject to applicable {{governing_state}} law and any notice provisions herein.

3. COMPENSATION
Employer shall pay Employee an annual salary of \${{salary}}, payable {{payment_frequency}} in accordance with Employer's standard payroll practices, subject to applicable withholding and deductions required by law.

4. BENEFITS
Employee shall be eligible for the following benefits, subject to the terms and conditions of Employer's benefit plans: {{benefits}}. Benefits are subject to change at Employer's discretion.

5. CONFIDENTIALITY
Employee acknowledges that in the course of employment, Employee will have access to confidential and proprietary information including trade secrets, customer data, business plans, and financial information ("Confidential Information"). Employee agrees to hold all Confidential Information in strict confidence during and after employment, and not to use or disclose it except as required in the performance of Employee's duties.

6. INTELLECTUAL PROPERTY
All inventions, works of authorship, discoveries, and improvements made by Employee, alone or with others, during the term of employment and relating to Employer's business or resulting from Employee's work ("IP"), are and shall remain the exclusive property of Employer. Employee hereby assigns all rights, title, and interest in all such IP to Employer.

7. NON-SOLICITATION
During employment and for twelve (12) months thereafter, Employee shall not: (a) solicit or hire Employer's employees or contractors; or (b) solicit business from Employer's clients or customers with whom Employee had material contact during employment.

8. TERMINATION
Employer may terminate this Agreement immediately for Cause (including misconduct, material breach, or violation of Employer policies). Either party may terminate without Cause upon [30] days written notice. Upon termination, Employee shall return all Employer property and cease using Confidential Information.

9. GOVERNING LAW
This Agreement shall be governed by the laws of the State of {{governing_state}}.

10. ENTIRE AGREEMENT
This Agreement constitutes the entire agreement between the parties regarding employment and supersedes all prior negotiations, representations, and agreements.

EMPLOYER:

Signature: _______________________________
Name: {{employer}}
Title: Authorized Representative
Date: {{effective_date}}

EMPLOYEE:

Signature: _______________________________
Name: {{employee}}
Date: {{effective_date}}`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'promissory-note': {
    title: 'Promissory Note',
    fields: [
      { id: 'loan_date', label: 'Loan Date', type: 'date', required: true, group: 'Parties & Loan' },
      { id: 'borrower', label: 'Borrower Full Name', type: 'text', placeholder: 'Jane Doe', required: true, group: 'Parties & Loan' },
      { id: 'borrower_address', label: 'Borrower Address', type: 'text', placeholder: '123 Main St, Dallas, TX 75201', required: true, group: 'Parties & Loan' },
      { id: 'lender', label: 'Lender Full Name / Company', type: 'text', placeholder: 'John Smith or ABC Lending LLC', required: true, group: 'Parties & Loan' },
      { id: 'lender_address', label: 'Lender Address', type: 'text', placeholder: '456 Oak Blvd, Houston, TX 77001', required: true, group: 'Parties & Loan' },
      { id: 'principal_amount', label: 'Principal Loan Amount ($)', type: 'number', placeholder: '10000', required: true, group: 'Loan Terms' },
      { id: 'interest_rate', label: 'Annual Interest Rate (%)', type: 'number', placeholder: '5', required: true, group: 'Loan Terms' },
      { id: 'repayment_type', label: 'Repayment Type', type: 'select', options: ['Lump sum on due date','Monthly installments','Interest-only with balloon payment'], required: true, group: 'Loan Terms' },
      { id: 'monthly_payment', label: 'Monthly Payment Amount ($, if applicable)', type: 'number', placeholder: '500', group: 'Loan Terms' },
      { id: 'due_date', label: 'Final Due Date', type: 'date', required: true, group: 'Loan Terms' },
      { id: 'late_charge', label: 'Late Charge (%)', type: 'number', placeholder: '5', group: 'Loan Terms' },
      { id: 'governing_state', label: 'Governing State', type: 'select', options: US_STATES, required: true, group: 'Terms' },
    ],
    document: `PROMISSORY NOTE

\${{principal_amount}}                                                     Date: {{loan_date}}

FOR VALUE RECEIVED, {{borrower}} ("Borrower"), residing at {{borrower_address}}, promises to pay to the order of {{lender}} ("Lender"), located at {{lender_address}}, the principal sum of \${{principal_amount}} (Dollars), together with interest accruing at the rate of {{interest_rate}}% per annum on the unpaid principal balance.

1. REPAYMENT
Repayment shall be made as follows: {{repayment_type}}. If payments are monthly, Borrower shall pay \${{monthly_payment}} per month beginning one month from the date of this Note. All outstanding principal and accrued interest shall be due and payable in full on {{due_date}} ("Maturity Date").

2. PREPAYMENT
Borrower may prepay this Note in whole or in part at any time without penalty. Prepayments shall be applied first to accrued interest and then to outstanding principal.

3. LATE CHARGE
If any payment is more than ten (10) days late, Borrower shall pay a late charge of {{late_charge}}% of the overdue payment amount.

4. DEFAULT
Borrower shall be in default if: (a) any payment is not made within thirty (30) days of its due date; (b) Borrower becomes insolvent or files for bankruptcy; or (c) Borrower breaches any term of this Note. Upon default, Lender may declare the entire unpaid principal balance, together with all accrued interest, immediately due and payable.

5. ACCELERATION
Upon default, Lender may, at its option, declare the entire outstanding balance immediately due and payable without prior notice to Borrower.

6. COSTS OF COLLECTION
If this Note is placed in the hands of an attorney for collection, Borrower agrees to pay all reasonable costs of collection, including attorney's fees and court costs.

7. GOVERNING LAW
This Note shall be governed by the laws of the State of {{governing_state}}. Borrower consents to personal jurisdiction and venue in {{governing_state}}.

8. WAIVER OF PRESENTMENT
Borrower waives presentment, demand, protest, and notice of dishonor of this Note.

BORROWER:

Signature: _______________________________
Name: {{borrower}}
Address: {{borrower_address}}
Date: {{loan_date}}`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'power-of-attorney': {
    title: 'General Power of Attorney',
    fields: [
      { id: 'effective_date', label: 'Effective Date', type: 'date', required: true, group: 'Parties' },
      { id: 'principal', label: 'Principal (Grantor) Full Name', type: 'text', placeholder: 'Margaret Johnson', required: true, group: 'Parties' },
      { id: 'principal_address', label: 'Principal Address', type: 'text', placeholder: '789 Elm St, Phoenix, AZ 85001', required: true, group: 'Parties' },
      { id: 'agent', label: 'Agent (Attorney-in-Fact) Full Name', type: 'text', placeholder: 'Robert Johnson', required: true, group: 'Parties' },
      { id: 'agent_address', label: 'Agent Address', type: 'text', placeholder: '321 Pine Ave, Scottsdale, AZ 85251', required: true, group: 'Parties' },
      { id: 'agent_relationship', label: 'Agent Relationship to Principal', type: 'text', placeholder: 'son, spouse, friend, attorney', group: 'Parties' },
      { id: 'scope', label: 'Scope of Authority', type: 'select', options: ['General (all financial and legal matters)','Limited to real estate transactions','Limited to banking and financial accounts','Limited to business operations','Limited to specific transaction (describe below)'], required: true, group: 'Authority' },
      { id: 'specific_powers', label: 'Specific Powers or Limitations (if any)', type: 'textarea', placeholder: 'Agent may sell the property at 789 Oak Lane but may not make gifts from Principal\'s assets', group: 'Authority' },
      { id: 'poa_type', label: 'Type of Power of Attorney', type: 'select', options: ['Durable (remains effective if Principal becomes incapacitated)','Non-Durable (terminates if Principal becomes incapacitated)','Springing (becomes effective only upon incapacitation)'], required: true, group: 'Authority' },
      { id: 'expiration', label: 'Expiration (or "No expiration")', type: 'text', placeholder: 'December 31, 2027 or No expiration', required: true, group: 'Authority' },
      { id: 'governing_state', label: 'Governing State', type: 'select', options: US_STATES, required: true, group: 'Terms' },
    ],
    document: `POWER OF ATTORNEY

KNOW ALL MEN BY THESE PRESENTS, that I, {{principal}}, residing at {{principal_address}} ("Principal"), hereby appoint {{agent}}, residing at {{agent_address}}, my {{agent_relationship}} ("Agent" or "Attorney-in-Fact"), to act in my name, place, and stead in any way which I myself could do in connection with the following matters.

1. GRANT OF AUTHORITY
This Power of Attorney grants my Agent the following authority: {{scope}}. {{specific_powers}}.

My Agent is authorized to take any action that I could take personally regarding the above matters, including but not limited to: executing documents, entering into contracts, managing financial accounts, buying or selling real or personal property, conducting banking transactions, filing tax returns, making legal claims, and taking all other actions necessary or convenient to carry out the powers granted herein.

2. TYPE
This is a {{poa_type}} Power of Attorney.

3. TERM
This Power of Attorney is effective as of {{effective_date}} and shall remain in effect until {{expiration}}, unless sooner revoked by me in writing.

4. RATIFICATION
I ratify and confirm all acts my Agent shall lawfully do or cause to be done pursuant to this Power of Attorney.

5. MULTIPLE COUNTERPARTS
This Power of Attorney may be executed in counterparts, each of which shall be deemed an original. Third parties may rely on a copy of this document as if it were an original.

6. GOVERNING LAW
This Power of Attorney shall be governed by the laws of the State of {{governing_state}} and construed to comply with the requirements of {{governing_state}} law for powers of attorney.

7. REVOCATION
This Power of Attorney may be revoked by me at any time by delivering written notice of revocation to my Agent and to any third parties relying on this document.

IN WITNESS WHEREOF, I have executed this Power of Attorney on {{effective_date}}.

PRINCIPAL:

Signature: _______________________________
Name: {{principal}}
Address: {{principal_address}}
Date: {{effective_date}}

State of ___________________
County of _________________

Subscribed and sworn to before me this _____ day of _____________, 20____.

Notary Public: _______________________________
My Commission Expires: _______________`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'eviction-notice': {
    title: 'Eviction Notice',
    fields: [
      { id: 'notice_date', label: 'Notice Date', type: 'date', required: true, group: 'Parties' },
      { id: 'landlord', label: 'Landlord Full Name / Company', type: 'text', placeholder: 'Smith Properties LLC', required: true, group: 'Parties' },
      { id: 'tenant', label: 'Tenant Full Name(s)', type: 'text', placeholder: 'John Doe and Jane Doe', required: true, group: 'Parties' },
      { id: 'property_address', label: 'Rental Property Address', type: 'text', placeholder: '123 Oak St, Apt 4A, Miami, FL 33101', required: true, group: 'Property' },
      { id: 'notice_type', label: 'Type of Notice', type: 'select', options: ['3-Day Pay or Quit','7-Day Pay or Quit','14-Day Pay or Quit','30-Day Notice to Vacate','60-Day Notice to Vacate','Notice to Cure or Quit'], required: true, group: 'Notice Details' },
      { id: 'reason', label: 'Reason for Notice', type: 'textarea', placeholder: 'Tenant has failed to pay rent for the month of June 2026 in the amount of $1,500 due on June 1, 2026', required: true, group: 'Notice Details' },
      { id: 'amount_owed', label: 'Amount Owed (if for non-payment, $)', type: 'number', placeholder: '1500', group: 'Notice Details' },
      { id: 'cure_deadline', label: 'Deadline to Pay or Vacate', type: 'date', required: true, group: 'Notice Details' },
      { id: 'governing_state', label: 'State', type: 'select', options: US_STATES, required: true, group: 'Terms' },
    ],
    document: `EVICTION NOTICE

Date: {{notice_date}}

TO: {{tenant}}
Property Address: {{property_address}}

FROM: {{landlord}} ("Landlord")

NOTICE TYPE: {{notice_type}}

Dear {{tenant}}:

PLEASE TAKE NOTICE that you are in violation of your lease agreement for the premises located at {{property_address}} (the "Premises") for the following reason:

{{reason}}

AMOUNT OWED (if applicable): \${{amount_owed}}

DEMAND: You are hereby required to, on or before {{cure_deadline}}:

[  ] PAY the full amount owed of \${{amount_owed}} to Landlord; OR
[  ] CURE the lease violation described above; OR
[  ] VACATE and surrender possession of the Premises to Landlord.

IF YOU FAIL to pay the amount owed, cure the violation, or vacate the Premises by {{cure_deadline}}, Landlord will commence eviction (unlawful detainer) proceedings against you in court as allowed by the laws of {{governing_state}}. You will be liable for all costs, attorney's fees, and additional rent that accrues during such proceedings, as permitted by {{governing_state}} law.

This notice does not waive any rights of Landlord and is not a complete list of Landlord's claims or defaults by Tenant.

Service of this notice was made by:
[  ] Personal delivery to Tenant
[  ] Posting on the Premises door and mailing by first-class mail
[  ] Other: ___________________________

LANDLORD:

Signature: _______________________________
Name: {{landlord}}
Date: {{notice_date}}`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'offer-letter': {
    title: 'Job Offer Letter',
    fields: [
      { id: 'offer_date', label: 'Offer Date', type: 'date', required: true, group: 'Details' },
      { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Acme Corporation', required: true, group: 'Details' },
      { id: 'candidate', label: 'Candidate Full Name', type: 'text', placeholder: 'Jane Smith', required: true, group: 'Details' },
      { id: 'candidate_address', label: 'Candidate Address', type: 'text', placeholder: '100 Maple St, Seattle, WA 98101', group: 'Details' },
      { id: 'position', label: 'Position / Job Title', type: 'text', placeholder: 'Product Manager', required: true, group: 'Employment Terms' },
      { id: 'department', label: 'Department', type: 'text', placeholder: 'Product', group: 'Employment Terms' },
      { id: 'reporting_to', label: 'Reports To', type: 'text', placeholder: 'Chief Product Officer', group: 'Employment Terms' },
      { id: 'start_date', label: 'Proposed Start Date', type: 'date', required: true, group: 'Employment Terms' },
      { id: 'work_location', label: 'Work Location', type: 'text', placeholder: 'Seattle, WA or Remote', required: true, group: 'Employment Terms' },
      { id: 'salary', label: 'Annual Base Salary ($)', type: 'number', placeholder: '120000', required: true, group: 'Compensation' },
      { id: 'signing_bonus', label: 'Signing Bonus ($, if any)', type: 'number', placeholder: '5000', group: 'Compensation' },
      { id: 'benefits', label: 'Benefits Summary', type: 'textarea', placeholder: 'Health/dental/vision insurance, 401(k) with match, 20 days PTO, equity options', group: 'Compensation' },
      { id: 'offer_expiration', label: 'Offer Expiration Date', type: 'date', group: 'Details' },
      { id: 'contingencies', label: 'Contingencies', type: 'textarea', placeholder: 'Background check, reference check, I-9 verification', group: 'Details' },
    ],
    document: `[COMPANY LETTERHEAD]

{{offer_date}}

{{candidate}}
{{candidate_address}}

Re: Offer of Employment — {{position}}

Dear {{candidate}},

We are delighted to offer you the position of {{position}} in our {{department}} department at {{company}}. We were impressed by your background and are excited about the contributions you will make to our team.

POSITION AND START DATE
Your title will be {{position}}, reporting to {{reporting_to}}. Your anticipated start date is {{start_date}}, subject to successful completion of applicable contingencies. Your primary work location will be {{work_location}}.

COMPENSATION
Your annual base salary will be \${{salary}}, paid in accordance with {{company}}'s standard payroll schedule. You will also receive a one-time signing bonus of \${{signing_bonus}}, payable on your first paycheck (subject to applicable withholding; repayable if you leave within 12 months).

BENEFITS
You will be eligible for {{company}}'s employee benefits, including: {{benefits}}. Full details of all benefit plans will be provided in your onboarding materials.

CONTINGENCIES
This offer is contingent upon: {{contingencies}}. Employment is also contingent upon your eligibility to work in the United States and your completion of all required new-hire paperwork.

AT-WILL EMPLOYMENT
Your employment with {{company}} is at-will, meaning either you or {{company}} may terminate the employment relationship at any time, with or without cause or notice, subject to applicable law.

CONFIDENTIALITY
As a condition of employment, you will be required to sign {{company}}'s standard Confidentiality and Intellectual Property Agreement, which will be provided separately.

OFFER EXPIRATION
This offer will expire on {{offer_expiration}} if not accepted before that date.

We are very excited about the prospect of you joining {{company}}. Please sign and return this letter by {{offer_expiration}} to confirm your acceptance.

Sincerely,

_______________________________
[Authorized Signatory]
{{company}}
Date: {{offer_date}}

---

ACCEPTANCE

I, {{candidate}}, accept the offer of employment described in this letter on the terms and conditions set forth above.

Signature: _______________________________
Name: {{candidate}}
Date: _______________
Proposed Start Date: {{start_date}}`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'bill-of-sale': {
    title: 'Bill of Sale (General)',
    fields: [
      { id: 'sale_date', label: 'Sale Date', type: 'date', required: true, group: 'Transaction' },
      { id: 'seller', label: 'Seller Full Name', type: 'text', placeholder: 'John Smith', required: true, group: 'Parties' },
      { id: 'seller_address', label: 'Seller Address', type: 'text', placeholder: '100 Main St, Nashville, TN 37201', required: true, group: 'Parties' },
      { id: 'buyer', label: 'Buyer Full Name', type: 'text', placeholder: 'Jane Doe', required: true, group: 'Parties' },
      { id: 'buyer_address', label: 'Buyer Address', type: 'text', placeholder: '200 Oak Ave, Memphis, TN 38101', required: true, group: 'Parties' },
      { id: 'item_description', label: 'Description of Item(s) Sold', type: 'textarea', placeholder: 'One (1) Dell XPS 15 laptop, serial number ABC123; two (2) 27-inch monitors', required: true, group: 'Item' },
      { id: 'purchase_price', label: 'Purchase Price ($)', type: 'number', placeholder: '1200', required: true, group: 'Transaction' },
      { id: 'payment_method', label: 'Payment Method', type: 'select', options: ['Cash','Cashier\'s Check','Wire Transfer','Personal Check','Venmo/PayPal/Zelle','Other'], required: true, group: 'Transaction' },
      { id: 'as_is', label: 'Condition', type: 'select', options: ['As-Is (no warranty)','With limited warranty (describe in notes)'], required: true, group: 'Transaction' },
      { id: 'governing_state', label: 'State', type: 'select', options: US_STATES, required: true, group: 'Terms' },
    ],
    document: `BILL OF SALE

This Bill of Sale ("Bill of Sale") is made and entered into as of {{sale_date}}, between {{seller}}, residing at {{seller_address}} ("Seller"), and {{buyer}}, residing at {{buyer_address}} ("Buyer").

1. SALE OF PROPERTY
For and in consideration of the purchase price of \${{purchase_price}} ({{payment_method}}), the receipt and sufficiency of which is hereby acknowledged, Seller hereby sells, transfers, and conveys to Buyer the following personal property:

{{item_description}}

(collectively the "Property")

2. CONSIDERATION
Buyer has paid Seller the sum of \${{purchase_price}} as full payment for the Property.

3. WARRANTY OF TITLE
Seller represents and warrants that Seller is the lawful owner of the Property and has the full right to sell, transfer, and convey the Property to Buyer; that the Property is free and clear of all liens, encumbrances, and claims of third parties; and that Seller will defend Buyer's title to the Property against all persons claiming by, through, or under Seller.

4. CONDITION / WARRANTY
The Property is sold {{as_is}}. Except as expressly stated above, SELLER MAKES NO WARRANTIES, EXPRESS OR IMPLIED, AS TO THE CONDITION, MERCHANTABILITY, OR FITNESS OF THE PROPERTY FOR ANY PARTICULAR PURPOSE.

5. GOVERNING LAW
This Bill of Sale shall be governed by the laws of the State of {{governing_state}}.

6. ENTIRE AGREEMENT
This Bill of Sale constitutes the entire agreement between the parties relating to the sale and purchase of the Property and supersedes all prior negotiations and agreements.

SELLER:

Signature: _______________________________
Name: {{seller}}
Date: {{sale_date}}

BUYER:

Signature: _______________________________
Name: {{buyer}}
Date: {{sale_date}}`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'vehicle-bill-of-sale': {
    title: 'Vehicle Bill of Sale',
    fields: [
      { id: 'sale_date', label: 'Sale Date', type: 'date', required: true, group: 'Transaction' },
      { id: 'seller', label: 'Seller Full Name', type: 'text', placeholder: 'John Smith', required: true, group: 'Parties' },
      { id: 'seller_address', label: 'Seller Address', type: 'text', placeholder: '100 Main St, Portland, OR 97201', required: true, group: 'Parties' },
      { id: 'seller_id', label: "Seller Driver's License / ID #", type: 'text', placeholder: 'DL123456789', group: 'Parties' },
      { id: 'buyer', label: 'Buyer Full Name', type: 'text', placeholder: 'Jane Doe', required: true, group: 'Parties' },
      { id: 'buyer_address', label: 'Buyer Address', type: 'text', placeholder: '200 Oak Ave, Eugene, OR 97401', required: true, group: 'Parties' },
      { id: 'buyer_id', label: "Buyer Driver's License / ID #", type: 'text', placeholder: 'DL987654321', group: 'Parties' },
      { id: 'year', label: 'Vehicle Year', type: 'number', placeholder: '2020', required: true, group: 'Vehicle' },
      { id: 'make', label: 'Vehicle Make', type: 'text', placeholder: 'Toyota', required: true, group: 'Vehicle' },
      { id: 'model', label: 'Vehicle Model', type: 'text', placeholder: 'Camry', required: true, group: 'Vehicle' },
      { id: 'vin', label: 'VIN (Vehicle Identification Number)', type: 'text', placeholder: '1HGBH41JXMN109186', required: true, group: 'Vehicle' },
      { id: 'color', label: 'Vehicle Color', type: 'text', placeholder: 'Silver', group: 'Vehicle' },
      { id: 'odometer', label: 'Odometer Reading (miles)', type: 'number', placeholder: '45000', required: true, group: 'Vehicle' },
      { id: 'purchase_price', label: 'Purchase Price ($)', type: 'number', placeholder: '15000', required: true, group: 'Transaction' },
      { id: 'payment_method', label: 'Payment Method', type: 'select', options: ['Cash','Cashier\'s Check','Wire Transfer','Personal Check'], required: true, group: 'Transaction' },
      { id: 'governing_state', label: 'State of Sale', type: 'select', options: US_STATES, required: true, group: 'Terms' },
    ],
    document: `VEHICLE BILL OF SALE

This Vehicle Bill of Sale ("Bill of Sale") is made on {{sale_date}}, between the Seller and Buyer identified below.

SELLER INFORMATION
Name: {{seller}}
Address: {{seller_address}}
Driver's License / ID #: {{seller_id}}

BUYER INFORMATION
Name: {{buyer}}
Address: {{buyer_address}}
Driver's License / ID #: {{buyer_id}}

VEHICLE DESCRIPTION
Year: {{year}}
Make: {{make}}
Model: {{model}}
VIN: {{vin}}
Color: {{color}}
Odometer Reading: {{odometer}} miles

SALE TERMS
Purchase Price: \${{purchase_price}}
Payment Method: {{payment_method}}

ODOMETER DISCLOSURE
I, {{seller}}, state that the odometer now reads {{odometer}} miles, and to the best of my knowledge reflects the actual mileage of this vehicle unless one of the following applies (check if applicable):
[ ] Odometer reading reflects excess of mechanical limits
[ ] Odometer reading is not the actual mileage — WARNING: ODOMETER DISCREPANCY

WARRANTIES AND REPRESENTATIONS
Seller represents and warrants that: (a) Seller is the legal owner of the vehicle; (b) the vehicle is free of all liens and encumbrances except as noted; (c) Seller has the right to sell the vehicle. EXCEPT AS EXPRESSLY STATED, THE VEHICLE IS SOLD "AS IS." SELLER MAKES NO WARRANTY, EXPRESS OR IMPLIED, AS TO THE CONDITION, MERCHANTABILITY, OR FITNESS FOR ANY PURPOSE.

LIENS
Known Liens or Encumbrances: [ ] None  [ ] The following: ___________________________

SIGNATURES

SELLER:

Signature: _______________________________
Name: {{seller}}
Date: {{sale_date}}

BUYER:

Signature: _______________________________
Name: {{buyer}}
Date: {{sale_date}}

State of {{governing_state}}`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'release-of-liability': {
    title: 'Release of Liability / Waiver',
    fields: [
      { id: 'effective_date', label: 'Date', type: 'date', required: true, group: 'Details' },
      { id: 'releasor', label: 'Releasor Full Name (Person Signing)', type: 'text', placeholder: 'John Smith', required: true, group: 'Parties' },
      { id: 'releasor_address', label: 'Releasor Address', type: 'text', placeholder: '100 Pine St, Denver, CO 80201', required: true, group: 'Parties' },
      { id: 'releasee', label: 'Releasee Full Name / Company (Released Party)', type: 'text', placeholder: 'Adventure Sports Co., LLC', required: true, group: 'Parties' },
      { id: 'activity', label: 'Activity / Event Description', type: 'textarea', placeholder: 'rock climbing, bungee jumping, white-water rafting trips', required: true, group: 'Details' },
      { id: 'activity_location', label: 'Activity Location', type: 'text', placeholder: 'Denver Rock Gym, 123 Boulder Ave, Denver, CO 80201', group: 'Details' },
      { id: 'consideration', label: 'Consideration (What Releasor Receives)', type: 'text', placeholder: 'participation in the activity described above', required: true, group: 'Details' },
      { id: 'governing_state', label: 'Governing State', type: 'select', options: US_STATES, required: true, group: 'Terms' },
    ],
    document: `RELEASE OF LIABILITY AND ASSUMPTION OF RISK

This Release of Liability and Assumption of Risk ("Release") is entered into on {{effective_date}} by {{releasor}}, residing at {{releasor_address}} ("Releasor"), in favor of {{releasee}} and its owners, employees, agents, officers, directors, successors, and assigns (collectively "Releasee").

IN CONSIDERATION of being permitted to participate in {{activity}} at {{activity_location}} and for {{consideration}}, the Releasor agrees as follows:

1. ASSUMPTION OF RISK
Releasor acknowledges that {{activity}} involves inherent risks, dangers, and hazards, which may include but are not limited to: physical injury, illness, death, property damage, and other unforeseen risks. Releasor voluntarily assumes ALL risks associated with participating in {{activity}}, whether foreseeable or not, including risks caused by the negligence of Releasee.

2. RELEASE AND WAIVER
Releasor, on behalf of Releasor and Releasor's heirs, executors, administrators, and assigns, HEREBY RELEASES, WAIVES, DISCHARGES, AND COVENANTS NOT TO SUE Releasee from any and all claims, demands, losses, causes of action, damages, costs, and expenses arising from or in connection with Releasor's participation in {{activity}}, including claims arising from the NEGLIGENCE of Releasee.

3. INDEMNIFICATION
Releasor agrees to indemnify, defend, and hold harmless Releasee from and against any claims, suits, losses, or causes of action, including attorney's fees, arising from or related to Releasor's participation in {{activity}} or Releasor's breach of this Release.

4. MEDICAL TREATMENT
In the event of an emergency, Releasor consents to medical treatment as deemed necessary by medical personnel. Releasor accepts financial responsibility for all such medical treatment.

5. ACKNOWLEDGMENT
Releasor acknowledges that: (a) Releasor has read this Release carefully; (b) Releasor understands its terms; (c) Releasor is signing voluntarily; and (d) Releasor is of legal age and competent to sign this Release.

6. GOVERNING LAW
This Release shall be governed by the laws of the State of {{governing_state}}. If any provision is found unenforceable, all remaining provisions shall remain in full force.

RELEASOR:

Signature: _______________________________
Name: {{releasor}}
Address: {{releasor_address}}
Date: {{effective_date}}`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'service-agreement': {
    title: 'Service Agreement',
    fields: [
      { id: 'effective_date', label: 'Effective Date', type: 'date', required: true, group: 'Parties' },
      { id: 'client', label: 'Client Name / Company', type: 'text', placeholder: 'ABC Retail Inc.', required: true, group: 'Parties' },
      { id: 'client_address', label: 'Client Address', type: 'text', placeholder: '300 Commerce Blvd, Atlanta, GA 30301', required: true, group: 'Parties' },
      { id: 'provider', label: 'Service Provider Name / Company', type: 'text', placeholder: 'Creative Agency LLC', required: true, group: 'Parties' },
      { id: 'provider_address', label: 'Provider Address', type: 'text', placeholder: '400 Creative Way, Atlanta, GA 30302', required: true, group: 'Parties' },
      { id: 'services', label: 'Services Description', type: 'textarea', placeholder: 'Social media management, including weekly content creation (10 posts/week), monthly analytics report, and quarterly strategy review...', required: true, group: 'Services' },
      { id: 'deliverables', label: 'Key Deliverables', type: 'textarea', placeholder: '10 social media posts per week, monthly analytics report (PDF), quarterly strategy deck', group: 'Services' },
      { id: 'start_date', label: 'Start Date', type: 'date', required: true, group: 'Services' },
      { id: 'end_date', label: 'End Date', type: 'text', placeholder: 'December 31, 2026 or Ongoing', required: true, group: 'Services' },
      { id: 'fee', label: 'Service Fee', type: 'text', placeholder: '$2,500 per month or $15,000 total project', required: true, group: 'Compensation' },
      { id: 'payment_terms', label: 'Payment Terms', type: 'select', options: ['Net 15','Net 30','Net 45','Monthly in advance','50% upfront 50% on completion'], required: true, group: 'Compensation' },
      { id: 'governing_state', label: 'Governing State', type: 'select', options: US_STATES, required: true, group: 'Terms' },
    ],
    document: `SERVICE AGREEMENT

This Service Agreement ("Agreement") is entered into as of {{effective_date}}, between {{client}}, located at {{client_address}} ("Client"), and {{provider}}, located at {{provider_address}} ("Service Provider").

1. SERVICES
Service Provider agrees to provide the following services to Client: {{services}} (the "Services"). Key deliverables include: {{deliverables}}.

2. TERM
The term of this Agreement commences on {{start_date}} and continues through {{end_date}}, unless earlier terminated as provided herein.

3. COMPENSATION
Client shall pay Service Provider {{fee}}. Payment is due {{payment_terms}} of invoice. Invoices not paid within 30 days of the payment due date shall accrue interest at 1.5% per month on the unpaid balance.

4. INDEPENDENT CONTRACTOR
Service Provider is an independent contractor. Nothing herein creates an employment, partnership, or joint venture relationship between the parties. Service Provider is responsible for all taxes and insurance obligations related to this engagement.

5. INTELLECTUAL PROPERTY
All work product and deliverables created specifically for Client under this Agreement shall, upon full payment, become the exclusive property of Client. Service Provider retains ownership of pre-existing materials and tools used in performing the Services.

6. CONFIDENTIALITY
Each party agrees to keep confidential the other party's proprietary information disclosed in connection with this Agreement and not to use it for any purpose other than performing obligations hereunder.

7. WARRANTIES
Service Provider represents that the Services will be performed in a professional and workmanlike manner consistent with industry standards. Service Provider warrants that the deliverables will not infringe upon any third-party intellectual property rights.

8. LIMITATION OF LIABILITY
Neither party shall be liable to the other for indirect, incidental, special, or consequential damages. Service Provider's total liability under this Agreement shall not exceed the fees paid by Client in the three (3) months preceding the claim.

9. TERMINATION
Either party may terminate this Agreement upon 30 days written notice. Client may terminate immediately for material breach by Service Provider. Upon termination, Client shall pay for Services rendered and accepted through the termination date.

10. GOVERNING LAW
This Agreement shall be governed by the laws of the State of {{governing_state}}.

CLIENT:

Signature: _______________________________
Name: {{client}}
Date: {{effective_date}}

SERVICE PROVIDER:

Signature: _______________________________
Name: {{provider}}
Date: {{effective_date}}`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'roommate-agreement': {
    title: 'Roommate Agreement',
    fields: [
      { id: 'effective_date', label: 'Agreement Date', type: 'date', required: true, group: 'Details' },
      { id: 'property_address', label: 'Property Address', type: 'text', placeholder: '500 University Ave, Apt 3C, Boston, MA 02115', required: true, group: 'Details' },
      { id: 'roommate_1', label: 'Roommate 1 Full Name', type: 'text', placeholder: 'Alex Johnson', required: true, group: 'Roommates' },
      { id: 'roommate_2', label: 'Roommate 2 Full Name', type: 'text', placeholder: 'Sam Williams', required: true, group: 'Roommates' },
      { id: 'roommate_3', label: 'Roommate 3 Full Name (if applicable)', type: 'text', placeholder: 'Leave blank if only 2 roommates', group: 'Roommates' },
      { id: 'total_rent', label: 'Total Monthly Rent ($)', type: 'number', placeholder: '3000', required: true, group: 'Finances' },
      { id: 'rent_split', label: 'Rent Split Description', type: 'textarea', placeholder: 'Roommate 1 pays $1,000; Roommate 2 pays $1,000; Roommate 3 pays $1,000', required: true, group: 'Finances' },
      { id: 'utilities_split', label: 'Utilities Split', type: 'textarea', placeholder: 'All shared utilities split equally (1/2 or 1/3 each)', required: true, group: 'Finances' },
      { id: 'move_in_date', label: 'Move-In Date', type: 'date', required: true, group: 'Details' },
      { id: 'quiet_hours', label: 'Quiet Hours', type: 'text', placeholder: '10:00 PM to 8:00 AM on weekdays; 12:00 AM to 9:00 AM on weekends', group: 'House Rules' },
      { id: 'guests_policy', label: 'Overnight Guests Policy', type: 'text', placeholder: 'Guests may stay up to 3 consecutive nights without prior consent', group: 'House Rules' },
      { id: 'cleaning_schedule', label: 'Cleaning Responsibilities', type: 'textarea', placeholder: 'Common areas cleaned weekly on a rotating basis. Each roommate cleans their own room and bathroom.', group: 'House Rules' },
      { id: 'governing_state', label: 'State', type: 'select', options: US_STATES, required: true, group: 'Terms' },
    ],
    document: `ROOMMATE AGREEMENT

This Roommate Agreement ("Agreement") is entered into as of {{effective_date}}, by and among the following co-tenants (collectively "Roommates") of the property located at {{property_address}}:

Roommate 1: {{roommate_1}}
Roommate 2: {{roommate_2}}
Roommate 3: {{roommate_3}}

This Agreement sets out the rights and obligations of the Roommates regarding shared living arrangements and does not replace or modify the lease between the Roommates and the landlord.

1. MOVE-IN DATE
All Roommates agree to occupy the Premises beginning {{move_in_date}}.

2. RENT
The total monthly rent for the Premises is \${{total_rent}}, divided as follows: {{rent_split}}. Each Roommate is responsible for paying their portion of rent on time and in the agreed manner.

3. UTILITIES
Utilities (electricity, gas, water, internet, etc.) shall be split as follows: {{utilities_split}}. The Roommate whose name the account is in shall timely pay the bill and collect reimbursement from the other Roommates within 5 days.

4. QUIET HOURS
Quiet hours are: {{quiet_hours}}. During quiet hours, Roommates agree to keep noise to a minimum.

5. OVERNIGHT GUESTS
{{guests_policy}}. No guest may stay longer than 7 consecutive nights without prior written consent of all Roommates.

6. CLEANING AND MAINTENANCE
{{cleaning_schedule}}. No Roommate shall leave dirty dishes in the sink for more than 24 hours. Each Roommate is responsible for keeping their own space tidy.

7. PERSONAL PROPERTY
Roommates shall respect each other's personal property. No Roommate shall borrow or use another's personal property without permission. Each Roommate is responsible for obtaining renter's insurance for their own belongings.

8. SHARED EXPENSES
All shared household supplies (cleaning products, toilet paper, kitchen basics) shall be purchased on a rotating basis or split equally, as agreed by the Roommates.

9. SUBLETTING
No Roommate shall sublet their room or the Premises without the written consent of all other Roommates and the Landlord.

10. DISPUTE RESOLUTION
Roommates agree to resolve disputes through good-faith discussion. If a dispute cannot be resolved informally, the parties may seek mediation before pursuing legal remedies.

11. GOVERNING LAW
This Agreement shall be governed by the laws of the State of {{governing_state}}.

Signatures:

{{roommate_1}}: _________________________ Date: _______
{{roommate_2}}: _________________________ Date: _______
{{roommate_3}}: _________________________ Date: _______`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'non-compete-agreement': {
    title: 'Non-Compete Agreement',
    fields: [
      { id: 'effective_date', label: 'Effective Date', type: 'date', required: true, group: 'Parties' },
      { id: 'employer', label: 'Employer / Company', type: 'text', placeholder: 'Acme Tech Corp', required: true, group: 'Parties' },
      { id: 'employer_address', label: 'Employer Address', type: 'text', placeholder: '100 Innovation Dr, Boston, MA 02101', required: true, group: 'Parties' },
      { id: 'employee', label: 'Employee / Contractor Full Name', type: 'text', placeholder: 'Jane Smith', required: true, group: 'Parties' },
      { id: 'employee_position', label: 'Employee Position / Role', type: 'text', placeholder: 'VP of Sales', required: true, group: 'Parties' },
      { id: 'restricted_period', label: 'Restricted Period (Months After Termination)', type: 'number', placeholder: '12', required: true, group: 'Restrictions' },
      { id: 'geographic_area', label: 'Geographic Area of Restriction', type: 'text', placeholder: 'the United States of America or within 50 miles of Boston, MA', required: true, group: 'Restrictions' },
      { id: 'restricted_activities', label: 'Restricted Activities / Competing Business', type: 'textarea', placeholder: 'engaging in, advising, or investing in any business that provides SaaS project management software in direct competition with Employer', required: true, group: 'Restrictions' },
      { id: 'consideration', label: 'Consideration for Signing', type: 'text', placeholder: 'continued employment, initial employment, $5,000 payment', required: true, group: 'Restrictions' },
      { id: 'governing_state', label: 'Governing State', type: 'select', options: US_STATES, required: true, group: 'Terms' },
    ],
    document: `NON-COMPETE AGREEMENT

This Non-Compete Agreement ("Agreement") is entered into as of {{effective_date}}, between {{employer}}, located at {{employer_address}} ("Employer"), and {{employee}}, in the role of {{employee_position}} ("Employee").

RECITALS
Employer is in the business of providing products and services that are proprietary and competitive in nature. In the course of Employee's employment, Employee will acquire Confidential Information, trade secrets, and valuable knowledge of Employer's business. In consideration of {{consideration}}, the sufficiency of which is acknowledged, the parties agree as follows:

1. NON-COMPETITION
During the term of Employee's employment with Employer, and for a period of {{restricted_period}} months after the termination of employment for any reason ("Restricted Period"), Employee shall not, directly or indirectly, without Employer's prior written consent, engage in the following activities within {{geographic_area}} ("Restricted Area"): {{restricted_activities}}.

2. NON-SOLICITATION OF CUSTOMERS
During the Restricted Period, Employee shall not solicit, divert, or attempt to solicit or divert any customer or prospective customer of Employer with whom Employee had material contact during the last two (2) years of employment, for the purpose of providing services or products competitive with Employer.

3. NON-SOLICITATION OF EMPLOYEES
During the Restricted Period, Employee shall not, directly or indirectly, recruit, hire, solicit, or induce any employee or contractor of Employer to terminate their relationship with Employer.

4. CONFIDENTIAL INFORMATION
Employee acknowledges having had access to trade secrets and Confidential Information of Employer, including customer lists, pricing, technical data, and business strategies. Employee agrees to maintain such information in confidence and not to use or disclose it, consistent with any separate confidentiality agreement in effect.

5. REASONABLENESS
Employee acknowledges that the restrictions in this Agreement are reasonable and necessary to protect Employer's legitimate business interests, given Employee's access to Confidential Information and customer relationships, and the geographic scope and duration are no greater than required.

6. REMEDIES
Employee acknowledges that breach of this Agreement would cause Employer irreparable harm not adequately compensable by monetary damages. Employer shall be entitled to seek injunctive relief and all other available legal and equitable remedies.

7. SEVERABILITY
If any provision of this Agreement is deemed unenforceable, a court may modify it to the minimum extent necessary to make it enforceable, and the remaining provisions shall remain in full force.

8. GOVERNING LAW
This Agreement is governed by the laws of the State of {{governing_state}}. Note: California, North Dakota, and Oklahoma significantly restrict non-compete agreements. Verify applicability in your state.

EMPLOYER:

Signature: _______________________________
Name: {{employer}}
Date: {{effective_date}}

EMPLOYEE:

Signature: _______________________________
Name: {{employee}}
Date: {{effective_date}}`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'demand-letter': {
    title: 'Demand Letter',
    fields: [
      { id: 'letter_date', label: 'Letter Date', type: 'date', required: true, group: 'Details' },
      { id: 'sender', label: 'Sender Full Name / Company', type: 'text', placeholder: 'Jane Smith or Smith Consulting LLC', required: true, group: 'Parties' },
      { id: 'sender_address', label: 'Sender Address', type: 'text', placeholder: '100 Main St, Chicago, IL 60601', required: true, group: 'Parties' },
      { id: 'sender_email', label: 'Sender Email', type: 'text', placeholder: 'jane@example.com', group: 'Parties' },
      { id: 'sender_phone', label: 'Sender Phone', type: 'text', placeholder: '(312) 555-1234', group: 'Parties' },
      { id: 'recipient', label: 'Recipient Full Name / Company', type: 'text', placeholder: 'John Doe or XYZ Corp', required: true, group: 'Parties' },
      { id: 'recipient_address', label: 'Recipient Address', type: 'text', placeholder: '200 Oak Blvd, Chicago, IL 60602', required: true, group: 'Parties' },
      { id: 'claim_description', label: 'Description of Claim', type: 'textarea', placeholder: 'You owe $5,000 for freelance web development services I completed under our contract dated January 15, 2026. Despite repeated requests, payment has not been received.', required: true, group: 'Claim' },
      { id: 'amount_demanded', label: 'Amount Demanded ($)', type: 'number', placeholder: '5000', required: true, group: 'Claim' },
      { id: 'demand_deadline_days', label: 'Days to Respond', type: 'number', placeholder: '14', required: true, group: 'Claim' },
      { id: 'governing_state', label: 'State', type: 'select', options: US_STATES, required: true, group: 'Terms' },
    ],
    document: `[SENDER LETTERHEAD / SENDER NAME AND ADDRESS]
{{sender}}
{{sender_address}}
{{sender_email}} | {{sender_phone}}

{{letter_date}}

VIA CERTIFIED MAIL AND EMAIL

{{recipient}}
{{recipient_address}}

Re: FORMAL DEMAND FOR PAYMENT — \${{amount_demanded}}

Dear {{recipient}}:

I am writing on behalf of {{sender}} to formally demand payment in the amount of \${{amount_demanded}} arising from the following matter:

BACKGROUND AND BASIS FOR CLAIM
{{claim_description}}

AMOUNT OWED
The total amount owed by you to {{sender}} is \${{amount_demanded}}, representing the full unpaid balance as of the date of this letter, together with any applicable interest or fees permitted by law and by the agreement between the parties.

DEMAND
Pursuant to this letter, DEMAND IS HEREBY MADE for payment of \${{amount_demanded}} within {{demand_deadline_days}} days of the date of this letter (by [DATE]).

CONSEQUENCES OF NON-PAYMENT
If payment is not received within {{demand_deadline_days}} days, {{sender}} will pursue all legal remedies available, including filing a lawsuit in {{governing_state}} court for the full amount owed, plus interest, costs of collection, and attorney's fees to the extent permitted by law and contract.

{{sender}} reserves all rights and remedies under applicable law and under any agreement between the parties, and the failure to enumerate any right herein shall not be construed as a waiver of any right or remedy.

This letter is written without prejudice to any rights or remedies and shall not be construed as a full or complete statement of the facts, terms, or claims.

Please respond promptly to avoid further legal action.

Sincerely,

_______________________________
{{sender}}
Date: {{letter_date}}`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'cease-and-desist-letter': {
    title: 'Cease and Desist Letter',
    fields: [
      { id: 'letter_date', label: 'Letter Date', type: 'date', required: true, group: 'Details' },
      { id: 'sender', label: 'Sender Full Name / Company', type: 'text', placeholder: 'Acme Brands LLC', required: true, group: 'Parties' },
      { id: 'sender_address', label: 'Sender Address', type: 'text', placeholder: '500 Brand Ave, Los Angeles, CA 90001', required: true, group: 'Parties' },
      { id: 'recipient', label: 'Recipient Full Name / Company', type: 'text', placeholder: 'John Doe or Copycat Co.', required: true, group: 'Parties' },
      { id: 'recipient_address', label: 'Recipient Address', type: 'text', placeholder: '300 Oak St, Los Angeles, CA 90002', required: true, group: 'Parties' },
      { id: 'violation_type', label: 'Type of Violation', type: 'select', options: ['Trademark infringement','Copyright infringement','Defamation / harassment','Trade secret misappropriation','Patent infringement','Harassment or stalking','Breach of contract','Other'], required: true, group: 'Claim' },
      { id: 'infringing_activity', label: 'Description of Infringing Activity', type: 'textarea', placeholder: 'You have used our registered trademark "ACME" on your website and product packaging without authorization, causing consumer confusion and damage to our brand...', required: true, group: 'Claim' },
      { id: 'actions_demanded', label: 'Actions Demanded', type: 'textarea', placeholder: 'Immediately remove all use of the ACME trademark from your website, products, and marketing materials; confirm in writing that you have complied', required: true, group: 'Claim' },
      { id: 'deadline_days', label: 'Days to Comply', type: 'number', placeholder: '14', required: true, group: 'Claim' },
      { id: 'governing_state', label: 'State', type: 'select', options: US_STATES, required: true, group: 'Terms' },
    ],
    document: `CEASE AND DESIST NOTICE

{{sender}}
{{sender_address}}

{{letter_date}}

VIA CERTIFIED MAIL — RETURN RECEIPT REQUESTED

{{recipient}}
{{recipient_address}}

Re: CEASE AND DESIST — {{violation_type}}

Dear {{recipient}}:

This letter constitutes a formal Cease and Desist notice from {{sender}} ("Sender"). We write to notify you that your activities described below constitute {{violation_type}} and demand that you immediately cease all such activities.

DESCRIPTION OF INFRINGING ACTIVITY
{{infringing_activity}}

LEGAL BASIS
Sender has rights in this matter under applicable federal and state law, including [applicable statutes, registrations, or common law rights]. Your actions as described constitute unlawful {{violation_type}} and have caused, and continue to cause, damages to Sender, including [reputational harm, lost revenue, consumer confusion, etc.].

DEMANDS
Sender demands that you, within {{deadline_days}} days of receipt of this letter:

{{actions_demanded}}

CONSEQUENCES OF NON-COMPLIANCE
Should you fail to comply with the demands in this letter within {{deadline_days}} days, Sender is prepared to take all necessary legal action to protect its rights, including but not limited to: filing a lawsuit in {{governing_state}} or federal court seeking injunctive relief, actual damages, statutory damages where applicable, disgorgement of profits, and attorney's fees and costs.

Please be advised that this letter is not a waiver of any rights or remedies available to Sender, all of which are expressly reserved.

RESPONSE REQUIRED
Please confirm in writing within {{deadline_days}} days that you have complied with the demands in this letter. Direct all correspondence to the sender at the address above.

Sincerely,

_______________________________
{{sender}}
{{sender_address}}
Date: {{letter_date}}`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'partnership-agreement': {
    title: 'General Partnership Agreement',
    fields: [
      { id: 'effective_date', label: 'Effective Date', type: 'date', required: true, group: 'Partnership Details' },
      { id: 'partnership_name', label: 'Partnership Name', type: 'text', placeholder: 'Smith & Jones General Partnership', required: true, group: 'Partnership Details' },
      { id: 'principal_office', label: 'Principal Office Address', type: 'text', placeholder: '100 Commerce Blvd, Atlanta, GA 30301', required: true, group: 'Partnership Details' },
      { id: 'business_purpose', label: 'Purpose / Nature of Business', type: 'textarea', placeholder: 'consulting services in the field of information technology', required: true, group: 'Partnership Details' },
      { id: 'partner_1', label: 'Partner 1 Full Name', type: 'text', placeholder: 'John Smith', required: true, group: 'Partners' },
      { id: 'partner_1_address', label: 'Partner 1 Address', type: 'text', placeholder: '200 Oak Ave, Atlanta, GA 30302', required: true, group: 'Partners' },
      { id: 'partner_1_contribution', label: 'Partner 1 Initial Capital Contribution', type: 'text', placeholder: '$25,000 cash', required: true, group: 'Partners' },
      { id: 'partner_1_share', label: 'Partner 1 Profit/Loss Share (%)', type: 'number', placeholder: '50', required: true, group: 'Partners' },
      { id: 'partner_2', label: 'Partner 2 Full Name', type: 'text', placeholder: 'Jane Jones', required: true, group: 'Partners' },
      { id: 'partner_2_address', label: 'Partner 2 Address', type: 'text', placeholder: '300 Pine St, Atlanta, GA 30303', required: true, group: 'Partners' },
      { id: 'partner_2_contribution', label: 'Partner 2 Initial Capital Contribution', type: 'text', placeholder: '$25,000 cash', required: true, group: 'Partners' },
      { id: 'partner_2_share', label: 'Partner 2 Profit/Loss Share (%)', type: 'number', placeholder: '50', required: true, group: 'Partners' },
      { id: 'management', label: 'Management Structure', type: 'select', options: ['All Partners manage equally','Managing Partner designated','Majority vote for major decisions'], required: true, group: 'Management' },
      { id: 'governing_state', label: 'Governing State', type: 'select', options: US_STATES, required: true, group: 'Terms' },
    ],
    document: `GENERAL PARTNERSHIP AGREEMENT

This General Partnership Agreement ("Agreement") is entered into as of {{effective_date}}, by and between:

{{partner_1}}, residing at {{partner_1_address}} ("Partner 1"); and
{{partner_2}}, residing at {{partner_2_address}} ("Partner 2");

(collectively "Partners")

1. FORMATION
The Partners hereby form a General Partnership ("Partnership") under the laws of the State of {{governing_state}} under the name "{{partnership_name}}."

2. PURPOSE
The purpose of the Partnership is to engage in {{business_purpose}} and any other lawful business activities as the Partners may agree.

3. PRINCIPAL OFFICE
The principal office of the Partnership shall be located at {{principal_office}}.

4. CAPITAL CONTRIBUTIONS
Each Partner shall contribute the following initial capital to the Partnership:
- {{partner_1}}: {{partner_1_contribution}}
- {{partner_2}}: {{partner_2_contribution}}

Additional capital contributions may be required upon unanimous consent of the Partners.

5. PROFIT AND LOSS ALLOCATION
Profits and losses of the Partnership shall be allocated as follows:
- {{partner_1}}: {{partner_1_share}}%
- {{partner_2}}: {{partner_2_share}}%

6. MANAGEMENT
{{management}}. Each Partner has authority to bind the Partnership in ordinary business matters. Major decisions (defined as commitments over $10,000, entering new lines of business, or admitting new Partners) require unanimous consent of all Partners.

7. DISTRIBUTIONS
Distributions of cash or other assets shall be made at such times and in such amounts as the Partners unanimously agree, in proportion to each Partner's profit-sharing percentage.

8. BOOKS AND RECORDS
The Partnership shall maintain complete and accurate books of account. Each Partner shall have full access to all Partnership books and records.

9. WITHDRAWAL AND DISSOLUTION
A Partner may withdraw upon 90 days written notice to the other Partners. Withdrawal does not dissolve the Partnership unless the remaining Partners elect to dissolve. The withdrawing Partner's interest shall be valued and paid out as agreed by the Partners or as determined by a mutually agreed independent appraiser.

10. DISSOLUTION
The Partnership shall be dissolved upon: (a) unanimous written agreement of all Partners; (b) the death, incapacity, or bankruptcy of a Partner if remaining Partners elect not to continue; or (c) as required by law.

11. GOVERNING LAW
This Agreement shall be governed by the laws of the State of {{governing_state}}.

PARTNER 1:

Signature: _______________________________
Name: {{partner_1}}
Date: {{effective_date}}

PARTNER 2:

Signature: _______________________________
Name: {{partner_2}}
Date: {{effective_date}}`,
  },

  /* ─────────────────────────────────────────────────────────────────── */
  'llc-operating-agreement': {
    title: 'LLC Operating Agreement',
    fields: [
      { id: 'effective_date', label: 'Effective Date', type: 'date', required: true, group: 'Company Details' },
      { id: 'company_name', label: 'LLC Full Legal Name', type: 'text', placeholder: 'Sunrise Ventures, LLC', required: true, group: 'Company Details' },
      { id: 'state_of_formation', label: 'State of Formation', type: 'select', options: US_STATES, required: true, group: 'Company Details' },
      { id: 'principal_address', label: 'Principal Office Address', type: 'text', placeholder: '200 Business Park Dr, Suite 100, Dallas, TX 75201', required: true, group: 'Company Details' },
      { id: 'registered_agent', label: 'Registered Agent Name', type: 'text', placeholder: 'John Smith or CT Corporation', required: true, group: 'Company Details' },
      { id: 'business_purpose', label: 'Purpose of Business', type: 'textarea', placeholder: 'real estate investment and property management services', required: true, group: 'Company Details' },
      { id: 'members', label: 'Member Names and Ownership %', type: 'textarea', placeholder: 'John Smith — 60%\nJane Smith — 40%', required: true, group: 'Members' },
      { id: 'management_type', label: 'Management Type', type: 'select', options: ['Member-Managed (all members manage)','Manager-Managed (designated manager(s))'], required: true, group: 'Management' },
      { id: 'manager_name', label: 'Manager Name(s) (if Manager-Managed)', type: 'text', placeholder: 'John Smith', group: 'Management' },
      { id: 'fiscal_year_end', label: 'Fiscal Year End', type: 'select', options: ['December 31','March 31','June 30','September 30'], group: 'Financial' },
      { id: 'tax_treatment', label: 'Tax Treatment', type: 'select', options: ['Disregarded entity (single member)','Partnership taxation (multi-member default)','S-Corporation election','C-Corporation election'], group: 'Financial' },
    ],
    document: `LIMITED LIABILITY COMPANY OPERATING AGREEMENT
OF {{company_name}}

This Operating Agreement ("Agreement") of {{company_name}}, a {{state_of_formation}} limited liability company ("Company"), is entered into as of {{effective_date}}, by and among the Members identified herein.

ARTICLE I — FORMATION AND ORGANIZATION

1.1 Formation. The Company was formed as a limited liability company under the laws of the State of {{state_of_formation}} upon the filing of its Articles of Organization.

1.2 Company Name. The Company shall conduct business under the name "{{company_name}}."

1.3 Principal Office. The Company's principal office shall be located at {{principal_address}}.

1.4 Registered Agent. The Company's registered agent shall be {{registered_agent}}.

1.5 Purpose. The Company is organized for the purpose of {{business_purpose}} and any other lawful activity permitted under {{state_of_formation}} law.

ARTICLE II — MEMBERS AND OWNERSHIP

2.1 Members. The initial members and their ownership percentages are:
{{members}}

2.2 Additional Members. The admission of additional Members requires the unanimous written consent of all existing Members.

ARTICLE III — MANAGEMENT

3.1 Management. The Company shall be {{management_type}}.

3.2 Manager(s). {{manager_name}} is/are hereby designated as Manager(s) and shall have authority to manage the day-to-day affairs of the Company.

3.3 Major Decisions. The following decisions require unanimous consent of all Members: (a) amending this Agreement; (b) admitting new Members; (c) selling substantially all Company assets; (d) dissolution of the Company; (e) any transaction over $50,000 outside the ordinary course of business; and (f) any encumbrance of Company assets.

ARTICLE IV — CAPITAL AND DISTRIBUTIONS

4.1 Capital Contributions. Members shall contribute capital as agreed in a separate Capital Contribution Schedule.

4.2 Allocations. Profits and losses shall be allocated to Members in proportion to their respective ownership percentages.

4.3 Distributions. The Manager(s)/Members may make distributions at any time, subject to the Company maintaining adequate working capital. Distributions shall be made in proportion to ownership percentages.

ARTICLE V — FISCAL MATTERS

5.1 Fiscal Year. The Company's fiscal year ends on {{fiscal_year_end}}.

5.2 Tax Treatment. The Company shall be treated as a {{tax_treatment}} for federal income tax purposes.

5.3 Books and Records. The Company shall maintain complete and accurate financial books and records, available to all Members upon request.

ARTICLE VI — TRANSFERS AND WITHDRAWAL

6.1 Transfer Restrictions. No Member may transfer their membership interest without prior written consent of all other Members, which consent may be withheld in each Member's sole discretion.

6.2 Withdrawal. A Member may withdraw upon 90 days written notice. The Company shall purchase the withdrawing Member's interest at fair market value as determined by a mutually agreed appraiser.

ARTICLE VII — DISSOLUTION

The Company shall be dissolved upon: (a) unanimous written agreement of all Members; (b) the occurrence of an event requiring dissolution under {{state_of_formation}} law; or (c) a judicial determination of dissolution. Upon dissolution, the Company shall wind up affairs, pay creditors, and distribute remaining assets to Members in proportion to ownership percentages.

ARTICLE VIII — MISCELLANEOUS

8.1 Governing Law. This Agreement is governed by the laws of the State of {{state_of_formation}}.

8.2 Amendments. This Agreement may be amended only by unanimous written consent of all Members.

AGREED as of the date first written above:

Member Signatures:

_______________________________          ________________
Signature / Name                          Date

_______________________________          ________________
Signature / Name                          Date`,
  },

}
