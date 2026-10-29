import React from 'react';
import { Instagram, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { VarejouLogo } from './VarejouLogo';
import { VAREJOU_CONFIG } from '../config/varejouConfig';
import { LegalDocType } from './LegalModal';

interface FooterProps {
  onOpenLegal: (type: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06234C] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <VarejouLogo variant="horizontal" theme="dark" size="lg" />
            <p className="text-[#FF8617] font-semibold text-sm">
              "{VAREJOU_CONFIG.brand.sloganPrincipal}"
            </p>
            <p className="text-slate-300 text-xs sm:text-sm max-w-sm leading-relaxed">
              Gestão inteligente para quem quer mais organização, praticidade e controle no varejo.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={VAREJOU_CONFIG.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FF8617] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Varejou"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${VAREJOU_CONFIG.contact.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp Varejou"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD21A]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">Planos e Preços</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Legal and Compliance Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD21A]">
              Transparência & Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Política de Privacidade (LGPD)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('cancellation')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Política de Cancelamento
                </button>
              </li>
            </ul>

            <div className="pt-3 text-xs text-slate-400">
              <span className="block font-semibold text-slate-300">Atendimento Oficial:</span>
              <span className="block">WhatsApp: {VAREJOU_CONFIG.contact.whatsappFormatted}</span>
              <span className="block">E-mail: {VAREJOU_CONFIG.contact.emailCommercial}</span>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} VAREJOU. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-2">
            <span>Desenvolvido pela</span>
            <span className="text-white font-semibold">Agência RAON — Marketing, IA & Tecnologia</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <span>Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
