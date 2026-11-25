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

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Documented in** [MelonModFolders](/tavernlib-api/types/backend-mods/melonmodfolders)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-excludednames" /><code>{"private static readonly string[] ExcludedNames"}</code> |
| <Link id="m-otherscannames" /><code>{"private static readonly string[] OtherScanNames"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-syncforboot" /><code>{"static void SyncForBoot(bool serverProcess)"}</code> | Runs `Sync` for the server or Windows client target. Logs an error if it fails. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addwithsubfolders" /><code>{"private static void AddWithSubfolders(string dir, List<string> into)"}</code> |  |
| <Link id="m-isexcluded" /><code>{"private static bool IsExcluded(string dir)"}</code> |  |
| <Link id="m-isunder" /><code>{"private static bool IsUnder(string path, string root)"}</code> |  |
| <Link id="m-normalize" /><code>{"private static string Normalize(string path)"}</code> |  |
| <Link id="m-sync" /><code>{"internal static void Sync(string gameDir, string target)"}</code> | Matches MelonLoader's folder list to the disk for one target. Logs a warning and loads no managed mod if the private field can't be reached. |

</details>
