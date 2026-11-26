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
| <Link id="m-value" /><code>{"float value"}</code> | The cell's value. Always above zero in the list. |
| <Link id="m-x" /><code>{"int x"}</code> | Cell x index in the chunk. |
| <Link id="m-y" /><code>{"int y"}</code> | Cell y index in the chunk. |
| <Link id="m-z" /><code>{"int z"}</code> | Cell z index in the chunk. |

## Used in

Members of other types that take, return or hold a `Value`:

[`MapChunkLayer.CreateAllNonZeroList`](/mod/game-api/types/alta-world-generation/mapchunklayer#m-createallnonzerolist), [`MapChunkLayer.NonZero`](/mod/game-api/types/alta-world-generation/mapchunklayer#m-nonzero), [`CavePopulationSpawnInformation.points`](/mod/game-api/types/alta-world-generation/cavepopulationspawninformation#m-points).
