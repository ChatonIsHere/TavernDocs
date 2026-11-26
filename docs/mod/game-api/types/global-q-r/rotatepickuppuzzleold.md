---
title: "RotatePickupPuzzleOLD"
description: "Old component that rotates objects around an axis to follow the hands on their handle pickups."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotatePickupPuzzleOLD

A **class** in `Root.Township`, the global namespace.

Old component that rotates objects around an axis to follow the hands on their handle pickups. Kept for reference; the `OLD` name marks it as superseded.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotatePickupPuzzleOLD()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastinteractorcount" /><code>{"private int lastInteractorCount"}</code> | <span className="api-desc">How many hands were found last time, used to detect changes.</span> |
| <Link id="m-needstozero" /><code>{"private bool needsToZero"}</code> | <span className="api-desc">Set when the hand count changes so `Advanced` resets its last direction and doesn't jump.</span> |
| <Link id="m-partstorotate" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/rotationbucket">{"RotationBucket"}</Link>{"[] partsToRotate"}</code> | <span className="api-desc">The rotating parts with their handles and settings.</span> |

</details>

## Methods

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-advanced" /><code>{"private void Advanced("}<Link to="/mod/game-api/types/global-q-r/rotationbucket">{"RotationBucket"}</Link>{" item)"}</code> | <span className="api-desc">Rotates a part in its local space toward the hands' midpoint, clamped to `clampDegrees` from identity.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Checks references, records starting tracking vectors and hooks every handle's interaction start and end events.</span> |
| <Link id="m-clamparoundidentity" /><code>{"private Quaternion ClampAroundIdentity(Quaternion rotation, float degrees)"}</code> | <span className="api-desc">Limits a rotation to a number of degrees away from identity.</span> |
| <Link id="m-getmidpoint" /><code>{"private Vector3 GetMidPoint("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] pickups, Vector3 baseObjectPos)"}</code> | <span className="api-desc">Returns the average interaction point of all hands on the pickups, or the object position if none. Flags a reset when the hand count changes.</span> |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Disables the component once no handle is held.</span> |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Enables the component so `Update` runs while a handle is held.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws each part's rotation axis in green.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Normalizes each part's rotation axis.</span> |
| <Link id="m-simple" /><code>{"private void Simple("}<Link to="/mod/game-api/types/global-q-r/rotationbucket">{"RotationBucket"}</Link>{" item)"}</code> | <span className="api-desc">Rotates a part around its world-space axis by the change in direction to the hands' midpoint.</span> |
| <Link id="m-test" /><code>{"private void Test()"}</code> | <span className="api-desc">Unused test method with no effect.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Each frame, updates the tracking point and rotates every part with `Simple` or `Advanced`.</span> |

</details>
