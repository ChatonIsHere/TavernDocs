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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`IndexedScriptableObject`](/mod/game-api/types/alta-world/indexedscriptableobject), [`ICollisionStandard`](/mod/game-api/types/alta-utilities/icollisionstandard), [`IStaticEnvironmentPiecePool`](/mod/game-api/types/alta-world/istaticenvironmentpiecepool)
- **Derived types** [`StaticEnvironmentPiece.Create`](/mod/game-api/types/alta-world/staticenvironmentpiece-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world/staticenvironmentpiece-create)
- **Documented in** [Static objects](/mod/game-api/world/static-objects)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticEnvironmentPiece()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnchild" /><code>{"private bool btnChild"}</code> | Inspector button. Holds no data. |
| <Link id="m-material" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/surfacematerial">{"SurfaceMaterial"}</Link>{" material"}</code> | Backing field for `Material`. |
| <Link id="m-piecemap" /><code>{"private static Dictionary<uint, "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{"> pieceMap"}</code> | Static cache of pieces by index, filled by `Load` and `Spawn`. |
| <Link id="m-pooledparent" /><code>{"private static Transform pooledParent"}</code> | Shared do-not-destroy transform that new instances are created under. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" prefab"}</code> | Backing field for `Prefab`. |
| <Link id="m-stack" /><code>{"private Stack<"}<Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{"> stack"}</code> | Pool of released instances waiting to be reused. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material-2" /><code><Link to="/mod/game-api/types/alta-utilities/surfacematerial">{"SurfaceMaterial"}</Link>{" Material { get; }"}</code> | The piece's surface material, for impacts and sounds. |
| <Link id="m-prefab-2" /><code><Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" Prefab { get; }"}</code> | The instance prefab spawned for this piece. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" Load(uint id)"}</code> | Gets the piece with this ID, loading it from `Resources/StaticEnvironmentPiece` the first time. |
| <Link id="m-setprefab" /><code>{"void SetPrefab("}<Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" prefab)"}</code> | Editor: sets the prefab. |
| <Link id="m-spawn" /><code><Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" Spawn(Vector3 position, Quaternion rotation, Vector3 scale)"}</code> | Places an instance at the given position, rotation and scale, reusing a released one if there is one. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"private void Alta.Static.IStaticEnvironmentPiecePool.Release("}<Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" instance)"}</code> | Explicit `IStaticEnvironmentPiecePool` method: returns an instance to this piece's pool for reuse by `Spawn`. |

</details>

## Used in

Members of other types that take, return or hold a `StaticEnvironmentPiece`:

[`BasicObjectDisplay.unnetworkedPrefabs`](/mod/game-api/types/alta-world-generation/basicobjectdisplay#m-unnetworkedprefabs), [`ForestGCoreInstruction.content`](/mod/game-api/types/alta-world-generation/forestgcoreinstruction#m-content), [`ForestGCoreInstruction.ForestGCoreInstruction`](/mod/game-api/types/alta-world-generation/forestgcoreinstruction#m-ctor-2), [`RiverGCoreInstruction.content`](/mod/game-api/types/alta-world-generation/rivergcoreinstruction#m-content), [`SplineInstruction.content`](/mod/game-api/types/alta-world-generation/splineinstruction#m-content), [`SplineInstruction.SplineInstruction`](/mod/game-api/types/alta-world-generation/splineinstruction#m-ctor-2), [`SpawnInstruction.content`](/mod/game-api/types/alta-world/spawninstruction#m-content), [`SpawnInstruction.SpawnInstruction`](/mod/game-api/types/alta-world/spawninstruction#m-ctor-2), [`StaticEnvironmentPieceInstance.CreatePiece`](/mod/game-api/types/alta-world/staticenvironmentpieceinstance#m-createpiece), [`StaticEnvironmentPieceInstance.Initialize`](/mod/game-api/types/alta-world/staticenvironmentpieceinstance#m-initialize), [`StaticEnvironmentPieceInstance.piece`](/mod/game-api/types/alta-world/staticenvironmentpieceinstance#m-piece).
