import { DocumentTemplate } from "../types";
import { DocumentCategory } from "../types";

export const DOCUMENT_TEMPLATES_NL: DocumentTemplate[] = [
  // --- VASTGOED & WONEN ---
  {
    id: '1',
    title: 'Onderverhuurovereenkomst',
    description: 'Veilige overeenkomst voor de onderverhuur van een woonruimte.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'home',
    popular: true,
    formFields: [
      { id: 'landlordName', label: 'Naam Hoofdhuurder', type: 'text', required: true, placeholder: 'Voornaam Achternaam' },
      { id: 'landlordSSN', label: 'BSN Hoofdhuurder', type: 'text', required: true, placeholder: '123456789' },
      { id: 'tenantName', label: 'Naam Onderhuurder', type: 'text', required: true, placeholder: 'Voornaam Achternaam' },
      { id: 'tenantSSN', label: 'BSN Onderhuurder', type: 'text', required: true, placeholder: '123456789' },
      { id: 'address', label: 'Adres van de woning', type: 'text', required: true, placeholder: 'Straat, Postcode Woonplaats' },
      { id: 'rent', label: 'Huurprijs (per maand)', type: 'number', required: true, placeholder: 'bijv. 800' },
      { id: 'deposit', label: 'Borgsom', type: 'number', required: false, placeholder: 'bijv. 800' },
      { id: 'startDate', label: 'Ingangsdatum', type: 'date', required: true },
      { id: 'endDate', label: 'Einddatum', type: 'date', required: true },
      { id: 'included', label: 'Inbegrepen in de huur', type: 'textarea', required: false, placeholder: 'bijv. Elektriciteit, Internet...' },
    ]
  },
  {
    id: '11',
    title: 'Opzegging Huurovereenkomst',
    description: 'Formele opzegging van een huurcontract.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'file-minus',
    formFields: [
      { id: 'senderName', label: 'Jouw Naam', type: 'text', required: true },
      { id: 'senderID', label: 'Jouw BSN/ID', type: 'text', required: true },
      { id: 'receiverName', label: 'Naam Ontvanger', type: 'text', required: true },
      { id: 'receiverID', label: 'BSN/ID Ontvanger', type: 'text', required: true },
      { id: 'address', label: 'Adres van de woning', type: 'text', required: true },
      { id: 'contractDate', label: 'Datum van oorspronkelijk contract', type: 'date', required: false },
      { id: 'terminationDate', label: 'Datum van vertrek', type: 'date', required: true },
      { id: 'reason', label: 'Reden (optioneel)', type: 'textarea', required: false },
    ]
  },
  {
    id: '14',
    title: 'Bedrijfshuurovereenkomst',
    description: 'Huurcontract voor winkel-, kantoor- of opslagruimte.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'landlord', label: 'Verhuurder (Bedrijf)', type: 'text', required: true },
      { id: 'landlordOrgNum', label: 'KvK-nummer Verhuurder', type: 'text', required: true },
      { id: 'tenant', label: 'Huurder (Bedrijf)', type: 'text', required: true },
      { id: 'tenantOrgNum', label: 'KvK-nummer Huurder', type: 'text', required: true },
      { id: 'premises', label: 'Adres van het pand', type: 'text', required: true },
      { id: 'area', label: 'Totale oppervlakte (m²)', type: 'number', required: true },
      { id: 'usage', label: 'Beoogd gebruik', type: 'text', required: true },
      { id: 'rent', label: 'Jaarlijkse huur (excl. BTW)', type: 'number', required: true },
    ]
  },
  {
    id: '15',
    title: 'Aannemingsovereenkomst (Renovatie)',
    description: 'Veilige overeenkomst tussen een opdrachtgever en een aannemer voor renovatiewerkzaamheden.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'hammer',
    formFields: [
      { id: 'client', label: 'Opdrachtgever', type: 'text', required: true },
      { id: 'clientSSN', label: 'BSN van Opdrachtgever', type: 'text', required: true },
      { id: 'contractor', label: 'Aannemer', type: 'text', required: true },
      { id: 'contractorOrgNum', label: 'KvK-nummer van Aannemer', type: 'text', required: true },
      { id: 'scope', label: 'Omvang van het werk', type: 'textarea', required: true, placeholder: 'Beschrijf wat er gedaan moet worden...' },
      { id: 'priceType', label: 'Prijsmodel', type: 'select', required: true, options: ['Vaste prijs', 'Uurtarief', 'Richtsnoer'] },
      { id: 'price', label: 'Prijs / Uurtarief', type: 'number', required: true },
      { id: 'deadline', label: 'Deadline voor voltooiing', type: 'date', required: true },
    ]
  },

  // --- FAMILIE & RELATIES ---
  {
    id: '3',
    title: 'Samenlevingscontract',
    description: 'Leg afspraken vast over gemeenschappelijk bezit en vermogen.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'heart',
    popular: true,
    formFields: [
      { id: 'partner1Name', label: 'Naam Partner 1', type: 'text', required: true },
      { id: 'partner1SSN', label: 'BSN Partner 1', type: 'text', required: true },
      { id: 'partner2Name', label: 'Naam Partner 2', type: 'text', required: true },
      { id: 'partner2SSN', label: 'BSN Partner 2', type: 'text', required: true },
      { id: 'address', label: 'Gezamenlijk adres', type: 'text', required: true },
      { id: 'agreementType', label: 'Type overeenkomst', type: 'select', required: true, options: ['Algemene regels volledig uitsluiten', 'Specifieke goederen uitsluiten'] },
    ]
  },
  {
    id: '16',
    title: 'Huwelijkse Voorwaarden',
    description: 'Bepaal welk vermogen als privébezit wordt beschouwd binnen een huwelijk.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'heart',
    popular: true,
    formFields: [
      { id: 'spouse1', label: 'Naam Echtgenoot 1', type: 'text', required: true },
      { id: 'spouse1SSN', label: 'BSN Echtgenoot 1', type: 'text', required: true },
      { id: 'spouse2', label: 'Naam Echtgenoot 2', type: 'text', required: true },
      { id: 'spouse2SSN', label: 'BSN Echtgenoot 2', type: 'text', required: true },
      { id: 'scope', label: 'Omvang van de overeenkomst', type: 'select', required: true, options: ['Alle bezittingen blijven gescheiden', 'Bezittingen van vóór huwelijk blijven gescheiden', 'Specifieke bezittingen blijven gescheiden'] },
      { id: 'specifics', label: 'Specificaties (indien van toepassing)', type: 'textarea', required: false, placeholder: 'bijv. Het huis in...' },
    ]
  },
  {
    id: '5',
    title: 'Testament',
    description: 'Zorg ervoor dat je nalatenschap volgens jouw wensen wordt verdeeld.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'scroll',
    popular: true,
    formFields: [
      { id: 'testatorName', label: 'Naam Erflater', type: 'text', required: true },
      { id: 'testatorSSN', label: 'BSN Erflater', type: 'text', required: true },
      { id: 'beneficiaries', label: 'Wie zijn de erfgenamen?', type: 'textarea', required: true, placeholder: 'Namen van personen of organisaties...' },
      { id: 'specificGifts', label: 'Specifieke legaten (optioneel)', type: 'textarea', required: false, placeholder: 'bijv. Mijn horloge aan Jan...' },
      { id: 'privateProperty', label: 'Moeten erfenissen privébezit blijven?', type: 'select', required: true, options: ['Ja', 'Nee'] },
    ]
  },
  {
    id: '6',
    title: 'Schenkingsakte',
    description: 'Een formeel document om eigendom, zoals vastgoed of geld, als geschenk over te dragen.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'gift',
    formFields: [
      { id: 'giverName', label: 'Naam Schenker', type: 'text', required: true },
      { id: 'giverSSN', label: 'BSN Schenker', type: 'text', required: true },
      { id: 'receiverName', label: 'Naam Ontvanger', type: 'text', required: true },
      { id: 'receiverSSN', label: 'BSN Ontvanger', type: 'text', required: true },
      { id: 'description', label: 'Wat wordt er geschonken?', type: 'textarea', required: true, placeholder: 'bijv. 10.000 in contanten of Pand X...' },
      { id: 'conditions', label: 'Voorwaarden', type: 'textarea', required: false, placeholder: 'bijv. Moet als privébezit worden beschouwd' },
    ]
  },
  {
    id: '17',
    title: 'Convenant (Vermogensscheiding)',
    description: 'Overeenkomst voor de verdeling van bezittingen bij scheiding of uit elkaar gaan.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'scale',
    formFields: [
      { id: 'party1', label: 'Naam Partij 1', type: 'text', required: true },
      { id: 'party1SSN', label: 'BSN Partij 1', type: 'text', required: true },
      { id: 'party2', label: 'Naam Partij 2', type: 'text', required: true },
      { id: 'party2SSN', label: 'BSN Partij 2', type: 'text', required: true },
      { id: 'date', label: 'Datum van scheiding', type: 'date', required: true },
      { id: 'property', label: 'Hoe wordt het vermogen verdeeld?', type: 'textarea', required: true, placeholder: 'Partij 1 behoudt het huis en koopt Partij 2 uit voor...' },
    ]
  },

  // --- ZAKELIJK & BEDRIJF ---
  {
    id: '18',
    title: 'Aandeelhoudersovereenkomst',
    description: 'Eenvoudige aandeelhoudersovereenkomst die de regels voor eigendom in een bedrijf vastlegt.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'users',
    popular: true,
    formFields: [
      { id: 'company', label: 'Bedrijfsnaam', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'KvK-nummer Bedrijf', type: 'text', required: true },
      { id: 'owners', label: 'Aandeelhouders (Namen en belangen)', type: 'textarea', required: true, placeholder: 'Alice - 50%, Bob - 50%...' },
      { id: 'roles', label: 'Rollen / Verantwoordelijkheden', type: 'textarea', required: true },
      { id: 'vesting', label: 'Vesting-periode', type: 'select', required: true, options: ['Geen vesting', '3 jaar', '4 jaar'] },
      { id: 'hembud', label: 'Aanbiedingsplicht?', type: 'select', required: true, options: ['Ja, aandelen eerst aanbieden aan zittende eigenaren', 'Nee'] },
    ]
  },
  {
    id: '8',
    title: 'Geheimhoudingsovereenkomst (NDA)',
    description: 'Bescherm je bedrijfsgeheimen en gevoelige informatie.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'lock',
    formFields: [
      { id: 'party1', label: 'Bekendmakende Partij', type: 'text', required: true },
      { id: 'party1ID', label: 'ID van Bekendmakende Partij', type: 'text', required: true },
      { id: 'party2', label: 'Ontvangende Partij', type: 'text', required: true },
      { id: 'party2ID', label: 'ID van Ontvangende Partij', type: 'text', required: true },
      { id: 'purpose', label: 'Doel van bekendmaking', type: 'textarea', required: true },
      { id: 'duration', label: 'Duur (jaren)', type: 'number', required: true, placeholder: '3' },
      { id: 'penalty', label: 'Boeteclausule (Bedrag)', type: 'number', required: false, placeholder: '50000' },
    ]
  },
  {
    id: '9',
    title: 'Consultancyovereenkomst',
    description: 'Overeenkomst tussen een opdrachtgever en een freelance consultant.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'pen-tool',
    formFields: [
      { id: 'clientName', label: 'Opdrachtgever / Bedrijf', type: 'text', required: true },
      { id: 'clientOrgNum', label: 'KvK-nummer Opdrachtgever', type: 'text', required: true },
      { id: 'consultantName', label: 'Consultant / Leverancier', type: 'text', required: true },
      { id: 'consultantOrgNum', label: 'KvK-nummer Consultant', type: 'text', required: true },
      { id: 'assignment', label: 'Opdrachtbeschrijving', type: 'textarea', required: true },
      { id: 'hourlyRate', label: 'Uurtarief (excl. BTW)', type: 'number', required: true },
      { id: 'startDate', label: 'Startdatum', type: 'date', required: true },
    ]
  },
  {
    id: '13',
    title: 'Notulen Bestuursvergadering',
    description: 'Sjabloon voor standaard bestuursvergaderingen.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'companyName', label: 'Bedrijfsnaam', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'KvK-nummer Bedrijf', type: 'text', required: true },
      { id: 'meetingDate', label: 'Vergaderdatum', type: 'date', required: true },
      { id: 'chairperson', label: 'Voorzitter', type: 'text', required: true },
      { id: 'secretary', label: 'Secretaris', type: 'text', required: true },
      { id: 'adjuster', label: 'Notulencontroleur', type: 'text', required: true },
      { id: 'attendees', label: 'Andere aanwezigen', type: 'textarea', required: true, placeholder: 'Lijst van aanwezigen...' },
      { id: 'decisions', label: 'Genomen besluiten', type: 'textarea', required: true, placeholder: 'Punt 1, Punt 2...' },
    ]
  },
  {
    id: '19',
    title: 'Statuten',
    description: 'Basisregels voor een vennootschap.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'company', label: 'Bedrijfsnaam', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Registratienummer', type: 'text', required: false, placeholder: 'Indien bedrijf al bestaat' },
      { id: 'seat', label: 'Statutaire zetel', type: 'text', required: true },
      { id: 'business', label: 'Doel / Activiteiten van het bedrijf', type: 'textarea', required: true },
      { id: 'capital', label: 'Aandelenkapitaal', type: 'text', required: true, placeholder: 'bijv. 100 - 10.000' },
    ]
  },

  // --- WERK & HR ---
  {
    id: '2',
    title: 'Arbeidsovereenkomst',
    description: 'Uitgebreid arbeidscontract voor vaste of tijdelijke functies.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'briefcase',
    popular: true,
    formFields: [
      { id: 'companyName', label: 'Werkgever (Bedrijf)', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'KvK-nummer Werkgever', type: 'text', required: true },
      { id: 'employeeName', label: 'Werknemer', type: 'text', required: true },
      { id: 'employeeSSN', label: 'BSN Werknemer', type: 'text', required: true },
      { id: 'position', label: 'Functietitel', type: 'text', required: true },
      { id: 'salary', label: 'Maandsalaris', type: 'number', required: true },
      { id: 'employmentType', label: 'Dienstverband', type: 'select', required: true, options: ['Vast dienstverband', 'Proeftijd (2 maanden)', 'Bepaalde tijd'] },
      { id: 'startDate', label: 'Ingangsdatum', type: 'date', required: true },
      { id: 'vacationDays', label: 'Vakantiedagen per jaar', type: 'number', required: true, placeholder: '25' },
    ]
  },
  {
    id: '12',
    title: 'Werkgeversverklaring',
    description: 'Een verklaring die de duur van het dienstverband en de verantwoordelijkheden bevestigt.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'scroll',
    formFields: [
      { id: 'companyName', label: 'Werkgever', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'KvK-nummer Werkgever', type: 'text', required: true },
      { id: 'employeeName', label: 'Werknemer', type: 'text', required: true },
      { id: 'employeeSSN', label: 'BSN Werknemer', type: 'text', required: true },
      { id: 'periodStart', label: 'In dienst sinds', type: 'date', required: true },
      { id: 'periodEnd', label: 'In dienst tot', type: 'date', required: true },
      { id: 'duties', label: 'Belangrijkste taken', type: 'textarea', required: true },
      { id: 'reason', label: 'Reden voor uitdiensttreding', type: 'text', required: false },
    ]
  },
  {
    id: '20',
    title: 'Opzegging door Werkgever',
    description: 'Formele beëindiging van het dienstverband door de werkgever.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'shield-alert',
    formFields: [
      { id: 'company', label: 'Werkgever', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'KvK-nummer Werkgever', type: 'text', required: true },
      { id: 'employee', label: 'Werknemer', type: 'text', required: true },
      { id: 'employeeSSN', label: 'BSN Werknemer', type: 'text', required: true },
      { id: 'reason', label: 'Reden', type: 'select', required: true, options: ['Bedrijfseconomische redenen', 'Persoonlijke redenen'] },
      { id: 'lastDay', label: 'Laatste werkdag', type: 'date', required: true },
      { id: 'contact', label: 'Contactpersoon over deze opzegging', type: 'text', required: true },
    ]
  },

  // --- PRIVÉ & OVERIG ---
  {
    id: '4',
    title: 'Schuldbekentenis',
    description: 'Documentatie voor een privélening tussen particulieren.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'file-text',
    formFields: [
      { id: 'lenderName', label: 'Naam Uitlener', type: 'text', required: true },
      { id: 'lenderSSN', label: 'BSN Uitlener', type: 'text', required: true },
      { id: 'borrowerName', label: 'Naam Lener', type: 'text', required: true },
      { id: 'borrowerSSN', label: 'BSN Lener', type: 'text', required: true },
      { id: 'amount', label: 'Leenbedrag', type: 'number', required: true },
      { id: 'interest', label: 'Rentepercentage (%)', type: 'number', required: true },
      { id: 'repaymentDate', label: 'Uiterste terugbetalingsdatum', type: 'date', required: true },
    ]
  },
  {
    id: '10',
    title: 'Volmacht',
    description: 'Geef iemand het recht om jou te vertegenwoordigen in specifieke zaken.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'file-badge',
    formFields: [
      { id: 'giverName', label: 'Volmachtgever', type: 'text', required: true },
      { id: 'giverSSN', label: 'BSN Volmachtgever', type: 'text', required: true },
      { id: 'receiverName', label: 'Gevolmachtigde', type: 'text', required: true },
      { id: 'receiverSSN', label: 'BSN Gevolmachtigde', type: 'text', required: true },
      { id: 'scope', label: 'Reikwijdte van de volmacht', type: 'textarea', required: true, placeholder: 'bijv. pakketten ophalen, auto verkopen, bankzaken...' },
      { id: 'validUntil', label: 'Geldig tot', type: 'date', required: true },
    ]
  },
  {
    id: '21',
    title: 'Levenstestament',
    description: 'Bepaal wie je zaken behartigt als je daartoe zelf niet meer in staat bent.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'shield-check',
    popular: true,
    formFields: [
      { id: 'giver', label: 'Volmachtgever', type: 'text', required: true },
      { id: 'giverSSN', label: 'BSN Volmachtgever', type: 'text', required: true },
      { id: 'agent', label: 'Gevolmachtigde', type: 'text', required: true },
      { id: 'agentSSN', label: 'BSN Gevolmachtigde', type: 'text', required: true },
      { id: 'financial', label: 'Financiële zaken behartigen?', type: 'select', required: true, options: ['Ja', 'Nee'] },
      { id: 'personal', label: 'Persoonlijke zaken behartigen?', type: 'select', required: true, options: ['Ja', 'Nee'] },
      { id: 'conditions', label: 'Aanvullende voorwaarden', type: 'textarea', required: false },
    ]
  },
  {
    id: '22',
    title: 'Koopovereenkomst Voertuig',
    description: 'Overeenkomst voor de koop/verkoop van een gebruikt voertuig tussen particulieren.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'car',
    formFields: [
      { id: 'seller', label: 'Naam Verkoper', type: 'text', required: true },
      { id: 'sellerSSN', label: 'BSN Verkoper', type: 'text', required: true },
      { id: 'buyer', label: 'Naam Koper', type: 'text', required: true },
      { id: 'buyerSSN', label: 'BSN Koper', type: 'text', required: true },
      { id: 'vehicle', label: 'Voertuig (Merk/Model)', type: 'text', required: true },
      { id: 'regNr', label: 'Kenteken / Chassisnummer', type: 'text', required: true },
      { id: 'price', label: 'Prijs', type: 'number', required: true },
      { id: 'condition', label: 'Staat/Gebreken', type: 'textarea', required: false, placeholder: 'Verkocht in huidige staat. Bekende gebreken: ...' },
    ]
  }
];
