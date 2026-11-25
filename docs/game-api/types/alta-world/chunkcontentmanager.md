---
title: "ChunkContentManager"
description: "abstract class ChunkContentManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkContentManager

An **abstract class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Derived types** [`ClientChunkContentManager`](/game-api/types/alta-world/clientchunkcontentmanager), [`DynamicChunkContentManager`](/game-api/types/alta-world/dynamicchunkcontentmanager), [`EmptyChunkContentManager`](/game-api/types/alta-world/emptychunkcontentmanager), [`ServerChunkContentManager`](/game-api/types/alta-world/serverchunkcontentmanager), [`StaticChunkContentManager`](/game-api/types/alta-world/staticchunkcontentmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkContentManager("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-loadtask" /><code>{"protected Task loadTask"}</code> |  |
| <Link id="m-unloadtask" /><code>{"protected Task unloadTask"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-currentprocess" /><code><Link to="/game-api/types/alta-world/contentstate">{"ContentState"}</Link>{" CurrentProcess { get; protected set; }"}</code> |  |
| <Link id="m-desiredstate" /><code><Link to="/game-api/types/alta-world/contentstate">{"ContentState"}</Link>{" DesiredState { get; private set; }"}</code> |  |
| <Link id="m-isallowingunload" /><code>{"virtual bool IsAllowingUnload { get; }"}</code> |  |
| <Link id="m-istransitioning" /><code>{"bool IsTransitioning { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-loaded" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> Loaded"}</code> |  |
| <Link id="m-unloaded" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> Unloaded"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"virtual async Task Clear()"}</code> |  |
| <Link id="m-load" /><code>{"async Task Load()"}</code> |  |
| <Link id="m-save" /><code>{"virtual Task Save()"}</code> |  |
| <Link id="m-unload" /><code>{"async Task Unload()"}</code> |  |
| <Link id="m-updateidentifier" /><code>{"virtual void UpdateIdentifier()"}</code> |  |
| <Link id="m-loadinternal" /><code>{"protected virtual async Task LoadInternal()"}</code> |  |
| <Link id="m-unloadinternal" /><code>{"protected virtual async Task UnloadInternal()"}</code> |  |
| <Link id="m-waitingtoloadforunload" /><code>{"protected virtual void WaitingToLoadForUnload()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ChunkContentManager`:

[`Chunk.ContentManager`](/game-api/types/alta-world/chunk#m-contentmanager).
