---
title: "PooledFireEffect"
description: "Client: the pooled fire visual for a heat source: particles plus a platform light that fades in when lit and dies down on release."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledFireEffect

A **class** in `Root.Township`, the global namespace.

Client: the pooled fire visual for a heat source: particles plus a platform light that fades in when lit and dies down on release.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledFireEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-aditionalparticlesystems" /><code>{"private List<GameObject> aditionalParticleSystems"}</code> | <span className="api-desc">Extra particle copies made for a `FireDissolve`'s other renderers.</span> |
| <Link id="m-baseintensity" /><code>{"private float baseIntensity"}</code> | <span className="api-desc">The light's intensity from the prefab.</span> |
| <Link id="m-baseshapes" /><code>{"private Dictionary<ParticleSystem, ParticleSystemShapeType> baseShapes"}</code> | <span className="api-desc">Each particle system's original shape type, restored when not on a `FireDissolve`.</span> |
| <Link id="m-currentsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/firesettings">{"FireSettings"}</Link>{" currentSettings"}</code> | <span className="api-desc">The fire settings from the last heat source.</span> |
| <Link id="m-hasmodifiedshapes" /><code>{"private bool hasModifiedShapes"}</code> | <span className="api-desc">True once particle shapes have been changed for a `FireDissolve`.</span> |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> | <span className="api-desc">Backing field for `IsLit`.</span> |
| <Link id="m-iswarmedup" /><code>{"private bool isWarmedUp"}</code> | <span className="api-desc">Backing field for `IsWarmedUp`.</span> |
| <Link id="m-lightendmultiplier" /><code>{"private AnimationCurve lightEndMultiplier"}</code> | <span className="api-desc">Curve for the light fading out.</span> |
| <Link id="m-lightstartmultiplier" /><code>{"private AnimationCurve lightStartMultiplier"}</code> | <span className="api-desc">Curve for the light fading in.</span> |
| <Link id="m-litcoroutine" /><code>{"private Coroutine litCoroutine"}</code> | <span className="api-desc">The running `FadeLight` coroutine.</span> |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | <span className="api-desc">Backing field for `Multiplier`.</span> |
| <Link id="m-onreleased" /><code>{"private UnityEvent OnReleased"}</code> | <span className="api-desc">Unity event run when the effect is released.</span> |
| <Link id="m-onrequested" /><code>{"private UnityEvent OnRequested"}</code> | <span className="api-desc">Unity event run when the effect is taken from the pool.</span> |
| <Link id="m-particlesparent" /><code>{"private Transform particlesParent"}</code> | <span className="api-desc">Parent of the fire's particle systems.</span> |
| <Link id="m-systemsinitialsystems" /><code>{"private Dictionary<ParticleSystem, Vector2> systemsInitialSystems"}</code> | <span className="api-desc">Each particle system's starting emission rate and start size.</span> |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" target"}</code> | <span className="api-desc">The light the effect controls.</span> |
| <Link id="m-unmultipliedintensity" /><code>{"private float unmultipliedIntensity"}</code> | <span className="api-desc">Light intensity before `Multiplier` is applied.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"float Duration { get; private set; }"}</code> | <span className="api-desc">The longest particle start lifetime, used as the fade out time on release.</span> |
| <Link id="m-islit-2" /><code>{"bool IsLit { get; set; }"}</code> | <span className="api-desc">Setting it to true plays the particles and fades the light in. Setting false only stores the value.</span> |
| <Link id="m-iswarmedup-2" /><code>{"bool IsWarmedUp { get; set; }"}</code> | <span className="api-desc">Turns prewarm on or off for all the particle systems.</span> |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; set; }"}</code> | <span className="api-desc">Light intensity multiplier. Setting it updates the light at once.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | <span className="api-desc">Stops emitting, runs `OnReleased` and starts `DelayRelease` instead of releasing at once.</span> |
| <Link id="m-updatemultiplier" /><code>{"void UpdateMultiplier(float multiplier)"}</code> | <span className="api-desc">Scales every particle system's emission rate and start size from their starting values.</span> |
| <Link id="m-updateprogress" /><code>{"void UpdateProgress(float progress)"}</code> | <span className="api-desc">Changes light brightness and particle scale from the fire settings' curves at a burn progress.</span> |
| <Link id="m-updatesettings" /><code>{"virtual void UpdateSettings("}<Link to="/mod/game-api/types/alta-stats-effects/heatsourcebase">{"HeatSourceBase"}</Link>{" heatSource)"}</code> | <span className="api-desc">Applies a heat source's fire settings to the light and particles. For a `FireDissolve`, copies the particles onto each of its renderers.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-applysystemsshape" /><code>{"private void ApplySystemsShape(Transform parent, MeshRenderer renderer)"}</code> | <span className="api-desc">Makes every particle system under a transform emit from a mesh renderer's shape.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Records each particle system's emission rate, size, shape and longest lifetime, and turns the light off.</span> |
| <Link id="m-delayrelease" /><code>{"private IEnumerator DelayRelease() (iterator)"}</code> | <span className="api-desc">Coroutine that fades the light out, waits for particles to finish, then returns the effect to the pool.</span> |
| <Link id="m-fadelight" /><code>{"private IEnumerator FadeLight() (iterator)"}</code> | <span className="api-desc">Coroutine that runs the light along the start curve (or end curve when unlit) from its current level.</span> |
| <Link id="m-findclosesttime" /><code>{"private float FindClosestTime(AnimationCurve curve, float value, int steps)"}</code> | <span className="api-desc">Finds the time on a curve whose value is closest to a target, in a set number of steps.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-play" /><code>{"private void Play()"}</code> | <span className="api-desc">Plays every particle system.</span> |
| <Link id="m-requestedstart" /><code>{"private void RequestedStart("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Turns the component on and runs `OnRequested` when taken from the pool.</span> |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | <span className="api-desc">Sets the multiplier to 1 and turns the light off.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PooledFireEffect`:

<div className="api-used-in">

[`Fire.activeFireEffect`](/mod/game-api/types/alta-stats-effects/fire#m-activefireeffect).

</div>
