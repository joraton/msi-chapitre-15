import { Target, Rocket, BarChart3, Settings, HelpCircle, Award } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    title: 'Introduction',
    description: 'Concepts de base et définitions de la performance informatique',
    href: '/introduction',
    icon: Rocket,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Section I : La notion de performance',
    description: 'Performance globale, technique et qualité informationnelle',
    href: '/section-1',
    icon: BarChart3,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Section II : Les outils de suivi',
    description: 'Tableaux de bord et indicateurs de performance',
    href: '/section-2',
    icon: Settings,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'L\'IT Scorecard',
    description: 'Approfondissez le tableau de bord équilibré IT avec ses 4 dimensions : financière, processus, client et apprentissage.',
    href: '/it-scorecard',
    icon: BarChart3,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Quiz',
    description: 'Évaluez vos connaissances sur la performance informatique',
    href: '/quiz',
    icon: HelpCircle,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Cas pratiques',
    description: 'Exercices pratiques et cas concrets d&apos;application',
    href: '/questions-dscg',
    icon: Award,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    title: 'Questions DSCG',
    description: 'Collection exhaustive des questions d\'examens DSCG (2016-2023) avec corrections détaillées',
    href: '/questions-dscg-complete',
    icon: Award,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  }
];

export default function CoursePlan() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Target className="h-8 w-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">
            Plan du cours
          </h2>
        </div>
        <p className="text-gray-600 text-lg">
          Suivez le parcours structuré pour maîtriser la performance informatique
        </p>
      </div>

      {/* Sections Grid */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <SectionBlock
            key={section.href}
            {...section}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}