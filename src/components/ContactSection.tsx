import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Mail, MapPin, ShieldCheck, Instagram } from 'lucide-react';
import { VAREJOU_CONFIG } from '../config/varejouConfig';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    whatsapp: '',
    email: '',
    segment: 'Lojas de Roupas',
    interestType: 'plano_mensal' as 'plano_mensal' | 'sistema_personalizado',
    message: '',
    consent: true,
    // Honeypot spam protection
    websiteBotField: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap
    if (formData.websiteBotField) {
      setStatus('error');
      setErrorMessage('Detecção automática de bot. Envio cancelado.');
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    if (!formData.consent) {
      setStatus('error');
      setErrorMessage('É necessário consentir com o tratamento dos dados comerciais para contato.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Store lead record in localStorage for persistency and audit
      const leadRecord = {
        id: `lead_${Date.now()}`,
        name: formData.name,
        company: formData.company,
        whatsapp: formData.whatsapp,
        email: formData.email,
        segment: formData.segment,
        interestType: formData.interestType,
        message: formData.message,
        createdAt: new Date().toISOString(),
      };

      const existingLeads = JSON.parse(localStorage.getItem('varejou_leads') || '[]');
      existingLeads.push(leadRecord);
      localStorage.setItem('varejou_leads', JSON.stringify(existingLeads));

      // Attempt async cloud persistence
      try {
        const { saveCommercialLead } = await import('../lib/firebaseUtils');
        await saveCommercialLead({
          name: formData.name,
          company: formData.company,
          whatsapp: formData.whatsapp,
          email: formData.email,
          segment: formData.segment,
          interestType: formData.interestType,
          message: formData.message,
        });
      } catch (cloudErr) {
        // Fallback to local storage if cloud is not authenticated
        console.warn('Persistência em nuvem ignorada; salvo localmente:', cloudErr);
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMessage('Não foi possível enviar sua mensagem no momento. Tente novamente ou use nosso WhatsApp.');
    }
  };

  const handleOpenWhatsAppFromContact = () => {
    const text = encodeURIComponent(
      `Olá! Gostaria de falar sobre o Varejou.\n\nNome: ${formData.name || 'Lojista'}\nEmpresa: ${formData.company || 'Minha Loja'}\nInteresse: ${
        formData.interestType === 'plano_mensal' ? 'Plano Mensal (R$ 29,90)' : 'Sistema Personalizado (Sob Orçamento)'
      }\nSegmento: ${formData.segment}\nMensagem: ${formData.message || 'Gostaria de mais detalhes.'}`
    );
    window.open(`https://wa.me/${VAREJOU_CONFIG.contact.whatsappRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF8617] uppercase tracking-wider mb-2">
            <span>Fale Conosco</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#06234C] tracking-tight text-balance">
            VAMOS CONVERSAR SOBRE O SEU COMÉRCIO?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Preencha o formulário ou fale com nossa equipe comercial diretamente pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contacts & Institutional Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#06234C] text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold font-display">Canais Oficiais</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Atendimento consultivo para tirar dúvidas sobre o sistema, contratação ou desenvolvimento exclusivo.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`https://wa.me/${VAREJOU_CONFIG.contact.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white"
                >
                  <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">WhatsApp Comercial</span>
                    <span className="text-sm font-bold">{VAREJOU_CONFIG.contact.whatsappFormatted}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${VAREJOU_CONFIG.contact.emailCommercial}`}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white"
                >
                  <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">E-mail Comercial</span>
                    <span className="text-sm font-bold">{VAREJOU_CONFIG.contact.emailCommercial}</span>
                  </div>
                </a>

                <a
                  href={VAREJOU_CONFIG.brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white"
                >
                  <div className="p-2 bg-pink-500/20 text-pink-400 rounded-lg shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Instagram</span>
                    <span className="text-sm font-bold">{VAREJOU_CONFIG.brand.instagramHandle}</span>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-white">Desenvolvido por:</div>
                <p>{VAREJOU_CONFIG.brand.developedBy}</p>
                <p className="text-[11px] text-slate-400">Atendimento de segunda a sábado em horário comercial.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Contact Form */}
          <div className="lg:col-span-7 bg-[#F5F8FC] rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200">
            {status === 'success' ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-display text-[#06234C]">
                  Mensagem Enviada com Sucesso!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Obrigado pelo contato, <strong>{formData.name}</strong>! Seus dados foram registrados com segurança. Nossa equipe entrará em contato em breve pelo WhatsApp <strong>{formData.whatsapp}</strong>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        company: '',
                        whatsapp: '',
                        email: '',
                        segment: 'Lojas de Roupas',
                        interestType: 'plano_mensal',
                        message: '',
                        consent: true,
                        websiteBotField: '',
                      });
                    }}
                    className="px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-xs font-semibold rounded-xl text-slate-700 transition-colors"
                  >
                    Enviar Outra Mensagem
                  </button>
                  <button
                    type="button"
                    onClick={handleOpenWhatsAppFromContact}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Continuar no WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot hidden input for spam protection */}
                <input
                  type="text"
                  name="website_url_check"
                  value={formData.websiteBotField}
                  onChange={(e) => setFormData({ ...formData, websiteBotField: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {status === 'error' && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Carlos Eduardo"
                      className="w-full px-4 py-2.5 text-sm bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF8617]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Nome da Empresa / Loja
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ex: Loja Central"
                      className="w-full px-4 py-2.5 text-sm bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF8617]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-2.5 text-sm bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF8617]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      E-mail Comercial *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-2.5 text-sm bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF8617]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Segmento da Loja
                    </label>
                    <select
                      value={formData.segment}
                      onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF8617]"
                    >
                      <option value="Lojas de Roupas">Lojas de Roupas</option>
                      <option value="Lojas de Calçados e Tênis">Lojas de Calçados e Tênis</option>
                      <option value="Cosméticos e Maquiagem">Cosméticos e Maquiagem</option>
                      <option value="Celulares e Eletrônicos">Celulares e Eletrônicos</option>
                      <option value="Acessórios e Óculos">Acessórios e Óculos</option>
                      <option value="Lojas de Variedades">Lojas de Variedades</option>
                      <option value="Lojas de Lingerie">Lojas de Lingerie</option>
                      <option value="Pequenos e Médios Comércios">Pequenos e Médios Comércios</option>
                      <option value="Outro Segmento">Outro Segmento Comercial</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Tipo de Interesse
                    </label>
                    <select
                      value={formData.interestType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          interestType: e.target.value as 'plano_mensal' | 'sistema_personalizado',
                        })
                      }
                      className="w-full px-4 py-2.5 text-sm bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF8617]"
                    >
                      <option value="plano_mensal">Plano Mensal Varejou (R$ 29,90/mês)</option>
                      <option value="sistema_personalizado">Sistema Personalizado (Agência RAON)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Sua Mensagem ou Dúvida
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte um pouco sobre sua rotina ou as dúvidas que gostaria de esclarecer..."
                    className="w-full px-4 py-2.5 text-sm bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#FF8617] resize-none"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="consent-check"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 text-[#FF8617] rounded border-slate-300 focus:ring-[#FF8617]"
                  />
                  <label htmlFor="consent-check" className="text-xs text-slate-500 leading-tight">
                    Concordo com o tratamento dos meus dados de contato para retorno comercial sobre o Varejou, conforme a nossa Política de Privacidade.
                  </label>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="flex-1 py-3.5 px-6 bg-gradient-to-r from-[#FF8617] to-[#FF6A00] hover:from-[#FF6A00] hover:to-[#E55A00] text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {status === 'submitting' ? (
                      <span>Enviando dados...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensagem Comercial</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenWhatsAppFromContact}
                    className="py-3.5 px-5 bg-white border border-emerald-500/40 text-emerald-700 hover:bg-emerald-50 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Chamar no WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
