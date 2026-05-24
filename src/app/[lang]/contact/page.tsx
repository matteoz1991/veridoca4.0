export default function Contact() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Kontakta Oss</h1>
      <div style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
        <p>
          Vi uppskattar feedback och svarar gärna på allmänna frågor kring våra dokument och vår plattform.
        </p>
        
        <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Företagsuppgifter</h2>
          <p><strong>Företagsnamn:</strong> Digisoul Media</p>
          <p><strong>E-post:</strong> info@digisoul.se</p>
          <p><em>Veridoca är en del av Digisoul Media.</em></p>
        </div>

        <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#fff5f5', borderLeft: '4px solid #ff4444', color: '#660000' }}>
          <strong>Viktig information:</strong> Observera att vi tyvärr inte kan erbjuda specifik juridisk rådgivning eller svara på frågor som kräver tolkning av din unika legala situation. Vänligen kontakta en advokatbyrå vid komplexa ärenden.
        </div>
      </div>
    </div>
  );
}
