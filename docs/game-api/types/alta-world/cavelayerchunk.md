---
title: "CaveLayerChunk"
description: "A LocationChunk for one cave layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveLayerChunk

A **class** in `Root.Township`, `Alta.Chunks`.

A `LocationChunk` for one cave layer. See Caves.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`LocationChunk`](/game-api/types/alta-world/locationchunk)
- **Documented in** [Chunks](/game-api/world/chunks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveLayerChunk()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cavelayer" /><code>{"private "}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" caveLayer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunkregion" /><code>{"override "}<Link to="/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" "}<Link to="/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getneighboursforloading" /><code>{"override void GetNeighboursForLoading(float remainingLoadBudget, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> result)"}</code> |  |
| <Link id="m-getneighboursforlookup" /><code>{"override IEnumerable<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetNeighboursForLookup()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-playerenteredchunk" /><code>{"override void PlayerEnteredChunk("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |  |
| <Link id="m-onfullyloaded" /><code>{"private void OnFullyLoaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-prepareadjacentlayers" /><code>{"private void PrepareAdjacentLayers()"}</code> |  |
