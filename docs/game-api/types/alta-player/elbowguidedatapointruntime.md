---
title: "ElbowGuideDataPointRuntime"
description: "An elbow guide data point made at runtime, mostly by ElbowGuideDataPoint.MirrorDataPoint to get the other hand's version."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ElbowGuideDataPointRuntime

A **class** in `Root.Township`, `Alta.Character`.

An elbow guide data point made at runtime, mostly by `ElbowGuideDataPoint.MirrorDataPoint` to get the other hand's version.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`IElbowGuideDataPoint`](/game-api/types/alta-player/ielbowguidedatapoint)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ElbowGuideDataPointRuntime()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datapointset" /><code><Link to="/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" DataPointSet { get; set; }"}</code> | The data point set this point belongs to. |
| <Link id="m-elbowhintposition" /><code>{"Vector3 ElbowHintPosition { get; set; }"}</code> | Where the elbow should point for this hand pose. |
| <Link id="m-handindex" /><code><Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; set; }"}</code> | Which hand the point is for. |
| <Link id="m-handposition" /><code>{"Vector3 HandPosition { get; set; }"}</code> | Hand position for this pose. |
| <Link id="m-handrotation" /><code>{"Quaternion HandRotation { get; set; }"}</code> | Hand rotation for this pose. |
| <Link id="m-weight" /><code>{"float Weight { get; set; }"}</code> | How strongly the point counts. Its score is divided by this. |

## Used in

Members of other types that take, return or hold a `ElbowGuideDataPointRuntime`:

[`ElbowGuideDataPoint.MirrorDataPoint`](/game-api/types/alta-player/elbowguidedatapoint#m-mirrordatapoint).
