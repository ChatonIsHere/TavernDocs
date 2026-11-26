---
title: "CylinderHeatArea"
description: "Shapes a HeatArea as a cylinder: heat points get full temperature inside innerRadius of the axis, fading to none at outerRadius."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CylinderHeatArea

A **class** in `Root.Township`, `Alta.Heat`.

Shapes a `HeatArea` as a cylinder: heat points get full temperature inside `innerRadius` of the axis, fading to none at `outerRadius`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HeatAreaModifier`](/game-api/types/alta-stats-effects/heatareamodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CylinderHeatArea()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cylinderaxis" /><code>{"private Vector3 cylinderAxis"}</code> | Local axis direction of the cylinder. |
| <Link id="m-innerradius" /><code>{"private float innerRadius"}</code> | Distance from the axis within which the multiplier is 1. |
| <Link id="m-origin" /><code>{"private Vector3 origin"}</code> | Local offset of the cylinder centre. |
| <Link id="m-outerradius" /><code>{"private float outerRadius"}</code> | Distance from the axis at which the multiplier reaches 0. |

</details>

## Properties

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axis" /><code>{"private Vector3 Axis { get; }"}</code> | The cylinder axis in world space. |
| <Link id="m-origin-2" /><code>{"private Vector3 Origin { get; }"}</code> | The cylinder centre in world space. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettemperaturemultiplier" /><code>{"protected override float GetTemperatureMultiplier("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> | 0 to 1 multiplier from the point's distance to the axis, between outer and inner radius. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the inner and outer cylinders in the editor. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: when `outerRadius` is negative, copies radius and centre from a `SphereCollider` on the object. |

</details>
