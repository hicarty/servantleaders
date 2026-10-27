# servantleaders

Monorepo for three sites that share one Next.js template but keep independent
content and styling:

| App | Site | Dev port | Blog |
| --- | --- | --- | --- |
| `apps/servant-leaders` | Servant Leaders UK (`servantleaders.uk`) | 3000 | 14 essays |
| `apps/riaz-virani` | Riaz Virani (business constancy) | 3002 | 14 essays |
| `apps/haven-carty` | Haven Carty (jobs at Cluster Technology) | 3001 | 5 job posts |

## Structure

```
apps/
  <site>/            Next.js app (own globals.css, fonts, content, public/)
    app/             Routes, layout and theme
    content/site.tsx All copy for the site
    content/posts/   Blog post bodies
packages/
  ui/                Shared template: @servantleaders/ui
    src/             Sections, navbar, blog components, SiteContent types
```

The template lives in `packages/ui` and is driven by a `SiteContent` object
passed from each app. Sites share components; they differ only in
`content/site.tsx`, `content/posts/*`, `app/globals.css`, and the fonts loaded in
`app/layout.tsx`.

The blog is dynamic: each app has an identical `app/blog/page.tsx` and
`app/blog/[slug]/page.tsx`, with `generateStaticParams` coming from the site's
`blog.posts` list.

## Getting started

```bash
pnpm install

pnpm dev:servant-leaders   # http://localhost:3000
pnpm dev:haven-carty       # http://localhost:3001
pnpm dev:riaz-virani       # http://localhost:3002
```

## Build and typecheck

```bash
pnpm build       # builds every app
pnpm typecheck   # typechecks every app
```

## Adding or editing content

- Site copy: edit `apps/<site>/content/site.tsx`.
- A post: add a body in `apps/<site>/content/posts/`, register it in that
  folder's `index`, then add the post metadata to `site.blog.posts`.
- A new site: copy an existing app, change its `package.json` name and dev port,
  then update `content/`, `globals.css` and the fonts in `app/layout.tsx`.
