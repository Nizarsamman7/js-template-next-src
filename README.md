# Next.js src/app starter

Architectural template for a marketing site. Routes, components, and copy are split the same way as a multi-page brand site:

- `src/app` for routes
- `src/components/layout` for header, footer, and page chrome
- `src/components/home` for homepage sections
- `src/data/site.ts` for copy
- `@/*` points at `src/*`

## Run

```bash
npm install
npm run dev
```

Rename the package, replace `site.ts`, and add routes as folders under `src/app`. This starter has no database, auth, or payment code.
