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
| <Link id="m-ctor" /><code>{"Option()"}</code> | Creates a `ForestBridges.Option` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-display" /><code>{"GameObject display"}</code> | The bridge object. Its `StaticEnvironmentPieceInstance` is used if `piece` is not set. |
| <Link id="m-handleheight" /><code>{"float handleHeight"}</code> | Height added to the spline's middle control points. |
| <Link id="m-handlelength" /><code>{"float handleLength"}</code> | Distance from each end to its spline control point, along the path. |
| <Link id="m-piece" /><code><Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" piece"}</code> | The static environment piece placed along the spline. |
| <Link id="m-startheight" /><code>{"float startHeight"}</code> | Height added to both ends of the bridge. |
| <Link id="m-startoffset" /><code>{"float startOffset"}</code> | Distance each end is pushed back along its path from the river crossing. |
| <Link id="m-weight" /><code>{"float weight"}</code> | Relative chance this option is picked. |

## Used in

Members of other types that take, return or hold a `Option`:

[`ForestBridges.options`](/mod/game-api/types/alta-world-generation/forestbridges#m-options).
