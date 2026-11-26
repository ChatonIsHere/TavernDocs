---
title: "CraftingMeltingAllowedModifier"
description: "Melting model modifier asset that stops an item from melting while it is crafted into something."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CraftingMeltingAllowedModifier

A **class** in `Root.Township`, `Alta.Blacksmithing`.

Melting model modifier asset that stops an item from melting while it is crafted into something.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`MeltingModelModifier`](/game-api/types/alta-crafting/meltingmodelmodifier)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CraftingMeltingAllowedModifier()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickupmaps" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{", "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pickupMaps"}</code> | Pickup of each melting model this modifier is attached to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model)"}</code> | Remembers the model's pickup and hooks the model's allowed filter. |
| <Link id="m-terminate" /><code>{"override void Terminate("}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model)"}</code> | Forgets the model's pickup. The filter stays hooked but no longer blocks. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowedfilter" /><code>{"private void AllowedFilter("}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model, ref bool isAllowed)"}</code> | Marks melting as not allowed when the model's pickup is crafted. |

</details>
