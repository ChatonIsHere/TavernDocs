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
| <Link id="m-ctor" /><code>{"SmelterSaveData()"}</code> | <span className="api-desc">Creates a `SmelterSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentitem" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" currentItem"}</code> | <span className="api-desc">The item being smelted.</span> |
| <Link id="m-currentmaterial" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" currentMaterial"}</code> | <span className="api-desc">The physical material of the item being smelted.</span> |
| <Link id="m-currentrecipe" /><code><Link to="/mod/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{" currentRecipe"}</code> | <span className="api-desc">The smelting recipe in progress.</span> |
| <Link id="m-issmelting" /><code>{"bool isSmelting"}</code> | <span className="api-desc">Whether the smelter was working when saved.</span> |
| <Link id="m-progress" /><code>{"float progress"}</code> | <span className="api-desc">Progress of the current smelt.</span> |
| <Link id="m-remainingfueltime" /><code>{"float remainingFuelTime"}</code> | <span className="api-desc">Fuel time left.</span> |
| <Link id="m-requiredfuel" /><code>{"float requiredFuel"}</code> | <span className="api-desc">Fuel needed for the current smelt.</span> |
| <Link id="m-totalfuel" /><code>{"float totalFuel"}</code> | <span className="api-desc">Fuel loaded.</span> |
