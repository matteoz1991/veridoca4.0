import { DocumentTemplate } from '../templates';

export const sekretessavtal: DocumentTemplate = {
  slugs: {
    sv: 'sekretessavtal-nda',
    en: 'nda-agreement',
    us: 'nda-agreement',
    uk: 'nda-agreement',
    de: 'geheimhaltungsvereinbarung',
    fr: 'accord-de-confidentialite',
    es: 'acuerdo-confidencialidad'
  },
  title: {
    sv: 'Sekretessavtal (NDA)',
    en: 'Non-Disclosure Agreement (NDA)',
    us: 'Non-Disclosure Agreement (NDA)',
    uk: 'Non-Disclosure Agreement (NDA)',
    de: 'Sekretessavtal (NDA)', // Fallback
    fr: 'Sekretessavtal (NDA)', // Fallback
    es: 'Sekretessavtal (NDA)'  // Fallback
  },
  category: 'Företag & Affärer',
  description: {
    sv: 'Ett standardiserat sekretessavtal för att skydda företagshemligheter mellan två parter.',
    en: 'A standard non-disclosure agreement to protect trade secrets and confidential information.',
    us: 'A standard non-disclosure agreement to protect trade secrets and confidential information under US jurisdiction.',
    uk: 'A standard non-disclosure agreement to protect trade secrets and confidential information under English law.',
    de: 'Ett standardiserat sekretessavtal...',
    fr: 'Ett standardiserat sekretessavtal...',
    es: 'Ett standardiserat sekretessavtal...'
  },
  author: {
    name: 'Veridoca Legal Team',
    role: 'Legal Experts at Digisoul Media'
  },
  fields: {
    sv: [
      { id: 'party1', label: 'Part 1 (Utlämnande Part)', type: 'text', placeholder: 'Ex. Företag AB' },
      { id: 'party2', label: 'Part 2 (Mottagande Part)', type: 'text', placeholder: 'Ex. Konsultbolaget AB' },
      { id: 'purpose', label: 'Syfte med samarbetet', type: 'textarea', placeholder: 'Beskriv syftet kortfattat' },
      { id: 'date', label: 'Avtalsdatum', type: 'date' },
      { id: 'city', label: 'Ort för signering', type: 'text', placeholder: 'Ex. Stockholm' },
      { id: 'state', label: 'Län/Delstat (Endast för US/UK)', type: 'text', placeholder: 'Ex. Delaware' }
    ],
    en: [
      { id: 'party1', label: 'Party 1 (Disclosing Party)', type: 'text', placeholder: 'Ex. Acme Corp' },
      { id: 'party2', label: 'Party 2 (Receiving Party)', type: 'text', placeholder: 'Ex. John Doe Consulting' },
      { id: 'purpose', label: 'Purpose of NDA', type: 'textarea', placeholder: 'Briefly describe the purpose' },
      { id: 'date', label: 'Effective Date', type: 'date' },
      { id: 'city', label: 'City of signing', type: 'text', placeholder: 'Ex. London' },
      { id: 'state', label: 'State/Jurisdiction', type: 'text', placeholder: 'Ex. New York' }
    ]
  },
  seoArticle: {
    sv: (
      <div className="seo-article">
        <h2>Vad är ett Sekretessavtal (NDA)?</h2>
        <p>Ett sekretessavtal, ofta förkortat NDA (Non-Disclosure Agreement), är ett juridiskt bindande avtal mellan två eller flera parter. Huvudsyftet är att fastställa vilka uppgifter som är konfidentiella och att förhindra att dessa sprids till obehöriga.</p>
        <h3>Viktiga delar i ett Sekretessavtal</h3>
        <p>Ett välskrivet sekretessavtal bör alltid innehålla en tydlig definition av vad som anses vara konfidentiell information, avtalets giltighetstid och konsekvenserna av ett avtalsbrott (vite).</p>
      </div>
    ),
    en: (
      <div className="seo-article">
        <h2>What is a Non-Disclosure Agreement (NDA)?</h2>
        <p>A Non-Disclosure Agreement (NDA) is a legally binding contract that establishes a confidential relationship. The party or parties signing the agreement agree that sensitive information they may obtain will not be made available to any others.</p>
        <h3>Key Elements of an NDA</h3>
        <p>A well-drafted NDA should clearly define what constitutes confidential information, the term of the agreement, and the legal consequences of a breach.</p>
      </div>
    )
  },
  faqs: {
    sv: [
      { question: "Är er NDA-mall juridiskt bindande?", answer: "Ja, när avtalet har fyllts i korrekt och undertecknats av båda parter är det juridiskt bindande." },
      { question: "Kan ett NDA gälla för evigt?", answer: "Det är möjligt att avtala om evig sekretess för affärshemligheter, men ofta begränsas den till 2-5 år." }
    ],
    en: [
      { question: "Is this NDA template legally binding?", answer: "Yes, when properly filled out and signed by both parties, this NDA is legally binding." },
      { question: "Can an NDA last forever?", answer: "While you can stipulate an indefinite duration for trade secrets, standard commercial information is typically protected for 2-5 years." }
    ]
  },
  content: (data, lang) => {
    const isEn = lang === 'en' || lang === 'us' || lang === 'uk';
    const isUS = lang === 'us';
    const isUK = lang === 'uk';

    if (isEn) {
      return (
        <div className="document-body">
          <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>NON-DISCLOSURE AGREEMENT</h1>
          <p>This Non-Disclosure Agreement (the "Agreement") is entered into as of <strong>{data.date || '[Effective Date]'}</strong> (the "Effective Date") by and between:</p>
          <ol>
            <li><strong>{data.party1 || '[Disclosing Party]'}</strong> ("Disclosing Party")</li>
            <li><strong>{data.party2 || '[Receiving Party]'}</strong> ("Receiving Party")</li>
          </ol>
          
          <h2>1. Purpose</h2>
          <p>The Parties intend to explore a potential business relationship or transaction concerning <strong>{data.purpose || '[Purpose]'}</strong> (the "Purpose"). In connection with the Purpose, the Disclosing Party may disclose to the Receiving Party certain confidential information.</p>
          
          <h2>2. Confidential Information</h2>
          <p>"Confidential Information" means any and all non-public, confidential, or proprietary information, whether in oral, written, electronic, or other form, disclosed by the Disclosing Party to the Receiving Party.</p>

          <h2>3. Obligations</h2>
          <p>The Receiving Party shall hold and maintain the Confidential Information in strictest confidence and shall not disclose it to any third party without the prior written consent of the Disclosing Party.</p>

          <h2>4. Governing Law</h2>
          {isUS ? (
            <p>This Agreement shall be governed by and construed in accordance with the laws of the State of <strong>{data.state || '[State]'}</strong>, without giving effect to any choice of law principles.</p>
          ) : isUK ? (
            <p>This Agreement and any dispute or claim arising out of it shall be governed by and construed in accordance with the law of England and Wales. The courts of England and Wales shall have exclusive jurisdiction.</p>
          ) : (
            <p>This Agreement shall be governed by and construed in accordance with the applicable international commercial laws and the jurisdiction agreed upon by the Parties.</p>
          )}

          <h2>5. Signatures</h2>
          <p>IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '4rem' }}>
            <div>
              <p>Location: <strong>{data.city || '[City]'}</strong></p>
              <br/><br/>
              <p>___________________________________</p>
              <p><strong>{data.party1 || '[Disclosing Party]'}</strong></p>
            </div>
            <div>
              <p>Location: <strong>{data.city || '[City]'}</strong></p>
              <br/><br/>
              <p>___________________________________</p>
              <p><strong>{data.party2 || '[Receiving Party]'}</strong></p>
            </div>
          </div>
        </div>
      );
    }

    // Default SV
    return (
      <div className="document-body">
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>SEKRETESSAVTAL (NDA)</h1>
        <p>Detta sekretessavtal har upprättats den <strong>{data.date || '_________'}</strong> mellan:</p>
        <ol>
          <li><strong>{data.party1 || '_________________'}</strong> ("Utlämnande Part")</li>
          <li><strong>{data.party2 || '_________________'}</strong> ("Mottagande Part")</li>
        </ol>
        
        <h2>1. Syfte</h2>
        <p>Parterna avser att diskutera eller genomföra ett samarbete avseende <strong>{data.purpose || '_________________'}</strong> ("Syftet"). I samband med detta kan den Utlämnande Parten komma att delge den Mottagande Parten konfidentiell information.</p>
        
        <h2>2. Konfidentiell Information</h2>
        <p>Med konfidentiell information avses varje uppgift – teknisk, kommersiell eller av annan art – oavsett om den dokumenterats eller inte, som Utlämnande Part delger Mottagande Part.</p>

        <h2>3. Åtagande</h2>
        <p>Mottagande Part förbinder sig att inte utan Utlämnande Parts skriftliga medgivande till tredje man utlämna Konfidentiell Information, och att endast använda informationen för Syftet.</p>

        <h2>4. Tillämplig lag</h2>
        <p>Svensk lag ska tillämpas på detta avtal. Tvister i anledning av detta avtal ska slutligt avgöras av allmän domstol i Sverige.</p>

        <h2>5. Underskrifter</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '4rem' }}>
          <div>
            <p>Ort och datum: <strong>{data.city || '_________'}</strong>, <strong>{data.date || '_________'}</strong></p>
            <br/><br/>
            <p>___________________________________</p>
            <p><strong>{data.party1 || 'Part 1'}</strong></p>
          </div>
          <div>
            <p>Ort och datum: <strong>{data.city || '_________'}</strong>, <strong>{data.date || '_________'}</strong></p>
            <br/><br/>
            <p>___________________________________</p>
            <p><strong>{data.party2 || 'Part 2'}</strong></p>
          </div>
        </div>
      </div>
    );
  }
};
