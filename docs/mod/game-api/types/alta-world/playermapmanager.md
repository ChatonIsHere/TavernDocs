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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Documented in** [Map and landmarks](/mod/game-api/world/map-and-landmarks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerMapManager()"}</code> | <span className="api-desc">Creates a `PlayerMapManager` from `save`.</span> |
| <Link id="m-ctor-2" /><code>{"PlayerMapManager("}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file)"}</code> | <span className="api-desc">Creates a `PlayerMapManager` from `save`.</span> |
| <Link id="m-ctor-3" /><code>{"PlayerMapManager("}<Link to="/mod/game-api/types/alta-world/mapsaveformat">{"MapSaveFormat"}</Link>{" save)"}</code> | <span className="api-desc">Creates a `PlayerMapManager` from `save`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-file" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" file"}</code> | <span className="api-desc">The player's map save file. Server: written after a piece is discovered.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-save" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/mapsaveformat">{"MapSaveFormat"}</Link>{" save"}</code> | <span className="api-desc">Per-map piece states. True means the piece is still undiscovered.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-discoverpiece" /><code>{"bool DiscoverPiece("}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" map, int pieceIndex)"}</code> | <span className="api-desc">Marks a piece discovered and tells the map. Returns false if it already was. The server then saves the file.</span> |
| <Link id="m-getundiscoveredmappieces" /><code>{"IEnumerable<int> GetUndiscoveredMapPieces("}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" map) (iterator)"}</code> | <span className="api-desc">Indexes of the pieces not yet discovered on the map.</span> |
| <Link id="m-isthismappiecediscovered" /><code>{"bool IsThisMapPieceDiscovered("}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" map, int pieceIndex)"}</code> | <span className="api-desc">True if the piece has been discovered.</span> |
| <Link id="m-syncmapmanager" /><code>{"void SyncMapManager("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the discovery flags of every map. `MapManager` sends it to each player when they connect.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serializemap" /><code>{"private void SerializeMap("}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" map, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs one map's piece states as one bool per piece.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerMapManager`:

<div className="api-used-in">

[`MapBoard.SetupMapPieces`](/mod/game-api/types/alta-world/mapboard#m-setupmappieces), [`MapManager.GetMapManager`](/mod/game-api/types/alta-world/mapmanager#m-getmapmanager), [`MapManager.GetSharedManager`](/mod/game-api/types/alta-world/mapmanager#m-getsharedmanager), [`MapManager.managers`](/mod/game-api/types/alta-world/mapmanager#m-managers), [`MapManager.SetupPlayer`](/mod/game-api/types/alta-world/mapmanager#m-setupplayer), [`MapManager.singleManager`](/mod/game-api/types/alta-world/mapmanager#m-singlemanager), [`MapManager.syncMapManager`](/mod/game-api/types/alta-world/mapmanager#m-syncmapmanager), [`MapManager.SyncMapManager`](/mod/game-api/types/alta-world/mapmanager#m-syncmapmanager-2).

</div>
