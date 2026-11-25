---
title: "LayoutHelper2D"
description: "class LayoutHelper2D in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LayoutHelper2D

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested types** [`LayoutInfo`](/game-api/types/global-i-l/layouthelper2d-layoutinfo)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LayoutHelper2D(Vector3 backgroundSize, Vector3 elementSize, int elementCount, bool isVertical = true, float minBuffer = 0.025)"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-clearance" /><code>{"private float clearance"}</code> |
| <Link id="m-elementcount" /><code>{"private int elementCount"}</code> |
| <Link id="m-elementheight" /><code>{"private float elementHeight"}</code> |
| <Link id="m-elementwidth" /><code>{"private float elementWidth"}</code> |
| <Link id="m-gridoffset" /><code>{"private Vector3 gridOffset"}</code> |
| <Link id="m-gridsize" /><code>{"private Vector2Int gridSize"}</code> |
| <Link id="m-height" /><code>{"private float height"}</code> |
| <Link id="m-projection" /><code>{"private Func<float, float, Vector3> projection"}</code> |
| <Link id="m-scalefactor" /><code>{"private float scaleFactor"}</code> |
| <Link id="m-width" /><code>{"private float width"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getpositionsandscalefactor" /><code><Link to="/game-api/types/global-i-l/layouthelper2d-layoutinfo">{"LayoutHelper2D.LayoutInfo"}</Link>{" GetPositionsAndScaleFactor()"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-canfitobjects" /><code>{"private bool CanFitObjects()"}</code> |
| <Link id="m-projecthorizontal" /><code>{"private Vector3 ProjectHorizontal(float width, float depth)"}</code> |
| <Link id="m-projectvertical" /><code>{"private Vector3 ProjectVertical(float width, float height)"}</code> |
| <Link id="m-tryfitscaled" /><code>{"private bool TryFitScaled(float scaleFactor)"}</code> |

</details>
