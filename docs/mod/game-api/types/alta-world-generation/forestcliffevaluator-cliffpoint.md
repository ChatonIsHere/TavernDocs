---
title: "ForestCliffEvaluator.CliffPoint"
description: "A sample point along a cliff found during forest generation, stepped along each cliff path at a fixed spacing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestCliffEvaluator.CliffPoint

A **struct** in `Root.Township`, `Alta.Forests`.

A sample point along a cliff found during forest generation, stepped along each cliff path at a fixed spacing.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`ForestCliffEvaluator`](/mod/game-api/types/alta-world-generation/forestcliffevaluator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CliffPoint(List<"}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{"> cliff, int pathIndex, Vector3 point, Vector2 direction, float height, float ray)"}</code> | <span className="api-desc">Creates a `ForestCliffEvaluator.CliffPoint` from `cliff`, `pathIndex`, `point`, `direction`, `height` and `ray`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cliff" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{"> cliff"}</code> | <span className="api-desc">The chain of paths that make up this cliff.</span> |
| <Link id="m-direction" /><code>{"Vector2 direction"}</code> | <span className="api-desc">Flat direction facing out from the cliff at this point.</span> |
| <Link id="m-height" /><code>{"float height"}</code> | <span className="api-desc">Height drop of the cliff at this point.</span> |
| <Link id="m-pathindex" /><code>{"int pathIndex"}</code> | <span className="api-desc">Index of the path in `cliff` this point lies on.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">World position of the sample.</span> |
| <Link id="m-ray" /><code>{"float ray"}</code> | <span className="api-desc">Horizontal width of the cliff slope at this point.</span> |

## Used in

Members of other types that take, return or hold a `CliffPoint`:

<div className="api-used-in">

[`ForestCliffEvaluator.cliffPoints`](/mod/game-api/types/alta-world-generation/forestcliffevaluator#m-cliffpoints), [`ForestCliffEvaluator.Points`](/mod/game-api/types/alta-world-generation/forestcliffevaluator#m-points).

</div>
