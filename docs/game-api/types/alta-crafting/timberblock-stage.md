---
title: "TimberBlock.Stage"
description: "abstract class TimberBlock.Stage in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberBlock.Stage

An **abstract class** in `Root.Township`, `Alta.Carpentry`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`TimberBlock`](/game-api/types/alta-crafting/timberblock)
- **Derived types** [`TimberBlock.CoreStage`](/game-api/types/alta-crafting/timberblock-corestage), [`TimberBlock.InnerStage`](/game-api/types/alta-crafting/timberblock-innerstage), [`TimberBlock.OuterStage`](/game-api/types/alta-crafting/timberblock-outerstage)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Stage()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-block" /><code>{"protected "}<Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block"}</code> |  |
| <Link id="m-concludedeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" concludedEffect"}</code> |  |
| <Link id="m-destroyingeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" destroyingEffect"}</code> |  |
| <Link id="m-maximumreturnpercentage" /><code>{"private float maximumReturnPercentage"}</code> |  |
| <Link id="m-minimumreturnpercentage" /><code>{"private float minimumReturnPercentage"}</code> |  |
| <Link id="m-pieces" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{"[] pieces"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-destroyingeffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DestroyingEffect { get; }"}</code> |  |
| <Link id="m-ismodified" /><code>{"bool IsModified { get; private set; }"}</code> |  |
| <Link id="m-meshfilters" /><code>{"List<MeshFilter> MeshFilters { get; }"}</code> |  |
| <Link id="m-stagelevel" /><code>{"abstract "}<Link to="/game-api/types/alta-crafting/timberblock-stagelevel">{"TimberBlock.StageLevel"}</Link>{" "}<Link to="/game-api/types/alta-crafting/timberblock-stagelevel">{"StageLevel"}</Link>{" { get; }"}</code> |  |
| <Link id="m-pieces-2" /><code>{"protected "}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{"[] Pieces { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcefinalize" /><code>{"void ForceFinalize()"}</code> |  |
| <Link id="m-getpiece" /><code><Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" GetPiece(int index)"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> |  |
| <Link id="m-loadfrom" /><code>{"void LoadFrom("}<Link to="/game-api/types/alta-crafting/chisellingdecksavedata">{"ChisellingDeckSaveData"}</Link>{" data)"}</code> |  |
| <Link id="m-refusepercentage" /><code>{"float RefusePercentage()"}</code> |  |
| <Link id="m-rotateto" /><code>{"virtual void RotateTo(bool isInversedUp)"}</code> |  |
| <Link id="m-saveinto" /><code>{"void SaveInto("}<Link to="/game-api/types/alta-crafting/chisellingdecksavedata">{"ChisellingDeckSaveData"}</Link>{" data)"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> |  |
| <Link id="m-setcurrent" /><code>{"void SetCurrent()"}</code> |  |
| <Link id="m-checkdone" /><code>{"protected virtual void CheckDone("}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece)"}</code> |  |
| <Link id="m-finalizestage" /><code>{"protected virtual void FinalizeStage(bool isForced)"}</code> |  |
| <Link id="m-runoperationonpieces" /><code>{"private void RunOperationOnPieces(Action<"}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{", int> operation)"}</code> |  |
| <Link id="m-runoperationonpieces-2" /><code>{"private void RunOperationOnPieces(Action<"}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{"> operation)"}</code> |  |
| <Link id="m-setenabled" /><code>{"private void SetEnabled(bool isEnabled)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Stage`:

[`TimberBlock.currentStage`](/game-api/types/alta-crafting/timberblock#m-currentstage), [`TimberBlock.stageMap`](/game-api/types/alta-crafting/timberblock#m-stagemap).
