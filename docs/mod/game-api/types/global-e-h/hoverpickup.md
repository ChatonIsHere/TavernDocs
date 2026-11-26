---
title: "HoverPickup"
description: "Makes a pickup float back to a set spot when let go, like the menu and customization orbs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HoverPickup

A **class** in `Root.Township`, the global namespace.

Makes a pickup float back to a set spot when let go, like the menu and customization orbs. Works locally, or only on the server when networked.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ActionOrb`](/mod/game-api/types/global-a-b/actionorb), [`DelayedHoverPickup`](/mod/game-api/types/global-c-d/delayedhoverpickup)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HoverPickup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isnetworked" /><code>{"protected bool isNetworked"}</code> | <span className="api-desc">Whether only the server moves it back.</span> |
| <Link id="m-pickup" /><code>{"protected "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Backing field for `Pickup`.</span> |
| <Link id="m-teleporttotargetonrelease" /><code>{"protected bool teleportToTargetOnRelease"}</code> | <span className="api-desc">Despite the name, true makes it fly back smoothly; false snaps it after the delay.</span> |

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | <span className="api-desc">How fast the pickup accelerates while flying back.</span> |
| <Link id="m-cachedparent" /><code>{"private Transform cachedParent"}</code> | <span className="api-desc">The pickup's original parent, restored on snap.</span> |
| <Link id="m-isalwaysreturning" /><code>{"private bool isAlwaysReturning"}</code> | <span className="api-desc">If true, the pickup's start pose is used as its return target when none was set.</span> |
| <Link id="m-ismaintainingparent" /><code>{"private bool isMaintainingParent"}</code> | <span className="api-desc">If true, the target is stored in the parent's local space and the pickup is re-parented on snap.</span> |
| <Link id="m-ispositionset" /><code>{"private bool isPositionSet"}</code> | <span className="api-desc">True once a return target has been set.</span> |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> | <span className="api-desc">Top speed while flying back.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Return target position (local when `isMaintainingParent`).</span> |
| <Link id="m-returning" /><code>{"private Coroutine returning"}</code> | <span className="api-desc">The running return coroutine, if any.</span> |
| <Link id="m-returnpositionthreshold" /><code>{"private float returnPositionThreshold"}</code> | <span className="api-desc">Squared distance at which the return counts as arrived and snaps.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">Return target rotation (local when `isMaintainingParent`).</span> |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> | <span className="api-desc">How fast the rotation turns toward the target while returning, faster when close.</span> |
| <Link id="m-selectionorbrigidbody" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/fauxrigidbody">{"FauxRigidbody"}</Link>{" selectionOrbRigidbody"}</code> | <span className="api-desc">Faux rigidbody used to move the pickup while it returns.</span> |
| <Link id="m-snapdelayinseconds" /><code>{"private float snapDelayInSeconds"}</code> | <span className="api-desc">Delay before snapping back when `teleportToTargetOnRelease` is off.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The pickup being returned.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settarget" /><code>{"void SetTarget(Transform target)"}</code> | <span className="api-desc">Sets the spot to return to, from a transform or a position and rotation.</span> |
| <Link id="m-settarget-2" /><code>{"void SetTarget(Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Sets the spot to return to, from a transform or a position and rotation.</span> |
| <Link id="m-snap" /><code>{"void Snap()"}</code> | <span className="api-desc">Puts the pickup straight onto its spot and stops it.</span> |
| <Link id="m-snapwithdelay" /><code>{"async void SnapWithDelay()"}</code> | <span className="api-desc">Snaps after the snap delay.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Hooks grab and release on the pickup.</span> |
| <Link id="m-canexecute" /><code>{"protected bool CanExecute()"}</code> | <span className="api-desc">True when not networked, or networked and on the server.</span> |
| <Link id="m-handlegrabbed" /><code>{"protected virtual void HandleGrabbed("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops returning when grabbed.</span> |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | <span className="api-desc">Stops all coroutines.</span> |
| <Link id="m-onreturning" /><code>{"protected virtual void OnReturning(Vector3 direction, float velocity)"}</code> | <span className="api-desc">Hook called each frame while flying back, with direction and speed. Does nothing by default.</span> |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | <span className="api-desc">Remembers the parent and, if no target is set, uses the current position as the target.</span> |
| <Link id="m-startmovingback" /><code>{"protected virtual void StartMovingBack("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On release, starts returning to the spot if one is set.</span> |
| <Link id="m-stopreturning" /><code>{"protected void StopReturning()"}</code> | <span className="api-desc">Stops the return coroutine.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gettarget" /><code>{"private void GetTarget(out Vector3 position, out Quaternion rotation, out float scale)"}</code> | <span className="api-desc">Works out the world position, rotation and scale to return to, in parent space when `isMaintainingParent` is set.</span> |
| <Link id="m-returntoposition" /><code>{"private IEnumerator ReturnToPosition() (iterator)"}</code> | <span className="api-desc">Coroutine that flies the released pickup back to its target with faux physics, then snaps it in place.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HoverPickup`:

<div className="api-used-in">

[`CosmeticPresetTrophy.hoverPickup`](/mod/game-api/types/alta-customization/cosmeticpresettrophy#m-hoverpickup), [`CustomizationPickup.hoverPickup`](/mod/game-api/types/alta-customization/customizationpickup#m-hoverpickup), [`CustomizationPickup.HoverPickup`](/mod/game-api/types/alta-customization/customizationpickup#m-hoverpickup-2), [`DevToolsBoard.hoverPickup`](/mod/game-api/types/alta-player/devtoolsboard#m-hoverpickup), [`FriendRequestToken.hoverPickup`](/mod/game-api/types/global-e-h/friendrequesttoken#m-hoverpickup), [`SocialTablet.hoverPickup`](/mod/game-api/types/global-s/socialtablet#m-hoverpickup).

</div>
