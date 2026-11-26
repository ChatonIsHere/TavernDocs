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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Other creatures](/mod/game-api/creatures/other-creatures#pickupagent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupAgent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-agent" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent"}</code> | <span className="api-desc">The creature's AI agent.</span> |
| <Link id="m-iscontrolled" /><code>{"private bool isControlled"}</code> | <span className="api-desc">True while the creature is held or docked.</span> |
| <Link id="m-pickedupactioncomponent" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponent">{"ActionComponent"}</Link>{" pickedUpActionComponent"}</code> | <span className="api-desc">Action the agent does while held. If not set, the AI is turned off instead.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Backing field for `Pickup`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The pickup that lets players grab the creature.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-caught" /><code>{"event Action Caught"}</code> | <span className="api-desc">Raised when the creature becomes held or docked.</span> |
| <Link id="m-released" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{"> Released"}</code> | <span className="api-desc">Raised with the last interactor when the creature is let go and undocked.</span> |

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the pickup's interaction and dock events.</span> |
| <Link id="m-dockedchanged" /><code>{"private void DockedChanged("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | <span className="api-desc">Dock handler that rechecks whether the creature is held.</span> |
| <Link id="m-interactionchanged" /><code>{"private void InteractionChanged("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Interaction handler that rechecks whether the creature is held.</span> |
| <Link id="m-updatecontrolled" /><code>{"private void UpdateControlled("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When held or docked, server runs the picked-up action (or disables the AI); when released, restarts the AI.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PickupAgent`:

<div className="api-used-in">

[`FireBug.pickupAgent`](/mod/game-api/types/alta-intelligence/firebug#m-pickupagent).

</div>
