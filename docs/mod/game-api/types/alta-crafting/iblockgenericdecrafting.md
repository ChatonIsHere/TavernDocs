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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Derived types** [`CraftingPart`](/mod/game-api/types/alta-crafting/craftingpart), [`PickupDock`](/mod/game-api/types/alta-items/pickupdock), [`LiquidContainer`](/mod/game-api/types/alta-stats-effects/liquidcontainer), [`Mould`](/mod/game-api/types/global-m-o/mould)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-candecraft" /><code>{"bool CanDecraft { get; }"}</code> | <span className="api-desc">False to block decrafting right now.</span> |

## Used in

Members of other types that take, return or hold a `IBlockGenericDecrafting`:

<div className="api-used-in">

[`GenericCraftingResult.blockDecraftingComponents`](/mod/game-api/types/alta-crafting/genericcraftingresult#m-blockdecraftingcomponents).

</div>
