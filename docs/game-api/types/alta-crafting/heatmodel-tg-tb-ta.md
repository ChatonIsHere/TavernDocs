---
title: "HeatModel<TG, TB, TA>"
description: "Colour model whose red channel is a list of metal heat points, used to show heat on metal."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatModel&lt;TG, TB, TA&gt;

An **abstract class** in `Root.Township`, `Alta.Blacksmithing`.

Colour model whose red channel is a list of metal heat points, used to show heat on metal. Not active on headless servers.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`ColorModel<MetalHeatPoint, TG, TB, TA>`](/game-api/types/global-c-d/colormodel-tr-tg-tb-ta)
- **Derived types** [`ForgedModel<TB, TA>`](/game-api/types/alta-crafting/forgedmodel-tb-ta), [`HeatModel`](/game-api/types/alta-crafting/heatmodel)
- **Attributes** `ExecuteInEditMode`
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected HeatModel()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-heatpointcollection" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpointcollection">{"HeatPointCollection"}</Link>{" heatPointCollection"}</code> | Heat point collection whose sync makes clients recheck the colour. |
| <Link id="m-heatpoints" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/metalheatpoint">{"MetalHeatPoint"}</Link>{"> heatPoints"}</code> | Metal heat points that make up the red channel. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-redpoints" /><code>{"protected override List<"}<Link to="/game-api/types/alta-crafting/metalheatpoint">{"MetalHeatPoint"}</Link>{"> RedPoints { get; }"}</code> | Returns the metal heat points that drive the red channel. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Does nothing on headless builds. Otherwise the server hooks each heat point's `Changed`, and clients hook the collection's sync. |
