---
title: "ColoredParticleSystem"
description: "Client: recolours a set of particle systems, their renderer materials (and trails) and an optional light together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColoredParticleSystem

A **class** in `Root.Township`, no namespace.

Client: recolours a set of particle systems, their renderer materials (and trails) and an optional light together. Put on a particle effect prefab; does nothing on the headless server.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColoredParticleSystem()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> | Whether `Initialize` has run. |
| <Link id="m-issettingtrailmaterial" /><code>{"private bool isSettingTrailMaterial"}</code> | Whether trail materials are recoloured too. Turned off if the first renderer has no trail material. |
| <Link id="m-isupdatingallmaterials" /><code>{"private bool isUpdatingAllMaterials"}</code> | When true, each renderer gets its own material copy. When false, all share a copy of the first renderer's material. |
| <Link id="m-lighttocolor" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" lightToColor"}</code> | Optional light that takes the same colour. |
| <Link id="m-materialtargets" /><code>{"private ParticleSystemRenderer[] materialTargets"}</code> | Particle renderers whose materials are recoloured. |
| <Link id="m-materialtoupdate" /><code>{"private Material materialToUpdate"}</code> | Shared material copy used when not updating all materials. |
| <Link id="m-systems" /><code>{"private ParticleSystem[] systems"}</code> | Particle systems whose start colour is changed. |
| <Link id="m-trailmaterial" /><code>{"private Material trailMaterial"}</code> | Shared trail material copy used when not updating all materials. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-particlesystems" /><code>{"IEnumerable<ParticleSystem> ParticleSystems { get; }"}</code> | The particle systems this component recolours. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-multiplycolor" /><code>{"void MultiplyColor(Color color)"}</code> | Multiplies each system's start colour, the shared material colour and the light colour by the given colour. |
| <Link id="m-setcolor" /><code>{"void SetColor(Color color, bool isIgnoringAlpha = false)"}</code> | Client: sets the start colour, material and trail colours and the light to the given colour, optionally with alpha forced to 1. |
| <Link id="m-usegradient" /><code>{"void UseGradient(Gradient gradient)"}</code> | Sets every system's start colour to the given gradient. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Calls `Initialize`. |
| <Link id="m-initialize" /><code>{"private void Initialize()"}</code> | Client, once: makes tracked material copies for the renderers so colour changes don't touch shared assets. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up the material copies made in `Initialize`. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: drops null entries from the systems and renderer lists. |

</details>

## Used in

Members of other types that take, return or hold a `ColoredParticleSystem`:

[`PotionImpactColorer.particleSystemWithLiquidColor`](/game-api/types/alta-stats-effects/potionimpactcolorer#m-particlesystemwithliquidcolor), [`PotionImpactColorer.particleSystemWithRimColor`](/game-api/types/alta-stats-effects/potionimpactcolorer#m-particlesystemwithrimcolor), [`CosmeticParticleColorer.particleSystemWithColor`](/game-api/types/global-c-d/cosmeticparticlecolorer#m-particlesystemwithcolor), [`PotionVisuals.poppingParticles`](/game-api/types/global-p/potionvisuals#m-poppingparticles).
