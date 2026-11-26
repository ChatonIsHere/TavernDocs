---
title: "IProceduralGenerationStreamer"
description: "A chunk component that streams generated content in and out (the cave layers use it)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IProceduralGenerationStreamer

An **interface** in `Root.Township`, `Alta.Chunks`.

A chunk component that streams generated content in and out (the cave layers use it). The chunk content managers call it when the chunk loads or unloads.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Derived types** [`CaveLayerStreamer`](/mod/game-api/types/alta-world/cavelayerstreamer), [`StaticCaveChunk`](/mod/game-api/types/alta-world/staticcavechunk), [`ForestChunk`](/mod/game-api/types/global-e-h/forestchunk)

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-clientloadingfinished" /><code>{"event Action ClientLoadingFinished"}</code> | Fired when the client has finished loading the generated content. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loaddynamic" /><code>{"Task LoadDynamic(bool hasGenerated)"}</code> | Generates or loads the dynamic (networked) content. `hasGenerated` says whether it was generated before. |
| <Link id="m-loadstatic" /><code>{"Task LoadStatic(CancellationToken cancellationToken)"}</code> | Loads the static, non-networked content. Called on client and server. |
| <Link id="m-unloaddynamic" /><code>{"void UnloadDynamic()"}</code> | Despawns the dynamic content. |
| <Link id="m-unloadstatic" /><code>{"void UnloadStatic()"}</code> | Clears the static content. |

## Used in

Members of other types that take, return or hold a `IProceduralGenerationStreamer`:

[`Chunk.ProceduralStreamer`](/mod/game-api/types/alta-world/chunk#m-proceduralstreamer).
