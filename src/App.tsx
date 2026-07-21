import { useEffect, useState } from "react";
import { DICTS, I18nContext, type LangCode } from "@/lib/i18n";
import LandingPage from "./pages/LandingPage";

export default function App() {
  const [lang, setLangState] = useState<LangCode>("ru");

  useEffect(() => {
    const saved = window.localStorage.getItem("cs_lang") as LangCode | null;
    if (saved && saved in DICTS) setLangState(saved);
  }, []);

  const setLang = (l: LangCode) => {
    setLangState(l);
    window.localStorage.setItem("cs_lang", l);
    document.documentElement.lang = l;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: DICTS[lang] }}>
      <LandingPage />
    </I18nContext.Provider>
  );
}
