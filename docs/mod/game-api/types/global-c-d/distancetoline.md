---
title: "DistanceToLine"
description: "Maths helpers for the distance from a point to a line segment, in 3D or 2D."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DistanceToLine

A **static class** in `Root.Township`, the global namespace.

Maths helpers for the distance from a point to a line segment, in 3D or 2D.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"static float Evaluate(Vector3 point, Vector3 start, Vector3 end)"}</code> | <span className="api-desc">Distance from the point to the segment; can also give how far along it the closest point is and the point itself.</span> |
| <Link id="m-evaluate-2" /><code>{"static float Evaluate(Vector3 point, Vector3 start, Vector3 end, out float lineProgress)"}</code> | <span className="api-desc">Distance from the point to the segment; can also give how far along it the closest point is and the point itself.</span> |
| <Link id="m-evaluate-3" /><code>{"static float Evaluate(Vector3 point, Vector3 start, Vector3 end, out float lineProgress, out Vector3 closest)"}</code> | <span className="api-desc">Distance from the point to the segment; can also give how far along it the closest point is and the point itself.</span> |
| <Link id="m-evaluate-4" /><code>{"static float Evaluate(Vector2 point, Vector2 start, Vector2 end)"}</code> | <span className="api-desc">Distance from the point to the segment; can also give how far along it the closest point is and the point itself.</span> |
| <Link id="m-evaluate-5" /><code>{"static float Evaluate(Vector2 point, Vector2 start, Vector2 end, out float lineProgress)"}</code> | <span className="api-desc">Distance from the point to the segment; can also give how far along it the closest point is and the point itself.</span> |
| <Link id="m-evaluate-6" /><code>{"static float Evaluate(Vector2 point, Vector2 start, Vector2 end, out float lineProgress, out Vector2 closest)"}</code> | <span className="api-desc">Distance from the point to the segment; can also give how far along it the closest point is and the point itself.</span> |
| <Link id="m-evaluatesquared" /><code>{"static float EvaluateSquared(Vector3 point, Vector3 start, Vector3 end)"}</code> | <span className="api-desc">Same as `Evaluate` but returns the squared distance.</span> |
| <Link id="m-evaluatesquared-2" /><code>{"static float EvaluateSquared(Vector3 point, Vector3 start, Vector3 end, out float lineProgress)"}</code> | <span className="api-desc">Same as `Evaluate` but returns the squared distance.</span> |
| <Link id="m-evaluatesquared-3" /><code>{"static float EvaluateSquared(Vector3 point, Vector3 start, Vector3 end, out float lineProgress, out Vector3 closest)"}</code> | <span className="api-desc">Same as `Evaluate` but returns the squared distance.</span> |
| <Link id="m-evaluatesquared-4" /><code>{"static float EvaluateSquared(Vector2 point, Vector2 start, Vector2 end)"}</code> | <span className="api-desc">Same as `Evaluate` but returns the squared distance.</span> |
| <Link id="m-evaluatesquared-5" /><code>{"static float EvaluateSquared(Vector2 point, Vector2 start, Vector2 end, out float lineProgress)"}</code> | <span className="api-desc">Same as `Evaluate` but returns the squared distance.</span> |
| <Link id="m-evaluatesquared-6" /><code>{"static float EvaluateSquared(Vector2 point, Vector2 start, Vector2 end, out float lineProgress, out Vector2 closest)"}</code> | <span className="api-desc">Same as `Evaluate` but returns the squared distance.</span> |
