"use client"

import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileText, Lock, Crown } from "lucide-react"

export function LegalNavigation() {
  const { language } = useLanguage()
  const pathname = usePathname()

  const legalPages = [
    {
      href: "/legal-notices",
      icon: FileText,
      labelFr: "Mentions légales",
      labelEn: "Legal notices"
    },
    {
      href: "/privacy-policy", 
      icon: Lock,
      labelFr: "Confidentialité",
      labelEn: "Privacy"
    },
    {
      href: "/premium-terms",
      icon: Crown,
      labelFr: "CGV Premium", 
      labelEn: "Premium Terms"
    }
  ]

  return (
    <nav className="flex flex-wrap justify-center gap-4 mb-8">
      {legalPages.map((page) => {
        const isActive = pathname === page.href
        const Icon = page.icon
        
        return (
          <Link
            key={page.href}
            href={page.href}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              isActive 
                ? 'bg-white/10 text-white border border-white/20' 
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">
              {language === 'fr' ? page.labelFr : page.labelEn}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}