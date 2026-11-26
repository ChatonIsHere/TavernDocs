---
title: "FakePickup"
description: "Stand-in interactable that takes over a pickup's grips while that pickup is locked in place."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FakePickup

A **class** in `Root.Township`, the global namespace.

Stand-in interactable that takes over a pickup's grips while that pickup is locked in place. `DiggingImpactor` uses it while a shovel is stuck in the ground.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`Interactable`](/mod/game-api/types/global-i-l/interactable)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FakePickup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedrigidbody" /><code>{"private Rigidbody cachedRigidbody"}</code> | <span className="api-desc">This object's rigidbody, which hand joints connect to.</span> |
| <Link id="m-fixedjoint" /><code>{"private FixedJoint fixedJoint"}</code> | <span className="api-desc">Joint holding the target pickup to this object while attached.</span> |
| <Link id="m-interactortograbpoint" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{"> interactorToGrabPoint"}</code> | <span className="api-desc">Grab point each hand used, so it can be restored on the real pickup when detaching.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-targetpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" targetPickup"}</code> | <span className="api-desc">The real pickup this object stands in for.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-joints" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Joint> Joints { get; }"}</code> | <span className="api-desc">Fixed joints from each hand holding this object.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-fakeinteractionended" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> FakeInteractionEnded"}</code> | <span className="api-desc">Raised when a hand lets go of the fake pickup.</span> |
| <Link id="m-fakeinteractionstarted" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> FakeInteractionStarted"}</code> | <span className="api-desc">Raised when a hand grabs the fake pickup.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attach" /><code>{"void Attach()"}</code> | <span className="api-desc">Moves the target pickup's hands onto this object, freezes the pickup and joins it here with a fixed joint.</span> |
| <Link id="m-dettach" /><code>{"void Dettach()"}</code> | <span className="api-desc">Undoes `Attach`: hands the grips back to the target pickup, unfreezes it and removes the fixed joint.</span> |
| <Link id="m-finishinteraction" /><code>{"override void FinishInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops the grip animation, removes the hand's joint and fires `FakeInteractionEnded`.</span> |
| <Link id="m-interact" /><code>{"override void Interact("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Grabs as if grabbing the target pickup (same grab point and hand placement), then joins the hand here.</span> |
| <Link id="m-settargetpickup" /><code>{"void SetTargetPickup("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Sets the pickup this object stands in for, removing itself from the old pickup's forward list.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createjoint" /><code>{"private void CreateJoint("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Adds a fixed joint from the hand's interaction point to this object and stores the grab offsets on the hand.</span> |
| <Link id="m-destroyjoint" /><code>{"private void DestroyJoint("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Removes the hand's joint, deferring the destroy during a physics overlap.</span> |
| <Link id="m-editorsetup" /><code>{"private bool EditorSetup()"}</code> | <span className="api-desc">Editor helper: caches the rigidbody and disables the component.</span> |

</details>

## Used in

Members of other types that take, return or hold a `FakePickup`:

<div className="api-used-in">

[`DiggingImpactor.fakePickup`](/mod/game-api/types/global-c-d/diggingimpactor#m-fakepickup).

</div>
