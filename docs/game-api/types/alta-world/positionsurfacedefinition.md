---
title: "PositionSurfaceDefinition"
description: "abstract class PositionSurfaceDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionSurfaceDefinition

An **abstract class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`, [`ISpawnPositions`](/game-api/types/global-i-l/ispawnpositions), [`IPointNormalEvaluator`](/game-api/types/alta-world-generation/ipointnormalevaluator)
- **Derived types** [`CylindricalBoundsSurface`](/game-api/types/alta-world/cylindricalboundssurface), [`DirectionalBoundsSurface`](/game-api/types/alta-world/directionalboundssurface), [`SphericalSurface`](/game-api/types/alta-world/sphericalsurface)
- **Nested types** [`RotationMode`](/game-api/types/alta-world/positionsurfacedefinition-rotationmode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PositionSurfaceDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-rotationmode" /><code>{"private "}<Link to="/game-api/types/alta-world/positionsurfacedefinition-rotationmode">{"PositionSurfaceDefinition.RotationMode"}</Link>{" rotationMode"}</code> |  |
| <Link id="m-seed" /><code>{"private int seed"}</code> |  |
| <Link id="m-settings" /><code>{"protected "}<Link to="/game-api/types/global-p/positionsurfacedefinitionsettings">{"PositionSurfaceDefinitionSettings"}</Link>{" settings"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-failed" /><code>{"static bool Failed(out Vector3 position, out Vector3 normal)"}</code> |  |
| <Link id="m-getpoint" /><code><Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? GetPoint()"}</code> |  |
| <Link id="m-getposition" /><code>{"abstract bool GetPosition(out Vector3 position, out Vector3 normal)"}</code> |  |
| <Link id="m-setsize" /><code>{"abstract void SetSize(float size)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-drawarrow" /><code>{"protected void DrawArrow(Vector3 from, Vector3 to, Vector3 normal)"}</code> |  |
| <Link id="m-getspawnposition" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" ISpawnPositions.GetSpawnPosition(int index)"}</code> |  |
| <Link id="m-previewarrows" /><code>{"protected bool PreviewArrows()"}</code> |  |
