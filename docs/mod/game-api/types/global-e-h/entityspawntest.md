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
| <Link id="m-ctor" /><code>{"EntitySpawnTest()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentlyspawned" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"> currentlySpawned"}</code> | <span className="api-desc">Entities spawned and not yet destroyed.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">This object's entity, whose spawner is used.</span> |
| <Link id="m-existingcount" /><code>{"private int existingCount"}</code> | <span className="api-desc">How many spawned entities still exist.</span> |
| <Link id="m-isdeletingall" /><code>{"private bool isDeletingAll"}</code> | <span className="api-desc">Inspector button that destroys all spawned entities.</span> |
| <Link id="m-isdeletingold" /><code>{"private bool isDeletingOld"}</code> | <span className="api-desc">When on, destroys the oldest spawned entities each frame.</span> |
| <Link id="m-isspawning" /><code>{"private bool isSpawning"}</code> | <span className="api-desc">When on, spawns new entities each frame.</span> |
| <Link id="m-numbertospawneachframe" /><code>{"private int numberToSpawnEachFrame"}</code> | <span className="api-desc">How many to spawn or destroy per frame.</span> |
| <Link id="m-prefabtospawn" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefabToSpawn"}</code> | <span className="api-desc">The network prefab to spawn.</span> |
| <Link id="m-spawnedcount" /><code>{"private int spawnedCount"}</code> | <span className="api-desc">Total spawned so far.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the `NetworkEntity` on the same object.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">When the Delete All button is pressed, destroys every spawned entity.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Destroys the oldest spawned entities and/or spawns new ones, `numberToSpawnEachFrame` at a time, and updates the counters.</span> |

</details>
