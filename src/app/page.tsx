import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, FileText, CheckCircle, ArrowRight, Search, MapPin, BookOpen, Building2, Users, Home, User, Heart, DollarSign } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import { categories } from '@/data/categories'
import { getPopularTemplates } from '@/data/templates'
import { getFeaturedArticles } from '@/data/articles'

export const metadata: Metadata = {
  title: 'Free Legal Document Templates — Download Word & PDF | Veridoca',
  description: 'Download 500+ free legal document templates for the US. Business contracts, leases, wills, employment agreements & more. State-specific guidance, cites primary legal sources. No registration required.',
}

const popularTemplates = getPopularTemplates(8)
const featuredArticles = getFeaturedArticles(3)

const homepageFaqs = [
  { question: 'Are these legal document templates really free?', answer: 'Yes, completely free. All templates on Veridoca can be downloaded as PDF or Word (.docx) with no registration, no email required, and no hidden fees. We are supported by advertising revenue, which keeps all content free for users.' },
  { question: 'Who writes the content on Veridoca?', answer: 'Content is written by the Veridoca editorial team and researched from primary sources — state statutes, federal law, and court decisions. We cite our sources on every page. For advice specific to your situation, consult a licensed attorney in your state.' },
  { question: 'Will these templates work in my state?', answer: 'Our templates are designed for general US use and include state-specific guidance sections. We recommend reviewing the state-specific requirements section on any template page and consulting a local attorney for high-stakes transactions.' },
  { question: 'Do I need to register to download templates?', answer: 'No. You can download any template directly from the page with a single click. No account, no email address, and no personal information is required.' },
  { question: 'Are Word (.docx) templates included?', answer: 'Yes. Every template is available in both PDF format (for printing and signing) and Word (.docx) format (for editing and customizing to your specific situation).' },
  { question: 'When should I hire a lawyer instead of using a template?', answer: 'Templates work well for routine, straightforward situations where parties agree on terms. We recommend consulting a licensed attorney for complex estates, contested divorces or custody, business acquisitions, and any situation involving potential litigation.' },
]

const steps = [
  { number: '01', title: 'Browse or Search', description: 'Find your document by category, keyword, or state. 500+ templates organized across 7 legal categories.' },
  { number: '02', title: 'Read the Guide', description: 'Our plain-English guide explains what the document is, when to use it, and your state\'s specific requirements. Cites primary legal sources.' },
  { number: '03', title: 'Download Free', description: 'Instantly download PDF and Word versions — no registration, no email, no payment. Ready to customize and sign.' },
]

const topStates = [
  { name: 'California', slug: 'california' },
  { name: 'Texas', slug: 'texas' },
  { name: 'Florida', slug: 'florida' },
  { name: 'New York', slug: 'new-york' },
  { name: 'Illinois', slug: 'illinois' },
  { name: 'Pennsylvania', slug: 'pennsylvania' },
  { name: 'Georgia', slug: 'georgia' },
  { name: 'Ohio', slug: 'ohio' },
  { name: 'Michigan', slug: 'michigan' },
  { name: 'Washington', slug: 'washington' },
  { name: 'Colorado', slug: 'colorado' },
  { name: 'Arizona', slug: 'arizona' },
]

const categoryIconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
  User: <User className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  FileCheck: <FileText className="w-5 h-5" />,
  DollarSign: <DollarSign className="w-5 h-5" />,
}

export default function HomePage() {
  return (
    <div className="bg-[#07090f]">

      {/* ─── HERO ─── */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden py-24">
        {/* Glow orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[900px] h-[700px] rounded-full bg-emerald-500/[0.12] blur-[130px]" />
          <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-blue-600/[0.08] blur-[100px]" />
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-violet-600/[0.07] blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.10] text-slate-300 text-sm mb-8 backdrop-blur-sm">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            Primary Sources Cited · Updated 2026 · All 50 States
          </div>

          {/* H1 */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-white mb-6">
            Download Free<br />
            <span className="text-emerald-400">Legal Templates</span>
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            500+ free legal forms for every US state. Business contracts, leases, wills — no account, no email, no cost.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative flex items-center bg-white/[0.06] border border-white/[0.12] rounded-2xl overflow-hidden backdrop-blur-sm hover:border-white/20 transition-colors">
              <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="search"
                placeholder="Search templates (e.g., lease, NDA, will...)"
                className="flex-1 pl-12 pr-4 py-4 bg-transparent text-white placeholder-slate-500 text-sm outline-none"
              />
              <Link
                href="/templates"
                className="m-1.5 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm rounded-xl transition-colors"
              >
                Search
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {['Lease Agreement', 'NDA', 'Last Will & Testament', 'Power of Attorney', 'Offer Letter'].map((term) => (
              <Link
                key={term}
                href={`/templates`}
                className="px-3.5 py-1.5 bg-white/[0.05] hover:bg-white/[0.10] text-slate-400 hover:text-white rounded-full border border-white/[0.08] hover:border-white/[0.15] transition-all"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <div className="border-t border-b border-white/[0.06] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Shield, text: 'Primary Sources Cited' },
              { icon: FileText, text: '500+ Free Templates' },
              { icon: CheckCircle, text: 'All 50 States' },
              { icon: BookOpen, text: 'No Registration Required' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                <Icon className="w-4 h-4 text-emerald-400" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CATEGORIES ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">Browse by Area</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">7 Legal Categories</h2>
            <p className="text-slate-400 text-lg">Every area of US law — from business formation to estate planning</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/templates/${cat.slug}`}
                className="group relative flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-emerald-500/30 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                  {categoryIconMap[cat.icon] ?? <FileText className="w-5 h-5" />}
                </div>
                <div>
                  <p className="font-bold text-white text-sm mb-0.5">{cat.name}</p>
                  <p className="text-slate-500 text-xs">{cat.templateCount} templates</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{cat.description}</p>
                <span className="text-emerald-400 text-xs font-medium mt-auto flex items-center gap-1 group-hover:gap-2 transition-all">
                  Browse <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POPULAR TEMPLATES ─── */}
      <section className="py-20 sm:py-28 bg-white/[0.02] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">Most Used</p>
              <h2 className="text-3xl sm:text-5xl font-black text-white">Popular Templates</h2>
              <p className="text-slate-400 mt-2 text-lg">Most-used legal documents across all 50 states</p>
            </div>
            <Link href="/templates" className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
              View all 500+ <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {popularTemplates.map((template) => (
              <Link
                key={template.slug}
                href={`/templates/${template.category}/${template.slug}`}
                className="group flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 capitalize">
                    {template.category.replace('-', ' ')}
                  </span>
                </div>
                <p className="font-bold text-white text-sm leading-snug group-hover:text-emerald-300 transition-colors">{template.name}</p>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{template.intro?.slice(0, 90)}...</p>
                <div className="flex items-center justify-end mt-auto pt-2 border-t border-white/[0.06]">
                  <span className="text-xs text-emerald-400 font-medium flex items-center gap-1 transition-all">
                    Free Download <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-20 sm:py-28 border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">Simple Process</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">How It Works</h2>
            <p className="text-slate-400 text-lg">Get your legal document in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+2.5rem)] right-0 h-px bg-gradient-to-r from-white/10 to-transparent" />
                )}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-400 font-black text-xl mx-auto mb-5 bg-emerald-500/10 border border-emerald-500/20">
                  {step.number}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BY STATE ─── */}
      <section className="py-20 sm:py-24 bg-white/[0.02] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">State-Specific</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">Templates by State</h2>
              <p className="text-slate-400">State-specific requirements and customized guidance</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {topStates.map((state) => (
              <Link
                key={state.slug}
                href={`/states/${state.slug}`}
                className="flex items-center justify-center p-3 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-emerald-500/30 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition-all text-center"
              >
                {state.name}
              </Link>
            ))}
          </div>
          <div className="mt-5">
            <Link href="/states" className="text-sm font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors">
              View all 50 states + D.C. <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ARTICLES ─── */}
      <section className="py-20 sm:py-28 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Legal Knowledge</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-2">Legal Guides</h2>
              <p className="text-slate-400 text-lg">Plain-English guides to your legal rights</p>
            </div>
            <Link href="/blog" className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
              All guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/[0.15] transition-all duration-200 overflow-hidden"
              >
                <div className="h-1 bg-gradient-to-r from-emerald-500 to-blue-500" />
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                    {article.category.replace(/-/g, ' ')}
                  </span>
                  <h3 className="font-bold text-white text-sm leading-snug group-hover:text-emerald-300 transition-colors">{article.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 flex-1">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-white/[0.06]">
                    <span>{article.readTime} min read</span>
                    <span className="text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST PILLARS ─── */}
      <section className="py-20 sm:py-24 bg-white/[0.02] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">Why Veridoca</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">Built on Trust</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">We exist to make quality legal information accessible to every American.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Shield, title: 'Editorial Standards', desc: 'Written by the Veridoca editorial team. Every legal claim cites a primary source: state statutes, federal law, or court decisions.' },
              { icon: FileText, title: 'Cited to Law', desc: 'We link to primary sources — statutes, regulations, and official court decisions — so you can verify every claim yourself.' },
              { icon: CheckCircle, title: 'Regularly Updated', desc: 'Pages are reviewed and updated to reflect changes in state and federal law. Each page shows its last-updated date.' },
              { icon: BookOpen, title: '100% Free', desc: 'No subscription, no upsell, no email. Supported by advertising so legal resources stay free.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1.5">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 sm:py-28 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">Common Questions</h2>
            <p className="text-slate-400">Everything you need to know about using Veridoca</p>
          </div>
          <FAQAccordion faqs={homepageFaqs} />
          <div className="text-center mt-10">
            <Link href="/faq" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors">
              View all FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-24 sm:py-32 border-t border-white/[0.05] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-emerald-500/[0.14] blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">Get Started</p>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-5 leading-tight">
            Ready for your free<br />legal template?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            500+ free legal templates. Primary sources cited. No account. No email. Free forever.
          </p>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-slate-900 font-bold rounded-full text-base hover:bg-slate-100 transition-colors shadow-2xl shadow-black/30"
          >
            Browse All Templates <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  )
}
