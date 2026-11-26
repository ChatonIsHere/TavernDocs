---
title: "ClumpSpawner.ClumpLOD"
description: "One LOD step of a ClumpSpawner: the prefab spawned at that level and the renderers made from it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClumpSpawner.ClumpLOD

A **class** in `Root.Township`, `Alta.Environmental.Vegetation`.

One LOD step of a `ClumpSpawner`: the prefab spawned at that level and the renderers made from it.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Nested in** [`ClumpSpawner`](/mod/game-api/types/alta-world/clumpspawner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClumpLOD()"}</code> | <span className="api-desc">Creates a `ClumpSpawner.ClumpLOD` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-appearpoint" /><code>{"private float appearPoint"}</code> | <span className="api-desc">Backing field for `AppearPoint`.</span> |
| <Link id="m-chance" /><code>{"private float chance"}</code> | <span className="api-desc">Backing field for `Chance`.</span> |
| <Link id="m-gameobject" /><code>{"private GameObject gameObject"}</code> | <span className="api-desc">Backing field for `GameObject`.</span> |
| <Link id="m-renderers" /><code>{"private List<Renderer> renderers"}</code> | <span className="api-desc">Backing field for `Renderers`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-appearpoint-2" /><code>{"float AppearPoint { get; }"}</code> | <span className="api-desc">Screen height fraction this LOD level switches at, passed to Unity's `LOD`.</span> |
| <Link id="m-chance-2" /><code>{"float Chance { get; }"}</code> | <span className="api-desc">Chance (0 to 1) that each clump gets an object for this level.</span> |
| <Link id="m-gameobject-2" /><code>{"GameObject GameObject { get; }"}</code> | <span className="api-desc">Prefab spawned for this level.</span> |
| <Link id="m-renderers-2" /><code>{"List<Renderer> Renderers { get; }"}</code> | <span className="api-desc">Renderers spawned for this level, added to the LOD group at the end.</span> |

## Used in

Members of other types that take, return or hold a `ClumpLOD`:

<div className="api-used-in">

[`ClumpSpawner.lodSteps`](/mod/game-api/types/alta-world/clumpspawner#m-lodsteps).

</div>
