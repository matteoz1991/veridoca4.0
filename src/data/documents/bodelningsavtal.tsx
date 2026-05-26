import { DocumentTemplate } from '../templates';

export const bodelningsavtal: DocumentTemplate = {
  title: 'Bodelningsavtal',
  category: 'Familj & Relationer',
  slugs: {
    'sv': 'bodelningsavtal',
    'en': 'property-division-agreement',
    'us': 'property-division',
    'uk': 'property-division',
    'de': 'guetertrennungsvertrag',
    'fr': 'accord-partage-biens',
    'es': 'acuerdo-division-bienes'
},
  description: 'Upprätta ett bodelningsavtal vid skilsmässa eller separation som sambo. Dokumenterar hur tillgångar och skulder fördelas.',
  author: { name: 'Veridoca Legal Team', role: 'Legal Experts at Digisoul Media' },
  seoArticle: (
    <div>
      <h2>Vad är ett bodelningsavtal?</h2>
      <p>Ett bodelningsavtal är ett juridiskt dokument som reglerar hur makar eller sambos tillgångar och skulder fördelas när ett förhållande tar slut – antingen vid skilsmässa, separation, eller dödsfall. Avtalet är resultatet av bodelningsprocessen och dokumenterar vad vardera part får behålla.</p>

      <h3>När behövs ett bodelningsavtal?</h3>
      <p><strong>Skilsmässa:</strong> Vid äktenskapsskillnad är bodelning obligatorisk om någon av parterna begär det. Alla tillgångar och skulder som räknas som "giftorättsgods" ska ingå i bodelningen och fördelas lika netto.</p>
      <p><strong>Samboseparation:</strong> Vid separation som sambos är bodelning frivillig men måste begäras inom ett år. Bodelningen gäller bara samboegendom (gemensam bostad och bohag köpt för gemensamt bruk).</p>
      <p><strong>Dödsfall:</strong> Bodelning sker också när en make/sambo dör, för att fastställa den efterlevandes egendom innan arvet fördelas.</p>

      <h3>Vad ingår i bodelningen?</h3>
      <p>Vid skilsmässa ingår allt giftorättsgods – i princip all egendom som makarna förvärvat under äktenskapet (och i vissa fall innan). <strong>Enskild egendom</strong> (reglerat i äktenskapsförord, ärvd eller mottagen som gåva med villkor) ingår inte.</p>

      <h3>Måste vi anlita en bodelningsförrättare?</h3>
      <p>Nej, ni kan göra bodelningen själva om ni är överens. Är ni inte överens kan tingsrätten utse en <strong>bodelningsförrättare</strong> (normalt en advokat) som hjälper till. Det är dyrt – en bodelningsförrättare kan kosta 30 000–150 000 kr beroende på komplexitet.</p>
      <p>Kan ni enas är en gratismall det klart förmånligaste alternativet.</p>

      <h3>Bodelningsavtalet måste vara skriftligt</h3>
      <p>Bodelningsavtalet ska upprättas skriftligen och undertecknas av båda parter. Banker och myndigheter kräver ett signerat bodelningsavtal vid t.ex. ägarbyte av fastighet eller bostadsrätt.</p>
    </div>
  ),
  faqs: [
    { question: 'Är bodelning obligatoriskt vid skilsmässa?', answer: 'Bodelning är obligatorisk om någon av makarna begär det. Om ingen begär bodelning behåller vardera make sin egendom. Men för att skilja på era tillgångar officiellt och undvika framtida tvister rekommenderas alltid ett skriftligt bodelningsavtal.' },
    { question: 'Hur lång tid tar en bodelning?', answer: 'Om ni är överens kan ni upprätta och underteckna ett bodelningsavtal på en dag. Är ni oeniga och behöver en bodelningsförrättare kan processen ta månader.' },
    { question: 'Måste bodelningsavtalet registreras?', answer: 'Bodelningsavtalet i sig behöver inte registreras, men om äganderätten till en fastighet övergår via bodelningen måste detta registreras som lagfart hos Lantmäteriet.' },
    { question: 'Kan vi ångra ett undertecknat bodelningsavtal?', answer: 'Normalt inte. Ett undertecknat bodelningsavtal är bindande. Det kan i undantagsfall jämkas om det är uppenbart oskäligt (t.ex. om en part blivit vilseledd), men det kräver domstolsbeslut.' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>BODELNINGSAVTAL</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat bodelningsavtal för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
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
