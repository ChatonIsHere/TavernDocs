---
title: "CaveLayerChunk"
description: "The location chunk for one cave layer, on the same object as its ICaveLayer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveLayerChunk

A **class** in `Root.Township`, `Alta.Chunks`.

The location chunk for one cave layer, on the same object as its `ICaveLayer`. On the server it makes sure the layers above and below exist whenever it loads or is looked up.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`LocationChunk`](/game-api/types/alta-world/locationchunk)
- **Documented in** [Chunks](/game-api/world/chunks)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CaveLayerChunk()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cavelayer" /><code>{"private "}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" caveLayer"}</code> | The cave layer this chunk belongs to. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunkregion" /><code>{"override "}<Link to="/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" "}<Link to="/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" { get; }"}</code> | Always `ChunkRegion.caves`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getneighboursforloading" /><code>{"override void GetNeighboursForLoading(float remainingLoadBudget, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> result)"}</code> | Spawns the adjacent layers first (server), then returns the normal loading neighbours. |
| <Link id="m-getneighboursforlookup" /><code>{"override IEnumerable<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetNeighboursForLookup()"}</code> | Spawns the adjacent layers first (server), then returns the normal lookup neighbours. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Finds the `ICaveLayer` on the object and registers this chunk with `LocationChunkHelper`. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: hooks `FullyLoaded` so adjacent layers spawn once this chunk is loaded. |
| <Link id="m-playerenteredchunk" /><code>{"override void PlayerEnteredChunk("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Also reports the layer depth (layer + 1) to the game task system, for depth-based tasks. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Client: unregisters the chunk and resets the other chunk bounds. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onfullyloaded" /><code>{"private void OnFullyLoaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Handler for `FullyLoaded`: spawns the adjacent layers. |
| <Link id="m-prepareadjacentlayers" /><code>{"private void PrepareAdjacentLayers()"}</code> | Server: spawns the layer below, and the one above if this isn't layer 0, without generating them. |

</details>
