'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { Award, FileText, CheckCircle, Eye, EyeOff, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';

interface Exercise {
  id: number;
  title: string;
  context: string;
  question: string;
  correction: string[];
  tips: string[];
  methodology: string[];
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "DSCG 2023 - Sécurité du SI et Loi de Finances",
    context: "Le Dossier 3 – IMPACT DE LA NOUVELLE LOI DE FINANCES 2024-2026 aborde les impacts de la nouvelle loi de finances sur le SI Achat, notamment en termes de sécurité. Les données sensibles et stratégiques de l'entreprise, en l'occurrence les factures, seront publiées et récupérées sur une plateforme externe à l'entreprise.",
    question: "Concernant la sécurité du Système d'Information, décrire au moins 3 points d'attention que la DSI (Direction des Systèmes d'Information) doit intégrer dans le cadre de la mise en œuvre de la nouvelle loi de finances 2024-2026.",
    correction: [
      "1. Sécurité de contrôle d'accès :",
      "• Les données sensibles seront publiées sur une plateforme externe",
      "• Nécessité de sécuriser l'accès pour garantir la pérennité",
      "• Éviter l'usurpation de profil et le vol de données",
      "• Protection contre arnaque au RIB, fausses factures, phishing",
      "",
      "2. Confidentialité des informations :",
      "• Conservation de l'organisation des permissions d'accès",
      "• Habilitations uniquement des personnes autorisées",
      "• Non-divulgation des informations confidentielles des factures",
      "",
      "3. Autonomie et conservation de l'intégrité des données :",
      "• Production de tous les documents pendant la durée légale",
      "• Solution de GED pour garantir l'intégrité des factures",
      "• Pas de reprise d'historique sur la PFF",
      "",
      "4. Conformité RGPD :",
      "• Responsabilité de l'entreprise sur les factures PFF/PDP",
      "• Application des processus RGPD (anonymisation, droit à l'oubli)",
      "",
      "5. Haute disponibilité des flux :",
      "• Flux critique pour le chiffre d'affaires",
      "• Éviter les pénalités et pertes d'escomptes",
      "• Niveau de haute disponibilité requis"
    ],
    tips: [
      "Identifier tous les risques liés à l'externalisation des données",
      "Penser aux aspects réglementaires (RGPD, conservation légale)",
      "Considérer l'impact business de la non-disponibilité"
    ],
    methodology: [
      "1. Analyser les nouveaux flux de données",
      "2. Identifier les risques de sécurité spécifiques",
      "3. Définir les mesures de protection adaptées",
      "4. Assurer la conformité réglementaire"
    ]
  },
  {
    id: 2,
    title: "DSCG 2022 - Facteurs clés de succès transformation DSI",
    context: "Le Dossier 1 – CONSTRUCTION DU SYSTÈME D'INFORMATION porte sur la réorganisation des DSI du groupe SD3i et l'indépendance de la société DIGITAL INTEGRATION. Cette transformation majeure nécessite une approche méthodique pour garantir le succès.",
    question: "Définir pour ce projet deux facteurs clés de succès pour réussir cette transformation.",
    correction: [
      "1. Gouvernance bien définie et validée :",
      "• Validation par les différentes directions générales",
      "• Définition d'un nouveau schéma directeur pour les DSI",
      "• Structure de pilotage claire et responsabilités définies",
      "",
      "2. Analyse et audit correctement menés :",
      "• Base d'une bonne définition du projet de transformation",
      "• Diagnostic précis de l'existant",
      "• Identification des enjeux et contraintes",
      "",
      "3. Coopération des différentes entités :",
      "• Indispensable pour réussir sans perte de valeur",
      "• Coordination entre les entités du groupe SD3I",
      "",
      "4. Communication à l'ensemble des acteurs :",
      "• Anticipation des conduites de changement",
      "• Information sur les procédures et évolutions",
      "",
      "5. Qualité de prestation des intervenants :",
      "• Choix selon expériences et compétences",
      "• Sélection des prestataires et fournisseurs SI",
      "",
      "6. Adhésion des utilisateurs finaux :",
      "• Acceptation de la nouvelle organisation SI",
      "• Définition des nouveaux rôles",
      "",
      "7. Respect du planning et bonnes pratiques :",
      "• Suivi des délais imposés par la direction",
      "• Application des référentiels comme ITIL"
    ],
    tips: [
      "Prioriser les facteurs selon l'impact sur le projet",
      "Considérer les aspects humains et techniques",
      "S'appuyer sur les référentiels reconnus (ITIL, COBIT)"
    ],
    methodology: [
      "1. Identifier les enjeux critiques du projet",
      "2. Analyser les facteurs de risque",
      "3. Définir les conditions de réussite",
      "4. Mettre en place les dispositifs de suivi"
    ]
  },
  {
    id: 3,
    title: "DSCG 2021 - Indicateurs de coût du SI",
    context: "Le Dossier 1 – SCHÉMA DIRECTEUR DU SYSTÈME D'INFORMATION demande de décrire les organisations possibles du SI pour la future Direction des Systèmes d'information suite à la fusion de trois organismes de logement social et d'établir un schéma directeur de cette transformation.",
    question: "Vous proposerez deux indicateurs de coût du Système d'Information que vous définirez et caractériserez simplement.",
    correction: [
      "1. Coût des infrastructures SI (€ par période) :",
      "• Coût interne ou externe de fourniture d'infrastructure",
      "• Serveurs, postes informatiques, imprimantes, réseaux",
      "• Coût récurrent de remplacement des infrastructures",
      "• Permet de mesurer l'investissement matériel",
      "",
      "2. Coût de la maintenance du SI (€ par année) :",
      "• Montants de maintenance interne et externe",
      "• Coûts des éditeurs et ESN (maintenance évolutive/corrective)",
      "• Indicateur de la charge opérationnelle",
      "",
      "3. Coûts de disponibilité :",
      "• Coût de perte de service par période",
      "• Coût de garantie de disponibilité avant pénalité",
      "• Coût du PCA/PRA pour améliorer la disponibilité",
      "",
      "4. Ressources humaines liées à la DSI :",
      "• Évaluation en ETP par valeur moyenne de coût",
      "• Coût en € par année des collaborateurs internes/externes",
      "",
      "5. Valorisation du SI :",
      "• Estimation en € de la valeur du SI",
      "• Approximation par le coût de remplacement total",
      "",
      "6. Valeur d'amortissement du SI :",
      "• En € par année ou % de la valorisation",
      "• Valeur déduite dans le bilan annuellement"
    ],
    tips: [
      "Distinguer les coûts d'investissement et de fonctionnement",
      "Inclure les coûts directs et indirects",
      "Prévoir les coûts de risque (indisponibilité, sécurité)"
    ],
    methodology: [
      "1. Identifier toutes les composantes de coût",
      "2. Définir les périmètres de mesure",
      "3. Choisir les unités de mesure pertinentes",
      "4. Établir les modalités de collecte des données"
    ]
  },
  {
    id: 4,
    title: "DSCG 2020 - Évaluation sécurité SI",
    context: "Semaine 10 du cas CECL20, où le DPO souhaite évaluer le niveau d'information des employeurs sur la sécurité du SI et proposer des améliorations. L'objectif est de mesurer les compétences et le niveau d'implication des collaborateurs.",
    question: "Quelles sont les cinq questions que vous aimeriez poser (individuellement et en face à face) à vos employeurs pour évaluer leur niveau d'information en terme de sécurité du SI ?",
    correction: [
      "Questions d'évaluation proposées :",
      "",
      "1. Quelles sont les principales agressions en provenance de l'extérieur ?",
      "• Évalue la connaissance des menaces externes",
      "• Virus, malwares, attaques réseau, phishing",
      "",
      "2. Quelles sont les principales agressions venues de l'intérieur ?",
      "• Mesure la conscience des risques internes",
      "• Erreurs humaines, négligences, malveillance interne",
      "",
      "3. Lesquelles sont les plus coûteuses en termes d'impact et de dégâts ?",
      "• Évalue la compréhension des enjeux business",
      "• Priorisation des risques selon l'impact",
      "",
      "4. Quels sont les moyens de vous protéger dans chacun de ces deux cas ?",
      "• Teste la connaissance des mesures de protection",
      "• Solutions techniques et organisationnelles",
      "",
      "5. Quel est le coût global annuel des mesures de protection ?",
      "• Vérifie la conscience de l'investissement sécurité",
      "• Relation coût/bénéfice des mesures",
      "",
      "Exploitation des réponses :",
      "• Quantification sur une grille de 0 à 10",
      "• Calcul de moyenne arithmétique",
      "• Classification : sous-informé, correctement informé, sur-informé",
      "• Actions ciblées selon le niveau détecté"
    ],
    tips: [
      "Adapter les questions au niveau des interlocuteurs",
      "Prévoir une grille d'évaluation objective",
      "Planifier les actions correctives selon les résultats"
    ],
    methodology: [
      "1. Définir les domaines de connaissance à évaluer",
      "2. Concevoir un questionnaire structuré",
      "3. Établir une grille de notation",
      "4. Prévoir les actions d'amélioration"
    ]
  },
  {
    id: 5,
    title: "DSCG 2018 - Gestion de projet PGI",
    context: "Le Dossier 1 : REMPLACEMENT DU PGI pour le groupe Mirlac se concentre sur la gestion et les conditions de réussite du projet de remplacement du PGI, un investissement stratégique majeur pour l'entreprise.",
    question: "Quels sont les organes à mettre en place pour la gestion de ce projet ? Préciser leur composition et leur rôle respectif.",
    correction: [
      "1. Le comité de pilotage :",
      "• Composition : directeur de projet (président), représentants opérationnels, responsable informatique, experts internes/externes",
      "• Rôle : lancement du projet (objectifs, finalités, critères qualité)",
      "• Définition des choix stratégiques d'architecture",
      "• Orientations sécurité et droits d'accès",
      "• Accompagnement conduite du changement",
      "• Management projet (échéances, risques, contrôle qualité)",
      "",
      "2. Le comité des utilisateurs :",
      "• Composition : utilisateurs représentatifs des domaines (achats, commercial, fabrication, comptabilité, contrôle de gestion)",
      "• Rôle : expression détaillée des besoins et règles de gestion",
      "• Validation des solutions/maquettes",
      "• Participation aux tests et formations",
      "• Réception définitive du progiciel",
      "• Accompagnement du déploiement",
      "",
      "3. Le chef de projet :",
      "• Rôle : pilotage du projet, présidence des réunions",
      "• Coordination des acteurs",
      "• Reporting à la direction sur l'avancement",
      "• Interlocuteur de la maîtrise d'ouvrage",
      "• Supervision des tests et recettage",
      "• Validation des supports (documentation, formation)",
      "• Doit avoir l'autorité nécessaire (idéalement DAF)"
    ],
    tips: [
      "Définir clairement les rôles et responsabilités",
      "Assurer la représentativité de tous les métiers",
      "Donner l'autorité nécessaire au chef de projet"
    ],
    methodology: [
      "1. Identifier les parties prenantes du projet",
      "2. Définir la gouvernance projet",
      "3. Établir les instances de pilotage",
      "4. Préciser les rôles et responsabilités"
    ]
  },
  {
    id: 6,
    title: "DSCG 2017 - SLA et indicateurs FOAD",
    context: "Le Dossier 2. PROJET DE DÉPLOIEMENT DE L'APPLICATION MÉTIER concerne le déploiement national de l'application AidSys et les choix d'hébergement pour le réseau AIDADOM. La question porte sur les Accords de Niveaux de Service.",
    question: "Préciser ce que recouvre le concept d'Accords de niveaux de service (SLA) et indiquer les avantages procurés par une gestion de SLA et le référentiel qui le préconise.",
    correction: [
      "Définition des SLA :",
      "• Les Accords de niveaux de services (Service Level Agreements)",
      "• Définissent des objectifs spécifiques sur lesquels les performances des services sont jugées",
      "• Contractualisation des niveaux de service attendus",
      "",
      "Avantages de la gestion de SLA :",
      "",
      "1. Transformation de l'obligation :",
      "• Passage de l'obligation de moyen à l'obligation de résultat",
      "• Niveaux de service clairement fixés et mesurables",
      "• Responsabilisation du prestataire",
      "",
      "2. Amélioration de la qualité :",
      "• Maintien et amélioration de la qualité des services informatiques",
      "• Suivi et rapports statistiques sur l'atteinte des objectifs",
      "• Actions correctives si les niveaux ne sont pas atteints",
      "• Éradication de la mauvaise qualité des services",
      "",
      "Référentiel préconisant les SLA :",
      "• ITIL (Information Technology Infrastructure Library)",
      "• Collection de livres recensant les meilleures pratiques",
      "• Fourniture de services informatiques et management du SI",
      "• Standard de facto pour la gestion des services IT"
    ],
    tips: [
      "Définir des SLA mesurables et réalistes",
      "Prévoir les pénalités en cas de non-respect",
      "S'appuyer sur les bonnes pratiques ITIL"
    ],
    methodology: [
      "1. Identifier les services critiques",
      "2. Définir les métriques de performance",
      "3. Fixer les seuils acceptables",
      "4. Mettre en place le monitoring"
    ]
  },
  {
    id: 7,
    title: "DSCG 2016 - Alignement stratégique SI",
    context: "Le Dossier 1 – GOUVERNANCE DU SYSTÈME D'INFORMATION pour SOVANI, une PME se lançant dans les objets connectés, insiste sur l'importance du SI comme vecteur de performance et son alignement avec la stratégie.",
    question: "Après avoir défini le concept d'alignement stratégique (AS), lister les principaux domaines à appréhender dans la logique du processus d'AS du Système d'information (SI) de SOVANI ?",
    correction: [
      "Définition de l'alignement stratégique :",
      "• Faire coïncider les potentialités du SI avec la stratégie métier",
      "• Le SI doit répondre aux besoins de la stratégie",
      "• Servir au mieux les intérêts et attentes de la société",
      "",
      "Domaines à appréhender pour SOVANI :",
      "",
      "1. Infrastructure pour objets connectés :",
      "• Équipements, plateforme, applications, connectivité",
      "• Espaces de stockage pour les objets connectés",
      "",
      "2. Interfaces et connectivité :",
      "• Interfaces/relais entre Internet et objets connectés",
      "• Réseaux cellulaires (3G, 4G), réseaux dédiés (SIGFOX)",
      "",
      "3. SI comptable et commercial :",
      "• Interopérabilités entre applicatifs nécessaires",
      "• Gestion des processus métier",
      "",
      "4. Mise en relation des sites :",
      "• Connexion bureaux Perpignan et Lyon",
      "• Infrastructure réseau inter-sites",
      "",
      "5. Connexion parties prenantes :",
      "• 200 fournisseurs (France, Espagne, Roumanie, Chine)",
      "• 7 000 clients (350 points de vente, site Web)",
      "• Optimisation coûts approvisionnement, stockage, logistique",
      "",
      "6. Logistique performante :",
      "• Entrepôts (Marseille, Clermont Ferrand)",
      "• Aéroports (Toulouse, Montpellier)",
      "• Ports (Marseille, Port la Nouvelle)",
      "",
      "7. Sécurité et hébergement :",
      "• Hébergement et stockage des données échangées",
      "• Confidentialité et sécurité, localisation",
      "• Intégration des risques SI",
      "• Repenser la sécurité (serveur unique actuel inadapté)"
    ],
    tips: [
      "Analyser tous les processus métier impactés",
      "Considérer les contraintes techniques des objets connectés",
      "Prévoir la scalabilité pour la croissance"
    ],
    methodology: [
      "1. Analyser la stratégie métier",
      "2. Identifier les besoins SI associés",
      "3. Évaluer l'écart avec l'existant",
      "4. Définir la cible et le plan de transformation"
    ]
  }
];

export default function QuestionsDSCG() {

  const [showCorrection, setShowCorrection] = useState<{ [key: number]: boolean }>({});
  const [showTips, setShowTips] = useState<{ [key: number]: boolean }>({});
  const [showMethodology, setShowMethodology] = useState<{ [key: number]: boolean }>({});

  const toggleCorrection = (exerciseId: number) => {
    setShowCorrection(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const toggleTips = (exerciseId: number) => {
    setShowTips(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const toggleMethodology = (exerciseId: number) => {
    setShowMethodology(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

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
            <div className="bg-red-100 rounded-lg p-3">
              <Award className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Cas pratiques
              </h1>
              <p className="text-gray-600">
                Exercices pratiques et cas concrets d&apos;application
              </p>
            </div>
          </div>

          {/* Introduction méthodologique */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <Target className="h-5 w-5" />
              Méthodologie DSCG - Performance SI
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Structure type de réponse :</h3>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>1. Analyse de l&apos;existant</li>
                  <li>2. Identification des problèmes</li>
                  <li>3. Propositions d&apos;amélioration</li>
                  <li>4. Indicateurs de suivi</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Points clés à retenir :</h3>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Toujours contextualiser les réponses</li>
                  <li>• Chiffrer les propositions</li>
                  <li>• Justifier les choix méthodologiques</li>
                  <li>• Proposer des KPI mesurables</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Liste des exercices */}
          <div className="space-y-6">
            {exercises.map((exercise, index) => (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <div className="bg-gray-50 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                      <FileText className="h-5 w-5 text-gray-600" />
                      Exercice {exercise.id} : {exercise.title}
                    </h3>
                  </div>
                  
                  <div className="bg-white rounded p-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Contexte :</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {exercise.context}
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Question :</h4>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      {exercise.question}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Boutons d'action */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => toggleCorrection(exercise.id)}
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      {showCorrection[exercise.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      {showCorrection[exercise.id] ? 'Masquer' : 'Voir'} la correction
                    </button>
                    
                    <button
                      onClick={() => toggleTips(exercise.id)}
                      className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Lightbulb className="h-4 w-4" />
                      {showTips[exercise.id] ? 'Masquer' : 'Voir'} les tips
                    </button>
                    
                    <button
                      onClick={() => toggleMethodology(exercise.id)}
                      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Target className="h-4 w-4" />
                      {showMethodology[exercise.id] ? 'Masquer' : 'Voir'} la méthodologie
                    </button>
                  </div>

                  {/* Correction */}
                  {showCorrection[exercise.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-green-50 border-l-4 border-green-500 rounded p-4"
                    >
                      <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Correction détaillée
                      </h4>
                      <div className="space-y-2">
                        {exercise.correction.map((line, idx) => (
                          <p key={idx} className={`text-green-800 text-sm ${
                            line.startsWith('•') ? 'ml-4' : 
                            line.match(/^\d+\./) ? 'font-semibold mt-3' : 
                            line === '' ? 'h-2' : ''
                          }`}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Tips */}
                  {showTips[exercise.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-yellow-50 border-l-4 border-yellow-500 rounded p-4"
                    >
                      <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5" />
                        Tips et conseils
                      </h4>
                      <ul className="space-y-2">
                        {exercise.tips.map((tip, idx) => (
                          <li key={idx} className="text-yellow-800 text-sm flex items-start gap-2">
                            <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Méthodologie */}
                  {showMethodology[exercise.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-purple-50 border-l-4 border-purple-500 rounded p-4"
                    >
                      <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Méthodologie de résolution
                      </h4>
                      <ol className="space-y-2">
                        {exercise.methodology.map((step, idx) => (
                          <li key={idx} className="text-purple-800 text-sm">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conseils généraux */}
          <div className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-center">
              Conseils pour l&apos;examen DSCG
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Gestion du temps :</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Lire tous les exercices avant de commencer</li>
                  <li>• Répartir le temps selon les points</li>
                  <li>• Garder 10 minutes pour la relecture</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Qualité de la réponse :</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Structurer clairement les réponses</li>
                  <li>• Utiliser le vocabulaire technique approprié</li>
                  <li>• Justifier chaque proposition</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}