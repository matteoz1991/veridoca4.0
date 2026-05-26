import { DocumentTemplate } from '../templates';

export const uppdragsavtal: DocumentTemplate = {
  title: 'Uppdragsavtal',
  category: 'Företag & Affärer',
  slugs: {
    'sv': 'uppdragsavtal',
    'en': 'service-agreement',
    'us': 'service-agreement',
    'uk': 'service-contract',
    'de': 'dienstleistungsvertrag',
    'fr': 'contrat-service',
    'es': 'contrato-servicio'
},
  description: 'Skapa ett uppdragsavtal för projektbaserat arbete. Reglerar leverans, ersättning, immateriella rättigheter och ansvar mellan uppdragsgivare och uppdragstagare.',
  author: { name: 'Veridoca Legal Team', role: 'Legal Experts at Digisoul Media' },
  seoArticle: (
    <div>
      <h2>Vad är ett uppdragsavtal?</h2>
      <p>Ett uppdragsavtal är ett avtal mellan en <strong>uppdragsgivare</strong> (den som beställer arbetet) och en <strong>uppdragstagare</strong> (den som utför arbetet) om att utföra ett specifikt uppdrag eller projekt. Det skiljer sig från ett anställningsavtal genom att uppdragstagaren är självständig och inte en anställd.</p>

      <h3>Uppdragsavtal vs konsultavtal</h3>
      <p>Begreppen används ofta synonymt i Sverige. Båda reglerar ett uppdrag som utförs av en extern part. "Konsultavtal" används ofta för löpande uppdrag med en timbaserad ersättning, medan "uppdragsavtal" ofta används för avgränsade projekt med fast pris och leveransdatum.</p>

      <h3>Viktigt: Uppdragsavtal vs anställning</h3>
      <p>En avgörande juridisk skillnad gäller gränsen mellan uppdragstagare och anställd. Skatteverket kan bedöma att en person som formellt anlitats som konsult i realiteten är anställd (skenavtal). Faktorer som tyder på anställning:</p>
      <ul>
        <li>Uppdragstagaren arbetar uteslutande för en uppdragsgivare</li>
        <li>Uppdragsgivaren styr <em>hur</em> arbetet ska utföras (inte bara resultatet)</li>
        <li>Uppdragstagaren saknar F-skattsedel</li>
        <li>Uppdragstagaren saknar egna kunder</li>
      </ul>

      <h3>Vad bör uppdragsavtalet reglera?</h3>
      <ul>
        <li>Uppdragets omfattning och leveranser (scope of work)</li>
        <li>Ersättning (fast pris eller timdebitering) och betalningsvillkor</li>
        <li>Tidplan och milestones</li>
        <li>Immateriella rättigheter – vem äger resultatet?</li>
        <li>Sekretessklausul</li>
        <li>Ansvarsbegränsning</li>
        <li>Uppsägningsvillkor</li>
      </ul>

      <h3>Immateriella rättigheter är kritiskt</h3>
      <p>Utan en tydlig klausul om upphovsrätt och äganderätt tillhör det uppdragstagaren skapar <em>uppdragstagaren</em> – inte uppdragsgivaren. Se alltid till att avtalet tydligt reglerar att uppdragsgivaren får äganderätten till alla leveranser.</p>
    </div>
  ),
  faqs: [
    { question: 'Vad är skillnaden mot ett anställningsavtal?', answer: 'Vid ett uppdragsavtal är uppdragstagaren en självständig part (eget företag eller F-skattsedel). Uppdragsgivaren betalar ingen arbetsgivaravgift, och uppdragstagaren har inga anställningsrättigheter (LAS, semester, sjuklön). Vid ett anställningsavtal är personen anställd med alla tillhörande rättigheter och skyldigheter.' },
    { question: 'Vem äger det uppdragstagaren skapar?', answer: 'Utan ett avtal som reglerar detta äger uppdragstagaren som utgångspunkt upphovsrätten till det de skapar (kod, text, design etc.). Det är därför kritiskt att uppdragsavtalet explicit anger att uppdragsgivaren äger alla leveranser och all immateriell egendom som skapas inom ramen för uppdraget.' },
    { question: 'Behöver uppdragstagaren ha F-skattsedel?', answer: 'Det är starkt rekommenderat. En uppdragstagare med F-skattsedel ansvarar själv för sina skatter och avgifter. Utan F-skattsedel kan uppdragsgivaren bli skyldig att betala källskatt och arbetsgivaravgifter.' },
    { question: 'Vad händer om uppdraget inte slutförs?', answer: 'Det beror på avtalet. Om uppdragstagaren avbryter uppdraget i förtid kan de bli skadeståndsskyldiga. Om uppdragsgivaren avbryter kan de normalt vara skyldiga att betala för redan utfört arbete. Avtalet bör reglera bägge scenarierna.' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>UPPDRAGSAVTAL</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat uppdragsavtal för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
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
