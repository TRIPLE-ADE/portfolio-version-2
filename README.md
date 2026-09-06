# Abdulrasheed Abdulsalam — Portfolio

An editorial, evidence-led portfolio for a frontend and mobile engineer. It presents selected case studies, technical expertise, experience, and writing with accessible motion and resilient data loading.

## Stack

- Next.js 16 and React 19
- TypeScript and Tailwind CSS 4
- `next-themes` for light/dark modes
- Hashnode RSS for writing
- Vercel Analytics

## Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

The production build intentionally uses Next.js' webpack path because it is reliable across restricted build environments.

## Structure

- `app/` — routes, metadata, and global visual system
- `components/` — portfolio sections and shared navigation
- `data/projects.ts` — case-study content and project evidence
- `lib/hashnode.ts` — validated, timeout-safe writing feed
- `public/` — project media, resume, icons, and manifest

## Deployment

Deploy to Vercel or any Node.js host that supports Next.js. Update `metadataBase` in `app/layout.tsx` and the sitemap URL in `app/robots.txt` if the production domain changes.
