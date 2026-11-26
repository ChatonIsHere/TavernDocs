---
title: "GenericCraftingStation.PickupColliders"
description: "Tracks a pickup with a generic crafting component inside a GenericCraftingStation's trigger."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingStation.PickupColliders

A **private class** in `Root.Township`, `Alta.Crafting`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Tracks a pickup with a generic crafting component inside a `GenericCraftingStation`'s trigger.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`GenericCraftingStation`](/mod/game-api/types/alta-crafting/genericcraftingstation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupColliders("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingcomponent">{"GenericCraftingComponent"}</Link>{" component)"}</code> | Creates a `GenericCraftingStation.PickupColliders` from `component` and `pickup`. |
| <Link id="m-ctor-2" /><code>{"PickupColliders("}<Link to="/mod/game-api/types/alta-crafting/igenericcraftingcomponent">{"IGenericCraftingComponent"}</Link>{" component, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Creates a `GenericCraftingStation.PickupColliders` from `component` and `pickup`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"HashSet<Collider> Colliders"}</code> | The pickup's colliders currently inside the trigger. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-component" /><code><Link to="/mod/game-api/types/alta-crafting/igenericcraftingcomponent">{"IGenericCraftingComponent"}</Link>{" Component { get; }"}</code> | The pickup's generic crafting component. |
| <Link id="m-needstoremove" /><code>{"bool NeedsToRemove { get; }"}</code> | True once the pickup is docked or being destroyed. |
| <Link id="m-pickup" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The tracked pickup. |

## Used in

Members of other types that take, return or hold a `PickupColliders`:

[`GenericCraftingStation.trackedPickups`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-trackedpickups).
