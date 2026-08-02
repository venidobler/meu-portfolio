import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="sobre" className="border-t border-line px-6 py-24 sm:px-10 sm:py-32">
      <Reveal stagger>
        <div className="mb-12 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Sobre
          <span className="ml-auto">01</span>
        </div>
        <p className="max-w-4xl font-display text-3xl leading-snug sm:text-5xl sm:leading-[1.15]">
          Desenvolvo{" "}
          <span className="text-muted">
            sistemas e interfaces com atenção a performance, detalhe e
            experiência.
          </span>{" "}
          Gosto de transformar ideias complexas em produtos claros e bem
          acabados.
        </p>
      </Reveal>
    </section>
  );
}