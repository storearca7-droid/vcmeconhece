import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { GameState, UserInfo, WrongAnswer } from './types';
import { questions } from './data/questions';
import { StartScreen } from './components/StartScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([]);

  const handleStart = (info: UserInfo) => {
    setUserInfo(info);
    setScore(0);
    setWrongAnswers([]);
    setGameState('playing');
  };

  const handleComplete = (finalScore: number, finalWrongAnswers: WrongAnswer[]) => {
    setScore(finalScore);
    setWrongAnswers(finalWrongAnswers);
    setGameState('result');
  };

  const handleRestart = () => {
    setGameState('start');
    setUserInfo(null);
    setScore(0);
    setWrongAnswers([]);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      {/* Background Decorative Accents */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] rounded-full bg-cyan-900/10 blur-[120px]" />
      </div>

      <main className="flex-1 flex items-center justify-center relative z-10 w-full p-4 md:p-6 lg:p-8">
        <AnimatePresence mode="wait">
          {gameState === 'start' && (
            <motion.div key="start" className="w-full max-w-4xl" exit={{ opacity: 0, y: -20 }}>
              <StartScreen onStart={handleStart} />
            </motion.div>
          )}

          {gameState === 'playing' && (
            <motion.div key="playing" className="w-full max-w-3xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}>
              <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
                <QuizScreen questions={questions} onComplete={handleComplete} />
              </div>
            </motion.div>
          )}

          {gameState === 'result' && userInfo && (
            <motion.div key="result" className="w-full max-w-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
               <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
                 <ResultScreen 
                   score={score} 
                   total={questions.length} 
                   userInfo={userInfo} 
                   wrongAnswers={wrongAnswers}
                   onRestart={handleRestart} 
                 />
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="relative z-10 text-center p-6 text-slate-600 text-sm">
        Desenvolvido para você testar seus conhecimentos.
      </footer>
    </div>
  );
}

