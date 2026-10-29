import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, User } from 'lucide-react';
import { VarejouLogo } from './VarejouLogo';

interface HeaderProps {
  onOpenCheckout: () => void;
  onOpenLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout, onOpenLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Original Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0"
            aria-label="Varejou Página Inicial"
          >
            <VarejouLogo variant="horizontal" size="md" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#06234C] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#FF8617]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenLogin}
              className="px-3.5 py-2 text-xs font-semibold text-[#06234C] hover:text-[#1357A6] hover:bg-slate-100/80 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-slate-500" />
              <span>Já sou cliente</span>
            </button>

            <a
              href="https://varejou.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#FF8617] to-[#FF6A00] hover:from-[#FF6A00] hover:to-[#E55A00] rounded-xl shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Começar agora</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://varejou.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-[#FF8617] rounded-lg"
            >
              Começar
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#06234C] hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Alternar menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-[#FF8617] hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-[#06234C] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4 text-slate-500" />
              <span>Já sou cliente</span>
            </button>

            <a
              href="https://varejou.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 px-4 text-center text-sm font-bold text-white bg-gradient-to-r from-[#FF8617] to-[#FF6A00] rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Começar agora — R$ 29,90/mês</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
