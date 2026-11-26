---
title: "EmberComposerFireEffect"
description: "Pooled fire effect used by the EmberComposer skill: particle systems plus a light that fades in when lit and fades out on release."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmberComposerFireEffect

A **class** in `Root.Township`, no namespace.

Pooled fire effect used by the `EmberComposer` skill: particle systems plus a light that fades in when lit and fades out on release.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmberComposerFireEffect()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseintensity" /><code>{"private float baseIntensity"}</code> | Light intensity from the prefab. |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> | Backing field for `IsLit`. |
| <Link id="m-lightendmultiplier" /><code>{"private AnimationCurve lightEndMultiplier"}</code> | Light curve used when not lit. |
| <Link id="m-lightstartmultiplier" /><code>{"private AnimationCurve lightStartMultiplier"}</code> | Light curve used when lit. |
| <Link id="m-litcoroutine" /><code>{"private Coroutine litCoroutine"}</code> | The running light fade. |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Backing field for `Multiplier`. |
| <Link id="m-systems" /><code>{"private ParticleSystem[] systems"}</code> | Child particle systems. |
| <Link id="m-systemsinitialsystems" /><code>{"private Dictionary<ParticleSystem, float> systemsInitialSystems"}</code> | Each system's original start speed, used by `SetSize`. |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" target"}</code> | Light whose intensity is driven. |
| <Link id="m-unmultipliedintensity" /><code>{"private float unmultipliedIntensity"}</code> | Light intensity from the curve before `Multiplier`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"float Duration { get; private set; }"}</code> | Longest particle start lifetime of the systems, worked out in `Awake`. |
| <Link id="m-islit-2" /><code>{"bool IsLit { get; set; }"}</code> | Setting it true plays the particles and restarts the light fade. |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; set; }"}</code> | Extra scale on the light intensity; setting it applies at once. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Unparents the effect, stops emitting, stops the light fade and starts the delayed release. |
| <Link id="m-setsize" /><code>{"void SetSize(float size)"}</code> | Scales each system's start speed by `size` and lights the effect. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Records the light intensity and each system's start speed, and sets `Duration` to the longest particle lifetime. |
| <Link id="m-delayrelease" /><code>{"private IEnumerator DelayRelease() (iterator)"}</code> | Fades the light multiplier to zero over `Duration`, waits `Duration` more for particles to die, then returns to the pool. |
| <Link id="m-fadelight" /><code>{"private IEnumerator FadeLight() (iterator)"}</code> | Coroutine that runs the start or end light curve from the point matching the current intensity. |
| <Link id="m-findclosesttime" /><code>{"private float FindClosestTime(AnimationCurve curve, float value, int steps)"}</code> | Samples a curve in steps and returns the time whose value is closest to the given one. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Empty. |
| <Link id="m-play" /><code>{"private void Play()"}</code> | Plays every particle system, without children. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step that removes null entries from `systems`. |
| <Link id="m-requestedstart" /><code>{"private void RequestedStart("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Enables the component when taken from the pool. |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | Sets the multiplier to 1 and turns the light off. |

</details>
