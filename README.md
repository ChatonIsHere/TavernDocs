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
npm start          # preview at http://localhost:3000/TavernDocs/
npm run build      # fails on broken links and images
```

## Deploying

`.github/workflows/deploy.yml` builds every push and pull request, and deploys `main` to GitHub Pages. Turn it on in the repository settings under **Pages**, with **Source** set to **GitHub Actions**.
