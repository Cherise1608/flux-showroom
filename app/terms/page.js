'use client'

import Link from 'next/link'

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <nav className="px-6 py-6 border-b border-slate-200">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-slate-950">Flux AI</Link>
          <Link href="/" className="text-sm text-slate-600 hover:text-pink-500 transition-colors">
            &larr; Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-950 mb-2">Terms of Use</h1>
          <p className="text-sm text-slate-400 mb-12">Last updated: February 2026</p>

          {/* Acceptance of Terms */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-950 mb-3">
              <span className="text-pink-500">1.</span> Acceptance of Terms
            </h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing and using the Flux AI website and services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, please
              do not use this website. Flux AI is operated by Jesca Martaeng.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-950 mb-3">
              <span className="text-pink-500">2.</span> Intellectual Property
            </h2>
            <p className="text-slate-600 leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, images, case studies,
              code samples, and documentation, is the intellectual property of Jesca Martaeng and Flux AI.
              This content is protected by applicable copyright and intellectual property laws.
            </p>
          </section>

          {/* Use License */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-950 mb-3">
              <span className="text-pink-500">3.</span> Use License
            </h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Permission is granted to temporarily view the materials on the Flux AI website for personal,
              non-commercial use only. This license does not include:
            </p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1 ml-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or public display</li>
              <li>Attempting to reverse engineer any software contained on the website</li>
              <li>Removing any copyright or proprietary notations from the materials</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              This license shall automatically terminate if you violate any of these restrictions.
            </p>
          </section>

          {/* Disclaimer */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-950 mb-3">
              <span className="text-pink-500">4.</span> Disclaimer
            </h2>
            <p className="text-slate-600 leading-relaxed">
              The materials on the Flux AI website are provided on an &quot;as is&quot; basis. Flux AI makes
              no warranties, expressed or implied, and hereby disclaims all other warranties including, without
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property or other violation of rights. Further, Flux AI
              does not warrant or make any representations concerning the accuracy, likely results, or reliability
              of the use of the materials on its website.
            </p>
          </section>

          {/* Limitations */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-950 mb-3">
              <span className="text-pink-500">5.</span> Limitations
            </h2>
            <p className="text-slate-600 leading-relaxed">
              In no event shall Flux AI or Jesca Martaeng be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the
              use or inability to use the materials on the Flux AI website, even if Flux AI has been
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-950 mb-3">
              <span className="text-pink-500">6.</span> Governing Law
            </h2>
            <p className="text-slate-600 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Denmark,
              and you irrevocably submit to the exclusive jurisdiction of the courts in Denmark for the resolution
              of any disputes.
            </p>
          </section>

          {/* Contact */}
          <section className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about these Terms of Use, please contact us at{' '}
              <a href="mailto:jescacherisevia@gmail.com" className="text-pink-500 hover:text-pink-600 transition-colors">
                jescacherisevia@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-slate-400">&copy; 2025 Flux AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
