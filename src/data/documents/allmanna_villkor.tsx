import { DocumentTemplate } from '../templates';

export const allmanna_villkor: DocumentTemplate = {
  title: 'Allmänna Villkor',
  category: 'Företag & Affärer',
  slugs: {
    'sv': 'allmanna-villkor',
    'en': 'terms-and-conditions',
    'us': 'terms-and-conditions',
    'uk': 'terms-of-service',
    'de': 'agb',
    'fr': 'conditions-generales',
    'es': 'terminos-condiciones'
},
  description: 'Skapa juridiskt korrekta allmänna villkor för din verksamhet. Reglerar köp, betalning, reklamation och ansvar gentemot dina kunder.',
  author: { name: 'Veridoca Legal Team', role: 'Legal Experts at Digisoul Media' },
  seoArticle: (
    <div>
      <h2>Vad är allmänna villkor?</h2>
      <p>Allmänna villkor (Terms and Conditions) är ett standarddokument som reglerar de juridiska villkoren för din verksamhets produkter eller tjänster. De fungerar som ett avtal mellan dig och dina kunder och specificerar rättigheter, skyldigheter och ansvarsbegränsningar.</p>

      <h3>Varför behöver din verksamhet allmänna villkor?</h3>
      <p>Utan tydliga allmänna villkor riskerar du att:</p>
      <ul>
        <li>Konsumentköplagen ger dina kunder mer rättigheter än du planerat (t.ex. längre reklamationsrätt)</li>
        <li>Tvist uppstår om vad som ingår i priset eller leveransen</li>
        <li>Du saknar rätt att begränsa ditt skadeståndsansvar</li>
        <li>Oenighet om betalningsvillkor och dröjsmålsränta</li>
      </ul>

      <h3>B2C vs B2B: Viktiga skillnader</h3>
      <p><strong>Konsumentkunder (B2C):</strong> Konsumentköplagen och konsumenttjänstlagen innehåller tvingande regler till förmån för konsumenten som inte kan avtalas bort. Exempelvis kan du inte ta bort konsumentens 3-åriga reklamationsrätt eller rätten att reklamera fel.</p>
      <p><strong>Företagskunder (B2B):</strong> Köplagen gäller och ger parterna mer avtalsfrihet. Du kan i högre utsträckning begränsa garantier, ansvar och reklamationstid.</p>

      <h3>Vad bör allmänna villkor innehålla?</h3>
      <ul>
        <li>Priser, moms och betalningsvillkor</li>
        <li>Leveranstider och leveransansvar</li>
        <li>Ångerrätt (14 dagar vid distanshandel till konsumenter)</li>
        <li>Reklamation och garantivillkor</li>
        <li>Ansvarsbegränsning (t.ex. max 1 × fakturabelopp)</li>
        <li>Immateriella rättigheter</li>
        <li>Personuppgiftshantering (hänvisning till integritetspolicy)</li>
        <li>Tillämplig lag och tvistelösning</li>
      </ul>

      <h3>Hur gör du villkoren bindande?</h3>
      <p>För att allmänna villkor ska gälla mot en kund måste de ha haft <em>möjlighet att ta del av dem</em> innan köpet. Vid webshop: lägg en tydlig länk och kryssruta för godkännande i kassan. Villkoren bör också vara tillgängliga permanent på din webbplats.</p>
    </div>
  ),
  faqs: [
    { question: 'Är allmänna villkor bindande om kunden inte läst dem?', answer: 'Ja, om kunden haft möjlighet att ta del av villkoren och accepterat dem (t.ex. via en kryssruta) är de bindande – även om kunden inte läst dem. Men villkor som är ovanligt betungande eller skäligen okänt innehåll kan jämkas av domstol.' },
    { question: 'Kan jag ta bort konsumentens ångerrätt?', answer: 'Nej. Konsumenter har en lagstadgad 14-dagars ångerrätt vid distanshandel (e-handel, telefonförsäljning) och avtal ingångna utanför affärslokaler. Denna rätt är tvingande och kan inte avtalas bort.' },
    { question: 'Hur ofta bör jag uppdatera mina allmänna villkor?', answer: 'Se över villkoren minst en gång per år och alltid när du ändrar din verksamhet, dina priser, eller när relevant lagstiftning ändras. Informera befintliga kunder om väsentliga ändringar.' },
    { question: 'Vad händer utan allmänna villkor?', answer: 'Utan egna villkor gäller dispositiv lagstiftning (Köplagen, konsumentköplagen etc.) fullt ut. Du saknar möjlighet att begränsa ditt ansvar och kan drabbas av tvister om villkor du inte planerat att erbjuda.' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>ALLMÄNNA VILLKOR</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat allmänna villkor för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
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
