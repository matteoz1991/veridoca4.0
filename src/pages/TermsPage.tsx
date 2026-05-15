import React from 'react';
import { CountryConfig } from '../../types';
import { getPageText } from '../locales/pages';

export function TermsPage({ country }: { country: CountryConfig }) {
  const c = country.id;
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-slate-200">
      <h1 className="text-4xl font-bold mb-8 text-white">{getPageText(c, 'terms', 'title')}</h1>

      <div className="prose prose-lg prose-invert max-w-none space-y-8">
        <p className="text-slate-400">
          {getPageText(c, 'terms', 'lastUpdated')} {new Date().toLocaleDateString('sv-SE')}
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">{getPageText(c, 'terms', 'acceptanceTitle')}</h2>
          <p>{getPageText(c, 'terms', 'acceptanceText')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8 text-white">{getPageText(c, 'terms', 'purposeTitle')}</h2>
          <p>{getPageText(c, 'terms', 'purposeText')}</p>
        </section>

        <section className="bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-white">{getPageText(c, 'terms', 'liabilityTitle')}</h2>
          <p>{getPageText(c, 'terms', 'liabilityText')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8 text-white">{getPageText(c, 'terms', 'usageTitle')}</h2>
          <p>{getPageText(c, 'terms', 'usageText')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8 text-white">{getPageText(c, 'terms', 'rightsTitle')}</h2>
          <p>{getPageText(c, 'terms', 'rightsText')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8 text-white">{getPageText(c, 'terms', 'thirdPartyTitle')}</h2>
          <p>{getPageText(c, 'terms', 'thirdPartyText')}</p>
        </section>

        <section className="bg-slate-800/50 p-6 rounded-lg mt-12 border border-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-white">{getPageText(c, 'terms', 'contactTitle')}</h2>
          <p className="mb-4">{getPageText(c, 'terms', 'contactText')}</p>
        </section>
      </div>
    </div>
  );
}
