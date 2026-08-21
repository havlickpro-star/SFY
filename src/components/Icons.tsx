import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 20, ...rest }: P) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...rest,
  };
}

/* Marque : flèche de sauvegarde dans un plateau */
export function LogoMark({ size = 22, ...rest }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...rest}>
      <path d="M12 3.5v10m0 0 3.8-3.8M12 13.5 8.2 9.7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 15.5v2.2A2.8 2.8 0 0 0 7.3 20.5h9.4a2.8 2.8 0 0 0 2.8-2.8v-2.2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

export function IconLink(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M10 13.5a4.2 4.2 0 0 0 6 0l3-3a4.24 4.24 0 0 0-6-6l-1.2 1.2" />
      <path d="M14 10.5a4.2 4.2 0 0 0-6 0l-3 3a4.24 4.24 0 0 0 6 6l1.2-1.2" />
    </svg>
  );
}

export function IconClipboard(p: P) {
  return (
    <svg {...base(p)}>
      <rect x="7" y="5.5" width="11" height="15" rx="2.4" />
      <path d="M9.5 5.5V4.8A1.8 1.8 0 0 1 11.3 3h2.4a1.8 1.8 0 0 1 1.8 1.8v.7" />
      <path d="M10.5 12h4M10.5 15.5h2.5" />
    </svg>
  );
}

export function IconDownload(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M12 4v10.5m0 0 4-4m-4 4-4-4" />
      <path d="M4.5 16.5v1A2.5 2.5 0 0 0 7 20h10a2.5 2.5 0 0 0 2.5-2.5v-1" />
    </svg>
  );
}

export function IconCheck(p: P) {
  return (
    <svg {...base(p)}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconChevron(p: P) {
  return (
    <svg {...base(p)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconGlobe(p: P) {
  return (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.6 2.3 3.9 5.1 3.9 8.5s-1.3 6.2-3.9 8.5c-2.6-2.3-3.9-5.1-3.9-8.5s1.3-6.2 3.9-8.5Z" />
    </svg>
  );
}

export function IconBolt(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M13 3 5.5 13.5H11L10 21l7.5-10.5H13L13 3Z" />
    </svg>
  );
}

export function IconShield(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M12 3.5 5 6v5.2c0 4.5 3 7.7 7 9.3 4-1.6 7-4.8 7-9.3V6l-7-2.5Z" />
      <path d="m9 11.8 2.2 2.2L15.5 9.5" />
    </svg>
  );
}

export function IconDevices(p: P) {
  return (
    <svg {...base(p)}>
      <rect x="3.5" y="5" width="13" height="9.5" rx="1.8" />
      <path d="M7.5 18.5h5M10 14.5v4" />
      <rect x="16.5" y="9" width="4.5" height="9.5" rx="1.4" />
    </svg>
  );
}

export function IconMusic(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M9 18.5V6.8c0-.5.3-.9.8-1L18.5 4v11.5" />
      <circle cx="6.7" cy="18.5" r="2.3" />
      <circle cx="16.2" cy="15.5" r="2.3" />
    </svg>
  );
}

export function IconPhoto(p: P) {
  return (
    <svg {...base(p)}>
      <rect x="6.5" y="3.5" width="14" height="14" rx="2.4" />
      <path d="M3.5 8v10.5A2 2 0 0 0 5.5 20.5H16" opacity="0.7" />
      <circle cx="11.2" cy="8.3" r="1.4" />
      <path d="m8 16.5 3.6-3.9 2.5 2.6 1.8-1.8 3.6 3.9" />
    </svg>
  );
}

export function IconStory(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M12 3.5a8.5 8.5 0 1 1-8.1 6" />
      <path d="M12 7.5V12l3 2.2" />
      <path d="M3.5 4.5 4 8l3.4-.6" />
    </svg>
  );
}

export function IconApple(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M15.7 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9-.7 0-1.9-.9-3.1-.8-1.6 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3.1.7c1.3 0 2.1-1.1 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.6-1-2.6-3.7Z" />
      <path d="M13.4 5.4c.6-.8 1.1-1.9 1-3-.9 0-2.1.6-2.7 1.4-.6.7-1.2 1.9-1 2.9 1 .1 2.1-.5 2.7-1.3Z" />
    </svg>
  );
}

export function IconAndroid(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M4.5 16.5a7.5 7.5 0 0 1 15 0v1h-15v-1Z" />
      <path d="m6.5 7.5-1.4-2.2M17.5 7.5l1.4-2.2" />
      <circle cx="9.3" cy="13.5" r="0.4" fill="currentColor" />
      <circle cx="14.7" cy="13.5" r="0.4" fill="currentColor" />
    </svg>
  );
}

export function IconLaptop(p: P) {
  return (
    <svg {...base(p)}>
      <rect x="5" y="5" width="14" height="9.5" rx="1.6" />
      <path d="M3 18.5h18M3 18.5l2-4m16 4-2-4" />
    </svg>
  );
}

export function IconPlay(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M9 6.5v11l8-5.5-8-5.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconArrow(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M4.5 12h15m0 0-5.5-5.5M19.5 12 14 17.5" />
    </svg>
  );
}

export function IconX(p: P) {
  return (
    <svg {...base(p)}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function IconMail(p: P) {
  return (
    <svg {...base(p)}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.4" />
      <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
    </svg>
  );
}

export function IconInfo(p: P) {
  return (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5M12 7.8v.4" />
    </svg>
  );
}

export function IconAlert(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M12 4.5 3.5 19h17L12 4.5Z" />
      <path d="M12 10v4M12 16.6v.4" />
    </svg>
  );
}

export function IconSpark(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M12 4c.6 3.8 2.2 5.4 6 6-3.8.6-5.4 2.2-6 6-.6-3.8-2.2-5.4-6-6 3.8-.6 5.4-2.2 6-6Z" />
      <path d="M18.5 15.5c.3 1.7 1 2.4 2.5 2.7-1.5.3-2.2 1-2.5 2.7-.3-1.7-1-2.4-2.5-2.7 1.5-.3 2.2-1 2.5-2.7Z" opacity="0.7" />
    </svg>
  );
}

export function IconMenu(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function IconRotate(p: P) {
  return (
    <svg {...base(p)}>
      <path d="M4.5 12a7.5 7.5 0 1 1 2.2 5.3" />
      <path d="M4.5 20v-4.5H9" />
    </svg>
  );
}

export function IconFilm(p: P) {
  return (
    <svg {...base(p)}>
      <rect x="4" y="4.5" width="16" height="15" rx="2.4" />
      <path d="M8.5 4.5v15M15.5 4.5v15M4 9h4.5M4 15h4.5M15.5 9H20M15.5 15H20" />
    </svg>
  );
}
