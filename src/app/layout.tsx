import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Take&Moove - Premium Private Chauffeur Service Paris | Service de Chauffeur Privé Premium",
  description:
    "Premium private chauffeur service in Paris. Weddings, airports, corporate events & tourism. Professional drivers for exceptional transportation experience. | Service de chauffeur professionnel pour tous vos déplacements à Paris. Mariages, aéroports, événements et tourisme.",
  keywords: "private chauffeur Paris, luxury transportation, wedding car service, airport transfer, corporate events, tourism Paris, chauffeur privé Paris, transport de luxe, mariage, aéroport, événementiel",
  generator: "Next.js",
  openGraph: {
    title: "Take&Moove - Premium Private Chauffeur Paris",
    description: "The art of private transportation in Paris. Premium service for all your travel needs.",
    url: "https://takeandmoove.fr",
    siteName: "Take&Moove",
    locale: "fr_FR",
    alternateLocale: "en_US",
    type: "website",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false, // Évite le zoom accidentel
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans bg-[#121212] text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}