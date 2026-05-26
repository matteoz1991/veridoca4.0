import { DocumentTemplate } from '../templates';

export const gavobrev: DocumentTemplate = {
  title: 'Gåvobrev',
  category: 'Familj & Relationer',
  slugs: {
    'sv': 'gavobrev',
    'en': 'deed-of-gift',
    'us': 'deed-of-gift',
    'uk': 'deed-of-gift',
    'de': 'schenkungsvertrag',
    'fr': 'acte-donation',
    'es': 'escritura-donacion'
},
  description: 'Skapa ett juridiskt korrekt gåvobrev för överlåtelse av egendom som gåva. Viktigt vid fastigheter, bostadsrätter och penninggåvor.',
  author: { name: 'Veridoca Legal Team', role: 'Legal Experts at Digisoul Media' },
  seoArticle: (
    <div>
      <h2>Vad är ett gåvobrev?</h2>
      <p>Ett gåvobrev är ett skriftligt dokument som bekräftar att en person (givaren) frivilligt överlåter egendom till en annan person (mottagaren) utan krav på motprestation. Det används vid gåvor av värdefull egendom som fastigheter, bostadsrätter, fordon och pengar.</p>

      <h3>När behövs ett gåvobrev?</h3>
      <p><strong>Fastighet:</strong> Vid gåva av fast egendom är ett skriftligt gåvobrev lagstadgat krav (Jordabalken 4:1). Mottagaren måste också ansöka om lagfart hos Lantmäteriet.</p>
      <p><strong>Bostadsrätt:</strong> Gåvobrev krävs för att giltigt överlåta en bostadsrätt. Bostadsrättsföreningen måste också godkänna ägarbyte.</p>
      <p><strong>Penninggåvor:</strong> Krävs inte juridiskt, men rekommenderas för stora belopp för att dokumentera gåvans syfte och villkor – särskilt om det gäller förskott på arv.</p>

      <h3>Förskott på arv</h3>
      <p>Om givaren vill att gåvan ska räknas av mot mottagarens framtida arv (s.k. förskott på arv) måste detta <em>uttryckligen</em> anges i gåvobrevet. Annars presumeras en gåva till bröstarvinge (barn) vara förskott på arv.</p>

      <h3>Villkor i gåvobrev</h3>
      <p>Givaren kan förena gåvan med villkor, exempelvis:</p>
      <ul>
        <li>Att egendomen ska vara mottagarens enskilda egendom (och alltså inte ingå i en bodelning vid skilsmässa)</li>
        <li>Att gåvan är förenad med nyttjanderätt för givaren (t.ex. rätt att bo kvar i huset)</li>
        <li>Att gåvan inte får överlåtas vidare till tredje part</li>
      </ul>

      <h3>Är gåvor skattepliktiga?</h3>
      <p>Sverige har ingen gåvoskatt sedan 2005. Däremot kan det uppstå kapitalvinstskatt om mottagaren senare säljer egendomen till ett pris över anskaffningsvärdet (givarens ursprungliga inköpspris). Konsultera gärna en skatterådgivare vid gåvor av fastigheter.</p>
    </div>
  ),
  faqs: [
    { question: 'Är gåvor skattefria i Sverige?', answer: 'Ja, Sverige avskaffade gåvoskatten 2005. Mottagaren behöver inte betala skatt på gåvan. Däremot kan en framtida försäljning av gåvan utlösa kapitalvinstskatt, beräknad på skillnaden mellan försäljningspriset och givarens ursprungliga anskaffningsvärde.' },
    { question: 'Kan en gåva återkallas?', answer: 'Normalt inte. En fullbordad gåva (dvs. egendom som faktiskt överlämnats) kan inte ensidigt återkallas av givaren. Undantag kan gälla om mottagaren gjort sig skyldig till grovt otacksamhet mot givaren (t.ex. allvarlig brottslighet mot givaren).' },
    { question: 'Behöver gåvobrevet bevittnas?', answer: 'Det beror på vad som ges bort. Vid gåva av fast egendom ställer Jordabalken krav på skriftlighet och underskrift, men inga krav på vittnen. För att stärka bevisläget rekommenderas dock alltid vittnen.' },
    { question: 'Vad händer om man ger bort sin bostad men vill bo kvar?', answer: 'Det är möjligt att i gåvobrevet förbehålla sig en nyttjanderätt till bostaden under sin livstid. Nyttjanderätten bör registreras hos Lantmäteriet. Observera att detta kan ha skattemässiga konsekvenser.' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>GÅVOBREV</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat gåvobrev för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
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
