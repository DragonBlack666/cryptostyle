// Responsive image descriptors. Each export can be spread onto an <img> tag:
//   <img {...heroBgImg} alt="" />
// The browser picks the 960w variant on mobile and the full-size one on desktop.
import heroFull from "@/assets/hero-bg.webp";
import heroSmall from "@/assets/hero-bg-960.webp";
import whyFull from "@/assets/bg-why-light.webp";
import whySmall from "@/assets/bg-why-light-960.webp";
import tonFull from "@/assets/bg-ton-light.webp";
import tonSmall from "@/assets/bg-ton-light-960.webp";
import roadmapFull from "@/assets/bg-roadmap-light.webp";
import roadmapSmall from "@/assets/bg-roadmap-light-960.webp";
import nftFull from "@/assets/nft-card.webp";
import nftSmall from "@/assets/nft-card-960.webp";
import ccBgFull from "@/assets/cc-site-bg.webp";
import ccBgSmall from "@/assets/cc-site-bg-960.webp";
import logoWebp from "@/assets/logo.webp";

type ImgProps = {
  src: string;
  srcSet: string;
  sizes: string;
  width: number;
  height: number;
};

const bg = (small: string, full: string, w: number, h: number): ImgProps => ({
  src: full,
  srcSet: `${small} 960w, ${full} ${w}w`,
  sizes: "100vw",
  width: w,
  height: h,
});

export const heroBgImg = bg(heroSmall, heroFull, 1920, 1080);
export const whyBgImg = bg(whySmall, whyFull, 1920, 1080);
export const tonBgImg = bg(tonSmall, tonFull, 1920, 1080);
export const roadmapBgImg = bg(roadmapSmall, roadmapFull, 1920, 1080);

export const nftCardImg = {
  src: nftFull,
  srcSet: `${nftSmall} 960w, ${nftFull} 1080w`,
  sizes: "(min-width: 1024px) 448px, 90vw",
  width: 1080,
  height: 1080,
};

export const ccSiteBg = { src: ccBgFull, srcSet: `${ccBgSmall} 960w, ${ccBgFull} 1920w` };
export const logoSrc = logoWebp;
