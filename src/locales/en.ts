import type { Dict } from "../lib/i18n";

const en: Dict = {
  code: "en",
  name: "English",

  nav: {
    tools: "Tools",
    devices: "Devices",
    about: "About",
    faq: "FAQ",
    cta: "Download",
    menu: "Menu",
    close: "Close",
  },

  home: {
    badge: "Simple • Fast • No install",
    h1a: "TikTok Video",
    h1b: "Downloader",
    subtitle:
      "Download or save the available options of a public TikTok video — right from your browser.",
    formatsTitle: "Everything SFY can save for you",
    formatsSub:
      "One link in, several clean options out. SFY only shows what is actually available.",
    formats: [
      {
        title: "MP4 — Best quality",
        desc: "The cleanest video rendition available, up to 1080p, ready for your camera roll.",
        tag: "Video",
      },
      {
        title: "MP3 audio",
        desc: "Extract the sound: music, voice-overs or viral audio in a light file.",
        tag: "Audio",
      },
      {
        title: "Photos & carousels",
        desc: "Save every slide of a TikTok photo post as individual JPG images.",
        tag: "Images",
      },
      {
        title: "No watermark",
        desc: "When the source allows it, get the video without the floating logo.",
        tag: "Clean",
      },
    ],
    whyTitle: "Why people keep coming back to SFY",
    whySub: "No account. No app. No dark patterns. Just a link and a result.",
    benefits: [
      {
        title: "Free & no sign-up",
        desc: "SFY is free to use and will never ask you to create an account, hand over your email or install anything. Paste a link, get a file.",
      },
      {
        title: "Ready in seconds",
        desc: "The analysis usually takes less than five seconds, even on a slow mobile connection.",
      },
      {
        title: "Works on every device",
        desc: "iPhone, Android, Windows, Mac or Linux — if it has a modern browser, it runs SFY perfectly.",
      },
      {
        title: "Private by design",
        desc: "Links are processed to serve your request, not stored to build a profile. No history page, no tracking of your saves.",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqSub: "The short, honest answers.",
    faq: [
      {
        q: "Is SFY free?",
        a: "Yes. The core features can be used for free. Reasonable limits may apply to keep the service fast for everyone.",
      },
      {
        q: "Do I need to install an app?",
        a: "No. SFY runs entirely in your browser — nothing to download, nothing to update.",
      },
      {
        q: "Can I use SFY on mobile?",
        a: "Yes. SFY is built mobile-first: the tool, the results and the downloads work on iPhone and Android browsers.",
      },
      {
        q: "Why doesn't my video work?",
        a: "The link may be invalid, the video may be private, deleted, region-locked, or its format may not be supported. Check the link and try again.",
      },
      {
        q: "Does SFY keep my videos?",
        a: "No. SFY avoids storing your links or content any longer than needed to answer your request.",
      },
      {
        q: "Is SFY owned by TikTok?",
        a: "No. SFY — Save For You is an independent product and is not affiliated with, or endorsed by, TikTok.",
      },
      {
        q: "Can I save any content?",
        a: "Only content you are allowed to save or reuse. Respect creators' rights and the platform's terms of service.",
      },
    ],
    ctaTitle: "A link. A save. Done.",
    ctaSub: "Your videos, whenever you want them.",
    ctaBtn: "Save a video now",
    otherTools: "Explore the other SFY tools",
    otherToolsSub: "Each tool targets one precise job — pick yours.",
  },

  box: {
    placeholder: "https://www.tiktok.com/@user/video/...",
    cta: "Download",
    paste: "Paste",
    pasteHint: "Clipboard unavailable — tap the field and use Ctrl+V / long-press Paste.",
    analyzing: "Analyzing the video…",
    fetching: "Fetching available options…",
    errEmpty: "Paste a TikTok link first.",
    errInvalid: "That doesn't look like a valid TikTok link.",
    errInaccessible:
      "We couldn't access this content. Check that it's public and still available.",
    errGeneral: "Something went wrong. Please try again.",
    errRate: "Too many requests in a short time. Try again in a moment.",
    readyVideo: "Your video is ready",
    readyAudio: "Your audio is ready",
    readyPhotos: "Your photos are ready",
    readyStory: "The story is ready",
    formatsLabel: "Available options",
    download: "Download",
    newVideo: "Download another video",
    demoPill: "Demo",
    demoNote:
      "Demo interface: metadata come from TikTok's public oEmbed when reachable; download options shown are simulated until the SFY backend is connected.",
    demoToast: "Demo mode — connect the SFY backend to enable real downloads.",
    demoTitle: "Example video (demo mode)",
    demoAuthor: "@example.creator",
    bestQuality: "Best quality",
    mp4hd: "MP4 — HD",
    mp4std: "MP4 — Standard",
    mp3: "Audio — MP3",
    photos: "Photos — JPG",
    story: "Story — MP4",
    noWatermark: "No watermark",
  },

  trust: ["No sign-up", "Mobile friendly", "Fast"],

  how: {
    title: "How SFY works",
    steps: [
      {
        title: "Copy the link",
        desc: "In TikTok, tap Share on a public video, then “Copy link”.",
      },
      {
        title: "Paste it in SFY",
        desc: "Drop the link into the field — the Paste button does it for you.",
      },
      {
        title: "Pick a format",
        desc: "Choose one of the available options and save the file.",
      },
    ],
  },

  faq: { title: "FAQ", sub: "Quick answers for this tool." },

  related: {
    title: "Continue with another SFY tool",
    sub: "One link is often enough for several formats.",
  },

  tools: {
    "tiktok-video-downloader": {
      name: "TikTok Video Downloader",
      desc: "Save public TikTok videos in MP4.",
    },
    "tiktok-mp3": {
      name: "TikTok MP3",
      desc: "Extract the audio of a TikTok.",
    },
    "tiktok-photo-downloader": {
      name: "TikTok Photo Downloader",
      desc: "Save carousel slides as JPG.",
    },
    "tiktok-story-downloader": {
      name: "TikTok Story Downloader",
      desc: "Keep a public story before it expires.",
    },
  },

  devices: {
    "download-tiktok-iphone": {
      name: "TikTok on iPhone",
      desc: "Save to Files, then Photos.",
    },
    "download-tiktok-android": {
      name: "TikTok on Android",
      desc: "Straight into your Downloads.",
    },
    "download-tiktok-pc": {
      name: "TikTok on PC",
      desc: "Windows & Mac, any browser.",
    },
  },

  footer: {
    tagline: "Your videos. Whenever you want.",
    colSfy: "SFY",
    colTools: "Tools",
    colDevices: "Devices",
    colLegal: "Legal",
    colLangs: "Languages",
    home: "Home",
    about: "About",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    rights: "All rights reserved.",
    disclaimer:
      "SFY — Save For You is an independent service and is not affiliated with, or endorsed by, TikTok. Only save content you have the right to save.",
  },

  notFound: {
    title: "Page not found",
    desc: "This page doesn't exist — but your next save is one link away.",
    btn: "Back to SFY",
  },

  pages: {
    "tiktok-video-downloader": {
      seoTitle: "TikTok Video Downloader — Save TikTok Videos Online | SFY",
      metaDesc:
        "Download public TikTok videos in MP4, with or without watermark when available. Free, no sign-up, works on iPhone, Android and PC.",
      h1: "TikTok Video Downloader",
      intro:
        "Paste a public TikTok link — vm.tiktok.com, vt.tiktok.com or full links — and get the video options available for that clip.",
      toolMode: "video",
      sections: [
        {
          title: "Which TikTok links does SFY accept?",
          body: [
            "SFY understands the links the TikTok app generates when you tap “Share → Copy link”: short vm.tiktok.com and vt.tiktok.com links, as well as full www.tiktok.com/@user/video/… URLs.",
            "The video must be public. Private accounts, friends-only videos, deleted clips or region-locked content can't be resolved — SFY will tell you clearly instead of failing silently.",
          ],
        },
        {
          title: "About quality and watermarks",
          body: [
            "SFY lists the renditions that genuinely exist for a video: best quality (up to 1080p when the source provides it), an HD MP4 and a lighter standard MP4. If a rendition isn't available, it simply isn't shown — SFY never invents options.",
            "A no-watermark option is offered whenever the source technically allows it. It is never guaranteed: it depends on the video itself.",
          ],
        },
      ],
      faq: [
        {
          q: "Does SFY remove the TikTok watermark?",
          a: "When the source allows it, SFY offers a no-watermark rendition as “Best quality”. If it isn't technically possible, only the standard options are shown.",
        },
        {
          q: "Why do I only see two or three options?",
          a: "Because those are the only renditions that exist for that video. SFY only lists what is genuinely available.",
        },
        {
          q: "Can I download videos from private accounts?",
          a: "No. SFY only works with public content and never bypasses any privacy setting or protection.",
        },
        {
          q: "Is there a limit?",
          a: "A fair-use limit applies (a handful of analyses per minute) so the service stays fast for everyone.",
        },
      ],
    },

    "tiktok-mp3": {
      seoTitle: "TikTok to MP3 — Extract TikTok Audio Online | SFY",
      metaDesc:
        "Turn any public TikTok into MP3: extract sounds, songs and voice-overs in seconds. Free, no app, works in your browser.",
      h1: "TikTok to MP3 Converter",
      intro:
        "Only need the sound? Paste a TikTok link and extract the audio track as a light MP3 file — ideal for sounds, songs and voice-overs.",
      toolMode: "mp3",
      sections: [
        {
          title: "When extracting audio is the right move",
          body: [
            "Most TikTok audios are short: a hook, a punchline, a remix. Downloading the whole video wastes storage — the MP3 keeps only the sound, usually a few hundred kilobytes.",
            "The extraction targets the audio track of public videos. If a video has no separable audio, SFY tells you instead of producing an empty file.",
          ],
        },
        {
          title: "Quality, bitrate and files",
          body: [
            "SFY produces a standard MP3 (around 128 kbps) that plays everywhere: phone, car, editor, ringtone maker. The file is named after the video so you can find it back easily.",
          ],
        },
      ],
      faq: [
        {
          q: "Is the MP3 the original sound?",
          a: "It is the audio track of the public video you linked, converted to MP3. Quality matches what the source provides.",
        },
        {
          q: "Can I extract audio from any TikTok?",
          a: "From any public TikTok that contains audio. Private or removed videos can't be processed.",
        },
        {
          q: "Can I use the audio in my own content?",
          a: "Only if you have the rights. Many sounds are copyrighted — check before reusing them publicly.",
        },
        {
          q: "Do I also get the video?",
          a: "This tool focuses on audio. Use the TikTok Video Downloader if you want the MP4 as well.",
        },
      ],
    },

    "tiktok-photo-downloader": {
      seoTitle: "TikTok Photo Downloader — Save Slides as JPG | SFY",
      metaDesc:
        "Download photos and carousel slides from public TikTok posts as JPG images. Free, fast, no watermark added by SFY.",
      h1: "TikTok Photo Downloader",
      intro:
        "TikTok photo posts and carousels can be saved slide by slide. Paste the link and get the images as individual JPG files.",
      toolMode: "photo",
      sections: [
        {
          title: "Photo mode vs. carousel mode",
          body: [
            "Since photo mode launched, many posts are slideshows rather than videos. SFY detects the format from the link: a single image, or every slide of a carousel, saved in order.",
            "If the link points to a real video, SFY suggests switching to the Video Downloader rather than failing.",
          ],
        },
        {
          title: "What you get",
          body: [
            "Each slide is delivered as a JPG at the resolution published by the creator. No re-encoding tricks, no added watermark from SFY.",
          ],
        },
      ],
      faq: [
        {
          q: "Does it work with swipe carousels?",
          a: "Yes — every slide of a public carousel can be saved, in order, as separate JPG files.",
        },
        {
          q: "What resolution are the photos?",
          a: "The resolution published on TikTok. SFY doesn't upscale or alter the images.",
        },
        {
          q: "Why does my photo post resolve as a video?",
          a: "Some posts mix formats. In that case, use the Video Downloader for the same link.",
        },
        {
          q: "Are the images watermarked?",
          a: "SFY doesn't add any watermark. Whatever the source contains is what you get.",
        },
      ],
    },

    "tiktok-story-downloader": {
      seoTitle: "TikTok Story Downloader — Save Public Stories | SFY",
      metaDesc:
        "Save a public TikTok story before it disappears after 24 hours. Free and instant, directly in your browser.",
      h1: "TikTok Story Downloader",
      intro:
        "Stories vanish after 24 hours. When a public story is technically reachable, SFY lets you keep a copy before it's gone.",
      toolMode: "story",
      sections: [
        {
          title: "The 24-hour rule",
          body: [
            "TikTok stories are ephemeral by design: after a day they're removed automatically. If you want to keep one, do it quickly — the same link stops resolving once the story expires.",
          ],
        },
        {
          title: "What SFY can and cannot do",
          body: [
            "SFY can save a public story when the platform exposes it. It never accesses private stories, never bypasses visibility settings, and tells you clearly when a story is no longer available.",
          ],
        },
      ],
      faq: [
        {
          q: "Can I save anyone's story?",
          a: "Only public stories that are technically reachable. Private or restricted stories are out of scope — always.",
        },
        {
          q: "The link stopped working. Why?",
          a: "Stories expire after 24 hours. After that, the content is gone from TikTok itself.",
        },
        {
          q: "Do creators know I saved their story?",
          a: "No. Saving doesn't send any notification.",
        },
        {
          q: "In which format is the story saved?",
          a: "As an MP4 video, at the quality the story was published.",
        },
      ],
    },

    "download-tiktok-iphone": {
      seoTitle: "Download TikTok Videos on iPhone (iOS) — No App | SFY",
      metaDesc:
        "How to save TikTok videos on iPhone and iPad with Safari: step-by-step, where the file lands, and how to move it to Photos.",
      h1: "Download TikTok Videos on iPhone",
      intro:
        "No app, no shortcut: on iOS, SFY works directly in Safari and saves the video to the Files app.",
      toolMode: "video",
      steps: [
        {
          title: "Copy the link in TikTok",
          desc: "Share → Copy link on any public video.",
        },
        {
          title: "Paste it in SFY in Safari",
          desc: "Open sfy.app in Safari, paste, then Download.",
        },
        {
          title: "Find it in Files → Downloads",
          desc: "Then Share → Save Video to add it to Photos.",
        },
      ],
      sections: [
        {
          title: "Where does the file go on iOS?",
          body: [
            "Since iOS 13, Safari downloads go to the Files app — not directly to the camera roll. Open Files → Browse → Downloads: your MP4 is there.",
            "To move it to Photos: long-press the file, choose Share, then “Save Video”. It will appear in your library like any video you shot.",
          ],
        },
        {
          title: "Common iPhone pitfalls",
          body: [
            "If a tap on “Download” opens the video in a tab instead of saving it, press and hold the button and choose “Download Linked File”.",
            "SFY needs Safari (or Chrome/Firefox on iOS) — it doesn't work inside TikTok's internal browser. Copy the link and open Safari properly.",
          ],
          list: [
            "iOS 13 or newer is required for file downloads in Safari",
            "Files app → Downloads is the default landing folder",
            "Use Share → Save Video to reach the Photos app",
          ],
        },
      ],
      faq: [
        {
          q: "Why isn't the video in my Photos app?",
          a: "iOS saves browser downloads to Files first. Open Files → Downloads, then Share → Save Video to copy it into Photos.",
        },
        {
          q: "Do I need a Shortcut or an app?",
          a: "No. SFY runs in Safari; nothing needs to be installed on your iPhone or iPad.",
        },
        {
          q: "It opens in TikTok's in-app browser — help!",
          a: "That embedded browser blocks downloads. Tap the link's menu and choose “Open in Safari”, or copy the link and paste it in Safari yourself.",
        },
        {
          q: "Does it work on iPad too?",
          a: "Yes, exactly the same way — iPadOS uses the same Files and Photos flow.",
        },
      ],
    },

    "download-tiktok-android": {
      seoTitle: "Download TikTok Videos on Android — No App Needed | SFY",
      metaDesc:
        "Save TikTok videos on any Android phone with Chrome: where the file lands, gallery access, and fixes for common problems.",
      h1: "Download TikTok Videos on Android",
      intro:
        "On Android, SFY works in Chrome and drops the MP4 straight into your Downloads folder — visible in the gallery.",
      toolMode: "video",
      steps: [
        {
          title: "Copy the link in TikTok",
          desc: "Share → Copy link on any public video.",
        },
        {
          title: "Paste it in SFY in Chrome",
          desc: "Open sfy.app in Chrome, paste, then Download.",
        },
        {
          title: "Open your Downloads folder",
          desc: "Files → Downloads, or the notification that appears.",
        },
      ],
      sections: [
        {
          title: "Where does the file go on Android?",
          body: [
            "Chrome saves to the Downloads folder of your internal storage. Most gallery apps (Google Photos, Samsung Gallery) pick it up automatically within a few seconds.",
            "You can also open the Files by Google app → Downloads, or tap the download notification that Chrome shows when the transfer completes.",
          ],
        },
        {
          title: "If nothing happens",
          body: [
            "Android's in-app browser (opened when you tap a link inside TikTok) can be restrictive. Choose “Open in Chrome” from its menu, or copy the link and paste it in Chrome directly.",
            "On some brands (Xiaomi, Huawei), check that Chrome has storage permission: Settings → Apps → Chrome → Permissions.",
          ],
          list: [
            "Downloads folder = default destination",
            "Gallery apps detect new MP4 files automatically",
            "Prefer Chrome over in-app browsers",
          ],
        },
      ],
      faq: [
        {
          q: "Where is my downloaded video?",
          a: "In Files → Downloads (internal storage). Most galleries also show it automatically in a “Downloads” or “Videos” album.",
        },
        {
          q: "Do I need to install anything?",
          a: "No. Chrome (or Firefox) is enough — SFY runs entirely in the browser.",
        },
        {
          q: "The download doesn't start. Why?",
          a: "Usually the in-app TikTok browser. Open the link in Chrome instead, and check Chrome's storage permission if it still fails.",
        },
        {
          q: "Can I set it as a ringtone or wallpaper?",
          a: "Yes — once the MP4 or MP3 is in your storage, Android lets you use it like any media file.",
        },
      ],
    },

    "download-tiktok-pc": {
      seoTitle: "Download TikTok Videos on PC (Windows & Mac) | SFY",
      metaDesc:
        "Save TikTok videos on Windows and Mac in two clicks: paste the link in your browser, pick a format, find the file.",
      h1: "Download TikTok Videos on PC",
      intro:
        "On Windows, Mac or Linux, SFY runs in any modern browser and saves the file to your usual Downloads folder.",
      toolMode: "video",
      steps: [
        {
          title: "Copy the link",
          desc: "From the TikTok app or tiktok.com: Share → Copy link.",
        },
        {
          title: "Paste it in SFY",
          desc: "Any browser: Chrome, Edge, Safari, Firefox…",
        },
        {
          title: "Pick a format",
          desc: "The file lands in your Downloads folder.",
        },
      ],
      sections: [
        {
          title: "The fastest workflow on desktop",
          body: [
            "On tiktok.com, the Share arrow gives you “Copy link” instantly. Paste it in SFY, choose Best quality, and the MP4 appears in your Downloads folder (Ctrl+J shows the browser's download list).",
            "For editing, the MP4 from SFY imports directly in CapCut, Premiere, DaVinci Resolve or iMovie without conversion.",
          ],
        },
        {
          title: "Windows vs. Mac — anything different?",
          body: [
            "Nothing changes on the SFY side: the tool is 100% in the browser. Only the destination folder differs — C:\\Users\\You\\Downloads on Windows, ~/Downloads on macOS.",
          ],
          list: [
            "Ctrl+J (or Cmd+J) opens the browser download list",
            "MP4 works in every major video editor",
            "No software, extension or account required",
          ],
        },
      ],
      faq: [
        {
          q: "Do I need software on my PC?",
          a: "No. SFY is a website — no extension, no installer, no account. A browser is enough.",
        },
        {
          q: "Where does the file go?",
          a: "Into your browser's default Downloads folder, exactly like any other download.",
        },
        {
          q: "Can I download several videos in a row?",
          a: "Yes — use “Download another video” after each save. A fair-use limit prevents abuse.",
        },
        {
          q: "Does it work on Linux?",
          a: "Yes. Any modern browser on any OS runs SFY the same way.",
        },
      ],
    },

    about: {
      seoTitle: "About SFY — Save For You",
      metaDesc:
        "SFY (Save For You) is a free web tool to save public TikTok videos, audios and photos — no account, no app, no tracking.",
      h1: "SFY — Save For You",
      intro: "Your videos. Whenever you want.",
      toolMode: "video",
      sections: [
        {
          title: "The product is the message",
          body: [
            "SFY was built around one promise: paste a link, get a file. No account, no dashboard, no onboarding tour. The tool is the whole product — everything else exists to make it faster and clearer.",
          ],
        },
        {
          title: "Honest by design",
          body: [
            "SFY only shows options that genuinely exist, only works with public content, and never bypasses a protection. When something can't be done cleanly, SFY says so — that's a feature, not a bug.",
          ],
        },
        {
          title: "Built for the world",
          body: [
            "Five languages at launch — English, French, Spanish, Portuguese and Bahasa Indonesia — with more on the way. Same tool, same brand, properly localized.",
          ],
        },
      ],
      faq: [],
    },

    privacy: {
      seoTitle: "Privacy Policy | SFY — Save For You",
      metaDesc:
        "How SFY handles your data: no account, no stored videos, minimal analytics. The short, readable version.",
      h1: "Privacy Policy",
      intro: "The short version: SFY is a tool, not a data business.",
      toolMode: "video",
      sections: [
        {
          title: "What SFY does not do",
          body: [
            "No account means no profile. SFY doesn't ask for your name, your email or your phone. Your saved videos are not kept in a library, a history or a database tied to you.",
          ],
        },
        {
          title: "What is processed",
          body: [
            "When you analyze a link, it is processed to fetch the available options and deliver your file. Links are not retained beyond what is needed to serve and secure the request (rate limiting, abuse prevention).",
          ],
        },
        {
          title: "Analytics & cookies",
          body: [
            "SFY may use privacy-respecting, aggregate analytics to understand which tools are useful. No advertising trackers, no fingerprinting, no resale of any data.",
          ],
        },
      ],
      faq: [],
    },

    terms: {
      seoTitle: "Terms of Service | SFY — Save For You",
      metaDesc:
        "Terms of service of SFY: acceptable use, intellectual property, and the rules that keep the service free and fair.",
      h1: "Terms of Service",
      intro: "A few rules so the service stays free and fair for everyone.",
      toolMode: "video",
      sections: [
        {
          title: "Acceptable use",
          body: [
            "SFY is meant for saving content you are allowed to save: your own videos, or public content with the rights holder's permission. You are responsible for how you reuse what you save.",
          ],
        },
        {
          title: "Intellectual property",
          body: [
            "Downloading a file doesn't transfer any right. Copyright remains with the creator. Do not re-publish protected content without authorization.",
          ],
        },
        {
          title: "The service",
          body: [
            "SFY is provided “as is”, without warranty of availability. Fair-use limits apply. SFY is independent and not affiliated with TikTok.",
          ],
        },
      ],
      faq: [],
    },

    contact: {
      seoTitle: "Contact | SFY — Save For You",
      metaDesc:
        "Contact the SFY team: questions, feedback, partnerships or legal requests — we read everything.",
      h1: "Contact",
      intro: "A question, an idea, a bug? Write to us — a human reads it.",
      toolMode: "video",
      sections: [
        {
          title: "Reach the team",
          body: [
            "The simplest way to reach us is email: hello@sfy.app. For rights-related requests, mention “copyright” in the subject so it reaches the right person fast.",
          ],
        },
        {
          title: "What helps us help you",
          body: [
            "Include the link you tried, your device and browser, and what you expected. The more precise, the faster the fix.",
          ],
        },
      ],
      faq: [],
    },
  },
};

export default en;
