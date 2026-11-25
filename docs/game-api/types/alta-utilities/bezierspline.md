---
title: "BezierSpline"
description: "class BezierSpline in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BezierSpline

A **class** in `Root.Township`, `Alta.Bezier`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`, [`IInstructionResult`](/game-api/types/alta-world/iinstructionresult)
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BezierSpline()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code><Link to="/game-api/types/alta-utilities/splinechangedhandler">{"SplineChangedHandler"}</Link>{" Changed"}</code> |  |
| <Link id="m-islooping" /><code>{"private bool isLooping"}</code> |  |
| <Link id="m-modes" /><code>{"private "}<Link to="/game-api/types/global-a-b/beziercontrolpointmode">{"BezierControlPointMode"}</Link>{"[] modes"}</code> |  |
| <Link id="m-points" /><code>{"private Vector3[] points"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controlpointcount" /><code>{"int ControlPointCount { get; }"}</code> |  |
| <Link id="m-curvecount" /><code>{"int CurveCount { get; }"}</code> |  |
| <Link id="m-islooping-2" /><code>{"bool IsLooping { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcurve" /><code>{"void AddCurve()"}</code> |  |
| <Link id="m-adddisplay" /><code>{"void AddDisplay(GameObject display)"}</code> |  |
| <Link id="m-create" /><code>{"static "}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" Create(params Vector3[] points)"}</code> |  |
| <Link id="m-getcontrolpoint" /><code>{"Vector3 GetControlPoint(int index)"}</code> |  |
| <Link id="m-getcontrolpointmode" /><code><Link to="/game-api/types/global-a-b/beziercontrolpointmode">{"BezierControlPointMode"}</Link>{" GetControlPointMode(int index)"}</code> |  |
| <Link id="m-getdirection" /><code>{"Vector3 GetDirection(float t)"}</code> |  |
| <Link id="m-getpoint" /><code>{"Vector3 GetPoint(float t)"}</code> |  |
| <Link id="m-getpointlocal" /><code>{"Vector3 GetPointLocal(int curve, float t)"}</code> |  |
| <Link id="m-getpointlocal-2" /><code>{"Vector3 GetPointLocal(float t)"}</code> |  |
| <Link id="m-getvelocity" /><code>{"Vector3 GetVelocity(float t)"}</code> |  |
| <Link id="m-insert" /><code>{"void Insert(int index)"}</code> |  |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> |  |
| <Link id="m-reset" /><code>{"void Reset()"}</code> |  |
| <Link id="m-setcontrolpoint" /><code>{"void SetControlPoint(int index, Vector3 point)"}</code> |  |
| <Link id="m-setcontrolpointmode" /><code>{"void SetControlPointMode(int index, "}<Link to="/game-api/types/global-a-b/beziercontrolpointmode">{"BezierControlPointMode"}</Link>{" mode)"}</code> |  |
| <Link id="m-enforcemode" /><code>{"private void EnforceMode(int index)"}</code> |  |
| <Link id="m-onchanged" /><code>{"private void OnChanged()"}</code> |  |
| <Link id="m-undo" /><code>{"private void Alta.Static.IInstructionResult.Undo()"}</code> |  |

## Used in

Members of other types that take, return or hold a `BezierSpline`:

[`SplineChangedHandler.BeginInvoke`](/game-api/types/alta-utilities/splinechangedhandler#m-begininvoke), [`SplineChangedHandler.Invoke`](/game-api/types/alta-utilities/splinechangedhandler#m-invoke), [`SplineDisplay.spline`](/game-api/types/alta-utilities/splinedisplay#m-spline), [`SplineDisplay.Spline`](/game-api/types/alta-utilities/splinedisplay#m-spline-2), [`SplineDisplay.SplineChanged`](/game-api/types/alta-utilities/splinedisplay#m-splinechanged), [`RopePoweredElementBoard.spline`](/game-api/types/global-q-r/ropepoweredelementboard#m-spline), [`ServerSelectionDisplay.spline`](/game-api/types/global-s/serverselectiondisplay#m-spline), [`SkillOrbInteractionSpline.spline`](/game-api/types/global-s/skillorbinteractionspline#m-spline), [`SplineParticlesPooled.Spline`](/game-api/types/global-s/splineparticlespooled#m-spline), [`StatUpgradeEffect.spline`](/game-api/types/global-s/statupgradeeffect#m-spline).
