"use client";

import { ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  targets?: string;
};

export default function Reveal({ children, className, stagger, targets }: RevealProps) {
  const el = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = targets
        ? el.current!.querySelectorAll(targets)
        : stagger
        ? Array.from(el.current!.children)
        : el.current;

      gsap.from(items, {
        y: 40,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        stagger: stagger || targets ? 0.12 : 0,
        scrollTrigger: {
          trigger: el.current,
          start: "top 80%",
        },
      });
    },
    { scope: el }
  );

  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
}