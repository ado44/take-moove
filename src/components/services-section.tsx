"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Plane, Calendar, MapPin, Crown, Sparkles, CheckCircle, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/components/language-provider"

export function ServicesSection() {
  const { t } = useLanguage()
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const services = [
    {
      icon: Heart,
      titleKey: 'service.wedding.title',
      subtitleKey: 'service.wedding.subtitle',
      descKey: 'service.wedding.desc',
      features: [
        'service.wedding.feature1',
        'service.wedding.feature2', 
        'service.wedding.feature3',
        'service.wedding.feature4'
      ],
      premiumKey: 'service.wedding.premium'
    },
    {
      icon: Plane,
      titleKey: 'service.airport.title',
      subtitleKey: 'service.airport.subtitle',
      descKey: 'service.airport.desc',
      features: [
        'service.airport.feature1',
        'service.airport.feature2',
        'service.airport.feature3', 
        'service.airport.feature4'
      ],
      premiumKey: 'service.airport.premium'
    },
    {
      icon: Calendar,
      titleKey: 'service.events.title',
      subtitleKey: 'service.events.subtitle',
      descKey: 'service.events.desc',
      features: [
        'service.events.feature1',
        'service.events.feature2',
        'service.events.feature3',
        'service.events.feature4'
      ],
      premiumKey: 'service.events.premium'
    },
    {
      icon: MapPin,
      titleKey: 'service.tourism.title',
      subtitleKey: 'service.tourism.subtitle', 
      descKey: 'service.tourism.desc',
      features: [
        'service.tourism.feature1',
        'service.tourism.feature2',
        'service.tourism.feature3',
        'service.tourism.feature4'
      ],
      premiumKey: 'service.tourism.premium'
    },
  ]

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background sophistiqué */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black">
        {/* Texture subtile */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} 
        />
        
        {/* Dégradé lumineux central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header de section premium */}
        <div className={`text-center ${isMobile ? 'mb-12' : 'mb-20'}`}>
          <div className={`flex justify-center items-center gap-2 mb-6 glass rounded-full border border-white/10 ${isMobile ? 'px-3 py-1.5' : 'px-4 py-2'}`}>
            <Crown className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} text-yellow-400`} />
            <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium text-white/90 tracking-wide`}>
              {t('services.badge')}
            </span>
          </div>
          
          <h2 className={`font-display ${isMobile ? 'text-4xl' : 'text-5xl md:text-7xl'} font-light text-gradient mb-6 tracking-tight`}>
            {t('services.title')}
          </h2>
          
          <div className="relative mb-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Sparkles className="w-4 h-4 text-white/60" />
            </div>
          </div>
          
          <p className="font-body text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
            <br />
            <span className="text-white/50 text-lg">{t('services.subtitle2')}</span>
          </p>
        </div>

        {/* Grille de services ultra-premium */}
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 lg:grid-cols-2 gap-8'} mb-16`}>
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden glass border-0 luxury-hover transition-all duration-700 ${
                hoveredService === index ? (isMobile ? '' : 'scale-105') : ''
              }`}
              onMouseEnter={() => !isMobile && setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Gradient de fond animé monochrome */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-white/1 group-hover:from-white/5 group-hover:to-white/2 transition-all duration-700" />
              
              {/* Bordure lumineuse */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className={`relative ${isMobile ? 'p-4 pb-3' : 'p-8 pb-6'}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>

                <CardTitle className="font-display text-2xl font-medium text-white mb-2 group-hover:text-gradient transition-all duration-300">
                  {t(service.titleKey)}
                </CardTitle>
                
                <div className="text-white/60 font-medium text-sm tracking-wide uppercase mb-4">
                  {t(service.subtitleKey)}
                </div>
                
                <CardDescription className="text-white/80 text-base leading-relaxed">
                  {t(service.descKey)}
                </CardDescription>
              </CardHeader>

              <CardContent className={`relative ${isMobile ? 'p-4 pt-0' : 'p-8 pt-0'}`}>
                {/* Liste des features premium */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((featureKey, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/90 text-sm group-hover:text-white transition-colors duration-300">
                      <div className="w-5 h-5 mr-3 flex-shrink-0">
                        <CheckCircle className="w-full h-full text-white/60 group-hover:text-white/80 transition-colors duration-300" />
                      </div>
                      <span>{t(featureKey)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA subtil */}
                <button 
                  className="w-full group/btn flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="text-black font-medium">{t('services.discover')}</span>
                  <ArrowRight className="w-4 h-4 text-white/60 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </CardContent>

              {/* Effet de brillance au survol */}
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[400%] transition-transform duration-1000" />
              </div>
            </Card>
          ))}
        </div>

        {/* Section bonus : Garanties premium */}
        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 p-8 glass rounded-3xl border border-white/10 max-w-4xl mx-auto">
            {[
              { icon: Crown, textKey: 'services.guarantee1' },
              { icon: CheckCircle, textKey: 'services.guarantee2' },
              { icon: Sparkles, textKey: 'services.guarantee3' },
              { icon: Heart, textKey: 'services.guarantee4' }
            ].map((guarantee, index) => (
              <div key={index} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 group">
                <guarantee.icon className="w-5 h-5 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                <span className="font-medium">{t(guarantee.textKey)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}