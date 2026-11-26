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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RaycastGroundedOperation()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-airvalue" /><code>{"private float airValue"}</code> | Value when nothing is hit (default 0). |
| <Link id="m-groundedvalue" /><code>{"private float groundedValue"}</code> | Value when ground is hit (default 1). |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | Layers counted as ground. |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/raycastgroundedoperationtype">{"RaycastGroundedOperationType"}</Link>{" operationType"}</code> | `RayGlobalDown`, `RayLocalDown` or `OverlapSphere`. |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> | Ray length or sphere radius (default 1). |
| <Link id="m-raycastoriginoffset" /><code>{"private Vector3 raycastOriginOffset"}</code> | Start point in the body's local space. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | Makes the `RaycastGrounded` rule with these settings. |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | Builds the GameObject name, like `Grounded ? 1 : 0`. |
