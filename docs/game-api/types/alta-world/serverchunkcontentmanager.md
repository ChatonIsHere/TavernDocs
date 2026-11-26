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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`ChunkContentManager`](/game-api/types/alta-world/chunkcontentmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerChunkContentManager("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicmanager" /><code><Link to="/game-api/types/alta-world/dynamicchunkcontentmanager">{"DynamicChunkContentManager"}</Link>{" DynamicManager { get; }"}</code> | Manager for the chunk's dynamic (saved) content. |
| <Link id="m-isallowingunload" /><code>{"override bool IsAllowingUnload { get; }"}</code> | True when the dynamic content allows unload and the static content does too (or is skipped). |
| <Link id="m-staticmanager" /><code><Link to="/game-api/types/alta-world/staticchunkcontentmanager">{"StaticChunkContentManager"}</Link>{" StaticManager { get; }"}</code> | Manager for the chunk's static content. Null if the chunk skips static content. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"override async Task Clear()"}</code> | Clears the base state and the dynamic content. |
| <Link id="m-save" /><code>{"override async Task Save()"}</code> | Saves static (if not skipped) then dynamic content. |
| <Link id="m-updateidentifier" /><code>{"override void UpdateIdentifier()"}</code> | Updates the identifier on itself and both managers. |
| <Link id="m-loadinternal" /><code>{"protected override async Task LoadInternal()"}</code> | Starts reading the dynamic save, loads static content, then loads dynamic content. |
| <Link id="m-unloadinternal" /><code>{"protected override async Task UnloadInternal()"}</code> | Unloads dynamic content first, then static content. |
