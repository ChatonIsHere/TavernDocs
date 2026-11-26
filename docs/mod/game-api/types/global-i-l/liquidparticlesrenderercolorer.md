---
title: "LiquidParticlesRendererColorer"
description: "Recolours pouring and foam particle materials to match a liquid, using the liquid's shared materials built from the original templates."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidParticlesRendererColorer

A **class** in `Root.Township`, the global namespace.

Recolours pouring and foam particle materials to match a liquid, using the liquid's shared materials built from the original templates.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidParticlesRendererColorer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-foammaterialcreator" /><code>{"private static "}<Link to="/mod/game-api/types/alta-stats-effects/liquidfoammaterialcreator">{"LiquidFoamMaterialCreator"}</Link>{" foamMaterialCreator"}</code> | <span className="api-desc">Shared creator for foam materials.</span> |
| <Link id="m-foamparticlerenderers" /><code>{"private ParticleSystemRenderer[] foamParticleRenderers"}</code> | <span className="api-desc">Foam particle renderers to recolour.</span> |
| <Link id="m-materialtemplates" /><code>{"private Dictionary<ParticleSystemRenderer, Material> materialTemplates"}</code> | <span className="api-desc">Original material per renderer.</span> |
| <Link id="m-pouringmaterialcreator" /><code>{"private static "}<Link to="/mod/game-api/types/alta-stats-effects/liquidpouringmaterialcreator">{"LiquidPouringMaterialCreator"}</Link>{" pouringMaterialCreator"}</code> | <span className="api-desc">Shared creator for pouring materials.</span> |
| <Link id="m-pouringparticlerenderers" /><code>{"private ParticleSystemRenderer[] pouringParticleRenderers"}</code> | <span className="api-desc">Pouring particle renderers to recolour.</span> |
| <Link id="m-pouringrendererpropertyblock" /><code>{"private MaterialPropertyBlock pouringRendererPropertyBlock"}</code> | <span className="api-desc">Property block for the tint on pouring renderers.</span> |
| <Link id="m-systemstocolorandroid" /><code>{"private ParticleSystem[] systemsToColorAndroid"}</code> | <span className="api-desc">Not used in this file.</span> |
| <Link id="m-trailmaterialtemplates" /><code>{"private Dictionary<ParticleSystemRenderer, Material> trailMaterialTemplates"}</code> | <span className="api-desc">Original trail material per renderer.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-colortoliquid" /><code>{"void ColorToLiquid("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | <span className="api-desc">Swaps pouring and foam materials for the liquid's versions and tints the pouring renderers.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Stores each renderer's original material and trail material as templates.</span> |
| <Link id="m-overrideliquidcolortotintedonpouringrenderers" /><code>{"private void OverrideLiquidColorToTintedOnPouringRenderers("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid)"}</code> | <span className="api-desc">Sets the liquid's tinted colour on the pouring renderers through a property block.</span> |
| <Link id="m-setparticlerenderersmaterials" /><code>{"private void SetParticleRenderersMaterials("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquid, IEnumerable<ParticleSystemRenderer> renderers, "}<Link to="/mod/game-api/types/alta-stats-effects/materialcreator-t">{"MaterialCreator"}</Link>{"<"}<Link to="/mod/game-api/types/alta-stats-effects/liquidvisualdata">{"LiquidVisualData"}</Link>{"> materialCreator)"}</code> | <span className="api-desc">Gives each renderer, and its trail, the liquid's shared material made from its template.</span> |
| <Link id="m-setupmaterialtemplates" /><code>{"private void SetupMaterialTemplates(IEnumerable<ParticleSystemRenderer> particleRenderers)"}</code> | <span className="api-desc">Records the template materials for a set of renderers.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LiquidParticlesRendererColorer`:

<div className="api-used-in">

[`PouringParticles.particleSystemRendererColorer`](/mod/game-api/types/alta-stats-effects/pouringparticles#m-particlesystemrenderercolorer).

</div>
