import React from 'react';
import { Check, ShieldCheck, ArrowRight, Zap, RefreshCw, HelpCircle } from 'lucide-react';
import { VAREJOU_CONFIG } from '../config/varejouConfig';

interface PricingSectionProps {
  onOpenCheckout: () => void;
  onOpenCancellationPolicy?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenCheckout,
  onOpenCancellationPolicy,
}) => {
  const planModules = [
    'PDV ágil e frente de caixa completo',
    'Cadastro de produtos com grade e estoque',
    'Ficha de clientes com histórico de compras',
    'Controle de vendas a prazo e crediário',
    'Financeiro com receitas, despesas e fluxo',
    'Dashboard comercial com métricas diárias',
    'Relatórios gerenciais e exportação PDF/Excel',
    'Acesso individual para equipe de vendas',
    'Catálogo online para divulgar no WhatsApp',
    'Acesso simultâneo pelo celular e computador',
  ];

  return (
    <section id="planos" className="py-20 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF8617] uppercase tracking-wider mb-2">
            <span>Investimento Acessível</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#06234C] tracking-tight text-balance">
            GESTÃO INTELIGENTE POR UM PREÇO QUE CABE NO SEU NEGÓCIO.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Tenha mais organização e controle sem precisar investir em sistemas complicados ou mensalidades abusivas.
          </p>
        </div>

        {/* Featured Commercial Card */}
        <div className="max-w-lg mx-auto bg-white rounded-3xl border-2 border-[#FF8617] shadow-xl shadow-orange-500/10 p-6 sm:p-10 relative">
          
          {/* Top Tag */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF8617] to-[#FF6A00] text-white px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm">
            Plano Recomendado
          </div>

          <div className="text-center pb-6 border-b border-slate-100">
            <h3 className="text-xl sm:text-2xl font-black font-display text-[#06234C]">
              {VAREJOU_CONFIG.pricing.planName}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {VAREJOU_CONFIG.pricing.subtitle}
            </p>

            {/* Price Lockup */}
            <div className="mt-6 flex items-baseline justify-center gap-1">
              <span className="text-4xl sm:text-5xl font-black font-display text-[#06234C] tabular-nums">
                {VAREJOU_CONFIG.pricing.monthlyPrice}
              </span>
              <span className="text-sm font-semibold text-slate-500">
                {VAREJOU_CONFIG.pricing.period}
              </span>
            </div>

            <div className="mt-2 text-xs font-medium text-emerald-600 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Sem taxa de adesão · Cancele quando quiser</span>
            </div>
          </div>

          {/* Included Features List */}
          <div className="py-6 space-y-3">
            <div className="text-xs font-bold text-[#06234C] uppercase tracking-wider mb-2">
              Tudo o que está incluso no seu plano:
            </div>
            {planModules.map((item, index) => (
              <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <a
              href="https://varejou.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-gradient-to-r from-[#FF8617] via-[#FF6A00] to-[#E55A00] hover:brightness-105 text-white font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>ADQUIRA AGORA — ACESSO IMEDIATO</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Transparent commercial conditions */}
          <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] text-slate-500 text-center space-y-1">
            <p>
              Cobrança recorrente mensal de R$ 29,90. Ativação após confirmação segura pelo gateway.
            </p>
            <p>
              Deseja saber mais sobre as condições?{' '}
              {onOpenCancellationPolicy ? (
                <button
                  type="button"
                  onClick={onOpenCancellationPolicy}
                  className="text-[#FF8617] underline font-medium hover:text-[#06234C]"
                >
                  Veja nossa política de cancelamento
                </button>
              ) : (
                <a href="#faq" className="text-[#FF8617] underline font-medium">
                  Tire suas dúvidas no FAQ
                </a>
              )}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
