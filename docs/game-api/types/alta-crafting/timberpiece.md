---
title: "TimberPiece"
description: "One piece of a carpentry timber block that tilts away as it is chiselled until it breaks off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberPiece

A **class** in `Root.Township`, `Alta.Carpentry`.

One piece of a carpentry timber block that tilts away as it is chiselled until it breaks off. The server applies damage; progress syncs to clients.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`TimberPieceBase`](/game-api/types/alta-crafting/timberpiecebase)
- **Nested types** [`RotationModel`](/game-api/types/alta-crafting/timberpiece-rotationmodel)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TimberPiece()"}</code> |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baselocalposition" /><code>{"private Vector3 baseLocalPosition"}</code> | The piece's local position before any chiseling, used as the base for the tilted pose. |
| <Link id="m-currenthittingdirection" /><code>{"private Vector3 currentHittingDirection"}</code> | Direction of the first hit, in the parent's space; later hits can only turn the pivot so far from it. |
| <Link id="m-damagemultiplieroverchiseldistance" /><code>{"private AnimationCurve damageMultiplierOverChiselDistance"}</code> | Curve that scales damage by the squared distance between the hit and the current chisel point. |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | The piece's `MeshFilter`, returned by `MeshFilter`. |
| <Link id="m-health" /><code>{"private float health"}</code> | Toughness of the piece; damage is divided by this (and by the timber's material density when set). |
| <Link id="m-inversedup" /><code>{"private bool inversedUp"}</code> | Whether the piece sits upside down on the block; flips the rotation axis, and flipping the block the other way knocks progress back. |
| <Link id="m-leniencyoverprogress" /><code>{"private AnimationCurve leniencyOverProgress"}</code> | Curve that gives a minimum hit-direction leniency as progress grows. |
| <Link id="m-maxprogressonfirsthit" /><code>{"private float maxProgressOnFirstHit"}</code> | Caps progress from the first hit so one strike can't finish the piece (0 turns it off). |
| <Link id="m-maxprogressonrotate" /><code>{"private float maxProgressOnRotate"}</code> | Progress the piece drops back to when the block is flipped before the piece is done (default 0.2). |
| <Link id="m-maxrotationfrompivot" /><code>{"private float maxRotationFromPivot"}</code> | How far, per unit of progress, a later hit can turn the pivot direction away from the first hit (radians). |
| <Link id="m-pivottingdirection" /><code>{"private Vector3 pivottingDirection"}</code> | The direction the piece is being knocked over in, in the parent's space. Saved and synced. |
| <Link id="m-progress" /><code>{"private float progress"}</code> | How far the piece is chiseled off, from 0 to 1; at 1 it is done. Backing field for `Progress`. |
| <Link id="m-progressiontoangle" /><code>{"private AnimationCurve progressionToAngle"}</code> | Curve that maps progress to the tilt angle in degrees. |
| <Link id="m-recedingchiselpoint" /><code>{"private AnimationCurve recedingChiselPoint"}</code> | Curve that moves the chisel point along the pivot direction as progress grows. |
| <Link id="m-rotationmodel" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberpiece-rotationmodel">{"TimberPiece.RotationModel"}</Link>{" rotationModel"}</code> | Works out the rotation axis and pivot distance from the pivot direction and `size`. |
| <Link id="m-size" /><code>{"private Vector3 size"}</code> | Dimensions of the piece, used to find the edge it pivots over. |
| <Link id="m-timberblock" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" timberBlock"}</code> | The block this piece belongs to; its physical material's density changes chisel toughness. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentchiselpoint" /><code>{"Vector3 CurrentChiselPoint { get; }"}</code> | The point where chisel hits do the most good, moving as the piece tilts. |
| <Link id="m-hasdirection" /><code>{"bool HasDirection { get; private set; }"}</code> | True after the first hit sets the direction the piece will tilt. |
| <Link id="m-hittingdirection" /><code>{"Vector3 HittingDirection { get; }"}</code> | World direction the piece should be hit in. |
| <Link id="m-isinversedup" /><code>{"bool IsInversedUp { get; }"}</code> | Whether the piece's tilt is flipped (the block is upside down). |
| <Link id="m-meshfilter" /><code>{"override MeshFilter MeshFilter { get; }"}</code> | The mesh filter on the piece. |
| <Link id="m-progress-2" /><code>{"override float Progress { get; set; }"}</code> | Chiselling progress from 0 to 1. Setting it tilts and moves the piece to match. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdirectionleniency" /><code>{"override void GetDirectionLeniency(ref float multiplier)"}</code> | Raises the chisel direction multiplier as progress grows, so later hits can be less precise. |
| <Link id="m-gethitmultiplier" /><code>{"override float GetHitMultiplier(Vector3 hitDirection)"}</code> | How well a hit direction lines up with the piece. Before the first hit, horizontal hits score best. |
| <Link id="m-load" /><code>{"override void Load("}<Link to="/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" data)"}</code> | Restores progress and direction from save data. |
| <Link id="m-receivedamage" /><code>{"override void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | Server: adds progress from a chisel hit, scaled by distance to the chisel point and the block's density. |
| <Link id="m-rotate" /><code>{"override void Rotate(bool isInversedUp)"}</code> | Pulls progress back down to a cap when the block is flipped before the piece is done. |
| <Link id="m-save" /><code>{"override "}<Link to="/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" Save()"}</code> | Returns the piece's progress and directions as save data. |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> | Syncs progress and direction. Clients show a damage popup when it changes. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Caches the mesh filter and sets up the tilt model. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the current chisel point and the hitting direction. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: records the base local position while progress is zero, then reapplies `Progress` to update the pose. |

</details>

## Used in

Members of other types that take, return or hold a `TimberPiece`:

[`TimberPieceGroup.pieces`](/game-api/types/alta-crafting/timberpiecegroup#m-pieces).
