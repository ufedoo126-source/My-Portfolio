import { site } from "@/lib/portfolio";

export default function Hero() {
  return (
    <div className="hero-glow">
      <section id="top" className="mx-auto max-w-6xl px-4 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28">
        {site.available && (
          <p className="chip mb-6">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Open to opportunities
          </p>
        )}
        <p className="text-accent mb-4 text-sm font-semibold uppercase tracking-[0.25em]">{site.role}</p>
        <h1 className="font-display max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          {site.headline}
        </h1>
        <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">{site.intro}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            View my work
          </a>
          <a href="#contact" className="btn-outline">
            Get in touch
          </a>
          {site.cvUrl && (
            <a href={site.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Download CV
            </a>
          )}
        </div>
      </section>
    </div>
  );
}