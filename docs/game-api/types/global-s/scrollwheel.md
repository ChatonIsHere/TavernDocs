---
title: "ScrollWheel"
description: "class ScrollWheel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScrollWheel

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ScrollWheel()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-anglefromuptomiddle" /><code>{"private float angleFromUpToMiddle"}</code> |
| <Link id="m-angularvelocity" /><code>{"private float angularVelocity"}</code> |
| <Link id="m-angularvelocitydrag" /><code>{"private float angularVelocityDrag"}</code> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |
| <Link id="m-dummypickup" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" dummyPickup"}</code> |
| <Link id="m-finishedspining" /><code>{"private UnityEvent finishedSpining"}</code> |
| <Link id="m-interactingcoroutine" /><code>{"private Coroutine interactingCoroutine"}</code> |
| <Link id="m-maxangletorelease" /><code>{"private float maxAngleToRelease"}</code> |
| <Link id="m-maxangularvelocity" /><code>{"private float maxAngularVelocity"}</code> |
| <Link id="m-rotatedangle" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" rotatedAngle"}</code> |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> |
| <Link id="m-spiningcoroutine" /><code>{"private Coroutine spiningCoroutine"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-rotationaxis-2" /><code>{"private Vector3 RotationAxis { get; }"}</code> |

</details>

## Methods

<details>
<summary>8 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-applyrotation" /><code>{"private void ApplyRotation(float angle)"}</code> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-cleaninteractingcoroutine" /><code>{"private void CleanInteractingCoroutine()"}</code> |
| <Link id="m-finishedinteract" /><code>{"private void FinishedInteract("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-interacting" /><code>{"private IEnumerator Interacting("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-spin" /><code>{"private IEnumerator Spin() (iterator)"}</code> |
| <Link id="m-startedinteract" /><code>{"private void StartedInteract("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |

</details>
