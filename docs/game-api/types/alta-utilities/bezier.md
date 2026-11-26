---
title: "Bezier"
description: "Math for quadratic (3 point) and cubic (4 point) Bezier curves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Bezier

A **static class** in `Root.Township`, `Alta.Bezier`.

Math for quadratic (3 point) and cubic (4 point) Bezier curves.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfirstderivative" /><code>{"static Vector3 GetFirstDerivative(Vector3 p0, Vector3 p1, Vector3 p2, float t)"}</code> | Returns the curve's direction (tangent, not normalised) at `t`. |
| <Link id="m-getfirstderivative-2" /><code>{"static Vector3 GetFirstDerivative(Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3, float t)"}</code> | Returns the curve's direction (tangent, not normalised) at `t`. |
| <Link id="m-getpoint" /><code>{"static Vector3 GetPoint(Vector3 p0, Vector3 p1, Vector3 p2, float t)"}</code> | Returns the point on the curve at `t`, clamped to 0 to 1. |
| <Link id="m-getpoint-2" /><code>{"static Vector3 GetPoint(Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3, float t)"}</code> | Returns the point on the curve at `t`, clamped to 0 to 1. |
