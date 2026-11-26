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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`MeltingModelModifier`](/mod/game-api/types/alta-crafting/meltingmodelmodifier)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CraftingMeltingAllowedModifier()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickupmaps" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{", "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pickupMaps"}</code> | <span className="api-desc">Pickup of each melting model this modifier is attached to.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/mod/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model)"}</code> | <span className="api-desc">Remembers the model's pickup and hooks the model's allowed filter.</span> |
| <Link id="m-terminate" /><code>{"override void Terminate("}<Link to="/mod/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model)"}</code> | <span className="api-desc">Forgets the model's pickup. The filter stays hooked but no longer blocks.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allowedfilter" /><code>{"private void AllowedFilter("}<Link to="/mod/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model, ref bool isAllowed)"}</code> | <span className="api-desc">Marks melting as not allowed when the model's pickup is crafted.</span> |

</details>
