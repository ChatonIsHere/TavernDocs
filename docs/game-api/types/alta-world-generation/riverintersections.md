---
title: "RiverIntersections"
description: "class RiverIntersections in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverIntersections

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested types** [`Intersection`](/game-api/types/alta-world-generation/riverintersections-intersection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverIntersections()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-intersections" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{", List<"}<Link to="/game-api/types/alta-world-generation/riverintersections-intersection">{"RiverIntersections.Intersection"}</Link>{">> intersections"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"void Evaluate("}<Link to="/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{" river)"}</code> |  |
| <Link id="m-get" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/riverintersections-intersection">{"RiverIntersections.Intersection"}</Link>{"> Get("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |

## Used in

Members of other types that take, return or hold a `RiverIntersections`:

[`RiverGenerator.intersections`](/game-api/types/alta-world-generation/rivergenerator#m-intersections), [`RiverGenerator.Intersections`](/game-api/types/alta-world-generation/rivergenerator#m-intersections-2).
