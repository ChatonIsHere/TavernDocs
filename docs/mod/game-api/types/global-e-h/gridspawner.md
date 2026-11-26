---
title: "GridSpawner"
description: "Editor tool that places copies of objects in a 3D grid under this transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GridSpawner

A **class** in `Root.Township`, the global namespace.

Editor tool that places copies of objects in a 3D grid under this transform.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GridSpawner()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-columns" /><code>{"private int columns"}</code> | <span className="api-desc">Grid size along Z.</span> |
| <Link id="m-distance" /><code>{"private float distance"}</code> | <span className="api-desc">Spacing between grid points.</span> |
| <Link id="m-isplacinginfolders" /><code>{"private bool isPlacingInFolders"}</code> | <span className="api-desc">Groups each prefab's copies under its own child object.</span> |
| <Link id="m-levels" /><code>{"private int levels"}</code> | <span className="api-desc">Grid size along Y.</span> |
| <Link id="m-place" /><code>{"private bool place"}</code> | <span className="api-desc">Inspector button that runs `Place`.</span> |
| <Link id="m-rows" /><code>{"private int rows"}</code> | <span className="api-desc">Grid size along X.</span> |
| <Link id="m-tospawn" /><code>{"private GameObject[] toSpawn"}</code> | <span className="api-desc">Objects to copy.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws a green sphere at each grid point.</span> |
| <Link id="m-place-2" /><code>{"private void Place()"}</code> | <span className="api-desc">Instantiates each prefab at every grid point, optionally in a folder object per prefab.</span> |

</details>
