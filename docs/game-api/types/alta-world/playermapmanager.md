---
title: "PlayerMapManager"
description: "One player's discovered pieces. IsThisMapPieceDiscovered(Map, int), GetUndiscoveredMapPieces(Map), DiscoverPiece(Map, int)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerMapManager

A **class** in `Root.Township`, `Alta.Map`.

One player's discovered pieces. `IsThisMapPieceDiscovered(Map, int)`, `GetUndiscoveredMapPieces(Map)`, `DiscoverPiece(Map, int)`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Documented in** [Map and landmarks](/game-api/world/map-and-landmarks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerMapManager()"}</code> |  |
| <Link id="m-ctor-2" /><code>{"PlayerMapManager("}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> |  |
| <Link id="m-ctor-3" /><code>{"PlayerMapManager("}<Link to="/game-api/types/alta-world/mapsaveformat">{"MapSaveFormat"}</Link>{" save)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-file" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-save" /><code>{"private "}<Link to="/game-api/types/alta-world/mapsaveformat">{"MapSaveFormat"}</Link>{" save"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-discoverpiece" /><code>{"bool DiscoverPiece("}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map, int pieceIndex)"}</code> |  |
| <Link id="m-getundiscoveredmappieces" /><code>{"IEnumerable<int> GetUndiscoveredMapPieces("}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map) (iterator)"}</code> |  |
| <Link id="m-isthismappiecediscovered" /><code>{"bool IsThisMapPieceDiscovered("}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map, int pieceIndex)"}</code> |  |
| <Link id="m-syncmapmanager" /><code>{"void SyncMapManager("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-serializemap" /><code>{"private void SerializeMap("}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerMapManager`:

[`MapBoard.SetupMapPieces`](/game-api/types/alta-world/mapboard#m-setupmappieces), [`MapManager.GetMapManager`](/game-api/types/alta-world/mapmanager#m-getmapmanager), [`MapManager.GetSharedManager`](/game-api/types/alta-world/mapmanager#m-getsharedmanager), [`MapManager.managers`](/game-api/types/alta-world/mapmanager#m-managers), [`MapManager.SetupPlayer`](/game-api/types/alta-world/mapmanager#m-setupplayer), [`MapManager.singleManager`](/game-api/types/alta-world/mapmanager#m-singlemanager), [`MapManager.syncMapManager`](/game-api/types/alta-world/mapmanager#m-syncmapmanager), [`MapManager.SyncMapManager`](/game-api/types/alta-world/mapmanager#m-syncmapmanager-2).
