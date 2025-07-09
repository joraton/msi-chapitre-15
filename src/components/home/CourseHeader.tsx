import { Clock, Users, BookOpen } from 'lucide-react';

export default function CourseHeader() {
  return (
    <div className="mb-6 md:mb-8">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-gray-600 mb-3 md:mb-4 overflow-x-auto">
        <div className="flex items-center whitespace-nowrap">
          <span>Accueil</span>
          <span className="mx-1 sm:mx-2">{'>'}</span>
          <span>Cours</span>
          <span className="mx-1 sm:mx-2">{'>'}</span>
          <span className="text-blue-600">Performance Informatique</span>
        </div>
      </nav>

      {/* Main Course Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
          {/* Course Icon */}
          <div className="bg-white/20 rounded-lg p-3 md:p-4 flex-shrink-0 self-center sm:self-start">
            <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white" />
          </div>

          {/* Course Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3 leading-tight">
              Chapitre 15 : La mesure de la performance informatique
            </h1>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              Maîtrisez les concepts de performance des systèmes d&apos;information, 
              de l&apos;efficacité à l&apos;efficience, en passant par les outils de mesure et de pilotage.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 md:gap-3">
              <div className="bg-white/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-1.5 md:gap-2">
                <Users className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm font-medium">Expert</span>
              </div>
              <div className="bg-white/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-1.5 md:gap-2">
                <Clock className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm font-medium">3h 30min</span>
              </div>
              <div className="bg-white/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-1.5 md:gap-2">
                <BookOpen className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm font-medium">3 sections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}