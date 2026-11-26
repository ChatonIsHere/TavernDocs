---
title: "RadiusHeatArea"
description: "Shapes a HeatArea as a sphere: full temperature inside innerRadius, fading to none at outerRadius."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RadiusHeatArea

A **class** in `Root.Township`, `Alta.Heat`.

Shapes a `HeatArea` as a sphere: full temperature inside `innerRadius`, fading to none at `outerRadius`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HeatAreaModifier`](/game-api/types/alta-stats-effects/heatareamodifier)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RadiusHeatArea()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-innerradius" /><code>{"private float innerRadius"}</code> | Distance within which the multiplier is 1. |
| <Link id="m-origin" /><code>{"private Vector3 origin"}</code> | Local offset of the sphere centre. |
| <Link id="m-outerradius" /><code>{"private float outerRadius"}</code> | Distance at which the multiplier reaches 0. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-origin-2" /><code>{"private Vector3 Origin { get; }"}</code> | Sphere centre in world space. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettemperaturemultiplier" /><code>{"protected override float GetTemperatureMultiplier("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> | 0 to 1 from the point's distance to the origin, between outer and inner radius. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the inner and outer spheres in the editor. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: when `outerRadius` is negative, copies radius and centre from a `SphereCollider` on the object. |

</details>
