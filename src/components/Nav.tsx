"use client";

import { getLenis } from "@/lib/lenis";

const links = [
    { label: "Sobre", target: "#sobre" },
    { label: "Projetos", target: "#projetos" },
    { label: "Habilidades", target: "#skills" },
    { label: "Contato", target: "#contato" },
];

export default function Nav() {
    const scrollTo = (e: React.MouseEvent, target: string | number) => {
        e.preventDefault();
        const lenis = getLenis();
        if (lenis) {
            lenis.scrollTo(target);
        } else if (typeof target === "string") {
            document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-bg via-bg/80 to-transparent">
            <div className="flex items-center justify-between px-6 py-6 sm:px-10">

                <a href="#top"
                    onClick={(e) => scrollTo(e, 0)}
                    className="font-display text-lg font-medium tracking-tight"
                >
                    Venícius Dobler
                </a>
                <ul className="flex items-center gap-6 text-sm text-muted sm:gap-8">
                    {links.map((l) => (
                        <li key={l.target}>

                            <a href={l.target}
                                onClick={(e) => scrollTo(e, l.target)}
                                className="transition-colors hover:text-fg"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}