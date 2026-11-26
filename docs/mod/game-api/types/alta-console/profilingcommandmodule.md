---
title: "ProfilingCommandModule"
description: "Console module profiling: Unity profiler samples, heap dumps and memory snapshots."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfilingCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

Console module `profiling`: Unity profiler samples, heap dumps and memory snapshots. Play mode only, needs `server_owner`.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Attributes** `PlayOnly`, `Module`, `WithPermissionOnly`

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finishunloading" /><code>{"private static TaskCompletionSource<bool> finishUnloading"}</code> | <span className="api-desc">Task `CleanMemDump` awaits until the last tracked chunk unloads.</span> |
| <Link id="m-loadedchunks" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> loadedChunks"}</code> | <span className="api-desc">Chunks `CleanMemDump` is waiting on to fully unload.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this module.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sample" /><code>{"static async Task<bool> Sample(string name, string path = \"\", int frames = 150, Action postAction = null)"}</code> | <span className="api-desc">`profiling sample`: records a binary Unity profiler log for a number of frames to a `.raw` file and completes when done.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-callback" /><code>{"private static void Callback(string arg1, bool arg2)"}</code> | <span className="api-desc">Unused debug callback that logs its two arguments.</span> |
| <Link id="m-chunkunloaded" /><code>{"private static void ChunkUnloaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" unloadedChunk)"}</code> | <span className="api-desc">Handler for a chunk's `FullyUnloaded` during `CleanMemDump`; completes the wait once every tracked chunk has unloaded.</span> |
| <Link id="m-cleanmemdump" /><code>{"private static async void CleanMemDump(string name = \"CleanSlateMemoryDump\", string path = \"\")"}</code> | <span className="api-desc">`profiling cleanslatememory`: warns players, waits 90 seconds, kicks everyone, waits for all chunks to unload, then takes a full memory snapshot.</span> |
| <Link id="m-dumpsize" /><code>{"private static void DumpSize()"}</code> | <span className="api-desc">`profiling dumpsize`: writes object size info to a file through `UnityHeapEx.HeapDump`.</span> |
| <Link id="m-heapdump" /><code>{"private static void HeapDump()"}</code> | <span className="api-desc">`profiling heapdump`: writes a heap dump through `UnityHeapEx.HeapDump`.</span> |
| <Link id="m-memdump" /><code>{"private static void MemDump(string name = \"memorydump\", string path = null)"}</code> | <span className="api-desc">`profiling memorydump`: takes a Unity memory profiler snapshot into the `memory_dump` storage folder (or a given path).</span> |
| <Link id="m-profile" /><code>{"private static IEnumerator Profile(bool wasProfilingByName, int frames, Action postAction) (iterator)"}</code> | <span className="api-desc">Coroutine behind `Sample`: waits the given number of frames, stops the profiler, logs FPS and runs the post action.</span> |

</details>
