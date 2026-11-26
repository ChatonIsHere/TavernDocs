---
title: "DebugExtension"
description: "Static helpers that draw debug shapes with Debug.DrawRay and Debug.DrawLine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugExtension

A **static class** in `Root.Township`, the global namespace.

Static helpers that draw debug shapes with `Debug.DrawRay` and `Debug.DrawLine`. These only show in the Unity editor (scene view, or game view with gizmos on).

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-debugarrow" /><code>{"static void DebugArrow(Vector3 position, Vector3 direction, Color color, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a ray with a small cone at its tip.</span> |
| <Link id="m-debugarrow-2" /><code>{"static void DebugArrow(Vector3 position, Vector3 direction, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a ray with a small cone at its tip.</span> |
| <Link id="m-debugbounds" /><code>{"static void DebugBounds(Bounds bounds, Color color, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws the edges of a bounds box.</span> |
| <Link id="m-debugbounds-2" /><code>{"static void DebugBounds(Bounds bounds, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws the edges of a bounds box.</span> |
| <Link id="m-debugcapsule" /><code>{"static void DebugCapsule(Vector3 start, Vector3 end, Color color, float radius = 1, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a wire capsule between two points.</span> |
| <Link id="m-debugcapsule-2" /><code>{"static void DebugCapsule(Vector3 start, Vector3 end, float radius = 1, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a wire capsule between two points.</span> |
| <Link id="m-debugcircle" /><code>{"static void DebugCircle(Vector3 position, Vector3 up, Color color, float radius = 1, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a circle around a position, facing an up direction (world up by default).</span> |
| <Link id="m-debugcircle-2" /><code>{"static void DebugCircle(Vector3 position, Color color, float radius = 1, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a circle around a position, facing an up direction (world up by default).</span> |
| <Link id="m-debugcircle-3" /><code>{"static void DebugCircle(Vector3 position, Vector3 up, float radius = 1, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a circle around a position, facing an up direction (world up by default).</span> |
| <Link id="m-debugcircle-4" /><code>{"static void DebugCircle(Vector3 position, float radius = 1, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a circle around a position, facing an up direction (world up by default).</span> |
| <Link id="m-debugcone" /><code>{"static void DebugCone(Vector3 position, Vector3 direction, Color color, float angle = 45, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a cone from a position along a direction with the given half angle (world up by default).</span> |
| <Link id="m-debugcone-2" /><code>{"static void DebugCone(Vector3 position, Vector3 direction, float angle = 45, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a cone from a position along a direction with the given half angle (world up by default).</span> |
| <Link id="m-debugcone-3" /><code>{"static void DebugCone(Vector3 position, Color color, float angle = 45, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a cone from a position along a direction with the given half angle (world up by default).</span> |
| <Link id="m-debugcone-4" /><code>{"static void DebugCone(Vector3 position, float angle = 45, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a cone from a position along a direction with the given half angle (world up by default).</span> |
| <Link id="m-debugcylinder" /><code>{"static void DebugCylinder(Vector3 start, Vector3 end, Color color, float radius = 1, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a wire cylinder between two points.</span> |
| <Link id="m-debugcylinder-2" /><code>{"static void DebugCylinder(Vector3 start, Vector3 end, float radius = 1, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a wire cylinder between two points.</span> |
| <Link id="m-debuglocalcube" /><code>{"static void DebugLocalCube(Transform transform, Vector3 size, Color color, Vector3 center = null, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a box in a transform's or matrix's local space.</span> |
| <Link id="m-debuglocalcube-2" /><code>{"static void DebugLocalCube(Transform transform, Vector3 size, Vector3 center = null, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a box in a transform's or matrix's local space.</span> |
| <Link id="m-debuglocalcube-3" /><code>{"static void DebugLocalCube(Matrix4x4 space, Vector3 size, Color color, Vector3 center = null, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a box in a transform's or matrix's local space.</span> |
| <Link id="m-debuglocalcube-4" /><code>{"static void DebugLocalCube(Matrix4x4 space, Vector3 size, Vector3 center = null, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a box in a transform's or matrix's local space.</span> |
| <Link id="m-debugpoint" /><code>{"static void DebugPoint(Vector3 position, Color color, float scale = 1, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws three crossed lines at a position.</span> |
| <Link id="m-debugpoint-2" /><code>{"static void DebugPoint(Vector3 position, float scale = 1, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws three crossed lines at a position.</span> |
| <Link id="m-debugwiresphere" /><code>{"static void DebugWireSphere(Vector3 position, Color color, float radius = 1, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a wire sphere from three circles.</span> |
| <Link id="m-debugwiresphere-2" /><code>{"static void DebugWireSphere(Vector3 position, float radius = 1, float duration = 0, bool depthTest = true)"}</code> | <span className="api-desc">Draws a wire sphere from three circles.</span> |
