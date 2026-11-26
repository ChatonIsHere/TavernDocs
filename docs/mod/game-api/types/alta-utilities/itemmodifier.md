---
title: "ItemModifier"
description: "Base for components that sit next to a SplineDecorator and pick or change the objects it places along a spline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemModifier

An **abstract class** in `Root.Township`, `Alta.Bezier`.

Base for components that sit next to a `SplineDecorator` and pick or change the objects it places along a spline.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`SplineDisplayModifier`](/mod/game-api/types/alta-utilities/splinedisplaymodifier)
- **Derived types** [`Skip`](/mod/game-api/types/alta-utilities/skip), [`WedgeChooser`](/mod/game-api/types/alta-utilities/wedgechooser)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ItemModifier()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getprefab" /><code>{"virtual GameObject GetPrefab(List<"}<Link to="/mod/game-api/types/alta-utilities/splinedecorator-part">{"SplineDecorator.Part"}</Link>{"> parts, int index)"}</code> | <span className="api-desc">Returns the prefab to place at part `index`, or null to let the next modifier (or the default) choose.</span> |
| <Link id="m-modify" /><code>{"virtual void Modify(List<"}<Link to="/mod/game-api/types/alta-utilities/splinedecorator-part">{"SplineDecorator.Part"}</Link>{"> parts, int index, GameObject result)"}</code> | <span className="api-desc">Called on each placed object so the modifier can change it.</span> |
