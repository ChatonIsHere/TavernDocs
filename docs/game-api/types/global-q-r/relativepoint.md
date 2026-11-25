---
title: "RelativePoint"
description: "struct RelativePoint in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RelativePoint

A **struct** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private RelativePoint(Transform relativeTo, Vector3 localPosition, Quaternion localRotation)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-localposition" /><code>{"private Vector3 localPosition"}</code> |  |
| <Link id="m-localrotation" /><code>{"private Quaternion localRotation"}</code> |  |
| <Link id="m-relativeto" /><code>{"private Transform relativeTo"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-localposition-2" /><code>{"Vector3 LocalPosition { get; }"}</code> |  |
| <Link id="m-localrotation-2" /><code>{"Quaternion LocalRotation { get; }"}</code> |  |
| <Link id="m-relativeto-2" /><code>{"Transform RelativeTo { get; }"}</code> |  |
| <Link id="m-worldposition" /><code>{"Vector3 WorldPosition { get; }"}</code> |  |
| <Link id="m-worldrotation" /><code>{"Quaternion WorldRotation { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromlocal" /><code>{"static "}<Link to="/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{" FromLocal(Transform relativeTo, Vector3 localPosition, Quaternion localRotation)"}</code> |  |
| <Link id="m-fromtransform" /><code>{"static "}<Link to="/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{" FromTransform(Transform transform)"}</code> |  |
| <Link id="m-fromworld" /><code>{"static "}<Link to="/game-api/types/global-q-r/relativepoint">{"RelativePoint"}</Link>{" FromWorld(Transform relativeTo, Vector3 worldPosition, Quaternion worldRotation)"}</code> |  |

## Used in

Members of other types that take, return or hold a `RelativePoint`:

[`ClimbingHand.grip`](/game-api/types/game-other-namespaces/climbinghand#m-grip), [`ClimbingHand.shoulderCache`](/game-api/types/game-other-namespaces/climbinghand#m-shouldercache), [`ClimbingHandler.headCacheLateUpdate`](/game-api/types/game-other-namespaces/climbinghandler#m-headcachelateupdate).
