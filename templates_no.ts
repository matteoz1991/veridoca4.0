import { DocumentTemplate } from "../types";
import { DocumentCategory } from "../types";

export const DOCUMENT_TEMPLATES_NO: DocumentTemplate[] = [
  // --- EIENDOM & BOLIG ---
  {
    id: '1',
    title: 'Fremleiekontrakt',
    description: 'Sikker avtale for fremleie av boligeiendom.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'home',
    popular: true,
    formFields: [
      { id: 'landlordName', label: 'Hovedleietakers navn', type: 'text', required: true, placeholder: 'Fornavn Etternavn' },
      { id: 'landlordSSN', label: 'Hovedleietakers fødselsnummer', type: 'text', required: true, placeholder: 'DDMMÅÅ-XXXXX' },
      { id: 'tenantName', label: 'Fremleietakers navn', type: 'text', required: true, placeholder: 'Fornavn Etternavn' },
      { id: 'tenantSSN', label: 'Fremleietakers fødselsnummer', type: 'text', required: true, placeholder: 'DDMMÅÅ-XXXXX' },
      { id: 'address', label: 'Eiendommens adresse', type: 'text', required: true, placeholder: 'Gate, Postnummer Sted' },
      { id: 'rent', label: 'Husleie (per måned)', type: 'number', required: true, placeholder: 'f.eks. 8000' },
      { id: 'deposit', label: 'Depositum', type: 'number', required: false, placeholder: 'f.eks. 8000' },
      { id: 'startDate', label: 'Innflyttingsdato', type: 'date', required: true },
      { id: 'endDate', label: 'Utflyttingsdato', type: 'date', required: true },
      { id: 'included', label: 'Inkludert i husleien', type: 'textarea', required: false, placeholder: 'f.eks. Strøm, Internett...' },
    ]
  },
  {
    id: '11',
    title: 'Oppsigelse av Leiekontrakt',
    description: 'Formell oppsigelse av en leiekontrakt.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'file-minus',
    formFields: [
      { id: 'senderName', label: 'Ditt navn', type: 'text', required: true },
      { id: 'senderID', label: 'Ditt fødselsnummer', type: 'text', required: true },
      { id: 'receiverName', label: 'Mottakers navn', type: 'text', required: true },
      { id: 'receiverID', label: 'Mottakers fødselsnummer', type: 'text', required: true },
      { id: 'address', label: 'Eiendommens adresse', type: 'text', required: true },
      { id: 'contractDate', label: 'Dato for opprinnelig kontrakt', type: 'date', required: false },
      { id: 'terminationDate', label: 'Utflyttingsdato', type: 'date', required: true },
      { id: 'reason', label: 'Årsak (valgfritt)', type: 'textarea', required: false },
    ]
  },
  {
    id: '14',
    title: 'Næringsleiekontrakt',
    description: 'Leiekontrakt for butikk, kontor eller lager.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'landlord', label: 'Utleier (Selskap)', type: 'text', required: true },
      { id: 'landlordOrgNum', label: 'Utleiers org.nr', type: 'text', required: true },
      { id: 'tenant', label: 'Leietaker (Selskap)', type: 'text', required: true },
      { id: 'tenantOrgNum', label: 'Leietakers org.nr', type: 'text', required: true },
      { id: 'premises', label: 'Lokalets adresse/betegnelse', type: 'text', required: true },
      { id: 'area', label: 'Totalt areal (kvm)', type: 'number', required: true },
      { id: 'usage', label: 'Tiltenkt bruk', type: 'text', required: true },
      { id: 'rent', label: 'Årlig leie (eks. mva)', type: 'number', required: true },
    ]
  },
  {
    id: '15',
    title: 'Håndverkerkontrakt',
    description: 'Sikker avtale mellom en oppdragsgiver og en entreprenør for renoveringsarbeid.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'hammer',
    formFields: [
      { id: 'client', label: 'Oppdragsgiver', type: 'text', required: true },
      { id: 'clientSSN', label: 'Oppdragsgivers fødselsnummer', type: 'text', required: true },
      { id: 'contractor', label: 'Entreprenør/Håndverker', type: 'text', required: true },
      { id: 'contractorOrgNum', label: 'Entreprenørens org.nr', type: 'text', required: true },
      { id: 'scope', label: 'Arbeidets omfang', type: 'textarea', required: true, placeholder: 'Beskriv hva som skal gjøres...' },
      { id: 'priceType', label: 'Prismodell', type: 'select', required: true, options: ['Fastpris', 'Timepris', 'Pristilbud'] },
      { id: 'price', label: 'Pris / Timepris', type: 'number', required: true },
      { id: 'deadline', label: 'Frist for ferdigstillelse', type: 'date', required: true },
    ]
  },

  // --- FAMILIE & RELASJONER ---
  {
    id: '3',
    title: 'Samboerkontrakt',
    description: 'Etabler vilkår angående delt eiendom og formue.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'heart',
    popular: true,
    formFields: [
      { id: 'partner1Name', label: 'Partner 1 Navn', type: 'text', required: true },
      { id: 'partner1SSN', label: 'Partner 1 Fødselsnummer', type: 'text', required: true },
      { id: 'partner2Name', label: 'Partner 2 Navn', type: 'text', required: true },
      { id: 'partner2SSN', label: 'Partner 2 Fødselsnummer', type: 'text', required: true },
      { id: 'address', label: 'Felles adresse', type: 'text', required: true },
      { id: 'agreementType', label: 'Type avtale', type: 'select', required: true, options: ['Velg bort generelle samboerlover helt', 'Spesifikk eiendom skal utelukkes'] },
    ]
  },
  {
    id: '16',
    title: 'Ektepakt',
    description: 'Bestem hva som skal anses som særeie i et ekteskap.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'heart',
    popular: true,
    formFields: [
      { id: 'spouse1', label: 'Ektefelle 1 Navn', type: 'text', required: true },
      { id: 'spouse1SSN', label: 'Ektefelle 1 Fødselsnummer', type: 'text', required: true },
      { id: 'spouse2', label: 'Ektefelle 2 Navn', type: 'text', required: true },
      { id: 'spouse2SSN', label: 'Ektefelle 2 Fødselsnummer', type: 'text', required: true },
      { id: 'scope', label: 'Avtalens omfang', type: 'select', required: true, options: ['All eiendom skal være særeie', 'Formue fra før ekteskapet skal være særeie', 'Spesifikk eiendom skal være særeie'] },
      { id: 'specifics', label: 'Spesifikasjoner (hvis aktuelt)', type: 'textarea', required: false, placeholder: 'f.eks. Hytta i...' },
    ]
  },
  {
    id: '5',
    title: 'Testament',
    description: 'Sørg for at boet ditt fordeles i henhold til dine ønsker.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'scroll',
    popular: true,
    formFields: [
      { id: 'testatorName', label: 'Testators navn', type: 'text', required: true },
      { id: 'testatorSSN', label: 'Testators fødselsnummer', type: 'text', required: true },
      { id: 'beneficiaries', label: 'Hvem skal arve?', type: 'textarea', required: true, placeholder: 'Navn på personer eller organisasjoner...' },
      { id: 'specificGifts', label: 'Spesifikke gaver (valgfritt)', type: 'textarea', required: false, placeholder: 'f.eks. Klokken min til Johan...' },
      { id: 'privateProperty', label: 'Skal arv være særeie?', type: 'select', required: true, options: ['Ja', 'Nei'] },
    ]
  },
  {
    id: '6',
    title: 'Gavebrev',
    description: 'Et formelt dokument for å overføre eiendom, for eksempel fast eiendom eller penger, som en gave.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'gift',
    formFields: [
      { id: 'giverName', label: 'Givers navn', type: 'text', required: true },
      { id: 'giverSSN', label: 'Givers fødselsnummer', type: 'text', required: true },
      { id: 'receiverName', label: 'Mottakers navn', type: 'text', required: true },
      { id: 'receiverSSN', label: 'Mottakers fødselsnummer', type: 'text', required: true },
      { id: 'description', label: 'Hva gis bort?', type: 'textarea', required: true, placeholder: 'f.eks. 10 000 i kontanter eller Eiendom X...' },
      { id: 'conditions', label: 'Vilkår', type: 'textarea', required: false, placeholder: 'f.eks. Må anses som særeie' },
    ]
  },
  {
    id: '17',
    title: 'Skifteavtale',
    description: 'Avtale om fordeling av formue ved separasjon eller skilsmisse.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'scale',
    formFields: [
      { id: 'party1', label: 'Part 1 Navn', type: 'text', required: true },
      { id: 'party1SSN', label: 'Part 1 Fødselsnummer', type: 'text', required: true },
      { id: 'party2', label: 'Part 2 Navn', type: 'text', required: true },
      { id: 'party2SSN', label: 'Part 2 Fødselsnummer', type: 'text', required: true },
      { id: 'date', label: 'Skjæringstidspunkt', type: 'date', required: true },
      { id: 'property', label: 'Hvordan fordeles formuen?', type: 'textarea', required: true, placeholder: 'Part 1 beholder huset og kjøper ut Part 2 for...' },
    ]
  },

  // --- NÆRINGSLIV & SELSKAP ---
  {
    id: '18',
    title: 'Aksjonæravtale',
    description: 'Enkel aksjonæravtale som fastsetter reglene for eierskap i et selskap.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'users',
    popular: true,
    formFields: [
      { id: 'company', label: 'Selskapsnavn', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Selskapets org.nr', type: 'text', required: true },
      { id: 'owners', label: 'Aksjonærer (Navn og andeler)', type: 'textarea', required: true, placeholder: 'Alice - 50%, Bob - 50%...' },
      { id: 'roles', label: 'Roller / Ansvarsområder', type: 'textarea', required: true },
      { id: 'vesting', label: 'Opptjeningsperiode (Vesting)', type: 'select', required: true, options: ['Ingen opptjening', '3 år', '4 år'] },
      { id: 'hembud', label: 'Forkjøpsrett?', type: 'select', required: true, options: ['Ja, aksjer må først tilbys eksisterende eiere', 'Nei'] },
    ]
  },
  {
    id: '8',
    title: 'Taushetserklæring (NDA)',
    description: 'Beskytt dine forretningshemmeligheter og sensitiv informasjon.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'lock',
    formFields: [
      { id: 'party1', label: 'Utleverende part', type: 'text', required: true },
      { id: 'party1ID', label: 'Utleverende parts ID', type: 'text', required: true },
      { id: 'party2', label: 'Mottakende part', type: 'text', required: true },
      { id: 'party2ID', label: 'Mottakende parts ID', type: 'text', required: true },
      { id: 'purpose', label: 'Formål med utlevering', type: 'textarea', required: true },
      { id: 'duration', label: 'Varighet (år)', type: 'number', required: true, placeholder: '3' },
      { id: 'penalty', label: 'Konvensjonalbot (Beløp)', type: 'number', required: false, placeholder: '50000' },
    ]
  },
  {
    id: '9',
    title: 'Konsulentavtale',
    description: 'Avtale mellom en oppdragsgiver og en frilanskonsulent.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'pen-tool',
    formFields: [
      { id: 'clientName', label: 'Oppdragsgiver / Selskap', type: 'text', required: true },
      { id: 'clientOrgNum', label: 'Oppdragsgivers org.nr', type: 'text', required: true },
      { id: 'consultantName', label: 'Konsulent / Leverandør', type: 'text', required: true },
      { id: 'consultantOrgNum', label: 'Konsulentens org.nr', type: 'text', required: true },
      { id: 'assignment', label: 'Oppdragsbeskrivelse', type: 'textarea', required: true },
      { id: 'hourlyRate', label: 'Timepris (eks. mva)', type: 'number', required: true },
      { id: 'startDate', label: 'Startdato', type: 'date', required: true },
    ]
  },
  {
    id: '13',
    title: 'Styreprotokoll',
    description: 'Mal for standard styremøter.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'companyName', label: 'Selskapsnavn', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Selskapets org.nr', type: 'text', required: true },
      { id: 'meetingDate', label: 'Møtedato', type: 'date', required: true },
      { id: 'chairperson', label: 'Møteleder', type: 'text', required: true },
      { id: 'secretary', label: 'Referent', type: 'text', required: true },
      { id: 'adjuster', label: 'Protokolltilfører / Justerer', type: 'text', required: true },
      { id: 'attendees', label: 'Andre deltakere', type: 'textarea', required: true, placeholder: 'List opp deltakere...' },
      { id: 'decisions', label: 'Beslutninger tatt', type: 'textarea', required: true, placeholder: 'Punkt 1, Punkt 2...' },
    ]
  },
  {
    id: '19',
    title: 'Vedtekter',
    description: 'Grunnleggende regelverk for et selskap.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'company', label: 'Selskapsnavn', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Organisasjonsnummer', type: 'text', required: false, placeholder: 'Hvis selskapet allerede er etablert' },
      { id: 'seat', label: 'Forretningskontor (Kommune)', type: 'text', required: true },
      { id: 'business', label: 'Selskapets formål / Virksomhet', type: 'textarea', required: true },
      { id: 'capital', label: 'Aksjekapital', type: 'text', required: true, placeholder: '30 000 - 100 000' },
    ]
  },

  // --- ARBEID & HR ---
  {
    id: '2',
    title: 'Arbeidsavtale',
    description: 'Omfattende ansettelsesavtale for faste eller midlertidige stillinger.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'briefcase',
    popular: true,
    formFields: [
      { id: 'companyName', label: 'Arbeidsgiver (Selskap)', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Arbeidsgivers org.nr', type: 'text', required: true },
      { id: 'employeeName', label: 'Arbeidstaker', type: 'text', required: true },
      { id: 'employeeSSN', label: 'Arbeidstakers fødselsnummer', type: 'text', required: true },
      { id: 'position', label: 'Stillingstittel', type: 'text', required: true },
      { id: 'salary', label: 'Månedslønn', type: 'number', required: true },
      { id: 'employmentType', label: 'Ansettelsesform', type: 'select', required: true, options: ['Fast ansettelse', 'Prøvetid (6 måneder)', 'Midlertidig'] },
      { id: 'startDate', label: 'Startdato', type: 'date', required: true },
      { id: 'vacationDays', label: 'Feriedager per år', type: 'number', required: true, placeholder: '25' },
    ]
  },
  {
    id: '12',
    title: 'Arbeidsattest',
    description: 'En attest som bekrefter ansettelsens varighet og ansvarsområder.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'scroll',
    formFields: [
      { id: 'companyName', label: 'Arbeidsgiver', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Arbeidsgivers org.nr', type: 'text', required: true },
      { id: 'employeeName', label: 'Arbeidstaker', type: 'text', required: true },
      { id: 'employeeSSN', label: 'Arbeidstakers fødselsnummer', type: 'text', required: true },
      { id: 'periodStart', label: 'Ansatt fra', type: 'date', required: true },
      { id: 'periodEnd', label: 'Ansatt til', type: 'date', required: true },
      { id: 'duties', label: 'Hovedarbeidsoppgaver', type: 'textarea', required: true },
      { id: 'reason', label: 'Årsak til fratreden', type: 'text', required: false },
    ]
  },
  {
    id: '20',
    title: 'Oppsigelse av Ansatt',
    description: 'Formell oppsigelse fra arbeidsgiver.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'shield-alert',
    formFields: [
      { id: 'company', label: 'Arbeidsgiver', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Arbeidsgivers org.nr', type: 'text', required: true },
      { id: 'employee', label: 'Arbeidstaker', type: 'text', required: true },
      { id: 'employeeSSN', label: 'Arbeidstakers fødselsnummer', type: 'text', required: true },
      { id: 'reason', label: 'Årsak', type: 'select', required: true, options: ['Nedbemanning / Arbeidsmangel', 'Personlige årsaker'] },
      { id: 'lastDay', label: 'Siste arbeidsdag', type: 'date', required: true },
      { id: 'contact', label: 'Kontaktperson angående denne oppsigelsen', type: 'text', required: true },
    ]
  },

  // --- PRIVAT & ANNET ---
  {
    id: '4',
    title: 'Gjeldsbrev',
    description: 'Dokumentasjon for et privat lån mellom privatpersoner.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'file-text',
    formFields: [
      { id: 'lenderName', label: 'Långivers navn', type: 'text', required: true },
      { id: 'lenderSSN', label: 'Långivers fødselsnummer', type: 'text', required: true },
      { id: 'borrowerName', label: 'Låntakers navn', type: 'text', required: true },
      { id: 'borrowerSSN', label: 'Låntakers fødselsnummer', type: 'text', required: true },
      { id: 'amount', label: 'Lånebeløp', type: 'number', required: true },
      { id: 'interest', label: 'Rentesats (%)', type: 'number', required: true },
      { id: 'repaymentDate', label: 'Siste forfallsdato', type: 'date', required: true },
    ]
  },
  {
    id: '10',
    title: 'Fullmakt',
    description: 'Gi noen rett til å representere deg i spesifikke saker.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'file-badge',
    formFields: [
      { id: 'giverName', label: 'Fullmaktsgiver', type: 'text', required: true },
      { id: 'giverSSN', label: 'Fullmaktsgivers fødselsnummer', type: 'text', required: true },
      { id: 'receiverName', label: 'Fullmektig', type: 'text', required: true },
      { id: 'receiverSSN', label: 'Fullmektigs fødselsnummer', type: 'text', required: true },
      { id: 'scope', label: 'Fullmaktens omfang', type: 'textarea', required: true, placeholder: 'f.eks. hente pakker, selge bil, bankærend...' },
      { id: 'validUntil', label: 'Gyldig til', type: 'date', required: true },
    ]
  },
  {
    id: '21',
    title: 'Fremtidsfullmakt',
    description: 'Bestem hvem som skal ta seg av dine anliggender hvis du blir ufør.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'shield-check',
    popular: true,
    formFields: [
      { id: 'giver', label: 'Fullmaktsgiver', type: 'text', required: true },
      { id: 'giverSSN', label: 'Fullmaktsgivers fødselsnummer', type: 'text', required: true },
      { id: 'agent', label: 'Fullmektig', type: 'text', required: true },
      { id: 'agentSSN', label: 'Fullmektigs fødselsnummer', type: 'text', required: true },
      { id: 'financial', label: 'Håndtere økonomiske anliggender?', type: 'select', required: true, options: ['Ja', 'Nei'] },
      { id: 'personal', label: 'Håndtere personlige anliggender?', type: 'select', required: true, options: ['Ja', 'Nei'] },
      { id: 'conditions', label: 'Ytterligere vilkår', type: 'textarea', required: false },
    ]
  },
  {
    id: '22',
    title: 'Kjøpekontrakt for Kjøretøy',
    description: 'Avtale for kjøp/salg av brukt kjøretøy mellom privatpersoner.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'car',
    formFields: [
      { id: 'seller', label: 'Selgers navn', type: 'text', required: true },
      { id: 'sellerSSN', label: 'Selgers fødselsnummer', type: 'text', required: true },
      { id: 'buyer', label: 'Kjøpers navn', type: 'text', required: true },
      { id: 'buyerSSN', label: 'Kjøpers fødselsnummer', type: 'text', required: true },
      { id: 'vehicle', label: 'Kjøretøy (Merke/Modell)', type: 'text', required: true },
      { id: 'regNr', label: 'Registreringsnummer / Understellsnummer', type: 'text', required: true },
      { id: 'price', label: 'Pris', type: 'number', required: true },
      { id: 'condition', label: 'Tilstand/Feil', type: 'textarea', required: false, placeholder: 'Selges som den er. Kjente feil: ...' },
    ]
  }
];
