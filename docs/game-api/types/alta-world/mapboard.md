---
title: "MapBoard"
description: "class MapBoard in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapBoard

A **class** in `Root.Township`, `Alta.Map`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<MapBoardSaveData1>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<MapBoardSaveData1>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`MapBoardSaveData1`](/game-api/types/alta-world/mapboardsavedata1)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapBoard()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activemappieces" /><code>{"private readonly Dictionary<int, "}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"> activeMapPieces"}</code> |  |
| <Link id="m-handhoverpoint" /><code>{"private "}<Link to="/game-api/types/global-e-h/handhoverpoint">{"HandHoverPoint"}</Link>{" handHoverPoint"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-map" /><code>{"private "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map"}</code> |  |
| <Link id="m-positionoffset" /><code>{"private Vector2 positionOffset"}</code> |  |
| <Link id="m-resolution" /><code>{"private Vector2 resolution"}</code> |  |
| <Link id="m-syncboard" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncBoard"}</code> |  |
| <Link id="m-unlockpieceindex" /><code>{"private int unlockPieceIndex"}</code> |  |
| <Link id="m-zoom" /><code>{"private float zoom"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activemappieces-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{"> ActiveMapPieces { get; }"}</code> |  |
| <Link id="m-map-2" /><code><Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" { get; }"}</code> |  |
| <Link id="m-mapoffsetscale" /><code>{"Vector4 MapOffsetScale { get; }"}</code> |  |
| <Link id="m-resolutionx" /><code>{"float ResolutionX { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-setupasclient" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/mapboard">{"MapBoard"}</Link>{"> SetupAsClient"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-interactionstarted" /><code>{"void InteractionStarted("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-worldtomapposition" /><code>{"Vector2 WorldToMapPosition(Vector2 worldPosition)"}</code> |  |
| <Link id="m-discovermappiece" /><code>{"private void DiscoverMapPiece(int index, "}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{" mapPiece)"}</code> |  |
| <Link id="m-initializeforclient" /><code>{"private void InitializeForClient()"}</code> |  |
| <Link id="m-ismapcontentavailable" /><code>{"private bool IsMapContentAvailable()"}</code> |  |
| <Link id="m-listentomapdiscoveries" /><code>{"private void ListenToMapDiscoveries()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-setupmap" /><code>{"private void SetupMap()"}</code> |  |
| <Link id="m-setupmappiece" /><code>{"private void SetupMapPiece(int index, "}<Link to="/game-api/types/alta-world/mappiece">{"MapPiece"}</Link>{" piece)"}</code> |  |
| <Link id="m-setupmappieces" /><code>{"private void SetupMapPieces("}<Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{" mapManager)"}</code> |  |
| <Link id="m-syncboard-2" /><code>{"private void SyncBoard("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-unclampedinverselerp" /><code>{"private static float UnclampedInverseLerp(float a, float b, float value)"}</code> |  |

## Used in

Members of other types that take, return or hold a `MapBoard`:

[`MapBoardDirectRenderer.mapBoard`](/game-api/types/alta-world/mapboarddirectrenderer#m-mapboard), [`MapLandmarkDisplay.mapBoard`](/game-api/types/alta-world/maplandmarkdisplay#m-mapboard), [`MapLandmarkDisplay.Setup`](/game-api/types/alta-world/maplandmarkdisplay#m-setup).
