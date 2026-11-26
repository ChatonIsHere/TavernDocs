---
title: "BoilingParticlesMaterialCreator"
description: "Makes boiling particle materials for a liquid, setting its colour and glossiness on a copy of the template."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoilingParticlesMaterialCreator

A **class** in `Root.Township`, `Alta.Liquid`.

Makes boiling particle materials for a liquid, setting its colour and glossiness on a copy of the template.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`MaterialCreator<LiquidVisualData>`](/game-api/types/alta-stats-effects/materialcreator-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoilingParticlesMaterialCreator()"}</code> | Creates a `BoilingParticlesMaterialCreator` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-glossiness" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" glossiness"}</code> | The `_Glossiness` shader property. |
| <Link id="m-liquidcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" liquidColor"}</code> | Backing field for `LiquidColor`. |
| <Link id="m-transparency" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" transparency"}</code> | Backing field for `Transparency`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-liquidcolor-2" /><code><Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" LiquidColor { get; }"}</code> | The `_WaterColor` shader property. |
| <Link id="m-transparency-2" /><code><Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" Transparency { get; }"}</code> | The `_Transparency` shader property, set per renderer through a property block. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-creatematerial" /><code>{"override Material CreateMaterial("}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" settings, Material materialTemplate)"}</code> | Copies the template and sets the liquid colour and glossiness on it. |

## Used in

Members of other types that take, return or hold a `BoilingParticlesMaterialCreator`:

[`BoilingParticles.materialCreator`](/game-api/types/alta-stats-effects/boilingparticles#m-materialcreator).
