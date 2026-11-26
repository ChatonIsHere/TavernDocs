---
title: "GrassClumpHolder"
description: "Editor tool that holds generated grass blades and merges them into clump meshes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrassClumpHolder

A **class** in `Root.Township`, `Alta.Environmental.Vegetation`.

Editor tool that holds generated grass blades and merges them into clump meshes.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrassClumpHolder()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blades" /><code>{"private List<"}<Link to="/game-api/types/alta-world/grassblade">{"GrassBlade"}</Link>{"> blades"}</code> | Blades held so far. |
| <Link id="m-width" /><code>{"private float width"}</code> | How far from the centre blades are scattered. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear(float _width)"}</code> | Sets the scatter width and destroys every blade and child. |
| <Link id="m-generatelod2" /><code>{"Mesh GenerateLOD2()"}</code> | Merges all blades into one mesh cut down to about two triangles each, for a far LOD. |
| <Link id="m-generatetemplate" /><code>{"Mesh GenerateTemplate(int maxLevels)"}</code> | Merges all blades into one mesh, trimming each to at most `2 * maxLevels - 1` triangles. |
| <Link id="m-receiveblade" /><code>{"void ReceiveBlade("}<Link to="/game-api/types/alta-world/grassblademesh">{"GrassBladeMesh"}</Link>{" mesh, Material grassMaterial, bool isUnique)"}</code> | Adds a blade from a blade mesh at a random spot within `width` (or the centre if unique) with a random turn. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Empty. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Empty. |

</details>
