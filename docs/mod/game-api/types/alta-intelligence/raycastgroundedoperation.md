---
title: "RaycastGroundedOperation"
description: "Prefab scoring component that adds a RaycastGrounded rule."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaycastGroundedOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

Prefab scoring component that adds a `RaycastGrounded` rule. It has no multiplier, so its weight is always 1.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/mod/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RaycastGroundedOperation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-airvalue" /><code>{"private float airValue"}</code> | <span className="api-desc">Value when nothing is hit (default 0).</span> |
| <Link id="m-groundedvalue" /><code>{"private float groundedValue"}</code> | <span className="api-desc">Value when ground is hit (default 1).</span> |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | <span className="api-desc">Layers counted as ground.</span> |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/raycastgroundedoperationtype">{"RaycastGroundedOperationType"}</Link>{" operationType"}</code> | <span className="api-desc">`RayGlobalDown`, `RayLocalDown` or `OverlapSphere`.</span> |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> | <span className="api-desc">Ray length or sphere radius (default 1).</span> |
| <Link id="m-raycastoriginoffset" /><code>{"private Vector3 raycastOriginOffset"}</code> | <span className="api-desc">Start point in the body's local space.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | <span className="api-desc">Makes the `RaycastGrounded` rule with these settings.</span> |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | <span className="api-desc">Builds the GameObject name, like `Grounded ? 1 : 0`.</span> |
