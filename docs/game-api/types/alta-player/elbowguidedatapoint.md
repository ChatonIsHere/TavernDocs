---
title: "ElbowGuideDataPoint"
description: "One recorded sample used to place the elbow in arm IK: a hand pose and where the elbow should be for it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ElbowGuideDataPoint

A **class** in `Root.Township`, `Alta.Character`.

One recorded sample used to place the elbow in arm IK: a hand pose and where the elbow should be for it. `ElbowController` picks the samples closest to the current hand pose.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`, [`IElbowGuideDataPoint`](/game-api/types/alta-player/ielbowguidedatapoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ElbowGuideDataPoint()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-datapointset" /><code>{"private "}<Link to="/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" dataPointSet"}</code> | Backing field for `DataPointSet`. |
| <Link id="m-elbowhintposition" /><code>{"private Vector3 elbowHintPosition"}</code> | Backing field for `ElbowHintPosition`. |
| <Link id="m-handindex" /><code>{"private "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> | Backing field for `HandIndex`. |
| <Link id="m-handposition" /><code>{"private Vector3 handPosition"}</code> | Backing field for `HandPosition`. |
| <Link id="m-handrotation" /><code>{"private Quaternion handRotation"}</code> | Backing field for `HandRotation`. |
| <Link id="m-weight" /><code>{"private float weight"}</code> | Backing field for `Weight`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datapointset-2" /><code><Link to="/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" DataPointSet { get; set; }"}</code> | The set this data point belongs to. |
| <Link id="m-elbowhintposition-2" /><code>{"Vector3 ElbowHintPosition { get; set; }"}</code> | Where the elbow should be for this hand pose, relative to the body. |
| <Link id="m-handindex-2" /><code><Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; set; }"}</code> | Which hand the sample was recorded for. Samples for the other hand are mirrored. |
| <Link id="m-handposition-2" /><code>{"Vector3 HandPosition { get; set; }"}</code> | Hand position relative to the body. |
| <Link id="m-handrotation-2" /><code>{"Quaternion HandRotation { get; set; }"}</code> | Hand rotation relative to the body. |
| <Link id="m-weight-2" /><code>{"float Weight { get; set; }"}</code> | Divides the match score, so a higher weight makes the sample more likely to be picked. Must not be 0. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-mirrordatapoint" /><code><Link to="/game-api/types/alta-player/elbowguidedatapointruntime">{"ElbowGuideDataPointRuntime"}</Link>{" MirrorDataPoint()"}</code> | Returns a runtime copy mirrored across the body for the other hand. |

## Used in

Members of other types that take, return or hold a `ElbowGuideDataPoint`:

[`ElbowDataPointSet.DataPoints`](/game-api/types/alta-player/elbowdatapointset#m-datapoints), [`ElbowDataPointSet.DeleteDataPoint`](/game-api/types/alta-player/elbowdatapointset#m-deletedatapoint), [`ElbowDataPointSet.elbowDataPoints`](/game-api/types/alta-player/elbowdatapointset#m-elbowdatapoints).
