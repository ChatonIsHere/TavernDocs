---
title: "PooledFireEffect"
description: "class PooledFireEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledFireEffect

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledFireEffect()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-aditionalparticlesystems" /><code>{"private List<GameObject> aditionalParticleSystems"}</code> |  |
| <Link id="m-baseintensity" /><code>{"private float baseIntensity"}</code> |  |
| <Link id="m-baseshapes" /><code>{"private Dictionary<ParticleSystem, ParticleSystemShapeType> baseShapes"}</code> |  |
| <Link id="m-currentsettings" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/firesettings">{"FireSettings"}</Link>{" currentSettings"}</code> |  |
| <Link id="m-hasmodifiedshapes" /><code>{"private bool hasModifiedShapes"}</code> |  |
| <Link id="m-islit" /><code>{"private bool isLit"}</code> |  |
| <Link id="m-iswarmedup" /><code>{"private bool isWarmedUp"}</code> |  |
| <Link id="m-lightendmultiplier" /><code>{"private AnimationCurve lightEndMultiplier"}</code> |  |
| <Link id="m-lightstartmultiplier" /><code>{"private AnimationCurve lightStartMultiplier"}</code> |  |
| <Link id="m-litcoroutine" /><code>{"private Coroutine litCoroutine"}</code> |  |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> |  |
| <Link id="m-onreleased" /><code>{"private UnityEvent OnReleased"}</code> |  |
| <Link id="m-onrequested" /><code>{"private UnityEvent OnRequested"}</code> |  |
| <Link id="m-particlesparent" /><code>{"private Transform particlesParent"}</code> |  |
| <Link id="m-systemsinitialsystems" /><code>{"private Dictionary<ParticleSystem, Vector2> systemsInitialSystems"}</code> |  |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" target"}</code> |  |
| <Link id="m-unmultipliedintensity" /><code>{"private float unmultipliedIntensity"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"float Duration { get; private set; }"}</code> |  |
| <Link id="m-islit-2" /><code>{"bool IsLit { get; set; }"}</code> |  |
| <Link id="m-iswarmedup-2" /><code>{"bool IsWarmedUp { get; set; }"}</code> |  |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> |  |
| <Link id="m-updatemultiplier" /><code>{"void UpdateMultiplier(float multiplier)"}</code> |  |
| <Link id="m-updateprogress" /><code>{"void UpdateProgress(float progress)"}</code> |  |
| <Link id="m-updatesettings" /><code>{"virtual void UpdateSettings("}<Link to="/game-api/types/alta-stats-effects/heatsourcebase">{"HeatSourceBase"}</Link>{" heatSource)"}</code> |  |
| <Link id="m-applysystemsshape" /><code>{"private void ApplySystemsShape(Transform parent, MeshRenderer renderer)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-delayrelease" /><code>{"private IEnumerator DelayRelease() (iterator)"}</code> |  |
| <Link id="m-fadelight" /><code>{"private IEnumerator FadeLight() (iterator)"}</code> |  |
| <Link id="m-findclosesttime" /><code>{"private float FindClosestTime(AnimationCurve curve, float value, int steps)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-play" /><code>{"private void Play()"}</code> |  |
| <Link id="m-requestedstart" /><code>{"private void RequestedStart("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PooledFireEffect`:

[`Fire.activeFireEffect`](/game-api/types/alta-stats-effects/fire#m-activefireeffect).
