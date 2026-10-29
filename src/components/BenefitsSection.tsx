import React from 'react';
import { Layers, Zap, Sliders, Clock, BarChart4, Compass, HeartHandshake, ArrowRight } from 'lucide-react';
import { VAREJOU_CONFIG } from '../config/varejouConfig';

interface BenefitsSectionProps {
  onOpenCheckout: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOpenCheckout }) => {
  const getBenefitIcon = (id: string) => {
    switch (id) {
      case 'organizacao': return <Layers className="w-6 h-6 text-[#1357A6]" />;
      case 'agilidade': return <Zap className="w-6 h-6 text-[#FF8617]" />;
      case 'controle': return <Sliders className="w-6 h-6 text-[#06234C]" />;
      case 'produtividade': return <Clock className="w-6 h-6 text-emerald-600" />;
      case 'clareza': return <BarChart4 className="w-6 h-6 text-[#1357A6]" />;
      case 'liberdade': return <Compass className="w-6 h-6 text-[#FF8617]" />;
      default: return <Layers className="w-6 h-6 text-[#06234C]" />;
    }
  };

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF8617] uppercase tracking-wider mb-2">
            <span>Vantagens Reais para o Lojista</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#06234C] tracking-tight text-balance">
            MAIS TEMPO PARA VOCÊ. MAIS RESULTADOS PARA SUA LOJA.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Descubra como o Varejou transforma horas de burocracia em tranquilidade e lucro.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {VAREJOU_CONFIG.benefits.map((item) => (
            <div
              key={item.id}
              className="group bg-[#F5F8FC] hover:bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 hover:border-[#FF8617]/50 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-white group-hover:bg-orange-50 rounded-xl shadow-2xs transition-colors">
                    {getBenefitIcon(item.id)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#FF8617] transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-[#06234C] mb-2 group-hover:text-[#FF8617] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#06234C]">
                <span>Pronto para sua loja</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Quote Box */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-50 via-white to-orange-50 border border-orange-200/70 rounded-2xl p-6 sm:p-8 text-center shadow-sm">
          <HeartHandshake className="w-8 h-8 text-[#FF8617] mx-auto mb-3" />
          <p className="text-lg sm:text-xl font-bold font-display text-[#06234C] text-balance">
            "Enquanto você cuida dos seus clientes, o Varejou ajuda a organizar sua gestão."
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Tecnologia pensada por quem entende o dia a dia do comércio.
          </p>
          <div className="mt-5">
            <a
              href="https://varejou.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#06234C] hover:bg-[#081B3B] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Experimente por R$ 29,90/mês</span>
              <ArrowRight className="w-4 h-4 text-[#FF8617]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
