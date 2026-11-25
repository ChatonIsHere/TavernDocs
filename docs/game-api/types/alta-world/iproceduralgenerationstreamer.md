---
title: "IProceduralGenerationStreamer"
description: "interface IProceduralGenerationStreamer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IProceduralGenerationStreamer

An **interface** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Derived types** [`CaveLayerStreamer`](/game-api/types/alta-world/cavelayerstreamer), [`StaticCaveChunk`](/game-api/types/alta-world/staticcavechunk), [`ForestChunk`](/game-api/types/global-e-h/forestchunk)

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-clientloadingfinished" /><code>{"event Action ClientLoadingFinished"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loaddynamic" /><code>{"Task LoadDynamic(bool hasGenerated)"}</code> |  |
| <Link id="m-loadstatic" /><code>{"Task LoadStatic(CancellationToken cancellationToken)"}</code> |  |
| <Link id="m-unloaddynamic" /><code>{"void UnloadDynamic()"}</code> |  |
| <Link id="m-unloadstatic" /><code>{"void UnloadStatic()"}</code> |  |

## Used in

Members of other types that take, return or hold a `IProceduralGenerationStreamer`:

[`Chunk.ProceduralStreamer`](/game-api/types/alta-world/chunk#m-proceduralstreamer).
