---
title: "MelonModFolders"
description: "Internal: edits MelonLoader's private list of mod folders at start to match the disk: disabled mods are dropped, and each enabled mod of ours gets this..."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MelonModFolders

A **internal static class** in `TavernLib`, `TavernLib.Backend.Mods`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal: edits MelonLoader's private list of mod folders at start to match the disk: disabled mods are dropped, and each enabled mod of ours gets this side's build folder (`.server` or `.client_windows`).

- **Listed in** [TavernLib.Backend.Mods](/mod/tavernlib-api/types/backend-mods)
- **Documented in** [MelonModFolders](/mod/tavernlib-api/types/backend-mods/melonmodfolders)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-excludednames" /><code>{"private static readonly string[] ExcludedNames"}</code> | <span className="api-desc">Folder names MelonLoader skips by default: `Broken`, `Retired`, `Disabled`.</span> |
| <Link id="m-otherscannames" /><code>{"private static readonly string[] OtherScanNames"}</code> | <span className="api-desc">Folder names under `Mods/` that MelonLoader treats as user libs or plugins, not mod folders.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-syncforboot" /><code>{"static void SyncForBoot(bool serverProcess)"}</code> | <span className="api-desc">Runs `Sync` for the server or Windows client target. Logs an error if it fails.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addwithsubfolders" /><code>{"private static void AddWithSubfolders(string dir, List<string> into)"}</code> | <span className="api-desc">Adds a folder and its non-excluded subfolders to a list.</span> |
| <Link id="m-isexcluded" /><code>{"private static bool IsExcluded(string dir)"}</code> | <span className="api-desc">Returns whether MelonLoader skips the folder, by a `~` or `.` prefix or an excluded name.</span> |
| <Link id="m-isunder" /><code>{"private static bool IsUnder(string path, string root)"}</code> | <span className="api-desc">Returns whether a path lies inside a root folder.</span> |
| <Link id="m-normalize" /><code>{"private static string Normalize(string path)"}</code> | <span className="api-desc">Returns the full path without a trailing separator.</span> |
| <Link id="m-sync" /><code>{"internal static void Sync(string gameDir, string target)"}</code> | <span className="api-desc">Matches MelonLoader's folder list to the disk for one target. Logs a warning and loads no managed mod if the private field can't be reached.</span> |

</details>
