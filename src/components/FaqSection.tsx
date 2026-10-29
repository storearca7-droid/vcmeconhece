import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Search } from 'lucide-react';
import { VAREJOU_CONFIG } from '../config/varejouConfig';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [filterCategory, setFilterCategory] = useState<'todos' | 'geral' | 'financeiro' | 'tecnico' | 'personalizado'>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = VAREJOU_CONFIG.faqs.filter((faq) => {
    const matchesCategory = filterCategory === 'todos' || faq.category === filterCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenSupport = () => {
    const text = encodeURIComponent(VAREJOU_CONFIG.contact.whatsappMessages.support);
    window.open(`https://wa.me/${VAREJOU_CONFIG.contact.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faq" className="py-20 bg-[#F5F8FC] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF8617] uppercase tracking-wider mb-2">
            <span>Dúvidas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#06234C] tracking-tight text-balance">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Respostas claras e diretas sobre o funcionamento, valores e contratação do Varejou.
          </p>
        </div>

        {/* Filter Tabs & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl overflow-x-auto w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setFilterCategory('todos')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filterCategory === 'todos'
                  ? 'bg-[#06234C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todas (13)
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('geral')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filterCategory === 'geral'
                  ? 'bg-[#06234C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Gerais
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('financeiro')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filterCategory === 'financeiro'
                  ? 'bg-[#06234C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Planos & Preço
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('tecnico')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                filterCategory === 'tecnico'
                  ? 'bg-[#06234C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Acesso & Dispositivos
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar pergunta..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8617]"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-[#06234C]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-orange-50 text-[#FF8617] rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="bg-white rounded-2xl p-8 text-center text-slate-500 border border-slate-200 text-sm">
              Nenhuma pergunta encontrada com o termo "{searchQuery}".
            </div>
          )}
        </div>

        {/* Support Callout */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xs">
          <div>
            <h4 className="text-base font-bold font-display text-[#06234C]">
              Ainda tem alguma pergunta sobre sua loja?
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Fale com nosso time de atendimento oficial no WhatsApp e tire todas as suas dúvidas em minutos.
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenSupport}
            className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com o Suporte</span>
          </button>
        </div>

      </div>
    </section>
  );
};
