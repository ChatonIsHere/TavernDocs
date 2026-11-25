---
title: "ServerChunkContentManager"
description: "class ServerChunkContentManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerChunkContentManager

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`ChunkContentManager`](/game-api/types/alta-world/chunkcontentmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerChunkContentManager("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicmanager" /><code><Link to="/game-api/types/alta-world/dynamicchunkcontentmanager">{"DynamicChunkContentManager"}</Link>{" DynamicManager { get; }"}</code> |  |
| <Link id="m-isallowingunload" /><code>{"override bool IsAllowingUnload { get; }"}</code> |  |
| <Link id="m-staticmanager" /><code><Link to="/game-api/types/alta-world/staticchunkcontentmanager">{"StaticChunkContentManager"}</Link>{" StaticManager { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"override async Task Clear()"}</code> |  |
| <Link id="m-save" /><code>{"override async Task Save()"}</code> |  |
| <Link id="m-updateidentifier" /><code>{"override void UpdateIdentifier()"}</code> |  |
| <Link id="m-loadinternal" /><code>{"protected override async Task LoadInternal()"}</code> |  |
| <Link id="m-unloadinternal" /><code>{"protected override async Task UnloadInternal()"}</code> |  |
