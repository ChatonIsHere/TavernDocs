---
title: "HeatModel<TG, TB, TA>"
description: "abstract class HeatModel<TG, TB, TA> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatModel&lt;TG, TB, TA&gt;

An **abstract class** in `Root.Township`, `Alta.Blacksmithing`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`ColorModel<MetalHeatPoint, TG, TB, TA>`](/game-api/types/global-c-d/colormodel-tr-tg-tb-ta)
- **Derived types** [`ForgedModel<TB, TA>`](/game-api/types/alta-crafting/forgedmodel-tb-ta), [`HeatModel`](/game-api/types/alta-crafting/heatmodel)
- **Attributes** `ExecuteInEditMode`
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected HeatModel()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-heatpointcollection" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpointcollection">{"HeatPointCollection"}</Link>{" heatPointCollection"}</code> |
| <Link id="m-heatpoints" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/metalheatpoint">{"MetalHeatPoint"}</Link>{"> heatPoints"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-redpoints" /><code>{"protected override List<"}<Link to="/game-api/types/alta-crafting/metalheatpoint">{"MetalHeatPoint"}</Link>{"> RedPoints { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |
