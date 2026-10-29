import React, { useState } from 'react';
import {
  ShoppingCart,
  Wallet,
  Package,
  Users,
  CalendarCheck,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  Globe,
  Truck,
  CheckCircle2,
  Clock,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { VAREJOU_CONFIG, FeatureModule, FeatureItem } from '../config/varejouConfig';

interface FeaturesSectionProps {
  onOpenCheckout: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenCheckout }) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('pdv');

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingCart': return <ShoppingCart className="w-5 h-5" />;
      case 'Wallet': return <Wallet className="w-5 h-5" />;
      case 'Package': return <Package className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Truck': return <Truck className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  const getStatusBadge = (status: FeatureItem['status']) => {
    switch (status) {
      case 'disponivel':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Disponível
          </span>
        );
      case 'implantacao':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
            <Clock className="w-3 h-3 text-[#1357A6]" />
            Em implantação
          </span>
        );
      case 'previsto':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
            <Calendar className="w-3 h-3 text-slate-500" />
            Previsto
          </span>
        );
    }
  };

  const currentModule = VAREJOU_CONFIG.modules.find((m) => m.id === selectedModuleId) || VAREJOU_CONFIG.modules[0];

  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF8617] uppercase tracking-wider mb-2">
            <span>Módulos de Gestão</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#06234C] tracking-tight text-balance">
            TUDO O QUE SUA LOJA PRECISA, EM UM SÓ APLICATIVO.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Uma plataforma completa para organizar sua operação, acompanhar resultados e facilitar suas decisões diárias.
          </p>
        </div>

        {/* Modules Navigation Bar / Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 custom-scrollbar mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {VAREJOU_CONFIG.modules.map((mod) => {
            const isCurrent = mod.id === selectedModuleId;
            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => setSelectedModuleId(mod.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#06234C] text-white shadow-md'
                    : 'bg-[#F5F8FC] text-slate-600 hover:text-[#06234C] hover:bg-slate-200/60'
                }`}
              >
                <span className={isCurrent ? 'text-[#FF8617]' : 'text-slate-500'}>
                  {getModuleIcon(mod.iconName)}
                </span>
                <span>{mod.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Module Details Box */}
        <div className="bg-[#F5F8FC] rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
            <div className="flex items-start sm:items-center gap-3">
              <div className="p-3 bg-[#FF8617] text-white rounded-2xl shadow-md shadow-orange-500/20 shrink-0">
                {getModuleIcon(currentModule.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-[#FF8617] uppercase tracking-wider">
                  {currentModule.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#06234C]">
                  {currentModule.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500">
                {currentModule.features.length} recursos no módulo
              </span>
              <a
                href="https://varejou.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white hover:bg-slate-50 text-[#06234C] border border-slate-300 rounded-xl text-xs font-bold transition-all shadow-2xs hover:shadow"
              >
                Adquirir por R$ 29,90/mês
              </a>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-3xl leading-relaxed">
            {currentModule.description}
          </p>

          {/* Feature List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentModule.features.map((feat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs hover:border-[#FF8617]/50 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-sm font-bold text-[#06234C] leading-snug">
                    {feat.name}
                  </h4>
                  {getStatusBadge(feat.status)}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Module Bottom CTA */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Todos os módulos estão inclusos no plano de <strong>R$ 29,90 mensais</strong>, sem cobranças extras por função.
            </div>

            <a
              href="https://varejou.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#FF8617] to-[#FF6A00] hover:from-[#FF6A00] hover:to-[#E55A00] text-white font-extrabold rounded-xl shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm whitespace-nowrap"
            >
              <span>QUERO ORGANIZAR MINHA LOJA</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
