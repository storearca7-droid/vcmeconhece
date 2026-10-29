import React, { useState } from 'react';
import { X, Lock, ArrowRight, Store, KeyRound, MessageCircle } from 'lucide-react';
import { VAREJOU_CONFIG } from '../config/varejouConfig';

interface CustomerLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const CustomerLoginModal: React.FC<CustomerLoginModalProps> = ({
  isOpen,
  onClose,
  onOpenCheckout,
}) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification(null);

    // Demonstration authentication handler
    setTimeout(() => {
      setIsLoading(false);
      setNotification('Identificando sua loja... Redirecionando para o ambiente seguro do aplicativo SaaS.');
    }, 900);
  };

  const handleHelpViaWhatsApp = () => {
    const text = encodeURIComponent('Olá! Já sou assinante do Varejou e preciso de auxílio para acessar meu painel.');
    window.open(`https://wa.me/${VAREJOU_CONFIG.contact.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#06234C] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFD21A] mb-1">
            <Store className="w-3.5 h-3.5" />
            Portal do Lojista
          </div>
          <h3 className="text-xl font-bold font-display">Acessar Minha Loja</h3>
          <p className="text-slate-300 text-xs mt-1">
            Faça login para gerenciar suas vendas, estoque e caixa
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {notification ? (
            <div className="text-center py-4 space-y-3">
              <div className="w-12 h-12 bg-blue-50 text-[#1357A6] rounded-full flex items-center justify-center mx-auto border border-blue-200">
                <Lock className="w-6 h-6 animate-pulse" />
              </div>
              <p className="text-sm font-semibold text-[#06234C]">{notification}</p>
              <p className="text-xs text-slate-500">
                Conectando ao servidor principal Varejou Cloud...
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setNotification(null)}
                  className="text-xs text-[#FF8617] hover:underline"
                >
                  Voltar ao formulário
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  E-mail ou WhatsApp Cadastrado
                </label>
                <input
                  type="text"
                  required
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder="seu@email.com ou (00) 00000-0000"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#06234C] focus:border-transparent"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Sua Senha
                  </label>
                  <button
                    type="button"
                    onClick={handleHelpViaWhatsApp}
                    className="text-xs text-[#FF8617] hover:underline"
                  >
                    Esqueceu a senha?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#06234C] focus:border-transparent"
                  />
                  <KeyRound className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-[#06234C] hover:bg-[#081B3B] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-75"
                >
                  {isLoading ? (
                    <span>Entrando...</span>
                  ) : (
                    <>
                      <span>Entrar no Sistema</span>
                      <ArrowRight className="w-4 h-4 text-[#FF8617]" />
                    </>
                  )}
                </button>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Ainda não é cliente?</span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenCheckout();
                  }}
                  className="font-bold text-[#FF8617] hover:underline"
                >
                  Assine por R$ 29,90/mês
                </button>
              </div>

              <button
                type="button"
                onClick={handleHelpViaWhatsApp}
                className="w-full mt-2 py-2 text-xs text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Precisa de suporte com seu acesso? Fale no WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
