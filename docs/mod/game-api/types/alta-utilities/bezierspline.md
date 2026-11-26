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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`, [`IInstructionResult`](/mod/game-api/types/alta-world/iinstructionresult)
- **Attributes** `SelectionBase`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BezierSpline()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code><Link to="/mod/game-api/types/alta-utilities/splinechangedhandler">{"SplineChangedHandler"}</Link>{" Changed"}</code> | <span className="api-desc">Called whenever the spline changes.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-islooping" /><code>{"private bool isLooping"}</code> | <span className="api-desc">Backing field for `IsLooping`.</span> |
| <Link id="m-modes" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/beziercontrolpointmode">{"BezierControlPointMode"}</Link>{"[] modes"}</code> | <span className="api-desc">Handle mode per curve joint (free, aligned, mirrored), one more entry than there are curves.</span> |
| <Link id="m-points" /><code>{"private Vector3[] points"}</code> | <span className="api-desc">Local-space control points: each curve uses four, sharing its end point with the next curve.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controlpointcount" /><code>{"int ControlPointCount { get; }"}</code> | <span className="api-desc">Number of control points.</span> |
| <Link id="m-curvecount" /><code>{"int CurveCount { get; }"}</code> | <span className="api-desc">Number of curves (control points minus one, over three).</span> |
| <Link id="m-islooping-2" /><code>{"bool IsLooping { get; set; }"}</code> | <span className="api-desc">Whether the spline closes on itself. Turning it on joins the last point to the first.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcurve" /><code>{"void AddCurve()"}</code> | <span className="api-desc">Adds one more curve to the end, one unit apart along X, and keeps the loop closed if looping.</span> |
| <Link id="m-adddisplay" /><code>{"void AddDisplay(GameObject display)"}</code> | <span className="api-desc">Instantiates a display prefab under the spline and generates every `SplineDisplay` in it.</span> |
| <Link id="m-create" /><code>{"static "}<Link to="/mod/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" Create(params Vector3[] points)"}</code> | <span className="api-desc">Creates a game object with a spline from the given points. Handle modes aren't set, so editing may fail until `Reset` (probably).</span> |
| <Link id="m-getcontrolpoint" /><code>{"Vector3 GetControlPoint(int index)"}</code> | <span className="api-desc">A control point in local space.</span> |
| <Link id="m-getcontrolpointmode" /><code><Link to="/mod/game-api/types/global-a-b/beziercontrolpointmode">{"BezierControlPointMode"}</Link>{" GetControlPointMode(int index)"}</code> | <span className="api-desc">Handle mode for the control point's joint; free if unset.</span> |
| <Link id="m-getdirection" /><code>{"Vector3 GetDirection(float t)"}</code> | <span className="api-desc">Normalized world-space direction at `t` (0 to 1 along the whole spline).</span> |
| <Link id="m-getpoint" /><code>{"Vector3 GetPoint(float t)"}</code> | <span className="api-desc">World-space point at `t` (0 to 1 along the whole spline).</span> |
| <Link id="m-getpointlocal" /><code>{"Vector3 GetPointLocal(int curve, float t)"}</code> | <span className="api-desc">Local-space point at `t` along the whole spline, or at `t` on one curve.</span> |
| <Link id="m-getpointlocal-2" /><code>{"Vector3 GetPointLocal(float t)"}</code> | <span className="api-desc">Local-space point at `t` along the whole spline, or at `t` on one curve.</span> |
| <Link id="m-getvelocity" /><code>{"Vector3 GetVelocity(float t)"}</code> | <span className="api-desc">World-space derivative at `t` along the whole spline.</span> |
| <Link id="m-insert" /><code>{"void Insert(int index)"}</code> | <span className="api-desc">Inserts a new curve at a joint index.</span> |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | <span className="api-desc">Raises `Changed`.</span> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Resets to one straight curve along X.</span> |
| <Link id="m-setcontrolpoint" /><code>{"void SetControlPoint(int index, Vector3 point)"}</code> | <span className="api-desc">Moves a control point; moving a joint also moves its handles, and the handle mode is enforced.</span> |
| <Link id="m-setcontrolpointmode" /><code>{"void SetControlPointMode(int index, "}<Link to="/mod/game-api/types/global-a-b/beziercontrolpointmode">{"BezierControlPointMode"}</Link>{" mode)"}</code> | <span className="api-desc">Sets the handle mode of a joint and enforces it.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enforcemode" /><code>{"private void EnforceMode(int index)"}</code> | <span className="api-desc">Moves the opposite handle of a control point so it matches the point's mode (mirrored or aligned). Free points are left alone.</span> |
| <Link id="m-onchanged" /><code>{"private void OnChanged()"}</code> | <span className="api-desc">Raises `Changed`. Called after any edit to points, modes or looping.</span> |
| <Link id="m-undo" /><code>{"private void Alta.Static.IInstructionResult.Undo()"}</code> | <span className="api-desc">Explicit `IInstructionResult` implementation: destroys the spline's GameObject.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BezierSpline`:

<div className="api-used-in">

[`SplineChangedHandler.BeginInvoke`](/mod/game-api/types/alta-utilities/splinechangedhandler#m-begininvoke), [`SplineChangedHandler.Invoke`](/mod/game-api/types/alta-utilities/splinechangedhandler#m-invoke), [`SplineDisplay.spline`](/mod/game-api/types/alta-utilities/splinedisplay#m-spline), [`SplineDisplay.Spline`](/mod/game-api/types/alta-utilities/splinedisplay#m-spline-2), [`SplineDisplay.SplineChanged`](/mod/game-api/types/alta-utilities/splinedisplay#m-splinechanged), [`RopePoweredElementBoard.spline`](/mod/game-api/types/global-q-r/ropepoweredelementboard#m-spline), [`ServerSelectionDisplay.spline`](/mod/game-api/types/global-s/serverselectiondisplay#m-spline), [`SkillOrbInteractionSpline.spline`](/mod/game-api/types/global-s/skillorbinteractionspline#m-spline), [`SplineParticlesPooled.Spline`](/mod/game-api/types/global-s/splineparticlespooled#m-spline), [`StatUpgradeEffect.spline`](/mod/game-api/types/global-s/statupgradeeffect#m-spline).

</div>
