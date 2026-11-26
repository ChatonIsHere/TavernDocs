---
title: "TemperatureVisuals.ParticleSystemHandler"
description: "A group of particle systems on a smelter's temperature visuals that fade in and out with a progress value, turning off two seconds after fading out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureVisuals.ParticleSystemHandler

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A group of particle systems on a smelter's temperature visuals that fade in and out with a progress value, turning off two seconds after fading out.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TemperatureVisuals`](/mod/game-api/types/global-t-x/temperaturevisuals)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ParticleSystemHandler()"}</code> | <span className="api-desc">Creates a `TemperatureVisuals.ParticleSystemHandler` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isplayingparticles" /><code>{"private bool isPlayingParticles"}</code> | <span className="api-desc">Whether the particles are on.</span> |
| <Link id="m-particles" /><code>{"private ParticleSystem[] particles"}</code> | <span className="api-desc">Particle systems in the group.</span> |
| <Link id="m-particlesalpha" /><code>{"private AnimationCurve particlesAlpha"}</code> | <span className="api-desc">Curve from progress to particle alpha.</span> |
| <Link id="m-particlesstoppingcoroutine" /><code>{"private Coroutine particlesStoppingCoroutine"}</code> | <span className="api-desc">Pending stop coroutine, or null.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basebehaviour" /><code>{"MonoBehaviour BaseBehaviour { get; set; }"}</code> | <span className="api-desc">Behaviour used to run the stop coroutine.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(MonoBehaviour baseBehaviour)"}</code> | <span className="api-desc">Stores the behaviour and reads whether the particles are already playing.</span> |
| <Link id="m-postbake" /><code>{"void PostBake()"}</code> | <span className="api-desc">Build step: drops missing particle systems from the array.</span> |
| <Link id="m-update" /><code>{"void Update(float lightProgress)"}</code> | <span className="api-desc">Sets particle alpha from `particlesAlpha` at the given progress, starting or stopping them around zero.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Turns the particle objects on and cancels any pending stop.</span> |
| <Link id="m-stop" /><code>{"private void Stop()"}</code> | <span className="api-desc">Schedules the particle objects to turn off.</span> |
| <Link id="m-stopdelayed" /><code>{"private IEnumerator StopDelayed() (iterator)"}</code> | <span className="api-desc">Coroutine that waits two seconds, then turns the particle objects off.</span> |
| <Link id="m-updatealpha" /><code>{"private void UpdateAlpha(float alpha)"}</code> | <span className="api-desc">Sets the alpha of each system's start colour.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ParticleSystemHandler`:

<div className="api-used-in">

[`TemperatureVisuals.pushParticles`](/mod/game-api/types/global-t-x/temperaturevisuals#m-pushparticles), [`TemperatureVisuals.stableParticles`](/mod/game-api/types/global-t-x/temperaturevisuals#m-stableparticles).

</div>
