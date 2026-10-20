import { site } from "@/lib/portfolio";

export default function Contact() {
  const { email, whatsapp, github, linkedin } = site.contact;
  const wa = whatsapp.replace(/\D/g, "");

  return (
    <section id="contact" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 md:px-8">
        <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Let&apos;s build something together.
        </h2>
        <p className="text-muted mt-4 max-w-xl text-lg">
          Looking for a developer for your team, or a website for your business? Send me a message.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {email && (
            <a href={`mailto:${email}`} className="btn-primary">
              Email me
            </a>
          )}
          {wa && (
            <a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
              WhatsApp
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn-outline">
              GitHub
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}