'use client';

import BackToPlanButton from '@/components/content/BackToPlanButton';
import { BookOpen, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Introduction() {
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
            <div className="bg-blue-100 rounded-lg p-3">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Introduction
              </h1>
              <p className="text-gray-600">
                Concepts de base et définitions de la performance informatique
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Qu&apos;est-ce que la performance informatique ?
              </h3>
              <p className="text-blue-800">
                La notion de performance est l&apos;une des plus étudiées dans le cadre du 
                programme du DSCG. Concernant le SI, elle traduit l&apos;aptitude du SI à 
                fournir les résultats attendus.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Les trois composantes de la performance
            </h2>
            
            <p className="text-gray-700 mb-6">
              La performance consiste à associer trois notions :
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="bg-green-100 rounded-full p-3 w-fit mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-green-900 mb-2">
                  L&apos;objectif
                </h3>
                <p className="text-green-800 text-sm">
                  Ce que l&apos;on se fixe, par exemple fournir une information de qualité
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="bg-blue-100 rounded-full p-3 w-fit mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  Le résultat atteint
                </h3>
                <p className="text-blue-800 text-sm">
                  Ce qui a été effectivement réalisé par le système
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="bg-purple-100 rounded-full p-3 w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-purple-900 mb-2">
                  Les moyens utilisés
                </h3>
                <p className="text-purple-800 text-sm">
                  Les ressources consommées pour atteindre le résultat
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-xl font-semibold text-yellow-900 mb-3">
                Conditions de la performance
              </h3>
              <p className="text-yellow-800 mb-4">
                Pour parler de performance, il faut remplir deux conditions :
              </p>
              <ul className="space-y-3 text-yellow-800">
                <li className="flex items-start gap-3">
                  <span className="bg-yellow-200 rounded-full p-1 mt-1">
                    <span className="block w-2 h-2 bg-yellow-600 rounded-full"></span>
                  </span>
                  <div>
                    <strong>Efficacité :</strong> que le résultat obtenu soit conforme aux objectifs fixés
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-yellow-200 rounded-full p-1 mt-1">
                    <span className="block w-2 h-2 bg-yellow-600 rounded-full"></span>
                  </span>
                  <div>
                    <strong>Efficience :</strong> que les moyens consommés soient optimisés
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-2">
                Formule clé à retenir
              </h3>
              <p className="text-lg">
                Performance du SI = <strong>Efficacité + Efficience</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}