import React from 'react';
import { Link } from 'react-router-dom';
import { CountryConfig } from '../../types';
import { getPageText } from '../locales/pages';

export function AboutPage({ country }: { country: CountryConfig }) {
  const c = country.id;
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-slate-200">
      <h1 className="text-4xl font-bold mb-8 text-white">{getPageText(c, 'about', 'title')}</h1>

      <div className="prose prose-lg prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">{getPageText(c, 'about', 'missionTitle')}</h2>
          <p>{getPageText(c, 'about', 'missionText')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8 text-white">{getPageText(c, 'about', 'whatWeDoTitle')}</h2>
          <p>{getPageText(c, 'about', 'whatWeDoText')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8 text-white">{getPageText(c, 'about', 'whoWeAreTitle')}</h2>
          <p>{getPageText(c, 'about', 'whoWeAreText')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8 text-white">{getPageText(c, 'about', 'whyFreeTitle')}</h2>
          <p>{getPageText(c, 'about', 'whyFreeText')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 mt-8 text-white">{getPageText(c, 'about', 'disclaimerTitle')}</h2>
          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-lg mt-4">
            <p className="font-semibold mb-2 text-amber-500">{getPageText(c, 'about', 'disclaimerTitle')}</p>
            <p className="text-sm">{getPageText(c, 'about', 'disclaimerText')}</p>
          </div>
        </section>

        <section className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 mt-12">
          <h2 className="text-2xl font-bold mb-4 text-white">{getPageText(c, 'about', 'contactTitle')}</h2>
          <div className="space-y-2 text-slate-300">
            <p><strong>Email:</strong> <a href="mailto:info@digisoul.se" className="text-amber-500 hover:underline">info@digisoul.se</a></p>
            <p><strong>Företag:</strong> Digisoul Media</p>
          </div>
          <Link 
            to="/kontakt" 
            className="inline-block mt-6 px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors font-semibold"
          >
            {getPageText(c, 'about', 'sendMessage')}
          </Link>
        </section>
      </div>
    </div>
  );
}
