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
| <Link id="m-ctor" /><code>{"LayoutHelper2D(Vector3 backgroundSize, Vector3 elementSize, int elementCount, bool isVertical = true, float minBuffer = 0.025)"}</code> | Creates a `LayoutHelper2D` from `backgroundSize`, `elementSize`, `elementCount`, `isVertical` and `minBuffer`. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearance" /><code>{"private float clearance"}</code> | Half the panel thickness, so elements sit on its surface. |
| <Link id="m-elementcount" /><code>{"private int elementCount"}</code> | How many elements to place. |
| <Link id="m-elementheight" /><code>{"private float elementHeight"}</code> | Element height (or depth on a flat panel) plus the buffer. |
| <Link id="m-elementwidth" /><code>{"private float elementWidth"}</code> | Element width plus the buffer. |
| <Link id="m-gridoffset" /><code>{"private Vector3 gridOffset"}</code> | Top left corner of the panel, relative to its centre. |
| <Link id="m-gridsize" /><code>{"private Vector2Int gridSize"}</code> | Columns and rows found by `TryFitScaled`. |
| <Link id="m-height" /><code>{"private float height"}</code> | Panel height, or depth on a flat panel. |
| <Link id="m-projection" /><code>{"private Func<float, float, Vector3> projection"}</code> | Either `ProjectVertical` or `ProjectHorizontal`, chosen in the constructor. |
| <Link id="m-scalefactor" /><code>{"private float scaleFactor"}</code> | Scale found by `CanFitObjects`. |
| <Link id="m-width" /><code>{"private float width"}</code> | Panel width. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpositionsandscalefactor" /><code><Link to="/mod/game-api/types/global-i-l/layouthelper2d-layoutinfo">{"LayoutHelper2D.LayoutInfo"}</Link>{" GetPositionsAndScaleFactor()"}</code> | Returns the grid positions and scale. It relies on `gridSize` from `CanFitObjects`, which nothing calls, so it probably returns an empty result. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canfitobjects" /><code>{"private bool CanFitObjects()"}</code> | Shrinks the scale in steps of 0.05 from 1 until the grid fits, giving up below 0.3. Nothing calls it in this code. |
| <Link id="m-projecthorizontal" /><code>{"private Vector3 ProjectHorizontal(float width, float depth)"}</code> | Turns a grid position into a point on a flat panel, sitting `clearance` above it. |
| <Link id="m-projectvertical" /><code>{"private Vector3 ProjectVertical(float width, float height)"}</code> | Turns a grid position into a point on an upright panel, `clearance` in front of it. |
| <Link id="m-tryfitscaled" /><code>{"private bool TryFitScaled(float scaleFactor)"}</code> | Checks whether all elements fit at a scale and, if so, stores the column and row count. |

</details>
