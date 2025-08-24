"use client"

import { useLanguage } from "@/components/language-provider"
import { LanguageSelector } from "@/components/language-provider"
import { ArrowLeft, Shield, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function LegalNotices() {
  const { t, language } = useLanguage()

  return (
    <div className="min-h-screen bg-black">
      <LanguageSelector />
      
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(248, 247, 244, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(248, 247, 244, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container relative z-10">
          <Link href="/" className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>{language === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}</span>
          </Link>

          <div className="text-center">
            <div className="flex justify-center items-center gap-2 mb-6">
              <Shield className="w-6 h-6 text-white/60" />
              <span className="text-sm font-medium text-white/90 tracking-wide uppercase">
                {language === 'fr' ? 'Informations Légales' : 'Legal Information'}
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-light text-gradient mb-6 tracking-tight">
              {language === 'fr' ? 'Mentions Légales' : 'Legal Notices'}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16">
        <div className="container relative z-10 max-w-4xl">
          <div className="glass border-0 shadow-2xl overflow-hidden rounded-2xl p-8">
            
            {language === 'fr' ? (
              <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="font-display text-2xl font-medium text-white mb-6">Éditeur du Site</h2>
                <div className="bg-white/5 rounded-xl p-6 mb-8">
                  <p><strong>Raison sociale :</strong> Take&Moove SARL</p>
                  <p><strong>Forme juridique :</strong> Société à Responsabilité Limitée</p>
                  <p><strong>Capital social :</strong> 10 000 €</p>
                  <p><strong>SIRET :</strong> 123 456 789 00012</p>
                  <p><strong>APE/NAF :</strong> 4932Z - Transports de voyageurs par taxis</p>
                  <p><strong>TVA Intracommunautaire :</strong> FR12345678901</p>
                  <div className="flex items-start gap-3 mt-4">
                    <MapPin className="w-5 h-5 text-white/60 mt-1" />
                    <div>
                      <p><strong>Siège social :</strong></p>
                      <p>123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
                    </div>
                  </div>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Contact</h2>
                <div className="bg-white/5 rounded-xl p-6 mb-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-400" />
                    <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <p><strong>Email :</strong> contact@takemoove.fr</p>
                  </div>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Directeur de la Publication</h2>
                <div className="bg-white/5 rounded-xl p-6 mb-8">
                  <p><strong>Nom :</strong> [Nom du Gérant]</p>
                  <p><strong>Qualité :</strong> Gérant</p>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Hébergement</h2>
                <div className="bg-white/5 rounded-xl p-6 mb-8">
                  <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                  <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-white/80 hover:text-white">vercel.com</a></p>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Propriété Intellectuelle</h2>
                <div className="space-y-4 text-white/80">
                  <p>L'ensemble du contenu de ce site web (textes, images, logos, vidéos, éléments graphiques, etc.) est protégé par les dispositions du Code de la propriété intellectuelle et par les conventions internationales relatives au droit d'auteur.</p>
                  <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Take&Moove.</p>
                  <p>Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6 mt-8">Limitation de Responsabilité</h2>
                <div className="space-y-4 text-white/80">
                  <p>Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.</p>
                  <p>Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise possible.</p>
                  <p>Take&Moove ne saurait être tenu responsable de l'utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.</p>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6 mt-8">Données Personnelles</h2>
                <div className="space-y-4 text-white/80">
                  <p>En application de la loi du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, et du Règlement Général sur la Protection des Données (RGPD), vous disposez des droits d'opposition, d'accès et de rectification des données vous concernant.</p>
                  <p>Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@takemoove.fr</p>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6 mt-8">Droit Applicable</h2>
                <div className="space-y-4 text-white/80">
                  <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
                </div>
              </div>
            ) : (
              <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="font-display text-2xl font-medium text-white mb-6">Website Publisher</h2>
                <div className="bg-white/5 rounded-xl p-6 mb-8">
                  <p><strong>Company name:</strong> Take&Moove SARL</p>
                  <p><strong>Legal form:</strong> Limited Liability Company</p>
                  <p><strong>Share capital:</strong> €10,000</p>
                  <p><strong>SIRET:</strong> 123 456 789 00012</p>
                  <p><strong>APE/NAF:</strong> 4932Z - Passenger transport by taxi</p>
                  <p><strong>EU VAT number:</strong> FR12345678901</p>
                  <div className="flex items-start gap-3 mt-4">
                    <MapPin className="w-5 h-5 text-white/60 mt-1" />
                    <div>
                      <p><strong>Registered office:</strong></p>
                      <p>123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
                    </div>
                  </div>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Contact</h2>
                <div className="bg-white/5 rounded-xl p-6 mb-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-400" />
                    <p><strong>Phone:</strong> +33 1 23 45 67 89</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <p><strong>Email:</strong> contact@takemoove.fr</p>
                  </div>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Publication Director</h2>
                <div className="bg-white/5 rounded-xl p-6 mb-8">
                  <p><strong>Name:</strong> [Manager Name]</p>
                  <p><strong>Position:</strong> Manager</p>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Hosting</h2>
                <div className="bg-white/5 rounded-xl p-6 mb-8">
                  <p><strong>Host:</strong> Vercel Inc.</p>
                  <p><strong>Address:</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                  <p><strong>Website:</strong> <a href="https://vercel.com" className="text-white/80 hover:text-white">vercel.com</a></p>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Intellectual Property</h2>
                <div className="space-y-4 text-white/80">
                  <p>All content on this website (texts, images, logos, videos, graphic elements, etc.) is protected by intellectual property law and international copyright conventions.</p>
                  <p>Any reproduction, representation, modification, publication, adaptation of all or part of the site elements, regardless of the means or process used, is prohibited without prior written authorization from Take&Moove.</p>
                  <p>Any unauthorized use of the site or any of its elements will be considered as constituting counterfeiting and prosecuted in accordance with the provisions of articles L.335-2 et seq. of the Intellectual Property Code.</p>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6 mt-8">Limitation of Liability</h2>
                <div className="space-y-4 text-white/80">
                  <p>The information contained on this site is as accurate as possible and the site is periodically updated, but may nevertheless contain inaccuracies, omissions or gaps.</p>
                  <p>If you notice a gap, error or what appears to be a malfunction, please report it by email describing the problem as precisely as possible.</p>
                  <p>Take&Moove cannot be held responsible for the use made of this information, and any direct or indirect damage that may result from it.</p>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6 mt-8">Personal Data</h2>
                <div className="space-y-4 text-white/80">
                  <p>In application of the law of January 6, 1978 relating to computing, files and freedoms, and the General Data Protection Regulation (GDPR), you have rights of opposition, access and rectification of data concerning you.</p>
                  <p>To exercise these rights, you can contact us at: contact@takemoove.fr</p>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6 mt-8">Applicable Law</h2>
                <div className="space-y-4 text-white/80">
                  <p>These legal notices are governed by French law. In case of dispute, French courts will be solely competent.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}