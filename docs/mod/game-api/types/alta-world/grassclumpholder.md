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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrassClumpHolder()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blades" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world/grassblade">{"GrassBlade"}</Link>{"> blades"}</code> | <span className="api-desc">Blades held so far.</span> |
| <Link id="m-width" /><code>{"private float width"}</code> | <span className="api-desc">How far from the centre blades are scattered.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear(float _width)"}</code> | <span className="api-desc">Sets the scatter width and destroys every blade and child.</span> |
| <Link id="m-generatelod2" /><code>{"Mesh GenerateLOD2()"}</code> | <span className="api-desc">Merges all blades into one mesh cut down to about two triangles each, for a far LOD.</span> |
| <Link id="m-generatetemplate" /><code>{"Mesh GenerateTemplate(int maxLevels)"}</code> | <span className="api-desc">Merges all blades into one mesh, trimming each to at most `2 * maxLevels - 1` triangles.</span> |
| <Link id="m-receiveblade" /><code>{"void ReceiveBlade("}<Link to="/mod/game-api/types/alta-world/grassblademesh">{"GrassBladeMesh"}</Link>{" mesh, Material grassMaterial, bool isUnique)"}</code> | <span className="api-desc">Adds a blade from a blade mesh at a random spot within `width` (or the centre if unique) with a random turn.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Empty.</span> |

</details>
