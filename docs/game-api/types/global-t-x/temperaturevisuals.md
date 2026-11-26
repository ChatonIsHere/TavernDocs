---
title: "TemperatureVisuals"
description: "Drives a smelter-style fire's look from its temperature: light faders, coal glow and two particle sets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureVisuals

A **class** in `Root.Township`, no namespace.

Drives a smelter-style fire's look from its temperature: light faders, coal glow and two particle sets. Client only (skipped on a headless server); `Recycler` calls `UpdateVisuals`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`ParticleSystemHandler`](/game-api/types/global-t-x/temperaturevisuals-particlesystemhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TemperatureVisuals()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emissioncolor" /><code>{"private static readonly int _EmissionColor"}</code> | Shader property ID for `_EmissionColor`. |
| <Link id="m-coals" /><code>{"private Renderer[] coals"}</code> | Coal renderers that glow with heat. |
| <Link id="m-coalsbrightness" /><code>{"private AnimationCurve coalsBrightness"}</code> | Curve from heat to coal emission brightness. |
| <Link id="m-coalsmaterial" /><code>{"private Material coalsMaterial"}</code> | Shared material copy for all coal renderers. |
| <Link id="m-isplayingparticles" /><code>{"private bool isPlayingParticles"}</code> | Not used; each particle handler tracks its own playing state. |
| <Link id="m-lightfaders" /><code>{"private "}<Link to="/game-api/types/global-i-l/lightfader">{"LightFader"}</Link>{"[] lightFaders"}</code> | Lights that fade with heat. |
| <Link id="m-maximumlight" /><code>{"private float maximumLight"}</code> | Light multiplier at full heat. |
| <Link id="m-minimumlight" /><code>{"private float minimumLight"}</code> | Light multiplier at the lowest heat, and when cold. |
| <Link id="m-particlesstoppingcoroutine" /><code>{"private Coroutine particlesStoppingCoroutine"}</code> | Not used; each particle handler keeps its own stop coroutine. |
| <Link id="m-pushparticles" /><code>{"private "}<Link to="/game-api/types/global-t-x/temperaturevisuals-particlesystemhandler">{"TemperatureVisuals.ParticleSystemHandler"}</Link>{" pushParticles"}</code> | Particles driven by the push value (probably when the bellows are pumped). |
| <Link id="m-stableparticles" /><code>{"private "}<Link to="/game-api/types/global-t-x/temperaturevisuals-particlesystemhandler">{"TemperatureVisuals.ParticleSystemHandler"}</Link>{" stableParticles"}</code> | Particles driven by the steady heat value. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevisuals" /><code>{"void UpdateVisuals(float value, float pushValue)"}</code> | Updates lights, coals and stable particles from the heat value, and the push particles from the push value (both 0 to 1). |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Client: makes one material copy for the coals and puts it on every coal renderer. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up the coals material copy. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: strips missing particle systems and coal renderers from the arrays. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Client: sets up both particle handlers and shows the cold state. |
| <Link id="m-updatecoals" /><code>{"private void UpdateCoals(float lightProgress)"}</code> | Sets the coals' emission colour from the brightness curve at the given heat. |
| <Link id="m-updatelightfader" /><code>{"private void UpdateLightFader(float lightProgress)"}</code> | Turns the light faders on above zero heat and scales them between the minimum and maximum light. |

</details>

## Used in

Members of other types that take, return or hold a `TemperatureVisuals`:

[`Recycler.temperatureVisuals`](/game-api/types/alta-crafting/recycler#m-temperaturevisuals).
