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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`ClumpLOD`](/mod/game-api/types/alta-world/clumpspawner-clumplod), [`Shape`](/mod/game-api/types/alta-world/clumpspawner-shape)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClumpSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-grassmaterial" /><code>{"private Material grassMaterial"}</code> | <span className="api-desc">Serialized grass material. Not read in this file.</span> |
| <Link id="m-istorefresh" /><code>{"private bool isToRefresh"}</code> | <span className="api-desc">Tick to clear and respawn the clumps.</span> |
| <Link id="m-lodgroup" /><code>{"private LODGroup lodGroup"}</code> | <span className="api-desc">LOD group added at start.</span> |
| <Link id="m-lodsteps" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/clumpspawner-clumplod">{"ClumpSpawner.ClumpLOD"}</Link>{"[] lodSteps"}</code> | <span className="api-desc">Prefab, LOD threshold and spawn chance for each LOD level.</span> |
| <Link id="m-loopinstancecontroler" /><code>{"private int loopInstanceControler"}</code> | <span className="api-desc">Yields a frame after this many clumps. Default 100.</span> |
| <Link id="m-numberofclumps" /><code>{"private int numberOfClumps"}</code> | <span className="api-desc">How many clumps to spawn.</span> |
| <Link id="m-shape" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/clumpspawner-shape">{"ClumpSpawner.Shape"}</Link>{" shape"}</code> | <span className="api-desc">Spawn area shape, circle or square.</span> |
| <Link id="m-width" /><code>{"private float width"}</code> | <span className="api-desc">Radius or half width of the spawn area.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hasprefabs" /><code>{"private bool HasPrefabs { get; }"}</code> | <span className="api-desc">True if any LOD steps are set.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: keeps `loopInstanceControler` at least 1 and, when `isToRefresh` is ticked, clears the spawned children.</span> |
| <Link id="m-spawnineditor" /><code>{"private void SpawnInEditor()"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-start" /><code>{"private IEnumerator Start() (iterator)"}</code> | <span className="api-desc">Coroutine that spawns `numberOfClumps` clumps at random spots and rotations, each LOD by its chance, then sets up the LOD group.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">When `isToRefresh` is set, destroys the children. It calls `Start` directly, which doesn't run the coroutine, so nothing respawns.</span> |

</details>
