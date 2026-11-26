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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`, [`IElbowGuideDataPoint`](/mod/game-api/types/alta-player/ielbowguidedatapoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ElbowGuideDataPoint()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-datapointset" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" dataPointSet"}</code> | <span className="api-desc">Backing field for `DataPointSet`.</span> |
| <Link id="m-elbowhintposition" /><code>{"private Vector3 elbowHintPosition"}</code> | <span className="api-desc">Backing field for `ElbowHintPosition`.</span> |
| <Link id="m-handindex" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> | <span className="api-desc">Backing field for `HandIndex`.</span> |
| <Link id="m-handposition" /><code>{"private Vector3 handPosition"}</code> | <span className="api-desc">Backing field for `HandPosition`.</span> |
| <Link id="m-handrotation" /><code>{"private Quaternion handRotation"}</code> | <span className="api-desc">Backing field for `HandRotation`.</span> |
| <Link id="m-weight" /><code>{"private float weight"}</code> | <span className="api-desc">Backing field for `Weight`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datapointset-2" /><code><Link to="/mod/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" DataPointSet { get; set; }"}</code> | <span className="api-desc">The set this data point belongs to.</span> |
| <Link id="m-elbowhintposition-2" /><code>{"Vector3 ElbowHintPosition { get; set; }"}</code> | <span className="api-desc">Where the elbow should be for this hand pose, relative to the body.</span> |
| <Link id="m-handindex-2" /><code><Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Which hand the sample was recorded for. Samples for the other hand are mirrored.</span> |
| <Link id="m-handposition-2" /><code>{"Vector3 HandPosition { get; set; }"}</code> | <span className="api-desc">Hand position relative to the body.</span> |
| <Link id="m-handrotation-2" /><code>{"Quaternion HandRotation { get; set; }"}</code> | <span className="api-desc">Hand rotation relative to the body.</span> |
| <Link id="m-weight-2" /><code>{"float Weight { get; set; }"}</code> | <span className="api-desc">Divides the match score, so a higher weight makes the sample more likely to be picked. Must not be 0.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-mirrordatapoint" /><code><Link to="/mod/game-api/types/alta-player/elbowguidedatapointruntime">{"ElbowGuideDataPointRuntime"}</Link>{" MirrorDataPoint()"}</code> | <span className="api-desc">Returns a runtime copy mirrored across the body for the other hand.</span> |

## Used in

Members of other types that take, return or hold a `ElbowGuideDataPoint`:

<div className="api-used-in">

[`ElbowDataPointSet.DataPoints`](/mod/game-api/types/alta-player/elbowdatapointset#m-datapoints), [`ElbowDataPointSet.DeleteDataPoint`](/mod/game-api/types/alta-player/elbowdatapointset#m-deletedatapoint), [`ElbowDataPointSet.elbowDataPoints`](/mod/game-api/types/alta-player/elbowdatapointset#m-elbowdatapoints).

</div>
