---
title: "IElbowGuideDataPoint"
description: "One recorded pose sample for placing a player's elbow: a hand position and rotation (relative to the body) and the elbow hint to use for it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IElbowGuideDataPoint

An **interface** in `Root.Township`, `Alta.Character`.

One recorded pose sample for placing a player's elbow: a hand position and rotation (relative to the body) and the elbow hint to use for it. `ElbowController` finds the closest samples to the current hand and averages their hints.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`ElbowGuideDataPoint`](/mod/game-api/types/alta-player/elbowguidedatapoint), [`ElbowGuideDataPointRuntime`](/mod/game-api/types/alta-player/elbowguidedatapointruntime)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datapointset" /><code><Link to="/mod/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" DataPointSet { get; }"}</code> | The `ElbowDataPointSet` this sample belongs to. |
| <Link id="m-elbowhintposition" /><code>{"Vector3 ElbowHintPosition { get; }"}</code> | Elbow hint position, in body space, to use when the hand matches this sample. |
| <Link id="m-handindex" /><code><Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; }"}</code> | Which hand the sample was recorded for. Samples for the other hand are mirrored. |
| <Link id="m-handposition" /><code>{"Vector3 HandPosition { get; }"}</code> | Hand position in body space. |
| <Link id="m-handrotation" /><code>{"Quaternion HandRotation { get; }"}</code> | Hand rotation relative to the body. |
| <Link id="m-weight" /><code>{"float Weight { get; }"}</code> | Match scores are divided by this, so a higher weight makes the sample more likely to be picked. |

## Used in

Members of other types that take, return or hold a `IElbowGuideDataPoint`:

[`ElbowController.dataPoints`](/mod/game-api/types/alta-player/elbowcontroller#m-datapoints), [`ElbowDataPointScore.ElbowDataPointScore`](/mod/game-api/types/alta-player/elbowdatapointscore#m-ctor), [`ElbowDataPointScore.Point`](/mod/game-api/types/alta-player/elbowdatapointscore#m-point).
