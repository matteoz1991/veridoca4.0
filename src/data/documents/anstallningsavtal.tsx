import { DocumentTemplate } from '../templates';

export const anstallningsavtal: DocumentTemplate = {
  slugs: {
    sv: 'anstallningsavtal',
    en: 'employment-contract',
    us: 'employment-contract',
    uk: 'employment-contract',
    de: 'arbeitsvertrag',
    fr: 'contrat-de-travail',
    es: 'contrato-de-trabajo'
  },
  title: {
    sv: 'Anställningsavtal',
    en: 'Employment Contract',
    us: 'Employment Contract',
    uk: 'Employment Contract',
    de: 'Anställningsavtal',
    fr: 'Anställningsavtal',
    es: 'Anställningsavtal'
  },
  category: 'Arbete & HR',
  description: {
    sv: 'Skapa ett juridiskt korrekt anställningsavtal för en ny medarbetare enligt svensk arbetsrätt.',
    en: 'Create a legally binding employment contract for a new employee.',
    us: 'Create a legally binding employment contract tailored to US labor laws ("at-will" employment).',
    uk: 'Create a legally binding employment contract compliant with UK employment law.',
    de: 'Skapa ett juridiskt...',
    fr: 'Skapa ett juridiskt...',
    es: 'Skapa ett juridiskt...'
  },
  author: {
    name: 'Veridoca HR Team',
    role: 'HR & Legal Experts at Digisoul Media'
  },
  fields: {
    sv: [
      { id: 'employer', label: 'Arbetsgivare (Företagsnamn)', type: 'text' },
      { id: 'orgnr', label: 'Organisationsnummer', type: 'text' },
      { id: 'employee', label: 'Arbetstagare (Förnamn Efternamn)', type: 'text' },
      { id: 'pnr', label: 'Personnummer', type: 'text' },
      { id: 'role', label: 'Befattning / Titel', type: 'text', placeholder: 'Ex. Marknadschef' },
      { id: 'salary', label: 'Månadslön (Brutto)', type: 'number' },
      { id: 'startDate', label: 'Tillträdesdag', type: 'date' },
      { id: 'city', label: 'Ort', type: 'text' }
    ],
    en: [
      { id: 'employer', label: 'Employer (Company Name)', type: 'text' },
      { id: 'orgnr', label: 'Company ID / EIN', type: 'text' },
      { id: 'employee', label: 'Employee (Full Name)', type: 'text' },
      { id: 'role', label: 'Job Title', type: 'text', placeholder: 'Ex. Marketing Manager' },
      { id: 'salary', label: 'Annual Salary / Hourly Rate', type: 'number' },
      { id: 'startDate', label: 'Start Date', type: 'date' },
      { id: 'city', label: 'City of Signing', type: 'text' },
      { id: 'state', label: 'State/Jurisdiction', type: 'text' }
    ]
  },
  seoArticle: {
    sv: (
      <div className="seo-article">
        <h2>Hur skriver man ett Anställningsavtal?</h2>
        <p>Ett anställningsavtal är grunden i arbetsförhållandet mellan en arbetsgivare och en arbetstagare. Enligt den svenska <strong>Lagen om anställningsskydd (LAS)</strong> måste arbetsgivaren lämna skriftlig information till arbetstagaren om alla villkor som är av väsentlig betydelse för anställningen, senast en månad efter att arbetstagaren börjat arbeta.</p>
      </div>
    ),
    en: (
      <div className="seo-article">
        <h2>How to write an Employment Contract?</h2>
        <p>An employment contract is the foundation of the relationship between an employer and an employee. It outlines the rights, responsibilities, and obligations of both parties. In many jurisdictions, providing a written contract is legally required to avoid disputes regarding wages, termination, and duties.</p>
      </div>
    )
  },
  content: (data, lang) => {
    const isEn = lang === 'en' || lang === 'us' || lang === 'uk';
    const isUS = lang === 'us';
    const isUK = lang === 'uk';

    if (isEn) {
      return (
        <div className="document-body">
          <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>EMPLOYMENT AGREEMENT</h1>
          
          <h2>1. Parties</h2>
          <p>This Employment Agreement (the "Agreement") is made and entered into as of <strong>{data.startDate || '[Start Date]'}</strong>, by and between <strong>{data.employer || '[Employer]'}</strong> (the "Employer") and <strong>{data.employee || '[Employee]'}</strong> (the "Employee").</p>

          <h2>2. Position and Duties</h2>
          <p>The Employer agrees to employ the Employee in the position of <strong>{data.role || '[Job Title]'}</strong>. The Employee agrees to perform the duties and responsibilities associated with this position, as may be reasonably assigned by the Employer from time to time.</p>

          <h2>3. Compensation</h2>
          <p>In consideration of the services to be rendered under this Agreement, the Employer shall pay the Employee a salary of <strong>{data.salary ? data.salary : '[Amount]'}</strong>, payable in accordance with the Employer's standard payroll schedule.</p>

          {isUS ? (
            <>
              <h2>4. At-Will Employment</h2>
              <p>The Employee's employment with the Employer is "at-will." This means that either the Employer or the Employee may terminate the employment relationship at any time, with or without cause, and with or without notice.</p>
            </>
          ) : isUK ? (
            <>
              <h2>4. Notice of Termination</h2>
              <p>Following the successful completion of any probationary period, this Agreement may be terminated by either party giving not less than one (1) month's written notice, or the statutory minimum notice period, whichever is greater.</p>
            </>
          ) : (
            <>
              <h2>4. Termination</h2>
              <p>This Agreement may be terminated by either party providing written notice in accordance with applicable local labor laws.</p>
            </>
          )}

          <h2>5. Governing Law</h2>
          <p>This Agreement shall be governed by and construed in accordance with the laws of <strong>{data.state || '[State/Jurisdiction]'}</strong>.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '4rem' }}>
            <div>
              <p>Location: <strong>{data.city || '[City]'}</strong></p>
              <br/><br/>
              <p>___________________________________</p>
              <p><strong>{data.employer || 'Employer'}</strong></p>
            </div>
            <div>
              <p>Location: <strong>{data.city || '[City]'}</strong></p>
              <br/><br/>
              <p>___________________________________</p>
              <p><strong>{data.employee || 'Employee'}</strong></p>
            </div>
          </div>
        </div>
      );
    }

    // Default SV
    return (
      <div className="document-body">
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>ANSTÄLLNINGSAVTAL</h1>
        
        <h2>1. Parter</h2>
        <p>Mellan <strong>{data.employer || '_________________'}</strong>, org.nr {data.orgnr || '____________'} ("Arbetsgivaren") och <strong>{data.employee || '_________________'}</strong>, personnummer {data.pnr || '____________'} ("Arbetstagaren") har följande anställningsavtal träffats.</p>

        <h2>2. Anställningsform och Befattning</h2>
        <p>Arbetstagaren anställs tillsvidare (fast anställning). Arbetstagaren anställs som <strong>{data.role || '_________________'}</strong>.</p>
        <p>Tillträdesdag är den <strong>{data.startDate || '_________'}</strong>.</p>

        <h2>3. Arbetstid</h2>
        <p>Anställningen avser heltid (100 %) motsvarande normalt 40 timmar per helgfri arbetsvecka.</p>

        <h2>4. Lön</h2>
        <p>Som ersättning för arbetet utgår en fast bruttomånadslön om <strong>{data.salary ? data.salary + ' SEK' : '_________ SEK'}</strong>. Lönen utbetalas månadsvis i efterskott till av Arbetstagaren angivet bankkonto den 25:e varje månad.</p>

        <h2>5. Uppsägning</h2>
        <p>För anställningen gäller en ömsesidig uppsägningstid om en (1) månad, såvida inte längre uppsägningstid för Arbetsgivaren följer av Lag (1982:80) om anställningsskydd (LAS).</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '4rem' }}>
          <div>
            <p>Ort och datum: <strong>{data.city || '_________'}</strong>, <strong>{data.startDate || '_________'}</strong></p>
            <br/><br/>
            <p>___________________________________</p>
            <p><strong>{data.employer || 'Arbetsgivare'}</strong></p>
          </div>
          <div>
            <p>Ort och datum: <strong>{data.city || '_________'}</strong>, <strong>{data.startDate || '_________'}</strong></p>
            <br/><br/>
            <p>___________________________________</p>
            <p><strong>{data.employee || 'Arbetstagare'}</strong></p>
          </div>
        </div>
      </div>
    );
  }
};
