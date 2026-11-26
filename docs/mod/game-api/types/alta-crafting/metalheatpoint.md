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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`HeatPoint`](/mod/game-api/types/alta-stats-effects/heatpoint), [`IColorModelPoint<MetalHeatPoint>`](/mod/game-api/types/global-i-l/icolormodelpoint-outt)
- **Derived types** [`HeatModel<TG, TB, TA>`](/mod/game-api/types/alta-crafting/heatmodel-tg-tb-ta), [`MetalHeatPoint`](/mod/game-api/types/alta-crafting/metalheatpoint)
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MetalHeatPoint()"}</code> | <span className="api-desc">Creates a `MetalHeatPoint` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"private Action<"}<Link to="/mod/game-api/types/alta-crafting/metalheatpoint">{"MetalHeatPoint"}</Link>{"> changed"}</code> | <span className="api-desc">Listeners of the colour model `Changed` event.</span> |
| <Link id="m-materialpart" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" materialPart"}</code> | <span className="api-desc">Material part in a parent that gives this point its metal; without one it uses material hash 1.</span> |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> | <span className="api-desc">Current physical material, which sets conductivity, glow range and heat effects.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-glow" /><code>{"float Glow { get; private set; }"}</code> | <span className="api-desc">How much the metal glows (0 to 1), from the material's glow start and end temperatures.</span> |
| <Link id="m-receiveconductivitymultiplier" /><code>{"override float ReceiveConductivityMultiplier { get; }"}</code> | <span className="api-desc">How fast the point takes in heat, scaled by the material, the global multiplier and thickness.</span> |
| <Link id="m-sourceconductivitymultiplier" /><code>{"override float SourceConductivityMultiplier { get; }"}</code> | <span className="api-desc">How fast the point gives off heat, scaled by the material, the global multiplier and thickness.</span> |
| <Link id="m-thicknessconductivitymultiplier" /><code>{"float ThicknessConductivityMultiplier { get; set; }"}</code> | <span className="api-desc">Extra conductivity scale for how thick the metal is. 1 by default.</span> |
| <Link id="m-internalconductivitymultiplier" /><code>{"protected override float InternalConductivityMultiplier { get; }"}</code> | <span className="api-desc">How fast heat spreads inside the item, scaled by the material, the global multiplier and thickness.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Finds the item's physical material and follows changes to it. Falls back to material 1 with no material part.</span> |
| <Link id="m-nonambientchanged" /><code>{"protected override void NonAmbientChanged()"}</code> | <span className="api-desc">Updates `Glow` when the temperature changes.</span> |
| <Link id="m-resettoambient" /><code>{"protected override void ResetToAmbient()"}</code> | <span className="api-desc">Updates `Glow` after going back to ambient temperature.</span> |
| <Link id="m-showeffects" /><code>{"protected override void ShowEffects()"}</code> | <span className="api-desc">Shows the material's fully heated effect above its particle temperature, otherwise removes it.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forwardchanged" /><code>{"private void ForwardChanged("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> | <span className="api-desc">Passes the heat point's `Changed` event on to colour model listeners.</span> |
| <Link id="m-updateglow" /><code>{"private void UpdateGlow()"}</code> | <span className="api-desc">Sets `Glow` from the temperature between the material's glow start and end.</span> |
| <Link id="m-updatematerial" /><code>{"private void UpdateMaterial("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial, "}<Link to="/mod/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel)"}</code> | <span className="api-desc">Picks up a new physical material when the part's material changes.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MetalHeatPoint`:

<div className="api-used-in">

[`ForgedPoint.heatPoint`](/mod/game-api/types/alta-crafting/forgedpoint#m-heatpoint), [`ForgedPoint.HeatPoint`](/mod/game-api/types/alta-crafting/forgedpoint#m-heatpoint-2), [`HeatModel<TG, TB, TA>.heatPoints`](/mod/game-api/types/alta-crafting/heatmodel-tg-tb-ta#m-heatpoints), [`HeatModel<TG, TB, TA>.RedPoints`](/mod/game-api/types/alta-crafting/heatmodel-tg-tb-ta#m-redpoints).

</div>
