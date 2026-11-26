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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`CookingLiquidVisualTippingPointController`](/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TippingSettings()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-tipthreshold" /><code>{"float TipThreshold"}</code> | Tipping threshold given to the liquid visual at this level. |
| <Link id="m-visualtiplimit" /><code>{"float VisualTipLimit"}</code> | Visual tip limit given to the liquid visual at this level. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Shows both values, for debugging. |

## Used in

Members of other types that take, return or hold a `TippingSettings`:

[`CookingLiquidVisualTippingPointController.GetTipLimitForContainerLevel`](/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller#m-gettiplimitforcontainerlevel), [`CookingLiquidVisualTippingPointController.surfaceTipLimitAtDifferentFullnesses`](/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller#m-surfacetiplimitatdifferentfullnesses).
