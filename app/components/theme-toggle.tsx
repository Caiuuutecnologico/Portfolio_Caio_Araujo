"use client";

import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "caio-portfolio-theme";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const shouldUseDarkTheme = savedTheme !== "light";

    setIsDark(shouldUseDarkTheme);
    document.documentElement.dataset.theme = shouldUseDarkTheme ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";
    window.localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? "dark" : "light");
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Ativar tema ${isDark ? "claro" : "escuro"}`}
      title={`Ativar tema ${isDark ? "claro" : "escuro"}`}
    >
      <span className="theme-icon" aria-hidden="true">{isDark ? "☼" : "◐"}</span>
      <span className="theme-label">{isDark ? "Claro" : "Escuro"}</span>
    </button>
  );
}
