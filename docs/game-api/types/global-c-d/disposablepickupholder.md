---
title: "DisposablePickupHolder"
description: "class DisposablePickupHolder in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DisposablePickupHolder

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`IDisposablePickup`](/game-api/types/global-i-l/idisposablepickup), [`IGetChild`](/game-api/types/global-i-l/igetchild)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DisposablePickupHolder()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> |  |
| <Link id="m-heldpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" heldPickup"}</code> |  |
| <Link id="m-pullpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pullpickup">{"PullPickup"}</Link>{" pullPickup"}</code> |  |
| <Link id="m-syncheld" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncHeld"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-idisposablepickup-isdisposed" /><code>{"private bool IDisposablePickup.IsDisposed { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose(bool isForced)"}</code> |  |
| <Link id="m-basefilter" /><code>{"private void BaseFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-destroydispose" /><code>{"private void DestroyDispose("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-losechild" /><code>{"private void IGetChild.LoseChild("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> |  |
| <Link id="m-registerchild" /><code>{"private void IGetChild.RegisterChild("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
