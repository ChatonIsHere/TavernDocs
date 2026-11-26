---
title: "Line"
description: "A line segment between two world points."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Line

A **struct** in `Root.Township`, `Alta.Utilities`.

A line segment between two world points.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Line(Vector3 from, Vector3 to)"}</code> | <span className="api-desc">Creates a `Line` from `from` and `to`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"Vector3 From { get; }"}</code> | <span className="api-desc">Start point.</span> |
| <Link id="m-to" /><code>{"Vector3 To { get; }"}</code> | <span className="api-desc">End point.</span> |

## Used in

Members of other types that take, return or hold a `Line`:

<div className="api-used-in">

[`GeometryHelperMethods.AreIntersecting`](/mod/game-api/types/alta-utilities/geometryhelpermethods#m-areintersecting), [`GeometryHelperMethods.IntersectionOrientation`](/mod/game-api/types/alta-utilities/geometryhelpermethods#m-intersectionorientation), [`GeometryHelperMethods.IsColinearPointOnLine`](/mod/game-api/types/alta-utilities/geometryhelpermethods#m-iscolinearpointonline).

</div>
