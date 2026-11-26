---
title: "CookingLiquidVisualTippingPointController.TippingSettings"
description: "Tipping limits for one liquid level of a cooking container."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingLiquidVisualTippingPointController.TippingSettings

A **class** in `Root.Township`, `Alta.Cooking`.

Tipping limits for one liquid level of a cooking container. The controller picks the entries either side of the current level and blends them.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`CookingLiquidVisualTippingPointController`](/mod/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TippingSettings()"}</code> | <span className="api-desc">Creates a `CookingLiquidVisualTippingPointController.TippingSettings` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-tipthreshold" /><code>{"float TipThreshold"}</code> | <span className="api-desc">Tipping threshold given to the liquid visual at this level.</span> |
| <Link id="m-visualtiplimit" /><code>{"float VisualTipLimit"}</code> | <span className="api-desc">Visual tip limit given to the liquid visual at this level.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Shows both values, for debugging.</span> |

## Used in

Members of other types that take, return or hold a `TippingSettings`:

<div className="api-used-in">

[`CookingLiquidVisualTippingPointController.GetTipLimitForContainerLevel`](/mod/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller#m-gettiplimitforcontainerlevel), [`CookingLiquidVisualTippingPointController.surfaceTipLimitAtDifferentFullnesses`](/mod/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller#m-surfacetiplimitatdifferentfullnesses).

</div>
