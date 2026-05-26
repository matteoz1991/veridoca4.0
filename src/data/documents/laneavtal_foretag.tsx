import { DocumentTemplate } from '../templates';

export const laneavtal_foretag: DocumentTemplate = {
  title: 'Låneavtal Företag',
  category: 'Företag & Affärer',
  slugs: {
    'sv': 'laneavtal-foretag',
    'en': 'corporate-loan-agreement',
    'us': 'corporate-loan',
    'uk': 'corporate-loan',
    'de': 'firmenkreditvertrag',
    'fr': 'contrat-pret-entreprise',
    'es': 'contrato-prestamo-empresa'
},
  description: 'Skapa ett låneavtal för företag. Dokumenterar lånebelopp, ränta och återbetalningsvillkor vid lån mellan bolag eller aktieägarlån.',
  author: { name: 'Veridoca Legal Team', role: 'Legal Experts at Digisoul Media' },
  seoArticle: (
    <div>
      <h2>Vad är ett låneavtal för företag?</h2>
      <p>Ett låneavtal för företag dokumenterar ett lån mellan juridiska personer (bolag) eller mellan ett bolag och dess aktieägare (aktieägarlån). Det slår fast lånebelopp, ränta, återbetalningsplan och konsekvenser vid betalningsdröjsmål.</p>

      <h3>Aktieägarlån – Skatteverkets granskning</h3>
      <p>Det vanligaste scenariot är ett <strong>aktieägarlån</strong> – att ett aktiebolag lånar ut pengar till sin ägare, eller att ägaren lånar pengar till bolaget. Skatteverket granskar dessa transaktioner noggrant.</p>
      <p><strong>Marknadsmässig ränta:</strong> Bolaget måste ta ut en marknadsmässig ränta på lån till aktieägare. Tar bolaget ingen ränta eller för låg ränta kan Skatteverket anse att mellanskillnaden är ett löneuttag eller en utdelning, vilket utlöser skatter och avgifter.</p>

      <h3>Ränteberäkning</h3>
      <p>Skatteverkets referensränta för aktieägarlån fastställs varje år. Kontrollera aktuell referensränta på Skatteverkets webbplats. Räntan ska vara minst referensränta + en marginal för att anses marknadsmässig.</p>

      <h3>Lån bolag till bolag</h3>
      <p>Vid lån mellan bolag bör avtalet reglera:</p>
      <ul>
        <li>Lånebelopp och valuta</li>
        <li>Ränta och räntebas (fast eller rörlig)</li>
        <li>Amorteringsplan (löpande, bullet eller annan)</li>
        <li>Säkerheter (borgen, pant)</li>
        <li>Förfallodatum och förtida återbetalning</li>
        <li>Konsekvenser vid betalningsdröjsmål (dröjsmålsränta)</li>
      </ul>

      <h3>Varför skriftligt avtal är kritiskt</h3>
      <p>Utan ett skriftligt låneavtal kan Skatteverket ifrågasätta om en transaktion verkligen är ett lån eller en förtäckt utdelning eller löneutbetalning – med skattekonsekvenser som följd. Ett skriftligt avtal med marknadsmässiga villkor ger dig det bästa skyddet.</p>
    </div>
  ),
  faqs: [
    { question: 'Måste ränta tas ut på aktieägarlån?', answer: 'Ja, bolaget ska ta ut en marknadsmässig ränta på lån till aktieägare. Skatteverkets referensränta är en riktlinje. Utan ränta (eller för låg ränta) riskerar du att mellanskillnaden omklassificeras som lön eller utdelning.' },
    { question: 'Kan aktieägare låna pengar till bolaget?', answer: 'Ja, aktieägare kan låna pengar till bolaget. Även i detta fall bör ett skriftligt låneavtal upprättas. Räntan som betalas ut till aktieägaren är normalt skattepliktig inkomst för aktieägaren.' },
    { question: 'Vad händer med lånet vid bolagets konkurs?', answer: 'Aktieägarlån är normalt efterställda andra fordringsägare vid konkurs, vilket innebär att aktieägaren är sist i kön att få tillbaka sin investering. Det är viktigt att förstå denna risk.' },
    { question: 'Hur länge ska ett låneavtal sparas?', answer: 'Låneavtalet bör sparas under hela lånets löptid och minst 7 år efter återbetalning (bokföringslagen). Vid aktieägarlån rekommenderas att spara dokumentationen för all framtid för skattemässiga syften.' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>LÅNEAVTAL FÖRETAG</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat låneavtal företag för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
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
