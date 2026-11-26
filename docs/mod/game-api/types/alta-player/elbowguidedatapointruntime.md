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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`IElbowGuideDataPoint`](/mod/game-api/types/alta-player/ielbowguidedatapoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ElbowGuideDataPointRuntime()"}</code> | <span className="api-desc">Creates an `ElbowGuideDataPointRuntime` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datapointset" /><code><Link to="/mod/game-api/types/alta-player/elbowdatapointset">{"ElbowDataPointSet"}</Link>{" DataPointSet { get; set; }"}</code> | <span className="api-desc">The data point set this point belongs to.</span> |
| <Link id="m-elbowhintposition" /><code>{"Vector3 ElbowHintPosition { get; set; }"}</code> | <span className="api-desc">Where the elbow should point for this hand pose.</span> |
| <Link id="m-handindex" /><code><Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Which hand the point is for.</span> |
| <Link id="m-handposition" /><code>{"Vector3 HandPosition { get; set; }"}</code> | <span className="api-desc">Hand position for this pose.</span> |
| <Link id="m-handrotation" /><code>{"Quaternion HandRotation { get; set; }"}</code> | <span className="api-desc">Hand rotation for this pose.</span> |
| <Link id="m-weight" /><code>{"float Weight { get; set; }"}</code> | <span className="api-desc">How strongly the point counts. Its score is divided by this.</span> |

## Used in

Members of other types that take, return or hold a `ElbowGuideDataPointRuntime`:

<div className="api-used-in">

[`ElbowGuideDataPoint.MirrorDataPoint`](/mod/game-api/types/alta-player/elbowguidedatapoint#m-mirrordatapoint).

</div>
