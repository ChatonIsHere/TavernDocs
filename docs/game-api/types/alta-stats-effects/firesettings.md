---
title: "FireSettings"
description: "Effects and timings for fire."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireSettings

A **class** in `Root.Township`, `Alta.Heat`.

Effects and timings for fire.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`FireSettings.Create`](/game-api/types/alta-stats-effects/firesettings-create)
- **Nested types** [`Create`](/game-api/types/alta-stats-effects/firesettings-create)
- **Documented in** [Heat](/game-api/game-systems/heat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FireSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-initialparticlesscale" /><code>{"private float initialParticlesScale"}</code> |  |
| <Link id="m-intensity" /><code>{"private float intensity"}</code> |  |
| <Link id="m-islightbrightnessmodified" /><code>{"private bool isLightBrightnessModified"}</code> |  |
| <Link id="m-isparticlesscalemodified" /><code>{"private bool isParticlesScaleModified"}</code> |  |
| <Link id="m-particlesscale" /><code>{"private AnimationCurve particlesScale"}</code> |  |
| <Link id="m-particlesystemparametersoverlifetime" /><code>{"private AnimationCurve particleSystemParametersOverLifetime"}</code> |  |
| <Link id="m-progressbrightnessmultiplier" /><code>{"private AnimationCurve progressBrightnessMultiplier"}</code> |  |
| <Link id="m-range" /><code>{"private float range"}</code> |  |
| <Link id="m-shadows" /><code>{"private LightShadows shadows"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-initialparticlesscale-2" /><code>{"float InitialParticlesScale { get; }"}</code> |  |
| <Link id="m-intensity-2" /><code>{"float Intensity { get; }"}</code> |  |
| <Link id="m-islightbrightnessmodified-2" /><code>{"bool IsLightBrightnessModified { get; }"}</code> |  |
| <Link id="m-isparticlesscalemodified-2" /><code>{"bool IsParticlesScaleModified { get; }"}</code> |  |
| <Link id="m-particlesscale-2" /><code>{"AnimationCurve ParticlesScale { get; }"}</code> |  |
| <Link id="m-particlesystemparametersoverlifetime-2" /><code>{"AnimationCurve ParticleSystemParametersOverLifetime { get; }"}</code> |  |
| <Link id="m-progressbrightnessmultiplier-2" /><code>{"AnimationCurve ProgressBrightnessMultiplier { get; }"}</code> |  |
| <Link id="m-range-2" /><code>{"float Range { get; }"}</code> |  |
| <Link id="m-shadows-2" /><code>{"LightShadows Shadows { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-comparecurve" /><code>{"bool CompareCurve(AnimationCurve curveA, AnimationCurve curveB)"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup(float intensity, float range, LightShadows shadows, float initialParticleScale, bool isLightBrightnessModified, AnimationCurve progressBrightnessMultiplier, bool isParticlesScaleModified, AnimationCurve particlesScale, AnimationCurve particleSystemParametersOverLifetime)"}</code> |  |

## Used in

Members of other types that take, return or hold a `FireSettings`:

[`HeatSourceBase.settings`](/game-api/types/alta-stats-effects/heatsourcebase#m-settings), [`HeatSourceBase.Settings`](/game-api/types/alta-stats-effects/heatsourcebase#m-settings-2), [`PooledFireEffect.currentSettings`](/game-api/types/global-p/pooledfireeffect#m-currentsettings).
