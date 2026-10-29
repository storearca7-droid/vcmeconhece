import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { VAREJOU_CONFIG } from '../config/varejouConfig';

interface PainPointsSectionProps {
  onOpenCheckout: () => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 bg-[#F5F8FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">
            <span>Desafios da Rotina Comercial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#06234C] tracking-tight text-balance">
            SUA LOJA VENDE, MAS A GESTÃO ESTÁ TE DANDO TRABALHO?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Administrar um negócio não precisa significar perder horas preciosas tentando organizar informações espalhadas.
          </p>
        </div>

        {/* Problems Grid vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {VAREJOU_CONFIG.painPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Problem line */}
                <div className="flex items-start gap-2.5 text-slate-700 mb-4 pb-3 border-b border-slate-100">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-medium leading-snug">
                    {item.problem}
                  </p>
                </div>

                {/* Varejou Solution */}
                <div className="flex items-start gap-2.5 text-[#06234C]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold leading-snug">
                    {item.solution}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-2 text-[11px] font-medium text-slate-400 flex items-center justify-between">
                <span>Com Varejou</span>
                <span className="text-[#FF8617] font-bold">100% Digital</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Banner */}
        <div className="bg-gradient-to-r from-[#06234C] via-[#081B3B] to-[#1357A6] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden text-center lg:text-left">
          {/* Subtle glow accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD21A] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Transformação Imediata</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight">
                CHEGA DE COMPLICAÇÃO.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8617] to-[#FFD21A]">
                  CHEGOU O VAREJOU!
                </span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Substitua a desordem diária por um sistema ágil, bonito e fácil de usar. Toda a operação comercial da sua loja reunida em uma única tela.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3">
              <a
                href="https://varejou.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-[#FF8617] to-[#FF6A00] hover:from-[#FF6A00] hover:to-[#E55A00] text-white font-extrabold rounded-xl shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-sm text-center"
              >
                <span>COMEÇAR POR R$ 29,90/MÊS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#como-funciona"
                className="w-full py-3 px-4 bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold rounded-xl text-center transition-colors"
              >
                Ver como funciona o passo a passo
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
