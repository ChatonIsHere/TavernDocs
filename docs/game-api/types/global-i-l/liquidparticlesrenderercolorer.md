---
title: "LiquidParticlesRendererColorer"
description: "Recolours pouring and foam particle materials to match a liquid, using the liquid's shared materials built from the original templates."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidParticlesRendererColorer

A **class** in `Root.Township`, no namespace.

Recolours pouring and foam particle materials to match a liquid, using the liquid's shared materials built from the original templates.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LiquidParticlesRendererColorer()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-foammaterialcreator" /><code>{"private static "}<Link to="/game-api/types/alta-stats-effects/liquidfoammaterialcreator">{"LiquidFoamMaterialCreator"}</Link>{" foamMaterialCreator"}</code> | Shared creator for foam materials. |
| <Link id="m-foamparticlerenderers" /><code>{"private ParticleSystemRenderer[] foamParticleRenderers"}</code> | Foam particle renderers to recolour. |
| <Link id="m-materialtemplates" /><code>{"private Dictionary<ParticleSystemRenderer, Material> materialTemplates"}</code> | Original material per renderer. |
| <Link id="m-pouringmaterialcreator" /><code>{"private static "}<Link to="/game-api/types/alta-stats-effects/liquidpouringmaterialcreator">{"LiquidPouringMaterialCreator"}</Link>{" pouringMaterialCreator"}</code> | Shared creator for pouring materials. |
| <Link id="m-pouringparticlerenderers" /><code>{"private ParticleSystemRenderer[] pouringParticleRenderers"}</code> | Pouring particle renderers to recolour. |
| <Link id="m-pouringrendererpropertyblock" /><code>{"private MaterialPropertyBlock pouringRendererPropertyBlock"}</code> | Property block for the tint on pouring renderers. |
| <Link id="m-systemstocolorandroid" /><code>{"private ParticleSystem[] systemsToColorAndroid"}</code> | Not used in this file. |
| <Link id="m-trailmaterialtemplates" /><code>{"private Dictionary<ParticleSystemRenderer, Material> trailMaterialTemplates"}</code> | Original trail material per renderer. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-colortoliquid" /><code>{"void ColorToLiquid("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | Swaps pouring and foam materials for the liquid's versions and tints the pouring renderers. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Stores each renderer's original material and trail material as templates. |
| <Link id="m-overrideliquidcolortotintedonpouringrenderers" /><code>{"private void OverrideLiquidColorToTintedOnPouringRenderers("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | Sets the liquid's tinted colour on the pouring renderers through a property block. |
| <Link id="m-setparticlerenderersmaterials" /><code>{"private void SetParticleRenderersMaterials("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid, IEnumerable<ParticleSystemRenderer> renderers, "}<Link to="/game-api/types/alta-stats-effects/materialcreator-t">{"MaterialCreator"}</Link>{"<"}<Link to="/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{"> materialCreator)"}</code> | Gives each renderer, and its trail, the liquid's shared material made from its template. |
| <Link id="m-setupmaterialtemplates" /><code>{"private void SetupMaterialTemplates(IEnumerable<ParticleSystemRenderer> particleRenderers)"}</code> | Records the template materials for a set of renderers. |

</details>

## Used in

Members of other types that take, return or hold a `LiquidParticlesRendererColorer`:

[`PouringParticles.particleSystemRendererColorer`](/game-api/types/alta-stats-effects/pouringparticles#m-particlesystemrenderercolorer).
