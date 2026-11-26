---
title: "CraftingPartTracker"
description: "Tracks a crafting part inside a GenericAssemblyStation's trigger, with the colliders of it that are inside."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CraftingPartTracker

A **class** in `Root.Township`, `Alta.Crafting`.

Tracks a crafting part inside a `GenericAssemblyStation`'s trigger, with the colliders of it that are inside.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CraftingPartTracker("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> | Creates a `CraftingPartTracker` from `part`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"HashSet<Collider> Colliders { get; }"}</code> | The part's colliders currently inside the station's trigger. |
| <Link id="m-needtoremove" /><code>{"bool NeedToRemove { get; }"}</code> | True once the part is docked, crafted or being destroyed, so the station should stop tracking it. |
| <Link id="m-part" /><code><Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" Part { get; }"}</code> | The tracked crafting part. |

## Used in

Members of other types that take, return or hold a `CraftingPartTracker`:

[`GenericAssemblyStation.trackedParts`](/mod/game-api/types/alta-crafting/genericassemblystation#m-trackedparts).
