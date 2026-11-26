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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChunkPositionSurface()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunkpositions" /><code>{"protected "}<Link to="/game-api/types/alta-world/chunkpositions">{"ChunkPositions"}</Link>{" chunkPositions"}</code> | The `ChunkPositions` of the location chunk this surface is registered in. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-surfacedefinition" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/ipointnormalevaluator">{"IPointNormalEvaluator"}</Link>{" surfaceDefinition"}</code> | The evaluator that gives points on the surface. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-weight" /><code>{"virtual int Weight { get; }"}</code> | How likely this surface is to be picked compared to others in the chunk (1 by default). Virtual. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code><Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? GetPosition()"}</code> | Returns a point and normal on the surface, or null if it isn't registered or has no evaluator. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Registers with the entity's chunk now, or when it is added to one. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addtochunk" /><code>{"private void AddToChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | If the chunk is a `LocationChunk`, registers this surface in its positions and unregisters when the entity is destroyed. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the `IPointNormalEvaluator` on this object. |
| <Link id="m-destroyed" /><code>{"private void Destroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Removes this surface from the chunk's positions. |

</details>

## Used in

Members of other types that take, return or hold a `ChunkPositionSurface`:

[`ChunkPositions.PositionDefinitions`](/game-api/types/alta-world/chunkpositions#m-positiondefinitions).
