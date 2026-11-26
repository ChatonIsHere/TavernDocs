---
title: "FireSettings"
description: "An asset describing how a fire looks: light intensity, range and shadows, and how light and particles change as the fire burns."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireSettings

A **class** in `Root.Township`, `Alta.Heat`.

An asset describing how a fire looks: light intensity, range and shadows, and how light and particles change as the fire burns. A heat source holds one and `PooledFireEffect` applies it.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`FireSettings.Create`](/mod/game-api/types/alta-stats-effects/firesettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-stats-effects/firesettings-create)
- **Documented in** [Heat](/mod/game-api/game-systems/heat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FireSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialparticlesscale" /><code>{"private float initialParticlesScale"}</code> | <span className="api-desc">Scale of the fire particles when the effect starts.</span> |
| <Link id="m-intensity" /><code>{"private float intensity"}</code> | <span className="api-desc">Fire light intensity.</span> |
| <Link id="m-islightbrightnessmodified" /><code>{"private bool isLightBrightnessModified"}</code> | <span className="api-desc">Whether `PooledFireEffect` scales light brightness by fire progress.</span> |
| <Link id="m-isparticlesscalemodified" /><code>{"private bool isParticlesScaleModified"}</code> | <span className="api-desc">Whether `PooledFireEffect` scales the particles by fire progress.</span> |
| <Link id="m-particlesscale" /><code>{"private AnimationCurve particlesScale"}</code> | <span className="api-desc">Particle scale by fire progress (0 to 1).</span> |
| <Link id="m-particlesystemparametersoverlifetime" /><code>{"private AnimationCurve particleSystemParametersOverLifetime"}</code> | <span className="api-desc">Particle system multiplier by fire progress (0 to 1), used when particle scaling is on.</span> |
| <Link id="m-progressbrightnessmultiplier" /><code>{"private AnimationCurve progressBrightnessMultiplier"}</code> | <span className="api-desc">Light brightness multiplier by fire progress (0 to 1). Defaults to fading from 1 to 0.</span> |
| <Link id="m-range" /><code>{"private float range"}</code> | <span className="api-desc">Fire light range.</span> |
| <Link id="m-shadows" /><code>{"private LightShadows shadows"}</code> | <span className="api-desc">Shadow mode for the fire light.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-initialparticlesscale-2" /><code>{"float InitialParticlesScale { get; }"}</code> | <span className="api-desc">Particle scale when the fire effect starts.</span> |
| <Link id="m-intensity-2" /><code>{"float Intensity { get; }"}</code> | <span className="api-desc">Light intensity of the fire.</span> |
| <Link id="m-islightbrightnessmodified-2" /><code>{"bool IsLightBrightnessModified { get; }"}</code> | <span className="api-desc">Whether light brightness follows `ProgressBrightnessMultiplier` as the fire burns.</span> |
| <Link id="m-isparticlesscalemodified-2" /><code>{"bool IsParticlesScaleModified { get; }"}</code> | <span className="api-desc">Whether particle scale and parameters follow their curves as the fire burns.</span> |
| <Link id="m-particlesscale-2" /><code>{"AnimationCurve ParticlesScale { get; }"}</code> | <span className="api-desc">Curve over burn progress for particle scale.</span> |
| <Link id="m-particlesystemparametersoverlifetime-2" /><code>{"AnimationCurve ParticleSystemParametersOverLifetime { get; }"}</code> | <span className="api-desc">Curve over burn progress for the particle system multiplier.</span> |
| <Link id="m-progressbrightnessmultiplier-2" /><code>{"AnimationCurve ProgressBrightnessMultiplier { get; }"}</code> | <span className="api-desc">Curve over burn progress for light brightness.</span> |
| <Link id="m-range-2" /><code>{"float Range { get; }"}</code> | <span className="api-desc">Light range of the fire.</span> |
| <Link id="m-shadows-2" /><code>{"LightShadows Shadows { get; }"}</code> | <span className="api-desc">Shadow type of the fire's light.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-comparecurve" /><code>{"bool CompareCurve(AnimationCurve curveA, AnimationCurve curveB)"}</code> | <span className="api-desc">True if two curves have the same number of keys at roughly the same times and values.</span> |
| <Link id="m-setup" /><code>{"void Setup(float intensity, float range, LightShadows shadows, float initialParticleScale, bool isLightBrightnessModified, AnimationCurve progressBrightnessMultiplier, bool isParticlesScaleModified, AnimationCurve particlesScale, AnimationCurve particleSystemParametersOverLifetime)"}</code> | <span className="api-desc">Sets every field at once.</span> |

## Used in

Members of other types that take, return or hold a `FireSettings`:

<div className="api-used-in">

[`HeatSourceBase.settings`](/mod/game-api/types/alta-stats-effects/heatsourcebase#m-settings), [`HeatSourceBase.Settings`](/mod/game-api/types/alta-stats-effects/heatsourcebase#m-settings-2), [`PooledFireEffect.currentSettings`](/mod/game-api/types/global-p/pooledfireeffect#m-currentsettings).

</div>
