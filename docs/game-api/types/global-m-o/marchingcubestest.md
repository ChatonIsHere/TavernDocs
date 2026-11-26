---
title: "MarchingCubesTest"
description: "Test component that builds a marching cubes mesh from random spheres when enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MarchingCubesTest

A **class** in `Root.Township`, no namespace.

Test component that builds a marching cubes mesh from random spheres when enabled.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MarchingCubesTest()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isolevel" /><code>{"private float isoLevel"}</code> | Density level the surface is built at. |
| <Link id="m-maximumradius" /><code>{"private float maximumRadius"}</code> | Largest sphere radius. |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | The generated mesh. |
| <Link id="m-minimumradius" /><code>{"private float minimumRadius"}</code> | Smallest sphere radius. |
| <Link id="m-size" /><code>{"private int size"}</code> | Grid size on each axis. |
| <Link id="m-spheres" /><code>{"private int spheres"}</code> | Number of random spheres. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Cleans up the generated mesh. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Fills a density grid with random spheres, meshes it with `MarchingCubes` and puts the result on the `MeshFilter`. |

</details>
