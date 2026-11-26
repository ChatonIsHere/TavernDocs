---
title: "RelativePoint"
description: "A position and rotation stored relative to a transform, so it follows that transform when it moves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RelativePoint

A **struct** in `Root.Township`, the global namespace.

A position and rotation stored relative to a transform, so it follows that transform when it moves. With no transform it holds world values.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private RelativePoint(Transform relativeTo, Vector3 localPosition, Quaternion localRotation)"}</code> | <span className="api-desc">Creates a `RelativePoint` from `relativeTo`, `localPosition` and `localRotation`.</span> |

</details>

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> | <span className="api-desc">Backing field for `LocalPosition`.</span> |
| <Link id="m-localrotation" /><code>{"private Quaternion localRotation"}</code> | <span className="api-desc">Backing field for `LocalRotation`.</span> |
| <Link id="m-relativeto" /><code>{"private Transform relativeTo"}</code> | <span className="api-desc">Backing field for `RelativeTo`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-localposition-2" /><code>{"Vector3 LocalPosition { get; }"}</code> | <span className="api-desc">Position in `RelativeTo`'s space.</span> |
| <Link id="m-localrotation-2" /><code>{"Quaternion LocalRotation { get; }"}</code> | <span className="api-desc">Rotation in `RelativeTo`'s space.</span> |
| <Link id="m-relativeto-2" /><code>{"Transform RelativeTo { get; }"}</code> | <span className="api-desc">The transform the point is relative to, or null for world space.</span> |
| <Link id="m-worldposition" /><code>{"Vector3 WorldPosition { get; }"}</code> | <span className="api-desc">The current world position, worked out from `RelativeTo`.</span> |
| <Link id="m-worldrotation" /><code>{"Quaternion WorldRotation { get; }"}</code> | <span className="api-desc">The current world rotation, worked out from `RelativeTo`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromlocal" /><code>{"static "}<Link to="/mod/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{" FromLocal(Transform relativeTo, Vector3 localPosition, Quaternion localRotation)"}</code> | <span className="api-desc">Makes a point from a local position and rotation on the given transform.</span> |
| <Link id="m-fromtransform" /><code>{"static "}<Link to="/mod/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{" FromTransform(Transform transform)"}</code> | <span className="api-desc">Makes a point from a transform's local position and rotation under its parent.</span> |
| <Link id="m-fromworld" /><code>{"static "}<Link to="/mod/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{" FromWorld(Transform relativeTo, Vector3 worldPosition, Quaternion worldRotation)"}</code> | <span className="api-desc">Makes a point from a world position and rotation, converted into the given transform's space.</span> |

## Used in

Members of other types that take, return or hold a `RelativePoint`:

<div className="api-used-in">

[`ClimbingHand.grip`](/mod/game-api/types/game-other-namespaces/climbinghand#m-grip), [`ClimbingHand.shoulderCache`](/mod/game-api/types/game-other-namespaces/climbinghand#m-shouldercache), [`ClimbingHandler.headCacheLateUpdate`](/mod/game-api/types/game-other-namespaces/climbinghandler#m-headcachelateupdate).

</div>
