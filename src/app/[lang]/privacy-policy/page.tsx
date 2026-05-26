import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integritetspolicy – GDPR & Cookieinformation | Veridoca',
  description: 'Veridocas integritetspolicy enligt GDPR. Läs om hur vi hanterar dina personuppgifter, vilka cookies vi använder och dina rättigheter som användare.',
  alternates: { canonical: 'https://veridoca.com/sv/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  const updated = '26 maj 2026';

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem', maxWidth: '860px' }}>
      <nav style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        <a href="/sv" style={{ color: 'var(--text-muted)' }}>Hem</a> › Integritetspolicy
      </nav>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Integritetspolicy</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Senast uppdaterad: {updated}</p>

      <div style={{ lineHeight: 1.85, color: 'var(--text-muted)' }}>

        <p style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>
          Veridoca värnar om din personliga integritet. Denna integritetspolicy förklarar vilken information vi samlar in,
          hur den används, vilka tredjeparter som kan få ta del av den, och vilka rättigheter du har enligt dataskyddsförordningen
          (GDPR – Europaparlamentets och rådets förordning (EU) 2016/679). Läs igenom policyn noggrant. Genom att använda
          Veridoca godkänner du behandlingen av dina uppgifter enligt vad som beskrivs nedan.
        </p>

        {/* 1. Personuppgiftsansvarig */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          1. Personuppgiftsansvarig
        </h2>
        <p>Personuppgiftsansvarig för behandlingen av personuppgifter på Veridoca är:</p>
        <div style={{ background: 'var(--accent)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1rem 0' }}>
          <p style={{ margin: 0 }}><strong>Företagsnamn:</strong> Digisoul Media</p>
          <p style={{ margin: '0.25rem 0 0' }}><strong>E-post:</strong> info@digisoul.se</p>
          <p style={{ margin: '0.25rem 0 0' }}><strong>Ort:</strong> Göteborg, Sverige</p>
        </div>
        <p>
          Har du frågor om hur vi hanterar dina personuppgifter, eller vill du utöva dina rättigheter, är du välkommen att
          kontakta oss via e-post på <strong>info@digisoul.se</strong>. Vi besvarar ditt ärende senast inom 30 dagar.
        </p>

        {/* 2. Vilken information samlar vi in */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          2. Vilken information samlar vi in?
        </h2>
        <p>
          Veridoca är utformat för att kräva minimal datainsamling. Du behöver inte skapa ett konto eller lämna några
          personuppgifter för att generera och ladda ner ett juridiskt dokument. All dokumentgenerering sker lokalt i din webbläsare.
        </p>

        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--foreground)', fontSize: '1.1rem' }}>
          2.1 Information du lämnar frivilligt
        </h3>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Kontaktformulär:</strong> Om du kontaktar oss via vårt kontaktformulär behandlar vi ditt namn och
            din e-postadress för att besvara din förfrågan. Dessa uppgifter sparas inte längre än nödvändigt.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Dokumentdata:</strong> Information du fyller i när du skapar ett avtal (t.ex. partsnamn, datum) bearbetas
            enbart i din webbläsare och skickas aldrig till våra servrar.
          </li>
        </ul>

        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--foreground)', fontSize: '1.1rem' }}>
          2.2 Information som samlas in automatiskt
        </h3>
        <p>
          När du besöker Veridoca samlas viss teknisk information in automatiskt via cookies och liknande tekniker:
        </p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>IP-adress</strong> (anonymiserad i möjlig mån)</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Webbläsartyp och version</strong></li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Operativsystem</strong></li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Hänvisande webbadress (referrer)</strong></li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Sidor du besöker och hur länge</strong></li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Enhetsinformation</strong> (skärmupplösning, enhetstyp)</li>
        </ul>
        <p>
          Denna information behandlas i aggregerad och i möjlig mån anonymiserad form i syfte att förbättra webbplatsen
          och förstå hur besökare interagerar med innehållet.
        </p>

        {/* 3. Hur vi använder informationen */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          3. Hur vi använder informationen
        </h2>
        <p>Vi använder insamlad information för följande ändamål:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Driftsäkerhet och prestandaövervakning:</strong> Säkerställa att webbplatsen fungerar korrekt och
            identifiera tekniska problem.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Webbplatsförbättring:</strong> Analysera besöksstatistik för att förstå vilka sidor som är populära
            och hur vi kan förbättra användarupplevelsen.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Annonsvisning:</strong> Visa relevanta annonser via Google AdSense (se avsnitt 5 nedan).
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Kundtjänst:</strong> Besvara frågor och förfrågningar du skickar via kontaktformuläret.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Säkerhet:</strong> Förhindra missbruk, bedrägerier och attacker mot webbplatsen.
          </li>
        </ul>

        {/* 4. Rättslig grund */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          4. Rättslig grund för behandlingen (GDPR)
        </h2>
        <p>All behandling av personuppgifter sker i enlighet med GDPR. De rättsliga grunderna vi åberopar är:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Samtycke (Art. 6.1 a GDPR):</strong> För marknadsförings- och analyscookies ber vi om ditt
            samtycke via vår cookie-banner. Du kan när som helst återkalla ditt samtycke.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Berättigat intresse (Art. 6.1 f GDPR):</strong> För teknisk drift och säkerhet, samt aggregerad
            besöksanalys, baseras behandlingen på vårt berättigade intresse att driva en stabil och säker webbplats.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Fullgörande av avtal (Art. 6.1 b GDPR):</strong> Om du kontaktar oss behandlar vi dina uppgifter
            för att besvara din förfrågan.
          </li>
        </ul>

        {/* 5. Google AdSense */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          5. Google AdSense och annonscookies
        </h2>
        <p>
          Veridoca är en gratis tjänst som finansieras via annonser från <strong>Google AdSense</strong>. Google, som
          tredjepartsleverantör av annonser, använder cookies för att visa annonser baserade på dina tidigare besök på
          vår webbplats och på andra webbplatser. Dessa annonser kallas för "intressebaserade annonser".
        </p>

        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--foreground)', fontSize: '1.1rem' }}>
          5.1 Vilka data samlas in av Google?
        </h3>
        <p>Google AdSense kan samla in och behandla följande uppgifter:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Cookies och liknande identifierare</li>
          <li style={{ marginBottom: '0.5rem' }}>IP-adress</li>
          <li style={{ marginBottom: '0.5rem' }}>Webbläsar- och enhetsinformation</li>
          <li style={{ marginBottom: '0.5rem' }}>Besöks- och interaktionsdata på Veridoca</li>
          <li style={{ marginBottom: '0.5rem' }}>Aggregerade demografiska data och intressekategorier</li>
        </ul>

        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--foreground)', fontSize: '1.1rem' }}>
          5.2 Google Consent Mode v2
        </h3>
        <p>
          Vi implementerar <strong>Google Consent Mode v2</strong> på vår webbplats. Det innebär att Google anpassar
          sin datainsamling baserat på om du accepterar eller nekar cookies via vår cookie-banner:
        </p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Om du accepterar:</strong> Google kan sätta annonscookies och visa personanpassade annonser.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Om du nekar:</strong> Google använder cookieless mätning (konverteringsmodellering) och visar
            generiska, icke-personaliserade annonser. Din webbläsaraktivitet används inte för annonsanpassning.
          </li>
        </ul>

        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--foreground)', fontSize: '1.1rem' }}>
          5.3 Opt-out från personaliserade annonser
        </h3>
        <p>Du kan när som helst välja bort personaliserade annonser på flera sätt:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Via vår <strong>cookie-banner</strong> längst ner på sidan.</li>
          <li style={{ marginBottom: '0.5rem' }}>Via <strong>Googles inställningar för annonser</strong>: adssettings.google.com</li>
          <li style={{ marginBottom: '0.5rem' }}>Via <strong>Network Advertising Initiative</strong>: optout.networkadvertising.org</li>
          <li style={{ marginBottom: '0.5rem' }}>Via din webbläsares inställningar för cookies.</li>
        </ul>
        <p>
          Observera att om du väljer bort personaliserade annonser kan du fortfarande se annonser, men de kommer
          inte att vara anpassade efter dina intressen.
        </p>
        <p>
          Mer information om hur Google hanterar data finns i Googles integritetspolicy:
          policies.google.com/privacy
        </p>

        {/* 6. Google Analytics */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          6. Analyser och statistik
        </h2>
        <p>
          Vi kan använda analysverktyg för att förstå hur besökare interagerar med vår webbplats. Dessa verktyg
          samlar in aggregerad, statistisk information om besöksmönster, populära sidor och teknisk prestanda.
          Ingen information kopplas till enskilda individers identitet utan ditt samtycke.
        </p>

        {/* 7. Cookies */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          7. Cookies och liknande tekniker
        </h2>
        <p>
          En cookie är en liten textfil som en webbplats sparar i din webbläsare. Vi använder följande typer av cookies:
        </p>

        <div style={{ overflowX: 'auto', marginTop: '1rem', marginBottom: '1rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: 'var(--accent)', textAlign: 'left' }}>
                <th style={{ padding: '0.75rem 1rem', borderBottom: '2px solid var(--border)' }}>Typ</th>
                <th style={{ padding: '0.75rem 1rem', borderBottom: '2px solid var(--border)' }}>Syfte</th>
                <th style={{ padding: '0.75rem 1rem', borderBottom: '2px solid var(--border)' }}>Kräver samtycke</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)' }}>Nödvändiga</td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)' }}>Grundläggande funktioner (cookiesamtycke, sessionshantering)</td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)' }}>Nej</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)' }}>Analys</td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)' }}>Besöksstatistik, sidprestanda</td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)' }}>Ja</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)' }}>Marknadsföring</td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)' }}>Personanpassade annonser via Google AdSense</td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--border)' }}>Ja</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Du kan hantera dina cookie-inställningar via vår cookie-banner eller direkt i din webbläsares
          inställningar. Observera att om du blockerar alla cookies kan vissa funktioner på webbplatsen sluta fungera.
        </p>

        {/* 8. Tredjeparter */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          8. Tredjeparter vi delar data med
        </h2>
        <p>Vi säljer aldrig dina personuppgifter. Vi kan däremot dela begränsad data med följande tredjeparter:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Google LLC</strong> – För annonser (AdSense) och eventuell analys. Google är certifierat under
            EU-U.S. Data Privacy Framework. Läs Googles integritetspolicy på policies.google.com/privacy.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Vercel Inc.</strong> – Hosting av webbplatsen. Vercel behandlar teknisk driftsdata.
            Läs mer på vercel.com/legal/privacy-policy.
          </li>
        </ul>
        <p>
          Vi ingår databehandlingsavtal (DPA) med alla tredjeparter som behandlar personuppgifter på våra vägnar,
          i enlighet med GDPR artikel 28.
        </p>

        {/* 9. Dina rättigheter */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          9. Dina rättigheter enligt GDPR
        </h2>
        <p>Enligt GDPR har du som registrerad en rad rättigheter. Du kan när som helst utöva dessa rättigheter
           genom att kontakta oss på <strong>info@digisoul.se</strong>.</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Rätt till tillgång (Art. 15):</strong> Du har rätt att få bekräftelse på om vi behandlar uppgifter
            om dig, och i så fall få en kopia av dessa uppgifter.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Rätt till rättelse (Art. 16):</strong> Du har rätt att begära att felaktiga eller ofullständiga
            uppgifter om dig rättas.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Rätt till radering ("rätten att bli glömd") (Art. 17):</strong> Du har under vissa omständigheter
            rätt att begära att vi raderar dina personuppgifter.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Rätt till begränsning (Art. 18):</strong> Du har rätt att begära att behandlingen av dina
            uppgifter begränsas i vissa situationer.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Rätt till dataportabilitet (Art. 20):</strong> Du har rätt att få ut uppgifter du lämnat i ett
            strukturerat, maskinläsbart format.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Rätt att invända (Art. 21):</strong> Du har rätt att invända mot behandling som grundas på
            berättigat intresse.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Rätt att återkalla samtycke:</strong> Om behandlingen grundas på samtycke kan du när som helst
            återkalla det, utan att detta påverkar lagligheten av behandlingen innan återkallelsen.
          </li>
        </ul>
        <p>
          Du har också rätt att lämna in ett klagomål till <strong>Integritetsskyddsmyndigheten (IMY)</strong>, som är
          tillsynsmyndighet för dataskydd i Sverige. Mer information finns på imy.se.
        </p>

        {/* 10. Lagringstid */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          10. Hur länge sparar vi dina uppgifter?
        </h2>
        <p>
          Vi sparar inte personuppgifter längre än nödvändigt för det syfte de samlades in för:
        </p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Kontaktförfrågningar:</strong> E-postkorrespondens sparas i upp till 12 månader från avslutat ärende.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Analyscookies:</strong> Maximalt 13 månader, därefter aggregeras och anonymiseras data.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Marknadsföringscookies (AdSense):</strong> Enligt Googles cookie-policy, normalt upp till 13 månader.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Nödvändiga cookies:</strong> Sessionsbaserade (raderas när du stänger webbläsaren) eller upp till 1 år.
          </li>
        </ul>

        {/* 11. Säkerhet */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          11. Datasäkerhet
        </h2>
        <p>
          Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig
          åtkomst, förlust eller förstörelse. Webbplatsen använder HTTPS (krypterad kommunikation). Dokumentgenerering
          sker lokalt i din webbläsare, vilket innebär att känslig avtalsinformation aldrig överförs till eller
          lagras på våra servrar.
        </p>
        <p>
          Trots dessa åtgärder kan vi inte garantera 100 % säkerhet för dataöverföring via internet.
          Vid misstänkt dataintrång som berör dina personuppgifter underrättar vi dig och IMY inom 72 timmar
          i enlighet med GDPR artikel 33–34.
        </p>

        {/* 12. Barn */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          12. Barn och minderåriga
        </h2>
        <p>
          Veridocas tjänster är avsedda för personer som är 16 år eller äldre. Vi samlar inte medvetet in
          personuppgifter från barn under 16 år. Om du är förälder eller vårdnadshavare och tror att ditt
          barn har lämnat personuppgifter till oss, kontakta oss omedelbart på <strong>info@digisoul.se</strong> så
          raderar vi uppgifterna skyndsamt.
        </p>

        {/* 13. Ändringar */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          13. Ändringar i integritetspolicyn
        </h2>
        <p>
          Vi förbehåller oss rätten att uppdatera denna integritetspolicy när lagar, regler eller vår verksamhet
          förändras. Väsentliga ändringar meddelas tydligt på webbplatsen. Datumet för senaste uppdatering anges
          alltid överst i policyn. Vi rekommenderar att du läser igenom policyn regelbundet.
        </p>

        {/* 14. Kontakt */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          14. Kontakta oss
        </h2>
        <p>
          Har du frågor om vår integritetspolicy, vill utöva dina rättigheter, eller vill lämna ett klagomål?
          Kontakta oss:
        </p>
        <div style={{ background: 'var(--accent)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1rem 0' }}>
          <p style={{ margin: 0 }}><strong>Digisoul Media</strong></p>
          <p style={{ margin: '0.25rem 0 0' }}>E-post: info@digisoul.se</p>
          <p style={{ margin: '0.25rem 0 0' }}>Göteborg, Sverige</p>
        </div>
        <p>
          Är du inte nöjd med vårt svar har du rätt att vända dig till Integritetsskyddsmyndigheten (IMY) på
          imy.se.
        </p>

        <div style={{ marginTop: '3rem', padding: '1rem 1.5rem', background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <strong>Version:</strong> 1.2 | <strong>Senast uppdaterad:</strong> {updated} | <strong>Tillämplig lag:</strong> GDPR (EU) 2016/679 och svensk Dataskyddslag (2018:218)
        </div>
      </div>
    </div>
  );
}
