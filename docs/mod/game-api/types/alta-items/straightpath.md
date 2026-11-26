---
title: "StraightPath"
description: "A Path along a straight line centred on this transform, for sliders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StraightPath

A **class** in `Root.Township`, `Alta.Mechanisms`.

A `Path` along a straight line centred on this transform, for sliders.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`Path`](/mod/game-api/types/alta-items/path)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StraightPath()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> | Local direction of the line. |
| <Link id="m-correctedaxis" /><code>{"private Vector3 correctedAxis"}</code> | World direction of the line, cached by `Setup`. |
| <Link id="m-minposition" /><code>{"private Vector3 minPosition"}</code> | World start of the line, cached by `Setup`. |
| <Link id="m-needssetup" /><code>{"private bool needsSetup"}</code> | True until `Setup` has run. |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | This transform's rotation, cached by `Setup`. |
| <Link id="m-width" /><code>{"private float width"}</code> | Length of the line (default 1). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getprogress" /><code>{"override float GetProgress(Transform transform)"}</code> | Returns 0 to 1 for where a transform sits along the line's `width`. |
| <Link id="m-settransform" /><code>{"override void SetTransform(Transform transform, float lerp)"}</code> | Places a transform on the line and gives it this path's rotation. The move is not scaled by `width`, so it only matches `GetProgress` when width is 1. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Caches the rotation, world axis and start point; runs on first use. |

</details>
