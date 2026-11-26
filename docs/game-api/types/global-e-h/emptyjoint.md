---
title: "EmptyJoint"
description: "Added to a hand's interaction point by PickupJoints for the EmptyJoint grab type: no physical joint, it just turns off the pickup's network rigidbody while..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmptyJoint

A **class** in `Root.Township`, no namespace.

Added to a hand's interaction point by `PickupJoints` for the `EmptyJoint` grab type: no physical joint, it just turns off the pickup's network rigidbody while held.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmptyJoint()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectedbody" /><code>{"private Rigidbody connectedBody"}</code> | Rigidbody of the held pickup. |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> | Network rigidbody on that body, disabled while held. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The held pickup. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; private set; }"}</code> | Controller of the hand that grabbed the pickup. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Rigidbody connectedBody)"}</code> | Stores the grab, moves a NaN-positioned pickup to the hand, disables the network rigidbody and listens for the grab ending. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickupinteractionended" /><code>{"private void PickupInteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When this hand lets go and nobody else holds it, turns the network rigidbody back on (if undocked) and restores the max angular velocity. |

</details>
