---
title: "MetalHeatPoint"
description: "A heat point on a metal item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MetalHeatPoint

A **class** in `Root.Township`, `Alta.Blacksmithing`.

A heat point on a metal item. Heat moves faster or slower based on its physical material, and it tracks how much the metal glows.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`HeatPoint`](/game-api/types/alta-stats-effects/heatpoint), [`IColorModelPoint<MetalHeatPoint>`](/game-api/types/global-i-l/icolormodelpoint-outt)
- **Derived types** [`HeatModel<TG, TB, TA>`](/game-api/types/alta-crafting/heatmodel-tg-tb-ta), [`MetalHeatPoint`](/game-api/types/alta-crafting/metalheatpoint)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MetalHeatPoint()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"private Action<"}<Link to="/game-api/types/alta-crafting/metalheatpoint">{"MetalHeatPoint"}</Link>{"> changed"}</code> |  |
| <Link id="m-materialpart" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" materialPart"}</code> |  |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-glow" /><code>{"float Glow { get; private set; }"}</code> | How much the metal glows (0 to 1), from the material's glow start and end temperatures. |
| <Link id="m-receiveconductivitymultiplier" /><code>{"override float ReceiveConductivityMultiplier { get; }"}</code> | How fast the point takes in heat, scaled by the material, the global multiplier and thickness. |
| <Link id="m-sourceconductivitymultiplier" /><code>{"override float SourceConductivityMultiplier { get; }"}</code> | How fast the point gives off heat, scaled by the material, the global multiplier and thickness. |
| <Link id="m-thicknessconductivitymultiplier" /><code>{"float ThicknessConductivityMultiplier { get; set; }"}</code> | Extra conductivity scale for how thick the metal is. 1 by default. |
| <Link id="m-internalconductivitymultiplier" /><code>{"protected override float InternalConductivityMultiplier { get; }"}</code> | How fast heat spreads inside the item, scaled by the material, the global multiplier and thickness. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Finds the item's physical material and follows changes to it. Falls back to material 1 with no material part. |
| <Link id="m-forwardchanged" /><code>{"private void ForwardChanged("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> |  |
| <Link id="m-nonambientchanged" /><code>{"protected override void NonAmbientChanged()"}</code> | Updates `Glow` when the temperature changes. |
| <Link id="m-resettoambient" /><code>{"protected override void ResetToAmbient()"}</code> | Updates `Glow` after going back to ambient temperature. |
| <Link id="m-showeffects" /><code>{"protected override void ShowEffects()"}</code> | Shows the material's fully heated effect above its particle temperature, otherwise removes it. |
| <Link id="m-updateglow" /><code>{"private void UpdateGlow()"}</code> |  |
| <Link id="m-updatematerial" /><code>{"private void UpdateMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial, "}<Link to="/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel)"}</code> |  |

## Used in

Members of other types that take, return or hold a `MetalHeatPoint`:

[`ForgedPoint.heatPoint`](/game-api/types/alta-crafting/forgedpoint#m-heatpoint), [`ForgedPoint.HeatPoint`](/game-api/types/alta-crafting/forgedpoint#m-heatpoint-2), [`HeatModel<TG, TB, TA>.heatPoints`](/game-api/types/alta-crafting/heatmodel-tg-tb-ta#m-heatpoints), [`HeatModel<TG, TB, TA>.RedPoints`](/game-api/types/alta-crafting/heatmodel-tg-tb-ta#m-redpoints).
