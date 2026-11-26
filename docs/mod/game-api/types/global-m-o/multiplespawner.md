---
title: "MultipleSpawner"
description: "Network entity holding a list of simple spawners, each spawning a prefab or distribution at spawn points in the entity's chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MultipleSpawner

A **class** in `Root.Township`, the global namespace.

Network entity holding a list of simple spawners, each spawning a prefab or distribution at spawn points in the entity's chunk. Server only; something must call `Spawn`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`SimpleSpawner`](/mod/game-api/types/global-m-o/multiplespawner-simplespawner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MultipleSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawners" /><code>{"private List<"}<Link to="/mod/game-api/types/global-m-o/multiplespawner-simplespawner">{"MultipleSpawner.SimpleSpawner"}</Link>{"> spawners"}</code> | <span className="api-desc">Backing field for `Spawners`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-spawners-2" /><code>{"List<"}<Link to="/mod/game-api/types/global-m-o/multiplespawner-simplespawner">{"MultipleSpawner.SimpleSpawner"}</Link>{"> Spawners { get; }"}</code> | <span className="api-desc">The simple spawners to run.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"void Spawn()"}</code> | <span className="api-desc">Server: runs every spawner in the list, if the entity is in a chunk.</span> |
