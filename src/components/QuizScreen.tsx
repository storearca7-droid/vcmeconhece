import { motion, AnimatePresence } from 'motion/react';
import { Question, WrongAnswer } from '../types';
import { useState } from 'react';
import { CheckCircle2, Circle, ChevronRight } from 'lucide-react';

interface QuizScreenProps {
  questions: Question[];
  onComplete: (score: number, wrongAnswers: WrongAnswer[]) => void;
}

export function QuizScreen({ questions, onComplete }: QuizScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([]);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const handleNext = () => {
    if (selectedOption === null) return;

    let newScore = score;
    let newWrongAnswers = [...wrongAnswers];

    if (selectedOption === currentQuestion.correctAnswer) {
      newScore = score + 1;
      setScore(newScore);
    } else {
      newWrongAnswers.push({
        question: currentQuestion,
        selectedOptionIndex: selectedOption
      });
      setWrongAnswers(newWrongAnswers);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      onComplete(newScore, newWrongAnswers);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-8 flex flex-col min-h-[500px]">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-cyan-400 font-medium text-sm md:text-base tracking-wide uppercase">
            Pergunta {currentIndex + 1} de {questions.length}
          </span>
          <span className="text-slate-500 text-xs px-2 py-1 bg-slate-800 rounded-full">
            Nível: {
              currentQuestion.difficulty === 'easy' ? 'Fácil' :
              currentQuestion.difficulty === 'medium' ? 'Médio' : 'Difícil'
            }
          </span>
        </div>
        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col"
        >
          {/* Question */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 leading-snug">
            {currentQuestion.text}
          </h2>

          {/* Options */}
          <div className="space-y-3 flex-1">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedOption === index;
              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedOption(index)}
                  className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all duration-200 ${
                    isSelected 
                      ? 'bg-blue-500/20 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]' 
                      : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  <span className={`text-lg ${isSelected ? 'text-cyan-100 font-medium' : 'text-slate-300'}`}>
                    {option}
                  </span>
                  {isSelected ? (
                    <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <Circle className="w-6 h-6 text-slate-600" />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Controls */}
      <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
        <motion.button
          onClick={handleNext}
          disabled={selectedOption === null}
          whileHover={selectedOption !== null ? { scale: 1.05 } : {}}
          whileTap={selectedOption !== null ? { scale: 0.95 } : {}}
          className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-lg transition-all ${
            selectedOption !== null
              ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          {currentIndex === questions.length - 1 ? 'Finalizar' : 'Próxima'}
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}
