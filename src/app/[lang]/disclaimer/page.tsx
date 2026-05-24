export default function Disclaimer() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Ansvarsfriskrivning (Disclaimer)</h1>
      <div style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
        
        <div style={{ padding: '2rem', background: '#f8fafc', borderLeft: '4px solid var(--primary)', borderRadius: '0 8px 8px 0', marginBottom: '2rem' }}>
          <p style={{ fontWeight: 600, color: 'var(--foreground)' }}>
            Informationen och dokumenten på Veridoca är tillhandahållna i informationssyfte och utgör inte juridisk rådgivning.
          </p>
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Ingen Juridisk Rådgivning</h2>
        <p>
          De dokumentmallar som genereras på plattformen är standardiserade utgångspunkter skapade för att hantera vanliga situationer. 
          Eftersom lagar och förordningar ständigt ändras, och varje individs eller företags situation är unik, kan vi inte garantera att 
          våra mallar är lämpliga, aktuella eller juridiskt bindande i ditt specifika fall.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Konsultera en Advokat</h2>
        <p>
          Vi uppmanar alla användare att alltid låta en kvalificerad advokat eller jurist granska dokument innan de undertecknas eller tas i bruk. 
          Användningen av Veridoca ersätter inte professionell rådgivning från en advokat.
        </p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Ansvarsbegränsning</h2>
        <p>
          Veridoca och dess ägare frånsäger sig allt ansvar för direkta, indirekta, tillfälliga eller följdskador som kan uppstå 
          genom användningen av, eller oförmågan att använda, de dokument och den information som finns på denna webbplats. 
          Du använder tjänsten helt på egen risk.
        </p>
      </div>
    </div>
  );
}
