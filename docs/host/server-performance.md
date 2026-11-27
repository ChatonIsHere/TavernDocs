---
title: Server performance
description: How to tell when your server is struggling, measure it with Canary, and what to do about it.
summary:
    - "Town is cheap. The **forest** and the **caves** are what cost memory and frame time."
    - "Memory climbs over a session and doesn't come back, so size for the busy day and **restart** now and then."
    - "Record with the **Canary** mod and read it in the viewer to see what the server was doing when it lagged."
    - "You can raise the GC timer, pin CPUs and give it more RAM without any mod."
    - "A performance mod like **Steady** cuts the freezes and the memory growth, and is worth it on a busy server."
---

# Server performance

An A Township Tale server does most of its work on one thread, so trouble shows up as **long frames** (a stutter or a freeze) and as **memory that climbs** over a session. This page is how to spot that, measure it, and what to do. For the full breakdown of where the time and memory go, see [Performance](../mod/game-api/performance.md) in the modding docs.

## Signs your server is struggling

- **A regular stutter.** The server stops the whole game for a garbage collection on a timer (every 30 seconds by default). The pause grows with how much memory the server is using: a fraction of a second on a small server, 2 to 3 seconds on a big one under Wine.
- **A freeze when players explore.** Loading the forest, or a cave layer for the first time, freezes the server for a second or two while it builds the world and its navmesh.
- **Memory climbing all session.** Memory goes up as players visit the forest and caves and doesn't come back down (the runtime's heap never shrinks). A busy server can climb by around a gigabyte an hour.
- **A slow first join.** A first-time player can wait about a minute in the character room, because the game still calls Alta's shut-down web services and waits for each to time out.

:::note
None of these mean something is broken. They are how the game runs. The point is to measure how bad it is on *your* server, then decide whether to raise the limits or add a performance mod.
:::

## Measure it with Canary

[Canary](https://github.com/ChatonIsHere/Canary) is a diagnostics mod that records what your server was doing, so you can look back at a lag spike. Install it on the server like any other mod (see [Mods on your server](mods-on-your-server.md)). It keeps the last ten minutes in memory and records:

- every second: frame times, GC, memory, players, entities, errors and the game's update-module times
- every five seconds: player positions, and CPU, memory, disk and network
- every minute: entities by type and chunk, and rigidbodies
- every lag spike, and the first of each new error, tagged with the mod it came from

From the server console:

| Command | What it does |
| --- | --- |
| `canary status` | How the server is doing right now. |
| `canary record start` / `canary record stop` | Record to disk. |
| `canary mark <text>` | Note something on the timeline, like "cave run". |
| `canary profile start` | Time every script's updates and every mod's patches for a while. |

Open the saved file in the [Canary viewer](https://chatonishere.github.io/Canary/). What to watch: the **95th-percentile frame time and the spikes** (not the average, since lag is the long frames), **heap and process memory over hours** (a steady climb with the same players is a leak), and the **entity count by chunk**. The modding docs' [What to measure](../mod/game-api/performance.md#what-to-measure) goes deeper.

## What you can do without a mod

- **Raise the GC timer.** `garbage_collection_timer` in [server_settings.json](config-reference.md#server_settingsjson) sets how often the forced collection runs. A longer interval means fewer pauses, though each is still as long. (The Windows launcher calls it **GarbageCollectionTime** in its [settings](windows/settings.md).)
- **Give it cores and pin them.** In a container with a CPU limit, see [CPU and RAM](docker/settings-and-updates.md#cpu-and-ram).
- **Give it RAM for its worst day,** and **restart a busy server now and then** — that is the only way to get the heap back. [Before you host](before-you-host.md) has sizing numbers.

## Performance mods are worth it

On a busy server, a performance mod does more than the config levers can.

[Steady](https://github.com/ChatonIsHere/Steady) (mod id `ChatonIsHere.Steady`) is a server and client mod that patches the game to cut the freezes and the memory growth without changing how it plays. It stops the forced GC and the one after each navmesh scan, re-cuts only the navmesh tiles that changed, spreads chunk and player saves over frames, drops references to destroyed objects, and answers the dead Alta web calls at once instead of waiting for the timeout. In a 2.5-hour test with 20 players, the heap ended at about **1.2 GB with those references dropped, against about 4 GB without**. Add it to your [mod list](mods-on-your-server.md) and run `steady status` on the console to see what each fix has done. It only takes over the forced-GC clean-up if you leave `garbage_collection_timer` at 30.

[ATT-Optimizations](https://github.com/calebv2/ATT-Optimizations) by calebv2 is an alternative: a pair of server mods aimed at the caves and the forest.

For exactly what each mod changes, and the full breakdown of where a server spends its time and memory, see [Performance](../mod/game-api/performance.md).

## See also

- [Performance](../mod/game-api/performance.md) (the deep dive)
- [Before you host](before-you-host.md)
- [Config reference](config-reference.md)
