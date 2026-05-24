import { DocumentTemplate } from '../templates';

export const framtidsfullmakt: DocumentTemplate = {
  slugs: {
    sv: 'framtidsfullmakt',
    en: 'lasting-power-of-attorney',
    us: 'lasting-power-of-attorney',
    uk: 'lasting-power-of-attorney',
    de: 'vorsorgevollmacht',
    fr: 'mandat-de-protection-future',
    es: 'poder-preventivo'
  },
  title: 'Framtidsfullmakt',
  category: 'Familj & Relationer',
  description: 'Bestäm vem som ska ta hand om dina ekonomiska och personliga angelägenheter om du i framtiden inte längre kan göra det själv.',
  author: {
    name: 'Veridoca Legal Team',
    role: 'Legal Experts at Digisoul Media'
  },
  seoArticle: (
    <div className="seo-article">
      <h2>Vad är en Framtidsfullmakt?</h2>
      <p>En framtidsfullmakt är ett relativt nytt juridiskt dokument i Sverige (infördes 2017) som ger dig makten att i förväg bestämma vem eller vilka som ska representera dig om du i framtiden skulle förlora din beslutsförmåga. Förlust av beslutsförmåga kan bero på demenssjukdom, psykisk störning, olycka eller liknande omständigheter.</p>
      
      <h3>Ett alternativ till God Man</h3>
      <p>Innan framtidsfullmakten infördes var det enda alternativet att tingsrätten utsåg en god man eller förvaltare. Detta var ofta en trög byråkratisk process och det fanns ingen garanti för att uppdraget gick till någon du kände väl. Med en framtidsfullmakt ligger kontrollen hos dig; du utser en person du litar på till 100%, oftast en make/maka, ett vuxet barn eller en nära vän.</p>

      <h3>Vad får fullmaktshavaren göra?</h3>
      <p>Du bestämmer själv omfattningen av fullmakten. Den täcker normalt:</p>
      <ul>
        <li><strong>Ekonomiska angelägenheter:</strong> Betala räkningar, hantera bankkonton, förvalta aktier och sälja fastigheter (vid specifikt omnämnande).</li>
        <li><strong>Personliga angelägenheter:</strong> Kontakter med vården, ansökan om hemtjänst eller plats på äldreboende.</li>
      </ul>
      <p>En framtidsfullmakt får dock <em>aldrig</em> gälla frågor av extremt personlig karaktär, såsom att ingå äktenskap eller upprätta ett testamente i ditt ställe.</p>
      
      <h3>Strikta formkrav</h3>
      <p>Formkraven för en framtidsfullmakt är exakt desamma som för ett testamente (enligt Lag 2017:310 om framtidsfullmakter). Den måste vara skriftlig, du måste vara över 18 år och kunna förstå vad du gör, och den måste bevittnas av två samtidigt närvarande vittnen som inte är jäviga (dvs. de får inte vara fullmaktshavare eller nära släkt med denne).</p>
    </div>
  ),
  faqs: [
    { question: "När börjar en framtidsfullmakt gälla?", answer: "Den börjar gälla när du inte längre har förmåga att ta hand om dina angelägenheter. Det är oftast fullmaktshavaren själv som bedömer när detta inträffat, men det kan också finnas villkor i fullmakten att ett läkarintyg krävs." },
    { question: "Måste framtidsfullmakten registreras någonstans?", answer: "Nej, en framtidsfullmakt behöver inte registreras hos någon myndighet i förväg. Fullmaktshavaren visar upp originalet för banken eller vården när den väl ska användas." },
    { question: "Kan jag utse flera fullmaktshavare?", answer: "Ja, det går alldeles utmärkt. Du kan utse dem att agera var för sig, i förening (gemensamt), eller ange en i första hand och en annan i andra hand (substitut)." }
  ],
  fields: [
    { id: 'fullmaktsgivare', label: 'Ditt namn (Fullmaktsgivare)', type: 'text' },
    { id: 'pnr1', label: 'Ditt personnummer', type: 'text' },
    { id: 'fullmaktshavare', label: 'Fullmaktshavarens namn', type: 'text' },
    { id: 'pnr2', label: 'Fullmaktshavarens personnummer', type: 'text' },
    { id: 'city', label: 'Ort', type: 'text' },
    { id: 'date', label: 'Dagens datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-body">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>FRAMTIDSFULLMAKT</h1>
      <p>Härmed förordnar jag, <strong>{data.fullmaktsgivare || '_________________'}</strong> ({data.pnr1 || '____________'}), denna framtidsfullmakt enligt lagen (2017:310) om framtidsfullmakter.</p>
      
      <h2>1. Förordnande</h2>
      <p>Jag utser <strong>{data.fullmaktshavare || '_________________'}</strong> ({data.pnr2 || '____________'}) till min fullmaktshavare. Denna fullmakt träder i kraft den dag jag på grund av sjukdom, psykisk störning, försvagat hälsotillstånd eller liknande förhållande varaktigt och i huvudsak inte längre har förmåga att ha hand om de angelägenheter som fullmakten avser.</p>

      <h2>2. Fullmaktens omfattning</h2>
      <p>Denna framtidsfullmakt ger fullmaktshavaren rätt att företräda mig i såväl ekonomiska som personliga angelägenheter.</p>
      <ul>
        <li>Rätt att förvalta mina bankkonton, betala löpande räkningar och sköta deklaration.</li>
        <li>Rätt att teckna, ändra och säga upp avtal rörande exempelvis bostad, el, telefoni och försäkringar.</li>
        <li>Rätt att företräda mig inför myndigheter, sjukvård och socialtjänst för att tillvarata mina intressen och ansöka om insatser.</li>
      </ul>

      <h2>3. Ikraftträdande</h2>
      <p>Det ankommer på fullmaktshavaren att bedöma när fullmakten ska träda i kraft. Jag kräver inte att tingsrätten ska pröva ikraftträdandet.</p>

      <div style={{ marginTop: '4rem' }}>
        <p>Ort och datum: <strong>{data.city || '_________'}</strong>, <strong>{data.date || '_________'}</strong></p>
        <br/><br/><br/>
        <p>___________________________________</p>
        <p><strong>{data.fullmaktsgivare || 'Fullmaktsgivarens namn'}</strong></p>
      </div>

      <div style={{ marginTop: '4rem', padding: '2rem', border: '1px solid #000' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Vittnesmening</h2>
        <p style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>Att fullmaktsgivaren, som vi personligen känner, är vid sunt och fullt förstånd och av fri vilja förklarat sig upprätta denna framtidsfullmakt intygar vi, på en och samma gång närvarande vittnen.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <p>___________________________________</p>
            <p style={{ fontSize: '0.9rem' }}>Vittne 1 Namnteckning & Namnförtydligande</p>
          </div>
          <div>
            <p>___________________________________</p>
            <p style={{ fontSize: '0.9rem' }}>Vittne 2 Namnteckning & Namnförtydligande</p>
          </div>
        </div>
      </div>
    </div>
  )
};
