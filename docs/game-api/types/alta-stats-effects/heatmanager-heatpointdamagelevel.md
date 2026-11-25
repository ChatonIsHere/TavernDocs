---
title: "HeatManager.HeatPointDamageLevel"
description: "class HeatManager.HeatPointDamageLevel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatManager.HeatPointDamageLevel

A **private class** in `Root.Township`, `Alta.Heat`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`HeatManager`](/game-api/types/alta-stats-effects/heatmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatPointDamageLevel(float hotTemperature, float ignitionTemperature, "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changedlevel" /><code>{"Action<int> ChangedLevel"}</code> |  |
| <Link id="m-burnlevels" /><code>{"private float[] burnLevels"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-increasedtemperature" /><code>{"bool IncreasedTemperature { get; set; }"}</code> |  |
| <Link id="m-level" /><code>{"int Level { get; private set; }"}</code> |  |
| <Link id="m-temperature" /><code>{"float Temperature { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatetemperature" /><code>{"private void UpdateTemperature("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> |  |

## Used in

Members of other types that take, return or hold a `HeatPointDamageLevel`:

[`HeatManager.heatPointLevels`](/game-api/types/alta-stats-effects/heatmanager#m-heatpointlevels).
