import { DocumentTemplate } from '../templates';

export const kopekontrakt_bil: DocumentTemplate = {
  title: 'Köpekontrakt Bil',
  category: 'Privat & Övrigt',
  slugs: {
    'sv': 'kopekontrakt-bil',
    'en': 'car-purchase-agreement',
    'us': 'car-sale-contract',
    'uk': 'car-sale-agreement',
    'de': 'kfz-kaufvertrag',
    'fr': 'contrat-vente-voiture',
    'es': 'contrato-compraventa-vehiculo'
},
  description: 'Skapa ett juridiskt bindande köpekontrakt bil snabbt och enkelt. Dokumenterar köpeskilling, fordonets skick och säljarens ansvar.',
  author: {
    name: 'Veridoca Legal Team',
    role: 'Legal Experts at Digisoul Media'
  },
  seoArticle: (
    <div>
      <h2>Vad är ett köpekontrakt bil?</h2>
      <p>Ett köpekontrakt för bil är ett skriftligt avtal som dokumenterar försäljningen av ett fordon mellan säljare och köpare. Det slår fast köpeskilling, fordonets registreringsnummer och skick, och reglerar ansvaret för eventuella fel.</p>
      <p>Vid bilköp och bilförsäljning privat gäller <strong>Köplagen</strong> (inte Konsumentköplagen som gäller vid köp från bilhandlare). Det innebär att reklamationsrätten ser annorlunda ut och att köparen har ett större ansvar att undersöka bilen noggrant.</p>

      <h3>Varför är ett skriftligt köpekontrakt viktigt?</h3>
      <p>Utan ett skriftligt köpekontrakt kan det uppstå allvarliga tvister om:</p>
      <ul>
        <li>Vad priset faktiskt var</li>
        <li>Vilka eventuella fel säljaren kände till</li>
        <li>Om försäljningen skedde "i befintligt skick"</li>
        <li>Vem som ansvarar för obetalda skulder på fordonet</li>
        <li>När äganderätten övergick till köparen</li>
      </ul>

      <h3>Vad ska ett köpekontrakt innehålla?</h3>
      <p>Ett komplett köpekontrakt för bil bör innehålla:</p>
      <ul>
        <li>Säljarens och köparens fullständiga namn och personnummer</li>
        <li>Fordonets registreringsnummer, märke, modell och årsmodell</li>
        <li>Fordons-/chassinummer (VIN)</li>
        <li>Köpeskilling och betalningssätt</li>
        <li>Mätarställning vid överlåtelsen</li>
        <li>Eventuella kända fel</li>
        <li>Om försäljningen sker "i befintligt skick"</li>
        <li>Datum för överlåtelsen</li>
        <li>Bägge parters underskrifter</li>
      </ul>

      <h3>Kontrollera skulder och ägarförhållanden</h3>
      <p>Innan du köper en bil privat – kontrollera alltid via Transportstyrelsen att säljaren verkligen är registrerad ägare och att det inte finns några utestående lån (pantbrev) på fordonet. En skuldsatt bil kan innebära att du köper en bil som kreditgivaren har rätt att ta tillbaka.</p>

      <h3>Ägarbytet hos Transportstyrelsen</h3>
      <p>Ägarbytet måste anmälas till Transportstyrelsen. Säljaren ska göra en ägarbytet-anmälan senast vid överlåtelsen för att undvika ansvar för eventuella trafikbrott eller parkeringsböter som sker efter försäljningen.</p>
    </div>
  ),
  faqs: [
    { question: 'Vad händer om bilen har dolda fel efter köpet?', answer: 'Vid köp mellan privatpersoner gäller Köplagen. Säljaren ansvarar för dolda fel som funnits vid köptillfället och som köparen inte kände till eller borde ha upptäckt vid en normal undersökning. "I befintligt skick"-klausuler begränsar säljarens ansvar men eliminerar det inte helt.' },
    { question: 'Behöver vi ett vittne på köpekontraktet?', answer: 'Nej, ett köpekontrakt för bil behöver inte bevittnas för att vara juridiskt bindande. Men vittnen kan stärka bevisläget om en tvist uppstår.' },
    { question: 'Vad är Köplagen och hur skiljer den sig från Konsumentköplagen?', answer: 'Köplagen gäller vid köp mellan privatpersoner och ger köparen ett svagare skydd. Konsumentköplagen gäller när en privatperson köper av ett företag och ger starkare rättigheter, bl.a. 3 års reklamationsrätt. Vid privat bilköp gäller alltså Köplagen.' },
    { question: 'Kan säljaren ångra bilförsäljningen?', answer: 'Nej, normalt inte. När avtalet ingåtts är det bindande för båda parter. En säljare som ångrar sig och vägrar leverera kan bli skadeståndsskyldig.' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>KÖPEKONTRAKT BIL</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat köpekontrakt bil för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
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
