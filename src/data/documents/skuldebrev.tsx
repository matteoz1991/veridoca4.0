import { DocumentTemplate } from '../templates';

export const skuldebrev: DocumentTemplate = {
  slugs: {
    sv: 'enkelt-skuldebrev',
    en: 'promissory-note',
    us: 'promissory-note',
    uk: 'promissory-note',
    de: 'schuldschein',
    fr: 'reconnaissance-de-dette',
    es: 'pagare'
  },
  title: 'Enkelt Skuldebrev',
  category: 'Privat & Övrigt',
  description: 'Används när du lånar ut pengar till en vän eller familjemedlem.',
  author: {
    name: 'Veridoca Legal Team',
    role: 'Legal Experts at Digisoul Media'
  },
  seoArticle: (
    <div className="seo-article">
      <h2>Vad är ett Enkelt Skuldebrev?</h2>
      <p>Ett enkelt skuldebrev är ett kvitto på att någon har lånat pengar av dig och att de lovar att betala tillbaka. Det kallas "enkelt" för att det är ställt till en specifik person (långivaren) och är inte tänkt att säljas vidare eller överlåtas lika enkelt som ett löpande skuldebrev.</p>
      
      <h3>Varför behöver man ett skriftligt avtal när man lånar ut till familj?</h3>
      <p>Även om det känns onödigt att skriva avtal med familj och vänner, är det ofta just i dessa relationer som konflikter om pengar blir som mest smärtsamma. Ett skriftligt skuldebrev eliminerar missförstånd gällande lånebelopp, om ränta ska utgå och framförallt när pengarna ska betalas tillbaka.</p>

      <h3>Ränta och återbetalning</h3>
      <p>Det står er fritt att komma överens om vilken ränta som helst (eller ingen alls). Tänk dock på att Skatteverket kan ha synpunkter om räntan skiljer sig markant från marknadsräntan, särskilt i företagsrelaterade lån. Dröjsmålsränta kickar in enligt räntelagen om lånet inte betalas i tid, såvida inget annat avtalats.</p>
      
      <h3>Preskriptionstid för Skuldebrev</h3>
      <p>I Sverige är den allmänna preskriptionstiden för skuldebrev 10 år mellan privatpersoner. Detta innebär att om långivaren inte påminner låntagaren om skulden inom 10 år (genom så kallat preskriptionsavbrott), förfaller rätten att kräva tillbaka pengarna. Om en påminnelse skickas börjar en ny 10-årsperiod löpa.</p>
    </div>
  ),
  faqs: [
    { question: "Måste man bevittna ett enkelt skuldebrev?", answer: "Nej, det finns inget lagkrav på att ett skuldebrev ska vara bevittnat för att vara giltigt i Sverige." },
    { question: "Vad händer om låntagaren inte betalar?", answer: "Om låntagaren vägrar betala trots att förfallodatumet har passerats kan du vända dig till Kronofogden med ditt skuldebrev och ansöka om betalningsföreläggande." },
    { question: "Kan jag överlåta (sälja) ett enkelt skuldebrev?", answer: "Ja, men det är krångligare än ett löpande skuldebrev. Vid överlåtelse måste låntagaren informeras (denuntiation) för att överlåtelsen ska bli giltig mot låntagaren." }
  ],
  fields: [
    { id: 'lender', label: 'Långivare', type: 'text' },
    { id: 'borrower', label: 'Låntagare', type: 'text' },
    { id: 'amount', label: 'Lånebelopp (SEK)', type: 'number' },
    { id: 'interest', label: 'Ränta (%)', type: 'number', placeholder: 'T.ex. 2' },
    { id: 'repaymentDate', label: 'Återbetalningsdatum', type: 'date' },
    { id: 'city', label: 'Ort', type: 'text' }
  ],
  content: (data) => (
    <div className="document-body">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>ENKELT SKULDEBREV</h1>
      <p>Jag, <strong>{data.borrower || '_________________'}</strong> ("Låntagaren"), erkänner mig härmed skyldig att till <strong>{data.lender || '_________________'}</strong> ("Långivaren") eller order betala ett belopp om <strong>{data.amount ? data.amount + ' SEK' : '_________ SEK'}</strong>.</p>
      
      <h2>1. Ränta</h2>
      <p>På lånebeloppet löper en årlig ränta om <strong>{data.interest || '____'}%</strong> från och med detta datum tills full betalning har skett.</p>

      <h2>2. Återbetalning</h2>
      <p>Lånet ska vara till fullo återbetalt senast den <strong>{data.repaymentDate || '_________'}</strong>.</p>

      <h2>3. Underskrifter</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '4rem' }}>
        <div>
          <p>Ort och datum: <strong>{data.city || '_________'}</strong>, <strong>{data.repaymentDate || '_________'}</strong></p>
          <br/><br/>
          <p>___________________________________</p>
          <p><strong>{data.borrower || 'Låntagare'}</strong></p>
        </div>
      </div>
    </div>
  )
};
