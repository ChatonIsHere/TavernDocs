---
title: "IBlockGenericDecrafting"
description: "Implemented by components that can stop a generic crafting result from being decrafted, such as LiquidContainer (only when empty) and CraftingPart."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IBlockGenericDecrafting

An **interface** in `Root.Township`, `Alta.Crafting`.

Implemented by components that can stop a generic crafting result from being decrafted, such as `LiquidContainer` (only when empty) and `CraftingPart`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`CraftingPart`](/game-api/types/alta-crafting/craftingpart), [`PickupDock`](/game-api/types/alta-items/pickupdock), [`LiquidContainer`](/game-api/types/alta-stats-effects/liquidcontainer), [`Mould`](/game-api/types/global-m-o/mould)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-candecraft" /><code>{"bool CanDecraft { get; }"}</code> | False to block decrafting right now. |

## Used in

Members of other types that take, return or hold a `IBlockGenericDecrafting`:

[`GenericCraftingResult.blockDecraftingComponents`](/game-api/types/alta-crafting/genericcraftingresult#m-blockdecraftingcomponents).
