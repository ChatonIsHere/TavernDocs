---
title: "WoodcutTreeSaveData2"
description: "Old version 2 save data for a WoodcutTree, migrated to WoodcutTreeSaveData on load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeSaveData2

A **internal class** in `Root.Township`, `Alta.Woodcutting`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old version 2 save data for a `WoodcutTree`, migrated to `WoodcutTreeSaveData` on load.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeSaveData2()"}</code> | Creates a `WoodcutTreeSaveData2` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isgenerated" /><code>{"bool isGenerated"}</code> | Old generated flag. Dropped on migration. |
| <Link id="m-preset" /><code><Link to="/game-api/types/alta-crafting/presettree">{"PresetTree"}</Link>{" preset"}</code> | The tree's preset shape. |
| <Link id="m-species" /><code><Link to="/game-api/types/alta-crafting/treespecies">{"TreeSpecies"}</Link>{" species"}</code> | The tree's species. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to the current save data, keeping the preset and species. |
