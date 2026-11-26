---
title: "OldChisellingDeckSaveData1"
description: "Old save data for a ChisellingDeck (version 1); migrates to ChisellingDeckSaveData."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OldChisellingDeckSaveData1

A **class** in `Root.Township`, `Alta.Carpentry`.

Old save data for a `ChisellingDeck` (version 1); migrates to `ChisellingDeckSaveData`.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OldChisellingDeckSaveData1()"}</code> | <span className="api-desc">Creates an `OldChisellingDeckSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentsize" /><code>{"int currentSize"}</code> | <span className="api-desc">Saved block size.</span> |
| <Link id="m-donepieces" /><code>{"int[] donePieces"}</code> | <span className="api-desc">Indexes of finished pieces.</span> |
| <Link id="m-pieces" /><code><Link to="/mod/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{"[] pieces"}</code> | <span className="api-desc">Saved piece states.</span> |
| <Link id="m-spawned" /><code><Link to="/mod/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" spawned"}</code> | <span className="api-desc">The chisel definition that was spawned.</span> |
| <Link id="m-stage" /><code>{"int stage"}</code> | <span className="api-desc">Saved chiselling stage.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Copies the fields into a current `ChisellingDeckSaveData`.</span> |
