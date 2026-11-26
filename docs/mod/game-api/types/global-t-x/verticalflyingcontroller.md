---
title: "VerticalFlyingController"
description: "Makes a flying object bob up and down over the ground."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VerticalFlyingController

A **class** in `Root.Township`, the global namespace.

Makes a flying object bob up and down over the ground. The server picks random target heights and both sides push the rigidbody's vertical velocity toward the target; it stops while the optional pickup is held or docked.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VerticalFlyingController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceleration" /><code>{"private float acceleration"}</code> | <span className="api-desc">Vertical acceleration per second toward the target.</span> |
| <Link id="m-cachedposition" /><code>{"private Vector3 cachedPosition"}</code> | <span className="api-desc">Declared but never used.</span> |
| <Link id="m-isheldordocked" /><code>{"private bool isHeldOrDocked"}</code> | <span className="api-desc">Whether the pickup is held or docked right now.</span> |
| <Link id="m-maxvelocity" /><code>{"private float maxVelocity"}</code> | <span className="api-desc">Cap on vertical speed.</span> |
| <Link id="m-modulator" /><code>{"private AnimationCurve modulator"}</code> | <span className="api-desc">Curve sampled with a random value to size each move, as a fraction of `movementAmplitude`.</span> |
| <Link id="m-movementamplitude" /><code>{"private float movementAmplitude"}</code> | <span className="api-desc">Highest target height above the ground.</span> |
| <Link id="m-movingtowards" /><code>{"private float movingTowards"}</code> | <span className="api-desc">Current target height above the ground. Only the server picks it; it isn't synced here.</span> |
| <Link id="m-nextsign" /><code>{"private float nextSign"}</code> | <span className="api-desc">Direction of the next move. Flips each time a target is picked.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Optional pickup. While it's held or docked the movement stops.</span> |
| <Link id="m-rigidbody" /><code>{"private Rigidbody rigidbody"}</code> | <span className="api-desc">The rigidbody whose vertical velocity is driven.</span> |
| <Link id="m-updateposition" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updatePosition"}</code> | <span className="api-desc">Handle for the registered fixed-update method.</span> |
| <Link id="m-usesnegativevaluesonmodulator" /><code>{"private bool usesNegativeValuesOnModulator"}</code> | <span className="api-desc">When true, the modulator is sampled with a signed input (-1 to 1) instead of 0 to 1.</span> |
| <Link id="m-walker" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/walker">{"Walker"}</Link>{" walker"}</code> | <span className="api-desc">The `Walker` that gives `DistanceToGround`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Registers the server or client fixed-update method and hooks the pickup's grab and dock events.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dockedchanged" /><code>{"private void DockedChanged("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | <span className="api-desc">Dock and undock handler for the pickup; calls `UpdateControlled`.</span> |
| <Link id="m-getnewposition" /><code>{"private void GetNewPosition()"}</code> | <span className="api-desc">Server: picks the next target height, alternating up and down by an amount from `modulator`, kept between 0 and `movementAmplitude`.</span> |
| <Link id="m-interactionchanged" /><code>{"private void InteractionChanged("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Grab and release handler for the pickup; calls `UpdateControlled`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Deregisters the update method.</span> |
| <Link id="m-serverupdateposition" /><code>{"private void ServerUpdatePosition()"}</code> | <span className="api-desc">Server fixed update: picks a new target once within 5 cm of the current one, then calls `UpdatePosition`.</span> |
| <Link id="m-updatecontrolled" /><code>{"private void UpdateControlled("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Stops the movement while the pickup is held or docked and starts it again once it's free.</span> |
| <Link id="m-updateposition-2" /><code>{"private void UpdatePosition()"}</code> | <span className="api-desc">Accelerates the rigidbody's vertical velocity toward the target height, capped at `maxVelocity`.</span> |

</details>
