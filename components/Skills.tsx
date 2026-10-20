import { skillGroups } from "@/lib/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 md:px-8">
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Skills</h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h3 className="text-accent mb-4 text-xs font-semibold uppercase tracking-[0.2em]">{g.title}</h3>
              <ul className="flex flex-col gap-2">
                {g.items.map((item) => (
                  <li key={item} className="text-muted text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}