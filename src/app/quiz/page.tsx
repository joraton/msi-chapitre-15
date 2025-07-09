'use client';

import { useState } from 'react';
import BackToPlanButton from '@/components/content/BackToPlanButton';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Selon le modèle de DeLone et McLean, combien d'éléments sont nécessaires pour mesurer la performance d'un SI ?",
    options: ["4 éléments", "5 éléments", "6 éléments", "7 éléments"],
    correct: 2,
    explanation: "Le modèle de DeLone et McLean identifie 6 éléments : qualité du système, qualité de l'information, qualité du service, intention d'utiliser, utilisation, et satisfaction utilisateur."
  },
  {
    id: 2,
    question: "La performance du SI est la combinaison de :",
    options: ["Efficacité + Efficience", "Qualité + Rapidité", "Coût + Bénéfice", "Sécurité + Disponibilité"],
    correct: 0,
    explanation: "La performance du SI combine l'efficacité (conformité aux objectifs) et l'efficience (optimisation des moyens)."
  },
  {
    id: 3,
    question: "Que signifie KPI ?",
    options: ["Key Process Indicator", "Key Performance Indicator", "Key Product Information", "Key Project Implementation"],
    correct: 1,
    explanation: "KPI signifie Key Performance Indicator, soit indicateur clé de performance en français."
  },
  {
    id: 4,
    question: "La scalabilité d'un système informatique désigne :",
    options: [
      "Sa capacité à résister aux pannes",
      "Sa capacité à monter en charge", 
      "Sa facilité d'utilisation",
      "Sa sécurité"
    ],
    correct: 1,
    explanation: "La scalabilité désigne la capacité d'un système à monter en charge, c'est-à-dire à traiter une demande supplémentaire significative."
  },
  {
    id: 5,
    question: "Combien de types d'indicateurs existe-t-il dans un tableau de bord ?",
    options: ["2 types", "3 types", "4 types", "5 types"],
    correct: 1,
    explanation: "Il existe 3 types d'indicateurs : les indicateurs de performance, de qualité, et de moyen."
  },
  {
    id: 6,
    question: "La formule de calcul de la disponibilité est :",
    options: [
      "DT / (UT + DT) × 100",
      "UT / (UT + DT) × 100",
      "UT / DT × 100",
      "(UT - DT) / UT × 100"
    ],
    correct: 1,
    explanation: "La disponibilité = UT (Uptime) / (UT + DT) × 100, où UT est le temps de marche et DT le temps d'arrêt."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Excellent ! Vous maîtrisez bien la performance informatique.';
    if (percentage >= 60) return 'Bien ! Quelques révisions vous permettront de parfaire vos connaissances.';
    return 'Il serait bon de revoir les sections du cours avant de continuer.';
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BackToPlanButton />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="mb-6">
              <Trophy className={`h-16 w-16 mx-auto mb-4 ${getScoreColor()}`} />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Quiz terminé !
              </h1>
              <p className="text-gray-600">
                Voici vos résultats
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="text-4xl font-bold mb-2 ${getScoreColor()}">
                {score} / {questions.length}
              </div>
              <div className="text-lg text-gray-700 mb-4">
                {Math.round((score / questions.length) * 100)}% de réussite
              </div>
              <p className="text-gray-600">
                {getScoreMessage()}
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Récapitulatif des réponses
              </h3>
              {questions.map((question, index) => (
                <div key={question.id} className="bg-gray-50 rounded-lg p-4 text-left">
                  <div className="flex items-start gap-3">
                    {answers[index] === question.correct ? (
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 mb-2">
                        {question.question}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Votre réponse :</strong> {question.options[answers[index]]}
                      </p>
                      {answers[index] !== question.correct && (
                        <p className="text-sm text-green-600">
                          <strong>Bonne réponse :</strong> {question.options[question.correct]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={resetQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="h-4 w-4" />
              Recommencer le quiz
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

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
            <div className="bg-orange-100 rounded-lg p-3">
              <HelpCircle className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Quiz : Performance Informatique
              </h1>
              <p className="text-gray-600">
                Testez vos connaissances sur la mesure de la performance
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1} sur {questions.length}
              </span>
              <span className="text-sm text-gray-600">
                Score : {score} / {currentQuestion + (showResult ? 1 : 0)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-blue-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  {questions[currentQuestion].question}
                </h2>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showResult}
                      whileHover={{ scale: showResult ? 1 : 1.02 }}
                      whileTap={{ scale: showResult ? 1 : 0.98 }}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        showResult
                          ? index === questions[currentQuestion].correct
                            ? 'border-green-500 bg-green-50 text-green-800'
                            : index === selectedAnswer && index !== questions[currentQuestion].correct
                            ? 'border-red-500 bg-red-50 text-red-800'
                            : 'border-gray-200 bg-gray-50 text-gray-500'
                          : selectedAnswer === index
                          ? 'border-blue-500 bg-blue-50 text-blue-800'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showResult && index === questions[currentQuestion].correct && (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        )}
                        {showResult && index === selectedAnswer && index !== questions[currentQuestion].correct && (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6"
                >
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Explication :
                  </h3>
                  <p className="text-blue-800">
                    {questions[currentQuestion].explanation}
                  </p>
                </motion.div>
              )}

              {!showResult && (
                <button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedAnswer !== null
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {currentQuestion === questions.length - 1 ? 'Terminer le quiz' : 'Question suivante'}
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}