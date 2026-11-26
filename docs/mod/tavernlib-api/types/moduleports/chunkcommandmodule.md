---
title: "ChunkCommandModule"
description: "TavernLib's chunks console module, a port of the game's chunk commands: receive and sync tuning, load distances, listing, wiping, merging and force-loading..."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkCommandModule

A **static class** in `TavernLib`, `TavernLib.ModulePorts`.

TavernLib's `chunks` console module, a port of the game's chunk commands: receive and sync tuning, load distances, listing, wiping, merging and force-loading chunks. Its commands are private.

- **Listed in** [TavernLib.ModulePorts](/mod/tavernlib-api/types/moduleports)
- **Attributes** `PlayOnly`, `Module`
- **Documented in** [ChunkCommandModule](/mod/tavernlib-api/types/moduleports/chunkcommandmodule), [Internals](/mod/tavernlib-api/internals)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for the module. |
| <Link id="m-writer" /><code>{"private static StringBuilder writer"}</code> | Shared string builder that `LogChunkDetails` fills. |

</details>

## Methods

<details>
<summary>22 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkwipe" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/chunkinfo">{"ChunkInfo"}</Link>{"> CheckWipe()"}</code> | `chunks check-wipe`: server only, lists the chunks that need to be pre-wiped. |
| <Link id="m-getchunkinfoastable" /><code>{"private static string GetChunkInfoAsTable(IEnumerable<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> chunks)"}</code> | Formats the loaded chunks among the given ones as a text table. |
| <Link id="m-listentities" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> ListEntities("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | `chunks entities`: lists the entities in a chunk. |
| <Link id="m-loadall" /><code>{"private static void LoadAll(bool loaded = true)"}</code> | `chunks loadall`: server only, sets the forced-load flag on every overworld chunk. |
| <Link id="m-logchunkdetails" /><code>{"private static string LogChunkDetails(IEnumerable<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> chunks)"}</code> | Builds the CSV text of chunk details (name, identifier, counts and load flags). |
| <Link id="m-merge" /><code>{"private static async Task Merge("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" targetprefab)"}</code> | `chunks merge`: server only, needs `debug_features`; kicks players, stops the server session and merges the save with the default one for a prefab (or several prefab hashes), then quits. |
| <Link id="m-merge-2" /><code>{"private static async Task Merge(params uint[] prefabHashes)"}</code> | `chunks merge`: server only, needs `debug_features`; kicks players, stops the server session and merges the save with the default one for a prefab (or several prefab hashes), then quits. |
| <Link id="m-printallchunkdetails" /><code>{"private static "}<Link to="/mod/game-api/types/alta-utilities/filedownload">{"FileDownload"}</Link>{" PrintAllChunkDetails()"}</code> | `chunks print-all`: writes the details of every chunk to `chunk details.csv`. |
| <Link id="m-printchunkinfo" /><code>{"private static string PrintChunkInfo("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | `chunks info`: shows a chunk's details as a table. |
| <Link id="m-printloadedchunkdetails" /><code>{"private static "}<Link to="/mod/game-api/types/alta-utilities/filedownload">{"FileDownload"}</Link>{" PrintLoadedChunkDetails()"}</code> | `chunks print-loaded`: writes the details of loaded chunks to `loaded chunk details.csv`. |
| <Link id="m-resetchunk" /><code>{"private static async Task<string> ResetChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | `chunks wipe`: moves players out of the chunk, saves and clears its save, then moves them back. |
| <Link id="m-setchunkloaded" /><code>{"private static async Task SetChunkLoaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, bool isForceLoaded)"}</code> | `chunks force-load`: server only, force-loads a chunk or clears its forced load. |
| <Link id="m-setloaddistances" /><code>{"private static void SetLoadDistances(float loadDistance, float unloadDistance)"}</code> | `chunks set-load`: sets the cave streaming load and unload bounds, from two distances or two vectors. |
| <Link id="m-setloaddistances-2" /><code>{"private static void SetLoadDistances(Vector3 loadDistance, Vector3 unloadDistance)"}</code> | `chunks set-load`: sets the cave streaming load and unload bounds, from two distances or two vectors. |
| <Link id="m-setpointerstoloadperframe" /><code>{"private static void SetPointersToLoadPerFrame(int numberToLoadPerFrame)"}</code> | `chunks set-static-per-frame`: turns off sequential loading and sets how many static pointers load per frame. |
| <Link id="m-setreceiveamount" /><code>{"private static void SetReceiveAmount(float processingPercent = 0.1, float maxAllowance = 5, float minNeeded = 2)"}</code> | Sets how the connection receiver spends its time, either the timed settings (`chunks set-timed`) or a minimum of reliable messages per frame (`chunks set-receive-count`). |
| <Link id="m-setreceiveamount-2" /><code>{"private static void SetReceiveAmount(int receiveAmount)"}</code> | Sets how the connection receiver spends its time, either the timed settings (`chunks set-timed`) or a minimum of reliable messages per frame (`chunks set-receive-count`). |
| <Link id="m-setreceivems" /><code>{"private static void SetReceiveMs(float receiveDuration)"}</code> | `chunks set-receive-ms`: sets the most milliseconds per frame spent processing reliable messages. |
| <Link id="m-setstaticload" /><code>{"private static void SetStaticLoad(bool isLoading)"}</code> | `chunks set-static-load`: turns loading of static pointers on or off. |
| <Link id="m-setstaticsequential" /><code>{"private static void SetStaticSequential(bool loadSequentially)"}</code> | `chunks set-static-sequence`: sets whether static pointers load one after another. |
| <Link id="m-setsyncinterval" /><code>{"private static void SetSyncInterval(float interval)"}</code> | `chunks set-sync-interval`: server only, sets the wait between entity spawns sent to clients. |
| <Link id="m-setsyncnumber" /><code>{"private static void SetSyncNumber(int syncAmount)"}</code> | `chunks set-sync-amount`: server only, sets how many prefabs sync each frame. |

</details>
