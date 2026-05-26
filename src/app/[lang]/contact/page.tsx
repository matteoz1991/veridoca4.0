'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xvgzrlgp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    fontSize: '1rem',
    background: 'var(--accent)',
    color: 'var(--foreground)',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.4rem',
    fontWeight: 600,
    fontSize: '0.9rem',
    color: 'var(--foreground)',
  };

  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem', maxWidth: '860px' }}>
      <nav style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        <a href="/sv" style={{ color: 'var(--text-muted)' }}>Hem</a> › Kontakt
      </nav>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>Kontakta oss</h1>
      <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.7, maxWidth: '640px' }}>
        Vi välkomnar feedback, frågor och förslag. Fyll i formuläret nedan eller skicka ett e-postmeddelande direkt till oss.
        Vi strävar efter att besvara alla förfrågningar inom 2 arbetsdagar.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

        {/* Formulär */}
        <div style={{ gridColumn: '1 / -1', maxWidth: '600px' }}>
          {status === 'sent' ? (
            <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '10px', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✅</div>
              <h2 style={{ color: 'var(--foreground)', marginBottom: '0.5rem' }}>Meddelandet skickat!</h2>
              <p style={{ color: 'var(--text-muted)' }}>Tack för att du hörde av dig. Vi återkommer inom 2 arbetsdagar.</p>
              <button
                onClick={() => setStatus('idle')}
                style={{ marginTop: '1.5rem', padding: '0.75rem 2rem', background: 'var(--primary)', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}
              >
                Skicka nytt meddelande
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>Namn <span style={{ color: '#e53e3e' }}>*</span></label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ditt namn"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>E-post <span style={{ color: '#e53e3e' }}>*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="din@epost.se"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" style={labelStyle}>Ämne <span style={{ color: '#e53e3e' }}>*</span></label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">Välj ämne...</option>
                  <option value="Fel i mall">Fel eller problem i en mall</option>
                  <option value="Förslag ny mall">Förslag på ny mall</option>
                  <option value="Juridisk fråga">Allmän fråga om tjänsten</option>
                  <option value="Samarbete">Samarbete eller partnerskap</option>
                  <option value="Övrigt">Övrigt</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>Meddelande <span style={{ color: '#e53e3e' }}>*</span></label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Beskriv ditt ärende..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                />
              </div>

              <div style={{ background: '#fff5f5', borderLeft: '3px solid #e53e3e', padding: '0.75rem 1rem', borderRadius: '4px', fontSize: '0.875rem', color: '#660000' }}>
                <strong>Observera:</strong> Vi kan inte erbjuda specifik juridisk rådgivning. Vid komplexa rättsliga frågor, kontakta en advokatbyrå.
              </div>

              {status === 'error' && (
                <div style={{ background: '#fff5f5', border: '1px solid #e53e3e', borderRadius: '8px', padding: '0.75rem 1rem', fontSize: '0.9rem', color: '#660000' }}>
                  Något gick fel. Försök igen eller skicka ett e-postmeddelande direkt till info@digisoul.se.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  padding: '0.875rem 2rem',
                  background: status === 'sending' ? 'var(--border)' : 'var(--primary)',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  alignSelf: 'flex-start',
                }}
              >
                {status === 'sending' ? 'Skickar...' : 'Skicka meddelande →'}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Contact info cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem', marginTop: '4rem' }}>
        <div style={{ background: 'var(--accent)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.5rem' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>📧</div>
          <h3 style={{ color: 'var(--foreground)', fontSize: '1rem', marginBottom: '0.5rem' }}>E-post</h3>
          <a href="mailto:info@digisoul.se" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
            info@digisoul.se
          </a>
          <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>Svar inom 2 arbetsdagar</p>
        </div>

        <div style={{ background: 'var(--accent)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.5rem' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>🏢</div>
          <h3 style={{ color: 'var(--foreground)', fontSize: '1rem', marginBottom: '0.5rem' }}>Företag</h3>
          <p style={{ margin: 0, fontWeight: 600, color: 'var(--foreground)' }}>Digisoul Media</p>
          <p style={{ fontSize: '0.85rem', marginTop: '0.25rem', color: 'var(--text-muted)' }}>Göteborg, Sverige</p>
        </div>

        <div style={{ background: 'var(--accent)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.5rem' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>📄</div>
          <h3 style={{ color: 'var(--foreground)', fontSize: '1rem', marginBottom: '0.5rem' }}>Vanliga frågor</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
            Många svar finns i FAQ-sektionerna på respektive mallsida.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '3rem', padding: '1.5rem 2rem', background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <strong style={{ color: 'var(--foreground)' }}>Rapportera ett fel i en mall:</strong> Om du hittat ett juridiskt fel eller
        en felaktighet i någon av våra mallar är vi extra tacksamma om du berättar det för oss. Välj ämnet
        "Fel eller problem i en mall" i formuläret och beskriv vilket dokument det gäller och vad som är fel.
        Vi strävar efter att åtgärda rapporterade fel inom 48 timmar.
      </div>
    </div>
  );
}
