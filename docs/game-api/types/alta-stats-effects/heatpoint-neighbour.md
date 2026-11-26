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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`HeatPoint`](/game-api/types/alta-stats-effects/heatpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Neighbour()"}</code> | Creates a `HeatPoint.Neighbour` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-distancemultiplier" /><code>{"private float distanceMultiplier"}</code> | Backing field for `DistanceMultiplier`. |
| <Link id="m-point" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point"}</code> | Backing field for `Point`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distancemultiplier-2" /><code>{"float DistanceMultiplier { get; }"}</code> | Weight passed to `ConductTo` for this neighbour. Defaults to 1. |
| <Link id="m-point-2" /><code><Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" Point { get; }"}</code> | The neighbouring heat point. |

## Used in

Members of other types that take, return or hold a `Neighbour`:

[`HeatPoint.neighbours`](/game-api/types/alta-stats-effects/heatpoint#m-neighbours).
