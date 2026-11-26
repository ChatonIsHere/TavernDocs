---
title: "DecraftingDeck"
description: "A station where a crafted item is held and hit with a chisel to knock attached parts off one at a time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DecraftingDeck

A **class** in `Root.Township`, `Alta.Crafting`.

A station where a crafted item is held and hit with a chisel to knock attached parts off one at a time.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`DecraftingComponent`](/mod/game-api/types/alta-crafting/decraftingcomponent)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DecraftingDeck()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/twosteplever">{"TwoStepLever"}</Link>{" lever"}</code> | Lever shown pulled when an item is already loaded. |
| <Link id="m-pickupholder" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupholder">{"PickupHolder"}</Link>{" pickupHolder"}</code> | Holder the item goes into. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Hooks the holder so held pickups become the decraft target; clients also add the filter. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: if an item is already in the holder, holds it, sets the lever and makes it the target. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickupfilter" /><code>{"private void PickupFilter("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool isValid)"}</code> | Only accepts crafted pickups that aren't assembly parts. |

</details>
