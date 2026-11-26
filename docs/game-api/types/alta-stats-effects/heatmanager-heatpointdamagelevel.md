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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Nested in** [`HeatManager`](/game-api/types/alta-stats-effects/heatmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HeatPointDamageLevel(float hotTemperature, float ignitionTemperature, "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changedlevel" /><code>{"Action<int> ChangedLevel"}</code> | Called with the new level whenever it changes. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burnlevels" /><code>{"private float[] burnLevels"}</code> | The hot and ignition temperatures, in that order. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-increasedtemperature" /><code>{"bool IncreasedTemperature { get; set; }"}</code> | Set when the temperature rises. `HeatManager` clears it after counting it for burn damage. |
| <Link id="m-level" /><code>{"int Level { get; private set; }"}</code> | The current burn level, from -1 to 1. |
| <Link id="m-temperature" /><code>{"float Temperature { get; private set; }"}</code> | The heat point's last known temperature. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatetemperature" /><code>{"private void UpdateTemperature("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> | Runs when the heat point changes. Updates the temperature and level. |

</details>

## Used in

Members of other types that take, return or hold a `HeatPointDamageLevel`:

[`HeatManager.heatPointLevels`](/game-api/types/alta-stats-effects/heatmanager#m-heatpointlevels).
