/**
 * © 2026 Flux AI. All rights reserved.
 * Proprietary and confidential.
 */
'use client'

import { useLanguage } from '../context/LanguageContext'

const LANGUAGES = [
  { code: 'da', label: 'DA' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'es', label: 'ES' },
  { code: 'zh', label: '中文' },
]

export default function LanguageSwitcher() {
  const { lang, switchLanguage, mounted } = useLanguage()

  if (!mounted) return null

  return (
    <div className="flex items-center gap-1 text-xs">
      {LANGUAGES.map((l, i) => (
        <span key={l.code} className="flex items-center gap-1">
          {i > 0 && <span className="text-slate-300">·</span>}
          <button
            onClick={() => switchLanguage(l.code)}
            className={`transition-colors hover:text-pink-500 ${
              lang === l.code ? 'text-pink-500 font-semibold' : 'text-slate-400'
            }`}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  )
}
