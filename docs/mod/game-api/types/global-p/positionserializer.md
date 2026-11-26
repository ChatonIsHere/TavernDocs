---
title: "PositionSerializer"
description: "Writes and reads an entity's position and rotation for the network, optionally relative to a moving context such as a cart or boat it stands on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionSerializer

A **class** in `Root.Township`, the global namespace.

Writes and reads an entity's position and rotation for the network, optionally relative to a moving context such as a cart or boat it stands on. `PositionSerializer<T>` adds a typed `FixParent`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Derived types** [`PositionSerializer<T>`](/mod/game-api/types/global-p/positionserializer-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionSerializer("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Creates a `PositionSerializer` from `entity`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Last world position written or received. |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | Last world rotation written or received. |
| <Link id="m-iscontextchanged" /><code>{"protected bool isContextChanged"}</code> | Set on read when the context changed from the previous one. |
| <Link id="m-lastcontextparent" /><code>{"protected Transform lastContextParent"}</code> | The transform `FixParent` last parented to. |

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-context" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" context"}</code> | Backing field for `Context`. |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The entity whose position this serializes. |
| <Link id="m-getcontext" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/memoizeone-tinput-toutput">{"MemoizeOne"}</Link>{"<uint, "}<Link to="/mod/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{"> getContext"}</code> | Caches the last id to context lookup. |
| <Link id="m-localmaximum" /><code>{"private static readonly Vector3 LocalMaximum"}</code> | Upper bound (100 on each axis) for the position sent relative to a movement context. |
| <Link id="m-localminimum" /><code>{"private static readonly Vector3 LocalMinimum"}</code> | Lower bound (-100 on each axis) for the position sent relative to a movement context. |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> | Position relative to the movement context. |
| <Link id="m-localrotation" /><code>{"private Quaternion localRotation"}</code> | Rotation relative to the movement context. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-context-2" /><code><Link to="/mod/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" Context { get; set; }"}</code> | The moving object the entity is positioned relative to, or null. Cleared if that object is destroyed. |
| <Link id="m-liveposition" /><code>{"Vector3 LivePosition { get; }"}</code> | World position, worked out from the context's current transform when there is one. |
| <Link id="m-liverotation" /><code>{"Quaternion LiveRotation { get; }"}</code> | World rotation, worked out from the context's current transform when there is one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixparent" /><code>{"void FixParent(Transform targetTransform)"}</code> | Parents the transform to the context's transform, or unparents it when the context goes away. |
| <Link id="m-forceremoteposition" /><code>{"void ForceRemotePosition(Vector3 position)"}</code> | Sets the stored world position and updates the context-local copy to match. |
| <Link id="m-forceremoterotation" /><code>{"void ForceRemoteRotation(Quaternion rotation)"}</code> | Sets the stored world rotation and updates the context-local copy to match. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads position, rotation and the context id plus local offset. Readers that aren't authoritative pick up the new context. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getcontext-2" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" GetContext(uint id)"}</code> | Finds the movement context of the entity with an id. Returns null for 0 or a missing entity. |
| <Link id="m-removecontext" /><code>{"private void RemoveContext("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Clears the context when its entity is destroyed. |

</details>

## Used in

Members of other types that take, return or hold a `PositionSerializer`:

[`LocomotionController.positionSerializer`](/mod/game-api/types/global-i-l/locomotioncontroller#m-positionserializer).
