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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/mod/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RaycastGrounded(float groundedValue, float airValue, Vector3 raycastOriginOffset, float raycastDistance, LayerMask layerMask, "}<Link to="/mod/game-api/types/alta-intelligence/raycastgroundedoperationtype">{"RaycastGroundedOperationType"}</Link>{" operationType)"}</code> | <span className="api-desc">Creates a `RaycastGrounded` from `groundedValue`, `airValue`, `raycastOriginOffset`, `raycastDistance`, `layerMask` and `operationType`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-airvalue" /><code>{"private float airValue"}</code> | <span className="api-desc">Value when nothing is hit.</span> |
| <Link id="m-groundedvalue" /><code>{"private float groundedValue"}</code> | <span className="api-desc">Value when ground is hit.</span> |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | <span className="api-desc">Layers counted as ground.</span> |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> | <span className="api-desc">Ray length, or the sphere radius for `OverlapSphere`.</span> |
| <Link id="m-raycastoperation" /><code>{"private Func<Vector3, Quaternion, bool> raycastOperation"}</code> | <span className="api-desc">The check picked from the operation type: a world-down ray, a body-down ray, or a sphere overlap.</span> |
| <Link id="m-raycastoriginoffset" /><code>{"private Vector3 raycastOriginOffset"}</code> | <span className="api-desc">Start point in the body's local space.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">Runs the check from the body's offset point and returns `groundedValue` on a hit, else `airValue`. The target is ignored.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Shows the two values.</span> |
