import { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';
import { CountryConfig } from '../../types';
import { t } from '../../i18n';

export function CookieConsent({ country }: { country: CountryConfig }) {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      // Load saved preferences
      const saved = JSON.parse(consent);
      setPreferences(saved);
      loadScripts(saved);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      advertising: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      advertising: false,
    };
    savePreferences(necessaryOnly);
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
    loadScripts(prefs);
  };

  const loadScripts = (prefs: typeof preferences) => {
    // Load Google Analytics if accepted
    if (prefs.analytics && typeof window !== 'undefined') {
      // Add Google Analytics script
      const gaScript = document.createElement('script');
      gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
      gaScript.async = true;
      document.head.appendChild(gaScript);

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    }
  };

  if (!showBanner) {
    // Floating cookie settings button
    return (
      <button
        onClick={() => setShowBanner(true)}
        className="fixed bottom-4 left-4 z-50 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        aria-label={t(country.id, 'cookie.settingsTitle')}
      >
        <Cookie className="w-5 h-5" />
      </button>
    );
  }

  return (
    <>
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl text-slate-900">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          {!showSettings ? (
            // Simple banner
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Cookie className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-lg">{t(country.id, 'cookie.title')}</h3>
                </div>
                <p className="text-sm text-gray-700">
                  {t(country.id, 'cookie.desc')}{' '}
                  <a href="/integritetspolicy" className="text-blue-600 hover:underline">
                    {t(country.id, 'cookie.policy')}
                  </a>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  {t(country.id, 'cookie.settings')}
                </button>
                <button
                  onClick={acceptNecessary}
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {t(country.id, 'cookie.necessaryOnly')}
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  {t(country.id, 'cookie.acceptAll')}
                </button>
              </div>
            </div>
          ) : (
            // Detailed settings
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl">{t(country.id, 'cookie.settingsTitle')}</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{t(country.id, 'cookie.necessary')}</h4>
                    <p className="text-sm text-gray-600">
                      {t(country.id, 'cookie.necessaryDesc')}
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="w-5 h-5"
                    />
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{t(country.id, 'cookie.analytics')}</h4>
                    <p className="text-sm text-gray-600">
                      {t(country.id, 'cookie.analyticsDesc')}
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({
                        ...preferences,
                        analytics: e.target.checked
                      })}
                      className="w-5 h-5"
                    />
                  </div>
                </div>

                {/* Advertising cookies */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{t(country.id, 'cookie.advertising')}</h4>
                    <p className="text-sm text-gray-600">
                      {t(country.id, 'cookie.advertisingDesc')}
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.advertising}
                      onChange={(e) => setPreferences({
                        ...preferences,
                        advertising: e.target.checked
                      })}
                      className="w-5 h-5"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-end">
                <button
                  onClick={acceptNecessary}
                  className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {t(country.id, 'cookie.necessaryOnly')}
                </button>
                <button
                  onClick={saveCustomPreferences}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  {t(country.id, 'cookie.saveSettings')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
