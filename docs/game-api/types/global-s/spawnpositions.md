---
title: "SpawnPositions"
description: "Fixed list of spawn points for a population, either live child transforms or positions and rotations cached relative to this object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnPositions

A **class** in `Root.Township`, no namespace.

Fixed list of spawn points for a population, either live child transforms or positions and rotations cached relative to this object.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`ISpawnPositions`](/game-api/types/global-i-l/ispawnpositions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnPositions()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btncache" /><code>{"private bool btnCache"}</code> | Inspector button that calls `Cache`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-positions" /><code>{"private Vector3[] positions"}</code> | Cached local positions, used when no transforms are set. |
| <Link id="m-rotations" /><code>{"private Quaternion[] rotations"}</code> | Cached local rotations matching `positions`. |
| <Link id="m-transforms" /><code>{"private Transform[] transforms"}</code> | Spawn point transforms; when not empty they win over the cached arrays. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of spawn points: the transforms if any are set, else the cached positions. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cache" /><code>{"void Cache()"}</code> | Editor: copies the transforms' local positions and rotations into the arrays, then clears the transform list. |
| <Link id="m-getlocalspawnposition" /><code><Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetLocalSpawnPosition(int index)"}</code> | Returns spawn point `index` in local space; logs an error and returns null if the index is bad. |
| <Link id="m-getspawnposition" /><code><Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetSpawnPosition(int index)"}</code> | Returns spawn point `index` in world space; logs an error and returns null if the index is bad. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: runs the cache button and keeps the rotations array the same length as the positions. |
| <Link id="m-setsize" /><code>{"private void ISpawnPositions.SetSize(float size)"}</code> | Part of `ISpawnPositions`; does nothing here. |

</details>

## Used in

Members of other types that take, return or hold a `SpawnPositions`:

[`PotatoSapling.positions`](/game-api/types/global-p/potatosapling#m-positions), [`StaticPositionSpawner.positions`](/game-api/types/global-s/staticpositionspawner#m-positions).
