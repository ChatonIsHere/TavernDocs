---
title: "TimberPiece"
description: "class TimberPiece in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberPiece

A **class** in `Root.Township`, `Alta.Carpentry`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`TimberPieceBase`](/game-api/types/alta-crafting/timberpiecebase)
- **Nested types** [`RotationModel`](/game-api/types/alta-crafting/timberpiece-rotationmodel)
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimberPiece()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-baselocalposition" /><code>{"private Vector3 baseLocalPosition"}</code> |  |
| <Link id="m-currenthittingdirection" /><code>{"private Vector3 currentHittingDirection"}</code> |  |
| <Link id="m-damagemultiplieroverchiseldistance" /><code>{"private AnimationCurve damageMultiplierOverChiselDistance"}</code> |  |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> |  |
| <Link id="m-health" /><code>{"private float health"}</code> |  |
| <Link id="m-inversedup" /><code>{"private bool inversedUp"}</code> |  |
| <Link id="m-leniencyoverprogress" /><code>{"private AnimationCurve leniencyOverProgress"}</code> |  |
| <Link id="m-maxprogressonfirsthit" /><code>{"private float maxProgressOnFirstHit"}</code> |  |
| <Link id="m-maxprogressonrotate" /><code>{"private float maxProgressOnRotate"}</code> |  |
| <Link id="m-maxrotationfrompivot" /><code>{"private float maxRotationFromPivot"}</code> |  |
| <Link id="m-pivottingdirection" /><code>{"private Vector3 pivottingDirection"}</code> |  |
| <Link id="m-progress" /><code>{"private float progress"}</code> |  |
| <Link id="m-progressiontoangle" /><code>{"private AnimationCurve progressionToAngle"}</code> |  |
| <Link id="m-recedingchiselpoint" /><code>{"private AnimationCurve recedingChiselPoint"}</code> |  |
| <Link id="m-rotationmodel" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberpiece-rotationmodel">{"TimberPiece.RotationModel"}</Link>{" rotationModel"}</code> |  |
| <Link id="m-size" /><code>{"private Vector3 size"}</code> |  |
| <Link id="m-timberblock" /><code>{"private "}<Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" timberBlock"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentchiselpoint" /><code>{"Vector3 CurrentChiselPoint { get; }"}</code> |  |
| <Link id="m-hasdirection" /><code>{"bool HasDirection { get; private set; }"}</code> |  |
| <Link id="m-hittingdirection" /><code>{"Vector3 HittingDirection { get; }"}</code> |  |
| <Link id="m-isinversedup" /><code>{"bool IsInversedUp { get; }"}</code> |  |
| <Link id="m-meshfilter" /><code>{"override MeshFilter MeshFilter { get; }"}</code> |  |
| <Link id="m-progress-2" /><code>{"override float Progress { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdirectionleniency" /><code>{"override void GetDirectionLeniency(ref float multiplier)"}</code> |  |
| <Link id="m-gethitmultiplier" /><code>{"override float GetHitMultiplier(Vector3 hitDirection)"}</code> |  |
| <Link id="m-load" /><code>{"override void Load("}<Link to="/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" data)"}</code> |  |
| <Link id="m-receivedamage" /><code>{"override void ReceiveDamage(float damage, Vector3 position, Vector3 direction, "}<Link to="/game-api/types/alta-crafting/chiselingtool">{"ChiselingTool"}</Link>{" tool, Collider hitCollider)"}</code> |  |
| <Link id="m-rotate" /><code>{"override void Rotate(bool isInversedUp)"}</code> |  |
| <Link id="m-save" /><code>{"override "}<Link to="/game-api/types/alta-crafting/piecesavedata">{"PieceSaveData"}</Link>{" Save()"}</code> |  |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWritingFull)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `TimberPiece`:

[`TimberPieceGroup.pieces`](/game-api/types/alta-crafting/timberpiecegroup#m-pieces).
