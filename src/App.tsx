import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DICTS, I18nContext, type LangCode } from "@/lib/i18n";
import LandingPage from "./pages/LandingPage";
import ProgramsPage from "./pages/ProgramsPage";
import NeoClubPage from "./pages/NeoClubPage";
import MultiMatrixPage from "./pages/MultiMatrixPage";
import CryptoCashHome from "./crypto-cash/pages/Home";
import CryptoCashArchitecture from "./crypto-cash/pages/Architecture";
import CryptoCashTiers from "./crypto-cash/pages/Tiers";
import CryptoCashRanks from "./crypto-cash/pages/Ranks";
import CryptoCashDevelopment from "./crypto-cash/pages/Development";
import CryptoCashHowToStart from "./crypto-cash/pages/HowToStart";
import CryptoCashFaq from "./crypto-cash/pages/Faq";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/neo" element={<NeoClubPage />} />
          <Route path="/programs/multi" element={<MultiMatrixPage />} />
          <Route path="/crypto-cash" element={<CryptoCashHome />} />
          <Route path="/crypto-cash/arkhitektura" element={<CryptoCashArchitecture />} />
          <Route path="/crypto-cash/tarify" element={<CryptoCashTiers />} />
          <Route path="/crypto-cash/rangi" element={<CryptoCashRanks />} />
          <Route path="/crypto-cash/razvitie" element={<CryptoCashDevelopment />} />
          <Route path="/crypto-cash/kak-nachat" element={<CryptoCashHowToStart />} />
          <Route path="/crypto-cash/faq" element={<CryptoCashFaq />} />
        </Routes>
      </BrowserRouter>
    </I18nContext.Provider>
  );
}
