import { motion } from 'motion/react';
import { UserInfo } from '../types';
import { Play } from 'lucide-react';
import { useState } from 'react';

interface StartScreenProps {
  onStart: (userInfo: UserInfo) => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Por favor, preencha todos os campos!');
      return;
    }
    setError('');
    onStart({ name: name.trim(), phone: phone.trim() });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto p-6 flex flex-col items-center justify-center min-h-[400px]"
    >
      <div className="text-center mb-10">
        <motion.h1 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-sans tracking-tight mb-4 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]"
        >
          Será Que Você Me Conhece?
        </motion.h1>
        <p className="text-slate-300 text-lg">
          Teste agora se você realmente me conhece!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-5">
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
          className="w-full mt-8 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 transition-all group"
        >
          Começar Quiz
          <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </form>
    </motion.div>
  );
}
