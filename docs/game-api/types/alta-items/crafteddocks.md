---
title: "CraftedDocks"
description: "class CraftedDocks in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CraftedDocks

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IBlockDisassembly`](/game-api/types/alta-crafting/iblockdisassembly)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CraftedDocks()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> |  |
| <Link id="m-docks" /><code>{"private "}<Link to="/game-api/types/global-p/pickupdockgroup">{"PickupDockGroup"}</Link>{" docks"}</code> |  |
| <Link id="m-isdisablingdocks" /><code>{"private bool isDisablingDocks"}</code> |  |
| <Link id="m-rootpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" rootPickup"}</code> |  |
| <Link id="m-storage" /><code>{"private "}<Link to="/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" storage"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alta-crafting-iblockdisassembly-candisassemble" /><code>{"private bool Alta.Crafting.IBlockDisassembly.CanDisassemble { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-changedroot" /><code>{"private void ChangedRoot("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" newRoot)"}</code> |  |
| <Link id="m-disabledocks" /><code>{"private void DisableDocks("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pickupDock)"}</code> |  |
| <Link id="m-enabledocks" /><code>{"private void EnableDocks("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pickupDock)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
