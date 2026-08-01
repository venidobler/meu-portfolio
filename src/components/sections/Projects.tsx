const projetos = [
  { nome: "Projeto Um", ano: "2025", tags: ["Next.js", "TypeScript"] },
  { nome: "Projeto Dois", ano: "2025", tags: ["React", "Node"] },
  { nome: "Projeto Três", ano: "2024", tags: ["UI", "Design"] },
];

export default function Projects() {
  return (
    <section id="projetos" className="border-t border-line px-6 py-24 sm:px-10 sm:py-32">
      <div className="mb-12 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Projetos
        <span className="ml-auto">02</span>
      </div>
      <ul>
        {projetos.map((p) => (
          <li
            key={p.nome}
            className="group flex flex-col gap-4 border-b border-line py-8 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <span className="font-display text-4xl transition-colors group-hover:text-accent sm:text-6xl">
              {p.nome}
            </span>
            <span className="flex items-center gap-4 text-sm text-muted">
              {p.tags.join(" · ")}
              <span className="tabular-nums">{p.ano}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}