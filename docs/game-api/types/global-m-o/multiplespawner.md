---
title: "MultipleSpawner"
description: "Network entity holding a list of simple spawners, each spawning a prefab or distribution at spawn points in the entity's chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MultipleSpawner

A **class** in `Root.Township`, no namespace.

Network entity holding a list of simple spawners, each spawning a prefab or distribution at spawn points in the entity's chunk. Server only; something must call `Spawn`.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`SimpleSpawner`](/game-api/types/global-m-o/multiplespawner-simplespawner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MultipleSpawner()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawners" /><code>{"private List<"}<Link to="/game-api/types/global-m-o/multiplespawner-simplespawner">{"MultipleSpawner.SimpleSpawner"}</Link>{"> spawners"}</code> | Backing field for `Spawners`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-spawners-2" /><code>{"List<"}<Link to="/game-api/types/global-m-o/multiplespawner-simplespawner">{"MultipleSpawner.SimpleSpawner"}</Link>{"> Spawners { get; }"}</code> | The simple spawners to run. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"void Spawn()"}</code> | Server: runs every spawner in the list, if the entity is in a chunk. |
