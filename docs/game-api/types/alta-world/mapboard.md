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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<MapBoardSaveData1>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<MapBoardSaveData1>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`MapBoardSaveData1`](/game-api/types/alta-world/mapboardsavedata1)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MapBoard()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activemappieces" /><code>{"private readonly Dictionary<int, "}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"> activeMapPieces"}</code> | Client: map pieces not yet discovered, keyed by piece index. Always empty on headless builds. |
| <Link id="m-handhoverpoint" /><code>{"private "}<Link to="/game-api/types/global-e-h/handhoverpoint">{"HandHoverPoint"}</Link>{" handHoverPoint"}</code> | Hover point players touch to read the board. The server discovers the unlock piece when it's activated. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-map" /><code>{"private "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map"}</code> | The map this board shows. Saved and synced. |
| <Link id="m-positionoffset" /><code>{"private Vector2 positionOffset"}</code> | Offset of the map shown on the board, in pixels of `resolution`. Saved and synced. |
| <Link id="m-resolution" /><code>{"private Vector2 resolution"}</code> | Map image resolution used to turn `positionOffset` into the shader offset. Default 2048 by 2048. |
| <Link id="m-syncboard" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBoard"}</code> | Method sync that sends the board's settings to a joining player. |
| <Link id="m-unlockpieceindex" /><code>{"private int unlockPieceIndex"}</code> | Index of the map piece the board discovers for a player who uses it. Saved and synced. |
| <Link id="m-zoom" /><code>{"private float zoom"}</code> | Zoom of the map on the board, from 1 to 5. Saved and synced. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activemappieces-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"> ActiveMapPieces { get; }"}</code> | Client: map pieces the shared map manager had not discovered when the board was set up. Each is removed when discovered. |
| <Link id="m-map-2" /><code><Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" { get; }"}</code> | The map this board shows. |
| <Link id="m-mapoffsetscale" /><code>{"Vector4 MapOffsetScale { get; }"}</code> | Offset (divided by resolution) and zoom packed into a `Vector4` for the map shader. |
| <Link id="m-resolutionx" /><code>{"float ResolutionX { get; }"}</code> | The board's horizontal resolution (2048 by default), also used to scale `MapOffsetScale`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-setupasclient" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/mapboard">{"MapBoard"}</Link>{"> SetupAsClient"}</code> | Raised on the client once the board has its settings and map pieces. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the board sync message. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: discovers the board's map piece for whoever activates its hand hover point. |
| <Link id="m-interactionstarted" /><code>{"void InteractionStarted("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Discovers the board's unlock piece for the player through the `MapManager`. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the board settings to the joining player. |
| <Link id="m-worldtomapposition" /><code>{"Vector2 WorldToMapPosition(Vector2 worldPosition)"}</code> | Turns a world XZ position into a board position centred on 0, scaled by zoom. |

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-discovermappiece" /><code>{"private void DiscoverMapPiece(int index, "}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{" mapPiece)"}</code> | Client: drops a piece from `activeMapPieces` when the map reports it discovered. |
| <Link id="m-initializeforclient" /><code>{"private void InitializeForClient()"}</code> | Client: after the board sync arrives, lists the undiscovered pieces, listens for discoveries, sets up the hover attract check and raises `SetupAsClient`. |
| <Link id="m-ismapcontentavailable" /><code>{"private bool IsMapContentAvailable()"}</code> | True while this board's unlock piece is still undiscovered for the shared map manager. Drives the hand hover attract effect. |
| <Link id="m-listentomapdiscoveries" /><code>{"private void ListenToMapDiscoveries()"}</code> | Subscribes `DiscoverMapPiece` to the map's `PieceDiscovered` event. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unsubscribes from the map's `PieceDiscovered` event (not on headless builds). |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: logs that the map can't be changed while playing. |
| <Link id="m-setupmap" /><code>{"private void SetupMap()"}</code> | Logs an error if no map is set. Does nothing else. |
| <Link id="m-setupmappiece" /><code>{"private void SetupMapPiece(int index, "}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{" piece)"}</code> | Client: adds one undiscovered piece to `activeMapPieces`. Skipped on headless builds. |
| <Link id="m-setupmappieces" /><code>{"private void SetupMapPieces("}<Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{" mapManager)"}</code> | Adds every piece the map manager hasn't discovered yet to `activeMapPieces`. |
| <Link id="m-syncboard-2" /><code>{"private void SyncBoard("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the map, unlock piece index (0 to 127), offset and zoom. On a client with a local player, reading it runs `InitializeForClient`. |
| <Link id="m-unclampedinverselerp" /><code>{"private static float UnclampedInverseLerp(float a, float b, float value)"}</code> | Inverse lerp that doesn't clamp to 0 to 1, used by `WorldToMapPosition`. |

</details>

## Used in

Members of other types that take, return or hold a `MapBoard`:

[`MapBoardDirectRenderer.mapBoard`](/game-api/types/alta-world/mapboarddirectrenderer#m-mapboard), [`MapLandmarkDisplay.mapBoard`](/game-api/types/alta-world/maplandmarkdisplay#m-mapboard), [`MapLandmarkDisplay.Setup`](/game-api/types/alta-world/maplandmarkdisplay#m-setup).
