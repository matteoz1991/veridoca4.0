import { DocumentTemplate } from '../templates';

export const kopavtal_foretag: DocumentTemplate = {
  title: 'Köpavtal Företag',
  category: 'Företag & Affärer',
  slugs: {
    'sv': 'kopavtal-foretag',
    'en': 'business-purchase-agreement',
    'us': 'business-purchase-agreement',
    'uk': 'business-purchase',
    'de': 'unternehmenskaufvertrag',
    'fr': 'contrat-vente-entreprise',
    'es': 'contrato-compraventa-empresa'
},
  description: 'Skapa ett B2B-köpavtal för handel mellan företag. Reglerar pris, leverans, garantier och reklamation vid försäljning av varor.',
  author: { name: 'Veridoca Legal Team', role: 'Legal Experts at Digisoul Media' },
  seoArticle: (
    <div>
      <h2>Vad är ett köpavtal för företag (B2B)?</h2>
      <p>Ett köpavtal för företag reglerar köp och försäljning av varor mellan juridiska personer. Till skillnad från konsumentköp gäller <strong>Köplagen</strong> och inte Konsumentköplagen, vilket ger parterna större avtalsfrihet och innebär att köparen har ett starkare eget ansvar att undersöka varan.</p>

      <h3>Skillnader mot konsumentköp</h3>
      <p>Vid B2B-handel:</p>
      <ul>
        <li>Köparen (företaget) har en längre undersökningsplikt och kortare reklamationstid</li>
        <li>Parterna kan avtala bort garantier och begränsa ansvar på sätt som inte är möjligt mot konsumenter</li>
        <li>Inga ångerrättsregler (ingen 14-dagars ångerrätt)</li>
        <li>Parterna kan fritt avtala om leveransvillkor, riskövergång och betalning</li>
      </ul>

      <h3>Viktiga klausuler i ett B2B-köpavtal</h3>
      <ul>
        <li><strong>Varuspecifikation:</strong> Exakt vad som säljs, specifikationer, kvantitet och kvalitet</li>
        <li><strong>Pris och betalning:</strong> Pris exkl./inkl. moms, betalningsvillkor, dröjsmålsränta</li>
        <li><strong>Leverans:</strong> Leveransadress, leveranstid, leveransvillkor (Incoterms)</li>
        <li><strong>Riskövergång:</strong> När övergår risken för varan från säljare till köpare</li>
        <li><strong>Garantier:</strong> Vad säljaren garanterar om varans skick och egenskaper</li>
        <li><strong>Reklamation:</strong> Reklamationstid och -förfarande</li>
        <li><strong>Force majeure:</strong> Undantag vid händelser utanför parternas kontroll</li>
      </ul>

      <h3>Incoterms – leveransvillkor</h3>
      <p>Vid internationell handel används ofta Incoterms (ex. EXW, FOB, CIF, DAP) för att reglera när risken övergår och vem som ansvarar för frakt och försäkring. Ange alltid tillämplig Incoterms-version och leveransplats tydligt.</p>

      <h3>Äganderättsförbehåll</h3>
      <p>Säljare kan skydda sig mot köparens insolvens genom ett <strong>äganderättsförbehåll</strong> – en klausul som innebär att säljaren behåller äganderätten till varan tills betalning skett. Detta ger säljaren prioritet att ta tillbaka varan vid köparens konkurs.</p>
    </div>
  ),
  faqs: [
    { question: 'Vad är Köplagen och när gäller den?', answer: 'Köplagen (1990:931) gäller vid köp av varor mellan parter som inte är konsumenter (dvs. B2B, privatperson till privatperson, och privatperson köper av företag). Köplagen är dispositiv, vilket innebär att parterna kan avtala bort dess regler.' },
    { question: 'Hur lång är reklamationstiden vid B2B-köp?', answer: 'Köplagen ger ingen specifik tidsgräns men kräver att köparen reklamerar "inom skälig tid" efter att felet upptäckts eller borde ha upptäckts. I praktiken innebär det normalt 1–2 månader från undersökningstillfället.' },
    { question: 'Vad är ett äganderättsförbehåll?', answer: 'En klausul som innebär att säljaren behåller äganderätten till varan tills köparen betalat fullt ut. Ger säljaren rätt att ta tillbaka varan om köparen inte betalar eller går i konkurs.' },
    { question: 'Gäller momsreglerna annorlunda vid B2B?', answer: 'Ja, vid B2B-handel är det ofta möjligt att använda omvänd skattskyldighet (reverse charge) inom EU. Det innebär att köparen snarare än säljaren redovisar momsen. Kontrollera momsreglerna för din bransch och ditt land.' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>KÖPAVTAL FÖRETAG</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat köpavtal företag för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
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
