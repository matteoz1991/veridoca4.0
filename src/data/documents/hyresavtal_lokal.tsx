import { DocumentTemplate } from '../templates';

export const hyresavtal_lokal: DocumentTemplate = {
  title: 'Hyresavtal Lokal',
  category: 'Bostad & Fastighet',
  slugs: {
    'sv': 'hyresavtal-lokal',
    'en': 'commercial-lease',
    'us': 'commercial-lease',
    'uk': 'commercial-lease',
    'de': 'gewerbemietvertrag',
    'fr': 'bail-commercial',
    'es': 'arrendamiento-comercial'
},
  description: 'Skapa ett hyresavtal för kommersiell lokal. Reglerar hyra, uppsägningstid och parternas skyldigheter för butiker, kontor och lager.',
  author: { name: 'Veridoca Legal Team', role: 'Legal Experts at Digisoul Media' },
  seoArticle: (
    <div>
      <h2>Vad är ett hyresavtal för lokal?</h2>
      <p>Ett hyresavtal för lokal är ett avtal mellan en hyresvärd och en hyresgäst om hyra av kommersiell lokal – exempelvis butik, kontor, lager eller restaurang. Till skillnad från bostadshyresavtal regleras lokalhyra av <strong>Jordabalken 12 kap.</strong> (Hyreslagen), men med annorlunda regler kring besittningsskydd och uppsägning.</p>

      <h3>Viktiga skillnader mot bostadshyra</h3>
      <p><strong>Besittningsskydd:</strong> Hyresgäster i lokaler har ett <em>indirekt</em> besittningsskydd, inte ett direkt. Det innebär att hyresvärden kan säga upp hyresgästen, men att hyresgästen vid obefogad uppsägning kan ha rätt till ersättning (normalt 1 år av hyra).</p>
      <p><strong>Förhandling:</strong> Hyran för lokaler bestäms fritt av parterna och är inte underkastad de begränsningar som gäller för bostäder.</p>

      <h3>Vad ska lokalhyresavtalet innehålla?</h3>
      <ul>
        <li>Parterna: hyresvärd och hyresgäst med fullständiga uppgifter</li>
        <li>Lokalens adress och beskrivning (yta, rum)</li>
        <li>Hyrestid (tidsbestämt eller tillsvidare)</li>
        <li>Hyresbeloppet och indexuppräkning (KPI-klausul)</li>
        <li>Uppsägningstid och villkor för omförhandling</li>
        <li>Vem som ansvarar för el, värme, städning</li>
        <li>Möjlighet att framhyra lokalen</li>
        <li>Vad som händer med hyresgästens investeringar i lokalen</li>
      </ul>

      <h3>Indexuppräkning av hyran</h3>
      <p>De flesta lokalhyresavtal innehåller en <strong>indexklausul</strong> som kopplar hyran till konsumentprisindex (KPI). Det innebär att hyran justeras varje år i takt med inflationen. Se till att indexklausulen är tydlig om bas-KPI, justeringstidpunkt och eventuellt tak.</p>

      <h3>Besittningsskyddets praktiska innebörd</h3>
      <p>Om hyresvärden säger upp lokalhyresgästen utan godtagbara skäl (som upprustning, försäljning) kan hyresgästen kräva ersättning. Men hyresvärden kan fortfarande säga upp – och hyresgästen måste flytta om domstolen inte beslutar annat. Det indirekta besittningsskyddet ger alltså ekonomisk kompensation, men inte automatisk rätt att bo kvar.</p>
    </div>
  ),
  faqs: [
    { question: 'Vad är besittningsskydd för lokaler?', answer: 'Lokalhyresgäster har ett indirekt besittningsskydd. Det innebär att hyresvärden kan säga upp avtalet vid avtalstidensslut, men att hyresgästen kan ha rätt till ekonomisk ersättning (normalt ett år av hyran) om uppsägningen inte är befogad.' },
    { question: 'Kan hyresvärden höja hyran under hyrestiden?', answer: 'Normalt inte ensidigt under löpande hyresperiod. Däremot är det vanligt med indexklausuler som justerar hyran automatiskt varje år i takt med KPI. Vid förlängning av hyresperioden kan hyran omförhandlas.' },
    { question: 'Hur lång uppsägningstid gäller för lokal?', answer: 'Det beror på vad ni avtalat. Minsta lagstadgade uppsägningstid för lokaler är 9 månader om avtalet löper i minst 3 år. Kortare avtal kan ha kortare uppsägningstider. Kontrollera alltid vad som anges i avtalet.' },
    { question: 'Kan jag hyra ut lokalen i andra hand?', answer: 'Normalt krävs hyresvärdens samtycke för andrahandsuthyrning av lokal. Kontrollera vad ert avtal säger. Utan samtycke riskerar du att förlora hyresrätten.' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>HYRESAVTAL LOKAL</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat hyresavtal lokal för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
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
