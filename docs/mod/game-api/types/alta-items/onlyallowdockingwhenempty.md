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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OnlyAllowDockingWhenEmpty()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | <span className="api-desc">Crafting part used to follow the assembly's root pickup.</span> |
| <Link id="m-docks" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/dockarray">{"DockArray"}</Link>{" docks"}</code> | <span className="api-desc">The container's inner docks.</span> |
| <Link id="m-hascontent" /><code>{"private bool hasContent"}</code> | <span className="api-desc">Whether any inner dock holds an item.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The container's own pickup.</span> |
| <Link id="m-top" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" top"}</code> | <span className="api-desc">The root crafting part currently followed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Adds the dock filters, hooks quantity changes and the crafting root, and works out the starting content.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dockfilter" /><code>{"private void DockFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | <span className="api-desc">Filter on the inner docks: refuses items while the pickup is docked.</span> |
| <Link id="m-pickupfilter" /><code>{"private void PickupFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | <span className="api-desc">Dock filter on the pickup (or root pickup): refuses docking while `hasContent` is true.</span> |
| <Link id="m-quantitychanged" /><code>{"private void QuantityChanged()"}</code> | <span className="api-desc">Updates `hasContent` from whether any of the docks hold an item.</span> |
| <Link id="m-rootchanged" /><code>{"private void RootChanged("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" newTop)"}</code> | <span className="api-desc">Moves the pickup filter to the new crafting root's pickup.</span> |

</details>
