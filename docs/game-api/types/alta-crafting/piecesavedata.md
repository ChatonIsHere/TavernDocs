---
title: "PieceSaveData"
description: "Saved state of one carpentry timber piece: whether it has been hit, how far it is chiselled, and its direction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PieceSaveData

A **class** in `Root.Township`, `Alta.Carpentry`.

Saved state of one carpentry timber piece: whether it has been hit, how far it is chiselled, and its direction.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PieceSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currenthittingdirection" /><code>{"Vector3 currentHittingDirection"}</code> | The direction of the first hit. |
| <Link id="m-hasdirection" /><code>{"bool hasDirection"}</code> | Whether the piece has been hit yet. |
| <Link id="m-isdone" /><code>{"bool isDone"}</code> | Whether the piece has been fully chiselled off. |
| <Link id="m-pivotdirection" /><code>{"Vector3 pivotDirection"}</code> | Current direction the piece tilts away in. |
| <Link id="m-progress" /><code>{"float progress"}</code> | Chiselling progress from 0 to 1. |
| <Link id="m-subdata" /><code><Link to="/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{"[] subData"}</code> | Save data of child pieces. |

## Used in

Members of other types that take, return or hold a `PieceSaveData`:

[`ChisellingDeckSaveData.pieces`](/game-api/types/alta-crafting/chisellingdecksavedata#m-pieces), [`ChisellingDeckSaveData2.pieces`](/game-api/types/alta-crafting/chisellingdecksavedata2#m-pieces), [`OldChisellingDeckSaveData1.pieces`](/game-api/types/alta-crafting/oldchisellingdecksavedata1#m-pieces), [`TimberPiece.Load`](/game-api/types/alta-crafting/timberpiece#m-load), [`TimberPiece.Save`](/game-api/types/alta-crafting/timberpiece#m-save), [`TimberPieceBase.Load`](/game-api/types/alta-crafting/timberpiecebase#m-load), [`TimberPieceBase.Save`](/game-api/types/alta-crafting/timberpiecebase#m-save), [`TimberPieceGroup.Load`](/game-api/types/alta-crafting/timberpiecegroup#m-load), [`TimberPieceGroup.Save`](/game-api/types/alta-crafting/timberpiecegroup#m-save).
