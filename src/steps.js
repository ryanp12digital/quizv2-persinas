export const STEPS = [
    // [FASE 1] INTENÇÃO DO USUÁRIO
    {
        id: 'passo_1_intencao',
        phase: 1,
        question: 'Você já sabe exatamente o que precisa ou gostaria de ver as opções disponíveis?',
        subtext: 'ex: Persiana Rolô blackout tamanho 1,50m x 1,50m',
        type: 'radio',
        options: [
            { label: 'Quero ver as opções disponíveis', value: 'ver_opcoes', nextStep: 'passo_2_ambiente' },
            { label: 'Já sei o tipo de persiana/cortina e tenho as medidas e quero falar direto com um atendente', value: 'direto_atendente', nextStep: 'passo_8_captura' }
        ]
    },

    // [FASE 2] AMBIENTE
    {
        id: 'passo_2_ambiente',
        phase: 2,
        question: 'Em qual ambiente você quer instalar essa persiana ou cortina?',
        subtext: 'Informe primeiro sobre a primeira persiana que deseja orçar',
        type: 'radio',
        options: [
            { label: 'Varanda / Sacada / Área externa Envidraçada', value: 'varanda', nextStep: 'passo_3_acionamento' },
            { label: 'Quarto', value: 'quarto', nextStep: 'passo_3_acionamento' },
            { label: 'Sala de Estar / Jantar', value: 'sala', nextStep: 'passo_3_acionamento' },
            { label: 'Cozinha / Área Gourmet', value: 'cozinha', nextStep: 'passo_3_acionamento' },
            { label: 'Banheiro / Lavabo', value: 'banheiro', nextStep: 'passo_3_acionamento' },
            { label: 'Escritório / Home Office', value: 'escritorio', nextStep: 'passo_3_acionamento' },
            { label: 'Outro', value: 'outro', nextStep: 'passo_3_acionamento' }
        ]
    },

    // [FASE 3] ACIONAMENTO
    {
        id: 'passo_3_acionamento',
        phase: 3,
        question: 'Você gostaria dessa persiana manual ou automática?',
        type: 'radio',
        options: [
            { label: 'Manual (com corrente, haste ou bastão)', value: 'manual', nextStep: 'passo_4_modelo' },
            { label: 'Motorizada', value: 'motorizada', nextStep: 'passo_4_modelo' },
            { label: 'Ainda não sei', value: 'nao_sei', nextStep: 'passo_4_modelo' }
        ]
    },

    // [FASE 4] MODELO (Antigo Tecido)
    {
        id: 'passo_4_modelo',
        phase: 4,
        question: 'Qual modelo você prefere?',
        type: 'radio',
        options: [
            { label: 'Persiana Rolô', value: 'rolo', nextStep: 'passo_4_tecido_rolo' },
            { label: 'Persiana Romana', value: 'romana', nextStep: 'passo_4_tecido_romana' },
            { label: 'Persiana Double Vision', value: 'double_vision', nextStep: 'passo_4_tecido_double' },
            { label: 'Persiana Vertical', value: 'vertical', nextStep: 'passo_4_tecido_vertical' },
            { label: 'Horizontal de Madeira', value: 'madeira', nextStep: 'passo_4_tecido_madeira' },
            { label: 'Horizontal de Alumínio', value: 'aluminio', nextStep: 'passo_4_tecido_aluminio' },
            { label: 'Persiana de Teto', value: 'teto', nextStep: 'passo_4_modelo_teto' },
            { label: 'Persiana Painel', value: 'painel', nextStep: 'passo_4_tecido_painel' },
            { label: 'Cortina', value: 'cortina', nextStep: 'passo_4_tecido_cortina' }
        ]
    },

    // [FASE 4.1] TECIDOS ROLÔ
    {
        id: 'passo_4_tecido_rolo',
        phase: 4,
        question: 'Escolha o tecido para sua Persiana Rolô:',
        type: 'radio',
        options: [
            { label: 'Blackout', value: 'blackout', nextStep: 'passo_5_estagio' },
            { label: 'Tecido FR Blackout', value: 'fr_blackout', nextStep: 'passo_5_estagio' },
            { label: 'Semi-blackout', value: 'semi_blackout', nextStep: 'passo_5_estagio' },
            { label: 'Tela solar 1%', value: 'tela_1', nextStep: 'passo_5_estagio' },
            { label: 'Tela solar 3%', value: 'tela_3', nextStep: 'passo_5_estagio' },
            { label: 'Tela solar 5%', value: 'tela_5', nextStep: 'passo_5_estagio' },
            { label: 'Translúcida', value: 'translucida', nextStep: 'passo_5_estagio' },
            { label: 'Tecido decorativo', value: 'decorativo', nextStep: 'passo_5_estagio' },
            { label: 'Tecido FR Translúcido', value: 'fr_translucido', nextStep: 'passo_5_estagio' },
            { label: 'Hospitalar Antimicrobiano', value: 'hospitalar', nextStep: 'passo_5_estagio' },
            { label: 'Screen Metalizado 1%', value: 'metalizado_1', nextStep: 'passo_5_estagio' },
            { label: 'Screen Metalizado 3%', value: 'metalizado_3', nextStep: 'passo_5_estagio' },
            { label: 'Screen Metalizado 5%', value: 'metalizado_5', nextStep: 'passo_5_estagio' }
        ]
    },

    // [FASE 4.2] TECIDOS ROMANA
    {
        id: 'passo_4_tecido_romana',
        phase: 4,
        question: 'Escolha o tecido para sua Persiana Romana:',
        type: 'radio',
        options: [
            { label: 'Blackout', value: 'blackout', nextStep: 'passo_5_estagio' },
            { label: 'Semi-blackout', value: 'semi_blackout', nextStep: 'passo_5_estagio' },
            { label: 'Translúcida', value: 'translucida', nextStep: 'passo_5_estagio' },
            { label: 'Tela solar 1%', value: 'tela_1', nextStep: 'passo_5_estagio' },
            { label: 'Tela solar 3%', value: 'tela_3', nextStep: 'passo_5_estagio' },
            { label: 'Tela solar 5%', value: 'tela_5', nextStep: 'passo_5_estagio' },
            { label: 'Tecido decorativo', value: 'decorativo', nextStep: 'passo_5_estagio' }
        ]
    },

    // [FASE 4.3] TECIDOS DOUBLE VISION
    {
        id: 'passo_4_tecido_double',
        phase: 4,
        question: 'Escolha o tecido para sua Double Vision:',
        type: 'radio',
        options: [
            { label: 'Blackout com translucido', value: 'blackout_translucido', nextStep: 'passo_5_estagio' },
            { label: 'Semi-Blackout com translucido', value: 'semi_blackout_translucido', nextStep: 'passo_5_estagio' }
        ]
    },

    // [FASE 4.4] TECIDOS VERTICAL
    {
        id: 'passo_4_tecido_vertical',
        phase: 4,
        question: 'Escolha o tecido para sua Persiana Vertical:',
        type: 'radio',
        options: [
            { label: 'Blackout', value: 'blackout', nextStep: 'passo_5_estagio' },
            { label: 'PVC Blackout', value: 'pvc_blackout', nextStep: 'passo_5_estagio' },
            { label: 'Translúcida', value: 'translucida', nextStep: 'passo_5_estagio' },
            { label: 'Tecido decorativo', value: 'decorativo', nextStep: 'passo_5_estagio' }
        ]
    },

    // [FASE 4.5] TECIDOS MADEIRA
    {
        id: 'passo_4_tecido_madeira',
        phase: 4,
        question: 'Escolha o acabamento para sua Persiana de Madeira:',
        type: 'radio',
        options: [
            { label: 'Madeira natural 50 mm com cadarço', value: 'natural_cadarco', nextStep: 'passo_5_estagio' },
            { label: 'Madeira natural 50 mm com fita', value: 'natural_fita', nextStep: 'passo_5_estagio' },
            { label: 'Eco wood com cadarço', value: 'eco_cadarco', nextStep: 'passo_5_estagio' },
            { label: 'Eco wood com fita', value: 'eco_fita', nextStep: 'passo_5_estagio' },
            { label: 'Bambu com cadarço', value: 'bambu_cadarco', nextStep: 'passo_5_estagio' },
            { label: 'Bambu com fita', value: 'bambu_fita', nextStep: 'passo_5_estagio' }
        ]
    },

    // [FASE 4.6] TECIDOS ALUMÍNIO
    {
        id: 'passo_4_tecido_aluminio',
        phase: 4,
        question: 'Escolha o acabamento para sua Persiana de Alumínio:',
        type: 'radio',
        options: [
            { label: 'Lâmina 16 mm (micro)', value: 'lamina_16', nextStep: 'passo_5_estagio' },
            { label: 'Lâmina 25 mm (padrão)', value: 'lamina_25', nextStep: 'passo_5_estagio' },
            { label: 'Lâmina 50 mm (larga)', value: 'lamina_50', nextStep: 'passo_5_estagio' },
            { label: 'Perfurada (micro furos)', value: 'perfurada', nextStep: 'passo_5_estagio' },
            { label: 'Acabamento brilhante ou métalico', value: 'brilhante', nextStep: 'passo_5_estagio' },
            { label: 'Acabamento fosco ou acetinado', value: 'fosco', nextStep: 'passo_5_estagio' },
            { label: 'Tonalidade amadeirada', value: 'amadeirada', nextStep: 'passo_5_estagio' },
            { label: 'Com fita têxtil decorativa', value: 'fita_decorativa', nextStep: 'passo_5_estagio' }
        ]
    },

    // [FASE 4.7] MODELO TETO
    {
        id: 'passo_4_modelo_teto',
        phase: 4,
        question: 'Qual modelo de Persiana de Teto você prefere?',
        type: 'radio',
        options: [
            { label: 'Persiana Romana de Teto', value: 'romana_teto', nextStep: 'passo_4_tecido_teto_romana' },
            { label: 'Persianas celular de teto', value: 'celular_teto', nextStep: 'passo_4_tecido_teto_celular' },
            { label: 'Persianas plissadas de teto', value: 'plissada_teto', nextStep: 'passo_4_tecido_teto_plissada' }
        ]
    },

    // [FASE 4.7.1] TECIDOS TETO ROMANA
    {
        id: 'passo_4_tecido_teto_romana',
        phase: 4,
        question: 'Escolha o tecido para sua Romana de Teto:',
        type: 'radio',
        options: [
            { label: 'Blackout', value: 'blackout', nextStep: 'passo_5_estagio' },
            { label: 'Translúcida', value: 'translucida', nextStep: 'passo_5_estagio' },
            { label: 'Tela solar 1%', value: 'tela_1', nextStep: 'passo_5_estagio' },
            { label: 'Tela solar 3%', value: 'tela_3', nextStep: 'passo_5_estagio' },
            { label: 'Tela solar 5%', value: 'tela_5', nextStep: 'passo_5_estagio' }
        ]
    },

    // [FASE 4.7.2] TECIDOS TETO CELULAR
    {
        id: 'passo_4_tecido_teto_celular',
        phase: 4,
        question: 'Escolha o tecido para sua Celular de Teto:',
        type: 'radio',
        options: [
            { label: 'Blackout', value: 'blackout', nextStep: 'passo_5_estagio' },
            { label: 'Translúcida', value: 'translucida', nextStep: 'passo_5_estagio' }
        ]
    },

    // [FASE 4.7.3] TECIDOS TETO PLISSADA
    {
        id: 'passo_4_tecido_teto_plissada',
        phase: 4,
        question: 'Escolha o tecido para sua Plissada de Teto:',
        type: 'radio',
        options: [
            { label: 'Blackout', value: 'blackout', nextStep: 'passo_5_estagio' },
            { label: 'Translúcida', value: 'translucida', nextStep: 'passo_5_estagio' }
        ]
    },

    // [FASE 4.8] TECIDOS PAINEL
    {
        id: 'passo_4_tecido_painel',
        phase: 4,
        question: 'Escolha o tecido para sua Persiana Painel:',
        type: 'radio',
        options: [
            { label: 'Blackout', value: 'blackout', nextStep: 'passo_5_estagio' },
            { label: 'Translúcida', value: 'translucida', nextStep: 'passo_5_estagio' },
            { label: 'Tela solar 1%', value: 'tela_1', nextStep: 'passo_5_estagio' },
            { label: 'Tela solar 3%', value: 'tela_3', nextStep: 'passo_5_estagio' },
            { label: 'Tela solar 5%', value: 'tela_5', nextStep: 'passo_5_estagio' },
            { label: 'Decorativa/Texturizada', value: 'decorativa', nextStep: 'passo_5_estagio' }
        ]
    },

    // [FASE 4.9] TECIDOS CORTINA
    {
        id: 'passo_4_tecido_cortina',
        phase: 4,
        question: 'Escolha o tecido para sua Cortina:',
        type: 'radio',
        options: [
            { label: 'Blackout', value: 'blackout', nextStep: 'passo_4_acabamento_cortina' },
            { label: 'Semi-blacKout 70%', value: 'semi_blackout_70', nextStep: 'passo_4_acabamento_cortina' },
            { label: 'Translúcido Voil', value: 'voil', nextStep: 'passo_4_acabamento_cortina' },
            { label: 'Translúcido de Linho', value: 'linho', nextStep: 'passo_4_acabamento_cortina' },
            { label: 'Cortina Dupla (Voil + Blackout)', value: 'dupla', nextStep: 'passo_4_acabamento_cortina' }
        ]
    },

    // [FASE 4.9.1] ACABAMENTO CORTINA
    {
        id: 'passo_4_acabamento_cortina',
        phase: 4,
        question: 'Escolha o acabamento para sua Cortina:',
        type: 'radio',
        options: [
            { label: 'Ilhós', value: 'ilhos', nextStep: 'passo_5_estagio' },
            { label: 'Wave (Ripplefold)', value: 'wave', nextStep: 'passo_5_estagio' },
            { label: 'Prega Americana (argola ou trilho)', value: 'americana', nextStep: 'passo_5_estagio' },
            { label: 'Prega Macho (argola ou trilho)', value: 'macho', nextStep: 'passo_5_estagio' },
            { label: 'Prega Fêmea (argola ou trilho)', value: 'femea', nextStep: 'passo_5_estagio' },
            { label: 'Prega Franzida (argola ou trilho)', value: 'franzida', nextStep: 'passo_5_estagio' }
        ]
    },

    // [FASE 5] ESTÁGIO
    {
        id: 'passo_5_estagio',
        phase: 5,
        question: 'Em que fase você está agora?',
        type: 'radio',
        options: [
            { label: 'Já tenho as medidas e quero um pré-orçamento', value: 'orcamento', nextStep: 'passo_6_medidas' },
            { label: 'Estou apenas pesquisando ideias e quero receber um catálogo', value: 'catalogo', nextStep: 'passo_8_captura_catalogo' }
        ]
    },

    // [FASE 6] MEDIDAS
    {
        id: 'passo_6_medidas',
        phase: 6,
        question: 'Perfeito! Envie suas medidas abaixo',
        subtext: 'Informe largura e altura de cada janela (cm). Não precisam ser exatas.',
        type: 'mixed',
        inputs: [
            { id: 'largura', label: 'Largura', placeholder: 'Ex: 120', suffix: 'cm' },
            { id: 'altura', label: 'Altura', placeholder: 'Ex: 140', suffix: 'cm' },
            { id: 'urgencia', label: 'Nível de Urgência', type: 'select', options: ['O quanto antes (Urgente)', 'Nos próximos 30 dias', 'Estou em obra (Sem pressa)', 'Apenas pesquisando'] }
        ],
        nextStep: 'passo_7_mais_itens'
    },

    // [FASE 7] MAIS ITENS
    {
        id: 'passo_7_mais_itens',
        phase: 7,
        question: 'Caso deseje, pode escolher uma nova persiana/cortina ou pode prosseguir para próxima etapa!',
        subtext: 'Escolha como prosseguir.',
        type: 'mixed',
        inputs: [],
        options: [
            { label: 'Informar sobre outra persiana (Adicionar novo item)', value: 'adicionar_outro', action: 'loop' },
            { label: 'Seguir somente com este orçamento', value: 'finalizar', nextStep: 'passo_8_captura' }
        ]
    },

    // [FASE 8] CAPTURA FINAL
    {
        id: 'passo_8_captura',
        phase: 8,
        question: 'Perfeito! Para te enviar este pré orçamento',
        subtext: 'Preencha seus dados para receber as sugestões.',
        type: 'mixed',
        inputs: [
            { id: 'nome', label: 'Nome', placeholder: 'Seu nome' },
            { id: 'whatsapp', label: 'DDD+Whatsapp', placeholder: '(11) 99999-9999', mask: 'phone' },
            { id: 'email', label: 'E-mail', placeholder: 'seu@email.com' },
            { id: 'cidade', label: 'Cidade', placeholder: 'São Paulo' },
            { id: 'bairro', label: 'Bairro', placeholder: 'Centro' },
            {
                id: 'ambientes',
                label: 'Qual(is) ambiente(s) deseja?',
                placeholder: 'Selecione os ambientes',
                type: 'multi-select',
                options: [
                    'Varanda / Sacada / Área externa Envidraçada',
                    'Quarto',
                    'Sala de Estar / Jantar',
                    'Cozinha / Área Gourmet',
                    'Banheiro / Lavabo',
                    'Escritório / Home Office',
                    'Outro'
                ]
            }
        ],
        isFinal: true
    },

    // [FASE 8 Alternate] CAPTURA CATÁLOGO
    {
        id: 'passo_8_captura_catalogo',
        phase: 8,
        question: 'Receber Catálogo',
        subtext: 'Preencha seus dados para receber o catálogo com todas as opções.',
        type: 'mixed',
        inputs: [
            { id: 'nome', label: 'Nome', placeholder: 'Seu nome' },
            { id: 'whatsapp', label: 'DDD+Whatsapp', placeholder: '(11) 99999-9999', mask: 'phone' },
            {
                id: 'ambientes',
                label: 'Qual(is) ambiente(s) deseja?',
                placeholder: 'Selecione os ambientes',
                type: 'multi-select',
                options: [
                    'Varanda / Sacada / Área externa Envidraçada',
                    'Quarto',
                    'Sala de Estar / Jantar',
                    'Cozinha / Área Gourmet',
                    'Banheiro / Lavabo',
                    'Escritório / Home Office',
                    'Outro'
                ]
            }
        ],
        isFinal: true
    }
];
