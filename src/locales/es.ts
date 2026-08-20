import type { Dict } from "../lib/i18n";

const es: Dict = {
  code: "es",
  name: "Español",

  nav: {
    tools: "Herramientas",
    devices: "Dispositivos",
    about: "Acerca de",
    faq: "FAQ",
    cta: "Descargar",
    menu: "Menú",
    close: "Cerrar",
  },

  home: {
    badge: "Simple • Rápido • Sin instalación",
    h1a: "Descargador de",
    h1b: "vídeos de TikTok",
    subtitle:
      "Descarga o guarda las opciones disponibles de un vídeo público de TikTok directamente desde tu navegador.",
    formatsTitle: "Todo lo que SFY puede guardar por ti",
    formatsSub: "Un enlace entra, varias opciones limpias salen. SFY solo muestra lo que existe de verdad.",
    formats: [
      { title: "MP4 — Mejor calidad", desc: "La versión más limpia disponible, hasta 1080p, lista para tu galería.", tag: "Vídeo" },
      { title: "Audio MP3", desc: "Extrae el sonido: músicas, voces en off o audios virales en un archivo ligero.", tag: "Audio" },
      { title: "Fotos y carruseles", desc: "Guarda cada diapositiva de un post fotográfico como imágenes JPG.", tag: "Imágenes" },
      { title: "Sin marca de agua", desc: "Cuando la fuente lo permite, obtén el vídeo sin el logo flotante.", tag: "Limpio" },
    ],
    whyTitle: "Por qué la gente vuelve a SFY",
    whySub: "Sin cuenta. Sin app. Sin trucos. Solo un enlace y un resultado.",
    benefits: [
      { title: "Gratis y sin registro", desc: "SFY es gratuito y nunca te pedirá crear una cuenta, dar tu correo ni instalar nada. Pega un enlace, recibe un archivo." },
      { title: "Listo en segundos", desc: "El análisis suele tardar menos de cinco segundos, incluso con una conexión móvil normal." },
      { title: "Funciona en todo", desc: "iPhone, Android, Windows, Mac o Linux — si tiene un navegador moderno, SFY funciona perfectamente." },
      { title: "Privado por diseño", desc: "Los enlaces se procesan para servir tu petición, no se guardan para crear un perfil. Sin historial ni rastreo." },
    ],
    faqTitle: "Preguntas frecuentes",
    faqSub: "Respuestas cortas y honestas.",
    faq: [
      { q: "¿SFY es gratis?", a: "Sí. Las funciones básicas son gratuitas. Pueden aplicarse límites razonables para mantener el servicio rápido para todos." },
      { q: "¿Necesito instalar una aplicación?", a: "No. SFY funciona directamente en el navegador — nada que descargar ni actualizar." },
      { q: "¿Puedo usar SFY en el móvil?", a: "Sí. SFY está diseñado mobile-first: la herramienta, los resultados y las descargas funcionan en navegadores de iPhone y Android." },
      { q: "¿Por qué mi vídeo no funciona?", a: "El enlace puede ser inválido, el vídeo privado, eliminado, bloqueado por región o su formato no estar soportado. Comprueba el enlace e inténtalo de nuevo." },
      { q: "¿SFY guarda mis vídeos?", a: "No. SFY evita almacenar tus enlaces o contenido más allá de lo necesario para responder tu petición." },
      { q: "¿SFY pertenece a TikTok?", a: "No. SFY — Save For You es un producto independiente, sin afiliación ni aprobación de TikTok." },
      { q: "¿Puedo guardar cualquier contenido?", a: "Solo contenido que estés autorizado a guardar o reutilizar. Respeta los derechos de los creadores." },
    ],
    ctaTitle: "Un enlace. Un guardado. Listo.",
    ctaSub: "Tus vídeos, cuando tú quieras.",
    ctaBtn: "Guardar un vídeo ahora",
    otherTools: "Explora las otras herramientas de SFY",
    otherToolsSub: "Cada herramienta hace un trabajo preciso — elige el tuyo.",
  },

  box: {
    placeholder: "https://www.tiktok.com/@usuario/video/...",
    cta: "Descargar",
    paste: "Pegar",
    pasteHint: "Portapapeles no disponible — toca el campo y usa Ctrl+V o «Pegar».",
    analyzing: "Analizando el vídeo…",
    fetching: "Obteniendo las opciones disponibles…",
    errEmpty: "Pega primero un enlace de TikTok.",
    errInvalid: "Ese enlace de TikTok no parece válido.",
    errInaccessible: "No pudimos acceder a este contenido. Comprueba que sea público y siga disponible.",
    errGeneral: "Se produjo un error. Inténtalo de nuevo.",
    errRate: "Demasiadas solicitudes en poco tiempo. Inténtalo en unos instantes.",
    readyVideo: "Tu vídeo está listo",
    readyAudio: "Tu audio está listo",
    readyPhotos: "Tus fotos están listas",
    readyStory: "La historia está lista",
    formatsLabel: "Opciones disponibles",
    download: "Descargar",
    newVideo: "Descargar otro vídeo",
    demoPill: "Demo",
    demoNote: "Interfaz de demostración: los metadatos provienen del oEmbed público de TikTok cuando es accesible; las opciones de descarga son simuladas hasta conectar el backend de SFY.",
    demoToast: "Modo demo — conecta el backend de SFY para habilitar descargas reales.",
    demoTitle: "Vídeo de ejemplo (modo demo)",
    demoAuthor: "@ejemplo.creador",
    bestQuality: "Mejor calidad",
    mp4hd: "MP4 — HD",
    mp4std: "MP4 — Estándar",
    mp3: "Audio — MP3",
    photos: "Fotos — JPG",
    story: "Historia — MP4",
    noWatermark: "Sin marca de agua",
  },

  trust: ["Sin registro", "Compatible con móvil", "Rápido"],

  how: {
    title: "Cómo funciona SFY",
    steps: [
      { title: "Copia el enlace", desc: "En TikTok, toca Compartir y luego «Copiar enlace» en un vídeo público." },
      { title: "Pégalo en SFY", desc: "Pon el enlace en el campo — el botón Pegar lo hace por ti." },
      { title: "Elige un formato", desc: "Descarga una de las opciones disponibles." },
    ],
  },

  faq: { title: "FAQ", sub: "Respuestas rápidas para esta herramienta." },

  related: { title: "Continúa con otra herramienta de SFY", sub: "Un mismo enlace suele dar varios formatos." },

  tools: {
    "tiktok-video-downloader": { name: "Descargador de vídeos de TikTok", desc: "Guarda vídeos públicos en MP4." },
    "tiktok-mp3": { name: "TikTok MP3", desc: "Extrae el audio de un TikTok." },
    "tiktok-photo-downloader": { name: "Descargador de fotos de TikTok", desc: "Guarda carruseles como JPG." },
    "tiktok-story-downloader": { name: "Descargador de historias de TikTok", desc: "Guarda una historia pública antes de que expire." },
  },

  devices: {
    "download-tiktok-iphone": { name: "TikTok en iPhone", desc: "A Archivos y luego Fotos." },
    "download-tiktok-android": { name: "TikTok en Android", desc: "Directo a Descargas." },
    "download-tiktok-pc": { name: "TikTok en PC", desc: "Windows y Mac, cualquier navegador." },
  },

  footer: {
    tagline: "Tus vídeos. Cuando tú quieras.",
    colSfy: "SFY",
    colTools: "Herramientas",
    colDevices: "Dispositivos",
    colLegal: "Legal",
    colLangs: "Idiomas",
    home: "Inicio",
    about: "Acerca de",
    contact: "Contacto",
    privacy: "Privacidad",
    terms: "Términos",
    rights: "Todos los derechos reservados.",
    disclaimer: "SFY — Save For You es un servicio independiente, sin afiliación ni aprobación de TikTok. Guarda solo contenido que tengas derecho a guardar.",
  },

  notFound: { title: "Página no encontrada", desc: "Esta página no existe — pero tu próxima descarga está a un enlace.", btn: "Volver a SFY" },

  pages: {
    "tiktok-video-downloader": {
      seoTitle: "Descargador de vídeos de TikTok — Descargar vídeos online | SFY",
      metaDesc: "Descarga vídeos públicos de TikTok en MP4, con o sin marca de agua cuando esté disponible. Gratis, sin registro, en iPhone, Android y PC.",
      h1: "Descargador de vídeos de TikTok",
      intro: "Pega un enlace público de TikTok — vm.tiktok.com, vt.tiktok.com o enlace completo — y obtén las opciones de vídeo disponibles.",
      toolMode: "video",
      sections: [
        {
          title: "¿Qué enlaces de TikTok acepta SFY?",
          body: [
            "SFY entiende los enlaces que genera la app con «Compartir → Copiar enlace»: los cortos vm.tiktok.com y vt.tiktok.com, y las URL completas www.tiktok.com/@usuario/video/…",
            "El vídeo debe ser público. Cuentas privadas, vídeos solo para amigos, clips eliminados o bloqueados por región no pueden resolverse — SFY te lo dice claramente.",
          ],
        },
        {
          title: "Calidad y marca de agua",
          body: [
            "SFY lista las versiones que existen realmente: mejor calidad (hasta 1080p si la fuente lo da), un MP4 HD y un MP4 estándar más ligero. Si una versión no existe, no se muestra.",
            "La opción sin marca de agua se ofrece cuando la fuente lo permite técnicamente. Nunca está garantizada: depende del propio vídeo.",
          ],
        },
      ],
      faq: [
        { q: "¿SFY quita la marca de agua?", a: "Cuando la fuente lo permite, SFY ofrece una versión sin marca de agua como «Mejor calidad». Si no es posible, solo se muestran las opciones estándar." },
        { q: "¿Por qué solo veo dos o tres opciones?", a: "Porque son las únicas versiones que existen para ese vídeo. SFY solo lista lo disponible de verdad." },
        { q: "¿Puedo descargar de cuentas privadas?", a: "No. SFY solo funciona con contenido público y nunca evita ajustes de privacidad ni protecciones." },
        { q: "¿Hay algún límite?", a: "Se aplica un límite de uso razonable (unos pocos análisis por minuto) para mantener el servicio rápido." },
      ],
    },

    "tiktok-mp3": {
      seoTitle: "TikTok a MP3 — Extraer audio de TikTok online | SFY",
      metaDesc: "Convierte cualquier TikTok público en MP3: extrae sonidos, canciones y voces en off en segundos. Gratis, sin app, en tu navegador.",
      h1: "Conversor de TikTok a MP3",
      intro: "¿Solo necesitas el sonido? Pega un enlace de TikTok y extrae la pista de audio como un archivo MP3 ligero.",
      toolMode: "mp3",
      sections: [
        {
          title: "Cuándo conviene extraer el audio",
          body: [
            "La mayoría de los audios de TikTok son cortos: un gancho, una frase, un remix. Descargar el vídeo completo desperdicia almacenamiento — el MP3 conserva solo el sonido.",
            "La extracción trabaja sobre la pista de audio de vídeos públicos. Si un vídeo no tiene audio separable, SFY te lo dice en lugar de generar un archivo vacío.",
          ],
        },
        {
          title: "Calidad, bitrate y archivos",
          body: ["SFY produce un MP3 estándar (unos 128 kbps) que suena en cualquier sitio: móvil, coche, editor de vídeo o creador de tonos."],
        },
      ],
      faq: [
        { q: "¿El MP3 es el sonido original?", a: "Es la pista de audio del vídeo público que enlazaste, convertida a MP3. La calidad coincide con la de la fuente." },
        { q: "¿Puedo extraer audio de cualquier TikTok?", a: "De cualquier TikTok público con audio. Los vídeos privados o eliminados no pueden procesarse." },
        { q: "¿Puedo usar el audio en mi contenido?", a: "Solo si tienes los derechos. Muchos sonidos tienen copyright — compruébalo antes de reutilizarlos." },
        { q: "¿También obtengo el vídeo?", a: "Esta herramienta se centra en el audio. Usa el Descargador de vídeos si también quieres el MP4." },
      ],
    },

    "tiktok-photo-downloader": {
      seoTitle: "Descargador de fotos de TikTok — Guardar diapositivas en JPG | SFY",
      metaDesc: "Descarga fotos y diapositivas de carruseles públicos de TikTok como imágenes JPG. Gratis, rápido y sin marcas añadidas.",
      h1: "Descargador de fotos de TikTok",
      intro: "Los posts de fotos y carruseles de TikTok pueden guardarse diapositiva a diapositiva. Pega el enlace y recibe imágenes JPG individuales.",
      toolMode: "photo",
      sections: [
        {
          title: "Modo foto vs. modo carrusel",
          body: [
            "Desde que existe el modo foto, muchos posts son presentaciones en lugar de vídeos. SFY detecta el formato desde el enlace: una sola imagen o todas las diapositivas, en orden.",
            "Si el enlace apunta a un vídeo real, SFY sugiere cambiar al Descargador de vídeos en lugar de fallar.",
          ],
        },
        {
          title: "Qué obtienes",
          body: ["Cada diapositiva se entrega como JPG a la resolución publicada por el creador. Sin reescala ni marcas de agua añadidas por SFY."],
        },
      ],
      faq: [
        { q: "¿Funciona con carruseles deslizables?", a: "Sí — cada diapositiva de un carrusel público puede guardarse, en orden, como archivos JPG separados." },
        { q: "¿Qué resolución tienen las fotos?", a: "La publicada en TikTok. SFY no amplía ni altera las imágenes." },
        { q: "¿Por qué mi post de fotos se resuelve como vídeo?", a: "Algunos posts mezclan formatos. En ese caso, usa el Descargador de vídeos con el mismo enlace." },
        { q: "¿Las imágenes llevan marca de agua?", a: "SFY no añade ninguna. Obtienes exactamente lo que contiene la fuente." },
      ],
    },

    "tiktok-story-downloader": {
      seoTitle: "Descargador de historias de TikTok — Guardar historias públicas | SFY",
      metaDesc: "Guarda una historia pública de TikTok antes de que desaparezca a las 24 horas. Gratis e instantáneo, en tu navegador.",
      h1: "Descargador de historias de TikTok",
      intro: "Las historias desaparecen a las 24 horas. Cuando una historia pública es técnicamente accesible, SFY te deja guardarla antes de que se vaya.",
      toolMode: "story",
      sections: [
        {
          title: "La regla de las 24 horas",
          body: ["Las historias de TikTok son efímeras por diseño: tras un día se eliminan automáticamente. Si quieres guardar una, hazlo rápido — el enlace deja de funcionar cuando expira."],
        },
        {
          title: "Lo que SFY puede y no puede hacer",
          body: ["SFY guarda historias públicas cuando la plataforma las expone. Nunca accede a historias privadas ni evita ajustes de visibilidad, y te avisa claramente si ya no están disponibles."],
        },
      ],
      faq: [
        { q: "¿Puedo guardar la historia de cualquiera?", a: "Solo historias públicas técnicamente accesibles. Las privadas o restringidas quedan fuera — siempre." },
        { q: "El enlace dejó de funcionar. ¿Por qué?", a: "Las historias caducan a las 24 horas. Después, el contenido desaparece del propio TikTok." },
        { q: "¿El creador sabe que guardé su historia?", a: "No. Guardar no envía ninguna notificación." },
        { q: "¿En qué formato se guarda?", a: "Como vídeo MP4, con la calidad a la que se publicó la historia." },
      ],
    },

    "download-tiktok-iphone": {
      seoTitle: "Descargar vídeos de TikTok en iPhone (iOS) — sin app | SFY",
      metaDesc: "Cómo guardar vídeos de TikTok en iPhone y iPad con Safari: paso a paso, dónde va el archivo y cómo pasarlo a Fotos.",
      h1: "Descargar vídeos de TikTok en iPhone",
      intro: "Sin app ni atajos: en iOS, SFY funciona directamente en Safari y guarda el vídeo en la app Archivos.",
      toolMode: "video",
      steps: [
        { title: "Copia el enlace en TikTok", desc: "Compartir → Copiar enlace en un vídeo público." },
        { title: "Pégalo en SFY con Safari", desc: "Abre sfy.app en Safari, pega y pulsa Descargar." },
        { title: "Búscalo en Archivos → Descargas", desc: "Luego Compartir → Guardar vídeo para añadirlo a Fotos." },
      ],
      sections: [
        {
          title: "¿Dónde va el archivo en iOS?",
          body: [
            "Desde iOS 13, las descargas de Safari van a la app Archivos — no directamente al carrete. Abre Archivos → Explorar → Descargas: ahí está tu MP4.",
            "Para pasarlo a Fotos: mantén pulsado el archivo, elige Compartir y luego «Guardar vídeo». Aparecerá en tu biblioteca como cualquier vídeo.",
          ],
        },
        {
          title: "Problemas típicos de iPhone",
          body: [
            "Si al tocar «Descargar» el vídeo se abre en una pestaña, mantén pulsado el botón y elige «Descargar archivo enlazado».",
            "SFY necesita Safari (o Chrome/Firefox en iOS) — no funciona dentro del navegador interno de TikTok. Copia el enlace y ábrelo en Safari.",
          ],
          list: [
            "Se requiere iOS 13 o superior para descargar en Safari",
            "Archivos → Descargas es la carpeta de llegada",
            "Compartir → Guardar vídeo para llegar a la app Fotos",
          ],
        },
      ],
      faq: [
        { q: "¿Por qué el vídeo no está en Fotos?", a: "iOS guarda primero las descargas del navegador en Archivos. Abre Archivos → Descargas y usa Compartir → Guardar vídeo." },
        { q: "¿Necesito un atajo o una app?", a: "No. SFY funciona en Safari; no hay nada que instalar en tu iPhone o iPad." },
        { q: "Se abre en el navegador interno de TikTok, ¡ayuda!", a: "Ese navegador bloquea descargas. Elige «Abrir en Safari» o copia el enlace y pégalo tú en Safari." },
        { q: "¿Funciona también en iPad?", a: "Sí, exactamente igual — iPadOS usa el mismo flujo de Archivos y Fotos." },
      ],
    },

    "download-tiktok-android": {
      seoTitle: "Descargar vídeos de TikTok en Android — sin aplicación | SFY",
      metaDesc: "Guarda vídeos de TikTok en cualquier móvil Android con Chrome: dónde va el archivo, acceso a la galería y soluciones a problemas comunes.",
      h1: "Descargar vídeos de TikTok en Android",
      intro: "En Android, SFY funciona en Chrome y deja el MP4 directamente en tu carpeta Descargas — visible en la galería.",
      toolMode: "video",
      steps: [
        { title: "Copia el enlace en TikTok", desc: "Compartir → Copiar enlace en un vídeo público." },
        { title: "Pégalo en SFY con Chrome", desc: "Abre sfy.app en Chrome, pega y pulsa Descargar." },
        { title: "Abre tu carpeta Descargas", desc: "Archivos → Descargas, o la notificación que aparece." },
      ],
      sections: [
        {
          title: "¿Dónde va el archivo en Android?",
          body: [
            "Chrome guarda en la carpeta Descargas del almacenamiento interno. La mayoría de galerías (Google Fotos, Galería de Samsung) lo detectan en segundos.",
            "También puedes abrir Files → Descargas o tocar la notificación de Chrome cuando termina la transferencia.",
          ],
        },
        {
          title: "Si no pasa nada",
          body: [
            "El navegador interno (el que se abre al tocar un enlace dentro de TikTok) puede ser restrictivo. Elige «Abrir en Chrome» o copia el enlace y pégalo en Chrome.",
            "En algunas marcas (Xiaomi, Huawei) comprueba que Chrome tiene permiso de almacenamiento: Ajustes → Aplicaciones → Chrome → Permisos.",
          ],
          list: [
            "Carpeta Descargas = destino por defecto",
            "Las galerías detectan los MP4 nuevos automáticamente",
            "Mejor Chrome que los navegadores integrados",
          ],
        },
      ],
      faq: [
        { q: "¿Dónde está mi vídeo descargado?", a: "En Archivos → Descargas. La mayoría de galerías lo muestran también en un álbum «Descargas» o «Vídeos»." },
        { q: "¿Tengo que instalar algo?", a: "No. Chrome (o Firefox) basta — SFY funciona entero en el navegador." },
        { q: "La descarga no empieza. ¿Por qué?", a: "Suele ser el navegador interno de TikTok. Abre el enlace en Chrome y revisa el permiso de almacenamiento." },
        { q: "¿Puedo usarlo como tono o fondo?", a: "Sí — cuando el MP4 o MP3 está en tu almacenamiento, Android lo trata como cualquier archivo multimedia." },
      ],
    },

    "download-tiktok-pc": {
      seoTitle: "Descargar vídeos de TikTok en PC (Windows y Mac) | SFY",
      metaDesc: "Guarda vídeos de TikTok en Windows y Mac en dos clics: pega el enlace, elige un formato y encuentra el archivo.",
      h1: "Descargar vídeos de TikTok en PC",
      intro: "En Windows, Mac o Linux, SFY funciona en cualquier navegador moderno y guarda el archivo en tu carpeta Descargas habitual.",
      toolMode: "video",
      steps: [
        { title: "Copia el enlace", desc: "Desde la app de TikTok o tiktok.com: Compartir → Copiar enlace." },
        { title: "Pégalo en SFY", desc: "Cualquier navegador: Chrome, Edge, Safari, Firefox…" },
        { title: "Elige un formato", desc: "El archivo llega a tu carpeta Descargas." },
      ],
      sections: [
        {
          title: "El flujo más rápido en escritorio",
          body: [
            "En tiktok.com, la flecha Compartir da «Copiar enlace» al instante. Pégalo en SFY, elige Mejor calidad y el MP4 aparece en Descargas (Ctrl+J muestra la lista del navegador).",
            "Para editar, el MP4 de SFY se importa directamente en CapCut, Premiere, DaVinci Resolve o iMovie sin conversión.",
          ],
        },
        {
          title: "¿Windows o Mac? Nada cambia",
          body: ["Nada cambia en SFY: la herramienta vive en el navegador. Solo cambia la carpeta de destino — C:\\Usuarios\\Tú\\Descargas en Windows, ~/Descargas en macOS."],
          list: [
            "Ctrl+J (o Cmd+J) abre la lista de descargas",
            "El MP4 funciona en todos los editores de vídeo",
            "Sin software, extensiones ni cuenta",
          ],
        },
      ],
      faq: [
        { q: "¿Necesito software en mi PC?", a: "No. SFY es una web — sin extensiones, instaladores ni cuentas. Basta un navegador." },
        { q: "¿Dónde va el archivo?", a: "A la carpeta Descargas por defecto de tu navegador, como cualquier otra descarga." },
        { q: "¿Puedo descargar varios vídeos seguidos?", a: "Sí — usa «Descargar otro vídeo» tras cada guardado. Un límite de uso razonable evita abusos." },
        { q: "¿Funciona en Linux?", a: "Sí. Cualquier navegador moderno en cualquier sistema ejecuta SFY igual." },
      ],
    },

    about: {
      seoTitle: "Acerca de SFY — Save For You",
      metaDesc: "SFY (Save For You) es una herramienta web gratuita para guardar vídeos, audios y fotos públicas de TikTok — sin cuenta, sin app, sin rastreo.",
      h1: "SFY — Save For You",
      intro: "Tus vídeos. Cuando tú quieras.",
      toolMode: "video",
      sections: [
        { title: "El producto es el mensaje", body: ["SFY se construyó sobre una promesa: pega un enlace, recibe un archivo. Sin cuenta, sin panel, sin tutorial. La herramienta es todo el producto."] },
        { title: "Honesto por diseño", body: ["SFY solo muestra opciones que existen de verdad, solo funciona con contenido público y nunca evita una protección. Cuando algo no puede hacerse limpiamente, SFY lo dice."] },
        { title: "Pensado para el mundo", body: ["Cinco idiomas en el lanzamiento — inglés, francés, español, portugués e indonesio — y más en camino."] },
      ],
      faq: [],
    },

    privacy: {
      seoTitle: "Política de privacidad | SFY — Save For You",
      metaDesc: "Cómo trata SFY tus datos: sin cuenta, sin vídeos guardados, analítica mínima. La versión corta y legible.",
      h1: "Política de privacidad",
      intro: "La versión corta: SFY es una herramienta, no un negocio de datos.",
      toolMode: "video",
      sections: [
        { title: "Lo que SFY no hace", body: ["Sin cuenta no hay perfil. SFY no pide nombre, correo ni teléfono. Tus vídeos no se guardan en bibliotecas, historiales ni bases de datos ligadas a ti."] },
        { title: "Qué se procesa", body: ["Cuando analizas un enlace, se procesa para obtener las opciones y entregar tu archivo. Los enlaces no se conservan más allá de lo necesario para servir y proteger la petición."] },
        { title: "Analítica y cookies", body: ["SFY puede usar analítica agregada y respetuosa con la privacidad. Sin rastreadores publicitarios, sin fingerprinting, sin reventa de datos."] },
      ],
      faq: [],
    },

    terms: {
      seoTitle: "Términos de servicio | SFY — Save For You",
      metaDesc: "Términos de servicio de SFY: uso aceptable, propiedad intelectual y las reglas que mantienen el servicio gratis y justo.",
      h1: "Términos de servicio",
      intro: "Unas pocas reglas para que el servicio siga siendo gratis y justo.",
      toolMode: "video",
      sections: [
        { title: "Uso aceptable", body: ["SFY sirve para guardar contenido que estés autorizado a guardar: tus propios vídeos o contenido público con permiso del titular. Eres responsable del uso que hagas."] },
        { title: "Propiedad intelectual", body: ["Descargar un archivo no transfiere derechos. El copyright sigue siendo del creador. No republices contenido protegido sin autorización."] },
        { title: "El servicio", body: ["SFY se ofrece «tal cual», sin garantía de disponibilidad. Se aplican límites de uso razonable. SFY es independiente y no está afiliado a TikTok."] },
      ],
      faq: [],
    },

    contact: {
      seoTitle: "Contacto | SFY — Save For You",
      metaDesc: "Contacta con el equipo de SFY: preguntas, sugerencias, alianzas o solicitudes legales — lo leemos todo.",
      h1: "Contacto",
      intro: "¿Una pregunta, una idea, un bug? Escríbenos — lo lee una persona.",
      toolMode: "video",
      sections: [
        { title: "Escribir al equipo", body: ["La forma más sencilla es el correo: hello@sfy.app. Para solicitudes de derechos, menciona «copyright» en el asunto."] },
        { title: "Qué nos ayuda a ayudarte", body: ["Incluye el enlace que probaste, tu dispositivo y navegador, y qué esperabas. Cuanto más preciso, más rápida la solución."] },
      ],
      faq: [],
    },
  },
};

export default es;
