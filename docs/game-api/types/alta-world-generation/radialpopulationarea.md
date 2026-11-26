---
title: "RadialPopulationArea"
description: "Point evaluator that finds a ground point by raycasting down at a random spot within a radius of its transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RadialPopulationArea

A **class** in `Root.Township`, `Alta.Populations`.

Point evaluator that finds a ground point by raycasting down at a random spot within a radius of its transform.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IPointNormalEvaluator`](/game-api/types/alta-world-generation/ipointnormalevaluator)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RadialPopulationArea()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedposition" /><code>{"private Vector3 cachedPosition"}</code> | The transform position read at the start of `GetPoint`. |
| <Link id="m-existing" /><code>{"private List<Vector2> existing"}</code> | Offsets picked so far, used for the minimum distance check. Never cleared. |
| <Link id="m-iterationattempts" /><code>{"private int iterationAttempts"}</code> | How many spots to try before giving up. |
| <Link id="m-minimumdistancefromexisting" /><code>{"private float minimumDistanceFromExisting"}</code> | Minimum distance from earlier picks. Zero or less turns the check off. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Search radius in metres. Picks cluster toward the centre. |
| <Link id="m-raycasttest" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationraycast">{"PopulationRaycast"}</Link>{" raycastTest"}</code> | The raycast settings used to find the ground. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpoint" /><code><Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? GetPoint()"}</code> | Tries up to `iterationAttempts` random spots. Returns null at once if a spot is too close to an earlier one. |
