---
title: "BendPath"
description: "A Path that moves an object along an arc around a pivot, for curved sliders and levers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BendPath

A **class** in `Root.Township`, `Alta.Mechanisms`.

A `Path` that moves an object along an arc around a pivot, for curved sliders and levers.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`Path`](/mod/game-api/types/alta-items/path)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BendPath()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglerange" /><code>{"private float angleRange"}</code> | <span className="api-desc">Total angle of the arc in degrees (default 60).</span> |
| <Link id="m-facingdirection" /><code>{"private Vector3 facingDirection"}</code> | <span className="api-desc">Local direction the moved object faces, turned along the arc.</span> |
| <Link id="m-initializedpivotdirection" /><code>{"private Vector3 initializedPivotDirection"}</code> | <span className="api-desc">World direction to the pivot, cached by `Setup`.</span> |
| <Link id="m-minposition" /><code>{"private Vector3 minPosition"}</code> | <span className="api-desc">Direction from the pivot to the start of the arc, cached by `Setup`.</span> |
| <Link id="m-needssetup" /><code>{"private bool needsSetup"}</code> | <span className="api-desc">True until `Setup` has run.</span> |
| <Link id="m-pivot" /><code>{"private Vector3 pivot"}</code> | <span className="api-desc">World pivot point, cached by `Setup`.</span> |
| <Link id="m-pivotdirection" /><code>{"private Vector3 pivotDirection"}</code> | <span className="api-desc">Local direction from this transform to the pivot.</span> |
| <Link id="m-pivotdistance" /><code>{"private float pivotDistance"}</code> | <span className="api-desc">Distance from this transform to the pivot.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Arc radius the object is placed at.</span> |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | <span className="api-desc">Local axis the arc turns around.</span> |
| <Link id="m-selfrotation" /><code>{"private Quaternion selfRotation"}</code> | <span className="api-desc">This transform's rotation, cached by `Setup`.</span> |
| <Link id="m-up" /><code>{"private Vector3 up"}</code> | <span className="api-desc">World rotation axis, cached by `Setup`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getprogress" /><code>{"override float GetProgress(Transform transform)"}</code> | <span className="api-desc">Returns 0 to 1 for where a transform sits along the arc, clamped at the ends.</span> |
| <Link id="m-settransform" /><code>{"override void SetTransform(Transform transform, float lerp)"}</code> | <span className="api-desc">Places and rotates a transform on the arc at the given 0 to 1 progress.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Caches the pivot point, axis and start direction from the current transform; runs on first use.</span> |

</details>
