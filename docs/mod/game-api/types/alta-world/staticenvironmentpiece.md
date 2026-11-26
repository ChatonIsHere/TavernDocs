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
| <Link id="m-ctor" /><code>{"StaticEnvironmentPiece()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-btnchild" /><code>{"private bool btnChild"}</code> | <span className="api-desc">Inspector button. Holds no data.</span> |
| <Link id="m-material" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/surfacematerial">{"SurfaceMaterial"}</Link>{" material"}</code> | <span className="api-desc">Backing field for `Material`.</span> |
| <Link id="m-piecemap" /><code>{"private static Dictionary<uint, "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{"> pieceMap"}</code> | <span className="api-desc">Static cache of pieces by index, filled by `Load` and `Spawn`.</span> |
| <Link id="m-pooledparent" /><code>{"private static Transform pooledParent"}</code> | <span className="api-desc">Shared do-not-destroy transform that new instances are created under.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" prefab"}</code> | <span className="api-desc">Backing field for `Prefab`.</span> |
| <Link id="m-stack" /><code>{"private Stack<"}<Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{"> stack"}</code> | <span className="api-desc">Pool of released instances waiting to be reused.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material-2" /><code><Link to="/mod/game-api/types/alta-utilities/surfacematerial">{"SurfaceMaterial"}</Link>{" Material { get; }"}</code> | <span className="api-desc">The piece's surface material, for impacts and sounds.</span> |
| <Link id="m-prefab-2" /><code><Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" Prefab { get; }"}</code> | <span className="api-desc">The instance prefab spawned for this piece.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" Load(uint id)"}</code> | <span className="api-desc">Gets the piece with this ID, loading it from `Resources/StaticEnvironmentPiece` the first time.</span> |
| <Link id="m-setprefab" /><code>{"void SetPrefab("}<Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" prefab)"}</code> | <span className="api-desc">Editor: sets the prefab.</span> |
| <Link id="m-spawn" /><code><Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" Spawn(Vector3 position, Quaternion rotation, Vector3 scale)"}</code> | <span className="api-desc">Places an instance at the given position, rotation and scale, reusing a released one if there is one.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"private void Alta.Static.IStaticEnvironmentPiecePool.Release("}<Link to="/mod/game-api/types/alta-world/staticenvironmentpieceinstance">{"StaticEnvironmentPieceInstance"}</Link>{" instance)"}</code> | <span className="api-desc">Explicit `IStaticEnvironmentPiecePool` method: returns an instance to this piece's pool for reuse by `Spawn`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `StaticEnvironmentPiece`:

<div className="api-used-in">

[`BasicObjectDisplay.unnetworkedPrefabs`](/mod/game-api/types/alta-world-generation/basicobjectdisplay#m-unnetworkedprefabs), [`ForestGCoreInstruction.content`](/mod/game-api/types/alta-world-generation/forestgcoreinstruction#m-content), [`ForestGCoreInstruction.ForestGCoreInstruction`](/mod/game-api/types/alta-world-generation/forestgcoreinstruction#m-ctor-2), [`RiverGCoreInstruction.content`](/mod/game-api/types/alta-world-generation/rivergcoreinstruction#m-content), [`SplineInstruction.content`](/mod/game-api/types/alta-world-generation/splineinstruction#m-content), [`SplineInstruction.SplineInstruction`](/mod/game-api/types/alta-world-generation/splineinstruction#m-ctor-2), [`SpawnInstruction.content`](/mod/game-api/types/alta-world/spawninstruction#m-content), [`SpawnInstruction.SpawnInstruction`](/mod/game-api/types/alta-world/spawninstruction#m-ctor-2), [`StaticEnvironmentPieceInstance.CreatePiece`](/mod/game-api/types/alta-world/staticenvironmentpieceinstance#m-createpiece), [`StaticEnvironmentPieceInstance.Initialize`](/mod/game-api/types/alta-world/staticenvironmentpieceinstance#m-initialize), [`StaticEnvironmentPieceInstance.piece`](/mod/game-api/types/alta-world/staticenvironmentpieceinstance#m-piece).

</div>
