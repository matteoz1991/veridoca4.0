import { DocumentTemplate } from '../templates';

export const samarbetsavtal: DocumentTemplate = {
  slugs: {
    sv: 'samarbetsavtal',
    en: 'collaboration-agreement',
    us: 'collaboration-agreement',
    uk: 'collaboration-agreement',
    de: 'kooperationsvertrag',
    fr: 'accord-de-collaboration',
    es: 'acuerdo-de-colaboracion'
  },
  title: 'Samarbetsavtal',
  category: 'Företag & Affärer',
  description: 'Reglera förutsättningarna för ett affärsmässigt samarbete mellan två företag.',
  author: {
    name: 'Veridoca Legal Team',
    role: 'Corporate Law Experts at Digisoul Media'
  },
  seoArticle: (
    <div className="seo-article">
      <h2>Vad är ett Samarbetsavtal?</h2>
      <p>Ett samarbetsavtal är ett juridiskt dokument som upprättas när två eller flera företag (eller frilansare) bestämmer sig för att arbeta tillsammans i ett gemensamt projekt, joint venture eller för en specifik affärsmöjlighet. Syftet är att tydliggöra förväntningar, ansvarsområden och hur eventuella intäkter eller kostnader ska fördelas.</p>
      
      <h3>Skillnaden mellan Samarbetsavtal och Enkelt Bolag</h3>
      <p>Det är viktigt att vara uppmärksam på att ett samarbetsavtal ibland oavsiktligt kan klassas som ett "Enkelt Bolag" enligt svensk lag, om parterna kommer överens om att driva verksamhet gemensamt och fördela vinsten. Detta kan få skattemässiga och juridiska konsekvenser. Därför innehåller välskrivna samarbetsavtal ofta en klausul som explicit klargör att parterna agerar som oberoende uppdragstagare och inte bildar ett bolag.</p>

      <h3>Viktiga klausuler i ett Samarbetsavtal</h3>
      <ul>
        <li><strong>Ansvarsfördelning:</strong> Vem gör vad? En tydlig specifikation av arbetsuppgifter och deadlines (Project Scope).</li>
        <li><strong>Immateriella Rättigheter (IP):</strong> Vem äger resultatet av samarbetet? Om ni utvecklar en ny mjukvara tillsammans, är det viktigt att fastställa om ni äger den gemensamt eller om en av parterna får de exklusiva rättigheterna.</li>
        <li><strong>Ekonomisk ersättning:</strong> Ska intäkter delas? Finns det en fast avgift? Vem bär kostnaderna för eventuella materialinköp?</li>
        <li><strong>Sekretess:</strong> Inkorporera eller hänvisa till ett Sekretessavtal (NDA) för att skydda den affärskritiska information ni delar.</li>
        <li><strong>Uppsägning (Termination):</strong> Hur avslutar ni samarbetet om det inte fungerar? Krävs en viss uppsägningstid?</li>
      </ul>
    </div>
  ),
  faqs: [
    { question: "Måste ett samarbetsavtal vara skriftligt?", answer: "Nej, muntliga avtal är juridiskt bindande i Sverige. Men vid ett samarbete är det extremt svårt att bevisa vad som sagts om en tvist uppstår. Därför bör samarbetsavtal alltid upprättas i skrift." },
    { question: "Kan man skriva in vite vid kontraktsbrott?", answer: "Ja. Det är mycket vanligt att skriva in en vitesklausul (ett förutbestämt skadestånd) om någon av parterna till exempel skulle bryta mot sekretessen eller vägra leverera sin del." },
    { question: "Gäller avtalet globalt?", answer: "Ett samarbetsavtal bör alltid innehålla en klausul om 'Tillämplig lag och tvistlösning' (t.ex. svensk lag och Stockholms tingsrätt) så ni vet var ni ska stämma varandra om samarbetet sträcker sig över landsgränser." }
  ],
  fields: [
    { id: 'party1', label: 'Företag 1 (Ditt bolag)', type: 'text' },
    { id: 'org1', label: 'Org.nr Företag 1', type: 'text' },
    { id: 'party2', label: 'Företag 2 (Partner)', type: 'text' },
    { id: 'org2', label: 'Org.nr Företag 2', type: 'text' },
    { id: 'project', label: 'Projektets namn/syfte', type: 'text' },
    { id: 'city', label: 'Ort', type: 'text' },
    { id: 'date', label: 'Dagens datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-body">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>SAMARBETSAVTAL</h1>
      <p>Detta samarbetsavtal har denna dag träffats mellan:</p>
      
      <ol>
        <li><strong>{data.party1 || '_________________'}</strong>, org.nr {data.org1 || '____________'} ("Part 1")</li>
        <li><strong>{data.party2 || '_________________'}</strong>, org.nr {data.org2 || '____________'} ("Part 2")</li>
      </ol>

      <h2>1. Bakgrund och Syfte</h2>
      <p>Parterna önskar inleda ett samarbete avseende <strong>{data.project || '_________________'}</strong> ("Projektet"). Detta avtal reglerar Parternas rättigheter och skyldigheter i samband med Projektet.</p>

      <h2>2. Parternas oberoende</h2>
      <p>Parterna är oberoende uppdragstagare. Detta avtal ska inte tolkas som att det skapar ett anställningsförhållande, ett handelsbolag, ett enkelt bolag eller ett joint venture mellan Parterna. Ingen Part har rätt att ingå avtal eller binda den andra Parten i förhållande till tredje man.</p>

      <h2>3. Immateriella Rättigheter</h2>
      <p>Vardera Part behåller äganderätten till sina respektive immateriella rättigheter som Parten innehade innan detta Avtal ingicks. Rättigheter till resultat som skapas gemensamt under Projektet ska avtalas separat innan kommersialisering sker.</p>

      <h2>4. Sekretess</h2>
      <p>Parterna förbinder sig att under avtalstiden, samt för en period om tre (3) år därefter, inte för utomstående avslöja konfidentiell information som erhållits från den andra Parten inom ramen för detta samarbete.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '4rem' }}>
        <div>
          <p>Ort och datum: <strong>{data.city || '_________'}</strong>, <strong>{data.date || '_________'}</strong></p>
          <br/><br/>
          <p>___________________________________</p>
          <p><strong>{data.party1 || 'Part 1'}</strong></p>
        </div>
        <div>
          <p>Ort och datum: <strong>{data.city || '_________'}</strong>, <strong>{data.date || '_________'}</strong></p>
          <br/><br/>
          <p>___________________________________</p>
          <p><strong>{data.party2 || 'Part 2'}</strong></p>
        </div>
      </div>
    </div>
  )
};
