import { DocumentTemplate } from '../templates';

export const aterforsaljaravtal: DocumentTemplate = {
  title: 'Återförsäljaravtal',
  category: 'Företag & Affärer',
  slugs: {
    'sv': 'aterforsaljaravtal',
    'en': 'reseller-agreement',
    'us': 'reseller-agreement',
    'uk': 'reseller-contract',
    'de': 'haendlervertrag',
    'fr': 'contrat-revendeur',
    'es': 'contrato-distribuidor'
},
  description: 'Skapa ett återförsäljaravtal för din distributionskedja. Reglerar exklusivitet, territorium, prissättning och uppsägningsvillkor.',
  author: { name: 'Veridoca Legal Team', role: 'Legal Experts at Digisoul Media' },
  seoArticle: (
    <div>
      <h2>Vad är ett återförsäljaravtal?</h2>
      <p>Ett återförsäljaravtal (distributionsavtal) är ett kommersiellt avtal mellan en leverantör/tillverkare och en återförsäljare som ger återförsäljaren rätt att sälja leverantörens produkter i eget namn och för egen räkning. Till skillnad från ett agenturavtal köper återförsäljaren in varorna och säljer dem vidare – risken och äganderätten övergår till återförsäljaren.</p>

      <h3>Exklusivt vs icke-exklusivt avtal</h3>
      <p>En av de viktigaste frågorna att reglera är om återförsäljarrätten ska vara <strong>exklusiv</strong> eller icke-exklusiv:</p>
      <ul>
        <li><strong>Exklusivt avtal:</strong> Leverantören förbinder sig att inte sälja till andra återförsäljare inom det avtalade territoriet. Ger återförsäljaren starkare incitament att investera i marknaden.</li>
        <li><strong>Icke-exklusivt avtal:</strong> Leverantören kan sälja till flera återförsäljare inom samma territorium. Ger leverantören mer flexibilitet.</li>
        <li><strong>Selektivt distributionssystem:</strong> Leverantören väljer noggrant ut återförsäljare baserat på kvalitetskriterier – vanligt för lyxprodukter och tekniska produkter.</li>
      </ul>

      <h3>Konkurrensrättsliga aspekter</h3>
      <p>Återförsäljaravtal måste följa EU:s konkurrensregler (TFEU artikel 101) och den svenska konkurrenslagen. Förbjudna klausuler inkluderar:</p>
      <ul>
        <li>Fast minimipris för återförsäljning (RPM – Resale Price Maintenance). Leverantören får inte bestämma vilket pris återförsäljaren tar ut av slutkunden.</li>
        <li>Absolut territoriell exklusivitet som förhindrar parallellimport inom EU.</li>
        <li>Konkurrensbegränsningar som överstiger 5 år (enligt gruppundantaget).</li>
      </ul>
      <p>Leverantörer med en marknadsandel under 30 % kan normalt sett dra nytta av EU:s gruppundantag för vertikala avtal, vilket ger mer avtalsfrihet.</p>

      <h3>Viktiga klausuler i ett återförsäljaravtal</h3>
      <ul>
        <li><strong>Produkter och territorium:</strong> Exakt vilka produkter avtalet gäller och i vilket geografiskt område.</li>
        <li><strong>Inköpspriser och betalning:</strong> Prislista, betalningsvillkor, prisändringsförfarande.</li>
        <li><strong>Minsta inköpsvolym:</strong> Eventuella krav på minsta inköpskvantitet per period.</li>
        <li><strong>Marknadsföring:</strong> Vem ansvarar för marknadsföring och hur fördelas kostnaderna?</li>
        <li><strong>Varumärkesanvändning:</strong> Hur och när återförsäljaren får använda leverantörens varumärke och logotyp.</li>
        <li><strong>Löptid och uppsägning:</strong> Avtalets längd, förlängningsmekanism och uppsägningstider.</li>
        <li><strong>Konkurrensklausul:</strong> Förbud mot att sälja konkurrerande produkter under avtalstiden (max 5 år).</li>
        <li><strong>Eftermarknadsklausul:</strong> Eventuellt förbud mot att sälja konkurrerande produkter efter avtalstidens slut (max 1 år och begränsat territorium).</li>
      </ul>

      <h3>Uppsägning och skadestånd</h3>
      <p>Återförsäljaravtal regleras i Sverige av lagen om handelsagentur som analogi och allmänna avtalsrättsliga principer. Vid uppsägning utan sakliga skäl kan leverantören bli skyldig att betala ersättning till återförsäljaren för förlorade investeringar och kundbasen återförsäljaren byggt upp. En tydlig uppsägningsklausul med rimliga varseltider (typiskt 3–12 månader beroende på avtalets längd) minskar risken för tvister.</p>
    </div>
  ),
  faqs: [
    { question: 'Skillnaden mellan återförsäljare och agent?', answer: 'En återförsäljare köper varor i eget namn, äger dem och säljer vidare med egen vinstmarginal. En agent förmedlar affärer i leverantörens namn och får provision. Återförsäljaren tar alltså störst affärsrisk men har också störst frihet att sätta sina egna priser.' },
    { question: 'Kan leverantören bestämma vilket pris återförsäljaren ska ta ut?', answer: 'Nej, fasta minimpriser (RPM) är förbjudna enligt EU:s konkurrensregler och kan leda till böter. Leverantören får däremot ange ett rekommenderat pris (icke-bindande) och sätta ett maximalt pris.' },
    { question: 'Måste avtalet vara tidsbegränsat?', answer: 'Nej, avtalet kan vara tillsvidare eller tidsbegränsat. Om det är tillsvidare bör en rimlig uppsägningstid anges (typiskt 3–6 månader). Tidsbegränsade avtal upphör automatiskt men kan förenas med en option om förlängning.' },
    { question: 'Vad gäller om vi inte har skriftligt återförsäljaravtal?', answer: 'Utan skriftligt avtal gäller allmänna avtalsrättsliga principer och eventuell handelsbruk. Det är svårt att bevisa vad som avtalats, och vid tvist riskerar båda parter att förlora. Ett skriftligt avtal är starkt rekommenderat.' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>ÅTERFÖRSÄLJARAVTAL</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat återförsäljaravtal för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
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
