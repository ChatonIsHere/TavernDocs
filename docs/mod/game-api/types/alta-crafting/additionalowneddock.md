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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`PickupDock`](/mod/game-api/types/alta-items/pickupdock)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AdditionalOwnedDock()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" basePickup"}</code> | <span className="api-desc">Pickup of the crafting part's current root.</span> |
| <Link id="m-haspickup" /><code>{"private bool hasPickup"}</code> | <span className="api-desc">True while there is a root pickup being tracked.</span> |
| <Link id="m-tracking" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" tracking"}</code> | <span className="api-desc">The crafting part whose root is followed.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allowcontainerinteraction" /><code>{"override bool AllowContainerInteraction { get; }"}</code> | <span className="api-desc">Uses the root pickup's dock setting while that pickup is docked, otherwise its own.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">After a short delay, adds the blocking filters if no root pickup was found.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Starts listening for root changes on the tracked crafting part.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkdockfilter" /><code>{"private void CheckDockFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | <span className="api-desc">Dock filter that blocks every pickup. Active while there is no root.</span> |
| <Link id="m-checkinteractionfilter" /><code>{"private void CheckInteractionFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Interaction filter that blocks everything. Active while there is no root.</span> |
| <Link id="m-deregisterdock" /><code>{"private void DeregisterDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">On the root undocking: clears ownership and turns the pickup range back on.</span> |
| <Link id="m-registerdock" /><code>{"private void RegisterDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">On the root docking: copies the dock's player ownership (now or when it updates) and turns off pickup range if that dock disallows extra docks.</span> |
| <Link id="m-rootchanged" /><code>{"private void RootChanged("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" newRoot)"}</code> | <span className="api-desc">Moves the dock and undock hooks to the new root's pickup, resetting ownership; with no root, adds the blocking filters.</span> |
| <Link id="m-updateownership" /><code>{"private void UpdateOwnership("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Copies ownership from a dock once it becomes owned by a player.</span> |

</details>
