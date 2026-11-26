---
title: "DockedOffset"
description: "Moves a transform between two local positions when its pickup (or the crafted assembly's root pickup) is docked or undocked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockedOffset

A **class** in `Root.Township`, `Alta.Inventory`.

Moves a transform between two local positions when its pickup (or the crafted assembly's root pickup) is docked or undocked.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockedOffset()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | Crafting part used to follow the assembly's root pickup. |
| <Link id="m-docked" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" docked"}</code> | Event fired on dock. |
| <Link id="m-dockedlocalposition" /><code>{"private Vector3 dockedLocalPosition"}</code> | Local position while docked. |
| <Link id="m-minimumsize" /><code>{"private int minimumSize"}</code> | Smallest assembly size whose root pickup is followed. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | This object's own pickup. |
| <Link id="m-tomove" /><code>{"private Transform toMove"}</code> | The transform that is moved. |
| <Link id="m-top" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" top"}</code> | The root crafting part currently followed. |
| <Link id="m-undocked" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" undocked"}</code> | Event fired on undock. |
| <Link id="m-undockedlocalposition" /><code>{"private Vector3 undockedLocalPosition"}</code> | Local position while not docked. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Hooks the pickup's dock events and the crafting part's root changes. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-docked-2" /><code>{"private void Docked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | Moves `toMove` to `dockedLocalPosition` and fires `docked`. |
| <Link id="m-rootchanged" /><code>{"private void RootChanged("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" newTop)"}</code> | Moves the listeners to the new root pickup, if the assembly is at least `minimumSize`. |
| <Link id="m-undocked-2" /><code>{"private void Undocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | Moves `toMove` to `undockedLocalPosition` and fires `undocked`. |

</details>
