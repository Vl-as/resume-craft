"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@teispace/next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex size-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
}
