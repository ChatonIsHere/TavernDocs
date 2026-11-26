---
title: "SplineDecorator.Part"
description: "One placement point that SplineDecorator works out along a spline before spawning an item there."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplineDecorator.Part

A **struct** in `Root.Township`, `Alta.Bezier`.

One placement point that `SplineDecorator` works out along a spline before spawning an item there.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Nested in** [`SplineDecorator`](/mod/game-api/types/alta-utilities/splinedecorator)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-forward" /><code>{"Vector3 Forward { get; set; }"}</code> | Spline direction at this point. |
| <Link id="m-item" /><code>{"GameObject Item { get; set; }"}</code> | The prefab chosen for this point; points left without one are dropped. |
| <Link id="m-position" /><code>{"Vector3 Position { get; set; }"}</code> | World position, after offsets and terrain snapping. |
| <Link id="m-progress" /><code>{"float Progress { get; set; }"}</code> | Position along the spline, from 0 to 1. |
| <Link id="m-splineheight" /><code>{"float SplineHeight { get; set; }"}</code> | Height of the spline itself at this point, before offsets. |

## Used in

Members of other types that take, return or hold a `Part`:

[`ItemModifier.GetPrefab`](/mod/game-api/types/alta-utilities/itemmodifier#m-getprefab), [`ItemModifier.Modify`](/mod/game-api/types/alta-utilities/itemmodifier#m-modify), [`Skip.GetPrefab`](/mod/game-api/types/alta-utilities/skip#m-getprefab), [`WedgeChooser.GetPrefab`](/mod/game-api/types/alta-utilities/wedgechooser#m-getprefab), [`WedgeChooser.Modify`](/mod/game-api/types/alta-utilities/wedgechooser#m-modify).
