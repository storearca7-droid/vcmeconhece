import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Clock, AlertTriangle, XCircle, ArrowRight, Lock, MessageCircle } from 'lucide-react';
import { VAREJOU_CONFIG } from '../config/varejouConfig';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWhatsAppContact?: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    storeName: '',
    email: '',
    phone: '',
    paymentMethod: 'pix' as 'pix' | 'credit_card',
  });

  const [paymentState, setPaymentState] = useState<'form' | 'pending' | 'approved' | 'failed' | 'gateway_pending'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setIsSubmitting(true);

    // Simulate gateway handoff
    setTimeout(() => {
      setIsSubmitting(false);
      // Show gateway integration pending or real payment intent status
      setPaymentState('gateway_pending');
    }, 800);
  };

  const handleWhatsAppAssisted = () => {
    const text = encodeURIComponent(
      `Olá! Tenho interesse em contratar o Varejou (R$ 29,90/mês).\n\nMeus dados:\nNome: ${formData.name || 'Lojista'}\nLoja: ${formData.storeName || 'Minha Loja'}\nWhatsApp: ${formData.phone || 'Em contato'}\nE-mail: ${formData.email || 'Não informado'}\n\nPodem me orientar para ativar minha conta?`
    );
    window.open(`https://wa.me/${VAREJOU_CONFIG.contact.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-850"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#06234C] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFD21A] mb-1">
            <Lock className="w-3.5 h-3.5" />
            Contratação Segura Varejou
          </div>
          <h3 className="text-xl md:text-2xl font-bold font-display">
            Assinatura Plano Mensal
          </h3>
          <p className="text-slate-300 text-sm mt-1">
            Gestão completa da sua loja por apenas{' '}
            <span className="text-[#FF8617] font-bold">R$ 29,90/mês</span>
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {paymentState === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#F5F8FC] border border-blue-100 rounded-xl p-4 text-xs text-slate-600 space-y-1.5">
                <div className="font-semibold text-[#06234C] flex items-center gap-1.5 text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#FF8617]" />
                  Condições de Assinatura Transparente
                </div>
                <p>• Cobrança recorrente de R$ 29,90 cobrada a cada 30 dias.</p>
                <p>• Cancelamento a qualquer momento sem carência ou multas.</p>
                <p>• Acesso ao sistema liberado após a confirmação do pagamento.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Mariana Silva"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF8617] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Nome da sua Loja ou Comércio *
                </label>
                <input
                  type="text"
                  required
                  value={formData.storeName}
                  onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                  placeholder="Ex: Boutique Bella Flor"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF8617] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp para Acesso *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF8617] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    E-mail Comercial *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="voce@sualoja.com.br"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#FF8617] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Forma de Pagamento Preferida
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'pix' })}
                    className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition-all ${
                      formData.paymentMethod === 'pix'
                        ? 'border-[#FF8617] bg-orange-50 text-[#FF6A00] font-semibold'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Pix (Ativação Rápida)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'credit_card' })}
                    className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition-all ${
                      formData.paymentMethod === 'credit_card'
                        ? 'border-[#FF8617] bg-orange-50 text-[#FF6A00] font-semibold'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Cartão de Crédito
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-[#FF8617] to-[#FF6A00] hover:from-[#FF6A00] hover:to-[#E55A00] text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Processando solicitação...</span>
                  ) : (
                    <>
                      <span>Prosseguir para Contratação</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500">
                Seus dados estão protegidos conforme a LGPD. Não armazenamos números de cartão de crédito.
              </p>
            </form>
          )}

          {paymentState === 'gateway_pending' && (
            <div className="text-center space-y-4 py-3">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto border border-amber-200">
                <Clock className="w-7 h-7 animate-pulse" />
              </div>
              <h4 className="text-xl font-bold text-[#06234C]">
                Solicitação Recebida com Sucesso!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Olá, <strong>{formData.name}</strong>! Seus dados para a loja{' '}
                <strong>{formData.storeName || 'sua loja'}</strong> foram registrados.
              </p>

              <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 text-xs text-left text-amber-900 space-y-2">
                <div className="font-semibold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  Status da Integração de Pagamento
                </div>
                <p>
                  O gateway de pagamento automático está sendo finalizado com os dados cadastrais da empresa administradora.
                  Conforme a política de transparência, a liberação de credenciais ocorre mediante confirmação do pagamento.
                </p>
                <p>
                  Para ativar sua loja agora mesmo com atendimento guiado e suporte dedicado, fale com nosso time comercial no WhatsApp:
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleWhatsAppAssisted}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Concluir Ativação via WhatsApp</span>
                </button>

                <div className="flex justify-center gap-2 text-xs text-slate-500 pt-2">
                  <span>Simular status do gateway:</span>
                  <button
                    onClick={() => setPaymentState('approved')}
                    className="text-emerald-600 hover:underline font-semibold"
                  >
                    Aprovado
                  </button>
                  <span>·</span>
                  <button
                    onClick={() => setPaymentState('failed')}
                    className="text-red-500 hover:underline font-semibold"
                  >
                    Recusado
                  </button>
                  <span>·</span>
                  <button
                    onClick={() => setPaymentState('form')}
                    className="text-slate-500 hover:underline"
                  >
                    Voltar
                  </button>
                </div>
              </div>
            </div>
          )}

          {paymentState === 'approved' && (
            <div className="text-center space-y-4 py-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-emerald-800">
                Pagamento Aprovado e Assinatura Ativa!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Parabéns! Sua conta no Varejou foi provisionada. Enviamos as instruções de login para{' '}
                <strong>{formData.email || 'seu e-mail'}</strong> e WhatsApp{' '}
                <strong>{formData.phone || 'cadastrado'}</strong>.
              </p>
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-900 text-left">
                <div className="font-semibold mb-1">Próximos passos:</div>
                <p>1. Acesse o portal com seu e-mail e a senha temporária enviada.</p>
                <p>2. Complete o cadastro dos seus primeiros produtos e estoque inicial.</p>
                <p>3. Baixe ou abra no seu smartphone para vender no balcão.</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 px-4 bg-[#06234C] hover:bg-[#081B3B] text-white font-semibold rounded-xl transition-all"
              >
                Concluir e Fechar
              </button>
            </div>
          )}

          {paymentState === 'failed' && (
            <div className="text-center space-y-4 py-4">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto border border-red-200">
                <XCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-red-800">
                Transação Recusada pela Operadora
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Não foi possível confirmar a cobrança neste momento. Verifique os dados ou selecione outra forma de pagamento.
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentState('form')}
                  className="flex-1 py-2.5 px-4 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-sm transition-all"
                >
                  Tentar Novamente
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppAssisted}
                  className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ajuda no WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
