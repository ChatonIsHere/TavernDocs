---
title: "RotatePickupPuzzleOLD"
description: "Old component that rotates objects around an axis to follow the hands on their handle pickups."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotatePickupPuzzleOLD

A **class** in `Root.Township`, no namespace.

Old component that rotates objects around an axis to follow the hands on their handle pickups. Kept for reference; the `OLD` name marks it as superseded.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotatePickupPuzzleOLD()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastinteractorcount" /><code>{"private int lastInteractorCount"}</code> | How many hands were found last time, used to detect changes. |
| <Link id="m-needstozero" /><code>{"private bool needsToZero"}</code> | Set when the hand count changes so `Advanced` resets its last direction and doesn't jump. |
| <Link id="m-partstorotate" /><code>{"private "}<Link to="/game-api/types/global-q-r/rotationbucket">{"RotationBucket"}</Link>{"[] partsToRotate"}</code> | The rotating parts with their handles and settings. |

</details>

## Methods

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-advanced" /><code>{"private void Advanced("}<Link to="/game-api/types/global-q-r/rotationbucket">{"RotationBucket"}</Link>{" item)"}</code> | Rotates a part in its local space toward the hands' midpoint, clamped to `clampDegrees` from identity. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Checks references, records starting tracking vectors and hooks every handle's interaction start and end events. |
| <Link id="m-clamparoundidentity" /><code>{"private Quaternion ClampAroundIdentity(Quaternion rotation, float degrees)"}</code> | Limits a rotation to a number of degrees away from identity. |
| <Link id="m-getmidpoint" /><code>{"private Vector3 GetMidPoint("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] pickups, Vector3 baseObjectPos)"}</code> | Returns the average interaction point of all hands on the pickups, or the object position if none. Flags a reset when the hand count changes. |
| <Link id="m-interactionended" /><code>{"private void InteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Disables the component once no handle is held. |
| <Link id="m-interactionstarted" /><code>{"private void InteractionStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Enables the component so `Update` runs while a handle is held. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws each part's rotation axis in green. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Normalizes each part's rotation axis. |
| <Link id="m-simple" /><code>{"private void Simple("}<Link to="/game-api/types/global-q-r/rotationbucket">{"RotationBucket"}</Link>{" item)"}</code> | Rotates a part around its world-space axis by the change in direction to the hands' midpoint. |
| <Link id="m-test" /><code>{"private void Test()"}</code> | Unused test method with no effect. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Each frame, updates the tracking point and rotates every part with `Simple` or `Advanced`. |

</details>
