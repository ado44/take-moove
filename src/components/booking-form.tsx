"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/components/language-provider"

// ==========================================
// CONFIGURATION
// ==========================================
const WHATSAPP_NUMBER = "221780171410"

interface FormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  service: string
  date: string
  time: string
  pickup: string
  destination: string
  passengers: string
  vehicle: string
  message: string
}

export function BookingForm() {
  const { t, language } = useLanguage()
  
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    pickup: "",
    destination: "",
    passengers: "",
    vehicle: "berline",
    message: "",
  })
  
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationErrors, setValidationErrors] = useState<string[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // ==========================================
  // VALIDATION DES DONNÉES
  // ==========================================
  const validateFormData = (data: FormData): { isValid: boolean; errors: string[] } => {
    const errors: string[] = []
    
    const errorMessages = {
      firstName: language === 'en' ? 'First name is required' : 'Le prénom est obligatoire',
      lastName: language === 'en' ? 'Last name is required' : 'Le nom est obligatoire',
      phone: language === 'en' ? 'Phone number is required' : 'Le téléphone est obligatoire',
      email: language === 'en' ? 'Email is required' : 'L\'email est obligatoire',
      service: language === 'en' ? 'Service type is required' : 'Le type de service est obligatoire',
      date: language === 'en' ? 'Date is required' : 'La date est obligatoire',
      time: language === 'en' ? 'Time is required' : 'L\'heure est obligatoire',
      pickup: language === 'en' ? 'Pickup location is required' : 'Le lieu de prise en charge est obligatoire',
      destination: language === 'en' ? 'Destination is required' : 'La destination est obligatoire',
      passengers: language === 'en' ? 'Number of passengers is required' : 'Le nombre de passagers est obligatoire',
      emailInvalid: language === 'en' ? 'Email is not valid' : 'L\'email n\'est pas valide',
      pastDate: language === 'en' ? 'Date cannot be in the past' : 'La date ne peut pas être dans le passé'
    }
    
    if (!data.firstName.trim()) errors.push(errorMessages.firstName)
    if (!data.lastName.trim()) errors.push(errorMessages.lastName)
    if (!data.phone.trim()) errors.push(errorMessages.phone)
    if (!data.email.trim()) errors.push(errorMessages.email)
    if (!data.service) errors.push(errorMessages.service)
    if (!data.date) errors.push(errorMessages.date)
    if (!data.time) errors.push(errorMessages.time)
    if (!data.pickup.trim()) errors.push(errorMessages.pickup)
    if (!data.destination.trim()) errors.push(errorMessages.destination)
    if (!data.passengers) errors.push(errorMessages.passengers)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (data.email && !emailRegex.test(data.email)) {
      errors.push(errorMessages.emailInvalid)
    }

    if (data.date) {
      const selectedDate = new Date(data.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        errors.push(errorMessages.pastDate)
      }
    }

    return { isValid: errors.length === 0, errors }
  }

  // ==========================================
  // CRÉATION DU MESSAGE WHATSAPP
  // ==========================================
  const getServiceName = (service: string): string => {
    const services: { [key: string]: string } = {
      wedding: language === 'en' ? "💒 Wedding" : "💒 Mariage",
      airport: language === 'en' ? "✈️ Airport Transfer" : "✈️ Transfert Aéroport", 
      events: language === 'en' ? "🎉 Corporate Events" : "🎉 Événementiel",
      tourism: language === 'en' ? "🗼 Paris Tourism" : "🗼 Tourisme Paris",
      custom: language === 'en' ? "🚗 Custom Service" : "🚗 Autre service",
    }
    return services[service] || service
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const locale = language === 'en' ? 'en-US' : 'fr-FR'
    return date.toLocaleDateString(locale, {
      weekday: "long",
      year: "numeric", 
      month: "long",
      day: "numeric",
    })
  }

  const createWhatsAppMessage = (data: FormData): string => {
    const title = language === 'en' 
      ? "🏆 *NEW TAKE&MOOVE BOOKING*"
      : "🏆 *NOUVELLE RÉSERVATION TAKE&MOOVE*"
      
    const clientLabel = language === 'en' ? "👤 *Premium Client:*" : "👤 *Client Premium:*"
    const serviceLabel = language === 'en' ? "🎯 *Service:*" : "🎯 *Service:*"
    const dateLabel = language === 'en' ? "📅 *Date:*" : "📅 *Date:*"
    const timeLabel = language === 'en' ? "🕐 *Time:*" : "🕐 *Heure:*"
    const routeLabel = language === 'en' ? "📍 *Route:*" : "📍 *Trajet:*"
    const departureLabel = language === 'en' ? "🟢 Departure:" : "🟢 Départ:"
    const arrivalLabel = language === 'en' ? "🔴 Arrival:" : "🔴 Arrivée:"
    const passengersLabel = language === 'en' ? "👥 *Passengers:*" : "👥 *Passagers:*"
    const vehicleLabel = language === 'en' ? "🚙 *Premium Vehicle:*" : "🚙 *Véhicule Premium:*"
    const requestsLabel = language === 'en' ? "💬 *Special requests:*" : "💬 *Demandes spéciales:*"
    const noRequests = language === 'en' ? "No special requests" : "Aucune demande particulière"
    const bookingNote = language === 'en' 
      ? `✨ *Take&Moove* - Excellence since 2024\n🕐 Booking received on ${new Date().toLocaleDateString("en-US")} at ${new Date().toLocaleTimeString("en-US")}`
      : `✨ *Take&Moove* - Excellence depuis 2024\n🕐 Réservation reçue le ${new Date().toLocaleDateString("fr-FR")} à ${new Date().toLocaleTimeString("fr-FR")}`

    return `${title}

${clientLabel}
${data.firstName} ${data.lastName}
📞 ${data.phone}
📧 ${data.email}

${serviceLabel} ${getServiceName(data.service)}
${dateLabel} ${formatDate(data.date)}
${timeLabel} ${data.time}

${routeLabel}
${departureLabel} ${data.pickup}
${arrivalLabel} ${data.destination}

${passengersLabel} ${data.passengers}
${vehicleLabel} ${data.vehicle}

${requestsLabel}
${data.message || noRequests}

---
${bookingNote}`
  }

  const sendWhatsAppMessage = (data: FormData): void => {
    const message = createWhatsAppMessage(data)
    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    
    window.open(whatsappURL, "_blank")
  }

  // ==========================================
  // GESTION DU FORMULAIRE
  // ==========================================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setValidationErrors([])

    const validation = validateFormData(formData)
    
    if (!validation.isValid) {
      setValidationErrors(validation.errors)
      setIsSubmitting(false)
      return
    }

    try {
      sendWhatsAppMessage(formData)
      setShowConfirmation(true)
      
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        pickup: "",
        destination: "",
        passengers: "",
        vehicle: "berline",
        message: "",
      })

      setTimeout(() => setShowConfirmation(false), 5000)
      
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error)
      const errorMsg = language === 'en' 
        ? "An error occurred. Please try again."
        : "Une erreur est survenue. Veuillez réessayer."
      setValidationErrors([errorMsg])
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    
    if (validationErrors.length > 0) {
      setValidationErrors([])
    }
  }

  const today = new Date().toISOString().split("T")[0]

  return (
    <section id="booking" className="relative py-32 overflow-hidden">
      {/* Background ultra sophistiqué */}
      <div className="absolute inset-0">
        <div 
          style={{
            background: 'linear-gradient(to bottom, #000000 0%, rgba(26, 26, 26, 0.8) 50%, #000000 100%)'
          }}
          className="absolute inset-0"
        />
        
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                             radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
            backgroundSize: '150px 150px'
          }}
        />
        
        {/* Effet de lumière centrale */}
        <div 
          className="absolute rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '62.5rem',
            height: '37.5rem',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header premium */}
        <div className="text-center mb-16">
          <div 
            className="glass rounded-full border border-white-10 px-6 py-3 mb-8" 
            style={{ display: 'inline-flex', alignItems: 'end', gap: '0.5rem' }}
          >
            <span style={{ fontSize: '1rem', color: '#facc15' }}>👑</span>
            <span className="text-sm font-medium text-white-90 tracking-wide">{t('booking.badge')}</span>
          </div>
          
          <h2 className="font-display text-5xl md:text-7xl font-light text-gradient mb-6 tracking-tight">
            {t('booking.title')}
          </h2>
          
          <p className="font-body text-xl text-white-70 leading-relaxed mb-8 mx-auto" style={{ maxWidth: '48rem' }}>
            {t('booking.subtitle')}
            <br />
            <span className="text-white-50">{t('booking.subtitle2')}</span>
          </p>
        </div>

        <div className="mx-auto" style={{ maxWidth: '64rem' }}>
          <div className="glass border-0 shadow-2xl overflow-hidden rounded-2xl">
            {/* Header de carte premium */}
            <div className="relative p-8" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.05), transparent)' }}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-medium text-white mb-2">
                    {t('booking.form.title')}
                  </h3>
                  <p className="text-white-70 text-lg">
                    {t('booking.form.desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Affichage des erreurs premium */}
              {validationErrors.length > 0 && (
                <div className="mb-8 p-6 rounded-2xl border" style={{ background: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                  <div className="flex items-center mb-3" style={{ color: '#f87171' }}>
                    <span style={{ fontSize: '1.25rem', marginRight: '0.75rem' }}>⚠️</span>
                    <span className="font-semibold">
                      {language === 'en' 
                        ? 'Please correct the following information:'
                        : 'Veuillez corriger les informations suivantes :'
                      }
                    </span>
                  </div>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', color: '#fca5a5', fontSize: '0.875rem' }}>
                    {validationErrors.map((error, index) => (
                      <li key={index} style={{ marginBottom: '0.25rem' }}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Section 1: Informations personnelles */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '1rem' : '1.5rem' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="rounded-full flex items-center justify-center"
                      style={{
                        width: isMobile ? '1.5rem' : '2rem',
                        height: isMobile ? '1.5rem' : '2rem',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)'
                      }}
                    >
                      <span className={`text-white font-semibold ${isMobile ? 'text-xs' : 'text-sm'}`}>1</span>
                    </div>
                    <h3 className={`font-display ${isMobile ? 'text-lg' : 'text-xl'} text-white`}>
                      {t('form.section1')}
                    </h3>
                    <div 
                      style={{
                        flex: 1,
                        height: '1px',
                        background: 'linear-gradient(to right, rgba(255,255,255,0.2), transparent)'
                      }}
                    />
                  </div>

                  <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 md:grid-cols-2 gap-6'}`}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <label className="text-white-90 font-medium">{t('form.firstname')} *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder={t('form.firstname.placeholder')}
                        required
                        disabled={isSubmitting}
                        style={{ 
                          height: isMobile ? '48px' : '3rem',
                          fontSize: isMobile ? '16px' : '1rem',
                          padding: isMobile ? '1rem' : '0.75rem 1rem'
                        }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <label className="text-white-90 font-medium">{t('form.lastname')} *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder={t('form.lastname.placeholder')}
                        required
                        disabled={isSubmitting}
                        style={{ 
                          height: isMobile ? '48px' : '3rem',
                          fontSize: isMobile ? '16px' : '1rem',
                          padding: isMobile ? '1rem' : '0.75rem 1rem'
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <label className="text-white-90 font-medium">📞 {t('form.phone')} *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder={t('form.phone.placeholder')}
                        required
                        disabled={isSubmitting}
                        style={{ 
                          height: isMobile ? '48px' : '3rem',
                          fontSize: isMobile ? '16px' : '1rem',
                          padding: isMobile ? '1rem' : '0.75rem 1rem'
                        }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <label className="text-white-90 font-medium">📧 {t('form.email')} *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder={t('form.email.placeholder')}
                        required
                        disabled={isSubmitting}
                        style={{ 
                          height: isMobile ? '48px' : '3rem',
                          fontSize: isMobile ? '16px' : '1rem',
                          padding: isMobile ? '1rem' : '0.75rem 1rem'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Détails du service */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="rounded-full flex items-center justify-center"
                      style={{
                        width: '2rem',
                        height: '2rem',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)'
                      }}
                    >
                      <span className="text-white font-semibold text-sm">2</span>
                    </div>
                    <h3 className="font-display text-xl text-white">{t('form.section2')}</h3>
                    <div 
                      style={{
                        flex: 1,
                        height: '1px',
                        background: 'linear-gradient(to right, rgba(255,255,255,0.2), transparent)'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <label className="text-white-90 font-medium">{t('form.service')} *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleInputChange("service", e.target.value)}
                      required
                      disabled={isSubmitting}
                      style={{ height: '3rem' }}
                    >
                      <option value="">{t('form.service.placeholder')}</option>
                      <option value="wedding">{t('form.service.wedding')}</option>
                      <option value="airport">{t('form.service.airport')}</option>
                      <option value="events">{t('form.service.events')}</option>
                      <option value="tourism">{t('form.service.tourism')}</option>
                      <option value="custom">{t('form.service.custom')}</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <label className="text-white-90 font-medium">📅 {t('form.date')} *</label>
                      <input
                        type="date"
                        min={today}
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        required
                        disabled={isSubmitting}
                        style={{ height: '3rem' }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <label className="text-white-90 font-medium">🕐 {t('form.time')} *</label>
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange("time", e.target.value)}
                        required
                        disabled={isSubmitting}
                        style={{ height: '3rem' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Trajet */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="rounded-full flex items-center justify-center"
                      style={{
                        width: '2rem',
                        height: '2rem',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)'
                      }}
                    >
                      <span className="text-white font-semibold text-sm">3</span>
                    </div>
                    <h3 className="font-display text-xl text-white">{t('form.section3')}</h3>
                    <div 
                      style={{
                        flex: 1,
                        height: '1px',
                        background: 'linear-gradient(to right, rgba(255,255,255,0.2), transparent)'
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <label className="text-white-90 font-medium">🟢 {t('form.pickup')} *</label>
                      <input
                        type="text"
                        value={formData.pickup}
                        onChange={(e) => handleInputChange("pickup", e.target.value)}
                        placeholder={t('form.pickup.placeholder')}
                        required
                        disabled={isSubmitting}
                        style={{ 
                          height: isMobile ? '48px' : '3rem',
                          fontSize: isMobile ? '16px' : '1rem',
                          padding: isMobile ? '1rem' : '0.75rem 1rem'
                        }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <label className="text-white-90 font-medium">🔴 {t('form.destination')} *</label>
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) => handleInputChange("destination", e.target.value)}
                        placeholder={t('form.destination.placeholder')}
                        required
                        disabled={isSubmitting}
                        style={{ 
                          height: isMobile ? '48px' : '3rem',
                          fontSize: isMobile ? '16px' : '1rem',
                          padding: isMobile ? '1rem' : '0.75rem 1rem'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 4: Préférences */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="rounded-full flex items-center justify-center"
                      style={{
                        width: '2rem',
                        height: '2rem',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)'
                      }}
                    >
                      <span className="text-white font-semibold text-sm">4</span>
                    </div>
                    <h3 className="font-display text-xl text-white">{t('form.section4')}</h3>
                    <div 
                      style={{
                        flex: 1,
                        height: '1px',
                        background: 'linear-gradient(to right, rgba(255,255,255,0.2), transparent)'
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <label className="text-white-90 font-medium">👥 {t('form.passengers')} *</label>
                      <select
                        value={formData.passengers}
                        onChange={(e) => handleInputChange("passengers", e.target.value)}
                        required
                        disabled={isSubmitting}
                        style={{ height: '3rem' }}
                      >
                        <option value="">{t('form.passengers.placeholder')}</option>
                        <option value="1">{t('form.passengers.1')}</option>
                        <option value="2">{t('form.passengers.2')}</option>
                        <option value="3">{t('form.passengers.3')}</option>
                        <option value="4">{t('form.passengers.4')}</option>
                        <option value="5+">{t('form.passengers.5')}</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <label className="text-white-90 font-medium">🚗 {t('form.vehicle')}</label>
                      <select
                        value={formData.vehicle}
                        onChange={(e) => handleInputChange("vehicle", e.target.value)}
                        disabled={isSubmitting}
                        style={{ height: '3rem' }}
                      >
                        <option value="berline">{t('form.vehicle.sedan')}</option>
                        <option value="van">{t('form.vehicle.van')}</option>
                        <option value="luxe">{t('form.vehicle.luxury')}</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <label className="text-white-90 font-medium">✨ {t('form.message')}</label>
                    <textarea
                      placeholder={t('form.message.placeholder')}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      disabled={isSubmitting}
                      style={{ minHeight: '7.5rem', resize: 'none' }}
                    />
                  </div>
                </div>

                {/* Bouton de réservation premium */}
                <div style={{ paddingTop: '2rem' }}>
                  <button
                    type="submit"
                    id="confirm_btn"
                    className={`btn-primary rounded-2xl transition-all duration-500 shadow-2xl ${isMobile ? 'w-full py-4 text-base' : 'hover:scale-105'}`}
                    style={{
                      width: '100%',
                      height: isMobile ? '56px' : '4rem',
                      fontSize: isMobile ? '16px' : '1.125rem',
                      fontWeight: '600',
                      position: 'relative',
                      overflow: 'hidden',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                      color: '#000000',
                      minHeight: '48px'
                    }}
                    disabled={isSubmitting}
                  >
                    <span className="relative flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <span>{t('form.submitting')}</span>
                      ) : (
                        <span>{t('form.submit')}</span>
                      )}
                    </span>
                  </button>
                </div>
              </form>

              {/* Information WhatsApp premium */}
              <div className="mt-8 p-6 glass rounded-2xl border border-white-10">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span style={{ fontSize: '1.25rem', color: '#10b981' }}>💬</span>
                  <span className="font-semibold text-white">{t('form.whatsapp.title')}</span>
                </div>
                <p className="text-center text-white-70 leading-relaxed">
                  {t('form.whatsapp.desc1')}
                  <br />
                  <span className="text-white-50">{t('form.whatsapp.desc2')}</span>
                </p>
              </div>

              {/* Confirmation premium */}
              {showConfirmation && (
                <div 
                  className="mt-8 p-8 rounded-2xl border"
                  style={{ 
                    background: 'linear-gradient(to right, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1))',
                    borderColor: 'rgba(16, 185, 129, 0.2)',
                    animation: 'slideInFromTop 0.5s ease-out'
                  }}
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span style={{ fontSize: '2rem', color: '#10b981' }}>✅</span>
                    <span style={{ fontSize: '1.5rem', color: '#facc15' }}>👑</span>
                  </div>
                  <div className="text-center">
                    <h3 className="font-display text-2xl font-medium text-white mb-3">
                      {t('form.success.title')}
                    </h3>
                    <p className="text-white-80 leading-relaxed">
                      {t('form.success.desc1')}
                      <br />
                      <span className="text-white-60">{t('form.success.desc2')}</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}