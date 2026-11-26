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
| <Link id="m-ctor" /><code>{"CraftedDocks()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | The crafting part whose root is watched. |
| <Link id="m-docks" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" docks"}</code> | The docks this controls. |
| <Link id="m-isdisablingdocks" /><code>{"private bool isDisablingDocks"}</code> | Whether the dock GameObjects are hidden too, not just the storage visual. |
| <Link id="m-rootpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" rootPickup"}</code> | The current root pickup being watched. |
| <Link id="m-storage" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" storage"}</code> | Optional scaled visual that is hidden while docks are disabled. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-crafting-iblockdisassembly-candisassemble" /><code>{"private bool Alta.Crafting.IBlockDisassembly.CanDisassemble { get; }"}</code> | False while any of the docks holds an item. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Starts listening for crafting root changes. |
| <Link id="m-changedroot" /><code>{"private void ChangedRoot("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" newRoot)"}</code> | Moves the dock and undock listeners to the new root pickup and disables docks if it's already docked. |
| <Link id="m-disabledocks" /><code>{"private void DisableDocks("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pickupDock)"}</code> | Hides the storage visual and, if `isDisablingDocks` is set, the docks too. |
| <Link id="m-enabledocks" /><code>{"private void EnableDocks("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pickupDock)"}</code> | Turns the docks and the storage visual back on. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Disables the docks if the root pickup is this part's own pickup. |

</details>
