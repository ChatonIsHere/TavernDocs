---
title: "PhysicsLock"
description: "Component that forces an object's position and/or rotation to fixed values every frame, in local or world space."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicsLock

A **class** in `Root.Township`, no namespace.

Component that forces an object's position and/or rotation to fixed values every frame, in local or world space.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PhysicsLock()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedrigidbody" /><code>{"private Rigidbody cachedRigidbody"}</code> | The rigidbody on the same object. Not used by the lock. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Cached transform that gets locked. |
| <Link id="m-islocal" /><code>{"private bool isLocal"}</code> | True locks local position and rotation, false world. |
| <Link id="m-islockingposition" /><code>{"private bool isLockingPosition"}</code> | Whether to lock the position. |
| <Link id="m-islockingrotation" /><code>{"private bool isLockingRotation"}</code> | Whether to lock the rotation. |
| <Link id="m-lockedposition" /><code>{"private Vector3 lockedPosition"}</code> | The position to hold. |
| <Link id="m-lockedrotation" /><code>{"private Quaternion lockedRotation"}</code> | The rotation to hold. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Sets the locked position and rotation on the transform after physics and animation. |

</details>
