---
title: Submitting a mod
description: Publish your mod on TavernMods so players and servers can install it from the launcher.
---

# Submitting a mod

[TavernMods](https://github.com/ModdingTavern/TavernMods) is The Modding Tavern's mod index. It's the default source in every launcher and server, so a mod listed there can be installed from **Get Mods**, matched when players join a server, and named in a server's modlist.

Every submission is checked, scanned with VirusTotal and reviewed by a maintainer before it goes live.

## Submitting

1. **Publish each build as a release asset** on your mod's GitHub repo, at a tag: one `.dll`, or a `.zip` when it has several DLLs or asset bundles. One file can serve several targets (`client_windows`, `server`, `client_android`). Link to it as `https://github.com/<owner>/<repo>/releases/download/<tag>/<file>`, and never replace the file afterwards. [Building on GitHub](../game-mods/building-on-github.md) can do this for you.
2. **Write the manifest.** The easiest way is the [manifest builder](https://moddingtavern.github.io/TavernMods/#builder), which checks it as you type. Paste your release link at the top and it fills in the id, version, build links and hashes. Or copy [`submissions/TEMPLATE.json`](https://github.com/ModdingTavern/TavernMods/blob/main/submissions/TEMPLATE.json) and fill it in by hand, following the [Manifest reference](manifest-reference.md): one `artifacts` entry per build, and leave out `package`.
3. **Fill in each build's and library's `sha256`** from the exact file you uploaded. The builder's **Hash a file** button does it, or `python tools/modindex.py fill-hashes submissions/<owner>.<repo>/<version>.json` downloads every file and writes them in.
4. **Open a pull request** that adds only `submissions/<owner>.<repo>/<version>.json`. Only maintainers can add files directly, so fork TavernMods first. The builder's **Add to your fork** button then opens the file in your fork, ready to commit to a new branch and propose as a pull request. The checks post their result as a comment and run again on every push.
5. **A maintainer reviews and merges**, and the index rebuilds itself.

A few fields worth thinking about:

- `parity_required`: keep `true` if players need your mod, at the server's exact version, to join a server running it, or if you're unsure.
- `scenes`: only set it if your mod breaks in some scene.
- `changelog`: optional. A few lines on what changed, which the launcher shows when it offers the update.

The template:

```json
{
  "manifest_version": 2,
  "id": "YourGitHubUser.YourRepo",
  "name": "Your Mod Name",
  "version": "1.0.0",
  "author": "Your Name",
  "description": "One short line describing what the mod does.",
  "parity_required": true,
  "dependencies": {},
  "artifacts": [
    {
      "targets": ["client_windows", "server"],
      "download_url": "https://github.com/YourGitHubUser/YourRepo/releases/download/v1.0.0/YourMod.dll",
      "sha256": "run: python tools/modindex.py fill-hashes",
      "library_dependencies": []
    }
  ]
}
```

## Updating

Publish a new release with a higher version, then submit it the same way at `submissions/<owner>.<repo>/<new version>.json`. In the builder, paste the new release's link at the top: it starts from your published manifest and swaps in the new version, links and hashes.

A published version never changes. To fix a build, bump the version.

## Checks

On top of the rules in the [Manifest reference](manifest-reference.md), a submission fails if:

- it comes from a fork and does anything other than add one file, or that file isn't at `submissions/<id>/<version>.json` for its own id and version;
- it comes from a fork and whoever opened it isn't the mod's owner, the publisher of one of its releases, a public member of the owning organisation or a contributor to its repo. A maintainer can still merge it after checking the owner agrees;
- its version is already published, or is lower than the highest published version in its major. A fix to an older major is fine, but a new major can't start below the newest version;
- its id, or a dependency's id, has been replaced, or its id differs only in case from a published or replaced one;
- its `id`, or a dependency's id, isn't a valid GitHub `owner.repo`, or it depends on itself;
- it has a field that isn't in the [Manifest reference](manifest-reference.md#fields), at any level (usually a typo);
- `incompatible_with` names a mod that isn't in TavernMods, has been replaced, is the mod itself or is one of its dependencies, or an entry has no `note`;
- a dependency is only met by withdrawn versions;
- an artifact's `download_url` isn't a tagged release asset of the id's own repo, as in step 1 (libraries may live on any `https://` host);
- a `sha256` isn't lowercase or doesn't match the downloaded file, or an artifact is neither a DLL nor a zip;
- a target or scene name is unknown, or `scenes` lists all three;
- a dependency in TavernMods shares no target with your mod, judged on the version an install would pick. Partial overlap, or a dependency from another source, gets a note instead;
- one library `filename` has two `sha256`s across your artifacts. The same filename at another `sha256` in another listed mod gets a note: the two can't be installed together;
- a zip isn't valid or can't be read back (encrypted, or an unusual compression), has no `.dll` at its root, has an unsafe member (absolute path, colon, escaping `..`, symlink, a name ending in a dot or space), or exceeds 2000 entries, 500 MB extracted, or a 200:1 compression ratio on any entry over 1 MB. An archive inside the zip gets a note: it isn't unpacked or scanned;
- VirusTotal can't scan a file, or counts it malicious more times than allowed (by default, not at all). Every `dll` artifact and library and each code-bearing zip member is scanned.

The hashes are checked again when the submission is published, so a file changed after review stops the publish.

The checks comment lists anything a reviewer should look at under **For the reviewer**: the notes above, and the incompatibilities a submission adds or changes.

### Icons

Optional. List up to three square PNGs, one per size (128, 256 and 512 px), each at most 1 MB and hosted like screenshots below. The launcher and the mod page each pick the size they need, so give all three if you can. The checks fail if an icon breaks these rules or isn't the size it says.

### Screenshots

The page shows the first four `screenshots` that are `https://` on `github.com` or `raw.githubusercontent.com` under your own `owner/repo`, immutable (a tagged release asset, or a raw URL pinned to a 40-character commit sha), and `.png`, `.jpg`, `.jpeg`, `.webp` or `.gif`. Others are skipped.

## Incompatible mods

If your mod doesn't work with another mod in TavernMods, say so in your manifest, and the launcher warns anyone about to run the two together:

```json
"incompatible_with": {
  "SomeDev.DyeKit": { "note": "Both patch dye vats.", "below": "2.0.0" }
}
```

`note` says why, in a sentence players will read. `below` is optional: the first version of the other mod that works with yours, if there is one. When the pull request passes its checks, the other mod's owner is mentioned on it, so they can object or say a version of theirs already works.

Once merged, the pair goes into the index's list of incompatible mods. To say you've fixed it, leave the entry out of your next release: the pair then only applies to your earlier versions. If the other mod fixes it, its owner can ask a maintainer to set its `below`.

## Something went wrong?

The checks comment on your pull request says what failed. If it's not clear, ask in the pull request or on Discord. See also [Modding troubleshooting](../troubleshooting.md#publishing).
