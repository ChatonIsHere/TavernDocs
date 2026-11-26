---
title: "ChunkPositionSurface"
description: "Server: marks a networked object as a surface that random positions in its location chunk can be picked from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkPositionSurface

A **class** in `Root.Township`, `Alta.Chunks`.

Server: marks a networked object as a surface that random positions in its location chunk can be picked from. Needs an `IPointNormalEvaluator` on the same object.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkPositionSurface()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunkpositions" /><code>{"protected "}<Link to="/mod/game-api/types/alta-world/chunkpositions">{"ChunkPositions"}</Link>{" chunkPositions"}</code> | <span className="api-desc">The `ChunkPositions` of the location chunk this surface is registered in.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-surfacedefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/ipointnormalevaluator">{"IPointNormalEvaluator"}</Link>{" surfaceDefinition"}</code> | <span className="api-desc">The evaluator that gives points on the surface.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-weight" /><code>{"virtual int Weight { get; }"}</code> | <span className="api-desc">How likely this surface is to be picked compared to others in the chunk (1 by default). Virtual.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code><Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? GetPosition()"}</code> | <span className="api-desc">Returns a point and normal on the surface, or null if it isn't registered or has no evaluator.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Registers with the entity's chunk now, or when it is added to one.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addtochunk" /><code>{"private void AddToChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">If the chunk is a `LocationChunk`, registers this surface in its positions and unregisters when the entity is destroyed.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the `IPointNormalEvaluator` on this object.</span> |
| <Link id="m-destroyed" /><code>{"private void Destroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Removes this surface from the chunk's positions.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ChunkPositionSurface`:

<div className="api-used-in">

[`ChunkPositions.PositionDefinitions`](/mod/game-api/types/alta-world/chunkpositions#m-positiondefinitions).

</div>
