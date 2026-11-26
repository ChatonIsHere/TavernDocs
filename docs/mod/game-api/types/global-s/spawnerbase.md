---
title: "SpawnerBase"
description: "Base for networked spawners that spawn a prefab at themselves, at random or sequential spawn points, or at a forced position, with optional attribute..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnerBase

An **abstract class** in `Root.Township`, the global namespace.

Base for networked spawners that spawn a prefab at themselves, at random or sequential spawn points, or at a forced position, with optional attribute overrides and material. Server side.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISpawner`](/mod/game-api/types/global-i-l/ispawner)
- **Derived types** [`MultiSpawner`](/mod/game-api/types/global-m-o/multispawner), [`PouchSpawner`](/mod/game-api/types/global-p/pouchspawner), [`Spawner`](/mod/game-api/types/global-s/spawner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SpawnerBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/attributesinglevalue">{"AttributeSingleValue"}</Link>{"[] attributes"}</code> | <span className="api-desc">Attribute overrides written into the spawn data for every spawned entity.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Backing field for `IsActive`. While false, spawning does nothing.</span> |
| <Link id="m-ischildingspawned" /><code>{"private bool isChildingSpawned"}</code> | <span className="api-desc">Spawns entities as saved children parented to this spawner instead of into its chunk.</span> |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> | <span className="api-desc">Gives spawned entities a random rotation instead of the spawn point's.</span> |
| <Link id="m-isrotationrandomyonly" /><code>{"private bool isRotationRandomYOnly"}</code> | <span className="api-desc">Limits random rotation to a turn about Y.</span> |
| <Link id="m-materialpart" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" materialPart"}</code> | <span className="api-desc">Physical material copied onto spawned entities that have a `PhysicalMaterialPart`.</span> |
| <Link id="m-method" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnmethod">{"SpawnMethod"}</Link>{" method"}</code> | <span className="api-desc">How spawn points are chosen: sequence, random, or the spawner itself.</span> |
| <Link id="m-nextid" /><code>{"private int nextId"}</code> | <span className="api-desc">Index of the last spawn point used in sequence mode.</span> |
| <Link id="m-nextposition" /><code>{"private Vector3 nextPosition"}</code> | <span className="api-desc">Position chosen for the entity being spawned.</span> |
| <Link id="m-nextrotation" /><code>{"private Quaternion nextRotation"}</code> | <span className="api-desc">Rotation chosen for the entity being spawned.</span> |
| <Link id="m-positioncache" /><code>{"private Vector3 positionCache"}</code> | <span className="api-desc">Spawner position captured at the start of a spawn when there are no spawn points.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Random scatter radius around the spawner when there are no spawn points.</span> |
| <Link id="m-rotationcache" /><code>{"private Quaternion rotationCache"}</code> | <span className="api-desc">Spawner rotation captured with `positionCache`.</span> |
| <Link id="m-spawnpoints" /><code>{"private Transform[] spawnPoints"}</code> | <span className="api-desc">Optional transforms to spawn at.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-forceposition" /><code>{"Vector3? ForcePosition { get; private set; }"}</code> | <span className="api-desc">A one-time position set by `SpawnAt`, used for the next spawn then cleared.</span> |
| <Link id="m-isactive-2" /><code>{"bool IsActive { get; set; }"}</code> | <span className="api-desc">When false, spawning does nothing.</span> |
| <Link id="m-lastspawned" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" LastSpawned { get; private set; }"}</code> | <span className="api-desc">The most recently spawned entity.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nextspawnpoint" /><code>{"private Transform NextSpawnPoint { get; }"}</code> | <span className="api-desc">Next spawn point by `method`: in sequence, at random, or this transform.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"abstract void Spawn()"}</code> | <span className="api-desc">Spawns the subclass's item. The protected overload spawns `count` copies of a prefab into the spawner's chunk, or as saved children if set to child them.</span> |
| <Link id="m-spawnat" /><code>{"void SpawnAt(Vector3 location)"}</code> | <span className="api-desc">Spawns once at a given position, with a random rotation.</span> |
| <Link id="m-onspawn" /><code>{"protected virtual void OnSpawn("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawned)"}</code> | <span className="api-desc">Called after each entity spawns. Empty by default.</span> |
| <Link id="m-spawn-2" /><code>{"protected void Spawn("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, int count)"}</code> | <span className="api-desc">Spawns the subclass's item. The protected overload spawns `count` copies of a prefab into the spawner's chunk, or as saved children if set to child them.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluateposition" /><code>{"private void EvaluatePosition()"}</code> | <span className="api-desc">Picks the next spawn position and rotation: a forced position, a random spot within `radius`, or the next spawn point.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the spawn radius as a faint sphere.</span> |
| <Link id="m-position" /><code>{"private void Position("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Spawn callback that places the new entity at the chosen position and rotation.</span> |
| <Link id="m-prechunk" /><code>{"private void PreChunk("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Spawn callback that applies `materialPart`'s physical material to the new entity, if set.</span> |
| <Link id="m-randomrotation" /><code>{"private Quaternion RandomRotation()"}</code> | <span className="api-desc">A random rotation, or a random turn about Y only if `isRotationRandomYOnly`.</span> |

</details>
