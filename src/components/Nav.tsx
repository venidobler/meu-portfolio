"use client";

import { useEffect, useState } from "react";
import { getLenis } from "@/lib/lenis";

const links = [
    { label: "Sobre", target: "#sobre" },
    { label: "Projetos", target: "#projetos" },
    { label: "Habilidades", target: "#skills" },
    { label: "Contato", target: "#contato" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState<string>("");

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

    useEffect(() => {
        // fundo aparece depois de rolar um pouco
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        // acende o link da seção que está na tela
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(`#${entry.target.id}`);
                });
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        links.forEach((l) => {
            const el = document.querySelector(l.target);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener("scroll", onScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled ? "bg-bg/70 backdrop-blur-md" : "bg-transparent"
                }`}
        >
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
                                className={`transition-colors hover:text-fg ${active === l.target ? "text-fg" : ""
                                    }`}
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