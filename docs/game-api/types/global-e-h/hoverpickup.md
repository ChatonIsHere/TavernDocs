---
title: "HoverPickup"
description: "Floats a pickup back to a target spot when it's let go."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HoverPickup

A **class** in `Root.Township`, no namespace.

Floats a pickup back to a target spot when it's let go.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ActionOrb`](/game-api/types/global-a-b/actionorb), [`DelayedHoverPickup`](/game-api/types/global-c-d/delayedhoverpickup)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HoverPickup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> |  |
| <Link id="m-cachedparent" /><code>{"private Transform cachedParent"}</code> |  |
| <Link id="m-isalwaysreturning" /><code>{"private bool isAlwaysReturning"}</code> |  |
| <Link id="m-ismaintainingparent" /><code>{"private bool isMaintainingParent"}</code> |  |
| <Link id="m-isnetworked" /><code>{"protected bool isNetworked"}</code> |  |
| <Link id="m-ispositionset" /><code>{"private bool isPositionSet"}</code> |  |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> |  |
| <Link id="m-pickup" /><code>{"protected "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> |  |
| <Link id="m-returning" /><code>{"private Coroutine returning"}</code> |  |
| <Link id="m-returnpositionthreshold" /><code>{"private float returnPositionThreshold"}</code> |  |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> |  |
| <Link id="m-rotationlerpspeed" /><code>{"private float rotationLerpSpeed"}</code> |  |
| <Link id="m-selectionorbrigidbody" /><code>{"private "}<Link to="/game-api/types/global-e-h/fauxrigidbody">{"FauxRigidbody"}</Link>{" selectionOrbRigidbody"}</code> |  |
| <Link id="m-snapdelayinseconds" /><code>{"private float snapDelayInSeconds"}</code> |  |
| <Link id="m-teleporttotargetonrelease" /><code>{"protected bool teleportToTargetOnRelease"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settarget" /><code>{"void SetTarget(Transform target)"}</code> |  |
| <Link id="m-settarget-2" /><code>{"void SetTarget(Vector3 position, Quaternion rotation)"}</code> |  |
| <Link id="m-snap" /><code>{"void Snap()"}</code> |  |
| <Link id="m-snapwithdelay" /><code>{"async void SnapWithDelay()"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-canexecute" /><code>{"protected bool CanExecute()"}</code> |  |
| <Link id="m-gettarget" /><code>{"private void GetTarget(out Vector3 position, out Quaternion rotation, out float scale)"}</code> |  |
| <Link id="m-handlegrabbed" /><code>{"protected virtual void HandleGrabbed("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> |  |
| <Link id="m-onreturning" /><code>{"protected virtual void OnReturning(Vector3 direction, float velocity)"}</code> |  |
| <Link id="m-returntoposition" /><code>{"private IEnumerator ReturnToPosition() (iterator)"}</code> |  |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> |  |
| <Link id="m-startmovingback" /><code>{"protected virtual void StartMovingBack("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-stopreturning" /><code>{"protected void StopReturning()"}</code> |  |

## Used in

Members of other types that take, return or hold a `HoverPickup`:

[`CosmeticPresetTrophy.hoverPickup`](/game-api/types/alta-customization/cosmeticpresettrophy#m-hoverpickup), [`CustomizationPickup.hoverPickup`](/game-api/types/alta-customization/customizationpickup#m-hoverpickup), [`CustomizationPickup.HoverPickup`](/game-api/types/alta-customization/customizationpickup#m-hoverpickup-2), [`DevToolsBoard.hoverPickup`](/game-api/types/alta-player/devtoolsboard#m-hoverpickup), [`FriendRequestToken.hoverPickup`](/game-api/types/global-e-h/friendrequesttoken#m-hoverpickup), [`SocialTablet.hoverPickup`](/game-api/types/global-s/socialtablet#m-hoverpickup).
