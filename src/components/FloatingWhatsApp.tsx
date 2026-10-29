import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight, ShieldCheck, Sparkles, ShoppingCart } from 'lucide-react';
import { VAREJOU_CONFIG } from '../config/varejouConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openWhatsAppWithMessage = (message: string) => {
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/${VAREJOU_CONFIG.contact.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
    setShowMenu(false);
  };

  const directDefaultMessage = encodeURIComponent('Olá! Gostaria de falar sobre o aplicativo Varejou.');

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none flex flex-col items-end">
      {/* Quick Menu Popover */}
      {showMenu && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-3 duration-200 text-slate-800">
          <div className="bg-[#06234C] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">WhatsApp Varejou</h4>
                <span className="text-[11px] text-emerald-400 font-medium">Online: {VAREJOU_CONFIG.contact.whatsappFormatted}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowMenu(false)}
              className="p-1 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Fechar menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 bg-slate-50 border-b border-slate-100 text-xs text-slate-600 leading-snug">
            Olá! Como podemos ajudar seu comércio hoje? Escolha uma opção ou fale diretamente conosco:
          </div>

          <div className="p-2 space-y-1.5">
            <button
              type="button"
              onClick={() => openWhatsAppWithMessage(VAREJOU_CONFIG.contact.whatsappMessages.contracting)}
              className="w-full text-left p-2.5 rounded-xl hover:bg-orange-50 border border-transparent hover:border-orange-200 transition-colors flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-orange-100 text-[#FF8617]">
                  <ShoppingCart className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#06234C] group-hover:text-[#FF8617]">
                    Quero Contratar (R$ 29,90)
                  </div>
                  <div className="text-[10px] text-slate-500">Tirar dúvidas e iniciar assinatura</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#FF8617]" />
            </button>

            <button
              type="button"
              onClick={() => openWhatsAppWithMessage(VAREJOU_CONFIG.contact.whatsappMessages.customSystem)}
              className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-200 transition-colors flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-blue-100 text-[#1357A6]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#06234C] group-hover:text-[#1357A6]">
                    Sistema Personalizado (RAON)
                  </div>
                  <div className="text-[10px] text-slate-500">Orçamento sob medida · Pagamento único</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#1357A6]" />
            </button>

            <button
              type="button"
              onClick={() => openWhatsAppWithMessage(VAREJOU_CONFIG.contact.whatsappMessages.support)}
              className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-colors flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#06234C]">
                    Suporte & Informações
                  </div>
                  <div className="text-[10px] text-slate-500">Falar com o time de atendimento</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        <a
          href={`https://wa.me/${VAREJOU_CONFIG.contact.whatsappRaw}?text=${directDefaultMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer font-bold text-xs"
          aria-label="Abrir WhatsApp oficial Varejou"
        >
          <MessageCircle className="w-6 h-6 fill-white stroke-none" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => setShowMenu(!showMenu)}
          className="p-3 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full shadow-lg text-xs"
          title="Opções de atendimento"
          aria-label="Opções de atendimento WhatsApp"
        >
          {showMenu ? <X className="w-4 h-4" /> : <span className="font-bold text-xs">⋮</span>}
        </button>
      </div>
    </div>
  );
};
