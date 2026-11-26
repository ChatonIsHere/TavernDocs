---
title: "LayoutHelper2D.LayoutInfo"
description: "Result of a 2D grid layout: element positions and the scale to draw them at."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LayoutHelper2D.LayoutInfo

A **struct** in `Root.Township`, no namespace.

Result of a 2D grid layout: element positions and the scale to draw them at.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`LayoutHelper2D`](/game-api/types/global-i-l/layouthelper2d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LayoutInfo(List<Vector3> positions, float scale)"}</code> | Creates a `LayoutHelper2D.LayoutInfo` from `positions` and `scale`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-positions" /><code>{"List<Vector3> Positions"}</code> | Position of each element, one per element. |
| <Link id="m-scale" /><code>{"float Scale"}</code> | Scale factor for the elements so they fit. |

## Used in

Members of other types that take, return or hold a `LayoutInfo`:

[`LayoutHelper2D.GetPositionsAndScaleFactor`](/game-api/types/global-i-l/layouthelper2d#m-getpositionsandscalefactor).
