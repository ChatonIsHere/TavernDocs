---
title: "PhysicsLock"
description: "Component that forces an object's position and/or rotation to fixed values every frame, in local or world space."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicsLock

A **class** in `Root.Township`, the global namespace.

Component that forces an object's position and/or rotation to fixed values every frame, in local or world space.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PhysicsLock()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedrigidbody" /><code>{"private Rigidbody cachedRigidbody"}</code> | <span className="api-desc">The rigidbody on the same object. Not used by the lock.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Cached transform that gets locked.</span> |
| <Link id="m-islocal" /><code>{"private bool isLocal"}</code> | <span className="api-desc">True locks local position and rotation, false world.</span> |
| <Link id="m-islockingposition" /><code>{"private bool isLockingPosition"}</code> | <span className="api-desc">Whether to lock the position.</span> |
| <Link id="m-islockingrotation" /><code>{"private bool isLockingRotation"}</code> | <span className="api-desc">Whether to lock the rotation.</span> |
| <Link id="m-lockedposition" /><code>{"private Vector3 lockedPosition"}</code> | <span className="api-desc">The position to hold.</span> |
| <Link id="m-lockedrotation" /><code>{"private Quaternion lockedRotation"}</code> | <span className="api-desc">The rotation to hold.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Sets the locked position and rotation on the transform after physics and animation.</span> |

</details>
