"use client";
import React, { createContext, useEffect, useState, ReactNode } from "react";
export type ThemeType = "light" | "dark";

export const ThemeContext = createContext<{
  theme: ThemeType;
  switchTheme: (t: ThemeType) => void;
}>({ theme: "dark", switchTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("dark");
  const [mounted, setMounted] = useState(false);

  // Only after mount, read localStorage and apply it
  useEffect(() => {
    const stored = (localStorage.getItem("theme") as ThemeType) || "dark";
    setTheme(stored);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("theme", theme);
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${theme}-mode`);
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
