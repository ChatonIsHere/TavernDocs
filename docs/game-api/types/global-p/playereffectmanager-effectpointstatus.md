---
title: "PlayerEffectManager.EffectPointStatus"
description: "class PlayerEffectManager.EffectPointStatus in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectManager.EffectPointStatus

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlayerEffectManager`](/game-api/types/global-p/playereffectmanager)
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectPointStatus("}<Link to="/game-api/types/global-p/playereffectmanager-effectposition">{"PlayerEffectManager.EffectPosition"}</Link>{" effectPosition, "}<Link to="/game-api/types/global-p/playereffectmanager">{"PlayerEffectManager"}</Link>{" manager, "}<Link to="/game-api/types/global-p/playereffectmanager-overridesettings">{"PlayerEffectManager.OverrideSettings"}</Link>{" settings)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-burnactiveeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/playereffectmanager-effectapplication">{"PlayerEffectManager.EffectApplication"}</Link>{" burnActiveEffectDefinition"}</code> |  |
| <Link id="m-effectposition" /><code>{"private "}<Link to="/game-api/types/global-p/playereffectmanager-effectposition">{"PlayerEffectManager.EffectPosition"}</Link>{" effectPosition"}</code> |  |
| <Link id="m-smokeactiveeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/playereffectmanager-effectapplication">{"PlayerEffectManager.EffectApplication"}</Link>{" smokeActiveEffectDefinition"}</code> |  |
| <Link id="m-stateffectsdefinition" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{", "}<Link to="/game-api/types/global-p/playereffectmanager-effectapplication">{"PlayerEffectManager.EffectApplication"}</Link>{"[]> statEffectsDefinition"}</code> |  |
| <Link id="m-temperaturecurve" /><code>{"private AnimationCurve temperatureCurve"}</code> |  |
| <Link id="m-temperaturelevelchanged" /><code>{"private Action TemperatureLevelChanged"}</code> |  |
| <Link id="m-temperaturelevelcount" /><code>{"private int temperatureLevelCount"}</code> |  |
| <Link id="m-temperaturelevels" /><code>{"private float[] temperatureLevels"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlevel" /><code>{"int CurrentLevel { get; private set; }"}</code> |  |
| <Link id="m-havestateffectsvalid" /><code>{"bool HaveStatEffectsValid { get; }"}</code> |  |
| <Link id="m-item" /><code><Link to="/game-api/types/global-p/playereffectmanager-effectapplication">{"PlayerEffectManager.EffectApplication"}</Link>{"[] this["}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition] { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatetemperature" /><code>{"private void UpdateTemperature("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> |  |

## Used in

Members of other types that take, return or hold a `EffectPointStatus`:

[`PlayerEffectManager.heatPointStatus`](/game-api/types/global-p/playereffectmanager#m-heatpointstatus).
