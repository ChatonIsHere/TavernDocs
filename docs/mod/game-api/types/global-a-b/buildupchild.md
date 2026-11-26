---
title: "BuildupChild"
description: "One slot on a BuildupPickup that holds a child entity spawned onto it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildupChild

A **class** in `Root.Township`, the global namespace.

One slot on a `BuildupPickup` that holds a child entity spawned onto it. It parents and freezes the child, and reports when the child is grabbed or destroyed so the parent can drop it.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuildupChild()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> | <span className="api-desc">The pickup this slot belongs to.</span> |
| <Link id="m-childcomponents" /><code>{"private MonoBehaviour[] childComponents"}</code> | <span className="api-desc">Components implementing `IGetChild` that are told when a child is added or lost.</span> |
| <Link id="m-childpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" childPickup"}</code> | <span className="api-desc">The child's common pickup, if it has one.</span> |
| <Link id="m-haspickup" /><code>{"private bool hasPickup"}</code> | <span className="api-desc">Whether the child has a pickup.</span> |
| <Link id="m-haspullup" /><code>{"private bool hasPullup"}</code> | <span className="api-desc">Whether a `PullPickup` was found under this slot.</span> |
| <Link id="m-index" /><code>{"private int index"}</code> | <span className="api-desc">This slot's index in the parent `BuildupPickup`.</span> |
| <Link id="m-inversetogglehaschild" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/toggleunityevent">{"ToggleUnityEvent"}</Link>{" inverseToggleHasChild"}</code> | <span className="api-desc">Event fired with the opposite of has-child.</span> |
| <Link id="m-pulluppickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pullupPickup"}</code> | <span className="api-desc">Pickup of a `PullPickup` under this slot, if any.</span> |
| <Link id="m-togglehaschild" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/toggleunityevent">{"ToggleUnityEvent"}</Link>{" toggleHasChild"}</code> | <span className="api-desc">Event fired with whether the slot has a child.</span> |
| <Link id="m-tospawn" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" toSpawn"}</code> | <span className="api-desc">Backing field for `Prefab`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-child" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Child { get; private set; }"}</code> | <span className="api-desc">The child entity currently in this slot, or null.</span> |
| <Link id="m-haschild" /><code>{"bool HasChild { get; private set; }"}</code> | <span className="api-desc">Whether the slot currently holds a child.</span> |
| <Link id="m-prefab" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; }"}</code> | <span className="api-desc">Prefab spawned into this slot.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-lostchild" /><code>{"event Action<int, bool> LostChild"}</code> | <span className="api-desc">Raised with the slot index when the child is grabbed or destroyed. `BuildupPickup` listens and calls `Dispose`.</span> |

<details className="api-private">
<summary>1 private and internal event</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disposed" /><code>{"private event Action<bool> Disposed"}</code> | <span className="api-desc">Raised by `Dispose` with the forced flag, for registered disposable pickups.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkrelease" /><code>{"void CheckRelease("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When the base pickup is let go, makes the local player also let go of the pull-up pickup.</span> |
| <Link id="m-dispose" /><code>{"void Dispose(bool isForced = false)"}</code> | <span className="api-desc">Releases the child: unfreezes its rigidbody, unhooks events, resets its save mode and chunking parent on the server, and tells child components.</span> |
| <Link id="m-registerchild" /><code>{"void RegisterChild("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child, int index)"}</code> | <span className="api-desc">Takes a spawned child into the slot: parents it, freezes its pickup, and on the server saves it as a child of this prefab.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Registers this entity's own disposable pickup, if any, to be disposed with the slot.</span> |
| <Link id="m-checkdestroy" /><code>{"private void CheckDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Raises `LostChild` when the child is destroyed other than by chunk unload.</span> |
| <Link id="m-childinteracted" /><code>{"private void ChildInteracted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Server: raises `LostChild` when someone grabs the child.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Fills in `basePickup` from a parent if empty.</span> |
| <Link id="m-pickupfilter" /><code>{"private void PickupFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Lets the child be grabbed only by the player already holding the base pickup.</span> |
| <Link id="m-registerdisposable" /><code>{"private void RegisterDisposable(Component component)"}</code> | <span className="api-desc">Hooks a component's `IDisposablePickup` to `Disposed` if it isn't disposed yet.</span> |
| <Link id="m-setchild" /><code>{"private void SetChild(bool hasChild)"}</code> | <span className="api-desc">Fires the has-child toggle event and its inverse.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BuildupChild`:

<div className="api-used-in">

[`BuildupPickup.buildupChildren`](/mod/game-api/types/global-a-b/builduppickup#m-buildupchildren), [`BuildupPickup.SetupChild`](/mod/game-api/types/global-a-b/builduppickup#m-setupchild).

</div>
