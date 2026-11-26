---
title: Map and landmarks
description: The in-game map, map pieces players discover, and landmarks with their discovery states. MapManager, PlayerMapManager, Landmark and LandmarkManager.
sidebar_position: 16
---

# Map and landmarks

The map is a set of pieces players uncover as they explore, plus landmarks (icons) they become aware of and then discover. The server keeps each player's progress in their player save, or one shared map for everyone. All of it is in `Alta.Map` in `Root.Township`.

## Maps and pieces

| Type | What it is |
| --- | --- |
| `Map` | A `HashedGeneralValue` asset: `MapPiece[] Pieces`, `GlobalMapPieces`, the world rectangle it covers (`WorldPositionBottomLeft`, `WorldPositionTopRight`) and `FirstNonReservedIndex` (1,000 by default: landmarks registered at runtime get indices from there up, and a player landmark wipe keeps the ones below it). `event Action<int, MapPiece> PieceDiscovered`. |
| `MapPiece` | One piece: a `Sprite` and an `Offset`. |
| `MapManager` | Scene behaviour, `static MapManager Instance`. Holds each player's `PlayerMapManager`, or one shared one if `IsUsingSharedMap`. |
| `PlayerMapManager` | One player's discovered pieces. `IsThisMapPieceDiscovered(Map, int)`, `GetUndiscoveredMapPieces(Map)`, `DiscoverPiece(Map, int)`. |

The game has one map, `MainMap` (hash 21174): 17 pieces (`MainMapPiece-0` and on, except that index 7 is named `Hacked Map Piece`), no global pieces, covering x -1688 to 190 and z -805 to 1073.

`MapManager` members:

| Member | What it does | Side |
| --- | --- | --- |
| `bool IsUsingSharedMap { get; }` | One map for everyone. | Both |
| `Task<PlayerMapManager> GetMapManager(IPlayer player)` | That player's progress (the shared one if shared). Loads it from the player's save if needed. | Server |
| `PlayerMapManager GetSharedManager()` | The shared one, or on a client, the local player's. | Both |
| `void DiscoverPiece(IPlayer player, Map map, int pieceIndex)` | Marks a piece found and tells the player (or everyone, if shared). | Server. `async void`. |

The server sends a player their whole map when `MapManager`'s entity is spawned for them (`OnConnected`), and writes their map file when they leave. Piece indices are sent as a number from 0 to 127, so a map has at most 128 pieces.

## Landmarks

`Alta.Map.Landmark`, a `NetworkEntityBehaviour` on things that show on the map. Server-driven.

| Member | What it does |
| --- | --- |
| `Map Map { get; }`, `uint Index { get; }`, `Vector2 Position { get; }` | Which map, its index once registered, its x/z. |
| `DiscoveryState DefaultState { get; }` | `None`, `Aware` or `Discovered`: what everyone starts with. |
| `LandmarkIcon AwareIcon`, `DiscoveredIcon`, `void SetIcons(LandmarkIcon aware, LandmarkIcon discovered)` | Icons per state. `SetIcons` resyncs. |
| `void AwareFor(IPlayer player)` | Shows it to a player as "aware" (only if its default state is `None`). |
| `void DiscoverFor(IPlayer player)` | Marks it discovered for a player, registering it first if needed. Completes its find action on the server. |
| `void ForceSync()` | Sends its state again. |
| `virtual void CustomizeIcon(MarkerInfo info, Player target)` | Per-player icon changes. |
| `bool IsMasked { get; }` | |

On the server a landmark registers itself with `LandmarkManager` one frame after `Initialize`, and deregisters when destroyed for real (not on unload, if it's kept after unload).

`LandmarkManager` (a `SingletonBehaviour`, `LandmarkManager.Instance`) splits into `ServerLandmarkManager` and `ClientLandmarkManager`. The server side keeps `Markers` and `DefaultStates` by index, loads a player's landmark states when they join (`Load(player)`), and sends changes. Static `Register`, `Deregister` and `ForceSync`, and `WipePlayerSave(int identifier)`.

`LandmarkDiscoverZone` discovers its landmark for a player whose body enters its trigger, on the server. `PlayerLandmark` and `MovingLandmark` are landmarks that follow things.

## Not to be confused with

`WorldLandmarkManager` and `WorldLandmark` (in `Alta.Chunks`) are distant scenery: large prefabs a client loads when certain chunks load, so far-off mountains and buildings show. They're client side (`Setup` is skipped on servers) and have nothing to do with the map. The `landmarks` console module turns them on and off.

## Hooking it

| Target | Why |
| --- | --- |
| `MapManager.DiscoverPiece` | Every piece found. `async void`; a prefix sees the call. |
| `Landmark.DiscoverFor(IPlayer)` | Every landmark discovered, on the server. |
| `Map.PieceDiscovered` | Per map, whenever a `PlayerMapManager` marks a piece found: on the server, and on the player's game when the sync arrives. |

## See also

- [Chunks](chunks.md)
