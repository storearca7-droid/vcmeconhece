import React from 'react';
import { Smartphone, CheckCircle2, Zap, ArrowRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { VAREJOU_CONFIG } from '../config/varejouConfig';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F5F8FC] via-white to-[#F5F8FC]">
      {/* Decorative background geometry */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-orange-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-10 left-0 w-88 h-88 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Category lead-in */}
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#06234C] tracking-wide">
              <span className="text-[#FF8617] font-bold">VAREJOU</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600 font-medium">{VAREJOU_CONFIG.brand.category}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-black font-display text-[#06234C] leading-[1.15] tracking-tight text-balance">
              SUA LOJA NA PALMA DA MÃO.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8617] via-[#FF6A00] to-[#FF4500]">
                SEU NEGÓCIO NO CONTROLE.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Chega de perder tempo com planilhas, anotações e informações espalhadas! Com o <strong>Varejou</strong>, você controla vendas, estoque, clientes, caixa e financeiro em um só lugar, pelo celular ou computador, de onde estiver.
            </p>

            {/* Distinctive highlighted values */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700 py-1">
              <div className="flex items-center gap-1.5 text-[#06234C]">
                <CheckCircle2 className="w-4 h-4 text-[#FF8617]" />
                <span>Sua loja na palma da mão</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline text-slate-300">·</span>
              <div className="flex items-center gap-1.5 text-[#06234C]">
                <CheckCircle2 className="w-4 h-4 text-[#FF8617]" />
                <span>Mais controle</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline text-slate-300">·</span>
              <div className="flex items-center gap-1.5 text-[#06234C]">
                <CheckCircle2 className="w-4 h-4 text-[#FF8617]" />
                <span>Mais tempo</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline text-slate-300">·</span>
              <div className="flex items-center gap-1.5 text-[#06234C]">
                <CheckCircle2 className="w-4 h-4 text-[#FF8617]" />
                <span>Mais resultados</span>
              </div>
            </div>

            {/* Single Primary Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={VAREJOU_CONFIG.urls.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-extrabold text-white bg-gradient-to-r from-[#FF8617] via-[#FF6A00] to-[#E55A00] hover:brightness-105 rounded-xl shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>ADQUIRA AGORA — R$ 29,90/MÊS</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </a>
            </div>

            {/* 3 Core Benefits with Icons */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl border border-slate-100">
                <div className="p-2 bg-blue-50 text-[#1357A6] rounded-lg shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#06234C] leading-snug">Celular e PC</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Acesso instantâneo de qualquer dispositivo</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl border border-slate-100">
                <div className="p-2 bg-orange-50 text-[#FF8617] rounded-lg shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#06234C] leading-snug">Gestão Integrada</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Vendas, estoque, caixa e crediário juntos</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl border border-slate-100">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#06234C] leading-snug">Mais Praticidade</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Simples, intuitivo e sem complicação</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Master Varejou 3D Composition with Floating Animation & Dynamic Glow */}
          <div className="lg:col-span-6 relative flex items-center justify-center select-none">
            <div className="relative w-full max-w-xl mx-auto flex flex-col items-center">
              
              {/* Animated pulsating ambient glow backdrop */}
              <motion.div
                animate={{
                  scale: [0.92, 1.08, 0.92],
                  opacity: [0.35, 0.65, 0.35],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-tr from-[#FF8617]/35 via-[#FFD21A]/30 to-[#1357A6]/25 rounded-full blur-3xl transform scale-95 pointer-events-none"
              />

              {/* Secondary soft rotating light ring effect */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-[#FF8617]/20 pointer-events-none"
              />

              {/* Floating Orbit Badge 1 (Top-Right) */}
              <motion.div
                animate={{
                  y: [6, -8, 6],
                  x: [-2, 4, -2],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="absolute -top-2 right-2 sm:right-6 z-20 flex items-center gap-2 px-3.5 py-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-orange-200/80 text-xs font-bold text-[#06234C]"
              >
                <div className="p-1 rounded-full bg-emerald-50 text-emerald-600">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <span>Vendas em Tempo Real</span>
              </motion.div>

              {/* Floating Orbit Badge 2 (Bottom-Left) */}
              <motion.div
                animate={{
                  y: [-6, 8, -6],
                  x: [3, -3, 3],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="absolute -bottom-3 left-2 sm:left-4 z-20 flex items-center gap-2 px-3.5 py-2 bg-[#06234C]/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-700 text-xs font-bold text-white"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFD21A]" />
                <span>Vendeu, Controlou, Lucrou!</span>
              </motion.div>

              {/* Master 3D Varejou Image Asset with Smooth Levitating Float Animation */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-0.6, 0.6, -0.6],
                }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="relative z-10 w-full cursor-pointer"
              >
                <img
                  src="/assets/aistudio/top_3c38211a.png"
                  alt="Varejou — Vendeu, controlou, lucrou! Sistema Inteligente para Lojas e Varejo"
                  className="w-full h-auto object-contain drop-shadow-[0_25px_40px_rgba(6,35,76,0.22)] filter"
                  loading="eager"
                />
              </motion.div>

              {/* Quality caption below master visual */}
              <div className="mt-3 text-center text-xs text-slate-500 font-medium">
                Vendeu, controlou, lucrou! O sistema de gestão preferido dos lojistas
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
