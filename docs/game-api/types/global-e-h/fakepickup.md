---
title: "FakePickup"
description: "An Interactable that looks like a pickup but isn't one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FakePickup

A **class** in `Root.Township`, no namespace.

An `Interactable` that looks like a pickup but isn't one.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`Interactable`](/game-api/types/global-i-l/interactable)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FakePickup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedrigidbody" /><code>{"private Rigidbody cachedRigidbody"}</code> |  |
| <Link id="m-fixedjoint" /><code>{"private FixedJoint fixedJoint"}</code> |  |
| <Link id="m-interactortograbpoint" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/game-api/types/global-e-h/grabpointparameters">{"GrabPointParameters"}</Link>{"> interactorToGrabPoint"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-targetpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" targetPickup"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-joints" /><code>{"Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", Joint> Joints { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-fakeinteractionended" /><code>{"event Action<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> FakeInteractionEnded"}</code> |  |
| <Link id="m-fakeinteractionstarted" /><code>{"event Action<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> FakeInteractionStarted"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attach" /><code>{"void Attach()"}</code> |  |
| <Link id="m-dettach" /><code>{"void Dettach()"}</code> |  |
| <Link id="m-finishinteraction" /><code>{"override void FinishInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-interact" /><code>{"override void Interact("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-settargetpickup" /><code>{"void SetTargetPickup("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-createjoint" /><code>{"private void CreateJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-destroyjoint" /><code>{"private void DestroyJoint("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-editorsetup" /><code>{"private bool EditorSetup()"}</code> |  |

## Used in

Members of other types that take, return or hold a `FakePickup`:

[`DiggingImpactor.fakePickup`](/game-api/types/global-c-d/diggingimpactor#m-fakepickup).
