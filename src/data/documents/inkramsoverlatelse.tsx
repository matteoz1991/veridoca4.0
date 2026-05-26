import { DocumentTemplate } from '../templates';

export const inkramsoverlatelse: DocumentTemplate = {
  title: 'Inkråmsöverlåtelse',
  category: 'Företag & Affärer',
  slugs: {
    'sv': 'inkramsoverlatelse',
    'en': 'asset-purchase-agreement',
    'us': 'asset-purchase-agreement',
    'uk': 'asset-purchase',
    'de': 'asset-deal',
    'fr': 'cession-fonds-commerce',
    'es': 'compraventa-activos'
},
  description: 'Skapa ett inkråmsöverlåtelseavtal för köp av rörelse eller tillgångar. Reglerar vilka tillgångar och skulder som ingår vid företagsförsäljning.',
  author: { name: 'Veridoca Legal Team', role: 'Legal Experts at Digisoul Media' },
  seoArticle: (
    <div>
      <h2>Vad är en inkråmsöverlåtelse?</h2>
      <p>En inkråmsöverlåtelse (asset deal) innebär att köparen förvärvar ett företags tillgångar – maskiner, varulager, kundavtal, varumärken, personal – men inte bolaget som juridisk person. Säljaren behåller aktiebolaget med dess historia, skulder och ansvar. Köparen startar normalt ett nytt bolag som tar över de förvärvade tillgångarna.</p>

      <h3>Inkråmsöverlåtelse vs aktieöverlåtelse</h3>
      <p>Det finns två huvudsakliga sätt att köpa ett företag:</p>
      <ul>
        <li><strong>Aktieöverlåtelse:</strong> Köparen tar över aktierna och hela bolaget inklusive alla skulder, tvister och skatteförpliktelser. Enklare formellt men mer riskfyllt för köparen.</li>
        <li><strong>Inkråmsöverlåtelse:</strong> Köparen väljer exakt vilka tillgångar som förvärvas och lämnar eventuella skulder och risker kvar i det gamla bolaget. Mer komplicerat att genomföra men ger köparen bättre skydd.</li>
      </ul>
      <p>Inkråmsöverlåtelse är ofta att föredra när det gamla bolaget har okända skulder, pågående tvister, eller en komplicerad skattehistoria.</p>

      <h3>Verksamhetsöverlåtelse och anställda</h3>
      <p>När en rörelse överlåts som en inkråmsöverlåtelse gäller lagen om anställningsskydd (LAS) och EU-direktivet om företagsöverlåtelse (Överlåtelsedirektivet). Det innebär att:</p>
      <ul>
        <li>Anställda som arbetar i den överlåtna rörelsen automatiskt följer med till köparen (automatisk övergång av anställningsavtal).</li>
        <li>Anställningsvillkor måste bibehållas i minst ett år.</li>
        <li>Säljaren och köparen har informations- och förhandlingsplikt gentemot de fackliga representanterna.</li>
      </ul>

      <h3>Vad ingår i inkråmet?</h3>
      <p>Parterna har stor frihet att bestämma vad som ingår i överlåtelsen. Vanliga tillgångar:</p>
      <ul>
        <li>Maskiner och inventarier</li>
        <li>Varulager och råvaror</li>
        <li>Kundavtal och leverantörsavtal (kräver normalt motpartens samtycke för överlåtelse)</li>
        <li>Immateriella rättigheter: varumärken, patent, domännamn, mjukvara</li>
        <li>Goodwill och kundregister</li>
        <li>Hyresavtal för lokaler (kräver hyresvärdens godkännande)</li>
        <li>Anställda (automatisk övergång enligt LAS)</li>
      </ul>

      <h3>Skattemässiga konsekvenser</h3>
      <p>Vid inkråmsöverlåtelse beskattas vinsten i det säljande bolaget som vanlig bolagsinkomst (20,6 %). Köparen får ett högre anskaffningsvärde på de förvärvade tillgångarna och kan skriva av dem skattemässigt. Momshanteringen kan vara komplex – kontakta en skatterådgivare för att strukturera transaktionen optimalt.</p>

      <h3>Köpeskilling och tillträde</h3>
      <p>Köpeskillingen kan betalas som ett engångsbelopp, i delbetalningar, eller som en tilläggsköpeskilling (earn-out) baserad på framtida resultat. Tillträdesdagen (när köparen tar kontroll) och tillträdesdatumet för respektive tillgång bör tydligt specificeras i avtalet.</p>
    </div>
  ),
  faqs: [
    { question: 'Måste kunderna godkänna att deras avtal överlåts?', answer: 'I de flesta fall krävs motpartens samtycke för att överlåta ett avtal till en ny part. Kontrollera om befintliga kundavtal innehåller en klausul som kräver samtycke vid överlåtelse. Ibland räcker det med ett skriftligt meddelande om att avtalet övergår till ny part.' },
    { question: 'Vad händer med momsregistrering vid inkråmsöverlåtelse?', answer: 'Vid överlåtelse av en hel rörelse (s.k. verksamhetsöverlåtelse) är transaktionen normalt undantagen från moms om köparen fortsätter bedriva liknande verksamhet. Det är viktigt att strukturera avtalet korrekt för att uppnå detta undantag.' },
    { question: 'Hur fördelas skulder och åtaganden?', answer: 'Som utgångspunkt tar köparen bara över de skulder och åtaganden som uttryckligen anges i inkråmsöverlåtelseavtalet. Övriga skulder stannar kvar hos säljaren. Säljaren ger normalt garantier om att inga oredovisade skulder hänger på inkråmet.' },
    { question: 'Behövs due diligence vid inkråmsöverlåtelse?', answer: 'Ja, en due diligence är starkt rekommenderad. Undersök de specifika tillgångarna noggrant – finns det panter eller inteckningar på maskiner och inventarier? Stämmer varulagervärderingen? Är immateriella rättigheter registrerade och giltiga? Gäller kundavtalen fortfarande?' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>INKRÅMSÖVERLÅTELSE</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat inkråmsöverlåtelse för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
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
