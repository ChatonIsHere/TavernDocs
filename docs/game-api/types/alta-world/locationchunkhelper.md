---
title: "LocationChunkHelper"
description: "static class LocationChunkHelper in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocationChunkHelper

A **static class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunklookup" /><code>{"private static "}<Link to="/game-api/types/alta-world/fastchunklookup">{"FastChunkLookup"}</Link>{" chunkLookup"}</code> |  |
| <Link id="m-isdelaying" /><code>{"private static bool isDelaying"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delayedresetotherchunksbounds" /><code>{"static void DelayedResetOtherChunksBounds()"}</code> |  |
| <Link id="m-deregisterotherchunk" /><code>{"static void DeregisterOtherChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-ensurechunklookupissetup" /><code>{"static void EnsureChunkLookupIsSetup()"}</code> |  |
| <Link id="m-getallcontaining" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetAllContaining(Bounds bounds)"}</code> |  |
| <Link id="m-getbestcontaining" /><code>{"static "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" GetBestContaining(Vector3 position, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk = null)"}</code> |  |
| <Link id="m-getchunkstoload" /><code>{"static void GetChunksToLoad("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> dynamicChunks, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> staticChunks)"}</code> |  |
| <Link id="m-getchunkstoload-2" /><code>{"static void GetChunksToLoad("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, float remainingLoadBudget, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> results)"}</code> |  |
| <Link id="m-getchunkswithinradius" /><code>{"static void GetChunksWithinRadius("}<Link to="/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{" overworldChunk, float distance, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> result)"}</code> |  |
| <Link id="m-getchunkswithinradius-2" /><code>{"static HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> GetChunksWithinRadius("}<Link to="/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{" overworldChunk, float distance)"}</code> |  |
| <Link id="m-getchunkweightingsforposition" /><code>{"static ValueTuple<Dictionary<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", float>, float> GetChunkWeightingsForPosition(Func<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", float> weightAssessing = null)"}</code> |  |
| <Link id="m-getoverworldchunkatposition" /><code>{"static "}<Link to="/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{" GetOverworldChunkAtPosition(Vector3 position)"}</code> |  |
| <Link id="m-getrandomchunkforposition" /><code>{"static bool GetRandomChunkForPosition(out "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" targetChunk, ValueTuple<Dictionary<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", float>, float> weights)"}</code> |  |
| <Link id="m-isinoverworldchunk" /><code>{"static bool IsInOverworldChunk(Vector3 position)"}</code> |  |
| <Link id="m-registerotherchunk" /><code>{"static void RegisterOtherChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-removeotherchunk" /><code>{"static void RemoveOtherChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" otherChunk)"}</code> |  |
| <Link id="m-resetotherchunksbounds" /><code>{"static void ResetOtherChunksBounds()"}</code> |  |
| <Link id="m-setupchunklookup" /><code>{"static void SetupChunkLookup(IEnumerable<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> allChunks)"}</code> |  |
