---
title: "PhysicsAcceleration"
description: "Component that adds a constant acceleration to a rigidbody every physics step, with a Wobble method for a random spin."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicsAcceleration

A **class** in `Root.Township`, the global namespace.

Component that adds a constant acceleration to a rigidbody every physics step, with a `Wobble` method for a random spin.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PhysicsAcceleration()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration" /><code>{"private Vector3 acceleration"}</code> | <span className="api-desc">Acceleration added each physics step.</span> |
| <Link id="m-maximumangularimpulse" /><code>{"private float maximumAngularImpulse"}</code> | <span className="api-desc">Largest random spin for `Wobble`.</span> |
| <Link id="m-minimumangularimpulse" /><code>{"private float minimumAngularImpulse"}</code> | <span className="api-desc">Smallest random spin for `Wobble`.</span> |
| <Link id="m-target" /><code>{"private Rigidbody target"}</code> | <span className="api-desc">The rigidbody to accelerate.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-wobble" /><code>{"void Wobble()"}</code> | <span className="api-desc">Gives the rigidbody a random angular velocity change between the min and max impulse.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Uses the rigidbody on the same object if `target` isn't set.</span> |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">Adds `acceleration` to the rigidbody's velocity.</span> |

</details>
