---
title: "PickupAgent"
description: "Lets a creature be picked up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupAgent

A **class** in `Root.Township`, `Alta.Intelligence`.

Lets a creature be picked up. Watches the creature's `Pickup` and, on the server, pauses or changes the AI while it is held or docked. Used by the fire bug.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Other creatures](/game-api/creatures/other-creatures#pickupagent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupAgent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> | The creature's AI agent. |
| <Link id="m-iscontrolled" /><code>{"private bool isControlled"}</code> | True while the creature is held or docked. |
| <Link id="m-pickedupactioncomponent" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" pickedUpActionComponent"}</code> | Action the agent does while held. If not set, the AI is turned off instead. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Backing field for `Pickup`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The pickup that lets players grab the creature. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-caught" /><code>{"event Action Caught"}</code> | Raised when the creature becomes held or docked. |
| <Link id="m-released" /><code>{"event Action<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> Released"}</code> | Raised with the last interactor when the creature is let go and undocked. |

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pickup's interaction and dock events. |
| <Link id="m-dockedchanged" /><code>{"private void DockedChanged("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | Dock handler that rechecks whether the creature is held. |
| <Link id="m-interactionchanged" /><code>{"private void InteractionChanged("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Interaction handler that rechecks whether the creature is held. |
| <Link id="m-updatecontrolled" /><code>{"private void UpdateControlled("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When held or docked, server runs the picked-up action (or disables the AI); when released, restarts the AI. |

</details>

## Used in

Members of other types that take, return or hold a `PickupAgent`:

[`FireBug.pickupAgent`](/game-api/types/alta-intelligence/firebug#m-pickupagent).
