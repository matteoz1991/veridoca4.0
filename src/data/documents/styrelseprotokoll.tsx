import { DocumentTemplate } from '../templates';

export const styrelseprotokoll: DocumentTemplate = {
  title: 'Styrelseprotokoll',
  category: 'Företag & Affärer',
  slugs: {
    'sv': 'styrelseprotokoll',
    'en': 'board-meeting-minutes',
    'us': 'board-meeting-minutes',
    'uk': 'board-minutes',
    'de': 'vorstandsprotokoll',
    'fr': 'pv-conseil-administration',
    'es': 'acta-junta-directiva'
},
  description: 'Skapa ett korrekt styrelseprotokoll för ditt aktiebolag. Lagkrav för alla styrelsebeslut i AB – dokumenterar beslut, deltagare och datum.',
  author: { name: 'Veridoca Legal Team', role: 'Legal Experts at Digisoul Media' },
  seoArticle: (
    <div>
      <h2>Vad är ett styrelseprotokoll?</h2>
      <p>Ett styrelseprotokoll är en skriftlig dokumentation av ett styrelsemöte i ett aktiebolag. Det dokumenterar vilka beslut som fattats, vilka som deltog, och hur omröstningarna föll ut. Styrelseprotokoll är ett lagkrav för aktiebolag i Sverige.</p>

      <h3>Lagkravet</h3>
      <p>Enligt Aktiebolagslagen (8 kap. 24 §) ska <em>protokoll föras vid styrelsemöten</em>. Protokollet ska:</p>
      <ul>
        <li>Dateras och numreras löpande</li>
        <li>Undertecknas av ordföranden och, om styrelsen har fler ledamöter, minst en ytterligare ledamot som styrelsen utser</li>
        <li>Notera vilka som var närvarande</li>
        <li>Redovisa alla beslut och eventuella reservationer</li>
      </ul>

      <h3>Vad ska protokollas?</h3>
      <p>Alla styrelsbeslut bör protokollas, men i synnerhet:</p>
      <ul>
        <li>Firmateckning och behörigheter</li>
        <li>Viktigare investeringar och avtal</li>
        <li>Lån och borgensåtaganden</li>
        <li>Utdelning och aktiekapitalförändringar</li>
        <li>Anställning och avskedande av VD</li>
        <li>Årsredovisningsgodkännande</li>
        <li>Bolagets ekonomiska ställning (halvårsvis obligatoriskt)</li>
      </ul>

      <h3>Styrelsebeslut utan möte</h3>
      <p>Styrelsbeslut kan ibland fattas utan att ett formellt möte hålls – via e-post eller telefon – om alla ledamöter är eniga. Beslutet bör dokumenteras skriftligen och undertecknas av alla ledamöter.</p>

      <h3>Hur länge sparas protokoll?</h3>
      <p>Styrelseprotokoll ska bevaras under bolagets hela livstid. De räknas som del av bolagets räkenskapsmaterial och ska vid likvidation hanteras av likvidatorn. Bolagsverket kräver att protokoll finns tillgängliga vid revision och inspektion.</p>
    </div>
  ),
  faqs: [
    { question: 'Är styrelseprotokoll obligatoriska?', answer: 'Ja, Aktiebolagslagen kräver att protokoll förs vid alla styrelsemöten. Saknas protokoll kan det leda till anmärkningar vid revision och i värsta fall personligt ansvar för styrelseledamöter.' },
    { question: 'Vem undertecknar styrelseprotokollet?', answer: 'Ordföranden ska alltid underteckna. Om styrelsen har fler ledamöter ska minst en ytterligare ledamot underteckna. Det är god praxis att alla ledamöter undertecknar.' },
    { question: 'Kan styrelsbeslut fattas via e-post?', answer: 'Ja, om alla ledamöter är eniga kan beslut fattas per capsulam (utan möte) via e-post eller annan skriftlig kommunikation. Beslutet ska dokumenteras i ett protokoll och undertecknas av ledamöterna.' },
    { question: 'Är styrelseprotokoll offentliga?', answer: 'Nej, styrelseprotokoll är normalt inte offentliga och behöver inte skickas in till Bolagsverket. De är bolagets interna dokument. Revisorn har däremot rätt att ta del av dem.' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>STYRELSEPROTOKOLL</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat styrelseprotokoll för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
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
