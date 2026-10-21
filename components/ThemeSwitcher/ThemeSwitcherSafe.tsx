"use client";

import dynamic from "next/dynamic";

const ThemeSwitcherWithNoSSR = dynamic(() => import("./ThemeSwitcher"), {
  ssr: false,
  loading: () => (
    <button
      aria-label="Toggle theme"
      className="size-10 rounded-full border border-[var(--line)]"
    />
  ),
});

export default function ThemeSwitcherSafe() {
  return <ThemeSwitcherWithNoSSR />;
}
