---
title: "StatNamePatch"
description: "Prefixes StatManager.Awake to rename the stat definition with hash 44538 from damageprotection to crippledamageprotection, whose name clashes with another stat."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatNamePatch

A **class** in `TavernLib`, `TavernLib.Patches`.

Prefixes `StatManager.Awake` to rename the stat definition with hash 44538 from `damageprotection` to `crippledamageprotection`, whose name clashes with another stat. Runs once.

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [StatNamePatch](/mod/tavernlib-api/types/patches/statnamepatch)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatNamePatch()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-crippledamageprotectionhash" /><code>{"private const uint CrippleDamageProtectionHash"}</code> | <span className="api-desc">Hash of the stat definition that gets renamed.</span> |
| <Link id="m-done" /><code>{"private static bool done"}</code> | <span className="api-desc">Set once the stat has been found, so the rename runs once.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-renamecrippledamageprotection" /><code>{"static void RenameCrippleDamageProtection()"}</code> | <span className="api-desc">Sets that stat definition's private `statName` the first time it's found, if it's still `damageprotection`.</span> |
