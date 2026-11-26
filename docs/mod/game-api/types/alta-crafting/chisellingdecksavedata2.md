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
| <Link id="m-ctor" /><code>{"ChisellingDeckSaveData2()"}</code> | <span className="api-desc">Creates a `ChisellingDeckSaveData2` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentsize" /><code>{"int currentSize"}</code> | <span className="api-desc">Saved block size.</span> |
| <Link id="m-donepieces" /><code>{"int[] donePieces"}</code> | <span className="api-desc">Indexes of finished pieces.</span> |
| <Link id="m-hasfollowedrecipe" /><code>{"bool hasFollowedrecipe"}</code> | <span className="api-desc">Whether the recipe was followed; lost on migration.</span> |
| <Link id="m-pieces" /><code><Link to="/mod/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{"[] pieces"}</code> | <span className="api-desc">Saved piece states.</span> |
| <Link id="m-spawned" /><code><Link to="/mod/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" spawned"}</code> | <span className="api-desc">The chisel definition that was spawned.</span> |
| <Link id="m-stage" /><code>{"int stage"}</code> | <span className="api-desc">Saved chiselling stage.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Copies the fields into a current `ChisellingDeckSaveData`.</span> |
