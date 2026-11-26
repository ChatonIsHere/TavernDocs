---
title: "RiverIntersections"
description: "Generation helper that finds where forest edges cross above-ground river paths, marks those edges as water bridges and groups the crossings by location chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverIntersections

A **class** in `Root.Township`, `Alta.Forests`.

Generation helper that finds where forest edges cross above-ground river paths, marks those edges as water bridges and groups the crossings by location chunk.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested types** [`Intersection`](/mod/game-api/types/alta-world-generation/riverintersections-intersection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverIntersections()"}</code> | <span className="api-desc">Creates a `RiverIntersections` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-intersections" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{", List<"}<Link to="/mod/game-api/types/alta-world-generation/riverintersections-intersection">{"RiverIntersections.Intersection"}</Link>{">> intersections"}</code> | <span className="api-desc">Crossings grouped by the location chunk they fall in.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"void Evaluate("}<Link to="/mod/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{" river)"}</code> | <span className="api-desc">Checks every edge of the relevant type against each river path, recording crossings and setting the edge type to `WaterBridge`.</span> |
| <Link id="m-get" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/riverintersections-intersection">{"RiverIntersections.Intersection"}</Link>{"> Get("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Crossings inside the given chunk, or none.</span> |

## Used in

Members of other types that take, return or hold a `RiverIntersections`:

<div className="api-used-in">

[`RiverGenerator.intersections`](/mod/game-api/types/alta-world-generation/rivergenerator#m-intersections), [`RiverGenerator.Intersections`](/mod/game-api/types/alta-world-generation/rivergenerator#m-intersections-2).

</div>
