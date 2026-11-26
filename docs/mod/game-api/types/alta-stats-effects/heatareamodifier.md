---
title: "HeatAreaModifier"
description: "Base for components that give a HeatArea on the same object a shape, by setting how much of its temperature each heat point gets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatAreaModifier

An **abstract class** in `Root.Township`, `Alta.Heat`.

Base for components that give a `HeatArea` on the same object a shape, by setting how much of its temperature each heat point gets.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CylinderHeatArea`](/mod/game-api/types/alta-stats-effects/cylinderheatarea), [`LinearHeatArea`](/mod/game-api/types/alta-stats-effects/linearheatarea), [`RadiusHeatArea`](/mod/game-api/types/alta-stats-effects/radiusheatarea)
- **Attributes** `DisallowMultipleComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected HeatAreaModifier()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Sets the `HeatArea`'s `GetTemperatureMultiplier` to this component's version.</span> |
| <Link id="m-gettemperaturemultiplier" /><code>{"protected abstract float GetTemperatureMultiplier("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> | <span className="api-desc">Returns 0 to 1 for how much of the area's temperature a heat point receives.</span> |
