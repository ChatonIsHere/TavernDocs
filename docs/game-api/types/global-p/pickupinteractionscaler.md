---
title: "PickupInteractionScaler"
description: "Shrinks a pickup while it's held and scales it back up when released, optionally showing a shrunken stand-in visual."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupInteractionScaler

A **class** in `Root.Township`, no namespace.

Shrinks a pickup while it's held and scales it back up when released, optionally showing a shrunken stand-in visual. `Pickup` creates one when its item scales on grab.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupInteractionScaler("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Creates a `PickupInteractionScaler` from `pickup`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentscalefactor" /><code>{"private float currentScaleFactor"}</code> | The scale factor the pickup is at now, relative to its normal size. |
| <Link id="m-isscaleddown" /><code>{"private bool isScaledDown"}</code> | True while the pickup is shrunk. |
| <Link id="m-normalsize" /><code>{"private Vector3 normalSize"}</code> | The pickup's local scale when the scaler was made. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup being scaled. |
| <Link id="m-pickupscalefactor" /><code>{"private float pickupScaleFactor"}</code> | The factor the pickup shrinks to when grabbed. |
| <Link id="m-scalinganimation" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" scalingAnimation"}</code> | The running scale coroutine, if any. |
| <Link id="m-shrunkenvisualcolliders" /><code>{"private Collider[] shrunkenVisualColliders"}</code> | Colliders from the shrunken visual, added to the pickup while it's shown. |
| <Link id="m-spawnedvisual" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" spawnedVisual"}</code> | The shrunken visual currently spawned. |
| <Link id="m-visualscalefactor" /><code>{"private float visualScaleFactor"}</code> | Scale applied to the shrunken visual so it fits the pickup. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos()"}</code> | Empty. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addshrunkenvisual" /><code>{"private void AddShrunkenVisual()"}</code> | Spawns the item's shrunken visual (or the default one) on the pickup and adds its colliders to the pickup. |
| <Link id="m-calculatetargetsize" /><code>{"private void CalculateTargetSize()"}</code> | Works out the scale factor for the shrunken pickup, from the item override or the global shrunken size. |
| <Link id="m-calculatevisualscalingfactor" /><code>{"private void CalculateVisualScalingFactor()"}</code> | Works out how much to scale the shrunken visual from the pickup's and visual's bounds, or the item's override. Uses a fixed 10 on headless servers. |
| <Link id="m-releaseparticles" /><code>{"private IEnumerator ReleaseParticles("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" particles, float waitTime) (iterator)"}</code> | Coroutine that returns the scaling particles to the pool after a wait. |
| <Link id="m-removeshrunkenvisual" /><code>{"private void RemoveShrunkenVisual()"}</code> | Releases the shrunken visual and takes its colliders off the pickup. |
| <Link id="m-resetscaleonpickup" /><code>{"private void ResetScaleOnPickup("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickupInteractable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release, scales the pickup back to normal over the global duration, unless a dock is scaling it, and removes the shrunken visual. |
| <Link id="m-scaleovertime" /><code>{"private IEnumerator ScaleOverTime(Transform pickupTransform, float targetScale, float duration) (iterator)"}</code> | Coroutine that lerps the pickup's scale to a target. Stops if the pickup is docked. |
| <Link id="m-scalepickup" /><code>{"private void ScalePickup(Transform pickupTransform, float scaleFactor, float duration)"}</code> | Scales the pickup to a factor of its normal size, at once or over time, and spawns scaling particles on clients. |
| <Link id="m-scalepickupafterundock" /><code>{"private void ScalePickupAfterUndock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Shrinks the pickup once it has left its dock. |
| <Link id="m-scalepickupdown" /><code>{"private void ScalePickupDown("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickupInteractable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On grab, shrinks the pickup at once and adds the shrunken visual. If docked, waits for the undock first. |
| <Link id="m-setpickupcollideractive" /><code>{"private void SetPickupColliderActive(bool isActive)"}</code> | Turns all the pickup's colliders on or off. |
| <Link id="m-spawnscalingparticles" /><code>{"private void SpawnScalingParticles()"}</code> | Spawns the global shrinking particles at the pickup and releases them after half a second. |
| <Link id="m-waitforpickuptobeundocked" /><code>{"private void WaitForPickupToBeUndocked()"}</code> | Subscribes `ScalePickupAfterUndock` to the pickup's `Undocked` event. |

</details>

## Used in

Members of other types that take, return or hold a `PickupInteractionScaler`:

[`Pickup.pickupScaler`](/game-api/types/global-p/pickup#m-pickupscaler).
