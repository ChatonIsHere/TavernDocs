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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`Chiselable`](/game-api/types/alta-crafting/chiselable)
- **Derived types** [`TimberPiece`](/game-api/types/alta-crafting/timberpiece), [`TimberPieceGroup`](/game-api/types/alta-crafting/timberpiecegroup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected TimberPieceBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onchanged" /><code><Link to="/game-api/types/alta-crafting/timberpiecedelegate">{"TimberPieceDelegate"}</Link>{" OnChanged"}</code> | Delegate called when the piece changes. |
| <Link id="m-ondone" /><code><Link to="/game-api/types/alta-crafting/timberpiecedelegate">{"TimberPieceDelegate"}</Link>{" OnDone"}</code> | Delegate called when the piece is finished. |
| <Link id="m-hittineffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" hittinEffect"}</code> |  |
| <Link id="m-hittingsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" hittingSound"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"int Index { get; set; }"}</code> | The piece's index within its stage. |
| <Link id="m-isdone" /><code>{"bool IsDone { get; private set; }"}</code> | Set by `MarkIsDone` once the piece is finished. |
| <Link id="m-ismodified" /><code>{"bool IsModified { get; protected set; }"}</code> | Whether the piece has been carved or turned away from its starting state. |
| <Link id="m-lasthittingplayercontroller" /><code><Link to="/game-api/types/global-p/player">{"Player"}</Link>{" LastHittingPlayerController { get; protected set; }"}</code> | The player who last hit this piece. |
| <Link id="m-meshfilter" /><code>{"abstract MeshFilter MeshFilter { get; }"}</code> | The mesh filter that shows the piece. |
| <Link id="m-progress" /><code>{"abstract float Progress { get; set; }"}</code> | How far the piece has been carved, as set by the subclass. |
| <Link id="m-triggerhaptics" /><code>{"override bool TriggerHaptics { get; }"}</code> | Haptics only fire while the piece is enabled. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"abstract void Load("}<Link to="/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" data)"}</code> | Restores the piece from its save data. |
| <Link id="m-markisdone" /><code>{"void MarkIsDone()"}</code> | Marks the piece finished and hides its game object. |
| <Link id="m-receivedamage" /><code>{"override void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | Applies a chisel hit, then plays the hit effect and sound (not on headless). |
| <Link id="m-rotate" /><code>{"abstract void Rotate(bool isInversedUp)"}</code> | Turns the piece to match the block's orientation. |
| <Link id="m-save" /><code>{"abstract "}<Link to="/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" Save()"}</code> | Returns the piece's save data. |
| <Link id="m-serialize" /><code>{"abstract void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> | Writes or reads the piece's state on a network stream, fully or as a change. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Disables the piece until its stage turns it on. |

## Used in

Members of other types that take, return or hold a `TimberPieceBase`:

[`RecipePlacer.UpdatePiece`](/game-api/types/alta-crafting/recipeplacer#m-updatepiece), [`TimberBlock.CallPieceEffect`](/game-api/types/alta-crafting/timberblock#m-callpieceeffect), [`TimberBlock.GetPiece`](/game-api/types/alta-crafting/timberblock#m-getpiece), [`TimberBlock.OuterStage.CheckDone`](/game-api/types/alta-crafting/timberblock-outerstage#m-checkdone), [`TimberBlock.Stage.CheckDone`](/game-api/types/alta-crafting/timberblock-stage#m-checkdone), [`TimberBlock.Stage.GetPiece`](/game-api/types/alta-crafting/timberblock-stage#m-getpiece), [`TimberBlock.Stage.pieces`](/game-api/types/alta-crafting/timberblock-stage#m-pieces), [`TimberBlock.Stage.Pieces`](/game-api/types/alta-crafting/timberblock-stage#m-pieces-2), [`TimberBlock.Stage.RunOperationOnPieces`](/game-api/types/alta-crafting/timberblock-stage#m-runoperationonpieces), [`TimberPieceDelegate.BeginInvoke`](/game-api/types/alta-crafting/timberpiecedelegate#m-begininvoke), [`TimberPieceDelegate.Invoke`](/game-api/types/alta-crafting/timberpiecedelegate#m-invoke).
