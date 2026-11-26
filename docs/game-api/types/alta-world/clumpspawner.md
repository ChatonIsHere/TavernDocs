---
title: "ClumpSpawner"
description: "Scatters grass clump prefabs in a circle or square around itself at start and groups them in a LOD group."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClumpSpawner

A **class** in `Root.Township`, `Alta.Environmental.Vegetation`.

Scatters grass clump prefabs in a circle or square around itself at start and groups them in a LOD group. Mostly a tool for building scenes.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ClumpLOD`](/game-api/types/alta-world/clumpspawner-clumplod), [`Shape`](/game-api/types/alta-world/clumpspawner-shape)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClumpSpawner()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-grassmaterial" /><code>{"private Material grassMaterial"}</code> | Serialized grass material. Not read in this file. |
| <Link id="m-istorefresh" /><code>{"private bool isToRefresh"}</code> | Tick to clear and respawn the clumps. |
| <Link id="m-lodgroup" /><code>{"private LODGroup lodGroup"}</code> | LOD group added at start. |
| <Link id="m-lodsteps" /><code>{"private "}<Link to="/game-api/types/alta-world/clumpspawner-clumplod">{"ClumpSpawner.ClumpLOD"}</Link>{"[] lodSteps"}</code> | Prefab, LOD threshold and spawn chance for each LOD level. |
| <Link id="m-loopinstancecontroler" /><code>{"private int loopInstanceControler"}</code> | Yields a frame after this many clumps. Default 100. |
| <Link id="m-numberofclumps" /><code>{"private int numberOfClumps"}</code> | How many clumps to spawn. |
| <Link id="m-shape" /><code>{"private "}<Link to="/game-api/types/alta-world/clumpspawner-shape">{"ClumpSpawner.Shape"}</Link>{" shape"}</code> | Spawn area shape, circle or square. |
| <Link id="m-width" /><code>{"private float width"}</code> | Radius or half width of the spawn area. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasprefabs" /><code>{"private bool HasPrefabs { get; }"}</code> | True if any LOD steps are set. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Empty. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: keeps `loopInstanceControler` at least 1 and, when `isToRefresh` is ticked, clears the spawned children. |
| <Link id="m-spawnineditor" /><code>{"private void SpawnInEditor()"}</code> | Empty in this build. |
| <Link id="m-start" /><code>{"private IEnumerator Start() (iterator)"}</code> | Coroutine that spawns `numberOfClumps` clumps at random spots and rotations, each LOD by its chance, then sets up the LOD group. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | When `isToRefresh` is set, destroys the children. It calls `Start` directly, which doesn't run the coroutine, so nothing respawns. |

</details>
