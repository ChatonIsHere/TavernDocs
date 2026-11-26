---
title: "SceneViewVisualizer"
description: "Editor helper that draws a sphere or an axis gizmo at its transform in the scene view."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SceneViewVisualizer

A **class** in `Root.Township`, the global namespace.

Editor helper that draws a sphere or an axis gizmo at its transform in the scene view.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SceneViewVisualizer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gizmoscolor" /><code>{"private Color gizmosColor"}</code> | <span className="api-desc">Sphere colour. Default black.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Whether to draw anything. Default true.</span> |
| <Link id="m-isdrawingasaxis" /><code>{"private bool isDrawingAsAxis"}</code> | <span className="api-desc">Draws the transform's axes instead of a sphere.</span> |
| <Link id="m-size" /><code>{"private float size"}</code> | <span className="api-desc">Sphere radius. Default 0.05.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws red, green and blue axis rays, or a coloured sphere, if active.</span> |

</details>
