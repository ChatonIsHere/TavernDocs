---
title: "LocationChunkHelper"
description: "Static helpers for finding location chunks by position or bounds, and for working out which chunks to load around one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocationChunkHelper

A **static class** in `Root.Township`, `Alta.Chunks`.

Static helpers for finding location chunks by position or bounds, and for working out which chunks to load around one. Wraps a `FastChunkLookup`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunklookup" /><code>{"private static "}<Link to="/game-api/types/alta-world/fastchunklookup">{"FastChunkLookup"}</Link>{" chunkLookup"}</code> | The fast spatial lookup used to find chunks by position. Rebuilt in the editor when outdated. |
| <Link id="m-isdelaying" /><code>{"private static bool isDelaying"}</code> | True while a delayed reset of the other chunks' bounds is queued, so only one is queued at a time. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delayedresetotherchunksbounds" /><code>{"static void DelayedResetOtherChunksBounds()"}</code> | Recomputes the bounds of non-overworld chunks one frame later, once even if called many times. |
| <Link id="m-deregisterotherchunk" /><code>{"static void DeregisterOtherChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Removes a non-overworld chunk from the lookup. |
| <Link id="m-ensurechunklookupissetup" /><code>{"static void EnsureChunkLookupIsSetup()"}</code> | Builds the lookup from every `LocationChunk` in the scene if it is empty (or outdated, in the editor). |
| <Link id="m-getallcontaining" /><code>{"static IEnumerable<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetAllContaining(Bounds bounds)"}</code> | Every chunk whose bounds intersect the given bounds. |
| <Link id="m-getbestcontaining" /><code>{"static "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" GetBestContaining(Vector3 position, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk = null)"}</code> | The highest priority chunk containing a position, or null. Passing the current chunk makes it faster. |
| <Link id="m-getchunkstoload" /><code>{"static void GetChunksToLoad("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> dynamicChunks, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> staticChunks)"}</code> | Adds a chunk and its neighbours within a load budget to a set, or fills dynamic and static sets from the chunk's load strengths. |
| <Link id="m-getchunkstoload-2" /><code>{"static void GetChunksToLoad("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, float remainingLoadBudget, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> results)"}</code> | Adds a chunk and its neighbours within a load budget to a set, or fills dynamic and static sets from the chunk's load strengths. |
| <Link id="m-getchunkswithinradius" /><code>{"static void GetChunksWithinRadius("}<Link to="/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{" overworldChunk, float distance, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> result)"}</code> | Overworld chunks within a radius of an overworld chunk, plus forced adjacent chunks. |
| <Link id="m-getchunkswithinradius-2" /><code>{"static HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> GetChunksWithinRadius("}<Link to="/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{" overworldChunk, float distance)"}</code> | Overworld chunks within a radius of an overworld chunk, plus forced adjacent chunks. |
| <Link id="m-getchunkweightingsforposition" /><code>{"static ValueTuple<Dictionary<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", float>, float> GetChunkWeightingsForPosition(Func<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", float> weightAssessing = null)"}</code> | A weight for every content location chunk (1 each by default) and their total, for `GetRandomChunkForPosition`. |
| <Link id="m-getoverworldchunkatposition" /><code>{"static "}<Link to="/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{" GetOverworldChunkAtPosition(Vector3 position)"}</code> | The overworld grid chunk at a position, or null. |
| <Link id="m-getrandomchunkforposition" /><code>{"static bool GetRandomChunkForPosition(out "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" targetChunk, ValueTuple<Dictionary<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", float>, float> weights)"}</code> | Picks a random chunk using the given weights. False if the total weight is 0. |
| <Link id="m-isinoverworldchunk" /><code>{"static bool IsInOverworldChunk(Vector3 position)"}</code> | True unless the position is inside a non-overworld chunk (a cave or similar). |
| <Link id="m-registerotherchunk" /><code>{"static void RegisterOtherChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Adds a non-overworld chunk to the lookup. |
| <Link id="m-removeotherchunk" /><code>{"static void RemoveOtherChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" otherChunk)"}</code> | Same as `DeregisterOtherChunk`. |
| <Link id="m-resetotherchunksbounds" /><code>{"static void ResetOtherChunksBounds()"}</code> | Recomputes the combined bounds of non-overworld chunks now. |
| <Link id="m-setupchunklookup" /><code>{"static void SetupChunkLookup(IEnumerable<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> allChunks)"}</code> | Replaces the lookup with one built from the given chunks. |
