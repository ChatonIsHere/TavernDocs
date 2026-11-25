---
title: "PositionSerializer"
description: "Writes and reads an entity's position and rotation for the network, optionally relative to a moving context such as a cart or boat it stands on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionSerializer

A **class** in `Root.Township`, no namespace.

Writes and reads an entity's position and rotation for the network, optionally relative to a moving context such as a cart or boat it stands on. `PositionSerializer<T>` adds a typed `FixParent`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Derived types** [`PositionSerializer<T>`](/game-api/types/global-p/positionserializer-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PositionSerializer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Last world position written or received. |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | Last world rotation written or received. |
| <Link id="m-iscontextchanged" /><code>{"protected bool isContextChanged"}</code> | Set on read when the context changed from the previous one. |
| <Link id="m-lastcontextparent" /><code>{"protected Transform lastContextParent"}</code> | The transform `FixParent` last parented to. |

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-context" /><code>{"private "}<Link to="/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" context"}</code> |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |
| <Link id="m-getcontext" /><code>{"private "}<Link to="/game-api/types/global-m-o/memoizeone-tinput-toutput">{"MemoizeOne"}</Link>{"<uint, "}<Link to="/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{"> getContext"}</code> |
| <Link id="m-localmaximum" /><code>{"private static readonly Vector3 LocalMaximum"}</code> |
| <Link id="m-localminimum" /><code>{"private static readonly Vector3 LocalMinimum"}</code> |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> |
| <Link id="m-localrotation" /><code>{"private Quaternion localRotation"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-context-2" /><code><Link to="/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" Context { get; set; }"}</code> | The moving object the entity is positioned relative to, or null. Cleared if that object is destroyed. |
| <Link id="m-liveposition" /><code>{"Vector3 LivePosition { get; }"}</code> | World position, worked out from the context's current transform when there is one. |
| <Link id="m-liverotation" /><code>{"Quaternion LiveRotation { get; }"}</code> | World rotation, worked out from the context's current transform when there is one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixparent" /><code>{"void FixParent(Transform targetTransform)"}</code> | Parents the transform to the context's transform, or unparents it when the context goes away. |
| <Link id="m-forceremoteposition" /><code>{"void ForceRemotePosition(Vector3 position)"}</code> | Sets the stored world position and updates the context-local copy to match. |
| <Link id="m-forceremoterotation" /><code>{"void ForceRemoteRotation(Quaternion rotation)"}</code> | Sets the stored world rotation and updates the context-local copy to match. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads position, rotation and the context id plus local offset. Readers that aren't authoritative pick up the new context. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-getcontext-2" /><code>{"private "}<Link to="/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" GetContext(uint id)"}</code> |
| <Link id="m-removecontext" /><code>{"private void RemoveContext("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PositionSerializer`:

[`LocomotionController.positionSerializer`](/game-api/types/global-i-l/locomotioncontroller#m-positionserializer).
