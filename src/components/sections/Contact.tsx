import Reveal from "@/components/Reveal";

export default function Contact() {
    return (
        <section id="contato" className="border-t border-line px-6 py-24 sm:px-10 sm:py-32">
            <Reveal stagger>
                <div className="mb-12 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Contato
                    <span className="ml-auto">04</span>
                </div>

                <a href="mailto:seu@email.com"
                    className="block font-display font-semibold leading-[0.9] tracking-tight text-[clamp(2.5rem,9vw,8rem)]"
                >
                    Vamos conversar<span className="text-accent">.</span>
                </a>
                <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm uppercase tracking-widest text-muted">
                    <a href="#" className="hover:text-fg">GitHub</a>
                    <a href="#" className="hover:text-fg">LinkedIn</a>
                    <a href="mailto:seu@email.com" className="hover:text-fg">seu@email.com</a>
                </div>
            </Reveal>
        </section>
    );
}