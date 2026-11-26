---
title: "StaticPositionSpawner"
description: "Local decoration spawner: when enabled, instantiates a random non-networked prefab at each point of the SpawnPositions on the same object, and removes them..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticPositionSpawner

A **class** in `Root.Township`, the global namespace.

Local decoration spawner: when enabled, instantiates a random non-networked prefab at each point of the `SpawnPositions` on the same object, and removes them when disabled.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticPositionSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-positions" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawnpositions">{"SpawnPositions"}</Link>{" positions"}</code> | <span className="api-desc">The `SpawnPositions` on this object.</span> |
| <Link id="m-staticprefabs" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/gameobjectdistribution">{"GameObjectDistribution"}</Link>{" staticPrefabs"}</code> | <span className="api-desc">Distribution the prefabs are picked from.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Caches the `SpawnPositions` component.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Destroys all child objects, including the spawned prefabs.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Spawns a random prefab from `staticPrefabs` at each spawn point.</span> |

</details>
