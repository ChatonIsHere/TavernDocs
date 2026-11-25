---
title: "ClientChunkContentManager"
description: "class ClientChunkContentManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientChunkContentManager

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`ChunkContentManager`](/game-api/types/alta-world/chunkcontentmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientChunkContentManager("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cancelload" /><code>{"private CancellationTokenSource cancelLoad"}</code> |  |
| <Link id="m-hasstreamer" /><code>{"private bool hasStreamer"}</code> |  |
| <Link id="m-staticcontentmanager" /><code>{"private "}<Link to="/game-api/types/alta-world/staticchunkcontentmanager">{"StaticChunkContentManager"}</Link>{" staticContentManager"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-save" /><code>{"override async Task Save()"}</code> |  |
| <Link id="m-loadinternal" /><code>{"protected override async Task LoadInternal()"}</code> |  |
| <Link id="m-unloadinternal" /><code>{"protected override async Task UnloadInternal()"}</code> |  |
| <Link id="m-waitingtoloadforunload" /><code>{"protected override void WaitingToLoadForUnload()"}</code> |  |
