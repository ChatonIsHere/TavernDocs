---
title: "LiquidParticlesRendererColorer"
description: "class LiquidParticlesRendererColorer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidParticlesRendererColorer

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidParticlesRendererColorer()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-foammaterialcreator" /><code>{"private static "}<Link to="/game-api/types/alta-stats-effects/liquidfoammaterialcreator">{"LiquidFoamMaterialCreator"}</Link>{" foamMaterialCreator"}</code> |  |
| <Link id="m-foamparticlerenderers" /><code>{"private ParticleSystemRenderer[] foamParticleRenderers"}</code> |  |
| <Link id="m-materialtemplates" /><code>{"private Dictionary<ParticleSystemRenderer, Material> materialTemplates"}</code> |  |
| <Link id="m-pouringmaterialcreator" /><code>{"private static "}<Link to="/game-api/types/alta-stats-effects/liquidpouringmaterialcreator">{"LiquidPouringMaterialCreator"}</Link>{" pouringMaterialCreator"}</code> |  |
| <Link id="m-pouringparticlerenderers" /><code>{"private ParticleSystemRenderer[] pouringParticleRenderers"}</code> |  |
| <Link id="m-pouringrendererpropertyblock" /><code>{"private MaterialPropertyBlock pouringRendererPropertyBlock"}</code> |  |
| <Link id="m-systemstocolorandroid" /><code>{"private ParticleSystem[] systemsToColorAndroid"}</code> |  |
| <Link id="m-trailmaterialtemplates" /><code>{"private Dictionary<ParticleSystemRenderer, Material> trailMaterialTemplates"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-colortoliquid" /><code>{"void ColorToLiquid("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-overrideliquidcolortotintedonpouringrenderers" /><code>{"private void OverrideLiquidColorToTintedOnPouringRenderers("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> |  |
| <Link id="m-setparticlerenderersmaterials" /><code>{"private void SetParticleRenderersMaterials("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid, IEnumerable<ParticleSystemRenderer> renderers, "}<Link to="/game-api/types/alta-stats-effects/materialcreator-t">{"MaterialCreator"}</Link>{"<"}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{"> materialCreator)"}</code> |  |
| <Link id="m-setupmaterialtemplates" /><code>{"private void SetupMaterialTemplates(IEnumerable<ParticleSystemRenderer> particleRenderers)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LiquidParticlesRendererColorer`:

[`PouringParticles.particleSystemRendererColorer`](/game-api/types/alta-stats-effects/pouringparticles#m-particlesystemrenderercolorer).
