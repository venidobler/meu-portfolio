const stack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind", "GSAP"],
  Backend: ["Node.js", "APIs REST", "SQL"],
  Ferramentas: ["Git", "Figma", "Vercel"],
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line px-6 py-24 sm:px-10 sm:py-32">
      <div className="mb-12 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Habilidades
        <span className="ml-auto">03</span>
      </div>
      <div className="grid gap-10 sm:grid-cols-3">
        {Object.entries(stack).map(([grupo, itens]) => (
          <div key={grupo}>
            <h3 className="mb-4 text-sm uppercase tracking-widest text-muted">
              {grupo}
            </h3>
            <ul className="space-y-2 font-display text-2xl">
              {itens.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}