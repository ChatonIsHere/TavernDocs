---
title: "PositionSerializer"
description: "class PositionSerializer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionSerializer

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Derived types** [`PositionSerializer<T>`](/game-api/types/global-p/positionserializer-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionSerializer("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 position"}</code> |  |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> |  |
| <Link id="m-context" /><code>{"private "}<Link to="/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" context"}</code> |  |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-getcontext" /><code>{"private "}<Link to="/game-api/types/global-m-o/memoizeone-tinput-toutput">{"MemoizeOne"}</Link>{"<uint, "}<Link to="/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{"> getContext"}</code> |  |
| <Link id="m-iscontextchanged" /><code>{"protected bool isContextChanged"}</code> |  |
| <Link id="m-lastcontextparent" /><code>{"protected Transform lastContextParent"}</code> |  |
| <Link id="m-localmaximum" /><code>{"private static readonly Vector3 LocalMaximum"}</code> |  |
| <Link id="m-localminimum" /><code>{"private static readonly Vector3 LocalMinimum"}</code> |  |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> |  |
| <Link id="m-localrotation" /><code>{"private Quaternion localRotation"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-context-2" /><code><Link to="/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" Context { get; set; }"}</code> |  |
| <Link id="m-liveposition" /><code>{"Vector3 LivePosition { get; }"}</code> |  |
| <Link id="m-liverotation" /><code>{"Quaternion LiveRotation { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixparent" /><code>{"void FixParent(Transform targetTransform)"}</code> |  |
| <Link id="m-forceremoteposition" /><code>{"void ForceRemotePosition(Vector3 position)"}</code> |  |
| <Link id="m-forceremoterotation" /><code>{"void ForceRemoteRotation(Quaternion rotation)"}</code> |  |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-getcontext-2" /><code>{"private "}<Link to="/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" GetContext(uint id)"}</code> |  |
| <Link id="m-removecontext" /><code>{"private void RemoveContext("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PositionSerializer`:

[`LocomotionController.positionSerializer`](/game-api/types/global-i-l/locomotioncontroller#m-positionserializer).
