import Link from "next/link";
import Container from "../Container/Container";
import NavBar from "./NavBar/NavBar";
import ThemeSwitcherSafe from "../ThemeSwitcher/ThemeSwitcherSafe";
import { FiFeather } from "react-icons/fi";

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--page)]/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-[76px] items-center justify-between gap-5">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5 rounded-lg transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-[var(--action-bg)] text-[var(--action-text)] transition-transform duration-200 group-hover:-rotate-6">
              <FiFeather size={18} />
            </span>
            <span className="text-[17px] font-semibold tracking-[-0.04em] text-[var(--text)]">
              resume<span className="text-[var(--accent)]">craft</span>
            </span>
          </Link>
          <NavBar className="hidden md:block" />
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <ThemeSwitcherSafe />
            <Link
              href="/editor"
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--action-bg)] px-4 text-sm font-medium text-[var(--action-text)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--action-hover)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:px-5"
            >
              <span className="hidden sm:inline">Open editor</span>
              <span className="sm:hidden">Start</span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
