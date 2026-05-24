export default function Impressum() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Impressum</h1>
      <div style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
        <p>
          Denna sida uppfyller kraven på företagsinformation enligt lagstiftning (exempelvis E-handelslagen).
        </p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Ansvarig utgivare</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Företagsnamn:</strong> Digisoul Media</li>
          <li style={{ marginBottom: '0.5rem' }}>Veridoca drivs och ägs av Digisoul Media.</li>
        </ul>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Kontakt</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>E-post:</strong> info@digisoul.se</li>
        </ul>
      </div>
    </div>
  );
}
