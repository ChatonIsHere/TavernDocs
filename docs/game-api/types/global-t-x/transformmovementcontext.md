---
title: "TransformMovementContext"
description: "A movement context that converts positions and rotations to and from a transform's local space."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformMovementContext

A **class** in `Root.Township`, no namespace.

A movement context that converts positions and rotations to and from a transform's local space. Built with `new` around an entity, using the entity's own transform or a given one.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`IMovementContext`](/game-api/types/global-i-l/imovementcontext), [`IHasMovementContext`](/game-api/types/global-i-l/ihasmovementcontext)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TransformMovementContext("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |
| <Link id="m-ctor-2" /><code>{"TransformMovementContext("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, Transform transform)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | Backing field for `Transform`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The entity this context belongs to. |
| <Link id="m-movementcontext" /><code><Link to="/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" MovementContext { get; }"}</code> | Returns itself, so it can be used as an `IHasMovementContext`. |
| <Link id="m-transform-2" /><code>{"Transform Transform { get; }"}</code> | The transform used as the local space. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-localtoworld" /><code>{"Vector3 LocalToWorld(Vector3 local)"}</code> | Converts a local position or rotation to world space using the transform. |
| <Link id="m-localtoworld-2" /><code>{"Quaternion LocalToWorld(Quaternion local)"}</code> | Converts a local position or rotation to world space using the transform. |
| <Link id="m-worldtolocal" /><code>{"Vector3 WorldToLocal(Vector3 world)"}</code> | Converts a world position or rotation to the transform's local space. |
| <Link id="m-worldtolocal-2" /><code>{"Quaternion WorldToLocal(Quaternion world)"}</code> | Converts a world position or rotation to the transform's local space. |
