---
title: "TimberBlock.Stage"
description: "One carving stage of a TimberBlock with its own pieces."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberBlock.Stage

An **abstract class** in `Root.Township`, `Alta.Carpentry`.

One carving stage of a `TimberBlock` with its own pieces. Subclassed as `OuterStage`, `InnerStage` and `CoreStage`, each moving the block on when all its pieces are done.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`TimberBlock`](/mod/game-api/types/alta-crafting/timberblock)
- **Derived types** [`TimberBlock.CoreStage`](/mod/game-api/types/alta-crafting/timberblock-corestage), [`TimberBlock.InnerStage`](/mod/game-api/types/alta-crafting/timberblock-innerstage), [`TimberBlock.OuterStage`](/mod/game-api/types/alta-crafting/timberblock-outerstage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Stage()"}</code> | <span className="api-desc">Creates a `TimberBlock.Stage` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-block" /><code>{"protected "}<Link to="/mod/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block"}</code> | <span className="api-desc">The block this stage belongs to.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-concludedeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" concludedEffect"}</code> | <span className="api-desc">Client: effect played at the craft position when the stage is finished.</span> |
| <Link id="m-destroyingeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" destroyingEffect"}</code> | <span className="api-desc">Backing field for `DestroyingEffect`, played where a piece is carved away.</span> |
| <Link id="m-maximumreturnpercentage" /><code>{"private float maximumReturnPercentage"}</code> | <span className="api-desc">Refuse share returned when no pieces are done. Zero means the stage returns no refuse.</span> |
| <Link id="m-minimumreturnpercentage" /><code>{"private float minimumReturnPercentage"}</code> | <span className="api-desc">Refuse share returned when every piece is done. `RefusePercentage` steps down evenly between the two.</span> |
| <Link id="m-pieces" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{"[] pieces"}</code> | <span className="api-desc">Backing field for `Pieces`, the timber pieces to carve in this stage.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-destroyingeffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DestroyingEffect { get; }"}</code> | <span className="api-desc">Effect played when a piece in this stage is chiselled away.</span> |
| <Link id="m-ismodified" /><code>{"bool IsModified { get; private set; }"}</code> | <span className="api-desc">Whether any piece in this stage has changed.</span> |
| <Link id="m-meshfilters" /><code>{"List<MeshFilter> MeshFilters { get; }"}</code> | <span className="api-desc">Mesh filters of enabled pieces that aren't done.</span> |
| <Link id="m-stagelevel" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-crafting/timberblock-stagelevel">{"TimberBlock.StageLevel"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/timberblock-stagelevel">{"StageLevel"}</Link>{" { get; }"}</code> | <span className="api-desc">Which stage this is.</span> |
| <Link id="m-pieces-2" /><code>{"protected "}<Link to="/mod/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{"[] Pieces { get; }"}</code> | <span className="api-desc">The stage's pieces.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcefinalize" /><code>{"void ForceFinalize()"}</code> | <span className="api-desc">Marks every piece done and finalizes without choosing a result. Used when loading a later stage.</span> |
| <Link id="m-getpiece" /><code><Link to="/mod/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" GetPiece(int index)"}</code> | <span className="api-desc">A piece by index.</span> |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> | <span className="api-desc">Links pieces to the block (server hooks change and done events), resets progress and registers the stage.</span> |
| <Link id="m-loadfrom" /><code>{"void LoadFrom("}<Link to="/mod/game-api/types/alta-crafting/chisellingdecksavedata">{"ChisellingDeckSaveData"}</Link>{" data)"}</code> | <span className="api-desc">Loads each piece from deck save data.</span> |
| <Link id="m-refusepercentage" /><code>{"float RefusePercentage()"}</code> | <span className="api-desc">Starts at the max return share and drops a step per finished piece toward the min. Zero if the max is 0.</span> |
| <Link id="m-rotateto" /><code>{"virtual void RotateTo(bool isInversedUp)"}</code> | <span className="api-desc">Rotates every piece to the block's up direction. The core stage ignores this.</span> |
| <Link id="m-saveinto" /><code>{"void SaveInto("}<Link to="/mod/game-api/types/alta-crafting/chisellingdecksavedata">{"ChisellingDeckSaveData"}</Link>{" data)"}</code> | <span className="api-desc">Saves each piece into deck save data.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> | <span className="api-desc">Writes or reads each piece's done flag and, if not done, its state.</span> |
| <Link id="m-setcurrent" /><code>{"void SetCurrent()"}</code> | <span className="api-desc">Makes this the block's current stage, enables its pieces and syncs.</span> |
| <Link id="m-checkdone" /><code>{"protected virtual void CheckDone("}<Link to="/mod/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece)"}</code> | <span className="api-desc">Called when a piece finishes; finalizes the stage once every piece is done.</span> |
| <Link id="m-finalizestage" /><code>{"protected virtual void FinalizeStage(bool isForced)"}</code> | <span className="api-desc">Plays the concluded effect. Subclasses move to the next stage or release the result.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-runoperationonpieces" /><code>{"private void RunOperationOnPieces(Action<"}<Link to="/mod/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{", int> operation)"}</code> | <span className="api-desc">Runs an action on every piece of the stage, with or without its index.</span> |
| <Link id="m-runoperationonpieces-2" /><code>{"private void RunOperationOnPieces(Action<"}<Link to="/mod/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{"> operation)"}</code> | <span className="api-desc">Runs an action on every piece of the stage, with or without its index.</span> |
| <Link id="m-setenabled" /><code>{"private void SetEnabled(bool isEnabled)"}</code> | <span className="api-desc">Turns chiselling on or off for every piece in the stage.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Stage`:

<div className="api-used-in">

[`TimberBlock.currentStage`](/mod/game-api/types/alta-crafting/timberblock#m-currentstage), [`TimberBlock.stageMap`](/mod/game-api/types/alta-crafting/timberblock#m-stagemap).

</div>
