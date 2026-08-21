import type { Dict } from "../lib/i18n";

const pt: Dict = {
  code: "pt",
  name: "Português",

  nav: {
    tools: "Ferramentas",
    devices: "Dispositivos",
    about: "Sobre",
    faq: "FAQ",
    cta: "Baixar",
    menu: "Menu",
    close: "Fechar",
  },

  home: {
    badge: "Simples • Rápido • Sem instalação",
    h1a: "Downloader de",
    h1b: "vídeos do TikTok",
    subtitle:
      "Baixe ou salve vídeos públicos do TikTok, Instagram, Facebook e YouTube direto do seu navegador.",
    formatsTitle: "Tudo o que o SFY pode salvar para você",
    formatsSub: "Um link entra, várias opções limpas saem. O SFY mostra só o que existe de verdade.",
    formats: [
      { title: "MP4 — Melhor qualidade", desc: "A versão mais limpa disponível, até 1080p, pronta para a sua galeria.", tag: "Vídeo" },
      { title: "Áudio MP3", desc: "Extraia o som: músicas, narrações ou áudios virais num arquivo leve.", tag: "Áudio" },
      { title: "Fotos e carrosséis", desc: "Salve cada slide de um post de fotos como imagens JPG individuais.", tag: "Imagens" },
      { title: "Sem marca d'água", desc: "Quando a fonte permite, receba o vídeo sem o logotipo flutuante.", tag: "Limpo" },
    ],
    whyTitle: "Por que as pessoas voltam ao SFY",
    whySub: "Sem conta. Sem app. Sem pegadinhas. Só um link e um resultado.",
    benefits: [
      { title: "Grátis e sem cadastro", desc: "O SFY é gratuito e nunca pedirá conta, e-mail ou instalação. Cole um link, receba um arquivo." },
      { title: "Pronto em segundos", desc: "A análise costuma levar menos de cinco segundos, mesmo numa conexão móvel comum." },
      { title: "Funciona em tudo", desc: "iPhone, Android, Windows, Mac ou Linux — se tem um navegador moderno, o SFY funciona perfeitamente." },
      { title: "Privado por design", desc: "Os links são processados para atender ao pedido, não armazenados para criar perfil. Sem histórico, sem rastreamento." },
    ],
    faqTitle: "Perguntas frequentes",
    faqSub: "Respostas curtas e honestas.",
    faq: [
      { q: "O SFY é grátis?", a: "Sim. As funções básicas são gratuitas. Limites razoáveis podem ser aplicados para manter o serviço rápido para todos." },
      { q: "Preciso instalar um aplicativo?", a: "Não. O SFY funciona direto no navegador — nada para baixar ou atualizar." },
      { q: "Posso usar o SFY no celular?", a: "Sim. O SFY é mobile-first: a ferramenta, os resultados e os downloads funcionam nos navegadores de iPhone e Android." },
      { q: "Por que meu vídeo não funciona?", a: "O link pode ser inválido, o vídeo pode ser privado, removido, bloqueado por região ou o formato não ser suportado. Confira o link e tente de novo." },
      { q: "O SFY guarda meus vídeos?", a: "Não. O SFY evita armazenar seus links ou conteúdos além do necessário para responder ao pedido." },
      { q: "O SFY pertence ao TikTok?", a: "Não. SFY — Save For You é um produto independente, sem afiliação ou endosso do TikTok." },
      { q: "Posso salvar qualquer conteúdo?", a: "Somente conteúdos que você tem permissão para salvar ou reutilizar. Respeite os direitos dos criadores." },
    ],
    ctaTitle: "Um link. Um save. Pronto.",
    ctaSub: "Seus vídeos, quando você quiser.",
    ctaBtn: "Salvar um vídeo agora",
    otherTools: "Explore as outras ferramentas do SFY",
    otherToolsSub: "Cada ferramenta faz um trabalho preciso — escolha a sua.",
  },

  box: {
    placeholder: "https://www.tiktok.com/@usuario/video/...",
    cta: "Baixar",
    paste: "Colar",
    pasteHint: "Área de transferência indisponível — toque no campo e use Ctrl+V ou “Colar”.",
    chooseApp: "Escolha o app",
    pasteTheLink: "Cole o link público",
    analyzing: "Analisando o vídeo…",
    fetching: "Buscando as opções disponíveis…",
    errEmpty: "Cole um link do TikTok primeiro.",
    errInvalid: "Esse link não é compatível. O SFY funciona com TikTok, Instagram, Facebook e YouTube.",
    errInaccessible: "Não conseguimos acessar este conteúdo. Verifique se é público e ainda está disponível.",
    errGeneral: "Algo deu errado. Tente novamente.",
    errRate: "Muitas solicitações em pouco tempo. Tente novamente em instantes.",
    readyVideo: "Seu vídeo está pronto",
    readyAudio: "Seu áudio está pronto",
    readyPhotos: "Suas fotos estão prontas",
    readyStory: "O story está pronto",
    formatsLabel: "Opções disponíveis",
    download: "Baixar",
    newVideo: "Baixar outro vídeo",
    demoPill: "Demo",
    demoNote: "Interface de demonstração: os metadados vêm do oEmbed público do TikTok quando acessível; as opções de download são simuladas até conectar o backend do SFY.",
    demoToast: "Modo demo — conecte o backend do SFY para habilitar downloads reais.",
    demoTitle: "Vídeo de exemplo (modo demo)",
    demoAuthor: "@exemplo.criador",
    bestQuality: "Melhor qualidade",
    mp4hd: "MP4 — HD",
    mp4std: "MP4 — Padrão",
    mp3: "Áudio — MP3",
    photos: "Fotos — JPG",
    story: "Story — MP4",
    noWatermark: "Sem marca d'água",
    preparing: "Preparando…",
    downloaded: "Baixado",
    downloadAll: "Baixar tudo",
    photosHeader: "Fotos disponíveis",
    openFallback: "Não foi possível salvar o arquivo automaticamente neste dispositivo.",
    openFile: "Abrir o arquivo",
  },

  trust: ["Sem cadastro", "Funciona no celular", "Rápido"],

  how: {
    title: "Como o SFY funciona",
    steps: [
      { title: "Copie o link", desc: "No TikTok, toque em Compartilhar e depois em “Copiar link” num vídeo público." },
      { title: "Cole no SFY", desc: "Coloque o link no campo — o botão Colar faz isso por você." },
      { title: "Escolha um formato", desc: "Baixe uma das opções disponíveis." },
    ],
  },

  faq: { title: "FAQ", sub: "Respostas rápidas para esta ferramenta." },

  related: { title: "Continue com outra ferramenta do SFY", sub: "Um mesmo link costuma render vários formatos." },

  tools: {
    "tiktok-video-downloader": { name: "Downloader de vídeos do TikTok", desc: "Salve vídeos públicos em MP4." },
    "tiktok-mp3": { name: "TikTok MP3", desc: "Extraia o áudio de um TikTok." },
    "tiktok-photo-downloader": { name: "Downloader de fotos do TikTok", desc: "Salve carrosséis como JPG." },
    "tiktok-story-downloader": { name: "Downloader de stories do TikTok", desc: "Guarde um story público antes de expirar." },
  },

  devices: {
    "download-tiktok-iphone": { name: "TikTok no iPhone", desc: "Para Arquivos e depois Fotos." },
    "download-tiktok-android": { name: "TikTok no Android", desc: "Direto para Downloads." },
    "download-tiktok-pc": { name: "TikTok no PC", desc: "Windows e Mac, qualquer navegador." },
  },

  footer: {
    tagline: "Seus vídeos. Quando você quiser.",
    colSfy: "SFY",
    colTools: "Ferramentas",
    colDevices: "Dispositivos",
    colLegal: "Legal",
    colLangs: "Idiomas",
    home: "Início",
    about: "Sobre",
    contact: "Contato",
    privacy: "Privacidade",
    terms: "Termos",
    rights: "Todos os direitos reservados.",
    disclaimer: "SFY — Save For You é um serviço independente, sem afiliação ou endosso do TikTok. Salve apenas conteúdos que você tem o direito de salvar.",
  },

  notFound: { title: "Página não encontrada", desc: "Esta página não existe — mas seu próximo save está a um link de distância.", btn: "Voltar ao SFY" },

  pages: {
    "tiktok-video-downloader": {
      seoTitle: "Downloader de vídeos do TikTok — Baixar vídeos online | SFY",
      metaDesc: "Baixe vídeos públicos do TikTok em MP4, com ou sem marca d'água quando disponível. Grátis, sem cadastro, em iPhone, Android e PC.",
      h1: "Downloader de vídeos do TikTok",
      intro: "Cole um link público do TikTok — vm.tiktok.com, vt.tiktok.com ou link completo — e receba as opções de vídeo disponíveis.",
      toolMode: "video",
      sections: [
        {
          title: "Quais links o SFY aceita?",
          body: [
            "O SFY entende os links gerados pelo app em “Compartilhar → Copiar link”: os curtos vm.tiktok.com e vt.tiktok.com, e as URLs completas www.tiktok.com/@usuario/video/…",
            "O vídeo precisa ser público. Contas privadas, vídeos só para amigos, clipes removidos ou bloqueados por região não podem ser resolvidos — o SFY avisa claramente.",
          ],
        },
        {
          title: "Qualidade e marca d'água",
          body: [
            "O SFY lista as versões que realmente existem: melhor qualidade (até 1080p se a fonte oferecer), um MP4 HD e um MP4 padrão mais leve. Se uma versão não existe, ela simplesmente não aparece.",
            "A opção sem marca d'água é oferecida quando a fonte permite tecnicamente. Nunca é garantida: depende do próprio vídeo.",
          ],
        },
      ],
      faq: [
        { q: "O SFY remove a marca d'água?", a: "Quando a fonte permite, o SFY oferece uma versão sem marca d'água como “Melhor qualidade”. Se não for possível, só as opções padrão aparecem." },
        { q: "Por que vejo só duas ou três opções?", a: "Porque são as únicas versões que existem para esse vídeo. O SFY lista apenas o que está realmente disponível." },
        { q: "Dá para baixar de contas privadas?", a: "Não. O SFY só funciona com conteúdo público e nunca contorna configurações de privacidade ou proteções." },
        { q: "Existe limite?", a: "Um limite de uso justo se aplica (algumas análises por minuto) para manter o serviço rápido." },
      ],
    },

    "tiktok-mp3": {
      seoTitle: "TikTok para MP3 — Extrair áudio do TikTok online | SFY",
      metaDesc: "Transforme qualquer TikTok público em MP3: extraia sons, músicas e narrações em segundos. Grátis, sem app, no navegador.",
      h1: "Conversor de TikTok para MP3",
      intro: "Precisa só do som? Cole um link do TikTok e extraia a faixa de áudio como um arquivo MP3 leve.",
      toolMode: "mp3",
      sections: [
        {
          title: "Quando extrair o áudio vale a pena",
          body: [
            "A maioria dos áudios do TikTok é curta: um refrão, uma frase, um remix. Baixar o vídeo inteiro desperdiça armazenamento — o MP3 guarda só o som.",
            "A extração trabalha sobre a faixa de áudio de vídeos públicos. Se um vídeo não tem áudio separável, o SFY avisa em vez de gerar um arquivo vazio.",
          ],
        },
        {
          title: "Qualidade, bitrate e arquivos",
          body: ["O SFY gera um MP3 padrão (cerca de 128 kbps) que toca em qualquer lugar: celular, carro, editor de vídeo ou criador de toques."],
        },
      ],
      faq: [
        { q: "O MP3 é o som original?", a: "É a faixa de áudio do vídeo público que você linkou, convertida para MP3. A qualidade acompanha a da fonte." },
        { q: "Posso extrair áudio de qualquer TikTok?", a: "De qualquer TikTok público com áudio. Vídeos privados ou removidos não podem ser processados." },
        { q: "Posso usar o áudio no meu conteúdo?", a: "Somente se você tiver os direitos. Muitos sons têm copyright — confira antes de reutilizar." },
        { q: "Também recebo o vídeo?", a: "Esta ferramenta foca no áudio. Use o Downloader de vídeos se quiser também o MP4." },
      ],
    },

    "tiktok-photo-downloader": {
      seoTitle: "Downloader de fotos do TikTok — Salvar slides em JPG | SFY",
      metaDesc: "Baixe fotos e slides de carrosséis públicos do TikTok como imagens JPG. Grátis, rápido e sem marcas adicionadas.",
      h1: "Downloader de fotos do TikTok",
      intro: "Posts de fotos e carrosséis do TikTok podem ser salvos slide a slide. Cole o link e receba imagens JPG individuais.",
      toolMode: "photo",
      sections: [
        {
          title: "Modo foto vs. modo carrossel",
          body: [
            "Desde o modo foto, muitos posts são apresentações em vez de vídeos. O SFY detecta o formato pelo link: uma imagem única ou todos os slides, em ordem.",
            "Se o link aponta para um vídeo de verdade, o SFY sugere trocar para o Downloader de vídeos em vez de falhar.",
          ],
        },
        {
          title: "O que você recebe",
          body: ["Cada slide é entregue em JPG na resolução publicada pelo criador. Sem reescala nem marca d'água adicionada pelo SFY."],
        },
      ],
      faq: [
        { q: "Funciona com carrosséis de arrastar?", a: "Sim — cada slide de um carrossel público pode ser salvo, em ordem, como arquivos JPG separados." },
        { q: "Qual a resolução das fotos?", a: "A publicada no TikTok. O SFY não amplia nem altera as imagens." },
        { q: "Por que meu post de fotos virou vídeo?", a: "Alguns posts misturam formatos. Nesse caso, use o Downloader de vídeos com o mesmo link." },
        { q: "As imagens têm marca d'água?", a: "O SFY não adiciona nenhuma. Você recebe exatamente o que a fonte contém." },
      ],
    },

    "tiktok-story-downloader": {
      seoTitle: "Downloader de stories do TikTok — Salvar stories públicos | SFY",
      metaDesc: "Salve um story público do TikTok antes que desapareça após 24 horas. Grátis e instantâneo, no seu navegador.",
      h1: "Downloader de stories do TikTok",
      intro: "Stories somem após 24 horas. Quando um story público está tecnicamente acessível, o SFY deixa você guardar uma cópia antes que ele vá embora.",
      toolMode: "story",
      sections: [
        {
          title: "A regra das 24 horas",
          body: ["Stories do TikTok são efêmeros por design: depois de um dia, são removidos automaticamente. Se quiser guardar um, faça rápido — o link para de funcionar quando o story expira."],
        },
        {
          title: "O que o SFY pode e não pode fazer",
          body: ["O SFY salva stories públicos quando a plataforma os expõe. Nunca acessa stories privados nem contorna configurações de visibilidade, e avisa claramente quando não estão mais disponíveis."],
        },
      ],
      faq: [
        { q: "Posso salvar o story de qualquer pessoa?", a: "Somente stories públicos tecnicamente acessíveis. Stories privados ou restritos ficam de fora — sempre." },
        { q: "O link parou de funcionar. Por quê?", a: "Stories expiram após 24 horas. Depois disso, o conteúdo some do próprio TikTok." },
        { q: "O criador fica sabendo que salvei?", a: "Não. Salvar não envia nenhuma notificação." },
        { q: "Em que formato o story é salvo?", a: "Como vídeo MP4, na qualidade em que o story foi publicado." },
      ],
    },

    "download-tiktok-iphone": {
      seoTitle: "Baixar vídeos do TikTok no iPhone (iOS) — sem app | SFY",
      metaDesc: "Como salvar vídeos do TikTok no iPhone e iPad com Safari: passo a passo, onde o arquivo vai e como mover para Fotos.",
      h1: "Baixar vídeos do TikTok no iPhone",
      intro: "Sem app, sem atalho: no iOS, o SFY funciona direto no Safari e salva o vídeo no app Arquivos.",
      toolMode: "video",
      steps: [
        { title: "Copie o link no TikTok", desc: "Compartilhar → Copiar link num vídeo público." },
        { title: "Cole no SFY pelo Safari", desc: "Abra sfy.app no Safari, cole e toque em Baixar." },
        { title: "Ache em Arquivos → Downloads", desc: "Depois Compartilhar → Salvar vídeo para adicionar em Fotos." },
      ],
      sections: [
        {
          title: "Para onde vai o arquivo no iOS?",
          body: [
            "Desde o iOS 13, downloads do Safari vão para o app Arquivos — não direto para o rolo da câmera. Abra Arquivos → Explorar → Downloads: seu MP4 está lá.",
            "Para mover para Fotos: segure o arquivo, escolha Compartilhar e depois “Salvar vídeo”. Ele aparece na sua biblioteca como qualquer vídeo.",
          ],
        },
        {
          title: "Armadilhas comuns no iPhone",
          body: [
            "Se tocar em “Baixar” abre o vídeo numa aba em vez de salvar, segure o botão e escolha “Baixar arquivo vinculado”.",
            "O SFY precisa do Safari (ou Chrome/Firefox no iOS) — não funciona no navegador interno do TikTok. Copie o link e abra no Safari.",
          ],
          list: [
            "iOS 13 ou superior é necessário para downloads no Safari",
            "Arquivos → Downloads é a pasta de chegada",
            "Compartilhar → Salvar vídeo para chegar ao app Fotos",
          ],
        },
      ],
      faq: [
        { q: "Por que o vídeo não está no app Fotos?", a: "O iOS salva downloads do navegador primeiro em Arquivos. Abra Arquivos → Downloads e use Compartilhar → Salvar vídeo." },
        { q: "Preciso de atalho ou aplicativo?", a: "Não. O SFY roda no Safari; nada a instalar no seu iPhone ou iPad." },
        { q: "Abre no navegador interno do TikTok, socorro!", a: "Esse navegador bloqueia downloads. Escolha “Abrir no Safari” ou copie o link e cole você mesmo no Safari." },
        { q: "Funciona no iPad também?", a: "Sim, exatamente igual — o iPadOS usa o mesmo fluxo de Arquivos e Fotos." },
      ],
    },

    "download-tiktok-android": {
      seoTitle: "Baixar vídeos do TikTok no Android — sem aplicativo | SFY",
      metaDesc: "Salve vídeos do TikTok em qualquer celular Android com Chrome: onde o arquivo vai, acesso à galeria e soluções para problemas comuns.",
      h1: "Baixar vídeos do TikTok no Android",
      intro: "No Android, o SFY funciona no Chrome e coloca o MP4 direto na sua pasta Downloads — visível na galeria.",
      toolMode: "video",
      steps: [
        { title: "Copie o link no TikTok", desc: "Compartilhar → Copiar link num vídeo público." },
        { title: "Cole no SFY pelo Chrome", desc: "Abra sfy.app no Chrome, cole e toque em Baixar." },
        { title: "Abra sua pasta Downloads", desc: "Arquivos → Downloads, ou a notificação que aparece." },
      ],
      sections: [
        {
          title: "Para onde vai o arquivo no Android?",
          body: [
            "O Chrome salva na pasta Downloads do armazenamento interno. A maioria das galerias (Google Fotos, Galeria Samsung) detecta em segundos.",
            "Você também pode abrir o app Files → Downloads ou tocar na notificação que o Chrome mostra ao fim da transferência.",
          ],
        },
        {
          title: "Se nada acontecer",
          body: [
            "O navegador interno (que abre ao tocar num link dentro do TikTok) pode ser restritivo. Escolha “Abrir no Chrome” ou copie o link e cole no Chrome.",
            "Em algumas marcas (Xiaomi, Huawei), confira se o Chrome tem permissão de armazenamento: Configurações → Apps → Chrome → Permissões.",
          ],
          list: [
            "Pasta Downloads = destino padrão",
            "As galerias detectam novos MP4 automaticamente",
            "Prefira o Chrome aos navegadores integrados",
          ],
        },
      ],
      faq: [
        { q: "Onde está meu vídeo baixado?", a: "Em Arquivos → Downloads. A maioria das galerias também mostra num álbum “Downloads” ou “Vídeos”." },
        { q: "Preciso instalar algo?", a: "Não. Chrome (ou Firefox) basta — o SFY roda inteiro no navegador." },
        { q: "O download não começa. Por quê?", a: "Geralmente é o navegador interno do TikTok. Abra o link no Chrome e confira a permissão de armazenamento." },
        { q: "Dá para usar como toque ou papel de parede?", a: "Sim — com o MP4 ou MP3 no armazenamento, o Android trata como qualquer arquivo de mídia." },
      ],
    },

    "download-tiktok-pc": {
      seoTitle: "Baixar vídeos do TikTok no PC (Windows e Mac) | SFY",
      metaDesc: "Salve vídeos do TikTok no Windows e Mac em dois cliques: cole o link, escolha um formato e encontre o arquivo.",
      h1: "Baixar vídeos do TikTok no PC",
      intro: "No Windows, Mac ou Linux, o SFY funciona em qualquer navegador moderno e salva o arquivo na sua pasta Downloads de sempre.",
      toolMode: "video",
      steps: [
        { title: "Copie o link", desc: "Do app do TikTok ou tiktok.com: Compartilhar → Copiar link." },
        { title: "Cole no SFY", desc: "Qualquer navegador: Chrome, Edge, Safari, Firefox…" },
        { title: "Escolha um formato", desc: "O arquivo chega na sua pasta Downloads." },
      ],
      sections: [
        {
          title: "O fluxo mais rápido no desktop",
          body: [
            "No tiktok.com, a seta Compartilhar dá “Copiar link” na hora. Cole no SFY, escolha Melhor qualidade e o MP4 aparece em Downloads (Ctrl+J mostra a lista do navegador).",
            "Para editar, o MP4 do SFY importa direto no CapCut, Premiere, DaVinci Resolve ou iMovie sem conversão.",
          ],
        },
        {
          title: "Windows ou Mac? Nada muda",
          body: ["Nada muda no SFY: a ferramenta vive no navegador. Só a pasta de destino difere — C:\\Usuários\\Você\\Downloads no Windows, ~/Downloads no macOS."],
          list: [
            "Ctrl+J (ou Cmd+J) abre a lista de downloads",
            "O MP4 funciona em todos os editores de vídeo",
            "Sem software, extensões ou conta",
          ],
        },
      ],
      faq: [
        { q: "Preciso de software no PC?", a: "Não. O SFY é um site — sem extensões, instaladores ou contas. Um navegador basta." },
        { q: "Para onde vai o arquivo?", a: "Para a pasta Downloads padrão do seu navegador, como qualquer outro download." },
        { q: "Posso baixar vários vídeos em sequência?", a: "Sim — use “Baixar outro vídeo” após cada save. Um limite de uso justo evita abusos." },
        { q: "Funciona no Linux?", a: "Sim. Qualquer navegador moderno em qualquer sistema roda o SFY igual." },
      ],
    },

    about: {
      seoTitle: "Sobre o SFY — Save For You",
      metaDesc: "O SFY (Save For You) é uma ferramenta web gratuita para salvar vídeos, áudios e fotos públicas do TikTok — sem conta, sem app, sem rastreamento.",
      h1: "SFY — Save For You",
      intro: "Seus vídeos. Quando você quiser.",
      toolMode: "video",
      sections: [
        { title: "O produto é a mensagem", body: ["O SFY foi construído sobre uma promessa: cole um link, receba um arquivo. Sem conta, sem painel, sem tour. A ferramenta é o produto inteiro."] },
        { title: "Honesto por design", body: ["O SFY só mostra opções que existem de verdade, só funciona com conteúdo público e nunca contorna proteções. Quando algo não pode ser feito direito, o SFY avisa."] },
        { title: "Pensado para o mundo", body: ["Cinco idiomas no lançamento — inglês, francês, espanhol, português e indonésio — e mais a caminho."] },
      ],
      faq: [],
    },

    privacy: {
      seoTitle: "Política de privacidade | SFY — Save For You",
      metaDesc: "Como o SFY trata seus dados: sem conta, sem vídeos armazenados, análises mínimas. A versão curta e legível.",
      h1: "Política de privacidade",
      intro: "A versão curta: o SFY é uma ferramenta, não um negócio de dados.",
      toolMode: "video",
      sections: [
        { title: "O que o SFY não faz", body: ["Sem conta, sem perfil. O SFY não pede nome, e-mail ou telefone. Seus vídeos não ficam guardados em bibliotecas, históricos ou bancos ligados a você."] },
        { title: "O que é processado", body: ["Quando você analisa um link, ele é processado para buscar as opções e entregar seu arquivo. Os links não são retidos além do necessário para servir e proteger o pedido."] },
        { title: "Análises e cookies", body: ["O SFY pode usar análises agregadas e respeitosas com a privacidade. Sem rastreadores de anúncios, sem fingerprinting, sem revenda de dados."] },
      ],
      faq: [],
    },

    terms: {
      seoTitle: "Termos de uso | SFY — Save For You",
      metaDesc: "Termos de uso do SFY: uso aceitável, propriedade intelectual e as regras que mantêm o serviço grátis e justo.",
      h1: "Termos de uso",
      intro: "Algumas regras para o serviço continuar grátis e justo para todos.",
      toolMode: "video",
      sections: [
        { title: "Uso aceitável", body: ["O SFY serve para salvar conteúdos que você tem permissão para salvar: seus próprios vídeos ou conteúdo público com autorização do titular. Você é responsável pelo reuso."] },
        { title: "Propriedade intelectual", body: ["Baixar um arquivo não transfere direitos. O copyright continua do criador. Não republique conteúdo protegido sem autorização."] },
        { title: "O serviço", body: ["O SFY é fornecido “como está”, sem garantia de disponibilidade. Limites de uso justo se aplicam. O SFY é independente e não afiliado ao TikTok."] },
      ],
      faq: [],
    },

    contact: {
      seoTitle: "Contato | SFY — Save For You",
      metaDesc: "Fale com a equipe do SFY: dúvidas, feedback, parcerias ou pedidos legais — lemos tudo.",
      h1: "Contato",
      intro: "Uma dúvida, uma ideia, um bug? Escreva para a gente — uma pessoa lê.",
      toolMode: "video",
      sections: [
        { title: "Falar com a equipe", body: ["O jeito mais simples é o e-mail: hello@sfy.app. Para pedidos de direitos, mencione “copyright” no assunto."] },
        { title: "O que ajuda a ajudar você", body: ["Inclua o link que tentou, seu dispositivo e navegador, e o que esperava. Quanto mais preciso, mais rápida a solução."] },
      ],
      faq: [],
    },
  },
};

export default pt;
