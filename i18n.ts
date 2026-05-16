import { CountryConfig } from './types';

export const translations: Record<string, Record<string, any>> = {
  'SE': {
    currency: 'kr',
    price: '200',
    header: {
      slogan: "Juridik på dina villkor",
      home: "Hem",
      templates: "Mallar",
      howItWorks: "Hur det funkar",
      support: "Support",
      search: "Sök Dokument"
    },
    howItWorks: {
      title: "Så här fungerar det",
      subtitle: "Tre enkla steg för att skapa ett juridiskt bindande avtal. Det tar mindre än 5 minuter.",
      step1Title: "1. Välj en mall",
      step1Desc: "Hitta rätt avtal i vårt omfattande bibliotek av kvalitetssäkrade mallar.",
      step2Title: "2. Fyll i uppgifter",
      step2Desc: "Svara på några enkla frågor via vårt formulär. Din information är helt säker.",
      step3Title: "3. Ladda ner",
      step3Desc: "Granska det färdiga dokumentet och ladda hem det som PDF - redo att signeras."
    },
    hero: {
      badge: "Din globala juristtjänst",
      title1: "Rättsäkra avtal.",
      title2: "Alltid 100% gratis.",
      subtitle: "Skapa skräddarsydda, juridiskt korrekta dokument på några minuter. Giltiga enligt lagstiftningen i {country}.",
      btnFind: "Hitta ditt avtal",
      btnReadMore: "Läs mer",
      feature1: "Över 20 mallar",
      feature2: "Anpassat för {country}",
    },
    templates: {
      title: "Dokumentbibliotek",
      subtitle: "Välj kategori för att filtrere bland våra {count} juridiska mallar.",
      searchPlaceholder: "Sök...",
      all: "Alla",
      popular: "Populär",
      createNow: "Skapa nu",
      notFoundTitle: "Inga mallar hittades",
      notFoundDesc: "Försök med ett annat sökord eller byt kategori.",
      clearFilter: "Rensa filter"
    },
    categories: {
      business: "Företag & Affärer",
      private: "Privat & Övrigt",
      real_estate: "Bostad & Fastighet",
      employment: "Arbete & HR",
      family: "Familj & Relationer"
    },
    form: {
      back: "Tillbaka till biblioteket",
      quality: "Kvalitetsgranskad",
      tipsTitle: "Tips!",
      tipsDesc: "Fyll i uppgifterna så noggrant som möjligt. Ju mer detaljerad du är, desto bättre blir det juridiska skyddet i dokumentet.",
      step1: "Avtalsinformation",
      selectDefault: "Välj ett alternativ...",
      cancel: "Avbryt",
      submit: "Skapa Förhandsgranskning",
      generatingTitle: "Genererar dokument",
      generatingDesc: "Dina uppgifter analyseras och vi formulerar din {template}..."
    },
    cookie: {
      title: "Vi använder cookies",
      desc: "Vi använder cookies för att förbättra din upplevelse, analysera trafik och visa relevanta annonser via Google AdSense. Läs mer i vår",
      policy: "integritetspolicy",
      settings: "Inställningar",
      necessaryOnly: "Endast nödvändiga",
      acceptAll: "Acceptera alla",
      settingsTitle: "Cookie-inställningar",
      necessary: "Nödvändiga cookies",
      necessaryDesc: "Krävs för att webbplatsen ska fungera. Kan inte inaktiveras.",
      analytics: "Analytiska cookies",
      analyticsDesc: "Hjälper oss förstå hur besökare använder webbplatsen via Google Analytics.",
      advertising: "Annonscookies",
      advertisingDesc: "Används av Google AdSense för att visa relevanta annonser.",
      saveSettings: "Spara inställningar"
    },
    preview: {
      lockedTitle: "Ditt färdiga dokument",
      lockedDesc: "Granska ditt dokument nedan. Tjänsten är 100% gratis.",
      btnUnlock: "Ladda ner som PDF",
      btnEdit: "Redigera uppgifter",
      included: "Detta ingår",
      inc1: "Juridiskt korrekt PDF",
      inc2: "Färdig för utskrift och e-signering",
      inc3: "Helt gratis",
      inc4: "Inga dolda avgifter",
      watermark: "Färdigt dokument",
      lockedDoc: "Ladda ner ditt dokument",
      lockedDocDesc: "Dokumentet är klart att laddas ner.",
      unlockNow: "Ladda ner nu"
    },
    checkout: {
      title: "Slutför beställning",
      secure: "Säker betalning via Stripe",
      toPay: "Att betala:",
      card: "Kortbetalning (Stripe)",
      swish: "Lokalt betalalternativ (Kommer snart)",
      payBtn: "Gå till betalning",
      terms: "Genom att ladda ner godkänner du våra användarvillkor."
    },
    success: {
      title: "Ditt dokument är redo!",
      desc: "Ditt dokument är nu klart. Vi har skickat en kopia till din e-post, men du kan också ladda ner det direkt.",
      download: "Ladda ner PDF",
      receipt: "Skicka kvitto",
      back: "Gå tillbaka till startsidan"
    },
        footer: {
      supportText: "Om ni gillar vårt projekt och vill att det ska fortsätta vara gratis, stötta oss gärna med en gåva genom att scanna QR-koden.",
      desc: "Vi demokratiserar juridiken och gör professionella avtal tillgängliga för alla.",
      popular: "Populära Dokument",
      support: "Kundservice",
      faq: "Vanliga frågor",
      contact: "Kontakta oss",
      terms: "Användarvillkor",
      privacy: "Integritetspolicy",
      rights: "© 2024 Veridoca AB. Alla rättigheter förbehållna.",
      secure: "Säkra betalningar med Stripe"
    },
    document: {
      executedOn: "Detta dokument är upprättat den {date} i enlighet med svensk lagstiftning.",
      section1: "1. Parter och Avtalsinnehåll",
      notSpecified: "Ej angivet",
      section2: "2. Standardvillkor",
      section2Desc: "Ovanstående information utgör grunden för detta avtal. Parterna förbinder sig att följa de villkor som anges. Eventuella ändringar av detta avtal måste göras skriftligen och undertecknas av båda parter.",
      section3: "3. Tvistelösning",
      section3Desc: "Tvist angående tolkning eller tillämpning av detta avtal ska i första hand lösas genom förhandling mellan parterna. Om parterna inte kan enas, ska tvisten avgöras av allmän domstol i Sverige.",
      signatures: "Underskrifter",
      signaturesDesc: "Detta avtal har upprättats i två likalydande exemplar, varav parterna tagit var sitt.",
      placeDate: "Ort och datum",
      signature: "Signatur",
      printName: "Namnförtydligande"
    },
    errors: {
      generation: "Något gick fel vid genereringen. Kontrollera din internetanslutning eller försök igen senare.",
      pdf: "Kunde inte skapa PDF. Försök igen."
    }
  },
  'US': {
    currency: '$',
    price: '20',
    header: {
      slogan: "Law on your terms",
      home: "Home",
      templates: "Templates",
      howItWorks: "How it works",
      support: "Support",
      search: "Search Documents"
    },
    howItWorks: {
      title: "How it works",
      subtitle: "Three simple steps to create a legally binding contract. It takes less than 5 minutes.",
      step1Title: "1. Choose a template",
      step1Desc: "Find the right contract in our extensive library of quality-checked templates.",
      step2Title: "2. Fill in details",
      step2Desc: "Answer a few simple questions via our form. Your information is completely secure.",
      step3Title: "3. Download",
      step3Desc: "Review the finished document and download it as a PDF - ready to be signed."
    },
    hero: {
      badge: "Your global legal service",
      title1: "Legally binding contracts.",
      title2: "Always 100% free.",
      subtitle: "Create bespoke, legally sound documents in minutes. Valid under the laws of {country}.",
      btnFind: "Find your contract",
      btnReadMore: "Read more",
      feature1: "Over 20 templates",
      feature2: "Tailored for {country}",
    },
    templates: {
      title: "Document Library",
      subtitle: "Choose a category to filter among our {count} legal templates.",
      searchPlaceholder: "Search...",
      all: "All",
      popular: "Popular",
      createNow: "Create now",
      notFoundTitle: "No templates found",
      notFoundDesc: "Try a different search term or change category.",
      clearFilter: "Clear filters"
    },
    categories: {
      business: "Business & Corporate",
      private: "Private & Other",
      real_estate: "Housing & Real Estate",
      employment: "Work & HR",
      family: "Family & Relationships"
    },
    form: {
      back: "Back to library",
      quality: "Quality checked",
      tipsTitle: "Tips!",
      tipsDesc: "Fill in the details as accurately as possible. The more detailed you are, the better the legal protection in the document.",
      step1: "Contract Information",
      selectDefault: "Choose an option...",
      cancel: "Cancel",
      submit: "Create Preview",
      generatingTitle: "Generating document",
      generatingDesc: "Your details are being analyzed and we are drafting your {template}..."
    },
    cookie: {
      title: "We use cookies",
      desc: "We use cookies to improve your experience, analyze traffic and show relevant ads via Google AdSense. Read more in our",
      policy: "privacy policy",
      settings: "Settings",
      necessaryOnly: "Necessary only",
      acceptAll: "Accept all",
      settingsTitle: "Cookie settings",
      necessary: "Necessary cookies",
      necessaryDesc: "Required for the website to function. Cannot be disabled.",
      analytics: "Analytics cookies",
      analyticsDesc: "Helps us understand how visitors interact with the website via Google Analytics.",
      advertising: "Advertising cookies",
      advertisingDesc: "Used by Google AdSense to show relevant ads.",
      saveSettings: "Save settings"
    },
    preview: {
      lockedTitle: "Your finished document",
      lockedDesc: "Review your document below. The service is 100% free.",
      btnUnlock: "Download as PDF",
      btnEdit: "Edit details",
      included: "Included",
      inc1: "Legally correct PDF",
      inc2: "Ready for printing and e-signing",
      inc3: "Completely free",
      inc4: "No hidden fees",
      watermark: "Final Document",
      lockedDoc: "Download your document",
      lockedDocDesc: "The document is ready to be downloaded.",
      unlockNow: "Download now"
    },
    checkout: {
      title: "Complete Order",
      secure: "Secure payment via Stripe",
      toPay: "To pay:",
      card: "Card payment (Stripe)",
      swish: "Local payment option (Coming soon)",
      payBtn: "Go to payment",
      terms: "By downloading, you agree to our terms of use."
    },
    success: {
      title: "Your document is ready!",
      desc: "Your document is now ready. We have sent a copy to your email, but you can also download it right now.",
      download: "Download PDF",
      receipt: "Send receipt",
      back: "Go back to homepage"
    },
        footer: {
      supportText: "If you like our project and want it to continue being free, please support us with a gift by scanning the QR code.",
      desc: "We democratize the law and make professional contracts available to everyone.",
      popular: "Popular Documents",
      support: "Customer Service",
      faq: "FAQ",
      contact: "Contact us",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      rights: "© 2024 Veridoca AB. All rights reserved.",
      secure: "Secure payments with Stripe"
    },
    document: {
      executedOn: "This document is executed on {date} in accordance with the applicable laws of {country}.",
      section1: "1. Parties and Agreement Details",
      notSpecified: "Not specified",
      section2: "2. General Terms",
      section2Desc: "The provided details constitute the basis of this agreement. The parties agree to adhere to the specified terms. Any modifications must be made in writing and signed by both parties.",
      section3: "3. Dispute Resolution",
      section3Desc: "Any disputes arising out of or in connection with this agreement shall primarily be resolved through negotiations between the parties. If an agreement cannot be reached, the dispute shall be subject to the exclusive jurisdiction of the courts of {country}.",
      signatures: "Signatures",
      signaturesDesc: "This agreement has been executed in duplicate, with each party receiving one original copy.",
      placeDate: "Place and Date",
      signature: "Signature",
      printName: "Print Name"
    },
    errors: {
      generation: "Something went wrong during generation. Please check your internet connection or try again later.",
      pdf: "Could not create PDF. Please try again."
    }
  },
  'UK': {
    currency: '£',
    price: '15',
    header: {
      slogan: "Law on your terms",
      home: "Home",
      templates: "Templates",
      howItWorks: "How it works",
      support: "Support",
      search: "Search Documents"
    },
    howItWorks: {
      title: "How it works",
      subtitle: "Three simple steps to create a legally binding contract. It takes less than 5 minutes.",
      step1Title: "1. Choose a template",
      step1Desc: "Find the right contract in our extensive library of quality-checked templates.",
      step2Title: "2. Fill in details",
      step2Desc: "Answer a few simple questions via our form. Your information is completely secure.",
      step3Title: "3. Download",
      step3Desc: "Review the finished document and download it as a PDF - ready to be signed."
    },
    hero: {
      badge: "Your global legal service",
      title1: "Legally binding contracts.",
      title2: "Always 100% free.",
      subtitle: "Create bespoke, legally sound documents in minutes. Valid under the laws of {country}.",
      btnFind: "Find your contract",
      btnReadMore: "Read more",
      feature1: "Over 20 templates",
      feature2: "Tailored for {country}",
    },
    templates: {
      title: "Document Library",
      subtitle: "Choose a category to filter among our {count} legal templates.",
      searchPlaceholder: "Search...",
      all: "All",
      popular: "Popular",
      createNow: "Create now",
      notFoundTitle: "No templates found",
      notFoundDesc: "Try a different search term or change category.",
      clearFilter: "Clear filters"
    },
    categories: {
      business: "Business & Corporate",
      private: "Private & Other",
      real_estate: "Housing & Real Estate",
      employment: "Work & HR",
      family: "Family & Relationships"
    },
    form: {
      back: "Back to library",
      quality: "Quality checked",
      tipsTitle: "Tips!",
      tipsDesc: "Fill in the details as accurately as possible. The more detailed you are, the better the legal protection in the document.",
      step1: "Contract Information",
      selectDefault: "Choose an option...",
      cancel: "Cancel",
      submit: "Create Preview",
      generatingTitle: "Generating document",
      generatingDesc: "Your details are being analyzed and we are drafting your {template}..."
    },
    cookie: {
      title: "We use cookies",
      desc: "We use cookies to improve your experience, analyze traffic and show relevant ads via Google AdSense. Read more in our",
      policy: "privacy policy",
      settings: "Settings",
      necessaryOnly: "Necessary only",
      acceptAll: "Accept all",
      settingsTitle: "Cookie settings",
      necessary: "Necessary cookies",
      necessaryDesc: "Required for the website to function. Cannot be disabled.",
      analytics: "Analytics cookies",
      analyticsDesc: "Helps us understand how visitors interact with the website via Google Analytics.",
      advertising: "Advertising cookies",
      advertisingDesc: "Used by Google AdSense to show relevant ads.",
      saveSettings: "Save settings"
    },
    preview: {
      lockedTitle: "Your finished document",
      lockedDesc: "Review your document below. The service is 100% free.",
      btnUnlock: "Download as PDF",
      btnEdit: "Edit details",
      included: "Included",
      inc1: "Legally correct PDF",
      inc2: "Ready for printing and e-signing",
      inc3: "Completely free",
      inc4: "No hidden fees",
      watermark: "Final Document",
      lockedDoc: "Download your document",
      lockedDocDesc: "The document is ready to be downloaded.",
      unlockNow: "Download now"
    },
    checkout: {
      title: "Complete Order",
      secure: "Secure payment via Stripe",
      toPay: "To pay:",
      card: "Card payment (Stripe)",
      swish: "Local payment option (Coming soon)",
      payBtn: "Go to payment",
      terms: "By downloading, you agree to our terms of use."
    },
    success: {
      title: "Your document is ready!",
      desc: "Your document is now ready. We have sent a copy to your email, but you can also download it right now.",
      download: "Download PDF",
      receipt: "Send receipt",
      back: "Go back to homepage"
    },
        footer: {
      supportText: "If you like our project and want it to continue being free, please support us with a gift by scanning the QR code.",
      desc: "We democratize the law and make professional contracts available to everyone.",
      popular: "Popular Documents",
      support: "Customer Service",
      faq: "FAQ",
      contact: "Contact us",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      rights: "© 2024 Veridoca AB. All rights reserved.",
      secure: "Secure payments with Stripe"
    },
    document: {
      executedOn: "This document is executed on {date} in accordance with the applicable laws of {country}.",
      section1: "1. Parties and Agreement Details",
      notSpecified: "Not specified",
      section2: "2. General Terms",
      section2Desc: "The provided details constitute the basis of this agreement. The parties agree to adhere to the specified terms. Any modifications must be made in writing and signed by both parties.",
      section3: "3. Dispute Resolution",
      section3Desc: "Any disputes arising out of or in connection with this agreement shall primarily be resolved through negotiations between the parties. If an agreement cannot be reached, the dispute shall be subject to the exclusive jurisdiction of the courts of {country}.",
      signatures: "Signatures",
      signaturesDesc: "This agreement has been executed in duplicate, with each party receiving one original copy.",
      placeDate: "Place and Date",
      signature: "Signature",
      printName: "Print Name"
    },
    errors: {
      generation: "Something went wrong during generation. Please check your internet connection or try again later.",
      pdf: "Could not create PDF. Please try again."
    }
  },
  'ES': {
    currency: '€',
    price: '20',
    header: {
      slogan: "Derecho en tus términos",
      home: "Inicio",
      templates: "Plantillas",
      howItWorks: "Cómo funciona",
      support: "Soporte",
      search: "Buscar documentos"
    },
    howItWorks: {
      title: "Cómo funciona",
      subtitle: "Tres sencillos pasos para crear un contrato legalmente vinculante. Tarda menos de 5 minutos.",
      step1Title: "1. Elige una plantilla",
      step1Desc: "Encuentra el contrato adecuado en nuestra extensa biblioteca de plantillas verificadas.",
      step2Title: "2. Rellena los detalles",
      step2Desc: "Responde a algunas preguntas sencillas a través de nuestro formulario. Tu información está segura.",
      step3Title: "3. Descargar",
      step3Desc: "Revisa el documento terminado y descárgalo en formato PDF, listo para firmar."
    },
    hero: {
      badge: "Tu servicio legal global",
      title1: "Contratos legalmente vinculantes.",
      title2: "Siempre 100% gratis.",
      subtitle: "Crea documentos a medida y con validez legal en minutos. Válido bajo las leyes de {country}.",
      btnFind: "Encuentra tu contrato",
      btnReadMore: "Leer más",
      feature1: "Más de 20 plantillas",
      feature2: "Adaptado para {country}",
    },
    templates: {
      title: "Biblioteca de documentos",
      subtitle: "Elige una categoría para filtrar entre nuestras {count} plantillas legales.",
      searchPlaceholder: "Buscar...",
      all: "Todo",
      popular: "Popular",
      createNow: "Crea ahora",
      notFoundTitle: "No se encontraron plantillas",
      notFoundDesc: "Intenta con un término de búsqueda diferente o cambia de categoría.",
      clearFilter: "Borrar filtros"
    },
    form: {
      back: "Volver a la biblioteca",
      quality: "Calidad comprobada",
      tipsTitle: "¡Consejos!",
      tipsDesc: "Rellena los detalles con la mayor precisión posible. Cuanto más detallado seas, mejor será la protección legal del documento.",
      step1: "Información del contrato",
      selectDefault: "Elige una opción...",
      cancel: "Cancelar",
      submit: "Crear vista previa",
      generatingTitle: "Generando documento",
      generatingDesc: "Tus datos están siendo analizados y estamos redactando tu {template}..."
    },
    categories: {
      business: "Negocios y Corporativo",
      private: "Privado y Otros",
      real_estate: "Bienes Raíces y Vivienda",
      employment: "Trabajo y RRHH",
      family: "Familia y Relaciones"
    },
    cookie: {
      title: "Usamos cookies",
      desc: "Utilizamos cookies para mejorar su experiencia, analizar el tráfico y mostrar anuncios relevantes a través de Google AdSense. Leer más en nuestra",
      policy: "política de privacidad",
      settings: "Configuración",
      necessaryOnly: "Solo necesarias",
      acceptAll: "Aceptar todas",
      settingsTitle: "Configuración de cookies",
      necessary: "Cookies necesarias",
      necessaryDesc: "Requeridas para que el sitio web funcione. No se pueden desactivar.",
      analytics: "Cookies analíticas",
      analyticsDesc: "Nos ayuda a comprender cómo los visitantes interactúan con el sitio web a través de Google Analytics.",
      advertising: "Cookies publicitarias",
      advertisingDesc: "Utilizadas por Google AdSense para mostrar anuncios relevantes.",
      saveSettings: "Guardar configuración"
    },
    preview: {
      lockedTitle: "Tu documento terminado",
      lockedDesc: "Revisa tu documento a continuación. El servicio es 100% gratuito.",
      btnUnlock: "Descargar en PDF",
      btnEdit: "Editar detalles",
      included: "Incluido",
      inc1: "PDF legalmente correcto",
      inc2: "Listo para imprimir y firmar electrónicamente",
      inc3: "Totalmente gratis",
      inc4: "Sin cargos ocultos",
      watermark: "Documento Final",
      lockedDoc: "Descarga tu documento",
      lockedDocDesc: "El documento está listo para ser descargado.",
      unlockNow: "Descargar ahora"
    },
    checkout: {
      title: "Completar pedido",
      secure: "Pago seguro a través de Stripe",
      toPay: "A pagar:",
      card: "Pago con tarjeta (Stripe)",
      swish: "Opción de pago local (Próximamente)",
      payBtn: "Ir al pago",
      terms: "Al descargar, aceptas nuestros términos de uso."
    },
    success: {
      title: "¡Tu documento está listo!",
      desc: "Tu documento está listo. Hemos enviado una copia a tu correo, pero también puedes descargarlo ahora.",
      download: "Descargar PDF",
      receipt: "Enviar recibo",
      back: "Volver a la página de inicio"
    },
        footer: {
      supportText: "Si te gusta nuestro proyecto y quieres que siga siendo gratuito, apóyanos con un regalo escaneando el código QR.",
      desc: "Democratizamos el derecho y hacemos que los contratos profesionales estén disponibles para todos.",
      popular: "Documentos populares",
      support: "Servicio al cliente",
      faq: "Preguntas frecuentes",
      contact: "Contáctanos",
      terms: "Términos de uso",
      privacy: "Política de privacidad",
      rights: "© 2024 Veridoca AB. Todos los derechos reservados.",
      secure: "Pagos seguros con Stripe"
    },
    document: {
      executedOn: "Este documento se otorga el {date} de acuerdo con las leyes aplicables de {country}.",
      section1: "1. Partes y detalles del acuerdo",
      notSpecified: "No especificado",
      section2: "2. Términos generales",
      section2Desc: "Los detalles proporcionados constituyen la base de este acuerdo. Las partes acuerdan adherirse a los términos especificados. Cualquier modificación debe hacerse por escrito y ser firmada por ambas partes.",
      section3: "3. Resolución de disputas",
      section3Desc: "Cualquier disputa que surja de este acuerdo o en relación con él se resolverá principalmente mediante negociaciones entre las partes. Si no se puede llegar a un acuerdo, la disputa estará sujeta a la jurisdicción exclusiva de los tribunales de {country}.",
      signatures: "Firmas",
      signaturesDesc: "Este acuerdo se ha formalizado por duplicado, recibiendo cada parte un ejemplar original.",
      placeDate: "Lugar y fecha",
      signature: "Firma",
      printName: "Nombre completo"
    },
    errors: {
      generation: "Algo salió mal durante la generación. Por favor, comprueba tu conexión a internet o inténtalo de nuevo más tarde.",
      pdf: "No se pudo crear el PDF. Por favor, inténtalo de nuevo."
    }
  },
  'NO': {
    currency: 'kr',
    price: '200',
    header: {
      slogan: "Jus på dine premisser",
      home: "Hjem",
      templates: "Maler",
      howItWorks: "Slik fungerer det",
      support: "Support",
      search: "Søk Dokument"
    },
    howItWorks: {
      title: "Slik fungerer det",
      subtitle: "Tre enkle trinn for å lage en juridisk bindende avtale. Det tar under 5 minutter.",
      step1Title: "1. Velg en mal",
      step1Desc: "Finn riktig avtale i vårt omfattende bibliotek med kvalitetssikrede maler.",
      step2Title: "2. Fyll inn detaljer",
      step2Desc: "Svar på noen enkle spørsmål i skjemaet vårt. Informasjonen din er helt sikker.",
      step3Title: "3. Last ned",
      step3Desc: "Se over det ferdige dokumentet og last det ned som PDF - klart til signering."
    },
    hero: {
      badge: "Din globale juridiske tjeneste",
      title1: "Rettsikre avtaler.",
      title2: "Alltid 100% gratis.",
      subtitle: "Lag skreddersydde, juridisk korrekte dokumenter på noen få minutter. Gyldige ifølge lovgivningen i {country}.",
      btnFind: "Finn din avtale",
      btnReadMore: "Les mer",
      feature1: "Over 20 maler",
      feature2: "Tilpasset for {country}",
    },
    templates: {
      title: "Dokumentbibliotek",
      subtitle: "Velg kategori for å filtrere blant våre {count} juridiske maler.",
      searchPlaceholder: "Søk...",
      all: "Alle",
      popular: "Populær",
      createNow: "Lag nå",
      notFoundTitle: "Ingen maler funnet",
      notFoundDesc: "Prøv et annet søkeord eller bytt kategori.",
      clearFilter: "Tøm filter"
    },
    categories: {
      business: "Næringsliv & Selskap",
      private: "Privat & Annet",
      real_estate: "Eiendom & Bolig",
      employment: "Arbeid & HR",
      family: "Familie & Relasjoner"
    },
    form: {
      back: "Tilbake til biblioteket",
      quality: "Kvalitetssikret",
      tipsTitle: "Tips!",
      tipsDesc: "Fyll ut opplysningene så nøyaktig som mulig. Jo mer detaljert du er, desto bedre blir den juridiske beskyttelsen i dokumentet.",
      step1: "Avtaleinformasjon",
      selectDefault: "Velg et alternativ...",
      cancel: "Avbryt",
      submit: "Lag Forhåndsvisning",
      generatingTitle: "Genererer dokument",
      generatingDesc: "Opplysningene dine analyseres og vi formulerer din {template}..."
    },
    cookie: {
      title: "Vi bruker informasjonskapsler (cookies)",
      desc: "Vi bruker informasjonskapsler for å forbedre opplevelsen din, analysere trafikk og vise relevante annonser via Google AdSense. Les mer i vår",
      policy: "personvernerklæring",
      settings: "Innstillinger",
      necessaryOnly: "Kun nødvendige",
      acceptAll: "Godta alle",
      settingsTitle: "Informasjonskapsler innstillinger",
      necessary: "Nødvendige informasjonskapsler",
      necessaryDesc: "Kreves for at nettstedet skal fungere. Kan ikke deaktiveres.",
      analytics: "Analytiske informasjonskapsler",
      analyticsDesc: "Hjelper oss med å forstå hvordan besøkende samhandler med nettstedet via Google Analytics.",
      advertising: "Annonse informasjonskapsler",
      advertisingDesc: "Brukes av Google AdSense for å vise relevante annonser.",
      saveSettings: "Lagre innstillinger"
    },
    preview: {
      lockedTitle: "Ditt ferdige dokument",
      lockedDesc: "Gå gjennom dokumentet ditt nedenfor. Tjenesten er 100% gratis.",
      btnUnlock: "Last ned som PDF",
      btnEdit: "Rediger opplysninger",
      included: "Dette er inkludert",
      inc1: "Juridisk korrekt PDF",
      inc2: "Klar for utskrift og e-signering",
      inc3: "Helt gratis",
      inc4: "Ingen skjulte avgifter",
      watermark: "Ferdig dokument",
      lockedDoc: "Last ned dokumentet",
      lockedDocDesc: "Dokumentet er klart til å lastes ned.",
      unlockNow: "Last ned nå"
    },
    checkout: {
      title: "Fullfør bestilling",
      secure: "Sikker betaling via Stripe",
      toPay: "Å betale:",
      card: "Kortbetaling (Stripe)",
      swish: "Lokalt betalingsalternativ (Kommer snart)",
      payBtn: "Gå til betaling",
      terms: "Ved å laste ned godtar du våre brukervilkår."
    },
    success: {
      title: "Dokumentet ditt er klart!",
      desc: "Ditt dokument er nå klart. Vi har sendt en kopi til e-posten din, men du kan også laste det ned direkte.",
      download: "Last ned PDF",
      receipt: "Send kvittering",
      back: "Gå tilbake til startsiden"
    },
    footer: {
      supportText: "Hvis du liker prosjektet vårt og vil at det skal fortsette å være gratis, støtt oss gjerne med en gave ved å skanne QR-koden.",
      desc: "Vi demokratiserer jussen og gjør profesjonelle avtaler tilgjengelige for alle.",
      popular: "Populære Dokumenter",
      support: "Kundeservice",
      faq: "Vanlige spørsmål",
      contact: "Kontakt oss",
      terms: "Brukervilkår",
      privacy: "Personvernserklæring",
      rights: "© 2024 Veridoca AB. Med enerett.",
      secure: "Sikre betalinger med Stripe"
    },
    document: {
      executedOn: "Dette dokumentet er opprettet den {date} i samsvar med gjeldende lover i {country}.",
      section1: "1. Parter og avtaledetaljer",
      notSpecified: "Ikke spesifisert",
      section2: "2. Generelle vilkår",
      section2Desc: "De oppgitte detaljene utgjør grunnlaget for denne avtalen. Partene er enige om å overholde de spesifiserte vilkårene. Eventuelle endringer må gjøres skriftlig og undertegnes av begge parter.",
      section3: "3. Tvisteløsning",
      section3Desc: "Eventuelle tvister som måtte oppstå i forbindelse med denne avtalen skal i første omgang løses gjennom forhandlinger mellom partene. Dersom man ikke kommer til enighet, skal tvisten bringes inn for domstolene i {country}.",
      signatures: "Signaturer",
      signaturesDesc: "Denne avtalen er opprettet i to eksemplarer, hvorav hver part har fått sitt eksemplar.",
      placeDate: "Sted og dato",
      signature: "Signatur",
      printName: "Navn med blokkbokstaver"
    },
    errors: {
      generation: "Noe gikk galt under genereringen. Vennligst sjekk internettforbindelsen din eller prøv igjen senere.",
      pdf: "Kunne ikke opprette PDF. Vennligst prøv igjen."
    }
  },
  'DK': {
    currency: 'kr',
    price: '150',
    header: {
      slogan: "Jura på dine vilkår",
      home: "Hjem",
      templates: "Skabeloner",
      howItWorks: "Sådan fungerer det",
      support: "Support",
      search: "Søg Dokument"
    },
    howItWorks: {
      title: "Sådan fungerer det",
      subtitle: "Tre enkle trin til at oprette en juridisk bindende aftale. Det tager under 5 minutter.",
      step1Title: "1. Vælg en skabelon",
      step1Desc: "Find den rigtige aftale i vores store bibliotek af kvalitetssikrede skabeloner.",
      step2Title: "2. Udfyld oplysninger",
      step2Desc: "Besvar et par enkle spørgsmål i vores formular. Dine oplysninger er helt sikre.",
      step3Title: "3. Download",
      step3Desc: "Gennemgå det færdige dokument og download det som PDF - klar til at blive underskrevet."
    },
    hero: {
      badge: "Din globale juridiske tjeneste",
      title1: "Retssikre aftaler.",
      title2: "Altid 100% gratis.",
      subtitle: "Opret skræddersyede, juridisk korrekte dokumenter på få minutter. Gyldige ifølge lovgivningen i {country}.",
      btnFind: "Find din aftale",
      btnReadMore: "Læs mere",
      feature1: "Over 20 skabeloner",
      feature2: "Tilpasset til {country}",
    },
    templates: {
      title: "Dokumentbibliotek",
      subtitle: "Vælg kategori for at filtrere blandt vores {count} juridiske skabeloner.",
      searchPlaceholder: "Søg...",
      all: "Alle",
      popular: "Populær",
      createNow: "Opret nu",
      notFoundTitle: "Ingen skabeloner fundet",
      notFoundDesc: "Prøv et andet søgeord eller skift kategori.",
      clearFilter: "Ryd filter"
    },
    categories: {
      business: "Erhverv & Selskab",
      private: "Privat & Andet",
      real_estate: "Ejendom & Bolig",
      employment: "Arbejde & HR",
      family: "Familie & Relationer"
    },
    form: {
      back: "Tilbage til biblioteket",
      quality: "Kvalitetssikret",
      tipsTitle: "Tips!",
      tipsDesc: "Udfyld oplysningerne så nøjagtigt som muligt. Jo mere detaljeret du er, desto bedre bliver den juridiske beskyttelse i dokumentet.",
      step1: "Aftaleinformation",
      selectDefault: "Vælg et alternativ...",
      cancel: "Annuller",
      submit: "Opret Forhåndsvisning",
      generatingTitle: "Genererer dokument",
      generatingDesc: "Dine oplysninger analyseres, og vi formulerer din {template}..."
    },
    cookie: {
      title: "Vi bruger cookies",
      desc: "Vi bruger cookies til at forbedre din oplevelse, analysere trafik og vise relevante annoncer via Google AdSense. Læs mere i vores",
      policy: "privatlivspolitik",
      settings: "Indstillinger",
      necessaryOnly: "Kun nødvendige",
      acceptAll: "Accepter alle",
      settingsTitle: "Cookie indstillinger",
      necessary: "Nødvendige cookies",
      necessaryDesc: "Kræves for at hjemmesiden fungerer. Kan ikke deaktiveres.",
      analytics: "Analytiske cookies",
      analyticsDesc: "Hjælper os med at forstå, hvordan besøgende interagerer med hjemmesiden via Google Analytics.",
      advertising: "Annonce cookies",
      advertisingDesc: "Bruges af Google AdSense til at vise relevante annoncer.",
      saveSettings: "Gem indstillinger"
    },
    preview: {
      lockedTitle: "Dit færdige dokument",
      lockedDesc: "Gennemgå dit dokument nedenfor. Tjenesten er 100% gratis.",
      btnUnlock: "Download som PDF",
      btnEdit: "Rediger oplysninger",
      included: "Dette er inkluderet",
      inc1: "Juridisk korrekt PDF",
      inc2: "Klar til udskrift og e-signering",
      inc3: "Helt gratis",
      inc4: "Ingen skjulte gebyrer",
      watermark: "Færdigt dokument",
      lockedDoc: "Download dit dokument",
      lockedDocDesc: "Dokumentet er klar til at blive downloadet.",
      unlockNow: "Download nu"
    },
    checkout: {
      title: "Gennemfør bestilling",
      secure: "Sikker betaling via Stripe",
      toPay: "At betale:",
      card: "Kortbetaling (Stripe)",
      swish: "Lokalt betalingsalternativ (Kommer snart)",
      payBtn: "Gå til betaling",
      terms: "Ved at downloade accepterer du vores brugsbetingelser."
    },
    success: {
      title: "Dit dokument er klar!",
      desc: "Dit dokument er nu klar. Vi har sendt en kopi til din e-mail, men du kan også downloade det direkte.",
      download: "Download PDF",
      receipt: "Send kvittering",
      back: "Gå tilbage til startsiden"
    },
    footer: {
      supportText: "Hvis du kan lide vores projekt og ønsker, at det fortsat skal være gratis, så støt os gerne med en gave ved at scanne QR-koden.",
      desc: "Vi demokratiserer juraen og gør professionelle aftaler tilgængelige for alle.",
      popular: "Populære Dokumenter",
      support: "Kundeservice",
      faq: "Ofte stillede spørgsmål",
      contact: "Kontakt os",
      terms: "Brugsbetingelser",
      privacy: "Privatlivspolitik",
      rights: "© 2024 Veridoca AB. Alle rettigheder forbeholdes.",
      secure: "Sikre betalinger med Stripe"
    },
    document: {
      executedOn: "Dette dokument er udfærdiget den {date} i overensstemmelse med gældende lovgivning i {country}.",
      section1: "1. Parter og aftaledetaljer",
      notSpecified: "Ikke angivet",
      section2: "2. Generelle vilkår",
      section2Desc: "De angivne detaljer udgør grundlaget for denne aftale. Parterne er enige om at overholde de specificerede vilkår. Eventuelle ændringer skal ske skriftligt og underskrives af begge parter.",
      section3: "3. Tvistbilæggelse",
      section3Desc: "Enhver tvist, der måtte opstå i forbindelse med denne aftale, skal primært løses gennem forhandlinger mellem parterne. Hvis der ikke kan opnås enighed, skal tvisten afgøres ved domstolene i {country}.",
      signatures: "Underskrifter",
      signaturesDesc: "Denne aftale er udfærdiget i to enslydende eksemplarer, hvoraf parterne har fået hver sit.",
      placeDate: "Sted og dato",
      signature: "Underskrift",
      printName: "Navn med blokbogstaver"
    },
    errors: {
      generation: "Noget gik galt under genereringen. Kontroller venligst din internetforbindelse eller prøv igen senere.",
      pdf: "Kunne ikke oprette PDF. Prøv venligst igen."
    }
  },
  'DE': {
    currency: '€',
    price: '20',
    header: {
      slogan: "Recht zu Ihren Bedingungen",
      home: "Startseite",
      templates: "Vorlagen",
      howItWorks: "Wie es funktioniert",
      support: "Support",
      search: "Dokument suchen"
    },
    howItWorks: {
      title: "Wie es funktioniert",
      subtitle: "Drei einfache Schritte, um einen rechtsverbindlichen Vertrag zu erstellen. Es dauert weniger als 5 Minuten.",
      step1Title: "1. Vorlage wählen",
      step1Desc: "Finden Sie den richtigen Vertrag in unserer umfangreichen Bibliothek qualitätsgeprüfter Vorlagen.",
      step2Title: "2. Details ausfüllen",
      step2Desc: "Beantworten Sie einige einfache Fragen über unser Formular. Ihre Daten sind absolut sicher.",
      step3Title: "3. Herunterladen",
      step3Desc: "Überprüfen Sie das fertige Dokument und laden Sie es als PDF herunter - bereit zur Unterschrift."
    },
    hero: {
      badge: "Ihr globaler Rechtsdienst",
      title1: "Rechtssichere Verträge.",
      title2: "Immer 100% kostenlos.",
      subtitle: "Erstellen Sie in wenigen Minuten maßgeschneiderte, rechtlich einwandfreie Dokumente. Gültig nach dem Recht von {country}.",
      btnFind: "Finden Sie Ihren Vertrag",
      btnReadMore: "Mehr lesen",
      feature1: "Über 20 Vorlagen",
      feature2: "Angepasst für {country}",
    },
    templates: {
      title: "Dokumentbibliothek",
      subtitle: "Wählen Sie eine Kategorie, um in unseren {count} Rechtsvorlagen zu filtern.",
      searchPlaceholder: "Suche...",
      all: "Alle",
      popular: "Beliebt",
      createNow: "Jetzt erstellen",
      notFoundTitle: "Keine Vorlagen gefunden",
      notFoundDesc: "Versuchen Sie einen anderen Suchbegriff oder wechseln Sie die Kategorie.",
      clearFilter: "Filter löschen"
    },
    categories: {
      business: "Wirtschaft & Unternehmen",
      private: "Privat & Sonstiges",
      real_estate: "Immobilien & Wohnen",
      employment: "Arbeit & HR",
      family: "Familie & Beziehungen"
    },
    form: {
      back: "Zurück zur Bibliothek",
      quality: "Qualitätsgeprüft",
      tipsTitle: "Tipps!",
      tipsDesc: "Füllen Sie die Details so genau wie möglich aus. Je detaillierter Sie sind, desto besser ist der rechtliche Schutz im Dokument.",
      step1: "Vertragsinformationen",
      selectDefault: "Wählen Sie eine Option...",
      cancel: "Abbrechen",
      submit: "Vorschau erstellen",
      generatingTitle: "Dokument wird erstellt",
      generatingDesc: "Ihre Unterlagen werden analysiert und wir entwerfen Ihren {template}..."
    },
    cookie: {
      title: "Wir verwenden Cookies",
      desc: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern, Datenverkehr zu analysieren und relevante Anzeigen über Google AdSense bereitzustellen. Lesen Sie mehr in unserer",
      policy: "Datenschutzrichtlinie",
      settings: "Einstellungen",
      necessaryOnly: "Nur notwendige",
      acceptAll: "Alle akzeptieren",
      settingsTitle: "Cookie-Einstellungen",
      necessary: "Notwendige Cookies",
      necessaryDesc: "Erforderlich für das Funktionieren der Website. Kann nicht deaktiviert werden.",
      analytics: "Analyse-Cookies",
      analyticsDesc: "Hilft uns zu verstehen, wie Besucher mit der Website über Google Analytics interagieren.",
      advertising: "Werbe-Cookies",
      advertisingDesc: "Wird von Google AdSense verwendet, um relevante Anzeigen bereitzustellen.",
      saveSettings: "Einstellungen speichern"
    },
    preview: {
      lockedTitle: "Ihr fertiges Dokument",
      lockedDesc: "Überprüfen Sie Ihr Dokument unten. Der Service ist 100% kostenlos.",
      btnUnlock: "Als PDF herunterladen",
      btnEdit: "Details bearbeiten",
      included: "Beinhaltet",
      inc1: "Rechtlich korrektes PDF",
      inc2: "Bereit zum Drucken und E-Signieren",
      inc3: "Völlig kostenlos",
      inc4: "Keine versteckten Gebühren",
      watermark: "Endgültiges Dokument",
      lockedDoc: "Laden Sie Ihr Dokument herunter",
      lockedDocDesc: "Das Dokument ist bereit zum Herunterladen.",
      unlockNow: "Jetzt herunterladen"
    },
    checkout: {
      title: "Bestellung abschließen",
      secure: "Sichere Zahlung über Stripe",
      toPay: "Zu zahlen:",
      card: "Kartenzahlung (Stripe)",
      swish: "Lokale Zahlungsoption (Demnächst)",
      payBtn: "Zur Kasse gehen",
      terms: "Mit dem Herunterladen akzeptieren Sie unsere Nutzungsbedingungen."
    },
    success: {
      title: "Ihr Dokument ist fertig!",
      desc: "Ihr Dokument ist nun fertig. Wir haben eine Kopie an Ihre E-Mail gesendet, aber Sie können es auch direkt herunterladen.",
      download: "PDF Herunterladen",
      receipt: "Quittung senden",
      back: "Zurück zur Startseite"
    },
        footer: {
      supportText: "Wenn Ihnen unser Projekt gefällt und Sie möchten, dass es weiterhin kostenlos bleibt, unterstützen Sie uns bitte mit einem Geschenk, indem Sie den QR-Code scannen.",
      desc: "Wir demokratisieren das Recht und machen professionelle Verträge für jeden zugänglich.",
      popular: "Beliebte Dokumente",
      support: "Kundenservice",
      faq: "Häufig gestellte Fragen",
      contact: "Kontaktiere uns",
      terms: "Nutzungsbedingungen",
      privacy: "Datenschutzrichtlinie",
      rights: "© 2024 Veridoca AB. Alle Rechte vorbehalten.",
      secure: "Sichere Zahlungen mit Stripe"
    },
    document: {
      executedOn: "Dieses Dokument wurde am {date} in Übereinstimmung mit den geltenden Gesetzen von {country} erstellt.",
      section1: "1. Parteien und Vertragsdetails",
      notSpecified: "Nicht angegeben",
      section2: "2. Allgemeine Geschäftsbedingungen",
      section2Desc: "Die gemachten Angaben bilden die Grundlage dieser Vereinbarung. Die Parteien verpflichten sich, die festgelegten Bedingungen einzuhalten. Änderungen dieser Vereinbarung bedürfen der Schriftform und müssen von beiden Parteien unterzeichnet werden.",
      section3: "3. Streitbeilegung",
      section3Desc: "Alle Streitigkeiten aus oder im Zusammenhang mit dieser Vereinbarung werden in erster Linie durch Verhandlungen zwischen den Parteien beigelegt. Kann keine Einigung erzielt werden, unterliegt der Streit der ausschluslichen Zuständigkeit der Gerichte von {country}.",
      signatures: "Unterschriften",
      signaturesDesc: "Diese Vereinbarung wurde in zweifacher Ausfertigung erstellt, wobei jede Partei ein Originalexemplar erhält.",
      placeDate: "Ort und Datum",
      signature: "Unterschrift",
      printName: "Name in Druckbuchstaben"
    },
    errors: {
      generation: "Bei der Generierung ist ein Fehler aufgetreten. Bitte überprüfen Sie Ihre Internetverbindung oder versuchen Sie es später noch einmal.",
      pdf: "PDF konnte nicht erstellt werden. Bitte versuchen Sie es erneut."
    }
  },
  'FR': {
    currency: '€',
    price: '20',
    header: {
      slogan: "Le droit à vos conditions",
      home: "Accueil",
      templates: "Modèles",
      howItWorks: "Comment ça marche",
      support: "Support",
      search: "Chercher un document"
    },
    howItWorks: {
      title: "Comment ça marche",
      subtitle: "Trois étapes simples pour créer un contrat juridiquement contraignant. Cela prend moins de 5 minutes.",
      step1Title: "1. Choisissez un modèle",
      step1Desc: "Trouvez le bon contrat dans notre vaste bibliothèque de modèles vérifiés.",
      step2Title: "2. Remplissez les détails",
      step2Desc: "Répondez à quelques questions simples via notre formulaire. Vos informations sont sécurisées.",
      step3Title: "3. Télécharger",
      step3Desc: "Passez en revue le document terminé et téléchargez-le au format PDF, prêt à être signé."
    },
    hero: {
      badge: "Votre service juridique mondial",
      title1: "Contrats juridiquement contraignants.",
      title2: "Toujours 100% gratuit.",
      subtitle: "Créez des documents sur mesure et juridiquement valables en quelques minutes. Valables selon la législation de {country}.",
      btnFind: "Trouvez votre contrat",
      btnReadMore: "En savoir plus",
      feature1: "Plus de 20 modèles",
      feature2: "Adapté pour {country}",
    },
    templates: {
      title: "Bibliothèque de documents",
      subtitle: "Choisissez une catégorie pour filtrer parmi nos {count} modèles juridiques.",
      searchPlaceholder: "Chercher...",
      all: "Tout",
      popular: "Populaire",
      createNow: "Créer maintenant",
      notFoundTitle: "Aucun modèle trouvé",
      notFoundDesc: "Essayez un autre terme de recherche ou changez de catégorie.",
      clearFilter: "Effacer les filtres"
    },
    categories: {
      business: "Affaires & Entreprise",
      private: "Privé & Autre",
      real_estate: "Immobilier & Logement",
      employment: "Travail & RH",
      family: "Famille & Relations"
    },
    form: {
      back: "Retour à la bibliothèque",
      quality: "Qualité vérifiée",
      tipsTitle: "Conseils !",
      tipsDesc: "Remplissez les détails aussi précisément que possible. Plus vous êtes détaillé, meilleure sera la protection juridique du document.",
      step1: "Informations sur le contrat",
      selectDefault: "Choisissez une option...",
      cancel: "Annuler",
      submit: "Créer l'aperçu",
      generatingTitle: "Génération du document",
      generatingDesc: "Vos détails sont en cours d'analyse et nous rédigeons votre {template}..."
    },
    cookie: {
      title: "Nous utilisons des cookies",
      desc: "Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et diffuser des annonces pertinentes via Google AdSense. En savoir plus dans notre",
      policy: "politique de confidentialité",
      settings: "Paramètres",
      necessaryOnly: "Nécessaires uniquement",
      acceptAll: "Tout accepter",
      settingsTitle: "Paramètres des cookies",
      necessary: "Cookies nécessaires",
      necessaryDesc: "Requis pour le fonctionnement du site Web. Ne peuvent pas être désactivés.",
      analytics: "Cookies d'analyse",
      analyticsDesc: "Nous aide à comprendre comment les visiteurs interagissent avec le site Web via Google Analytics.",
      advertising: "Cookies publicitaires",
      advertisingDesc: "Utilisés par Google AdSense pour diffuser des annonces pertinentes.",
      saveSettings: "Enregistrer les paramètres"
    },
    preview: {
      lockedTitle: "Votre document terminé",
      lockedDesc: "Revoyez votre document ci-dessous. Le service est 100% gratuit.",
      btnUnlock: "Télécharger en PDF",
      btnEdit: "Modifier les détails",
      included: "Inclus",
      inc1: "PDF juridiquement correct",
      inc2: "Prêt pour l'impression et la signature électronique",
      inc3: "Totalement gratuit",
      inc4: "Aucun frais caché",
      watermark: "Document final",
      lockedDoc: "Téléchargez votre document",
      lockedDocDesc: "Le document est prêt à être téléchargé.",
      unlockNow: "Télécharger maintenant"
    },
    checkout: {
      title: "Finaliser la commande",
      secure: "Paiement sécurisé via Stripe",
      toPay: "À payer :",
      card: "Paiement par carte (Stripe)",
      swish: "Option de paiement local (Bientôt disponible)",
      payBtn: "Aller au paiement",
      terms: "En téléchargeant, vous acceptez nos conditions d'utilisation."
    },
    success: {
      title: "Votre document est prêt !",
      desc: "Votre document est maintenant prêt. Nous avons envoyé une copie à votre adresse email, mais vous pouvez aussi le télécharger directement.",
      download: "Télécharger le PDF",
      receipt: "Envoyer le reçu",
      back: "Retour à la page d'accueil"
    },
        footer: {
      supportText: "Si vous aimez notre projet et souhaitez qu'il reste gratuit, soutenez-nous avec un don en scannant le code QR.",
      desc: "Nous démocratisons le droit et mettons des contrats professionnels à la disposition de tous.",
      popular: "Documents populaires",
      support: "Service client",
      faq: "FAQ",
      contact: "Contactez-nous",
      terms: "Conditions d'utilisation",
      privacy: "Politique de confidentialité",
      rights: "© 2024 Veridoca AB. Tous droits réservés.",
      secure: "Paiements sécurisés avec Stripe"
    },
    document: {
      executedOn: "Ce document est établi le {date} conformément aux lois applicables de {country}.",
      section1: "1. Parties et détails de l'accord",
      notSpecified: "Non spécifié",
      section2: "2. Conditions générales",
      section2Desc: "Les détails fournis constituent la base de cet accord. Les parties conviennent de respecter les conditions spécifiées. Toute modification doit être faite par écrit et signée par les deux parties.",
      section3: "3. Règlement des litiges",
      section3Desc: "Tout litige découlant de cet accord ou en relation avec celui-ci sera principalement résolu par des négociations entre les parties. Si aucun accord ne peut être trouvé, le litige sera soumis à la juridiction exclusive des tribunaux de {country}.",
      signatures: "Signatures",
      signaturesDesc: "Cet accord a été établi en deux exemplaires, chaque partie recevant un exemplaire original.",
      placeDate: "Lieu et date",
      signature: "Signature",
      printName: "Nom en lettres capitales"
    },
    errors: {
      generation: "Une erreur est survenue lors de la génération. Veuillez vérifier votre connexion internet ou réessayer plus tard.",
      pdf: "Impossible de créer le PDF. Veuillez réessayer."
    }
  },
  'NL': {
    currency: '€',
    price: '20',
    header: {
      slogan: "Recht op jouw voorwaarden",
      home: "Home",
      templates: "Sjablonen",
      howItWorks: "Hoe het werkt",
      support: "Support",
      search: "Zoek documenten"
    },
    howItWorks: {
      title: "Hoe het werkt",
      subtitle: "Drie eenvoudige stappen om een juridisch bindende overeenkomst te maken. Het duurt minder dan 5 minuten.",
      step1Title: "1. Kies een sjabloon",
      step1Desc: "Vind het juiste contract in onze uitgebreide bibliotheek met kwaliteitsgecontroleerde sjablonen.",
      step2Title: "2. Vul details in",
      step2Desc: "Beantwoord een paar eenvoudige vragen via ons formulier. Je gegevens zijn volledig veilig.",
      step3Title: "3. Download",
      step3Desc: "Controleer het voltooide document en download het als PDF - klaar om ondertekend te worden."
    },
    hero: {
      badge: "Jouw wereldwijde juridische dienst",
      title1: "Juridisch bindende contracten.",
      title2: "Altijd 100% gratis.",
      subtitle: "Maak binnen enkele minuten op maat gemaakte, juridisch correcte documenten. Geldig onder de wetgeving van {country}.",
      btnFind: "Vind je contract",
      btnReadMore: "Lees meer",
      feature1: "Meer dan 20 sjablonen",
      feature2: "Op maat gemaakt voor {country}",
    },
    templates: {
      title: "Documentenbibliotheek",
      subtitle: "Kies een categorie om te filteren tussen onze {count} juridische sjablonen.",
      searchPlaceholder: "Zoeken...",
      all: "Alle",
      popular: "Populair",
      createNow: "Maak nu",
      notFoundTitle: "Geen sjablonen gevonden",
      notFoundDesc: "Probeer een ander trefwoord of verander van categorie.",
      clearFilter: "Filters wissen"
    },
    categories: {
      business: "Zakelijk & Bedrijf",
      private: "Privé & Overig",
      real_estate: "Wonen & Vastgoed",
      employment: "Werk & HR",
      family: "Familie & Relaties"
    },
    form: {
      back: "Terug naar bibliotheek",
      quality: "Kwaliteit gecontroleerd",
      tipsTitle: "Tips!",
      tipsDesc: "Vul de details zo nauwkeurig mogelijk in. Hoe gedetailleerder je bent, hoe beter de juridische bescherming in het document.",
      step1: "Contractinformatie",
      selectDefault: "Kies een optie...",
      cancel: "Annuleren",
      submit: "Maak voorbeeld",
      generatingTitle: "Document genereren",
      generatingDesc: "Je gegevens worden geanalyseerd en we stellen je {template} op..."
    },
    cookie: {
      title: "Wij gebruiken cookies",
      desc: "Wij gebruiken cookies om uw ervaring te verbeteren, het verkeer te analyseren en relevante advertenties te tonen via Google AdSense. Lees meer in onze",
      policy: "privacybeleid",
      settings: "Instellingen",
      necessaryOnly: "Alleen noodzakelijk",
      acceptAll: "Alles accepteren",
      settingsTitle: "Cookie-instellingen",
      necessary: "Noodzakelijke cookies",
      necessaryDesc: "Vereist voor het functioneren van de website. Kan niet worden uitgeschakeld.",
      analytics: "Analytische cookies",
      analyticsDesc: "Helpt ons begrijpen hoe bezoekers omgaan met de website via Google Analytics.",
      advertising: "Advertentiecookies",
      advertisingDesc: "Gebruikt door Google AdSense om relevante advertenties te tonen.",
      saveSettings: "Instellingen opslaan"
    },
    preview: {
      lockedTitle: "Je voltooide document",
      lockedDesc: "Controleer je document hieronder. De service is 100% gratis.",
      btnUnlock: "Downloaden als PDF",
      btnEdit: "Details bewerken",
      included: "Inbegrepen",
      inc1: "Juridisch correcte PDF",
      inc2: "Klaar voor printen en e-signing",
      inc3: "Volledig gratis",
      inc4: "Geen verborgen kosten",
      watermark: "Einddocument",
      lockedDoc: "Download je document",
      lockedDocDesc: "Het document is klaar om gedownload te worden.",
      unlockNow: "Nu downloaden"
    },
    checkout: {
      title: "Bestelling afronden",
      secure: "Veilige betaling via Stripe",
      toPay: "Te betalen:",
      card: "Kaartbetaling (Stripe)",
      swish: "Lokale betaaloptie (Binnenkort beschikbaar)",
      payBtn: "Ga naar betaling",
      terms: "Door te downloaden ga je akkoord met onze gebruiksvoorwaarden."
    },
    success: {
      title: "Je document is klaar!",
      desc: "Je document is nu klaar. We hebben een kopie naar je e-mail gestuurd, maar je kunt het ook direct downloaden.",
      download: "Download PDF",
      receipt: "Stuur kwitantie",
      back: "Ga terug naar de startpagina"
    },
    footer: {
      supportText: "Als je ons project leuk vindt en wilt dat het gratis blijft, steun ons dan met een gift door de QR-code te scannen.",
      desc: "Wij democratiseren het recht en maken professionele contracten voor iedereen toegankelijk.",
      popular: "Populaire documenten",
      support: "Klantenservice",
      faq: "Veelgestelde vragen",
      contact: "Neem contact op",
      terms: "Gebruiksvoorwaarden",
      privacy: "Privacybeleid",
      rights: "© 2024 Veridoca AB. Alle rechten voorbehouden.",
      secure: "Veilige betalingen met Stripe"
    },
    document: {
      executedOn: "Dit document is opgesteld op {date} in overeenstemming met de toepasselijke wetgeving van {country}.",
      section1: "1. Partijen en details van de overeenkomst",
      notSpecified: "Niet gespecificeerd",
      section2: "2. Algemene voorwaarden",
      section2Desc: "De verstrekte gegevens vormen de basis van deze overeenkomst. De partijen komen overeen zich aan de gespecificeerde voorwaarden te houden. Eventuele wijzigingen moeten schriftelijk worden vastgelegd en door beide partijen worden ondertekend.",
      section3: "3. Geschillenbeslechting",
      section3Desc: "Eventuele geschillen die voortvloeien uit of verband houden met deze overeenkomst zullen in de eerste plaats worden opgelost door middel van onderhandelingen tussen de partijen. Indien geen overeenstemming kan worden bereikt, zal het geschil worden voorgelegd aan de exclusieve bevoegdheid van de rechtbanken van {country}.",
      signatures: "Handtekeningen",
      signaturesDesc: "Deze overeenkomst is opgesteld in tweevoud, waarbij elke partij één origineel exemplaar ontvangt.",
      placeDate: "Plaats en datum",
      signature: "Handtekening",
      printName: "Naam in blokletters"
    },
    errors: {
      generation: "Er is iets misgegaan tijdens het genereren. Controleer je internetverbinding of probeer het later opnieuw.",
      pdf: "Kon PDF niet maken. Probeer het opnieuw."
    }
  }
};

// End of file update for Adsense verification

export const t = (countryId: string, key: string, params?: Record<string, string | number>) => {
  const dict = translations[countryId] || translations['SE'];
  const keys = key.split('.');
  let value = dict;
  
  for (const k of keys) {
    if (value === undefined) break;
    value = value[k];
  }
  
  // Fallback to UK (English) if string is missing in target language
  if (value === undefined) {
    let fallback = translations['UK'];
    for (const k of keys) {
      if (fallback === undefined) break;
      fallback = fallback[k];
    }
    value = fallback;
  }
  
  // Final fallback
  if (typeof value !== 'string') return key;

  // Replace params
  if (params) {
    return Object.entries(params).reduce((str, [k, v]) => str.replace(new RegExp(`{${k}}`, 'g'), String(v)), value as string);
  }
  
  return value as string;
};
