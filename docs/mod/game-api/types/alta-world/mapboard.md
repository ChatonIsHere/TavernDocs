---
title: "MapBoard"
description: "A board in the world that shows a map and, when a player touches its hover point, reveals one map piece for them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapBoard

A **class** in `Root.Township`, `Alta.Map`.

A board in the world that shows a map and, when a player touches its hover point, reveals one map piece for them. The server saves which map, piece, offset and zoom; clients get them synced.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<MapBoardSaveData1>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<MapBoardSaveData1>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`MapBoardSaveData1`](/mod/game-api/types/alta-world/mapboardsavedata1)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activemappieces" /><code>{"private readonly Dictionary<int, "}<Link to="/mod/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"> activeMapPieces"}</code> | <span className="api-desc">Client: map pieces not yet discovered, keyed by piece index. Always empty on headless builds.</span> |
| <Link id="m-handhoverpoint" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handhoverpoint">{"HandHoverPoint"}</Link>{" handHoverPoint"}</code> | <span className="api-desc">Hover point players touch to read the board. The server discovers the unlock piece when it's activated.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-map" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" map"}</code> | <span className="api-desc">The map this board shows. Saved and synced.</span> |
| <Link id="m-positionoffset" /><code>{"private Vector2 positionOffset"}</code> | <span className="api-desc">Offset of the map shown on the board, in pixels of `resolution`. Saved and synced.</span> |
| <Link id="m-resolution" /><code>{"private Vector2 resolution"}</code> | <span className="api-desc">Map image resolution used to turn `positionOffset` into the shader offset. Default 2048 by 2048.</span> |
| <Link id="m-syncboard" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBoard"}</code> | <span className="api-desc">Method sync that sends the board's settings to a joining player.</span> |
| <Link id="m-unlockpieceindex" /><code>{"private int unlockPieceIndex"}</code> | <span className="api-desc">Index of the map piece the board discovers for a player who uses it. Saved and synced.</span> |
| <Link id="m-zoom" /><code>{"private float zoom"}</code> | <span className="api-desc">Zoom of the map on the board, from 1 to 5. Saved and synced.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activemappieces-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"> ActiveMapPieces { get; }"}</code> | <span className="api-desc">Client: map pieces the shared map manager had not discovered when the board was set up. Each is removed when discovered.</span> |
| <Link id="m-map-2" /><code><Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" { get; }"}</code> | <span className="api-desc">The map this board shows.</span> |
| <Link id="m-mapoffsetscale" /><code>{"Vector4 MapOffsetScale { get; }"}</code> | <span className="api-desc">Offset (divided by resolution) and zoom packed into a `Vector4` for the map shader.</span> |
| <Link id="m-resolutionx" /><code>{"float ResolutionX { get; }"}</code> | <span className="api-desc">The board's horizontal resolution (2048 by default), also used to scale `MapOffsetScale`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-setupasclient" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-world/mapboard">{"MapBoard"}</Link>{"> SetupAsClient"}</code> | <span className="api-desc">Raised on the client once the board has its settings and map pieces.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the board sync message.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: discovers the board's map piece for whoever activates its hand hover point.</span> |
| <Link id="m-interactionstarted" /><code>{"void InteractionStarted("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Discovers the board's unlock piece for the player through the `MapManager`.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the board settings to the joining player.</span> |
| <Link id="m-worldtomapposition" /><code>{"Vector2 WorldToMapPosition(Vector2 worldPosition)"}</code> | <span className="api-desc">Turns a world XZ position into a board position centred on 0, scaled by zoom.</span> |

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-discovermappiece" /><code>{"private void DiscoverMapPiece(int index, "}<Link to="/mod/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{" mapPiece)"}</code> | <span className="api-desc">Client: drops a piece from `activeMapPieces` when the map reports it discovered.</span> |
| <Link id="m-initializeforclient" /><code>{"private void InitializeForClient()"}</code> | <span className="api-desc">Client: after the board sync arrives, lists the undiscovered pieces, listens for discoveries, sets up the hover attract check and raises `SetupAsClient`.</span> |
| <Link id="m-ismapcontentavailable" /><code>{"private bool IsMapContentAvailable()"}</code> | <span className="api-desc">True while this board's unlock piece is still undiscovered for the shared map manager. Drives the hand hover attract effect.</span> |
| <Link id="m-listentomapdiscoveries" /><code>{"private void ListenToMapDiscoveries()"}</code> | <span className="api-desc">Subscribes `DiscoverMapPiece` to the map's `PieceDiscovered` event.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unsubscribes from the map's `PieceDiscovered` event (not on headless builds).</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: logs that the map can't be changed while playing.</span> |
| <Link id="m-setupmap" /><code>{"private void SetupMap()"}</code> | <span className="api-desc">Logs an error if no map is set. Does nothing else.</span> |
| <Link id="m-setupmappiece" /><code>{"private void SetupMapPiece(int index, "}<Link to="/mod/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{" piece)"}</code> | <span className="api-desc">Client: adds one undiscovered piece to `activeMapPieces`. Skipped on headless builds.</span> |
| <Link id="m-setupmappieces" /><code>{"private void SetupMapPieces("}<Link to="/mod/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{" mapManager)"}</code> | <span className="api-desc">Adds every piece the map manager hasn't discovered yet to `activeMapPieces`.</span> |
| <Link id="m-syncboard-2" /><code>{"private void SyncBoard("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the map, unlock piece index (0 to 127), offset and zoom. On a client with a local player, reading it runs `InitializeForClient`.</span> |
| <Link id="m-unclampedinverselerp" /><code>{"private static float UnclampedInverseLerp(float a, float b, float value)"}</code> | <span className="api-desc">Inverse lerp that doesn't clamp to 0 to 1, used by `WorldToMapPosition`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MapBoard`:

<div className="api-used-in">

[`MapBoardDirectRenderer.mapBoard`](/mod/game-api/types/alta-world/mapboarddirectrenderer#m-mapboard), [`MapLandmarkDisplay.mapBoard`](/mod/game-api/types/alta-world/maplandmarkdisplay#m-mapboard), [`MapLandmarkDisplay.Setup`](/mod/game-api/types/alta-world/maplandmarkdisplay#m-setup).

</div>
