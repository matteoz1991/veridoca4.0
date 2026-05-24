import { DocumentTemplate } from '../templates';

export const testamente: DocumentTemplate = {
  slugs: {
    sv: 'testamente',
    en: 'last-will-and-testament',
    us: 'last-will-and-testament',
    uk: 'last-will-and-testament',
    de: 'testament',
    fr: 'testament',
    es: 'testamento'
  },
  title: {
    sv: 'Testamente',
    en: 'Last Will and Testament',
    us: 'Last Will and Testament',
    uk: 'Last Will and Testament',
    de: 'Testamente',
    fr: 'Testamente',
    es: 'Testamente'
  },
  category: 'Familj & Relationer',
  description: {
    sv: 'Skapa ett juridiskt bindande testamente för att bestämma hur dina tillgångar ska fördelas efter din bortgång.',
    en: 'Create a legally binding Last Will and Testament to distribute your assets.',
    us: 'Create a legally binding Last Will and Testament compliant with US state laws.',
    uk: 'Create a legally binding Last Will and Testament compliant with UK laws.',
    de: 'Skapa ett juridiskt...',
    fr: 'Skapa ett juridiskt...',
    es: 'Skapa ett juridiskt...'
  },
  author: {
    name: 'Veridoca Legal Team',
    role: 'Legal Experts at Digisoul Media'
  },
  fields: {
    sv: [
      { id: 'testator', label: 'Ditt fullständiga namn', type: 'text', placeholder: 'Förnamn Efternamn' },
      { id: 'pnr', label: 'Ditt personnummer', type: 'text', placeholder: 'ÅÅMMDD-XXXX' },
      { id: 'heir', label: 'Huvudarvingens namn', type: 'text', placeholder: 'Ex. Anna Andersson' },
      { id: 'relation', label: 'Relation till arvingen', type: 'text', placeholder: 'Ex. min sambo / dotter' },
      { id: 'city', label: 'Ort för undertecknande', type: 'text' },
      { id: 'date', label: 'Dagens datum', type: 'date' }
    ],
    en: [
      { id: 'testator', label: 'Your Full Name (Testator)', type: 'text', placeholder: 'First Last' },
      { id: 'pnr', label: 'ID / SSN / National Insurance No', type: 'text' },
      { id: 'heir', label: 'Primary Beneficiary', type: 'text', placeholder: 'Ex. Jane Doe' },
      { id: 'relation', label: 'Relation to Beneficiary', type: 'text', placeholder: 'Ex. Spouse / Child' },
      { id: 'city', label: 'City of signing', type: 'text' },
      { id: 'date', label: 'Date', type: 'date' }
    ]
  },
  seoArticle: {
    sv: (
      <div className="seo-article">
        <h2>Varför behöver du skriva ett testamente?</h2>
        <p>Ett testamente är det enskilt viktigaste juridiska dokumentet du kan upprätta för att säkerställa att din sista vilja respekteras.</p>
      </div>
    ),
    en: (
      <div className="seo-article">
        <h2>Why do you need a Last Will and Testament?</h2>
        <p>A Last Will and Testament is the most important legal document you can create to ensure your assets are distributed according to your wishes after your passing. Without it, the state will determine how your property is divided.</p>
      </div>
    )
  },
  content: (data, lang) => {
    const isEn = lang === 'en' || lang === 'us' || lang === 'uk';
    
    if (isEn) {
      return (
        <div className="document-body">
          <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>LAST WILL AND TESTAMENT</h1>
          <p>I, <strong>{data.testator || '_________________'}</strong>, with ID {data.pnr || '____________'}, being of sound mind and memory, do hereby declare this document to be my Last Will and Testament, revoking all prior wills and codicils.</p>
          
          <h2>1. Distribution of Assets</h2>
          <p>I give, devise, and bequeath all of my property, both real and personal, wherever situated, to <strong>{data.heir || '_________________'}</strong> (my {data.relation || '_________________'}), to have and to hold absolutely.</p>
          
          <h2>2. Revocation of Prior Wills</h2>
          <p>I hereby revoke all former wills, codicils, and testamentary dispositions previously made by me.</p>

          <div style={{ marginTop: '4rem' }}>
            <p>Location and Date: <strong>{data.city || '_________'}</strong>, <strong>{data.date || '_________'}</strong></p>
            <br/><br/><br/>
            <p>___________________________________</p>
            <p><strong>{data.testator || 'Testator'}</strong></p>
          </div>

          <div style={{ marginTop: '4rem', padding: '2rem', border: '1px solid #000' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Attestation Clause</h2>
            <p style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>We, the undersigned witnesses, certify that the Testator declared this instrument to be their Last Will and Testament, and signed it in our presence. We, in their presence and in the presence of each other, have subscribed our names as witnesses.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <p>___________________________________</p>
                <p style={{ fontSize: '0.9rem' }}>Witness 1 Signature & Print Name</p>
              </div>
              <div>
                <p>___________________________________</p>
                <p style={{ fontSize: '0.9rem' }}>Witness 2 Signature & Print Name</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default SV
    return (
      <div className="document-body">
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>TESTAMENTE</h1>
        <p>Härmed förordnar jag, <strong>{data.testator || '_________________'}</strong> (Personnummer: {data.pnr || '____________'}), som min yttersta vilja och testamente att min kvarlåtenskap ska fördelas enligt nedan.</p>
        
        <h2>1. Fördelning av Kvarlåtenskap</h2>
        <p>All min egendom, såväl lös som fast, ska tillfalla <strong>{data.heir || '_________________'}</strong> ({data.relation || '_________________'}).</p>
        <p><em>(Observera: Om du har bröstarvingar har de alltid rätt till sin laglott, vilket utgör hälften av arvslotten, oavsett vad som stadgas ovan).</em></p>

        <h2>2. Enskild Egendom</h2>
        <p>All egendom som tillfaller någon genom detta testamente, samt all avkastning därav och egendom som träder i dess ställe, ska utgöra mottagarens enskilda egendom. Egendomen ska därmed inte ingå i någon eventuell bodelning vid äktenskapsskillnad eller dödsfall.</p>

        <h2>3. Återkallelse av tidigare testamenten</h2>
        <p>Genom detta testamente återkallas alla eventuella tidigare förordnanden och testamenten upprättade av mig.</p>

        <div style={{ marginTop: '4rem' }}>
          <p>Ort och datum: <strong>{data.city || '_________'}</strong>, <strong>{data.date || '_________'}</strong></p>
          <br/><br/><br/>
          <p>___________________________________</p>
          <p><strong>{data.testator || 'Testatorns namn'}</strong></p>
        </div>

        <div style={{ marginTop: '4rem', padding: '2rem', border: '1px solid #000' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Vittnesmening</h2>
          <p style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>Att {data.testator || 'Testatorn'} denna dag vid sunt och fullt förstånd samt av fri vilja förklarat ovanstående förordnande innefatta sin yttersta vilja och därpå egenhändigt undertecknat detsamma, intygar vi undertecknade, på en och samma gång närvarande vittnen.</p>
          
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
    );
  }
};
