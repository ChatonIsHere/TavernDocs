---
title: "GenerateUVPoints"
description: "Editor tool that places empty child objects on mesh surfaces at given texture coordinates."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerateUVPoints

A **class** in `Root.Township`, no namespace.

Editor tool that places empty child objects on mesh surfaces at given texture coordinates.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenerateUVPoints()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isgenerating" /><code>{"private bool isGenerating"}</code> | Inspector button that runs `Generate`. |
| <Link id="m-isyflipped" /><code>{"private bool isYFlipped"}</code> | Flips the V coordinate. |
| <Link id="m-meshfilters" /><code>{"private MeshFilter[] meshFilters"}</code> | Meshes to place points on. |
| <Link id="m-texturesize" /><code>{"private Vector2 textureSize"}</code> | Texture size in pixels; UV points are divided by it. |
| <Link id="m-uvpoints" /><code>{"private Vector2[] uvPoints"}</code> | Points in texture pixels. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"private void Generate()"}</code> | For each UV point, finds the triangles that contain it on each mesh and creates a child object at that spot. |

</details>
