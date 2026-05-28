import { motion } from 'motion/react';
import { UserInfo, WrongAnswer } from '../types';
import { Trophy, RefreshCcw, Star, Frown, Award, XCircle, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

interface ResultScreenProps {
  score: number;
  total: number;
  userInfo: UserInfo;
  wrongAnswers: WrongAnswer[];
  onRestart: () => void;
}

export function ResultScreen({ score, total, userInfo, wrongAnswers, onRestart }: ResultScreenProps) {
  
  useEffect(() => {
    if (score === total) {
      // Trigger special confetti for perfect score!
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#3b82f6', '#22d3ee', '#fbbf24']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#3b82f6', '#22d3ee', '#fbbf24']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [score, total]);

  let icon = <Award className="w-20 h-20 text-blue-400 mb-6 mx-auto" />;
  let message = '';
  let colorTheme = 'from-blue-500 to-cyan-400';

  if (score < 6) {
    icon = <Frown className="w-20 h-20 text-slate-400 mb-6 mx-auto" />;
    message = 'Você foi muito mal \uD83D\uDE05'; // 😅
    colorTheme = 'from-slate-500 to-slate-400';
  } else if (score >= 6 && score <= 14) {
    icon = <Star className="w-20 h-20 text-cyan-400 mb-6 mx-auto" />;
    message = 'Você conhece ele \uD83D\uDE04'; // 😄
    colorTheme = 'from-cyan-500 to-blue-400';
  } else if (score >= 15 && score < total) {
    icon = <Trophy className="w-20 h-20 text-yellow-400 mb-6 mx-auto drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />;
    message = 'Parabéns! Isso prova que você realmente conhece ele \uD83C\uDFC6'; // 🏆
    colorTheme = 'from-yellow-500 to-orange-400';
  } else if (score === total) {
    icon = <Trophy className="w-24 h-24 text-yellow-300 mb-6 mx-auto drop-shadow-[0_0_30px_rgba(253,224,71,0.8)]" />;
    message = 'INCRÍVEL! Você acertou tudo e realmente conhece ele de verdade! \uD83D\uDC51\uD83D\uDD25'; // 👑🔥
    colorTheme = 'from-yellow-400 via-yellow-300 to-yellow-500';
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className="w-full max-w-lg mx-auto p-6 md:p-10 flex flex-col items-center justify-center text-center"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {icon}
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${colorTheme} mb-4`}
      >
        {score} / {total}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl md:text-2xl text-slate-100 font-medium mb-8 leading-relaxed"
      >
        {message}
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 w-full mb-8 text-left backdrop-blur-md"
      >
        <h3 className="text-slate-400 text-sm uppercase font-bold tracking-wider mb-4 border-b border-slate-700 pb-2">Resumo da Participação</h3>
        <p className="text-slate-200 mb-2"><span className="text-cyan-400 mr-2">Participante:</span> {userInfo.name}</p>
        <p className="text-slate-200"><span className="text-cyan-400 mr-2">Contato:</span> {userInfo.phone}</p>
      </motion.div>

      {wrongAnswers.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 w-full mb-10 text-left backdrop-blur-md max-h-96 overflow-y-auto custom-scrollbar"
        >
          <h3 className="text-slate-400 text-sm uppercase font-bold tracking-wider mb-4 border-b border-slate-700 pb-2">Onde você errou</h3>
          <div className="space-y-6">
            {wrongAnswers.map((item, index) => (
              <div key={index} className="space-y-2">
                <p className="text-white font-medium">{item.question.text}</p>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-start gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-500/20">
                    <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block mb-0.5">Sua resposta:</span>
                      {item.question.options[item.selectedOptionIndex]}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-emerald-400 bg-emerald-400/10 p-3 rounded-lg border border-emerald-500/20">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block mb-0.5">Resposta certa:</span>
                      {item.question.options[item.question.correctAnswer]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className="flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-colors border border-slate-600 hover:border-cyan-500 shadow-xl"
      >
        <RefreshCcw className="w-5 h-5" />
        Tentar Novamente
      </motion.button>
    </motion.div>
  );
}
