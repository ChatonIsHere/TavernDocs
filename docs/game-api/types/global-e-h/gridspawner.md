---
title: "GridSpawner"
description: "Editor tool that places copies of objects in a 3D grid under this transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GridSpawner

A **class** in `Root.Township`, no namespace.

Editor tool that places copies of objects in a 3D grid under this transform.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GridSpawner()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-columns" /><code>{"private int columns"}</code> | Grid size along Z. |
| <Link id="m-distance" /><code>{"private float distance"}</code> | Spacing between grid points. |
| <Link id="m-isplacinginfolders" /><code>{"private bool isPlacingInFolders"}</code> | Groups each prefab's copies under its own child object. |
| <Link id="m-levels" /><code>{"private int levels"}</code> | Grid size along Y. |
| <Link id="m-place" /><code>{"private bool place"}</code> | Inspector button that runs `Place`. |
| <Link id="m-rows" /><code>{"private int rows"}</code> | Grid size along X. |
| <Link id="m-tospawn" /><code>{"private GameObject[] toSpawn"}</code> | Objects to copy. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws a green sphere at each grid point. |
| <Link id="m-place-2" /><code>{"private void Place()"}</code> | Instantiates each prefab at every grid point, optionally in a folder object per prefab. |

</details>
