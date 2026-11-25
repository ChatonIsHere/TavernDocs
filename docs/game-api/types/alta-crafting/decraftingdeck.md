---
title: "DecraftingDeck"
description: "class DecraftingDeck in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DecraftingDeck

A **class** in `Root.Township`, `Alta.Crafting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`DecraftingComponent`](/game-api/types/alta-crafting/decraftingcomponent)
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DecraftingDeck()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-lever" /><code>{"private "}<Link to="/game-api/types/global-t-x/twosteplever">{"TwoStepLever"}</Link>{" lever"}</code> |
| <Link id="m-pickupholder" /><code>{"private "}<Link to="/game-api/types/global-p/pickupholder">{"PickupHolder"}</Link>{" pickupHolder"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-pickupfilter" /><code>{"private void PickupFilter("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool isValid)"}</code> |

</details>
