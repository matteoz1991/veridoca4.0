import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Användarvillkor – Veridoca',
  description: 'Läs Veridocas användarvillkor. Information om tjänstens syfte, ansvarsbegränsning, immateriella rättigheter och vad som gäller när du använder våra gratis avtalsmallar.',
  alternates: { canonical: 'https://veridoca.com/sv/terms-of-service' },
  robots: { index: true, follow: true },
};

export default function TermsOfService() {
  const updated = '26 maj 2026';

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem', maxWidth: '860px' }}>
      <nav style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        <a href="/sv" style={{ color: 'var(--text-muted)' }}>Hem</a> › Användarvillkor
      </nav>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Användarvillkor</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Senast uppdaterad: {updated}</p>

      <div style={{ lineHeight: 1.85, color: 'var(--text-muted)' }}>

        <p style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>
          Välkommen till Veridoca. Genom att använda vår webbplats och våra tjänster accepterar du dessa användarvillkor
          i sin helhet. Läs igenom dem noggrant. Om du inte accepterar dessa villkor ber vi dig att inte använda Veridoca.
          Dessa villkor gäller för alla besökare, användare och andra som nyttjar tjänsten.
        </p>

        {/* 1. Om tjänsten */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          1. Om Veridoca och tjänstens syfte
        </h2>
        <p>
          Veridoca är en gratis webbtjänst som tillhandahåller juridiska avtalsmallar och informationsguider för
          privatpersoner och företag i Sverige. Tjänsten drivs av <strong>Digisoul Media</strong>, Göteborg, Sverige.
        </p>
        <p>
          Syftet med Veridoca är att <strong>förenkla tillgången till juridiska mallar</strong> och öka den allmänna
          förståelsen för juridiska avtal. Tjänsten är kostnadsfri och finansieras via annonser (Google AdSense).
        </p>
        <p>
          Veridoca erbjuder:
        </p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Gratis juridiska avtalsmallar i PDF-format</li>
          <li style={{ marginBottom: '0.5rem' }}>Informationsguider om avtal och juridik i Sverige</li>
          <li style={{ marginBottom: '0.5rem' }}>Verktyg för att fylla i och anpassa mallar direkt i webbläsaren</li>
        </ul>

        {/* 2. Ej juridisk rådgivning */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          2. Viktigt: Inte juridisk rådgivning
        </h2>
        <div style={{ background: '#fff5f5', borderLeft: '4px solid #e53e3e', padding: '1.25rem 1.5rem', borderRadius: '4px', margin: '1rem 0' }}>
          <strong>Observera:</strong> Innehållet på Veridoca – inklusive samtliga avtalsmallar, guider och
          informationsartiklar – utgör <strong>inte juridisk rådgivning</strong> och ersätter inte råd från en
          kvalificerad jurist eller advokat.
        </div>
        <p>
          Våra mallar är generella standardmallar som är utformade för de vanligaste situationerna. Juridiska
          frågor kan vara komplexa, och lösningen på en specifik situation kan avvika från vad en mall täcker.
          Vi rekommenderar alltid att du:
        </p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Konsulterar en kvalificerad jurist vid komplexa juridiska frågor</li>
          <li style={{ marginBottom: '0.5rem' }}>Noga läser igenom och förstår ett avtal innan du skriver under</li>
          <li style={{ marginBottom: '0.5rem' }}>Anpassar mallen till din specifika situation</li>
          <li style={{ marginBottom: '0.5rem' }}>Kontrollerar att mallen är i linje med gällande lagstiftning vid tidpunkten för användningen</li>
        </ul>
        <p>
          Veridoca och Digisoul Media tar inget ansvar för eventuella konsekvenser av att använda våra mallar
          utan professionell juridisk rådgivning (se även avsnitt 7 om ansvarsbegränsning).
        </p>

        {/* 3. Godkännande */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          3. Godkännande av villkor
        </h2>
        <p>
          Genom att besöka Veridoca, ladda ner en mall eller på annat sätt använda tjänsten bekräftar du att
          du har läst, förstått och godkänt dessa användarvillkor och vår integritetspolicy. Om du använder
          tjänsten å en organisations vägnar bekräftar du att du har behörighet att binda organisationen till
          dessa villkor.
        </p>
        <p>
          Vi förbehåller oss rätten att uppdatera dessa villkor. Fortsatt användning efter att ändringar publicerats
          på webbplatsen innebär att du accepterar de uppdaterade villkoren.
        </p>

        {/* 4. Tillåten användning */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          4. Tillåten och förbjuden användning
        </h2>
        <p>Du är välkommen att använda Veridoca för lagliga, personliga och affärsmässiga ändamål. Du får:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Ladda ner och använda mallar för egna avtal</li>
          <li style={{ marginBottom: '0.5rem' }}>Anpassa mallarna till din specifika situation</li>
          <li style={{ marginBottom: '0.5rem' }}>Dela länken till veridoca.com med andra som kan ha nytta av tjänsten</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>Du får <strong>inte</strong>:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            Sälja, vidaredistribuera eller kommersiellt exploatera Veridocas mallar eller innehåll utan skriftligt tillstånd
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Kopiera, skrapa eller massnedladda innehåll för att bygga konkurrerande tjänster
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Använda tjänsten för olagliga ändamål eller på ett sätt som bryter mot tillämplig lagstiftning
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Försöka kringgå tekniska säkerhetsåtgärder på webbplatsen
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Publicera skadlig kod, virus eller skadligt innehåll via vår webbplats
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Ange falsk eller vilseledande information i kontaktformulär
          </li>
        </ul>

        {/* 5. Immateriella rättigheter */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          5. Immateriella rättigheter
        </h2>
        <p>
          Allt innehåll på Veridoca – inklusive texter, guider, mallar, design, logotyper, bilder och kod –
          är skyddat av upphovsrätt och ägs av Digisoul Media eller tillhandahålls under licens.
        </p>
        <p>
          Vi beviljar dig en begränsad, icke-exklusiv, icke-överlåtbar licens att:
        </p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Använda nedladdade mallar för egna juridiska ändamål</li>
          <li style={{ marginBottom: '0.5rem' }}>Skriva ut, fylla i och underteckna avtalen</li>
        </ul>
        <p>
          Licensen ger dig <strong>inte</strong> rätt att reproducera, publicera, sälja eller distribuera mallarna
          eller annat innehåll kommersiellt. Veridocas varumärke och logotyp får inte användas utan skriftligt tillstånd.
        </p>
        <p>
          Observera att de juridiska avtal du skapar med hjälp av Veridoca självklart tillhör dig och de parter
          som undertecknar dem – vi gör inte anspråk på äganderätt till dina avtal.
        </p>

        {/* 6. Annonser */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          6. Annonser och finansiering
        </h2>
        <p>
          Veridoca är en gratis tjänst som finansieras via annonsintäkter, primärt från Google AdSense. Genom
          att använda tjänsten accepterar du att annonser visas på webbplatsen. Vi strävar efter att annonser
          är relevanta och inte stör användarupplevelsen, men har begränsad kontroll över vilka specifika annonser
          som visas.
        </p>
        <p>
          Vi ansvarar inte för innehållet i annonser och de produkter eller tjänster som annonseras av tredjeparter.
          Klickar du på en annons lämnar du Veridoca och vi rekommenderar att du läser den externa webbplatsens
          villkor och integritetspolicy.
        </p>
        <p>
          Du kan stänga av personaliserade annonser via vår cookie-banner. Se vår integritetspolicy för mer information.
        </p>

        {/* 7. Ansvarsbegränsning */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          7. Ansvarsbegränsning
        </h2>
        <p>
          Veridoca tillhandahålls "i befintligt skick" utan några garantier, uttryckliga eller underförstådda.
          I den mån det är tillåtet enligt tillämplig lag frånsäger sig Digisoul Media allt ansvar för:
        </p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            Direkta, indirekta, oförutsedda, special- eller följdskador som uppstår till följd av din användning
            av Veridoca eller mallar hämtade därifrån
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Felaktigheter eller ofullständigheter i mallar eller informationsinnehåll
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Förluster som uppstår om en mall inte uppfyller dina specifika juridiska behov
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Avbrott i tjänsten, tekniska fel eller förlust av data
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            Innehållet på externa webbplatser som länkas till från Veridoca
          </li>
        </ul>
        <p>
          Vårt totala ansvar gentemot dig ska i inget fall överstiga det belopp du betalat för tjänsten under
          de senaste 12 månaderna (vilket för en gratis tjänst innebär noll kronor). Vissa jurisdiktioner tillåter
          inte begränsning av visst ansvar, varför ovanstående begränsning kanske inte gäller fullt ut för dig.
        </p>

        {/* 8. Tillgänglighet */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          8. Tillgänglighet och driftsavbrott
        </h2>
        <p>
          Vi strävar efter att Veridoca ska vara tillgänglig dygnet runt, sju dagar i veckan, men vi kan inte
          garantera oavbruten drift. Tjänsten kan tillfälligt vara otillgänglig för underhåll, uppdateringar
          eller på grund av omständigheter utanför vår kontroll. Vi förbehåller oss rätten att modifiera,
          pausa eller avveckla tjänsten (eller delar av den) utan föregående meddelande.
        </p>

        {/* 9. Externa länkar */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          9. Externa länkar
        </h2>
        <p>
          Veridoca kan innehålla länkar till externa webbplatser och resurser. Dessa tillhandahålls enbart
          för informationsändamål och innebär inte att vi rekommenderar eller tar ansvar för innehållet på
          de länkade webbplatserna. Vi har ingen kontroll över och tar inget ansvar för externa webbplatsers
          innehåll, integritetspolicyer eller praxis.
        </p>

        {/* 10. Tillämplig lag */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          10. Tillämplig lag och tvistelösning
        </h2>
        <p>
          Dessa användarvillkor regleras av och ska tolkas i enlighet med <strong>svensk rätt</strong>.
          Eventuella tvister som uppstår i samband med dessa villkor eller din användning av Veridoca ska
          i första hand lösas genom förhandlingar i god anda. Om förhandlingar inte lyckas ska tvister
          avgöras av <strong>Göteborgs tingsrätt</strong> som första instans, om inte konsumentskyddsregler
          föreskriver annat forum.
        </p>
        <p>
          Om du är konsument har du också rätt att vända dig till <strong>Allmänna reklamationsnämnden (ARN)</strong>
          för kostnadsfri tvistelösning. Mer information finns på arn.se.
        </p>

        {/* 11. Övrigt */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          11. Övriga bestämmelser
        </h2>
        <p>
          Om någon del av dessa villkor anses ogiltig eller ogenomförbar av en behörig domstol påverkar detta
          inte giltigheten av övriga delar av villkoren, som fortsätter att gälla.
        </p>
        <p>
          Dessa villkor utgör det fullständiga avtalet mellan dig och Digisoul Media rörande din användning
          av Veridoca och ersätter alla tidigare överenskommelser avseende samma föremål.
        </p>
        <p>
          Vår underlåtenhet att utöva eller genomdriva en rättighet enligt dessa villkor ska inte anses som
          ett avstående från den rättigheten.
        </p>

        {/* 12. Kontakt */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          12. Kontakt
        </h2>
        <p>
          Har du frågor om dessa användarvillkor? Kontakta oss:
        </p>
        <div style={{ background: 'var(--accent)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1rem 0' }}>
          <p style={{ margin: 0 }}><strong>Digisoul Media</strong></p>
          <p style={{ margin: '0.25rem 0 0' }}>E-post: info@digisoul.se</p>
          <p style={{ margin: '0.25rem 0 0' }}>Göteborg, Sverige</p>
        </div>

        <div style={{ marginTop: '3rem', padding: '1rem 1.5rem', background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <strong>Version:</strong> 1.1 | <strong>Senast uppdaterad:</strong> {updated} | <strong>Tillämplig lag:</strong> Svensk rätt
        </div>
      </div>
    </div>
  );
}
