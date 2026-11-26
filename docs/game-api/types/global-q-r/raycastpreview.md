---
title: "RaycastPreview"
description: "Editor helper that draws a gizmo raycast forward from the object: green to the hit with a blue normal, red if nothing is hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaycastPreview

A **class** in `Root.Township`, no namespace.

Editor helper that draws a gizmo raycast forward from the object: green to the hit with a blue normal, red if nothing is hit.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RaycastPreview()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hit" /><code>{"private RaycastHit hit"}</code> | Last raycast hit. |
| <Link id="m-mask" /><code>{"private LayerMask mask"}</code> | Layers the ray hits. |
| <Link id="m-maximumdistance" /><code>{"private float maximumDistance"}</code> | Ray length. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Casts the ray and draws the result. |

</details>
