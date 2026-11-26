---
title: "SplineChangedHandler"
description: "Callback for BezierSpline.Changed, passed the spline that changed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplineChangedHandler

A **delegate** in `Root.Township`, `Alta.Bezier`.

Callback for `BezierSpline.Changed`, passed the spline that changed. `SplineDisplay` uses it to redraw.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplineChangedHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `SplineChangedHandler`:

[`BezierSpline.Changed`](/game-api/types/alta-utilities/bezierspline#m-changed).
