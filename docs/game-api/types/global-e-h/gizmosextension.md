---
title: "GizmosExtension"
description: "Static helpers that draw shapes with Unity Gizmos, for use inside OnDrawGizmos."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GizmosExtension

A **static class** in `Root.Township`, no namespace.

Static helpers that draw shapes with Unity `Gizmos`, for use inside `OnDrawGizmos`. Each overload with a colour restores the previous gizmo colour.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawarrow" /><code>{"static void DrawArrow(Vector3 position, Vector3 direction, Color color)"}</code> | Draws a ray with a small cone at its tip. |
| <Link id="m-drawarrow-2" /><code>{"static void DrawArrow(Vector3 position, Vector3 direction)"}</code> | Draws a ray with a small cone at its tip. |
| <Link id="m-drawarrowto" /><code>{"static void DrawArrowTo(Vector3 from, Vector3 to)"}</code> | Draws a line from one point to another with a cone at the end. |
| <Link id="m-drawarrowto-2" /><code>{"static void DrawArrowTo(Vector3 from, Vector3 to, Color color)"}</code> | Draws a line from one point to another with a cone at the end. |
| <Link id="m-drawbounds" /><code>{"static void DrawBounds(Bounds bounds, Color color)"}</code> | Draws the edges of a bounds box. |
| <Link id="m-drawbounds-2" /><code>{"static void DrawBounds(Bounds bounds)"}</code> | Draws the edges of a bounds box. |
| <Link id="m-drawcapsule" /><code>{"static void DrawCapsule(Vector3 start, Vector3 end, Color color, float radius = 1)"}</code> | Draws a wire capsule between two points. |
| <Link id="m-drawcapsule-2" /><code>{"static void DrawCapsule(Vector3 start, Vector3 end, float radius = 1)"}</code> | Draws a wire capsule between two points. |
| <Link id="m-drawcircle" /><code>{"static void DrawCircle(Vector3 position, Vector3 up, Color color, float radius = 1)"}</code> | Draws a circle around a position, facing an up direction (world up by default). |
| <Link id="m-drawcircle-2" /><code>{"static void DrawCircle(Vector3 position, Color color, float radius = 1)"}</code> | Draws a circle around a position, facing an up direction (world up by default). |
| <Link id="m-drawcircle-3" /><code>{"static void DrawCircle(Vector3 position, Vector3 up, float radius = 1)"}</code> | Draws a circle around a position, facing an up direction (world up by default). |
| <Link id="m-drawcircle-4" /><code>{"static void DrawCircle(Vector3 position, float radius = 1)"}</code> | Draws a circle around a position, facing an up direction (world up by default). |
| <Link id="m-drawcone" /><code>{"static void DrawCone(Vector3 position, Vector3 direction, Color color, float angle = 45)"}</code> | Draws a cone from a position along a direction with the given half angle (world up by default). |
| <Link id="m-drawcone-2" /><code>{"static void DrawCone(Vector3 position, Vector3 direction, float angle = 45)"}</code> | Draws a cone from a position along a direction with the given half angle (world up by default). |
| <Link id="m-drawcone-3" /><code>{"static void DrawCone(Vector3 position, Color color, float angle = 45)"}</code> | Draws a cone from a position along a direction with the given half angle (world up by default). |
| <Link id="m-drawcone-4" /><code>{"static void DrawCone(Vector3 position, float angle = 45)"}</code> | Draws a cone from a position along a direction with the given half angle (world up by default). |
| <Link id="m-drawcylinder" /><code>{"static void DrawCylinder(Vector3 start, Vector3 end, Color color, float radius = 1)"}</code> | Draws a wire cylinder between two points. |
| <Link id="m-drawcylinder-2" /><code>{"static void DrawCylinder(Vector3 start, Vector3 end, float radius = 1)"}</code> | Draws a wire cylinder between two points. |
| <Link id="m-drawlocalcube" /><code>{"static void DrawLocalCube(Transform transform, Vector3 size, Color color, Vector3 center = null)"}</code> | Draws a box in a transform's or matrix's local space. |
| <Link id="m-drawlocalcube-2" /><code>{"static void DrawLocalCube(Transform transform, Vector3 size, Vector3 center = null)"}</code> | Draws a box in a transform's or matrix's local space. |
| <Link id="m-drawlocalcube-3" /><code>{"static void DrawLocalCube(Matrix4x4 space, Vector3 size, Color color, Vector3 center = null)"}</code> | Draws a box in a transform's or matrix's local space. |
| <Link id="m-drawlocalcube-4" /><code>{"static void DrawLocalCube(Matrix4x4 space, Vector3 size, Vector3 center = null)"}</code> | Draws a box in a transform's or matrix's local space. |
| <Link id="m-drawpoint" /><code>{"static void DrawPoint(Vector3 position, Color color, float scale = 1)"}</code> | Draws three crossed lines at a position. |
| <Link id="m-drawpoint-2" /><code>{"static void DrawPoint(Vector3 position, float scale = 1)"}</code> | Draws three crossed lines at a position. |
