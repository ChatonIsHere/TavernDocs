---
title: "BezierSpline"
description: "A cubic Bezier spline component: control points in groups of three per curve, with free, aligned or mirrored handles and optional looping."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BezierSpline

A **class** in `Root.Township`, `Alta.Bezier`.

A cubic Bezier spline component: control points in groups of three per curve, with free, aligned or mirrored handles and optional looping. Used by spline displays, terrain splines, forest spline instructions and some effects.

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
| <Link id="m-changed" /><code><Link to="/game-api/types/alta-utilities/splinechangedhandler">{"SplineChangedHandler"}</Link>{" Changed"}</code> | Called whenever the spline changes. |
| <Link id="m-islooping" /><code>{"private bool isLooping"}</code> |  |
| <Link id="m-modes" /><code>{"private "}<Link to="/game-api/types/global-a-b/beziercontrolpointmode">{"BezierControlPointMode"}</Link>{"[] modes"}</code> |  |
| <Link id="m-points" /><code>{"private Vector3[] points"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controlpointcount" /><code>{"int ControlPointCount { get; }"}</code> | Number of control points. |
| <Link id="m-curvecount" /><code>{"int CurveCount { get; }"}</code> | Number of curves (control points minus one, over three). |
| <Link id="m-islooping-2" /><code>{"bool IsLooping { get; set; }"}</code> | Whether the spline closes on itself. Turning it on joins the last point to the first. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcurve" /><code>{"void AddCurve()"}</code> | Adds one more curve to the end, one unit apart along X, and keeps the loop closed if looping. |
| <Link id="m-adddisplay" /><code>{"void AddDisplay(GameObject display)"}</code> | Instantiates a display prefab under the spline and generates every `SplineDisplay` in it. |
| <Link id="m-create" /><code>{"static "}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" Create(params Vector3[] points)"}</code> | Creates a game object with a spline from the given points. Handle modes aren't set, so editing may fail until `Reset` (probably). |
| <Link id="m-getcontrolpoint" /><code>{"Vector3 GetControlPoint(int index)"}</code> | A control point in local space. |
| <Link id="m-getcontrolpointmode" /><code><Link to="/game-api/types/global-a-b/beziercontrolpointmode">{"BezierControlPointMode"}</Link>{" GetControlPointMode(int index)"}</code> | Handle mode for the control point's joint; free if unset. |
| <Link id="m-getdirection" /><code>{"Vector3 GetDirection(float t)"}</code> | Normalized world-space direction at `t` (0 to 1 along the whole spline). |
| <Link id="m-getpoint" /><code>{"Vector3 GetPoint(float t)"}</code> | World-space point at `t` (0 to 1 along the whole spline). |
| <Link id="m-getpointlocal" /><code>{"Vector3 GetPointLocal(int curve, float t)"}</code> | Local-space point at `t` along the whole spline, or at `t` on one curve. |
| <Link id="m-getpointlocal-2" /><code>{"Vector3 GetPointLocal(float t)"}</code> | Local-space point at `t` along the whole spline, or at `t` on one curve. |
| <Link id="m-getvelocity" /><code>{"Vector3 GetVelocity(float t)"}</code> | World-space derivative at `t` along the whole spline. |
| <Link id="m-insert" /><code>{"void Insert(int index)"}</code> | Inserts a new curve at a joint index. |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | Raises `Changed`. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Resets to one straight curve along X. |
| <Link id="m-setcontrolpoint" /><code>{"void SetControlPoint(int index, Vector3 point)"}</code> | Moves a control point; moving a joint also moves its handles, and the handle mode is enforced. |
| <Link id="m-setcontrolpointmode" /><code>{"void SetControlPointMode(int index, "}<Link to="/game-api/types/global-a-b/beziercontrolpointmode">{"BezierControlPointMode"}</Link>{" mode)"}</code> | Sets the handle mode of a joint and enforces it. |
| <Link id="m-enforcemode" /><code>{"private void EnforceMode(int index)"}</code> |  |
| <Link id="m-onchanged" /><code>{"private void OnChanged()"}</code> |  |
| <Link id="m-undo" /><code>{"private void Alta.Static.IInstructionResult.Undo()"}</code> |  |

## Used in

Members of other types that take, return or hold a `BezierSpline`:

[`SplineChangedHandler.BeginInvoke`](/game-api/types/alta-utilities/splinechangedhandler#m-begininvoke), [`SplineChangedHandler.Invoke`](/game-api/types/alta-utilities/splinechangedhandler#m-invoke), [`SplineDisplay.spline`](/game-api/types/alta-utilities/splinedisplay#m-spline), [`SplineDisplay.Spline`](/game-api/types/alta-utilities/splinedisplay#m-spline-2), [`SplineDisplay.SplineChanged`](/game-api/types/alta-utilities/splinedisplay#m-splinechanged), [`RopePoweredElementBoard.spline`](/game-api/types/global-q-r/ropepoweredelementboard#m-spline), [`ServerSelectionDisplay.spline`](/game-api/types/global-s/serverselectiondisplay#m-spline), [`SkillOrbInteractionSpline.spline`](/game-api/types/global-s/skillorbinteractionspline#m-spline), [`SplineParticlesPooled.Spline`](/game-api/types/global-s/splineparticlespooled#m-spline), [`StatUpgradeEffect.spline`](/game-api/types/global-s/statupgradeeffect#m-spline).
