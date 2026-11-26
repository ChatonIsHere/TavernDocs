---
title: "PouchSpawner"
description: "Server: spawner that places an item, or a stack of it inside a pouch when the count is more than one and the item can be picked up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PouchSpawner

A **class** in `Root.Township`, the global namespace.

Server: spawner that places an item, or a stack of it inside a pouch when the count is more than one and the item can be picked up.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`SpawnerBase`](/mod/game-api/types/global-s/spawnerbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PouchSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/attributeusage">{"AttributeUsage"}</Link>{" count"}</code> | <span className="api-desc">How many to spawn, read from chunk attributes.</span> |
| <Link id="m-counttospawn" /><code>{"private int countToSpawn"}</code> | <span className="api-desc">Count worked out for the current spawn.</span> |
| <Link id="m-distribution" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | <span className="api-desc">Distribution to pick the item from when `prefab` is not set.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">Item to spawn. Use this or `distribution`.</span> |
| <Link id="m-prefabtospawn" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefabToSpawn"}</code> | <span className="api-desc">Item picked for the current spawn.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"override void Spawn()"}</code> | <span className="api-desc">Server: works out the count from chunk attributes, picks the prefab and spawns it or a pouch. Refuses to put a pouch in a pouch.</span> |
| <Link id="m-onspawn" /><code>{"protected override void OnSpawn("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawned)"}</code> | <span className="api-desc">When a pouch spawns, spawns the item and docks `countToSpawn` of it into the pouch.</span> |
