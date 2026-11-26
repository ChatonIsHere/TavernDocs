---
title: "ChunkThread"
description: "Runs a cave MapChunk's generation on its own background thread."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkThread

A **class** in `Root.Township`, `Alta.Caves`.

Runs a cave `MapChunk`'s generation on its own background thread. `MapChunk` makes one and polls `IsComplete`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkThread("}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> | Creates a `ChunkThread` from `chunk`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk"}</code> | Private: the chunk being generated. |
| <Link id="m-generationthread" /><code>{"private Thread generationThread"}</code> | Private: the worker thread. |
| <Link id="m-iscomplete" /><code>{"private bool isComplete"}</code> | Backing field for `IsComplete`. |
| <Link id="m-lockobject" /><code>{"private object lockObject"}</code> | Private: lock guarding `isComplete`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscomplete-2" /><code>{"bool IsComplete { get; set; }"}</code> | Whether generation has finished. Locked so the main thread can read it safely. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-abort" /><code>{"void Abort()"}</code> | Aborts the generation thread. |
| <Link id="m-generate" /><code>{"void Generate()"}</code> | Runs every generator plugin on the chunk, builds its non zero lists and sets `IsComplete`. Runs on the worker thread. |
| <Link id="m-startgenerating" /><code>{"void StartGenerating()"}</code> | Prepares the chunk on the calling thread, then starts `Generate` on a new thread. |

## Used in

Members of other types that take, return or hold a `ChunkThread`:

[`MapChunk.generationThread`](/mod/game-api/types/alta-world-generation/mapchunk#m-generationthread), [`MapChunk.Initialize`](/mod/game-api/types/alta-world-generation/mapchunk#m-initialize).
