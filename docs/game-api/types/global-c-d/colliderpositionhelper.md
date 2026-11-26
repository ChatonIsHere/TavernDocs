---
title: "ColliderPositionHelper"
description: "A PositionFromOriginHelper that gives the closest point on a collider to the origin."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColliderPositionHelper

A **class** in `Root.Township`, no namespace.

A `PositionFromOriginHelper` that gives the closest point on a collider to the origin.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`PositionFromOriginHelper`](/game-api/types/global-p/positionfromoriginhelper)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ColliderPositionHelper()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-positioncollider" /><code>{"private Collider positionCollider"}</code> | Collider whose surface is used. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"override Vector3 GetPosition(Vector3 origin)"}</code> | Closest point on `positionCollider` to the origin. |
