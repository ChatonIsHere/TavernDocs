---
title: "MicroTutorialOrbInjector"
description: "Server: spawns micro tutorial entry orbs into chunks listed in MicroTutorialFaceOrbSpawnSettings when those chunks load, and removes them when they unload."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialOrbInjector

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Server: spawns micro tutorial entry orbs into chunks listed in `MicroTutorialFaceOrbSpawnSettings` when those chunks load, and removes them when they unload.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialOrbInjector()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |
| <Link id="m-microtutorialfaceorb" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" microTutorialFaceOrb"}</code> | The orb prefab to spawn. |
| <Link id="m-orbspawndatabychunk" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{", List<"}<Link to="/mod/game-api/types/game-other-namespaces/orbspawndata">{"OrbSpawnData"}</Link>{">> orbSpawnDataByChunk"}</code> | Spawn data grouped by chunk. |
| <Link id="m-spawnedorbentitiesbychunk" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{", List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{">> spawnedOrbEntitiesByChunk"}</code> | Spawned orb entities grouped by chunk, used for despawning. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialfaceorbspawnsettings">{"MicroTutorialFaceOrbSpawnSettings"}</Link>{" Settings { get; }"}</code> | The global `MicroTutorialFaceOrbSpawnSettings`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Server: reads the orb injector data from the settings and sets up spawning per chunk. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-despawnorbsforchunk" /><code>{"private void DespawnOrbsForChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Destroys the orbs spawned for a chunk, unless players are still in it. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Despawns all orbs and unhooks the chunk events. |
| <Link id="m-setuporbspawndata" /><code>{"private void SetupOrbSpawnData("}<Link to="/mod/game-api/types/game-other-namespaces/orbinjectordata">{"OrbInjectorData"}</Link>{" data)"}</code> | Stores spawn data under its chunk and hooks that chunk's load and unload events. |
| <Link id="m-spawnorbsforchunk" /><code>{"private void SpawnOrbsForChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Spawns an orb for each spawn data entry in the chunk and sets its tutorial. Skipped when the system is disabled. |

</details>
