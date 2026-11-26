---
title: "HeatPointTemperatureController"
description: "Server: clamps the temperature of the HeatPoint on the same object between a min and max."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatPointTemperatureController

A **class** in `Root.Township`, `Alta.Heat`.

Server: clamps the temperature of the `HeatPoint` on the same object between a min and max.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`
- **Documented in** [Heat](/mod/game-api/game-systems/heat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatPointTemperatureController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxtemperature" /><code>{"private float maxTemperature"}</code> | <span className="api-desc">Highest temperature the heat point can reach. Default 100.</span> |
| <Link id="m-mintemperature" /><code>{"private float minTemperature"}</code> | <span className="api-desc">Lowest temperature the heat point can reach. Default 0.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clamptemperature" /><code>{"private void ClampTemperature(ref float newtemperature)"}</code> | <span className="api-desc">Temperature modifier that clamps new temperatures to the range, and replaces NaN with the midpoint.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Server: hooks `ClampTemperature` into the heat point's `TemperatureModifier`.</span> |

</details>
