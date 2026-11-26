---
title: "PlayerMapManager"
description: "Map discovery state for one player (or the shared map): which pieces of each Map are uncovered."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerMapManager

A **class** in `Root.Township`, `Alta.Map`.

Map discovery state for one player (or the shared map): which pieces of each `Map` are uncovered. Kept by `MapManager` and saved in the player's map file.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Documented in** [Map and landmarks](/game-api/world/map-and-landmarks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerMapManager()"}</code> | Creates a `PlayerMapManager` from `save`. |
| <Link id="m-ctor-2" /><code>{"PlayerMapManager("}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | Creates a `PlayerMapManager` from `save`. |
| <Link id="m-ctor-3" /><code>{"PlayerMapManager("}<Link to="/game-api/types/alta-world/mapsaveformat">{"MapSaveFormat"}</Link>{" save)"}</code> | Creates a `PlayerMapManager` from `save`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-file" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file"}</code> | The player's map save file. Server: written after a piece is discovered. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-save" /><code>{"private "}<Link to="/game-api/types/alta-world/mapsaveformat">{"MapSaveFormat"}</Link>{" save"}</code> | Per-map piece states. True means the piece is still undiscovered. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-discoverpiece" /><code>{"bool DiscoverPiece("}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map, int pieceIndex)"}</code> | Marks a piece discovered and tells the map. Returns false if it already was. The server then saves the file. |
| <Link id="m-getundiscoveredmappieces" /><code>{"IEnumerable<int> GetUndiscoveredMapPieces("}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map) (iterator)"}</code> | Indexes of the pieces not yet discovered on the map. |
| <Link id="m-isthismappiecediscovered" /><code>{"bool IsThisMapPieceDiscovered("}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map, int pieceIndex)"}</code> | True if the piece has been discovered. |
| <Link id="m-syncmapmanager" /><code>{"void SyncMapManager("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the discovery flags of every map. `MapManager` sends it to each player when they connect. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serializemap" /><code>{"private void SerializeMap("}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs one map's piece states as one bool per piece. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerMapManager`:

[`MapBoard.SetupMapPieces`](/game-api/types/alta-world/mapboard#m-setupmappieces), [`MapManager.GetMapManager`](/game-api/types/alta-world/mapmanager#m-getmapmanager), [`MapManager.GetSharedManager`](/game-api/types/alta-world/mapmanager#m-getsharedmanager), [`MapManager.managers`](/game-api/types/alta-world/mapmanager#m-managers), [`MapManager.SetupPlayer`](/game-api/types/alta-world/mapmanager#m-setupplayer), [`MapManager.singleManager`](/game-api/types/alta-world/mapmanager#m-singlemanager), [`MapManager.syncMapManager`](/game-api/types/alta-world/mapmanager#m-syncmapmanager), [`MapManager.SyncMapManager`](/game-api/types/alta-world/mapmanager#m-syncmapmanager-2).
