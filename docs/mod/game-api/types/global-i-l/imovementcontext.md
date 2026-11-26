---
title: "IMovementContext"
description: "A moving frame of reference that players move relative to, such as a moving platform."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IMovementContext

An **interface** in `Root.Township`, the global namespace.

A moving frame of reference that players move relative to, such as a moving platform. Converts positions and rotations between its local space and the world.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`IHasMovementContext`](/mod/game-api/types/global-i-l/ihasmovementcontext)
- **Derived types** [`TransformMovementContext`](/mod/game-api/types/global-t-x/transformmovementcontext)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The networked entity that defines the frame, if any. |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | The transform that defines the frame. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-localtoworld" /><code>{"Vector3 LocalToWorld(Vector3 local)"}</code> | Turns a position or rotation in the frame's space into world space. |
| <Link id="m-localtoworld-2" /><code>{"Quaternion LocalToWorld(Quaternion local)"}</code> | Turns a position or rotation in the frame's space into world space. |
| <Link id="m-worldtolocal" /><code>{"Vector3 WorldToLocal(Vector3 world)"}</code> | Turns a world position or rotation into the frame's space. |
| <Link id="m-worldtolocal-2" /><code>{"Quaternion WorldToLocal(Quaternion world)"}</code> | Turns a world position or rotation into the frame's space. |

## Used in

Members of other types that take, return or hold a `IMovementContext`:

[`NetworkRigidbody.MovementContext`](/mod/game-api/types/alta-networking/networkrigidbody#m-movementcontext), [`StaticPlatformSupport.MovementContext`](/mod/game-api/types/alta-networking/staticplatformsupport#m-movementcontext), [`IHasMovementContext.MovementContext`](/mod/game-api/types/global-i-l/ihasmovementcontext#m-movementcontext), [`LocomotionController.MovementContext`](/mod/game-api/types/global-i-l/locomotioncontroller#m-movementcontext), [`MovingPlatform.MovementContext`](/mod/game-api/types/global-m-o/movingplatform#m-movementcontext), [`PositionSerializer.context`](/mod/game-api/types/global-p/positionserializer#m-context), [`PositionSerializer.Context`](/mod/game-api/types/global-p/positionserializer#m-context-2), [`PositionSerializer.getContext`](/mod/game-api/types/global-p/positionserializer#m-getcontext), [`PositionSerializer.GetContext`](/mod/game-api/types/global-p/positionserializer#m-getcontext-2), [`TransformMovementContext.MovementContext`](/mod/game-api/types/global-t-x/transformmovementcontext#m-movementcontext).
