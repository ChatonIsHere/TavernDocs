---
title: "TemperatureVisuals.ParticleSystemHandler"
description: "A group of particle systems on a smelter's temperature visuals that fade in and out with a progress value, turning off two seconds after fading out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureVisuals.ParticleSystemHandler

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A group of particle systems on a smelter's temperature visuals that fade in and out with a progress value, turning off two seconds after fading out.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TemperatureVisuals`](/game-api/types/global-t-x/temperaturevisuals)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ParticleSystemHandler()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isplayingparticles" /><code>{"private bool isPlayingParticles"}</code> | Whether the particles are on. |
| <Link id="m-particles" /><code>{"private ParticleSystem[] particles"}</code> | Particle systems in the group. |
| <Link id="m-particlesalpha" /><code>{"private AnimationCurve particlesAlpha"}</code> | Curve from progress to particle alpha. |
| <Link id="m-particlesstoppingcoroutine" /><code>{"private Coroutine particlesStoppingCoroutine"}</code> | Pending stop coroutine, or null. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basebehaviour" /><code>{"MonoBehaviour BaseBehaviour { get; set; }"}</code> | Behaviour used to run the stop coroutine. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(MonoBehaviour baseBehaviour)"}</code> | Stores the behaviour and reads whether the particles are already playing. |
| <Link id="m-postbake" /><code>{"void PostBake()"}</code> | Build step: drops missing particle systems from the array. |
| <Link id="m-update" /><code>{"void Update(float lightProgress)"}</code> | Sets particle alpha from `particlesAlpha` at the given progress, starting or stopping them around zero. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Turns the particle objects on and cancels any pending stop. |
| <Link id="m-stop" /><code>{"private void Stop()"}</code> | Schedules the particle objects to turn off. |
| <Link id="m-stopdelayed" /><code>{"private IEnumerator StopDelayed() (iterator)"}</code> | Coroutine that waits two seconds, then turns the particle objects off. |
| <Link id="m-updatealpha" /><code>{"private void UpdateAlpha(float alpha)"}</code> | Sets the alpha of each system's start colour. |

</details>

## Used in

Members of other types that take, return or hold a `ParticleSystemHandler`:

[`TemperatureVisuals.pushParticles`](/game-api/types/global-t-x/temperaturevisuals#m-pushparticles), [`TemperatureVisuals.stableParticles`](/game-api/types/global-t-x/temperaturevisuals#m-stableparticles).
