---
title: "GenericCraftingStationData"
description: "Save data for a GenericCraftingStation (version 1): the chosen recipe and the state of its pieces."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericCraftingStationData

A **class** in `Root.Township`, `Alta.Crafting`.

Save data for a `GenericCraftingStation` (version 1): the chosen recipe and the state of its pieces.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NewSaveData<GenericCraftingStation, GenericCraftingStationData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`GenericCraftingStation`](/mod/game-api/types/alta-crafting/genericcraftingstation), [`GenericCraftingStationData`](/mod/game-api/types/alta-crafting/genericcraftingstationdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericCraftingStationData()"}</code> | <span className="api-desc">Creates a `GenericCraftingStationData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pieces" /><code><Link to="/mod/game-api/types/alta-crafting/piecesavedata-alta-crafting">{"PieceSaveData"}</Link>{"[] pieces"}</code> | <span className="api-desc">Saved state of each piece of the recipe.</span> |
| <Link id="m-recipe" /><code><Link to="/mod/game-api/types/alta-crafting/genericcraftingrecipe">{"GenericCraftingRecipe"}</Link>{" recipe"}</code> | <span className="api-desc">The recipe the station is building.</span> |
