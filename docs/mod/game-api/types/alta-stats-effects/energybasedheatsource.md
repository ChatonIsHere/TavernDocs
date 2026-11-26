---
title: "EnergyBasedHeatSource"
description: "A HeatSourceBase variant that adds energy to its heat point instead of conducting a temperature."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnergyBasedHeatSource

A **class** in `Root.Township`, `Alta.Heat`.

A `HeatSourceBase` variant that adds energy to its heat point instead of conducting a temperature. As decompiled it adds zero, so it heats nothing.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HeatSourceBase`](/mod/game-api/types/alta-stats-effects/heatsourcebase)
- **Documented in** [Heat](/mod/game-api/game-systems/heat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnergyBasedHeatSource()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-conducttoheatpoint" /><code>{"protected override void ConductToHeatPoint()"}</code> | <span className="api-desc">Adds energy to the attached heat point's `InternalEnergy` each heat tick. The amount is always 0 in this build.</span> |
