---
title: "StewManagerSaveData"
description: "Save data for a StewManager (version 1): the stew's ingredients, garnishes and liquid base."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StewManagerSaveData

A **internal class** in `Root.Township`, `Alta.Cooking`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `StewManager` (version 1): the stew's ingredients, garnishes and liquid base.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NewSaveData<StewManager, StewManagerSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`StewManager`](/mod/game-api/types/alta-crafting/stewmanager), [`StewManagerSaveData`](/mod/game-api/types/alta-crafting/stewmanagersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StewManagerSaveData()"}</code> | Creates a `StewManagerSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-garnishes" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{"[] garnishes"}</code> | Items added as garnishes. |
| <Link id="m-ingredients" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{"[] ingredients"}</code> | Items added as ingredients. |
| <Link id="m-liquidbase" /><code><Link to="/mod/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" liquidBase"}</code> | The liquid the stew is made from. |
