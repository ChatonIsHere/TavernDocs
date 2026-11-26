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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`, [`ICollisionStandard`](/game-api/types/alta-utilities/icollisionstandard), [`IInstructionResult`](/game-api/types/alta-world/iinstructionresult), [`IDestroyOnBake`](/game-api/types/global-i-l/idestroyonbake)
- **Derived types** [`GenerationCore`](/game-api/types/global-e-h/generationcore)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StaticEnvironmentPieceInstance()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gameobject" /><code>{"private GameObject gameObject"}</code> | Cached `GameObject`, set in `Initialize` so later calls skip the Unity property. |
| <Link id="m-piece" /><code>{"private "}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" piece"}</code> | The `StaticEnvironmentPiece` definition this instance came from; `Release` returns the instance to its pool. |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | Cached `Transform`, set in `Initialize` and used by `MoveAndEnable` and `SetScale`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code><Link to="/game-api/types/alta-utilities/surfacematerial">{"SurfaceMaterial"}</Link>{" Material { get; }"}</code> | Surface material of the piece, for sounds and effects. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-released" /><code>{"event Action Released"}</code> | Event declared for when the instance is released; not raised in this class. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpiece" /><code><Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" CreatePiece()"}</code> | Returns the piece definition, logging an error if it's missing. |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" piece)"}</code> | Binds the instance to its piece definition. |
| <Link id="m-moveandenable" /><code>{"void MoveAndEnable(Vector3 position, Quaternion rotation, Vector3 scale)"}</code> | Places, scales and turns on the instance. |
| <Link id="m-release" /><code>{"virtual void Release()"}</code> | Turns the instance off and returns it to the piece's pool. |
| <Link id="m-setscale" /><code>{"void SetScale(Vector3 scale)"}</code> | Sets the instance's scale. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor hook. Empty here. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-undo" /><code>{"private void Alta.Static.IInstructionResult.Undo()"}</code> | Explicit `IInstructionResult` implementation: undoing the placement just calls `Release`. |

</details>

## Used in

Members of other types that take, return or hold a `StaticEnvironmentPieceInstance`:

[`BasicObjectDisplay.staticPieces`](/game-api/types/alta-world-generation/basicobjectdisplay#m-staticpieces), [`GameObjectDistribution.MigrateToStaticEnvironmentPiece`](/game-api/types/alta-world-generation/gameobjectdistribution#m-migratetostaticenvironmentpiece), [`ForestBridges.Option.piece`](/game-api/types/alta-world-generation/forestbridges-option#m-piece), [`IStaticEnvironmentPiecePool.Release`](/game-api/types/alta-world/istaticenvironmentpiecepool#m-release), [`StaticEnvironmentPiece.prefab`](/game-api/types/alta-world/staticenvironmentpiece#m-prefab), [`StaticEnvironmentPiece.Prefab`](/game-api/types/alta-world/staticenvironmentpiece#m-prefab-2), [`StaticEnvironmentPiece.Release`](/game-api/types/alta-world/staticenvironmentpiece#m-release), [`StaticEnvironmentPiece.SetPrefab`](/game-api/types/alta-world/staticenvironmentpiece#m-setprefab), [`StaticEnvironmentPiece.Spawn`](/game-api/types/alta-world/staticenvironmentpiece#m-spawn), [`StaticEnvironmentPiece.stack`](/game-api/types/alta-world/staticenvironmentpiece#m-stack), [`SetPrefabModifier.pieces`](/game-api/types/global-s/setprefabmodifier#m-pieces).
