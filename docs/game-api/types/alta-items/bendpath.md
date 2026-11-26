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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`Path`](/game-api/types/alta-items/path)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BendPath()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglerange" /><code>{"private float angleRange"}</code> | Total angle of the arc in degrees (default 60). |
| <Link id="m-facingdirection" /><code>{"private Vector3 facingDirection"}</code> | Local direction the moved object faces, turned along the arc. |
| <Link id="m-initializedpivotdirection" /><code>{"private Vector3 initializedPivotDirection"}</code> | World direction to the pivot, cached by `Setup`. |
| <Link id="m-minposition" /><code>{"private Vector3 minPosition"}</code> | Direction from the pivot to the start of the arc, cached by `Setup`. |
| <Link id="m-needssetup" /><code>{"private bool needsSetup"}</code> | True until `Setup` has run. |
| <Link id="m-pivot" /><code>{"private Vector3 pivot"}</code> | World pivot point, cached by `Setup`. |
| <Link id="m-pivotdirection" /><code>{"private Vector3 pivotDirection"}</code> | Local direction from this transform to the pivot. |
| <Link id="m-pivotdistance" /><code>{"private float pivotDistance"}</code> | Distance from this transform to the pivot. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Arc radius the object is placed at. |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | Local axis the arc turns around. |
| <Link id="m-selfrotation" /><code>{"private Quaternion selfRotation"}</code> | This transform's rotation, cached by `Setup`. |
| <Link id="m-up" /><code>{"private Vector3 up"}</code> | World rotation axis, cached by `Setup`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getprogress" /><code>{"override float GetProgress(Transform transform)"}</code> | Returns 0 to 1 for where a transform sits along the arc, clamped at the ends. |
| <Link id="m-settransform" /><code>{"override void SetTransform(Transform transform, float lerp)"}</code> | Places and rotates a transform on the arc at the given 0 to 1 progress. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Caches the pivot point, axis and start direction from the current transform; runs on first use. |

</details>
