---
title: "EntitySpawnTest"
description: "Debug stress test that spawns or destroys a number of copies of a network prefab every frame through its entity's spawner."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntitySpawnTest

A **class** in `Root.Township`, the global namespace.

Debug stress test that spawns or destroys a number of copies of a network prefab every frame through its entity's spawner.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntitySpawnTest()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentlyspawned" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> currentlySpawned"}</code> | Entities spawned and not yet destroyed. |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | This object's entity, whose spawner is used. |
| <Link id="m-existingcount" /><code>{"private int existingCount"}</code> | How many spawned entities still exist. |
| <Link id="m-isdeletingall" /><code>{"private bool isDeletingAll"}</code> | Inspector button that destroys all spawned entities. |
| <Link id="m-isdeletingold" /><code>{"private bool isDeletingOld"}</code> | When on, destroys the oldest spawned entities each frame. |
| <Link id="m-isspawning" /><code>{"private bool isSpawning"}</code> | When on, spawns new entities each frame. |
| <Link id="m-numbertospawneachframe" /><code>{"private int numberToSpawnEachFrame"}</code> | How many to spawn or destroy per frame. |
| <Link id="m-prefabtospawn" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefabToSpawn"}</code> | The network prefab to spawn. |
| <Link id="m-spawnedcount" /><code>{"private int spawnedCount"}</code> | Total spawned so far. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the `NetworkEntity` on the same object. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | When the Delete All button is pressed, destroys every spawned entity. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Destroys the oldest spawned entities and/or spawns new ones, `numberToSpawnEachFrame` at a time, and updates the counters. |

</details>
