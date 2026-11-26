---
title: "GizmosExtension"
description: "Static helpers that draw shapes with Unity Gizmos, for use inside OnDrawGizmos."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GizmosExtension

A **static class** in `Root.Township`, the global namespace.

Static helpers that draw shapes with Unity `Gizmos`, for use inside `OnDrawGizmos`. Each overload with a colour restores the previous gizmo colour.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawarrow" /><code>{"static void DrawArrow(Vector3 position, Vector3 direction, Color color)"}</code> | <span className="api-desc">Draws a ray with a small cone at its tip.</span> |
| <Link id="m-drawarrow-2" /><code>{"static void DrawArrow(Vector3 position, Vector3 direction)"}</code> | <span className="api-desc">Draws a ray with a small cone at its tip.</span> |
| <Link id="m-drawarrowto" /><code>{"static void DrawArrowTo(Vector3 from, Vector3 to)"}</code> | <span className="api-desc">Draws a line from one point to another with a cone at the end.</span> |
| <Link id="m-drawarrowto-2" /><code>{"static void DrawArrowTo(Vector3 from, Vector3 to, Color color)"}</code> | <span className="api-desc">Draws a line from one point to another with a cone at the end.</span> |
| <Link id="m-drawbounds" /><code>{"static void DrawBounds(Bounds bounds, Color color)"}</code> | <span className="api-desc">Draws the edges of a bounds box.</span> |
| <Link id="m-drawbounds-2" /><code>{"static void DrawBounds(Bounds bounds)"}</code> | <span className="api-desc">Draws the edges of a bounds box.</span> |
| <Link id="m-drawcapsule" /><code>{"static void DrawCapsule(Vector3 start, Vector3 end, Color color, float radius = 1)"}</code> | <span className="api-desc">Draws a wire capsule between two points.</span> |
| <Link id="m-drawcapsule-2" /><code>{"static void DrawCapsule(Vector3 start, Vector3 end, float radius = 1)"}</code> | <span className="api-desc">Draws a wire capsule between two points.</span> |
| <Link id="m-drawcircle" /><code>{"static void DrawCircle(Vector3 position, Vector3 up, Color color, float radius = 1)"}</code> | <span className="api-desc">Draws a circle around a position, facing an up direction (world up by default).</span> |
| <Link id="m-drawcircle-2" /><code>{"static void DrawCircle(Vector3 position, Color color, float radius = 1)"}</code> | <span className="api-desc">Draws a circle around a position, facing an up direction (world up by default).</span> |
| <Link id="m-drawcircle-3" /><code>{"static void DrawCircle(Vector3 position, Vector3 up, float radius = 1)"}</code> | <span className="api-desc">Draws a circle around a position, facing an up direction (world up by default).</span> |
| <Link id="m-drawcircle-4" /><code>{"static void DrawCircle(Vector3 position, float radius = 1)"}</code> | <span className="api-desc">Draws a circle around a position, facing an up direction (world up by default).</span> |
| <Link id="m-drawcone" /><code>{"static void DrawCone(Vector3 position, Vector3 direction, Color color, float angle = 45)"}</code> | <span className="api-desc">Draws a cone from a position along a direction with the given half angle (world up by default).</span> |
| <Link id="m-drawcone-2" /><code>{"static void DrawCone(Vector3 position, Vector3 direction, float angle = 45)"}</code> | <span className="api-desc">Draws a cone from a position along a direction with the given half angle (world up by default).</span> |
| <Link id="m-drawcone-3" /><code>{"static void DrawCone(Vector3 position, Color color, float angle = 45)"}</code> | <span className="api-desc">Draws a cone from a position along a direction with the given half angle (world up by default).</span> |
| <Link id="m-drawcone-4" /><code>{"static void DrawCone(Vector3 position, float angle = 45)"}</code> | <span className="api-desc">Draws a cone from a position along a direction with the given half angle (world up by default).</span> |
| <Link id="m-drawcylinder" /><code>{"static void DrawCylinder(Vector3 start, Vector3 end, Color color, float radius = 1)"}</code> | <span className="api-desc">Draws a wire cylinder between two points.</span> |
| <Link id="m-drawcylinder-2" /><code>{"static void DrawCylinder(Vector3 start, Vector3 end, float radius = 1)"}</code> | <span className="api-desc">Draws a wire cylinder between two points.</span> |
| <Link id="m-drawlocalcube" /><code>{"static void DrawLocalCube(Transform transform, Vector3 size, Color color, Vector3 center = null)"}</code> | <span className="api-desc">Draws a box in a transform's or matrix's local space.</span> |
| <Link id="m-drawlocalcube-2" /><code>{"static void DrawLocalCube(Transform transform, Vector3 size, Vector3 center = null)"}</code> | <span className="api-desc">Draws a box in a transform's or matrix's local space.</span> |
| <Link id="m-drawlocalcube-3" /><code>{"static void DrawLocalCube(Matrix4x4 space, Vector3 size, Color color, Vector3 center = null)"}</code> | <span className="api-desc">Draws a box in a transform's or matrix's local space.</span> |
| <Link id="m-drawlocalcube-4" /><code>{"static void DrawLocalCube(Matrix4x4 space, Vector3 size, Vector3 center = null)"}</code> | <span className="api-desc">Draws a box in a transform's or matrix's local space.</span> |
| <Link id="m-drawpoint" /><code>{"static void DrawPoint(Vector3 position, Color color, float scale = 1)"}</code> | <span className="api-desc">Draws three crossed lines at a position.</span> |
| <Link id="m-drawpoint-2" /><code>{"static void DrawPoint(Vector3 position, float scale = 1)"}</code> | <span className="api-desc">Draws three crossed lines at a position.</span> |
