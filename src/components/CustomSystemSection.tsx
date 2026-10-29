import React from 'react';
import { Sparkles, Check, MessageCircle, Code2, Palette, Cpu, Workflow, ArrowRight } from 'lucide-react';
import { VAREJOU_CONFIG } from '../config/varejouConfig';

export const CustomSystemSection: React.FC = () => {
  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent(VAREJOU_CONFIG.contact.whatsappMessages.customSystem);
    window.open(`https://wa.me/${VAREJOU_CONFIG.contact.whatsappRaw}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const customHighlights = [
    { title: 'Desenvolvimento sob medida', desc: 'Sistemas moldados exatamente para a rotina única da sua empresa' },
    { title: 'Identidade visual própria', desc: 'Sua marca, suas cores e seu logotipo aplicados no aplicativo' },
    { title: 'Funcionalidades específicas', desc: 'Módulos construídos de acordo com sua operação interna' },
    { title: 'Fluxos operacionais sob demanda', desc: 'Automações e regras comerciais exclusivas do seu negócio' },
    { title: 'Integrações conforme viabilidade', desc: 'Conexões com APIs, emissores fiscais e serviços externos' },
    { title: 'Implantação e treinamento guiado', desc: 'Assessoria completa da Agência RAON para capacitar sua equipe' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#081B3B] via-[#06234C] to-[#0B2E5C] text-white relative overflow-hidden">
      {/* Decorative aura */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF8617]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Offer Details */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill-free Editorial Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD21A] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Soluções Corporativas Exclusivas · Agência RAON</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-black font-display tracking-tight text-balance">
              QUER UM SISTEMA EXCLUSIVO PARA SUA EMPRESA?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Seu negócio tem necessidades específicas? A <strong>Agência RAON</strong> também desenvolve soluções personalizadas de ponta a ponta, com funcionalidades adaptadas à realidade exata da sua operação.
            </p>

            {/* Custom Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-left">
              {customHighlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-5 h-5 rounded-full bg-[#FF8617] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{item.title}</h4>
                    <p className="text-[11px] text-slate-300 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Explanatory note */}
            <p className="text-xs text-slate-400 italic">
              * O pagamento único refere-se ao desenvolvimento do software contratado conforme escopo da proposta técnica. Hospedagem em nuvem, integrações de terceiros, suporte e manutenções adicionais têm suas condições detalhadas no orçamento.
            </p>

          </div>

          {/* Right Column: Proposal Box & WhatsApp CTA */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-center space-y-6">
              
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#06234C] text-xs font-black rounded-full uppercase tracking-wider border border-blue-200">
                PAGAMENTO ÚNICO — SOB ORÇAMENTO
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black font-display text-[#06234C]">
                  Software Sob Medida
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Fale diretamente com os especialistas em tecnologia da Agência RAON e receba uma análise de viabilidade para seu projeto.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F8FC] border border-slate-200 text-xs text-left text-slate-600 space-y-2">
                <div className="font-bold text-[#06234C] flex items-center gap-1.5">
                  <Workflow className="w-4 h-4 text-[#FF8617]" />
                  Como é feito o projeto personalizado:
                </div>
                <p>1. Reunião de alinhamento e levantamento de requisitos.</p>
                <p>2. Proposta comercial transparente com escopo fechado.</p>
                <p>3. Design exclusivo e desenvolvimento ágil.</p>
                <p>4. Implantação e entrega com acompanhamento.</p>
              </div>

              <button
                type="button"
                onClick={handleOpenWhatsApp}
                className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                <span>QUERO MEU APLICATIVO PERSONALIZADO</span>
              </button>

              <div className="text-[11px] text-slate-400">
                Atendimento direto via WhatsApp oficial: {VAREJOU_CONFIG.contact.whatsappFormatted}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
