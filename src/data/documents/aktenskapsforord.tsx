import { DocumentTemplate } from '../templates';

export const aktenskapsforord: DocumentTemplate = {
  title: 'Äktenskapsförord',
  category: 'Familj & Relationer',
  slugs: {
    'sv': 'aktenskapsforord',
    'en': 'prenuptial-agreement',
    'us': 'prenuptial-agreement',
    'uk': 'prenup',
    'de': 'ehevertrag',
    'fr': 'contrat-mariage',
    'es': 'acuerdo-prenupcial'
},
  description: 'Skapa ett juridiskt bindande äktenskapsförord snabbt och enkelt.',
  author: {
    name: 'Veridoca Legal Team',
    role: 'Legal Experts at Digisoul Media'
  },
  seoArticle: (
    <div>
      <h2>Vad är ett äktenskapsförord?</h2>
      <p>Ett äktenskapsförord är ett skriftligt avtal mellan blivande eller befintliga makar som reglerar hur egendom ska fördelas vid eventuell skilsmässa eller dödsfall. Utan ett äktenskapsförord gäller Äktenskapsbalken, vilket innebär att all s.k. <strong>giftorättsgods</strong> delas lika (50/50) vid en bodelning – oavsett vem som betalade för vad.</p>
      <p>Med ett äktenskapsförord kan ni avtala om att viss eller all egendom ska vara <strong>enskild egendom</strong>, vilket innebär att den tillhör enbart den make som äger den och inte ingår i en eventuell bodelning.</p>

      <h3>Typiska situationer där äktenskapsförord är viktigt</h3>
      <ul>
        <li><strong>Ojämna tillgångar:</strong> Om en av makarna äger en bostad, ett företag eller har betydligt mer sparande kan ett äktenskapsförord skydda dessa tillgångar.</li>
        <li><strong>Arv och gåvor:</strong> Om ni förväntar er att ärva eller om föräldrar vill ge gåvor med krav på att egendomen stannar i familjen.</li>
        <li><strong>Omgifte med barn:</strong> Om en av makarna har barn sedan tidigare och vill säkerställa att dessa barns arv inte påverkas.</li>
        <li><strong>Eget företag:</strong> Om en av makarna driver ett företag och vill skydda det vid en eventuell separation.</li>
      </ul>

      <h3>Registrering hos Skatteverket är obligatorisk</h3>
      <p>Till skillnad från ett samboavtal måste ett äktenskapsförord <strong>registreras hos Skatteverket</strong> för att vara giltigt. Det räcker inte att det är underskrivet – utan registrering har det ingen juridisk verkan. Ansökan om registrering skickas in till Skatteverket och kostar 275 kr (2025).</p>
      <p>Handläggningstiden är normalt 1–4 veckor. Ni kan registrera ett äktenskapsförord när som helst under äktenskapet – inte bara inför vigseln.</p>

      <h3>Vad kan äktenskapsförordet inte reglera?</h3>
      <p>Det finns gränser för vad ett äktenskapsförord kan innehålla. Det kan exempelvis inte avskriva en makes rätt till underhållsbidrag, reglera vårdnad om barn, eller strida mot tvingande bestämmelser i Äktenskapsbalken.</p>

      <h3>Äktenskapsförord kontra testamente</h3>
      <p>Äktenskapsförordet reglerar vad som händer vid <em>skilsmässa</em>. Vad som händer vid dödsfall regleras av arvslagstiftningen. Om ni vill säkerställa att ni ärver varandra – eller att barnen ärver på ett visst sätt – behöver ni komplettera med ett <strong>testamente</strong>.</p>

      <h3>Kan vi ändra äktenskapsförordet?</h3>
      <p>Ja, ni kan när som helst skriva ett nytt äktenskapsförord som ändrar eller ersätter det tidigare. Det nya avtalet måste undertecknas av båda makarna och registreras hos Skatteverket för att träda i kraft.</p>
    </div>
  ),
  faqs: [
    { question: 'Måste äktenskapsförordet registreras hos Skatteverket?', answer: 'Ja, ett äktenskapsförord är inte giltigt förrän det registrerats hos Skatteverket. Det skickas in skriftligen och kostar 275 kr (2025). Utan registrering har avtalet ingen rättslig verkan.' },
    { question: 'Kan vi skriva äktenskapsförord efter att vi gift oss?', answer: 'Ja, ett äktenskapsförord kan upprättas när som helst under äktenskapet – inte bara inför vigseln. Det träder i kraft efter registrering hos Skatteverket.' },
    { question: 'Behöver äktenskapsförordet bevittnas?', answer: 'Nej, ett äktenskapsförord behöver inte bevittnas av vittnen enligt svensk lag. Det räcker att det är skriftligt, undertecknat av båda makarna, och registrerat hos Skatteverket.' },
    { question: 'Vad är skillnaden mellan äktenskapsförord och samboavtal?', answer: 'Samboavtal gäller sambos och behöver inte registreras. Äktenskapsförord gäller makar och måste registreras hos Skatteverket. Gifter ni er upphör sambolagen och samboavtalet gäller inte längre – ni behöver då ett äktenskapsförord.' },
  ],
  fields: [
    { id: 'partyA', label: 'Part A', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'partyB', label: 'Part B', type: 'text', placeholder: 'Namn/Företag' },
    { id: 'date', label: 'Datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-content">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>ÄKTENSKAPSFÖRORD</h2>
      
      <p>Detta avtal ("Avtalet") har upprättats datumet <strong>{data.date || '_________'}</strong> mellan:</p>
      
      <ol style={{ marginBottom: '2rem' }}>
        <li><strong>{data.partyA || '_________'}</strong> (hädanefter benämnd "Part A")</li>
        <li><strong>{data.partyB || '_________'}</strong> (hädanefter benämnd "Part B")</li>
      </ol>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Bakgrund och Syfte</h3>
      <p>Detta är ett standardiserat äktenskapsförord för Veridoca. Parterna är överens om villkoren angivna i detta dokument.</p>
      
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
