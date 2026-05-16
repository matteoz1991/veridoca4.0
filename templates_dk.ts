import { DocumentTemplate } from "../types";
import { DocumentCategory } from "../types";

export const DOCUMENT_TEMPLATES_DK: DocumentTemplate[] = [
  // --- EJENDOM & BOLIG ---
  {
    id: '1',
    title: 'Fremlejekontrakt',
    description: 'Sikker aftale for fremleje af boligejendom.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'home',
    popular: true,
    formFields: [
      { id: 'landlordName', label: 'Hovedlejerens navn', type: 'text', required: true, placeholder: 'Fornavn Efternavn' },
      { id: 'landlordSSN', label: 'Hovedlejerens CPR-nummer', type: 'text', required: true, placeholder: 'DDMMÅÅ-XXXX' },
      { id: 'tenantName', label: 'Fremlejetagers navn', type: 'text', required: true, placeholder: 'Fornavn Efternavn' },
      { id: 'tenantSSN', label: 'Fremlejetagers CPR-nummer', type: 'text', required: true, placeholder: 'DDMMÅÅ-XXXX' },
      { id: 'address', label: 'Ejendommens adresse', type: 'text', required: true, placeholder: 'Gade, Postnummer By' },
      { id: 'rent', label: 'Husleje (pr. måned)', type: 'number', required: true, placeholder: 'f.eks. 8000' },
      { id: 'deposit', label: 'Depositum', type: 'number', required: false, placeholder: 'f.eks. 8000' },
      { id: 'startDate', label: 'Indflytningsdato', type: 'date', required: true },
      { id: 'endDate', label: 'Udflytningsdato', type: 'date', required: true },
      { id: 'included', label: 'Inkluderet i huslejen', type: 'textarea', required: false, placeholder: 'f.eks. Strøm, Internet...' },
    ]
  },
  {
    id: '11',
    title: 'Opsigelse af Lejekontrakt',
    description: 'Formel opsigelse af en lejekontrakt.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'file-minus',
    formFields: [
      { id: 'senderName', label: 'Dit navn', type: 'text', required: true },
      { id: 'senderID', label: 'Dit CPR-nummer', type: 'text', required: true },
      { id: 'receiverName', label: 'Modtagerens navn', type: 'text', required: true },
      { id: 'receiverID', label: 'Modtagerens CPR-nummer', type: 'text', required: true },
      { id: 'address', label: 'Ejendommens adresse', type: 'text', required: true },
      { id: 'contractDate', label: 'Dato for oprindelig kontrakt', type: 'date', required: false },
      { id: 'terminationDate', label: 'Udflytningsdato', type: 'date', required: true },
      { id: 'reason', label: 'Årsag (valgfrit)', type: 'textarea', required: false },
    ]
  },
  {
    id: '14',
    title: 'Erhvervslejekontrakt',
    description: 'Lejekontrakt for butik, kontor eller lager.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'landlord', label: 'Udlejer (Selskab)', type: 'text', required: true },
      { id: 'landlordOrgNum', label: 'Udlejers CVR-nr', type: 'text', required: true },
      { id: 'tenant', label: 'Lejer (Selskab)', type: 'text', required: true },
      { id: 'tenantOrgNum', label: 'Lejers CVR-nr', type: 'text', required: true },
      { id: 'premises', label: 'Lokalets adresse/betegnelse', type: 'text', required: true },
      { id: 'area', label: 'Samlet areal (kvm)', type: 'number', required: true },
      { id: 'usage', label: 'Påtænkt anvendelse', type: 'text', required: true },
      { id: 'rent', label: 'Årlig leje (ekskl. moms)', type: 'number', required: true },
    ]
  },
  {
    id: '15',
    title: 'Håndværkerkontrakt',
    description: 'Sikker aftale mellem en bygherre og en entreprenør for renoveringsarbejde.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'hammer',
    formFields: [
      { id: 'client', label: 'Bygherre', type: 'text', required: true },
      { id: 'clientSSN', label: 'Bygherres CPR-nummer', type: 'text', required: true },
      { id: 'contractor', label: 'Entreprenør/Håndværker', type: 'text', required: true },
      { id: 'contractorOrgNum', label: 'Entreprenørens CVR-nr', type: 'text', required: true },
      { id: 'scope', label: 'Arbejdets omfang', type: 'textarea', required: true, placeholder: 'Beskriv hvad der skal gøres...' },
      { id: 'priceType', label: 'Prismodel', type: 'select', required: true, options: ['Fastpris', 'Timepris', 'Overslag'] },
      { id: 'price', label: 'Pris / Timepris', type: 'number', required: true },
      { id: 'deadline', label: 'Frist for færdiggørelse', type: 'date', required: true },
    ]
  },

  // --- FAMILIE & RELATIONER ---
  {
    id: '3',
    title: 'Samlivskontrakt',
    description: 'Etabler vilkår vedrørende delt ejendom og formue.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'heart',
    popular: true,
    formFields: [
      { id: 'partner1Name', label: 'Partner 1 Navn', type: 'text', required: true },
      { id: 'partner1SSN', label: 'Partner 1 CPR-nummer', type: 'text', required: true },
      { id: 'partner2Name', label: 'Partner 2 Navn', type: 'text', required: true },
      { id: 'partner2SSN', label: 'Partner 2 CPR-nummer', type: 'text', required: true },
      { id: 'address', label: 'Fælles adresse', type: 'text', required: true },
      { id: 'agreementType', label: 'Type af aftale', type: 'select', required: true, options: ['Fravælg generelle samlivslove fuldstændigt', 'Specifik ejendom skal udelukkes'] },
    ]
  },
  {
    id: '16',
    title: 'Ægtepagt',
    description: 'Bestem hvad der skal betragtes som særeje i et ægteskab.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'heart',
    popular: true,
    formFields: [
      { id: 'spouse1', label: 'Ægtefælle 1 Navn', type: 'text', required: true },
      { id: 'spouse1SSN', label: 'Ægtefælle 1 CPR-nummer', type: 'text', required: true },
      { id: 'spouse2', label: 'Ægtefælle 2 Navn', type: 'text', required: true },
      { id: 'spouse2SSN', label: 'Ægtefælle 2 CPR-nummer', type: 'text', required: true },
      { id: 'scope', label: 'Aftalens omfang', type: 'select', required: true, options: ['Al ejendom skal være særeje', 'Formue fra før ægteskabet skal være særeje', 'Specifik ejendom skal være særeje'] },
      { id: 'specifics', label: 'Specifikationer (hvis relevant)', type: 'textarea', required: false, placeholder: 'f.eks. Sommerhuset i...' },
    ]
  },
  {
    id: '5',
    title: 'Testamente',
    description: 'Sørg for, at dit bo fordeles i overensstemmelse med dine ønsker.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'scroll',
    popular: true,
    formFields: [
      { id: 'testatorName', label: 'Testators navn', type: 'text', required: true },
      { id: 'testatorSSN', label: 'Testators CPR-nummer', type: 'text', required: true },
      { id: 'beneficiaries', label: 'Hvem skal arve?', type: 'textarea', required: true, placeholder: 'Navne på personer eller organisationer...' },
      { id: 'specificGifts', label: 'Specifikke gaver (valgfrit)', type: 'textarea', required: false, placeholder: 'f.eks. Mit ur til Jens...' },
      { id: 'privateProperty', label: 'Skal arv være særeje?', type: 'select', required: true, options: ['Ja', 'Nej'] },
    ]
  },
  {
    id: '6',
    title: 'Gavebrev',
    description: 'Et formelt dokument til at overføre ejendom, f.eks. fast ejendom eller penge, som en gave.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'gift',
    formFields: [
      { id: 'giverName', label: 'Givers navn', type: 'text', required: true },
      { id: 'giverSSN', label: 'Givers CPR-nummer', type: 'text', required: true },
      { id: 'receiverName', label: 'Modtagers navn', type: 'text', required: true },
      { id: 'receiverSSN', label: 'Modtagers CPR-nummer', type: 'text', required: true },
      { id: 'description', label: 'Hvad gives væk?', type: 'textarea', required: true, placeholder: 'f.eks. 10.000 i kontanter eller Ejendom X...' },
      { id: 'conditions', label: 'Betingelser', type: 'textarea', required: false, placeholder: 'f.eks. Skal betragtes som særeje' },
    ]
  },
  {
    id: '17',
    title: 'Bodelingsoverenskomst',
    description: 'Aftale om fordeling af formue ved separation eller skilsmisse.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'scale',
    formFields: [
      { id: 'party1', label: 'Part 1 Navn', type: 'text', required: true },
      { id: 'party1SSN', label: 'Part 1 CPR-nummer', type: 'text', required: true },
      { id: 'party2', label: 'Part 2 Navn', type: 'text', required: true },
      { id: 'party2SSN', label: 'Part 2 CPR-nummer', type: 'text', required: true },
      { id: 'date', label: 'Skæringsdato', type: 'date', required: true },
      { id: 'property', label: 'Hvordan fordeles formuen?', type: 'textarea', required: true, placeholder: 'Part 1 beholder huset og køber Part 2 ud for...' },
    ]
  },

  // --- ERHVERV & SELSKAB ---
  {
    id: '18',
    title: 'Ejeraftale',
    description: 'Enkel ejeraftale, der fastsætter reglerne for ejerskab i et selskab.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'users',
    popular: true,
    formFields: [
      { id: 'company', label: 'Selskabsnavn', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Selskabets CVR-nr', type: 'text', required: true },
      { id: 'owners', label: 'Ejere (Navne og andele)', type: 'textarea', required: true, placeholder: 'Alice - 50%, Bob - 50%...' },
      { id: 'roles', label: 'Roller / Ansvarsområder', type: 'textarea', required: true },
      { id: 'vesting', label: 'Optjeningsperiode (Vesting)', type: 'select', required: true, options: ['Ingen optjening', '3 år', '4 år'] },
      { id: 'hembud', label: 'Forkøbsret?', type: 'select', required: true, options: ['Ja, aktier skal først tilbydes eksisterende ejere', 'Nej'] },
    ]
  },
  {
    id: '8',
    title: 'Hemmeligholdelsesaftale (NDA)',
    description: 'Beskyt dine forretningshemmeligheder og fortrolige oplysninger.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'lock',
    formFields: [
      { id: 'party1', label: 'Udleverende part', type: 'text', required: true },
      { id: 'party1ID', label: 'Udleverende parts CPR/CVR', type: 'text', required: true },
      { id: 'party2', label: 'Modtagende part', type: 'text', required: true },
      { id: 'party2ID', label: 'Modtagende parts CPR/CVR', type: 'text', required: true },
      { id: 'purpose', label: 'Formål med udlevering', type: 'textarea', required: true },
      { id: 'duration', label: 'Varighed (år)', type: 'number', required: true, placeholder: '3' },
      { id: 'penalty', label: 'Konventionalbod (Beløb)', type: 'number', required: false, placeholder: '50000' },
    ]
  },
  {
    id: '9',
    title: 'Konsulentaftale',
    description: 'Aftale mellem en bygherre og en freelance konsulent.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'pen-tool',
    formFields: [
      { id: 'clientName', label: 'Kunde / Selskab', type: 'text', required: true },
      { id: 'clientOrgNum', label: 'Kundens CVR-nr', type: 'text', required: true },
      { id: 'consultantName', label: 'Konsulent / Leverandør', type: 'text', required: true },
      { id: 'consultantOrgNum', label: 'Konsulentens CVR-nr', type: 'text', required: true },
      { id: 'assignment', label: 'Opgavebeskrivelse', type: 'textarea', required: true },
      { id: 'hourlyRate', label: 'Timepris (ekskl. moms)', type: 'number', required: true },
      { id: 'startDate', label: 'Startdato', type: 'date', required: true },
    ]
  },
  {
    id: '13',
    title: 'Bestyrelsesreferat',
    description: 'Skabelon for standard bestyrelsesmøder.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'companyName', label: 'Selskabsnavn', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Selskabets CVR-nr', type: 'text', required: true },
      { id: 'meetingDate', label: 'Mødedato', type: 'date', required: true },
      { id: 'chairperson', label: 'Mødeleder', type: 'text', required: true },
      { id: 'secretary', label: 'Referent', type: 'text', required: true },
      { id: 'adjuster', label: 'Referatgodkender', type: 'text', required: true },
      { id: 'attendees', label: 'Andre deltagere', type: 'textarea', required: true, placeholder: 'Liste over deltagere...' },
      { id: 'decisions', label: 'Trufne beslutninger', type: 'textarea', required: true, placeholder: 'Punkt 1, Punkt 2...' },
    ]
  },
  {
    id: '19',
    title: 'Vedtægter',
    description: 'Grundlæggende regelsæt for et selskab.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'company', label: 'Selskabsnavn', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'CVR-nummer', type: 'text', required: false, placeholder: 'Hvis selskabet allerede er oprettet' },
      { id: 'seat', label: 'Hjemsted (Kommune)', type: 'text', required: true },
      { id: 'business', label: 'Selskabets formål', type: 'textarea', required: true },
      { id: 'capital', label: 'Selskabskapital', type: 'text', required: true, placeholder: '40.000 - 400.000' },
    ]
  },

  // --- ARBEJDE & HR ---
  {
    id: '2',
    title: 'Ansættelseskontrakt',
    description: 'Omfattende ansættelsesaftale for faste eller midlertidige stillinger.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'briefcase',
    popular: true,
    formFields: [
      { id: 'companyName', label: 'Arbejdsgiver (Selskab)', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Arbejdsgivers CVR-nr', type: 'text', required: true },
      { id: 'employeeName', label: 'Medarbejder', type: 'text', required: true },
      { id: 'employeeSSN', label: 'Medarbejders CPR-nummer', type: 'text', required: true },
      { id: 'position', label: 'Stilling', type: 'text', required: true },
      { id: 'salary', label: 'Månedsløn', type: 'number', required: true },
      { id: 'employmentType', label: 'Ansættelsesform', type: 'select', required: true, options: ['Fastansættelse', 'Prøvetid (3-6 måneder)', 'Tidsbegrænset'] },
      { id: 'startDate', label: 'Startdato', type: 'date', required: true },
      { id: 'vacationDays', label: 'Feriedage pr. år', type: 'number', required: true, placeholder: '25' },
    ]
  },
  {
    id: '12',
    title: 'Arbejdsgivererklæring / Anbefaling',
    description: 'Et certifikat, der bekræfter ansættelsens varighed og ansvarsområder.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'scroll',
    formFields: [
      { id: 'companyName', label: 'Arbejdsgiver', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Arbejdsgivers CVR-nr', type: 'text', required: true },
      { id: 'employeeName', label: 'Medarbejder', type: 'text', required: true },
      { id: 'employeeSSN', label: 'Medarbejders CPR-nummer', type: 'text', required: true },
      { id: 'periodStart', label: 'Ansæt fra', type: 'date', required: true },
      { id: 'periodEnd', label: 'Ansæt til', type: 'date', required: true },
      { id: 'duties', label: 'Hovedansvarsområder', type: 'textarea', required: true },
      { id: 'reason', label: 'Årsag til fratrædelse', type: 'text', required: false },
    ]
  },
  {
    id: '20',
    title: 'Opsigelse af Medarbejder',
    description: 'Formel opsigelse fra arbejdsgiver.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'shield-alert',
    formFields: [
      { id: 'company', label: 'Arbejdsgiver', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Arbejdsgivers CVR-nr', type: 'text', required: true },
      { id: 'employee', label: 'Medarbejder', type: 'text', required: true },
      { id: 'employeeSSN', label: 'Medarbejders CPR-nummer', type: 'text', required: true },
      { id: 'reason', label: 'Årsag', type: 'select', required: true, options: ['Arbejdsmangel / Omstrukturering', 'Personlige årsager'] },
      { id: 'lastDay', label: 'Sidste arbejdsdag', type: 'date', required: true },
      { id: 'contact', label: 'Kontaktperson vedrørende denne opsigelse', type: 'text', required: true },
    ]
  },

  // --- PRIVAT & ANDET ---
  {
    id: '4',
    title: 'Gældsbrev',
    description: 'Dokumentation for et privat lån mellem privatpersoner.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'file-text',
    formFields: [
      { id: 'lenderName', label: 'Långivers navn', type: 'text', required: true },
      { id: 'lenderSSN', label: 'Långivers CPR-nummer', type: 'text', required: true },
      { id: 'borrowerName', label: 'Låntagers navn', type: 'text', required: true },
      { id: 'borrowerSSN', label: 'Låntagers CPR-nummer', type: 'text', required: true },
      { id: 'amount', label: 'Lånebeløb', type: 'number', required: true },
      { id: 'interest', label: 'Rentesats (%)', type: 'number', required: true },
      { id: 'repaymentDate', label: 'Seneste betalingsdato', type: 'date', required: true },
    ]
  },
  {
    id: '10',
    title: 'Fuldmagt',
    description: 'Giv nogen ret til at repræsentere dig i specifikke sager.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'file-badge',
    formFields: [
      { id: 'giverName', label: 'Fuldmagtsgiver', type: 'text', required: true },
      { id: 'giverSSN', label: 'Fuldmagtsgivers CPR-nummer', type: 'text', required: true },
      { id: 'receiverName', label: 'Fuldmægtig', type: 'text', required: true },
      { id: 'receiverSSN', label: 'Fuldmægtigs CPR-nummer', type: 'text', required: true },
      { id: 'scope', label: 'Fuldmagtens omfang', type: 'textarea', required: true, placeholder: 'f.eks. hente pakker, sælge bil, bankforretninger...' },
      { id: 'validUntil', label: 'Gyldig indtil', type: 'date', required: true },
    ]
  },
  {
    id: '21',
    title: 'Fremtidsfuldmagt',
    description: 'Beslut, hvem der skal tage sig af dine anliggender, hvis du bliver inhabil.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'shield-check',
    popular: true,
    formFields: [
      { id: 'giver', label: 'Fuldmagtsgiver', type: 'text', required: true },
      { id: 'giverSSN', label: 'Fuldmagtsgivers CPR-nummer', type: 'text', required: true },
      { id: 'agent', label: 'Fuldmægtig', type: 'text', required: true },
      { id: 'agentSSN', label: 'Fuldmægtigs CPR-nummer', type: 'text', required: true },
      { id: 'financial', label: 'Håndtere økonomiske anliggender?', type: 'select', required: true, options: ['Ja', 'Nej'] },
      { id: 'personal', label: 'Håndtere personlige anliggender?', type: 'select', required: true, options: ['Ja', 'Nej'] },
      { id: 'conditions', label: 'Yderligere betingelser', type: 'textarea', required: false },
    ]
  },
  {
    id: '22',
    title: 'Slutseddel (Køretøj)',
    description: 'Aftale om køb/salg af brugt køretøj mellem privatpersoner.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'car',
    formFields: [
      { id: 'seller', label: 'Sælgers navn', type: 'text', required: true },
      { id: 'sellerSSN', label: 'Sælgers CPR-nummer', type: 'text', required: true },
      { id: 'buyer', label: 'Købers navn', type: 'text', required: true },
      { id: 'buyerSSN', label: 'Købers CPR-nummer', type: 'text', required: true },
      { id: 'vehicle', label: 'Køretøj (Mærke/Model)', type: 'text', required: true },
      { id: 'regNr', label: 'Registreringsnummer / Stelnummer', type: 'text', required: true },
      { id: 'price', label: 'Pris', type: 'number', required: true },
      { id: 'condition', label: 'Stand/Fejl', type: 'textarea', required: false, placeholder: 'Købt som beset. Kendte fejl: ...' },
    ]
  }
];
