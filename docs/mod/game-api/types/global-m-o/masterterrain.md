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
| <Link id="m-ctor" /><code>{"MasterTerrain()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidbasemapdistance" /><code>{"private float androidBaseMapDistance"}</code> | Base map distance meant for Android; this build does not use it. |
| <Link id="m-basemapdistance" /><code>{"private float baseMapDistance"}</code> | Distance at which the terrain switches to its base map. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Backing field for `IsActive`. |
| <Link id="m-terrain" /><code>{"private Terrain terrain"}</code> | Backing field for `Terrain`. |
| <Link id="m-terraincollider" /><code>{"private TerrainCollider terrainCollider"}</code> | Backing field for `Collider`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-collider" /><code>{"TerrainCollider Collider { get; }"}</code> | The terrain collider. |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/masterterrain">{"MasterTerrain"}</Link>{" Instance { get; private set; }"}</code> | The last `MasterTerrain` to wake. |
| <Link id="m-isactive-2" /><code>{"bool IsActive { get; set; }"}</code> | Setting it turns both the terrain and its collider on or off. |
| <Link id="m-terrain-2" /><code>{"Terrain Terrain { get; }"}</code> | The Unity terrain. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `Instance`; turns the terrain renderer off when headless, otherwise sets the base map distance. |

</details>
