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
| <Link id="m-ctor" /><code>{"MicroTutorialOrbInjector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-microtutorialfaceorb" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" microTutorialFaceOrb"}</code> | <span className="api-desc">The orb prefab to spawn.</span> |
| <Link id="m-orbspawndatabychunk" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{", List<"}<Link to="/mod/game-api/types/game-other-namespaces/orbspawndata">{"OrbSpawnData"}</Link>{">> orbSpawnDataByChunk"}</code> | <span className="api-desc">Spawn data grouped by chunk.</span> |
| <Link id="m-spawnedorbentitiesbychunk" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{", List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{">> spawnedOrbEntitiesByChunk"}</code> | <span className="api-desc">Spawned orb entities grouped by chunk, used for despawning.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialfaceorbspawnsettings">{"MicroTutorialFaceOrbSpawnSettings"}</Link>{" Settings { get; }"}</code> | <span className="api-desc">The global `MicroTutorialFaceOrbSpawnSettings`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Server: reads the orb injector data from the settings and sets up spawning per chunk.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-despawnorbsforchunk" /><code>{"private void DespawnOrbsForChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Destroys the orbs spawned for a chunk, unless players are still in it.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Despawns all orbs and unhooks the chunk events.</span> |
| <Link id="m-setuporbspawndata" /><code>{"private void SetupOrbSpawnData("}<Link to="/mod/game-api/types/game-other-namespaces/orbinjectordata">{"OrbInjectorData"}</Link>{" data)"}</code> | <span className="api-desc">Stores spawn data under its chunk and hooks that chunk's load and unload events.</span> |
| <Link id="m-spawnorbsforchunk" /><code>{"private void SpawnOrbsForChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Spawns an orb for each spawn data entry in the chunk and sets its tutorial. Skipped when the system is disabled.</span> |

</details>
