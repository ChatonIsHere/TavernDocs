---
title: "ServerChunkContentManager"
description: "Server side content manager for a chunk: handles its static content (unless the chunk skips it) and its dynamic, saved content."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerChunkContentManager

A **class** in `Root.Township`, `Alta.Chunks`.

Server side content manager for a chunk: handles its static content (unless the chunk skips it) and its dynamic, saved content.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`ChunkContentManager`](/mod/game-api/types/alta-world/chunkcontentmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerChunkContentManager("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Creates a `ServerChunkContentManager` from `chunk`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicmanager" /><code><Link to="/mod/game-api/types/alta-world/dynamicchunkcontentmanager">{"DynamicChunkContentManager"}</Link>{" DynamicManager { get; }"}</code> | <span className="api-desc">Manager for the chunk's dynamic (saved) content.</span> |
| <Link id="m-isallowingunload" /><code>{"override bool IsAllowingUnload { get; }"}</code> | <span className="api-desc">True when the dynamic content allows unload and the static content does too (or is skipped).</span> |
| <Link id="m-staticmanager" /><code><Link to="/mod/game-api/types/alta-world/staticchunkcontentmanager">{"StaticChunkContentManager"}</Link>{" StaticManager { get; }"}</code> | <span className="api-desc">Manager for the chunk's static content. Null if the chunk skips static content.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"override async Task Clear()"}</code> | <span className="api-desc">Clears the base state and the dynamic content.</span> |
| <Link id="m-save" /><code>{"override async Task Save()"}</code> | <span className="api-desc">Saves static (if not skipped) then dynamic content.</span> |
| <Link id="m-updateidentifier" /><code>{"override void UpdateIdentifier()"}</code> | <span className="api-desc">Updates the identifier on itself and both managers.</span> |
| <Link id="m-loadinternal" /><code>{"protected override async Task LoadInternal()"}</code> | <span className="api-desc">Starts reading the dynamic save, loads static content, then loads dynamic content.</span> |
| <Link id="m-unloadinternal" /><code>{"protected override async Task UnloadInternal()"}</code> | <span className="api-desc">Unloads dynamic content first, then static content.</span> |
