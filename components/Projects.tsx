import { projects } from "@/lib/portfolio";

export default function Projects() {
  const list = projects.filter((p) => p.show);

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 md:px-8">
      <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Selected work</h2>
      <p className="text-muted mt-3 max-w-2xl">
        Real sites built for real businesses, from first design to the live launch.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {list.map((p) => {
          const initials = p.title
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 3)
            .toUpperCase();

          return (
            <article key={p.title} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
              {p.image ? (
                <img src={p.image} alt={`${p.title} screenshot`} className="aspect-[16/10] w-full object-cover" />
              ) : (
                <div className="project-art flex aspect-[16/10] items-center justify-center">
                  <span className="font-display text-6xl font-bold opacity-25">{initials}</span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">{p.kind}</p>
                <h3 className="font-display mt-2 text-2xl font-bold">{p.title}</h3>
                <p className="text-muted mt-3 leading-relaxed">{p.description}</p>

                <ul className="mt-4 flex flex-col gap-2 text-sm">
                  {p.highlights.map((h) => (
                    <li key={h} className="text-muted flex gap-2">
                      <span className="text-accent">→</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                {(p.live || p.code) && (
                  <div className="mt-6 flex gap-5 text-sm font-semibold">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        Live site ↗
                      </a>
                    )}
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        Code ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}