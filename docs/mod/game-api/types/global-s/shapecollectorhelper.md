---
title: "ShapeCollectorHelper"
description: "Editor helper that draws the gizmos of a ShapeImpactCollector at this transform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShapeCollectorHelper

A **class** in `Root.Township`, the global namespace.

Editor helper that draws the gizmos of a `ShapeImpactCollector` at this transform.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShapeCollectorHelper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-collector" /><code><Link to="/mod/game-api/types/global-s/shapeimpactcollector">{"ShapeImpactCollector"}</Link>{" collector"}</code> | The impact collector to preview. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws the collector's gizmos in this object's local space. |

</details>
