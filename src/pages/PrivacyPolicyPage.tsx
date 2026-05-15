import React from 'react';
import { CountryConfig } from '../../types';
import { getPageText } from '../locales/pages';

export function PrivacyPolicyPage({ country }: { country: CountryConfig }) {
  const c = country.id;
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-slate-200">
      <h1 className="text-4xl font-bold mb-8 text-white">{getPageText(c, 'privacy', 'title')}</h1>
      
      <div className="prose prose-lg prose-invert max-w-none space-y-8">
        <p className="text-slate-400">
          Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">{getPageText(c, 'privacy', 'introTitle')}</h2>
          <p>{getPageText(c, 'privacy', 'introText')}</p>
        </section>

        <section className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-amber-500 my-8">
          <h2 className="text-2xl font-bold mb-4 text-white">{getPageText(c, 'privacy', 'adsTitle')}</h2>
          <p>{getPageText(c, 'privacy', 'adsText')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">{getPageText(c, 'privacy', 'cookiesTitle')}</h2>
          <p>{getPageText(c, 'privacy', 'cookiesText')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8 text-white">{getPageText(c, 'privacy', 'dataTitle')}</h2>
          <p>{getPageText(c, 'privacy', 'dataText')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8 text-white">{getPageText(c, 'privacy', 'gdprTitle')}</h2>
          <p>{getPageText(c, 'privacy', 'gdprText')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8 text-white">{getPageText(c, 'privacy', 'securityTitle')}</h2>
          <p>{getPageText(c, 'privacy', 'securityText')}</p>
        </section>

      </div>
    </div>
  );
}
