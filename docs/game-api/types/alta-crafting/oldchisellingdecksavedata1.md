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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OldChisellingDeckSaveData1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentsize" /><code>{"int currentSize"}</code> | Saved block size. |
| <Link id="m-donepieces" /><code>{"int[] donePieces"}</code> | Indexes of finished pieces. |
| <Link id="m-pieces" /><code><Link to="/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{"[] pieces"}</code> | Saved piece states. |
| <Link id="m-spawned" /><code><Link to="/game-api/types/alta-crafting/chiseldefinition">{"ChiselDefinition"}</Link>{" spawned"}</code> | The chisel definition that was spawned. |
| <Link id="m-stage" /><code>{"int stage"}</code> | Saved chiselling stage. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Copies the fields into a current `ChisellingDeckSaveData`. |
