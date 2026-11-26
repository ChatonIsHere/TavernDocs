---
title: "SmelterSaveData"
description: "Save data for a Smelter (version 1): fuel, progress and what it is smelting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmelterSaveData

A **internal class** in `Root.Township`, `Alta.Blacksmithing`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `Smelter` (version 1): fuel, progress and what it is smelting.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NewSaveData<Smelter, SmelterSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Smelter`](/mod/game-api/types/alta-crafting/smelter), [`SmelterSaveData`](/mod/game-api/types/alta-crafting/smeltersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SmelterSaveData()"}</code> | Creates a `SmelterSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentitem" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" currentItem"}</code> | The item being smelted. |
| <Link id="m-currentmaterial" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" currentMaterial"}</code> | The physical material of the item being smelted. |
| <Link id="m-currentrecipe" /><code><Link to="/mod/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{" currentRecipe"}</code> | The smelting recipe in progress. |
| <Link id="m-issmelting" /><code>{"bool isSmelting"}</code> | Whether the smelter was working when saved. |
| <Link id="m-progress" /><code>{"float progress"}</code> | Progress of the current smelt. |
| <Link id="m-remainingfueltime" /><code>{"float remainingFuelTime"}</code> | Fuel time left. |
| <Link id="m-requiredfuel" /><code>{"float requiredFuel"}</code> | Fuel needed for the current smelt. |
| <Link id="m-totalfuel" /><code>{"float totalFuel"}</code> | Fuel loaded. |
