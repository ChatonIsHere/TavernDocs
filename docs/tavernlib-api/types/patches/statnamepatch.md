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

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [StatNamePatch](/tavernlib-api/types/patches/statnamepatch)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatNamePatch()"}</code> | Created by TavernLib; mods don't make one. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-crippledamageprotectionhash" /><code>{"private const uint CrippleDamageProtectionHash"}</code> | Hash of the stat definition that gets renamed. |
| <Link id="m-done" /><code>{"private static bool done"}</code> | Set once the stat has been found, so the rename runs once. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-renamecrippledamageprotection" /><code>{"static void RenameCrippleDamageProtection()"}</code> | Sets that stat definition's private `statName` the first time it's found, if it's still `damageprotection`. |
