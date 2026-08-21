import type { Dict } from "../lib/i18n";

const fr: Dict = {
  code: "fr",
  name: "Français",

  nav: {
    tools: "Outils",
    devices: "Appareils",
    about: "À propos",
    faq: "FAQ",
    cta: "Télécharger",
    menu: "Menu",
    close: "Fermer",
  },

  home: {
    badge: "Simple • Rapide • Sans installation",
    h1a: "Téléchargeur de",
    h1b: "vidéos TikTok",
    subtitle:
      "Téléchargez ou sauvegardez des vidéos publiques TikTok, Instagram, Facebook et YouTube — directement depuis votre navigateur.",
    formatsTitle: "Tout ce que SFY peut sauvegarder pour vous",
    formatsSub:
      "Un lien en entrée, plusieurs options propres en sortie. SFY n'affiche que ce qui est réellement disponible.",
    formats: [
      {
        title: "MP4 — Meilleure qualité",
        desc: "Le rendu vidéo le plus propre disponible, jusqu'en 1080p, prêt pour votre pellicule.",
        tag: "Vidéo",
      },
      {
        title: "Audio MP3",
        desc: "Extrait le son : musiques, voix off ou audios viraux dans un fichier léger.",
        tag: "Audio",
      },
      {
        title: "Photos & carrousels",
        desc: "Sauvegarde chaque diapositive d'un post photo TikTok en images JPG individuelles.",
        tag: "Images",
      },
      {
        title: "Sans filigrane",
        desc: "Quand la source le permet, récupérez la vidéo sans le logo flottant.",
        tag: "Propre",
      },
    ],
    whyTitle: "Pourquoi on revient sur SFY",
    whySub: "Pas de compte. Pas d'app. Pas de piège. Juste un lien et un résultat.",
    benefits: [
      {
        title: "Gratuit & sans inscription",
        desc: "SFY est gratuit et ne vous demandera jamais de créer un compte, de donner votre e-mail ou d'installer quoi que ce soit. Collez un lien, recevez un fichier.",
      },
      {
        title: "Prêt en quelques secondes",
        desc: "L'analyse prend généralement moins de cinq secondes, même sur une connexion mobile moyenne.",
      },
      {
        title: "Tous les appareils",
        desc: "iPhone, Android, Windows, Mac ou Linux — si l'appareil a un navigateur récent, SFY fonctionne parfaitement.",
      },
      {
        title: "Pensé pour la vie privée",
        desc: "Les liens sont traités pour répondre à votre demande, pas stockés pour construire un profil. Pas d'historique, pas de suivi de vos sauvegardes.",
      },
    ],
    faqTitle: "Questions fréquentes",
    faqSub: "Des réponses courtes et honnêtes.",
    faq: [
      {
        q: "SFY est-il gratuit ?",
        a: "Oui. Les fonctions de base peuvent être utilisées gratuitement. Certaines limites raisonnables peuvent s'appliquer pour garder le service rapide pour tous.",
      },
      {
        q: "Dois-je installer une application ?",
        a: "Non. SFY fonctionne directement dans le navigateur — rien à télécharger, rien à mettre à jour.",
      },
      {
        q: "Puis-je utiliser SFY sur mobile ?",
        a: "Oui. SFY est conçu mobile d'abord : l'outil, les résultats et les téléchargements fonctionnent sur les navigateurs iPhone et Android.",
      },
      {
        q: "Pourquoi ma vidéo ne fonctionne-t-elle pas ?",
        a: "Le lien est peut-être invalide, la vidéo privée, supprimée, bloquée dans votre région, ou son format n'est pas pris en charge. Vérifiez le lien et réessayez.",
      },
      {
        q: "SFY conserve-t-il mes vidéos ?",
        a: "Non. SFY évite tout stockage inutile des liens ou contenus au-delà du nécessaire pour répondre à votre demande.",
      },
      {
        q: "SFY appartient-il à TikTok ?",
        a: "Non. SFY — Save For You est un produit indépendant, non affilié à TikTok et non approuvé par TikTok.",
      },
      {
        q: "Puis-je sauvegarder n'importe quel contenu ?",
        a: "Uniquement les contenus que vous êtes autorisé à sauvegarder ou réutiliser. Respectez les droits des créateurs et les conditions de la plateforme.",
      },
    ],
    ctaTitle: "Un lien. Une sauvegarde. Fini.",
    ctaSub: "Vos vidéos. Quand vous voulez.",
    ctaBtn: "Sauvegarder une vidéo",
    otherTools: "Découvrir les autres outils SFY",
    otherToolsSub: "Chaque outil vise un besoin précis — choisissez le vôtre.",
  },

  box: {
    placeholder: "https://www.tiktok.com/@utilisateur/video/...",
    cta: "Télécharger",
    paste: "Coller",
    pasteHint: "Presse-papiers indisponible — touchez le champ puis utilisez Ctrl+V ou « Coller ».",
    analyzing: "Analyse de la vidéo…",
    fetching: "Récupération des options disponibles…",
    errEmpty: "Collez d'abord un lien TikTok.",
    errInvalid: "Ce lien n'est pas pris en charge. SFY fonctionne avec TikTok, Instagram, Facebook et YouTube.",
    errInaccessible:
      "Nous n'avons pas pu accéder à ce contenu. Vérifiez qu'il est public et toujours disponible.",
    errGeneral: "Une erreur est survenue. Veuillez réessayer.",
    errRate: "Trop de demandes en peu de temps. Réessayez dans quelques instants.",
    readyVideo: "Votre vidéo est prête",
    readyAudio: "Votre audio est prêt",
    readyPhotos: "Vos photos sont prêtes",
    readyStory: "La story est prête",
    formatsLabel: "Options disponibles",
    download: "Télécharger",
    newVideo: "Télécharger une autre vidéo",
    demoPill: "Démo",
    demoNote:
      "Interface de démonstration : les métadonnées proviennent de l'oEmbed public de TikTok quand il est accessible ; les options de téléchargement affichées sont simulées en attendant le backend SFY.",
    demoToast: "Mode démo — connectez le backend SFY pour activer les vrais téléchargements.",
    demoTitle: "Vidéo d'exemple (mode démo)",
    demoAuthor: "@exemple.createur",
    bestQuality: "Meilleure qualité",
    mp4hd: "MP4 — HD",
    mp4std: "MP4 — Standard",
    mp3: "Audio — MP3",
    photos: "Photos — JPG",
    story: "Story — MP4",
    noWatermark: "Sans filigrane",
    preparing: "Préparation…",
    downloaded: "Téléchargé",
    downloadAll: "Tout télécharger",
    photosHeader: "Photos disponibles",
    openFallback: "Impossible d'enregistrer le fichier automatiquement sur cet appareil.",
    openFile: "Ouvrir le fichier",
  },

  trust: ["Sans inscription", "Compatible mobile", "Rapide"],

  how: {
    title: "Comment ça marche",
    steps: [
      {
        title: "Copiez le lien",
        desc: "Depuis TikTok, copiez le lien du contenu public via Partager.",
      },
      {
        title: "Collez-le dans SFY",
        desc: "Ajoutez le lien dans le champ — le bouton Coller le fait pour vous.",
      },
      {
        title: "Choisissez votre format",
        desc: "Téléchargez l'une des options disponibles.",
      },
    ],
  },

  faq: { title: "FAQ", sub: "Réponses rapides pour cet outil." },

  related: {
    title: "Continuer avec un autre outil SFY",
    sub: "Un même lien permet souvent plusieurs formats.",
  },

  tools: {
    "tiktok-video-downloader": {
      name: "Téléchargeur vidéo TikTok",
      desc: "Sauvegardez les vidéos TikTok en MP4.",
    },
    "tiktok-mp3": {
      name: "TikTok MP3",
      desc: "Extrayez l'audio d'un TikTok.",
    },
    "tiktok-photo-downloader": {
      name: "Téléchargeur photo TikTok",
      desc: "Sauvegardez les carrousels en JPG.",
    },
    "tiktok-story-downloader": {
      name: "Téléchargeur de story TikTok",
      desc: "Gardez une story publique avant expiration.",
    },
  },

  devices: {
    "download-tiktok-iphone": {
      name: "TikTok sur iPhone",
      desc: "Vers Fichiers, puis Photos.",
    },
    "download-tiktok-android": {
      name: "TikTok sur Android",
      desc: "Directement dans Téléchargements.",
    },
    "download-tiktok-pc": {
      name: "TikTok sur PC",
      desc: "Windows & Mac, tous navigateurs.",
    },
  },

  footer: {
    tagline: "Vos vidéos. Quand vous voulez.",
    colSfy: "SFY",
    colTools: "Outils",
    colDevices: "Appareils",
    colLegal: "Légal",
    colLangs: "Langues",
    home: "Accueil",
    about: "À propos",
    contact: "Contact",
    privacy: "Confidentialité",
    terms: "Conditions",
    rights: "Tous droits réservés.",
    disclaimer:
      "SFY — Save For You est un service indépendant, non affilié à TikTok et non approuvé par TikTok. Ne sauvegardez que des contenus que vous avez le droit de sauvegarder.",
  },

  notFound: {
    title: "Page introuvable",
    desc: "Cette page n'existe pas — mais votre prochaine sauvegarde n'est qu'à un lien.",
    btn: "Retour à SFY",
  },

  pages: {
    "tiktok-video-downloader": {
      seoTitle: "Téléchargeur vidéo TikTok — Télécharger des vidéos TikTok | SFY",
      metaDesc:
        "Téléchargez des vidéos TikTok publiques en MP4, avec ou sans filigrane quand c'est disponible. Gratuit, sans inscription, sur iPhone, Android et PC.",
      h1: "Téléchargeur de vidéos TikTok",
      intro:
        "Collez un lien TikTok public — vm.tiktok.com, vt.tiktok.com ou lien complet — et obtenez les options vidéo disponibles pour ce clip.",
      toolMode: "video",
      sections: [
        {
          title: "Quels liens TikTok SFY accepte-t-il ?",
          body: [
            "SFY comprend les liens générés par l'application via « Partager → Copier le lien » : les liens courts vm.tiktok.com et vt.tiktok.com, ainsi que les URL complètes www.tiktok.com/@utilisateur/video/…",
            "La vidéo doit être publique. Comptes privés, vidéos « amis uniquement », clips supprimés ou contenus bloqués par région ne peuvent pas être résolus — SFY vous le dit clairement au lieu d'échouer en silence.",
          ],
        },
        {
          title: "Qualité et filigrane",
          body: [
            "SFY liste les rendus qui existent réellement pour une vidéo : meilleure qualité (jusqu'en 1080p si la source le fournit), un MP4 HD et un MP4 standard plus léger. Si un rendu n'est pas disponible, il n'est simplement pas affiché — SFY n'invente jamais d'options.",
            "L'option sans filigrane est proposée quand la source le permet techniquement. Elle n'est jamais garantie : cela dépend de la vidéo elle-même.",
          ],
        },
      ],
      faq: [
        {
          q: "SFY retire-t-il le filigrane TikTok ?",
          a: "Quand la source le permet, SFY propose un rendu sans filigrane en « Meilleure qualité ». Si ce n'est pas techniquement possible, seules les options standard sont affichées.",
        },
        {
          q: "Pourquoi ne vois-je que deux ou trois options ?",
          a: "Parce que ce sont les seuls rendus qui existent pour cette vidéo. SFY ne liste que ce qui est réellement disponible.",
        },
        {
          q: "Puis-je télécharger des vidéos de comptes privés ?",
          a: "Non. SFY ne fonctionne qu'avec du contenu public et ne contourne jamais un réglage de confidentialité ni une protection.",
        },
        {
          q: "Y a-t-il une limite ?",
          a: "Une limite d'usage raisonnable s'applique (quelques analyses par minute) pour garder le service rapide pour tous.",
        },
      ],
    },

    "tiktok-mp3": {
      seoTitle: "TikTok en MP3 — Extraire l'audio d'un TikTok | SFY",
      metaDesc:
        "Transformez un TikTok public en MP3 : extrayez sons, musiques et voix off en quelques secondes. Gratuit, sans application, dans votre navigateur.",
      h1: "Convertisseur TikTok en MP3",
      intro:
        "Vous n'avez besoin que du son ? Collez un lien TikTok et extrayez la piste audio en fichier MP3 léger — idéal pour les sons, musiques et voix off.",
      toolMode: "mp3",
      sections: [
        {
          title: "Quand l'extraction audio est le bon choix",
          body: [
            "La plupart des audios TikTok sont courts : un hook, une punchline, un remix. Télécharger toute la vidéo gaspille du stockage — le MP3 ne garde que le son, souvent quelques centaines de kilo-octets.",
            "L'extraction vise la piste audio des vidéos publiques. Si une vidéo n'a pas d'audio séparable, SFY vous le dit au lieu de produire un fichier vide.",
          ],
        },
        {
          title: "Qualité, débit et fichiers",
          body: [
            "SFY produit un MP3 standard (environ 128 kbps) lisible partout : téléphone, voiture, logiciel de montage, créateur de sonneries. Le fichier est nommé d'après la vidéo pour le retrouver facilement.",
          ],
        },
      ],
      faq: [
        {
          q: "Le MP3 est-il le son d'origine ?",
          a: "C'est la piste audio de la vidéo publique que vous avez liée, convertie en MP3. La qualité correspond à ce que la source fournit.",
        },
        {
          q: "Puis-je extraire l'audio de n'importe quel TikTok ?",
          a: "De n'importe quel TikTok public contenant de l'audio. Les vidéos privées ou supprimées ne peuvent pas être traitées.",
        },
        {
          q: "Puis-je utiliser l'audio dans mes propres contenus ?",
          a: "Uniquement si vous en avez les droits. Beaucoup de sons sont protégés — vérifiez avant toute réutilisation publique.",
        },
        {
          q: "Est-ce que je récupère aussi la vidéo ?",
          a: "Cet outil se concentre sur l'audio. Utilisez le Téléchargeur vidéo TikTok si vous voulez aussi le MP4.",
        },
      ],
    },

    "tiktok-photo-downloader": {
      seoTitle: "Téléchargeur photo TikTok — Sauvegarder les diapositives en JPG | SFY",
      metaDesc:
        "Téléchargez photos et diapositives de carrousels TikTok publics en images JPG. Gratuit, rapide, sans filigrane ajouté par SFY.",
      h1: "Téléchargeur de photos TikTok",
      intro:
        "Les posts photo et carrousels TikTok peuvent être sauvegardés diapositive par diapositive. Collez le lien et recevez les images en fichiers JPG individuels.",
      toolMode: "photo",
      sections: [
        {
          title: "Mode photo vs. mode carrousel",
          body: [
            "Depuis le mode photo, beaucoup de posts sont des diaporamas plutôt que des vidéos. SFY détecte le format depuis le lien : une image seule, ou toutes les diapositives d'un carrousel, sauvegardées dans l'ordre.",
            "Si le lien pointe vers une vraie vidéo, SFY propose de basculer vers le Téléchargeur vidéo plutôt que d'échouer.",
          ],
        },
        {
          title: "Ce que vous obtenez",
          body: [
            "Chaque diapositive est fournie en JPG à la résolution publiée par le créateur. Pas de réencodage hasardeux, pas de filigrane ajouté par SFY.",
          ],
        },
      ],
      faq: [
        {
          q: "Ça marche avec les carrousels à balayer ?",
          a: "Oui — chaque diapositive d'un carrousel public peut être sauvegardée, dans l'ordre, en fichiers JPG séparés.",
        },
        {
          q: "Quelle est la résolution des photos ?",
          a: "Celle publiée sur TikTok. SFY n'agrandit ni ne modifie les images.",
        },
        {
          q: "Pourquoi mon post photo est-il résolu comme une vidéo ?",
          a: "Certains posts mélangent les formats. Dans ce cas, utilisez le Téléchargeur vidéo avec le même lien.",
        },
        {
          q: "Les images ont-elles un filigrane ?",
          a: "SFY n'ajoute aucun filigrane. Vous obtenez exactement ce que la source contient.",
        },
      ],
    },

    "tiktok-story-downloader": {
      seoTitle: "Téléchargeur de story TikTok — Sauvegarder une story publique | SFY",
      metaDesc:
        "Sauvegardez une story TikTok publique avant qu'elle ne disparaisse après 24 h. Gratuit et instantané, directement dans votre navigateur.",
      h1: "Téléchargeur de story TikTok",
      intro:
        "Les stories disparaissent après 24 heures. Quand une story publique est techniquement accessible, SFY vous permet d'en garder une copie avant qu'elle ne parte.",
      toolMode: "story",
      sections: [
        {
          title: "La règle des 24 heures",
          body: [
            "Les stories TikTok sont éphémères par conception : au bout d'un jour, elles sont supprimées automatiquement. Si vous voulez en garder une, faites vite — le même lien cesse de fonctionner une fois la story expirée.",
          ],
        },
        {
          title: "Ce que SFY peut faire — et ne peut pas faire",
          body: [
            "SFY peut sauvegarder une story publique quand la plateforme l'expose. Il n'accède jamais aux stories privées, ne contourne jamais les réglages de visibilité, et vous dit clairement quand une story n'est plus disponible.",
          ],
        },
      ],
      faq: [
        {
          q: "Puis-je sauvegarder la story de n'importe qui ?",
          a: "Uniquement les stories publiques techniquement accessibles. Les stories privées ou restreintes sont hors de portée — toujours.",
        },
        {
          q: "Le lien ne marche plus. Pourquoi ?",
          a: "Les stories expirent après 24 heures. Après cela, le contenu a disparu de TikTok lui-même.",
        },
        {
          q: "Le créateur sait-il que j'ai sauvegardé sa story ?",
          a: "Non. La sauvegarde n'envoie aucune notification.",
        },
        {
          q: "Dans quel format la story est-elle sauvegardée ?",
          a: "En vidéo MP4, à la qualité à laquelle la story a été publiée.",
        },
      ],
    },

    "download-tiktok-iphone": {
      seoTitle: "Télécharger des vidéos TikTok sur iPhone (iOS) — sans app | SFY",
      metaDesc:
        "Comment sauvegarder des vidéos TikTok sur iPhone et iPad avec Safari : pas à pas, où va le fichier, et comment le déplacer vers Photos.",
      h1: "Télécharger des vidéos TikTok sur iPhone",
      intro:
        "Pas d'app, pas de raccourci : sur iOS, SFY fonctionne directement dans Safari et enregistre la vidéo dans l'app Fichiers.",
      toolMode: "video",
      steps: [
        {
          title: "Copiez le lien dans TikTok",
          desc: "Partager → Copier le lien sur une vidéo publique.",
        },
        {
          title: "Collez-le dans SFY sur Safari",
          desc: "Ouvrez sfy.app dans Safari, collez, puis Téléchargez.",
        },
        {
          title: "Retrouvez-le dans Fichiers → Téléchargements",
          desc: "Puis Partager → Enregistrer la vidéo pour l'ajouter à Photos.",
        },
      ],
      sections: [
        {
          title: "Où va le fichier sur iOS ?",
          body: [
            "Depuis iOS 13, les téléchargements Safari vont dans l'app Fichiers — pas directement dans la pellicule. Ouvrez Fichiers → Parcourir → Téléchargements : votre MP4 est là.",
            "Pour le déplacer vers Photos : maintenez le fichier, choisissez Partager, puis « Enregistrer la vidéo ». Il apparaîtra dans votre bibliothèque comme n'importe quelle vidéo.",
          ],
        },
        {
          title: "Les pièges classiques sur iPhone",
          body: [
            "Si un appui sur « Télécharger » ouvre la vidéo dans un onglet au lieu de la sauvegarder, maintenez le bouton et choisissez « Télécharger le fichier lié ».",
            "SFY a besoin de Safari (ou Chrome/Firefox sur iOS) — il ne fonctionne pas dans le navigateur interne de TikTok. Copiez le lien et ouvrez-le proprement dans Safari.",
          ],
          list: [
            "iOS 13 ou plus récent requis pour les téléchargements Safari",
            "Fichiers → Téléchargements est le dossier d'arrivée par défaut",
            "Partager → Enregistrer la vidéo pour atteindre l'app Photos",
          ],
        },
      ],
      faq: [
        {
          q: "Pourquoi la vidéo n'est-elle pas dans mon app Photos ?",
          a: "iOS enregistre d'abord les téléchargements de navigateur dans Fichiers. Ouvrez Fichiers → Téléchargements, puis Partager → Enregistrer la vidéo pour la copier dans Photos.",
        },
        {
          q: "Faut-il un raccourci ou une application ?",
          a: "Non. SFY fonctionne dans Safari ; rien à installer sur votre iPhone ou iPad.",
        },
        {
          q: "Ça s'ouvre dans le navigateur interne de TikTok — au secours !",
          a: "Ce navigateur intégré bloque les téléchargements. Choisissez « Ouvrir dans Safari » dans son menu, ou copiez le lien et collez-le vous-même dans Safari.",
        },
        {
          q: "Ça marche aussi sur iPad ?",
          a: "Oui, exactement pareil — iPadOS utilise le même flux Fichiers et Photos.",
        },
      ],
    },

    "download-tiktok-android": {
      seoTitle: "Télécharger des vidéos TikTok sur Android — sans application | SFY",
      metaDesc:
        "Sauvegardez des vidéos TikTok sur n'importe quel téléphone Android avec Chrome : où va le fichier, accès galerie, et solutions aux problèmes courants.",
      h1: "Télécharger des vidéos TikTok sur Android",
      intro:
        "Sur Android, SFY fonctionne dans Chrome et dépose le MP4 directement dans votre dossier Téléchargements — visible dans la galerie.",
      toolMode: "video",
      steps: [
        {
          title: "Copiez le lien dans TikTok",
          desc: "Partager → Copier le lien sur une vidéo publique.",
        },
        {
          title: "Collez-le dans SFY sur Chrome",
          desc: "Ouvrez sfy.app dans Chrome, collez, puis Téléchargez.",
        },
        {
          title: "Ouvrez votre dossier Téléchargements",
          desc: "Fichiers → Téléchargements, ou la notification qui apparaît.",
        },
      ],
      sections: [
        {
          title: "Où va le fichier sur Android ?",
          body: [
            "Chrome enregistre dans le dossier Téléchargements de votre stockage interne. La plupart des galeries (Google Photos, Galerie Samsung) le détectent automatiquement en quelques secondes.",
            "Vous pouvez aussi ouvrir l'app Files → Téléchargements, ou toucher la notification de téléchargement que Chrome affiche en fin de transfert.",
          ],
        },
        {
          title: "Si rien ne se passe",
          body: [
            "Le navigateur interne d'Android (ouvert quand on touche un lien dans TikTok) peut être restrictif. Choisissez « Ouvrir dans Chrome » dans son menu, ou copiez le lien et collez-le directement dans Chrome.",
            "Sur certaines marques (Xiaomi, Huawei), vérifiez que Chrome a l'autorisation de stockage : Paramètres → Applications → Chrome → Autorisations.",
          ],
          list: [
            "Dossier Téléchargements = destination par défaut",
            "Les galeries détectent les nouveaux MP4 automatiquement",
            "Préférez Chrome aux navigateurs intégrés",
          ],
        },
      ],
      faq: [
        {
          q: "Où est ma vidéo téléchargée ?",
          a: "Dans Fichiers → Téléchargements (stockage interne). La plupart des galeries l'affichent aussi automatiquement dans un album « Téléchargements » ou « Vidéos ».",
        },
        {
          q: "Dois-je installer quelque chose ?",
          a: "Non. Chrome (ou Firefox) suffit — SFY fonctionne entièrement dans le navigateur.",
        },
        {
          q: "Le téléchargement ne démarre pas. Pourquoi ?",
          a: "Souvent le navigateur intégré de TikTok. Ouvrez plutôt le lien dans Chrome, et vérifiez l'autorisation de stockage de Chrome si ça échoue encore.",
        },
        {
          q: "Puis-je en faire une sonnerie ou un fond d'écran ?",
          a: "Oui — une fois le MP4 ou MP3 dans votre stockage, Android permet de l'utiliser comme n'importe quel fichier média.",
        },
      ],
    },

    "download-tiktok-pc": {
      seoTitle: "Télécharger des vidéos TikTok sur PC (Windows & Mac) | SFY",
      metaDesc:
        "Sauvegardez des vidéos TikTok sur Windows et Mac en deux clics : collez le lien dans votre navigateur, choisissez un format, retrouvez le fichier.",
      h1: "Télécharger des vidéos TikTok sur PC",
      intro:
        "Sur Windows, Mac ou Linux, SFY fonctionne dans n'importe quel navigateur récent et enregistre le fichier dans votre dossier Téléchargements habituel.",
      toolMode: "video",
      steps: [
        {
          title: "Copiez le lien",
          desc: "Depuis l'app TikTok ou tiktok.com : Partager → Copier le lien.",
        },
        {
          title: "Collez-le dans SFY",
          desc: "N'importe quel navigateur : Chrome, Edge, Safari, Firefox…",
        },
        {
          title: "Choisissez un format",
          desc: "Le fichier arrive dans votre dossier Téléchargements.",
        },
      ],
      sections: [
        {
          title: "Le flux le plus rapide sur ordinateur",
          body: [
            "Sur tiktok.com, la flèche Partager donne « Copier le lien » instantanément. Collez-le dans SFY, choisissez Meilleure qualité, et le MP4 apparaît dans votre dossier Téléchargements (Ctrl+J affiche la liste des téléchargements du navigateur).",
            "Pour le montage, le MP4 de SFY s'importe directement dans CapCut, Premiere, DaVinci Resolve ou iMovie sans conversion.",
          ],
        },
        {
          title: "Windows ou Mac — une différence ?",
          body: [
            "Rien ne change côté SFY : l'outil est 100 % dans le navigateur. Seul le dossier de destination diffère — C:\\Utilisateurs\\Vous\\Téléchargements sur Windows, ~/Téléchargements sur macOS.",
          ],
          list: [
            "Ctrl+J (ou Cmd+J) ouvre la liste des téléchargements",
            "Le MP4 fonctionne dans tous les logiciels de montage majeurs",
            "Aucun logiciel, extension ou compte requis",
          ],
        },
      ],
      faq: [
        {
          q: "Faut-il un logiciel sur mon PC ?",
          a: "Non. SFY est un site web — pas d'extension, pas d'installateur, pas de compte. Un navigateur suffit.",
        },
        {
          q: "Où va le fichier ?",
          a: "Dans le dossier Téléchargements par défaut de votre navigateur, exactement comme n'importe quel autre téléchargement.",
        },
        {
          q: "Puis-je télécharger plusieurs vidéos à la suite ?",
          a: "Oui — utilisez « Télécharger une autre vidéo » après chaque sauvegarde. Une limite d'usage raisonnable évite les abus.",
        },
        {
          q: "Ça marche sur Linux ?",
          a: "Oui. Tout navigateur récent, sur n'importe quel système, fait tourner SFY de la même façon.",
        },
      ],
    },

    about: {
      seoTitle: "À propos de SFY — Save For You",
      metaDesc:
        "SFY (Save For You) est un outil web gratuit pour sauvegarder vidéos, audios et photos TikTok publics — sans compte, sans app, sans traçage.",
      h1: "SFY — Save For You",
      intro: "Vos vidéos. Quand vous voulez.",
      toolMode: "video",
      sections: [
        {
          title: "Le produit est le message",
          body: [
            "SFY a été construit autour d'une promesse : collez un lien, recevez un fichier. Pas de compte, pas de tableau de bord, pas de visite guidée. L'outil est tout le produit — tout le reste existe pour le rendre plus rapide et plus clair.",
          ],
        },
        {
          title: "Honnête par conception",
          body: [
            "SFY n'affiche que les options qui existent réellement, ne fonctionne qu'avec du contenu public, et ne contourne jamais une protection. Quand quelque chose ne peut pas être fait proprement, SFY le dit — c'est une qualité, pas un défaut.",
          ],
        },
        {
          title: "Pensé pour le monde",
          body: [
            "Cinq langues au lancement — anglais, français, espagnol, portugais et indonésien — et d'autres à venir. Même outil, même marque, correctement localisés.",
          ],
        },
      ],
      faq: [],
    },

    privacy: {
      seoTitle: "Politique de confidentialité | SFY — Save For You",
      metaDesc:
        "Comment SFY traite vos données : pas de compte, pas de vidéos stockées, des statistiques minimales. La version courte et lisible.",
      h1: "Politique de confidentialité",
      intro: "Version courte : SFY est un outil, pas un commerce de données.",
      toolMode: "video",
      sections: [
        {
          title: "Ce que SFY ne fait pas",
          body: [
            "Pas de compte signifie pas de profil. SFY ne demande ni nom, ni e-mail, ni téléphone. Vos vidéos sauvegardées ne sont pas conservées dans une bibliothèque, un historique ou une base liée à vous.",
          ],
        },
        {
          title: "Ce qui est traité",
          body: [
            "Quand vous analysez un lien, il est traité pour récupérer les options disponibles et fournir votre fichier. Les liens ne sont pas conservés au-delà du nécessaire pour servir et sécuriser la demande (limitation de débit, prévention des abus).",
          ],
        },
        {
          title: "Statistiques & cookies",
          body: [
            "SFY peut utiliser des statistiques agrégées et respectueuses de la vie privée pour comprendre quels outils sont utiles. Pas de trackers publicitaires, pas de fingerprinting, pas de revente de données.",
          ],
        },
      ],
      faq: [],
    },

    terms: {
      seoTitle: "Conditions d'utilisation | SFY — Save For You",
      metaDesc:
        "Conditions d'utilisation de SFY : usage autorisé, propriété intellectuelle, et les règles qui gardent le service gratuit et équitable.",
      h1: "Conditions d'utilisation",
      intro: "Quelques règles pour que le service reste gratuit et équitable pour tous.",
      toolMode: "video",
      sections: [
        {
          title: "Usage autorisé",
          body: [
            "SFY est destiné à sauvegarder des contenus que vous êtes autorisé à sauvegarder : vos propres vidéos, ou des contenus publics avec l'accord du titulaire des droits. Vous êtes responsable de la réutilisation de ce que vous sauvegardez.",
          ],
        },
        {
          title: "Propriété intellectuelle",
          body: [
            "Télécharger un fichier ne transfère aucun droit. Le droit d'auteur reste chez le créateur. Ne republiez pas de contenu protégé sans autorisation.",
          ],
        },
        {
          title: "Le service",
          body: [
            "SFY est fourni « en l'état », sans garantie de disponibilité. Des limites d'usage raisonnable s'appliquent. SFY est indépendant et non affilié à TikTok.",
          ],
        },
      ],
      faq: [],
    },

    contact: {
      seoTitle: "Contact | SFY — Save For You",
      metaDesc:
        "Contacter l'équipe SFY : questions, retours, partenariats ou demandes légales — nous lisons tout.",
      h1: "Contact",
      intro: "Une question, une idée, un bug ? Écrivez-nous — un humain vous lit.",
      toolMode: "video",
      sections: [
        {
          title: "Joindre l'équipe",
          body: [
            "Le moyen le plus simple de nous joindre est l'e-mail : hello@sfy.app. Pour les demandes liées aux droits, mentionnez « copyright » dans l'objet pour arriver vite à la bonne personne.",
          ],
        },
        {
          title: "Ce qui nous aide à vous aider",
          body: [
            "Incluez le lien essayé, votre appareil et votre navigateur, et ce que vous attendiez. Plus c'est précis, plus la correction est rapide.",
          ],
        },
      ],
      faq: [],
    },
  },
};

export default fr;
