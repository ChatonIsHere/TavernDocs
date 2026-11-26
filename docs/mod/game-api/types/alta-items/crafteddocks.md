---
title: "CraftedDocks"
description: "Manages docks on a crafted part: shows or hides them (and a storage visual) when the assembly's root pickup is docked or undocked, and blocks disassembly..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CraftedDocks

A **class** in `Root.Township`, `Alta.Inventory`.

Manages docks on a crafted part: shows or hides them (and a storage visual) when the assembly's root pickup is docked or undocked, and blocks disassembly while they hold items.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IBlockDisassembly`](/mod/game-api/types/alta-crafting/iblockdisassembly)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CraftedDocks()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | <span className="api-desc">The crafting part whose root is watched.</span> |
| <Link id="m-docks" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" docks"}</code> | <span className="api-desc">The docks this controls.</span> |
| <Link id="m-isdisablingdocks" /><code>{"private bool isDisablingDocks"}</code> | <span className="api-desc">Whether the dock GameObjects are hidden too, not just the storage visual.</span> |
| <Link id="m-rootpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" rootPickup"}</code> | <span className="api-desc">The current root pickup being watched.</span> |
| <Link id="m-storage" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" storage"}</code> | <span className="api-desc">Optional scaled visual that is hidden while docks are disabled.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-crafting-iblockdisassembly-candisassemble" /><code>{"private bool Alta.Crafting.IBlockDisassembly.CanDisassemble { get; }"}</code> | <span className="api-desc">False while any of the docks holds an item.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Starts listening for crafting root changes.</span> |
| <Link id="m-changedroot" /><code>{"private void ChangedRoot("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" newRoot)"}</code> | <span className="api-desc">Moves the dock and undock listeners to the new root pickup and disables docks if it's already docked.</span> |
| <Link id="m-disabledocks" /><code>{"private void DisableDocks("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pickupDock)"}</code> | <span className="api-desc">Hides the storage visual and, if `isDisablingDocks` is set, the docks too.</span> |
| <Link id="m-enabledocks" /><code>{"private void EnableDocks("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pickupDock)"}</code> | <span className="api-desc">Turns the docks and the storage visual back on.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Disables the docks if the root pickup is this part's own pickup.</span> |

</details>
