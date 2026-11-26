---
title: "WorldSpaceTriangle"
description: "Three world positions copied from a HandTriangle's transforms, that can be moved or transformed as one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WorldSpaceTriangle

A **struct** in `Root.Township`, the global namespace.

Three world positions copied from a `HandTriangle`'s transforms, that can be moved or transformed as one.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WorldSpaceTriangle("}<Link to="/mod/game-api/types/global-e-h/handtriangle">{"HandTriangle"}</Link>{" handTriangle)"}</code> | Creates a `WorldSpaceTriangle` from `handTriangle`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"Vector3 A { get; private set; }"}</code> | First corner. |
| <Link id="m-b" /><code>{"Vector3 B { get; private set; }"}</code> | Second corner. |
| <Link id="m-c" /><code>{"Vector3 C { get; private set; }"}</code> | Third corner. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-convert" /><code>{"void Convert(Matrix4x4 conversion)"}</code> | Transforms all three corners by a matrix. |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" op_Addition("}<Link to="/mod/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" triangle, Vector3 offset)"}</code> | Returns the triangle moved by an offset. |
| <Link id="m-op-subtraction" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" op_Subtraction("}<Link to="/mod/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" triangle, Vector3 offset)"}</code> | Returns the triangle moved back by an offset. |

## Used in

Members of other types that take, return or hold a `WorldSpaceTriangle`:

[`AnalyticalButton.CheckIntersection`](/mod/game-api/types/global-a-b/analyticalbutton#m-checkintersection), [`AnalyticalButton.lastLeftTriangle`](/mod/game-api/types/global-a-b/analyticalbutton#m-lastlefttriangle), [`AnalyticalButton.lastRightTriangle`](/mod/game-api/types/global-a-b/analyticalbutton#m-lastrighttriangle), [`AnalyticalButton.TestVector`](/mod/game-api/types/global-a-b/analyticalbutton#m-testvector), [`AnalyticalButton.UpdateWithTriangle`](/mod/game-api/types/global-a-b/analyticalbutton#m-updatewithtriangle), [`FingerTipSettings.GetTriangle`](/mod/game-api/types/global-e-h/fingertipsettings#m-gettriangle).
