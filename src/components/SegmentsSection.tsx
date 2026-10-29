import React, { useState } from 'react';
import { Shirt, Footprints, Sparkles, Smartphone, Glasses, Store, HeartHandshake, Building2, Check, ArrowRight } from 'lucide-react';
import { VAREJOU_CONFIG, TargetSegment } from '../config/varejouConfig';

interface SegmentsSectionProps {
  onOpenCheckout: () => void;
}

export const SegmentsSection: React.FC<SegmentsSectionProps> = ({ onOpenCheckout }) => {
  const [activeSegmentId, setActiveSegmentId] = useState<string>('roupas');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shirt': return <Shirt className="w-5 h-5" />;
      case 'Footprints': return <Footprints className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Glasses': return <Glasses className="w-5 h-5" />;
      case 'Store': return <Store className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      default: return <Store className="w-5 h-5" />;
    }
  };

  const activeSegment = VAREJOU_CONFIG.targetSegments.find((s) => s.id === activeSegmentId) || VAREJOU_CONFIG.targetSegments[0];

  return (
    <section className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF8617] uppercase tracking-wider mb-2">
            <span>Para Quem É o Varejou</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#06234C] tracking-tight text-balance">
            SE VOCÊ VENDE, O VAREJOU É PARA VOCÊ!
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Não importa o tamanho da sua loja. O Varejou foi pensado para simplificar a gestão de quem trabalha com vendas todos os dias.
          </p>
        </div>

        {/* Segments Interactive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
          {VAREJOU_CONFIG.targetSegments.map((segment) => {
            const isSelected = segment.id === activeSegmentId;
            return (
              <button
                key={segment.id}
                onClick={() => setActiveSegmentId(segment.id)}
                type="button"
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#FF8617] bg-orange-50/70 text-[#06234C] shadow-sm ring-1 ring-[#FF8617]'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <div
                  className={`p-2 rounded-lg mb-1.5 transition-colors ${
                    isSelected ? 'bg-[#FF8617] text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {getIcon(segment.icon)}
                </div>
                <span className="text-xs font-semibold leading-tight line-clamp-2">
                  {segment.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Segment Spotlight Feature Card */}
        <div className="bg-[#F5F8FC] rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Segment Photo */}
            <div className="lg:col-span-5 relative h-64 lg:h-80 overflow-hidden">
              <img
                src={activeSegment.image}
                alt={`Ambiente comercial para ${activeSegment.name}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06234C]/60 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-3 left-4 text-white lg:hidden">
                <span className="text-xs font-bold">{activeSegment.name}</span>
              </div>
            </div>

            {/* Segment Details & Advantages */}
            <div className="lg:col-span-7 p-6 lg:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF8617] uppercase tracking-wider">
                {getIcon(activeSegment.icon)}
                <span>Solução Sob Medida para seu Negócio</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#06234C]">
                {activeSegment.name}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeSegment.description}
              </p>

              {/* Example Items */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Exemplos de produtos comuns no segmento:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeSegment.exampleItems.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 text-xs font-medium text-slate-700 rounded-lg shadow-2xs"
                    >
                      <Check className="w-3.5 h-3.5 text-[#FF8617]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to action for segment */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a
                  href="https://varejou.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#06234C] hover:bg-[#081B3B] rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Organizar Minha Loja por R$ 29,90/mês</span>
                  <ArrowRight className="w-4 h-4 text-[#FF8617]" />
                </a>
                <span className="text-xs text-slate-500">
                  Pronto para usar no seu celular ou computador
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
