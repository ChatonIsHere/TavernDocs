---
title: "BuildupChild"
description: "class BuildupChild in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuildupChild

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuildupChild()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> |  |
| <Link id="m-childcomponents" /><code>{"private MonoBehaviour[] childComponents"}</code> |  |
| <Link id="m-childpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" childPickup"}</code> |  |
| <Link id="m-haspickup" /><code>{"private bool hasPickup"}</code> |  |
| <Link id="m-haspullup" /><code>{"private bool hasPullup"}</code> |  |
| <Link id="m-index" /><code>{"private int index"}</code> |  |
| <Link id="m-inversetogglehaschild" /><code>{"private "}<Link to="/game-api/types/global-t-x/toggleunityevent">{"ToggleUnityEvent"}</Link>{" inverseToggleHasChild"}</code> |  |
| <Link id="m-pulluppickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pullupPickup"}</code> |  |
| <Link id="m-togglehaschild" /><code>{"private "}<Link to="/game-api/types/global-t-x/toggleunityevent">{"ToggleUnityEvent"}</Link>{" toggleHasChild"}</code> |  |
| <Link id="m-tospawn" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" toSpawn"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-child" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Child { get; private set; }"}</code> |  |
| <Link id="m-haschild" /><code>{"bool HasChild { get; private set; }"}</code> |  |
| <Link id="m-prefab" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" Prefab { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-lostchild" /><code>{"event Action<int, bool> LostChild"}</code> |  |
| <Link id="m-disposed" /><code>{"private event Action<bool> Disposed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkrelease" /><code>{"void CheckRelease("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-dispose" /><code>{"void Dispose(bool isForced = false)"}</code> |  |
| <Link id="m-registerchild" /><code>{"void RegisterChild("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" child, int index)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkdestroy" /><code>{"private void CheckDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-childinteracted" /><code>{"private void ChildInteracted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-pickupfilter" /><code>{"private void PickupFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-registerdisposable" /><code>{"private void RegisterDisposable(Component component)"}</code> |  |
| <Link id="m-setchild" /><code>{"private void SetChild(bool hasChild)"}</code> |  |

## Used in

Members of other types that take, return or hold a `BuildupChild`:

[`BuildupPickup.buildupChildren`](/game-api/types/global-a-b/builduppickup#m-buildupchildren), [`BuildupPickup.SetupChild`](/game-api/types/global-a-b/builduppickup#m-setupchild).
