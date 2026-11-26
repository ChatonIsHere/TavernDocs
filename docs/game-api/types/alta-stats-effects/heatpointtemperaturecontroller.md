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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`
- **Documented in** [Heat](/game-api/game-systems/heat)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HeatPointTemperatureController()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maxtemperature" /><code>{"private float maxTemperature"}</code> | Highest temperature the heat point can reach. Default 100. |
| <Link id="m-mintemperature" /><code>{"private float minTemperature"}</code> | Lowest temperature the heat point can reach. Default 0. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clamptemperature" /><code>{"private void ClampTemperature(ref float newtemperature)"}</code> | Temperature modifier that clamps new temperatures to the range, and replaces NaN with the midpoint. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Server: hooks `ClampTemperature` into the heat point's `TemperatureModifier`. |

</details>
