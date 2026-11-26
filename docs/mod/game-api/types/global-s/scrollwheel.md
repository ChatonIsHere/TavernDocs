---
title: "ScrollWheel"
description: "A wheel the player spins by hand: it follows the hand around its axis, lets go if the hand moves too far off, and keeps spinning with drag after release."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScrollWheel

A **class** in `Root.Township`, the global namespace.

A wheel the player spins by hand: it follows the hand around its axis, lets go if the hand moves too far off, and keeps spinning with drag after release. Runs locally on each client.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScrollWheel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglefromuptomiddle" /><code>{"private float angleFromUpToMiddle"}</code> | <span className="api-desc">Angle from up around the axis to the middle of the grab area.</span> |
| <Link id="m-angularvelocity" /><code>{"private float angularVelocity"}</code> | <span className="api-desc">Current spin speed in degrees per second.</span> |
| <Link id="m-angularvelocitydrag" /><code>{"private float angularVelocityDrag"}</code> | <span className="api-desc">How fast the free spin slows, in degrees per second squared.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Cached own transform.</span> |
| <Link id="m-dummypickup" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" dummyPickup"}</code> | <span className="api-desc">The interactable the player grabs to turn the wheel.</span> |
| <Link id="m-finishedspining" /><code>{"private UnityEvent finishedSpining"}</code> | <span className="api-desc">Event fired when the free spin stops.</span> |
| <Link id="m-interactingcoroutine" /><code>{"private Coroutine interactingCoroutine"}</code> | <span className="api-desc">The running hand-following coroutine.</span> |
| <Link id="m-maxangletorelease" /><code>{"private float maxAngleToRelease"}</code> | <span className="api-desc">Dot product limit; when the hand is further from the grab area's middle than this, it's released.</span> |
| <Link id="m-maxangularvelocity" /><code>{"private float maxAngularVelocity"}</code> | <span className="api-desc">Highest spin speed kept on release. Default 100.</span> |
| <Link id="m-rotatedangle" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" rotatedAngle"}</code> | <span className="api-desc">Float event fired with each rotation step in degrees.</span> |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | <span className="api-desc">Local axis the wheel turns around. Default forward.</span> |
| <Link id="m-spiningcoroutine" /><code>{"private Coroutine spiningCoroutine"}</code> | <span className="api-desc">The running free spin coroutine.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rotationaxis-2" /><code>{"private Vector3 RotationAxis { get; }"}</code> | <span className="api-desc">The rotation axis in world space, using the parent's rotation.</span> |

</details>

## Methods

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applyrotation" /><code>{"private void ApplyRotation(float angle)"}</code> | <span className="api-desc">Turns the wheel by an angle around its axis and fires `rotatedAngle` with that angle.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Caches the transform and hooks the dummy pickup's interaction start and end.</span> |
| <Link id="m-cleaninteractingcoroutine" /><code>{"private void CleanInteractingCoroutine()"}</code> | <span className="api-desc">Stops the hand-following coroutine if running.</span> |
| <Link id="m-finishedinteract" /><code>{"private void FinishedInteract("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops following the hand and starts the free spin.</span> |
| <Link id="m-interacting" /><code>{"private IEnumerator Interacting("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | <span className="api-desc">Coroutine that turns the wheel with the hand each frame and force-releases a local hand that leaves the allowed area.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the rotation axis.</span> |
| <Link id="m-spin" /><code>{"private IEnumerator Spin() (iterator)"}</code> | <span className="api-desc">Coroutine that keeps the wheel turning after release, slowed by `angularVelocityDrag`, then fires `finishedSpining`.</span> |
| <Link id="m-startedinteract" /><code>{"private void StartedInteract("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops any spin and starts following the grabbing hand.</span> |

</details>
