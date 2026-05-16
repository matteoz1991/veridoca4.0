import { DocumentTemplate } from "../types";
import { DocumentCategory } from "../types";

export const DOCUMENT_TEMPLATES_DE: DocumentTemplate[] = [
  // --- IMMOBILIEN & WOHNEN ---
  {
    id: '1',
    title: 'Untermietvertrag',
    description: 'Sicherer Vertrag für die Untervermietung einer Wohnimmobilie.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'home',
    popular: true,
    formFields: [
      { id: 'landlordName', label: 'Name des Hauptmieters', type: 'text', required: true, placeholder: 'Vorname Nachname' },
      { id: 'landlordSSN', label: 'ID/Personalausweis-Nr. des Hauptmieters', type: 'text', required: true, placeholder: 'YYYYMMDD-XXXX' },
      { id: 'tenantName', label: 'Name des Untermieters', type: 'text', required: true, placeholder: 'Vorname Nachname' },
      { id: 'tenantSSN', label: 'ID/Personalausweis-Nr. des Untermieters', type: 'text', required: true, placeholder: 'YYYYMMDD-XXXX' },
      { id: 'address', label: 'Adresse der Immobilie', type: 'text', required: true, placeholder: 'Straße, PLZ Ort' },
      { id: 'rent', label: 'Miete (pro Monat)', type: 'number', required: true, placeholder: 'z.B. 800' },
      { id: 'deposit', label: 'Kaution', type: 'number', required: false, placeholder: 'z.B. 800' },
      { id: 'startDate', label: 'Einzugsdatum', type: 'date', required: true },
      { id: 'endDate', label: 'Auszugsdatum', type: 'date', required: true },
      { id: 'included', label: 'In der Miete enthalten', type: 'textarea', required: false, placeholder: 'z.B. Strom, Internet...' },
    ]
  },
  {
    id: '11',
    title: 'Kündigungsschreiben Mietvertrag',
    description: 'Formelles Kündigungsschreiben für einen Mietvertrag.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'file-minus',
    formFields: [
      { id: 'senderName', label: 'Ihr Name', type: 'text', required: true },
      { id: 'senderID', label: 'Ihre ID', type: 'text', required: true },
      { id: 'receiverName', label: 'Name des Empfängers', type: 'text', required: true },
      { id: 'receiverID', label: 'ID des Empfängers', type: 'text', required: true },
      { id: 'address', label: 'Adresse der Immobilie', type: 'text', required: true },
      { id: 'contractDate', label: 'Ursprüngliches Vertragsdatum', type: 'date', required: false },
      { id: 'terminationDate', label: 'Auszugsdatum', type: 'date', required: true },
      { id: 'reason', label: 'Grund (optional)', type: 'textarea', required: false },
    ]
  },
  {
    id: '14',
    title: 'Gewerbemietvertrag',
    description: 'Mietvertrag für Einzelhandels-, Büro- oder Lagerräume.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'landlord', label: 'Vermieter (Unternehmen)', type: 'text', required: true },
      { id: 'landlordOrgNum', label: 'Reg.-Nr. des Vermieters', type: 'text', required: true },
      { id: 'tenant', label: 'Mieter (Unternehmen)', type: 'text', required: true },
      { id: 'tenantOrgNum', label: 'Reg.-Nr. des Mieters', type: 'text', required: true },
      { id: 'premises', label: 'Adresse der Räumlichkeiten', type: 'text', required: true },
      { id: 'area', label: 'Gesamtfläche (m²)', type: 'number', required: true },
      { id: 'usage', label: 'Vorgesehene Nutzung', type: 'text', required: true },
      { id: 'rent', label: 'Jahresmiete (exkl. MwSt.)', type: 'number', required: true },
    ]
  },
  {
    id: '15',
    title: 'Werkvertrag (Umbau/Renovierung)',
    description: 'Sicherer Vertrag zwischen einem Kunden und einem Bauunternehmer für Renovierungsarbeiten.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'hammer',
    formFields: [
      { id: 'client', label: 'Kunde', type: 'text', required: true },
      { id: 'clientSSN', label: 'ID des Kunden', type: 'text', required: true },
      { id: 'contractor', label: 'Bauunternehmer', type: 'text', required: true },
      { id: 'contractorOrgNum', label: 'Reg.-Nr. des Bauunternehmers', type: 'text', required: true },
      { id: 'scope', label: 'Umfang der Arbeiten', type: 'textarea', required: true, placeholder: 'Beschreiben Sie, was getan werden muss...' },
      { id: 'priceType', label: 'Preismodell', type: 'select', required: true, options: ['Festpreis', 'Stundensatz', 'Kostenvoranschlag'] },
      { id: 'price', label: 'Preis / Stundensatz', type: 'number', required: true },
      { id: 'deadline', label: 'Frist für die Fertigstellung', type: 'date', required: true },
    ]
  },

  // --- FAMILIE & BEZIEHUNGEN ---
  {
    id: '3',
    title: 'Partnerschaftsvertrag',
    description: 'Vereinbaren Sie Bedingungen bezüglich gemeinsamem Eigentum und Vermögen.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'heart',
    popular: true,
    formFields: [
      { id: 'partner1Name', label: 'Name von Partner 1', type: 'text', required: true },
      { id: 'partner1SSN', label: 'ID von Partner 1', type: 'text', required: true },
      { id: 'partner2Name', label: 'Name von Partner 2', type: 'text', required: true },
      { id: 'partner2SSN', label: 'ID von Partner 2', type: 'text', required: true },
      { id: 'address', label: 'Gemeinsame Adresse', type: 'text', required: true },
      { id: 'agreementType', label: 'Art der Vereinbarung', type: 'select', required: true, options: ['Allgemeines Kohabitationsrecht vollständig ausschließen', 'Spezifisches Eigentum soll ausgeschlossen werden'] },
    ]
  },
  {
    id: '16',
    title: 'Ehevertrag',
    description: 'Legen Sie fest, welches Eigentum in einer Ehe als getrenntes Eigentum betrachtet werden soll.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'heart',
    popular: true,
    formFields: [
      { id: 'spouse1', label: 'Name von Ehepartner 1', type: 'text', required: true },
      { id: 'spouse1SSN', label: 'ID von Ehepartner 1', type: 'text', required: true },
      { id: 'spouse2', label: 'Name von Ehepartner 2', type: 'text', required: true },
      { id: 'spouse2SSN', label: 'ID von Ehepartner 2', type: 'text', required: true },
      { id: 'scope', label: 'Umfang der Vereinbarung', type: 'select', required: true, options: ['Das gesamte Eigentum soll getrennt sein', 'Voreheliches Eigentum soll getrennt sein', 'Spezifisches Eigentum soll getrennt sein'] },
      { id: 'specifics', label: 'Spezifikationen (falls zutreffend)', type: 'textarea', required: false, placeholder: 'z.B. Die Hütte in...' },
    ]
  },
  {
    id: '5',
    title: 'Testament',
    description: 'Stellen Sie sicher, dass Ihr Nachlass nach Ihren Wünschen verteilt wird.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'scroll',
    popular: true,
    formFields: [
      { id: 'testatorName', label: 'Name des Erblassers', type: 'text', required: true },
      { id: 'testatorSSN', label: 'ID des Erblassers', type: 'text', required: true },
      { id: 'beneficiaries', label: 'Wer wird erben?', type: 'textarea', required: true, placeholder: 'Namen von Personen oder Organisationen...' },
      { id: 'specificGifts', label: 'Spezifische Geschenke (optional)', type: 'textarea', required: false, placeholder: 'z.B. Meine Uhr an John...' },
      { id: 'privateProperty', label: 'Sollen Erbschaften getrenntes Eigentum sein?', type: 'select', required: true, options: ['Ja', 'Nein'] },
    ]
  },
  {
    id: '6',
    title: 'Schenkungsvertrag',
    description: 'Ein formelles Dokument zur Übertragung von Eigentum, wie Immobilien oder Geld, als Geschenk.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'gift',
    formFields: [
      { id: 'giverName', label: 'Name des Schenkers', type: 'text', required: true },
      { id: 'giverSSN', label: 'ID des Schenkers', type: 'text', required: true },
      { id: 'receiverName', label: 'Name des Beschenkten', type: 'text', required: true },
      { id: 'receiverSSN', label: 'ID des Beschenkten', type: 'text', required: true },
      { id: 'description', label: 'Was wird verschenkt?', type: 'textarea', required: true, placeholder: 'z.B. 10.000 in bar oder Immobilie X...' },
      { id: 'conditions', label: 'Bedingungen', type: 'textarea', required: false, placeholder: 'z.B. Muss als getrenntes Eigentum betrachtet werden' },
    ]
  },
  {
    id: '17',
    title: 'Vermögensauseinandersetzung',
    description: 'Vereinbarung zur Aufteilung von Eigentum bei Trennung oder Scheidung.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'scale',
    formFields: [
      { id: 'party1', label: 'Name von Partei 1', type: 'text', required: true },
      { id: 'party1SSN', label: 'ID von Partei 1', type: 'text', required: true },
      { id: 'party2', label: 'Name von Partei 2', type: 'text', required: true },
      { id: 'party2SSN', label: 'ID von Partei 2', type: 'text', required: true },
      { id: 'date', label: 'Datum des Wirksamwerdens der Trennung', type: 'date', required: true },
      { id: 'property', label: 'Wie wird das Eigentum aufgeteilt?', type: 'textarea', required: true, placeholder: 'Partei 1 behält das Haus und zahlt Partei 2 aus...' },
    ]
  },

  // --- WIRTSCHAFT & UNTERNEHMEN ---
  {
    id: '18',
    title: 'Gesellschaftervereinbarung',
    description: 'Einfacher Gesellschaftervertrag, der die Eigentumsregeln in einem Unternehmen festlegt.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'users',
    popular: true,
    formFields: [
      { id: 'company', label: 'Name des Unternehmens', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Reg.-Nr. des Unternehmens', type: 'text', required: true },
      { id: 'owners', label: 'Gesellschafter (Namen und Anteile)', type: 'textarea', required: true, placeholder: 'Alice - 50%, Bob - 50%...' },
      { id: 'roles', label: 'Rollen / Verantwortlichkeiten', type: 'textarea', required: true },
      { id: 'vesting', label: 'Vesting-Periode', type: 'select', required: true, options: ['Kein Vesting', '3 Jahre', '4 Jahre'] },
      { id: 'hembud', label: 'Vorkaufsrecht?', type: 'select', required: true, options: ['Ja, Aktien müssen zuerst den bestehenden Eigentümern angeboten werden', 'Nein'] },
    ]
  },
  {
    id: '8',
    title: 'Geheimhaltungsvereinbarung (NDA)',
    description: 'Schützen Sie Ihre Geschäftsgeheimnisse und sensiblen Informationen.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'lock',
    formFields: [
      { id: 'party1', label: 'Offenlegende Partei', type: 'text', required: true },
      { id: 'party1ID', label: 'ID der offenlegenden Partei', type: 'text', required: true },
      { id: 'party2', label: 'Empfangende Partei', type: 'text', required: true },
      { id: 'party2ID', label: 'ID der empfangenden Partei', type: 'text', required: true },
      { id: 'purpose', label: 'Zweck der Offenlegung', type: 'textarea', required: true },
      { id: 'duration', label: 'Dauer (Jahre)', type: 'number', required: true, placeholder: '3' },
      { id: 'penalty', label: 'Vertragsstrafe (Betrag)', type: 'number', required: false, placeholder: '50000' },
    ]
  },
  {
    id: '9',
    title: 'Beratervertrag',
    description: 'Vertrag zwischen einem Kunden und einem freiberuflichen Berater.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'pen-tool',
    formFields: [
      { id: 'clientName', label: 'Kunde / Unternehmen', type: 'text', required: true },
      { id: 'clientOrgNum', label: 'Reg.-Nr. des Kunden', type: 'text', required: true },
      { id: 'consultantName', label: 'Berater / Dienstleister', type: 'text', required: true },
      { id: 'consultantOrgNum', label: 'Reg.-Nr. des Beraters', type: 'text', required: true },
      { id: 'assignment', label: 'Auftragsbeschreibung', type: 'textarea', required: true },
      { id: 'hourlyRate', label: 'Stundensatz (exkl. MwSt.)', type: 'number', required: true },
      { id: 'startDate', label: 'Startdatum', type: 'date', required: true },
    ]
  },
  {
    id: '13',
    title: 'Sitzungsprotokoll (Vorstand)',
    description: 'Vorlage für standardmäßige Vorstandssitzungen.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'companyName', label: 'Name des Unternehmens', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Reg.-Nr. des Unternehmens', type: 'text', required: true },
      { id: 'meetingDate', label: 'Datum der Sitzung', type: 'date', required: true },
      { id: 'chairperson', label: 'Name des Vorsitzenden', type: 'text', required: true },
      { id: 'secretary', label: 'Name des Schriftführers', type: 'text', required: true },
      { id: 'adjuster', label: 'Name des Prüfers', type: 'text', required: true },
      { id: 'attendees', label: 'Weitere Teilnehmer', type: 'textarea', required: true, placeholder: 'Teilnehmer auflisten...' },
      { id: 'decisions', label: 'Getroffene Entscheidungen', type: 'textarea', required: true, placeholder: 'Punkt 1, Punkt 2...' },
    ]
  },
  {
    id: '19',
    title: 'Gesellschaftsvertrag',
    description: 'Grundlegendes Regelwerk für eine Kapitalgesellschaft.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'company', label: 'Name des Unternehmens', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Registrierungsnummer', type: 'text', required: false, placeholder: 'Falls Unternehmen bereits gegründet' },
      { id: 'seat', label: 'Eingetragener Sitz', type: 'text', required: true },
      { id: 'business', label: 'Zweck / Gegenstand des Unternehmens', type: 'textarea', required: true },
      { id: 'capital', label: 'Stammkapital', type: 'text', required: true, placeholder: '25.000 - 100.000' },
    ]
  },

  // --- ARBEIT & HR ---
  {
    id: '2',
    title: 'Arbeitsvertrag',
    description: 'Umfassender Arbeitsvertrag für unbefristete oder befristete Positionen.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'briefcase',
    popular: true,
    formFields: [
      { id: 'companyName', label: 'Arbeitgeber (Unternehmen)', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Reg.-Nr. des Arbeitgebers', type: 'text', required: true },
      { id: 'employeeName', label: 'Name des Arbeitnehmers', type: 'text', required: true },
      { id: 'employeeSSN', label: 'ID des Arbeitnehmers', type: 'text', required: true },
      { id: 'position', label: 'Stellenbezeichnung', type: 'text', required: true },
      { id: 'salary', label: 'Monatliches Gehalt', type: 'number', required: true },
      { id: 'employmentType', label: 'Art der Anstellung', type: 'select', required: true, options: ['Unbefristet', 'Probezeit (6 Monate)', 'Befristet'] },
      { id: 'startDate', label: 'Startdatum', type: 'date', required: true },
      { id: 'vacationDays', label: 'Urlaubstage pro Jahr', type: 'number', required: true, placeholder: '25' },
    ]
  },
  {
    id: '12',
    title: 'Arbeitszeugnis',
    description: 'Ein Zertifikat, das die Dauer der Beschäftigung und die Verantwortlichkeiten bestätigt.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'scroll',
    formFields: [
      { id: 'companyName', label: 'Arbeitgeber', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Reg.-Nr. des Arbeitgebers', type: 'text', required: true },
      { id: 'employeeName', label: 'Arbeitnehmer', type: 'text', required: true },
      { id: 'employeeSSN', label: 'ID des Arbeitnehmers', type: 'text', required: true },
      { id: 'periodStart', label: 'Beschäftigt von', type: 'date', required: true },
      { id: 'periodEnd', label: 'Beschäftigt bis', type: 'date', required: true },
      { id: 'duties', label: 'Hauptverantwortlichkeiten', type: 'textarea', required: true },
      { id: 'reason', label: 'Grund für die Beendigung', type: 'text', required: false },
    ]
  },
  {
    id: '20',
    title: 'Kündigungsschreiben (Arbeitsverhältnis)',
    description: 'Formelle Kündigung durch den Arbeitgeber.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'shield-alert',
    formFields: [
      { id: 'company', label: 'Arbeitgeber', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Reg.-Nr. des Arbeitgebers', type: 'text', required: true },
      { id: 'employee', label: 'Arbeitnehmer', type: 'text', required: true },
      { id: 'employeeSSN', label: 'ID des Arbeitnehmers', type: 'text', required: true },
      { id: 'reason', label: 'Grund', type: 'select', required: true, options: ['Betriebsbedingt / Arbeitsmangel', 'Personenbedingt'] },
      { id: 'lastDay', label: 'Letzter Arbeitstag', type: 'date', required: true },
      { id: 'contact', label: 'Ansprechpartner bezüglich dieser Kündigung', type: 'text', required: true },
    ]
  },

  // --- PRIVAT & SONSTIGES ---
  {
    id: '4',
    title: 'Schuldschein',
    description: 'Dokumentation für ein privates Darlehen zwischen Personen.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'file-text',
    formFields: [
      { id: 'lenderName', label: 'Name des Kreditgebers', type: 'text', required: true },
      { id: 'lenderSSN', label: 'ID des Kreditgebers', type: 'text', required: true },
      { id: 'borrowerName', label: 'Name des Kreditnehmers', type: 'text', required: true },
      { id: 'borrowerSSN', label: 'ID des Kreditnehmers', type: 'text', required: true },
      { id: 'amount', label: 'Darlehensbetrag', type: 'number', required: true },
      { id: 'interest', label: 'Zinssatz (%)', type: 'number', required: true },
      { id: 'repaymentDate', label: 'Endgültiges Rückzahlungsdatum', type: 'date', required: true },
    ]
  },
  {
    id: '10',
    title: 'Vollmacht',
    description: 'Gewähren Sie jemandem das Recht, Sie in bestimmten Angelegenheiten zu vertreten.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'file-badge',
    formFields: [
      { id: 'giverName', label: 'Vollmachtgeber', type: 'text', required: true },
      { id: 'giverSSN', label: 'ID des Vollmachtgebers', type: 'text', required: true },
      { id: 'receiverName', label: 'Bevollmächtigter', type: 'text', required: true },
      { id: 'receiverSSN', label: 'ID des Bevollmächtigten', type: 'text', required: true },
      { id: 'scope', label: 'Umfang der Vollmacht', type: 'textarea', required: true, placeholder: 'z.B. Pakete abholen, Auto verkaufen, Bankangelegenheiten...' },
      { id: 'validUntil', label: 'Gültig bis', type: 'date', required: true },
    ]
  },
  {
    id: '21',
    title: 'Vorsorgevollmacht',
    description: 'Entscheiden Sie, wer sich um Ihre Angelegenheiten kümmert, wenn Sie handlungsunfähig werden.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'shield-check',
    popular: true,
    formFields: [
      { id: 'giver', label: 'Vollmachtgeber', type: 'text', required: true },
      { id: 'giverSSN', label: 'ID des Vollmachtgebers', type: 'text', required: true },
      { id: 'agent', label: 'Bevollmächtigter', type: 'text', required: true },
      { id: 'agentSSN', label: 'ID des Bevollmächtigten', type: 'text', required: true },
      { id: 'financial', label: 'Finanzielle Angelegenheiten regeln?', type: 'select', required: true, options: ['Ja', 'Nein'] },
      { id: 'personal', label: 'Persönliche Angelegenheiten regeln?', type: 'select', required: true, options: ['Ja', 'Nein'] },
      { id: 'conditions', label: 'Zusätzliche Bedingungen', type: 'textarea', required: false },
    ]
  },
  {
    id: '22',
    title: 'Kfz-Kaufvertrag',
    description: 'Vereinbarung über den Kauf/Verkauf eines Gebrauchtfahrzeugs zwischen Privatpersonen.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'car',
    formFields: [
      { id: 'seller', label: 'Name des Verkäufers', type: 'text', required: true },
      { id: 'sellerSSN', label: 'ID des Verkäufers', type: 'text', required: true },
      { id: 'buyer', label: 'Name des Käufers', type: 'text', required: true },
      { id: 'buyerSSN', label: 'ID des Käufers', type: 'text', required: true },
      { id: 'vehicle', label: 'Fahrzeug (Marke/Modell)', type: 'text', required: true },
      { id: 'regNr', label: 'Kennzeichen / Fahrgestellnummer', type: 'text', required: true },
      { id: 'price', label: 'Preis', type: 'number', required: true },
      { id: 'condition', label: 'Zustand/Mängel', type: 'textarea', required: false, placeholder: 'Verkauft wie gesehen. Bekannte Mängel: ...' },
    ]
  }
];
