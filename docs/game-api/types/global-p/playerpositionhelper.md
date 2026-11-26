---
title: "PlayerPositionHelper"
description: "A PositionFromOriginHelper that returns the closest point on a set of colliders to a given origin."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerPositionHelper

A **class** in `Root.Township`, no namespace.

A `PositionFromOriginHelper` that returns the closest point on a set of colliders to a given origin.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PositionFromOriginHelper`](/game-api/types/global-p/positionfromoriginhelper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerPositionHelper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliders" /><code>{"private Collider[] colliders"}</code> | Colliders to search. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"override Vector3 GetPosition(Vector3 origin)"}</code> | Returns the closest point to `origin` across all `colliders`, or zero if there are none. |
