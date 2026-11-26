---
title: "LayoutHelper2D"
description: "Lays out a number of equal elements in a grid on a background panel, shrinking them if needed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LayoutHelper2D

A **class** in `Root.Township`, the global namespace.

Lays out a number of equal elements in a grid on a background panel, shrinking them if needed. Used by the gymnasium prefab spawner to place its buttons.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested types** [`LayoutInfo`](/mod/game-api/types/global-i-l/layouthelper2d-layoutinfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LayoutHelper2D(Vector3 backgroundSize, Vector3 elementSize, int elementCount, bool isVertical = true, float minBuffer = 0.025)"}</code> | <span className="api-desc">Creates a `LayoutHelper2D` from `backgroundSize`, `elementSize`, `elementCount`, `isVertical` and `minBuffer`.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearance" /><code>{"private float clearance"}</code> | <span className="api-desc">Half the panel thickness, so elements sit on its surface.</span> |
| <Link id="m-elementcount" /><code>{"private int elementCount"}</code> | <span className="api-desc">How many elements to place.</span> |
| <Link id="m-elementheight" /><code>{"private float elementHeight"}</code> | <span className="api-desc">Element height (or depth on a flat panel) plus the buffer.</span> |
| <Link id="m-elementwidth" /><code>{"private float elementWidth"}</code> | <span className="api-desc">Element width plus the buffer.</span> |
| <Link id="m-gridoffset" /><code>{"private Vector3 gridOffset"}</code> | <span className="api-desc">Top left corner of the panel, relative to its centre.</span> |
| <Link id="m-gridsize" /><code>{"private Vector2Int gridSize"}</code> | <span className="api-desc">Columns and rows found by `TryFitScaled`.</span> |
| <Link id="m-height" /><code>{"private float height"}</code> | <span className="api-desc">Panel height, or depth on a flat panel.</span> |
| <Link id="m-projection" /><code>{"private Func<float, float, Vector3> projection"}</code> | <span className="api-desc">Either `ProjectVertical` or `ProjectHorizontal`, chosen in the constructor.</span> |
| <Link id="m-scalefactor" /><code>{"private float scaleFactor"}</code> | <span className="api-desc">Scale found by `CanFitObjects`.</span> |
| <Link id="m-width" /><code>{"private float width"}</code> | <span className="api-desc">Panel width.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpositionsandscalefactor" /><code><Link to="/mod/game-api/types/global-i-l/layouthelper2d-layoutinfo">{"LayoutHelper2D.LayoutInfo"}</Link>{" GetPositionsAndScaleFactor()"}</code> | <span className="api-desc">Returns the grid positions and scale. It relies on `gridSize` from `CanFitObjects`, which nothing calls, so it probably returns an empty result.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canfitobjects" /><code>{"private bool CanFitObjects()"}</code> | <span className="api-desc">Shrinks the scale in steps of 0.05 from 1 until the grid fits, giving up below 0.3. Nothing calls it in this code.</span> |
| <Link id="m-projecthorizontal" /><code>{"private Vector3 ProjectHorizontal(float width, float depth)"}</code> | <span className="api-desc">Turns a grid position into a point on a flat panel, sitting `clearance` above it.</span> |
| <Link id="m-projectvertical" /><code>{"private Vector3 ProjectVertical(float width, float height)"}</code> | <span className="api-desc">Turns a grid position into a point on an upright panel, `clearance` in front of it.</span> |
| <Link id="m-tryfitscaled" /><code>{"private bool TryFitScaled(float scaleFactor)"}</code> | <span className="api-desc">Checks whether all elements fit at a scale and, if so, stores the column and row count.</span> |

</details>
