---
title: "ClientChunkContentManager"
description: "Client side content manager for a chunk: loads and unloads the chunk's static content, and waits for its procedural streamer if it has one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientChunkContentManager

A **class** in `Root.Township`, `Alta.Chunks`.

Client side content manager for a chunk: loads and unloads the chunk's static content, and waits for its procedural streamer if it has one.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`ChunkContentManager`](/mod/game-api/types/alta-world/chunkcontentmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientChunkContentManager("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Creates a `ClientChunkContentManager` from `chunk`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelload" /><code>{"private CancellationTokenSource cancelLoad"}</code> | Cancels the procedural streamer's load. |
| <Link id="m-hasstreamer" /><code>{"private bool hasStreamer"}</code> | Whether the chunk had a procedural streamer when this manager was made. |
| <Link id="m-staticcontentmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/staticchunkcontentmanager">{"StaticChunkContentManager"}</Link>{" staticContentManager"}</code> | The manager for the chunk's static content. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-save" /><code>{"override async Task Save()"}</code> | Saves the static content. |
| <Link id="m-loadinternal" /><code>{"protected override async Task LoadInternal()"}</code> | Loads the static content, then if there is a procedural streamer, loads its static part and waits for its `ClientLoadingFinished`. |
| <Link id="m-unloadinternal" /><code>{"protected override async Task UnloadInternal()"}</code> | Unloads the procedural streamer's static part, then the static content. |
| <Link id="m-waitingtoloadforunload" /><code>{"protected override void WaitingToLoadForUnload()"}</code> | Cancels a procedural load in progress when an unload is waiting on it. |
