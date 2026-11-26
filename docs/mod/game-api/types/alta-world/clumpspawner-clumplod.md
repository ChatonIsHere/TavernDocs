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
| <Link id="m-ctor" /><code>{"ClumpLOD()"}</code> | Creates a `ClumpSpawner.ClumpLOD` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-appearpoint" /><code>{"private float appearPoint"}</code> | Backing field for `AppearPoint`. |
| <Link id="m-chance" /><code>{"private float chance"}</code> | Backing field for `Chance`. |
| <Link id="m-gameobject" /><code>{"private GameObject gameObject"}</code> | Backing field for `GameObject`. |
| <Link id="m-renderers" /><code>{"private List<Renderer> renderers"}</code> | Backing field for `Renderers`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-appearpoint-2" /><code>{"float AppearPoint { get; }"}</code> | Screen height fraction this LOD level switches at, passed to Unity's `LOD`. |
| <Link id="m-chance-2" /><code>{"float Chance { get; }"}</code> | Chance (0 to 1) that each clump gets an object for this level. |
| <Link id="m-gameobject-2" /><code>{"GameObject GameObject { get; }"}</code> | Prefab spawned for this level. |
| <Link id="m-renderers-2" /><code>{"List<Renderer> Renderers { get; }"}</code> | Renderers spawned for this level, added to the LOD group at the end. |

## Used in

Members of other types that take, return or hold a `ClumpLOD`:

[`ClumpSpawner.lodSteps`](/mod/game-api/types/alta-world/clumpspawner#m-lodsteps).
