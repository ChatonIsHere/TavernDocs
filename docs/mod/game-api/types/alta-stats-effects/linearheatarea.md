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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HeatAreaModifier`](/mod/game-api/types/alta-stats-effects/heatareamodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LinearHeatArea()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decreasedirection" /><code>{"private Vector3 decreaseDirection"}</code> | <span className="api-desc">Local direction the heat falls off in.</span> |
| <Link id="m-length" /><code>{"private float length"}</code> | <span className="api-desc">Distance over which heat falls to 0.</span> |
| <Link id="m-origin" /><code>{"private Vector3 origin"}</code> | <span className="api-desc">Local offset of the full-heat point.</span> |

</details>

## Properties

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decreasedirection-2" /><code>{"private Vector3 DecreaseDirection { get; }"}</code> | <span className="api-desc">The falloff direction in world space.</span> |
| <Link id="m-origin-2" /><code>{"private Vector3 Origin { get; }"}</code> | <span className="api-desc">The full-heat point in world space.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettemperaturemultiplier" /><code>{"protected override float GetTemperatureMultiplier("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> | <span className="api-desc">0 to 1 from how far the point is along the falloff direction.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the start, end and line of the falloff.</span> |

</details>
