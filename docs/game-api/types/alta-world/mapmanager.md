---
title: "MapManager"
description: "Scene behaviour, static MapManager Instance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapManager

A **class** in `Root.Township`, `Alta.Map`.

Scene behaviour, `static MapManager Instance`. Holds each player's `PlayerMapManager`, or one shared one if `IsUsingSharedMap`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`MapPieceIdentifier`](/game-api/types/alta-world/mapmanager-mappieceidentifier)
- **Documented in** [Map and landmarks](/game-api/world/map-and-landmarks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isusingsharedmap" /><code>{"private bool isUsingSharedMap"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-managers" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{"> managers"}</code> |  |
| <Link id="m-singlemanager" /><code>{"private "}<Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{" singleManager"}</code> |  |
| <Link id="m-syncmapmanager" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{"> syncMapManager"}</code> |  |
| <Link id="m-syncpiecediscovery" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-world/mapmanager-mappieceidentifier">{"MapManager.MapPieceIdentifier"}</Link>{"> syncPieceDiscovery"}</code> |  |
| <Link id="m-updatemovinglandmarks" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMovingLandmarks"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-world/mapmanager">{"MapManager"}</Link>{" Instance { get; private set; }"}</code> |  |
| <Link id="m-isusingsharedmap-2" /><code>{"bool IsUsingSharedMap { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-discoverpiece" /><code>{"async void DiscoverPiece("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map, int pieceIndex)"}</code> |  |
| <Link id="m-getmapmanager" /><code>{"async Task<"}<Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{"> GetMapManager("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-getsharedmanager" /><code><Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{" GetSharedManager()"}</code> |  |
| <Link id="m-initialize" /><code>{"override async void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override async void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-ondisconnected" /><code>{"override async void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-setupplayer" /><code>{"private async Task<"}<Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{"> SetupPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-syncmapmanager-2" /><code>{"private void SyncMapManager("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{" manager)"}</code> |  |
| <Link id="m-syncpiecediscovery-2" /><code>{"private void SyncPieceDiscovery("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/mapmanager-mappieceidentifier">{"MapManager.MapPieceIdentifier"}</Link>{" piece)"}</code> |  |
