---
title: Performance
description: Where a server spends its time and memory, what Steady and ATT-Optimizations change, and what a mod should avoid.
sidebar_position: 3
---

# Performance

This page is for modders and hosts. It covers where an A Township Tale server spends its time and memory, the known leaks, what the two performance mods change, and what to keep out of your own mod. Almost all of it is server side.

The numbers come from [Canary](https://github.com/ChatonIsHere/Canary) recordings and from load tests with Rover, which fills a server with bot players. Your hardware will give different numbers, but the shape is the same.

## What a server costs

Canary recordings of servers without Steady, in Docker under Wine, capped at 4 cores:

| Load | Memory | CPU (95th percentile) | Notes |
| --- | --- | --- | --- |
| Empty | about 3.1 GB | | |
| 1 or 2 players | about 2.9 GB | | |
| 10 to 12 players around Town | about 3.1 GB | 1.75 cores | |
| 12 players, half in the forest, half in the caves | 6.75 GB | 2.5 cores | The memory wasn't given back after they left. |
| 20 players around Town | 6.6 GB after an hour, 9.6 GB after three | 2.7 cores | Heap from 3.0 to 5.3 GB. Slowest frames 50 to 100 ms. |

What this shows:

- Town is cheap. The forest and the caves are what cost.
- Memory goes up with time and with where players have been, and it doesn't come back down. Mono's heap never shrinks, and the game holds on to things it has destroyed (see [Leaks](#leaks)).
- So size a server's RAM for its worst day, not its quiet one, and restart a busy server now and then to get the memory back.

## Hot spots

### The forced garbage collection

`GarbageCollectTimer` (no namespace, a `MonoBehaviour` in the scene) starts a coroutine on headless builds only, so on every server and on no client. It calls `GC.Collect(GC.MaxGeneration, mode, blocking: false)` every `interval` seconds. The field's code default is 2 seconds, but the object in the boot scene sets 30 (going by Rover's and Steady's measurements; the scene dump doesn't record the value). On a Tavern server TavernLib sets it from `garbage_collection_timer` anyway, which defaults to 30.

Unity's Mono uses the Boehm collector, which ignores "optimized" and "not blocking" and stops the whole game for a full collection. The pause grows with the size of the heap, not with how much garbage there is:

- In Rover's tests: about 280 ms with 10 to 12 players, 460 ms on a fresh idle server, 650 to 700 ms on an empty server after a cave run (heap about 1.1 GB).
- On a busy server under Wine, 2 to 3 seconds.

Because the heap never shrinks, a server that has loaded the forest or caves keeps the longer pause after everyone leaves.

TavernLib's `garbage_collection_timer` in [server_settings.json](../host/config-reference.md#server_settingsjson) changes the interval. A longer one means fewer pauses, but each is still as long. Steady stops the timer and leaves collection to the runtime, unless `garbage_collection_timer` is set to something other than 30 or Steady's `ForcedGc` setting is on.

### The forest

The procedural forest starts east of Town (overworld chunks from about x 27 to 55). It's the most expensive place on the map.

- **Placing trees and rocks.** A forest chunk loads by running a list of instructions (place this tree, that rock). `InstructionSet.Execute` runs 10 a frame for each chunk, and each chunk runs its own batch. Chunks load together as players move, so one frame can run twenty batches. Steady saw 0.6 s frames from this with four players in the forest.
- **The navmesh.** Loading a forest chunk re-cuts all of the overworld's navmesh tiles (about 19,000), not just the ones it rebuilt: a 2 to 3 second freeze about once a minute. After every cut update (a tree falls, an item moves), the whole navmesh is relabelled to work out what connects to what: 70 to 80 ms, about twice a second with players around.
- **Entities.** Every tree, rock, creature and dropped item is an entity the server tracks and sends.

In one Rover test, six players in the forest took the server from about 80 fps to 33 to 46, with 95th percentile frames of 237 to 407 ms and 59 frames over a second. Entities went from 9,000 to 17,000 or 20,000. The heap went from 0.9 to 3.3 GB and the process from 3.2 to 6.6 GB, and with the forest empty again it only came down to 2.4 and 5.2 GB.

### The caves

- A cave layer is made the first time someone goes in, and its navmesh is scanned then. The pathfinding library (`AstarPath`, third party) calls `GC.Collect()` at the end of every scan, so each new layer adds a full collection.
- Two layers loading at once can start two scans. The second fails, and that layer's creatures can't find paths.
- All creature pathfinding runs on one pathfinding thread by default. A busy cave keeps it busy.

Three players on cave layer 1, with nobody in the forest, cost little in Rover's tests (75 to 78 fps).

### Saving

The autosave (every 5 minutes by default) runs `StreamerManager.SaveWorld`:

- It saves every loaded chunk, changed or not. Steady found about half come out the same as the file on disk.
- The saving system serializes each component twice: once to measure it, once for real.
- The chunks are spread over frames using the streaming budget. The players are all saved in one frame.
- `save now` and shutdown save everything at once and block the main thread until it's done.

### Other things the game does every frame

- `DelayedImpactResolver` resolves hits by held items once a frame (on a server, players hitting players). If it throws once, its update module drops it and it never comes back: from then on those hits do no damage until a restart, and they pile up in memory. See [Exceptions remove your update](#exceptions-remove-your-update) below, and [Impacts](items/impacts.md) for how hits are resolved.
- `DynamicPhysicsTimeSet` adjusts the physics rate every 5 seconds from the frame rate (the [physics settings](../host/config-reference.md#physics)). Each time `ServerConfiguration.json` is read again, it registers its update again without removing the old one.
- The game logs at Debug level, and pathfinding logs every path it finds.
- The game still calls Alta's web services, which are gone. Each call hangs until it times out (40 seconds or more). A first-time player can wait in the character room for about a minute because of them.

## Leaks

Memory a server never gets back comes from two things:

1. **Mono's heap never shrinks.** Once the forest or caves have pushed it up, it stays up, even when the objects in it are freed.
2. **References to destroyed objects.** A destroyed Unity object is only freed when nothing points at it. The game keeps references in places that are never cleaned, and each one keeps a whole destroyed entity alive, with its components, network sync and whatever those reach.

Some of them, all checked in the game's code:

| Where | What's kept |
| --- | --- |
| `ServerDiagnosticsManager.PlayersToSendTo` | A static dictionary that gets every player who's online when the server sends its frame rate, so in the end every player who ever joined. Nothing removes them. |
| `SpawnOnDestroyed` (rocks, boulders, ores) | Each one adds a handler to the static `ApplicationManager.ApplicationQuit` and never removes it. |
| `TradeVendor` | Subscribes to `ServerHandler.PlayerJoined` and never unsubscribes. A destroyed vendor throws when its owner joins, which stops the handlers after it. |
| `ImpactDetector` (private `hitCooldowns`) | Every tool that ever hit it. Expired cooldowns are never removed. |

Steady's `DropDeadReferences` also finds these: AI hooks that keep an entry per creature after it's destroyed, creature target sets, liquid triggers, pooled actions and impact tools, network messages that keep their last entity, and each player's bank, postbox and climbing tower save staying subscribed to `ServerHandler.PlayerJoined` after the player leaves. In a 2.5-hour test with 20 players, the heap ended at 1.2 GB with these dropped instead of 4 GB.

## What Steady and ATT-Optimizations change

Both are MelonLoader mods that patch the game with Harmony and leave gameplay alone, apart from one Cave Performance option noted below. Each fix has a setting, so you can turn off one that causes trouble.

### Steady

[Steady](https://github.com/ChatonIsHere/Steady) runs on servers and clients. Settings are under `[Steady]` in `UserData/MelonPreferences.cfg`, read at start-up. `steady status` on the server console shows what's on and what each fix has done.

| Area | What it changes |
| --- | --- |
| Freezes | Stops the 30 s forced GC (`ForcedGc`, unless the host set `garbage_collection_timer`) and the GC after each navmesh scan (`ScanGc`). Re-cuts only the rebuilt navmesh tiles (`RebuiltTilesOnly`). Shares a few milliseconds a frame between all loading forest chunks (`ForestBudgetMs`). Spreads saved entities from neighbouring chunks over frames (`ChunkLoadBudgetMs`) and player saves over the autosave (`SpreadPlayerSaves`). |
| Pathfinding | Relabels only the changed part of the navmesh when it can prove nothing joined or split, falling back to the full fill (`LocalAreaFill`). Faster full fills and nearest-node searches. Checks navmesh cuts once a frame instead of twice. Runs cave scans one at a time and retries a failed one (`CaveScanFix`). Fixes graph masks for cave graphs from 32 up (`GraphMaskFix`). |
| Memory and saves | `DropDeadReferences` (above). Serializes each component once when saving, with the same bytes (`SinglePassSaves`). Skips writing chunks that haven't changed (`SkipUnchangedChunks`). Smaller fixes to network spawn checks, stream finalizers and the receive buffer pool. |
| Logging | Raises the game's log level to Info and quietens pathfinding logs. |
| Damage | Keeps `DelayedImpactResolver` running when a hit can't be resolved (`ImpactResolverFix`). |
| Alta's web services | Answers or fails the dead calls at once instead of waiting for the timeout (`CutOffAlta`). Stands aside where TavernLib, TavernEssentials or AltaApiRemoval answers a call itself. |

Also off by default, because each trades something: `MaxPhysicsHz` (caps physics steps), `MaxCatchUpMs` (how long a frame Unity simulates after a hitch), `JobWorkers` (Unity job threads; in a container with a CPU limit, the limit minus one) and `PathThreads` (more pathfinding threads, each using another core).

### ATT-Optimizations

[ATT-Optimizations](https://github.com/calebv2/ATT-Optimizations) is two server-only mods by calebv2. Each checks the game assembly at start-up and turns itself off on a build it doesn't support. Settings are in `UserData/<ModName>/config.txt`, read at start-up.

**Cave Performance:**

- Two pathfinding workers instead of the game's choice.
- Creature path requests in a cave search that cave's graph first, and fall back to the game's search.
- A shared 4 ms budget a frame for cave generation steps.
- Starts cave scans without blocking while path workers finish.
- At most one complete batch of saved entities released per frame.
- Checks finished cave navmesh graphs and retries failed scans.
- **Gameplay change:** cave wyrm population targets are set to 75% of normal by default (`cave_wyrm_multiplier`, `1` restores the game's numbers).
- Built-in timing and diagnostics, on by default, written under `UserData/CavePerformance/`.

**Forest Performance:**

- Forest instructions per chunk per frame down from 10 to 1 (`forest_instructions_per_frame`).
- At most one complete batch of saved entities released per frame.
- Local navmesh connectivity repair where it can prove the result matches, with the game's full fill otherwise.
- The same graph mask fix as Steady, and notifying navmesh cutting only about rebuilt tiles.
- Fixes to forest reset and cache ordering.

### Using them together

Steady notices either mod and leaves the overlapping jobs to it, and says so at start-up. With Forest Performance that's `LocalAreaFill`, `ForestBudgetMs`, forest chunk loads and `GraphMaskFix`. With Cave Performance it's cave chunk loads, `CaveScanFix` and `PathThreads`. Turn the matching setting off in their mod and Steady takes the job back.

## What to measure

[Canary](https://github.com/ChatonIsHere/Canary) records a server so you can see what it was doing when it lagged. It keeps the last 10 minutes in memory:

- every second: frame times, GC, memory, players, entities, errors and the game's update module times
- every 5 seconds: player positions, and CPU, memory, disk and network
- every minute: entities by type and chunk, and rigidbodies
- every lag spike, and the first of each new error, tagged with the mod it came from

`canary status` shows how the server's doing, `canary record start` and `stop` record to disk, `canary mark <text>` notes something on the timeline, and `canary profile start` times every script's updates and every mod's patches for a while. Open the files in the [viewer](https://chatonishere.github.io/Canary/).

Things worth watching:

- **95th percentile frame time and spikes**, not the average. Lag is the long frames.
- **Heap and process memory over hours**, to see a leak. A heap that keeps rising with the same players is one.
- **Entity count**, by chunk. A mod that spawns things and doesn't clean them up shows here.
- **Which update module a spike is in.** If a long frame spent little time in the tracked modules, the time went into physics, navmesh work or GC.

A mod can add its own timed sections and numbers to a Canary recording with `CanaryApi.Section("MyMod.Thing")` and `CanaryApi.Metric(name, value)`. See Canary's README.

## What a mod should avoid

### Per-frame work

Anything you register with `UnityUpdateManager.UpdateModule`, `FixedUpdateModule` or `LateUpdateModule`, and any Harmony patch on a method the game calls every frame, runs on every frame of the main thread. See [Update modules](console-and-utilities/update-modules.md).

- Do the work every few seconds, not every frame, unless it has to be every frame.
- Don't allocate every frame: LINQ, string formatting, closures, `new List<T>()`. Garbage means more collections, and on this runtime every collection stops the game.
- Don't log every frame.
- Never call `Object.FindObjectsOfType` or `Resources.FindObjectsOfTypeAll` per frame. On a big world one search takes hundreds of milliseconds. Find things once and keep them, or hook where they're made.
- Keep patches on hot methods cheap. Some methods run every frame for every creature (`Agent.UpdateHurt`, for example) or for every network send. A prefix that does a dictionary lookup there runs thousands of times a frame.
- Don't block the main thread on files or tasks (`Task.Wait()`, `.Result`). Use `async` and let the game carry on.
- Don't call `GC.Collect()`.

### Exceptions remove your update

When a method registered with an update module throws, the module logs "Error while invoking Unity Update Method" and removes it for good. Your handle still looks valid, but nothing runs. Catch inside the method.

This example runs every 10 seconds, catches its own errors and removes itself when the server stops:

```csharp
using System;
using Alta.Networking;
using MelonLoader;
using UnityEngine;

public static class PlayerCountLog
{
    private static IUnityUpdateMethod _update;
    private static float _next;

    // Call this once the server has started.
    public static void Start()
    {
        if (_update != null) return;
        _update = UnityUpdateManager.UpdateModule.RegisterMethod(Tick);
        GeneralGameEvents.ServerEnded += Stop;
    }

    private static void Stop()
    {
        GeneralGameEvents.ServerEnded -= Stop;
        UpdateModule.DeregisterMethod(ref _update);
    }

    private static void Tick()
    {
        // Runs every frame, so return early on most of them.
        if (Time.realtimeSinceStartup < _next) return;
        _next = Time.realtimeSinceStartup + 10f;
        try
        {
            MelonLogger.Msg($"{Player.AllPlayers.Count} players online");
        }
        catch (Exception e)
        {
            // An exception that escapes would remove Tick from the module for good.
            MelonLogger.Warning($"PlayerCountLog: {e.Message}");
        }
    }
}
```

### Subscriptions you never remove

An event keeps every handler's object alive, and everything that object points at. The game's own leaks above are mostly this. The ones to watch:

- static events: `GeneralGameEvents.ServerStarted` and `ServerEnded`, `ApplicationManager.ApplicationQuit`
- `ServerHandler.Current.PlayerJoined` and `PlayerLeft`, which last as long as the server
- `ServerHandler.Current.ServerConfig.SettingsChanged` and `SettingsManager.GameConfig.SettingsChanged`
- events on players and entities you keep after they're gone

Remove a handler in the matching place: `OnDestroy` for a component, `PlayerLeft` for something per player, `ServerEnded` for something per server.

### References to things that are gone

Don't keep a `Player`, an entity or a component in a static field or a long-lived collection after it's destroyed. Key your data by something that isn't a Unity object, like the user id (`player.UserInfo.Identifier`), and remove entries when the player leaves. A destroyed Unity object compares equal to `null`, so `if (thing == null)` tells you it's gone, but the reference still holds its memory until you drop it.

```csharp
using System.Collections.Generic;
using Alta.Networking;
using Alta.Networking.Servers;

public static class JoinCounter
{
    // Keyed by user id, not by Player, so a player who left can be freed.
    private static readonly Dictionary<int, int> Joins = new Dictionary<int, int>();
    private static ServerHandler _server;

    public static void Hook()
    {
        _server = ServerHandler.Current;
        if (_server == null) return;
        _server.PlayerJoined += OnJoined;
        GeneralGameEvents.ServerEnded += Unhook;
    }

    private static void Unhook()
    {
        GeneralGameEvents.ServerEnded -= Unhook;
        if (_server != null) _server.PlayerJoined -= OnJoined;
        _server = null;
    }

    private static void OnJoined(Player player)
    {
        var id = player.UserInfo.Identifier;
        Joins[id] = Joins.TryGetValue(id, out var count) ? count + 1 : 1;
    }
}
```

### Entities you don't clean up

Every networked entity costs CPU, memory and bandwidth for as long as it exists, and its chunk saves it. If your mod spawns things, give them a way to go away (the game's decay, or your own cleanup), and watch the entity count in Canary while you test.

## For hosts

- **RAM.** Give a busy server room for its worst day. From the numbers above, 7 GB isn't much for a server whose players use the forest and caves, and 20 players for three hours reached 9.6 GB.
- **Restart now and then.** It's the only way to get the heap back.
- **CPU limits.** In a container with a CPU limit, Unity still starts a job thread per core it sees. Steady's `JobWorkers` sets the number.
- **The GC timer.** `garbage_collection_timer` in `server_settings.json` changes how often the forced collection runs, not how long each one takes.
- **Physics.** The physics settings in [ServerConfiguration.json](../host/config-reference.md#physics) lower the physics rate when the frame rate drops. `MaxPhysicsHz` in Steady caps it.

## See also

- [Update modules](console-and-utilities/update-modules.md)
- [Config reference](../host/config-reference.md)
- [Save format](../host/save-format.md)
