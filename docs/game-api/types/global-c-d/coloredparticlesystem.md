---
title: "ColoredParticleSystem"
description: "class ColoredParticleSystem in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColoredParticleSystem

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColoredParticleSystem()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isinitialized" /><code>{"private bool isInitialized"}</code> |  |
| <Link id="m-issettingtrailmaterial" /><code>{"private bool isSettingTrailMaterial"}</code> |  |
| <Link id="m-isupdatingallmaterials" /><code>{"private bool isUpdatingAllMaterials"}</code> |  |
| <Link id="m-lighttocolor" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" lightToColor"}</code> |  |
| <Link id="m-materialtargets" /><code>{"private ParticleSystemRenderer[] materialTargets"}</code> |  |
| <Link id="m-materialtoupdate" /><code>{"private Material materialToUpdate"}</code> |  |
| <Link id="m-systems" /><code>{"private ParticleSystem[] systems"}</code> |  |
| <Link id="m-trailmaterial" /><code>{"private Material trailMaterial"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-particlesystems" /><code>{"IEnumerable<ParticleSystem> ParticleSystems { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-multiplycolor" /><code>{"void MultiplyColor(Color color)"}</code> |  |
| <Link id="m-setcolor" /><code>{"void SetColor(Color color, bool isIgnoringAlpha = false)"}</code> |  |
| <Link id="m-usegradient" /><code>{"void UseGradient(Gradient gradient)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-initialize" /><code>{"private void Initialize()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ColoredParticleSystem`:

[`PotionImpactColorer.particleSystemWithLiquidColor`](/game-api/types/alta-stats-effects/potionimpactcolorer#m-particlesystemwithliquidcolor), [`PotionImpactColorer.particleSystemWithRimColor`](/game-api/types/alta-stats-effects/potionimpactcolorer#m-particlesystemwithrimcolor), [`CosmeticParticleColorer.particleSystemWithColor`](/game-api/types/global-c-d/cosmeticparticlecolorer#m-particlesystemwithcolor), [`PotionVisuals.poppingParticles`](/game-api/types/global-p/potionvisuals#m-poppingparticles).
