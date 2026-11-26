---
title: "MaterialCreator<T>"
description: "Base for classes that build a liquid material from settings of type T and a template material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MaterialCreator&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Liquid`.

Base for classes that build a liquid material from settings of type `T` and a template material.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Derived types** [`BoilingParticlesMaterialCreator`](/game-api/types/alta-stats-effects/boilingparticlesmaterialcreator), [`BottleLiquidMaterialCreator`](/game-api/types/alta-stats-effects/bottleliquidmaterialcreator), [`LiquidFoamMaterialCreator`](/game-api/types/alta-stats-effects/liquidfoammaterialcreator), [`LiquidPouringMaterialCreator`](/game-api/types/alta-stats-effects/liquidpouringmaterialcreator), [`LiquidSurfaceMaterialCreator`](/game-api/types/alta-stats-effects/liquidsurfacematerialcreator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MaterialCreator()"}</code> | Creates a `MaterialCreator` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-creatematerial" /><code>{"abstract Material CreateMaterial(T settings, Material materialTemplate)"}</code> | Returns a new material made from the settings and the template. |

## Used in

Members of other types that take, return or hold a `MaterialCreator&lt;T>`:

[`LiquidParticlesRendererColorer.SetParticleRenderersMaterials`](/game-api/types/global-i-l/liquidparticlesrenderercolorer#m-setparticlerenderersmaterials).
