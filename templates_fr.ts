import { DocumentTemplate } from "../types";
import { DocumentCategory } from "../types";

export const DOCUMENT_TEMPLATES_FR: DocumentTemplate[] = [
  // --- IMMOBILIER & LOGEMENT ---
  {
    id: '1',
    title: 'Contrat de Sous-location',
    description: 'Accord sécurisé pour la sous-location d\'un bien résidentiel.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'home',
    popular: true,
    formFields: [
      { id: 'landlordName', label: 'Nom du Locataire Principal', type: 'text', required: true, placeholder: 'Prénom Nom' },
      { id: 'landlordSSN', label: 'Numéro d\'Identité du Locataire Principal', type: 'text', required: true, placeholder: 'YYYYMMDD-XXXX' },
      { id: 'tenantName', label: 'Nom du Sous-locataire', type: 'text', required: true, placeholder: 'Prénom Nom' },
      { id: 'tenantSSN', label: 'Numéro d\'Identité du Sous-locataire', type: 'text', required: true, placeholder: 'YYYYMMDD-XXXX' },
      { id: 'address', label: 'Adresse du Bien', type: 'text', required: true, placeholder: 'Rue, Code Postal Ville' },
      { id: 'rent', label: 'Loyer (par mois)', type: 'number', required: true, placeholder: 'ex. 800' },
      { id: 'deposit', label: 'Dépôt de garantie', type: 'number', required: false, placeholder: 'ex. 800' },
      { id: 'startDate', label: 'Date d\'Emménagement', type: 'date', required: true },
      { id: 'endDate', label: 'Date de Départ', type: 'date', required: true },
      { id: 'included', label: 'Inclus dans le Loyer', type: 'textarea', required: false, placeholder: 'ex. Électricité, Internet...' },
    ]
  },
  {
    id: '11',
    title: 'Avis de Résiliation de Bail',
    description: 'Avis formel de résiliation d\'un contrat de location.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'file-minus',
    formFields: [
      { id: 'senderName', label: 'Votre Nom', type: 'text', required: true },
      { id: 'senderID', label: 'Votre Numéro d\'Identité', type: 'text', required: true },
      { id: 'receiverName', label: 'Nom du Destinataire', type: 'text', required: true },
      { id: 'receiverID', label: 'Numéro d\'Identité du Destinataire', type: 'text', required: true },
      { id: 'address', label: 'Adresse du Bien', type: 'text', required: true },
      { id: 'contractDate', label: 'Date du Contrat Original', type: 'date', required: false },
      { id: 'terminationDate', label: 'Date de Départ', type: 'date', required: true },
      { id: 'reason', label: 'Motif (facultatif)', type: 'textarea', required: false },
    ]
  },
  {
    id: '14',
    title: 'Bail Commercial',
    description: 'Contrat de location pour des commerces, bureaux ou entrepôts.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'landlord', label: 'Bailleur (Entreprise)', type: 'text', required: true },
      { id: 'landlordOrgNum', label: 'N° SIRET du Bailleur', type: 'text', required: true },
      { id: 'tenant', label: 'Preneur (Entreprise)', type: 'text', required: true },
      { id: 'tenantOrgNum', label: 'N° SIRET du Preneur', type: 'text', required: true },
      { id: 'premises', label: 'Adresse des Locaux', type: 'text', required: true },
      { id: 'area', label: 'Surface Totale (m²)', type: 'number', required: true },
      { id: 'usage', label: 'Usage Prévu', type: 'text', required: true },
      { id: 'rent', label: 'Loyer Annuel (HT)', type: 'number', required: true },
    ]
  },
  {
    id: '15',
    title: 'Contrat d\'Entrepreneur (Rénovation)',
    description: 'Accord sécurisé entre un client et un entrepreneur pour des travaux de rénovation.',
    category: DocumentCategory.FASTIGHET,
    price: 200,
    icon: 'hammer',
    formFields: [
      { id: 'client', label: 'Client', type: 'text', required: true },
      { id: 'clientSSN', label: 'Numéro d\'Identité du Client', type: 'text', required: true },
      { id: 'contractor', label: 'Entrepreneur', type: 'text', required: true },
      { id: 'contractorOrgNum', label: 'N° SIRET de l\'Entrepreneur', type: 'text', required: true },
      { id: 'scope', label: 'Étendue des Travaux', type: 'textarea', required: true, placeholder: 'Décrivez ce qui doit être fait...' },
      { id: 'priceType', label: 'Modèle de Tarification', type: 'select', required: true, options: ['Prix Fixe', 'Taux Horaire', 'Devis Estimatif'] },
      { id: 'price', label: 'Prix / Taux Horaire', type: 'number', required: true },
      { id: 'deadline', label: 'Date Limite d\'Achèvement', type: 'date', required: true },
    ]
  },

  // --- FAMILLE & RELATIONS ---
  {
    id: '3',
    title: 'Contrat de Cohabitation',
    description: 'Établit les conditions concernant les biens partagés et le patrimoine.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'heart',
    popular: true,
    formFields: [
      { id: 'partner1Name', label: 'Nom du Partenaire 1', type: 'text', required: true },
      { id: 'partner1SSN', label: 'N° d\'Identité du Partenaire 1', type: 'text', required: true },
      { id: 'partner2Name', label: 'Nom du Partenaire 2', type: 'text', required: true },
      { id: 'partner2SSN', label: 'N° d\'Identité du Partenaire 2', type: 'text', required: true },
      { id: 'address', label: 'Adresse Partagée', type: 'text', required: true },
      { id: 'agreementType', label: 'Type d\'Accord', type: 'select', required: true, options: ['Exclure complètement les lois de cohabitation', 'Certains biens doivent être exclus'] },
    ]
  },
  {
    id: '16',
    title: 'Contrat de Mariage',
    description: 'Décide de ce qui doit être considéré comme bien propre dans un mariage.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'heart',
    popular: true,
    formFields: [
      { id: 'spouse1', label: 'Nom du Conjoint 1', type: 'text', required: true },
      { id: 'spouse1SSN', label: 'N° d\'Identité du Conjoint 1', type: 'text', required: true },
      { id: 'spouse2', label: 'Nom du Conjoint 2', type: 'text', required: true },
      { id: 'spouse2SSN', label: 'N° d\'Identité du Conjoint 2', type: 'text', required: true },
      { id: 'scope', label: 'Portée de l\'Accord', type: 'select', required: true, options: ['Tous les biens doivent être séparés', 'Les biens d\'avant le mariage doivent être séparés', 'Des biens spécifiques doivent être séparés'] },
      { id: 'specifics', label: 'Spécifications (le cas échéant)', type: 'textarea', required: false, placeholder: 'ex. La maison située à...' },
    ]
  },
  {
    id: '5',
    title: 'Testament',
    description: 'Assurez-vous que votre succession est répartie selon vos souhaits.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'scroll',
    popular: true,
    formFields: [
      { id: 'testatorName', label: 'Nom du Testateur', type: 'text', required: true },
      { id: 'testatorSSN', label: 'N° d\'Identité du Testateur', type: 'text', required: true },
      { id: 'beneficiaries', label: 'Qui héritera ?', type: 'textarea', required: true, placeholder: 'Noms des personnes ou organisations...' },
      { id: 'specificGifts', label: 'Dons Spécifiques (facultatif)', type: 'textarea', required: false, placeholder: 'ex. Ma montre à Jean...' },
      { id: 'privateProperty', label: 'Les héritages seront-ils des biens propres ?', type: 'select', required: true, options: ['Oui', 'Non'] },
    ]
  },
  {
    id: '6',
    title: 'Acte de Donation',
    description: 'Un document formel pour transférer des biens, comme des biens immobiliers ou de l\'argent, en tant que don.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'gift',
    formFields: [
      { id: 'giverName', label: 'Nom du Donateur', type: 'text', required: true },
      { id: 'giverSSN', label: 'N° d\'Identité du Donateur', type: 'text', required: true },
      { id: 'receiverName', label: 'Nom du Donataire', type: 'text', required: true },
      { id: 'receiverSSN', label: 'N° d\'Identité du Donataire', type: 'text', required: true },
      { id: 'description', label: 'Que donnez-vous ?', type: 'textarea', required: true, placeholder: 'ex. 10 000 en espèces ou le Bien Immobilier X...' },
      { id: 'conditions', label: 'Conditions', type: 'textarea', required: false, placeholder: 'ex. Doit être considéré comme un bien propre' },
    ]
  },
  {
    id: '17',
    title: 'Accord de Partage des Biens',
    description: 'Accord pour diviser les biens lors d\'une séparation ou d\'un divorce.',
    category: DocumentCategory.FAMILJ,
    price: 200,
    icon: 'scale',
    formFields: [
      { id: 'party1', label: 'Nom de la Partie 1', type: 'text', required: true },
      { id: 'party1SSN', label: 'N° d\'Identité de la Partie 1', type: 'text', required: true },
      { id: 'party2', label: 'Nom de la Partie 2', type: 'text', required: true },
      { id: 'party2SSN', label: 'N° d\'Identité de la Partie 2', type: 'text', required: true },
      { id: 'date', label: 'Date Effective de Séparation', type: 'date', required: true },
      { id: 'property', label: 'Comment les biens sont-ils divisés ?', type: 'textarea', required: true, placeholder: 'La Partie 1 garde la maison et paie la Partie 2...' },
    ]
  },

  // --- AFFAIRES & ENTREPRISE ---
  {
    id: '18',
    title: 'Pacte d\'Actionnaires',
    description: 'Pacte d\'actionnaires simple fixant les règles de propriété dans une société.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'users',
    popular: true,
    formFields: [
      { id: 'company', label: 'Nom de la Société', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'N° SIRET de la Société', type: 'text', required: true },
      { id: 'owners', label: 'Actionnaires (Noms et parts)', type: 'textarea', required: true, placeholder: 'Alice - 50%, Bob - 50%...' },
      { id: 'roles', label: 'Rôles / Responsabilités', type: 'textarea', required: true },
      { id: 'vesting', label: 'Période d\'Acquisition', type: 'select', required: true, options: ['Aucune Acquisition', '3 ans', '4 ans'] },
      { id: 'hembud', label: 'Droit de Préemption ?', type: 'select', required: true, options: ['Oui, les actions doivent d\'abord être offertes aux propriétaires existants', 'Non'] },
    ]
  },
  {
    id: '8',
    title: 'Accord de Non-divulgation (NDA)',
    description: 'Protégez vos secrets commerciaux et vos informations sensibles.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'lock',
    formFields: [
      { id: 'party1', label: 'Partie Divulgatrice', type: 'text', required: true },
      { id: 'party1ID', label: 'N° d\'Identité de la Partie Divulgatrice', type: 'text', required: true },
      { id: 'party2', label: 'Partie Réceptrice', type: 'text', required: true },
      { id: 'party2ID', label: 'N° d\'Identité de la Partie Réceptrice', type: 'text', required: true },
      { id: 'purpose', label: 'Motif de la Divulgation', type: 'textarea', required: true },
      { id: 'duration', label: 'Durée (années)', type: 'number', required: true, placeholder: '3' },
      { id: 'penalty', label: 'Clause Pénale (Montant)', type: 'number', required: false, placeholder: '50000' },
    ]
  },
  {
    id: '9',
    title: 'Contrat de Conseil',
    description: 'Accord entre un client et un consultant indépendant.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'pen-tool',
    formFields: [
      { id: 'clientName', label: 'Client / Entreprise', type: 'text', required: true },
      { id: 'clientOrgNum', label: 'N° SIRET du Client', type: 'text', required: true },
      { id: 'consultantName', label: 'Consultant / Prestataire', type: 'text', required: true },
      { id: 'consultantOrgNum', label: 'N° SIRET du Consultant', type: 'text', required: true },
      { id: 'assignment', label: 'Description de la Mission', type: 'textarea', required: true },
      { id: 'hourlyRate', label: 'Taux Horaire (HT)', type: 'number', required: true },
      { id: 'startDate', label: 'Date de Début', type: 'date', required: true },
    ]
  },
  {
    id: '13',
    title: 'Procès-verbal du Conseil d\'Administration',
    description: 'Modèle pour les réunions standard du conseil d\'administration.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'companyName', label: 'Nom de la Société', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'N° SIRET de la Société', type: 'text', required: true },
      { id: 'meetingDate', label: 'Date de la Réunion', type: 'date', required: true },
      { id: 'chairperson', label: 'Nom du Président', type: 'text', required: true },
      { id: 'secretary', label: 'Nom du Secrétaire', type: 'text', required: true },
      { id: 'adjuster', label: 'Nom du Réviseur', type: 'text', required: true },
      { id: 'attendees', label: 'Autres Participants', type: 'textarea', required: true, placeholder: 'Lister les participants...' },
      { id: 'decisions', label: 'Décisions Prises', type: 'textarea', required: true, placeholder: 'Point 1, Point 2...' },
    ]
  },
  {
    id: '19',
    title: 'Statuts de la Société',
    description: 'Règles de base pour une société.',
    category: DocumentCategory.FORETAG,
    price: 200,
    icon: 'building',
    formFields: [
      { id: 'company', label: 'Nom de la Société', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'Numéro d\'Enregistrement', type: 'text', required: false, placeholder: 'Si l\'entreprise est déjà créée' },
      { id: 'seat', label: 'Siège Social', type: 'text', required: true },
      { id: 'business', label: 'Objet de la Société', type: 'textarea', required: true },
      { id: 'capital', label: 'Capital Social', type: 'text', required: true, placeholder: '25.000 - 100.000' },
    ]
  },

  // --- TRAVAIL & RH ---
  {
    id: '2',
    title: 'Contrat de Travail',
    description: 'Contrat de travail complet pour les postes permanents ou à durée déterminée.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'briefcase',
    popular: true,
    formFields: [
      { id: 'companyName', label: 'Employeur (Entreprise)', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'N° SIRET de l\'Employeur', type: 'text', required: true },
      { id: 'employeeName', label: 'Nom de l\'Employé', type: 'text', required: true },
      { id: 'employeeSSN', label: 'N° d\'Identité de l\'Employé', type: 'text', required: true },
      { id: 'position', label: 'Intitulé du Poste', type: 'text', required: true },
      { id: 'salary', label: 'Salaire Mensuel', type: 'number', required: true },
      { id: 'employmentType', label: 'Type de Contrat', type: 'select', required: true, options: ['CDI', 'Période d\'Essai', 'CDD'] },
      { id: 'startDate', label: 'Date de Début', type: 'date', required: true },
      { id: 'vacationDays', label: 'Jours de Congés par an', type: 'number', required: true, placeholder: '25' },
    ]
  },
  {
    id: '12',
    title: 'Certificat de Travail',
    description: 'Un certificat confirmant la durée de l\'emploi et les responsabilités.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'scroll',
    formFields: [
      { id: 'companyName', label: 'Employeur', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'N° SIRET de l\'Employeur', type: 'text', required: true },
      { id: 'employeeName', label: 'Employé', type: 'text', required: true },
      { id: 'employeeSSN', label: 'N° d\'Identité de l\'Employé', type: 'text', required: true },
      { id: 'periodStart', label: 'Employé à partir de', type: 'date', required: true },
      { id: 'periodEnd', label: 'Employé jusqu\'au', type: 'date', required: true },
      { id: 'duties', label: 'Principales Responsabilités', type: 'textarea', required: true },
      { id: 'reason', label: 'Motif de Départ', type: 'text', required: false },
    ]
  },
  {
    id: '20',
    title: 'Lettre de Licenciement',
    description: 'Avis formel de licenciement par l\'employeur.',
    category: DocumentCategory.ANSTALLNING,
    price: 200,
    icon: 'shield-alert',
    formFields: [
      { id: 'company', label: 'Employeur', type: 'text', required: true },
      { id: 'companyOrgNum', label: 'N° SIRET de l\'Employeur', type: 'text', required: true },
      { id: 'employee', label: 'Employé', type: 'text', required: true },
      { id: 'employeeSSN', label: 'N° d\'Identité de l\'Employé', type: 'text', required: true },
      { id: 'reason', label: 'Motif', type: 'select', required: true, options: ['Licenciement économique', 'Motifs Personnels'] },
      { id: 'lastDay', label: 'Dernier Jour de Travail', type: 'date', required: true },
      { id: 'contact', label: 'Personne à Contacter concernant cet Avis', type: 'text', required: true },
    ]
  },

  // --- PRIVÉ & AUTRE ---
  {
    id: '4',
    title: 'Billet à Ordre',
    description: 'Documentation pour un prêt privé entre particuliers.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'file-text',
    formFields: [
      { id: 'lenderName', label: 'Nom du Prêteur', type: 'text', required: true },
      { id: 'lenderSSN', label: 'N° d\'Identité du Prêteur', type: 'text', required: true },
      { id: 'borrowerName', label: 'Nom de l\'Emprunteur', type: 'text', required: true },
      { id: 'borrowerSSN', label: 'N° d\'Identité de l\'Emprunteur', type: 'text', required: true },
      { id: 'amount', label: 'Montant du Prêt', type: 'number', required: true },
      { id: 'interest', label: 'Taux d\'Intérêt (%)', type: 'number', required: true },
      { id: 'repaymentDate', label: 'Date de Remboursement Final', type: 'date', required: true },
    ]
  },
  {
    id: '10',
    title: 'Procuration',
    description: 'Accordez à quelqu\'un le droit de vous représenter pour des questions spécifiques.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'file-badge',
    formFields: [
      { id: 'giverName', label: 'Mandant', type: 'text', required: true },
      { id: 'giverSSN', label: 'N° d\'Identité du Mandant', type: 'text', required: true },
      { id: 'receiverName', label: 'Mandataire', type: 'text', required: true },
      { id: 'receiverSSN', label: 'N° d\'Identité du Mandataire', type: 'text', required: true },
      { id: 'scope', label: 'Étendue du Pouvoir', type: 'textarea', required: true, placeholder: 'ex. récupérer des colis, vendre une voiture, opérations bancaires...' },
      { id: 'validUntil', label: 'Valable Jusqu\'au', type: 'date', required: true },
    ]
  },
  {
    id: '21',
    title: 'Mandat de Protection Future',
    description: 'Décidez de qui s\'occupera de vos affaires si vous devenez incapable.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'shield-check',
    popular: true,
    formFields: [
      { id: 'giver', label: 'Mandant', type: 'text', required: true },
      { id: 'giverSSN', label: 'N° d\'Identité du Mandant', type: 'text', required: true },
      { id: 'agent', label: 'Mandataire', type: 'text', required: true },
      { id: 'agentSSN', label: 'N° d\'Identité du Mandataire', type: 'text', required: true },
      { id: 'financial', label: 'Gérer les Affaires Financières ?', type: 'select', required: true, options: ['Oui', 'Non'] },
      { id: 'personal', label: 'Gérer les Affaires Personnelles ?', type: 'select', required: true, options: ['Oui', 'Non'] },
      { id: 'conditions', label: 'Conditions Supplémentaires', type: 'textarea', required: false },
    ]
  },
  {
    id: '22',
    title: 'Acte de Vente de Véhicule',
    description: 'Accord pour l\'achat/vente d\'un véhicule d\'occasion entre particuliers.',
    category: DocumentCategory.PRIVAT,
    price: 200,
    icon: 'car',
    formFields: [
      { id: 'seller', label: 'Nom du Vendeur', type: 'text', required: true },
      { id: 'sellerSSN', label: 'N° d\'Identité du Vendeur', type: 'text', required: true },
      { id: 'buyer', label: 'Nom de l\'Acheteur', type: 'text', required: true },
      { id: 'buyerSSN', label: 'N° d\'Identité de l\'Acheteur', type: 'text', required: true },
      { id: 'vehicle', label: 'Véhicule (Marque/Modèle)', type: 'text', required: true },
      { id: 'regNr', label: 'Immatriculation / Numéro de Châssis', type: 'text', required: true },
      { id: 'price', label: 'Prix', type: 'number', required: true },
      { id: 'condition', label: 'État/Défauts', type: 'textarea', required: false, placeholder: 'Vendu en l\'état. Défauts connus : ...' },
    ]
  }
];
