'use client'

import SubstackFeed from './components/SubstackFeed'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navigation */}
      <nav className="px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-slate-950">Flux Adoption</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#enterprise-impact" className="text-sm text-slate-600 hover:text-pink-500 transition-colors">Projekter</a>
            <a href="#indsigter" className="text-sm text-slate-600 hover:text-pink-500 transition-colors">Indsigter</a>
            <a href="#about" className="text-sm text-slate-600 hover:text-pink-500 transition-colors">Om Mig</a>
            <a href="#kontakt" className="text-sm text-slate-600 hover:text-pink-500 transition-colors">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-16 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-950 mb-6">
              De fleste taler om AI.{' '}
              <span className="text-pink-500">Her bliver det bygget.</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Governance fra dag 1.
            </p>

            <a href="#enterprise-impact" className="inline-block px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-semibold transition-colors">
              Se Mine Projekter
            </a>
          </div>

          {/* Right Column — Profile Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/jesca-profile.jpg"
              alt="Jesca — AI Solution Specialist"
              className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="enterprise-impact" className="px-6 py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-slate-950">Projekter</h2>
          <p className="text-slate-600 mb-12 text-lg">
            Udvalgte projekter fra AI-implementering til forretningsudvikling.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 — Research Translator */}
            <div className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:border-pink-500 hover:scale-[1.02] transition-all duration-200">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src="/project-research.jpg" alt="Research Translator" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sm text-pink-500 font-medium mb-2">AI Agent &middot; K&oslash;benhavns Universitet</p>
                <h3 className="text-xl font-bold text-slate-950 mb-2">Research Translator</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-2">
                  83% reduktion i research-tid. Automatiseret workflow til komplekse forsker-briefings.
                </p>
                <div className="flex gap-4 text-sm mt-2 mb-4">
                  <span className="text-pink-500 font-bold">83% tidsbesparelse</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-pink-500 font-bold">102.000 kr. ROI</span>
                </div>
                <a href="https://cherise1608.github.io/research-translator/" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 text-sm font-medium text-pink-500 border border-pink-300 rounded-lg hover:bg-pink-50 transition-colors">
                  Se Projektet &rarr;
                </a>
              </div>
            </div>

            {/* Card 2 — EPDM Specialisten */}
            <div className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:border-pink-500 hover:scale-[1.02] transition-all duration-200">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src="/project-epdm.jpg" alt="EPDM Specialisten" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sm text-pink-500 font-medium mb-2">Forretningsudvikling &middot; Supply Chain</p>
                <h3 className="text-xl font-bold text-slate-950 mb-2">EPDM Specialisten</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Fra tysk ingeni&oslash;rvidenskab til dansk h&aring;ndv&aelig;rk. Transformation af kompleks B2B til en skalerbar D2C-model.
                </p>
                <a href="https://epdm-specialisten.dk" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 text-sm font-medium text-pink-500 border border-pink-300 rounded-lg hover:bg-pink-50 transition-colors">
                  Bes&oslash;g Siden &rarr;
                </a>
              </div>
            </div>

            {/* Card 3 — Flux Showroom */}
            <div className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:border-pink-500 hover:scale-[1.02] transition-all duration-200">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src="/project-showroom.jpg" alt="Flux Showroom" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sm text-pink-500 font-medium mb-2">Agentic Orchestration &middot; Next.js</p>
                <h3 className="text-xl font-bold text-slate-950 mb-2">Flux Showroom</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Dette showroom er bygget, testet og deployet via autonome agent-teams p&aring; under 60 minutter.
                </p>
                <p className="text-sm text-slate-500 mt-4 italic">Du kigger p&aring; det nu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Om Mig Section */}
      <section id="about" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column — Profile Image */}
            <div>
              <img
                src="/jesca-profile.jpg"
                alt="Jesca — AI Solution Specialist"
                className="w-full rounded-xl shadow-sm object-cover"
              />
            </div>

            {/* Right Column — Bio */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-pink-500 mb-4">Om Mig</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-950 mb-6 leading-snug">
                Broen mellem logik og menneskelige systemer
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Jeg startede ikke i tech. Jeg startede med mennesker, processer og den
                  virkelighed der opst&aring;r n&aring;r et nyt system lander i en organisation og ingen
                  ved hvad de skal g&oslash;re med det. Det l&aelig;rte mig at det sv&aelig;reste ved teknologi
                  aldrig er teknologien. Det er de mennesker der skal stole p&aring; den.
                </p>

                <p>
                  Da jeg byggede Research Translator hos KU Lighthouse, var m&aring;let ikke at
                  imponere med AI. Det var at give r&aring;dgivere deres tid tilbage. 60 minutter
                  blev til 10. Ikke fordi jeg valgte den smarteste model, men fordi jeg
                  insisterede p&aring; at arkitekturen skulle v&aelig;re s&aring; solid, at ingen beh&oslash;vede
                  at tjekke efter om AI&rsquo;en tog fejl.
                </p>

                <p>
                  I dag bygger jeg AI-agenter. Og det f&oslash;rste jeg bygger er altid det
                  samme: Grundlaget for at mennesker faktisk bruger det.
                </p>

                <p>
                  Jeg valgte det selvst&aelig;ndige spor. Det giver mig friheden til at bygge
                  det rigtige, fordi de bedste l&oslash;sninger sj&aelig;ldent opst&aring;r inden for en
                  37-timers ramme.
                </p>
              </div>

              {/* Built With */}
              <div className="mt-10 pt-8 border-t border-slate-200">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                  <span>Claude Code Agent Teams</span>
                  <span className="text-slate-300">|</span>
                  <span>Claude Opus 4.6</span>
                  <span className="text-slate-300">|</span>
                  <span>Gemini 3</span>
                  <span className="text-slate-300">|</span>
                  <span>Next.js</span>
                  <span className="text-slate-300">|</span>
                  <span>Vercel</span>
                  <span className="text-slate-300">|</span>
                  <span>Cloudflare</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indsigter Section */}
      <section id="indsigter" className="px-6 py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-500 mb-4">Indsigter</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-950 mb-4">AI i praksis</h2>
          <p className="text-slate-600 text-lg mb-12">Analyser af deterministisk AI, adoption og teknisk forretningsudvikling.</p>

          <SubstackFeed />

          <div className="mt-12 text-center">
            <a href="https://jescacherise.substack.com" target="_blank" rel="noopener noreferrer"
               className="inline-block px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-semibold transition-colors">
              F&oslash;lg mine indsigter p&aring; Substack
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner — Skal vi arbejde sammen? */}
      <section id="kontakt" className="px-6 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-950">
            Klar til at g&aring; fra pilot til produktion?
          </h2>
          <a href="mailto:jescacherisevia@gmail.com" className="inline-block px-10 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-bold text-lg transition-all shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30">
            Book en 20-minutters snak &rarr;
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <span className="text-lg font-bold text-slate-950">Flux Adoption</span>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/jmartaeng/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-pink-500 transition-colors">LinkedIn</a>
              <a href="https://github.com/Cherise1608" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-pink-500 transition-colors">GitHub</a>
              <a href="mailto:jescacherisevia@gmail.com" className="text-sm text-slate-500 hover:text-pink-500 transition-colors">Email</a>
            </div>
          </div>
          <p className="text-center text-xs text-slate-400">&copy; 2026 Flux Adoption &mdash; AI Solution Specialist based in Copenhagen.</p>
        </div>
      </footer>
    </div>
  )
}
