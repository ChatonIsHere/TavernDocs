---
title: "SceneViewVisualizer"
description: "Editor helper that draws a sphere or an axis gizmo at its transform in the scene view."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SceneViewVisualizer

A **class** in `Root.Township`, no namespace.

Editor helper that draws a sphere or an axis gizmo at its transform in the scene view.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SceneViewVisualizer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gizmoscolor" /><code>{"private Color gizmosColor"}</code> | Sphere colour. Default black. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Whether to draw anything. Default true. |
| <Link id="m-isdrawingasaxis" /><code>{"private bool isDrawingAsAxis"}</code> | Draws the transform's axes instead of a sphere. |
| <Link id="m-size" /><code>{"private float size"}</code> | Sphere radius. Default 0.05. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws red, green and blue axis rays, or a coloured sphere, if active. |

</details>
