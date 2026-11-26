---
title: "GeometryHelperMethods.Orientation"
description: "Turn direction of three points (collinear, clockwise or anticlockwise), used by the line intersection helpers in GeometryHelperMethods."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeometryHelperMethods.Orientation

An **private enum** in `Root.Township`, `Alta.Utilities`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Turn direction of three points (collinear, clockwise or anticlockwise), used by the line intersection helpers in `GeometryHelperMethods`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Nested in** [`GeometryHelperMethods`](/mod/game-api/types/alta-utilities/geometryhelpermethods)

## Values

| Member |
| --- |
| <Link id="m-anticlockwise" /><code>{"AntiClockwise = 2"}</code> |
| <Link id="m-clockwise" /><code>{"Clockwise = 1"}</code> |
| <Link id="m-collinear" /><code>{"Collinear = 0"}</code> |

## Used in

Members of other types that take, return or hold a `Orientation`:

<div className="api-used-in">

[`GeometryHelperMethods.IntersectionOrientation`](/mod/game-api/types/alta-utilities/geometryhelpermethods#m-intersectionorientation).

</div>
