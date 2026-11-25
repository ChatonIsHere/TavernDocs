---
title: "RaycastGrounded"
description: "class RaycastGrounded in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaycastGrounded

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/game-api/types/alta-intelligence/targetoperation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RaycastGrounded(float groundedValue, float airValue, Vector3 raycastOriginOffset, float raycastDistance, LayerMask layerMask, "}<Link to="/game-api/types/alta-intelligence/raycastgroundedoperationtype">{"RaycastGroundedOperationType"}</Link>{" operationType)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-airvalue" /><code>{"private float airValue"}</code> |  |
| <Link id="m-groundedvalue" /><code>{"private float groundedValue"}</code> |  |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> |  |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> |  |
| <Link id="m-raycastoperation" /><code>{"private Func<Vector3, Quaternion, bool> raycastOperation"}</code> |  |
| <Link id="m-raycastoriginoffset" /><code>{"private Vector3 raycastOriginOffset"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |
