---
title: "LayoutHelper2D.LayoutInfo"
description: "Result of a 2D grid layout: element positions and the scale to draw them at."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LayoutHelper2D.LayoutInfo

A **struct** in `Root.Township`, the global namespace.

Result of a 2D grid layout: element positions and the scale to draw them at.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`LayoutHelper2D`](/mod/game-api/types/global-i-l/layouthelper2d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LayoutInfo(List<Vector3> positions, float scale)"}</code> | <span className="api-desc">Creates a `LayoutHelper2D.LayoutInfo` from `positions` and `scale`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-positions" /><code>{"List<Vector3> Positions"}</code> | <span className="api-desc">Position of each element, one per element.</span> |
| <Link id="m-scale" /><code>{"float Scale"}</code> | <span className="api-desc">Scale factor for the elements so they fit.</span> |

## Used in

Members of other types that take, return or hold a `LayoutInfo`:

<div className="api-used-in">

[`LayoutHelper2D.GetPositionsAndScaleFactor`](/mod/game-api/types/global-i-l/layouthelper2d#m-getpositionsandscalefactor).

</div>
