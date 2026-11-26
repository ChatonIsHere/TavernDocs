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

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Attributes** `PlayOnly`, `Module`, `WithPermissionOnly`

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finishunloading" /><code>{"private static TaskCompletionSource<bool> finishUnloading"}</code> | Task `CleanMemDump` awaits until the last tracked chunk unloads. |
| <Link id="m-loadedchunks" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> loadedChunks"}</code> | Chunks `CleanMemDump` is waiting on to fully unload. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this module. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sample" /><code>{"static async Task<bool> Sample(string name, string path = \"\", int frames = 150, Action postAction = null)"}</code> | `profiling sample`: records a binary Unity profiler log for a number of frames to a `.raw` file and completes when done. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-callback" /><code>{"private static void Callback(string arg1, bool arg2)"}</code> | Unused debug callback that logs its two arguments. |
| <Link id="m-chunkunloaded" /><code>{"private static void ChunkUnloaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" unloadedChunk)"}</code> | Handler for a chunk's `FullyUnloaded` during `CleanMemDump`; completes the wait once every tracked chunk has unloaded. |
| <Link id="m-cleanmemdump" /><code>{"private static async void CleanMemDump(string name = \"CleanSlateMemoryDump\", string path = \"\")"}</code> | `profiling cleanslatememory`: warns players, waits 90 seconds, kicks everyone, waits for all chunks to unload, then takes a full memory snapshot. |
| <Link id="m-dumpsize" /><code>{"private static void DumpSize()"}</code> | `profiling dumpsize`: writes object size info to a file through `UnityHeapEx.HeapDump`. |
| <Link id="m-heapdump" /><code>{"private static void HeapDump()"}</code> | `profiling heapdump`: writes a heap dump through `UnityHeapEx.HeapDump`. |
| <Link id="m-memdump" /><code>{"private static void MemDump(string name = \"memorydump\", string path = null)"}</code> | `profiling memorydump`: takes a Unity memory profiler snapshot into the `memory_dump` storage folder (or a given path). |
| <Link id="m-profile" /><code>{"private static IEnumerator Profile(bool wasProfilingByName, int frames, Action postAction) (iterator)"}</code> | Coroutine behind `Sample`: waits the given number of frames, stops the profiler, logs FPS and runs the post action. |

</details>
