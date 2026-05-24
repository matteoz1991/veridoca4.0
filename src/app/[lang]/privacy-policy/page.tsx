export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Privacy Policy</h1>
      <div style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>1. Information we collect</h2>
        <p>Veridoca is committed to protecting your privacy. We do not require you to create an account or provide personal information to use our document generation services. Documents are generated locally in your browser.</p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>2. Google AdSense & Cookies</h2>
        <p>We use Google AdSense to display advertisements. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting Google's Ads Settings.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>3. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at info@digisoul.se.</p>
      </div>
    </div>
  );
}
