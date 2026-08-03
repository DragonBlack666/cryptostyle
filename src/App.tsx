import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { DICTS, I18nContext, type LangCode } from "@/lib/i18n";
import LandingPage from "./pages/LandingPage";

// Only the landing page ships in the initial bundle; every other route is
// fetched on demand so first paint stays as light as possible.
const ProgramsPage = lazy(() => import("./pages/ProgramsPage"));
const NeoClubPage = lazy(() => import("./pages/NeoClubPage"));
const MultiMatrixPage = lazy(() => import("./pages/MultiMatrixPage"));
const CryptoCashHome = lazy(() => import("./crypto-cash/pages/Home"));
const CryptoCashArchitecture = lazy(() => import("./crypto-cash/pages/Architecture"));
const CryptoCashTiers = lazy(() => import("./crypto-cash/pages/Tiers"));
const CryptoCashRanks = lazy(() => import("./crypto-cash/pages/Ranks"));
const CryptoCashDevelopment = lazy(() => import("./crypto-cash/pages/Development"));
const CryptoCashHowToStart = lazy(() => import("./crypto-cash/pages/HowToStart"));
const CryptoCashFaq = lazy(() => import("./crypto-cash/pages/Faq"));

export default function App() {
  const [lang, setLangState] = useState<LangCode>("ru");

  useEffect(() => {
    const saved = window.localStorage.getItem("cs_lang") as LangCode | null;
    const initial = saved && saved in DICTS ? saved : "ru";
    setLangState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLang = (l: LangCode) => {
    setLangState(l);
    window.localStorage.setItem("cs_lang", l);
    document.documentElement.lang = l;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: DICTS[lang] }}>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </I18nContext.Provider>
  );
}
