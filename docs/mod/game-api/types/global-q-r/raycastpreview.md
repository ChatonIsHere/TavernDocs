---
title: "RaycastPreview"
description: "Editor helper that draws a gizmo raycast forward from the object: green to the hit with a blue normal, red if nothing is hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaycastPreview

A **class** in `Root.Township`, the global namespace.

Editor helper that draws a gizmo raycast forward from the object: green to the hit with a blue normal, red if nothing is hit.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RaycastPreview()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hit" /><code>{"private RaycastHit hit"}</code> | <span className="api-desc">Last raycast hit.</span> |
| <Link id="m-mask" /><code>{"private LayerMask mask"}</code> | <span className="api-desc">Layers the ray hits.</span> |
| <Link id="m-maximumdistance" /><code>{"private float maximumDistance"}</code> | <span className="api-desc">Ray length.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Casts the ray and draws the result.</span> |

</details>
