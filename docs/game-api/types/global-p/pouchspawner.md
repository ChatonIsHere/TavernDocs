---
title: "PouchSpawner"
description: "Server: spawner that places an item, or a stack of it inside a pouch when the count is more than one and the item can be picked up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PouchSpawner

A **class** in `Root.Township`, no namespace.

Server: spawner that places an item, or a stack of it inside a pouch when the count is more than one and the item can be picked up.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`SpawnerBase`](/game-api/types/global-s/spawnerbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PouchSpawner()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private "}<Link to="/game-api/types/global-a-b/attributeusage">{"AttributeUsage"}</Link>{" count"}</code> | How many to spawn, read from chunk attributes. |
| <Link id="m-counttospawn" /><code>{"private int countToSpawn"}</code> | Count worked out for the current spawn. |
| <Link id="m-distribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | Distribution to pick the item from when `prefab` is not set. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | Item to spawn. Use this or `distribution`. |
| <Link id="m-prefabtospawn" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefabToSpawn"}</code> | Item picked for the current spawn. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"override void Spawn()"}</code> | Server: works out the count from chunk attributes, picks the prefab and spawns it or a pouch. Refuses to put a pouch in a pouch. |
| <Link id="m-onspawn" /><code>{"protected override void OnSpawn("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawned)"}</code> | When a pouch spawns, spawns the item and docks `countToSpawn` of it into the pouch. |
