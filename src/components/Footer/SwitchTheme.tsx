import React, { useContext } from "react";
import { ThemeContext, ThemeType } from "@/providers/ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";

const PALETTES: { key: ThemeType; label: string }[] = [
  { key: "light", label: "Light" },
  { key: "dark", label: "Dark" },
];

function iconFor(key: ThemeType) {
  switch (key) {
    case "light":
      return <FiSun />;
    case "dark":
      return <FiMoon />;
    default:
      return null;
  }
}

function SwitchTheme() {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center gap-3 px-1 py-2">
      {PALETTES.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => switchTheme(key)}
          title={`Switch to ${label}`}
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 ${
            theme === key
              ? "text-[var(--bgThemeIcon)]"
              : "text-[var(--bgThemeIcon)] hover:text-[var(--bgThemeIconHover)]"
          }`}
          aria-label={label}
        >
          {iconFor(key)}
          <span className="sr-only">{label}</span>
        </button>
      ))}
    </div>
  );
}

export default SwitchTheme;
