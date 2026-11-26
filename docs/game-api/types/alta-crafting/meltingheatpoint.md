---
title: "MeltingHeatPoint"
description: "Heat point on a meltable item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeltingHeatPoint

A **class** in `Root.Township`, `Alta.Blacksmithing`.

Heat point on a meltable item. Its conductivity comes from the melting model's physical material, and it shows the material's fully heated effect when hot.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`HeatPoint`](/game-api/types/alta-stats-effects/heatpoint)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MeltingHeatPoint()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-meltingmodel" /><code>{"private "}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" meltingModel"}</code> | The melting model whose material this point uses. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-receiveconductivitymultiplier" /><code>{"override float ReceiveConductivityMultiplier { get; }"}</code> | Receive conductivity, scaled by the material's receive thermal conductivity and the global multiplier. |
| <Link id="m-sourceconductivitymultiplier" /><code>{"override float SourceConductivityMultiplier { get; }"}</code> | Source conductivity, scaled by the material's source thermal conductivity and the global multiplier. |
| <Link id="m-internalconductivitymultiplier" /><code>{"protected override float InternalConductivityMultiplier { get; }"}</code> | Internal conductivity, scaled by the material's internal thermal conductivity and the global multiplier. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Finds the parent `MeltingModel` if none is set. |
| <Link id="m-showeffects" /><code>{"protected override void ShowEffects()"}</code> | Shows the material's fully heated effect above its particle temperature, otherwise removes it. |
