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
| <Link id="m-ctor" /><code>{"protected SplineDisplay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isgenerated" /><code>{"protected bool isGenerated"}</code> | True once it has been built. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isupdating" /><code>{"private bool isUpdating"}</code> | Whether the display regenerates when its spline changes. |
| <Link id="m-spline" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline"}</code> | Backing field for `Spline`, filled from the parent `BezierSpline` on first use. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isbaked" /><code>{"bool IsBaked { get; set; }"}</code> | True once baked. |
| <Link id="m-spline-2" /><code><Link to="/mod/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" Spline { get; }"}</code> | The spline in the parents, found on first use. |
| <Link id="m-isheadlessonly" /><code>{"protected virtual bool IsHeadlessOnly { get; }"}</code> | Despite the name, true means it is skipped on a headless server. True by default. |
| <Link id="m-isprefab" /><code>{"protected bool IsPrefab { get; }"}</code> | Always false in this build. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake()"}</code> | Builds once, then destroys this component so only the result stays. |
| <Link id="m-generate" /><code>{"void Generate()"}</code> | Builds the display. |
| <Link id="m-onvalidate" /><code>{"virtual void OnValidate()"}</code> | Editor hook. Empty here. |
| <Link id="m-generateinternal" /><code>{"protected abstract void GenerateInternal()"}</code> | Subclass: does the building. |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | Builds once and starts listening to spline changes, unless skipped on headless. |
| <Link id="m-update" /><code>{"protected virtual void Update()"}</code> | Empty here. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-splinechanged" /><code>{"private void SplineChanged("}<Link to="/mod/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline)"}</code> | Handler for the spline's `Changed` event; regenerates if `isUpdating` is on, or unsubscribes if the spline no longer belongs to it. |

</details>
