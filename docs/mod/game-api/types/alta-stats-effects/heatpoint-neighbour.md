---
title: "HeatPoint.Neighbour"
description: "A heat point this one conducts heat to every fixed update, set up in the Inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatPoint.Neighbour

A **class** in `Root.Township`, `Alta.Heat`.

A heat point this one conducts heat to every fixed update, set up in the Inspector.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`HeatPoint`](/mod/game-api/types/alta-stats-effects/heatpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Neighbour()"}</code> | <span className="api-desc">Creates a `HeatPoint.Neighbour` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancemultiplier" /><code>{"private float distanceMultiplier"}</code> | <span className="api-desc">Backing field for `DistanceMultiplier`.</span> |
| <Link id="m-point" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point"}</code> | <span className="api-desc">Backing field for `Point`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distancemultiplier-2" /><code>{"float DistanceMultiplier { get; }"}</code> | <span className="api-desc">Weight passed to `ConductTo` for this neighbour. Defaults to 1.</span> |
| <Link id="m-point-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" Point { get; }"}</code> | <span className="api-desc">The neighbouring heat point.</span> |

## Used in

Members of other types that take, return or hold a `Neighbour`:

<div className="api-used-in">

[`HeatPoint.neighbours`](/mod/game-api/types/alta-stats-effects/heatpoint#m-neighbours).

</div>
