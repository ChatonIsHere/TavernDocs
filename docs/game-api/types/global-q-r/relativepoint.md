---
title: "RelativePoint"
description: "A position and rotation stored relative to a transform, so it follows that transform when it moves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RelativePoint

A **struct** in `Root.Township`, no namespace.

A position and rotation stored relative to a transform, so it follows that transform when it moves. With no transform it holds world values.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private RelativePoint(Transform relativeTo, Vector3 localPosition, Quaternion localRotation)"}</code> | Creates a `RelativePoint` from `relativeTo`, `localPosition` and `localRotation`. |

</details>

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> | Backing field for `LocalPosition`. |
| <Link id="m-localrotation" /><code>{"private Quaternion localRotation"}</code> | Backing field for `LocalRotation`. |
| <Link id="m-relativeto" /><code>{"private Transform relativeTo"}</code> | Backing field for `RelativeTo`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-localposition-2" /><code>{"Vector3 LocalPosition { get; }"}</code> | Position in `RelativeTo`'s space. |
| <Link id="m-localrotation-2" /><code>{"Quaternion LocalRotation { get; }"}</code> | Rotation in `RelativeTo`'s space. |
| <Link id="m-relativeto-2" /><code>{"Transform RelativeTo { get; }"}</code> | The transform the point is relative to, or null for world space. |
| <Link id="m-worldposition" /><code>{"Vector3 WorldPosition { get; }"}</code> | The current world position, worked out from `RelativeTo`. |
| <Link id="m-worldrotation" /><code>{"Quaternion WorldRotation { get; }"}</code> | The current world rotation, worked out from `RelativeTo`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromlocal" /><code>{"static "}<Link to="/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{" FromLocal(Transform relativeTo, Vector3 localPosition, Quaternion localRotation)"}</code> | Makes a point from a local position and rotation on the given transform. |
| <Link id="m-fromtransform" /><code>{"static "}<Link to="/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{" FromTransform(Transform transform)"}</code> | Makes a point from a transform's local position and rotation under its parent. |
| <Link id="m-fromworld" /><code>{"static "}<Link to="/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{" FromWorld(Transform relativeTo, Vector3 worldPosition, Quaternion worldRotation)"}</code> | Makes a point from a world position and rotation, converted into the given transform's space. |

## Used in

Members of other types that take, return or hold a `RelativePoint`:

[`ClimbingHand.grip`](/game-api/types/game-other-namespaces/climbinghand#m-grip), [`ClimbingHand.shoulderCache`](/game-api/types/game-other-namespaces/climbinghand#m-shouldercache), [`ClimbingHandler.headCacheLateUpdate`](/game-api/types/game-other-namespaces/climbinghandler#m-headcachelateupdate).
