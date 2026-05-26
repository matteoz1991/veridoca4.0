import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om Veridoca – Gratis Juridiska Avtalsmallar för Sverige',
  description: 'Lär dig mer om Veridoca – vem vi är, varför tjänsten är gratis och hur vi skapar pålitliga juridiska avtalsmallar för privatpersoner och företag i Sverige.',
  alternates: { canonical: 'https://veridoca.com/sv/about' },
  robots: { index: true, follow: true },
};

export default function AboutUs() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem', maxWidth: '860px' }}>
      <nav style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        <a href="/sv" style={{ color: 'var(--text-muted)' }}>Hem</a> › Om oss
      </nav>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Om Veridoca</h1>
      <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.7, maxWidth: '680px' }}>
        Vi demokratiserar tillgången till juridiska dokument. Grundläggande juridisk trygghet borde inte kosta tusentals kronor
        eller vara förbehållen stora företag med egna juridikavdelningar.
      </p>

      <div style={{ lineHeight: 1.85, color: 'var(--text-muted)' }}>

        {/* Vår vision */}
        <h2 style={{ marginTop: '0', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          Vår vision
        </h2>
        <p>
          I Sverige ingår vi dagligen juridiskt bindande avtal – när vi anställer, hyr, köper, säljer eller samarbetar.
          Ändå saknar många privatpersoner och småföretag tillgång till korrekta avtalsmallar. Konsekvenserna av ett
          dåligt avtal kan vara allvarliga: tvister, ekonomisk förlust och stress.
        </p>
        <p>
          Veridoca grundades med en enkel vision: <strong>juridisk trygghet ska vara tillgänglig för alla</strong>.
          Vi tror att en hyresgäst, en frilansare och ett litet aktiebolag förtjänar lika god juridisk grund som
          ett multinationellt företag – utan att betala advokatfirmornas timprisar för standarddokument.
        </p>

        {/* Vilka vi är */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          Vilka vi är
        </h2>
        <p>
          Veridoca är en tjänst driven av <strong>Digisoul Media</strong>, ett digitalt mediabolag med bas i Göteborg.
          Teamet bakom Veridoca kombinerar erfarenhet inom juridik, mjukvaruutveckling och digital kommunikation.
        </p>
        <p>
          Vårt redaktionsteam, <strong>Veridoca Legal Team</strong>, arbetar med att ta fram, granska och kontinuerligt
          uppdatera samtliga mallar och juridiska guider på plattformen. Vi strävar efter att alla dokument ska:
        </p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Vara juridiskt korrekta enligt gällande svensk lagstiftning</li>
          <li style={{ marginBottom: '0.5rem' }}>Vara skrivna på ett tydligt och lättförståeligt språk</li>
          <li style={{ marginBottom: '0.5rem' }}>Täcka de vanligaste situationerna inom respektive dokumenttyp</li>
          <li style={{ marginBottom: '0.5rem' }}>Uppdateras när lagar och regler förändras</li>
        </ul>

        {/* Varför gratis */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          Varför är tjänsten gratis?
        </h2>
        <p>
          Vi finansierar Veridoca via annonser från <strong>Google AdSense</strong>. Det innebär att du som
          besökare ser annonser på webbplatsen – men behöver aldrig betala för att generera, fylla i eller
          ladda ner ett avtal.
        </p>
        <p>
          Vi anser att denna finansieringsmodell är rättvis: du bidrar med din tid och uppmärksamhet, och i
          gengäld får du gratis tillgång till verktyg som annars kan kosta hundratals till tusentals kronor per
          dokument hos en juristbyrå.
        </p>
        <p>
          Inga dolda avgifter. Inga konton. Inga prenumerationer. Bara korrekta avtal när du behöver dem.
        </p>

        {/* E-E-A-T: Expertis */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          Hur vi säkerställer kvaliteten (E-E-A-T)
        </h2>
        <p>
          Google och andra sökmotorer utvärderar innehåll utifrån fyra kriterier: <strong>Experience</strong> (erfarenhet),
          <strong> Expertise</strong> (expertis), <strong>Authoritativeness</strong> (auktoritet) och
          <strong> Trustworthiness</strong> (trovärdighet). Vi tar dessa krav på allvar – inte bara för att ranka
          bättre i sökmotorer, utan för att vi faktiskt vill att du ska kunna lita på det du laddar ner.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', margin: '1.5rem 0' }}>
          <div style={{ background: 'var(--accent)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.5rem' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>⚖️</div>
            <h3 style={{ color: 'var(--foreground)', fontSize: '1rem', marginBottom: '0.5rem' }}>Juridisk granskning</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Alla mallar granskas mot aktuell svensk lagstiftning (Avtalslagen, Köplagen, LAS, Hyreslagen m.fl.)
              innan publicering.
            </p>
          </div>
          <div style={{ background: 'var(--accent)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.5rem' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>🔄</div>
            <h3 style={{ color: 'var(--foreground)', fontSize: '1rem', marginBottom: '0.5rem' }}>Löpande uppdateringar</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Vi uppdaterar mallar och guider när lagstiftning ändras eller när vi identifierar förbättringsmöjligheter
              baserat på användarfeedback.
            </p>
          </div>
          <div style={{ background: 'var(--accent)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.5rem' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>📚</div>
            <h3 style={{ color: 'var(--foreground)', fontSize: '1rem', marginBottom: '0.5rem' }}>Informativa guider</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Till varje mall bifogar vi en guide som förklarar när dokumentet behövs, vad det ska innehålla
              och vilka misstag man ska undvika.
            </p>
          </div>
          <div style={{ background: 'var(--accent)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.5rem' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>🤝</div>
            <h3 style={{ color: 'var(--foreground)', fontSize: '1rem', marginBottom: '0.5rem' }}>Transparens</h3>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>
              Vi är tydliga med att våra mallar är standarddokument som inte ersätter individanpassad
              juridisk rådgivning. Vi hänvisar alltid till jurist vid komplexa ärenden.
            </p>
          </div>
        </div>

        {/* Begränsningar */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          Vad vi inte gör – och vad du bör tänka på
        </h2>
        <p>
          Vi vill vara ärliga med vad Veridoca kan och inte kan göra för dig:
        </p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Vi ger inte juridisk rådgivning.</strong> Våra mallar är allmänna standarddokument.
            Din situation kan ha unika omständigheter som kräver att ett avtal anpassas av en jurist.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Vi garanterar inte att mallarna alltid är aktuella.</strong> Lagstiftning förändras. Vi gör
            vårt bästa för att hålla dokumenten uppdaterade, men du ansvarar för att kontrollera gällande lag
            vid användningstillfället.
          </li>
          <li style={{ marginBottom: '0.75rem' }}>
            <strong>Internationella avtal kan kräva lokal anpassning.</strong> Våra mallar är anpassade för
            svenska förhållanden. Avtal med parter i andra länder kan behöva regleras av annan lagstiftning.
          </li>
        </ul>
        <p>
          Vid komplexa situationer – till exempel vid köp av företag, fastighetsöverlåtelse, internationella
          avtal eller arbetsrättsliga tvister – rekommenderar vi alltid att du anlitar en kvalificerad jurist
          eller advokat.
        </p>

        {/* Statistik / trovärdighet */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          Veridoca i siffror
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', margin: '1rem 0' }}>
          {[
            { num: '25+', label: 'Juridiska mallar' },
            { num: '10+', label: 'Informativa guider' },
            { num: '100%', label: 'Gratis för alla' },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: 'center', padding: '1.5rem 1rem', background: 'var(--accent)', border: '1px solid var(--border)', borderRadius: '10px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>{num}</div>
              <div style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Kontakt */}
        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--foreground)', fontSize: '1.5rem' }}>
          Kontakta oss
        </h2>
        <p>
          Har du feedback, hittat ett fel i en mall, eller vill du föreslå ett nytt dokument? Vi välkomnar
          alla synpunkter som hjälper oss förbättra tjänsten.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <a
            href="/sv/contact"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              background: 'var(--primary)',
              color: '#000',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Kontaktformulär
          </a>
          <a
            href="mailto:info@digisoul.se"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              border: '2px solid var(--border)',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'var(--foreground)',
              fontWeight: 600,
            }}
          >
            info@digisoul.se
          </a>
        </div>
      </div>
    </div>
  );
}
