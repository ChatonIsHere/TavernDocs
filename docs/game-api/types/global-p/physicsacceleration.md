---
title: "PhysicsAcceleration"
description: "Component that adds a constant acceleration to a rigidbody every physics step, with a Wobble method for a random spin."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicsAcceleration

A **class** in `Root.Township`, no namespace.

Component that adds a constant acceleration to a rigidbody every physics step, with a `Wobble` method for a random spin.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PhysicsAcceleration()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration" /><code>{"private Vector3 acceleration"}</code> | Acceleration added each physics step. |
| <Link id="m-maximumangularimpulse" /><code>{"private float maximumAngularImpulse"}</code> | Largest random spin for `Wobble`. |
| <Link id="m-minimumangularimpulse" /><code>{"private float minimumAngularImpulse"}</code> | Smallest random spin for `Wobble`. |
| <Link id="m-target" /><code>{"private Rigidbody target"}</code> | The rigidbody to accelerate. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-wobble" /><code>{"void Wobble()"}</code> | Gives the rigidbody a random angular velocity change between the min and max impulse. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Uses the rigidbody on the same object if `target` isn't set. |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | Adds `acceleration` to the rigidbody's velocity. |

</details>
