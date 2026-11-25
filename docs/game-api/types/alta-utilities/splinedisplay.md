---
title: "SplineDisplay"
description: "abstract class SplineDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplineDisplay

An **abstract class** in `Root.Township`, `Alta.Bezier`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`, [`IBakeable`](/game-api/types/global-i-l/ibakeable)
- **Derived types** [`SplineCylinder`](/game-api/types/alta-utilities/splinecylinder), [`SplineDecorator`](/game-api/types/alta-utilities/splinedecorator), [`SplineMesh`](/game-api/types/alta-utilities/splinemesh)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SplineDisplay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isgenerated" /><code>{"protected bool isGenerated"}</code> |  |
| <Link id="m-isupdating" /><code>{"private bool isUpdating"}</code> |  |
| <Link id="m-spline" /><code>{"private "}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isbaked" /><code>{"bool IsBaked { get; set; }"}</code> |  |
| <Link id="m-spline-2" /><code><Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" Spline { get; }"}</code> |  |
| <Link id="m-isheadlessonly" /><code>{"protected virtual bool IsHeadlessOnly { get; }"}</code> |  |
| <Link id="m-isprefab" /><code>{"protected bool IsPrefab { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake()"}</code> |  |
| <Link id="m-generate" /><code>{"void Generate()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"virtual void OnValidate()"}</code> |  |
| <Link id="m-generateinternal" /><code>{"protected abstract void GenerateInternal()"}</code> |  |
| <Link id="m-splinechanged" /><code>{"private void SplineChanged("}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline)"}</code> |  |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> |  |
| <Link id="m-update" /><code>{"protected virtual void Update()"}</code> |  |
