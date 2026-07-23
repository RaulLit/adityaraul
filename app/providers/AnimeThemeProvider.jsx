"use client";

import React, { createContext, useContext, useEffect, useState, Suspense, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const AnimeThemeContext = createContext({
  isAnimeMode: false,
  toggleAnimeMode: () => {},
});

function AnimeThemeSearchParamHandler({ onModeChange }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const animeParam = searchParams.get("anime");
    const isActive = animeParam !== null && animeParam !== "false";
    onModeChange(isActive);
  }, [searchParams, onModeChange]);

  return null;
}

export function AnimeThemeProvider({ children }) {
  const [isAnimeMode, setIsAnimeMode] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isAnimeMode) {
      document.body.classList.add("anime-mode");
    } else {
      document.body.classList.remove("anime-mode");
    }
  }, [isAnimeMode]);

  const handleModeChange = useCallback((active) => {
    setIsAnimeMode(active);
  }, []);

  const toggleAnimeMode = () => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (isAnimeMode) {
      url.searchParams.delete("anime");
    } else {
      url.searchParams.set("anime", "true");
    }
    const newPath = url.pathname + url.search;
    router.push(newPath, { scroll: false });
    setIsAnimeMode(!isAnimeMode);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimeThemeContext.Provider value={{ isAnimeMode, toggleAnimeMode }}>
      <Suspense fallback={null}>
        <AnimeThemeSearchParamHandler onModeChange={handleModeChange} />
      </Suspense>
      {children}
    </AnimeThemeContext.Provider>
  );
}

export function useAnimeTheme() {
  return useContext(AnimeThemeContext);
}
