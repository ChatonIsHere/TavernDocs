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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`TimberBlock`](/game-api/types/alta-crafting/timberblock)
- **Derived types** [`TimberBlock.CoreStage`](/game-api/types/alta-crafting/timberblock-corestage), [`TimberBlock.InnerStage`](/game-api/types/alta-crafting/timberblock-innerstage), [`TimberBlock.OuterStage`](/game-api/types/alta-crafting/timberblock-outerstage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Stage()"}</code> | Creates a `TimberBlock.Stage` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-block" /><code>{"protected "}<Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block"}</code> | The block this stage belongs to. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-concludedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" concludedEffect"}</code> | Client: effect played at the craft position when the stage is finished. |
| <Link id="m-destroyingeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" destroyingEffect"}</code> | Backing field for `DestroyingEffect`, played where a piece is carved away. |
| <Link id="m-maximumreturnpercentage" /><code>{"private float maximumReturnPercentage"}</code> | Refuse share returned when no pieces are done. Zero means the stage returns no refuse. |
| <Link id="m-minimumreturnpercentage" /><code>{"private float minimumReturnPercentage"}</code> | Refuse share returned when every piece is done. `RefusePercentage` steps down evenly between the two. |
| <Link id="m-pieces" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{"[] pieces"}</code> | Backing field for `Pieces`, the timber pieces to carve in this stage. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-destroyingeffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DestroyingEffect { get; }"}</code> | Effect played when a piece in this stage is chiselled away. |
| <Link id="m-ismodified" /><code>{"bool IsModified { get; private set; }"}</code> | Whether any piece in this stage has changed. |
| <Link id="m-meshfilters" /><code>{"List<MeshFilter> MeshFilters { get; }"}</code> | Mesh filters of enabled pieces that aren't done. |
| <Link id="m-stagelevel" /><code>{"abstract "}<Link to="/game-api/types/alta-crafting/timberblock-stagelevel">{"TimberBlock.StageLevel"}</Link>{" "}<Link to="/game-api/types/alta-crafting/timberblock-stagelevel">{"StageLevel"}</Link>{" { get; }"}</code> | Which stage this is. |
| <Link id="m-pieces-2" /><code>{"protected "}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{"[] Pieces { get; }"}</code> | The stage's pieces. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcefinalize" /><code>{"void ForceFinalize()"}</code> | Marks every piece done and finalizes without choosing a result. Used when loading a later stage. |
| <Link id="m-getpiece" /><code><Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" GetPiece(int index)"}</code> | A piece by index. |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> | Links pieces to the block (server hooks change and done events), resets progress and registers the stage. |
| <Link id="m-loadfrom" /><code>{"void LoadFrom("}<Link to="/game-api/types/alta-crafting/chisellingdecksavedata">{"ChisellingDeckSaveData"}</Link>{" data)"}</code> | Loads each piece from deck save data. |
| <Link id="m-refusepercentage" /><code>{"float RefusePercentage()"}</code> | Starts at the max return share and drops a step per finished piece toward the min. Zero if the max is 0. |
| <Link id="m-rotateto" /><code>{"virtual void RotateTo(bool isInversedUp)"}</code> | Rotates every piece to the block's up direction. The core stage ignores this. |
| <Link id="m-saveinto" /><code>{"void SaveInto("}<Link to="/game-api/types/alta-crafting/chisellingdecksavedata">{"ChisellingDeckSaveData"}</Link>{" data)"}</code> | Saves each piece into deck save data. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> | Writes or reads each piece's done flag and, if not done, its state. |
| <Link id="m-setcurrent" /><code>{"void SetCurrent()"}</code> | Makes this the block's current stage, enables its pieces and syncs. |
| <Link id="m-checkdone" /><code>{"protected virtual void CheckDone("}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece)"}</code> | Called when a piece finishes; finalizes the stage once every piece is done. |
| <Link id="m-finalizestage" /><code>{"protected virtual void FinalizeStage(bool isForced)"}</code> | Plays the concluded effect. Subclasses move to the next stage or release the result. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-runoperationonpieces" /><code>{"private void RunOperationOnPieces(Action<"}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{", int> operation)"}</code> | Runs an action on every piece of the stage, with or without its index. |
| <Link id="m-runoperationonpieces-2" /><code>{"private void RunOperationOnPieces(Action<"}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{"> operation)"}</code> | Runs an action on every piece of the stage, with or without its index. |
| <Link id="m-setenabled" /><code>{"private void SetEnabled(bool isEnabled)"}</code> | Turns chiselling on or off for every piece in the stage. |

</details>

## Used in

Members of other types that take, return or hold a `Stage`:

[`TimberBlock.currentStage`](/game-api/types/alta-crafting/timberblock#m-currentstage), [`TimberBlock.stageMap`](/game-api/types/alta-crafting/timberblock#m-stagemap).
