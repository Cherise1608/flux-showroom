'use client'
import { useState } from 'react'

export default function FluxShowroom() {
  const [copied, setCopied] = useState(false)
  const [calculatorInput, setCalculatorInput] = useState('')
  const [calculatorResult, setCalculatorResult] = useState(null)

  const copyInstallCommand = () => {
    navigator.clipboard.writeText('agr install flux/logic-bridge')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const runCalculator = async () => {
    // Simulated API call - replace with your actual endpoint
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
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-slate-950 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(219,39,119,0.15),transparent_50%)]" />
        
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-8 inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 backdrop-blur-sm">
            <span className="text-pink-400 text-sm font-medium">Logic-as-a-Service</span>
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
            Vi transformerer usikre sprogmodeller til præcise forretningsværktøjer. 
            Zero hallucinations. Full governance. Deploy globally med et klik.
          </p>
          
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-pink-600 hover:bg-pink-500 rounded-lg font-semibold transition-all shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50">
              Deploy Your Logic
            </button>
            <button className="px-8 py-4 border border-pink-500/30 hover:border-pink-500 rounded-lg font-semibold transition-all backdrop-blur-sm">
              View on GitHub →
            </button>
          </div>
        </div>
      </section>

      {/* Architecture Model - Bento Grid */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Arkitekturen</h2>
          <p className="text-slate-400 mb-12 text-lg">
            Logikken bor på serveren. Ikke i prompten.
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
                  Forretningsregler, prislogik og faktadata lever i GitHub. 
                  Versioneret. Auditerbar. Under fuld kontrol.
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
                  Cloudflare Workers henter fakta fra serveren. 
                  AI-agenten får præcis data. Ingen gætværk.
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
                  Installation via Microsoft Agent HQ eller GitHub Copilot Extensions. 
                  Brugeren ser kun resultatet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projekter</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Research Translator */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/50 backdrop-blur-xl hover:border-pink-500/30 transition-all overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-all" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold">Research Translator</h3>
                  <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-sm font-semibold">
                    KU Lighthouse
                  </span>
                </div>
                
                <div className="mb-6">
                  <div className="text-5xl font-bold text-pink-400 mb-2">83%</div>
                  <p className="text-slate-400">
                    Reduktion i manuel research-tid. Fra 60 til 10 minutter per opgave.
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-500" />
                    <span className="text-slate-300">+204 timer frigivet årligt per rådgiver</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-500" />
                    <span className="text-slate-300">ROI: 102.000 kr. første år</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-500" />
                    <span className="text-slate-300">Zero hosting costs (GitHub + Cloudflare)</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-800">
                  <p className="text-sm text-slate-500">
                    <span className="text-pink-400 font-mono">~0.35 kr.</span> per analyse
                  </p>
                </div>
              </div>
            </div>

            {/* Deterministic Price Engine */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/50 backdrop-blur-xl hover:border-pink-500/30 transition-all overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-all" />
              
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4">Deterministic Price Engine</h3>
                <p className="text-slate-400 mb-6">
                  Live demonstration af hvordan logik hentes fra serveren. 
                  AI-agenten får præcis prisberegning. Ingen approximationer.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">Indtast areal (m²)</label>
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
                    className="w-full px-6 py-3 bg-pink-600 hover:bg-pink-500 rounded-lg font-semibold transition-all"
                  >
                    Run Calculation
                  </button>
                  
                  {calculatorResult && (
                    <div className="p-4 bg-slate-950/50 border border-pink-500/20 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-400">Areal:</span>
                        <span className="font-mono text-white">{calculatorResult.area} m²</span>
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
        </div>
      </section>

      {/* Install Section - Terminal Style */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Deploy Logic</h2>
            <p className="text-slate-400 text-lg">
              Installation via Agent HQ. Et kommando. Færdig kode.
            </p>
          </div>
          
          <div className="relative">
            {/* Terminal Window */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-sm text-slate-500 font-mono">flux-install.sh</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-pink-400">❯</span>
                  <span className="text-slate-300">agr install flux/logic-bridge</span>
                </div>
                
                <div className="space-y-1 text-slate-500 mb-6">
                  <div>📦 Fetching metadata from registry...</div>
                  <div>✓ Verified signature</div>
                  <div>✓ Dependencies resolved</div>
                  <div className="text-green-400">✓ Installation complete</div>
                </div>
                
                <button
                  onClick={copyInstallCommand}
                  className="w-full px-6 py-3 bg-pink-600 hover:bg-pink-500 rounded-lg font-semibold transition-all shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 font-sans"
                >
                  {copied ? '✓ Copied!' : 'Copy Install Command'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Skill Viewer */}
      <section className="px-6 py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Skill Metadata</h2>
          <p className="text-slate-400 mb-12 text-lg">
            Agent-Ready format. GitHub Agent HQ compatible.
          </p>
          
          <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden">
            {/* Code Header */}
            <div className="flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800">
              <span className="text-sm text-slate-400 font-mono">metadata.json</span>
              <span className="text-xs text-pink-400">agent-ready</span>
            </div>
            
            {/* Code Content with Syntax Highlighting */}
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-slate-300">
{`{
  `}<span className="text-pink-400">"name"</span>{`: `}<span className="text-green-400">"flux-logic-bridge"</span>{`,
  `}<span className="text-pink-400">"version"</span>{`: `}<span className="text-green-400">"1.0.0"</span>{`,
  `}<span className="text-pink-400">"description"</span>{`: `}<span className="text-green-400">"Deterministic logic layer for AI agents"</span>{`,
  `}<span className="text-pink-400">"architecture"</span>{`: {
    `}<span className="text-pink-400">"source_of_truth"</span>{`: `}<span className="text-green-400">"github://flux-adoption/rules"</span>{`,
    `}<span className="text-pink-400">"bridge"</span>{`: `}<span className="text-green-400">"cloudflare-workers"</span>{`,
    `}<span className="text-pink-400">"interface"</span>{`: `}<span className="text-green-400">"agent-hq"</span>{`
  },
  `}<span className="text-pink-400">"governance"</span>{`: {
    `}<span className="text-pink-400">"zero_hallucination"</span>{`: `}<span className="text-yellow-400">true</span>{`,
    `}<span className="text-pink-400">"feed_integrity"</span>{`: `}<span className="text-yellow-400">true</span>{`,
    `}<span className="text-pink-400">"audit_trail"</span>{`: `}<span className="text-yellow-400">true</span>{`
  },
  `}<span className="text-pink-400">"deployment"</span>{`: {
    `}<span className="text-pink-400">"cost"</span>{`: `}<span className="text-green-400">"pay-per-use"</span>{`,
    `}<span className="text-pink-400">"hosting"</span>{`: `}<span className="text-green-400">"zero-cost"</span>{`,
    `}<span className="text-pink-400">"scalability"</span>{`: `}<span className="text-green-400">"global"</span>{`
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="px-6 py-24">
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
                Al data kommer fra validerede kilder. Ingen gætværk. Ingen approximationer.
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
                Virksomheden ejer logikken. Versionsstyret i GitHub. Audit trail på alle kald.
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
                Cloudflare Workers distribuerer logikken til 300+ edge locations. Millisecond latency.
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
            Fra usikker AI til deterministisk forretningsværdi på 2 uger.
          </p>
          <button className="px-12 py-5 bg-pink-600 hover:bg-pink-500 rounded-lg font-bold text-lg transition-all shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50">
            Start et projekt →
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
