---
title: "StaticEnvironmentPieceInstance"
description: "A pooled copy of a static environment piece (rock, plant and so on) placed by world generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticEnvironmentPieceInstance

A **class** in `Root.Township`, `Alta.Static`.

A pooled copy of a static environment piece (rock, plant and so on) placed by world generation. It's the result of a spawn instruction, so undoing the instruction sends it back to the pool.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`, [`ICollisionStandard`](/mod/game-api/types/alta-utilities/icollisionstandard), [`IInstructionResult`](/mod/game-api/types/alta-world/iinstructionresult), [`IDestroyOnBake`](/mod/game-api/types/global-i-l/idestroyonbake)
- **Derived types** [`GenerationCore`](/mod/game-api/types/global-e-h/generationcore)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticEnvironmentPieceInstance()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gameobject" /><code>{"private GameObject gameObject"}</code> | <span className="api-desc">Cached `GameObject`, set in `Initialize` so later calls skip the Unity property.</span> |
| <Link id="m-piece" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" piece"}</code> | <span className="api-desc">The `StaticEnvironmentPiece` definition this instance came from; `Release` returns the instance to its pool.</span> |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | <span className="api-desc">Cached `Transform`, set in `Initialize` and used by `MoveAndEnable` and `SetScale`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code><Link to="/mod/game-api/types/alta-utilities/surfacematerial">{"SurfaceMaterial"}</Link>{" Material { get; }"}</code> | <span className="api-desc">Surface material of the piece, for sounds and effects.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-released" /><code>{"event Action Released"}</code> | <span className="api-desc">Event declared for when the instance is released; not raised in this class.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpiece" /><code><Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" CreatePiece()"}</code> | <span className="api-desc">Returns the piece definition, logging an error if it's missing.</span> |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" piece)"}</code> | <span className="api-desc">Binds the instance to its piece definition.</span> |
| <Link id="m-moveandenable" /><code>{"void MoveAndEnable(Vector3 position, Quaternion rotation, Vector3 scale)"}</code> | <span className="api-desc">Places, scales and turns on the instance.</span> |
| <Link id="m-release" /><code>{"virtual void Release()"}</code> | <span className="api-desc">Turns the instance off and returns it to the piece's pool.</span> |
| <Link id="m-setscale" /><code>{"void SetScale(Vector3 scale)"}</code> | <span className="api-desc">Sets the instance's scale.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Editor hook. Empty here.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-undo" /><code>{"private void Alta.Static.IInstructionResult.Undo()"}</code> | <span className="api-desc">Explicit `IInstructionResult` implementation: undoing the placement just calls `Release`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `StaticEnvironmentPieceInstance`:

<div className="api-used-in">

[`BasicObjectDisplay.staticPieces`](/mod/game-api/types/alta-world-generation/basicobjectdisplay#m-staticpieces), [`GameObjectDistribution.MigrateToStaticEnvironmentPiece`](/mod/game-api/types/alta-world-generation/gameobjectdistribution#m-migratetostaticenvironmentpiece), [`ForestBridges.Option.piece`](/mod/game-api/types/alta-world-generation/forestbridges-option#m-piece), [`IStaticEnvironmentPiecePool.Release`](/mod/game-api/types/alta-world/istaticenvironmentpiecepool#m-release), [`StaticEnvironmentPiece.prefab`](/mod/game-api/types/alta-world/staticenvironmentpiece#m-prefab), [`StaticEnvironmentPiece.Prefab`](/mod/game-api/types/alta-world/staticenvironmentpiece#m-prefab-2), [`StaticEnvironmentPiece.Release`](/mod/game-api/types/alta-world/staticenvironmentpiece#m-release), [`StaticEnvironmentPiece.SetPrefab`](/mod/game-api/types/alta-world/staticenvironmentpiece#m-setprefab), [`StaticEnvironmentPiece.Spawn`](/mod/game-api/types/alta-world/staticenvironmentpiece#m-spawn), [`StaticEnvironmentPiece.stack`](/mod/game-api/types/alta-world/staticenvironmentpiece#m-stack), [`SetPrefabModifier.pieces`](/mod/game-api/types/global-s/setprefabmodifier#m-pieces).

</div>
