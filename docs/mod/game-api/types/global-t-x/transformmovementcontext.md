---
title: "TransformMovementContext"
description: "A movement context that converts positions and rotations to and from a transform's local space."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformMovementContext

A **class** in `Root.Township`, the global namespace.

A movement context that converts positions and rotations to and from a transform's local space. Built with `new` around an entity, using the entity's own transform or a given one.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`IMovementContext`](/mod/game-api/types/global-i-l/imovementcontext), [`IHasMovementContext`](/mod/game-api/types/global-i-l/ihasmovementcontext)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TransformMovementContext("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Creates a `TransformMovementContext` from `entity` and `transform`.</span> |
| <Link id="m-ctor-2" /><code>{"TransformMovementContext("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, Transform transform)"}</code> | <span className="api-desc">Creates a `TransformMovementContext` from `entity` and `transform`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | <span className="api-desc">Backing field for `Transform`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The entity this context belongs to.</span> |
| <Link id="m-movementcontext" /><code><Link to="/mod/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" MovementContext { get; }"}</code> | <span className="api-desc">Returns itself, so it can be used as an `IHasMovementContext`.</span> |
| <Link id="m-transform-2" /><code>{"Transform Transform { get; }"}</code> | <span className="api-desc">The transform used as the local space.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-localtoworld" /><code>{"Vector3 LocalToWorld(Vector3 local)"}</code> | <span className="api-desc">Converts a local position or rotation to world space using the transform.</span> |
| <Link id="m-localtoworld-2" /><code>{"Quaternion LocalToWorld(Quaternion local)"}</code> | <span className="api-desc">Converts a local position or rotation to world space using the transform.</span> |
| <Link id="m-worldtolocal" /><code>{"Vector3 WorldToLocal(Vector3 world)"}</code> | <span className="api-desc">Converts a world position or rotation to the transform's local space.</span> |
| <Link id="m-worldtolocal-2" /><code>{"Quaternion WorldToLocal(Quaternion world)"}</code> | <span className="api-desc">Converts a world position or rotation to the transform's local space.</span> |
