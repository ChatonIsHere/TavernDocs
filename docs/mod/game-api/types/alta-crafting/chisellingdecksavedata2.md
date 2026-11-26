---
title: "ChisellingDeckSaveData2"
description: "Old save data for a ChisellingDeck (version 2); migrates to ChisellingDeckSaveData and drops hasFollowedrecipe."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChisellingDeckSaveData2

A **class** in `Root.Township`, `Alta.Carpentry`.

Old save data for a `ChisellingDeck` (version 2); migrates to `ChisellingDeckSaveData` and drops `hasFollowedrecipe`.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChisellingDeckSaveData2()"}</code> | Creates a `ChisellingDeckSaveData2` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentsize" /><code>{"int currentSize"}</code> | Saved block size. |
| <Link id="m-donepieces" /><code>{"int[] donePieces"}</code> | Indexes of finished pieces. |
| <Link id="m-hasfollowedrecipe" /><code>{"bool hasFollowedrecipe"}</code> | Whether the recipe was followed; lost on migration. |
| <Link id="m-pieces" /><code><Link to="/mod/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{"[] pieces"}</code> | Saved piece states. |
| <Link id="m-spawned" /><code><Link to="/mod/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" spawned"}</code> | The chisel definition that was spawned. |
| <Link id="m-stage" /><code>{"int stage"}</code> | Saved chiselling stage. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Copies the fields into a current `ChisellingDeckSaveData`. |
