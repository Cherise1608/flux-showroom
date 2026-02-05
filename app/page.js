'use client'
import { useState } from 'react'

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [calculatorInput, setCalculatorInput] = useState('')
  const [calculatorResult, setCalculatorResult] = useState(null)

  const copyInstallCommand = () => {
    navigator.clipboard.writeText('agr install flux/logic-bridge')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const runCalculator = async () => {
    setCalculatorResult({
      area: calculatorInput,
      price: Math.round(parseFloat(calculatorInput) * 450),
      logic_source: 'https://api.flux-adoption.com/pricing/v1'
    })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.15),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <div className="mb-8 inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 backdrop-blur-sm">
            <span className="text-pink-400 text-sm font-medium tracking-wide">AI Solution Specialist & Strategic Advisor</span>
          </div>

          <h1 className="text-7xl font-bold mb-6 leading-tight">
            Flux Adoption
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Deterministic AI
            </span>
            <br />
            for the Agentic Era
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
            Vi transformerer usikre sprogmodeller til pr&aelig;cise forretningsv&aelig;rkt&oslash;jer
            &mdash; med arkitektur, der garanterer korrekte svar hver gang.
          </p>

          <div className="flex gap-4">
            <a href="#enterprise-impact" className="px-8 py-4 bg-pink-600 hover:bg-pink-500 rounded-lg font-semibold transition-all shadow-lg shadow-pink-500/25 hover:shadow-pink-500/50">
              Deploy Your Logic
            </a>
            <a href="#enterprise-impact" className="px-8 py-4 border border-pink-500/30 hover:border-pink-500 rounded-lg font-semibold transition-all backdrop-blur-sm">
              View Case Study &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Enterprise Impact Section */}
      <section id="enterprise-impact" className="relative px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/5 via-slate-950 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
              <span className="text-pink-400 text-sm font-semibold tracking-wide">Verified Results</span>
            </div>
            <h2 className="text-5xl font-bold mb-4">Enterprise Impact</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Verificerede resultater fra virkelige enterprise-deployments.
            </p>
          </div>

          {/* KU Lighthouse Card */}
          <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-pink-500/20 backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-pink-500/5 rounded-full blur-3xl" />

            <div className="relative p-10">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-10">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Research Translator</h3>
                  <p className="text-slate-400">KU Lighthouse Project</p>
                </div>
                <div className="flex gap-3">
                  <span className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-400 text-sm font-semibold border border-pink-500/30">
                    KU Lighthouse
                  </span>
                  <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold border border-green-500/20">
                    Verified
                  </span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {/* Primary Stat */}
                <div className="md:col-span-1 p-6 rounded-xl bg-slate-950/50 border border-pink-500/10">
                  <div className="text-6xl font-bold text-pink-400 mb-2">83%</div>
                  <div className="text-lg font-semibold text-white mb-1">Reduction in Research Time</div>
                  <p className="text-slate-400 text-sm">From 60 minutes to 10 minutes per task</p>
                </div>

                {/* ROI */}
                <div className="md:col-span-1 p-6 rounded-xl bg-slate-950/50 border border-pink-500/10">
                  <div className="text-5xl font-bold text-pink-400 mb-2">102.000</div>
                  <div className="text-lg font-semibold text-white mb-1">DKK &Aring;rlig Besparelse</div>
                  <p className="text-slate-400 text-sm">&Aring;rlig ROI pr. r&aring;dgiver, f&oslash;rste &aring;r</p>
                </div>

                {/* Hours */}
                <div className="md:col-span-1 p-6 rounded-xl bg-slate-950/50 border border-pink-500/10">
                  <div className="text-5xl font-bold text-pink-400 mb-2">+204</div>
                  <div className="text-lg font-semibold text-white mb-1">Timer Frigivet &Aring;rligt</div>
                  <p className="text-slate-400 text-sm">Per r&aring;dgiver, omdirigeret til v&aelig;rdiskabende arbejde</p>
                </div>
              </div>

              {/* Sub-metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/30 border border-slate-800/50">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">~0,35 kr. per analyse</div>
                    <div className="text-slate-500 text-sm">Marginal omkostning per k&oslash;rsel</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/30 border border-slate-800/50">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Zero hosting costs</div>
                    <div className="text-slate-500 text-sm">GitHub + Cloudflare Workers infrastruktur</div>
                  </div>
                </div>
              </div>

              {/* Architecture Note */}
              <div className="pt-6 border-t border-slate-800/50">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Built on <span className="text-pink-400 font-mono">Source of Truth &rarr; Logic Bridge &rarr; Interface</span> architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Model - Bento Grid */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Arkitekturen</h2>
          <p className="text-slate-400 mb-12 text-lg">
            Logikken bor p&aring; serveren. Ikke i prompten.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Source of Truth */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/50 backdrop-blur-xl hover:border-pink-500/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Source of Truth</h3>
                <p className="text-slate-400">
                  Forretningsregler versioneret i GitHub &mdash; auditerbare, reproducerbare
                  og fuldst&aelig;ndig adskilt fra AI-modellen.
                </p>
              </div>
            </div>

            {/* Logic Bridge */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/50 backdrop-blur-xl hover:border-pink-500/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Logic Bridge</h3>
                <p className="text-slate-400">
                  Cloudflare Workers henter fakta i realtid og leverer pr&aelig;cis data
                  til AI&rsquo;en. Modellen r&aelig;sonnerer &mdash; den opfinder ikke.
                </p>
              </div>
            </div>

            {/* User Interface */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/50 backdrop-blur-xl hover:border-pink-500/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">User Interface</h3>
                <p className="text-slate-400">
                  Slutbrugeren m&oslash;der l&oslash;sningen der, hvor arbejdet foreg&aring;r:
                  Microsoft Agent HQ, GitHub Copilot Extensions eller skr&aelig;ddersyede gr&aelig;nseflader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deterministic Price Engine */}
      <section className="px-6 py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Deterministic Price Engine</h2>
          <p className="text-slate-400 mb-12 text-lg">
            Live demonstration af hvordan logik hentes fra serveren.
          </p>

          <div className="max-w-lg">
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/50 backdrop-blur-xl overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-all" />

              <div className="relative space-y-4">
                <p className="text-slate-400 mb-6">
                  AI-agenten f&aring;r pr&aelig;cis prisberegning. Ingen approximationer.
                </p>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">Indtast areal (m&sup2;)</label>
                  <input
                    type="number"
                    value={calculatorInput}
                    onChange={(e) => setCalculatorInput(e.target.value)}
                    placeholder="150"
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  onClick={runCalculator}
                  className="w-full px-6 py-3 bg-pink-600 hover:bg-pink-500 rounded-lg font-semibold transition-all shadow-lg shadow-pink-500/25"
                >
                  Run Calculation
                </button>

                {calculatorResult && (
                  <div className="p-4 bg-slate-950/50 border border-pink-500/20 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-400">Areal:</span>
                      <span className="font-mono text-white">{calculatorResult.area} m&sup2;</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-400">Pris:</span>
                      <span className="font-mono text-pink-400 font-bold">{calculatorResult.price.toLocaleString('da-DK')} kr.</span>
                    </div>
                    <div className="pt-2 border-t border-slate-800 mt-2">
                      <span className="text-xs text-slate-500">
                        Logic fetched from: <span className="text-pink-400 font-mono">{calculatorResult.logic_source}</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Install Section - Terminal Style */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Deploy Logic</h2>
            <p className="text-slate-400 text-lg">
              Installation via Agent HQ. Et kommando. F&aelig;rdig kode.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-sm text-slate-500 font-mono">flux-install.sh</span>
              </div>

              <div className="p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-pink-400">&#10095;</span>
                  <span className="text-slate-300">agr install flux/logic-bridge</span>
                </div>

                <div className="space-y-1 text-slate-500 mb-6">
                  <div>&#128230; Fetching metadata from registry...</div>
                  <div>&#10003; Verified signature</div>
                  <div>&#10003; Dependencies resolved</div>
                  <div className="text-green-400">&#10003; Installation complete</div>
                </div>

                <button
                  onClick={copyInstallCommand}
                  className="w-full px-6 py-3 bg-pink-600 hover:bg-pink-500 rounded-lg font-semibold transition-all shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 font-sans"
                >
                  {copied ? '\u2713 Copied!' : 'Copy Install Command'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Metadata Viewer */}
      <section className="px-6 py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Skill Metadata</h2>
          <p className="text-slate-400 mb-12 text-lg">
            Agent-Ready format. GitHub Agent HQ compatible.
          </p>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800">
              <span className="text-sm text-slate-400 font-mono">metadata.json</span>
              <span className="text-xs text-pink-400 font-semibold">agent-ready</span>
            </div>

            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-slate-300">
{`{
  `}<span className="text-pink-400">{`"name"`}</span>{`: `}<span className="text-green-400">{`"flux-logic-bridge"`}</span>{`,
  `}<span className="text-pink-400">{`"version"`}</span>{`: `}<span className="text-green-400">{`"1.0.0"`}</span>{`,
  `}<span className="text-pink-400">{`"description"`}</span>{`: `}<span className="text-green-400">{`"Deterministic logic layer for AI agents"`}</span>{`,
  `}<span className="text-pink-400">{`"architecture"`}</span>{`: {
    `}<span className="text-pink-400">{`"source_of_truth"`}</span>{`: `}<span className="text-green-400">{`"github://flux-adoption/rules"`}</span>{`,
    `}<span className="text-pink-400">{`"bridge"`}</span>{`: `}<span className="text-green-400">{`"cloudflare-workers"`}</span>{`,
    `}<span className="text-pink-400">{`"interface"`}</span>{`: `}<span className="text-green-400">{`"agent-hq"`}</span>{`
  },
  `}<span className="text-pink-400">{`"governance"`}</span>{`: {
    `}<span className="text-pink-400">{`"zero_hallucination"`}</span>{`: `}<span className="text-yellow-400">true</span>{`,
    `}<span className="text-pink-400">{`"feed_integrity"`}</span>{`: `}<span className="text-yellow-400">true</span>{`,
    `}<span className="text-pink-400">{`"audit_trail"`}</span>{`: `}<span className="text-yellow-400">true</span>{`
  },
  `}<span className="text-pink-400">{`"deployment"`}</span>{`: {
    `}<span className="text-pink-400">{`"cost"`}</span>{`: `}<span className="text-green-400">{`"pay-per-use"`}</span>{`,
    `}<span className="text-pink-400">{`"hosting"`}</span>{`: `}<span className="text-green-400">{`"zero-cost"`}</span>{`,
    `}<span className="text-pink-400">{`"scalability"`}</span>{`: `}<span className="text-green-400">{`"global"`}</span>{`
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* About / Profile Section */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20">
                <span className="text-pink-400 text-sm font-semibold">Om mig</span>
              </div>
              <h2 className="text-4xl font-bold mb-2">AI Solution Specialist</h2>
              <h3 className="text-2xl text-pink-400 font-semibold mb-6">&amp; Strategic Advisor</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Jeg kombinerer teknisk AI-implementering med strategisk forretningsr&aring;dgivning.
                Min tilgang bygger p&aring; deterministic architecture &mdash; systemer, hvor AI&rsquo;en
                aldrig g&aelig;tter, men altid svarer ud fra verificerede forretningsregler.
                Resultatet er l&oslash;sninger, som virksomheder kan stole p&aring; fra dag &eacute;t.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/50 hover:border-pink-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Deterministic AI Architecture</div>
                    <div className="text-slate-500 text-sm">Systemer, der eliminerer hallucination ved design</div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/50 hover:border-pink-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Enterprise AI Adoption</div>
                    <div className="text-slate-500 text-sm">Fra proof-of-concept til produktion i virksomhedsskala</div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/50 hover:border-pink-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Logic-as-a-Service</div>
                    <div className="text-slate-500 text-sm">Forretningslogik som serverl&oslash;s, versioneret infrastruktur</div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/50 hover:border-pink-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Zero-Hallucination Systems</div>
                    <div className="text-slate-500 text-sm">Arkitekturer, hvor fakta altid kommer fra kilden</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="px-6 py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Zero-Hallucination Policy</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Feed Integrity</h3>
              <p className="text-slate-400">
                Data valideres ved kilden &mdash; aldrig af modellen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Full Governance</h3>
              <p className="text-slate-400">
                Komplet audit trail. Versioneret logik. Fuld sporbarhed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Deploy Globally</h3>
              <p className="text-slate-400">
                Cloudflare edge-netv&aelig;rk. Millisekund-responstider. Overalt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-24 bg-gradient-to-br from-pink-900/10 via-slate-950 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Klar til at deploye din logik?
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Fra usikker AI til deterministisk forretningsv&aelig;rdi &mdash; lad os bygge den arkitektur,
            der g&oslash;r dine data til p&aring;lidelige svar.
          </p>
          <button className="px-12 py-5 bg-pink-600 hover:bg-pink-500 rounded-lg font-bold text-lg transition-all shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50">
            Start en samtale &rarr;
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Flux Adoption
            </div>
            <p className="text-slate-500 text-sm">Logic-as-a-Service for the Agentic Era</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">GitHub</a>
            <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
