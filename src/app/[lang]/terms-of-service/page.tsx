export default function TermsOfService() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Terms of Service</h1>
      <div style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>1. Acceptance of Terms</h2>
        <p>By accessing and using Veridoca, you accept and agree to be bound by the terms and provision of this agreement. Veridoca provides free legal document templates for informational purposes only.</p>
        
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>2. No Legal Advice</h2>
        <p>The documents generated on Veridoca are templates and do not constitute legal advice. We strongly recommend consulting with a qualified attorney before signing any legal documents to ensure they meet your specific needs and comply with local laws.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--foreground)' }}>3. AdSense and Monetization</h2>
        <p>Veridoca is a free service supported by advertising through Google AdSense. By using our service, you agree to the display of advertisements.</p>
      </div>
    </div>
  );
}
