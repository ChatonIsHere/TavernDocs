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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`ForestCliffEvaluator`](/game-api/types/alta-world-generation/forestcliffevaluator)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CliffPoint(List<"}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{"> cliff, int pathIndex, Vector3 point, Vector2 direction, float height, float ray)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cliff" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{"> cliff"}</code> | The chain of paths that make up this cliff. |
| <Link id="m-direction" /><code>{"Vector2 direction"}</code> | Flat direction facing out from the cliff at this point. |
| <Link id="m-height" /><code>{"float height"}</code> | Height drop of the cliff at this point. |
| <Link id="m-pathindex" /><code>{"int pathIndex"}</code> | Index of the path in `cliff` this point lies on. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | World position of the sample. |
| <Link id="m-ray" /><code>{"float ray"}</code> | Horizontal width of the cliff slope at this point. |

## Used in

Members of other types that take, return or hold a `CliffPoint`:

[`ForestCliffEvaluator.cliffPoints`](/game-api/types/alta-world-generation/forestcliffevaluator#m-cliffpoints), [`ForestCliffEvaluator.Points`](/game-api/types/alta-world-generation/forestcliffevaluator#m-points).
