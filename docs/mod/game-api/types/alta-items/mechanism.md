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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`Crank`](/mod/game-api/types/alta-items/crank)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Mechanism()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activatedeffects" /><code>{"private UnityEvent activatedEffects"}</code> | <span className="api-desc">Unity event fired on activation, for effects.</span> |
| <Link id="m-activatedonserver" /><code>{"private UnityEvent activatedOnServer"}</code> | <span className="api-desc">Unity event fired on activation, on the server only.</span> |
| <Link id="m-activationpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" activationPickup"}</code> | <span className="api-desc">Backing field for `ActivationPickup`.</span> |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> | <span className="api-desc">Pickup that must be held before the activation pickup can be grabbed, when hand based.</span> |
| <Link id="m-checkingturn" /><code>{"private Coroutine checkingTurn"}</code> | <span className="api-desc">The running `CheckAction` coroutine.</span> |
| <Link id="m-ishandbased" /><code>{"private bool isHandBased"}</code> | <span className="api-desc">Whether `basePickup` must be held first.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activationpickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" ActivationPickup { get; }"}</code> | <span className="api-desc">The pickup players grab to work the mechanism.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkaction" /><code>{"protected abstract IEnumerator CheckAction()"}</code> | <span className="api-desc">Coroutine the subclass writes to watch for activation; runs on the server while held.</span> |
| <Link id="m-onactivated" /><code>{"protected void OnActivated()"}</code> | <span className="api-desc">Fires `activatedEffects`, and `activatedOnServer` on the server.</span> |
| <Link id="m-oninteracted" /><code>{"protected virtual void OnInteracted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Called when the activation pickup is grabbed; empty by default.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the activation pickup's grab and release, and adds the hand filter if hand based.</span> |
| <Link id="m-filterhand" /><code>{"private void FilterHand("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Only allows grabbing the activation pickup while `basePickup` is held.</span> |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On grab, calls `OnInteracted` and, on the server, restarts `CheckAction`.</span> |
| <Link id="m-stopcheck" /><code>{"private void StopCheck("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On release, stops the `CheckAction` coroutine.</span> |

</details>
