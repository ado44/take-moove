"use client"

import { useLanguage } from "@/components/language-provider"
import { LanguageSelector } from "@/components/language-provider"
import { ArrowLeft, Lock, Shield, Eye, Database, UserCheck, Mail } from "lucide-react"
import Link from "next/link"

export function PrivacyPolicy() {
  const { language } = useLanguage()

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
              <Lock className="w-6 h-6 text-green-400" />
              <span className="text-sm font-medium text-white/90 tracking-wide uppercase">
                {language === 'fr' ? 'Protection des Données' : 'Data Protection'}
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-light text-gradient mb-6 tracking-tight">
              {language === 'fr' ? 'Confidentialité' : 'Privacy Policy'}
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
                <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display text-xl font-medium text-white mb-2">Votre vie privée est notre priorité</h3>
                      <p className="text-white/80">Take&Moove s'engage à protéger vos données personnelles conformément au RGPD et aux meilleures pratiques de sécurité.</p>
                    </div>
                  </div>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6 flex items-center gap-3">
                  <Database className="w-6 h-6 text-blue-400" />
                  Données Collectées
                </h2>
                <div className="space-y-4 text-white/80 mb-8">
                  <h3 className="text-lg font-medium text-white">Données d'identification :</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• Prénom et nom</li>
                    <li>• Adresse email</li>
                    <li>• Numéro de téléphone</li>
                    <li>• Adresses de prise en charge et destination</li>
                  </ul>
                  
                  <h3 className="text-lg font-medium text-white mt-6">Données de service :</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• Type de service demandé</li>
                    <li>• Date et heure de service</li>
                    <li>• Nombre de passagers</li>
                    <li>• Préférences spéciales</li>
                  </ul>
                  
                  <h3 className="text-lg font-medium text-white mt-6">Données techniques :</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• Adresse IP</li>
                    <li>• Type de navigateur</li>
                    <li>• Données de navigation anonymisées</li>
                  </ul>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-yellow-400" />
                  Utilisation des Données
                </h2>
                <div className="bg-white/5 rounded-xl p-6 mb-8">
                  <p className="text-white/80 mb-4">Vos données sont utilisées exclusivement pour :</p>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start gap-3">
                      <UserCheck className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Traiter et confirmer vos réservations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Communiquer avec vous concernant votre service</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Améliorer la qualité de nos services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>Respecter nos obligations légales</span>
                    </li>
                  </ul>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Conservation des Données</h2>
                <div className="space-y-4 text-white/80 mb-8">
                  <p>Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :</p>
                  <ul className="space-y-2 ml-6">
                    <li>• <strong>Données de réservation :</strong> 3 ans après la prestation</li>
                    <li>• <strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
                    <li>• <strong>Données de navigation :</strong> 13 mois maximum</li>
                  </ul>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Vos Droits RGPD</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-medium text-white mb-3">Droit d'accès</h3>
                    <p className="text-white/70 text-sm">Demandez une copie de toutes vos données personnelles que nous détenons.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-medium text-white mb-3">Droit de rectification</h3>
                    <p className="text-white/70 text-sm">Corrigez les données inexactes ou incomplètes vous concernant.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-medium text-white mb-3">Droit d'effacement</h3>
                    <p className="text-white/70 text-sm">Demandez la suppression de vos données dans certaines conditions.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-medium text-white mb-3">Droit à la portabilité</h3>
                    <p className="text-white/70 text-sm">Récupérez vos données dans un format structuré et lisible.</p>
                  </div>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Partage des Données</h2>
                <div className="space-y-4 text-white/80 mb-8">
                  <p>Take&Moove ne vend, ne loue, ni ne partage vos données personnelles avec des tiers, sauf dans les cas suivants :</p>
                  <ul className="space-y-2 ml-6">
                    <li>• <strong>Prestataires techniques :</strong> Uniquement pour la fourniture du service (hébergement, maintenance)</li>
                    <li>• <strong>Obligations légales :</strong> Sur demande des autorités compétentes</li>
                    <li>• <strong>Votre consentement explicite :</strong> Avec votre autorisation préalable</li>
                  </ul>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Sécurité des Données</h2>
                <div className="bg-white/5 rounded-xl p-6 mb-8">
                  <p className="text-white/80 mb-4">Nous mettons en œuvre des mesures de sécurité robustes :</p>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Chiffrement SSL/TLS pour toutes les communications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Accès aux données strictement limité et contrôlé</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Sauvegardes sécurisées et chiffrées</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <UserCheck className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span>Formation continue du personnel aux bonnes pratiques</span>
                    </li>
                  </ul>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Cookies et Traceurs</h2>
                <div className="space-y-4 text-white/80 mb-8">
                  <p>Notre site utilise des cookies pour améliorer votre expérience :</p>
                  <ul className="space-y-2 ml-6">
                    <li>• <strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                    <li>• <strong>Cookies de préférence :</strong> Mémorisation de vos choix (langue, etc.)</li>
                    <li>• <strong>Cookies analytiques :</strong> Amélioration de nos services (anonymisés)</li>
                  </ul>
                  <p className="mt-4">Vous pouvez gérer vos préférences de cookies à tout moment dans les paramètres de votre navigateur.</p>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Modifications de la Politique</h2>
                <div className="space-y-4 text-white/80 mb-8">
                  <p>Cette politique de confidentialité peut être mise à jour pour refléter les changements dans nos pratiques ou pour des raisons légales et réglementaires.</p>
                  <p>Nous vous informerons de toute modification significative par email ou via une notification sur notre site.</p>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Contact DPO</h2>
                <div className="bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl p-6 mb-8">
                  <p className="text-white/80 mb-4">Pour exercer vos droits ou pour toute question concernant cette politique :</p>
                  <div className="space-y-2 text-white">
                    <p><strong>Délégué à la Protection des Données :</strong></p>
                    <p><strong>Email :</strong> dpo@takemoove.fr</p>
                    <p><strong>Courrier :</strong> Take&Moove - DPO<br />123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
                    <p className="text-white/60 text-sm mt-4">Réponse garantie sous 30 jours ouvrés</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-xl p-6">
                  <p className="text-white/80 text-center">
                    <strong>Dernière mise à jour :</strong> Août 2024<br />
                    <span className="text-white/60">Cette politique est régulièrement mise à jour pour garantir votre protection optimale.</span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-display text-xl font-medium text-white mb-2">Your privacy is our priority</h3>
                      <p className="text-white/80">Take&Moove is committed to protecting your personal data in accordance with GDPR and security best practices.</p>
                    </div>
                  </div>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6 flex items-center gap-3">
                  <Database className="w-6 h-6 text-blue-400" />
                  Data Collected
                </h2>
                <div className="space-y-4 text-white/80 mb-8">
                  <h3 className="text-lg font-medium text-white">Identification data:</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• First and last name</li>
                    <li>• Email address</li>
                    <li>• Phone number</li>
                    <li>• Pickup and destination addresses</li>
                  </ul>
                  
                  <h3 className="text-lg font-medium text-white mt-6">Service data:</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• Type of service requested</li>
                    <li>• Date and time of service</li>
                    <li>• Number of passengers</li>
                    <li>• Special preferences</li>
                  </ul>
                  
                  <h3 className="text-lg font-medium text-white mt-6">Technical data:</h3>
                  <ul className="space-y-2 ml-6">
                    <li>• IP address</li>
                    <li>• Browser type</li>
                    <li>• Anonymized browsing data</li>
                  </ul>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-yellow-400" />
                  Data Usage
                </h2>
                <div className="bg-white/5 rounded-xl p-6 mb-8">
                  <p className="text-white/80 mb-4">Your data is used exclusively to:</p>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start gap-3">
                      <UserCheck className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>Process and confirm your bookings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Communicate with you regarding your service</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Improve the quality of our services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>Comply with our legal obligations</span>
                    </li>
                  </ul>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Data Retention</h2>
                <div className="space-y-4 text-white/80 mb-8">
                  <p>We retain your personal data only for the time necessary for the purposes for which it was collected:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• <strong>Booking data:</strong> 3 years after service</li>
                    <li>• <strong>Billing data:</strong> 10 years (legal obligation)</li>
                    <li>• <strong>Browsing data:</strong> Maximum 13 months</li>
                  </ul>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Your GDPR Rights</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-medium text-white mb-3">Right of access</h3>
                    <p className="text-white/70 text-sm">Request a copy of all your personal data we hold.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-medium text-white mb-3">Right to rectification</h3>
                    <p className="text-white/70 text-sm">Correct inaccurate or incomplete data concerning you.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-medium text-white mb-3">Right to erasure</h3>
                    <p className="text-white/70 text-sm">Request deletion of your data under certain conditions.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="font-medium text-white mb-3">Right to portability</h3>
                    <p className="text-white/70 text-sm">Retrieve your data in a structured and readable format.</p>
                  </div>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Data Sharing</h2>
                <div className="space-y-4 text-white/80 mb-8">
                  <p>Take&Moove does not sell, rent, or share your personal data with third parties, except in the following cases:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• <strong>Technical providers:</strong> Only for service provision (hosting, maintenance)</li>
                    <li>• <strong>Legal obligations:</strong> Upon request from competent authorities</li>
                    <li>• <strong>Your explicit consent:</strong> With your prior authorization</li>
                  </ul>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Data Security</h2>
                <div className="bg-white/5 rounded-xl p-6 mb-8">
                  <p className="text-white/80 mb-4">We implement robust security measures:</p>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>SSL/TLS encryption for all communications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Strictly limited and controlled data access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Secure and encrypted backups</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <UserCheck className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span>Continuous staff training on best practices</span>
                    </li>
                  </ul>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Cookies and Trackers</h2>
                <div className="space-y-4 text-white/80 mb-8">
                  <p>Our site uses cookies to improve your experience:</p>
                  <ul className="space-y-2 ml-6">
                    <li>• <strong>Essential cookies:</strong> Necessary for site functionality</li>
                    <li>• <strong>Preference cookies:</strong> Remember your choices (language, etc.)</li>
                    <li>• <strong>Analytical cookies:</strong> Service improvement (anonymized)</li>
                  </ul>
                  <p className="mt-4">You can manage your cookie preferences at any time in your browser settings.</p>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">Policy Changes</h2>
                <div className="space-y-4 text-white/80 mb-8">
                  <p>This privacy policy may be updated to reflect changes in our practices or for legal and regulatory reasons.</p>
                  <p>We will inform you of any significant changes by email or via a notification on our site.</p>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mb-6">DPO Contact</h2>
                <div className="bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl p-6 mb-8">
                  <p className="text-white/80 mb-4">To exercise your rights or for any questions regarding this policy:</p>
                  <div className="space-y-2 text-white">
                    <p><strong>Data Protection Officer:</strong></p>
                    <p><strong>Email:</strong> dpo@takemoove.fr</p>
                    <p><strong>Mail:</strong> Take&Moove - DPO<br />123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
                    <p className="text-white/60 text-sm mt-4">Response guaranteed within 30 business days</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-xl p-6">
                  <p className="text-white/80 text-center">
                    <strong>Last updated:</strong> August 2024<br />
                    <span className="text-white/60">This policy is regularly updated to ensure your optimal protection.</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}