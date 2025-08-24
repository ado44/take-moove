import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"
import { LanguageSelector } from "@/components/language-provider"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <LanguageSelector />
      <HeroSection />
      <ServicesSection />
      <BookingForm />
      <Footer />
    </main>
  )
}