---
title: "AdditionalOwnedDock"
description: "A PickupDock on a crafting part that takes player ownership from the dock its root part sits in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AdditionalOwnedDock

A **class** in `Root.Township`, `Alta.Crafting`.

A `PickupDock` on a crafting part that takes player ownership from the dock its root part sits in. It refuses all docking and interaction while the part has no root.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`PickupDock`](/game-api/types/alta-items/pickupdock)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AdditionalOwnedDock()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> | Pickup of the crafting part's current root. |
| <Link id="m-haspickup" /><code>{"private bool hasPickup"}</code> | True while there is a root pickup being tracked. |
| <Link id="m-tracking" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" tracking"}</code> | The crafting part whose root is followed. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowcontainerinteraction" /><code>{"override bool AllowContainerInteraction { get; }"}</code> | Uses the root pickup's dock setting while that pickup is docked, otherwise its own. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | After a short delay, adds the blocking filters if no root pickup was found. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Starts listening for root changes on the tracked crafting part. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkdockfilter" /><code>{"private void CheckDockFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Dock filter that blocks every pickup. Active while there is no root. |
| <Link id="m-checkinteractionfilter" /><code>{"private void CheckInteractionFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Interaction filter that blocks everything. Active while there is no root. |
| <Link id="m-deregisterdock" /><code>{"private void DeregisterDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | On the root undocking: clears ownership and turns the pickup range back on. |
| <Link id="m-registerdock" /><code>{"private void RegisterDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | On the root docking: copies the dock's player ownership (now or when it updates) and turns off pickup range if that dock disallows extra docks. |
| <Link id="m-rootchanged" /><code>{"private void RootChanged("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" newRoot)"}</code> | Moves the dock and undock hooks to the new root's pickup, resetting ownership; with no root, adds the blocking filters. |
| <Link id="m-updateownership" /><code>{"private void UpdateOwnership("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Copies ownership from a dock once it becomes owned by a player. |

</details>
