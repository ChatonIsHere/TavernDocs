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
| <Link id="m-forward" /><code>{"Vector3 Forward { get; set; }"}</code> | <span className="api-desc">Spline direction at this point.</span> |
| <Link id="m-item" /><code>{"GameObject Item { get; set; }"}</code> | <span className="api-desc">The prefab chosen for this point; points left without one are dropped.</span> |
| <Link id="m-position" /><code>{"Vector3 Position { get; set; }"}</code> | <span className="api-desc">World position, after offsets and terrain snapping.</span> |
| <Link id="m-progress" /><code>{"float Progress { get; set; }"}</code> | <span className="api-desc">Position along the spline, from 0 to 1.</span> |
| <Link id="m-splineheight" /><code>{"float SplineHeight { get; set; }"}</code> | <span className="api-desc">Height of the spline itself at this point, before offsets.</span> |

## Used in

Members of other types that take, return or hold a `Part`:

<div className="api-used-in">

[`ItemModifier.GetPrefab`](/mod/game-api/types/alta-utilities/itemmodifier#m-getprefab), [`ItemModifier.Modify`](/mod/game-api/types/alta-utilities/itemmodifier#m-modify), [`Skip.GetPrefab`](/mod/game-api/types/alta-utilities/skip#m-getprefab), [`WedgeChooser.GetPrefab`](/mod/game-api/types/alta-utilities/wedgechooser#m-getprefab), [`WedgeChooser.Modify`](/mod/game-api/types/alta-utilities/wedgechooser#m-modify).

</div>
