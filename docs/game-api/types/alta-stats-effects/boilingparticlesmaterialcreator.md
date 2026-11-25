---
title: "BoilingParticlesMaterialCreator"
description: "class BoilingParticlesMaterialCreator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BoilingParticlesMaterialCreator

A **class** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`MaterialCreator<LiquidVisualData>`](/game-api/types/alta-stats-effects/materialcreator-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BoilingParticlesMaterialCreator()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-glossiness" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" glossiness"}</code> |
| <Link id="m-liquidcolor" /><code>{"private "}<Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" liquidColor"}</code> |
| <Link id="m-transparency" /><code>{"private "}<Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" transparency"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-liquidcolor-2" /><code><Link to="/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" LiquidColor { get; }"}</code> |
| <Link id="m-transparency-2" /><code><Link to="/game-api/types/alta-utilities/floatmaterialproperty">{"FloatMaterialProperty"}</Link>{" Transparency { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-creatematerial" /><code>{"override Material CreateMaterial("}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" settings, Material materialTemplate)"}</code> |

## Used in

Members of other types that take, return or hold a `BoilingParticlesMaterialCreator`:

[`BoilingParticles.materialCreator`](/game-api/types/alta-stats-effects/boilingparticles#m-materialcreator).
