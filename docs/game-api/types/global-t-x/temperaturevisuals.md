---
title: "TemperatureVisuals"
description: "class TemperatureVisuals in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureVisuals

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`ParticleSystemHandler`](/game-api/types/global-t-x/temperaturevisuals-particlesystemhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TemperatureVisuals()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-emissioncolor" /><code>{"private static readonly int _EmissionColor"}</code> |  |
| <Link id="m-coals" /><code>{"private Renderer[] coals"}</code> |  |
| <Link id="m-coalsbrightness" /><code>{"private AnimationCurve coalsBrightness"}</code> |  |
| <Link id="m-coalsmaterial" /><code>{"private Material coalsMaterial"}</code> |  |
| <Link id="m-isplayingparticles" /><code>{"private bool isPlayingParticles"}</code> |  |
| <Link id="m-lightfaders" /><code>{"private "}<Link to="/game-api/types/global-i-l/lightfader">{"LightFader"}</Link>{"[] lightFaders"}</code> |  |
| <Link id="m-maximumlight" /><code>{"private float maximumLight"}</code> |  |
| <Link id="m-minimumlight" /><code>{"private float minimumLight"}</code> |  |
| <Link id="m-particlesstoppingcoroutine" /><code>{"private Coroutine particlesStoppingCoroutine"}</code> |  |
| <Link id="m-pushparticles" /><code>{"private "}<Link to="/game-api/types/global-t-x/temperaturevisuals-particlesystemhandler">{"TemperatureVisuals.ParticleSystemHandler"}</Link>{" pushParticles"}</code> |  |
| <Link id="m-stableparticles" /><code>{"private "}<Link to="/game-api/types/global-t-x/temperaturevisuals-particlesystemhandler">{"TemperatureVisuals.ParticleSystemHandler"}</Link>{" stableParticles"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevisuals" /><code>{"void UpdateVisuals(float value, float pushValue)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-updatecoals" /><code>{"private void UpdateCoals(float lightProgress)"}</code> |  |
| <Link id="m-updatelightfader" /><code>{"private void UpdateLightFader(float lightProgress)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TemperatureVisuals`:

[`Recycler.temperatureVisuals`](/game-api/types/alta-crafting/recycler#m-temperaturevisuals).
