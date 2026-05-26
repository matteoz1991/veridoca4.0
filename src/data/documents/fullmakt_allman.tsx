import { DocumentTemplate } from '../templates';

export const fullmakt_allman: DocumentTemplate = {
  title: 'Fullmakt (Allmän)',
  category: 'Privat & Övrigt',
  slugs: {
    'sv': 'fullmakt-allman',
    'en': 'general-power-of-attorney',
    'us': 'general-power-of-attorney',
    'uk': 'power-of-attorney',
    'de': 'allgemeine-vollmacht',
    'fr': 'procuration-generale',
    'es': 'poder-general'
},
  description: 'Skapa en allmän fullmakt som ger en person behörighet att agera i ditt namn. Används vid bankärenden, myndighetsärenden och avtalsingående.',
  author: { name: 'Veridoca Legal Team', role: 'Legal Experts at Digisoul Media' },
  seoArticle: (
    <div>
      <h2>Vad är en fullmakt?</h2>
      <p>En fullmakt är ett juridiskt dokument där en person (<strong>fullmaktsgivaren</strong>) ger en annan person (<strong>fullmäktigen</strong>) befogenhet att agera i fullmaktsgivarens namn i specificerade situationer. Det kan handla om att företräda dig hos en bank, myndighet, vid ett fastighetsköp eller i ett affärsavtal.</p>

      <h3>Typer av fullmakter</h3>
      <p><strong>Allmän fullmakt</strong> – ger fullmäktigen bred behörighet att agera i en rad situationer för fullmaktsgivarens räkning.</p>
      <p><strong>Speciell fullmakt</strong> – begränsad till en specifik åtgärd, t.ex. att sälja en specifik fastighet eller hämta ut ett paket.</p>
      <p><strong>Framtidsfullmakt</strong> – träder i kraft om fullmaktsgivaren i framtiden inte längre kan ta hand om sina angelägenheter (t.ex. p.g.a. demens). Regleras av en separat lag.</p>

      <h3>Vad kan en fullmakt användas till?</h3>
      <ul>
        <li>Bankärenden (betala räkningar, ta ut kontanter)</li>
        <li>Fastighetsaffärer (köpa eller sälja i fullmaktsgivarens namn)</li>
        <li>Skatteärenden och myndighetsärenden</li>
        <li>Ingå avtal för ett företag</li>
        <li>Hämta ut recept och handla för en anhörigs räkning</li>
      </ul>

      <h3>Risker med att ge fullmakt</h3>
      <p>En fullmakt ger fullmäktigen <em>din</em> rättsliga handlingsförmåga. Missbruk av en fullmakt är ett allvarligt brott (olovligt förfogande), men kan vara svårt att skydda sig mot. Du bör <strong>aldrig</strong> ge en fullmakt till någon du inte har fullständigt förtroende för.</p>

      <h3>Återkalla en fullmakt</h3>
      <p>En fullmakt kan återkallas när som helst av fullmaktsgivaren. Fullmäktigen och eventuella tredje parter (banker, myndigheter) måste informeras om återkallelsen. Det är viktigt att begära tillbaka det skriftliga fullmaktsdokumentet.</p>

      <h3>Skillnad mot framtidsfullmakt</h3>
      <p>En vanlig fullmakt gäller omedelbart och upphör om fullmaktsgivaren förlorar sin rättsliga handlingsförmåga. En <strong>framtidsfullmakt</strong> träder tvärtom <em>i kraft</em> just när fullmaktsgivaren inte längre kan fatta beslut själv. De regleras av olika lagar och har olika formkrav.</p>
    </div>
  ),
  faqs: [
    { question: 'Hur länge gäller en fullmakt?', answer: 'En fullmakt gäller tills den återkallas av fullmaktsgivaren, eller tills den tidsgräns som angivits i fullmakten löper ut. Det finns ingen automatisk begränsningstid i svensk lag, men banker och myndigheter kan neka att godta en fullmakt som är gammal.' },
    { question: 'Kan jag ge en fullmakt till vem som helst?', answer: 'Ja, du kan ge en fullmakt till vilken myndig person som helst. Det finns inga formella krav på vem som kan vara fullmäktig. Men du bör ge fullmakt enbart till personer du har fullständigt förtroende för.' },
    { question: 'Vad är skillnaden mot framtidsfullmakt?', answer: 'En vanlig fullmakt gäller omedelbart och upphör om du förlorar din rättsliga handlingsförmåga. En framtidsfullmakt träder i kraft just när du inte längre kan ta hand om dina egna angelägenheter. De regleras av olika lagar.' },
    { question: 'Behöver fullmakten notariseras?', answer: 'I Sverige finns inget generellt krav på notarisering av fullmakter. Däremot kan banker, utländska myndigheter och en del internationella transaktioner kräva att en fullmakt är notariserad eller apostillerad.' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>FULLMAKT (ALLMÄN)</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat fullmakt (allmän) för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
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
