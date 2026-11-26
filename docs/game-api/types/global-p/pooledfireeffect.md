---
title: "PooledFireEffect"
description: "Client: the pooled fire visual for a heat source: particles plus a platform light that fades in when lit and dies down on release."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledFireEffect

A **class** in `Root.Township`, no namespace.

Client: the pooled fire visual for a heat source: particles plus a platform light that fades in when lit and dies down on release.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PooledFireEffect()"}</code> |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-aditionalparticlesystems" /><code>{"private List<GameObject> aditionalParticleSystems"}</code> | Extra particle copies made for a `FireDissolve`'s other renderers. |
| <Link id="m-baseintensity" /><code>{"private float baseIntensity"}</code> | The light's intensity from the prefab. |
| <Link id="m-baseshapes" /><code>{"private Dictionary<ParticleSystem, ParticleSystemShapeType> baseShapes"}</code> | Each particle system's original shape type, restored when not on a `FireDissolve`. |
| <Link id="m-currentsettings" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/firesettings">{"FireSettings"}</Link>{" currentSettings"}</code> | The fire settings from the last heat source. |
| <Link id="m-hasmodifiedshapes" /><code>{"private bool hasModifiedShapes"}</code> | True once particle shapes have been changed for a `FireDissolve`. |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> | Backing field for `IsLit`. |
| <Link id="m-iswarmedup" /><code>{"private bool isWarmedUp"}</code> | Backing field for `IsWarmedUp`. |
| <Link id="m-lightendmultiplier" /><code>{"private AnimationCurve lightEndMultiplier"}</code> | Curve for the light fading out. |
| <Link id="m-lightstartmultiplier" /><code>{"private AnimationCurve lightStartMultiplier"}</code> | Curve for the light fading in. |
| <Link id="m-litcoroutine" /><code>{"private Coroutine litCoroutine"}</code> | The running `FadeLight` coroutine. |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Backing field for `Multiplier`. |
| <Link id="m-onreleased" /><code>{"private UnityEvent OnReleased"}</code> | Unity event run when the effect is released. |
| <Link id="m-onrequested" /><code>{"private UnityEvent OnRequested"}</code> | Unity event run when the effect is taken from the pool. |
| <Link id="m-particlesparent" /><code>{"private Transform particlesParent"}</code> | Parent of the fire's particle systems. |
| <Link id="m-systemsinitialsystems" /><code>{"private Dictionary<ParticleSystem, Vector2> systemsInitialSystems"}</code> | Each particle system's starting emission rate and start size. |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" target"}</code> | The light the effect controls. |
| <Link id="m-unmultipliedintensity" /><code>{"private float unmultipliedIntensity"}</code> | Light intensity before `Multiplier` is applied. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"float Duration { get; private set; }"}</code> | The longest particle start lifetime, used as the fade out time on release. |
| <Link id="m-islit-2" /><code>{"bool IsLit { get; set; }"}</code> | Setting it to true plays the particles and fades the light in. Setting false only stores the value. |
| <Link id="m-iswarmedup-2" /><code>{"bool IsWarmedUp { get; set; }"}</code> | Turns prewarm on or off for all the particle systems. |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; set; }"}</code> | Light intensity multiplier. Setting it updates the light at once. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Stops emitting, runs `OnReleased` and starts `DelayRelease` instead of releasing at once. |
| <Link id="m-updatemultiplier" /><code>{"void UpdateMultiplier(float multiplier)"}</code> | Scales every particle system's emission rate and start size from their starting values. |
| <Link id="m-updateprogress" /><code>{"void UpdateProgress(float progress)"}</code> | Changes light brightness and particle scale from the fire settings' curves at a burn progress. |
| <Link id="m-updatesettings" /><code>{"virtual void UpdateSettings("}<Link to="/game-api/types/alta-stats-effects/heatsourcebase">{"HeatSourceBase"}</Link>{" heatSource)"}</code> | Applies a heat source's fire settings to the light and particles. For a `FireDissolve`, copies the particles onto each of its renderers. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applysystemsshape" /><code>{"private void ApplySystemsShape(Transform parent, MeshRenderer renderer)"}</code> | Makes every particle system under a transform emit from a mesh renderer's shape. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Records each particle system's emission rate, size, shape and longest lifetime, and turns the light off. |
| <Link id="m-delayrelease" /><code>{"private IEnumerator DelayRelease() (iterator)"}</code> | Coroutine that fades the light out, waits for particles to finish, then returns the effect to the pool. |
| <Link id="m-fadelight" /><code>{"private IEnumerator FadeLight() (iterator)"}</code> | Coroutine that runs the light along the start curve (or end curve when unlit) from its current level. |
| <Link id="m-findclosesttime" /><code>{"private float FindClosestTime(AnimationCurve curve, float value, int steps)"}</code> | Finds the time on a curve whose value is closest to a target, in a set number of steps. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Empty. |
| <Link id="m-play" /><code>{"private void Play()"}</code> | Plays every particle system. |
| <Link id="m-requestedstart" /><code>{"private void RequestedStart("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Turns the component on and runs `OnRequested` when taken from the pool. |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | Sets the multiplier to 1 and turns the light off. |

</details>

## Used in

Members of other types that take, return or hold a `PooledFireEffect`:

[`Fire.activeFireEffect`](/game-api/types/alta-stats-effects/fire#m-activefireeffect).
