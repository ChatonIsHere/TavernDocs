---
title: "EmberComposerFireEffect"
description: "Pooled fire effect used by the EmberComposer skill: particle systems plus a light that fades in when lit and fades out on release."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmberComposerFireEffect

A **class** in `Root.Township`, the global namespace.

Pooled fire effect used by the `EmberComposer` skill: particle systems plus a light that fades in when lit and fades out on release.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmberComposerFireEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseintensity" /><code>{"private float baseIntensity"}</code> | <span className="api-desc">Light intensity from the prefab.</span> |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> | <span className="api-desc">Backing field for `IsLit`.</span> |
| <Link id="m-lightendmultiplier" /><code>{"private AnimationCurve lightEndMultiplier"}</code> | <span className="api-desc">Light curve used when not lit.</span> |
| <Link id="m-lightstartmultiplier" /><code>{"private AnimationCurve lightStartMultiplier"}</code> | <span className="api-desc">Light curve used when lit.</span> |
| <Link id="m-litcoroutine" /><code>{"private Coroutine litCoroutine"}</code> | <span className="api-desc">The running light fade.</span> |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | <span className="api-desc">Backing field for `Multiplier`.</span> |
| <Link id="m-systems" /><code>{"private ParticleSystem[] systems"}</code> | <span className="api-desc">Child particle systems.</span> |
| <Link id="m-systemsinitialsystems" /><code>{"private Dictionary<ParticleSystem, float> systemsInitialSystems"}</code> | <span className="api-desc">Each system's original start speed, used by `SetSize`.</span> |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" target"}</code> | <span className="api-desc">Light whose intensity is driven.</span> |
| <Link id="m-unmultipliedintensity" /><code>{"private float unmultipliedIntensity"}</code> | <span className="api-desc">Light intensity from the curve before `Multiplier`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"float Duration { get; private set; }"}</code> | <span className="api-desc">Longest particle start lifetime of the systems, worked out in `Awake`.</span> |
| <Link id="m-islit-2" /><code>{"bool IsLit { get; set; }"}</code> | <span className="api-desc">Setting it true plays the particles and restarts the light fade.</span> |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; set; }"}</code> | <span className="api-desc">Extra scale on the light intensity; setting it applies at once.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Unparents the effect, stops emitting, stops the light fade and starts the delayed release.</span> |
| <Link id="m-setsize" /><code>{"void SetSize(float size)"}</code> | <span className="api-desc">Scales each system's start speed by `size` and lights the effect.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Records the light intensity and each system's start speed, and sets `Duration` to the longest particle lifetime.</span> |
| <Link id="m-delayrelease" /><code>{"private IEnumerator DelayRelease() (iterator)"}</code> | <span className="api-desc">Fades the light multiplier to zero over `Duration`, waits `Duration` more for particles to die, then returns to the pool.</span> |
| <Link id="m-fadelight" /><code>{"private IEnumerator FadeLight() (iterator)"}</code> | <span className="api-desc">Coroutine that runs the start or end light curve from the point matching the current intensity.</span> |
| <Link id="m-findclosesttime" /><code>{"private float FindClosestTime(AnimationCurve curve, float value, int steps)"}</code> | <span className="api-desc">Samples a curve in steps and returns the time whose value is closest to the given one.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-play" /><code>{"private void Play()"}</code> | <span className="api-desc">Plays every particle system, without children.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step that removes null entries from `systems`.</span> |
| <Link id="m-requestedstart" /><code>{"private void RequestedStart("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Enables the component when taken from the pool.</span> |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | <span className="api-desc">Sets the multiplier to 1 and turns the light off.</span> |

</details>
