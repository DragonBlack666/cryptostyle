import { useEffect } from "react";
import { useI18n } from "./index";

type MetaInput = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
};

function upsertMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  if (typeof document === "undefined") return;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute("data-i18n", "1");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Client-side dynamic document metadata that reacts to language changes.
 * Overrides the static SSR head() so per-language titles/descriptions render
 * without extra route rebuilds.
 */
export function useDocumentMeta({ title, description, ogTitle, ogDescription }: MetaInput) {
  const { lang } = useI18n();
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", ogTitle ?? title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", ogDescription ?? description);
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", "Crypto Cash");
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
    const url = window.location.origin + window.location.pathname;
    upsertMeta('meta[property="og:url"]', "property", "og:url", url);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", ogTitle ?? title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", ogDescription ?? description);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
    document.documentElement.lang = lang;
  }, [title, description, ogTitle, ogDescription, lang]);
}
