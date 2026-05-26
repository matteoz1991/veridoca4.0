import { DocumentTemplate } from '../templates';

export const aktieoverlatelse: DocumentTemplate = {
  title: 'Överlåtelseavtal Aktier',
  category: 'Företag & Affärer',
  slugs: {
    'sv': 'aktieoverlatelse',
    'en': 'share-transfer-agreement',
    'us': 'stock-transfer',
    'uk': 'share-transfer',
    'de': 'aktienuebertragung',
    'fr': 'cession-actions',
    'es': 'cesion-acciones'
},
  description: 'Upprätta ett juridiskt korrekt aktieöverlåtelseavtal för köp och försäljning av aktier i privat aktiebolag.',
  author: { name: 'Veridoca Legal Team', role: 'Legal Experts at Digisoul Media' },
  seoArticle: (
    <div>
      <h2>Vad är en aktieöverlåtelse?</h2>
      <p>En aktieöverlåtelse innebär att ägaren av aktier i ett aktiebolag överlåter dessa aktier till en ny ägare mot betalning. Aktieöverlåtelseavtalet dokumenterar transaktionen och reglerar parternas åtaganden, köpeskilling och eventuella garantier.</p>

      <h3>Aktieöverlåtelse vs inkråmsöverlåtelse</h3>
      <p>Det finns två sätt att överlåta ett företag: via <strong>aktieöverlåtelse</strong> (köparen tar över aktierna och därmed hela bolaget inklusive alla skulder och åtaganden) eller via <strong>inkråmsöverlåtelse</strong> (köparen köper bolagets tillgångar men inte bolaget självt).</p>
      <p>Vid aktieöverlåtelse tar köparen automatiskt över bolagets hela historia – inklusive eventuella dolda skulder, tvister och skatteförpliktelser. Det är därför viktigt med noggrann due diligence och välformulerade garantier i avtalet.</p>

      <h3>Förköpsrätt och hembudsklausul</h3>
      <p>Många aktieägaravtal innehåller en <strong>hembudsklausul</strong> (right of first refusal) som ger befintliga aktieägare rätt att köpa aktierna innan de erbjuds en extern köpare. Kontrollera alltid bolagets aktieägaravtal och bolagsordning innan du ingår ett aktieöverlåtelseavtal.</p>

      <h3>Viktiga delar i aktieöverlåtelseavtalet</h3>
      <ul>
        <li>Säljare och köpare med fullständiga uppgifter</li>
        <li>Antal aktier och deras nominella värde</li>
        <li>Köpeskilling och betalningsvillkor</li>
        <li>Tillträdesdatum</li>
        <li>Säljarens garantier (bolagets ekonomiska status, inga dolda skulder)</li>
        <li>Sekretessklausul</li>
        <li>Konkurrensklausul (förbud mot att starta konkurrerande verksamhet)</li>
      </ul>

      <h3>Skattekonsekvenser</h3>
      <p>Vinst vid försäljning av aktier i onoterade bolag beskattas normalt som kapitalinkomst med 25 % (om kvalificerade andelar gäller särskilda 3:12-regler). Köpeskillingens fördelning kan påverka skatten – kontakta en skatterådgivare vid komplexa transaktioner.</p>
    </div>
  ),
  faqs: [
    { question: 'Måste aktieöverlåtelsen notariseras?', answer: 'Nej, en aktieöverlåtelse av aktier i privat aktiebolag behöver inte notariseras i Sverige. Men den bör dokumenteras skriftligen och antecknas i bolagets aktiebok.' },
    { question: 'Vad händer med bolagets skulder vid aktieöverlåtelse?', answer: 'Köparen tar automatiskt över alla bolagets skulder och förpliktelser, inklusive dolda och ännu okända sådana. Det är därför essentiellt att säljaren lämnar tydliga garantier och att köparen genomför due diligence.' },
    { question: 'Behöver överlåtelsen godkännas av Bolagsverket?', answer: 'Nej, aktieöverlåtelsen behöver inte anmälas till Bolagsverket. Däremot ska det nya ägandet antecknas i bolagets aktiebok, och eventuella ändringar i styrelse eller firmateckning ska anmälas.' },
    { question: 'Hur beräknas skatten vid aktieförsäljning?', answer: 'Vinsten (köpeskilling minus anskaffningsvärde och försäljningskostnader) beskattas som kapitalinkomst med 25 % för onoterade aktier. För aktier som klassas som "kvalificerade andelar" (3:12-reglerna) gäller delvis annan och ofta högre skatt.' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>ÖVERLÅTELSEAVTAL AKTIER</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat överlåtelseavtal aktier för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
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
