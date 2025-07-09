'use client';

import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Settings, BarChart, Target, Wrench, Award, DollarSign, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Section2() {
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
            <div className="bg-purple-100 rounded-lg p-3">
              <Settings className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Section II : Les outils de suivi de la performance
              </h1>
              <p className="text-gray-600">
                Tableaux de bord et indicateurs de performance
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Tableaux de bord */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <BarChart className="h-6 w-6 text-blue-600" />
                A. Les tableaux de bord
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <p className="text-blue-800">
                  Le principe des tableaux de bord est de proposer un outil de pilotage 
                  récapitulant les principaux indicateurs utiles au pilotage. La valeur et 
                  l&apos;utilité d&apos;un tableau de bord reposent sur la pertinence et la qualité 
                  des indicateurs dont il est constitué.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Les trois types d&apos;indicateurs
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6"
                >
                  <div className="bg-green-100 rounded-full p-3 w-fit mb-4">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-green-900 mb-3">
                    Indicateurs de performance
                  </h4>
                  <p className="text-green-800 text-sm mb-3">
                    Traduisent l&apos;aptitude à atteindre un objectif
                  </p>
                  <div className="bg-white rounded p-3">
                    <p className="text-xs text-green-700">
                      <strong>Exemple :</strong> 80% des logiciels doivent être de type libre à 5 ans
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-blue-50 border border-blue-200 rounded-lg p-6"
                >
                  <div className="bg-blue-100 rounded-full p-3 w-fit mb-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-3">
                    Indicateurs de qualité
                  </h4>
                  <p className="text-blue-800 text-sm mb-3">
                    Traduisent l&apos;aptitude à apporter satisfaction
                  </p>
                  <div className="bg-white rounded p-3">
                    <p className="text-xs text-blue-700">
                      <strong>Exemple :</strong> Moins d&apos;un plantage pour 2 000 lancements
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-purple-50 border border-purple-200 rounded-lg p-6"
                >
                  <div className="bg-purple-100 rounded-full p-3 w-fit mb-4">
                    <Wrench className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-purple-900 mb-3">
                    Indicateurs de moyen
                  </h4>
                  <p className="text-purple-800 text-sm mb-3">
                    Indirects, permettent d&apos;obtenir performance ou qualité
                  </p>
                  <div className="bg-white rounded p-3">
                    <p className="text-xs text-purple-700">
                      <strong>Exemple :</strong> Taux d&apos;erreur de saisie de 1% → formations
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <h4 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  KPI (Key Performance Indicator)
                </h4>
                <p className="text-yellow-800">
                  Les indicateurs pertinents sont souvent désignés par leur expression anglaise : 
                  KPI (Key Performance Indicator). Ce sont les métriques clés qui permettent 
                  de mesurer l&apos;efficacité d&apos;une organisation.
                </p>
              </div>
            </section>

            {/* Tableau de bord standard */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Le tableau de bord &quot;standard&quot; de la direction informatique
              </h2>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-indigo-900 mb-6 flex items-center gap-3">
                  <DollarSign className="h-6 w-6" />
                  Le budget / les coûts
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Coûts globaux
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                          Le budget/coût informatique total
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                          Dépense informatique vs CA/VA
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Coûts par unité
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Dépense informatique par salarié
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Dépense par informaticien
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Dépense par unité de production
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Répartition des dépenses informatiques
                    </h4>
                    <div className="space-y-3">
                      {[
                        { label: 'Matériel', color: 'bg-blue-500', percentage: '25%' },
                        { label: 'Logiciel', color: 'bg-green-500', percentage: '20%' },
                        { label: 'Personnel', color: 'bg-purple-500', percentage: '35%' },
                        { label: 'Réseau', color: 'bg-orange-500', percentage: '10%' },
                        { label: 'Formation', color: 'bg-red-500', percentage: '5%' },
                        { label: 'Sous-traitance', color: 'bg-yellow-500', percentage: '5%' }
                      ].map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-4 h-4 ${item.color} rounded`}></div>
                          <span className="text-sm text-gray-700 flex-1">{item.label}</span>
                          <span className="text-sm font-medium text-gray-900">{item.percentage}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Moyens mnémotechniques */}
            <section>
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-pink-900 mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Moyens mnémotechniques
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-pink-900 mb-3">
                      Acronyme PQM pour les indicateurs
                    </h4>
                    <ul className="space-y-2 text-pink-800">
                      <li><strong>P</strong>erformance (atteindre l&apos;objectif)</li>
                      <li><strong>Q</strong>ualité (apporter satisfaction)</li>
                      <li><strong>M</strong>oyen (ressources indirectes)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-pink-900 mb-3">
                      Phrase mémo pour la performance technique
                    </h4>
                    <p className="text-pink-800 italic">
                      &quot;<strong>T</strong>emps <strong>S</strong>calable <strong>D</strong>isponible <strong>R</strong>obuste <strong>B</strong>ande&quot;
                    </p>
                    <p className="text-xs text-pink-600 mt-2">
                      (Temps de réponse, Scalabilité, Disponibilité, Robustesse, Bande passante)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tableaux de bord spécialisés */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-600" />
                Les tableaux de bord pour suivre la DSI
              </h2>
              
              <div className="space-y-6">
                {/* Relation utilisateur */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">
                    1. La relation utilisateur
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Ce service concerne l'assistance, le plus souvent avec une première étape à distance 
                    et une seconde phase avec déplacement.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-blue-300">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-blue-300 px-4 py-3 text-left font-semibold text-blue-900">
                            Indicateur
                          </th>
                          <th className="border border-blue-300 px-4 py-3 text-left font-semibold text-blue-900">
                            Utilité
                          </th>
                          <th className="border border-blue-300 px-4 py-3 text-left font-semibold text-blue-900">
                            Commentaires
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-blue-300 px-4 py-3 font-medium">
                            Nombre d'appels arrivant au service d'assistance
                          </td>
                          <td className="border border-blue-300 px-4 py-3">
                            Connaître le volume à traiter, dimensionner les équipes
                          </td>
                          <td className="border border-blue-300 px-4 py-3">
                            La fréquence peut être forte et on peut distinguer par direction métier
                          </td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-300 px-4 py-3 font-medium">
                            % des problèmes résolus au premier appel
                          </td>
                          <td className="border border-blue-300 px-4 py-3">
                            Indicateur majeur de performance et d'efficience
                          </td>
                          <td className="border border-blue-300 px-4 py-3">
                            À distinguer par technicien
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-blue-300 px-4 py-3 font-medium">
                            Délai de résolution des problèmes
                          </td>
                          <td className="border border-blue-300 px-4 py-3">
                            Indicateur d'efficacité et préalable à la satisfaction des utilisateurs
                          </td>
                          <td className="border border-blue-300 px-4 py-3">
                            Mesure critique pour la satisfaction
                          </td>
                        </tr>
                        <tr className="bg-blue-25">
                          <td className="border border-blue-300 px-4 py-3 font-medium">
                            Indice de satisfaction des utilisateurs
                          </td>
                          <td className="border border-blue-300 px-4 py-3">
                            Un incontournable de tout tableau de bord
                          </td>
                          <td className="border border-blue-300 px-4 py-3">
                            Sous forme d'échelle numérique, de note, de smiley. Une note sur 5 est devenue un standard
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Exploitation */}
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">
                    2. Le cas de l'exploitation (RUN)
                  </h3>
                  <p className="text-green-800 mb-4">
                    L'exploitation correspond au RUN et constitue le préalable à l'usage du SI.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <Zap className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="font-medium text-green-900">Nombre de connexions</div>
                          <div className="text-sm text-green-700">Aux serveurs et bases de données</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <Target className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="font-medium text-green-900">Taux de disponibilité</div>
                          <div className="text-sm text-green-700">L'indicateur par excellence</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <BarChart className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="font-medium text-green-900">Charge des serveurs</div>
                          <div className="text-sm text-green-700">% de capacité processeur utilisée</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <Settings className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="font-medium text-green-900">Nombre de pannes</div>
                          <div className="text-sm text-green-700">Par serveur, par base de données</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <Award className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="font-medium text-green-900">% sauvegardes correctes</div>
                          <div className="text-sm text-green-700">Fiabilité des procédures</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <DollarSign className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="font-medium text-green-900">Usage du SI</div>
                          <div className="text-sm text-green-700">Pages consultées, mails traités</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Points clés à retenir */}
            <section>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center">
                  Points clés à retenir
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Tableaux de bord</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Outils de pilotage essentiels</li>
                      <li>• Qualité = pertinence des indicateurs</li>
                      <li>• 3 types : Performance, Qualité, Moyen</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">KPI informatiques</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Budget et coûts par unité</li>
                      <li>• Répartition des dépenses</li>
                      <li>• Tableaux spécialisés DSI</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}