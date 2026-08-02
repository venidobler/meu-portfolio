"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
    const container = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
            tl.from(".hero-top", { autoAlpha: 0, y: -12, duration: 0.8 })
                .from(
                    ".fade-up",
                    { y: 20, autoAlpha: 0, duration: 0.9, stagger: 0.08 },
                    "-=0.4"
                )
                .from(
                    ".reveal-line",
                    { yPercent: 120, duration: 1.2, stagger: 0.12 },
                    "-=0.8"
                );
        },
        { scope: container }
    );

    return (
        <section ref={container} className="flex min-h-screen flex-col px-6 sm:px-10">
            <header className="hero-top flex items-center justify-between py-6">
                <span className="font-display text-lg font-medium tracking-tight">
                    Venícius Dobler
                </span>
                <span className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Disponível para projetos
                </span>
            </header>

            <div className="flex flex-1 flex-col justify-center">
                <p className="fade-up mb-6 text-sm uppercase tracking-[0.25em] text-muted">
                    Engenheiro de Software
                </p>

                <h1 className="font-display font-semibold leading-[0.9] tracking-tight text-[clamp(3rem,12vw,11rem)]">
                    <span className="block overflow-hidden">
                        <span className="reveal-line block">Venícius</span>
                    </span>
                    <span className="block overflow-hidden">
                        <span className="reveal-line block">
                            Dobler<span className="text-accent">.</span>
                        </span>
                    </span>
                </h1>

                <p className="fade-up mt-8 max-w-xl text-lg text-muted">
                    Desenvolvo sistemas e interfaces com foco em performance,
                    detalhe e experiência.
                </p>
            </div>

            <div className="fade-up flex justify-end py-6 text-xs uppercase tracking-widest text-muted">
                Role para baixo ↓
            </div>
        </section>
    );
}