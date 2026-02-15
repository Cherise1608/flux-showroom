/**
 * © 2026 Flux AI. All rights reserved.
 * Proprietary and confidential.
 */
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

const translations = {
  da: {
    backLink: 'Forside',
    title: 'AI Governance Scorecard',
    introHeadline: 'Hvor robust er din AI-governance?',
    introSubtitle: '9 spørgsmål. 3 kategorier. 5 minutter. Ingen login.',
    introStart: 'Start scorecard',
    categoryLabel: 'Kategori',
    of: 'af',
    categories: [
      { name: 'Adgang & Data', desc: 'Hvem har adgang til hvad — og ved du det med sikkerhed?' },
      { name: 'Sporbarhed & Compliance', desc: 'Kan du dokumentere dine AI-beslutninger over for en tilsynsmyndighed?' },
      { name: 'Operationel Robusthed', desc: 'Hvad sker der når din AI hallucinerer i en kundekritisk workflow?' },
    ],
    questions: [
      {
        text: 'Har I en central oversigt over hvilke medarbejdere og systemer der har adgang til jeres AI-modeller?',
        options: ['Nej, vi har intet overblik', 'Delvist — nogle teams har dokumenteret det', 'Ja, vi har en central og opdateret adgangsoversigt'],
      },
      {
        text: 'Hvordan sikrer I at persondata behandles korrekt i jeres AI-workflows?',
        options: ['Vi har ikke adresseret det specifikt', 'Vi har retningslinjer, men de håndhæves ikke systematisk', 'Vi har automatiserede kontroller og regelmæssig audit'],
      },
      {
        text: 'Kan I spore hvilke data der er brugt til at træne eller prompte jeres AI-løsninger?',
        options: ['Nej, vi har ingen datasporing', 'For nogle løsninger, men ikke alle', 'Ja, fuld datasporing med versionering'],
      },
      {
        text: 'Kan I dokumentere hvordan en specifik AI-beslutning blev truffet, hvis en tilsynsmyndighed spørger?',
        options: ['Nej, vi har ingen beslutningslog', 'Vi logger noget, men det er ikke struktureret', 'Ja, vi har struktureret audit trail for alle AI-beslutninger'],
      },
      {
        text: 'Har I en proces for at vurdere AI-risici inden nye modeller sættes i produktion?',
        options: ['Nej, modeller deployes uden formel risikovurdering', 'Vi gør det ad hoc, men ikke standardiseret', 'Ja, vi har en standardiseret risiko-framework'],
      },
      {
        text: 'Er jeres AI-anvendelse i overensstemmelse med EU AI Act kravene for jeres risikokategori?',
        options: ['Vi kender ikke vores risikokategori', 'Vi er bevidste om kravene, men har ikke implementeret dem fuldt ud', 'Ja, vi har kortlagt krav og implementeret nødvendige foranstaltninger'],
      },
      {
        text: 'Hvad sker der når jeres AI-system giver et forkert eller hallucineret svar i en kundekritisk proces?',
        options: ['Vi har ingen fallback-procedure', 'Vi har retningslinjer, men de er ikke testet', 'Vi har testede fallback-procedurer med automatisk eskalering'],
      },
      {
        text: 'Hvordan overvåger I kvaliteten af jeres AI-outputs over tid?',
        options: ['Vi overvåger det ikke systematisk', 'Vi tjekker manuelt med jævne mellemrum', 'Vi har automatiseret kvalitetsmonitorering med alerts'],
      },
      {
        text: 'Har I en plan for hvis jeres primære AI-leverandør oplever nedbrud eller skifter vilkår?',
        options: ['Nej, vi er afhængige af én enkelt leverandør', 'Vi har overvejet alternativer, men ikke formaliseret det', 'Ja, vi har en dokumenteret contingency-plan med alternative leverandører'],
      },
    ],
    next: 'Næste',
    back: 'Tilbage',
    seeResults: 'Se resultater',
    resultsTitle: 'Dit resultat',
    overall: 'Samlet score',
    outOf: 'ud af',
    breakdown: 'Fordeling per kategori',
    levels: {
      critical: { label: 'Kritisk', desc: 'Jeres AI-governance har væsentlige huller der udgør en risiko. Start med de grundlæggende: adgangsstyring, datasporing og en fallback-plan.' },
      developing: { label: 'Under udvikling', desc: 'I er på vej, men mangler struktur og konsistens. Fokusér på at formalisere jeres processer og gøre dem reproducerbare.' },
      strong: { label: 'Stærk', desc: 'Jeres AI-governance er solid. Overvej løbende audit og automatisering for at fastholde niveauet.' },
    },
    restart: 'Tag testen igen',
    ctaHeadline: 'Vil du styrke din score?',
    ctaText: 'Book en uforpligtende gennemgang af jeres AI-governance.',
    ctaButton: 'Kontakt mig direkte',
  },
  en: {
    backLink: 'Home',
    title: 'AI Governance Scorecard',
    introHeadline: 'How robust is your AI governance?',
    introSubtitle: '9 questions. 3 categories. 5 minutes. No login.',
    introStart: 'Start scorecard',
    categoryLabel: 'Category',
    of: 'of',
    categories: [
      { name: 'Access & Data', desc: 'Who has access to what — and do you know for certain?' },
      { name: 'Traceability & Compliance', desc: 'Can you document your AI decisions for a regulatory authority?' },
      { name: 'Operational Robustness', desc: 'What happens when your AI hallucinates in a customer-critical workflow?' },
    ],
    questions: [
      {
        text: 'Do you have a central overview of which employees and systems have access to your AI models?',
        options: ['No, we have no overview', 'Partially — some teams have documented it', 'Yes, we have a central and up-to-date access overview'],
      },
      {
        text: 'How do you ensure personal data is handled correctly in your AI workflows?',
        options: ['We haven\'t addressed it specifically', 'We have guidelines, but they are not systematically enforced', 'We have automated controls and regular audits'],
      },
      {
        text: 'Can you trace which data was used to train or prompt your AI solutions?',
        options: ['No, we have no data tracing', 'For some solutions, but not all', 'Yes, full data tracing with versioning'],
      },
      {
        text: 'Can you document how a specific AI decision was made if a regulator asks?',
        options: ['No, we have no decision log', 'We log some things, but it is not structured', 'Yes, we have a structured audit trail for all AI decisions'],
      },
      {
        text: 'Do you have a process for assessing AI risks before new models go into production?',
        options: ['No, models are deployed without formal risk assessment', 'We do it ad hoc, but not standardized', 'Yes, we have a standardized risk framework'],
      },
      {
        text: 'Is your AI use compliant with the EU AI Act requirements for your risk category?',
        options: ['We don\'t know our risk category', 'We are aware of the requirements but haven\'t fully implemented them', 'Yes, we have mapped requirements and implemented necessary measures'],
      },
      {
        text: 'What happens when your AI system gives a wrong or hallucinated answer in a customer-critical process?',
        options: ['We have no fallback procedure', 'We have guidelines, but they are not tested', 'We have tested fallback procedures with automatic escalation'],
      },
      {
        text: 'How do you monitor the quality of your AI outputs over time?',
        options: ['We don\'t monitor it systematically', 'We check manually at regular intervals', 'We have automated quality monitoring with alerts'],
      },
      {
        text: 'Do you have a plan if your primary AI provider goes down or changes terms?',
        options: ['No, we depend on a single vendor', 'We have considered alternatives, but not formalized it', 'Yes, we have a documented contingency plan with alternative vendors'],
      },
    ],
    next: 'Next',
    back: 'Back',
    seeResults: 'See results',
    resultsTitle: 'Your result',
    overall: 'Overall score',
    outOf: 'out of',
    breakdown: 'Breakdown by category',
    levels: {
      critical: { label: 'Critical', desc: 'Your AI governance has significant gaps that pose a risk. Start with the basics: access control, data tracing, and a fallback plan.' },
      developing: { label: 'Developing', desc: 'You\'re on your way, but lack structure and consistency. Focus on formalizing your processes and making them reproducible.' },
      strong: { label: 'Strong', desc: 'Your AI governance is solid. Consider ongoing audits and automation to maintain this level.' },
    },
    restart: 'Take the test again',
    ctaHeadline: 'Want to improve your score?',
    ctaText: 'Book a no-obligation review of your AI governance.',
    ctaButton: 'Contact me directly',
  },
  de: {
    backLink: 'Startseite',
    title: 'AI Governance Scorecard',
    introHeadline: 'Wie robust ist Ihre KI-Governance?',
    introSubtitle: '9 Fragen. 3 Kategorien. 5 Minuten. Kein Login.',
    introStart: 'Scorecard starten',
    categoryLabel: 'Kategorie',
    of: 'von',
    categories: [
      { name: 'Zugang & Daten', desc: 'Wer hat Zugang zu was — und wissen Sie das mit Sicherheit?' },
      { name: 'Nachverfolgbarkeit & Compliance', desc: 'Können Sie Ihre KI-Entscheidungen gegenüber einer Aufsichtsbehörde dokumentieren?' },
      { name: 'Operationelle Robustheit', desc: 'Was passiert, wenn Ihre KI in einem kundenkritischen Workflow halluziniert?' },
    ],
    questions: [
      {
        text: 'Haben Sie einen zentralen Überblick darüber, welche Mitarbeiter und Systeme Zugang zu Ihren KI-Modellen haben?',
        options: ['Nein, wir haben keinen Überblick', 'Teilweise — einige Teams haben es dokumentiert', 'Ja, wir haben eine zentrale und aktuelle Zugangsübersicht'],
      },
      {
        text: 'Wie stellen Sie sicher, dass personenbezogene Daten in Ihren KI-Workflows korrekt verarbeitet werden?',
        options: ['Wir haben das nicht spezifisch adressiert', 'Wir haben Richtlinien, aber sie werden nicht systematisch durchgesetzt', 'Wir haben automatisierte Kontrollen und regelmäßige Audits'],
      },
      {
        text: 'Können Sie nachverfolgen, welche Daten zum Trainieren oder Prompten Ihrer KI-Lösungen verwendet wurden?',
        options: ['Nein, wir haben keine Datenverfolgung', 'Für einige Lösungen, aber nicht alle', 'Ja, vollständige Datenverfolgung mit Versionierung'],
      },
      {
        text: 'Können Sie dokumentieren, wie eine bestimmte KI-Entscheidung getroffen wurde, wenn eine Aufsichtsbehörde fragt?',
        options: ['Nein, wir haben kein Entscheidungsprotokoll', 'Wir protokollieren einiges, aber es ist nicht strukturiert', 'Ja, wir haben einen strukturierten Audit Trail für alle KI-Entscheidungen'],
      },
      {
        text: 'Haben Sie einen Prozess zur Bewertung von KI-Risiken, bevor neue Modelle in Produktion gehen?',
        options: ['Nein, Modelle werden ohne formelle Risikobewertung bereitgestellt', 'Wir machen es ad hoc, aber nicht standardisiert', 'Ja, wir haben ein standardisiertes Risiko-Framework'],
      },
      {
        text: 'Entspricht Ihre KI-Nutzung den Anforderungen des EU AI Act für Ihre Risikokategorie?',
        options: ['Wir kennen unsere Risikokategorie nicht', 'Wir kennen die Anforderungen, haben sie aber noch nicht vollständig umgesetzt', 'Ja, wir haben Anforderungen kartiert und notwendige Maßnahmen umgesetzt'],
      },
      {
        text: 'Was passiert, wenn Ihr KI-System in einem kundenkritischen Prozess eine falsche oder halluzinierte Antwort gibt?',
        options: ['Wir haben kein Fallback-Verfahren', 'Wir haben Richtlinien, aber sie sind nicht getestet', 'Wir haben getestete Fallback-Verfahren mit automatischer Eskalation'],
      },
      {
        text: 'Wie überwachen Sie die Qualität Ihrer KI-Outputs über die Zeit?',
        options: ['Wir überwachen es nicht systematisch', 'Wir prüfen manuell in regelmäßigen Abständen', 'Wir haben automatisierte Qualitätsüberwachung mit Benachrichtigungen'],
      },
      {
        text: 'Haben Sie einen Plan, falls Ihr primärer KI-Anbieter ausfällt oder die Bedingungen ändert?',
        options: ['Nein, wir sind von einem einzigen Anbieter abhängig', 'Wir haben Alternativen in Betracht gezogen, aber nicht formalisiert', 'Ja, wir haben einen dokumentierten Notfallplan mit alternativen Anbietern'],
      },
    ],
    next: 'Weiter',
    back: 'Zurück',
    seeResults: 'Ergebnisse anzeigen',
    resultsTitle: 'Ihr Ergebnis',
    overall: 'Gesamtpunktzahl',
    outOf: 'von',
    breakdown: 'Aufschlüsselung nach Kategorie',
    levels: {
      critical: { label: 'Kritisch', desc: 'Ihre KI-Governance hat erhebliche Lücken, die ein Risiko darstellen. Beginnen Sie mit den Grundlagen: Zugangskontrolle, Datenverfolgung und ein Fallback-Plan.' },
      developing: { label: 'In Entwicklung', desc: 'Sie sind auf dem Weg, aber es fehlt an Struktur und Konsistenz. Konzentrieren Sie sich darauf, Ihre Prozesse zu formalisieren und reproduzierbar zu machen.' },
      strong: { label: 'Stark', desc: 'Ihre KI-Governance ist solide. Erwägen Sie laufende Audits und Automatisierung, um dieses Niveau zu halten.' },
    },
    restart: 'Test wiederholen',
    ctaHeadline: 'Möchten Sie Ihre Punktzahl verbessern?',
    ctaText: 'Buchen Sie eine unverbindliche Überprüfung Ihrer KI-Governance.',
    ctaButton: 'Kontaktieren Sie mich direkt',
  },
  es: {
    backLink: 'Inicio',
    title: 'AI Governance Scorecard',
    introHeadline: '¿Qué tan robusta es tu gobernanza de IA?',
    introSubtitle: '9 preguntas. 3 categorías. 5 minutos. Sin login.',
    introStart: 'Iniciar scorecard',
    categoryLabel: 'Categoría',
    of: 'de',
    categories: [
      { name: 'Acceso y Datos', desc: '¿Quién tiene acceso a qué — y lo sabes con certeza?' },
      { name: 'Trazabilidad y Cumplimiento', desc: '¿Puedes documentar tus decisiones de IA ante una autoridad reguladora?' },
      { name: 'Robustez Operacional', desc: '¿Qué pasa cuando tu IA alucina en un flujo de trabajo crítico para el cliente?' },
    ],
    questions: [
      {
        text: '¿Tienes una visión central de qué empleados y sistemas tienen acceso a tus modelos de IA?',
        options: ['No, no tenemos visión general', 'Parcialmente — algunos equipos lo han documentado', 'Sí, tenemos una visión central y actualizada de accesos'],
      },
      {
        text: '¿Cómo aseguran que los datos personales se manejen correctamente en sus flujos de trabajo de IA?',
        options: ['No lo hemos abordado específicamente', 'Tenemos directrices, pero no se aplican sistemáticamente', 'Tenemos controles automatizados y auditorías regulares'],
      },
      {
        text: '¿Pueden rastrear qué datos se usaron para entrenar o alimentar sus soluciones de IA?',
        options: ['No, no tenemos rastreo de datos', 'Para algunas soluciones, pero no todas', 'Sí, rastreo completo de datos con versionado'],
      },
      {
        text: '¿Pueden documentar cómo se tomó una decisión específica de IA si un regulador lo pregunta?',
        options: ['No, no tenemos registro de decisiones', 'Registramos algo, pero no está estructurado', 'Sí, tenemos un audit trail estructurado para todas las decisiones de IA'],
      },
      {
        text: '¿Tienen un proceso para evaluar los riesgos de IA antes de poner nuevos modelos en producción?',
        options: ['No, los modelos se despliegan sin evaluación formal de riesgos', 'Lo hacemos ad hoc, pero no estandarizado', 'Sí, tenemos un framework de riesgos estandarizado'],
      },
      {
        text: '¿Su uso de IA cumple con los requisitos del EU AI Act para su categoría de riesgo?',
        options: ['No conocemos nuestra categoría de riesgo', 'Conocemos los requisitos pero no los hemos implementado completamente', 'Sí, hemos mapeado requisitos e implementado las medidas necesarias'],
      },
      {
        text: '¿Qué pasa cuando tu sistema de IA da una respuesta incorrecta o alucinada en un proceso crítico para el cliente?',
        options: ['No tenemos procedimiento de respaldo', 'Tenemos directrices, pero no están probadas', 'Tenemos procedimientos de respaldo probados con escalamiento automático'],
      },
      {
        text: '¿Cómo monitorean la calidad de los outputs de IA a lo largo del tiempo?',
        options: ['No lo monitoreamos sistemáticamente', 'Verificamos manualmente a intervalos regulares', 'Tenemos monitoreo automatizado de calidad con alertas'],
      },
      {
        text: '¿Tienen un plan si su proveedor principal de IA sufre una caída o cambia las condiciones?',
        options: ['No, dependemos de un solo proveedor', 'Hemos considerado alternativas, pero no lo hemos formalizado', 'Sí, tenemos un plan de contingencia documentado con proveedores alternativos'],
      },
    ],
    next: 'Siguiente',
    back: 'Atrás',
    seeResults: 'Ver resultados',
    resultsTitle: 'Tu resultado',
    overall: 'Puntuación total',
    outOf: 'de',
    breakdown: 'Desglose por categoría',
    levels: {
      critical: { label: 'Crítico', desc: 'Tu gobernanza de IA tiene brechas significativas que representan un riesgo. Empieza por lo básico: control de acceso, rastreo de datos y un plan de respaldo.' },
      developing: { label: 'En desarrollo', desc: 'Vas por buen camino, pero falta estructura y consistencia. Enfócate en formalizar tus procesos y hacerlos reproducibles.' },
      strong: { label: 'Fuerte', desc: 'Tu gobernanza de IA es sólida. Considera auditorías continuas y automatización para mantener este nivel.' },
    },
    restart: 'Repetir el test',
    ctaHeadline: '¿Quieres mejorar tu puntuación?',
    ctaText: 'Reserva una revisión sin compromiso de tu gobernanza de IA.',
    ctaButton: 'Contáctame directamente',
  },
  zh: {
    backLink: '首页',
    title: 'AI治理评分卡',
    introHeadline: '您的AI治理有多稳健？',
    introSubtitle: '9个问题。3个类别。5分钟。无需登录。',
    introStart: '开始评估',
    categoryLabel: '类别',
    of: '/',
    categories: [
      { name: '访问与数据', desc: '谁有权访问什么——您确定吗？' },
      { name: '可追溯性与合规', desc: '您能向监管机构记录您的AI决策吗？' },
      { name: '运营稳健性', desc: '当您的AI在客户关键工作流中产生幻觉时会发生什么？' },
    ],
    questions: [
      {
        text: '您是否有一个中央概览，了解哪些员工和系统可以访问您的AI模型？',
        options: ['没有，我们没有概览', '部分——一些团队已经记录了', '是的，我们有一个集中且最新的访问概览'],
      },
      {
        text: '您如何确保个人数据在AI工作流中得到正确处理？',
        options: ['我们尚未专门解决此问题', '我们有指导方针，但没有系统执行', '我们有自动化控制和定期审计'],
      },
      {
        text: '您能追踪哪些数据被用来训练或提示您的AI解决方案吗？',
        options: ['不能，我们没有数据追踪', '对于一些解决方案可以，但不是全部', '是的，完整的数据追踪和版本控制'],
      },
      {
        text: '如果监管机构询问，您能记录某个特定AI决策是如何做出的吗？',
        options: ['不能，我们没有决策日志', '我们记录了一些，但不够结构化', '是的，我们对所有AI决策都有结构化的审计追踪'],
      },
      {
        text: '在新模型投入生产之前，您是否有评估AI风险的流程？',
        options: ['没有，模型在没有正式风险评估的情况下部署', '我们临时进行，但没有标准化', '是的，我们有标准化的风险框架'],
      },
      {
        text: '您的AI使用是否符合您所属风险类别的EU AI Act要求？',
        options: ['我们不知道我们的风险类别', '我们了解要求但尚未完全实施', '是的，我们已映射要求并实施了必要措施'],
      },
      {
        text: '当您的AI系统在客户关键流程中给出错误或幻觉回答时会怎样？',
        options: ['我们没有回退程序', '我们有指导方针，但未经测试', '我们有经过测试的回退程序和自动升级'],
      },
      {
        text: '您如何随时间监控AI输出的质量？',
        options: ['我们没有系统地监控', '我们定期手动检查', '我们有自动化的质量监控和告警'],
      },
      {
        text: '如果您的主要AI提供商出现故障或更改条款，您有计划吗？',
        options: ['没有，我们依赖单一供应商', '我们考虑了替代方案，但没有正式化', '是的，我们有记录在案的应急计划和替代供应商'],
      },
    ],
    next: '下一步',
    back: '返回',
    seeResults: '查看结果',
    resultsTitle: '您的结果',
    overall: '总分',
    outOf: '满分',
    breakdown: '按类别分解',
    levels: {
      critical: { label: '关键风险', desc: '您的AI治理存在重大漏洞。从基础开始：访问控制、数据追踪和回退计划。' },
      developing: { label: '发展中', desc: '您正在进步，但缺乏结构和一致性。专注于规范化流程并使其可复制。' },
      strong: { label: '强健', desc: '您的AI治理是扎实的。考虑持续审计和自动化以保持此水平。' },
    },
    restart: '重新测试',
    ctaHeadline: '想提高您的分数？',
    ctaText: '预约一次免费的AI治理审查。',
    ctaButton: '直接联系我',
  },
}

const levelColors = {
  critical: { bar: 'bg-red-500', text: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' },
  developing: { bar: 'bg-yellow-500', text: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' },
  strong: { bar: 'bg-[#00D4AA]', text: 'text-[#00D4AA]', bg: 'bg-[#00D4AA]/10', border: 'border-[#00D4AA]/30' },
}

function getLevel(score, max) {
  const pct = score / max
  if (pct <= 0.333) return 'critical'
  if (pct <= 0.666) return 'developing'
  return 'strong'
}

export default function ScorecardPage() {
  const { lang, mounted } = useLanguage()
  const t = translations[lang] || translations.da

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState(Array(9).fill(-1))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [step])

  if (!mounted) return null

  const handleAnswer = (qIndex, value) => {
    const next = [...answers]
    next[qIndex] = value
    setAnswers(next)
  }

  const categoryScores = [0, 1, 2].map(i =>
    answers.slice(i * 3, i * 3 + 3).reduce((s, a) => s + Math.max(a, 0), 0)
  )
  const totalScore = categoryScores.reduce((s, c) => s + c, 0)
  const overallLevel = getLevel(totalScore, 18)

  const canProceed = step >= 1 && step <= 3 &&
    answers.slice((step - 1) * 3, (step - 1) * 3 + 3).every(a => a >= 0)

  const handleRestart = () => {
    setStep(0)
    setAnswers(Array(9).fill(-1))
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      {/* Navigation */}
      <nav className="px-6 py-6 border-b border-gray-800">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">Flux AI</Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-[#00D4AA] transition-colors">
            {t.backLink}
          </Link>
        </div>
      </nav>

      {/* Progress bar — steps 1-3 */}
      {step >= 1 && step <= 3 && (
        <div className="px-6 pt-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2 mb-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-gray-800">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${i <= step ? 'bg-[#00D4AA]' : ''}`}
                    style={{ width: i <= step ? '100%' : '0%' }}
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              {t.categoryLabel} {step} {t.of} 3
            </p>
          </div>
        </div>
      )}

      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto">

          {/* ── INTRO SCREEN ── */}
          {step === 0 && (
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-black mb-4">{t.introHeadline}</h1>
              <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">{t.introSubtitle}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {t.categories.map((cat, i) => (
                  <div key={i} className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6 text-left">
                    <div className="text-[#00D4AA] text-2xl font-black mb-2">0{i + 1}</div>
                    <h3 className="font-bold text-lg mb-2">{cat.name}</h3>
                    <p className="text-gray-500 text-sm">{cat.desc}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setStep(1)}
                className="inline-block bg-[#00D4AA] text-[#0A0A0A] font-bold text-lg px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                {t.introStart}
              </button>
            </div>
          )}

          {/* ── QUESTION SCREENS (steps 1-3) ── */}
          {step >= 1 && step <= 3 && (
            <div>
              <div className="mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#00D4AA] mb-2">
                  0{step} — {t.categories[step - 1].name}
                </p>
                <h2 className="text-2xl font-bold text-white">{t.categories[step - 1].desc}</h2>
              </div>

              <div className="space-y-6">
                {[0, 1, 2].map(qi => {
                  const qIndex = (step - 1) * 3 + qi
                  const q = t.questions[qIndex]
                  return (
                    <div key={qIndex} className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
                      <p className="text-white font-medium mb-4">{q.text}</p>
                      <div className="space-y-2">
                        {q.options.map((option, oi) => (
                          <button
                            key={oi}
                            onClick={() => handleAnswer(qIndex, oi)}
                            className={`w-full text-left p-3 rounded-lg border transition-colors ${
                              answers[qIndex] === oi
                                ? 'border-[#00D4AA] bg-[#00D4AA]/10 text-white'
                                : 'border-gray-700 text-gray-400 hover:border-gray-600'
                            }`}
                          >
                            <span className="text-sm">{option}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-10">
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:border-gray-500 transition-colors"
                >
                  {t.back}
                </button>
                <button
                  onClick={() => canProceed && setStep(step + 1)}
                  disabled={!canProceed}
                  className={`px-8 py-3 font-bold rounded-lg transition-opacity ${
                    canProceed
                      ? 'bg-[#00D4AA] text-[#0A0A0A] hover:opacity-90'
                      : 'bg-[#00D4AA]/30 text-[#0A0A0A]/50 cursor-not-allowed'
                  }`}
                >
                  {step === 3 ? t.seeResults : t.next}
                </button>
              </div>
            </div>
          )}

          {/* ── RESULTS SCREEN ── */}
          {step === 4 && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">{t.resultsTitle}</h2>
                <div className="mb-4">
                  <span className="text-7xl font-black text-[#00D4AA]">{totalScore}</span>
                  <span className="text-2xl text-gray-500 ml-2">/ 18</span>
                </div>
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${levelColors[overallLevel].text} ${levelColors[overallLevel].bg} border ${levelColors[overallLevel].border}`}>
                  {t.levels[overallLevel].label}
                </div>
              </div>

              {/* Overall score bar */}
              <div className="mb-16">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{t.overall}</span>
                  <span>{totalScore} {t.outOf} 18</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${levelColors[overallLevel].bar}`}
                    style={{ width: `${(totalScore / 18) * 100}%` }}
                  />
                </div>
              </div>

              {/* Category breakdown */}
              <div className="mb-16">
                <h3 className="text-lg font-bold text-white mb-6">{t.breakdown}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {t.categories.map((cat, i) => {
                    const catLevel = getLevel(categoryScores[i], 6)
                    return (
                      <div key={i} className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold text-white">{cat.name}</span>
                          <span className={`text-sm font-bold ${levelColors[catLevel].text}`}>
                            {categoryScores[i]}/6
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-3">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${levelColors[catLevel].bar}`}
                            style={{ width: `${(categoryScores[i] / 6) * 100}%` }}
                          />
                        </div>
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${levelColors[catLevel].text} ${levelColors[catLevel].bg}`}>
                          {t.levels[catLevel].label}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Interpretation */}
              <div className="bg-[#1A1A2E] border border-gray-800 rounded-xl p-8 mb-16">
                <p className="text-gray-300 leading-relaxed">{t.levels[overallLevel].desc}</p>
              </div>

              {/* CTA */}
              <div className="text-center border-t border-gray-800 pt-12">
                <h3 className="text-2xl font-bold text-white mb-3">{t.ctaHeadline}</h3>
                <p className="text-gray-400 mb-8">{t.ctaText}</p>
                <a
                  href="mailto:info@fluxai.dk"
                  className="inline-block bg-[#00D4AA] text-[#0A0A0A] font-bold text-lg px-10 py-4 rounded-lg hover:opacity-90 transition-opacity mb-6"
                >
                  {t.ctaButton}
                </a>
                <div>
                  <button
                    onClick={handleRestart}
                    className="text-sm text-gray-500 hover:text-[#00D4AA] transition-colors"
                  >
                    {t.restart}
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="text-lg font-bold text-white">Flux AI</Link>
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/jmartaeng/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-[#00D4AA] transition-colors">LinkedIn</a>
            <a href="https://github.com/Cherise1608" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-[#00D4AA] transition-colors">GitHub</a>
            <a href="mailto:info@fluxai.dk" className="text-sm text-gray-500 hover:text-[#00D4AA] transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
