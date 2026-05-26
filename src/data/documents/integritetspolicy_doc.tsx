import { DocumentTemplate } from '../templates';

export const integritetspolicy_doc: DocumentTemplate = {
  title: 'Integritetspolicy (GDPR)',
  category: 'Företag & Affärer',
  slugs: {
    'sv': 'integritetspolicy-gdpr',
    'en': 'privacy-policy-gdpr',
    'us': 'privacy-policy',
    'uk': 'privacy-policy',
    'de': 'datenschutzerklaerung',
    'fr': 'politique-confidentialite',
    'es': 'politica-privacidad'
},
  description: 'Generera en GDPR-anpassad integritetspolicy för din webbplats eller app. Obligatorisk för alla som samlar in personuppgifter.',
  author: { name: 'Veridoca Legal Team', role: 'Legal Experts at Digisoul Media' },
  seoArticle: (
    <div>
      <h2>Vad är en integritetspolicy och varför behöver du en?</h2>
      <p>En integritetspolicy är ett juridiskt dokument som informerar besökare och kunder om vilka personuppgifter du samlar in, varför du samlar in dem, hur du behandlar dem och vilka rättigheter de registrerade har. Enligt <strong>GDPR</strong> är en integritetspolicy obligatorisk för alla verksamheter som behandlar personuppgifter om EU-medborgare.</p>

      <h3>Vem behöver en integritetspolicy?</h3>
      <p>Du behöver en integritetspolicy om din webbplats eller tjänst har ett kontaktformulär, säljer produkter online, har ett nyhetsbrev, använder cookies (Google Analytics, Facebook Pixel), eller erbjuder inloggning. I praktiken innebär det att nästan alla webbplatser behöver en integritetspolicy.</p>

      <h3>Vad ska integritetspolicyn innehålla?</h3>
      <p>Enligt GDPR artikel 13 och 14 ska en integritetspolicy minst innehålla:</p>
      <ul>
        <li>Kontaktuppgifter till den personuppgiftsansvarige</li>
        <li>Ändamålen och rättslig grund för behandlingen</li>
        <li>Vilka kategorier av personuppgifter som behandlas</li>
        <li>Lagringstiden för uppgifterna</li>
        <li>Information om registrerades rättigheter (rätt till tillgång, rättelse, radering)</li>
        <li>Om uppgifter delas med tredje part eller överförs utanför EU/EEA</li>
      </ul>

      <h3>Konsekvenser av att sakna integritetspolicy</h3>
      <p>Integritetsskyddsmyndigheten (IMY) kan utfärda böter på upp till 20 miljoner euro eller 4 % av global omsättning vid allvarliga GDPR-överträdelser. Dessutom kan avsaknad av integritetspolicy skada kundernas förtroende.</p>

      <h3>Uppdatera regelbundet</h3>
      <p>Integritetspolicyn bör uppdateras varje gång du ändrar hur du behandlar personuppgifter – exempelvis om du börjar använda ett nytt analysverktyg, annonsplattform eller betaltjänst. Veridocas mall ger dig en solid grund att bygga vidare på.</p>
    </div>
  ),
  faqs: [
    { question: 'Är integritetspolicy obligatorisk för en liten webbplats?', answer: 'Ja, storleken spelar ingen roll. Samlar du in personuppgifter – via ett kontaktformulär, Google Analytics eller liknande – är du skyldig att ha en integritetspolicy enligt GDPR.' },
    { question: 'Räcker det med en standardmall?', answer: 'En välgjord mall täcker de grundläggande GDPR-kraven, men du behöver anpassa den till din specifika verksamhet: vilka verktyg du använder, vilka cookies du sätter, och om du delar data med tredje parter.' },
    { question: 'Vad är skillnaden mellan integritetspolicy och cookie-policy?', answer: 'Integritetspolicyn täcker all behandling av personuppgifter. Cookie-policyn fokuserar specifikt på vilka cookies webbplatsen sätter och hur besökarna kan hantera dem. Många webbplatser kombinerar dessa.' },
    { question: 'Kan jag bli bötesfälld för GDPR-brott?', answer: 'Ja, IMY kan utfärda böter från varningar upp till 20 miljoner euro eller 4 % av global omsättning för allvarliga brott.' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>INTEGRITETSPOLICY (GDPR)</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat integritetspolicy (gdpr) för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>2. Villkor</h3>
      <p>Standardvillkor appliceras i enlighet med gällande lagstiftning.</p>
      
      <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          <div style={{ borderBottom: '1px solid #000', marginBottom: '0.5rem', height: '2rem' }}></div>
          <p style={{ fontSize: '0.9rem' }}>Underskrift Part A ({data.partyA || '_________'})</p>
        </div>
        <div>
          <div style={{ borderBottom: '1px solid #000', marginBottom: '0.5rem', height: '2rem' }}></div>
          <p style={{ fontSize: '0.9rem' }}>Underskrift Part B ({data.partyB || '_________'})</p>
        </div>
      </div>
    </div>
  )
};
