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
| <Link id="m-ctor" /><code>{"StraightPath()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> | <span className="api-desc">Local direction of the line.</span> |
| <Link id="m-correctedaxis" /><code>{"private Vector3 correctedAxis"}</code> | <span className="api-desc">World direction of the line, cached by `Setup`.</span> |
| <Link id="m-minposition" /><code>{"private Vector3 minPosition"}</code> | <span className="api-desc">World start of the line, cached by `Setup`.</span> |
| <Link id="m-needssetup" /><code>{"private bool needsSetup"}</code> | <span className="api-desc">True until `Setup` has run.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">This transform's rotation, cached by `Setup`.</span> |
| <Link id="m-width" /><code>{"private float width"}</code> | <span className="api-desc">Length of the line (default 1).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getprogress" /><code>{"override float GetProgress(Transform transform)"}</code> | <span className="api-desc">Returns 0 to 1 for where a transform sits along the line's `width`.</span> |
| <Link id="m-settransform" /><code>{"override void SetTransform(Transform transform, float lerp)"}</code> | <span className="api-desc">Places a transform on the line and gives it this path's rotation. The move is not scaled by `width`, so it only matches `GetProgress` when width is 1.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Caches the rotation, world axis and start point; runs on first use.</span> |

</details>
