---
title: "ChunkPositionSurface"
description: "class ChunkPositionSurface in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkPositionSurface

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChunkPositionSurface()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-chunkpositions" /><code>{"protected "}<Link to="/game-api/types/alta-world/chunkpositions">{"ChunkPositions"}</Link>{" chunkPositions"}</code> |

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-surfacedefinition" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/ipointnormalevaluator">{"IPointNormalEvaluator"}</Link>{" surfaceDefinition"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-weight" /><code>{"virtual int Weight { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getposition" /><code><Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? GetPosition()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addtochunk" /><code>{"private void AddToChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-destroyed" /><code>{"private void Destroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ChunkPositionSurface`:

[`ChunkPositions.PositionDefinitions`](/game-api/types/alta-world/chunkpositions#m-positiondefinitions).
