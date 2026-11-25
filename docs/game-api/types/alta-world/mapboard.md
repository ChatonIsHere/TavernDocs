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

| Member |
| --- |
| <Link id="m-activemappieces" /><code>{"private readonly Dictionary<int, "}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"> activeMapPieces"}</code> |
| <Link id="m-handhoverpoint" /><code>{"private "}<Link to="/game-api/types/global-e-h/handhoverpoint">{"HandHoverPoint"}</Link>{" handHoverPoint"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-map" /><code>{"private "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map"}</code> |
| <Link id="m-positionoffset" /><code>{"private Vector2 positionOffset"}</code> |
| <Link id="m-resolution" /><code>{"private Vector2 resolution"}</code> |
| <Link id="m-syncboard" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBoard"}</code> |
| <Link id="m-unlockpieceindex" /><code>{"private int unlockPieceIndex"}</code> |
| <Link id="m-zoom" /><code>{"private float zoom"}</code> |

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

| Member |
| --- |
| <Link id="m-discovermappiece" /><code>{"private void DiscoverMapPiece(int index, "}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{" mapPiece)"}</code> |
| <Link id="m-initializeforclient" /><code>{"private void InitializeForClient()"}</code> |
| <Link id="m-ismapcontentavailable" /><code>{"private bool IsMapContentAvailable()"}</code> |
| <Link id="m-listentomapdiscoveries" /><code>{"private void ListenToMapDiscoveries()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-setupmap" /><code>{"private void SetupMap()"}</code> |
| <Link id="m-setupmappiece" /><code>{"private void SetupMapPiece(int index, "}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{" piece)"}</code> |
| <Link id="m-setupmappieces" /><code>{"private void SetupMapPieces("}<Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{" mapManager)"}</code> |
| <Link id="m-syncboard-2" /><code>{"private void SyncBoard("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-unclampedinverselerp" /><code>{"private static float UnclampedInverseLerp(float a, float b, float value)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `MapBoard`:

[`MapBoardDirectRenderer.mapBoard`](/game-api/types/alta-world/mapboarddirectrenderer#m-mapboard), [`MapLandmarkDisplay.mapBoard`](/game-api/types/alta-world/maplandmarkdisplay#m-mapboard), [`MapLandmarkDisplay.Setup`](/game-api/types/alta-world/maplandmarkdisplay#m-setup).
