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
| <Link id="m-ctor" /><code>{"StatNamePatch()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-crippledamageprotectionhash" /><code>{"private const uint CrippleDamageProtectionHash"}</code> |  |
| <Link id="m-done" /><code>{"private static bool done"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-renamecrippledamageprotection" /><code>{"static void RenameCrippleDamageProtection()"}</code> | Sets that stat definition's private `statName` the first time it's found, if it's still `damageprotection`. |
