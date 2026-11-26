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
| <Link id="m-ctor" /><code>{"ChunkThread("}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Creates a `ChunkThread` from `chunk`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk"}</code> | <span className="api-desc">Private: the chunk being generated.</span> |
| <Link id="m-generationthread" /><code>{"private Thread generationThread"}</code> | <span className="api-desc">Private: the worker thread.</span> |
| <Link id="m-iscomplete" /><code>{"private bool isComplete"}</code> | <span className="api-desc">Backing field for `IsComplete`.</span> |
| <Link id="m-lockobject" /><code>{"private object lockObject"}</code> | <span className="api-desc">Private: lock guarding `isComplete`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscomplete-2" /><code>{"bool IsComplete { get; set; }"}</code> | <span className="api-desc">Whether generation has finished. Locked so the main thread can read it safely.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-abort" /><code>{"void Abort()"}</code> | <span className="api-desc">Aborts the generation thread.</span> |
| <Link id="m-generate" /><code>{"void Generate()"}</code> | <span className="api-desc">Runs every generator plugin on the chunk, builds its non zero lists and sets `IsComplete`. Runs on the worker thread.</span> |
| <Link id="m-startgenerating" /><code>{"void StartGenerating()"}</code> | <span className="api-desc">Prepares the chunk on the calling thread, then starts `Generate` on a new thread.</span> |

## Used in

Members of other types that take, return or hold a `ChunkThread`:

<div className="api-used-in">

[`MapChunk.generationThread`](/mod/game-api/types/alta-world-generation/mapchunk#m-generationthread), [`MapChunk.Initialize`](/mod/game-api/types/alta-world-generation/mapchunk#m-initialize).

</div>
