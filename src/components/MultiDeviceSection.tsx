import React from 'react';
import { Smartphone, Laptop, Wifi, Shield, ArrowRight, Check } from 'lucide-react';

interface MultiDeviceSectionProps {
  onOpenCheckout: () => void;
}

export const MultiDeviceSection: React.FC<MultiDeviceSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 bg-[#06234C] text-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1357A6]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF8617]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD21A] uppercase tracking-wider mb-2">
            <span>Mobilidade Total</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-balance">
            SUA LOJA NÃO PARA. E SUA GESTÃO TAMBÉM NÃO PRECISA PARAR.
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Esteja na loja, em casa ou viajando. Acesse o Varejou pelo celular ou computador e acompanhe as informações do seu negócio com praticidade.
          </p>
          <div className="mt-4 text-sm font-semibold text-[#FF8617]">
            "Um sistema. Diferentes dispositivos. Mais liberdade."
          </div>
        </div>

        {/* Visual Multi-Device Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Laptop Browser Mockup */}
          <div className="lg:col-span-7 bg-[#081B3B] p-4 sm:p-6 rounded-3xl border border-slate-700/80 shadow-2xl relative">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-700/60 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-[11px] text-slate-300 bg-slate-800/80 px-3 py-1 rounded-md ml-2 flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-emerald-400" />
                https://app.varejou.com.br/painel
              </span>
            </div>

            {/* Simulated Desktop App View */}
            <div className="bg-white text-slate-900 rounded-xl p-4 sm:p-5 shadow-inner space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-bold font-display text-sm text-[#06234C]">Varejou PDV Cloud</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">Caixa Aberto</span>
                </div>
                <span className="text-xs text-slate-500">Operador: Mariana (Loja Centro)</span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-[#F5F8FC] rounded-lg border border-slate-200">
                  <div className="text-slate-500">Faturamento Mês</div>
                  <div className="text-base sm:text-lg font-bold text-[#06234C] tabular-nums mt-0.5">R$ 48.920</div>
                  <div className="text-[10px] text-emerald-600 mt-0.5">+18% meta</div>
                </div>
                <div className="p-3 bg-[#F5F8FC] rounded-lg border border-slate-200">
                  <div className="text-slate-500">Vendas a Prazo</div>
                  <div className="text-base sm:text-lg font-bold text-[#1357A6] tabular-nums mt-0.5">R$ 12.350</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">42 parcelas a vencer</div>
                </div>
                <div className="p-3 bg-[#F5F8FC] rounded-lg border border-slate-200">
                  <div className="text-slate-500">Total Produtos</div>
                  <div className="text-base sm:text-lg font-bold text-[#FF8617] tabular-nums mt-0.5">1.428 itens</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Grade completa</div>
                </div>
              </div>

              {/* Sample Table Row */}
              <div className="rounded-lg border border-slate-100 overflow-hidden text-xs">
                <div className="bg-slate-50 px-3 py-2 font-semibold text-slate-600 flex justify-between">
                  <span>Últimas Vendas no Balcão</span>
                  <span>Forma / Valor</span>
                </div>
                <div className="divide-y divide-slate-100 text-slate-700">
                  <div className="px-3 py-2 flex justify-between items-center">
                    <span>Vestido Midi Linho Cru (M)</span>
                    <span className="font-semibold text-emerald-700">Pix · R$ 189,90</span>
                  </div>
                  <div className="px-3 py-2 flex justify-between items-center">
                    <span>Sandália Couro Confort 37</span>
                    <span className="font-semibold text-slate-800">Cartão 3x · R$ 249,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smartphone Browser Mockup */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="bg-[#081B3B] p-5 rounded-3xl border border-slate-700 max-w-sm mx-auto w-full shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700/80 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-[#FF8617]" />
                  <span className="font-semibold">Versão Mobile</span>
                </div>
                <span className="text-[10px] text-slate-400">Navegador Web</span>
              </div>

              <div className="bg-white text-slate-900 rounded-xl p-4 space-y-3">
                <div className="text-xs font-bold text-[#06234C]">Vendas no Bolso</div>
                <div className="p-3 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="text-[11px] text-slate-600">Total vendido hoje</div>
                  <div className="text-xl font-black text-[#FF8617] tabular-nums">R$ 3.840,50</div>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600 py-1 border-b border-slate-100">
                    <span>Dinheiro em Caixa:</span>
                    <span className="font-bold">R$ 650,00</span>
                  </div>
                  <div className="flex justify-between text-slate-600 py-1 border-b border-slate-100">
                    <span>Recebidos via Pix:</span>
                    <span className="font-bold">R$ 1.940,50</span>
                  </div>
                  <div className="flex justify-between text-slate-600 py-1">
                    <span>Cartão de Crédito/Débito:</span>
                    <span className="font-bold">R$ 1.250,00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical clarification note */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Wifi className="w-4 h-4 text-[#FFD21A]" />
                <span>Como funciona o acesso?</span>
              </div>
              <p className="leading-relaxed">
                O acesso ocorre diretamente pelo navegador (Google Chrome, Safari, etc.) através de conexão com a internet e login seguro com usuário e senha. Sem necessidade de instalações complicadas.
              </p>
            </div>

            <div>
              <a
                href="https://varejou.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#FF8617] to-[#FF6A00] hover:brightness-110 text-white font-extrabold rounded-xl shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer text-center inline-flex"
              >
                <span>Acessar pelo Celular ou Computador</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
