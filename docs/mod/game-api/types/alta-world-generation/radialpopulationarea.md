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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IPointNormalEvaluator`](/mod/game-api/types/alta-world-generation/ipointnormalevaluator)
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RadialPopulationArea()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedposition" /><code>{"private Vector3 cachedPosition"}</code> | <span className="api-desc">The transform position read at the start of `GetPoint`.</span> |
| <Link id="m-existing" /><code>{"private List<Vector2> existing"}</code> | <span className="api-desc">Offsets picked so far, used for the minimum distance check. Never cleared.</span> |
| <Link id="m-iterationattempts" /><code>{"private int iterationAttempts"}</code> | <span className="api-desc">How many spots to try before giving up.</span> |
| <Link id="m-minimumdistancefromexisting" /><code>{"private float minimumDistanceFromExisting"}</code> | <span className="api-desc">Minimum distance from earlier picks. Zero or less turns the check off.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Search radius in metres. Picks cluster toward the centre.</span> |
| <Link id="m-raycasttest" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationraycast">{"PopulationRaycast"}</Link>{" raycastTest"}</code> | <span className="api-desc">The raycast settings used to find the ground.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpoint" /><code><Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? GetPoint()"}</code> | <span className="api-desc">Tries up to `iterationAttempts` random spots. Returns null at once if a spot is too close to an earlier one.</span> |
