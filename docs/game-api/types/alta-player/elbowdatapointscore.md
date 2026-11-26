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

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ElbowDataPointScore("}<Link to="/game-api/types/alta-player/ielbowguidedatapoint">{"IElbowGuideDataPoint"}</Link>{" point, float score)"}</code> | Creates an `ElbowDataPointScore` from `point` and `score`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-point" /><code><Link to="/game-api/types/alta-player/ielbowguidedatapoint">{"IElbowGuideDataPoint"}</Link>{" Point { get; set; }"}</code> | The data point being scored. |
| <Link id="m-score" /><code>{"float Score { get; set; }"}</code> | Match score from position and rotation difference, divided by the point's weight. Lower is better. |

## Used in

Members of other types that take, return or hold a `ElbowDataPointScore`:

[`ElbowController.bestMatches`](/game-api/types/alta-player/elbowcontroller#m-bestmatches).
