---
title: "ChunkThread"
description: "class ChunkThread in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkThread

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkThread("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk"}</code> |  |
| <Link id="m-generationthread" /><code>{"private Thread generationThread"}</code> |  |
| <Link id="m-iscomplete" /><code>{"private bool isComplete"}</code> |  |
| <Link id="m-lockobject" /><code>{"private object lockObject"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iscomplete-2" /><code>{"bool IsComplete { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-abort" /><code>{"void Abort()"}</code> |  |
| <Link id="m-generate" /><code>{"void Generate()"}</code> |  |
| <Link id="m-startgenerating" /><code>{"void StartGenerating()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ChunkThread`:

[`MapChunk.generationThread`](/game-api/types/alta-world-generation/mapchunk#m-generationthread), [`MapChunk.Initialize`](/game-api/types/alta-world-generation/mapchunk#m-initialize).
