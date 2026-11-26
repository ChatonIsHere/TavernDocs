---
title: "ColoredParticleSystem"
description: "Client: recolours a set of particle systems, their renderer materials (and trails) and an optional light together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColoredParticleSystem

A **class** in `Root.Township`, the global namespace.

Client: recolours a set of particle systems, their renderer materials (and trails) and an optional light together. Put on a particle effect prefab; does nothing on the headless server.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColoredParticleSystem()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | <span className="api-desc">Whether `Initialize` has run.</span> |
| <Link id="m-issettingtrailmaterial" /><code>{"private bool isSettingTrailMaterial"}</code> | <span className="api-desc">Whether trail materials are recoloured too. Turned off if the first renderer has no trail material.</span> |
| <Link id="m-isupdatingallmaterials" /><code>{"private bool isUpdatingAllMaterials"}</code> | <span className="api-desc">When true, each renderer gets its own material copy. When false, all share a copy of the first renderer's material.</span> |
| <Link id="m-lighttocolor" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" lightToColor"}</code> | <span className="api-desc">Optional light that takes the same colour.</span> |
| <Link id="m-materialtargets" /><code>{"private ParticleSystemRenderer[] materialTargets"}</code> | <span className="api-desc">Particle renderers whose materials are recoloured.</span> |
| <Link id="m-materialtoupdate" /><code>{"private Material materialToUpdate"}</code> | <span className="api-desc">Shared material copy used when not updating all materials.</span> |
| <Link id="m-systems" /><code>{"private ParticleSystem[] systems"}</code> | <span className="api-desc">Particle systems whose start colour is changed.</span> |
| <Link id="m-trailmaterial" /><code>{"private Material trailMaterial"}</code> | <span className="api-desc">Shared trail material copy used when not updating all materials.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-particlesystems" /><code>{"IEnumerable<ParticleSystem> ParticleSystems { get; }"}</code> | <span className="api-desc">The particle systems this component recolours.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-multiplycolor" /><code>{"void MultiplyColor(Color color)"}</code> | <span className="api-desc">Multiplies each system's start colour, the shared material colour and the light colour by the given colour.</span> |
| <Link id="m-setcolor" /><code>{"void SetColor(Color color, bool isIgnoringAlpha = false)"}</code> | <span className="api-desc">Client: sets the start colour, material and trail colours and the light to the given colour, optionally with alpha forced to 1.</span> |
| <Link id="m-usegradient" /><code>{"void UseGradient(Gradient gradient)"}</code> | <span className="api-desc">Sets every system's start colour to the given gradient.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Calls `Initialize`.</span> |
| <Link id="m-initialize" /><code>{"private void Initialize()"}</code> | <span className="api-desc">Client, once: makes tracked material copies for the renderers so colour changes don't touch shared assets.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the material copies made in `Initialize`.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step: drops null entries from the systems and renderer lists.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ColoredParticleSystem`:

<div className="api-used-in">

[`PotionImpactColorer.particleSystemWithLiquidColor`](/mod/game-api/types/alta-stats-effects/potionimpactcolorer#m-particlesystemwithliquidcolor), [`PotionImpactColorer.particleSystemWithRimColor`](/mod/game-api/types/alta-stats-effects/potionimpactcolorer#m-particlesystemwithrimcolor), [`CosmeticParticleColorer.particleSystemWithColor`](/mod/game-api/types/global-c-d/cosmeticparticlecolorer#m-particlesystemwithcolor), [`PotionVisuals.poppingParticles`](/mod/game-api/types/global-p/potionvisuals#m-poppingparticles).

</div>
