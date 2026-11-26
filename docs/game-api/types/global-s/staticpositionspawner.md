---
title: "StaticPositionSpawner"
description: "Local decoration spawner: when enabled, instantiates a random non-networked prefab at each point of the SpawnPositions on the same object, and removes them..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticPositionSpawner

A **class** in `Root.Township`, no namespace.

Local decoration spawner: when enabled, instantiates a random non-networked prefab at each point of the `SpawnPositions` on the same object, and removes them when disabled.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StaticPositionSpawner()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-positions" /><code>{"private "}<Link to="/game-api/types/global-s/spawnpositions">{"SpawnPositions"}</Link>{" positions"}</code> | The `SpawnPositions` on this object. |
| <Link id="m-staticprefabs" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/gameobjectdistribution">{"GameObjectDistribution"}</Link>{" staticPrefabs"}</code> | Distribution the prefabs are picked from. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches the `SpawnPositions` component. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Destroys all child objects, including the spawned prefabs. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Spawns a random prefab from `staticPrefabs` at each spawn point. |

</details>
