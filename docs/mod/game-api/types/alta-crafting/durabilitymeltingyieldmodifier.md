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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`MeltingModelModifier`](/mod/game-api/types/alta-crafting/meltingmodelmodifier)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DurabilityMeltingYieldModifier()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/mod/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model)"}</code> | <span className="api-desc">Hooks the model's yield multiplier filter.</span> |
| <Link id="m-terminate" /><code>{"override void Terminate("}<Link to="/mod/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model)"}</code> | <span className="api-desc">Does nothing; the filter stays hooked.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-yieldmultiplier" /><code>{"private void YieldMultiplier("}<Link to="/mod/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model, ref float multiplier)"}</code> | <span className="api-desc">Multiplies the yield by the pickup's durability integrity.</span> |

</details>
