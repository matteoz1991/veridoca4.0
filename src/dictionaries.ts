import { Locale } from './i18n-config';

type Dictionary = {
  header: {
    business: string;
    private: string;
    companyOps: string;
    hr: string;
    popular: string;
    inheritance: string;
    family: string;
    powers: string;
    housing: string;
    loans: string;
    moreTemplates: string;
    createDoc: string;
    free: string;
  };
  home: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    createNow: string;
    viewTemplates: string;
  };
  templatesPage: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    noResults: string;
  };
  footer: {
    description: string;
    infoAndLegal: string;
    aboutUs: string;
    contact: string;
    privacyPolicy: string;
    termsOfService: string;
    disclaimer: string;
    impressum: string;
    copyright: string;
    adSupported: string;
  };
};

const en: Dictionary = {
  header: {
    business: 'Business',
    private: 'Personal',
    companyOps: 'Corporate',
    hr: 'Employment',
    popular: 'Popular Documents',
    inheritance: 'Inheritance',
    family: 'Family',
    powers: 'Power of Attorney',
    housing: 'Real Estate',
    loans: 'Loans & Gifts',
    moreTemplates: 'More templates →',
    createDoc: 'Create Document',
    free: '100% Free'
  },
  home: {
    titleLine1: 'Professional-grade',
    titleLine2: 'Legal Documents',
    subtitle: 'Experience Veridoca, revolutionizing legal access with innovative, transparent, and efficient free document generation solutions.',
    createNow: 'Create now',
    viewTemplates: 'View Templates'
  },
  templatesPage: {
    title: 'All Legal Templates',
    subtitle: 'Browse our complete collection of free, professional-grade legal documents and contracts.',
    searchPlaceholder: 'Search for templates...',
    allCategories: 'All Categories',
    noResults: 'No templates found matching your search.'
  },
  footer: {
    description: "Free legal documents and contract templates for businesses and individuals. No login required.",
    infoAndLegal: "Information & Legal",
    aboutUs: "About us",
    contact: "Contact us",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    disclaimer: "Disclaimer",
    impressum: "Impressum",
    copyright: "All rights reserved.",
    adSupported: "This website is funded by ads to keep the service free for you."
  }
};

const sv: Dictionary = {
  header: {
    business: 'Företag',
    private: 'Privatperson',
    companyOps: 'Bolag & Drift',
    hr: 'Personal',
    popular: 'Populära dokument',
    inheritance: 'Arv',
    family: 'Familj',
    powers: 'Fullmakter',
    housing: 'Bostad',
    loans: 'Lån & Gåvor',
    moreTemplates: 'Fler mallar →',
    createDoc: 'Skapa dokument',
    free: '100% Gratis'
  },
  home: {
    titleLine1: 'Professionella',
    titleLine2: 'Juridiska Avtal',
    subtitle: 'Upplev Veridoca – revolutionerande enkel tillgång till juridik med innovativa, transparenta och helt gratis dokumentmallar.',
    createNow: 'Skapa nu',
    viewTemplates: 'Se alla mallar'
  },
  templatesPage: {
    title: 'Alla Juridiska Mallar',
    subtitle: 'Bläddra igenom vår kompletta samling av gratis, juridiskt granskade avtal och dokument.',
    searchPlaceholder: 'Sök efter mallar...',
    allCategories: 'Alla Kategorier',
    noResults: 'Inga mallar hittades för din sökning.'
  },
  footer: {
    description: "Gratis juridiska dokument och avtalsmallar för företag och privatpersoner. Ingen inloggning krävs.",
    infoAndLegal: "Information & Rättsligt",
    aboutUs: "Om oss",
    contact: "Kontakta oss",
    privacyPolicy: "Integritetspolicy",
    termsOfService: "Användarvillkor",
    disclaimer: "Ansvarsfriskrivning",
    impressum: "Impressum",
    copyright: "Alla rättigheter förbehållna.",
    adSupported: "Denna webbplats är finansierad via annonser för att hålla tjänsten gratis för dig."
  }
};

const de: Dictionary = {
  header: {
    business: 'Unternehmen',
    private: 'Privatperson',
    companyOps: 'Gesellschaft',
    hr: 'Personal',
    popular: 'Beliebte Dokumente',
    inheritance: 'Erbrecht',
    family: 'Familie',
    powers: 'Vollmachten',
    housing: 'Immobilien',
    loans: 'Darlehen & Schenkungen',
    moreTemplates: 'Mehr Vorlagen →',
    createDoc: 'Dokument erstellen',
    free: '100% Kostenlos'
  },
  home: {
    titleLine1: 'Professionelle',
    titleLine2: 'Rechtsdokumente',
    subtitle: 'Erleben Sie Veridoca – revolutioniert den Zugang zum Recht mit innovativen und völlig kostenlosen Lösungen zur Dokumentenerstellung.',
    createNow: 'Jetzt erstellen',
    viewTemplates: 'Vorlagen ansehen'
  },
  templatesPage: {
    title: 'Alle Rechtsvorlagen',
    subtitle: 'Durchsuchen Sie unsere komplette Sammlung kostenloser, professioneller Rechtsdokumente und Verträge.',
    searchPlaceholder: 'Nach Vorlagen suchen...',
    allCategories: 'Alle Kategorien',
    noResults: 'Keine Vorlagen gefunden.'
  },
  footer: {
    description: "Kostenlose Rechtsdokumente und Vertragsvorlagen für Unternehmen und Privatpersonen. Keine Anmeldung erforderlich.",
    infoAndLegal: "Informationen & Rechtliches",
    aboutUs: "Über uns",
    contact: "Kontakt",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfService: "Nutzungsbedingungen",
    disclaimer: "Haftungsausschluss",
    impressum: "Impressum",
    copyright: "Alle Rechte vorbehalten.",
    adSupported: "Diese Website wird durch Werbung finanziert, um den Service für Sie kostenlos zu halten."
  }
};

const fr: Dictionary = {
  header: {
    business: 'Entreprise',
    private: 'Particulier',
    companyOps: 'Société',
    hr: 'Ressources Humaines',
    popular: 'Documents populaires',
    inheritance: 'Succession',
    family: 'Famille',
    powers: 'Procurations',
    housing: 'Immobilier',
    loans: 'Prêts et Dons',
    moreTemplates: 'Plus de modèles →',
    createDoc: 'Créer un document',
    free: '100% Gratuit'
  },
  home: {
    titleLine1: 'Documents Juridiques',
    titleLine2: 'Professionnels',
    subtitle: 'Découvrez Veridoca, qui révolutionne l\'accès au droit avec des solutions innovantes et gratuites de génération de documents.',
    createNow: 'Créer maintenant',
    viewTemplates: 'Voir les modèles'
  },
  templatesPage: {
    title: 'Tous les modèles juridiques',
    subtitle: 'Parcourez notre collection complète de documents juridiques et de contrats gratuits et professionnels.',
    searchPlaceholder: 'Rechercher des modèles...',
    allCategories: 'Toutes catégories',
    noResults: 'Aucun modèle trouvé.'
  },
  footer: {
    description: "Documents juridiques et modèles de contrats gratuits pour les entreprises et les particuliers. Aucune connexion requise.",
    infoAndLegal: "Informations et mentions légales",
    aboutUs: "À propos de nous",
    contact: "Nous contacter",
    privacyPolicy: "Politique de confidentialité",
    termsOfService: "Conditions d'utilisation",
    disclaimer: "Clause de non-responsabilité",
    impressum: "Mentions légales",
    copyright: "Tous droits réservés.",
    adSupported: "Ce site est financé par la publicité pour vous offrir un service gratuit."
  }
};

const es: Dictionary = {
  header: {
    business: 'Empresa',
    private: 'Particular',
    companyOps: 'Sociedad',
    hr: 'Recursos Humanos',
    popular: 'Documentos populares',
    inheritance: 'Herencia',
    family: 'Familia',
    powers: 'Poderes',
    housing: 'Bienes Raíces',
    loans: 'Préstamos y Donaciones',
    moreTemplates: 'Más plantillas →',
    createDoc: 'Crear documento',
    free: '100% Gratis'
  },
  home: {
    titleLine1: 'Documentos Legales',
    titleLine2: 'Profesionales',
    subtitle: 'Experimente Veridoca, revolucionando el acceso legal con soluciones de generación de documentos innovadoras y totalmente gratuitas.',
    createNow: 'Crear ahora',
    viewTemplates: 'Ver plantillas'
  },
  templatesPage: {
    title: 'Todas las plantillas legales',
    subtitle: 'Explore nuestra colección completa de documentos y contratos legales gratuitos y de nivel profesional.',
    searchPlaceholder: 'Buscar plantillas...',
    allCategories: 'Todas las categorías',
    noResults: 'No se encontraron plantillas.'
  },
  footer: {
    description: "Documentos legales y plantillas de contratos gratuitos para empresas y particulares. No se requiere inicio de sesión.",
    infoAndLegal: "Información y Aspectos Legales",
    aboutUs: "Sobre nosotros",
    contact: "Contáctenos",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    disclaimer: "Descargo de responsabilidad",
    impressum: "Aviso Legal",
    copyright: "Todos los derechos reservados.",
    adSupported: "Este sitio web se financia mediante anuncios para mantener el servicio gratuito para usted."
  }
};

const no: Dictionary = {
  header: {
    business: 'Bedrift',
    private: 'Privatperson',
    companyOps: 'Selskap & Drift',
    hr: 'Personal',
    popular: 'Populære dokumenter',
    inheritance: 'Arv',
    family: 'Familie',
    powers: 'Fullmakter',
    housing: 'Bolig',
    loans: 'Lån & Gaver',
    moreTemplates: 'Flere maler →',
    createDoc: 'Lag dokument',
    free: '100% Gratis'
  },
  home: {
    titleLine1: 'Profesjonelle',
    titleLine2: 'Juridiske Dokumenter',
    subtitle: 'Opplev Veridoca – revolusjonerer tilgangen til juss med innovative og helt gratis dokumentmaler.',
    createNow: 'Lag nå',
    viewTemplates: 'Se alle maler'
  },
  templatesPage: {
    title: 'Alle juridiske maler',
    subtitle: 'Bla gjennom vår komplette samling av gratis, profesjonelle juridiske dokumenter og kontrakter.',
    searchPlaceholder: 'Søk etter maler...',
    allCategories: 'Alle kategorier',
    noResults: 'Ingen maler funnet.'
  },
  footer: {
    description: "Gratis juridiske dokumenter og kontraktsmaler for bedrifter og privatpersoner. Ingen innlogging kreves.",
    infoAndLegal: "Informasjon & Juridisk",
    aboutUs: "Om oss",
    contact: "Kontakt oss",
    privacyPolicy: "Personvernregler",
    termsOfService: "Brukervilkår",
    disclaimer: "Ansvarsfraskrivelse",
    impressum: "Impressum",
    copyright: "Alle rettigheter forbeholdt.",
    adSupported: "Denne nettsiden finansieres av annonser for å holde tjenesten gratis for deg."
  }
};

const dk: Dictionary = {
  header: {
    business: 'Erhverv',
    private: 'Privatperson',
    companyOps: 'Selskab & Drift',
    hr: 'Personale',
    popular: 'Populære dokumenter',
    inheritance: 'Arv',
    family: 'Familie',
    powers: 'Fuldmagter',
    housing: 'Bolig',
    loans: 'Lån & Gaver',
    moreTemplates: 'Flere skabeloner →',
    createDoc: 'Opret dokument',
    free: '100% Gratis'
  },
  home: {
    titleLine1: 'Professionelle',
    titleLine2: 'Juridiske Dokumenter',
    subtitle: 'Oplev Veridoca – revolutionerer adgangen til jura med innovative og helt gratis dokumentskabeloner.',
    createNow: 'Opret nu',
    viewTemplates: 'Se alle skabeloner'
  },
  templatesPage: {
    title: 'Alle juridiske skabeloner',
    subtitle: 'Gennemse vores komplette samling af gratis, professionelle juridiske dokumenter og kontrakter.',
    searchPlaceholder: 'Søg efter skabeloner...',
    allCategories: 'Alle kategorier',
    noResults: 'Ingen skabeloner fundet.'
  },
  footer: {
    description: "Gratis juridiske dokumenter og kontraktskabeloner til virksomheder og privatpersoner. Ingen login påkrævet.",
    infoAndLegal: "Information & Juridisk",
    aboutUs: "Om os",
    contact: "Kontakt os",
    privacyPolicy: "Privatlivspolitik",
    termsOfService: "Brugervilkår",
    disclaimer: "Ansvarsfraskrivelse",
    impressum: "Impressum",
    copyright: "Alle rettigheder forbeholdt.",
    adSupported: "Dette websted er finansieret af annoncer for at holde tjenesten gratis for dig."
  }
};

const nl: Dictionary = {
  header: {
    business: 'Bedrijf',
    private: 'Particulier',
    companyOps: 'Bedrijfsvoering',
    hr: 'Personeel',
    popular: 'Populaire documenten',
    inheritance: 'Erfrecht',
    family: 'Familie',
    powers: 'Volmachten',
    housing: 'Vastgoed',
    loans: 'Leningen & Schenkingen',
    moreTemplates: 'Meer sjablonen →',
    createDoc: 'Document aanmaken',
    free: '100% Gratis'
  },
  home: {
    titleLine1: 'Professionele',
    titleLine2: 'Juridische Documenten',
    subtitle: 'Ontdek Veridoca – revolutioneert de toegang tot juridische diensten met innovatieve en volledig gratis documentsjablonen.',
    createNow: 'Nu aanmaken',
    viewTemplates: 'Bekijk sjablonen'
  },
  templatesPage: {
    title: 'Alle juridische sjablonen',
    subtitle: 'Blader door onze volledige collectie gratis, professionele juridische documenten en contracten.',
    searchPlaceholder: 'Zoek naar sjablonen...',
    allCategories: 'Alle categorieën',
    noResults: 'Geen sjablonen gevonden.'
  },
  footer: {
    description: "Gratis juridische documenten en contractsjablonen voor bedrijven en particulieren. Geen inloggen vereist.",
    infoAndLegal: "Informatie & Juridisch",
    aboutUs: "Over ons",
    contact: "Neem contact op",
    privacyPolicy: "Privacybeleid",
    termsOfService: "Gebruiksvoorwaarden",
    disclaimer: "Disclaimer",
    impressum: "Impressum",
    copyright: "Alle rechten voorbehouden.",
    adSupported: "Deze website wordt gefinancierd door advertenties om de service gratis voor u te houden."
  }
};

export const dictionaries: Record<Locale, Dictionary> = {
  sv,
  en,
  us: en,
  uk: en,
  de,
  fr,
  es,
  no,
  dk,
  nl
};

export const getDictionary = (lang: Locale) => dictionaries[lang] || dictionaries['en'];
