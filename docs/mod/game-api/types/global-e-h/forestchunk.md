---
title: "ForestChunk"
description: "Streams procedural forests for a LocationChunk: asks each overlapping ForestGenerator for static and dynamic content as the chunk loads and unloads."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestChunk

A **class** in `Root.Township`, the global namespace.

Streams procedural forests for a `LocationChunk`: asks each overlapping `ForestGenerator` for static and dynamic content as the chunk loads and unloads.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`IProceduralGenerationStreamer`](/mod/game-api/types/alta-world/iproceduralgenerationstreamer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestChunk()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancellationtoken" /><code>{"private CancellationToken cancellationToken"}</code> | Unused cancellation token field. |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> | Backing field for `Chunk`. |
| <Link id="m-inbounds" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{"> inBounds"}</code> | Cache of overlapping generators. |
| <Link id="m-isterrainmodified" /><code>{"private bool isTerrainModified"}</code> | Set after the first generator loads; only the first may modify terrain. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk-2" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; }"}</code> | The location chunk on this object. |
| <Link id="m-forests" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{"> Forests { get; }"}</code> | Forest generators whose bounds overlap the chunk, worked out once and cached. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-clientloadingfinished" /><code>{"event Action ClientLoadingFinished"}</code> | Client: fired when static forest loading has finished for this chunk. |

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loaddynamic" /><code>{"private async Task Alta.Chunks.IProceduralGenerationStreamer.LoadDynamic(bool hasGenerated)"}</code> | Requests dynamic forest content from each generator unless the chunk was already generated. |
| <Link id="m-loadstatic" /><code>{"private async Task Alta.Chunks.IProceduralGenerationStreamer.LoadStatic(CancellationToken cancellationToken)"}</code> | Finds overlapping generators, requests static content from each, then fires `ClientLoadingFinished` on clients. |
| <Link id="m-unloaddynamic" /><code>{"private void Alta.Chunks.IProceduralGenerationStreamer.UnloadDynamic()"}</code> | Releases dynamic forest content from each generator. |
| <Link id="m-unloadstatic" /><code>{"private void Alta.Chunks.IProceduralGenerationStreamer.UnloadStatic()"}</code> | Releases static forest content from each generator. |

</details>
