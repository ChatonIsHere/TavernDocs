---
title: "RiverIntersections.Intersection"
description: "One place where a forest edge crosses a river path."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverIntersections.Intersection

A **class** in `Root.Township`, `Alta.Forests`.

One place where a forest edge crosses a river path.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`RiverIntersections`](/mod/game-api/types/alta-world-generation/riverintersections)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Intersection()"}</code> | Creates a `RiverIntersections.Intersection` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-edge" /><code><Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge"}</code> | The forest edge crossing the river. |
| <Link id="m-pathprogress" /><code>{"float pathProgress"}</code> | How far along the edge the crossing is, from 0 to 1. |
| <Link id="m-river" /><code><Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" river"}</code> | The river path that is crossed. |
| <Link id="m-riverprogress" /><code>{"float riverProgress"}</code> | How far along the river path the crossing is, from 0 to 1. |

## Used in

Members of other types that take, return or hold a `Intersection`:

[`RiverIntersections.Get`](/mod/game-api/types/alta-world-generation/riverintersections#m-get), [`RiverIntersections.intersections`](/mod/game-api/types/alta-world-generation/riverintersections#m-intersections).
