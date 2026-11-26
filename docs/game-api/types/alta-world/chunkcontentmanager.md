---
title: "ChunkContentManager"
description: "Base for what loads and unloads a chunk's contents."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkContentManager

An **abstract class** in `Root.Township`, `Alta.Chunks`.

Base for what loads and unloads a chunk's contents. Tracks the wanted state and runs one load or unload at a time; subclasses include server, client, static and dynamic managers.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Derived types** [`ClientChunkContentManager`](/game-api/types/alta-world/clientchunkcontentmanager), [`DynamicChunkContentManager`](/game-api/types/alta-world/dynamicchunkcontentmanager), [`EmptyChunkContentManager`](/game-api/types/alta-world/emptychunkcontentmanager), [`ServerChunkContentManager`](/game-api/types/alta-world/serverchunkcontentmanager), [`StaticChunkContentManager`](/game-api/types/alta-world/staticchunkcontentmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkContentManager("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Creates a `ChunkContentManager` from `chunk`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-loadtask" /><code>{"protected Task loadTask"}</code> | The running load task, or null. |
| <Link id="m-unloadtask" /><code>{"protected Task unloadTask"}</code> | The running unload task, or null. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; private set; }"}</code> | The chunk whose contents this manages. |
| <Link id="m-currentprocess" /><code><Link to="/game-api/types/alta-world/contentstate">{"ContentState"}</Link>{" CurrentProcess { get; protected set; }"}</code> | The state the manager is working towards or has reached. |
| <Link id="m-desiredstate" /><code><Link to="/game-api/types/alta-world/contentstate">{"ContentState"}</Link>{" DesiredState { get; private set; }"}</code> | The state last asked for with `Load` or `Unload`. |
| <Link id="m-isallowingunload" /><code>{"virtual bool IsAllowingUnload { get; }"}</code> | Whether the contents may be unloaded now. True by default. |
| <Link id="m-istransitioning" /><code>{"bool IsTransitioning { get; }"}</code> | True while a load or unload task is running. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-loaded" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> Loaded"}</code> | Raised when loading finishes and loaded is still the wanted state. |
| <Link id="m-unloaded" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> Unloaded"}</code> | Raised when unloading finishes and unloaded is still the wanted state. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"virtual async Task Clear()"}</code> | Clears the contents. Does nothing by default. |
| <Link id="m-load" /><code>{"async Task Load()"}</code> | Loads the contents, waiting for a running unload first. Raises `Loaded` if still wanted when done. |
| <Link id="m-save" /><code>{"virtual Task Save()"}</code> | Saves the contents. Does nothing by default. |
| <Link id="m-unload" /><code>{"async Task Unload()"}</code> | Unloads the contents, waiting for a running load first. Raises `Unloaded` if still wanted when done. |
| <Link id="m-updateidentifier" /><code>{"virtual void UpdateIdentifier()"}</code> | Hook for when the chunk's identifier changes. Does nothing by default. |
| <Link id="m-loadinternal" /><code>{"protected virtual async Task LoadInternal()"}</code> | Does the actual loading. Override in subclasses. |
| <Link id="m-unloadinternal" /><code>{"protected virtual async Task UnloadInternal()"}</code> | Does the actual unloading. Override in subclasses. |
| <Link id="m-waitingtoloadforunload" /><code>{"protected virtual void WaitingToLoadForUnload()"}</code> | Hook for subclasses; does nothing by default. |

## Used in

Members of other types that take, return or hold a `ChunkContentManager`:

[`Chunk.ContentManager`](/game-api/types/alta-world/chunk#m-contentmanager).
