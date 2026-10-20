import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/lib/portfolio";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="site-header sticky top-0 z-40 border-b border-line backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-8">
        <a href="#top" className="font-display truncate text-lg font-bold tracking-tight">
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-quiet text-sm font-medium">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="btn-primary btn-sm">
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
}