/**
 * © 2026 Flux AI. All rights reserved.
 * Proprietary and confidential.
 */
'use client'

import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'

const translations = {
  da: {
    breadcrumb: 'Projekter',
    subtitle: 'AI-agent til akademisk mødeforberedelse. Bygget til KU Lighthouse.',
    tag: 'Overdraget til KU Lighthouse · Internt enterprise værktøj',
    intro: 'Rådgivere i KU Lighthouse brugte 60 minutter på at forberede hvert forskermøde. Manuelt. Research Translator reducerede den proces til 10 minutter. Ikke ved at gøre arbejdet hurtigere.',
    introAccent: 'Ved at redesigne det.',
    metrics: [
      { value: '83 %', label: 'Tidsbesparelse', detail: 'Fra 60 min til 10 min per briefing.' },
      { value: '+204', label: 'Timer frigjort', detail: 'Per rådgiver, per år.' },
      { value: '0 kr.', label: 'Driftsomkostninger', detail: 'Open source-arkitektur (GitHub + Cloudflare).' },
      { value: '+1,25', label: 'Årsværk vundet', detail: 'Ved skalering til 10 rådgivere.' },
    ],
    problemLabel: 'Problemet',
    problemTitle: 'Manuel, inkonsistent proces',
    problemItems: [
      '60 minutters manuelt forarbejde per forskermøde',
      'Inkonsistent kvalitet afhængig af rådgiverens erfaring',
      'Ingen struktureret metode til at vurdere forskningspotentiale',
      'Fragmenteret informationssøgning på tværs af platforme',
    ],
    solutionLabel: 'Løsningen',
    solutionTitle: 'AI-orkestreret webapplikation',
    solutionItems: [
      'Automatiseret informationssøgning via KU Pure i realtid',
      'Struktureret output i 6 specialiserede faner',
      'Ensartet kvalitet uanset rådgiverens erfaringsniveau',
      'Komplet briefing klar til print eller deling på 10 minutter',
    ],
    tabsLabel: 'Applikationens struktur',
    tabsTitle: '6 specialiserede faner',
    tabs: [
      { num: '01', title: 'Forskerprofil', desc: 'Overblik over baggrund og forskningsområde.' },
      { num: '02', title: 'Publikationer', desc: 'Relevante artikler med direkte kildelinks.' },
      { num: '03', title: 'Forskningsoversættelse', desc: 'Akademisk sprog oversat til forretningskontekst.' },
      { num: '04', title: 'Samarbejdsmuligheder', desc: 'Analyse af synergier med Lighthouse.' },
      { num: '05', title: 'Risikovurdering', desc: 'Vurdering af relevans og kommercielt potentiale.' },
      { num: '06', title: 'Mødebriefing', desc: 'Samlet syntese klar til brug.' },
    ],
    governanceLabel: 'Governance',
    governanceTitle: 'Tillid gennem transparens',
    governance: [
      { title: 'Kun offentlige data', desc: 'Al information hentes udelukkende fra KU Pure — universitetets åbne forskningsdatabase.' },
      { title: 'Kilde-verificering', desc: 'Alle resultater leveres med direkte kildelinks. Ingen hallucinationer.' },
      { title: 'Human in the loop', desc: 'AI\'en leverer grundlaget. Rådgiveren kvalificerer resultatet.' },
    ],
    techLabel: 'Teknisk arkitektur',
    techStack: [
      { layer: 'Intelligens', tech: 'Claude Sonnet' },
      { layer: 'Orkestrering', tech: 'Claude Code + Gemini' },
      { layer: 'Infrastruktur', tech: 'GitHub + Cloudflare (0 kr. i drift)' },
    ],
    statusBadge: 'Status: Overdraget',
    statusText: 'Research Translator er overdraget til KU Lighthouse. API-adgang er lukket og kildekoden forbliver privat som del af overdragelsesaftalen. Arkitekturen er dokumenteret herover.',
    statusCta: 'Har du et lignende projekt? →',
  },
  en: {
    breadcrumb: 'Projects',
    subtitle: 'AI agent for academic meeting preparation. Built for KU Lighthouse.',
    tag: 'Handed over to KU Lighthouse · Internal enterprise tool',
    intro: 'Advisors at KU Lighthouse spent 60 minutes preparing for each researcher meeting. Manually. Research Translator reduced that process to 10 minutes. Not by making the work faster.',
    introAccent: 'By redesigning it.',
    metrics: [
      { value: '83 %', label: 'Time saved', detail: 'From 60 min to 10 min per briefing.' },
      { value: '+204', label: 'Hours freed', detail: 'Per advisor, per year.' },
      { value: '$0', label: 'Operating costs', detail: 'Open source architecture (GitHub + Cloudflare).' },
      { value: '+1.25', label: 'FTEs reclaimed', detail: 'When scaled to 10 advisors.' },
    ],
    problemLabel: 'The Problem',
    problemTitle: 'Manual, inconsistent process',
    problemItems: [
      '60 minutes of manual preparation per researcher meeting',
      'Inconsistent quality depending on advisor experience',
      'No structured method to assess research potential',
      'Fragmented information search across platforms',
    ],
    solutionLabel: 'The Solution',
    solutionTitle: 'AI-orchestrated web application',
    solutionItems: [
      'Automated information retrieval via KU Pure in real time',
      'Structured output in 6 specialized tabs',
      'Consistent quality regardless of advisor experience level',
      'Complete briefing ready for print or sharing in 10 minutes',
    ],
    tabsLabel: 'Application structure',
    tabsTitle: '6 specialized tabs',
    tabs: [
      { num: '01', title: 'Researcher Profile', desc: 'Overview of background and research area.' },
      { num: '02', title: 'Publications', desc: 'Relevant articles with direct source links.' },
      { num: '03', title: 'Research Translation', desc: 'Academic language translated to business context.' },
      { num: '04', title: 'Collaboration Opportunities', desc: 'Analysis of synergies with Lighthouse.' },
      { num: '05', title: 'Risk Assessment', desc: 'Evaluation of relevance and commercial potential.' },
      { num: '06', title: 'Meeting Briefing', desc: 'Complete synthesis ready to use.' },
    ],
    governanceLabel: 'Governance',
    governanceTitle: 'Trust through transparency',
    governance: [
      { title: 'Public data only', desc: 'All information is sourced exclusively from KU Pure — the university\'s open research database.' },
      { title: 'Source verification', desc: 'All results are delivered with direct source links. No hallucinations.' },
      { title: 'Human in the loop', desc: 'The AI provides the foundation. The advisor qualifies the result.' },
    ],
    techLabel: 'Technical architecture',
    techStack: [
      { layer: 'Intelligence', tech: 'Claude Sonnet' },
      { layer: 'Orchestration', tech: 'Claude Code + Gemini' },
      { layer: 'Infrastructure', tech: 'GitHub + Cloudflare ($0 operating cost)' },
    ],
    statusBadge: 'Status: Handed over',
    statusText: 'Research Translator has been handed over to KU Lighthouse. API access is closed and the source code remains private as part of the handover agreement. The architecture is documented above.',
    statusCta: 'Have a similar project? →',
  },
  de: {
    breadcrumb: 'Projekte',
    subtitle: 'KI-Agent für akademische Meetingvorbereitung. Entwickelt für KU Lighthouse.',
    tag: 'Übergeben an KU Lighthouse · Internes Enterprise-Tool',
    intro: 'Berater bei KU Lighthouse verbrachten 60 Minuten mit der Vorbereitung jedes Forschertreffens. Manuell. Research Translator reduzierte diesen Prozess auf 10 Minuten. Nicht durch schnelleres Arbeiten.',
    introAccent: 'Durch Neugestaltung.',
    metrics: [
      { value: '83 %', label: 'Zeitersparnis', detail: 'Von 60 Min. auf 10 Min. pro Briefing.' },
      { value: '+204', label: 'Stunden freigesetzt', detail: 'Pro Berater, pro Jahr.' },
      { value: '0 €', label: 'Betriebskosten', detail: 'Open-Source-Architektur (GitHub + Cloudflare).' },
      { value: '+1,25', label: 'VZÄ gewonnen', detail: 'Bei Skalierung auf 10 Berater.' },
    ],
    problemLabel: 'Das Problem',
    problemTitle: 'Manueller, inkonsistenter Prozess',
    problemItems: [
      '60 Minuten manuelle Vorbereitung pro Forschertreffen',
      'Inkonsistente Qualität abhängig von der Erfahrung des Beraters',
      'Keine strukturierte Methode zur Bewertung des Forschungspotenzials',
      'Fragmentierte Informationssuche über verschiedene Plattformen',
    ],
    solutionLabel: 'Die Lösung',
    solutionTitle: 'KI-orchestrierte Webanwendung',
    solutionItems: [
      'Automatisierte Informationsabfrage über KU Pure in Echtzeit',
      'Strukturierte Ausgabe in 6 spezialisierten Tabs',
      'Gleichbleibende Qualität unabhängig vom Erfahrungsniveau des Beraters',
      'Vollständiges Briefing druck- oder teilbereit in 10 Minuten',
    ],
    tabsLabel: 'Anwendungsstruktur',
    tabsTitle: '6 spezialisierte Tabs',
    tabs: [
      { num: '01', title: 'Forscherprofil', desc: 'Überblick über Hintergrund und Forschungsgebiet.' },
      { num: '02', title: 'Publikationen', desc: 'Relevante Artikel mit direkten Quellenlinks.' },
      { num: '03', title: 'Forschungsübersetzung', desc: 'Akademische Sprache in Geschäftskontext übersetzt.' },
      { num: '04', title: 'Kooperationsmöglichkeiten', desc: 'Analyse der Synergien mit Lighthouse.' },
      { num: '05', title: 'Risikobewertung', desc: 'Bewertung von Relevanz und kommerziellem Potenzial.' },
      { num: '06', title: 'Meeting-Briefing', desc: 'Vollständige Synthese einsatzbereit.' },
    ],
    governanceLabel: 'Governance',
    governanceTitle: 'Vertrauen durch Transparenz',
    governance: [
      { title: 'Nur öffentliche Daten', desc: 'Alle Informationen stammen ausschließlich aus KU Pure — der offenen Forschungsdatenbank der Universität.' },
      { title: 'Quellenverifizierung', desc: 'Alle Ergebnisse werden mit direkten Quellenlinks geliefert. Keine Halluzinationen.' },
      { title: 'Human in the Loop', desc: 'Die KI liefert die Grundlage. Der Berater qualifiziert das Ergebnis.' },
    ],
    techLabel: 'Technische Architektur',
    techStack: [
      { layer: 'Intelligenz', tech: 'Claude Sonnet' },
      { layer: 'Orchestrierung', tech: 'Claude Code + Gemini' },
      { layer: 'Infrastruktur', tech: 'GitHub + Cloudflare (0 € Betriebskosten)' },
    ],
    statusBadge: 'Status: Übergeben',
    statusText: 'Research Translator wurde an KU Lighthouse übergeben. Der API-Zugang ist geschlossen und der Quellcode bleibt als Teil der Übergabevereinbarung privat. Die Architektur ist oben dokumentiert.',
    statusCta: 'Haben Sie ein ähnliches Projekt? →',
  },
  es: {
    breadcrumb: 'Proyectos',
    subtitle: 'Agente de IA para preparación de reuniones académicas. Creado para KU Lighthouse.',
    tag: 'Entregado a KU Lighthouse · Herramienta enterprise interna',
    intro: 'Los asesores de KU Lighthouse dedicaban 60 minutos a preparar cada reunión con investigadores. Manualmente. Research Translator redujo ese proceso a 10 minutos. No haciendo el trabajo más rápido.',
    introAccent: 'Rediseñándolo.',
    metrics: [
      { value: '83 %', label: 'Tiempo ahorrado', detail: 'De 60 min a 10 min por briefing.' },
      { value: '+204', label: 'Horas liberadas', detail: 'Por asesor, por año.' },
      { value: '0 €', label: 'Costes operativos', detail: 'Arquitectura open source (GitHub + Cloudflare).' },
      { value: '+1,25', label: 'FTEs recuperados', detail: 'Al escalar a 10 asesores.' },
    ],
    problemLabel: 'El Problema',
    problemTitle: 'Proceso manual e inconsistente',
    problemItems: [
      '60 minutos de preparación manual por reunión con investigador',
      'Calidad inconsistente según la experiencia del asesor',
      'Sin método estructurado para evaluar el potencial investigador',
      'Búsqueda de información fragmentada entre plataformas',
    ],
    solutionLabel: 'La Solución',
    solutionTitle: 'Aplicación web orquestada por IA',
    solutionItems: [
      'Recuperación automatizada de información vía KU Pure en tiempo real',
      'Salida estructurada en 6 pestañas especializadas',
      'Calidad consistente independiente del nivel de experiencia del asesor',
      'Briefing completo listo para imprimir o compartir en 10 minutos',
    ],
    tabsLabel: 'Estructura de la aplicación',
    tabsTitle: '6 pestañas especializadas',
    tabs: [
      { num: '01', title: 'Perfil del investigador', desc: 'Resumen de antecedentes y área de investigación.' },
      { num: '02', title: 'Publicaciones', desc: 'Artículos relevantes con enlaces directos a fuentes.' },
      { num: '03', title: 'Traducción de investigación', desc: 'Lenguaje académico traducido a contexto empresarial.' },
      { num: '04', title: 'Oportunidades de colaboración', desc: 'Análisis de sinergias con Lighthouse.' },
      { num: '05', title: 'Evaluación de riesgos', desc: 'Valoración de relevancia y potencial comercial.' },
      { num: '06', title: 'Briefing de reunión', desc: 'Síntesis completa lista para usar.' },
    ],
    governanceLabel: 'Gobernanza',
    governanceTitle: 'Confianza a través de la transparencia',
    governance: [
      { title: 'Solo datos públicos', desc: 'Toda la información proviene exclusivamente de KU Pure — la base de datos de investigación abierta de la universidad.' },
      { title: 'Verificación de fuentes', desc: 'Todos los resultados incluyen enlaces directos a fuentes. Sin alucinaciones.' },
      { title: 'Human in the loop', desc: 'La IA proporciona la base. El asesor califica el resultado.' },
    ],
    techLabel: 'Arquitectura técnica',
    techStack: [
      { layer: 'Inteligencia', tech: 'Claude Sonnet' },
      { layer: 'Orquestación', tech: 'Claude Code + Gemini' },
      { layer: 'Infraestructura', tech: 'GitHub + Cloudflare (0 € en operación)' },
    ],
    statusBadge: 'Estado: Entregado',
    statusText: 'Research Translator ha sido entregado a KU Lighthouse. El acceso a la API está cerrado y el código fuente permanece privado como parte del acuerdo de entrega. La arquitectura está documentada arriba.',
    statusCta: '¿Tienes un proyecto similar? →',
  },
  zh: {
    breadcrumb: '项目',
    subtitle: '用于学术会议准备的AI代理。为KU Lighthouse构建。',
    tag: '已移交给KU Lighthouse · 内部企业工具',
    intro: 'KU Lighthouse的顾问每次准备研究人员会议需要60分钟。手动完成。Research Translator将这一过程缩短至10分钟。不是通过加快工作速度。',
    introAccent: '而是通过重新设计。',
    metrics: [
      { value: '83 %', label: '时间节省', detail: '每次简报从60分钟缩短至10分钟。' },
      { value: '+204', label: '释放小时数', detail: '每位顾问，每年。' },
      { value: '¥0', label: '运营成本', detail: '开源架构（GitHub + Cloudflare）。' },
      { value: '+1.25', label: '全职人力回收', detail: '扩展到10位顾问时。' },
    ],
    problemLabel: '问题',
    problemTitle: '手动、不一致的流程',
    problemItems: [
      '每次研究人员会议需要60分钟手动准备',
      '质量不一致，取决于顾问经验',
      '没有结构化方法评估研究潜力',
      '跨平台的碎片化信息搜索',
    ],
    solutionLabel: '解决方案',
    solutionTitle: 'AI编排的Web应用',
    solutionItems: [
      '通过KU Pure实时自动检索信息',
      '6个专业选项卡中的结构化输出',
      '无论顾问经验水平如何，质量始终一致',
      '10分钟内完成可打印或共享的完整简报',
    ],
    tabsLabel: '应用结构',
    tabsTitle: '6个专业选项卡',
    tabs: [
      { num: '01', title: '研究人员档案', desc: '背景和研究领域概览。' },
      { num: '02', title: '出版物', desc: '相关文章及直接来源链接。' },
      { num: '03', title: '研究翻译', desc: '学术语言转化为商业语境。' },
      { num: '04', title: '合作机会', desc: '与Lighthouse的协同分析。' },
      { num: '05', title: '风险评估', desc: '相关性和商业潜力评估。' },
      { num: '06', title: '会议简报', desc: '可直接使用的完整综合报告。' },
    ],
    governanceLabel: '治理',
    governanceTitle: '通过透明建立信任',
    governance: [
      { title: '仅公开数据', desc: '所有信息仅来自KU Pure——大学的开放研究数据库。' },
      { title: '来源验证', desc: '所有结果均附带直接来源链接。无幻觉。' },
      { title: '人在回路中', desc: 'AI提供基础。顾问验证结果。' },
    ],
    techLabel: '技术架构',
    techStack: [
      { layer: '智能', tech: 'Claude Sonnet' },
      { layer: '编排', tech: 'Claude Code + Gemini' },
      { layer: '基础设施', tech: 'GitHub + Cloudflare（零运营成本）' },
    ],
    statusBadge: '状态：已移交',
    statusText: 'Research Translator已移交给KU Lighthouse。API访问已关闭，源代码根据移交协议保持私有。架构已在上方记录。',
    statusCta: '有类似项目？→',
  },
}

export default function ResearchTranslatorCaseStudy() {
  const { lang } = useLanguage()
  const t = translations[lang] || translations.da

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">

      {/* Navigation */}
      <nav className="px-6 py-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">Flux AI</Link>
        </div>
      </nav>

      {/* Header */}
      <header className="px-6 pt-16 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/#enterprise-impact" className="hover:text-pink-400 transition-colors">{t.breadcrumb}</Link>
            <span>→</span>
            <span className="text-slate-300">Research Translator</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Research Translator
          </h1>
          <p className="text-xl text-slate-400 mb-6 max-w-2xl">
            {t.subtitle}
          </p>
          <span className="inline-block px-4 py-2 text-sm font-medium text-pink-400 bg-pink-500/10 border border-pink-500/20 rounded-full">
            {t.tag}
          </span>
        </div>
      </header>

      {/* Intro */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12">
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
              {t.intro}{' '}
              <span className="text-white font-semibold">{t.introAccent}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {t.metrics.map((m, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-3xl lg:text-4xl font-bold text-pink-500 mb-2">{m.value}</p>
                <p className="text-sm font-semibold text-white mb-1">{m.label}</p>
                <p className="text-xs text-slate-400">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">{t.problemLabel}</p>
            <h3 className="text-xl font-bold text-white mb-4">{t.problemTitle}</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {t.problemItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-400 mt-0.5">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4">{t.solutionLabel}</p>
            <h3 className="text-xl font-bold text-white mb-4">{t.solutionTitle}</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {t.solutionItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-pink-500 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6 Tabs */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4">{t.tabsLabel}</p>
          <h2 className="text-3xl font-bold text-white mb-8">{t.tabsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.tabs.map((tab) => (
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
          <p className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4">{t.governanceLabel}</p>
          <h2 className="text-3xl font-bold text-white mb-8">{t.governanceTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.governance.map((g, i) => (
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
          <p className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4">{t.techLabel}</p>
          <h2 className="text-3xl font-bold text-white mb-8">Tech Stack</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            {t.techStack.map((row, i) => (
              <div key={i} className={`flex items-center justify-between px-8 py-5 ${i < t.techStack.length - 1 ? 'border-b border-white/5' : ''}`}>
                <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{row.layer}</span>
                <span className="text-sm text-white font-medium">{row.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status & Handover */}
      <section className="px-6 py-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 text-center">
            <div className="inline-block px-3 py-1 text-xs font-semibold text-pink-400 bg-pink-500/10 border border-pink-500/20 rounded-full mb-6">
              {t.statusBadge}
            </div>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
              {t.statusText}
            </p>
            <Link href="/#kontakt" className="inline-block px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-semibold transition-colors">
              {t.statusCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="text-lg font-bold text-white">Flux AI</Link>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/jmartaeng/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-pink-400 transition-colors">LinkedIn</a>
            <a href="https://github.com/Cherise1608" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-pink-400 transition-colors">GitHub</a>
            <a href="mailto:info@fluxai.dk" className="text-sm text-slate-500 hover:text-pink-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
