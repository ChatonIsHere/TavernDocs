---
title: "ElbowDataPointScore"
description: "An elbow guide data point and how well it matches the current hand pose."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ElbowDataPointScore

A **class** in `Root.Township`, `Alta.Character`.

An elbow guide data point and how well it matches the current hand pose. `ElbowController` keeps a sorted list of the best ones.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ElbowDataPointScore("}<Link to="/mod/game-api/types/alta-player/ielbowguidedatapoint">{"IElbowGuideDataPoint"}</Link>{" point, float score)"}</code> | <span className="api-desc">Creates an `ElbowDataPointScore` from `point` and `score`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-point" /><code><Link to="/mod/game-api/types/alta-player/ielbowguidedatapoint">{"IElbowGuideDataPoint"}</Link>{" Point { get; set; }"}</code> | <span className="api-desc">The data point being scored.</span> |
| <Link id="m-score" /><code>{"float Score { get; set; }"}</code> | <span className="api-desc">Match score from position and rotation difference, divided by the point's weight. Lower is better.</span> |

## Used in

Members of other types that take, return or hold a `ElbowDataPointScore`:

<div className="api-used-in">

[`ElbowController.bestMatches`](/mod/game-api/types/alta-player/elbowcontroller#m-bestmatches).

</div>
