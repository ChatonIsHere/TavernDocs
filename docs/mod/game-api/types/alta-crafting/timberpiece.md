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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`TimberPieceBase`](/mod/game-api/types/alta-crafting/timberpiecebase)
- **Nested types** [`RotationModel`](/mod/game-api/types/alta-crafting/timberpiece-rotationmodel)
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimberPiece()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baselocalposition" /><code>{"private Vector3 baseLocalPosition"}</code> | <span className="api-desc">The piece's local position before any chiseling, used as the base for the tilted pose.</span> |
| <Link id="m-currenthittingdirection" /><code>{"private Vector3 currentHittingDirection"}</code> | <span className="api-desc">Direction of the first hit, in the parent's space; later hits can only turn the pivot so far from it.</span> |
| <Link id="m-damagemultiplieroverchiseldistance" /><code>{"private AnimationCurve damageMultiplierOverChiselDistance"}</code> | <span className="api-desc">Curve that scales damage by the squared distance between the hit and the current chisel point.</span> |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | <span className="api-desc">The piece's `MeshFilter`, returned by `MeshFilter`.</span> |
| <Link id="m-health" /><code>{"private float health"}</code> | <span className="api-desc">Toughness of the piece; damage is divided by this (and by the timber's material density when set).</span> |
| <Link id="m-inversedup" /><code>{"private bool inversedUp"}</code> | <span className="api-desc">Whether the piece sits upside down on the block; flips the rotation axis, and flipping the block the other way knocks progress back.</span> |
| <Link id="m-leniencyoverprogress" /><code>{"private AnimationCurve leniencyOverProgress"}</code> | <span className="api-desc">Curve that gives a minimum hit-direction leniency as progress grows.</span> |
| <Link id="m-maxprogressonfirsthit" /><code>{"private float maxProgressOnFirstHit"}</code> | <span className="api-desc">Caps progress from the first hit so one strike can't finish the piece (0 turns it off).</span> |
| <Link id="m-maxprogressonrotate" /><code>{"private float maxProgressOnRotate"}</code> | <span className="api-desc">Progress the piece drops back to when the block is flipped before the piece is done (default 0.2).</span> |
| <Link id="m-maxrotationfrompivot" /><code>{"private float maxRotationFromPivot"}</code> | <span className="api-desc">How far, per unit of progress, a later hit can turn the pivot direction away from the first hit (radians).</span> |
| <Link id="m-pivottingdirection" /><code>{"private Vector3 pivottingDirection"}</code> | <span className="api-desc">The direction the piece is being knocked over in, in the parent's space. Saved and synced.</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">How far the piece is chiseled off, from 0 to 1; at 1 it is done. Backing field for `Progress`.</span> |
| <Link id="m-progressiontoangle" /><code>{"private AnimationCurve progressionToAngle"}</code> | <span className="api-desc">Curve that maps progress to the tilt angle in degrees.</span> |
| <Link id="m-recedingchiselpoint" /><code>{"private AnimationCurve recedingChiselPoint"}</code> | <span className="api-desc">Curve that moves the chisel point along the pivot direction as progress grows.</span> |
| <Link id="m-rotationmodel" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/timberpiece-rotationmodel">{"TimberPiece.RotationModel"}</Link>{" rotationModel"}</code> | <span className="api-desc">Works out the rotation axis and pivot distance from the pivot direction and `size`.</span> |
| <Link id="m-size" /><code>{"private Vector3 size"}</code> | <span className="api-desc">Dimensions of the piece, used to find the edge it pivots over.</span> |
| <Link id="m-timberblock" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" timberBlock"}</code> | <span className="api-desc">The block this piece belongs to; its physical material's density changes chisel toughness.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentchiselpoint" /><code>{"Vector3 CurrentChiselPoint { get; }"}</code> | <span className="api-desc">The point where chisel hits do the most good, moving as the piece tilts.</span> |
| <Link id="m-hasdirection" /><code>{"bool HasDirection { get; private set; }"}</code> | <span className="api-desc">True after the first hit sets the direction the piece will tilt.</span> |
| <Link id="m-hittingdirection" /><code>{"Vector3 HittingDirection { get; }"}</code> | <span className="api-desc">World direction the piece should be hit in.</span> |
| <Link id="m-isinversedup" /><code>{"bool IsInversedUp { get; }"}</code> | <span className="api-desc">Whether the piece's tilt is flipped (the block is upside down).</span> |
| <Link id="m-meshfilter" /><code>{"override MeshFilter MeshFilter { get; }"}</code> | <span className="api-desc">The mesh filter on the piece.</span> |
| <Link id="m-progress-2" /><code>{"override float Progress { get; set; }"}</code> | <span className="api-desc">Chiselling progress from 0 to 1. Setting it tilts and moves the piece to match.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdirectionleniency" /><code>{"override void GetDirectionLeniency(ref float multiplier)"}</code> | <span className="api-desc">Raises the chisel direction multiplier as progress grows, so later hits can be less precise.</span> |
| <Link id="m-gethitmultiplier" /><code>{"override float GetHitMultiplier(Vector3 hitDirection)"}</code> | <span className="api-desc">How well a hit direction lines up with the piece. Before the first hit, horizontal hits score best.</span> |
| <Link id="m-load" /><code>{"override void Load("}<Link to="/mod/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" data)"}</code> | <span className="api-desc">Restores progress and direction from save data.</span> |
| <Link id="m-receivedamage" /><code>{"override void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/mod/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> | <span className="api-desc">Server: adds progress from a chisel hit, scaled by distance to the chisel point and the block's density.</span> |
| <Link id="m-rotate" /><code>{"override void Rotate(bool isInversedUp)"}</code> | <span className="api-desc">Pulls progress back down to a cap when the block is flipped before the piece is done.</span> |
| <Link id="m-save" /><code>{"override "}<Link to="/mod/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" Save()"}</code> | <span className="api-desc">Returns the piece's progress and directions as save data.</span> |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> | <span className="api-desc">Syncs progress and direction. Clients show a damage popup when it changes.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Caches the mesh filter and sets up the tilt model.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the current chisel point and the hitting direction.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: records the base local position while progress is zero, then reapplies `Progress` to update the pose.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TimberPiece`:

<div className="api-used-in">

[`TimberPieceGroup.pieces`](/mod/game-api/types/alta-crafting/timberpiecegroup#m-pieces).

</div>
