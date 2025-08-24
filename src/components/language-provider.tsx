"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { Globe } from 'lucide-react'

// Types
interface Translations {
  [key: string]: {
    fr: string
    en: string
  }
}

interface LanguageContextType {
  language: 'fr' | 'en'
  setLanguage: (lang: 'fr' | 'en') => void
  t: (key: string) => string
}

// Contexte
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// ==========================================
// TRADUCTIONS COMPLÈTES
// ==========================================
const translations: Translations = {
  // Hero Section
  'hero.premium.badge': { fr: 'Service Premium Parisien', en: 'Premium Parisian Service' },
  'hero.title.art': { fr: "L'Art du Transport Privé", en: 'The Art of Private Transportation' },
  'hero.subtitle': { 
    fr: 'Découvrez l\'excellence du service de chauffeur privé à Paris. Une expérience sur-mesure où chaque détail compte.',
    en: 'Discover the excellence of private chauffeur service in Paris. A tailor-made experience where every detail matters.'
  },
  'hero.cta.book': { fr: 'Réserver Maintenant', en: 'Book Now' },
  'hero.cta.services': { fr: 'Nos Services', en: 'Our Services' },
  'hero.feature.fleet': { fr: 'Véhicules Premium', en: 'Premium Fleet' },
  'hero.feature.fleet.desc': { fr: 'Véhicules de luxe dernière génération', en: 'Latest generation luxury vehicles' },
  'hero.feature.service': { fr: 'Service 24/7', en: '24/7 Service' },
  'hero.feature.service.desc': { fr: 'Disponibilité absolue pour tous vos besoins', en: 'Absolute availability for all your needs' },
  'hero.feature.excellence': { fr: 'Chauffeurs Certifiés', en: 'Certified Chauffeurs' },
  'hero.feature.excellence.desc': { fr: 'Chauffeurs certifiés et expérimentés', en: 'Certified and experienced chauffeurs' },
  'hero.stats.clients': { fr: 'Clients Satisfaits', en: 'Satisfied Clients' },
  'hero.stats.available': { fr: 'Service Disponible', en: 'Service Available' },
  'hero.stats.experience': { fr: 'Années d\'Excellence', en: 'Years of Excellence' },
  'hero.stats.punctuality': { fr: 'Ponctualité', en: 'Punctuality' },
  'hero.scroll.discover': { fr: 'Découvrir', en: 'Discover' },

  // Services Section
  'services.badge': { fr: 'Services Premium', en: 'Premium Services' },
  'services.title': { fr: 'Nos Services', en: 'Our Services' },
  'services.subtitle': { 
    fr: 'Quatre univers d\'excellence pensés pour répondre à vos besoins les plus exigeants.',
    en: 'Four worlds of excellence designed to meet your most demanding needs.'
  },
  'services.subtitle2': { 
    fr: 'Chaque service reflète notre engagement vers la perfection.',
    en: 'Each service reflects our commitment to perfection.'
  },

  // Services Details
  'service.wedding.title': { fr: 'Mariage', en: 'Wedding' },
  'service.wedding.subtitle': { fr: 'Jour de Rêve', en: 'Dream Day' },
  'service.wedding.desc': { 
    fr: 'Transformez votre mariage en conte de fées avec notre service d\'exception',
    en: 'Transform your wedding into a fairy tale with our exceptional service'
  },
  'service.wedding.feature1': { fr: 'Véhicules décorés sur-mesure', en: 'Custom decorated vehicles' },
  'service.wedding.feature2': { fr: 'Service personnalisé complet', en: 'Complete personalized service' },
  'service.wedding.feature3': { fr: 'Ponctualité absolue garantie', en: 'Absolute punctuality guaranteed' },
  'service.wedding.feature4': { fr: 'Coordination parfaite', en: 'Perfect coordination' },
  'service.wedding.premium': { fr: 'Forfait Prestige disponible', en: 'Prestige Package available' },

  'service.airport.title': { fr: 'Aéroport', en: 'Airport' },
  'service.airport.subtitle': { fr: 'Transfert VIP', en: 'VIP Transfer' },
  'service.airport.desc': { 
    fr: 'Voyagez en première classe depuis votre porte jusqu\'aux terminaux',
    en: 'Travel first class from your door to the terminals'
  },
  'service.airport.feature1': { fr: 'Suivi des vols en temps réel', en: 'Real-time flight tracking' },
  'service.airport.feature2': { fr: 'Accueil personnalisé VIP', en: 'VIP personalized welcome' },
  'service.airport.feature3': { fr: 'Assistance bagages incluse', en: 'Luggage assistance included' },
  'service.airport.feature4': { fr: 'Salons d\'attente partenaires', en: 'Partner lounges access' },
  'service.airport.premium': { fr: 'Service Meet & Greet', en: 'Meet & Greet Service' },

  'service.events.title': { fr: 'Événementiel', en: 'Corporate Events' },
  'service.events.subtitle': { fr: 'Excellence Corporate', en: 'Corporate Excellence' },
  'service.events.desc': { 
    fr: 'Impressionnez vos invités avec un service de transport irréprochable',
    en: 'Impress your guests with impeccable transportation service'
  },
  'service.events.feature1': { fr: 'Flotte coordonnée premium', en: 'Premium coordinated fleet' },
  'service.events.feature2': { fr: 'Chauffeurs en livrée', en: 'Uniformed chauffeurs' },
  'service.events.feature3': { fr: 'Gestion multi-véhicules', en: 'Multi-vehicle management' },
  'service.events.feature4': { fr: 'Support événementiel dédié', en: 'Dedicated event support' },
  'service.events.premium': { fr: 'Coordinateur sur site', en: 'On-site coordinator' },

  'service.tourism.title': { fr: 'Tourisme', en: 'Tourism' },
  'service.tourism.subtitle': { fr: 'Paris Authentique', en: 'Authentic Paris' },
  'service.tourism.desc': { 
    fr: 'Découvrez la capitale avec un guide-chauffeur expert et passionné',
    en: 'Discover the capital with an expert and passionate driver-guide'
  },
  'service.tourism.feature1': { fr: 'Chauffeur-guide certifié', en: 'Certified driver-guide' },
  'service.tourism.feature2': { fr: 'Itinéraires exclusifs secrets', en: 'Secret exclusive itineraries' },
  'service.tourism.feature3': { fr: 'Arrêts photos privilégiés', en: 'Privileged photo stops' },
  'service.tourism.feature4': { fr: 'Expérience sur-mesure', en: 'Tailor-made experience' },
  'service.tourism.premium': { fr: 'Accès lieux privés', en: 'Private venues access' },

  'services.discover': { fr: 'Découvrir ce service', en: 'Discover this service' },
  'services.guarantee1': { fr: 'Service 5 étoiles', en: '5-star service' },
  'services.guarantee2': { fr: 'Satisfaction garantie', en: 'Satisfaction guaranteed' },
  'services.guarantee3': { fr: 'Excellence certifiée', en: 'Certified excellence' },
  'services.guarantee4': { fr: 'Passion du détail', en: 'Passion for detail' },

  // Booking Section
  'booking.badge': { fr: 'Réservation Premium', en: 'Premium Booking' },
  'booking.title': { fr: 'Réservez l\'Excellence', en: 'Book Excellence' },
  'booking.subtitle': { 
    fr: 'Chaque détail compte dans votre expérience de transport d\'exception.',
    en: 'Every detail matters in your exceptional transportation experience.'
  },
  'booking.subtitle2': { 
    fr: 'Laissez-nous créer un moment parfait pour vous.',
    en: 'Let us create a perfect moment for you.'
  },
  'booking.form.title': { fr: 'Formulaire de Réservation VIP', en: 'VIP Booking Form' },
  'booking.form.desc': { 
    fr: 'Votre demande sera transmise instantanément via WhatsApp',
    en: 'Your request will be transmitted instantly via WhatsApp'
  },
  'booking.whatsapp.direct': { fr: 'WhatsApp Direct', en: 'WhatsApp Direct' },

  // Form Fields
  'form.section1': { fr: 'Informations Personnelles', en: 'Personal Information' },
  'form.section2': { fr: 'Détails du Service', en: 'Service Details' },
  'form.section3': { fr: 'Itinéraire de Prestige', en: 'Prestige Itinerary' },
  'form.section4': { fr: 'Préférences Premium', en: 'Premium Preferences' },

  'form.firstname': { fr: 'Prénom', en: 'First Name' },
  'form.firstname.placeholder': { fr: 'Votre prénom', en: 'Your first name' },
  'form.lastname': { fr: 'Nom', en: 'Last Name' },
  'form.lastname.placeholder': { fr: 'Votre nom', en: 'Your last name' },
  'form.phone': { fr: 'Téléphone', en: 'Phone' },
  'form.phone.placeholder': { fr: '06 12 34 56 78', en: '+33 6 12 34 56 78' },
  'form.email': { fr: 'Email', en: 'Email' },
  'form.email.placeholder': { fr: 'votre@email.com', en: 'your@email.com' },

  'form.service': { fr: 'Type de service', en: 'Service Type' },
  'form.service.placeholder': { fr: 'Sélectionnez votre service premium', en: 'Select your premium service' },
  'form.service.wedding': { fr: 'Mariage - Jour de Rêve', en: 'Wedding - Dream Day' },
  'form.service.airport': { fr: 'Transfert Aéroport VIP', en: 'VIP Airport Transfer' },
  'form.service.events': { fr: 'Événementiel Corporate', en: 'Corporate Events' },
  'form.service.tourism': { fr: 'Tourisme Paris Authentique', en: 'Authentic Paris Tourism' },
  'form.service.custom': { fr: 'Service Sur-Mesure', en: 'Custom Service' },

  'form.date': { fr: 'Date de service', en: 'Service Date' },
  'form.time': { fr: 'Heure', en: 'Time' },
  'form.pickup': { fr: 'Lieu de prise en charge', en: 'Pickup Location' },
  'form.pickup.placeholder': { fr: 'Adresse complète de départ', en: 'Complete pickup address' },
  'form.destination': { fr: 'Destination', en: 'Destination' },
  'form.destination.placeholder': { fr: 'Adresse complète d\'arrivée', en: 'Complete destination address' },

  'form.passengers': { fr: 'Nombre de passagers', en: 'Number of passengers' },
  'form.passengers.placeholder': { fr: 'Sélectionnez', en: 'Select' },
  'form.passengers.1': { fr: '1 passager', en: '1 passenger' },
  'form.passengers.2': { fr: '2 passagers', en: '2 passengers' },
  'form.passengers.3': { fr: '3 passagers', en: '3 passengers' },
  'form.passengers.4': { fr: '4 passagers', en: '4 passengers' },
  'form.passengers.5': { fr: '5+ passagers', en: '5+ passengers' },

  'form.vehicle': { fr: 'Catégorie de véhicule', en: 'Vehicle Category' },
  'form.vehicle.sedan': { fr: 'Berline Executive', en: 'Executive Sedan' },
  'form.vehicle.van': { fr: 'Van Premium / Minibus', en: 'Premium Van / Minibus' },
  'form.vehicle.luxury': { fr: 'Véhicule de Grand Luxe', en: 'Grand Luxury Vehicle' },

  'form.message': { fr: 'Demandes spéciales & préférences', en: 'Special requests & preferences' },
  'form.message.placeholder': { 
    fr: 'Décrivez vos préférences particulières, demandes spéciales, ou toute information importante pour personnaliser votre expérience...',
    en: 'Describe your special preferences, special requests, or any important information to personalize your experience...'
  },

  'form.submit': { fr: 'Confirmer ma Réservation', en: 'Confirm my Booking' },
  'form.submitting': { fr: 'Transmission en cours...', en: 'Transmitting...' },

  'form.whatsapp.title': { fr: 'Transmission Instantanée', en: 'Instant Transmission' },
  'form.whatsapp.desc1': { 
    fr: 'Votre demande de réservation sera automatiquement transmise via WhatsApp.',
    en: 'Your booking request will be automatically transmitted via WhatsApp.'
  },
  'form.whatsapp.desc2': { 
    fr: 'Notre équipe vous contactera dans les plus brefs délais pour confirmer tous les détails.',
    en: 'Our team will contact you as soon as possible to confirm all details.'
  },

  'form.success.title': { fr: 'Réservation Transmise avec Succès !', en: 'Booking Successfully Transmitted!' },
  'form.success.desc1': { 
    fr: 'Votre demande de service premium a été envoyée via WhatsApp.',
    en: 'Your premium service request has been sent via WhatsApp.'
  },
  'form.success.desc2': { 
    fr: 'Notre équipe d\'excellence vous contactera rapidement pour finaliser votre réservation.',
    en: 'Our excellence team will contact you quickly to finalize your booking.'
  },

  'form.guarantee1': { fr: 'Service 5 Étoiles', en: '5-Star Service' },
  'form.guarantee1.desc': { fr: 'Excellence garantie à chaque trajet', en: 'Excellence guaranteed on every trip' },
  'form.guarantee2': { fr: 'Satisfaction 100%', en: '100% Satisfaction' },
  'form.guarantee2.desc': { fr: 'Votre bonheur est notre priorité', en: 'Your happiness is our priority' },
  'form.guarantee3': { fr: 'Expérience Unique', en: 'Unique Experience' },
  'form.guarantee3.desc': { fr: 'Chaque détail pensé pour vous', en: 'Every detail designed for you' },

  // Footer
  'footer.description': { 
    fr: 'Depuis plus d\'une décennie, Take&Moove incarne l\'excellence du transport privé parisien. Chaque trajet devient une expérience d\'exception, où luxe, ponctualité et discrétion se conjuguent à la perfection.',
    en: 'For over a decade, Take&Moove has embodied excellence in Parisian private transportation. Every journey becomes an exceptional experience, where luxury, punctuality and discretion are perfectly combined.'
  },
  'footer.commitment': { 
    fr: 'Notre engagement : transformer chaque déplacement en un moment privilégié, adapté à vos exigences les plus raffinées.',
    en: 'Our commitment: transforming every trip into a privileged moment, adapted to your most refined requirements.'
  },
  'footer.badge1': { fr: 'Service 5★', en: '5★ Service' },
  'footer.badge2': { fr: 'Certifié Premium', en: 'Premium Certified' },
  'footer.badge3': { fr: 'Disponible 24/7', en: 'Available 24/7' },

  'footer.services.title': { fr: 'Nos Services', en: 'Our Services' },
  'footer.contact.title': { fr: 'Contact VIP', en: 'VIP Contact' },
  'footer.contact.location': { fr: 'Localisation', en: 'Location' },
  'footer.contact.location.value': { fr: 'Paris & Île-de-France', en: 'Paris & Île-de-France' },
  'footer.contact.phone': { fr: 'Réservations', en: 'Reservations' },
  'footer.contact.email': { fr: 'Email Premium', en: 'Premium Email' },
  'footer.contact.availability': { fr: 'Disponibilité', en: 'Availability' },
  'footer.contact.availability.value': { fr: 'Service 24h/24 - 7j/7', en: '24/7 Service' },

  'footer.social.title': { fr: 'Suivez notre Excellence', en: 'Follow our Excellence' },
  'footer.copyright': { fr: 'Excellence certifiée depuis 2014.', en: 'Certified excellence since 2014.' },
  'footer.legal': { fr: 'Mentions légales', en: 'Legal Notice' },
  'footer.privacy': { fr: 'Confidentialité', en: 'Privacy' },
  'footer.terms': { fr: 'CGV Premium', en: 'Premium Terms' }
}

// ==========================================
// PROVIDER DE LANGUE
// ==========================================
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr')

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) {
      console.warn(`Missing translation for key: ${key}`)
      return key
    }
    return translation[language] || translation.fr || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook pour utiliser les traductions
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// ==========================================
// COMPOSANTS DRAPEAUX SVG
// ==========================================
const FrenchFlag = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 18" className="rounded-sm shadow-sm">
    <rect width="8" height="18" fill="#002395" />
    <rect x="8" width="8" height="18" fill="#FFFFFF" />
    <rect x="16" width="8" height="18" fill="#ED2939" />
  </svg>
)

const BritishFlag = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 18" className="rounded-sm shadow-sm">
    <rect width="24" height="18" fill="#012169" />
    <path d="M0,0 L24,18 M24,0 L0,18" stroke="#FFFFFF" strokeWidth="2" />
    <path d="M0,0 L24,18 M24,0 L0,18" stroke="#C8102E" strokeWidth="1" />
    <path d="M12,0 L12,18 M0,9 L24,9" stroke="#FFFFFF" strokeWidth="3" />
    <path d="M12,0 L12,18 M0,9 L24,9" stroke="#C8102E" strokeWidth="2" />
  </svg>
)

// ==========================================
// COMPOSANT SÉLECTEUR DE LANGUE AVEC DRAPEAUX SVG
// ==========================================
export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const flagSize = isMobile ? 16 : 20

  return (
    <div className="flex items-center gap-3 p-3">
      {/* Français */}
      <button
        id="fr"
        onClick={() => setLanguage('fr')}
        className={`rounded-full transition-all duration-300 transform hover:scale-110 
          ${language === 'fr' ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
        title="Français"
      >
        <FrenchFlag size={flagSize} />
      </button>

      {/* Anglais */}
      <button
        id="uk"
        onClick={() => setLanguage('en')}
        className={`rounded-full transition-all duration-300 transform hover:scale-110 
          ${language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
        title="English"
      >
        <BritishFlag size={flagSize} />
      </button>
    </div>
  )
}