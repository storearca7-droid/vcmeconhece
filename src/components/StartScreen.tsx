import { motion, AnimatePresence } from 'motion/react';
import { UserInfo } from '../types';
import { Play, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

interface StartScreenProps {
  onStart: (userInfo: UserInfo) => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [knowsPersonally, setKnowsPersonally] = useState<boolean | null>(null);
  const [affinity, setAffinity] = useState<'baixo' | 'médio' | 'alto' | 'intenso' | null>(null);
  const [wantsAdminToKnow, setWantsAdminToKnow] = useState<boolean | null>(null);
  
  const [error, setError] = useState('');

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Por favor, preencha nome e telefone!');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (knowsPersonally === null || !affinity || wantsAdminToKnow === null) {
      setError('Por favor, responda todas as perguntas!');
      return;
    }
    setError('');
    onStart({ 
      name: name.trim(), 
      phone: phone.trim(),
      knowsPersonally,
      affinity,
      wantsAdminToKnow
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto p-8 flex flex-col items-center justify-center min-h-[500px] bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl relative overflow-hidden"
    >
      <div className="text-center mb-8">
        <motion.h1 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-sans tracking-tight mb-3 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]"
        >
          {step === 1 ? 'Será Que Você Me Conhece?' : 'Quase lá...'}
        </motion.h1>
        <p className="text-slate-300 text-sm md:text-base">
          {step === 1 ? 'Teste agora se você realmente me conhece!' : 'Responda rapidinho antes de começarmos.'}
        </p>
      </div>

      <div className="w-full relative">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.form 
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onSubmit={handleNextStep} 
              className="w-full space-y-5"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-cyan-200 text-sm font-medium ml-1">
                  Seu Nome
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome..."
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-cyan-200 text-sm font-medium ml-1">
                  Seu Telefone (WhatsApp)
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(00) 00000-0000"
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all backdrop-blur-sm"
                />
              </div>

              {error && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm text-center"
                >
                  {error}
                </motion.p>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 transition-all"
              >
                Continuar
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.form>
          )}

          {step === 2 && (
            <motion.form 
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onSubmit={handleSubmit} 
              className="w-full space-y-6"
            >
              <div className="space-y-3">
                <label className="text-cyan-200 text-sm font-medium block">
                  Você me conhece pessoalmente?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div 
                    onClick={() => setKnowsPersonally(true)}
                    className={`cursor-pointer border rounded-xl py-3 text-center transition-all ${knowsPersonally === true ? 'bg-cyan-500/20 border-cyan-400 text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.2)]' : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:border-slate-500'}`}
                  >
                    Sim
                  </div>
                  <div 
                    onClick={() => setKnowsPersonally(false)}
                    className={`cursor-pointer border rounded-xl py-3 text-center transition-all ${knowsPersonally === false ? 'bg-cyan-500/20 border-cyan-400 text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.2)]' : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:border-slate-500'}`}
                  >
                    Não
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-cyan-200 text-sm font-medium block">
                  Qual seu grau de afinidade comigo?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['baixo', 'médio', 'alto', 'intenso'].map((level) => (
                    <div 
                      key={level}
                      onClick={() => setAffinity(level as any)}
                      className={`cursor-pointer border rounded-xl py-2 capitalize text-center transition-all capitalize ${affinity === level ? 'bg-cyan-500/20 border-cyan-400 text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.2)]' : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:border-slate-500'}`}
                    >
                      {level}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-cyan-200 text-sm font-medium block">
                  Quer que eu saiba que você respondeu?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div 
                    onClick={() => setWantsAdminToKnow(true)}
                    className={`cursor-pointer border rounded-xl py-3 text-center transition-all ${wantsAdminToKnow === true ? 'bg-cyan-500/20 border-cyan-400 text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.2)]' : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:border-slate-500'}`}
                  >
                    Sim
                  </div>
                  <div 
                    onClick={() => setWantsAdminToKnow(false)}
                    className={`cursor-pointer border rounded-xl py-3 text-center transition-all ${wantsAdminToKnow === false ? 'bg-cyan-500/20 border-cyan-400 text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.2)]' : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:border-slate-500'}`}
                  >
                    Não
                  </div>
                </div>
              </div>

              {error && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm text-center"
                >
                  {error}
                </motion.p>
              )}

              <div className="flex gap-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => { setError(''); setStep(1); }}
                  className="px-4 py-4 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors flex items-center justify-center shrink-0"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 transition-all"
                >
                  Começar Quiz
                  <Play className="w-5 h-5 fill-current" />
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
