'use client'

import { useEffect, useState } from 'react'

export default function SubstackFeed() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/substack')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setArticles(data)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 animate-pulse">
            <div className="h-4 bg-slate-200 rounded w-24 mb-3" />
            <div className="h-6 bg-slate-200 rounded w-full mb-3" />
            <div className="h-4 bg-slate-200 rounded w-3/4" />
          </div>
        ))}
      </div>
    )
  }

  if (articles.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <a href="https://jescacherise.substack.com" target="_blank" rel="noopener noreferrer"
           className="block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:border-pink-500 hover:scale-[1.01] transition-all duration-200">
          <div className="p-6">
            <p className="text-sm text-slate-400 mb-3">Substack</p>
            <h3 className="text-xl font-bold text-slate-950 mb-3">L&aelig;s mine seneste indsigter</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Analyser af deterministisk AI, adoption og teknisk forretningsudvikling.</p>
            <p className="text-pink-500 text-sm font-medium mt-4">G&aring; til Substack &rarr;</p>
          </div>
        </a>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {articles.map((article, i) => (
        <a key={i} href={article.link} target="_blank" rel="noopener noreferrer"
           className="block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:border-pink-500 hover:scale-[1.01] transition-all duration-200">
          <div className="p-6">
            <p className="text-sm text-slate-400 mb-3">{article.date}</p>
            <h3 className="text-xl font-bold text-slate-950 mb-3">{article.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{article.description}</p>
            <p className="text-pink-500 text-sm font-medium mt-4">L&aelig;s p&aring; Substack &rarr;</p>
          </div>
        </a>
      ))}
    </div>
  )
}
