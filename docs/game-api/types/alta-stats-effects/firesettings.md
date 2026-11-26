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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`FireSettings.Create`](/game-api/types/alta-stats-effects/firesettings-create)
- **Nested types** [`Create`](/game-api/types/alta-stats-effects/firesettings-create)
- **Documented in** [Heat](/game-api/game-systems/heat)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FireSettings()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialparticlesscale" /><code>{"private float initialParticlesScale"}</code> | Scale of the fire particles when the effect starts. |
| <Link id="m-intensity" /><code>{"private float intensity"}</code> | Fire light intensity. |
| <Link id="m-islightbrightnessmodified" /><code>{"private bool isLightBrightnessModified"}</code> | Whether `PooledFireEffect` scales light brightness by fire progress. |
| <Link id="m-isparticlesscalemodified" /><code>{"private bool isParticlesScaleModified"}</code> | Whether `PooledFireEffect` scales the particles by fire progress. |
| <Link id="m-particlesscale" /><code>{"private AnimationCurve particlesScale"}</code> | Particle scale by fire progress (0 to 1). |
| <Link id="m-particlesystemparametersoverlifetime" /><code>{"private AnimationCurve particleSystemParametersOverLifetime"}</code> | Particle system multiplier by fire progress (0 to 1), used when particle scaling is on. |
| <Link id="m-progressbrightnessmultiplier" /><code>{"private AnimationCurve progressBrightnessMultiplier"}</code> | Light brightness multiplier by fire progress (0 to 1). Defaults to fading from 1 to 0. |
| <Link id="m-range" /><code>{"private float range"}</code> | Fire light range. |
| <Link id="m-shadows" /><code>{"private LightShadows shadows"}</code> | Shadow mode for the fire light. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-initialparticlesscale-2" /><code>{"float InitialParticlesScale { get; }"}</code> | Particle scale when the fire effect starts. |
| <Link id="m-intensity-2" /><code>{"float Intensity { get; }"}</code> | Light intensity of the fire. |
| <Link id="m-islightbrightnessmodified-2" /><code>{"bool IsLightBrightnessModified { get; }"}</code> | Whether light brightness follows `ProgressBrightnessMultiplier` as the fire burns. |
| <Link id="m-isparticlesscalemodified-2" /><code>{"bool IsParticlesScaleModified { get; }"}</code> | Whether particle scale and parameters follow their curves as the fire burns. |
| <Link id="m-particlesscale-2" /><code>{"AnimationCurve ParticlesScale { get; }"}</code> | Curve over burn progress for particle scale. |
| <Link id="m-particlesystemparametersoverlifetime-2" /><code>{"AnimationCurve ParticleSystemParametersOverLifetime { get; }"}</code> | Curve over burn progress for the particle system multiplier. |
| <Link id="m-progressbrightnessmultiplier-2" /><code>{"AnimationCurve ProgressBrightnessMultiplier { get; }"}</code> | Curve over burn progress for light brightness. |
| <Link id="m-range-2" /><code>{"float Range { get; }"}</code> | Light range of the fire. |
| <Link id="m-shadows-2" /><code>{"LightShadows Shadows { get; }"}</code> | Shadow type of the fire's light. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-comparecurve" /><code>{"bool CompareCurve(AnimationCurve curveA, AnimationCurve curveB)"}</code> | True if two curves have the same number of keys at roughly the same times and values. |
| <Link id="m-setup" /><code>{"void Setup(float intensity, float range, LightShadows shadows, float initialParticleScale, bool isLightBrightnessModified, AnimationCurve progressBrightnessMultiplier, bool isParticlesScaleModified, AnimationCurve particlesScale, AnimationCurve particleSystemParametersOverLifetime)"}</code> | Sets every field at once. |

## Used in

Members of other types that take, return or hold a `FireSettings`:

[`HeatSourceBase.settings`](/game-api/types/alta-stats-effects/heatsourcebase#m-settings), [`HeatSourceBase.Settings`](/game-api/types/alta-stats-effects/heatsourcebase#m-settings-2), [`PooledFireEffect.currentSettings`](/game-api/types/global-p/pooledfireeffect#m-currentsettings).
