import { DocumentTemplate } from '../templates';

export const andrahandsuthyrning: DocumentTemplate = {
  title: 'Andrahandsuthyrning',
  category: 'Bostad & Fastighet',
  slugs: {
    'sv': 'andrahandsuthyrning',
    'en': 'sublease-agreement',
    'us': 'sublease',
    'uk': 'sublet-agreement',
    'de': 'untermietvertrag',
    'fr': 'contrat-sous-location',
    'es': 'contrato-subarrendamiento'
},
  description: 'Skapa ett juridiskt korrekt kontrakt för andrahandsuthyrning. Reglerar hyra, tillträde och hyresgästens skyldigheter enligt Hyreslagen.',
  author: { name: 'Veridoca Legal Team', role: 'Legal Experts at Digisoul Media' },
  seoArticle: (
    <div>
      <h2>Vad är andrahandsuthyrning?</h2>
      <p>Andrahandsuthyrning innebär att du hyr ut en bostad som du själv hyr (hyresrätt) eller äger (bostadsrätt) till en annan person. Den person du hyr ut till kallas andrahandshyresgäst.</p>

      <h3>Kräver tillstånd</h3>
      <p>Hyr du ut en <strong>hyresrätt</strong> i andra hand krävs <em>alltid</em> tillstånd från din hyresvärd. Saknar du tillstånd riskerar du att förlora din hyresrätt. Du kan ansöka hos Hyresnämnden om hyresvärden nekar utan skälig anledning.</p>
      <p>Hyr du ut en <strong>bostadsrätt</strong> krävs som regel tillstånd från bostadsrättsföreningen. Kontrollera föreningens stadgar.</p>
      <p>Hyr du ut ett <strong>ägt hus</strong> är du fri att hyra ut utan tillstånd, men kontrollera dina försäkringsvillkor.</p>

      <h3>Hyresbeloppet</h3>
      <p>Hyran för en andrahandsuthyrd hyresrätt får inte överstiga din egen hyreskostnad plus ett tillägg för möbler och andra tjänster. Tar du för hög hyra (s.k. ockerhyra) kan andrahandshyresgästen kräva tillbaka det överskjutande beloppet.</p>

      <h3>Vad ska kontraktet innehålla?</h3>
      <ul>
        <li>Parterna: uthyrarens och andrahandshyresgästens fullständiga namn</li>
        <li>Bostadens adress och lägenhetsnummer</li>
        <li>Hyrestid (start- och slutdatum) och eventuell uppsägningstid</li>
        <li>Månadshyrans storlek och betalningsdag</li>
        <li>Vad som ingår (el, internet, parkering)</li>
        <li>Regler om husdjur, rökning och underhåll</li>
        <li>Depositionsvillkor</li>
      </ul>

      <h3>Besittningsskydd</h3>
      <p>Andrahandshyresgäster har som regel <em>inget</em> besittningsskydd vid tidsbestämda avtal. Det innebär att du kan säga upp avtalet när det löper ut utan att behöva motivera det. Har du ett tillsvidareavtal kan andrahandshyresgästen ha begränsat besittningsskydd.</p>

      <h3>Skatteaspekter</h3>
      <p>Intäkter från andrahandsuthyrning är i princip skattepliktiga. Det finns ett grundavdrag på 40 000 kr per år plus 20 % av hyresintäkten för privatpersoner som hyr ut sin permanentbostad. Kontrollera gällande regler hos Skatteverket.</p>
    </div>
  ),
  faqs: [
    { question: 'Behöver jag tillstånd för att hyra ut min lägenhet i andra hand?', answer: 'Ja, om du hyr (hyresrätt) behöver du alltid hyresvärdens tillstånd. Om du äger en bostadsrätt behöver du bostadsrättsföreningens tillstånd. Äger du huset är du fri att hyra ut utan tillstånd.' },
    { question: 'Hur lång uppsägningstid gäller?', answer: 'Det beror på vad ni avtalat. Vid tidsbestämda avtal upphör hyresförhållandet vid avtalstidens slut utan uppsägning. Vid tillsvidareavtal gäller vanligen 1–3 månaders ömsesidig uppsägningstid.' },
    { question: 'Kan jag ta ut en deposition?', answer: 'Ja, det är vanligt att ta en deposition (normalt 1–3 månaders hyra) för att täcka eventuella skador. Depositionen ska återbetalas när hyresgästen lämnar lägenheten, med avdrag för dokumenterade skador.' },
    { question: 'Vad händer om andrahandshyresgästen inte betalar?', answer: 'Om hyresgästen inte betalar i tid kan du säga upp hyresavtalet med omedelbar verkan om betalningsdröjsmålet är mer än en vecka (kan ge hyresgästen möjlighet att betala inom tre veckor för att undvika avhysning). I sista hand kan du ansöka om avhysning hos Kronofogden.' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>ANDRAHANDSUTHYRNING</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat andrahandsuthyrning för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
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
