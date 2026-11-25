---
title: "PositionRecorder"
description: "class PositionRecorder in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionRecorder

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionRecorder()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-inverselerp" /><code>{"private static float inverseLerp"}</code> |  |
| <Link id="m-isaround" /><code>{"private bool isAround"}</code> |  |
| <Link id="m-nextindex" /><code>{"private int nextIndex"}</code> |  |
| <Link id="m-positionarray" /><code>{"private "}<Link to="/game-api/types/global-p/positionrecord">{"PositionRecord"}</Link>{"[] positionArray"}</code> |  |
| <Link id="m-smoothlerp" /><code>{"private static float smoothLerp"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-positions" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-p/positionrecord">{"PositionRecord"}</Link>{"> Positions { get; }"}</code> |  |
| <Link id="m-end" /><code>{"private int End { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-adddistance" /><code>{"void AddDistance(Vector3 distance)"}</code> |  |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-recordposition" /><code>{"void RecordPosition(Transform transform)"}</code> |  |
| <Link id="m-rotatearound" /><code>{"void RotateAround(Vector3 pivot, Quaternion relativeRotation)"}</code> |  |
| <Link id="m-lerp" /><code>{"private Quaternion Lerp(Quaternion from, Quaternion to, float inverseLerp)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PositionRecorder`:

[`ImpactTool.recorder`](/game-api/types/alta-items/impacttool#m-recorder), [`ImpactTool.Recorder`](/game-api/types/alta-items/impacttool#m-recorder-2), [`PickupTypeSettings.GetPositionRecorder`](/game-api/types/global-p/pickuptypesettings#m-getpositionrecorder), [`PickupTypeSettings.recorders`](/game-api/types/global-p/pickuptypesettings#m-recorders), [`PickupTypeSettings.ReleasePositionRecorder`](/game-api/types/global-p/pickuptypesettings#m-releasepositionrecorder).
