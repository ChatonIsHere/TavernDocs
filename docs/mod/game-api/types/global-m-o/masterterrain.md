---
title: "MasterTerrain"
description: "The main Unity terrain of the world, reached through Instance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MasterTerrain

A **class** in `Root.Township`, the global namespace.

The main Unity terrain of the world, reached through `Instance`. On a headless server its rendering is turned off.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MasterTerrain()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidbasemapdistance" /><code>{"private float androidBaseMapDistance"}</code> | <span className="api-desc">Base map distance meant for Android; this build does not use it.</span> |
| <Link id="m-basemapdistance" /><code>{"private float baseMapDistance"}</code> | <span className="api-desc">Distance at which the terrain switches to its base map.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Backing field for `IsActive`.</span> |
| <Link id="m-terrain" /><code>{"private Terrain terrain"}</code> | <span className="api-desc">Backing field for `Terrain`.</span> |
| <Link id="m-terraincollider" /><code>{"private TerrainCollider terrainCollider"}</code> | <span className="api-desc">Backing field for `Collider`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-collider" /><code>{"TerrainCollider Collider { get; }"}</code> | <span className="api-desc">The terrain collider.</span> |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/masterterrain">{"MasterTerrain"}</Link>{" Instance { get; private set; }"}</code> | <span className="api-desc">The last `MasterTerrain` to wake.</span> |
| <Link id="m-isactive-2" /><code>{"bool IsActive { get; set; }"}</code> | <span className="api-desc">Setting it turns both the terrain and its collider on or off.</span> |
| <Link id="m-terrain-2" /><code>{"Terrain Terrain { get; }"}</code> | <span className="api-desc">The Unity terrain.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `Instance`; turns the terrain renderer off when headless, otherwise sets the base map distance.</span> |

</details>
