---
title: "LiquidFoamMaterialCreator"
description: "Makes liquid foam materials, setting the liquid's rim colour on a copy of the template."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidFoamMaterialCreator

A **class** in `Root.Township`, `Alta.Liquid`.

Makes liquid foam materials, setting the liquid's rim colour on a copy of the template.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`MaterialCreator<LiquidVisualData>`](/mod/game-api/types/alta-stats-effects/materialcreator-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidFoamMaterialCreator()"}</code> | Creates a `LiquidFoamMaterialCreator` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rimcolor" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/colormaterialproperty">{"ColorMaterialProperty"}</Link>{" rimColor"}</code> | The `_RimColor` shader property. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-creatematerial" /><code>{"override Material CreateMaterial("}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{" settings, Material materialTemplate)"}</code> | Copies the template and sets `_RimColor` from the liquid visual. |

## Used in

Members of other types that take, return or hold a `LiquidFoamMaterialCreator`:

[`LiquidParticlesRendererColorer.foamMaterialCreator`](/mod/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-foammaterialcreator).
