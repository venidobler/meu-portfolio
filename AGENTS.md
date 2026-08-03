<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Stack

Next.js (App Router), React 19, TypeScript, Tailwind CSS v4. Deploy contínuo na Vercel.

## Estrutura de pastas

- Todo o código fica em `src/`.
- Páginas e layout em `src/app/`.
- Componentes reutilizáveis em `src/components/`.
- Seções da página em `src/components/sections/` (Hero, About, Projects, Skills, Contact).
- Helpers em `src/lib/`.
- Alias `@/*` aponta para `src/*`.

## Estilo e design tokens

- Paleta de cores e fontes são design tokens no bloco `@theme` de `src/app/globals.css` (`--color-bg`, `--color-fg`, `--color-muted`, `--color-accent`, `--color-line`, `--font-display`).
- Sempre usar as classes de token (`bg-bg`, `text-fg`, `text-accent`, `font-display`, etc.) em vez de cores hardcoded.
- Direção visual "dark cinematográfico" inspirada em sites do Awwwards: fundo near-black, tipografia grande, muito espaço, contenção.
- Fonte de títulos é Bricolage Grotesque (`font-display`); corpo é Geist.

## Animações

- GSAP é a biblioteca de animação. Usar sempre o hook `useGSAP` (de `@gsap/react`) dentro de componentes, com `{ scope: ref }`.
- Animações no scroll usam ScrollTrigger e devem passar pelo componente reutilizável `src/components/Reveal.tsx`.
- Scroll suave é feito com Lenis; a instância é criada em `src/components/SmoothScroll.tsx` e exposta via `src/lib/lenis.ts` (funções `setLenis`/`getLenis`) — a navegação âncora usa `getLenis().scrollTo()`.

## Convenções

- Componentes que usam hooks ou interatividade levam `"use client"`; seções que só renderizam podem ser server components.
- Preferir edições pequenas e localizadas.

## Git

- Branch base é `develop` (Git Flow). Features vão em branches próprias e são mergeadas na `develop`; a `main` é produção (deploy da Vercel) e só recebe versões aprovadas.
- Mensagens de commit usam prefixos (`feat:`, `style:`, `refactor:`, etc.).
