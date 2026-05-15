import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { CountryConfig } from '../../types';
import { getPageText } from '../locales/pages';

export function ContactPage({ country }: { country: CountryConfig }) {
  const c = country.id;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "be37c998-6a51-4dd3-8475-d50330156e96",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-slate-200">
      <h1 className="text-4xl font-bold mb-8 text-white">{getPageText(c, 'contact', 'title')}</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-slate-400 mb-6">{getPageText(c, 'contact', 'desc')}</p>

          {status === 'success' ? (
            <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-semibold text-green-400">{getPageText(c, 'contact', 'successTitle')}</p>
                <p className="text-sm text-green-500/80 mt-1">{getPageText(c, 'contact', 'successDesc')}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium mb-2 text-slate-300">{getPageText(c, 'contact', 'name')}</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-2 text-slate-300">{getPageText(c, 'contact', 'email')}</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-medium mb-2 text-slate-300">{getPageText(c, 'contact', 'subject')}</label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-2 text-slate-300">{getPageText(c, 'contact', 'message')}</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white outline-none resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded mt-4">
                  <p className="text-red-400 text-sm">{getPageText(c, 'contact', 'error')}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-400 hover:to-amber-500 transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                {status === 'sending' ? getPageText(c, 'contact', 'sendingBtn') : getPageText(c, 'contact', 'sendBtn')}
              </button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
            <h3 className="font-bold text-xl mb-4 text-white">{getPageText(c, 'contact', 'infoTitle')}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 mt-1" />
                <div>
                  <p className="font-semibold text-slate-200">Email</p>
                  <a href="mailto:info@digisoul.se" className="text-amber-500 hover:underline text-sm">
                    info@digisoul.se
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center text-amber-500 mt-1">🏢</div>
                <div>
                  <p className="font-semibold text-slate-200">{getPageText(c, 'contact', 'company')}</p>
                  <p className="text-slate-400 text-sm">Digisoul Media</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center text-amber-500 mt-1">📍</div>
                <div>
                  <p className="font-semibold text-slate-200">{getPageText(c, 'contact', 'location')}</p>
                  <p className="text-slate-400 text-sm">{getPageText(c, 'contact', 'locationName')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-lg mb-2 text-white">{getPageText(c, 'contact', 'responseTimeTitle')}</h3>
            <p className="text-slate-400 text-sm">{getPageText(c, 'contact', 'responseTimeText')}</p>
          </div>

          <div className="bg-amber-900/20 p-6 rounded-lg border-l-4 border-amber-500">
            <h3 className="font-bold text-lg mb-2 text-white">{getPageText(c, 'contact', 'adviceTitle')}</h3>
            <p className="text-slate-400 text-sm">{getPageText(c, 'contact', 'adviceText')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
