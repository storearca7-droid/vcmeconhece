import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { VAREJOU_CONFIG } from '../config/varejouConfig';

interface HowItWorksSectionProps {
  onOpenCheckout: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="como-funciona" className="py-20 bg-[#F5F8FC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF8617] uppercase tracking-wider mb-2">
            <span>Passo a Passo Descomplicado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#06234C] tracking-tight text-balance">
            COMEÇAR A ORGANIZAR SUA LOJA É SIMPLES.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Em quatro etapas diretas, você deixa o caos das anotações no passado e assume o controle.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
          {VAREJOU_CONFIG.timelineSteps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-50 text-[#FF6A00] font-bold text-xs rounded-lg uppercase tracking-wider">
                    {item.step}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-[#06234C] text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-[#06234C] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Etapa orientada</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clarification banner and CTA */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-2xs">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            <strong className="text-[#06234C]">Transparência Varejou:</strong> O acesso é liberado após a confirmação segura do pagamento pelo provedor homologado.
          </div>
          <a
            href="https://varejou.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#FF8617] to-[#FF6A00] hover:from-[#FF6A00] hover:to-[#E55A00] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <span>Iniciar Contratação</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
