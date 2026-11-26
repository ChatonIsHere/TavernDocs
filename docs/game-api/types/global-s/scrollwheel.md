---
title: "ScrollWheel"
description: "A wheel the player spins by hand: it follows the hand around its axis, lets go if the hand moves too far off, and keeps spinning with drag after release."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScrollWheel

A **class** in `Root.Township`, no namespace.

A wheel the player spins by hand: it follows the hand around its axis, lets go if the hand moves too far off, and keeps spinning with drag after release. Runs locally on each client.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ScrollWheel()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglefromuptomiddle" /><code>{"private float angleFromUpToMiddle"}</code> | Angle from up around the axis to the middle of the grab area. |
| <Link id="m-angularvelocity" /><code>{"private float angularVelocity"}</code> | Current spin speed in degrees per second. |
| <Link id="m-angularvelocitydrag" /><code>{"private float angularVelocityDrag"}</code> | How fast the free spin slows, in degrees per second squared. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Cached own transform. |
| <Link id="m-dummypickup" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" dummyPickup"}</code> | The interactable the player grabs to turn the wheel. |
| <Link id="m-finishedspining" /><code>{"private UnityEvent finishedSpining"}</code> | Event fired when the free spin stops. |
| <Link id="m-interactingcoroutine" /><code>{"private Coroutine interactingCoroutine"}</code> | The running hand-following coroutine. |
| <Link id="m-maxangletorelease" /><code>{"private float maxAngleToRelease"}</code> | Dot product limit; when the hand is further from the grab area's middle than this, it's released. |
| <Link id="m-maxangularvelocity" /><code>{"private float maxAngularVelocity"}</code> | Highest spin speed kept on release. Default 100. |
| <Link id="m-rotatedangle" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" rotatedAngle"}</code> | Float event fired with each rotation step in degrees. |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | Local axis the wheel turns around. Default forward. |
| <Link id="m-spiningcoroutine" /><code>{"private Coroutine spiningCoroutine"}</code> | The running free spin coroutine. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rotationaxis-2" /><code>{"private Vector3 RotationAxis { get; }"}</code> | The rotation axis in world space, using the parent's rotation. |

</details>

## Methods

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyrotation" /><code>{"private void ApplyRotation(float angle)"}</code> | Turns the wheel by an angle around its axis and fires `rotatedAngle` with that angle. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches the transform and hooks the dummy pickup's interaction start and end. |
| <Link id="m-cleaninteractingcoroutine" /><code>{"private void CleanInteractingCoroutine()"}</code> | Stops the hand-following coroutine if running. |
| <Link id="m-finishedinteract" /><code>{"private void FinishedInteract("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops following the hand and starts the free spin. |
| <Link id="m-interacting" /><code>{"private IEnumerator Interacting("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | Coroutine that turns the wheel with the hand each frame and force-releases a local hand that leaves the allowed area. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the rotation axis. |
| <Link id="m-spin" /><code>{"private IEnumerator Spin() (iterator)"}</code> | Coroutine that keeps the wheel turning after release, slowed by `angularVelocityDrag`, then fires `finishedSpining`. |
| <Link id="m-startedinteract" /><code>{"private void StartedInteract("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops any spin and starts following the grabbing hand. |

</details>
