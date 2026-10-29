import React from 'react';
import { Smartphone, CheckCircle2, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { VAREJOU_CONFIG } from '../config/varejouConfig';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-[#F5F8FC] via-white to-[#F5F8FC]">
      {/* Decorative background geometry */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
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

          {/* Right Column: Master Varejou 3D Composition with Shopping Cart & Characters */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-xl mx-auto flex flex-col items-center">
              
              {/* Radial glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8617]/20 via-[#FFD21A]/25 to-blue-400/10 rounded-full blur-2xl transform scale-90 pointer-events-none" />

              {/* Master 3D Varejou Image Asset */}
              <div className="relative z-10 w-full transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="/assets/aistudio/top_3c38211a.png"
                  alt="Varejou — Vendeu, controlou, lucrou! Sistema Inteligente para Lojas e Varejo"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(6,35,76,0.18)]"
                  loading="eager"
                />
              </div>

              {/* Subtle quality trust badge below master visual */}
              <div className="mt-2 text-center text-xs text-slate-500 font-medium">
                Vendeu, controlou, lucrou! O sistema de gestão preferido dos lojistas
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
