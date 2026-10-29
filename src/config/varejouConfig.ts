export interface FeatureItem {
  name: string;
  description: string;
  status: 'disponivel' | 'implantacao' | 'previsto';
}

export interface FeatureModule {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  features: FeatureItem[];
  highlightBadge?: string;
}

export interface TargetSegment {
  id: string;
  name: string;
  description: string;
  exampleItems: string[];
  image: string;
  icon: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'geral' | 'financeiro' | 'tecnico' | 'personalizado';
}

export const VAREJOU_CONFIG = {
  brand: {
    name: 'VAREJOU',
    category: 'Sistema de Gestão Inteligente para o Varejo',
    sloganPrincipal: 'Varejou — Vendeu, controlou, lucrou!',
    sloganSecundario: 'Mais tempo para você. Mais resultados para sua loja.',
    developedBy: 'Agência RAON — Marketing, IA & Tecnologia',
    instagramHandle: '@varejouapp',
    instagramUrl: 'https://www.instagram.com/varejouapp/',
  },
  contact: {
    whatsappNumber: '+55 75 99202-8015',
    whatsappRaw: '5575992028015',
    whatsappFormatted: '(75) 99202-8015',
    emailCommercial: 'contato@varejou.com.br',
    whatsappMessages: {
      support: 'Olá! Gostaria de obter informações e suporte sobre o aplicativo Varejou.',
      contracting: 'Olá! Tenho interesse em contratar o Varejou por R$ 29,90 mensais. Gostaria de saber como começar.',
      customSystem: 'Olá! Conheci o Varejou e gostaria de solicitar um orçamento para desenvolver um sistema de gestão personalizado para minha empresa, com pagamento único. Poderiam me passar mais informações?',
    },
  },
  pricing: {
    planName: 'VAREJOU — PLANO MENSAL',
    monthlyPrice: 'R$ 29,90',
    monthlyPriceNumeric: 29.90,
    period: '/mês',
    subtitle: 'Uma solução prática para acompanhar a rotina comercial da sua loja.',
    highlightNotice: 'Sem taxas de adesão escondidas. Cancele quando quiser.',
    gatewayStatus: 'Acesso imediato via plataforma oficial Varejou.',
  },
  urls: {
    loginUrl: '#login-portal',
    checkoutUrl: 'https://varejou.netlify.app/',
    appUrl: 'https://varejou.netlify.app/',
  },
  modules: [
    {
      id: 'pdv',
      title: 'PDV e Vendas',
      category: 'Frente de Loja',
      description: 'Agilidade máxima no ponto de venda com registro instantâneo e suporte a código de barras.',
      iconName: 'ShoppingCart',
      features: [
        { name: 'Registro de vendas rápido', description: 'Finalização de vendas em poucos cliques', status: 'disponivel' },
        { name: 'Busca rápida de produtos', description: 'Por nome, código interno ou categoria', status: 'disponivel' },
        { name: 'Leitor de código de barras', description: 'Compatível com leitor USB e câmera do celular', status: 'disponivel' },
        { name: 'Múltiplas formas de pagamento', description: 'Dinheiro, Pix, Cartão de Crédito e Débito', status: 'disponivel' },
        { name: 'Descontos no balcão', description: 'Aplicação de desconto percentual ou em valor', status: 'disponivel' },
        { name: 'Emissão e envio de recibos', description: 'Impressão térmica ou envio direto via WhatsApp', status: 'disponivel' },
        { name: 'Histórico de vendas', description: 'Consulta instantânea por período e vendedor', status: 'disponivel' },
        { name: 'Devoluções e trocas', description: 'Controle de devolução com estorno em estoque', status: 'implantacao' },
      ],
    },
    {
      id: 'caixa',
      title: 'Gestão de Caixa',
      category: 'Operação',
      description: 'Controle absoluto de cada centavo movimentado no dia a dia da sua loja.',
      iconName: 'Wallet',
      features: [
        { name: 'Abertura de caixa', description: 'Registro de fundo de troco inicial diário', status: 'disponivel' },
        { name: 'Fechamento de caixa cego', description: 'Conferência precisa sem distorções', status: 'disponivel' },
        { name: 'Sangrias', description: 'Retiradas parciais justificadas com comprovante', status: 'disponivel' },
        { name: 'Suprimentos', description: 'Entrada de troco adicional durante o expediente', status: 'disponivel' },
        { name: 'Conferência de movimentações', description: 'Comparativo automático por tipo de pagamento', status: 'disponivel' },
        { name: 'Histórico operacional auditável', description: 'Rastreabilidade de aberturas e fechamentos passados', status: 'disponivel' },
      ],
    },
    {
      id: 'estoque',
      title: 'Produtos e Estoque',
      category: 'Inventário',
      description: 'Organização impecável de produtos, variações, custos e controle de reposição.',
      iconName: 'Package',
      features: [
        { name: 'Cadastro completo de produtos', description: 'Ficha detalhada com imagens e especificações', status: 'disponivel' },
        { name: 'Categorias e subcategorias', description: 'Estruturação inteligente para fácil navegação', status: 'disponivel' },
        { name: 'Grade de variações', description: 'Controle de tamanhos, cores, voltagens e modelos', status: 'disponivel' },
        { name: 'Preços de custo e venda', description: 'Cálculo automático de margem de lucro sugerida', status: 'disponivel' },
        { name: 'Entradas e saídas de mercadorias', description: 'Atualização rápida com motivo e fornecedor', status: 'disponivel' },
        { name: 'Ajustes manuais de estoque', description: 'Correções auditadas em poucos segundos', status: 'disponivel' },
        { name: 'Alerta de estoque mínimo', description: 'Avisos visuais antes que a mercadoria acabe', status: 'disponivel' },
        { name: 'Inventário periódico', description: 'Contagem e conciliação em lote', status: 'implantacao' },
      ],
    },
    {
      id: 'clientes',
      title: 'Clientes e Fidelização',
      category: 'Relacionamento',
      description: 'Conheça quem compra com você e construa um relacionamento próximo e lucrativo.',
      iconName: 'Users',
      features: [
        { name: 'Cadastro completo de clientes', description: 'Dados de contato, CPF, endereço e preferências', status: 'disponivel' },
        { name: 'Histórico individual de compras', description: 'Veja tudo o que o cliente já comprou na loja', status: 'disponivel' },
        { name: 'Lembrete de aniversários', description: 'Avisos para enviar cupons e felicitações', status: 'disponivel' },
        { name: 'Informações de contato e redes', description: 'WhatsApp e canais preferenciais salvos', status: 'disponivel' },
        { name: 'Atendimento personalizado', description: 'Notas internas sobre gostos e medidas', status: 'disponivel' },
        { name: 'Acesso direto ao WhatsApp do cliente', description: 'Chame o cliente com um clique no app', status: 'disponivel' },
      ],
    },
    {
      id: 'crediario',
      title: 'Vendas a Prazo e Crediário',
      category: 'Crédito',
      description: 'Acompanhe seus recebíveis sem perder um único real em anotações perdidas.',
      iconName: 'CalendarCheck',
      features: [
        { name: 'Controle de crediário próprio', description: 'Registro de parcelas por cliente', status: 'disponivel' },
        { name: 'Controle de parcelas e datas', description: 'Visualização clara dos vencimentos futuros', status: 'disponivel' },
        { name: 'Contas a receber unificadas', description: 'Painel com previsão de entradas por dia/semana', status: 'disponivel' },
        { name: 'Pagamentos parciais de parcelas', description: 'Amortização flexível com abatimento automático', status: 'disponivel' },
        { name: 'Histórico completo de recebimentos', description: 'Recibos assinados e quitados', status: 'disponivel' },
        { name: 'Alertas de cobrança e atraso', description: 'Listagem pronta para cobrança amigável via WhatsApp', status: 'disponivel' },
      ],
    },
    {
      id: 'financeiro',
      title: 'Financeiro e Fluxo de Caixa',
      category: 'Finanças',
      description: 'Clareza total entre receitas, despesas e o lucro real do seu negócio.',
      iconName: 'TrendingUp',
      features: [
        { name: 'Controle de receitas e entradas', description: 'Vendas à vista, cartão, Pix e crediário', status: 'disponivel' },
        { name: 'Lançamento de despesas da loja', description: 'Aluguel, luz, salários, fornecedores e taxas', status: 'disponivel' },
        { name: 'Classificação de gastos fixos e variáveis', description: 'Saiba o custo real de manter a loja aberta', status: 'disponivel' },
        { name: 'Demonstrativo de fluxo de caixa', description: 'Gráficos diários e mensais de saldo', status: 'disponivel' },
        { name: 'Movimentações financeiras detalhadas', description: 'Filtro por categoria e plano de contas', status: 'disponivel' },
        { name: 'Acompanhamento do resultado mensal', description: 'Lucro operacional real sem segredos', status: 'disponivel' },
      ],
    },
    {
      id: 'relatorios',
      title: 'Relatórios Gerenciais',
      category: 'Inteligência',
      description: 'Indicadores chave em tempo real para você tomar decisões baseadas em fatos.',
      iconName: 'BarChart3',
      features: [
        { name: 'Dashboard comercial ao vivo', description: 'Métricas de vendas do dia atualizadas instantaneamente', status: 'disponivel' },
        { name: 'Faturamento por período customizável', description: 'Comparativos entre dias, semanas e meses', status: 'disponivel' },
        { name: 'Ticket médio da loja', description: 'Acompanhamento da evolução do gasto por compra', status: 'disponivel' },
        { name: 'Ranking de produtos mais vendidos', description: 'Curva ABC dos itens que geram mais receita', status: 'disponivel' },
        { name: 'Desempenho por vendedor', description: 'Acompanhamento de metas e comissões', status: 'implantacao' },
        { name: 'Exportação em PDF e Excel/CSV', description: 'Baixe relatórios para enviar à contabilidade', status: 'disponivel' },
      ],
    },
    {
      id: 'equipe',
      title: 'Equipe de Vendas',
      category: 'Gestão de Pessoas',
      description: 'Dê acesso seguro para seus colaboradores sem expor dados financeiros sigilosos.',
      iconName: 'ShieldCheck',
      features: [
        { name: 'Cadastro de operadores e vendedores', description: 'Identificação individual de cada funcionário', status: 'disponivel' },
        { name: 'Login individual com senha', description: 'Segurança e responsabilização de ações', status: 'disponivel' },
        { name: 'Perfis e níveis de acesso (RBAC)', description: 'Limite permissões (ex: somente vendas, sem ver financeiro)', status: 'disponivel' },
        { name: 'Acompanhamento de atividades operacionais', description: 'Auditoria de cancelamentos e alterações', status: 'implantacao' },
      ],
    },
    {
      id: 'catalogo',
      title: 'Catálogo Online Integrado',
      category: 'Vendas Online',
      description: 'Exponha seus produtos na internet com link compartilhável para o WhatsApp.',
      iconName: 'Globe',
      features: [
        { name: 'Vitrine virtual responsiva', description: 'Página pública leve com fotos dos seus produtos', status: 'implantacao' },
        { name: 'Link direto para compartilhar no Instagram', description: 'Link na bio para seus clientes escolherem os itens', status: 'implantacao' },
        { name: 'Geração de catálogo em PDF', description: 'PDF pronto para disparar em listas de transmissão', status: 'previsto' },
        { name: 'Botão "Pedir pelo WhatsApp"', description: 'Carrinho que envia o pedido pronto para seu WhatsApp', status: 'implantacao' },
      ],
    },
    {
      id: 'cotacoes',
      title: 'Cotações e Entregas',
      category: 'Logística',
      description: 'Emissão de orçamentos e acompanhamento de despachos para delivery ou frete.',
      iconName: 'Truck',
      features: [
        { name: 'Emissão de orçamentos formais', description: 'Envio de propostas em PDF com validade', status: 'disponivel' },
        { name: 'Cálculo de taxa de entrega local', description: 'Adição de frete motorizado ou motoboy na venda', status: 'disponivel' },
        { name: 'Etiquetas de despacho para pacotes', description: 'Impressão simplificada de remetente e destinatário', status: 'previsto' },
        { name: 'Acompanhamento de status de entrega', description: 'Controle visual: Em separação, A caminho, Entregue', status: 'implantacao' },
      ],
    },
  ] as FeatureModule[],
  targetSegments: [
    {
      id: 'roupas',
      name: 'Lojas de Roupas',
      description: 'Controle de grade de tamanhos (P, M, G, GG), cores, coleções e rapidez na troca de peças.',
      exampleItems: ['Vestidos', 'Camisas', 'Calças Jeans', 'Conjuntos'],
      image: '/src/assets/images/retail_fashion_clothing_1793296418611.jpg',
      icon: 'Shirt',
    },
    {
      id: 'calcados',
      name: 'Lojas de Calçados e Tênis',
      description: 'Gestão apurada de numerações, marcas, modelos e controle de estoque de pares individuais.',
      exampleItems: ['Tênis Esportivos', 'Sapatos', 'Sandálias', 'Chinelos'],
      image: '/src/assets/images/retail_fashion_clothing_1793296418611.jpg',
      icon: 'Footprints',
    },
    {
      id: 'cosmeticos',
      name: 'Cosméticos e Maquiagem',
      description: 'Datas de validade, linhas de produtos, tons de maquiagem e histórico de compras da cliente.',
      exampleItems: ['Batom', 'Perfumes', 'Skincare', 'Linha Capilar'],
      image: '/src/assets/images/retail_cosmetics_beauty_1793296418686.jpg',
      icon: 'Sparkles',
    },
    {
      id: 'celulares',
      name: 'Celulares e Eletrônicos',
      description: 'Controle por IMEI, número de série, cabos, películas, capinhas e margens de acessórios.',
      exampleItems: ['Smartphones', 'Fones Bluetooth', 'Carregadores', 'Capas'],
      image: '/src/assets/images/retail_electronics_phones_1793296419027.jpg',
      icon: 'Smartphone',
    },
    {
      id: 'acessorios',
      name: 'Acessórios e Óculos',
      description: 'Organização de centenas de itens de pequeno porte, semijoias, armações e relógios.',
      exampleItems: ['Óculos de Sol', 'Semijoias', 'Bolsas', 'Cintos'],
      image: '/src/assets/images/hero_retailer_workspace_1793296417554.jpg',
      icon: 'Glasses',
    },
    {
      id: 'variedades',
      name: 'Lojas de Variedades',
      description: 'Alto volume de vendas diárias, agilidade máxima no leitor de código de barras e controle de troco.',
      exampleItems: ['Artigos para Casa', 'Brinquedos', 'Papelaria', 'Presentes'],
      image: '/src/assets/images/hero_retailer_workspace_1793296417554.jpg',
      icon: 'Store',
    },
    {
      id: 'lingerie',
      name: 'Lojas de Lingerie',
      description: 'Tamanhos específicos de bojo, taças, tecidos delicados e atendimento privativo pelo WhatsApp.',
      exampleItems: ['Sutiãs', 'Calcinhas', 'Pijamas', 'Moda Praia'],
      image: '/src/assets/images/retail_fashion_clothing_1793296418611.jpg',
      icon: 'HeartHandshake',
    },
    {
      id: 'comercios',
      name: 'Pequenos e Médios Comércios',
      description: 'Se você vende no balcão, no crediário ou sob encomenda, o Varejou se adapta ao seu ritmo.',
      exampleItems: ['Comércio de Bairro', 'Bazar', 'Distribuidora Local', 'Quiosque'],
      image: '/src/assets/images/hero_retailer_workspace_1793296417554.jpg',
      icon: 'Building2',
    },
  ],
  painPoints: [
    {
      problem: 'Vendas anotadas em cadernos e papelotes',
      solution: 'PDV digital instantâneo com registro seguro na nuvem',
    },
    {
      problem: 'Estoque desorganizado e furos constantes',
      solution: 'Entradas, saídas e alerta visual de estoque mínimo',
    },
    {
      problem: 'Clientes cadastrados em planilhas soltas',
      solution: 'Ficha completa de compras e WhatsApp a um clique',
    },
    {
      problem: 'Contas a receber e fiado sem acompanhamento',
      solution: 'Crediário organizado com controle de parcelas e atrasos',
    },
    {
      problem: 'Falta de controle no fechamento de caixa',
      solution: 'Conferência automática por dinheiro, Pix e cartão',
    },
    {
      problem: 'Despesas espalhadas sem saber para onde o dinheiro foi',
      solution: 'Lançamento de contas fixas e variáveis com fluxo de caixa',
    },
    {
      problem: 'Dificuldade para saber se teve lucro real no mês',
      solution: 'Relatórios claros de faturamento e lucro operacional',
    },
    {
      problem: 'Falta de tempo para cuidar do crescimento do negócio',
      solution: 'Menos tarefas manuais e mais tempo com seus clientes',
    },
  ],
  benefits: [
    {
      id: 'organizacao',
      number: '01',
      title: 'Mais organização',
      description: 'Informações centralizadas em um só lugar. Adeus papéis perdidos, anotações sumidas e planilhas corrompidas.',
    },
    {
      id: 'agilidade',
      number: '02',
      title: 'Mais agilidade',
      description: 'Operações de caixa e vendas simplificadas. Feche vendas no balcão em segundos sem deixar filas na sua loja.',
    },
    {
      id: 'controle',
      number: '03',
      title: 'Mais controle',
      description: 'Acompanhamento rigoroso das vendas e do estoque. Saiba exatamente o que está vendendo e o que precisa repor.',
    },
    {
      id: 'produtividade',
      number: '04',
      title: 'Mais produtividade',
      description: 'Menos tarefas manuais repetitivas. Você e sua equipe economizam horas de trabalho burocrático toda semana.',
    },
    {
      id: 'clareza',
      number: '05',
      title: 'Mais clareza',
      description: 'Relatórios gerenciais objetivos para decisões comerciais inteligentes. Saiba com precisão o lucro do seu negócio.',
    },
    {
      id: 'liberdade',
      number: '06',
      title: 'Mais liberdade',
      description: 'Acesso pelo celular e computador de onde estiver. Acompanhe sua loja enquanto descansa, viaja ou resolve a vida.',
    },
  ],
  timelineSteps: [
    {
      step: 'PASSO 1',
      title: 'Escolha seu plano',
      description: 'Selecione o plano mensal de R$ 29,90/mês do Varejou sem burocracia.',
    },
    {
      step: 'PASSO 2',
      title: 'Faça sua contratação',
      description: 'Conclua seu cadastro e pagamento em ambiente seguro e protegido.',
    },
    {
      step: 'PASSO 3',
      title: 'Acesse sua conta',
      description: 'Após a confirmação segura do pagamento pelo provedor e ativação da assinatura, receba seus dados de acesso.',
    },
    {
      step: 'PASSO 4',
      title: 'Comece a gerenciar',
      description: 'Cadastre seus produtos, estoque e clientes para transformar a gestão da sua loja.',
    },
  ],
  faqs: [
    {
      id: 'faq-1',
      category: 'geral',
      question: 'O que é o Varejou?',
      answer: 'O Varejou é um sistema de gestão inteligente desenvolvido especialmente para o comércio varejista. Ele simplifica o controle diário de vendas (PDV), fluxo de caixa, estoque com grade, clientes, vendas a prazo (crediário) e finanças da loja em uma plataforma moderna e intuitiva.',
    },
    {
      id: 'faq-2',
      category: 'geral',
      question: 'Para quais tipos de loja ele é indicado?',
      answer: 'O Varejou foi desenhado para atender lojas de roupas, calçados, cosméticos, celulares e eletrônicos, bijuterias, óticas, papelarias, lojas de variedades, moda íntima e comércios de balcão de pequeno e médio porte que precisam de controle prático.',
    },
    {
      id: 'faq-3',
      category: 'tecnico',
      question: 'Posso acessar pelo celular?',
      answer: 'Sim! O Varejou é 100% responsivo e funciona perfeitamente pelo navegador do seu smartphone, tablet, notebook ou computador de mesa, com sincronização em tempo real mediante conexão com a internet.',
    },
    {
      id: 'faq-4',
      category: 'tecnico',
      question: 'Preciso instalar algum programa pesado?',
      answer: 'Não. O sistema é baseado em nuvem (SaaS). Você não precisa instalar programas complexos no seu computador e nem se preocupar com backups manuais. Basta abrir seu navegador preferido (Google Chrome, Safari, Edge) e fazer login.',
    },
    {
      id: 'faq-5',
      category: 'geral',
      question: 'O Varejou possui controle de estoque?',
      answer: 'Sim! Possui cadastro com fotos, controle de categorias, grade de variações (como cores e tamanhos), movimentações de entrada e saída, preço de custo, preço de venda e alertas visuais de estoque mínimo para não faltar produto.',
    },
    {
      id: 'faq-6',
      category: 'geral',
      question: 'Posso cadastrar meus clientes?',
      answer: 'Com certeza. O sistema armazena a ficha completa do cliente com histórico de todas as compras já realizadas, datas de aniversário para ações promocionais e botão de acesso direto para abrir o WhatsApp do cliente.',
    },
    {
      id: 'faq-7',
      category: 'geral',
      question: 'Consigo acompanhar vendas a prazo?',
      answer: 'Sim! O módulo de vendas a prazo (crediário) permite registrar compras parceladas, definir datas de vencimento, registrar amortizações parciais e identificar rapidamente clientes com pagamentos em atraso.',
    },
    {
      id: 'faq-8',
      category: 'geral',
      question: 'Posso controlar meus funcionários?',
      answer: 'Sim. Você pode cadastrar os membros da sua equipe de vendas com logins e senhas individuais, definindo perfis de acesso restritos para que operadores de caixa façam vendas sem ter acesso ao financeiro geral da empresa.',
    },
    {
      id: 'faq-9',
      category: 'financeiro',
      question: 'Quanto custa o Varejou?',
      answer: 'O plano padrão custa apenas R$ 29,90 por mês, sem fidelidade contratual e sem taxa de adesão. Um valor acessível pensado especialmente para a realidade dos lojistas brasileiros.',
    },
    {
      id: 'faq-10',
      category: 'financeiro',
      question: 'Como funciona o acesso após o pagamento?',
      answer: 'A ativação ocorre após a confirmação segura do pagamento pelo provedor de pagamento configurado. Assim que aprovado, você recebe as credenciais no seu e-mail e WhatsApp para efetuar o login imediatamente.',
    },
    {
      id: 'faq-11',
      category: 'geral',
      question: 'Como entro em contato com o suporte?',
      answer: 'Nosso time de atendimento está disponível diretamente pelo WhatsApp oficial (75) 99202-8015 e também pelo e-mail de suporte contato@varejou.com.br, de segunda a sábado em horário comercial.',
    },
    {
      id: 'faq-12',
      category: 'personalizado',
      question: 'Posso solicitar um aplicativo personalizado?',
      answer: 'Sim! A Agência RAON desenvolve versões e sistemas exclusivos sob medida com pagamento único para empresas com fluxos operacionais específicos, regras exclusivas ou integrações customizadas.',
    },
    {
      id: 'faq-13',
      category: 'financeiro',
      question: 'Como funciona o cancelamento?',
      answer: 'O cancelamento da assinatura mensal pode ser solicitado a qualquer momento diretamente pelo painel do assinante ou via suporte do WhatsApp, sem multas rescisórias ou cobranças surpresa.',
    },
  ] as FaqItem[],
};
