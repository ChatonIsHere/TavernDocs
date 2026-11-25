---
title: "TemperatureVisuals.ParticleSystemHandler"
description: "class TemperatureVisuals.ParticleSystemHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureVisuals.ParticleSystemHandler

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TemperatureVisuals`](/game-api/types/global-t-x/temperaturevisuals)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ParticleSystemHandler()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isplayingparticles" /><code>{"private bool isPlayingParticles"}</code> |  |
| <Link id="m-particles" /><code>{"private ParticleSystem[] particles"}</code> |  |
| <Link id="m-particlesalpha" /><code>{"private AnimationCurve particlesAlpha"}</code> |  |
| <Link id="m-particlesstoppingcoroutine" /><code>{"private Coroutine particlesStoppingCoroutine"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basebehaviour" /><code>{"MonoBehaviour BaseBehaviour { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(MonoBehaviour baseBehaviour)"}</code> |  |
| <Link id="m-postbake" /><code>{"void PostBake()"}</code> |  |
| <Link id="m-update" /><code>{"void Update(float lightProgress)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-stop" /><code>{"private void Stop()"}</code> |  |
| <Link id="m-stopdelayed" /><code>{"private IEnumerator StopDelayed() (iterator)"}</code> |  |
| <Link id="m-updatealpha" /><code>{"private void UpdateAlpha(float alpha)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ParticleSystemHandler`:

[`TemperatureVisuals.pushParticles`](/game-api/types/global-t-x/temperaturevisuals#m-pushparticles), [`TemperatureVisuals.stableParticles`](/game-api/types/global-t-x/temperaturevisuals#m-stableparticles).
