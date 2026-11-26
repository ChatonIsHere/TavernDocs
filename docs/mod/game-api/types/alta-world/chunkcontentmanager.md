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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Derived types** [`ClientChunkContentManager`](/mod/game-api/types/alta-world/clientchunkcontentmanager), [`DynamicChunkContentManager`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager), [`EmptyChunkContentManager`](/mod/game-api/types/alta-world/emptychunkcontentmanager), [`ServerChunkContentManager`](/mod/game-api/types/alta-world/serverchunkcontentmanager), [`StaticChunkContentManager`](/mod/game-api/types/alta-world/staticchunkcontentmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkContentManager("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Creates a `ChunkContentManager` from `chunk`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-loadtask" /><code>{"protected Task loadTask"}</code> | <span className="api-desc">The running load task, or null.</span> |
| <Link id="m-unloadtask" /><code>{"protected Task unloadTask"}</code> | <span className="api-desc">The running unload task, or null.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The chunk whose contents this manages.</span> |
| <Link id="m-currentprocess" /><code><Link to="/mod/game-api/types/alta-world/contentstate">{"ContentState"}</Link>{" CurrentProcess { get; protected set; }"}</code> | <span className="api-desc">The state the manager is working towards or has reached.</span> |
| <Link id="m-desiredstate" /><code><Link to="/mod/game-api/types/alta-world/contentstate">{"ContentState"}</Link>{" DesiredState { get; private set; }"}</code> | <span className="api-desc">The state last asked for with `Load` or `Unload`.</span> |
| <Link id="m-isallowingunload" /><code>{"virtual bool IsAllowingUnload { get; }"}</code> | <span className="api-desc">Whether the contents may be unloaded now. True by default.</span> |
| <Link id="m-istransitioning" /><code>{"bool IsTransitioning { get; }"}</code> | <span className="api-desc">True while a load or unload task is running.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-loaded" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> Loaded"}</code> | <span className="api-desc">Raised when loading finishes and loaded is still the wanted state.</span> |
| <Link id="m-unloaded" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> Unloaded"}</code> | <span className="api-desc">Raised when unloading finishes and unloaded is still the wanted state.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"virtual async Task Clear()"}</code> | <span className="api-desc">Clears the contents. Does nothing by default.</span> |
| <Link id="m-load" /><code>{"async Task Load()"}</code> | <span className="api-desc">Loads the contents, waiting for a running unload first. Raises `Loaded` if still wanted when done.</span> |
| <Link id="m-save" /><code>{"virtual Task Save()"}</code> | <span className="api-desc">Saves the contents. Does nothing by default.</span> |
| <Link id="m-unload" /><code>{"async Task Unload()"}</code> | <span className="api-desc">Unloads the contents, waiting for a running load first. Raises `Unloaded` if still wanted when done.</span> |
| <Link id="m-updateidentifier" /><code>{"virtual void UpdateIdentifier()"}</code> | <span className="api-desc">Hook for when the chunk's identifier changes. Does nothing by default.</span> |
| <Link id="m-loadinternal" /><code>{"protected virtual async Task LoadInternal()"}</code> | <span className="api-desc">Does the actual loading. Override in subclasses.</span> |
| <Link id="m-unloadinternal" /><code>{"protected virtual async Task UnloadInternal()"}</code> | <span className="api-desc">Does the actual unloading. Override in subclasses.</span> |
| <Link id="m-waitingtoloadforunload" /><code>{"protected virtual void WaitingToLoadForUnload()"}</code> | <span className="api-desc">Hook for subclasses; does nothing by default.</span> |

## Used in

Members of other types that take, return or hold a `ChunkContentManager`:

<div className="api-used-in">

[`Chunk.ContentManager`](/mod/game-api/types/alta-world/chunk#m-contentmanager).

</div>
