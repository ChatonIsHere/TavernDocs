---
title: For index maintainers
description: Withdrawing versions, replacing mods, managing incompatibilities and the TavernMods tooling.
---

# For index maintainers

These are for TavernMods maintainers. Mod authors can ask for any of them by opening an issue on [TavernMods](https://github.com/ModdingTavern/TavernMods/issues). A pull request from a fork can't change these files.

## Incompatible mods

Authors declare incompatibilities in their manifests (see [Submitting a mod](submitting.md#incompatible-mods)). Merged pairs go into [`incompatibilities.json`](https://github.com/ModdingTavern/TavernMods/blob/main/incompatibilities.json). Maintainers can also add a pair themselves, for example when players report one, and fix or remove any entry. If the other mod fixes it, set its `below` when its owner asks.

## Withdrawing a version

A release that's harmful or badly broken can be withdrawn by adding it to [`withdrawn.json`](https://github.com/ModdingTavern/TavernMods/blob/main/withdrawn.json) with the reason players will see:

```json
{
  "ExampleDev.ExampleMod": { "1.1.0": "Corrupts saves. Update to 1.1.1." }
}
```

It leaves the listing and the `latest` pointers, so nothing installs it, but its manifest stays. Launchers mark an installed copy and offer the update, refuse joins to a server still running it, and headless servers move to the latest version on their next start. Withdrawing every version of a mod takes it out of the listing.

## Replacing a mod

To retire a mod in favour of another, add it to [`replacements.json`](https://github.com/ModdingTavern/TavernMods/blob/main/replacements.json) in the same pull request as the replacement's submission, or after it's published:

```json
{
  "OldDev.ExampleMod": {
    "by": "ExampleDev.ExampleMod",
    "note": "Moved to ExampleDev."
  }
}
```

The old mod's manifests stay, so servers still running it can be joined, but it leaves the listing and takes no new releases. Launchers offer players the switch. The checks fail if the old mod isn't published, or `by` isn't published or submitted, is the old id itself, is replaced too, or lacks a Windows or server build the old mod has.

## Tooling

[`tools/modindex.py`](https://github.com/ModdingTavern/TavernMods/blob/main/tools/modindex.py) needs only Python 3.8 or later.

| Command | Does | Runs in |
| --- | --- | --- |
| `fill-hashes [paths]` | Downloads every artifact and library and writes their `sha256`. | by hand |
| `validate [paths] [--vt-max-malicious N] [--require-vt] [--report FILE]` | The submission checks, and the repository lists (`replacements.json`, `incompatibilities.json`, `withdrawn.json`). Exits non-zero on failure. | `validate.yml`, on each pull request that adds a submission or changes a repository list |
| `build [--ingest] [--prune]` | Compiles `manifests/` and the repository lists into the pointers and `repository.json`. `--ingest` first moves submissions into `manifests/`, checking their hashes again, setting `package` and adding the incompatibilities they declare. `--prune` deletes the moved files. | `publish.yml`, on merge to `main` |
| `site [--template FILE] [--out DIR] [--owner NAME]` | Bakes the mod list into the built page (`web/dist/index.html` by default) and writes `site/index.html`, the owner's mods first. | `pages.yml`, after each build |

`paths` defaults to `submissions/`.

The VirusTotal limit is the `VT_MAX_MALICIOUS` repository variable (default 0).

## The site

The mod list, the server modlist page and the manifest builder are a React app in `web/` (Vite, shadcn components, the Tavern theme from `web/registry.json`). It needs Node:

```sh
cd web
npm ci
npm run build      # the three pages, plus the theme registry, into web/dist/
cd ..
python tools/modindex.py site
cp -r web/dist/assets web/dist/builder.html web/dist/modlist.html web/dist/r site/
```

`npm run dev` serves it with an empty mod list. `pages.yml` does the above and deploys `site/`. The site is one page: the mod list at the root, the server modlist page at `#modlist` and the builder at `#builder`. `builder.html` and `modlist.html` redirect there for old links.

The theme is published at `r/tavern-theme.json`:

```sh
npx shadcn add https://moddingtavern.github.io/TavernMods/r/tavern-theme.json
```
