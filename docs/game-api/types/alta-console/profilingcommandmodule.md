---
title: "ProfilingCommandModule"
description: "static class ProfilingCommandModule in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfilingCommandModule

A **static class** in `Root.Township`, `Alta.Console.Commands`.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Attributes** `PlayOnly`, `Module`, `WithPermissionOnly`

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-finishunloading" /><code>{"private static TaskCompletionSource<bool> finishUnloading"}</code> |  |
| <Link id="m-loadedchunks" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> loadedChunks"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sample" /><code>{"static async Task<bool> Sample(string name, string path = \"\", int frames = 150, Action postAction = null)"}</code> |  |
| <Link id="m-callback" /><code>{"private static void Callback(string arg1, bool arg2)"}</code> |  |
| <Link id="m-chunkunloaded" /><code>{"private static void ChunkUnloaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" unloadedChunk)"}</code> |  |
| <Link id="m-cleanmemdump" /><code>{"private static async void CleanMemDump(string name = \"CleanSlateMemoryDump\", string path = \"\")"}</code> |  |
| <Link id="m-dumpsize" /><code>{"private static void DumpSize()"}</code> |  |
| <Link id="m-heapdump" /><code>{"private static void HeapDump()"}</code> |  |
| <Link id="m-memdump" /><code>{"private static void MemDump(string name = \"memorydump\", string path = null)"}</code> |  |
| <Link id="m-profile" /><code>{"private static IEnumerator Profile(bool wasProfilingByName, int frames, Action postAction) (iterator)"}</code> |  |
