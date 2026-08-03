import { useI18n as useSiteI18n, type LangCode } from "@/lib/i18n";
import { ru, type Dict } from "./dict";
import { en } from "./dicts/en";
import { de } from "./dicts/de";
import { fr } from "./dicts/fr";
import { it } from "./dicts/it";
import { es } from "./dicts/es";
import { pt } from "./dicts/pt";
import { uk } from "./dicts/uk";
import { kk } from "./dicts/kk";
import { pl } from "./dicts/pl";
import { hu } from "./dicts/hu";

export type { Dict };

const DICTS: Record<LangCode, Dict> = { ru, en, de, fr, it, es, pt, uk, kk, pl, hu };

export function useI18n(): { lang: LangCode; t: Dict } {
  const { lang } = useSiteI18n();
  return { lang, t: DICTS[lang] };
}

export function useT(): Dict {
  return useI18n().t;
}
