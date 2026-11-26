---
title: "FakePickup"
description: "Stand-in interactable that takes over a pickup's grips while that pickup is locked in place."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FakePickup

A **class** in `Root.Township`, no namespace.

Stand-in interactable that takes over a pickup's grips while that pickup is locked in place. `DiggingImpactor` uses it while a shovel is stuck in the ground.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`Interactable`](/game-api/types/global-i-l/interactable)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FakePickup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedrigidbody" /><code>{"private Rigidbody cachedRigidbody"}</code> | This object's rigidbody, which hand joints connect to. |
| <Link id="m-fixedjoint" /><code>{"private FixedJoint fixedJoint"}</code> | Joint holding the target pickup to this object while attached. |
| <Link id="m-interactortograbpoint" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{"> interactorToGrabPoint"}</code> | Grab point each hand used, so it can be restored on the real pickup when detaching. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-targetpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" targetPickup"}</code> | The real pickup this object stands in for. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-joints" /><code>{"Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Joint> Joints { get; }"}</code> | Fixed joints from each hand holding this object. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-fakeinteractionended" /><code>{"event Action<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> FakeInteractionEnded"}</code> | Raised when a hand lets go of the fake pickup. |
| <Link id="m-fakeinteractionstarted" /><code>{"event Action<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> FakeInteractionStarted"}</code> | Raised when a hand grabs the fake pickup. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attach" /><code>{"void Attach()"}</code> | Moves the target pickup's hands onto this object, freezes the pickup and joins it here with a fixed joint. |
| <Link id="m-dettach" /><code>{"void Dettach()"}</code> | Undoes `Attach`: hands the grips back to the target pickup, unfreezes it and removes the fixed joint. |
| <Link id="m-finishinteraction" /><code>{"override void FinishInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Stops the grip animation, removes the hand's joint and fires `FakeInteractionEnded`. |
| <Link id="m-interact" /><code>{"override void Interact("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Grabs as if grabbing the target pickup (same grab point and hand placement), then joins the hand here. |
| <Link id="m-settargetpickup" /><code>{"void SetTargetPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Sets the pickup this object stands in for, removing itself from the old pickup's forward list. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createjoint" /><code>{"private void CreateJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Adds a fixed joint from the hand's interaction point to this object and stores the grab offsets on the hand. |
| <Link id="m-destroyjoint" /><code>{"private void DestroyJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Removes the hand's joint, deferring the destroy during a physics overlap. |
| <Link id="m-editorsetup" /><code>{"private bool EditorSetup()"}</code> | Editor helper: caches the rigidbody and disables the component. |

</details>

## Used in

Members of other types that take, return or hold a `FakePickup`:

[`DiggingImpactor.fakePickup`](/game-api/types/global-c-d/diggingimpactor#m-fakepickup).
