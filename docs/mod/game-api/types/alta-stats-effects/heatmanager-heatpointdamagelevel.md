---
title: "HeatManager.HeatPointDamageLevel"
description: "Tracks one heat point's burn level for HeatManager: -1 below the hot temperature, 0 when hot, 1 at or above ignition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatManager.HeatPointDamageLevel

A **private class** in `Root.Township`, `Alta.Heat`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Tracks one heat point's burn level for `HeatManager`: -1 below the hot temperature, 0 when hot, 1 at or above ignition.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`HeatManager`](/mod/game-api/types/alta-stats-effects/heatmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatPointDamageLevel(float hotTemperature, float ignitionTemperature, "}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> | <span className="api-desc">Creates a `HeatManager.HeatPointDamageLevel` from `hotTemperature`, `ignitionTemperature` and `point`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changedlevel" /><code>{"Action<int> ChangedLevel"}</code> | <span className="api-desc">Called with the new level whenever it changes.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burnlevels" /><code>{"private float[] burnLevels"}</code> | <span className="api-desc">The hot and ignition temperatures, in that order.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-increasedtemperature" /><code>{"bool IncreasedTemperature { get; set; }"}</code> | <span className="api-desc">Set when the temperature rises. `HeatManager` clears it after counting it for burn damage.</span> |
| <Link id="m-level" /><code>{"int Level { get; private set; }"}</code> | <span className="api-desc">The current burn level, from -1 to 1.</span> |
| <Link id="m-temperature" /><code>{"float Temperature { get; private set; }"}</code> | <span className="api-desc">The heat point's last known temperature.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatetemperature" /><code>{"private void UpdateTemperature("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> | <span className="api-desc">Runs when the heat point changes. Updates the temperature and level.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HeatPointDamageLevel`:

<div className="api-used-in">

[`HeatManager.heatPointLevels`](/mod/game-api/types/alta-stats-effects/heatmanager#m-heatpointlevels).

</div>
