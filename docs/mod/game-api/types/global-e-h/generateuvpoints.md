---
title: "GenerateUVPoints"
description: "Editor tool that places empty child objects on mesh surfaces at given texture coordinates."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerateUVPoints

A **class** in `Root.Township`, the global namespace.

Editor tool that places empty child objects on mesh surfaces at given texture coordinates.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenerateUVPoints()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isgenerating" /><code>{"private bool isGenerating"}</code> | <span className="api-desc">Inspector button that runs `Generate`.</span> |
| <Link id="m-isyflipped" /><code>{"private bool isYFlipped"}</code> | <span className="api-desc">Flips the V coordinate.</span> |
| <Link id="m-meshfilters" /><code>{"private MeshFilter[] meshFilters"}</code> | <span className="api-desc">Meshes to place points on.</span> |
| <Link id="m-texturesize" /><code>{"private Vector2 textureSize"}</code> | <span className="api-desc">Texture size in pixels; UV points are divided by it.</span> |
| <Link id="m-uvpoints" /><code>{"private Vector2[] uvPoints"}</code> | <span className="api-desc">Points in texture pixels.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"private void Generate()"}</code> | <span className="api-desc">For each UV point, finds the triangles that contain it on each mesh and creates a child object at that spot.</span> |

</details>
