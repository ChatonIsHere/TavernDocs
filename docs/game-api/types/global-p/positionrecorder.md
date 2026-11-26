---
title: "PositionRecorder"
description: "Ring buffer of recent position and rotation records for an ImpactTool, which Impactor reads to sweep hits."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionRecorder

A **class** in `Root.Township`, no namespace.

Ring buffer of recent position and rotation records for an `ImpactTool`, which `Impactor` reads to sweep hits. Pooled through `PickupTypeSettings.GetPositionRecorder`.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionRecorder()"}</code> | Creates a `PositionRecorder` with default values. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inverselerp" /><code>{"private static float inverseLerp"}</code> | 1 minus `smoothLerp`. |
| <Link id="m-isaround" /><code>{"private bool isAround"}</code> | True once the buffer has wrapped at least once. |
| <Link id="m-nextindex" /><code>{"private int nextIndex"}</code> | Index the next record is written to. |
| <Link id="m-positionarray" /><code>{"private "}<Link to="/game-api/types/global-p/positionrecord">{"PositionRecord"}</Link>{"[] positionArray"}</code> | The record buffer, sized by `PickupTypeSettings.ImpactorArraySize`. |
| <Link id="m-smoothlerp" /><code>{"private static float smoothLerp"}</code> | `PickupTypeSettings.SmoothLerp`, read once for all recorders. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-positions" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-p/positionrecord">{"PositionRecord"}</Link>{"> Positions { get; }"}</code> | The valid records in array order (not oldest first once the buffer has wrapped). |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-end" /><code>{"private int End { get; }"}</code> | Number of valid records: the write index until the buffer wraps, then the whole array. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-adddistance" /><code>{"void AddDistance(Vector3 distance)"}</code> | Shifts every record by the given offset. Hooked to the holding player's `DistanceTravelled` so movement doesn't count as a swing. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the buffer. |
| <Link id="m-recordposition" /><code>{"void RecordPosition(Transform transform)"}</code> | Stores the transform's current position and rotation, wrapping round when the buffer is full. |
| <Link id="m-rotatearound" /><code>{"void RotateAround(Vector3 pivot, Quaternion relativeRotation)"}</code> | Pulls every record towards the latest one by `SmoothLerp`. Hooked to the player's turning; its pivot and rotation arguments are not used. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"private Quaternion Lerp(Quaternion from, Quaternion to, float inverseLerp)"}</code> | Blends two quaternions by scaling the first and adding the second, then normalising. Used by `RotateAround`. |

</details>

## Used in

Members of other types that take, return or hold a `PositionRecorder`:

[`ImpactTool.recorder`](/game-api/types/alta-items/impacttool#m-recorder), [`ImpactTool.Recorder`](/game-api/types/alta-items/impacttool#m-recorder-2), [`PickupTypeSettings.GetPositionRecorder`](/game-api/types/global-p/pickuptypesettings#m-getpositionrecorder), [`PickupTypeSettings.recorders`](/game-api/types/global-p/pickuptypesettings#m-recorders), [`PickupTypeSettings.ReleasePositionRecorder`](/game-api/types/global-p/pickuptypesettings#m-releasepositionrecorder).
