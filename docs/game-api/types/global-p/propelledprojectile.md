---
title: "PropelledProjectile"
description: "Pushes a rigidbody along a set direction with a force curve over time once activated, like a rocket, and fires an event if it hits something hard enough."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PropelledProjectile

A **class** in `Root.Township`, no namespace.

Pushes a rigidbody along a set direction with a force curve over time once activated, like a rocket, and fires an event if it hits something hard enough. Server raises the hit event.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PropelledProjectile()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> | Pickup that can no longer be docked once the projectile is active. |
| <Link id="m-colliderstodisable" /><code>{"private Collider[] collidersToDisable"}</code> | Colliders switched off when the projectile activates. |
| <Link id="m-direction" /><code>{"private Vector3 direction"}</code> | Normalized push direction in the rigidbody's local space. |
| <Link id="m-hitwhileflying" /><code>{"private UnityEvent hitWhileFlying"}</code> | Event invoked on the server when the active projectile hits something fast enough. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | True once `Activate` has run. |
| <Link id="m-minspeedtoexplodesquared" /><code>{"private float minSpeedToExplodeSquared"}</code> | Squared relative speed a collision must exceed to fire `hitWhileFlying`. |
| <Link id="m-propellingforceovertime" /><code>{"private AnimationCurve propellingForceOverTime"}</code> | Force strength over seconds since activation. |
| <Link id="m-starttime" /><code>{"private float startTime"}</code> | Real time when `Activate` ran. |
| <Link id="m-targetrigidbody" /><code>{"private Rigidbody targetRigidbody"}</code> | Rigidbody the force is applied to. |
| <Link id="m-timetoenablecollision" /><code>{"private float timeToEnableCollision"}</code> | Seconds after activation before collisions can fire the hit event. |
| <Link id="m-timetostopkinematic" /><code>{"private float timeToStopKinematic"}</code> | Seconds after activation before the rigidbody is made non-kinematic. |
| <Link id="m-updatepropelling" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePropelling"}</code> | Handle for the registered fixed-update method. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"void Activate()"}</code> | Starts propelling: disables the listed colliders, blocks docking on the base pickup and registers the fixed-update force loop. Only runs once. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | Server: fires `hitWhileFlying` if active, past `timeToEnableCollision` and the impact speed beats the minimum. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Deregisters the propelling update. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the push direction as a red line from the rigidbody. |
| <Link id="m-preventdocking" /><code>{"private void PreventDocking("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | Dock filter added to the base pickup on activation; always refuses docking. |
| <Link id="m-updatepropelling-2" /><code>{"private void UpdatePropelling()"}</code> | Fixed-update step: turns off kinematic after `timeToStopKinematic` and adds the curve's force along `direction` in local space. |

</details>
