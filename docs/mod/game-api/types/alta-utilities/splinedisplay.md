---
title: "SplineDisplay"
description: "Base for something built along a parent BezierSpline (a mesh, fence and so on)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplineDisplay

An **abstract class** in `Root.Township`, `Alta.Bezier`.

Base for something built along a parent `BezierSpline` (a mesh, fence and so on). It rebuilds when the spline changes and can be baked to remove itself.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`, [`IBakeable`](/mod/game-api/types/global-i-l/ibakeable)
- **Derived types** [`SplineCylinder`](/mod/game-api/types/alta-utilities/splinecylinder), [`SplineDecorator`](/mod/game-api/types/alta-utilities/splinedecorator), [`SplineMesh`](/mod/game-api/types/alta-utilities/splinemesh)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SplineDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isgenerated" /><code>{"protected bool isGenerated"}</code> | <span className="api-desc">True once it has been built.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isupdating" /><code>{"private bool isUpdating"}</code> | <span className="api-desc">Whether the display regenerates when its spline changes.</span> |
| <Link id="m-spline" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline"}</code> | <span className="api-desc">Backing field for `Spline`, filled from the parent `BezierSpline` on first use.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isbaked" /><code>{"bool IsBaked { get; set; }"}</code> | <span className="api-desc">True once baked.</span> |
| <Link id="m-spline-2" /><code><Link to="/mod/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" Spline { get; }"}</code> | <span className="api-desc">The spline in the parents, found on first use.</span> |
| <Link id="m-isheadlessonly" /><code>{"protected virtual bool IsHeadlessOnly { get; }"}</code> | <span className="api-desc">Despite the name, true means it is skipped on a headless server. True by default.</span> |
| <Link id="m-isprefab" /><code>{"protected bool IsPrefab { get; }"}</code> | <span className="api-desc">Always false in this build.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake()"}</code> | <span className="api-desc">Builds once, then destroys this component so only the result stays.</span> |
| <Link id="m-generate" /><code>{"void Generate()"}</code> | <span className="api-desc">Builds the display.</span> |
| <Link id="m-onvalidate" /><code>{"virtual void OnValidate()"}</code> | <span className="api-desc">Editor hook. Empty here.</span> |
| <Link id="m-generateinternal" /><code>{"protected abstract void GenerateInternal()"}</code> | <span className="api-desc">Subclass: does the building.</span> |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | <span className="api-desc">Builds once and starts listening to spline changes, unless skipped on headless.</span> |
| <Link id="m-update" /><code>{"protected virtual void Update()"}</code> | <span className="api-desc">Empty here.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-splinechanged" /><code>{"private void SplineChanged("}<Link to="/mod/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline)"}</code> | <span className="api-desc">Handler for the spline's `Changed` event; regenerates if `isUpdating` is on, or unsubscribes if the spline no longer belongs to it.</span> |

</details>
