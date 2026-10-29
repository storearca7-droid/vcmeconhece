import React from 'react';
import { X, ShieldCheck, FileText, Ban } from 'lucide-react';
import { VAREJOU_CONFIG } from '../config/varejouConfig';

export type LegalDocType = 'terms' | 'privacy' | 'cancellation';

interface LegalModalProps {
  type: LegalDocType | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap: Record<LegalDocType, { title: string; icon: React.ReactNode; body: React.ReactNode }> = {
    terms: {
      title: 'Termos de Uso do Serviço',
      icon: <FileText className="w-5 h-5 text-[#FF8617]" />,
      body: (
        <div className="space-y-4 text-xs md:text-sm text-slate-600 leading-relaxed">
          <p>
            <strong>1. Objeto:</strong> O Varejou é uma plataforma de gestão e automação comercial disponibilizada no modelo de Software as a Service (SaaS), fornecendo ferramentas de PDV, controle de estoque, fluxo de caixa, crediário e relatórios operacionais para comércios varejistas.
          </p>
          <p>
            <strong>2. Acesso e Segurança:</strong> O acesso ao sistema requer conexão à internet estável e autenticação via usuário e senha. O assinante é o único responsável pela confidencialidade de suas credenciais e pelo gerenciamento dos níveis de acesso de seus colaboradores.
          </p>
          <p>
            <strong>3. Disponibilidade do Serviço:</strong> O serviço opera na nuvem com servidores de alta disponibilidade. Manutenções programadas são preferencialmente realizadas fora do horário comercial comum.
          </p>
          <p>
            <strong>4. Propriedade Intelectual:</strong> A logomarca, marca registrada, código-fonte e algoritmos pertencem aos seus desenvolvedores ({VAREJOU_CONFIG.brand.developedBy}).
          </p>
          <p>
            <strong>5. Suporte:</strong> O suporte ao usuário é realizado via canais oficiais ({VAREJOU_CONFIG.contact.whatsappFormatted} e {VAREJOU_CONFIG.contact.emailCommercial}) em horário comercial.
          </p>
        </div>
      ),
    },
    privacy: {
      title: 'Política de Privacidade e LGPD',
      icon: <ShieldCheck className="w-5 h-5 text-[#FF8617]" />,
      body: (
        <div className="space-y-4 text-xs md:text-sm text-slate-600 leading-relaxed">
          <p>
            <strong>1. Tratamento de Dados:</strong> O Varejou respeita integralmente a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD). Coletamos apenas os dados essenciais para o provisionamento da conta e operação da sua loja.
          </p>
          <p>
            <strong>2. Dados dos seus Clientes:</strong> Os dados de clientes e produtos inseridos pelo lojista na plataforma são de propriedade exclusiva do lojista (Controlador de Dados). O Varejou atua como Operador tecnológico e não comercializa, não cede e não compartilha essas informações com terceiros.
          </p>
          <p>
            <strong>3. Segurança da Informação:</strong> Todas as transmissões de dados são criptografadas (HTTPS/TLS) e armazenadas em servidores com rigorosos controles de acesso e backups automáticos.
          </p>
          <p>
            <strong>4. Direitos do Titular:</strong> O titular pode solicitar a qualquer momento a visualização, correção ou exclusão de seus dados pessoais através do canal oficial de suporte.
          </p>
        </div>
      ),
    },
    cancellation: {
      title: 'Política de Cancelamento e Reembolso',
      icon: <Ban className="w-5 h-5 text-[#FF8617]" />,
      body: (
        <div className="space-y-4 text-xs md:text-sm text-slate-600 leading-relaxed">
          <p>
            <strong>1. Cancelamento sem Carência:</strong> O plano mensal padrão do Varejou (R$ 29,90/mês) não possui fidelidade contratual e nem cláusula de carência mínima. Você pode solicitar o cancelamento a qualquer momento.
          </p>
          <p>
            <strong>2. Processo de Solicitação:</strong> O cancelamento pode ser efetuado diretamente no painel do assinante ou por mensagem formal ao suporte oficial via WhatsApp {VAREJOU_CONFIG.contact.whatsappFormatted}.
          </p>
          <p>
            <strong>3. Ciclo de Faturamento:</strong> Após o pedido de cancelamento, o acesso permanece ativo até o término do ciclo mensal já quitado, não havendo novas cobranças recorrentes subsequentes.
          </p>
          <p>
            <strong>4. Exportação dos Dados:</strong> Antes da efetiva desativação da conta, o lojista poderá exportar relatórios de vendas, estoque e lista de clientes em formatos digitais (PDF / CSV / Planilhas).
          </p>
        </div>
      ),
    },
  };

  const current = contentMap[type];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#06234C] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {current.icon}
            <h3 className="text-lg font-bold font-display">{current.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {current.body}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#06234C] hover:bg-[#081B3B] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
