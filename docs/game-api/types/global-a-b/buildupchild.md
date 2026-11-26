---
title: "BuildupChild"
description: "One slot on a BuildupPickup that holds a child entity spawned onto it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildupChild

A **class** in `Root.Township`, no namespace.

One slot on a `BuildupPickup` that holds a child entity spawned onto it. It parents and freezes the child, and reports when the child is grabbed or destroyed so the parent can drop it.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BuildupChild()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> | The pickup this slot belongs to. |
| <Link id="m-childcomponents" /><code>{"private MonoBehaviour[] childComponents"}</code> | Components implementing `IGetChild` that are told when a child is added or lost. |
| <Link id="m-childpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" childPickup"}</code> | The child's common pickup, if it has one. |
| <Link id="m-haspickup" /><code>{"private bool hasPickup"}</code> | Whether the child has a pickup. |
| <Link id="m-haspullup" /><code>{"private bool hasPullup"}</code> | Whether a `PullPickup` was found under this slot. |
| <Link id="m-index" /><code>{"private int index"}</code> | This slot's index in the parent `BuildupPickup`. |
| <Link id="m-inversetogglehaschild" /><code>{"private "}<Link to="/game-api/types/global-t-x/toggleunityevent">{"ToggleUnityEvent"}</Link>{" inverseToggleHasChild"}</code> | Event fired with the opposite of has-child. |
| <Link id="m-pulluppickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pullupPickup"}</code> | Pickup of a `PullPickup` under this slot, if any. |
| <Link id="m-togglehaschild" /><code>{"private "}<Link to="/game-api/types/global-t-x/toggleunityevent">{"ToggleUnityEvent"}</Link>{" toggleHasChild"}</code> | Event fired with whether the slot has a child. |
| <Link id="m-tospawn" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" toSpawn"}</code> | Backing field for `Prefab`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-child" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Child { get; private set; }"}</code> | The child entity currently in this slot, or null. |
| <Link id="m-haschild" /><code>{"bool HasChild { get; private set; }"}</code> | Whether the slot currently holds a child. |
| <Link id="m-prefab" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; }"}</code> | Prefab spawned into this slot. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-lostchild" /><code>{"event Action<int, bool> LostChild"}</code> | Raised with the slot index when the child is grabbed or destroyed. `BuildupPickup` listens and calls `Dispose`. |

<details>
<summary>1 private and internal event</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disposed" /><code>{"private event Action<bool> Disposed"}</code> | Raised by `Dispose` with the forced flag, for registered disposable pickups. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkrelease" /><code>{"void CheckRelease("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When the base pickup is let go, makes the local player also let go of the pull-up pickup. |
| <Link id="m-dispose" /><code>{"void Dispose(bool isForced = false)"}</code> | Releases the child: unfreezes its rigidbody, unhooks events, resets its save mode and chunking parent on the server, and tells child components. |
| <Link id="m-registerchild" /><code>{"void RegisterChild("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child, int index)"}</code> | Takes a spawned child into the slot: parents it, freezes its pickup, and on the server saves it as a child of this prefab. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Registers this entity's own disposable pickup, if any, to be disposed with the slot. |
| <Link id="m-checkdestroy" /><code>{"private void CheckDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Raises `LostChild` when the child is destroyed other than by chunk unload. |
| <Link id="m-childinteracted" /><code>{"private void ChildInteracted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Server: raises `LostChild` when someone grabs the child. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Fills in `basePickup` from a parent if empty. |
| <Link id="m-pickupfilter" /><code>{"private void PickupFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Lets the child be grabbed only by the player already holding the base pickup. |
| <Link id="m-registerdisposable" /><code>{"private void RegisterDisposable(Component component)"}</code> | Hooks a component's `IDisposablePickup` to `Disposed` if it isn't disposed yet. |
| <Link id="m-setchild" /><code>{"private void SetChild(bool hasChild)"}</code> | Fires the has-child toggle event and its inverse. |

</details>

## Used in

Members of other types that take, return or hold a `BuildupChild`:

[`BuildupPickup.buildupChildren`](/game-api/types/global-a-b/builduppickup#m-buildupchildren), [`BuildupPickup.SetupChild`](/game-api/types/global-a-b/builduppickup#m-setupchild).
