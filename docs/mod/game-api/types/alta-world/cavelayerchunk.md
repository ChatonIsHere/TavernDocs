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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`LocationChunk`](/mod/game-api/types/alta-world/locationchunk)
- **Documented in** [Chunks](/mod/game-api/world/chunks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveLayerChunk()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cavelayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" caveLayer"}</code> | <span className="api-desc">The cave layer this chunk belongs to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunkregion" /><code>{"override "}<Link to="/mod/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" "}<Link to="/mod/game-api/types/alta-menus/chunkregion">{"ChunkRegion"}</Link>{" { get; }"}</code> | <span className="api-desc">Always `ChunkRegion.caves`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getneighboursforloading" /><code>{"override void GetNeighboursForLoading(float remainingLoadBudget, HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> result)"}</code> | <span className="api-desc">Spawns the adjacent layers first (server), then returns the normal loading neighbours.</span> |
| <Link id="m-getneighboursforlookup" /><code>{"override IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetNeighboursForLookup()"}</code> | <span className="api-desc">Spawns the adjacent layers first (server), then returns the normal lookup neighbours.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Finds the `ICaveLayer` on the object and registers this chunk with `LocationChunkHelper`.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: hooks `FullyLoaded` so adjacent layers spawn once this chunk is loaded.</span> |
| <Link id="m-playerenteredchunk" /><code>{"override void PlayerEnteredChunk("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Also reports the layer depth (layer + 1) to the game task system, for depth-based tasks.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Client: unregisters the chunk and resets the other chunk bounds.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onfullyloaded" /><code>{"private void OnFullyLoaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Handler for `FullyLoaded`: spawns the adjacent layers.</span> |
| <Link id="m-prepareadjacentlayers" /><code>{"private void PrepareAdjacentLayers()"}</code> | <span className="api-desc">Server: spawns the layer below, and the one above if this isn't layer 0, without generating them.</span> |

</details>
