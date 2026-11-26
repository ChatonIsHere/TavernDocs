---
title: "MapManager.MapPieceIdentifier"
description: "A map plus a piece index."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapManager.MapPieceIdentifier

A **private struct** in `Root.Township`, `Alta.Map`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A map plus a piece index. The message payload `MapManager` sends when a player discovers a map piece, to chunks for a shared map or to that player otherwise.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Nested in** [`MapManager`](/mod/game-api/types/alta-world/mapmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapPieceIdentifier("}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" map, int index)"}</code> | Creates a `MapManager.MapPieceIdentifier` from `map` and `index`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"int index"}</code> | Index of the piece within the map's pieces. |
| <Link id="m-map" /><code><Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" map"}</code> | The map the piece belongs to. |

## Used in

Members of other types that take, return or hold a `MapPieceIdentifier`:

[`MapManager.syncPieceDiscovery`](/mod/game-api/types/alta-world/mapmanager#m-syncpiecediscovery), [`MapManager.SyncPieceDiscovery`](/mod/game-api/types/alta-world/mapmanager#m-syncpiecediscovery-2).
