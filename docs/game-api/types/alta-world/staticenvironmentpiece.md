---
title: "StaticEnvironmentPiece"
description: "An asset for a non-networked environment piece, with its prefab and surface material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticEnvironmentPiece

A **class** in `Root.Township`, `Alta.Static`.

An asset for a non-networked environment piece, with its prefab and surface material. Instances are pooled and spawned by ID.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`IndexedScriptableObject`](/game-api/types/alta-world/indexedscriptableobject), [`ICollisionStandard`](/game-api/types/alta-utilities/icollisionstandard), [`IStaticEnvironmentPiecePool`](/game-api/types/alta-world/istaticenvironmentpiecepool)
- **Derived types** [`StaticEnvironmentPiece.Create`](/game-api/types/alta-world/staticenvironmentpiece-create)
- **Nested types** [`Create`](/game-api/types/alta-world/staticenvironmentpiece-create)
- **Documented in** [Static objects](/game-api/world/static-objects)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StaticEnvironmentPiece()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-btnchild" /><code>{"private bool btnChild"}</code> |
| <Link id="m-material" /><code>{"private "}<Link to="/game-api/types/alta-utilities/surfacematerial">{"SurfaceMaterial"}</Link>{" material"}</code> |
| <Link id="m-piecemap" /><code>{"private static Dictionary<uint, "}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{"> pieceMap"}</code> |
| <Link id="m-pooledparent" /><code>{"private static Transform pooledParent"}</code> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" prefab"}</code> |
| <Link id="m-stack" /><code>{"private Stack<"}<Link to="/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{"> stack"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material-2" /><code><Link to="/game-api/types/alta-utilities/surfacematerial">{"SurfaceMaterial"}</Link>{" Material { get; }"}</code> | The piece's surface material, for impacts and sounds. |
| <Link id="m-prefab-2" /><code><Link to="/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" Prefab { get; }"}</code> | The instance prefab spawned for this piece. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"static "}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" Load(uint id)"}</code> | Gets the piece with this ID, loading it from `Resources/StaticEnvironmentPiece` the first time. |
| <Link id="m-setprefab" /><code>{"void SetPrefab("}<Link to="/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" prefab)"}</code> | Editor: sets the prefab. |
| <Link id="m-spawn" /><code><Link to="/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" Spawn(Vector3 position, Quaternion rotation, Vector3 scale)"}</code> | Places an instance at the given position, rotation and scale, reusing a released one if there is one. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-release" /><code>{"private void Alta.Static.IStaticEnvironmentPiecePool.Release("}<Link to="/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" instance)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `StaticEnvironmentPiece`:

[`BasicObjectDisplay.unnetworkedPrefabs`](/game-api/types/alta-world-generation/basicobjectdisplay#m-unnetworkedprefabs), [`ForestGCoreInstruction.content`](/game-api/types/alta-world-generation/forestgcoreinstruction#m-content), [`ForestGCoreInstruction.ForestGCoreInstruction`](/game-api/types/alta-world-generation/forestgcoreinstruction#m-ctor-2), [`RiverGCoreInstruction.content`](/game-api/types/alta-world-generation/rivergcoreinstruction#m-content), [`SplineInstruction.content`](/game-api/types/alta-world-generation/splineinstruction#m-content), [`SplineInstruction.SplineInstruction`](/game-api/types/alta-world-generation/splineinstruction#m-ctor-2), [`SpawnInstruction.content`](/game-api/types/alta-world/spawninstruction#m-content), [`SpawnInstruction.SpawnInstruction`](/game-api/types/alta-world/spawninstruction#m-ctor-2), [`StaticEnvironmentPieceInstance.CreatePiece`](/game-api/types/alta-world/staticenvironmentpieceinstance#m-createpiece), [`StaticEnvironmentPieceInstance.Initialize`](/game-api/types/alta-world/staticenvironmentpieceinstance#m-initialize), [`StaticEnvironmentPieceInstance.piece`](/game-api/types/alta-world/staticenvironmentpieceinstance#m-piece).
