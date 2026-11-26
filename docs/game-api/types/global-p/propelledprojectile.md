---
title: "PropelledProjectile"
description: "class PropelledProjectile in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PropelledProjectile

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PropelledProjectile()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> |
| <Link id="m-colliderstodisable" /><code>{"private Collider[] collidersToDisable"}</code> |
| <Link id="m-direction" /><code>{"private Vector3 direction"}</code> |
| <Link id="m-hitwhileflying" /><code>{"private UnityEvent hitWhileFlying"}</code> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |
| <Link id="m-minspeedtoexplodesquared" /><code>{"private float minSpeedToExplodeSquared"}</code> |
| <Link id="m-propellingforceovertime" /><code>{"private AnimationCurve propellingForceOverTime"}</code> |
| <Link id="m-starttime" /><code>{"private float startTime"}</code> |
| <Link id="m-targetrigidbody" /><code>{"private Rigidbody targetRigidbody"}</code> |
| <Link id="m-timetoenablecollision" /><code>{"private float timeToEnableCollision"}</code> |
| <Link id="m-timetostopkinematic" /><code>{"private float timeToStopKinematic"}</code> |
| <Link id="m-updatepropelling" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePropelling"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-activate" /><code>{"void Activate()"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-preventdocking" /><code>{"private void PreventDocking("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> |
| <Link id="m-updatepropelling-2" /><code>{"private void UpdatePropelling()"}</code> |

</details>
