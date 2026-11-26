---
title: "TimberPieceBase"
description: "Base for one chiselable piece of a timber block in carpentry."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberPieceBase

An **abstract class** in `Root.Township`, `Alta.Carpentry`.

Base for one chiselable piece of a timber block in carpentry. Starts disabled; a `TimberBlock` stage enables, saves and syncs its pieces.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`Chiselable`](/mod/game-api/types/alta-crafting/chiselable)
- **Derived types** [`TimberPiece`](/mod/game-api/types/alta-crafting/timberpiece), [`TimberPieceGroup`](/mod/game-api/types/alta-crafting/timberpiecegroup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected TimberPieceBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onchanged" /><code><Link to="/mod/game-api/types/alta-crafting/timberpiecedelegate">{"TimberPieceDelegate"}</Link>{" OnChanged"}</code> | <span className="api-desc">Delegate called when the piece changes.</span> |
| <Link id="m-ondone" /><code><Link to="/mod/game-api/types/alta-crafting/timberpiecedelegate">{"TimberPieceDelegate"}</Link>{" OnDone"}</code> | <span className="api-desc">Delegate called when the piece is finished.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hittineffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" hittinEffect"}</code> | <span className="api-desc">Pooled effect spawned at the piece on clients when it takes damage.</span> |
| <Link id="m-hittingsound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" hittingSound"}</code> | <span className="api-desc">Sound set played at the piece on clients when it takes damage.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"int Index { get; set; }"}</code> | <span className="api-desc">The piece's index within its stage.</span> |
| <Link id="m-isdone" /><code>{"bool IsDone { get; private set; }"}</code> | <span className="api-desc">Set by `MarkIsDone` once the piece is finished.</span> |
| <Link id="m-ismodified" /><code>{"bool IsModified { get; protected set; }"}</code> | <span className="api-desc">Whether the piece has been carved or turned away from its starting state.</span> |
| <Link id="m-lasthittingplayercontroller" /><code><Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" LastHittingPlayerController { get; protected set; }"}</code> | <span className="api-desc">The player who last hit this piece.</span> |
| <Link id="m-meshfilter" /><code>{"abstract MeshFilter MeshFilter { get; }"}</code> | <span className="api-desc">The mesh filter that shows the piece.</span> |
| <Link id="m-progress" /><code>{"abstract float Progress { get; set; }"}</code> | <span className="api-desc">How far the piece has been carved, as set by the subclass.</span> |
| <Link id="m-triggerhaptics" /><code>{"override bool TriggerHaptics { get; }"}</code> | <span className="api-desc">Haptics only fire while the piece is enabled.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"abstract void Load("}<Link to="/mod/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" data)"}</code> | <span className="api-desc">Restores the piece from its save data.</span> |
| <Link id="m-markisdone" /><code>{"void MarkIsDone()"}</code> | <span className="api-desc">Marks the piece finished and hides its game object.</span> |
| <Link id="m-receivedamage" /><code>{"override void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/mod/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | <span className="api-desc">Applies a chisel hit, then plays the hit effect and sound (not on headless).</span> |
| <Link id="m-rotate" /><code>{"abstract void Rotate(bool isInversedUp)"}</code> | <span className="api-desc">Turns the piece to match the block's orientation.</span> |
| <Link id="m-save" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" Save()"}</code> | <span className="api-desc">Returns the piece's save data.</span> |
| <Link id="m-serialize" /><code>{"abstract void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> | <span className="api-desc">Writes or reads the piece's state on a network stream, fully or as a change.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Disables the piece until its stage turns it on.</span> |

## Used in

Members of other types that take, return or hold a `TimberPieceBase`:

<div className="api-used-in">

[`RecipePlacer.UpdatePiece`](/mod/game-api/types/alta-crafting/recipeplacer#m-updatepiece), [`TimberBlock.CallPieceEffect`](/mod/game-api/types/alta-crafting/timberblock#m-callpieceeffect), [`TimberBlock.GetPiece`](/mod/game-api/types/alta-crafting/timberblock#m-getpiece), [`TimberBlock.OuterStage.CheckDone`](/mod/game-api/types/alta-crafting/timberblock-outerstage#m-checkdone), [`TimberBlock.Stage.CheckDone`](/mod/game-api/types/alta-crafting/timberblock-stage#m-checkdone), [`TimberBlock.Stage.GetPiece`](/mod/game-api/types/alta-crafting/timberblock-stage#m-getpiece), [`TimberBlock.Stage.pieces`](/mod/game-api/types/alta-crafting/timberblock-stage#m-pieces), [`TimberBlock.Stage.Pieces`](/mod/game-api/types/alta-crafting/timberblock-stage#m-pieces-2), [`TimberBlock.Stage.RunOperationOnPieces`](/mod/game-api/types/alta-crafting/timberblock-stage#m-runoperationonpieces), [`TimberPieceDelegate.BeginInvoke`](/mod/game-api/types/alta-crafting/timberpiecedelegate#m-begininvoke), [`TimberPieceDelegate.Invoke`](/mod/game-api/types/alta-crafting/timberpiecedelegate#m-invoke).

</div>
