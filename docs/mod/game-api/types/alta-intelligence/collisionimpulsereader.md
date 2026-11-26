---
title: "CollisionImpulseReader"
description: "Component that turns strong collisions with rigidbodies into a 0 to 1 strength and passes it to an IReceiveImpulseFromCollision on the next frame."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CollisionImpulseReader

A **class** in `Root.Township`, `Alta.Intelligence`.

Component that turns strong collisions with rigidbodies into a 0 to 1 strength and passes it to an `IReceiveImpulseFromCollision` on the next frame.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CollisionImpulseReader()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-strongflailvelocity" /><code>{"private float strongFlailVelocity"}</code> | <span className="api-desc">Impulse at or above which strength is 1 (default 2).</span> |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/ireceiveimpulsefromcollision">{"IReceiveImpulseFromCollision"}</Link>{" target"}</code> | <span className="api-desc">The receiver, cast from `targetObject` in `Awake`.</span> |
| <Link id="m-targetobject" /><code>{"private Object targetObject"}</code> | <span className="api-desc">Serialized reference to the object that receives the impulse.</span> |
| <Link id="m-weakflailvelocity" /><code>{"private float weakFlailVelocity"}</code> | <span className="api-desc">Impulse at or below which the collision is ignored (default 1).</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Casts `targetObject` to `IReceiveImpulseFromCollision`.</span> |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | <span className="api-desc">Ignores hits without a rigidbody or with impulse at most `weakFlailVelocity`; otherwise maps impulse between weak and strong to 0 to 1 and calls `ReceivedImpulse` later.</span> |

</details>
