---
title: "IAffectCrafting"
description: "Something that must be finished before its GenericCraftingComponent can be added to a crafting station, such as a forged model that must be fully forged."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAffectCrafting

An **interface** in `Root.Township`, `Alta.Crafting`.

Something that must be finished before its `GenericCraftingComponent` can be added to a crafting station, such as a forged model that must be fully forged.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Derived types** [`ForgedModel<TB, TA>`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forceactive" /><code>{"void ForceActive()"}</code> | <span className="api-desc">Forces it into the finished state. Used when the item is set up as refuse.</span> |
| <Link id="m-isactive" /><code>{"bool IsActive()"}</code> | <span className="api-desc">Whether it is finished, so the item can be used in a crafting project.</span> |

## Used in

Members of other types that take, return or hold a `IAffectCrafting`:

<div className="api-used-in">

[`GenericCraftingComponent.affectedBy`](/mod/game-api/types/alta-crafting/genericcraftingcomponent#m-affectedby).

</div>
