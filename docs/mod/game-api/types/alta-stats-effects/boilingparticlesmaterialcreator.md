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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`MaterialCreator<LiquidVisualData>`](/mod/game-api/types/alta-stats-effects/materialcreator-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BoilingParticlesMaterialCreator()"}</code> | <span className="api-desc">Creates a `BoilingParticlesMaterialCreator` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-glossiness" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" glossiness"}</code> | <span className="api-desc">The `_Glossiness` shader property.</span> |
| <Link id="m-liquidcolor" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" liquidColor"}</code> | <span className="api-desc">Backing field for `LiquidColor`.</span> |
| <Link id="m-transparency" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" transparency"}</code> | <span className="api-desc">Backing field for `Transparency`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-liquidcolor-2" /><code><Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" LiquidColor { get; }"}</code> | <span className="api-desc">The `_WaterColor` shader property.</span> |
| <Link id="m-transparency-2" /><code><Link to="/mod/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" Transparency { get; }"}</code> | <span className="api-desc">The `_Transparency` shader property, set per renderer through a property block.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-creatematerial" /><code>{"override Material CreateMaterial("}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" settings, Material materialTemplate)"}</code> | <span className="api-desc">Copies the template and sets the liquid colour and glossiness on it.</span> |

## Used in

Members of other types that take, return or hold a `BoilingParticlesMaterialCreator`:

<div className="api-used-in">

[`BoilingParticles.materialCreator`](/mod/game-api/types/alta-stats-effects/boilingparticles#m-materialcreator).

</div>
