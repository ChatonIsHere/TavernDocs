<p align="center"><img src="assets/badge-256.png" width="128" alt=""></p>

# TavernDocs

Guides for playing, hosting and modding A Township Tale with The Modding Tavern. Built with [Docusaurus](https://docusaurus.io/).

## Layout

- `docs/play/`: getting the launcher, setting up the game and joining servers.
- `docs/host/`: running a server on Windows, Docker or Linux.
- `docs/mod/`: making mods and launcher addons, and publishing them on TavernMods.
- `docs/help/`: pages the other sections share.
- `src/pages/index.tsx`: the home page.
- `src/css/custom.css`: the Tavern theme, dark only.

Each section has its own sidebar in `sidebars.ts`. Screenshots sit in an `img/` folder next to the page that uses them.

## Running it locally

```bash
npm install
npm start          # preview at http://localhost:3000/
npm run build      # fails on broken links and images
```

## Deploying

`.github/workflows/deploy.yml` builds every push and pull request, and deploys `main` to GitHub Pages. Turn it on in the repository settings under **Pages**, with **Source** set to **GitHub Actions**.

Icon: <a href="https://www.flaticon.com/free-icons/scroll" title="scroll icons">Scroll icons created by Magnific - Flaticon</a>

## Security headers

`static/_headers` sets the site's security headers on Cloudflare. The Content Security Policy line in it is filled in at build time by `src/plugins/csp`: scripts may only come from this site, plus the inline scripts the build itself makes (allowed by hash), plus WebAssembly for the search. To load anything from another site (an image, a script, an embed), add that site to the matching rule in `src/plugins/csp/index.ts`, or the browser will block it.
