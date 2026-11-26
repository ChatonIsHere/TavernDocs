---
title: "MarchingCubesTest"
description: "Test component that builds a marching cubes mesh from random spheres when enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MarchingCubesTest

A **class** in `Root.Township`, the global namespace.

Test component that builds a marching cubes mesh from random spheres when enabled.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MarchingCubesTest()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isolevel" /><code>{"private float isoLevel"}</code> | <span className="api-desc">Density level the surface is built at.</span> |
| <Link id="m-maximumradius" /><code>{"private float maximumRadius"}</code> | <span className="api-desc">Largest sphere radius.</span> |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | <span className="api-desc">The generated mesh.</span> |
| <Link id="m-minimumradius" /><code>{"private float minimumRadius"}</code> | <span className="api-desc">Smallest sphere radius.</span> |
| <Link id="m-size" /><code>{"private int size"}</code> | <span className="api-desc">Grid size on each axis.</span> |
| <Link id="m-spheres" /><code>{"private int spheres"}</code> | <span className="api-desc">Number of random spheres.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Cleans up the generated mesh.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Fills a density grid with random spheres, meshes it with `MarchingCubes` and puts the result on the `MeshFilter`.</span> |

</details>
