import { site } from "@/lib/portfolio";

// Change this number each January, or whenever you like.
const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-8 md:px-8">
      <div className="text-muted mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 text-sm">
        <span>
          © {YEAR} {site.name}
        </span>
        <span>Built with Next.js</span>
      </div>
    </footer>
  );
}