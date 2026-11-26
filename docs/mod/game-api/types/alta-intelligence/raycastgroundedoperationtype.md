---
title: "RaycastGroundedOperationType"
description: "How the RaycastGrounded AI evaluator checks for ground: a ray straight down in world space, a ray down in the agent's local space, or a sphere overlap."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RaycastGroundedOperationType

An **enum** in `Root.Township`, `Alta.Intelligence`.

How the `RaycastGrounded` AI evaluator checks for ground: a ray straight down in world space, a ray down in the agent's local space, or a sphere overlap.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Values

| Member |
| --- |
| <Link id="m-overlapsphere" /><code>{"OverlapSphere = 2"}</code> |
| <Link id="m-rayglobaldown" /><code>{"RayGlobalDown = 0"}</code> |
| <Link id="m-raylocaldown" /><code>{"RayLocalDown = 1"}</code> |

## Used in

Members of other types that take, return or hold a `RaycastGroundedOperationType`:

[`CreateTargetOperation.RaycastGrounded`](/mod/game-api/types/alta-intelligence/createtargetoperation#m-raycastgrounded), [`RaycastGrounded.RaycastGrounded`](/mod/game-api/types/alta-intelligence/raycastgrounded#m-ctor), [`RaycastGroundedOperation.operationType`](/mod/game-api/types/alta-intelligence/raycastgroundedoperation#m-operationtype).
