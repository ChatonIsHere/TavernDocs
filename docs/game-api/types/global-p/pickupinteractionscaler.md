---
title: "PickupInteractionScaler"
description: "class PickupInteractionScaler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupInteractionScaler

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PickupInteractionScaler("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currentscalefactor" /><code>{"private float currentScaleFactor"}</code> |
| <Link id="m-isscaleddown" /><code>{"private bool isScaledDown"}</code> |
| <Link id="m-normalsize" /><code>{"private Vector3 normalSize"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-pickupscalefactor" /><code>{"private float pickupScaleFactor"}</code> |
| <Link id="m-scalinganimation" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" scalingAnimation"}</code> |
| <Link id="m-shrunkenvisualcolliders" /><code>{"private Collider[] shrunkenVisualColliders"}</code> |
| <Link id="m-spawnedvisual" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" spawnedVisual"}</code> |
| <Link id="m-visualscalefactor" /><code>{"private float visualScaleFactor"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos()"}</code> |

<details>
<summary>13 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addshrunkenvisual" /><code>{"private void AddShrunkenVisual()"}</code> |
| <Link id="m-calculatetargetsize" /><code>{"private void CalculateTargetSize()"}</code> |
| <Link id="m-calculatevisualscalingfactor" /><code>{"private void CalculateVisualScalingFactor()"}</code> |
| <Link id="m-releaseparticles" /><code>{"private IEnumerator ReleaseParticles("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" particles, float waitTime) (iterator)"}</code> |
| <Link id="m-removeshrunkenvisual" /><code>{"private void RemoveShrunkenVisual()"}</code> |
| <Link id="m-resetscaleonpickup" /><code>{"private void ResetScaleOnPickup("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickupInteractable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-scaleovertime" /><code>{"private IEnumerator ScaleOverTime(Transform pickupTransform, float targetScale, float duration) (iterator)"}</code> |
| <Link id="m-scalepickup" /><code>{"private void ScalePickup(Transform pickupTransform, float scaleFactor, float duration)"}</code> |
| <Link id="m-scalepickupafterundock" /><code>{"private void ScalePickupAfterUndock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-scalepickupdown" /><code>{"private void ScalePickupDown("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickupInteractable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-setpickupcollideractive" /><code>{"private void SetPickupColliderActive(bool isActive)"}</code> |
| <Link id="m-spawnscalingparticles" /><code>{"private void SpawnScalingParticles()"}</code> |
| <Link id="m-waitforpickuptobeundocked" /><code>{"private void WaitForPickupToBeUndocked()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PickupInteractionScaler`:

[`Pickup.pickupScaler`](/game-api/types/global-p/pickup#m-pickupscaler).
