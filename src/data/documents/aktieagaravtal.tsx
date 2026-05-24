import { DocumentTemplate } from '../templates';

export const aktieagaravtal: DocumentTemplate = {
  slugs: {
    sv: 'aktieagaravtal',
    en: 'shareholders-agreement',
    us: 'shareholders-agreement',
    uk: 'shareholders-agreement',
    de: 'gesellschaftervereinbarung',
    fr: 'pacte-dactionnaires',
    es: 'pacto-de-socios'
  },
  title: 'Aktieägaravtal',
  category: 'Företag & Affärer',
  description: 'Reglera förhållandet mellan aktieägarna i ett fåmansaktiebolag för att undvika framtida tvister.',
  author: {
    name: 'Veridoca Legal Team',
    role: 'Corporate Law Experts at Digisoul Media'
  },
  seoArticle: (
    <div className="seo-article">
      <h2>Varför behöver ett bolag ett Aktieägaravtal?</h2>
      <p>Ett aktieägaravtal är ett frivilligt men extremt kritiskt avtal som sluts mellan aktieägarna i ett aktiebolag (AB). Aktiebolagslagen (ABL) ger en grundläggande juridisk ram, men den är skriven för att passa alla företag och saknar de specifika skyddsnät som delägare i fåmansbolag och startups behöver. Ett aktieägaravtal kompletterar bolagsordningen och reglerar det som inte står i lagen.</p>
      
      <h3>Vad händer om en delägare vill sluta?</h3>
      <p>Den vanligaste orsaken till tvister i små och medelstora företag uppstår när en delägare vill kliva av, blir sjuk, eller inte längre bidrar till verksamheten. Utan ett aktieägaravtal kan delägaren tekniskt sett sluta jobba, behålla alla sina aktier och fortsätta få utdelning på det arbete som de andra delägarna utför. Ett aktieägaravtal innehåller oftast en "vesting-klausul" (intjänande av aktier) eller en hembudsklausul/inlösenrätt som tvingar den avhoppande delägaren att sälja tillbaka sina aktier.</p>

      <h3>Viktiga klausuler i ett Aktieägaravtal</h3>
      <ul>
        <li><strong>Drag-along (Medförsäljningsrätt):</strong> Om en majoritet av aktieägarna vill sälja bolaget kan de tvinga minoriteten att också sälja sina aktier på samma villkor. Utan detta kan en minoritetsägare blockera en försäljning av hela bolaget.</li>
        <li><strong>Tag-along (Medförsäljningsskyldighet):</strong> Skyddar minoriteten. Om majoritetsägaren säljer sina aktier, har minoriteten rätt att sälja sina aktier på samma villkor.</li>
        <li><strong>Hembud / Förköpsrätt:</strong> Om en delägare vill sälja sina aktier externt måste de först erbjudas till de befintliga delägarna.</li>
        <li><strong>Arbetsplikt och Konkurrensförbud:</strong> Krav på att delägarna ska arbeta heltid i bolaget och förbud mot att starta eller arbeta för konkurrerande verksamheter.</li>
      </ul>
    </div>
  ),
  faqs: [
    { question: "Måste aktieägaravtalet registreras hos Bolagsverket?", answer: "Nej, till skillnad från bolagsordningen är aktieägaravtalet ett strikt internt och konfidentiellt dokument mellan parterna. Det ska inte skickas in till Bolagsverket." },
    { question: "Vad händer om bolagsordningen och aktieägaravtalet säger emot varandra?", answer: "Bolagsordningen är ett offentligt dokument som är bindande för själva bolaget. Aktieägaravtalet är bindande mellan aktieägarna. Om de säger emot varandra är det aktieägaravtalet som styr hur ägarna ska rösta på bolagsstämman, men beslut fattade enligt bolagsordningen är juridiskt giltiga för tredje part." },
    { question: "Gäller aktieägaravtalet för evigt?", answer: "Oftast gäller avtalet så länge en part äger aktier i bolaget. Det upphör att gälla för den part som säljer alla sina aktier." }
  ],
  fields: [
    { id: 'companyName', label: 'Bolagets Namn', type: 'text', placeholder: 'Ditt Bolag AB' },
    { id: 'orgnr', label: 'Organisationsnummer', type: 'text', placeholder: '556000-0000' },
    { id: 'shareholder1', label: 'Aktieägare 1', type: 'text' },
    { id: 'share1', label: 'Antal aktier (Ägare 1)', type: 'number' },
    { id: 'shareholder2', label: 'Aktieägare 2', type: 'text' },
    { id: 'share2', label: 'Antal aktier (Ägare 2)', type: 'number' },
    { id: 'city', label: 'Ort', type: 'text' },
    { id: 'date', label: 'Dagens datum', type: 'date' }
  ],
  content: (data) => (
    <div className="document-body">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>AKTIEÄGARAVTAL</h1>
      <p>Detta aktieägaravtal avseende <strong>{data.companyName || '_________________'}</strong>, org.nr {data.orgnr || '____________'}, ("Bolaget") har denna dag träffats mellan följande parter:</p>
      
      <ul>
        <li><strong>{data.shareholder1 || '_________________'}</strong> innehavande av {data.share1 ? data.share1 + ' st' : '____'} aktier.</li>
        <li><strong>{data.shareholder2 || '_________________'}</strong> innehavande av {data.share2 ? data.share2 + ' st' : '____'} aktier.</li>
      </ul>

      <h2>1. Syfte</h2>
      <p>Syftet med detta Avtal är att reglera Parternas inbördes förhållande som aktieägare i Bolaget, Bolagets förvaltning samt att säkerställa att Bolaget drivs i enlighet med Parternas gemensamma vilja.</p>

      <h2>2. Arbetsplikt och Konkurrensförbud</h2>
      <p>Parterna förbinder sig att ägna sin fulla arbetskraft och yrkesmässiga verksamhet åt Bolaget. Part äger inte rätt att, utan övriga Parters skriftliga godkännande, bedriva verksamhet som konkurrerar med Bolaget, vare sig direkt eller indirekt.</p>

      <h2>3. Överlåtelse av aktier (Hembud)</h2>
      <p>Ingen Part får överlåta eller pantsätta sina aktier i Bolaget utan övriga Parters skriftliga samtycke. Skulle en Part önska överlåta sina aktier ska dessa först hembjudas till övriga Parter i enlighet med hembudsklausulen i Bolagets bolagsordning.</p>

      <h2>4. Avtalstid</h2>
      <p>Detta Avtal gäller så länge mer än en av Parterna är aktieägare i Bolaget.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '4rem' }}>
        <div>
          <p>Ort och datum: <strong>{data.city || '_________'}</strong>, <strong>{data.date || '_________'}</strong></p>
          <br/><br/>
          <p>___________________________________</p>
          <p><strong>{data.shareholder1 || 'Aktieägare 1'}</strong></p>
        </div>
        <div>
          <p>Ort och datum: <strong>{data.city || '_________'}</strong>, <strong>{data.date || '_________'}</strong></p>
          <br/><br/>
          <p>___________________________________</p>
          <p><strong>{data.shareholder2 || 'Aktieägare 2'}</strong></p>
        </div>
      </div>
    </div>
  )
};
