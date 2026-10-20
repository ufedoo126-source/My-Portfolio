import { about, site } from "@/lib/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 md:px-8">
      <div className="grid items-start gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">About me</h2>
          {site.photo && (
            <img
              src={site.photo}
              alt={`Portrait of ${site.name}`}
              className="mt-8 aspect-[4/5] w-full max-w-xs rounded-2xl border border-line object-cover"
            />
          )}
        </div>
        <div className="text-muted flex flex-col gap-5 text-lg leading-relaxed">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}