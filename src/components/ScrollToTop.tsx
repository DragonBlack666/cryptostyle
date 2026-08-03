import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll position on route change (anchor links keep their behaviour). */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
