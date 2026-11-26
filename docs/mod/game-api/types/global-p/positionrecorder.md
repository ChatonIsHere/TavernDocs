---
title: "PositionRecorder"
description: "Ring buffer of recent position and rotation records for an ImpactTool, which Impactor reads to sweep hits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionRecorder

A **class** in `Root.Township`, the global namespace.

Ring buffer of recent position and rotation records for an `ImpactTool`, which `Impactor` reads to sweep hits. Pooled through `PickupTypeSettings.GetPositionRecorder`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionRecorder()"}</code> | <span className="api-desc">Creates a `PositionRecorder` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inverselerp" /><code>{"private static float inverseLerp"}</code> | <span className="api-desc">1 minus `smoothLerp`.</span> |
| <Link id="m-isaround" /><code>{"private bool isAround"}</code> | <span className="api-desc">True once the buffer has wrapped at least once.</span> |
| <Link id="m-nextindex" /><code>{"private int nextIndex"}</code> | <span className="api-desc">Index the next record is written to.</span> |
| <Link id="m-positionarray" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionrecord">{"PositionRecord"}</Link>{"[] positionArray"}</code> | <span className="api-desc">The record buffer, sized by `PickupTypeSettings.ImpactorArraySize`.</span> |
| <Link id="m-smoothlerp" /><code>{"private static float smoothLerp"}</code> | <span className="api-desc">`PickupTypeSettings.SmoothLerp`, read once for all recorders.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-positions" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-p/positionrecord">{"PositionRecord"}</Link>{"> Positions { get; }"}</code> | <span className="api-desc">The valid records in array order (not oldest first once the buffer has wrapped).</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-end" /><code>{"private int End { get; }"}</code> | <span className="api-desc">Number of valid records: the write index until the buffer wraps, then the whole array.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-adddistance" /><code>{"void AddDistance(Vector3 distance)"}</code> | <span className="api-desc">Shifts every record by the given offset. Hooked to the holding player's `DistanceTravelled` so movement doesn't count as a swing.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Empties the buffer.</span> |
| <Link id="m-recordposition" /><code>{"void RecordPosition(Transform transform)"}</code> | <span className="api-desc">Stores the transform's current position and rotation, wrapping round when the buffer is full.</span> |
| <Link id="m-rotatearound" /><code>{"void RotateAround(Vector3 pivot, Quaternion relativeRotation)"}</code> | <span className="api-desc">Pulls every record towards the latest one by `SmoothLerp`. Hooked to the player's turning; its pivot and rotation arguments are not used.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"private Quaternion Lerp(Quaternion from, Quaternion to, float inverseLerp)"}</code> | <span className="api-desc">Blends two quaternions by scaling the first and adding the second, then normalising. Used by `RotateAround`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PositionRecorder`:

<div className="api-used-in">

[`ImpactTool.recorder`](/mod/game-api/types/alta-items/impacttool#m-recorder), [`ImpactTool.Recorder`](/mod/game-api/types/alta-items/impacttool#m-recorder-2), [`PickupTypeSettings.GetPositionRecorder`](/mod/game-api/types/global-p/pickuptypesettings#m-getpositionrecorder), [`PickupTypeSettings.recorders`](/mod/game-api/types/global-p/pickuptypesettings#m-recorders), [`PickupTypeSettings.ReleasePositionRecorder`](/mod/game-api/types/global-p/pickuptypesettings#m-releasepositionrecorder).

</div>
