---
title: "BoughtSkillVisualizer.PositionMachine"
description: "Private helper in BoughtSkillVisualizer that spaces a number of points evenly around a circle, facing the transform's forward axis."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoughtSkillVisualizer.PositionMachine

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private helper in `BoughtSkillVisualizer` that spaces a number of points evenly around a circle, facing the transform's forward axis.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Nested in** [`BoughtSkillVisualizer`](/mod/game-api/types/global-a-b/boughtskillvisualizer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionMachine(Transform transform, int instancesCount, float radius)"}</code> | <span className="api-desc">Creates a `BoughtSkillVisualizer.PositionMachine` from `transform`, `instancesCount` and `radius`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentposition" /><code>{"private readonly Vector3 currentPosition"}</code> | <span className="api-desc">Centre of the circle (the transform's position when made).</span> |
| <Link id="m-forwardaxis" /><code>{"private readonly Vector3 forwardAxis"}</code> | <span className="api-desc">Axis the circle turns around.</span> |
| <Link id="m-instancescount" /><code>{"private readonly int instancesCount"}</code> | <span className="api-desc">Number of points.</span> |
| <Link id="m-startposition" /><code>{"private readonly Vector3 startPosition"}</code> | <span className="api-desc">Offset of the first point from the centre (radius along the flipped up axis).</span> |
| <Link id="m-step" /><code>{"private readonly float step"}</code> | <span className="api-desc">Degrees between points.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"Vector3 GetPosition(int index)"}</code> | <span className="api-desc">World position of the point at an index.</span> |
| <Link id="m-getpositions" /><code>{"IEnumerable<Vector3> GetPositions() (iterator)"}</code> | <span className="api-desc">All the points in order.</span> |
