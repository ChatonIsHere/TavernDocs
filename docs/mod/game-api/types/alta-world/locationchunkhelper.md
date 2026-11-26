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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunklookup" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world/fastchunklookup">{"FastChunkLookup"}</Link>{" chunkLookup"}</code> | <span className="api-desc">The fast spatial lookup used to find chunks by position. Rebuilt in the editor when outdated.</span> |
| <Link id="m-isdelaying" /><code>{"private static bool isDelaying"}</code> | <span className="api-desc">True while a delayed reset of the other chunks' bounds is queued, so only one is queued at a time.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-delayedresetotherchunksbounds" /><code>{"static void DelayedResetOtherChunksBounds()"}</code> | <span className="api-desc">Recomputes the bounds of non-overworld chunks one frame later, once even if called many times.</span> |
| <Link id="m-deregisterotherchunk" /><code>{"static void DeregisterOtherChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Removes a non-overworld chunk from the lookup.</span> |
| <Link id="m-ensurechunklookupissetup" /><code>{"static void EnsureChunkLookupIsSetup()"}</code> | <span className="api-desc">Builds the lookup from every `LocationChunk` in the scene if it is empty (or outdated, in the editor).</span> |
| <Link id="m-getallcontaining" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetAllContaining(Bounds bounds)"}</code> | <span className="api-desc">Every chunk whose bounds intersect the given bounds.</span> |
| <Link id="m-getbestcontaining" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" GetBestContaining(Vector3 position, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk = null)"}</code> | <span className="api-desc">The highest priority chunk containing a position, or null. Passing the current chunk makes it faster.</span> |
| <Link id="m-getchunkstoload" /><code>{"static void GetChunksToLoad("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> dynamicChunks, HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> staticChunks)"}</code> | <span className="api-desc">Adds a chunk and its neighbours within a load budget to a set, or fills dynamic and static sets from the chunk's load strengths.</span> |
| <Link id="m-getchunkstoload-2" /><code>{"static void GetChunksToLoad("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, float remainingLoadBudget, HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> results)"}</code> | <span className="api-desc">Adds a chunk and its neighbours within a load budget to a set, or fills dynamic and static sets from the chunk's load strengths.</span> |
| <Link id="m-getchunkswithinradius" /><code>{"static void GetChunksWithinRadius("}<Link to="/mod/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{" overworldChunk, float distance, HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> result)"}</code> | <span className="api-desc">Overworld chunks within a radius of an overworld chunk, plus forced adjacent chunks.</span> |
| <Link id="m-getchunkswithinradius-2" /><code>{"static HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> GetChunksWithinRadius("}<Link to="/mod/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{" overworldChunk, float distance)"}</code> | <span className="api-desc">Overworld chunks within a radius of an overworld chunk, plus forced adjacent chunks.</span> |
| <Link id="m-getchunkweightingsforposition" /><code>{"static ValueTuple<Dictionary<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", float>, float> GetChunkWeightingsForPosition(Func<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", float> weightAssessing = null)"}</code> | <span className="api-desc">A weight for every content location chunk (1 each by default) and their total, for `GetRandomChunkForPosition`.</span> |
| <Link id="m-getoverworldchunkatposition" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{" GetOverworldChunkAtPosition(Vector3 position)"}</code> | <span className="api-desc">The overworld grid chunk at a position, or null.</span> |
| <Link id="m-getrandomchunkforposition" /><code>{"static bool GetRandomChunkForPosition(out "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" targetChunk, ValueTuple<Dictionary<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{", float>, float> weights)"}</code> | <span className="api-desc">Picks a random chunk using the given weights. False if the total weight is 0.</span> |
| <Link id="m-isinoverworldchunk" /><code>{"static bool IsInOverworldChunk(Vector3 position)"}</code> | <span className="api-desc">True unless the position is inside a non-overworld chunk (a cave or similar).</span> |
| <Link id="m-registerotherchunk" /><code>{"static void RegisterOtherChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Adds a non-overworld chunk to the lookup.</span> |
| <Link id="m-removeotherchunk" /><code>{"static void RemoveOtherChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" otherChunk)"}</code> | <span className="api-desc">Same as `DeregisterOtherChunk`.</span> |
| <Link id="m-resetotherchunksbounds" /><code>{"static void ResetOtherChunksBounds()"}</code> | <span className="api-desc">Recomputes the combined bounds of non-overworld chunks now.</span> |
| <Link id="m-setupchunklookup" /><code>{"static void SetupChunkLookup(IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> allChunks)"}</code> | <span className="api-desc">Replaces the lookup with one built from the given chunks.</span> |
