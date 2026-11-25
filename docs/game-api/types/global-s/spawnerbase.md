---
title: "SpawnerBase"
description: "Base for networked spawners that spawn a prefab at themselves, at random or sequential spawn points, or at a forced position, with optional attribute..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnerBase

An **abstract class** in `Root.Township`, no namespace.

Base for networked spawners that spawn a prefab at themselves, at random or sequential spawn points, or at a forced position, with optional attribute overrides and material. Server side.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISpawner`](/game-api/types/global-i-l/ispawner)
- **Derived types** [`MultiSpawner`](/game-api/types/global-m-o/multispawner), [`PouchSpawner`](/game-api/types/global-p/pouchspawner), [`Spawner`](/game-api/types/global-s/spawner)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected SpawnerBase()"}</code> |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-attributes" /><code>{"private "}<Link to="/game-api/types/global-a-b/attributesinglevalue">{"AttributeSingleValue"}</Link>{"[] attributes"}</code> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |
| <Link id="m-ischildingspawned" /><code>{"private bool isChildingSpawned"}</code> |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> |
| <Link id="m-isrotationrandomyonly" /><code>{"private bool isRotationRandomYOnly"}</code> |
| <Link id="m-materialpart" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" materialPart"}</code> |
| <Link id="m-method" /><code>{"private "}<Link to="/game-api/types/global-s/spawnmethod">{"SpawnMethod"}</Link>{" method"}</code> |
| <Link id="m-nextid" /><code>{"private int nextId"}</code> |
| <Link id="m-nextposition" /><code>{"private Vector3 nextPosition"}</code> |
| <Link id="m-nextrotation" /><code>{"private Quaternion nextRotation"}</code> |
| <Link id="m-positioncache" /><code>{"private Vector3 positionCache"}</code> |
| <Link id="m-radius" /><code>{"private float radius"}</code> |
| <Link id="m-rotationcache" /><code>{"private Quaternion rotationCache"}</code> |
| <Link id="m-spawnpoints" /><code>{"private Transform[] spawnPoints"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-forceposition" /><code>{"Vector3? ForcePosition { get; private set; }"}</code> | A one-time position set by `SpawnAt`, used for the next spawn then cleared. |
| <Link id="m-isactive-2" /><code>{"bool IsActive { get; set; }"}</code> | When false, spawning does nothing. |
| <Link id="m-lastspawned" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" LastSpawned { get; private set; }"}</code> | The most recently spawned entity. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-nextspawnpoint" /><code>{"private Transform NextSpawnPoint { get; }"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"abstract void Spawn()"}</code> | Spawns the subclass's item. The protected overload spawns `count` copies of a prefab into the spawner's chunk, or as saved children if set to child them. |
| <Link id="m-spawnat" /><code>{"void SpawnAt(Vector3 location)"}</code> | Spawns once at a given position, with a random rotation. |
| <Link id="m-onspawn" /><code>{"protected virtual void OnSpawn("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawned)"}</code> | Called after each entity spawns. Empty by default. |
| <Link id="m-spawn-2" /><code>{"protected void Spawn("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, int count)"}</code> | Spawns the subclass's item. The protected overload spawns `count` copies of a prefab into the spawner's chunk, or as saved children if set to child them. |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-evaluateposition" /><code>{"private void EvaluatePosition()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-position" /><code>{"private void Position("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |
| <Link id="m-prechunk" /><code>{"private void PreChunk("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |
| <Link id="m-randomrotation" /><code>{"private Quaternion RandomRotation()"}</code> |

</details>
