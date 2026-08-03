import { useEffect } from "react";
import { useI18n } from "@/lib/i18n";

type MetaInput = {
  title: string;
  description: string;
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

function upsertCanonical(href: string) {
  if (typeof document === "undefined") return;
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Keeps <title>, description, Open Graph tags, canonical and <html lang>
 * in sync with the current route and the selected language.
 */
export function useHeadMeta({ title, description }: MetaInput) {
  const { lang } = useI18n();

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.title = title;
    document.documentElement.lang = lang;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    const url = window.location.origin + window.location.pathname;
    upsertMeta('meta[property="og:url"]', "property", "og:url", url);
    upsertCanonical(url);
  }, [title, description, lang]);
}
