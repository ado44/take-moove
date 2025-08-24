"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

export function Footer() {
  const { t } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <footer className="relative overflow-hidden">
      {/* Background sophistiqué */}
      <div className="absolute inset-0">
        <div 
          style={{
            background: 'linear-gradient(to top, #000000 0%, rgba(26, 26, 26, 0.95) 50%, rgba(26, 26, 26, 0.5) 100%)'
          }}
          className="absolute inset-0"
        />
        
        {/* Texture premium */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(45deg, white 1px, transparent 1px),
                             linear-gradient(-45deg, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Lueur centrale */}
        <div 
          className="absolute"
          style={{
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50rem',
            height: '12.5rem',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Section principale */}
        <div className={`container mx-auto px-4 ${isMobile ? 'py-12' : 'py-20'}`}>
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-12'}`}>
            
            {/* Logo et description premium */}
            <div 
              className={`${isMobile ? '' : 'xl:col-span-6'} ${isMobile ? 'text-center' : ''}`} 
              style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1.5rem' : '2rem' }}
            >
              {/* Contenu du logo et description à ajouter ici si nécessaire */}
            </div>

            {/* Services et Contact - Colonnes 7-12 */}
            <div className="xl:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Services Premium */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h4 className="font-display text-xl text-white font-medium flex items-center gap-2">
                  <span style={{ fontSize: '1.25rem', color: '#facc15' }}>✨</span>
                  {t('footer.services.title')}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { nameKey: 'service.wedding.title', descKey: 'service.wedding.subtitle', icon: "💍" },
                    { nameKey: 'service.airport.title', descKey: 'service.airport.subtitle', icon: "✈️" },
                    { nameKey: 'service.events.title', descKey: 'service.events.subtitle', icon: "🎉" },
                    { nameKey: 'service.tourism.title', descKey: 'service.tourism.subtitle', icon: "🗼" }
                  ].map((service, index) => (
                    <li key={index}>
                      <div 
                        className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/5 cursor-pointer"
                      >
                        <span style={{ fontSize: '1.125rem' }}>{service.icon}</span>
                        <div>
                          <div className="text-white/90 font-medium transition-colors duration-300 hover:text-white">
                            {t(service.nameKey)}
                          </div>
                          <div className="text-white/50 text-sm">{t(service.descKey)}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Premium */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h4 className="font-display text-xl text-white font-medium flex items-center gap-2">
                  <span style={{ fontSize: '1.25rem', color: '#10b981' }}>📞</span>
                  {t('footer.contact.title')}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { 
                      icon: "📍", 
                      titleKey: 'footer.contact.location', 
                      infoKey: 'footer.contact.location.value',
                      color: "#ef4444"
                    },
                    { 
                      icon: "📞", 
                      titleKey: 'footer.contact.phone', 
                      info: "+33 1 23 45 67 89",
                      color: "#10b981"
                    },
                    { 
                      icon: "📧", 
                      titleKey: 'footer.contact.email', 
                      info: "contact@takemoove.fr",
                      color: "#3b82f6"
                    },
                    { 
                      icon: "🕐", 
                      titleKey: 'footer.contact.availability', 
                      infoKey: 'footer.contact.availability.value',
                      color: "#facc15"
                    }
                  ].map((contact, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/5 cursor-pointer group">
                        <span 
                          className="transition-transform duration-300 group-hover:scale-110"
                          style={{ 
                            color: contact.color,
                            fontSize: '1.25rem',
                            marginTop: '0.125rem'
                          }}
                        >
                          {contact.icon}
                        </span>
                        <div>
                          <div className="text-white/60 text-sm font-medium">{t(contact.titleKey)}</div>
                          <div className="text-white/90 transition-colors duration-300 group-hover:text-white">
                            {contact.infoKey ? t(contact.infoKey) : contact.info}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/50">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-white/70">
                  © 2025 Take&Moove. {t('footer.copyright')}
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm text-white/50">
                <Link 
                  href="/legal-notices" 
                  className="text-white transition-colors duration-300 hover:text-white/80 no-underline"
                >
                  {t('footer.legal')}
                </Link>
                <Link 
                  href="/privacy-policy" 
                  className="text-white transition-colors duration-300 hover:text-white/80 no-underline"
                >
                  {t('footer.privacy')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}