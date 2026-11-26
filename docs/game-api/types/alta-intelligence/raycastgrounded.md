---
title: "RaycastGrounded"
description: "Scoring rule that checks for ground near the creature's body with a ray or sphere, returning one value when ground is found and another when not."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaycastGrounded

A **class** in `Root.Township`, `Alta.Intelligence`.

Scoring rule that checks for ground near the creature's body with a ray or sphere, returning one value when ground is found and another when not. Made by `CreateTargetOperation.RaycastGrounded`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RaycastGrounded(float groundedValue, float airValue, Vector3 raycastOriginOffset, float raycastDistance, LayerMask layerMask, "}<Link to="/game-api/types/alta-intelligence/raycastgroundedoperationtype">{"RaycastGroundedOperationType"}</Link>{" operationType)"}</code> | Creates a `RaycastGrounded` from `groundedValue`, `airValue`, `raycastOriginOffset`, `raycastDistance`, `layerMask` and `operationType`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-airvalue" /><code>{"private float airValue"}</code> | Value when nothing is hit. |
| <Link id="m-groundedvalue" /><code>{"private float groundedValue"}</code> | Value when ground is hit. |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | Layers counted as ground. |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> | Ray length, or the sphere radius for `OverlapSphere`. |
| <Link id="m-raycastoperation" /><code>{"private Func<Vector3, Quaternion, bool> raycastOperation"}</code> | The check picked from the operation type: a world-down ray, a body-down ray, or a sphere overlap. |
| <Link id="m-raycastoriginoffset" /><code>{"private Vector3 raycastOriginOffset"}</code> | Start point in the body's local space. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Runs the check from the body's offset point and returns `groundedValue` on a hit, else `airValue`. The target is ignored. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Shows the two values. |
