import { DocumentTemplate } from "../types";
import { DocumentCategory } from "../types";

export const DOCUMENT_TEMPLATES_EN: DocumentTemplate[] = [
  // --- REAL ESTATE & HOUSING ---
  {
    id: '1',
    title: 'Sublease Agreement',
    description: 'Secure agreement for subletting a residential property.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'home',
    popular: true,
    formFields: [
      { id: 'landlordName', label: 'Landlord Name', type: 'text', required: true, placeholder: 'First Last' },
      { id: 'landlordSSN', label: 'Landlord ID/SSN', type: 'text', required: true, placeholder: 'YYYYMMDD-XXXX' },
      { id: 'tenantName', label: 'Tenant Name', type: 'text', required: true, placeholder: 'First Last' },
      { id: 'tenantSSN', label: 'Tenant ID/SSN', type: 'text', required: true, placeholder: 'YYYYMMDD-XXXX' },
      { id: 'address', label: 'Property Address', type: 'text', required: true, placeholder: 'Street, Zip City' },
      { id: 'rent', label: 'Rent (per month)', type: 'number', required: true, placeholder: 'e.g. 800' },
      { id: 'deposit', label: 'Deposit', type: 'number', required: false, placeholder: 'e.g. 800' },
      { id: 'startDate', label: 'Move-in Date', type: 'date', required: true },
      { id: 'endDate', label: 'Move-out Date', type: 'date', required: true },
      { id: 'included', label: 'Included in Rent', type: 'textarea', required: false, placeholder: 'e.g. Electricity, Internet...' },
    ]
  },
  {
    id: '11',
    title: 'Lease Termination Notice',
    description: 'Formal notice of termination for a lease agreement.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'file-minus',
    formFields: [
      { id: 'senderName', label: 'Your Name', type: 'text', required: true },
      { id: 'senderID', label: 'Your ID', type: 'text', required: true },
      { id: 'receiverName', label: 'Recipient Name', type: 'text', required: true },
      { id: 'receiverID', label: 'Recipient ID', type: 'text', required: true },
      { id: 'address', label: 'Property Address', type: 'text', required: true },
      { id: 'contractDate', label: 'Original Contract Date', type: 'date', required: false },
      { id: 'terminationDate', label: 'Move-out Date', type: 'date', required: true },
      { id: 'reason', label: 'Reason (optional)', type: 'textarea', required: false },
    ]
  },
  {
    id: '14',
    title: 'Commercial Lease Agreement',
    description: 'Lease agreement for retail, office, or warehouse spaces.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'landlord', label: 'Landlord (Company)', type: 'text', required: true },
      { id: 'landlordOrgNum', label: 'Landlord Reg. No', type: 'text', required: true },
      { id: 'tenant', label: 'Tenant (Company)', type: 'text', required: true },
      { id: 'tenantOrgNum', label: 'Tenant Reg. No', type: 'text', required: true },
      { id: 'premises', label: 'Premises Address/Designation', type: 'text', required: true },
      { id: 'area', label: 'Total Area (sqm/sqft)', type: 'number', required: true },
      { id: 'usage', label: 'Intended Usage', type: 'text', required: true },
      { id: 'rent', label: 'Annual Rent (excl. VAT)', type: 'number', required: true },
    ]
  },
  {
    id: '15',
    title: 'Contractor Agreement (Remodeling)',
    description: 'Secure agreement between a client and a contractor for renovation works.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'hammer',
    formFields: [
      { id: 'client', label: 'Client', type: 'text', required: true },
      { id: 'clientSSN', label: 'Client ID', type: 'text', required: true },
      { id: 'contractor', label: 'Contractor', type: 'text', required: true },
      { id: 'contractorOrgNum', label: 'Contractor Reg. No', type: 'text', required: true },
      { id: 'scope', label: 'Scope of Work', type: 'textarea', required: true, placeholder: 'Describe what needs to be done...' },
      { id: 'priceType', label: 'Pricing Model', type: 'select', required: true, options: ['Fixed Price', 'Hourly Rate', 'Estimate'] },
      { id: 'price', label: 'Price/Hourly Rate', type: 'number', required: true },
      { id: 'deadline', label: 'Completion Deadline', type: 'date', required: true },
    ]
  },

  // --- FAMILY & RELATIONSHIPS ---
  {
    id: '3',
    title: 'Cohabitation Agreement',
    description: 'Establish terms regarding shared property and assets.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'heart',
    popular: true,
    formFields: [
      { id: 'partner1Name', label: 'Partner 1 Name', type: 'text', required: true },
      { id: 'partner1SSN', label: 'Partner 1 ID', type: 'text', required: true },
      { id: 'partner2Name', label: 'Partner 2 Name', type: 'text', required: true },
      { id: 'partner2SSN', label: 'Partner 2 ID', type: 'text', required: true },
      { id: 'address', label: 'Shared Address', type: 'text', required: true },
      { id: 'agreementType', label: 'Agreement Type', type: 'select', required: true, options: ['Opt out of general cohabitation laws completely', 'Specific property should be excluded'] },
    ]
  },
  {
    id: '16',
    title: 'Prenuptial Agreement',
    description: 'Decide what property should be considered separate property in a marriage.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'heart',
    popular: true,
    formFields: [
      { id: 'spouse1', label: 'Spouse 1 Name', type: 'text', required: true },
      { id: 'spouse1SSN', label: 'Spouse 1 ID', type: 'text', required: true },
      { id: 'spouse2', label: 'Spouse 2 Name', type: 'text', required: true },
      { id: 'spouse2SSN', label: 'Spouse 2 ID', type: 'text', required: true },
      { id: 'scope', label: 'Scope of Agreement', type: 'select', required: true, options: ['All property should be separate', 'Pre-marital property should be separate', 'Specific property should be separate'] },
      { id: 'specifics', label: 'Specification (if applicable)', type: 'textarea', required: false, placeholder: 'e.g., The cabin located at...' },
    ]
  },
  {
    id: '5',
    title: 'Last Will and Testament',
    description: 'Ensure your estate is distributed according to your wishes.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'scroll',
    popular: true,
    formFields: [
      { id: 'testatorName', label: 'Testator Name', type: 'text', required: true },
      { id: 'testatorSSN', label: 'Testator ID', type: 'text', required: true },
      { id: 'beneficiaries', label: 'Who will inherit?', type: 'textarea', required: true, placeholder: 'Names of people or organizations...' },
      { id: 'specificGifts', label: 'Specific Gifts (optional)', type: 'textarea', required: false, placeholder: 'e.g. My watch to John...' },
      { id: 'privateProperty', label: 'Inheritances shall be separate property?', type: 'select', required: true, options: ['Yes', 'No'] },
    ]
  },
  {
    id: '6',
    title: 'Deed of Gift',
    description: 'A formal document to transfer property, such as real estate or money, as a gift.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'gift',
    formFields: [
      { id: 'giverName', label: 'Donor Name', type: 'text', required: true },
      { id: 'giverSSN', label: 'Donor ID', type: 'text', required: true },
      { id: 'receiverName', label: 'Donee Name', type: 'text', required: true },
      { id: 'receiverSSN', label: 'Donee ID', type: 'text', required: true },
      { id: 'description', label: 'What is being gifted?', type: 'textarea', required: true, placeholder: 'e.g. 10,000 in cash or Real Estate Property X...' },
      { id: 'conditions', label: 'Conditions', type: 'textarea', required: false, placeholder: 'e.g. Must be considered separate property' },
    ]
  },
  {
    id: '17',
    title: 'Property Division Agreement',
    description: 'Agreement to divide property during separation or divorce.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'scale',
    formFields: [
      { id: 'party1', label: 'Party 1 Name', type: 'text', required: true },
      { id: 'party1SSN', label: 'Party 1 ID', type: 'text', required: true },
      { id: 'party2', label: 'Party 2 Name', type: 'text', required: true },
      { id: 'party2SSN', label: 'Party 2 ID', type: 'text', required: true },
      { id: 'date', label: 'Effective Date of Separation', type: 'date', required: true },
      { id: 'property', label: 'How is the property divided?', type: 'textarea', required: true, placeholder: 'Party 1 keeps the house and pays Party 2...' },
    ]
  },

  // --- BUSINESS & CORPORATE ---
  {
    id: '18',
    title: 'Shareholder Agreement',
    description: 'Simple shareholder agreement setting the rules for ownership in a company.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'users',
    popular: true,
    formFields: [
      { id: 'company', label: 'Company Name', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Company Reg. No', type: 'text', required: true },
      { id: 'owners', label: 'Shareholders (Names and stakes)', type: 'textarea', required: true, placeholder: 'Alice - 50%, Bob - 50%...' },
      { id: 'roles', label: 'Roles / Responsibilities', type: 'textarea', required: true },
      { id: 'vesting', label: 'Vesting Period', type: 'select', required: true, options: ['No Vesting', '3 years', '4 years'] },
      { id: 'hembud', label: 'Right of First Refusal?', type: 'select', required: true, options: ['Yes, shares must first be offered to existing owners', 'No'] },
    ]
  },
  {
    id: '8',
    title: 'Non-Disclosure Agreement (NDA)',
    description: 'Protect your trade secrets and sensitive information.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'lock',
    formFields: [
      { id: 'party1', label: 'Disclosing Party', type: 'text', required: true },
      { id: 'party1ID', label: 'Disclosing Party ID', type: 'text', required: true },
      { id: 'party2', label: 'Receiving Party', type: 'text', required: true },
      { id: 'party2ID', label: 'Receiving Party ID', type: 'text', required: true },
      { id: 'purpose', label: 'Purpose of Disclosure', type: 'textarea', required: true },
      { id: 'duration', label: 'Duration (years)', type: 'number', required: true, placeholder: '3' },
      { id: 'penalty', label: 'Penalty clause (Amount)', type: 'number', required: false, placeholder: '50000' },
    ]
  },
  {
    id: '9',
    title: 'Consulting Agreement',
    description: 'Agreement between a client and a freelance consultant.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'pen-tool',
    formFields: [
      { id: 'clientName', label: 'Client / Company', type: 'text', required: true },
      { id: 'clientOrgNum', label: 'Client Reg. No', type: 'text', required: true },
      { id: 'consultantName', label: 'Consultant / Vendor', type: 'text', required: true },
      { id: 'consultantOrgNum', label: 'Consultant Reg. No', type: 'text', required: true },
      { id: 'assignment', label: 'Assignment Outline', type: 'textarea', required: true },
      { id: 'hourlyRate', label: 'Hourly Rate (excl. VAT)', type: 'number', required: true },
      { id: 'startDate', label: 'Start Date', type: 'date', required: true },
    ]
  },
  {
    id: '13',
    title: 'Board Meeting Minutes',
    description: 'Template for standard board meetings.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'companyName', label: 'Company Name', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Company Reg. No', type: 'text', required: true },
      { id: 'meetingDate', label: 'Meeting Date', type: 'date', required: true },
      { id: 'chairperson', label: 'Chairperson Name', type: 'text', required: true },
      { id: 'secretary', label: 'Secretary Name', type: 'text', required: true },
      { id: 'adjuster', label: 'Minutes Approver Name', type: 'text', required: true },
      { id: 'attendees', label: 'Other attendees', type: 'textarea', required: true, placeholder: 'List attendees...' },
      { id: 'decisions', label: 'Decisions made', type: 'textarea', required: true, placeholder: 'Point 1, Point 2...' },
    ]
  },
  {
    id: '19',
    title: 'Articles of Association',
    description: 'Basic rulebook for a corporation.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'company', label: 'Company Name', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Registration Number', type: 'text', required: false, placeholder: 'If company is already established' },
      { id: 'seat', label: 'Registered Office', type: 'text', required: true },
      { id: 'business', label: 'Purpose / Object of the Company', type: 'textarea', required: true },
      { id: 'capital', label: 'Share Capital', type: 'text', required: true, placeholder: '25,000 - 100,000' },
    ]
  },

  // --- WORK & HR ---
  {
    id: '2',
    title: 'Employment Contract',
    description: 'Comprehensive employment agreement for permanent or fixed-term positions.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'briefcase',
    popular: true,
    formFields: [
      { id: 'companyName', label: 'Employer (Company)', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Employer Reg. No', type: 'text', required: true },
      { id: 'employeeName', label: 'Employee Name', type: 'text', required: true },
      { id: 'employeeSSN', label: 'Employee ID', type: 'text', required: true },
      { id: 'position', label: 'Job Title', type: 'text', required: true },
      { id: 'salary', label: 'Monthly Salary', type: 'number', required: true },
      { id: 'employmentType', label: 'Employment Type', type: 'select', required: true, options: ['Permanent', 'Probationary (6 months)', 'Fixed-term'] },
      { id: 'startDate', label: 'Start Date', type: 'date', required: true },
      { id: 'vacationDays', label: 'Vacation Days per year', type: 'number', required: true, placeholder: '25' },
    ]
  },
  {
    id: '12',
    title: 'Certificate of Employment',
    description: 'A certificate confirming employment duration and responsibilities.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'scroll',
    formFields: [
      { id: 'companyName', label: 'Employer', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Employer Reg. No', type: 'text', required: true },
      { id: 'employeeName', label: 'Employee', type: 'text', required: true },
      { id: 'employeeSSN', label: 'Employee ID', type: 'text', required: true },
      { id: 'periodStart', label: 'Employed From', type: 'date', required: true },
      { id: 'periodEnd', label: 'Employed To', type: 'date', required: true },
      { id: 'duties', label: 'Main Responsibilities', type: 'textarea', required: true },
      { id: 'reason', label: 'Reason for Discontinuation', type: 'text', required: false },
    ]
  },
  {
    id: '20',
    title: 'Notice of Dismissal',
    description: 'Formal notice of termination by the employer.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'shield-alert',
    formFields: [
      { id: 'company', label: 'Employer', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Employer Reg. No', type: 'text', required: true },
      { id: 'employee', label: 'Employee', type: 'text', required: true },
      { id: 'employeeSSN', label: 'Employee ID', type: 'text', required: true },
      { id: 'reason', label: 'Reason', type: 'select', required: true, options: ['Redundancy / Shortage of work', 'Personal reasons'] },
      { id: 'lastDay', label: 'Last Day of Employment', type: 'date', required: true },
      { id: 'contact', label: 'Contact Person regarding this Notice', type: 'text', required: true },
    ]
  },

  // --- PRIVATE & OTHER ---
  {
    id: '4',
    title: 'Promissory Note',
    description: 'Documentation for a private loan between individuals.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'file-text',
    formFields: [
      { id: 'lenderName', label: 'Lender Name', type: 'text', required: true },
      { id: 'lenderSSN', label: 'Lender ID', type: 'text', required: true },
      { id: 'borrowerName', label: 'Borrower Name', type: 'text', required: true },
      { id: 'borrowerSSN', label: 'Borrower ID', type: 'text', required: true },
      { id: 'amount', label: 'Loan Amount', type: 'number', required: true },
      { id: 'interest', label: 'Interest Rate (%)', type: 'number', required: true },
      { id: 'repaymentDate', label: 'Final Repayment Date', type: 'date', required: true },
    ]
  },
  {
    id: '10',
    title: 'Power of Attorney',
    description: 'Grant someone the right to represent you in specific matters.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'file-badge',
    formFields: [
      { id: 'giverName', label: 'Principal (Grantor)', type: 'text', required: true },
      { id: 'giverSSN', label: 'Principal ID', type: 'text', required: true },
      { id: 'receiverName', label: 'Agent / Attorney-in-fact', type: 'text', required: true },
      { id: 'receiverSSN', label: 'Agent ID', type: 'text', required: true },
      { id: 'scope', label: 'Scope of Power', type: 'textarea', required: true, placeholder: 'e.g. pick up packages, sell car, bank tasks...' },
      { id: 'validUntil', label: 'Valid Until', type: 'date', required: true },
    ]
  },
  {
    id: '21',
    title: 'Enduring Power of Attorney',
    description: 'Decide who takes care of your affairs if you become incapacitated.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'shield-check',
    popular: true,
    formFields: [
      { id: 'giver', label: 'Principal', type: 'text', required: true },
      { id: 'giverSSN', label: 'Principal ID', type: 'text', required: true },
      { id: 'agent', label: 'Agent', type: 'text', required: true },
      { id: 'agentSSN', label: 'Agent ID', type: 'text', required: true },
      { id: 'financial', label: 'Handle Financial Affairs?', type: 'select', required: true, options: ['Yes', 'No'] },
      { id: 'personal', label: 'Handle Personal Affairs?', type: 'select', required: true, options: ['Yes', 'No'] },
      { id: 'conditions', label: 'Additional Conditions', type: 'textarea', required: false },
    ]
  },
  {
    id: '22',
    title: 'Vehicle Bill of Sale',
    description: 'Agreement for the sale/purchase of a used vehicle between private individuals.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'car',
    formFields: [
      { id: 'seller', label: 'Seller Name', type: 'text', required: true },
      { id: 'sellerSSN', label: 'Seller ID', type: 'text', required: true },
      { id: 'buyer', label: 'Buyer Name', type: 'text', required: true },
      { id: 'buyerSSN', label: 'Buyer ID', type: 'text', required: true },
      { id: 'vehicle', label: 'Vehicle (Make/Model)', type: 'text', required: true },
      { id: 'regNr', label: 'Registration Number / VIN', type: 'text', required: true },
      { id: 'price', label: 'Price', type: 'number', required: true },
      { id: 'condition', label: 'Condition/Defects', type: 'textarea', required: false, placeholder: 'Sold as is. Known defects: ...' },
    ]
  }
];
