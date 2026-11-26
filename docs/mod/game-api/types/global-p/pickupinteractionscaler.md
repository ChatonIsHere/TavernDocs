---
title: "PickupInteractionScaler"
description: "Shrinks a pickup while it's held and scales it back up when released, optionally showing a shrunken stand-in visual."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupInteractionScaler

A **class** in `Root.Township`, the global namespace.

Shrinks a pickup while it's held and scales it back up when released, optionally showing a shrunken stand-in visual. `Pickup` creates one when its item scales on grab.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupInteractionScaler("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Creates a `PickupInteractionScaler` from `pickup`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentscalefactor" /><code>{"private float currentScaleFactor"}</code> | <span className="api-desc">The scale factor the pickup is at now, relative to its normal size.</span> |
| <Link id="m-isscaleddown" /><code>{"private bool isScaledDown"}</code> | <span className="api-desc">True while the pickup is shrunk.</span> |
| <Link id="m-normalsize" /><code>{"private Vector3 normalSize"}</code> | <span className="api-desc">The pickup's local scale when the scaler was made.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup being scaled.</span> |
| <Link id="m-pickupscalefactor" /><code>{"private float pickupScaleFactor"}</code> | <span className="api-desc">The factor the pickup shrinks to when grabbed.</span> |
| <Link id="m-scalinganimation" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" scalingAnimation"}</code> | <span className="api-desc">The running scale coroutine, if any.</span> |
| <Link id="m-shrunkenvisualcolliders" /><code>{"private Collider[] shrunkenVisualColliders"}</code> | <span className="api-desc">Colliders from the shrunken visual, added to the pickup while it's shown.</span> |
| <Link id="m-spawnedvisual" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" spawnedVisual"}</code> | <span className="api-desc">The shrunken visual currently spawned.</span> |
| <Link id="m-visualscalefactor" /><code>{"private float visualScaleFactor"}</code> | <span className="api-desc">Scale applied to the shrunken visual so it fits the pickup.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos()"}</code> | <span className="api-desc">Empty.</span> |

<details className="api-private">
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addshrunkenvisual" /><code>{"private void AddShrunkenVisual()"}</code> | <span className="api-desc">Spawns the item's shrunken visual (or the default one) on the pickup and adds its colliders to the pickup.</span> |
| <Link id="m-calculatetargetsize" /><code>{"private void CalculateTargetSize()"}</code> | <span className="api-desc">Works out the scale factor for the shrunken pickup, from the item override or the global shrunken size.</span> |
| <Link id="m-calculatevisualscalingfactor" /><code>{"private void CalculateVisualScalingFactor()"}</code> | <span className="api-desc">Works out how much to scale the shrunken visual from the pickup's and visual's bounds, or the item's override. Uses a fixed 10 on headless servers.</span> |
| <Link id="m-releaseparticles" /><code>{"private IEnumerator ReleaseParticles("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" particles, float waitTime) (iterator)"}</code> | <span className="api-desc">Coroutine that returns the scaling particles to the pool after a wait.</span> |
| <Link id="m-removeshrunkenvisual" /><code>{"private void RemoveShrunkenVisual()"}</code> | <span className="api-desc">Releases the shrunken visual and takes its colliders off the pickup.</span> |
| <Link id="m-resetscaleonpickup" /><code>{"private void ResetScaleOnPickup("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickupInteractable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On release, scales the pickup back to normal over the global duration, unless a dock is scaling it, and removes the shrunken visual.</span> |
| <Link id="m-scaleovertime" /><code>{"private IEnumerator ScaleOverTime(Transform pickupTransform, float targetScale, float duration) (iterator)"}</code> | <span className="api-desc">Coroutine that lerps the pickup's scale to a target. Stops if the pickup is docked.</span> |
| <Link id="m-scalepickup" /><code>{"private void ScalePickup(Transform pickupTransform, float scaleFactor, float duration)"}</code> | <span className="api-desc">Scales the pickup to a factor of its normal size, at once or over time, and spawns scaling particles on clients.</span> |
| <Link id="m-scalepickupafterundock" /><code>{"private void ScalePickupAfterUndock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Shrinks the pickup once it has left its dock.</span> |
| <Link id="m-scalepickupdown" /><code>{"private void ScalePickupDown("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickupInteractable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On grab, shrinks the pickup at once and adds the shrunken visual. If docked, waits for the undock first.</span> |
| <Link id="m-setpickupcollideractive" /><code>{"private void SetPickupColliderActive(bool isActive)"}</code> | <span className="api-desc">Turns all the pickup's colliders on or off.</span> |
| <Link id="m-spawnscalingparticles" /><code>{"private void SpawnScalingParticles()"}</code> | <span className="api-desc">Spawns the global shrinking particles at the pickup and releases them after half a second.</span> |
| <Link id="m-waitforpickuptobeundocked" /><code>{"private void WaitForPickupToBeUndocked()"}</code> | <span className="api-desc">Subscribes `ScalePickupAfterUndock` to the pickup's `Undocked` event.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PickupInteractionScaler`:

<div className="api-used-in">

[`Pickup.pickupScaler`](/mod/game-api/types/global-p/pickup#m-pickupscaler).

</div>
