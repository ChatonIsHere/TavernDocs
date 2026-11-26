---
title: "PropelledProjectile"
description: "Pushes a rigidbody along a set direction with a force curve over time once activated, like a rocket, and fires an event if it hits something hard enough."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PropelledProjectile

A **class** in `Root.Township`, the global namespace.

Pushes a rigidbody along a set direction with a force curve over time once activated, like a rocket, and fires an event if it hits something hard enough. Server raises the hit event.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PropelledProjectile()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> | <span className="api-desc">Pickup that can no longer be docked once the projectile is active.</span> |
| <Link id="m-colliderstodisable" /><code>{"private Collider[] collidersToDisable"}</code> | <span className="api-desc">Colliders switched off when the projectile activates.</span> |
| <Link id="m-direction" /><code>{"private Vector3 direction"}</code> | <span className="api-desc">Normalized push direction in the rigidbody's local space.</span> |
| <Link id="m-hitwhileflying" /><code>{"private UnityEvent hitWhileFlying"}</code> | <span className="api-desc">Event invoked on the server when the active projectile hits something fast enough.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">True once `Activate` has run.</span> |
| <Link id="m-minspeedtoexplodesquared" /><code>{"private float minSpeedToExplodeSquared"}</code> | <span className="api-desc">Squared relative speed a collision must exceed to fire `hitWhileFlying`.</span> |
| <Link id="m-propellingforceovertime" /><code>{"private AnimationCurve propellingForceOverTime"}</code> | <span className="api-desc">Force strength over seconds since activation.</span> |
| <Link id="m-starttime" /><code>{"private float startTime"}</code> | <span className="api-desc">Real time when `Activate` ran.</span> |
| <Link id="m-targetrigidbody" /><code>{"private Rigidbody targetRigidbody"}</code> | <span className="api-desc">Rigidbody the force is applied to.</span> |
| <Link id="m-timetoenablecollision" /><code>{"private float timeToEnableCollision"}</code> | <span className="api-desc">Seconds after activation before collisions can fire the hit event.</span> |
| <Link id="m-timetostopkinematic" /><code>{"private float timeToStopKinematic"}</code> | <span className="api-desc">Seconds after activation before the rigidbody is made non-kinematic.</span> |
| <Link id="m-updatepropelling" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePropelling"}</code> | <span className="api-desc">Handle for the registered fixed-update method.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"void Activate()"}</code> | <span className="api-desc">Starts propelling: disables the listed colliders, blocks docking on the base pickup and registers the fixed-update force loop. Only runs once.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | <span className="api-desc">Server: fires `hitWhileFlying` if active, past `timeToEnableCollision` and the impact speed beats the minimum.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Deregisters the propelling update.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the push direction as a red line from the rigidbody.</span> |
| <Link id="m-preventdocking" /><code>{"private void PreventDocking("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | <span className="api-desc">Dock filter added to the base pickup on activation; always refuses docking.</span> |
| <Link id="m-updatepropelling-2" /><code>{"private void UpdatePropelling()"}</code> | <span className="api-desc">Fixed-update step: turns off kinematic after `timeToStopKinematic` and adds the curve's force along `direction` in local space.</span> |

</details>
