---
title: "IMovementContext"
description: "interface IMovementContext in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IMovementContext

An **interface** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`IHasMovementContext`](/game-api/types/global-i-l/ihasmovementcontext)
- **Derived types** [`TransformMovementContext`](/game-api/types/global-t-x/transformmovementcontext)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |  |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-localtoworld" /><code>{"Vector3 LocalToWorld(Vector3 local)"}</code> |  |
| <Link id="m-localtoworld-2" /><code>{"Quaternion LocalToWorld(Quaternion local)"}</code> |  |
| <Link id="m-worldtolocal" /><code>{"Vector3 WorldToLocal(Vector3 world)"}</code> |  |
| <Link id="m-worldtolocal-2" /><code>{"Quaternion WorldToLocal(Quaternion world)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IMovementContext`:

[`NetworkRigidbody.MovementContext`](/game-api/types/alta-networking/networkrigidbody#m-movementcontext), [`StaticPlatformSupport.MovementContext`](/game-api/types/alta-networking/staticplatformsupport#m-movementcontext), [`IHasMovementContext.MovementContext`](/game-api/types/global-i-l/ihasmovementcontext#m-movementcontext), [`LocomotionController.MovementContext`](/game-api/types/global-i-l/locomotioncontroller#m-movementcontext), [`MovingPlatform.MovementContext`](/game-api/types/global-m-o/movingplatform#m-movementcontext), [`PositionSerializer.context`](/game-api/types/global-p/positionserializer#m-context), [`PositionSerializer.Context`](/game-api/types/global-p/positionserializer#m-context-2), [`PositionSerializer.getContext`](/game-api/types/global-p/positionserializer#m-getcontext), [`PositionSerializer.GetContext`](/game-api/types/global-p/positionserializer#m-getcontext-2), [`TransformMovementContext.MovementContext`](/game-api/types/global-t-x/transformmovementcontext#m-movementcontext).
