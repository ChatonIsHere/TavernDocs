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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`MapPieceIdentifier`](/mod/game-api/types/alta-world/mapmanager-mappieceidentifier)
- **Documented in** [Map and landmarks](/mod/game-api/world/map-and-landmarks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MapManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isusingsharedmap" /><code>{"private bool isUsingSharedMap"}</code> | <span className="api-desc">Backing field for `IsUsingSharedMap`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class; discovery is logged at Info.</span> |
| <Link id="m-managers" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{"> managers"}</code> | <span className="api-desc">Server: map manager for each player, when maps are not shared.</span> |
| <Link id="m-singlemanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{" singleManager"}</code> | <span className="api-desc">The shared map on the server, or the local player's map on a client.</span> |
| <Link id="m-syncmapmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{"> syncMapManager"}</code> | <span className="api-desc">Method sync (SyncA) for the whole map.</span> |
| <Link id="m-syncpiecediscovery" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-world/mapmanager-mappieceidentifier">{"MapManager.MapPieceIdentifier"}</Link>{"> syncPieceDiscovery"}</code> | <span className="api-desc">Method sync (SyncB) for one discovered piece.</span> |
| <Link id="m-updatemovinglandmarks" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMovingLandmarks"}</code> | <span className="api-desc">Update handle; not used in this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/mapmanager">{"MapManager"}</Link>{" Instance { get; private set; }"}</code> | <span className="api-desc">The active map manager.</span> |
| <Link id="m-isusingsharedmap-2" /><code>{"bool IsUsingSharedMap { get; }"}</code> | <span className="api-desc">Whether all players share one map.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-discoverpiece" /><code>{"async void DiscoverPiece("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-world/map">{"Map"}</Link>{" map, int pieceIndex)"}</code> | <span className="api-desc">Server: marks a map piece found for the player and sends it to everyone (shared map) or just that player.</span> |
| <Link id="m-getmapmanager" /><code>{"async Task<"}<Link to="/mod/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{"> GetMapManager("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Gets the shared map manager, or loads the player's own one from their map save file.</span> |
| <Link id="m-getsharedmanager" /><code><Link to="/mod/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{" GetSharedManager()"}</code> | <span className="api-desc">Returns the single manager: the shared map on the server, or the local map on a client.</span> |
| <Link id="m-initialize" /><code>{"override async void Initialize()"}</code> | <span className="api-desc">Creates the syncs; the server loads the shared map or the host player's map, and clients start with an empty map.</span> |
| <Link id="m-onconnected" /><code>{"override async void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: loads the player's map (or uses the shared one) and sends it to them.</span> |
| <Link id="m-ondisconnected" /><code>{"override async void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: writes and unloads the player's map save file and forgets their manager.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `Instance`, or destroys itself if another one exists.</span> |
| <Link id="m-setupplayer" /><code>{"private async Task<"}<Link to="/mod/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{"> SetupPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: loads a player's map save file and stores a manager for them.</span> |
| <Link id="m-syncmapmanager-2" /><code>{"private void SyncMapManager("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/playermapmanager">{"PlayerMapManager"}</Link>{" manager)"}</code> | <span className="api-desc">Sends a whole map manager; clients read it into their single local manager.</span> |
| <Link id="m-syncpiecediscovery-2" /><code>{"private void SyncPieceDiscovery("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world/mapmanager-mappieceidentifier">{"MapManager.MapPieceIdentifier"}</Link>{" piece)"}</code> | <span className="api-desc">Sends one discovered map piece (map and index 0 to 127); clients mark it found.</span> |

</details>
