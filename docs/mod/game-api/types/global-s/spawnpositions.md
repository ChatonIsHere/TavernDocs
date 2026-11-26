---
title: "SpawnPositions"
description: "Fixed list of spawn points for a population, either live child transforms or positions and rotations cached relative to this object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnPositions

A **class** in `Root.Township`, the global namespace.

Fixed list of spawn points for a population, either live child transforms or positions and rotations cached relative to this object.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`ISpawnPositions`](/mod/game-api/types/global-i-l/ispawnpositions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnPositions()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btncache" /><code>{"private bool btnCache"}</code> | <span className="api-desc">Inspector button that calls `Cache`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-positions" /><code>{"private Vector3[] positions"}</code> | <span className="api-desc">Cached local positions, used when no transforms are set.</span> |
| <Link id="m-rotations" /><code>{"private Quaternion[] rotations"}</code> | <span className="api-desc">Cached local rotations matching `positions`.</span> |
| <Link id="m-transforms" /><code>{"private Transform[] transforms"}</code> | <span className="api-desc">Spawn point transforms; when not empty they win over the cached arrays.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of spawn points: the transforms if any are set, else the cached positions.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cache" /><code>{"void Cache()"}</code> | <span className="api-desc">Editor: copies the transforms' local positions and rotations into the arrays, then clears the transform list.</span> |
| <Link id="m-getlocalspawnposition" /><code><Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetLocalSpawnPosition(int index)"}</code> | <span className="api-desc">Returns spawn point `index` in local space; logs an error and returns null if the index is bad.</span> |
| <Link id="m-getspawnposition" /><code><Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetSpawnPosition(int index)"}</code> | <span className="api-desc">Returns spawn point `index` in world space; logs an error and returns null if the index is bad.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: runs the cache button and keeps the rotations array the same length as the positions.</span> |
| <Link id="m-setsize" /><code>{"private void ISpawnPositions.SetSize(float size)"}</code> | <span className="api-desc">Part of `ISpawnPositions`; does nothing here.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SpawnPositions`:

<div className="api-used-in">

[`PotatoSapling.positions`](/mod/game-api/types/global-p/potatosapling#m-positions), [`StaticPositionSpawner.positions`](/mod/game-api/types/global-s/staticpositionspawner#m-positions).

</div>
