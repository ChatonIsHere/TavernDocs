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
| <Link id="m-ctor" /><code>{"DockedOffset()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | <span className="api-desc">Crafting part used to follow the assembly's root pickup.</span> |
| <Link id="m-docked" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" docked"}</code> | <span className="api-desc">Event fired on dock.</span> |
| <Link id="m-dockedlocalposition" /><code>{"private Vector3 dockedLocalPosition"}</code> | <span className="api-desc">Local position while docked.</span> |
| <Link id="m-minimumsize" /><code>{"private int minimumSize"}</code> | <span className="api-desc">Smallest assembly size whose root pickup is followed.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">This object's own pickup.</span> |
| <Link id="m-tomove" /><code>{"private Transform toMove"}</code> | <span className="api-desc">The transform that is moved.</span> |
| <Link id="m-top" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" top"}</code> | <span className="api-desc">The root crafting part currently followed.</span> |
| <Link id="m-undocked" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" undocked"}</code> | <span className="api-desc">Event fired on undock.</span> |
| <Link id="m-undockedlocalposition" /><code>{"private Vector3 undockedLocalPosition"}</code> | <span className="api-desc">Local position while not docked.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Hooks the pickup's dock events and the crafting part's root changes.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-docked-2" /><code>{"private void Docked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | <span className="api-desc">Moves `toMove` to `dockedLocalPosition` and fires `docked`.</span> |
| <Link id="m-rootchanged" /><code>{"private void RootChanged("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" newTop)"}</code> | <span className="api-desc">Moves the listeners to the new root pickup, if the assembly is at least `minimumSize`.</span> |
| <Link id="m-undocked-2" /><code>{"private void Undocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" arg2, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" arg3)"}</code> | <span className="api-desc">Moves `toMove` to `undockedLocalPosition` and fires `undocked`.</span> |

</details>
