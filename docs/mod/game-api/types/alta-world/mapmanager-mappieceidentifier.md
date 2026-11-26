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
| <Link id="m-ctor" /><code>{"MapPieceIdentifier("}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" map, int index)"}</code> | <span className="api-desc">Creates a `MapManager.MapPieceIdentifier` from `map` and `index`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"int index"}</code> | <span className="api-desc">Index of the piece within the map's pieces.</span> |
| <Link id="m-map" /><code><Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" map"}</code> | <span className="api-desc">The map the piece belongs to.</span> |

## Used in

Members of other types that take, return or hold a `MapPieceIdentifier`:

<div className="api-used-in">

[`MapManager.syncPieceDiscovery`](/mod/game-api/types/alta-world/mapmanager#m-syncpiecediscovery), [`MapManager.SyncPieceDiscovery`](/mod/game-api/types/alta-world/mapmanager#m-syncpiecediscovery-2).

</div>
