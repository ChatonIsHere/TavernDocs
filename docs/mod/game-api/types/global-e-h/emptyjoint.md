---
title: "EmptyJoint"
description: "Added to a hand's interaction point by PickupJoints for the EmptyJoint grab type: no physical joint, it just turns off the pickup's network rigidbody while..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmptyJoint

A **class** in `Root.Township`, the global namespace.

Added to a hand's interaction point by `PickupJoints` for the `EmptyJoint` grab type: no physical joint, it just turns off the pickup's network rigidbody while held.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmptyJoint()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectedbody" /><code>{"private Rigidbody connectedBody"}</code> | <span className="api-desc">Rigidbody of the held pickup.</span> |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> | <span className="api-desc">Network rigidbody on that body, disabled while held.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The held pickup.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code><Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">Controller of the hand that grabbed the pickup.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Rigidbody connectedBody)"}</code> | <span className="api-desc">Stores the grab, moves a NaN-positioned pickup to the hand, disables the network rigidbody and listens for the grab ending.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickupinteractionended" /><code>{"private void PickupInteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When this hand lets go and nobody else holds it, turns the network rigidbody back on (if undocked) and restores the max angular velocity.</span> |

</details>
