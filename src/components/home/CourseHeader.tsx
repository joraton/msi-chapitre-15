import { Clock, Users, BookOpen } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <span>Accueil</span>
        <span className="mx-2">{'>'}</span>
        <span>Cours</span>
        <span className="mx-2">{'>'}</span>
        <span className="text-blue-600">Performance Informatique</span>
      </nav>

      {/* Main Course Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white shadow-lg">
        <div className="flex items-start gap-6">
          {/* Course Icon */}
          <div className="bg-white/20 rounded-lg p-4 flex-shrink-0">
            <BookOpen className="h-12 w-12 text-white" />
          </div>

          {/* Course Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-3">
              Chapitre 15 : La mesure de la performance informatique
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              Maîtrisez les concepts de performance des systèmes d&apos;information, 
              de l&apos;efficacité à l&apos;efficience, en passant par les outils de mesure et de pilotage.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/20 rounded-full px-4 py-2 flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">Expert</span>
              </div>
              <div className="bg-white/20 rounded-full px-4 py-2 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">3h 30min</span>
              </div>
              <div className="bg-white/20 rounded-full px-4 py-2 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">3 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}