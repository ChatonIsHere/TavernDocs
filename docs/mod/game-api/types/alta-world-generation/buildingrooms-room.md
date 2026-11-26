---
title: "BuildingRooms.Room"
description: "Private: one generated room in BuildingRooms, as a grid position and size."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildingRooms.Room

A **private class** in `Root.Township`, `Alta.PAGaC`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private: one generated room in `BuildingRooms`, as a grid position and size.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`BuildingRooms`](/mod/game-api/types/alta-world-generation/buildingrooms)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Room()"}</code> | <span className="api-desc">Creates a `BuildingRooms.Room` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-sizex" /><code>{"int sizeX"}</code> | <span className="api-desc">Width in grid cells.</span> |
| <Link id="m-sizey" /><code>{"int sizeY"}</code> | <span className="api-desc">Height in grid cells.</span> |
| <Link id="m-sizez" /><code>{"int sizeZ"}</code> | <span className="api-desc">Depth in grid cells.</span> |
| <Link id="m-x" /><code>{"int x"}</code> | <span className="api-desc">Grid X position.</span> |
| <Link id="m-y" /><code>{"int y"}</code> | <span className="api-desc">Grid Y position (always 0 when generated).</span> |
| <Link id="m-z" /><code>{"int z"}</code> | <span className="api-desc">Grid Z position.</span> |

## Used in

Members of other types that take, return or hold a `Room`:

<div className="api-used-in">

[`BuildingRooms.rooms`](/mod/game-api/types/alta-world-generation/buildingrooms#m-rooms).

</div>
