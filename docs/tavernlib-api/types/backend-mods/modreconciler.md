---
title: "ModReconciler"
description: "Brings Mods in line with a modlist before mods load on a headless server: installs or updates listed mods and their dependencies, and disables unlisted..."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModReconciler

A **static class** in `TavernLib`, `TavernLib.Backend.Mods`.

Brings `Mods` in line with a modlist before mods load on a headless server: installs or updates listed mods and their dependencies, and disables unlisted server mods (never deletes). Server.

- **Listed in** [TavernLib.Backend.Mods](/tavernlib-api/types/backend-mods)
- **Nested types** [`Pass`](/tavernlib-api/types/backend-mods/modreconciler-pass)
- **Documented in** [ModReconciler](/tavernlib-api/types/backend-mods/modreconciler), [Sources and reconcile](/tavernlib-api/mod-manager/sources-and-reconcile#modreconciler)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-maxseconds" /><code>{"private const int MaxSeconds"}</code> |
| <Link id="m-target" /><code>{"private const string Target"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reconcile" /><code>{"static void Reconcile(string gameDir, "}<Link to="/tavernlib-api/types/backend-server-configs/modslist">{"ModsList"}</Link>{" modsList, List<string> repos, string scene)"}</code> | Runs one pass for a scene against the given sources, with a 300 second budget. |
| <Link id="m-reconcilemodlist" /><code>{"static void ReconcileModList(string modsListPathArg)"}</code> | What `/modlist` runs. Reads the modlist and `mod_repos.json`, then reconciles. Never throws; a failure leaves `Mods` as it was. |
