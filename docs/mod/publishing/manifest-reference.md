---
title: Manifest reference
description: Every field in a TavernMods manifest, and how builds are packaged.
---

# Manifest reference

A manifest describes one release of your mod. It's what you [submit](submitting.md) to TavernMods. The [manifest builder](https://moddingtavern.github.io/TavernMods/#builder) writes one for you and checks it as you type, so you'll rarely need this page. It's here for when you want to know exactly what a field does.

The full spec, including what installers write to disk, is [REPO_STRUCTURE.md](https://github.com/ModdingTavern/TavernMods/blob/main/docs/REPO_STRUCTURE.md) in TavernMods.

## Targets

A target is the build a process runs, not a game scene.

| Target | Runs on |
| --- | --- |
| `client_windows` | The game on Windows as a player: SteamVR, a Quest over Link, or flycam. |
| `server` | A game server, launcher-run or headless. |
| `client_android` | The standalone Quest headset. Checked, but nothing installs it yet. |

## An example

```jsonc
{
  "manifest_version": 2,
  "id": "ExampleDev.ExampleMod",
  "name": "Example Mod",
  "version": "1.2.0",
  "author": "ExampleDev",
  "description": "Does something useful.",
  "changelog": "Fixed dye vats.",
  "icons": [
    { "size": 128, "url": "https://raw.githubusercontent.com/ExampleDev/ExampleMod/<commit sha>/icon-128.png" },
    { "size": 256, "url": "https://raw.githubusercontent.com/ExampleDev/ExampleMod/<commit sha>/icon-256.png" }
  ],
  "parity_required": true,
  "scenes": ["normal", "quest"],
  "dependencies": { "SomeDev.UtilKit": "1.2.0" },
  "incompatible_with": {
    "SomeDev.DyeKit": { "note": "Both patch dye vats.", "below": "2.0.0" }
  },
  "artifacts": [
    {
      "targets": ["client_windows", "server"],
      "download_url": "https://github.com/ExampleDev/ExampleMod/releases/download/v1.2.0/ExampleMod.dll",
      "sha256": "<64 lowercase hex>",
      "library_dependencies": [
        {
          "name": "ExampleLib",
          "download_url": "https://github.com/SomeVendor/ExampleLib/releases/download/v2.0.0/ExampleLib.dll",
          "sha256": "<64 lowercase hex>",
          "filename": "ExampleLib.dll"
        }
      ]
    },
    {
      "targets": ["client_android"],
      "download_url": "https://github.com/ExampleDev/ExampleMod/releases/download/v1.2.0/ExampleMod-android.zip",
      "sha256": "<64 lowercase hex>",
      "library_dependencies": []
    }
  ]
}
```

## Fields

| Field | Rule |
| --- | --- |
| `manifest_version` | Integer `2`. |
| `id` | `<github-user>.<github-repo>`. The text before the first dot is the author. No path separators, no `.` or `..` segment, and no trailing dot or space. |
| `name` | Defaults to `id`. |
| `version` | `MAJOR.MINOR.PATCH`: three numbers, digits only. No suffix like `-beta`. |
| `author` | Defaults to the text before the first dot in `id`. |
| `description` | Free text. |
| `changelog` | Optional text, at most 2000 characters: what changed in this version. Launchers show it when offering the update. |
| `icons` | Optional list of `{"size", "url"}`, one per size, sizes out of `128`, `256` and `512`. Each `url` is a square PNG of that size, at most 1 MB, under the same rules as `screenshots`. |
| `screenshots` | Optional list of image URLs for your mod's page. Installers ignore it. |
| `parity_required` | **Required** `true` or `false`: whether a player needs this mod, at the server's exact version, to join a server running it. It compares versions, not files, so separate client and server builds don't affect it. |
| `scenes` | Optional list of the scenes the mod works in, out of `normal`, `quest`, `tutorial`. Leave it out to mean all. |
| `dependencies` | Always present. `{}` or `{"<mod id>": "<minimum version>"}`, versions as strings. |
| `incompatible_with` | Optional. `{"<mod id>": {"note": "<why, at most 300 characters>", "below": "<first version of that mod that works>"}}`, `below` optional. Each id must be in TavernMods and not one the mod depends on. See [Incompatible mods](submitting.md#incompatible-mods). |
| `artifacts` | Required, at least one. One entry per build. |
| `artifacts[].targets` | At least one target. A target may appear in only one artifact. A target no artifact lists isn't supported. |
| `artifacts[].download_url` | `https://` link to one `.dll` or one `.zip`. On TavernMods, a tagged release asset of the mod's own repo. |
| `artifacts[].sha256` | The file's SHA-256, 64 lowercase hex characters. Installers hash the download and refuse a mismatch. |
| `artifacts[].package` | `"dll"` or `"zip"`. Set by TavernMods from the file itself. Leave it out. |
| `artifacts[].library_dependencies` | Always present. `[]` or a list of libraries: `{name, download_url, sha256, filename}`. |

Every field is checked. A field that isn't in this table, at any level, fails the submission, so a misspelt optional field isn't silently dropped.

## Dependencies

Dependencies are other mods, each installed in its own folder. The minimum version you give picks the major: installers take the highest version in that major at or above it. A dependency with no build for the target being installed is left out.

## Libraries

Libraries are DLLs that aren't mods, like a third-party package. They're installed flat into the game's `UserLibs` folder by `filename`, and pinned by `sha256`. They can come from any `https://` host.

The same `filename` with the same `sha256` installs once, however many mods ask for it. The same `filename` with a **different** `sha256` is a conflict, and the install is refused. So if you share a library with another mod, use the exact same file.

## Packaging

- One `.dll` is simplest.
- Use a `.zip` when your build is several DLLs or has asset bundles. It needs at least one `.dll` at its root.
- Third-party or shared files go in `library_dependencies`, not in your zip.
- A native (non-.NET) DLL must be a library. MelonLoader only finds native DLLs in `UserLibs`.
