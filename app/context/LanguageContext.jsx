/**
 * © 2026 Flux AI. All rights reserved.
 * Proprietary and confidential.
 */
'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

import da from '../../locales/da.json'
import en from '../../locales/en.json'
import de from '../../locales/de.json'
import es from '../../locales/es.json'
import zh from '../../locales/zh.json'

const locales = { da, en, de, es, zh }
const SUPPORTED_LANGS = ['da', 'en', 'de', 'es', 'zh']
const DEFAULT_LANG = 'da'
const COOKIE_NAME = 'lang'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

const LanguageContext = createContext()

function getCookie(name) {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}

function setCookie(name, value, maxAge) {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${maxAge};SameSite=Lax`
}

function detectBrowserLanguage() {
  if (typeof navigator === 'undefined') return DEFAULT_LANG
  const browserLangs = navigator.languages || [navigator.language]
  for (const lang of browserLangs) {
    const code = lang.toLowerCase().split('-')[0]
    if (SUPPORTED_LANGS.includes(code)) return code
  }
  return DEFAULT_LANG
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj)
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = getCookie(COOKIE_NAME)
    if (saved && SUPPORTED_LANGS.includes(saved)) {
      setLang(saved)
    } else {
      const detected = detectBrowserLanguage()
      setLang(detected)
      setCookie(COOKIE_NAME, detected, COOKIE_MAX_AGE)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = lang
    }
  }, [lang, mounted])

  const switchLanguage = useCallback((newLang) => {
    if (SUPPORTED_LANGS.includes(newLang)) {
      setLang(newLang)
      setCookie(COOKIE_NAME, newLang, COOKIE_MAX_AGE)
    }
  }, [])

  const t = useCallback((key) => {
    const value = getNestedValue(locales[lang], key)
    if (value === undefined) {
      return getNestedValue(locales[DEFAULT_LANG], key) ?? key
    }
    return value
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
