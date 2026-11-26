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
| <Link id="m-ctor" /><code>{"DecraftingDeck()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/twosteplever">{"TwoStepLever"}</Link>{" lever"}</code> | <span className="api-desc">Lever shown pulled when an item is already loaded.</span> |
| <Link id="m-pickupholder" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupholder">{"PickupHolder"}</Link>{" pickupHolder"}</code> | <span className="api-desc">Holder the item goes into.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Hooks the holder so held pickups become the decraft target; clients also add the filter.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: if an item is already in the holder, holds it, sets the lever and makes it the target.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickupfilter" /><code>{"private void PickupFilter("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool isValid)"}</code> | <span className="api-desc">Only accepts crafted pickups that aren't assembly parts.</span> |

</details>
