---
title: "DisposablePickupHolder"
description: "Holds a child pickup (from a buildup slot) that the player can pull out with a PullPickup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DisposablePickupHolder

A **class** in `Root.Township`, the global namespace.

Holds a child pickup (from a buildup slot) that the player can pull out with a `PullPickup`. When disposed, it lets the child go into the world or into the pulling hand.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`IDisposablePickup`](/mod/game-api/types/global-i-l/idisposablepickup), [`IGetChild`](/mod/game-api/types/global-i-l/igetchild)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DisposablePickupHolder()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> | <span className="api-desc">The pickup the holder is part of; it must be held to pull.</span> |
| <Link id="m-heldpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" heldPickup"}</code> | <span className="api-desc">The pickup being held.</span> |
| <Link id="m-pullpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pullpickup">{"PullPickup"}</Link>{" pullPickup"}</code> | <span className="api-desc">Pull handle that hands the held pickup over.</span> |
| <Link id="m-syncheld" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncHeld"}</code> | <span className="api-desc">Unused.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-idisposablepickup-isdisposed" /><code>{"private bool IDisposablePickup.IsDisposed { get; }"}</code> | <span className="api-desc">Always false.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose(bool isForced)"}</code> | <span className="api-desc">Turns off the pull pickup and frees the held pickup into the pulling hand or the world, fixing its save mode.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basefilter" /><code>{"private void BaseFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Only allows pulling by the player who is holding the base pickup.</span> |
| <Link id="m-destroydispose" /><code>{"private void DestroyDispose("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Disposes when the held pickup is destroyed by the scene (not unloaded).</span> |
| <Link id="m-losechild" /><code>{"private void IGetChild.LoseChild("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-registerchild" /><code>{"private void IGetChild.RegisterChild("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child)"}</code> | <span className="api-desc">Takes the child as the held pickup and points the pull pickup at it.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks the base filter and the held pickup's destroy, and turns the pull pickup on only if something is held.</span> |

</details>
