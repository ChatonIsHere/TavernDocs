---
title: Host your own mod source
description: Run your own mod index that the launcher and servers can install from.
---

# Host your own mod source

You don't have to publish on TavernMods. A mod source is just static JSON files on the web, so you can run your own, for a private group or for mods TavernMods doesn't take. Players add it in **Get Mods**, **Manage Sources**. Servers add it with `modmanager addrepo <url>`.

:::warning

Nobody checks mods on your source but you. Players see an "Unverified source" warning when they add it.

:::

The easiest way is to fork [TavernMods](https://github.com/ModdingTavern/TavernMods), empty its `manifests` folder, and use its tooling and checks as they are. The rest of this page is for building one your own way.

The full spec is [REPO_STRUCTURE.md](https://github.com/ModdingTavern/TavernMods/blob/main/docs/REPO_STRUCTURE.md) in TavernMods. The launcher (in Python) and TavernLib (in C#) both follow it exactly, so read it before building anything that installs mods.

## The address

A source is one base URL, the raw-content root a player pastes in, like:

```
https://raw.githubusercontent.com/<user>/<repo>/<branch>
```

## The files

| Path under the base | What it is |
| --- | --- |
| `repository.json` | The index. Required. The only file read while browsing. |
| `manifests/<author>/<repo>/<version>.json` | One [manifest](manifest-reference.md) per release. Never changes once published. |
| `manifests/<author>/<repo>/latest.json` | A copy of the highest version. |
| `manifests/<author>/<repo>/latest.<major>.json` | A copy of the highest version in that major. |

`<author>` and `<repo>` are the two halves of the mod's id.

## repository.json

```jsonc
{
  "index_version": 2,
  "mods": {
    "ExampleDev.ExampleMod": {           // id
      "1": {                             // major version, as a string; one entry per major
        "name": "Example Mod",
        "author": "ExampleDev",
        "description": "Does something useful.",
        "icons": [{ "size": 128, "url": "https://..." }],  // only when set
        "parity_required": true,
        "targets": ["client_windows", "server"],
        "scenes": ["normal", "quest"],   // only when set
        "changelog": "Fixed dye vats.",  // only when set
        "versions": ["1.0.0", "1.2.0"]   // every release in this major that isn't withdrawn
      }
    }
  },
  "replaced": {                          // optional
    "OldDev.ExampleMod": { "by": "ExampleDev.ExampleMod", "note": "Moved to ExampleDev." }
  },
  "incompatible": [                      // optional
    {
      "mods": { "ExampleDev.ExampleMod": {}, "SomeDev.DyeKit": { "below": "2.0.0" } },
      "note": "Both patch dye vats."
    }
  ],
  "withdrawn": {                         // optional
    "ExampleDev.ExampleMod": { "1.1.0": "Corrupts saves." }
  }
}
```

- Readers skip the whole file unless `index_version` is `2`.
- Every field but `versions` comes from the highest release in that major. `targets` is the sorted list of that release's artifact targets.
- The default install is the highest of `versions`. A major whose versions are all withdrawn has no entry.

`replaced`, `incompatible` and `withdrawn` work as they do on TavernMods. See [For index maintainers](maintainers.md).

## Testing it

1. Push the files.
2. In the launcher, **Get Mods**, **Manage Sources**, **+ Add source**, and paste the base URL.
3. Your mods show up in **Get Mods** with your source next to them.
