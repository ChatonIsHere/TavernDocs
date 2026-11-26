---
title: "MapChunkLayer.Value"
description: "One non-zero cell of a cave map chunk layer, with its coordinates."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapChunkLayer.Value

A **struct** in `Root.Township`, `Alta.Caves`.

One non-zero cell of a cave map chunk layer, with its coordinates. Made by `MapChunkLayer.CreateAllNonZeroList`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`MapChunkLayer`](/mod/game-api/types/alta-world-generation/mapchunklayer)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"float value"}</code> | <span className="api-desc">The cell's value. Always above zero in the list.</span> |
| <Link id="m-x" /><code>{"int x"}</code> | <span className="api-desc">Cell x index in the chunk.</span> |
| <Link id="m-y" /><code>{"int y"}</code> | <span className="api-desc">Cell y index in the chunk.</span> |
| <Link id="m-z" /><code>{"int z"}</code> | <span className="api-desc">Cell z index in the chunk.</span> |

## Used in

Members of other types that take, return or hold a `Value`:

<div className="api-used-in">

[`MapChunkLayer.CreateAllNonZeroList`](/mod/game-api/types/alta-world-generation/mapchunklayer#m-createallnonzerolist), [`MapChunkLayer.NonZero`](/mod/game-api/types/alta-world-generation/mapchunklayer#m-nonzero), [`CavePopulationSpawnInformation.points`](/mod/game-api/types/alta-world-generation/cavepopulationspawninformation#m-points).

</div>
