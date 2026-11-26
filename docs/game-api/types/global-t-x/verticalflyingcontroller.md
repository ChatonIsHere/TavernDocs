---
title: "VerticalFlyingController"
description: "class VerticalFlyingController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VerticalFlyingController

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VerticalFlyingController()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> |
| <Link id="m-cachedposition" /><code>{"private Vector3 cachedPosition"}</code> |
| <Link id="m-isheldordocked" /><code>{"private bool isHeldOrDocked"}</code> |
| <Link id="m-maxvelocity" /><code>{"private float maxVelocity"}</code> |
| <Link id="m-modulator" /><code>{"private AnimationCurve modulator"}</code> |
| <Link id="m-movementamplitude" /><code>{"private float movementAmplitude"}</code> |
| <Link id="m-movingtowards" /><code>{"private float movingTowards"}</code> |
| <Link id="m-nextsign" /><code>{"private float nextSign"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> |
| <Link id="m-updateposition" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePosition"}</code> |
| <Link id="m-usesnegativevaluesonmodulator" /><code>{"private bool usesNegativeValuesOnModulator"}</code> |
| <Link id="m-walker" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" walker"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-dockedchanged" /><code>{"private void DockedChanged("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> |
| <Link id="m-getnewposition" /><code>{"private void GetNewPosition()"}</code> |
| <Link id="m-interactionchanged" /><code>{"private void InteractionChanged("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-serverupdateposition" /><code>{"private void ServerUpdatePosition()"}</code> |
| <Link id="m-updatecontrolled" /><code>{"private void UpdateControlled("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-updateposition-2" /><code>{"private void UpdatePosition()"}</code> |

</details>
