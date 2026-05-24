import { DocumentTemplate } from '../templates';

export const samboavtal: DocumentTemplate = {
  slugs: {
    sv: 'samboavtal',
    en: 'cohabitation-agreement',
    us: 'cohabitation-agreement',
    uk: 'cohabitation-agreement',
    de: 'partnerschaftsvertrag',
    fr: 'accord-de-cohabitation',
    es: 'acuerdo-de-convivencia'
  },
  title: 'Samboavtal',
  category: 'Familj & Relationer',
  description: 'Ett samboavtal låter er avtala bort sambolagens regler om bodelning, så att ni får behålla er egen egendom om ni separerar.',
  author: {
    name: 'Veridoca Legal Team',
    role: 'Legal Experts at Digisoul Media'
  },
  seoArticle: (
    <div className="seo-article">
      <h2>Vad är ett Samboavtal?</h2>
      <p>När två personer flyttar ihop i ett gemensamt hushåll i Sverige omfattas de automatiskt av <strong>Sambolagen</strong>. Lagens huvudregel är att all "samboegendom" ska delas lika (50/50) vid en eventuell separation eller vid dödsfall, oavsett vem som betalade för den. Samboegendom innefattar den gemensamma bostaden och det gemensamma bohaget (möbler, husgeråd) som förvärvats för gemensam användning.</p>
      
      <p>Ett samboavtal är ett skriftligt avtal mellan två sambos där ni helt eller delvis avtalar bort sambolagens regler. Genom att skriva ett samboavtal kan ni alltså bestämma att var och en behåller sina egna saker och den del av bostaden man själv äger vid en separation.</p>
      
      <h3>När bör man skriva ett Samboavtal?</h3>
      <ul>
        <li><strong>Ojämn kontantinsats:</strong> Om ni köper en bostad tillsammans men en av er betalar en mycket större del av kontantinsatsen. Utan avtal (och skuldebrev) riskerar den personen att förlora halva sin insats vid en separation.</li>
        <li><strong>En äger bostaden sedan tidigare:</strong> Även om bostaden köptes innan ni flyttade ihop, kan den i vissa fall räknas som samboegendom om den köptes *med syftet* att ni skulle bo där tillsammans.</li>
        <li><strong>Värdefullt bohag:</strong> Om en av er köper all dyr inredning eller elektronik till det gemensamma hemmet.</li>
      </ul>

      <h3>Vad kan *inte* ingå i ett samboavtal?</h3>
      <p>Det är viktigt att veta att bilar, båtar, bankkonton, aktier och fritidshus aldrig utgör samboegendom enligt lagen. Den som står som ägare till bilen får behålla den, och detta behöver alltså inte regleras i ett samboavtal. Dessutom reglerar ett samboavtal inte arv; för att ärva varandra krävs ett testamente.</p>
    </div>
  ),
  faqs: [
    { question: "Måste ett samboavtal registreras?", answer: "Nej, till skillnad från äktenskapsförord behöver ett samboavtal inte registreras hos Skatteverket. Det räcker att det är skriftligt och undertecknat av båda parter." },
    { question: "Måste det bevittnas?", answer: "Nej, det finns inget krav på att ett samboavtal måste vara bevittnat i Sverige, men det skadar inte att ha vittnen om man vill öka tryggheten." },
    { question: "Räcker det med ett samboavtal vid olika kontantinsatser?", answer: "Nej. Om ni går in med olika mycket pengar i bostaden, men äger 50% var av den på pappret, räcker inte bara ett samboavtal. Ni måste *även* upprätta ett enkelt skuldebrev er emellan för mellanskillnaden." }
  ],
  fields: [
    { id: 'sambo1', label: 'Sambo 1 (Ditt namn)', type: 'text' },
    { id: 'pnr1', label: 'Personnummer (Sambo 1)', type: 'text' },
    { id: 'sambo2', label: 'Sambo 2 (Partners namn)', type: 'text' },
    { id: 'pnr2', label: 'Personnummer (Sambo 2)', type: 'text' },
    { id: 'city', label: 'Ort för undertecknande', type: 'text' },
    { id: 'date', label: 'Dagens datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-body">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>SAMBOAVTAL</h1>
      <p>Undertecknade sambor avtalar härmed följande angående vår egendom och en eventuell framtida bodelning.</p>
      
      <h2>1. Parter</h2>
      <ul>
        <li><strong>{data.sambo1 || '_________________'}</strong> ({data.pnr1 || '____________'})</li>
        <li><strong>{data.sambo2 || '_________________'}</strong> ({data.pnr2 || '____________'})</li>
      </ul>

      <h2>2. Avtalets Innehåll</h2>
      <p>Vi överenskommer härmed att bestämmelserna i Sambolagen (2003:376) om bodelning inte ska gälla i vårt samboförhållande.</p>
      <p>Detta innebär att var och en av oss vid en eventuell separation eller dödsfall behåller sin respektive egendom. Ingen bodelning av vår gemensamma bostad eller vårt gemensamma bohag ska ske, oavsett vem av oss som införskaffat egendomen och oavsett om den införskaffats för gemensam användning.</p>

      <h2>3. Underskrifter</h2>
      <p>Detta avtal har upprättats i två likalydande exemplar, varav vi tagit var sitt.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '4rem' }}>
        <div>
          <p>Ort och datum: <strong>{data.city || '_________'}</strong>, <strong>{data.date || '_________'}</strong></p>
          <br/><br/>
          <p>___________________________________</p>
          <p><strong>{data.sambo1 || 'Sambo 1'}</strong></p>
        </div>
        <div>
          <p>Ort och datum: <strong>{data.city || '_________'}</strong>, <strong>{data.date || '_________'}</strong></p>
          <br/><br/>
          <p>___________________________________</p>
          <p><strong>{data.sambo2 || 'Sambo 2'}</strong></p>
        </div>
      </div>
    </div>
  )
};
