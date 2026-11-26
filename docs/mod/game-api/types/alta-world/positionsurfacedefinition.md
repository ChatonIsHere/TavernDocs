---
title: "PositionSurfaceDefinition"
description: "Base for components that pick random points (with normals) on a shape, used as spawn positions and population spawn points."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionSurfaceDefinition

An **abstract class** in `Root.Township`, `Alta.Chunks`.

Base for components that pick random points (with normals) on a shape, used as spawn positions and population spawn points. Subclasses define the shape.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`, [`ISpawnPositions`](/mod/game-api/types/global-i-l/ispawnpositions), [`IPointNormalEvaluator`](/mod/game-api/types/alta-world-generation/ipointnormalevaluator)
- **Derived types** [`CylindricalBoundsSurface`](/mod/game-api/types/alta-world/cylindricalboundssurface), [`DirectionalBoundsSurface`](/mod/game-api/types/alta-world/directionalboundssurface), [`SphericalSurface`](/mod/game-api/types/alta-world/sphericalsurface)
- **Nested types** [`RotationMode`](/mod/game-api/types/alta-world/positionsurfacedefinition-rotationmode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PositionSurfaceDefinition()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"protected "}<Link to="/mod/game-api/types/global-p/positionsurfacedefinitionsettings">{"PositionSurfaceDefinitionSettings"}</Link>{" settings"}</code> | <span className="api-desc">The global `PositionSurfaceDefinitionSettings`, set in `Awake`.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rotationmode" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/positionsurfacedefinition-rotationmode">{"PositionSurfaceDefinition.RotationMode"}</Link>{" rotationMode"}</code> | <span className="api-desc">How spawned objects are turned: up or forward along the surface normal with random spin, flat facing the normal, or none.</span> |
| <Link id="m-seed" /><code>{"private int seed"}</code> | <span className="api-desc">Random seed picked on `Awake`, so each index gives the same point every time.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-failed" /><code>{"static bool Failed(out Vector3 position, out Vector3 normal)"}</code> | <span className="api-desc">Helper that zeroes the outputs and returns false, for a `GetPosition` that found nothing.</span> |
| <Link id="m-getpoint" /><code><Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? GetPoint()"}</code> | <span className="api-desc">A random point with its normal, or null if `GetPosition` failed.</span> |
| <Link id="m-getposition" /><code>{"abstract bool GetPosition(out Vector3 position, out Vector3 normal)"}</code> | <span className="api-desc">Picks a random position and normal on the shape. False if none was found.</span> |
| <Link id="m-setsize" /><code>{"abstract void SetSize(float size)"}</code> | <span className="api-desc">Resizes the shape.</span> |
| <Link id="m-drawarrow" /><code>{"protected void DrawArrow(Vector3 from, Vector3 to, Vector3 normal)"}</code> | <span className="api-desc">Editor: draws an arrow gizmo, raycast onto the surface layers (blue on a hit, red on a miss).</span> |
| <Link id="m-previewarrows" /><code>{"protected bool PreviewArrows()"}</code> | <span className="api-desc">Always false in this build.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Loads the global surface settings and picks a random seed.</span> |
| <Link id="m-getspawnposition" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" ISpawnPositions.GetSpawnPosition(int index)"}</code> | <span className="api-desc">Gets spawn point `index` with a seeded random state, turned by `rotationMode`. Returns null if no position was found.</span> |

</details>
