---
title: Networking and players
description: How the game's server and clients talk, how players join, and where players, bodies and saves live in the code.
sidebar_position: 1
---

# Networking and players

This area covers how a server starts, how a player joins, how the two sides send each other data, and the types that make up a player: the `Player` entity, its body, its states, how it moves and how it's saved.

Everything here is in `Root.Township` unless a page says otherwise. The transport sits in `Alta.NetworkTransport.Runtime`, and the bit streams every message is written with are in `Alta.Serialization.Runtime`. Add those two to your references if you send or read messages:

```xml
<Reference Include="Alta.NetworkTransport.Runtime" HintPath="$(Managed)Alta.NetworkTransport.Runtime.dll" Private="false" />
<Reference Include="Alta.Serialization.Runtime" HintPath="$(Managed)Alta.Serialization.Runtime.dll" Private="false" />
```

## The shape of it

- One program is both the game and the server. `/start_server` on the command line makes it a server. See [Server lifecycle](server-lifecycle.md) and [Command-line flags](command-line.md).
- The transport is kcp2k (reliable UDP). Above it, the game has its own `Socket` and `Connection` types, and its own messages. See [Sockets and connections](connections.md).
- There are two levels of message. **Connection messages** (`MessageType`) go between a client and the server: join requests, spawns, and anything a mod adds. **Entity messages** (`EntityMessageType`) are addressed to one networked object and ride inside a connection message. See [Connection messages](messages.md) and [Entity sync](entity-sync.md).
- The server owns the world. Each client owns **its own body**: it moves it and tells the server where it is, and the server takes that as true. See [Locomotion](locomotion.md).
- Every player is two networked objects: a `Player` (who they are, their save, their states) and a `PlayerController` (the body, spawned later). See [Player](player.md) and [PlayerController and the body](player-controller.md).

## Which side am I on?

| Check | True when |
| --- | --- |
| `NetworkSceneManager.IsServer` | This process is running the server (also in local test mode). Also true on a client in the main menu, whose `LocalNetworkScene` sets it. |
| `NetworkSceneManager.IsLocalTest` | Local test mode: server and player in one process. |
| `NetworkSceneManager.IsRemoteServer` | A real server, not local test. |
| `ServerHandler.Current != null` | A server has started. Also true in the main menu's dummy server, so check `IsDummyLocalServer`. |
| `CommandLineArguments.Contains("/start_server")` | The process was started as a server. Works before anything else has loaded. |
| `ApplicationManager.IsHeadless` | `-batchmode` or `-nographics` was given. Rover's bots are headless clients, so this alone doesn't mean "server". |

`NetworkSceneManager.IsServer` is set when the server socket opens (or the main menu loads), and set to `false` on a client as it loads into a server, so it isn't meaningful at mod load. Use the command line then. [Client, server or both](../../mod/tavernlib/client-server-or-both.md) shows the pattern.

:::warning[Two builds of Root.Township]

Alta shipped a client build of `Root.Township` with most server code compiled out. In it, `ServerHandler` has only `Current`, `CurrentServerId`, `Initialized`, `ServerConfig` and the dummy-server members, and there's no `ServerPlayerConnectionHandlerOld`. The server build has all of it. The game installs we checked (TavernLib's server and client folders) and att-stubs all use the server build, so these pages describe that one. If your mod touches server-only members and a player runs the client build, expect `MissingMethodException` or `TypeLoadException` there.

:::

## Pages

| Page | What's in it |
| --- | --- |
| [Server lifecycle](server-lifecycle.md) | From `/start_server` to a running server, the bootup steps, events in order, and shutdown. |
| [ServerHandler](server-handler.md) | The running server: player limit, join and leave events, save utility, config. |
| [Joining a server](joining.md) | The join handshake on both sides, every check the server makes, and TavernLib's extra ones. |
| [Sockets and connections](connections.md) | `NetworkManager`, `Socket`, `Connection`, channels, the transport, threading. |
| [Connection messages](messages.md) | `MessageType`, sending and handling, custom message types, size limits. |
| [Entity sync](entity-sync.md) | Entity messages, `MethodSync`, who may send what, the per-frame serializers, spawning. |
| [Stream](stream.md) | `Alta.Serialization.Stream`: the bit reader and writer under every message and save. |
| [Player](player.md) | The `Player` entity, identity (`UserInfo`), player modes, finding players, events. |
| [PlayerController and the body](player-controller.md) | `PlayerController`, `PlayerCharacter`, local and remote bodies, which body each mode gets. |
| [Player states](player-states.md) | `PlayerStateManager` and the states: first join, playing, combat, downed, dead, spirit. |
| [Locomotion](locomotion.md) | `LocomotionController`, `SmoothLocomotion`, fly cam, and moving a player from the server. |
| [Saving](saving.md) | Player saves, the world save pass, folders on disk, save blockers. |
| [Server settings](server-settings.md) | `ServerSettings`, `ServerConfiguration.json`, the in-game settings board, server info types. |
| [Command-line flags](command-line.md) | Every flag the game reads that matters for servers and clients, and the ones TavernLib adds. |

Chunks, streaming and what's spawned where belong to [World, entities and spawning](../world/overview.md). Items, docks and inventories belong to [Items, interaction and damage](../items/overview.md). Console commands and `ConsoleEvents` belong to [Console, utilities and Alta assemblies](../console-and-utilities/overview.md). TavernLib's own messages (32 and 33) and how it widens the message type are on [TavernLib's network messages](../../tavernlib-api/network-messages.md).

## Most useful hook points

| Want to | Use |
| --- | --- |
| Run code when a player joins or leaves (server) | `ServerHandler.Current.PlayerJoined` / `PlayerLeft`. See [ServerHandler](server-handler.md#events). |
| Know when any `Player` entity appears (both sides) | `Player.OnPlayerAdded` / `OnPlayerRemoved`. See [Player](player.md#events). |
| Refuse or delay a join | A connection step, or a patch on the join handler. See [Joining a server](joining.md#hooking-it). |
| Send your own data between server and client | A custom `MessageType`. See [Connection messages](messages.md#your-own-message-type). |
| Move a player from the server | `player.PlayerController.ForceTeleportTo(position)`. See [Locomotion](locomotion.md#moving-a-player-from-the-server). |
| React to downed, dead, combat | `player.StateManager.StateActivated`. See [Player states](player-states.md). |
