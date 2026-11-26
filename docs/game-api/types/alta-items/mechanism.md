---
title: "Mechanism"
description: "Base for hand-driven mechanisms such as Crank: grabbing the activation pickup starts a server coroutine that checks for activation and fires events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Mechanism

An **abstract class** in `Root.Township`, `Alta.Mechanisms`.

Base for hand-driven mechanisms such as `Crank`: grabbing the activation pickup starts a server coroutine that checks for activation and fires events.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`Crank`](/game-api/types/alta-items/crank)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected Mechanism()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activatedeffects" /><code>{"private UnityEvent activatedEffects"}</code> | Unity event fired on activation, for effects. |
| <Link id="m-activatedonserver" /><code>{"private UnityEvent activatedOnServer"}</code> | Unity event fired on activation, on the server only. |
| <Link id="m-activationpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" activationPickup"}</code> | Backing field for `ActivationPickup`. |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> | Pickup that must be held before the activation pickup can be grabbed, when hand based. |
| <Link id="m-checkingturn" /><code>{"private Coroutine checkingTurn"}</code> | The running `CheckAction` coroutine. |
| <Link id="m-ishandbased" /><code>{"private bool isHandBased"}</code> | Whether `basePickup` must be held first. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activationpickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" ActivationPickup { get; }"}</code> | The pickup players grab to work the mechanism. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkaction" /><code>{"protected abstract IEnumerator CheckAction()"}</code> | Coroutine the subclass writes to watch for activation; runs on the server while held. |
| <Link id="m-onactivated" /><code>{"protected void OnActivated()"}</code> | Fires `activatedEffects`, and `activatedOnServer` on the server. |
| <Link id="m-oninteracted" /><code>{"protected virtual void OnInteracted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Called when the activation pickup is grabbed; empty by default. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the activation pickup's grab and release, and adds the hand filter if hand based. |
| <Link id="m-filterhand" /><code>{"private void FilterHand("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Only allows grabbing the activation pickup while `basePickup` is held. |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On grab, calls `OnInteracted` and, on the server, restarts `CheckAction`. |
| <Link id="m-stopcheck" /><code>{"private void StopCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release, stops the `CheckAction` coroutine. |

</details>
