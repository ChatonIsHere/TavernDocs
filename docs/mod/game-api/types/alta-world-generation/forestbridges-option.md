---
title: "ForestBridges.Option"
description: "One bridge piece ForestBridges can place across a river, with spline settings and a pick weight."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestBridges.Option

A **private class** in `Root.Township`, `Alta.Forests`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One bridge piece `ForestBridges` can place across a river, with spline settings and a pick weight.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`ForestBridges`](/mod/game-api/types/alta-world-generation/forestbridges)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Option()"}</code> | <span className="api-desc">Creates a `ForestBridges.Option` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-display" /><code>{"GameObject display"}</code> | <span className="api-desc">The bridge object. Its `StaticEnvironmentPieceInstance` is used if `piece` is not set.</span> |
| <Link id="m-handleheight" /><code>{"float handleHeight"}</code> | <span className="api-desc">Height added to the spline's middle control points.</span> |
| <Link id="m-handlelength" /><code>{"float handleLength"}</code> | <span className="api-desc">Distance from each end to its spline control point, along the path.</span> |
| <Link id="m-piece" /><code><Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" piece"}</code> | <span className="api-desc">The static environment piece placed along the spline.</span> |
| <Link id="m-startheight" /><code>{"float startHeight"}</code> | <span className="api-desc">Height added to both ends of the bridge.</span> |
| <Link id="m-startoffset" /><code>{"float startOffset"}</code> | <span className="api-desc">Distance each end is pushed back along its path from the river crossing.</span> |
| <Link id="m-weight" /><code>{"float weight"}</code> | <span className="api-desc">Relative chance this option is picked.</span> |

## Used in

Members of other types that take, return or hold a `Option`:

<div className="api-used-in">

[`ForestBridges.options`](/mod/game-api/types/alta-world-generation/forestbridges#m-options).

</div>
