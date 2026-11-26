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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PieceSaveData()"}</code> | <span className="api-desc">Creates a `PieceSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currenthittingdirection" /><code>{"Vector3 currentHittingDirection"}</code> | <span className="api-desc">The direction of the first hit.</span> |
| <Link id="m-hasdirection" /><code>{"bool hasDirection"}</code> | <span className="api-desc">Whether the piece has been hit yet.</span> |
| <Link id="m-isdone" /><code>{"bool isDone"}</code> | <span className="api-desc">Whether the piece has been fully chiselled off.</span> |
| <Link id="m-pivotdirection" /><code>{"Vector3 pivotDirection"}</code> | <span className="api-desc">Current direction the piece tilts away in.</span> |
| <Link id="m-progress" /><code>{"float progress"}</code> | <span className="api-desc">Chiselling progress from 0 to 1.</span> |
| <Link id="m-subdata" /><code><Link to="/mod/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{"[] subData"}</code> | <span className="api-desc">Save data of child pieces.</span> |

## Used in

Members of other types that take, return or hold a `PieceSaveData`:

<div className="api-used-in">

[`ChisellingDeckSaveData.pieces`](/mod/game-api/types/alta-crafting/chisellingdecksavedata#m-pieces), [`ChisellingDeckSaveData2.pieces`](/mod/game-api/types/alta-crafting/chisellingdecksavedata2#m-pieces), [`OldChisellingDeckSaveData1.pieces`](/mod/game-api/types/alta-crafting/oldchisellingdecksavedata1#m-pieces), [`TimberPiece.Load`](/mod/game-api/types/alta-crafting/timberpiece#m-load), [`TimberPiece.Save`](/mod/game-api/types/alta-crafting/timberpiece#m-save), [`TimberPieceBase.Load`](/mod/game-api/types/alta-crafting/timberpiecebase#m-load), [`TimberPieceBase.Save`](/mod/game-api/types/alta-crafting/timberpiecebase#m-save), [`TimberPieceGroup.Load`](/mod/game-api/types/alta-crafting/timberpiecegroup#m-load), [`TimberPieceGroup.Save`](/mod/game-api/types/alta-crafting/timberpiecegroup#m-save).

</div>
