---
title: "MetalHeatPoint"
description: "class MetalHeatPoint in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MetalHeatPoint

A **class** in `Root.Township`, `Alta.Blacksmithing`.

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
| <Link id="m-glow" /><code>{"float Glow { get; private set; }"}</code> |  |
| <Link id="m-receiveconductivitymultiplier" /><code>{"override float ReceiveConductivityMultiplier { get; }"}</code> |  |
| <Link id="m-sourceconductivitymultiplier" /><code>{"override float SourceConductivityMultiplier { get; }"}</code> |  |
| <Link id="m-thicknessconductivitymultiplier" /><code>{"float ThicknessConductivityMultiplier { get; set; }"}</code> |  |
| <Link id="m-internalconductivitymultiplier" /><code>{"protected override float InternalConductivityMultiplier { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-forwardchanged" /><code>{"private void ForwardChanged("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> |  |
| <Link id="m-nonambientchanged" /><code>{"protected override void NonAmbientChanged()"}</code> |  |
| <Link id="m-resettoambient" /><code>{"protected override void ResetToAmbient()"}</code> |  |
| <Link id="m-showeffects" /><code>{"protected override void ShowEffects()"}</code> |  |
| <Link id="m-updateglow" /><code>{"private void UpdateGlow()"}</code> |  |
| <Link id="m-updatematerial" /><code>{"private void UpdateMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial, "}<Link to="/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel)"}</code> |  |

## Used in

Members of other types that take, return or hold a `MetalHeatPoint`:

[`ForgedPoint.heatPoint`](/game-api/types/alta-crafting/forgedpoint#m-heatpoint), [`ForgedPoint.HeatPoint`](/game-api/types/alta-crafting/forgedpoint#m-heatpoint-2), [`HeatModel<TG, TB, TA>.heatPoints`](/game-api/types/alta-crafting/heatmodel-tg-tb-ta#m-heatpoints), [`HeatModel<TG, TB, TA>.RedPoints`](/game-api/types/alta-crafting/heatmodel-tg-tb-ta#m-redpoints).
