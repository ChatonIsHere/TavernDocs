---
title: "CookingPotSaveData"
description: "Save data for a CookingPot (version 1): its current cooking stage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingPotSaveData

A **internal class** in `Root.Township`, `Alta.Cooking`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `CookingPot` (version 1): its current cooking stage.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NewSaveData<CookingPot, CookingPotSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`CookingPot`](/game-api/types/alta-crafting/cookingpot), [`CookingPotSaveData`](/game-api/types/alta-crafting/cookingpotsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CookingPotSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentstage" /><code><Link to="/game-api/types/alta-crafting/cookingpot-cookingstage">{"CookingPot.CookingStage"}</Link>{" currentStage"}</code> | The pot's saved `CookingPot.CookingStage`. |
