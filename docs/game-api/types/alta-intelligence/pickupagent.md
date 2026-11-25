---
title: "PickupAgent"
description: "public class PickupAgent : MonoBehaviour, for creatures you can hold."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupAgent

A **class** in `Root.Township`, `Alta.Intelligence`.

`public class PickupAgent : MonoBehaviour`, for creatures you can hold.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Other creatures](/game-api/creatures/other-creatures#pickupagent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupAgent()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> |  |
| <Link id="m-iscontrolled" /><code>{"private bool isControlled"}</code> |  |
| <Link id="m-pickedupactioncomponent" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" pickedUpActionComponent"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-caught" /><code>{"event Action Caught"}</code> |  |
| <Link id="m-released" /><code>{"event Action<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> Released"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-dockedchanged" /><code>{"private void DockedChanged("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> |  |
| <Link id="m-interactionchanged" /><code>{"private void InteractionChanged("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-updatecontrolled" /><code>{"private void UpdateControlled("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PickupAgent`:

[`FireBug.pickupAgent`](/game-api/types/alta-intelligence/firebug#m-pickupagent).
