import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from './context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flux Adoption - Deterministic AI for the Agentic Era',
  description: 'Logic-as-a-Service. Vi transformerer usikre sprogmodeller til præcise forretningsværktøjer med zero hallucinations og full governance.',
  keywords: 'AI, Deterministic AI, Logic-as-a-Service, AI Adoption, Flux Adoption',
}

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
