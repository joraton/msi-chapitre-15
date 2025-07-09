'use client';

import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BarChart3, DollarSign, Settings, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ITScorecard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <BackToPlanButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 rounded-lg p-3">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                L'IT Scorecard
              </h1>
              <p className="text-gray-600">
                Tableau de bord équilibré pour la performance IT
              </p>
            </div>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-900 mb-3">
                Concept de l'IT Scorecard
              </h2>
              <p className="text-blue-800 leading-relaxed">
                Les dimensions fondamentales ont été conservées, mais les indicateurs ont été adaptés 
                pour prendre en compte les spécificités d'une DSI. L'IT Scorecard présente un équilibre 
                entre les indicateurs de coût, de valeur créée et de maîtrise des risques, se démarquant 
                d'une vision de l'informatique orientée uniquement centre de coût.
              </p>
            </div>
          </motion.div>

          {/* Dimension Financière */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                1. La dimension financière
              </h2>
            </div>
            <p className="text-gray-700 mb-6">
              Perspective financière - Attentes de la direction générale
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-green-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-green-900">
                      Objectif
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-green-900">
                      Exemples d'indicateurs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      Alignement stratégique du système d'information
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Typologie des projets SI selon le gain espéré</li>
                        <li>Niveau de maturité de la gestion du portefeuille de projets</li>
                        <li>Délais de mise en œuvre des projets</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      Maîtrise/réduction des coûts
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>% dépenses IT/CA</li>
                        <li>Évolution du budget IT (N/N-1 ; Réalisé/Budget)</li>
                        <li>TCO du poste de travail (Total Cost Ownership)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      Contribution à la création de valeur
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Identification et suivi des bénéfices attendus des projets</li>
                        <li>ROI moyen des projets</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      Maîtrise des risques
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Nombre d'incidents et gravité</li>
                        <li>Existence d'un plan de reprise d'activité</li>
                        <li>Niveau de sécurité du système d'information</li>
                        <li>Pérennité des choix technologiques</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Dimension Processus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Settings className="h-6 w-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                2. La dimension processus
              </h2>
            </div>
            <p className="text-gray-700 mb-6">
              Les indicateurs de processus doivent permettre d'animer la relation entre la DSI et les directions métiers.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-purple-900">
                      Objectif
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-purple-900">
                      Exemples d'indicateurs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      Optimisation des ressources informatiques
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Taux d'utilisation des serveurs</li>
                        <li>Taux d'utilisation des capacités de stockage</li>
                        <li>Niveau de standardisation des plateformes et des solutions technologiques</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      Performance opérationnelle
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Nombre d'incidents, gravité, temps de réponse</li>
                        <li>Disponibilité</li>
                        <li>Temps de réponse</li>
                        <li>Qualité du service assistance</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      Gestion des projets
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>% des projets respectant des méthodologies de qualité</li>
                        <li>% de projets livrés à temps</li>
                        <li>% des projets respectant les budgets</li>
                        <li>Délai moyen avant la mise en œuvre d'un projet</li>
                        <li>ROI réalisé/prévu sur projets livrés</li>
                        <li>% de projets innovants</li>
                        <li>Suivi des charges projets/budgets</li>
                        <li>Suivi avancement projets, respect des jalons</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      Externalisation/Sourcing
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Nombre de fournisseurs par technologie</li>
                        <li>Capacité à gérer l'offshore</li>
                        <li>Suivi des fournisseurs (coûts, respect des SLA)</li>
                        <li>Connaissance du marché et choix de solutions (SaaS, hébergement)</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Dimension Client */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                3. La dimension client
              </h2>
            </div>
            <p className="text-gray-700 mb-6">
              Les clients sont définis non pas comme les partenaires à qui l'on propose des ventes, 
              mais, de façon plus générale, comme les utilisateurs du SI.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">
                      Objectif
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">
                      Exemples d'indicateurs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      Performance du Run (exploitation - service delivery)
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Disponibilité des applications</li>
                        <li>Temps de réponse</li>
                        <li>Nombre d'incidents</li>
                        <li>Temps de résolution</li>
                        <li>Impact des incidents sur le métier (Coût/CA)</li>
                        <li>Coût du service</li>
                        <li>Indice satisfaction utilisateurs</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      Performance du Build (gestion des projets)
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Fréquence des réunions DSI/métier</li>
                        <li>Respect des engagements de coûts, qualité, délais sur les projets</li>
                        <li>Taux d'utilisation des nouvelles applications et satisfaction</li>
                        <li>CA généré par les nouveaux projets</li>
                        <li>Nombre de projets en attente</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      Qualité de la relation avec les métiers
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Fréquence des comités de pilotage métiers</li>
                        <li>Niveau de satisfaction des métiers/DSI</li>
                        <li>Capacité à proposer des innovations</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Dimension Apprentissage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                4. La dimension apprentissage
              </h2>
            </div>
            <p className="text-gray-700 mb-6">
              Cette dimension introduit un aspect à long terme.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-orange-900">
                      Objectif
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-orange-900">
                      Exemples d'indicateurs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      Qualité des méthodes, outils, processus
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Degré de déploiement des référentiels ITIL, CMMI, ISO, PMO</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      Compétence du personnel IT
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Nombre de formations suivies</li>
                        <li>Turnover</li>
                        <li>Langages, techniques maîtrisées</li>
                        <li>Indice de satisfaction</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      Infrastructure IT
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Existence d'un plan d'architecture, d'un plan directeur</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      Veille technologique
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>% du budget dédié aux études, à la veille technologique</li>
                        <li>Nombre de participations à des salons professionnels</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-50 rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Conclusion sur l'IT Scorecard
            </h3>
            <p className="text-gray-700 leading-relaxed">
              La performance, si elle reste un préalable, n'est souvent qu'une promesse : seul un usage 
              du service proposé permet d'en vérifier la réalité et l'étendue. C'est dans ce contexte que 
              les contrats de niveaux de services vont prendre tout leur sens : permettre de contractualiser 
              la performance de façon à responsabiliser les acteurs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}