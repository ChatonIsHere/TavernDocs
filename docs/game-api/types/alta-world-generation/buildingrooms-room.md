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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`BuildingRooms`](/game-api/types/alta-world-generation/buildingrooms)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Room()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-sizex" /><code>{"int sizeX"}</code> | Width in grid cells. |
| <Link id="m-sizey" /><code>{"int sizeY"}</code> | Height in grid cells. |
| <Link id="m-sizez" /><code>{"int sizeZ"}</code> | Depth in grid cells. |
| <Link id="m-x" /><code>{"int x"}</code> | Grid X position. |
| <Link id="m-y" /><code>{"int y"}</code> | Grid Y position (always 0 when generated). |
| <Link id="m-z" /><code>{"int z"}</code> | Grid Z position. |

## Used in

Members of other types that take, return or hold a `Room`:

[`BuildingRooms.rooms`](/game-api/types/alta-world-generation/buildingrooms#m-rooms).
