---
title: "WoodcutTreeSaveData1"
description: "Old version 1 save data for a WoodcutTree, migrated to WoodcutTreeSaveData on load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeSaveData1

A **internal class** in `Root.Township`, `Alta.Woodcutting`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Old version 1 save data for a `WoodcutTree`, migrated to `WoodcutTreeSaveData` on load.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeSaveData1()"}</code> | Creates a `WoodcutTreeSaveData1` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isgenerated" /><code>{"bool isGenerated"}</code> | Old generated flag. Dropped on migration. |
| <Link id="m-preset" /><code><Link to="/mod/game-api/types/alta-crafting/presettree">{"PresetTree"}</Link>{" preset"}</code> | The tree's preset shape. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to the current save data, keeping only the preset. |
