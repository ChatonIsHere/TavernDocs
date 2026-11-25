---
title: "StaticEnvironmentPieceInstance"
description: "class StaticEnvironmentPieceInstance in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticEnvironmentPieceInstance

A **class** in `Root.Township`, `Alta.Static`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`, [`ICollisionStandard`](/game-api/types/alta-utilities/icollisionstandard), [`IInstructionResult`](/game-api/types/alta-world/iinstructionresult), [`IDestroyOnBake`](/game-api/types/global-i-l/idestroyonbake)
- **Derived types** [`GenerationCore`](/game-api/types/global-e-h/generationcore)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticEnvironmentPieceInstance()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gameobject" /><code>{"private GameObject gameObject"}</code> |  |
| <Link id="m-piece" /><code>{"private "}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" piece"}</code> |  |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-material" /><code><Link to="/game-api/types/alta-utilities/surfacematerial">{"SurfaceMaterial"}</Link>{" Material { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-released" /><code>{"event Action Released"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createpiece" /><code><Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" CreatePiece()"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/alta-world/staticenvironmentpiece">{"StaticEnvironmentPiece"}</Link>{" piece)"}</code> |  |
| <Link id="m-moveandenable" /><code>{"void MoveAndEnable(Vector3 position, Quaternion rotation, Vector3 scale)"}</code> |  |
| <Link id="m-release" /><code>{"virtual void Release()"}</code> |  |
| <Link id="m-setscale" /><code>{"void SetScale(Vector3 scale)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |
| <Link id="m-undo" /><code>{"private void Alta.Static.IInstructionResult.Undo()"}</code> |  |

## Used in

Members of other types that take, return or hold a `StaticEnvironmentPieceInstance`:

[`BasicObjectDisplay.staticPieces`](/game-api/types/alta-world-generation/basicobjectdisplay#m-staticpieces), [`GameObjectDistribution.MigrateToStaticEnvironmentPiece`](/game-api/types/alta-world-generation/gameobjectdistribution#m-migratetostaticenvironmentpiece), [`ForestBridges.Option.piece`](/game-api/types/alta-world-generation/forestbridges-option#m-piece), [`IStaticEnvironmentPiecePool.Release`](/game-api/types/alta-world/istaticenvironmentpiecepool#m-release), [`StaticEnvironmentPiece.prefab`](/game-api/types/alta-world/staticenvironmentpiece#m-prefab), [`StaticEnvironmentPiece.Prefab`](/game-api/types/alta-world/staticenvironmentpiece#m-prefab-2), [`StaticEnvironmentPiece.Release`](/game-api/types/alta-world/staticenvironmentpiece#m-release), [`StaticEnvironmentPiece.SetPrefab`](/game-api/types/alta-world/staticenvironmentpiece#m-setprefab), [`StaticEnvironmentPiece.Spawn`](/game-api/types/alta-world/staticenvironmentpiece#m-spawn), [`StaticEnvironmentPiece.stack`](/game-api/types/alta-world/staticenvironmentpiece#m-stack), [`SetPrefabModifier.pieces`](/game-api/types/global-s/setprefabmodifier#m-pieces).
