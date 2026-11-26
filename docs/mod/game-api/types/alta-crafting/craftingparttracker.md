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
| <Link id="m-ctor" /><code>{"CraftingPartTracker("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" part)"}</code> | <span className="api-desc">Creates a `CraftingPartTracker` from `part`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"HashSet<Collider> Colliders { get; }"}</code> | <span className="api-desc">The part's colliders currently inside the station's trigger.</span> |
| <Link id="m-needtoremove" /><code>{"bool NeedToRemove { get; }"}</code> | <span className="api-desc">True once the part is docked, crafted or being destroyed, so the station should stop tracking it.</span> |
| <Link id="m-part" /><code><Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" Part { get; }"}</code> | <span className="api-desc">The tracked crafting part.</span> |

## Used in

Members of other types that take, return or hold a `CraftingPartTracker`:

<div className="api-used-in">

[`GenericAssemblyStation.trackedParts`](/mod/game-api/types/alta-crafting/genericassemblystation#m-trackedparts).

</div>
