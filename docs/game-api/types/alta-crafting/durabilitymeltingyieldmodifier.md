---
title: "DurabilityMeltingYieldModifier"
description: "Melting model modifier asset that scales the melting yield by the item's durability integrity, so worn items give less."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilityMeltingYieldModifier

A **class** in `Root.Township`, `Alta.Blacksmithing`.

Melting model modifier asset that scales the melting yield by the item's durability integrity, so worn items give less.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`MeltingModelModifier`](/game-api/types/alta-crafting/meltingmodelmodifier)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DurabilityMeltingYieldModifier()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model)"}</code> | Hooks the model's yield multiplier filter. |
| <Link id="m-terminate" /><code>{"override void Terminate("}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model)"}</code> | Does nothing; the filter stays hooked. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-yieldmultiplier" /><code>{"private void YieldMultiplier("}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model, ref float multiplier)"}</code> | Multiplies the yield by the pickup's durability integrity. |

</details>
