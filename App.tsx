import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { DOCUMENT_TEMPLATES, getIcon, COUNTRIES } from './constants';
import { DocumentTemplate, UserInputData, DocumentCategory, CountryConfig } from './types';
import { generateLegalDocument } from './services/geminiService';
import { getLocalizedTemplates } from './data/templates';
import { 
  CheckCircle, 
  ChevronRight, 
  Loader2, 
  Search, 
  ShieldCheck, 
  Download, 
  Mail, 
  ArrowLeft,
  Star,
  Menu,
  X,
  CreditCard,
  FileText,
  Filter,
  Check,
  Lock
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { jsPDF } from 'jspdf';
import { LeaderboardAd } from './src/components/AdSense/LeaderboardAd';
import { StickySidebar } from './src/components/AdSense/StickySidebar';
import { MobileAnchorAd } from './src/components/AdSense/MobileAnchorAd';
import { NativeAd } from './src/components/AdSense/NativeAd';
import { InContentAd } from './src/components/AdSense/InContentAd';
import { AutoAds } from './src/components/AdSense/AutoAds';
import { DownloadGate } from './src/components/AdSense/DownloadGate';
import { LazyAdUnit } from './src/components/AdSense/LazyAdUnit';
import { CookieConsent } from './src/components/CookieConsent';
import { PrivacyPolicyPage } from './src/pages/PrivacyPolicyPage';
import { AboutPage } from './src/pages/AboutPage';
import { ContactPage } from './src/pages/ContactPage';
import { TermsPage } from './src/pages/TermsPage';
import { AdSenseChecklistPage } from './src/pages/AdSenseChecklistPage';

import { t } from './i18n';

// --- Sub-components ---

const BrandLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <img 
    src="/assets/bild2.png" 
    alt="Veridoca Logo" 
    className={`${className} select-none object-contain`} 
  />
);

const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false, type = 'button' }: any) => {
  const baseStyle = "px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-sm active:scale-95";
  
  const variants = {
    // Gold/Amber gradient for primary actions (High trust/Premium)
    primary: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white shadow-amber-500/20",
    // Subtle slate for secondary
    secondary: "bg-slate-700/50 hover:bg-slate-700 text-slate-200 border border-slate-600",
    // Outline for tertiary
    outline: "border border-amber-500/50 text-amber-500 hover:bg-amber-500/10",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5"
  };
  
  return (
    <button 
      type={type}
      disabled={disabled}
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

const Header = ({ 
  onHome, 
  country, 
  onCountryChange 
}: { 
  onHome: () => void, 
  country: CountryConfig, 
  onCountryChange: (c: CountryConfig) => void 
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="w-full py-2 px-6 flex justify-between items-center z-50 relative border-b border-brand-border bg-brand-dark/90 backdrop-blur-md sticky top-0">
      <div onClick={onHome} className="flex items-center cursor-pointer group">
        <div className="group-hover:scale-105 transition-transform duration-300">
          <BrandLogo className="h-24 w-auto" />
        </div>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400 items-center">
        <button onClick={() => { 
          if(window.location.pathname !== '/') { window.location.href = '/'; } 
          else { window.dispatchEvent(new CustomEvent('nav-home')); }
        }} className="hover:text-amber-500 transition-colors">{t(country.id, 'header.home')}</button>
        
        <button onClick={() => { 
          if(window.location.pathname !== '/') { window.location.href = '/?scroll=mallar'; }
          else { window.dispatchEvent(new CustomEvent('nav-templates')); } 
        }} className="hover:text-amber-500 transition-colors">{t(country.id, 'header.templates')}</button>
        
        <button onClick={() => { 
          if(window.location.pathname !== '/') { window.location.href = '/?scroll=how-it-works'; }
          else { window.dispatchEvent(new CustomEvent('nav-how-it-works')); }
        }} className="hover:text-amber-500 transition-colors">{t(country.id, 'header.howItWorks')}</button>
        
        {/* Language/Country Selector */}
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 hover:text-white transition-colors bg-brand-card border border-brand-border px-3 py-1.5 rounded-full text-sm font-medium"
          >
            <span className="text-base leading-none">{country.flag}</span>
            <span>{country.name}</span>
          </button>
          
          {showDropdown && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-brand-card border border-brand-border rounded-lg shadow-xl overflow-hidden py-1 z-50">
              {COUNTRIES.map(c => (
                <button
                  key={c.id}
                  onClick={() => {
                    onCountryChange(c);
                    setShowDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-slate-800 transition-colors ${country.id === c.id ? 'text-amber-500 bg-amber-500/10' : 'text-slate-300'}`}
                >
                  <span>{c.flag}</span>
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="hidden md:block">
        <Button variant="outline" className="px-4 py-2 text-sm" onClick={() => document.getElementById('mallar')?.scrollIntoView({behavior:'smooth'})}>
          {t(country.id, 'header.search')}
        </Button>
      </div>
      <div className="md:hidden flex items-center gap-4">
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-card border border-brand-border text-lg leading-none"
          >
            <span>{country.flag}</span>
          </button>
          {showDropdown && (
            <div className="absolute top-full right-0 mt-2 w-40 bg-brand-card border border-brand-border rounded-lg shadow-xl overflow-hidden py-1 z-50">
              {COUNTRIES.map(c => (
                <button
                  key={c.id}
                  onClick={() => {
                    onCountryChange(c);
                    setShowDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-slate-800 ${country.id === c.id ? 'text-amber-500' : 'text-slate-300'}`}
                >
                  <span>{c.flag}</span> <span>{c.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <Menu className="text-white w-6 h-6" />
      </div>
    </nav>
  );
};

const Hero = ({ onBrowse, country }: { onBrowse: () => void, country: CountryConfig }) => (
  <div className="relative py-24 px-6 flex flex-col items-center text-center overflow-hidden border-b border-brand-border/50">
    {/* Clean Background Gradients */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="relative z-10 max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8 animate-fade-in">
        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
        <span className="text-xs font-semibold text-amber-500 tracking-wide uppercase">{t(country.id, 'hero.badge')}</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight leading-[1.1] text-white">
        {t(country.id, 'hero.title1')}<br />
        <span className="text-slate-400">{t(country.id, 'hero.title2')}</span>
      </h1>

      <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
        {t(country.id, 'hero.subtitle', { country: country.name })}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
        <Button variant="primary" onClick={onBrowse} className="w-full sm:w-auto px-8 py-4 text-lg shadow-lg shadow-amber-900/20">
          {t(country.id, 'hero.btnFind')} <ChevronRight className="w-5 h-5" />
        </Button>
        <Button variant="secondary" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior:'smooth'})} className="w-full sm:w-auto px-8 py-4 text-lg bg-transparent border-slate-700 hover:bg-slate-800">
          {t(country.id, 'hero.btnReadMore')}
        </Button>
      </div>
      
      <div className="mt-12 flex items-center justify-center flex-wrap gap-8 text-slate-500 text-sm font-medium">
        <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> {t(country.id, 'hero.feature1')}</span>
        <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> {t(country.id, 'hero.feature2', { country: country.name })}</span>
        <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" /> {country.language}</span>
      </div>
    </div>
  </div>
);

const HowItWorks = ({ country }: { country: CountryConfig }) => (
  <div id="how-it-works" className="py-20 px-6 max-w-7xl mx-auto bg-brand-dark border-b border-brand-border/50">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
        {t(country.id, 'howItWorks.title')}
      </h2>
      <p className="text-slate-400 max-w-2xl mx-auto text-lg">
        {t(country.id, 'howItWorks.subtitle')}
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-amber-500 mb-6 relative">
          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-accent text-brand-dark text-xs font-bold flex items-center justify-center">1</span>
          <FileText className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{t(country.id, 'howItWorks.step1Title')}</h3>
        <p className="text-slate-400">{t(country.id, 'howItWorks.step1Desc')}</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-amber-500 mb-6 relative">
          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-accent text-brand-dark text-xs font-bold flex items-center justify-center">2</span>
          <FileText className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{t(country.id, 'howItWorks.step2Title')}</h3>
        <p className="text-slate-400">{t(country.id, 'howItWorks.step2Desc')}</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center text-amber-500 mb-6 relative">
          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-accent text-brand-dark text-xs font-bold flex items-center justify-center">3</span>
          <Check className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{t(country.id, 'howItWorks.step3Title')}</h3>
        <p className="text-slate-400">{t(country.id, 'howItWorks.step3Desc')}</p>
      </div>
    </div>
  </div>
);

const TemplateList = ({ onSelect, country }: { onSelect: (t: DocumentTemplate) => void, country: CountryConfig }) => {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const templates = getLocalizedTemplates(country.id);
  const categories = ['all', ...Object.values(DocumentCategory)];

  const getCategoryLabel = (cat: string) => {
    if (cat === 'all') return t(country.id, 'templates.all');
    return t(country.id, `categories.${cat}`);
  };

  const filteredTemplates = templates.filter(t => {
    const matchesCategory = filter === 'all' || t.category === filter;
    const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase()) || t.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="mallar" className="py-20 px-6 max-w-7xl mx-auto bg-brand-dark">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-serif font-bold mb-2 text-white">{t(country.id, 'templates.title')}</h2>
          <p className="text-slate-400">{t(country.id, 'templates.subtitle', { count: templates.length })}</p>
        </div>
        
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
          <input 
            type="text" 
            placeholder={t(country.id, 'templates.searchPlaceholder')} 
            className="w-full bg-brand-card border border-brand-border rounded-lg pl-10 pr-4 py-2.5 text-white text-sm focus:outline-none focus:border-brand-accent transition-colors placeholder:text-slate-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filter Tabs (Pills) */}
      <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-brand-border/50">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              filter === cat 
                ? 'bg-brand-accent text-white shadow-lg shadow-amber-900/20' 
                : 'bg-brand-card text-slate-400 hover:bg-slate-800 hover:text-white border border-brand-border'
            }`}
          >
            {getCategoryLabel(cat)}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {filteredTemplates.map(template => (
            <div 
              key={template.id} 
              onClick={() => onSelect(template)}
              className="group relative bg-brand-card border border-brand-border rounded-xl p-6 hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col h-full"
            >
              {template.popular && (
                <div className="absolute top-4 right-4 bg-amber-500/10 text-amber-500 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-amber-500/20">
                  {t(country.id, 'templates.popular')}
                </div>
              )}
              
              <div className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-300 mb-5 group-hover:text-amber-500 group-hover:border-amber-500/30 transition-colors">
                {getIcon(template.icon)}
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-amber-500 transition-colors">{template.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">{template.description}</p>
              
              <div className="pt-4 mt-auto border-t border-brand-border/50 flex justify-end items-center">
                <span className="text-xs font-semibold text-brand-accent flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                  {t(country.id, 'templates.createNow')} <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-500">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{t(country.id, 'templates.notFoundTitle')}</h3>
          <p className="text-slate-400">{t(country.id, 'templates.notFoundDesc')}</p>
          <button onClick={() => {setFilter('all'); setSearchTerm('')}} className="mt-4 text-amber-500 hover:underline">{t(country.id, 'templates.clearFilter')}</button>
        </div>
      )}

      <NativeAd className="mt-8" />
    </div>
  );
};

const InputForm = ({ 
  template, 
  onBack, 
  onSubmit, 
  isGenerating,
  country
}: { 
  template: DocumentTemplate, 
  onBack: () => void, 
  onSubmit: (data: UserInputData) => void,
  isGenerating: boolean,
  country: CountryConfig
}) => {
  const [formData, setFormData] = useState<UserInputData>({});

  const handleChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (isGenerating) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-brand-dark">
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-full border-4 border-slate-800 border-t-amber-500 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <FileText className="w-8 h-8 text-slate-600" />
          </div>
        </div>
        <h2 className="text-3xl font-serif font-bold mb-3 text-white">{t(country.id, 'form.generatingTitle')}</h2>
        <p className="text-slate-400 max-w-md animate-pulse">{t(country.id, 'form.generatingDesc', { template: template.title.toLowerCase() })}</p>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <button onClick={onBack} className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors text-sm font-medium">
        <ArrowLeft className="w-4 h-4 mr-2" /> {t(country.id, 'form.back')}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Info Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-brand-card border border-brand-border rounded-xl p-6 mb-6">
              <div className="w-10 h-10 rounded bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4">
                {getIcon(template.icon)}
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{template.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{template.description}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500 border-t border-brand-border pt-4">
                <CheckCircle className="w-3 h-3 text-green-500" /> {t(country.id, 'form.quality')}
              </div>
            </div>
            
            <div className="bg-blue-900/10 border border-blue-900/30 rounded-xl p-4">
              <h4 className="text-blue-400 text-sm font-bold mb-2">{t(country.id, 'form.tipsTitle')}</h4>
              <p className="text-xs text-blue-300/80">
                {t(country.id, 'form.tipsDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* The Form */}
        <div className="lg:col-span-2">
          <div className="bg-brand-card border border-brand-border rounded-xl p-8 shadow-2xl">
            <div className="mb-8 border-b border-brand-border pb-4">
               <h3 className="text-lg font-bold text-white flex items-center gap-2">
                 <span className="w-6 h-6 rounded-full bg-slate-700 text-white text-xs flex items-center justify-center">1</span> 
                 {t(country.id, 'form.step1')}
               </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {template.formFields.map((field) => (
                  <div key={field.id} className={`${field.type === 'textarea' ? 'md:col-span-2' : ''}`}>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {field.label} {field.required && <span className="text-amber-500">*</span>}
                    </label>
                    
                    {field.type === 'textarea' ? (
                      <textarea
                        required={field.required}
                        className="w-full bg-brand-dark border border-brand-border rounded-lg p-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all min-h-[120px] placeholder:text-slate-600 text-sm"
                        placeholder={field.placeholder}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                      />
                    ) : field.type === 'select' ? (
                      <div className="relative">
                        <select
                           required={field.required}
                           className="w-full bg-brand-dark border border-brand-border rounded-lg p-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all appearance-none text-sm"
                           onChange={(e) => handleChange(field.id, e.target.value)}
                           defaultValue=""
                        >
                          <option value="" disabled>{t(country.id, 'form.selectDefault')}</option>
                          {field.options?.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 rotate-90 pointer-events-none" />
                      </div>
                    ) : (
                      <input
                        type={field.type}
                        required={field.required}
                        className="w-full bg-brand-dark border border-brand-border rounded-lg p-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all text-sm placeholder:text-slate-600"
                        placeholder={field.placeholder}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-8 flex justify-end gap-4 border-t border-brand-border mt-8">
                <Button variant="ghost" onClick={onBack}>{t(country.id, 'form.cancel')}</Button>
                <Button type="submit" variant="primary">
                  {t(country.id, 'form.submit')} <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};




const DocumentPreview = ({ 
  content, 
  template,
  onEdit, 
  onComplete,
  country
}: { 
  content: string, 
  template: DocumentTemplate,
  onEdit: () => void, 
  onComplete: () => void,
  country: CountryConfig
}) => {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
      {/* Sidebar Controls */}
      <div className="lg:w-1/3 order-2 lg:order-1">
        <div className="sticky top-24 space-y-6">
          <div className="bg-brand-card border border-brand-border p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-bold text-white">{t(country.id, 'preview.lockedTitle')}</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              {t(country.id, 'preview.lockedDesc')}
            </p>
            <div className="space-y-3">
              <DownloadGate onDownload={onComplete}>
                <Button className="w-full py-4 text-lg animate-pulse shadow-lg shadow-amber-900/40">
                  {t(country.id, 'preview.btnUnlock')}
                </Button>
              </DownloadGate>
              <Button variant="secondary" onClick={onEdit} className="w-full">
                {t(country.id, 'preview.btnEdit')}
              </Button>
            </div>
          </div>

          <StickySidebar />

          <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-xl">
            <h4 className="font-semibold mb-4 flex items-center gap-2 text-white"><ShieldCheck className="w-4 h-4 text-green-500" /> {t(country.id, 'preview.included')}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3"><Check className="w-4 h-4 text-amber-500 mt-0.5" /> <span>{t(country.id, 'preview.inc1')}</span></li>
              <li className="flex items-start gap-3"><Check className="w-4 h-4 text-amber-500 mt-0.5" /> <span>{t(country.id, 'preview.inc2')}</span></li>
              <li className="flex items-start gap-3"><Check className="w-4 h-4 text-amber-500 mt-0.5" /> <span>{t(country.id, 'preview.inc3')}</span></li>
              <li className="flex items-start gap-3"><Check className="w-4 h-4 text-amber-500 mt-0.5" /> <span>{t(country.id, 'preview.inc4')}</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Paper Document */}
      <div className="lg:w-2/3 order-1 lg:order-2 select-none" onContextMenu={(e) => e.preventDefault()} onCopy={(e) => e.preventDefault()}>
        <LeaderboardAd className="mb-6" />

        <div className="relative bg-white text-slate-900 p-12 md:p-16 rounded shadow-2xl font-legal paper-shadow overflow-hidden mb-6">
          {/* Content */}
          <div className="relative z-10 prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-justify prose-li:text-justify prose-strong:text-slate-900">
            <ReactMarkdown>
              {content}
            </ReactMarkdown>
          </div>
        </div>
        
        <LazyAdUnit slot="NATIVE_AD_SLOT_ID" format="fluid" responsive={true} />
      </div>
    </div>
  );
};

const SuccessView = ({ onReset, content, template, country }: { onReset: () => void, content: string, template: DocumentTemplate, country: CountryConfig }) => {
  const handleDownload = async () => {
    try {
      const doc = new jsPDF();
      
      // Set font
      doc.setFont("helvetica");
      
      // Add Title
      doc.setFontSize(20);
      doc.text(template.title, 20, 20);
      
      // Add Content
      doc.setFontSize(12);
      // Clean up markdown symbols for the PDF (basic cleanup)
      const cleanContent = content
        .replace(/\*\*/g, '') // Bold
        .replace(/\*/g, '')   // Italic
        .replace(/#{1,6}\s/g, '') // Headers
        .replace(/`/g, '');   // Code blocks

      const splitText = doc.splitTextToSize(cleanContent, 170);
      
      let y = 40;
      const pageHeight = doc.internal.pageSize.height;
      const pageWidth = doc.internal.pageSize.width;
      
      splitText.forEach((line: string) => {
        if (y > pageHeight - 30) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, 20, y);
        y += 7;
      });

      // Prepare Logo for Watermark
      const logoDataUrl = await new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Could not get canvas context'));
            return;
          }
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = (e) => reject(e);
        img.src = '/assets/bild2.png';
      });

      // Add Watermark to all pages
      const pageCount = doc.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        
        // Logo
        const logoSize = 12;
        const margin = 15;
        const x = pageWidth - margin - logoSize;
        const y = pageHeight - margin - logoSize - 2; // Position above text
        
        doc.addImage(logoDataUrl, 'PNG', x, y, logoSize, logoSize);
        
        // Text
        doc.setFontSize(9);
        doc.setTextColor(150); // Grey color
        doc.text("www.veridoca.com", pageWidth - margin, pageHeight - margin, { align: 'right' });
        doc.setTextColor(0); // Reset to black
      }
      
      doc.save(`${template.title.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error("PDF Generation failed:", error);
      alert("Kunde inte skapa PDF. Försök igen.");
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8 border border-green-500/20">
        <CheckCircle className="w-12 h-12 text-green-500" />
      </div>
      <h1 className="text-4xl font-serif font-bold mb-4 text-white">{t(country.id, 'success.title')}</h1>
      <p className="text-slate-400 max-w-lg mb-10 text-lg">
        {t(country.id, 'success.desc')}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Button variant="primary" onClick={handleDownload}>
          <Download className="w-4 h-4" /> {t(country.id, 'success.download')}
        </Button>
        <Button variant="secondary" onClick={() => alert("Simulerar att skicka e-post...")}>
          <Mail className="w-4 h-4" /> {t(country.id, 'success.receipt')}
        </Button>
      </div>
      
      <button onClick={onReset} className="mt-16 text-slate-500 hover:text-white transition-colors flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" /> {t(country.id, 'success.back')}
      </button>
    </div>
  );
};

const Footer = ({ country }: { country: CountryConfig }) => {
  const templates = getLocalizedTemplates(country.id);
  const popularTemplates = templates.filter(t => t.popular).slice(0, 4);

  return (
    <footer className="bg-[#050911] border-t border-brand-border py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 pr-8">
          <div className="bg-brand-card border border-brand-border/50 rounded-2xl p-6 flex flex-col items-center text-center gap-4 max-w-xs">
            <img src="/assets/support-qr.png.png" alt="Buy me a coffee QR" className="w-32 h-32 rounded-xl bg-white p-2 select-none mx-auto" />
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              {t(country.id, 'footer.supportText')}
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs text-amber-500">{t(country.id, 'footer.popular')}</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            {popularTemplates.map(t => (
              <li key={t.id}><Link to="/" className="hover:text-white transition-colors">{t.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs text-amber-500">{t(country.id, 'footer.support')}</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li><Link to="/om-oss" className="hover:text-white transition-colors">{t(country.id, 'footer.faq')}</Link></li>
            <li><Link to="/kontakt" className="hover:text-white transition-colors">{t(country.id, 'footer.contact')}</Link></li>
            <li><Link to="/anvandarvillkor" className="hover:text-white transition-colors">{t(country.id, 'footer.terms')}</Link></li>
            <li><Link to="/integritetspolicy" className="hover:text-white transition-colors">{t(country.id, 'footer.privacy')}</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-brand-border/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
        <p>{t(country.id, 'footer.rights')}</p>
        <div className="flex gap-4 mt-4 md:mt-0 items-center">
           <Lock className="w-4 h-4" /> <span>{t(country.id, 'footer.secure')}</span>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

function HomeFlow({ country }: { country: CountryConfig }) {
  const [view, setView] = useState<'home' | 'form' | 'preview' | 'success'>('home');
  const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate | null>(null);
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    setView('home');
    setSelectedTemplate(null);
    
    // Check if we need to scroll immediately after page load
    const params = new URLSearchParams(window.location.search);
    const scrollTarget = params.get('scroll');
    if (scrollTarget) {
      setTimeout(() => {
        document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth' });
        // Clean up URL without reloading
        window.history.replaceState({}, '', '/');
      }, 500);
    }
  }, [country.id]);

  const handleDownloadReady = () => setView('success');

  useEffect(() => { window.scrollTo(0, 0); }, [view]);

  useEffect(() => {
    const handleNavHome = () => resetFlow();
    const handleNavTemplates = () => {
      resetFlow();
      setTimeout(() => document.getElementById('mallar')?.scrollIntoView({ behavior: 'smooth' }), 100);
    };
    const handleNavHowItWorks = () => {
      resetFlow();
      setTimeout(() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }), 100);
    };

    window.addEventListener('nav-home', handleNavHome);
    window.addEventListener('nav-templates', handleNavTemplates);
    window.addEventListener('nav-how-it-works', handleNavHowItWorks);

    return () => {
      window.removeEventListener('nav-home', handleNavHome);
      window.removeEventListener('nav-templates', handleNavTemplates);
      window.removeEventListener('nav-how-it-works', handleNavHowItWorks);
    }
  }, []);

  const handleSelectTemplate = (template: DocumentTemplate) => {
    setSelectedTemplate(template);
    setView('form');
  };

  const handleFormSubmit = async (data: UserInputData) => {
    if (!selectedTemplate) return;
    setIsGenerating(true);
    try {
      const content = await generateLegalDocument(selectedTemplate, data, country);
      setGeneratedContent(content);
      setView('preview');
    } catch (error) {
      alert("Något gick fel vid genereringen. Kontrollera din internetanslutning eller försök igen senare.");
    } finally {
      setIsGenerating(false);
    }
  };

  const resetFlow = () => {
    setSelectedTemplate(null);
    setGeneratedContent('');
    setView('home');
  };

  return (
    <>
      {view === 'home' && (
        <>
          <Hero 
            onBrowse={() => {
              document.getElementById('mallar')?.scrollIntoView({ behavior: 'smooth' });
            }} 
            country={country}
          />
          <HowItWorks country={country} />
          <LeaderboardAd className="my-8" />
          <TemplateList onSelect={handleSelectTemplate} country={country} />
        </>
      )}

      {view === 'form' && selectedTemplate && (
        <InputForm 
          template={selectedTemplate} 
          onBack={resetFlow} 
          onSubmit={handleFormSubmit}
          isGenerating={isGenerating}
          country={country}
        />
      )}

      {view === 'preview' && selectedTemplate && (
        <DocumentPreview 
          content={generatedContent} 
          template={selectedTemplate}
          onEdit={() => setView('form')}
          onComplete={handleDownloadReady}
          country={country}
        />
      )}

      {view === 'success' && selectedTemplate && (
        <SuccessView 
          onReset={resetFlow} 
          content={generatedContent}
          template={selectedTemplate}
          country={country}
        />
      )}
    </>
  );
}

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState<CountryConfig>(COUNTRIES[0]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-100 bg-brand-dark">
      <AutoAds />
      <CookieConsent country={selectedCountry} />
      <Header 
        onHome={() => {
          if (window.location.pathname !== '/') {
            window.location.href = '/';
          } else {
            window.dispatchEvent(new CustomEvent('nav-home'));
          }
        }} 
        country={selectedCountry}
        onCountryChange={setSelectedCountry}
      />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeFlow country={selectedCountry} />} />
          <Route path="/integritetspolicy" element={<PrivacyPolicyPage country={selectedCountry} />} />
          <Route path="/om-oss" element={<AboutPage country={selectedCountry} />} />
          <Route path="/kontakt" element={<ContactPage country={selectedCountry} />} />
          <Route path="/anvandarvillkor" element={<TermsPage country={selectedCountry} />} />
          <Route path="/adsense-checklist" element={<AdSenseChecklistPage />} />
        </Routes>
      </main>

      <Footer country={selectedCountry} />
      <MobileAnchorAd />
    </div>
  );
}