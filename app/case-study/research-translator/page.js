/**
 * © 2026 Flux Adoption. All rights reserved.
 * Proprietary and confidential.
 */
'use client'

import Link from 'next/link'

const metrics = [
  { value: '83 %', label: 'Tidsbesparelse', detail: 'Fra 60 min til 10 min per briefing.' },
  { value: '+204', label: 'Timer frigjort', detail: 'Per rådgiver, per år.' },
  { value: '0 kr.', label: 'Driftsomkostninger', detail: 'Open source-arkitektur (GitHub + Cloudflare).' },
  { value: '+1,25', label: 'Årsværk vundet', detail: 'Ved skalering til 10 rådgivere.' },
]

const tabs = [
  { num: '01', title: 'Forskerprofil', desc: 'Overblik over baggrund og forskningsområde.' },
  { num: '02', title: 'Publikationer', desc: 'Relevante artikler med direkte kildelinks.' },
  { num: '03', title: 'Forskningsoversættelse', desc: 'Akademisk sprog oversat til forretningskontekst.' },
  { num: '04', title: 'Samarbejdsmuligheder', desc: 'Analyse af synergier med Lighthouse.' },
  { num: '05', title: 'Risikovurdering', desc: 'Vurdering af relevans og kommercielt potentiale.' },
  { num: '06', title: 'Mødebriefing', desc: 'Samlet syntese klar til brug.' },
]

const governance = [
  { title: 'Kun offentlige data', desc: 'Al information hentes udelukkende fra KU Pure — universitetets åbne forskningsdatabase.' },
  { title: 'Kilde-verificering', desc: 'Alle resultater leveres med direkte kildelinks. Ingen hallucinationer.' },
  { title: 'Human in the loop', desc: 'AI\'en leverer grundlaget. Rådgiveren kvalificerer resultatet.' },
]

const techStack = [
  { layer: 'Intelligens', tech: 'Claude Sonnet' },
  { layer: 'Orkestrering', tech: 'Claude Code + Gemini' },
  { layer: 'Infrastruktur', tech: 'GitHub + Cloudflare (0 kr. i drift)' },
]

export default function ResearchTranslatorCaseStudy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">

      {/* Navigation */}
      <nav className="px-6 py-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">Flux Adoption</Link>
        </div>
      </nav>

      {/* Header */}
      <header className="px-6 pt-16 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/#enterprise-impact" className="hover:text-pink-400 transition-colors">Projekter</Link>
            <span>→</span>
            <span className="text-slate-300">Research Translator</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Research Translator
          </h1>
          <p className="text-xl text-slate-400 mb-6 max-w-2xl">
            AI-agent til akademisk mødeforberedelse. Bygget til KU Lighthouse.
          </p>
          <span className="inline-block px-4 py-2 text-sm font-medium text-pink-400 bg-pink-500/10 border border-pink-500/20 rounded-full">
            Overdraget til KU Lighthouse · Internt enterprise værktøj
          </span>
        </div>
      </header>

      {/* Intro */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12">
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
              Rådgivere i KU Lighthouse brugte 60 minutter på at forberede hvert forskermøde. Manuelt.
              Research Translator reducerede den proces til 10 minutter. Ikke ved at gøre arbejdet hurtigere.{' '}
              <span className="text-white font-semibold">Ved at redesigne det.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-3xl lg:text-4xl font-bold text-pink-500 mb-2">{m.value}</p>
                <p className="text-sm font-semibold text-white mb-1">{m.label}</p>
                <p className="text-xs text-slate-400">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problemet & Løsningen */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problemet */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">Problemet</p>
            <h3 className="text-xl font-bold text-white mb-4">Manuel, inkonsistent proces</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5">✕</span>
                <span>60 minutters manuelt forarbejde per forskermøde</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5">✕</span>
                <span>Inkonsistent kvalitet afhængig af rådgiverens erfaring</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5">✕</span>
                <span>Ingen struktureret metode til at vurdere forskningspotentiale</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-0.5">✕</span>
                <span>Fragmenteret informationssøgning på tværs af platforme</span>
              </li>
            </ul>
          </div>

          {/* Løsningen */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4">Løsningen</p>
            <h3 className="text-xl font-bold text-white mb-4">AI-orkestreret webapplikation</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-pink-500 mt-0.5">✓</span>
                <span>Automatiseret informationssøgning via KU Pure i realtid</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 mt-0.5">✓</span>
                <span>Struktureret output i 6 specialiserede faner</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 mt-0.5">✓</span>
                <span>Ensartet kvalitet uanset rådgiverens erfaringsniveau</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-500 mt-0.5">✓</span>
                <span>Komplet briefing klar til print eller deling på 10 minutter</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* De 6 faner */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4">Applikationens struktur</p>
          <h2 className="text-3xl font-bold text-white mb-8">6 specialiserede faner</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tabs.map((tab) => (
              <div key={tab.num} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-pink-500/30 transition-colors">
                <span className="text-xs font-bold text-pink-500 mb-3 block">{tab.num}</span>
                <h3 className="text-lg font-bold text-white mb-2">{tab.title}</h3>
                <p className="text-sm text-slate-400">{tab.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4">Governance</p>
          <h2 className="text-3xl font-bold text-white mb-8">Tillid gennem transparens</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {governance.map((g, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4">
                  <span className="text-pink-500 text-lg font-bold">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{g.title}</h3>
                <p className="text-sm text-slate-400">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4">Teknisk arkitektur</p>
          <h2 className="text-3xl font-bold text-white mb-8">Tech Stack</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            {techStack.map((row, i) => (
              <div key={i} className={`flex items-center justify-between px-8 py-5 ${i < techStack.length - 1 ? 'border-b border-white/5' : ''}`}>
                <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{row.layer}</span>
                <span className="text-sm text-white font-medium">{row.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status & Overdragelse */}
      <section className="px-6 py-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 text-center">
            <div className="inline-block px-3 py-1 text-xs font-semibold text-pink-400 bg-pink-500/10 border border-pink-500/20 rounded-full mb-6">
              Status: Overdraget
            </div>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Research Translator er overdraget til KU Lighthouse. API-adgang er lukket og kildekoden
              forbliver privat som del af overdragelsesaftalen. Arkitekturen er dokumenteret herover.
            </p>
            <Link href="/#kontakt" className="inline-block px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-semibold transition-colors">
              Har du et lignende projekt? →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="text-lg font-bold text-white">Flux Adoption</Link>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/jmartaeng/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-pink-400 transition-colors">LinkedIn</a>
            <a href="https://github.com/Cherise1608" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-pink-400 transition-colors">GitHub</a>
            <a href="mailto:jescacherisevia@gmail.com" className="text-sm text-slate-500 hover:text-pink-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
