---
title: "OnlyAllowDockingWhenEmpty"
description: "Blocks a container from being docked while its own docks hold anything, and blocks its docks from taking items while it is docked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OnlyAllowDockingWhenEmpty

A **class** in `Root.Township`, `Alta.Inventory`.

Blocks a container from being docked while its own docks hold anything, and blocks its docks from taking items while it is docked.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OnlyAllowDockingWhenEmpty()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | Crafting part used to follow the assembly's root pickup. |
| <Link id="m-docks" /><code>{"private "}<Link to="/game-api/types/alta-items/dockarray">{"DockArray"}</Link>{" docks"}</code> | The container's inner docks. |
| <Link id="m-hascontent" /><code>{"private bool hasContent"}</code> | Whether any inner dock holds an item. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The container's own pickup. |
| <Link id="m-top" /><code>{"private "}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" top"}</code> | The root crafting part currently followed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Adds the dock filters, hooks quantity changes and the crafting root, and works out the starting content. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dockfilter" /><code>{"private void DockFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Filter on the inner docks: refuses items while the pickup is docked. |
| <Link id="m-pickupfilter" /><code>{"private void PickupFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | Dock filter on the pickup (or root pickup): refuses docking while `hasContent` is true. |
| <Link id="m-quantitychanged" /><code>{"private void QuantityChanged()"}</code> | Updates `hasContent` from whether any of the docks hold an item. |
| <Link id="m-rootchanged" /><code>{"private void RootChanged("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" newTop)"}</code> | Moves the pickup filter to the new crafting root's pickup. |

</details>
