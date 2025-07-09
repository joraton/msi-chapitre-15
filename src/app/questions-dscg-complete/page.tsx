'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, BookOpen, Calendar, FileText, Lightbulb, Target } from 'lucide-react';
import BackToPlanButton from '@/components/content/BackToPlanButton';

interface DSCGQuestion {
  id: number;
  year: string;
  context: string;
  question: string;
  correction: string[];
  source: string;
}

const dscgQuestions: DSCGQuestion[] = [
  {
    id: 1,
    year: "2021",
    context: "Le Dossier 1 – SCHÉMA DIRECTEUR DU SYSTÈME D&apos;INFORMATION demande de décrire les organisations possibles du SI pour la future Direction des Systèmes d&apos;information suite à la fusion de trois organismes de logement social et d&apos;établir un schéma directeur de cette transformation.",
    question: "Q3 : Vous proposerez deux 2 indicateurs de coût du Système d&apos;Information que vous définirez et caractériserez simplement.",
    correction: [
      "• Le « Coût des infrastructures SI » en € par période évalue le coût (interne ou externe) de la fourniture d&apos;infrastructure (serveurs, poste informatique, imprimante, réseaux, etc.) avec également le coût récurrent de remplacement des infrastructures du SI en € par période.",
      "• Le « Coût de la maintenance du SI » en € par année évalue les montants de maintenance interne et externe avec également celui des différents éditeurs et entreprises de services numériques (ESN) qui facturent une maintenance évolutive et corrective.",
      "• Les « Coûts de disponibilité » peuvent être évalués en fonction du coût de perte de service sur une période (à l&apos;heure par exemple) ou du coût de garantie de disponibilité des services du prestataire avant pénalité (en € par période). Il peut aussi représenter le coût du PCA/PRA (Plan de Continuité/Reprise d&apos;Activité) pour améliorer le taux de disponibilité du SI.",
      "• Les « Ressources humaines liées à la DSI » peuvent être évaluées en ETP (Equivalent Temps Plein) par valeur moyenne de coût ou en € par année. Ce coût spécifique rassemble le coût de l&apos;ensemble des collaborateurs internes ou externes de la DSI.",
      "• Le coût de « Valorisation du SI » est l&apos;estimation en € de la valeur du SI et peut être approximé par le coût de remplacement total du Système d&apos;Information en cas de sinistre.",
      "• La « Valeur d&apos;amortissement du SI » en € par année ou en % de la valorisation du SI est la valeur amortissable du SI c&apos;est-à-dire celle qui est déduite dans le bilan annuellement.",
      "• A titre plutôt anecdotique, il est possible aussi de proposer le coût « d&apos;opportunité du SI » c&apos;est-à-dire le coût approximé par la substitution d&apos;un produit ou d&apos;un service par un autre et donc ici c&apos;est ce que vous auriez pu gagner en faisant un autre choix que le montant d&apos;acquisition et d&apos;exploitation du SI (si le SI sur site « coûte » 1000 et qu&apos;un SI équivalent, mais externalisé « coûte » 800 alors le cout d&apos;opportunité du SI sur site est de 200)."
    ],
    source: "21DSCG-UE5_corrige.pdf, Q3, pages 7-10"
  },
  {
    id: 2,
    year: "2023",
    context: "Le Dossier 3 – IMPACT DE LA NOUVELLE LOI DE FINANCES 2024-2026 aborde les impacts de la nouvelle loi de finances sur le SI Achat, notamment en termes de sécurité.",
    question: "Q13 : Concernant la sécurité du Système d&apos;Information, décrire au moins 3 points d&apos;attention que la DSI (Direction des Systèmes d&apos;Information) doit intégrer dans la cadre de la mise en œuvre de la nouvelle loi de finances 2024-2026.",
    correction: [
      "• Sécurité de contrôle d&apos;accès : Les données sensibles et stratégiques de l&apos;entreprise, en l&apos;occurrence les factures, seront publiées et récupérées sur une plateforme externe à l&apos;entreprise. Cet accès pour déposer ou récupérer ce flux sera sécurisé sous forme d&apos;un contrôle d&apos;accès. La sécurité du SI devra donc prendre en compte cet enjeu pour garantir la pérennité de l&apos;accès pour respecter la législation et la non-usurpation du profil pour éviter le vol de données liées à la facturation de l&apos;entreprise ou le sabotage des déclarations (arnaque au RIB, fausses factures, usurpation d&apos;identité, phishing, hameçonnage…).",
      "• Confidentialité des informations : Jusqu&apos;à présent, les factures de vente et d&apos;achat étaient détenues en original au sein de l&apos;entreprise. À partir de la nouvelle loi de finances, c&apos;est la Plateforme Française de Facturation qui fait office de référentiel des factures pour l&apos;entreprise. Il est donc important de conserver l&apos;organisation des permissions d&apos;accès (i.e. habilitation) uniquement des personnes pour ne pas divulguer des informations confidentielles détenues sur les factures.",
      "• Autonomie et conservation de l&apos;intégrité des données : L&apos;entreprise doit pouvoir produire l&apos;ensemble des documents pendant toute la durée de validité et de conservation légale. Une solution de GED reste donc une réponse pour garantir l&apos;intégrité des données des factures d&apos;achat et vente. Il n&apos;y a de plus pas de reprise d&apos;historique des factures de l&apos;entreprise sur la PFF (plateforme française de facturation).",
      "• RGPD : Les factures déposées sur la PFF ou les factures transitant par un PDP restent sous la responsabilité de l&apos;entreprise d&apos;un point de vue RGPD. Cela rentre donc dans le système d&apos;information de l&apos;entreprise et les processus liés au RGPD s&apos;appliquent également sur ces éléments (anonymisation, pseudomysation, droit à l&apos;oubli, contrôle d&apos;accès…).",
      "• Haute disponibilité des flux de facture : Si à partir de 2024/2026, l&apos;ensemble des factures de vente de l&apos;entreprise doivent être déposées sur la PFF par obligation légale, cela rend ce flux de données critique pour assurer le chiffre d&apos;affaires de l&apos;entreprise. On notera aussi que la non-récupération des factures peut causer des pénalités ou des pertes d&apos;escomptes. La sécurité du SI doit donc fournir le niveau de haute disponibilité requis pour garantir le fonctionnement de ce processus et éviter l&apos;impact de coût financier.",
      "• Synergie capitalisée : La nouvelle loi de finances a aussi pour objectif d&apos;amélioration la performance et la digitalisation des entreprises en permettant le traitement des factures en 100% numériques et du reporting ou des déclarations réglementaires automatisées. La sécurité du SI doit en conséquence s&apos;adapter pour aligner les applications actuelles à ces nouveaux processus (solution comptable, ERP…) et pérenniser ces acquis de performance."
    ],
    source: "DSCG-2023-UE05-Corrige_1.pdf, Q13, pages 100-103"
  },
  {
    id: 3,
    year: "2019",
    context: "Le Dossier 2 – ALIGNEMENT STRATÉGIQUE DU SI étudie l'adéquation entre la stratégie de SOLIDOR et sa stratégie SI, notamment avec le déploiement d'outils CRM et un système NPS.",
    question: "Q4 : Quelles suggestions pourriez-vous faire à la DSI de SOLIDOR notamment en termes de suivi de la qualité de ses activités ?",
    correction: [
      "À présent que le SI de SOLIDOR a été urbanisé et est prêt à évoluer, que la solution SC (Aleth Planning & Tracking) a été implémentée et que les outils marketing (CRM et NPS) sont mis en œuvre, l&apos;entreprise doit pouvoir s&apos;assurer de la qualité de ses activités amont et aval.",
      "Pour ce faire, elle peut adopter une démarche d&apos;audit. Il s&apos;agit de diagnostiquer l&apos;état des lieux afin de détecter les faiblesses résiduelles (risques internes, risques externes, etc.) et définir des pistes d&apos;amélioration. L&apos;auditeur intervient donc en tant qu&apos;évaluateur des risques.",
      "Dans le cas de SOLIDOR, il pourrait se concentrer sur :",
      "• la sécurité physique du centre de traitement (intrusion, incendie, hydrométrie, etc.)",
      "• la confidentialité et la traçabilité des accès",
      "• la lisibilité et le respect des consignes de sécurité SI",
      "• les indicateurs de performances"
    ],
    source: "DSCG_2019_UE5_Corrige.pdf, DOSSIER 2, Q4, page 156"
  },
  {
    id: 4,
    year: "2020",
    context: "Semaine 10 du cas &apos;CECL20&apos;, où le DPO souhaite évaluer le niveau d&apos;information des employeurs sur la sécurité du SI et proposer des améliorations.",
    question: "Q19 : Quelles sont les cinq questions que vous aimeriez poser (individuellement et en face à face) à vos employeurs pour évaluer leur niveau d'information en terme de sécurité du « SI » ?",
    correction: [
      "Par exemple, afin de bien estimer leurs compétences et leur niveau d'implication à ce sujet, vous pouvez prévoir un questionnaire en face à face, individuel et en temps réel du type :",
      "1. Quelles sont les principales agressions en provenance de l'extérieur ?",
      "2. Quelles sont les principales agressions venues en provenance de l&apos;intérieur ?",
      "3. Lesquelles sont les plus coûteuses en termes d&apos;impact et de dégâts selon vous ?",
      "4. Quels sont les moyens de vous protéger dans chacun de ces deux cas ?",
      "5. Quel est le coût global annuel des mesures de protection de votre entreprise ?"
    ],
    source: "DSCG_2020_UE5_Corrige.pdf, Q19, page 204"
  },
  {
    id: 5,
    year: "2020",
    context: "Suite de la question précédente sur l'évaluation de la sécurité du SI.",
    question: "Q20 : Comment pourriez-vous traiter et exploiter leurs réponses afin d'améliorer la sécurité du « SI » du cabinet ?",
    correction: [
      "Vous pouvez tenter de quantifier les réponses et de construire un indicateur basique. En fonction des notes que vous attribuerez aux 5 réponses de vos employeurs, vous pourrez évaluer leur niveau (sur une grille de 0 à 10 par exemple) et calculer leur moyenne arithmétique en faisant la somme des 5 notes et en la divisant par 5.",
      "Puis vous leur proposeriez en fonction de leur moyenne (si elle est basse alors le répondant est qualifié de sous-informé, si elle est dans la moyenne des moyennes alors il est correctement informé et si elle est dans la fourchette haute des moyennes alors il sera qualifié de sur-informé) diverses actions à mener qui seront centrées sur les mesures de précautions qualifiées de plutôt actives (logiciel antivirus, sauvegarde des données, plan de continuité, session de formation des utilisateurs, usage de réseaux privés virtuels / virtual private network etc.) et/ou plutôt passives (bonnes pratiques à marteler, modification des mots de passe, déconnexion des ordinateurs, usage précautionneux de la messagerie et des pièces jointes, limiter l&apos;usage des clés usb, vigilance face au à l&apos;hameçonnage (phising), au filoutage et au rançongiciel (ransomware), , etc...).",
      "Vous pourrez aussi leur proposer d&apos;organiser – en invitant des consultants spécialisés en politique de sécurité des SI - des sessions de formation destinées notamment à celles et ceux (cela inclut donc la direction) qui seront amenés à pratiquer le télétravail (identification, extranet/intranet, outils et messageries autorisés/tolérés/non-autorisés, réseau privé virtuel / virtual private network, ordinateur personnel/professionnel, importation/exportation de fichier, etc.).",
      "L&apos;objectif de ces séminaires pour CECL20 serait de se mettre en conformité avec la réglementation, les recommandations des services de cyber sécurité et les pratiques de bon sens qui contribuent à protéger les SI des attaques volontaires et/ou involontaires dont d&apos;une part la plupart proviennent de l&apos;intérieur même du système et d&apos;autre part qu&apos;elles sont la plupart du temps largement involontaire et non malveillante mais que les dégâts et les coûts et les délais liés à la remise en fonctionnement du système sont toujours considérables.",
      "Vous pouvez aussi proposer de renouveler cette enquête régulièrement afin d&apos;observer si le niveau d&apos;information des dirigeants évolue favorablement (moyennes de plus en plus élevées) au sein du cabinet ou s&apos;il convient de ne pas relâcher la vigilance et d&apos;accentuer les formations à la sécurité « SI »."
    ],
    source: "DSCG_2020_UE5_Corrige.pdf, Q20, pages 205-206"
  },
  {
    id: 6,
    year: "2022",
    context: "Le Dossier 1 – CONSTRUCTION DU SYSTÈME D'INFORMATION porte sur la réorganisation des DSI du groupe SD3i et l'indépendance de la société DIGITAL INTEGRATION.",
    question: "Q3 : Définir pour ce projet deux facteurs clés de succès pour réussir cette transformation.",
    correction: [
      "• Gouvernance bien définie et validée par les différentes directions générales. On pourra aussi évoquer la définition d&apos;un nouveau schéma directeur pour les différentes DSI.",
      "• Analyse et audit correctement menés : Les analyses et les audits sont la base d&apos;une bonne définition d&apos;un projet de transformation du Système d&apos;Information.",
      "• Coopération des différentes entités du groupe SD3I : Une bonne coopération est indispensable pour réussir les changements sans perte de valeur.",
      "• Communication à l&apos;ensemble des acteurs pour anticiper les conduites de changement au sein des procédures.",
      "• Qualité de prestation des intervenants : choix des membres du projet en fonction de leurs expériences et compétences pour mener à bien ce projet. C&apos;est aussi le choix des prestataires et des fournisseurs de services du SI s&apos;il y a lieu.",
      "• Adhésion des utilisateurs finaux à la nouvelle organisation du SI. C&apos;est aussi la définition des nouveaux rôles au sein de Digital Intégration.",
      "• Respect du planning donné par la direction de SD3I pour accomplir la transformation.",
      "• Suivre les bonnes pratiques de projets et des référentiels comme ITIL pour assurer les changements au sein du SI et éviter les risques de sécurité ou de perte de données."
    ],
    source: "DSCG_2022_UE05_Corrige.pdf, DOSSIER 1, Q3, pages 223-225"
  },
  {
    id: 7,
    year: "2022",
    context: "Le Dossier 3 – ÉQUIPEMENT DE NOUVEAUX SYSTÈMES D'INFORMATION traite des choix d'applications pour DIGITAL INTEGRATION et de leur distribution (SaaS ou On Premise).",
    question: "Q3 : Dans le cadre du RGPD, est-ce que le DPO actuel du groupe SD3i peut devenir le DPO de la société DIGITAL INTEGRATION après le 1er janvier 2022, tout en conservant sa position de DPO pour les 2 autres sociétés ? Expliquer votre réponse.",
    correction: [
      "La réponse est Oui, car un DPO peut être mutualisé et exercer son rôle pour plusieurs entités. Il peut aussi être externe à l&apos;organisation et assurer ce rôle pour plusieurs sociétés, dont celle qui ne fait plus partie du groupe SD3i.",
      "L&apos;article 37 du RGPD ouvre la voie à la nomination d&apos;un unique DPO pour les groupes d&apos;entreprise : Un groupe d&apos;entreprises peut désigner un seul délégué à la protection des données à condition qu&apos;un délégué à la protection des données soit facilement joignable à partir de chaque lieu d&apos;établissement.",
      "L&apos;article 37 du règlement général sur la protection des données personnelles (RGPD) dispose que le DPO « peut être un membre du personnel du responsable du traitement ou du sous-traitant, ou exercer ses missions sur la base d&apos;un contrat de service ».",
      "Le RGPD permet donc la nomination d&apos;un même DPO pour différentes entités juridiques distinctes. Cette possibilité est particulièrement intéressante pour les groupes d&apos;entreprises constituées de plusieurs entités morales distinctes."
    ],
    source: "DSCG_2022_UE05_Corrige.pdf, DOSSIER 3, Q3, pages 236-237"
  },
  {
    id: 8,
    year: "2016",
    context: "Le Dossier 1 – GOUVERNANCE DU SYSTÈME D'INFORMATION pour SOVANI, une PME se lançant dans les objets connectés, insiste sur l'importance du SI comme vecteur de performance et son alignement avec la stratégie.",
    question: "Q1 : Après avoir défini le concept d'alignement stratégique (AS), lister les principaux domaines à appréhender dans la logique du processus d'AS du Système d'information (SI) de SOVANI?",
    correction: [
      "L&apos;alignement stratégique consiste à faire coïncider les potentialités du système d&apos;information avec la stratégie « métier » définie par SOVANI. Le système d&apos;information doit en effet répondre aux besoins de la stratégie afin de servir au mieux les intérêts et attentes de la société.",
      "Plusieurs domaines du système d'information doivent ainsi être pensés voire repensés afin de permettre cette concordance avec la stratégie :",
      "• Équipements, plateforme, applications, connectivité, espaces de stockage, etc. pour répondre aux missions attendues des objets connectés.",
      "• Le SI doit permettre les interfaces ou relais entre Internet et les objets connectés (utilisation de réseaux cellulaires couverts par les opérateurs de téléphonie, 3G, 4G, etc., réseau dédié aux objets connectés (ex SIGFOX)).",
      "• Le SI doit permettre la réalisation de toutes les missions du système d&apos;information comptable et commercial et donc s&apos;assurer des interopérabilités entre les applicatifs nécessaires.",
      "• Le SI doit permettre la mise en relation des différents bureaux de Perpignan et Lyon.",
      "• Le SI doit permettre la connexion avec toutes les parties prenantes de SOVANI : 200 fournisseurs d&apos;articles de bureau en France, en Espagne, en Roumanie et en Chine notamment, 7 000 clients (350 points de vente en France et pays limitrophes, site Web) …afin d&apos;optimiser les coûts tant d&apos;approvisionnement, de stockage, de logistique et de production.",
      "• Le SI doit permettre un fonctionnement performant de la logistique : entrepôts de Marseille, Clermont Ferrand, etc. ainsi que des zones de départ et d&apos;arrivée liées aux aéroports de Toulouse et Montpellier et des ports de Marseille et Port la Nouvelle.",
      "• Le SI doit prévoir les hébergements et stockages des données échangées : confidentialité et sécurité de ces stockages, localisation, etc..",
      "• Intégration des risques SI afin d&apos;assurer la continuité de services.",
      "• L&apos;opérabilité optimale du SI est bien présentée comme un axe privilégié pour l&apos;équipe dirigeante de SOVANI.",
      "• A ce jour, un seul serveur héberge les applicatifs et données de SOVANI, la stratégie de SOVANI touche des domaines sensibles nécessitant de repenser la sécurité du SI, cette situation du serveur unique n&apos;est pas en phase avec la stratégie."
    ],
    source: "DSCG_UE5_2016_corrige.pdf, Q1, pages 261-265"
  },
  {
    id: 9,
    year: "2016",
    context: "Le Dossier 2 – PROJET de SI de SOVANI traite de la modernisation de l'ERP ARTGEST et des projets cloud. Il demande de présenter les étapes et facteurs de réussite d'une telle conduite de projet.",
    question: "Q4 : Présenter sous forme de tableau, 3 facteurs de réussite d'une telle conduite de projet en intégrant par exemple les référentiels et autres bonnes pratiques.",
    correction: [
      "Les facteurs de réussite sont répertoriés ci-dessous :",
      "• Participation des RH : Cette participation est indispensable à la réussite du projet de l&apos;ERP. Cela permet de faire adhérer le personnel « métiers » et SI de SOVANI.",
      "• Formation des RH : Les RH doivent avoir des compétences en adéquation avec le contenu du nouveau projet afin d&apos;en tirer les avantages maximums : formation sur l&apos;ERP projeté, les fonctionnalités GED, EDI, intégration globale du SI. Cette formation permettra de limiter des résistances aux changements et de profiter pleinement des retombées du projet.",
      "• Maîtrise du budget : Permet de ne pas impacter d&apos;éventuels autres projets ou la performance globale de l&apos;entreprise par des dépassements de budgets importants.",
      "• Prévoir un tableau de bord : Des indicateurs clés : temps passé sur chaque étape du déroulement ou ordonnancement prévu, coûts et modes de règlement tout au long du projet, nombre d&apos;heures de formation, délivrance de certificat de formation, nb de personnes formées, gains de temps attendus post projet, mesure de la qualité post projet (erreurs, redondances, retard dans les traitements, ressaisies inutiles…et comparaisons avec la situation ante projet).",
      "• Implication de la DG : Le degré d&apos;implication de la direction général permettra une réelle imprégnation du projet dans toute la société SOVANI. Le positionnement de la DSI dans l&apos;organigramme de SOVANI.",
      "• Identification des risques projet : L&apos;équipe projet doit faire un diagnostic des risques inhérents au projet ERP de SOVANI, aux projets cloud…dépassements de budgets, risques d&apos;écarts entre ce qui était prévu et ce qui est réalisé, etc..",
      "• Mesure de la conformité : Appréciation de la correspondance entre le projet défini avec la livraison effective.",
      "• Exploitation d&apos;outils de gestion de projet : Méthodes d&apos;ordonnancement (PERT, GANTT), méthodes pour cadrer la mise en œuvre du projet : référentiel CobiT, Control Objectives for Information and Technology, référentiel ITIL, Information Technology Infrastructure Library, le modèle de maturité CMMI, Capacity Maturity Model Intégration….",
      "• Choix du ou des maîtres d&apos;œuvres, prestataires : La mise en place d&apos;un projet pour SOVANI se traduira par la mobilisation, totale ou partielle, de maîtres d&apos;œuvres ou prestataires ESN. La qualité des interventions et de la collaboration de ces ESN constituent un facteur clé de succès. Le choix de ces partenariats est ainsi crucial."
    ],
    source: "DSCG_UE5_2016_corrige.pdf, Q4, pages 283-286"
  },
  {
    id: 10,
    year: "2017",
    context: "Le Dossier 1. GOUVERNANCE DU SYSTÈME D'INFORMATION pour le réseau AIDADOM met en lumière la place du SI comme vecteur de performance et l'importance de son évolution stratégique.",
    question: "Q1 : Après avoir défini le concept de stratégie informatique, justifier les choix effectués par AIDADOM dans son programme d'actions 2016-2020 ?",
    correction: [
      "Définition de la stratégie informatique : La stratégie informatique est l&apos;ensemble des processus de détermination des buts et objectifs à long terme d&apos;un système d&apos;information en cohérence avec les orientations stratégiques de l&apos;organisation. Elle permet de planifier et de coordonner les actions en vue d&apos;aboutir à un système d&apos;information cible.",
      "Justification des choix effectués par AIDADOM : La stratégie globale d&apos;AIDADOM est de répondre à une démarche qualité et de GPEC mise en œuvre depuis 2008. Cette stratégie est poursuivie au travers des programmes d&apos;actions 2013-2015 et 2016-2010 qui visent la modernisation et la professionnalisation des services d&apos;aide et de soins à domicile. Pour ce faire,",
      "• un premier axe de travail visait le développement et le déploiement du système d&apos;information national ;",
      "• un deuxième axe de travail privilégie un enrichissement du système d&apos;information avec la dématérialisation de la collecte d&apos;informations, la gestion administrative des formations des professionnels, la mise en place d&apos;une gestion électronique des documents, le développement d&apos;un \"espace client\" accessible sur Internet pour faciliter le suivi des dossiers, etc..",
      "Le programme d&apos;actions 2016-2020 vise un alignement stratégique du système d&apos;information d&apos;AIDADOM. Le réseau s&apos;attache à aligner sa stratégie informatique sur sa stratégie globale en mettant en œuvre des projets capables de servir les objectifs du système d&apos;information."
    ],
    source: "DSCG_UE5_2017_Corrige.pdf, DOSSIER 1, Q1, pages 325-326"
  },
  {
    id: 11,
    year: "2017",
    context: "Le Dossier 2. PROJET DE DÉPLOIEMENT DE L'APPLICATION MÉTIER concerne le déploiement national de l'application AidSys et les choix d'hébergement.",
    question: "Q7 : Préciser ce que recouvre le concept d'\"Accords de niveaux de service\" (SLA) et indiquer les avantages procurés par une gestion de SLA et le référentiel qui le préconise. Deux avantages sont attendus.",
    correction: [
      "Définition du concept d&apos;\"Accords de niveaux de service\" (SLA) : Les Accords de niveaux de services ou SLA (Service Level Agreements) définissent des objectifs spécifiques sur lesquels les performances des services vont être jugées.",
      "Avantages procurés par une gestion de SLA : La gestion de SLA :",
      "• transforme l&apos;obligation de moyen du prestataire en une obligation de résultat qui se fonde sur des niveaux de service clairement fixés ;",
      "• maintient et améliore la qualité des services informatiques à travers des suivis et des rapports statistiques sur l&apos;atteinte des objectifs. Si les niveaux demandés n&apos;ont pas été atteints, la gestion de SLA initie des actions pour éradiquer la mauvaise qualité des services fournis aux entités du réseau AIDADOM.",
      "Référentiel préconisant une gestion de SLA : Une gestion de SLA est préconisée par le référentiel ITIL (Information Technology Infrastructure Library). Il s&apos;agit d&apos;une collection de livres qui recense, synthétise et détaille les meilleures pratiques dans la fourniture de services informatiques et le management du système d&apos;information."
    ],
    source: "DSCG_UE5_2017_Corrige.pdf, DOSSIER 2, Q7, pages 338-339"
  },
  {
    id: 12,
    year: "2017",
    context: "Le Dossier 3. ÉTUDE DU PROJET FOAD analyse le projet de déploiement de la Formation Ouverte À Distance (FOAD) pour le réseau AIDADOM.",
    question: "Q9 : Proposer six indicateurs, relevant de deux catégories différentes, afin d'évaluer l'accès à la plate-forme FOAD.",
    correction: [
      "Indicateurs d&apos;évaluation de la FOAD :",
      "Indicateurs de résultat :",
      "• Nombre de sessions organisées par an.",
      "• Nombre de personnes formées par an par rapport au nombre total de salariés.",
      "• Nombre moyen d&apos;heures de formation par an, par salarié (par sexe, catégorie professionnelle, zone géographique).",
      "• Nombre de structures utilisatrices par an par rapport au nombre total de structures du réseau AIDADOM.",
      "Indicateurs d&apos;impact :",
      "• Taux d&apos;évolution du nombre de stagiaires par an.",
      "• Amélioration de la productivité.",
      "Indicateur d&apos;évaluation de l&apos;accès à la plate-forme FOAD proprement dite :",
      "Indicateurs techniques (point de vue du technicien) :",
      "• Nombre d&apos;utilisateurs simultanés pour apprécier la scalabilité de la solution.",
      "• Temps de réponse moyen du serveur pour évaluer la performance du serveur.",
      "• Taux de disponibilité de la plate-forme pour évaluer la qualité du service proposé.",
      "• Nombre d&apos;incidents réseau pour évaluer les difficultés d&apos;accès à la plate-forme.",
      "• Taux d&apos;incidents réseau pour mesurer la part des incidents réseau par rapport au nombre total d&apos;incidents enregistrés.",
      "• Nombre d&apos;incidents en cours d&apos;utilisation de la plate-forme pour évaluer la performance de l&apos;outil.",
      "Indicateur d&apos;utilisation (point de vue de l&apos;utilisateur) :",
      "Indicateurs quantitatifs :",
      "• Temps de connexion moyen.",
      "• Temps de connexion par salarié par an.",
      "Indicateurs qualitatifs : Un suivi qualitatif peut-être effectué à l&apos;issue des formations sur des documents papier (évaluation à chaud) ou par envoi de formulaires en ligne (évaluation à froid) pour mesurer :",
      "• le degré de satisfaction des utilisateurs ;",
      "• le niveau de satisfaction par rapport aux attentes de l&apos;usage de l&apos;outil tant sur les modalités d&apos;accès à la plate-forme que l&apos;utilisation de la plate-forme proprement dite ;",
      "• etc."
    ],
    source: "DSCG_UE5_2017_Corrige.pdf, DOSSIER 3, Q9, pages 345-348"
  },
  {
    id: 13,
    year: "2018",
    context: "Le Dossier 1 : REMPLACEMENT DU PGI pour le groupe Mirlac se concentre sur la gestion et les conditions de réussite du projet de remplacement du PGI, un investissement stratégique.",
    question: "Q1 : Quels sont les organes à mettre en place pour la gestion de ce projet ? Préciser leur composition et leur rôle respectif.",
    correction: [
      "• Le comité de pilotage : L&apos;organe directeur de la maîtrise d&apos;ouvrage, présidé par un directeur de projet. Composé de représentants opérationnels (responsables métiers et utilisateurs-clés), du responsable informatique, d&apos;experts internes ou externes (intégrateur). Attributions : lancement du projet (objectifs, finalités, critères de qualité, arbitrage des moyens), définition des choix stratégiques d&apos;architecture et des orientations en matière de sécurité et de droits d&apos;accès, accompagnement de la maîtrise d&apos;ouvrage dans la conduite du changement, management du projet (suivi des échéances, risques, contrôle qualité).",
      "• Le comité des utilisateurs : Constitué de tous les utilisateurs représentatifs des domaines d&apos;activité concernés par le projet (achats, commercial, fabrication, comptabilité, contrôle de gestion). Attributions : expression détaillée des besoins et des règles de gestion, validation des solutions/maquettes, participation aux tests, participation aux actions de formation, réception définitive du progiciel, accompagnement du déploiement (peut devenir centre de ressources post-projet).",
      "• Le chef de projet : Assure le pilotage du projet, préside les réunions, coordonne les acteurs, rend compte à la direction de l&apos;avancement, est l&apos;interlocuteur de la maîtrise d&apos;ouvrage. Supervise la réalisation des tests et le recettage, valide les supports (documentation, formation). Doit avoir l&apos;autorité nécessaire. Il semblerait logique que ce soit le DAF, membre du comité de direction, et non le responsable informatique."
    ],
    source: "DSCG_UE_5_2018_Corrige.pdf, Q1, pages 384-386"
  },
  {
    id: 14,
    year: "2018",
    context: "Suite de la question précédente sur le projet PGI.",
    question: "Q2 : Quelles sont les principales conditions de réussite du projet ? (Quatre conditions sont attendues.)",
    correction: [
      "Conditions de réussite :",
      "• Les objectifs doivent être clairement définis pour permettre de se référer constamment aux raisons qui ont conduit à lancer le projet et prendre des décisions en conséquence.",
      "• Les équipes projets doivent être organisées avec soin en veillant à mettre en place les contrôles appropriés.",
      "• Ne pas négliger la dimension humaine du projet qui implique l&apos;animation et la motivation des équipes.",
      "• Prendre en compte la gestion du changement en intégrant les acteurs concernés dans l&apos;équipe projet et en ayant une communication appropriée.",
      "• Maîtriser les délais et les coûts, ce qui implique une analyse des risques."
    ],
    source: "DSCG_UE_5_2018_Corrige.pdf, Q2, pages 387-388"
  },
  {
    id: 15,
    year: "2018",
    context: "Toujours sur le projet PGI du groupe Mirlac.",
    question: "Q4 : Quelles sont les principales difficultés rencontrées lors de la mise en place d'un PGI ? (Quatre difficultés sont attendues.)",
    correction: [
      "• Nécessité d&apos;adapter certains processus aux contraintes du progiciel : L&apos;entreprise doit parfois modifier son organisation pour s&apos;adapter, arbitrant entre impact organisationnel et complexité des paramétrages.",
      "• Le projet impacte l&apos;organisation dans son ensemble : Cela implique des risques, notamment si la gestion du changement est mal appréhendée.",
      "• Coûts induits très importants, et souvent sous-estimés : Nombreux coûts induits en temps de travail, baisse d&apos;efficacité liée à la désorganisation.",
      "• Dépendance vis-à-vis d&apos;un éditeur : Retour en arrière ou changement de PGI difficiles compte tenu de l&apos;importance du projet.",
      "• Dépendance par rapport aux intégrateurs et aux consultants : Crée des situations d&apos;asymétrie d&apos;information avec des risques sur les choix, les coûts, les tensions possibles.",
      "• Complexité du paramétrage : Peut entraîner un dépassement des délais et des coûts ou des difficultés d&apos;utilisation."
    ],
    source: "DSCG_UE_5_2018_Corrige.pdf, Q4, pages 392-395"
  },
  {
    id: 16,
    year: "2018",
    context: "Le Dossier 3 : SÉCURISATION DES ÉCHANGES aborde les cyberattaques subies par Mirlac et la nécessité de revoir sa politique de sécurité informatique, notamment via l'utilisation de VPN.",
    question: "Q1 : Expliquer les conséquences des cyberattaques subies pour Mirlac. (Trois conséquences majeures sont attendues.)",
    correction: [
      "L&apos;intrusion d&apos;un pirate dans le SI de Mirlac est dangereuse dans la mesure où celle-ci lui permettrait de récupérer ou supprimer des données confidentielles, d&apos;y déposer des virus ou des logiciels malveillants dans le but de saboter le SI et le rendre inopérant.",
      "La récupération de courriel est tout aussi dangereuse puisqu&apos;elle signifie qu&apos;un pirate peut intercepter le contenu de messages, à caractère confidentiel, circulant sur le réseau Internet. Pire, on pourrait imaginer que ce pirate usurpe l&apos;identité de l&apos;un deux et envoie des messages falsifiés ou erronés.",
      "Une attaque par déni de service pourrait également être subie par Mirlac. Elle consiste à saturer un serveur ou un site Web d&apos;entreprise afin de le rendre non opérationnel (empêcher les utilisateurs légitimes d&apos;un service de l&apos;utiliser ou de perturber les connexions entre les machines)."
    ],
    source: "DSCG_UE_5_2018_Corrige.pdf, Q1, page 399"
  },
  {
    id: 17,
    year: "2018",
    context: "Suite de la question précédente sur la sécurisation des échanges.",
    question: "Q3 : Présenter quatre dispositifs, autres que le VPN, permettant à Mirlac de se prémunir des cyberattaques ou d&apos;en limiter les conséquences.",
    correction: [
      "Pour se protéger contre les cyberattaques, Mirlac peut :",
      "• renforcer le niveau de sécurité des machines connectées au réseau. Mettre dans une DMZ (DeMilitarised Zone), une zone tampon isolée du réseau privé de la société hébergeant des applications et des données mises à disposition du public, tous les serveurs contenant les applications importantes de Mirlac et son site Web.",
      "• adopter une architecture composée de plusieurs serveurs offrant le même service, gérés de sorte que chaque client ne soit pris en charge que par l&apos;un d&apos;entre eux, ce qui permet de répartir les points d&apos;accès aux services et en cas d&apos;attaque d&apos;avoir un ralentissement « acceptable ».",
      "• mettre en place un serveur tampon (cleaning center) qui va filtrer et nettoyer le trafic et permettre que les requêtes malveillantes ne touchent pas le serveur visé.",
      "• identifier et bloquer les adresses IP dont proviennent les attaques au niveau du pare-feu ou du serveur.",
      "Pour limiter les cyberattaques, Mirlac doit :",
      "• mettre en place une politique de continuité d&apos;activité destinée à élaborer des processus d&apos;urgence et à définir les personnes à contacter en cas de perturbation, tout en sensibilisant les utilisateurs.",
      "• auditer de façon régulière le système d&apos;information.",
      "• souscrire un contrat de cyber-assurance couvrant les risques informatiques évoqués."
    ],
    source: "DSCG_UE_5_2018_Corrige.pdf, Q3, pages 402-404"
  }
];

export default function QuestionsCompletes() {
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);

  const toggleQuestion = (id: number) => {
    setExpandedQuestions(prev => 
      prev.includes(id) 
        ? prev.filter(qId => qId !== id)
        : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedQuestions(dscgQuestions.map(q => q.id));
  };

  const collapseAll = () => {
    setExpandedQuestions([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <BackToPlanButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Questions DSCG Complètes
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Collection exhaustive des questions d&apos;examens DSCG liées à la performance des systèmes d&apos;information, 
                avec corrections détaillées et sources officielles (2016-2023).
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contrôles d'expansion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          <button
            onClick={expandAll}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <ChevronDown className="h-4 w-4" />
            Tout développer
          </button>
          <button
            onClick={collapseAll}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
          >
            <ChevronUp className="h-4 w-4" />
            Tout réduire
          </button>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-blue-500" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{dscgQuestions.length}</h3>
                <p className="text-gray-600">Questions au total</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">8</h3>
                <p className="text-gray-600">Années d&apos;examens</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3">
              <Target className="h-8 w-8 text-purple-500" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">100%</h3>
                <p className="text-gray-600">Avec corrections</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Questions par année */}
        <div className="space-y-6">
          {dscgQuestions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleQuestion(question.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        DSCG {question.year}
                      </span>
                      <span className="text-gray-500 text-sm">
                        Question #{question.id}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {question.question}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {question.context}
                    </p>
                  </div>
                  <div className="ml-4">
                    {expandedQuestions.includes(question.id) ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </div>

              {expandedQuestions.includes(question.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-100"
                >
                  <div className="p-6 space-y-6">
                    {/* Contexte */}
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
                        <FileText className="h-5 w-5 text-blue-500" />
                        Contexte
                      </h4>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-gray-700">{question.context}</p>
                      </div>
                    </div>

                    {/* Question */}
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
                        <Target className="h-5 w-5 text-green-500" />
                        Question
                      </h4>
                      <div className="bg-green-50 rounded-lg p-4">
                        <p className="text-gray-700 font-medium">{question.question}</p>
                      </div>
                    </div>

                    {/* Correction */}
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-3">
                        <Lightbulb className="h-5 w-5 text-yellow-500" />
                        Correction détaillée
                      </h4>
                      <div className="bg-yellow-50 rounded-lg p-4">
                        <div className="space-y-2">
                          {question.correction.map((line, idx) => (
                            <p key={idx} className="text-gray-700">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Source */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500">
                        <strong>Source :</strong> {question.source}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Note de bas de page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              📚 Collection Complète DSCG
            </h3>
            <p className="text-gray-600">
              Cette collection rassemble toutes les questions d'examens DSCG (2016-2023) 
              directement liées au chapitre 15 "La mesure de la performance informatique". 
              Chaque question est accompagnée de sa correction officielle et de sa source.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}