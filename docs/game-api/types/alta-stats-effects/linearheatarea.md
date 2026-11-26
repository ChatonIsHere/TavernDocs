---
title: "LinearHeatArea"
description: "Shapes a HeatArea as a falloff along one direction: full temperature at the origin, none at length along decreaseDirection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LinearHeatArea

A **class** in `Root.Township`, `Alta.Heat`.

Shapes a `HeatArea` as a falloff along one direction: full temperature at the origin, none at `length` along `decreaseDirection`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HeatAreaModifier`](/game-api/types/alta-stats-effects/heatareamodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LinearHeatArea()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decreasedirection" /><code>{"private Vector3 decreaseDirection"}</code> | Local direction the heat falls off in. |
| <Link id="m-length" /><code>{"private float length"}</code> | Distance over which heat falls to 0. |
| <Link id="m-origin" /><code>{"private Vector3 origin"}</code> | Local offset of the full-heat point. |

</details>

## Properties

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decreasedirection-2" /><code>{"private Vector3 DecreaseDirection { get; }"}</code> | The falloff direction in world space. |
| <Link id="m-origin-2" /><code>{"private Vector3 Origin { get; }"}</code> | The full-heat point in world space. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettemperaturemultiplier" /><code>{"protected override float GetTemperatureMultiplier("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> | 0 to 1 from how far the point is along the falloff direction. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the start, end and line of the falloff. |

</details>
