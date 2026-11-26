---
title: "WoodcutTreeSaveData"
description: "Current save data (version 3) for a WoodcutTree: which preset and species it uses."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeSaveData

A **internal class** in `Root.Township`, `Alta.Woodcutting`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Current save data (version 3) for a `WoodcutTree`: which preset and species it uses.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NewSaveData<WoodcutTree, WoodcutTreeSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`WoodcutTree`](/mod/game-api/types/alta-crafting/woodcuttree), [`WoodcutTreeSaveData`](/mod/game-api/types/alta-crafting/woodcuttreesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeSaveData()"}</code> | <span className="api-desc">Creates a `WoodcutTreeSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-preset" /><code><Link to="/mod/game-api/types/alta-crafting/presettree">{"PresetTree"}</Link>{" preset"}</code> | <span className="api-desc">The tree's preset shape.</span> |
| <Link id="m-species" /><code><Link to="/mod/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{" species"}</code> | <span className="api-desc">The tree's species.</span> |
