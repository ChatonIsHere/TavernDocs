---
title: "StaticEnvironmentPiece"
description: "A ScriptableObject with an index, a surface material and a StaticEnvironmentPieceInstance prefab. Spawn(position, rotation, scale) makes one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticEnvironmentPiece

A **class** in `Root.Township`, `Alta.Static`.

A `ScriptableObject` with an index, a surface material and a `StaticEnvironmentPieceInstance` prefab. `Spawn(position, rotation, scale)` makes one.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`IndexedScriptableObject`](/game-api/types/alta-world/indexedscriptableobject), [`ICollisionStandard`](/game-api/types/alta-utilities/icollisionstandard), [`IStaticEnvironmentPiecePool`](/game-api/types/alta-world/istaticenvironmentpiecepool)
- **Derived types** [`StaticEnvironmentPiece.Create`](/game-api/types/alta-world/staticenvironmentpiece-create)
- **Nested types** [`Create`](/game-api/types/alta-world/staticenvironmentpiece-create)
- **Documented in** [Static objects](/game-api/world/static-objects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticEnvironmentPiece()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-btnchild" /><code>{"private bool btnChild"}</code> |  |
| <Link id="m-material" /><code>{"private "}<Link to="/game-api/types/alta-utilities/surfacematerial">{"SurfaceMaterial"}</Link>{" material"}</code> |  |
| <Link id="m-piecemap" /><code>{"private static Dictionary<uint, "}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{"> pieceMap"}</code> |  |
| <Link id="m-pooledparent" /><code>{"private static Transform pooledParent"}</code> |  |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" prefab"}</code> |  |
| <Link id="m-stack" /><code>{"private Stack<"}<Link to="/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{"> stack"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material-2" /><code><Link to="/game-api/types/alta-utilities/surfacematerial">{"SurfaceMaterial"}</Link>{" Material { get; }"}</code> |  |
| <Link id="m-prefab-2" /><code><Link to="/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" Prefab { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"static "}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" Load(uint id)"}</code> |  |
| <Link id="m-setprefab" /><code>{"void SetPrefab("}<Link to="/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" prefab)"}</code> |  |
| <Link id="m-spawn" /><code><Link to="/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" Spawn(Vector3 position, Quaternion rotation, Vector3 scale)"}</code> |  |
| <Link id="m-release" /><code>{"private void Alta.Static.IStaticEnvironmentPiecePool.Release("}<Link to="/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" instance)"}</code> |  |

## Used in

Members of other types that take, return or hold a `StaticEnvironmentPiece`:

[`BasicObjectDisplay.unnetworkedPrefabs`](/game-api/types/alta-world-generation/basicobjectdisplay#m-unnetworkedprefabs), [`ForestGCoreInstruction.content`](/game-api/types/alta-world-generation/forestgcoreinstruction#m-content), [`ForestGCoreInstruction.ForestGCoreInstruction`](/game-api/types/alta-world-generation/forestgcoreinstruction#m-ctor-2), [`RiverGCoreInstruction.content`](/game-api/types/alta-world-generation/rivergcoreinstruction#m-content), [`SplineInstruction.content`](/game-api/types/alta-world-generation/splineinstruction#m-content), [`SplineInstruction.SplineInstruction`](/game-api/types/alta-world-generation/splineinstruction#m-ctor-2), [`SpawnInstruction.content`](/game-api/types/alta-world/spawninstruction#m-content), [`SpawnInstruction.SpawnInstruction`](/game-api/types/alta-world/spawninstruction#m-ctor-2), [`StaticEnvironmentPieceInstance.CreatePiece`](/game-api/types/alta-world/staticenvironmentpieceinstance#m-createpiece), [`StaticEnvironmentPieceInstance.Initialize`](/game-api/types/alta-world/staticenvironmentpieceinstance#m-initialize), [`StaticEnvironmentPieceInstance.piece`](/game-api/types/alta-world/staticenvironmentpieceinstance#m-piece).
