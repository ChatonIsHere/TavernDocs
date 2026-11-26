---
title: "MapBoardSaveData1"
description: "Save data (version 1, the current one) for MapBoard, the in-world map board."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapBoardSaveData1

A **class** in `Root.Township`, `Alta.Map`.

Save data (version 1, the current one) for `MapBoard`, the in-world map board.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NewSaveData<MapBoard, MapBoardSaveData1>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`MapBoard`](/mod/game-api/types/alta-world/mapboard), [`MapBoardSaveData1`](/mod/game-api/types/alta-world/mapboardsavedata1)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapBoardSaveData1()"}</code> | <span className="api-desc">Creates a `MapBoardSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-map" /><code><Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" map"}</code> | <span className="api-desc">Which `Map` asset the board shows.</span> |
| <Link id="m-positionoffset" /><code>{"Vector2 positionOffset"}</code> | <span className="api-desc">Offset of the shown area on the map, in map pixels.</span> |
| <Link id="m-unlockpieceindex" /><code>{"int unlockPieceIndex"}</code> | <span className="api-desc">The map piece a player discovers when they interact with the board.</span> |
| <Link id="m-zoom" /><code>{"float zoom"}</code> | <span className="api-desc">Zoom of the shown area.</span> |
