---
title: Game API
description: A reference for the game's own code (Root.Township and the Alta assemblies), how the game fits together, and where each part is documented.
sidebar_position: 1
---

# Game API

This section is a reference for the game's own code: `Root.Township.dll` and the `Alta.*` assemblies next to it in `A Township Tale_Data\Managed`. It covers game build `main-1.7.2.1.42203`, assembly version `0.0.39.2`.

The game was never meant to be modded. There's no API, no events for mods and no promise that anything stays the same. You reach it through MelonLoader, which loads your DLL, and Harmony, which lets you run your code before, after or instead of the game's methods. These pages tell you what exists, what it does, which side runs it and how to hook it safely.

Everything here comes from reading the decompiled game, the patches in working mods and the notes from Rover's testing. Some pages also use the game's asset data (prefab and scene object names, components and field values), only as names and values. Where a page infers something rather than reading it in the code, it says so.

:::note
None of this is TavernLib. TavernLib's own API (roles, events, services) is in its own section. When TavernLib changes how a game method behaves, the page for that method says so.
:::

## Two builds, one of them everywhere

Alta shipped two builds of `Root.Township.dll` with the same assembly version:

- **The original client download** has the server code compiled out. `GameModeManager.StartServer` just returns false, `ServerHandler` is a small stub with no `PlayerLimit`, and types like `ServerPlayerConnectionHandlerOld` and `ServerCacheManager` aren't there at all.
- **The server build** has everything. TavernDefaults' patch installs it on players' games too, so every Tavern install, client or server, runs the same DLL. That's how a Tavern client can host: `ServerHostingGameMode` starts a second copy of the game with `-batchmode -nographics /start_server`.

These pages describe the server build. att-stubs is made from it too. If you decompile the game yourself, check which one you have (see [Finding your way around](patching/finding-your-way-around.md#client-builds-and-server-builds)).

So every class is loaded on both sides, and a mod's DLL loads on both sides too. Most code only does anything on one of them.

How to tell where you are:

| Check | True when | Watch out |
| --- | --- | --- |
| `CommandLineArguments.Contains(CommandLineArguments.StartServerArgument)` | The process was started as a dedicated server (`"/start_server"`). | The most reliable check, and the one TavernLib, Steady and Rover use. `CommandLineArguments` is in `Alta.CommandLine`. |
| `ApplicationManager.IsHeadless` | `-batchmode` or `-nographics` is on the command line. | Also true for a headless client, like a Rover bot. Several game behaviours switch on this, not on being a server. |
| `NetworkSceneManager.IsServer` | This process hosts the current scene. | Also true on a client sitting in the main menu: the menu runs a small local scene (`LocalNetworkScene`) that sets it. It goes false when the client joins a server. |
| `ServerHandler.Current` | Not null while a server runs. | On a client in the main menu it's a dummy local server (`IsDummyLocalServer` is true). |

See [Client, server or both](../mod/tavernlib/client-server-or-both.md) for the guide version, and [Harmony in A Township Tale](patching/harmony.md#server-or-client) for checks inside patches.

## How the game fits together

### Entities and prefabs

Almost everything in the world that can move, be picked up or be saved is a `NetworkEntity` (`Alta.Networking`). Each has a `uint Identifier`, unique on that server, and a `Hash` that names the prefab it came from. Prefabs are `NetworkPrefab`s, found by hash through `PrefabManager`. One spawned prefab is usually several entities: a root (`PrefabRoot`) and its embedded children, such as a player body's hands and head. See [World, entities and spawning](world/overview.md).

Things are spawned by the server (`SpawnManager`, `SpawnHelper`), which calls `InitializeAsServer(SpawnData)` on the entity and its behaviours and then tells the clients that can see it. A client only builds the copies it's sent.

### Chunks

The world is cut into chunks (`Alta.Chunks.Chunk`, with `LocationChunk` for the places in the handcrafted world). Every entity belongs to a chunk, and each chunk saves its own entities. The server keeps chunks loaded around each player, spawns their contents for that player, and saves and unloads them when nobody is near. Chunk 0 is the global chunk for things that belong nowhere in particular. The procedural forest and the caves stream in their own chunks as players reach them (`ForestChunk`, `CaveLayerStreamer`).

### Who decides

The server holds the saves, spawns and destroys everything, runs creatures, stats, crafting and damage, and sends the results to clients. Clients send input and their own body. Two things to know:

- **A client owns its own body.** Rover's tests found the server takes the position a client sends without checking speed, ground or teleports. Anti-cheat is only what mods like TavernLib add.
- **Many network handlers check who sent a message**, through `StreamAuthorityHelper`, and log the rest as unauthorized. When you send your own messages, check the sender yourself.

Only the server has a navmesh (`AstarPath`) and pathfinding. Clients have none.

### Messages

Clients and the server talk over kcp2k (UDP). Each message starts with a `MessageType` (`Alta.Networking`, 23 values in the game). The game writes that type in 5 bits, so it can't go past 31. TavernLib widens it to 8 bits on both ends, so a client and server only understand each other when both have TavernLib. See [Networking and players](networking/overview.md).

### Threads

The game's code runs on Unity's main thread: `Update`, coroutines, spawning, and network message handlers (received in the "Networking Receiving" update module). Pathfinding runs on its own worker threads. Async methods resume on the main thread when they were started there. If your patch starts work on another thread, hand Unity calls back with `MainThreadDispatcher.Run` (see [Threads, coroutines and the timeline](console-and-utilities/threads-coroutines-and-timeline.md)).

### What TavernLib already patches

On a modded server, TavernLib has already changed a lot of the game's behaviour. The main ones:

- **Joining**: it replaces the join check with its own (fly-camera players, TavernLib account tokens, mod parity, whitelist and blacklist), then hands over to the game's own check.
- **Message types**: 8 bits instead of 5 (above).
- **Player limit** from `server_settings.json`, and the server's web and console ports from `tavern_server.json`.
- **Alta's dead web services**: cosmetics presets are kept in local files, every cosmetic is owned by everyone, and the internet check always answers yes.
- **The console**: its own token logins, refusing commands given an empty player list, and fixes for several built-in commands that answered Success having done nothing.
- **Garbage collection**: the server's forced collection interval is read from `server_settings.json`.

Every patch, with the method it hooks, is in [Known patch points](patching/known-patch-points.md).

## The assemblies

| Assembly | What it's for |
| --- | --- |
| `Root.Township` | The game itself: about 5,600 source files when decompiled. Almost everything in this section. |
| `Alta.Analytics.Runtime` | Analytics events and the service that sends them. Alta's servers are gone, so mods drop them. |
| `Alta.Api.Client` | The client for Alta's web API (accounts, servers, groups, friends, cosmetics). The servers are gone, so its calls time out. |
| `Alta.Api.DataTransferModels` | The data types that API used: server info, user info, JWT helpers (`JWTUtility`). The game still passes these around. |
| `Alta.ArrayPools.Runtime` | Pools of reusable arrays. |
| `Alta.Attributes` | Inspector attributes (`ButtonAttribute`, `CommentAttribute` and so on). Nothing a mod needs. |
| `Alta.Authentication` | Login helpers, `PlayerSubscriberStatus` and `UserPermissions`. |
| `Alta.Build` | Build-time baking interfaces. |
| `Alta.CommandLine` | `CommandLineArguments`: reading the game's command line, and the `StartServerArgument` constant. |
| `Alta.Core.Runtime` | One small helper, `AverageNumber`. |
| `Alta.Coroutines` | `AltaCoroutine`, a coroutine that catches exceptions, and `RateLimiter`. |
| `Alta.EventBus.Runtime` | A small event bus. |
| `Alta.Global.Runtime` | `GlobalSettings`, settings assets loaded at start. |
| `Alta.IO` | `AltaFile` and `AltaFolder`: the game's file access, including safe saves through temp files. |
| `Alta.LifecycleManagement.Runtime` | Disposable helpers. |
| `Alta.LifetimeScopes` | VContainer scopes for the app, the game and the player. |
| `Alta.MenuItem` | Editor menu items. |
| `Alta.NetworkTransport.Runtime` | The transport under the game's networking: kcp2k wrappers, the receive pool, transport errors. |
| `Alta.Platform`, `Alta.Platform.Generic` | Platform services, and the `PlayerMode` and `PlatformTarget` enums. |
| `Alta.PlatformInformation.Runtime` | Which platform the game thinks it's on. |
| `Alta.Profiling.Runtime` | Profiler markers. |
| `Alta.SearchableTools` | One editor interface. |
| `Alta.Serialization.Runtime` | Bit-level `Stream`, `StreamReader`, `StreamWriter`, `BitReader`, `BitWriter`: how messages and saves are written. |
| `Alta.Singletons` | `SingletonBehaviour`, the base of the game's singletons. |
| `Alta.Timing.Runtime` | `Timeline` and priority queues, for things scheduled in game time. |
| `Alta.Values` | `GeneralValue` and hashed values, and `HashHelper`. |
| `Alta.VContainerLayer.Runtime` | Factories on top of VContainer. |
| `Alta.XRManagement`, `Alta.XRManagement.Windows` | Picking and starting VR: `XRUtility`, `TownshipXRMode`. Rover patches these to run without a headset. |

There are also smaller `Township.*` assemblies next to them, such as `Township.Core.Runtime`, which holds `MainThreadDispatcher`. [Console, utilities and Alta assemblies](console-and-utilities/overview.md) goes through each assembly in more depth.

### Third-party code inside Root.Township

`Root.Township` has several libraries compiled into it. They're out of scope here, but you'll meet them:

| Namespace | Library | Where the game uses it |
| --- | --- | --- |
| `Pathfinding`, `AstarPath`, `Seeker` | A* Pathfinding Project, apparently changed by Alta | Creature navigation, server only. Steady and ATT-Optimizations patch it heavily. |
| `RootMotion` | FinalIK | Player bodies and hands. |
| `Steamworks` | Steamworks.NET | Steam login and overlay. |
| `AK`, `Ak*` | Wwise | Sound. Some sound calls throw on a headless client. |
| `I2` | I2 Localization | Text in the menus. |
| `TriangleNet` | Triangle.NET | Meshing. |
| `FlyingWormConsole3` | Console Pro | Editor logging. |
| `Discord` | Discord Game SDK | Rich presence. |
| `QuickLod`, `AmplifyImpostors` | LOD and impostor tools | Rendering at distance. |
| `Agones` | Agones SDK | Alta's hosted servers. |

`kcp2k` (from Mirror), VContainer, NLog and Newtonsoft.Json are separate DLLs in `Managed`, not inside `Root.Township`.

## The section

| Area | What's in it |
| --- | --- |
| [Patching the game](patching/harmony.md) | Harmony in this game, every known patch point in our mods and others, and how to find your way around the decompiled code. |
| [Networking and players](networking/overview.md) | Connections, messages, joining, the server's handler and lifecycle, `Player` and its controller. |
| [World, entities and spawning](world/overview.md) | `NetworkEntity`, prefabs, chunks, loading and saving, spawning, finding and moving things, the forest and the caves. |
| [Items, interaction and damage](items/overview.md) | Hands, pickups, docks and bags, durability, impacts, health and damage. |
| [Game systems](game-systems/overview.md) | Stats, hunger, crafting, smelting, cooking, liquids, progression and the rest. |
| [Creatures and AI](creatures/overview.md) | Agents, decisions, senses, combat, movement, spawning. |
| [Console, utilities and Alta assemblies](console-and-utilities/overview.md) | Console commands, the remote console, logging, update modules, threads, start-up, settings and files. |
