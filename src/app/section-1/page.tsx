'use client';

import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BarChart3, Globe, Cpu, Database, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Section1() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BackToPlanButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 rounded-lg p-3">
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Section I : La notion de performance
              </h1>
              <p className="text-gray-600">
                Performance globale, technique et qualité informationnelle
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Performance Globale */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Globe className="h-6 w-6 text-blue-600" />
                A. La performance globale
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-blue-800">
                  La mesure de la performance du système d&apos;information est complexe, car 
                  elle dépend du point de vue de la personne concernée : technicien, 
                  utilisateur, direction générale.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Modèle de DeLone et McLean : 6 éléments essentiels
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  { title: 'Qualité du système', desc: 'Fiabilité, facilité d&apos;utilisation', color: 'blue' },
                  { title: 'Qualité de l&apos;information', desc: 'Précision, actualité, complétude', color: 'green' },
                  { title: 'Qualité du service', desc: 'Support, formation, assistance', color: 'purple' },
                  { title: 'Intention d&apos;utiliser', desc: 'Volonté d&apos;adoption du système', color: 'orange' },
                  { title: 'Utilisation', desc: 'Usage effectif du système', color: 'red' },
                  { title: 'Satisfaction utilisateur', desc: 'Contentement des utilisateurs', color: 'pink' }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-${item.color}-50 border border-${item.color}-200 rounded-lg p-4`}
                  >
                    <h4 className={`font-semibold text-${item.color}-900 mb-2`}>
                      {item.title}
                    </h4>
                    <p className={`text-${item.color}-700 text-sm`}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <h4 className="font-semibold text-yellow-900 mb-2">
                  Critères d&apos;un bon instrument de mesure
                </h4>
                <ul className="space-y-2 text-yellow-800">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                    <strong>Fiable :</strong> il mesure sans erreurs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                    <strong>Pertinent :</strong> il mesure bien ce qu&apos;il est censé mesurer
                  </li>
                </ul>
              </div>
            </section>

            {/* Performance Technique */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Cpu className="h-6 w-6 text-purple-600" />
                B. La performance technique
              </h2>
              
              <p className="text-gray-700 mb-6">
                Cette forme de performance correspond à l&apos;infrastructure technologique, 
                et elle est le préalable à tout le reste.
              </p>

              <div className="space-y-6">
                {/* Temps de réponse */}
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-purple-900 mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    1. Le temps de réponse
                  </h3>
                  <p className="text-purple-800 mb-4">
                    Durée entre la sollicitation du SI et la réponse pour l&apos;utilisateur. 
                    Il découle de l&apos;empilement des éléments constituant l&apos;architecture.
                  </p>
                  <div className="bg-white rounded p-4">
                    <p className="text-sm text-purple-700">
                      <strong>Important :</strong> Le calcul doit tenir compte de la latence 
                      liée au réseau (délai entre sollicitation et effectivité du résultat).
                    </p>
                  </div>
                </div>

                {/* Scalabilité */}
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    2. La capacité à monter en charge (Scalabilité)
                  </h3>
                  <p className="text-green-800 mb-4">
                    Temps de réponse attendu pour traiter une demande supplémentaire significative.
                  </p>
                  <div className="bg-white rounded p-4 mb-4">
                    <h4 className="font-semibold text-green-900 mb-2">Exemples concrets :</h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• 100 demandes traitées en 3 secondes</li>
                      <li>• 10 000 factures supplémentaires en 2 heures</li>
                    </ul>
                  </div>
                  <div className="bg-blue-100 rounded p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Solution moderne :</strong> Recours aux offres externalisées 
                      (datacenter, cloud computing) pour une scalabilité immédiate.
                    </p>
                  </div>
                </div>

                {/* Disponibilité */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    3. La disponibilité
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Pourcentage de temps durant lequel un SI est apte à fonctionner.
                  </p>
                  <div className="bg-white rounded p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        Disponibilité = UT / (UT + DT) × 100
                      </div>
                      <p className="text-sm text-blue-700">
                        UT = Uptime (temps de marche) | DT = Downtime (temps d&apos;arrêt)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Robustesse et Bande passante */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-red-900 mb-3">
                      4. La robustesse
                    </h3>
                    <p className="text-red-800 mb-3">
                      Aptitude à ne pas perdre ou corrompre des données lors de sollicitations élevées.
                    </p>
                    <div className="bg-white rounded p-3">
                      <p className="text-sm text-red-700">
                        Ex: 1 message perdu / 100 000 envois
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-orange-900 mb-3">
                      5. La bande passante
                    </h3>
                    <p className="text-orange-800 mb-3">
                      Quantité de données transférables simultanément sur une voie de transmission.
                    </p>
                    <div className="bg-white rounded p-3">
                      <p className="text-sm text-orange-700">
                        Mesure : transfert binaire par seconde
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Qualité informationnelle */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                C. La qualité informationnelle
              </h2>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Cette qualité repose sur la présence d&apos;une série de critères, 
                  permettant d&apos;obtenir une information répondant aux besoins.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    'Exactitude', 'Complétude', 'Actualité', 'Pertinence',
                    'Cohérence', 'Accessibilité', 'Sécurité', 'Traçabilité'
                  ].map((critere, index) => (
                    <motion.div
                      key={critere}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white rounded p-3 text-center shadow-sm"
                    >
                      <span className="text-sm font-medium text-indigo-700">
                        {critere}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}