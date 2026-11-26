---
title: "CookingLiquidVisualTippingPointController"
description: "Component on a cooking liquid visual that sets how far the container can tip before the liquid surface spills, based on how full it is."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookingLiquidVisualTippingPointController

A **class** in `Root.Township`, `Alta.Cooking`.

Component on a cooking liquid visual that sets how far the container can tip before the liquid surface spills, based on how full it is. Visual only.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`TippingSettings`](/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller-tippingsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookingLiquidVisualTippingPointController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidcontainer">{"LiquidContainer"}</Link>{" container"}</code> | The liquid container whose fill level drives the limits; found in a parent if not set. |
| <Link id="m-liquidvisual" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingliquidvisual">{"CookingLiquidVisual"}</Link>{" liquidVisual"}</code> | The `CookingLiquidVisual` that gets the tip values. |
| <Link id="m-surfacetiplimitatdifferentfullnesses" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller-tippingsettings">{"CookingLiquidVisualTippingPointController.TippingSettings"}</Link>{"[] surfaceTipLimitAtDifferentFullnesses"}</code> | Tip threshold and visual tip limit for each fill level, one per unit of container size. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"protected void OnValidate()"}</code> | Editor: runs `SetupSurfaceTipLimits`. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the container's shown-amount change to update the tipping point. |
| <Link id="m-gettiplimitforcontainerlevel" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingliquidvisualtippingpointcontroller-tippingsettings">{"CookingLiquidVisualTippingPointController.TippingSettings"}</Link>{" GetTipLimitForContainerLevel(int currentContentLevel)"}</code> | Returns the tipping settings for a whole fill level (1-based, clamped to the array). |
| <Link id="m-setupsurfacetiplimits" /><code>{"private void SetupSurfaceTipLimits()"}</code> | Finds the container and liquid visual if unset and resizes the settings array to one entry per unit of container size. |
| <Link id="m-setvisualstippingpointtonewliquidlevel" /><code>{"private void SetVisualsTippingPointToNewLiquidLevel("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container)"}</code> | Blends the tipping settings of the two nearest fill levels and applies the visual tip limit and threshold to the liquid visual. |

</details>
