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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SplineChangedHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-utilities/bezierspline">{"BezierSpline"}</Link>{" spline)"}</code> |

## Used in

Members of other types that take, return or hold a `SplineChangedHandler`:

[`BezierSpline.Changed`](/game-api/types/alta-utilities/bezierspline#m-changed).
