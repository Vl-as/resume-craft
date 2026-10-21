import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";

function Hero() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-32 -top-24 -z-10 size-[30rem] rounded-full bg-[var(--accent-soft)] opacity-70 blur-3xl" />
      <Container>
        <div className="grid items-center gap-14 md:grid-cols-2 lg:gap-20">
          <div className="max-w-xl">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-2 text-xs font-medium text-[var(--text-muted)] shadow-sm">
              <span className="size-1.5 rounded-full bg-[var(--accent)]" />
              Four premium templates <span className="text-[var(--line)]">·</span> No account needed
            </p>
            <h1 className="text-[clamp(3.25rem,7vw,5.8rem)] font-semibold leading-[0.98] tracking-[-0.075em] text-[var(--text)]">
              Build a resume
              <br />
              that <span className="font-serif font-normal italic text-[var(--accent)]">gets noticed.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-[var(--text-muted)] sm:text-lg sm:leading-8">
              A calm, professional workspace for job seekers and designers. Write on
              the left, watch the page come together on the right, and export a
              polished PDF when it feels right.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/editor"
                className="inline-flex h-12 items-center rounded-xl border border-[var(--line)] bg-[var(--action-bg)] px-5 text-sm font-medium text-[var(--action-text)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--action-hover)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                Create your resume
              </Link>
              <Link
                href="#templates"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-transparent bg-transparent px-5 text-sm font-medium text-[var(--text-muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                View templates
              </Link>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-[var(--text-muted)]">
              <li>Free to start</li>
              <li>Saved on your device</li>
              <li>A4 PDF export</li>
            </ul>
          </div>
          <div className="relative mx-auto flex w-full max-w-[540px] items-center justify-center py-5">
            <div className="absolute left-0 top-10 size-24 rounded-full border border-[var(--line)]" />
            <div className="absolute bottom-8 right-2 size-16 rounded-full bg-[var(--accent-soft)]" />
            <div className="group relative w-[min(82%,390px)] rotate-[2deg] rounded-[1.7rem] border border-[var(--line)] bg-[var(--surface)] p-3 shadow-[0_35px_90px_-35px_rgba(25,35,25,0.35)] transition-all duration-500 ease-out hover:-translate-y-1 hover:rotate-0 hover:shadow-[0_42px_100px_-35px_rgba(25,35,25,0.42)] motion-reduce:transform-none motion-reduce:transition-none">
              <div className="overflow-hidden rounded-[1.15rem] bg-white">
                <Image
                  src="/web-developer.png"
                  alt="Resume example"
                  width={600}
                  height={780}
                  priority
                  className="h-[390px] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025] motion-reduce:transform-none motion-reduce:transition-none sm:h-[460px]"
                />
              </div>
            </div>
            <span className="absolute -bottom-1 right-0 rotate-[-3deg] rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-xs font-semibold text-[var(--text)] shadow-xl sm:bottom-8">
              Live preview · Recruiter-ready in minutes
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
