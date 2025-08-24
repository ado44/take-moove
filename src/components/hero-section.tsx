"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-provider"

export function HeroSection() {
  const { t } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Détection mobile/desktop
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Effet de parallaxe souris uniquement sur desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        })
      }
    }

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove)
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isMobile])

  // Nombre de particules adaptatif
  const particleCount = isMobile ? 15 : 50

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section">
      {/* Background ultra sophistiqué */}
      <div className="absolute inset-0">
        {/* Effet de parallaxe avec le mouvement de la souris - Desktop uniquement */}
        {!isMobile && (
          <div 
            className="absolute inset-0 opacity-20 transition-all duration-300"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(248, 247, 244, 0.1) 0%, transparent 50%)`
            }}
          />
        )}
        
        {/* Particules animées - Nombre réduit sur mobile */}
        <div className="absolute inset-0">
          {[...Array(particleCount)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: isMobile ? '2px' : '4px',
                height: isMobile ? '2px' : '4px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: isMobile ? 0.2 : 0.3,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Dégradés lumineux flottants - Simplifiés sur mobile */}
        <div 
          className="absolute opacity-5 rounded-full animate-float"
          style={{
            top: isMobile ? '2rem' : '5rem',
            left: isMobile ? '2rem' : '5rem',
            width: isMobile ? '16rem' : '24rem',
            height: isMobile ? '16rem' : '24rem',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            filter: isMobile ? 'blur(30px)' : 'blur(60px)'
          }}
        />
        <div 
          className="absolute opacity-5 rounded-full animate-float"
          style={{
            bottom: isMobile ? '2rem' : '5rem',
            right: isMobile ? '2rem' : '5rem',
            width: isMobile ? '14rem' : '20rem',
            height: isMobile ? '14rem' : '20rem',
            background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
            filter: isMobile ? 'blur(30px)' : 'blur(60px)',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Grille de luxe en arrière-plan - Plus subtile sur mobile */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(248, 247, 244, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(248, 247, 244, 0.1) 1px, transparent 1px)`,
            backgroundSize: isMobile ? '30px 30px' : '50px 50px'
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="text-center" style={{ maxWidth: '72rem', margin: '0 auto' }}>
          {/* Logo/Brand ultra élégant - Taille responsive */}
          <div className="mb-12">
            <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-light text-gradient mb-6 tracking-tight">
              Take<span className="font-normal">&</span>Moove
            </h1>
            <div className="relative">
              <div 
                className="mx-auto"
                style={{
                  width: isMobile ? '4rem' : '8rem',
                  height: '1px',
                  background: 'linear-gradient(to right, transparent, #ffffff, transparent)'
                }}
              />
              <div 
                className="absolute animate-pulse"
                style={{
                  top: 0,
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: isMobile ? '6px' : '8px',
                  height: isMobile ? '6px' : '8px',
                  background: '#ffffff',
                  borderRadius: '50%'
                }}
              />
            </div>
          </div>

          {/* Tagline sophistiqué - Taille adaptative */}
          <div className="mb-12">
            <p className={`font-display ${isMobile ? 'text-xl' : 'text-2xl md:text-4xl'} text-white-90 mb-4 font-light italic`}>
              {t('hero.title.art')}
            </p>
            <p 
              className={`font-body ${isMobile ? 'text-base' : 'text-lg md:text-xl'} text-white-70 leading-relaxed mx-auto`} 
              style={{ maxWidth: isMobile ? '100%' : '48rem' }}
            >
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Features premium avec animations - Layout adaptatif */}
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 md:grid-cols-3 gap-8'} mb-16`}>
            {[
              {
                icon: "✨",
                title: t('hero.feature.fleet'),
                desc: t('hero.feature.fleet.desc'),
                delay: "0s"
              },
              {
                icon: "🕐",
                title: t('hero.feature.service'),
                desc: t('hero.feature.service.desc'),
                delay: "0.2s"
              },
              {
                icon: "🛡️",
                title: t('hero.feature.excellence'),
                desc: t('hero.feature.excellence.desc'),
                delay: "0.4s"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`glass rounded-2xl ${isMobile ? 'p-4' : 'p-8'} transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
                style={{ 
                  animationDelay: feature.delay,
                  border: '1px solid rgba(248, 247, 244, 0.1)'
                }}
              >
                <div className="relative mb-4">
                  <div 
                    className="mx-auto rounded-2xl flex items-center justify-center transition-transform duration-500 hover:scale-110"
                    style={{
                      width: isMobile ? '3rem' : '4rem',
                      height: isMobile ? '3rem' : '4rem',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)'
                    }}
                  >
                    <span style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>{feature.icon}</span>
                  </div>
                  {!isMobile && (
                    <div 
                      className="absolute rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300"
                      style={{
                        top: '-0.5rem',
                        right: '25%',
                        width: '1.5rem',
                        height: '1.5rem',
                        background: 'linear-gradient(135deg, #f6ce30ff 0%, #f59e0b 100%)'
                      }}
                    />
                  )}
                </div>
                <h3 className={`font-display ${isMobile ? 'text-lg' : 'text-xl'} font-medium text-white mb-3`}>
                  {feature.title}
                </h3>
                <p className={`text-white-70 ${isMobile ? 'text-sm' : 'text-sm'} leading-relaxed`}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA ultra premium - Layout adaptatif */}
          <div className={`flex ${isMobile ? 'flex-col gap-4' : 'flex-col md:flex-row gap-6'} justify-center items-center`}>
            <button
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              className={`btn-primary rounded-2xl ${isMobile ? 'w-full py-4 px-6 text-base' : 'px-12 py-6 text-lg'} font-semibold transition-all duration-500 hover:scale-105 shadow-2xl`}
              style={{ 
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                color: '#000000',
                minHeight: isMobile ? '48px' : 'auto'
              }}
            >
              <span className="relative flex items-center justify-center gap-3">
                <span className="tracking-wide">{t('hero.cta.book')}</span>
                <span className="transition-transform duration-300 hover:translate-x-2">→</span>
              </span>
            </button>

            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className={`glass border border-white-20 text-white rounded-2xl ${isMobile ? 'w-full py-4 px-6 text-base' : 'px-12 py-6 text-lg'} font-medium transition-all duration-300 hover:border-white-40 hover:bg-white-5`}
              style={{ 
                minHeight: isMobile ? '48px' : 'auto',
                padding: '1rem 2rem'
              }}
            >
              <span className="tracking-wide">{t('hero.cta.services')}</span>
            </button>
          </div>

          {/* Statistiques de prestige - Layout adaptatif */}
          <div className={`mt-20 grid ${isMobile ? 'grid-cols-2 gap-4' : 'grid-cols-2 md:grid-cols-4 gap-8'}`}>
            {/* {[
              { number: "500+", label: t('hero.stats.clients') },
              { number: "24/7", label: t('hero.stats.available') },
              { number: "10+", label: t('hero.stats.experience') },
              { number: "100%", label: t('hero.stats.punctuality') }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`font-display ${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'} font-light text-white mb-2 transition-colors duration-300 hover:text-yellow-400`}>
                  {stat.number}
                </div>
                <div className={`text-white-60 ${isMobile ? 'text-xs' : 'text-sm'} tracking-wide uppercase font-medium`}>
                  {stat.label}
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  )
}