---
title: "MapManager"
description: "Tracks which map pieces each player has discovered, either one shared map for everyone or a map per player saved in player data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MapManager

A **class** in `Root.Township`, `Alta.Map`.

Tracks which map pieces each player has discovered, either one shared map for everyone or a map per player saved in player data. Singleton `MapManager.Instance`; the server loads and saves, clients keep one local copy.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`MapPieceIdentifier`](/game-api/types/alta-world/mapmanager-mappieceidentifier)
- **Documented in** [Map and landmarks](/game-api/world/map-and-landmarks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isusingsharedmap" /><code>{"private bool isUsingSharedMap"}</code> | Backing field for `IsUsingSharedMap`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class; discovery is logged at Info. |
| <Link id="m-managers" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{"> managers"}</code> | Server: map manager for each player, when maps are not shared. |
| <Link id="m-singlemanager" /><code>{"private "}<Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{" singleManager"}</code> | The shared map on the server, or the local player's map on a client. |
| <Link id="m-syncmapmanager" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{"> syncMapManager"}</code> | Method sync (SyncA) for the whole map. |
| <Link id="m-syncpiecediscovery" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-world/mapmanager-mappieceidentifier">{"MapManager.MapPieceIdentifier"}</Link>{"> syncPieceDiscovery"}</code> | Method sync (SyncB) for one discovered piece. |
| <Link id="m-updatemovinglandmarks" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMovingLandmarks"}</code> | Update handle; not used in this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-world/mapmanager">{"MapManager"}</Link>{" Instance { get; private set; }"}</code> | The active map manager. |
| <Link id="m-isusingsharedmap-2" /><code>{"bool IsUsingSharedMap { get; }"}</code> | Whether all players share one map. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-discoverpiece" /><code>{"async void DiscoverPiece("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-world/map">{"Map"}</Link>{" map, int pieceIndex)"}</code> | Server: marks a map piece found for the player and sends it to everyone (shared map) or just that player. |
| <Link id="m-getmapmanager" /><code>{"async Task<"}<Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{"> GetMapManager("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Gets the shared map manager, or loads the player's own one from their map save file. |
| <Link id="m-getsharedmanager" /><code><Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{" GetSharedManager()"}</code> | Returns the single manager: the shared map on the server, or the local map on a client. |
| <Link id="m-initialize" /><code>{"override async void Initialize()"}</code> | Creates the syncs; the server loads the shared map or the host player's map, and clients start with an empty map. |
| <Link id="m-onconnected" /><code>{"override async void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: loads the player's map (or uses the shared one) and sends it to them. |
| <Link id="m-ondisconnected" /><code>{"override async void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: writes and unloads the player's map save file and forgets their manager. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `Instance`, or destroys itself if another one exists. |
| <Link id="m-setupplayer" /><code>{"private async Task<"}<Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{"> SetupPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: loads a player's map save file and stores a manager for them. |
| <Link id="m-syncmapmanager-2" /><code>{"private void SyncMapManager("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{" manager)"}</code> | Sends a whole map manager; clients read it into their single local manager. |
| <Link id="m-syncpiecediscovery-2" /><code>{"private void SyncPieceDiscovery("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world/mapmanager-mappieceidentifier">{"MapManager.MapPieceIdentifier"}</Link>{" piece)"}</code> | Sends one discovered map piece (map and index 0 to 127); clients mark it found. |

</details>
