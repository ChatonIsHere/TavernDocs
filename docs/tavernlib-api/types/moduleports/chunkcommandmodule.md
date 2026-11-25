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

- **Listed in** [TavernLib.ModulePorts](/tavernlib-api/types/moduleports)
- **Attributes** `PlayOnly`, `Module`
- **Documented in** [ChunkCommandModule](/tavernlib-api/types/moduleports/chunkcommandmodule), [Internals](/tavernlib-api/internals)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-writer" /><code>{"private static StringBuilder writer"}</code> |

</details>

## Methods

<details>
<summary>22 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkwipe" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/chunkinfo">{"ChunkInfo"}</Link>{"> CheckWipe()"}</code> |
| <Link id="m-getchunkinfoastable" /><code>{"private static string GetChunkInfoAsTable(IEnumerable<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> chunks)"}</code> |
| <Link id="m-listentities" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-console/networkentityinfo">{"NetworkEntityInfo"}</Link>{"> ListEntities("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-loadall" /><code>{"private static void LoadAll(bool loaded = true)"}</code> |
| <Link id="m-logchunkdetails" /><code>{"private static string LogChunkDetails(IEnumerable<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> chunks)"}</code> |
| <Link id="m-merge" /><code>{"private static async Task Merge("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" targetprefab)"}</code> |
| <Link id="m-merge-2" /><code>{"private static async Task Merge(params uint[] prefabHashes)"}</code> |
| <Link id="m-printallchunkdetails" /><code>{"private static "}<Link to="/game-api/types/alta-utilities/filedownload">{"FileDownload"}</Link>{" PrintAllChunkDetails()"}</code> |
| <Link id="m-printchunkinfo" /><code>{"private static string PrintChunkInfo("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-printloadedchunkdetails" /><code>{"private static "}<Link to="/game-api/types/alta-utilities/filedownload">{"FileDownload"}</Link>{" PrintLoadedChunkDetails()"}</code> |
| <Link id="m-resetchunk" /><code>{"private static async Task<string> ResetChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-setchunkloaded" /><code>{"private static async Task SetChunkLoaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, bool isForceLoaded)"}</code> |
| <Link id="m-setloaddistances" /><code>{"private static void SetLoadDistances(float loadDistance, float unloadDistance)"}</code> |
| <Link id="m-setloaddistances-2" /><code>{"private static void SetLoadDistances(Vector3 loadDistance, Vector3 unloadDistance)"}</code> |
| <Link id="m-setpointerstoloadperframe" /><code>{"private static void SetPointersToLoadPerFrame(int numberToLoadPerFrame)"}</code> |
| <Link id="m-setreceiveamount" /><code>{"private static void SetReceiveAmount(float processingPercent = 0.1, float maxAllowance = 5, float minNeeded = 2)"}</code> |
| <Link id="m-setreceiveamount-2" /><code>{"private static void SetReceiveAmount(int receiveAmount)"}</code> |
| <Link id="m-setreceivems" /><code>{"private static void SetReceiveMs(float receiveDuration)"}</code> |
| <Link id="m-setstaticload" /><code>{"private static void SetStaticLoad(bool isLoading)"}</code> |
| <Link id="m-setstaticsequential" /><code>{"private static void SetStaticSequential(bool loadSequentially)"}</code> |
| <Link id="m-setsyncinterval" /><code>{"private static void SetSyncInterval(float interval)"}</code> |
| <Link id="m-setsyncnumber" /><code>{"private static void SetSyncNumber(int syncAmount)"}</code> |

</details>
