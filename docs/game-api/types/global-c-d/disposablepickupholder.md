---
title: "DisposablePickupHolder"
description: "Holds a child pickup (from a buildup slot) that the player can pull out with a PullPickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DisposablePickupHolder

A **class** in `Root.Township`, no namespace.

Holds a child pickup (from a buildup slot) that the player can pull out with a `PullPickup`. When disposed, it lets the child go into the world or into the pulling hand.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`IDisposablePickup`](/game-api/types/global-i-l/idisposablepickup), [`IGetChild`](/game-api/types/global-i-l/igetchild)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DisposablePickupHolder()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> | The pickup the holder is part of; it must be held to pull. |
| <Link id="m-heldpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" heldPickup"}</code> | The pickup being held. |
| <Link id="m-pullpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pullpickup">{"PullPickup"}</Link>{" pullPickup"}</code> | Pull handle that hands the held pickup over. |
| <Link id="m-syncheld" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncHeld"}</code> | Unused. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-idisposablepickup-isdisposed" /><code>{"private bool IDisposablePickup.IsDisposed { get; }"}</code> | Always false. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose(bool isForced)"}</code> | Turns off the pull pickup and frees the held pickup into the pulling hand or the world, fixing its save mode. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basefilter" /><code>{"private void BaseFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Only allows pulling by the player who is holding the base pickup. |
| <Link id="m-destroydispose" /><code>{"private void DestroyDispose("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Disposes when the held pickup is destroyed by the scene (not unloaded). |
| <Link id="m-losechild" /><code>{"private void IGetChild.LoseChild("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> | Empty. |
| <Link id="m-registerchild" /><code>{"private void IGetChild.RegisterChild("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> | Takes the child as the held pickup and points the pull pickup at it. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks the base filter and the held pickup's destroy, and turns the pull pickup on only if something is held. |

</details>
