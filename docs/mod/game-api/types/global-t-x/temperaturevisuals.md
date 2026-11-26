---
title: "TemperatureVisuals"
description: "Drives a smelter-style fire's look from its temperature: light faders, coal glow and two particle sets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureVisuals

A **class** in `Root.Township`, the global namespace.

Drives a smelter-style fire's look from its temperature: light faders, coal glow and two particle sets. Client only (skipped on a headless server); `Recycler` calls `UpdateVisuals`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`ParticleSystemHandler`](/mod/game-api/types/global-t-x/temperaturevisuals-particlesystemhandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TemperatureVisuals()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emissioncolor" /><code>{"private static readonly int _EmissionColor"}</code> | <span className="api-desc">Shader property ID for `_EmissionColor`.</span> |
| <Link id="m-coals" /><code>{"private Renderer[] coals"}</code> | <span className="api-desc">Coal renderers that glow with heat.</span> |
| <Link id="m-coalsbrightness" /><code>{"private AnimationCurve coalsBrightness"}</code> | <span className="api-desc">Curve from heat to coal emission brightness.</span> |
| <Link id="m-coalsmaterial" /><code>{"private Material coalsMaterial"}</code> | <span className="api-desc">Shared material copy for all coal renderers.</span> |
| <Link id="m-isplayingparticles" /><code>{"private bool isPlayingParticles"}</code> | <span className="api-desc">Not used; each particle handler tracks its own playing state.</span> |
| <Link id="m-lightfaders" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lightfader">{"LightFader"}</Link>{"[] lightFaders"}</code> | <span className="api-desc">Lights that fade with heat.</span> |
| <Link id="m-maximumlight" /><code>{"private float maximumLight"}</code> | <span className="api-desc">Light multiplier at full heat.</span> |
| <Link id="m-minimumlight" /><code>{"private float minimumLight"}</code> | <span className="api-desc">Light multiplier at the lowest heat, and when cold.</span> |
| <Link id="m-particlesstoppingcoroutine" /><code>{"private Coroutine particlesStoppingCoroutine"}</code> | <span className="api-desc">Not used; each particle handler keeps its own stop coroutine.</span> |
| <Link id="m-pushparticles" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/temperaturevisuals-particlesystemhandler">{"TemperatureVisuals.ParticleSystemHandler"}</Link>{" pushParticles"}</code> | <span className="api-desc">Particles driven by the push value (probably when the bellows are pumped).</span> |
| <Link id="m-stableparticles" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/temperaturevisuals-particlesystemhandler">{"TemperatureVisuals.ParticleSystemHandler"}</Link>{" stableParticles"}</code> | <span className="api-desc">Particles driven by the steady heat value.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatevisuals" /><code>{"void UpdateVisuals(float value, float pushValue)"}</code> | <span className="api-desc">Updates lights, coals and stable particles from the heat value, and the push particles from the push value (both 0 to 1).</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Client: makes one material copy for the coals and puts it on every coal renderer.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the coals material copy.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step: strips missing particle systems and coal renderers from the arrays.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Client: sets up both particle handlers and shows the cold state.</span> |
| <Link id="m-updatecoals" /><code>{"private void UpdateCoals(float lightProgress)"}</code> | <span className="api-desc">Sets the coals' emission colour from the brightness curve at the given heat.</span> |
| <Link id="m-updatelightfader" /><code>{"private void UpdateLightFader(float lightProgress)"}</code> | <span className="api-desc">Turns the light faders on above zero heat and scales them between the minimum and maximum light.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TemperatureVisuals`:

<div className="api-used-in">

[`Recycler.temperatureVisuals`](/mod/game-api/types/alta-crafting/recycler#m-temperaturevisuals).

</div>
