---
title: "HoverPickup"
description: "Makes a pickup float back to a set spot when let go, like the menu and customization orbs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HoverPickup

A **class** in `Root.Township`, no namespace.

Makes a pickup float back to a set spot when let go, like the menu and customization orbs. Works locally, or only on the server when networked.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ActionOrb`](/game-api/types/global-a-b/actionorb), [`DelayedHoverPickup`](/game-api/types/global-c-d/delayedhoverpickup)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HoverPickup()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isnetworked" /><code>{"protected bool isNetworked"}</code> | Whether only the server moves it back. |
| <Link id="m-pickup" /><code>{"protected "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Backing field for `Pickup`. |
| <Link id="m-teleporttotargetonrelease" /><code>{"protected bool teleportToTargetOnRelease"}</code> | Despite the name, true makes it fly back smoothly; false snaps it after the delay. |

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | How fast the pickup accelerates while flying back. |
| <Link id="m-cachedparent" /><code>{"private Transform cachedParent"}</code> | The pickup's original parent, restored on snap. |
| <Link id="m-isalwaysreturning" /><code>{"private bool isAlwaysReturning"}</code> | If true, the pickup's start pose is used as its return target when none was set. |
| <Link id="m-ismaintainingparent" /><code>{"private bool isMaintainingParent"}</code> | If true, the target is stored in the parent's local space and the pickup is re-parented on snap. |
| <Link id="m-ispositionset" /><code>{"private bool isPositionSet"}</code> | True once a return target has been set. |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> | Top speed while flying back. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Return target position (local when `isMaintainingParent`). |
| <Link id="m-returning" /><code>{"private Coroutine returning"}</code> | The running return coroutine, if any. |
| <Link id="m-returnpositionthreshold" /><code>{"private float returnPositionThreshold"}</code> | Squared distance at which the return counts as arrived and snaps. |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | Return target rotation (local when `isMaintainingParent`). |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> | How fast the rotation turns toward the target while returning, faster when close. |
| <Link id="m-selectionorbrigidbody" /><code>{"private "}<Link to="/game-api/types/global-e-h/fauxrigidbody">{"FauxRigidbody"}</Link>{" selectionOrbRigidbody"}</code> | Faux rigidbody used to move the pickup while it returns. |
| <Link id="m-snapdelayinseconds" /><code>{"private float snapDelayInSeconds"}</code> | Delay before snapping back when `teleportToTargetOnRelease` is off. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The pickup being returned. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settarget" /><code>{"void SetTarget(Transform target)"}</code> | Sets the spot to return to, from a transform or a position and rotation. |
| <Link id="m-settarget-2" /><code>{"void SetTarget(Vector3 position, Quaternion rotation)"}</code> | Sets the spot to return to, from a transform or a position and rotation. |
| <Link id="m-snap" /><code>{"void Snap()"}</code> | Puts the pickup straight onto its spot and stops it. |
| <Link id="m-snapwithdelay" /><code>{"async void SnapWithDelay()"}</code> | Snaps after the snap delay. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Hooks grab and release on the pickup. |
| <Link id="m-canexecute" /><code>{"protected bool CanExecute()"}</code> | True when not networked, or networked and on the server. |
| <Link id="m-handlegrabbed" /><code>{"protected virtual void HandleGrabbed("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops returning when grabbed. |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | Stops all coroutines. |
| <Link id="m-onreturning" /><code>{"protected virtual void OnReturning(Vector3 direction, float velocity)"}</code> | Hook called each frame while flying back, with direction and speed. Does nothing by default. |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | Remembers the parent and, if no target is set, uses the current position as the target. |
| <Link id="m-startmovingback" /><code>{"protected virtual void StartMovingBack("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release, starts returning to the spot if one is set. |
| <Link id="m-stopreturning" /><code>{"protected void StopReturning()"}</code> | Stops the return coroutine. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettarget" /><code>{"private void GetTarget(out Vector3 position, out Quaternion rotation, out float scale)"}</code> | Works out the world position, rotation and scale to return to, in parent space when `isMaintainingParent` is set. |
| <Link id="m-returntoposition" /><code>{"private IEnumerator ReturnToPosition() (iterator)"}</code> | Coroutine that flies the released pickup back to its target with faux physics, then snaps it in place. |

</details>

## Used in

Members of other types that take, return or hold a `HoverPickup`:

[`CosmeticPresetTrophy.hoverPickup`](/game-api/types/alta-customization/cosmeticpresettrophy#m-hoverpickup), [`CustomizationPickup.hoverPickup`](/game-api/types/alta-customization/customizationpickup#m-hoverpickup), [`CustomizationPickup.HoverPickup`](/game-api/types/alta-customization/customizationpickup#m-hoverpickup-2), [`DevToolsBoard.hoverPickup`](/game-api/types/alta-player/devtoolsboard#m-hoverpickup), [`FriendRequestToken.hoverPickup`](/game-api/types/global-e-h/friendrequesttoken#m-hoverpickup), [`SocialTablet.hoverPickup`](/game-api/types/global-s/socialtablet#m-hoverpickup).
