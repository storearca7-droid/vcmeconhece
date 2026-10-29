import React from 'react';
import { Instagram, ExternalLink, ArrowRight, Heart, MessageCircle, ShoppingBag } from 'lucide-react';
import { VAREJOU_CONFIG } from '../config/varejouConfig';

export const InstagramSection: React.FC = () => {
  const instagramPosts = [
    {
      title: 'Controle de Crediário sem dor de cabeça',
      tag: 'Dica de Gestão',
      desc: 'Como cobrar de forma amigável no WhatsApp e reduzir a inadimplência na sua loja.',
      likes: '142',
      comments: '18',
    },
    {
      title: 'Estoque mínimo: o segredo para nunca perder venda',
      tag: 'Operação de Loja',
      desc: 'Configure alertas visuais e antecipe a reposição dos itens mais procurados.',
      likes: '198',
      comments: '24',
    },
    {
      title: 'Fechamento de Caixa Cego no Varejou',
      tag: 'Segurança Financeira',
      desc: 'Evite distorções e confira dinheiro, Pix e cartões com precisão milimétrica.',
      likes: '165',
      comments: '21',
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF8617] uppercase tracking-wider mb-2">
              <Instagram className="w-4 h-4" />
              <span>Rede Oficial</span>
            </div>
            <h2 className="text-3xl font-extrabold font-display text-[#06234C] tracking-tight">
              SIGA O VAREJOU NO INSTAGRAM
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Dicas diárias de gestão comercial, estratégias de vendas para varejo e novidades da plataforma.
            </p>
          </div>

          <a
            href={VAREJOU_CONFIG.brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:opacity-95 transition-all self-start md:self-auto"
          >
            <Instagram className="w-4 h-4" />
            <span>{VAREJOU_CONFIG.brand.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Post Mockup Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href={VAREJOU_CONFIG.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#F5F8FC] hover:bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#FF8617]/40 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-3 border-b border-slate-200/60">
                  <span className="font-semibold text-[#06234C] flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5 text-[#FF8617]" />
                    @varejouapp
                  </span>
                  <span className="text-[11px] text-slate-400">{post.tag}</span>
                </div>

                <h3 className="font-display font-bold text-base text-[#06234C] mb-2 group-hover:text-[#FF8617] transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {post.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-slate-400" />
                    {post.comments}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#1357A6] flex items-center gap-1 group-hover:underline">
                  Ver no Instagram
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
