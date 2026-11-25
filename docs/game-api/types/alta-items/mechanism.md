---
title: "Mechanism"
description: "Watches an ActivationPickup; while it's held (and, if hand based, the base is held too), the server runs the subclass's CheckAction coroutine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Mechanism

An **abstract class** in `Root.Township`, `Alta.Mechanisms`.

Watches an `ActivationPickup`; while it's held (and, if hand based, the base is held too), the server runs the subclass's `CheckAction` coroutine.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`Crank`](/game-api/types/alta-items/crank)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Mechanism()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activatedeffects" /><code>{"private UnityEvent activatedEffects"}</code> |  |
| <Link id="m-activatedonserver" /><code>{"private UnityEvent activatedOnServer"}</code> |  |
| <Link id="m-activationpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" activationPickup"}</code> |  |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> |  |
| <Link id="m-checkingturn" /><code>{"private Coroutine checkingTurn"}</code> |  |
| <Link id="m-ishandbased" /><code>{"private bool isHandBased"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activationpickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" ActivationPickup { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkaction" /><code>{"protected abstract IEnumerator CheckAction()"}</code> |  |
| <Link id="m-filterhand" /><code>{"private void FilterHand("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-onactivated" /><code>{"protected void OnActivated()"}</code> |  |
| <Link id="m-oninteracted" /><code>{"protected virtual void OnInteracted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-startcheck" /><code>{"private void StartCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-stopcheck" /><code>{"private void StopCheck("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
