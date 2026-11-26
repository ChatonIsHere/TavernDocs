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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`HeatAreaModifier`](/mod/game-api/types/alta-stats-effects/heatareamodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RadiusHeatArea()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-innerradius" /><code>{"private float innerRadius"}</code> | <span className="api-desc">Distance within which the multiplier is 1.</span> |
| <Link id="m-origin" /><code>{"private Vector3 origin"}</code> | <span className="api-desc">Local offset of the sphere centre.</span> |
| <Link id="m-outerradius" /><code>{"private float outerRadius"}</code> | <span className="api-desc">Distance at which the multiplier reaches 0.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-origin-2" /><code>{"private Vector3 Origin { get; }"}</code> | <span className="api-desc">Sphere centre in world space.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettemperaturemultiplier" /><code>{"protected override float GetTemperatureMultiplier("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> | <span className="api-desc">0 to 1 from the point's distance to the origin, between outer and inner radius.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the inner and outer spheres in the editor.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: when `outerRadius` is negative, copies radius and centre from a `SphereCollider` on the object.</span> |

</details>
