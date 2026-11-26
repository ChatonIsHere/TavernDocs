---
title: "IGenericCraftingComponent"
description: "Something a generic crafting station accepts when a player drops it in: a recipe result that starts a project, or a component added to one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IGenericCraftingComponent

An **interface** in `Root.Township`, `Alta.Crafting`.

Something a generic crafting station accepts when a player drops it in: a recipe result that starts a project, or a component added to one. Implemented by `GenericCraftingResult` and `GenericCraftingComponent`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`GenericCraftingComponent`](/game-api/types/alta-crafting/genericcraftingcomponent), [`GenericCraftingResult`](/game-api/types/alta-crafting/genericcraftingresult)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isaddingproject" /><code>{"bool IsAddingProject { get; }"}</code> | True if this starts a project. The station only takes it when this matches whether the station is empty. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-released" /><code>{"void Released("}<Link to="/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station)"}</code> | Called by the station when the player lets go of the item over it and it's valid to add. |
| <Link id="m-track" /><code>{"void Track("}<Link to="/game-api/types/alta-crafting/genericcraftingstation">{"GenericCraftingStation"}</Link>{" station)"}</code> | Called by the station each update while the item is held inside its trigger. |

## Used in

Members of other types that take, return or hold a `IGenericCraftingComponent`:

[`GenericCraftingStation.PickupColliders.Component`](/game-api/types/alta-crafting/genericcraftingstation-pickupcolliders#m-component), [`GenericCraftingStation.PickupColliders.PickupColliders`](/game-api/types/alta-crafting/genericcraftingstation-pickupcolliders#m-ctor-2).
