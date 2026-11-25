---
title: "EmberComposerFireEffect"
description: "class EmberComposerFireEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmberComposerFireEffect

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmberComposerFireEffect()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-baseintensity" /><code>{"private float baseIntensity"}</code> |  |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> |  |
| <Link id="m-lightendmultiplier" /><code>{"private AnimationCurve lightEndMultiplier"}</code> |  |
| <Link id="m-lightstartmultiplier" /><code>{"private AnimationCurve lightStartMultiplier"}</code> |  |
| <Link id="m-litcoroutine" /><code>{"private Coroutine litCoroutine"}</code> |  |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> |  |
| <Link id="m-systems" /><code>{"private ParticleSystem[] systems"}</code> |  |
| <Link id="m-systemsinitialsystems" /><code>{"private Dictionary<ParticleSystem, float> systemsInitialSystems"}</code> |  |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" target"}</code> |  |
| <Link id="m-unmultipliedintensity" /><code>{"private float unmultipliedIntensity"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"float Duration { get; private set; }"}</code> |  |
| <Link id="m-islit-2" /><code>{"bool IsLit { get; set; }"}</code> |  |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> |  |
| <Link id="m-setsize" /><code>{"void SetSize(float size)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-delayrelease" /><code>{"private IEnumerator DelayRelease() (iterator)"}</code> |  |
| <Link id="m-fadelight" /><code>{"private IEnumerator FadeLight() (iterator)"}</code> |  |
| <Link id="m-findclosesttime" /><code>{"private float FindClosestTime(AnimationCurve curve, float value, int steps)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-play" /><code>{"private void Play()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-requestedstart" /><code>{"private void RequestedStart("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> |  |
