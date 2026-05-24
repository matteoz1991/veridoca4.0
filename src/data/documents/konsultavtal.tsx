import { DocumentTemplate } from '../templates';

export const konsultavtal: DocumentTemplate = {
  slugs: {
    sv: 'konsultavtal',
    en: 'consulting-agreement',
    us: 'consulting-agreement',
    uk: 'consulting-agreement',
    de: 'beratervertrag',
    fr: 'contrat-de-consultant',
    es: 'contrato-de-consultoria'
  },
  title: 'Konsultavtal',
  category: 'Arbete & HR',
  description: 'Ett tryggt uppdragsavtal för frilansare och konsulter som skyddar mot scope creep och obetalda fakturor.',
  author: {
    name: 'Veridoca Legal Team',
    role: 'Corporate Law Experts at Digisoul Media'
  },
  seoArticle: (
    <div className="seo-article">
      <p><em>Senast uppdaterad: 15 maj 2026</em></p>
      
      <p>Du har precis landat ett sexmånaders uppdrag som frilansande systemutvecklare för en byrå i Göteborg. Ni har skakat hand (eller skickat en tumme upp på Slack), pratat om ett timpris på 950 SEK och kommit överens om att "börja koda på måndag". Några veckor in börjar kunden lägga till nya krav som inte nämndes från början, och när du fakturerar för den extra tiden ifrågasätts plötsligt dina timmar. Här står ord mot ord, och utan ett vattentätt konsultavtal har du en svag juridisk position för att få betalt för ditt arbete.</p>

      <h2>Vad är ett konsultavtal och när krävs det i Sverige?</h2>
      <p>Ett konsultavtal (ibland kallat uppdragsavtal eller frilansavtal) är kontraktet mellan dig som oberoende näringsidkare och din uppdragsgivare. Till skillnad från ett anställningsavtal, som styrs hårt av Lagen om anställningsskydd (LAS), regleras konsultuppdrag i Sverige främst av den allmänna Avtalslagen och Köplagen. Detta innebär att det råder stor avtalsfrihet – ni kan avtala om i princip vad som helst. Men det innebär också att om ni <em>inte</em> avtalar om något (exempelvis vem som äger koden du skriver eller vad som händer vid förseningar), finns det få skyddsnät att falla tillbaka på.</p>
      <p>Oavsett om du driver ett Aktiebolag (AB) eller en Enskild firma är ett konsultavtal ett absolut krav så fort du säljer din tid eller expertis B2B (business-to-business). Det definierar exakt vad du ska leverera, när du ska leverera det, och framförallt – när och hur kunden ska betala dig.</p>

      <h2>Juridiska grundstenar: F-skatt och oberoende</h2>
      <p>En av de absolut viktigaste punkterna i ett svenskt konsultavtal är att fastställa att du som konsult är en oberoende uppdragstagare med godkänd F-skatt. Om detta inte framgår tydligt, och om Skatteverket vid en granskning bedömer att du i praktiken agerat som en anställd (ett så kallat "förtäckt anställningsförhållande"), kan din uppdragsgivare bli skyldig att betala sociala avgifter och källskatt retroaktivt. För att undvika detta måste avtalet klargöra att du använder din egen utrustning, planerar din egen arbetstid och betalar dina egna skatter.</p>

      <h2>Vanliga fallgropar: Otydlig kravspecifikation och Scope Creep</h2>
      <p>Den i särklass vanligaste orsaken till tvister i den svenska konsultbranschen är otydliga kravspecifikationer. Kunden beställer en "ny hemsida", och förväntar sig i slutändan ett helt e-handelssystem. Som konsult skyddar du dig mot detta genom att vara extremt specifik i avtalets bilagor. Definiera exakt vad som ingår i uppdraget (In-scope) och, ännu viktigare, vad som <em>inte</em> ingår (Out-of-scope). Om kunden begär tilläggsarbete utanför specifikationen ska avtalet stipulera att detta måste godkännas skriftligen och faktureras enligt din standardtimtaxa.</p>

      <h2>Vem äger resultatet? (Immateriella Rättigheter)</h2>
      <p>Vem äger logotypen du designar eller koden du skriver? Enligt svensk upphovsrättslag äger du som skapare ursprungligen rätten till verket. I ett standardiserat konsultavtal förs denna rätt (den ekonomiska rätten) över till kunden <em>när kunden har betalat fakturan till fullo</em>. Detta är en oerhört stark påtryckningsmekanism. Om kunden inte betalar, äger de inte rätten att använda resultatet av ditt arbete i sin verksamhet.</p>

      <h2>Ränta och sena betalningar</h2>
      <p>Enligt den svenska Räntelagen har du rätt till dröjsmålsränta (referensräntan + 8 procentenheter) om kunden är sen med betalningen. Ett skarpt konsultavtal bör nämna denna rättighet uttryckligen. Du kan också avtala om att betalningsvillkoren är 14 eller 30 dagar, samt att du har rätt att tillfälligt avbryta allt arbete om kunden dröjer med betalningen i mer än 10 dagar.</p>

      <h2>När bör du konsultera en advokat?</h2>
      <p>Våra mallar är byggda för standarduppdrag. Om du ska ingå ett flerårigt ramavtal värt miljonbelopp, om uppdraget innebär hantering av extremt känsliga personuppgifter (som kräver komplexa Personuppgiftsbiträdesavtal enligt GDPR), eller om du ska ta på dig obegränsat skadeståndsansvar (vilket du aldrig bör göra) – då bör du ta hjälp av en jurist i Sverige för att granska avtalet innan du skriver på.</p>

      <div style={{ background: '#f8d7da', color: '#721c24', padding: '1rem', borderRadius: '8px', border: '1px solid #f5c6cb', marginTop: '2rem' }}>
        <strong>Viktig ansvarsfriskrivning:</strong> Denna artikel utgör allmän information och inte juridisk rådgivning. Lagar och tolkningar kan variera. För specifika situationer och affärskritiska avtal, konsultera alltid en kvalificerad jurist eller advokat verksam i Sverige.
      </div>
    </div>
  ),
  faqs: [
    { question: "Måste jag ha F-skatt för att använda ett konsultavtal?", answer: "Ja, i princip. Om du saknar godkänd F-skatt måste uppdragsgivaren dra av A-skatt och betala sociala avgifter på din ersättning, vilket innebär att du betraktas som anställd." },
    { question: "Kan jag avbryta uppdraget om kunden inte betalar?", answer: "Ja, om ni har skrivit in det i konsultavtalet. Ett välformulerat avtal ger dig rätt att pausa allt arbete tills förfallna fakturor är reglerade." },
    { question: "Vad är skillnaden på ett konsultavtal och ett ramavtal?", answer: "Ett konsultavtal reglerar ett specifikt projekt eller tidsperiod. Ett ramavtal (Master Service Agreement) sätter upp grundreglerna för ett långsiktigt samarbete, där ni sedan gör små avrop/beställningar för specifika uppdrag under ramavtalets flagg." },
    { question: "Måste uppsägningstiden vara en månad?", answer: "Nej, eftersom LAS inte gäller råder avtalsfrihet. Ni kan avtala om ingen uppsägningstid alls, eller tre månader om ni föredrar det." }
  ],
  fields: [
    { id: 'clientName', label: 'Uppdragsgivare (Kundens Bolagsnamn)', type: 'text', placeholder: 'Ex. Företag AB' },
    { id: 'clientOrg', label: 'Kundens Org.nr', type: 'text', placeholder: '556000-0000' },
    { id: 'consultantName', label: 'Konsult (Ditt Bolagsnamn)', type: 'text' },
    { id: 'consultantOrg', label: 'Ditt Org.nr', type: 'text' },
    { id: 'assignment', label: 'Uppdragets beskrivning (Kort)', type: 'textarea', placeholder: 'Utveckling av webbapplikation...' },
    { id: 'hourlyRate', label: 'Timpris (SEK ex. moms)', type: 'number' },
    { id: 'startDate', label: 'Startdatum', type: 'date' },
    { id: 'endDate', label: 'Slutdatum (valfritt)', type: 'date' },
    { id: 'city', label: 'Ort', type: 'text' }
  ],
  content: (data) => (
    <div className="document-body">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>KONSULTAVTAL</h1>
      
      <h2>1. Parter</h2>
      <p>Detta avtal har ingåtts mellan <strong>{data.clientName || '_________________'}</strong>, org.nr {data.clientOrg || '____________'} ("Uppdragsgivaren") och <strong>{data.consultantName || '_________________'}</strong>, org.nr {data.consultantOrg || '____________'} ("Konsulten").</p>

      <h2>2. Uppdraget</h2>
      <p>Konsulten åtar sig att utföra följande uppdrag för Uppdragsgivarens räkning: <strong>{data.assignment || '_________________'}</strong>.</p>
      <p>Konsulten ska utföra uppdraget med den skicklighet och omsorg som Uppdragsgivaren har anledning att förvänta sig av en professionell aktör i branschen.</p>

      <h2>3. Oberoende uppdragstagare och F-skatt</h2>
      <p>Konsulten innehar godkänd F-skatt. Konsulten utför uppdraget som oberoende uppdragstagare. Detta avtal innebär inte att ett anställningsförhållande uppstår mellan Parterna. Konsulten svarar själv för inbetalning av skatter och sociala avgifter.</p>

      <h2>4. Ersättning och Betalning</h2>
      <p>Ersättning för utfört arbete utgår med <strong>{data.hourlyRate ? data.hourlyRate + ' SEK' : '_________ SEK'}</strong> per timme, exklusive lagstadgad mervärdesskatt (moms).</p>
      <p>Fakturering sker månadsvis i efterskott. Betalningsvillkor är 30 dagar netto. Vid dröjsmål med betalning utgår dröjsmålsränta enligt räntelagen. Konsulten äger rätt att avbryta uppdraget om betalning ej erlagts senast 10 dagar efter förfallodatum.</p>

      <h2>5. Rättigheter (IP)</h2>
      <p>Äganderätten och nyttjanderätten till det resultat som Konsulten skapar inom ramen för detta avtal övergår till Uppdragsgivaren först när full betalning har erlagts.</p>

      <h2>6. Avtalstid</h2>
      <p>Uppdraget påbörjas den <strong>{data.startDate || '_________'}</strong> och gäller fram till och med <strong>{data.endDate || '_________'}</strong>, därefter upphör avtalet att gälla utan uppsägning.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '4rem' }}>
        <div>
          <p>Ort och datum: <strong>{data.city || '_________'}</strong>, <strong>{data.startDate || '_________'}</strong></p>
          <br/><br/>
          <p>___________________________________</p>
          <p><strong>{data.clientName || 'Uppdragsgivare'}</strong></p>
        </div>
        <div>
          <p>Ort och datum: <strong>{data.city || '_________'}</strong>, <strong>{data.startDate || '_________'}</strong></p>
          <br/><br/>
          <p>___________________________________</p>
          <p><strong>{data.consultantName || 'Konsult'}</strong></p>
        </div>
      </div>
    </div>
  )
};
