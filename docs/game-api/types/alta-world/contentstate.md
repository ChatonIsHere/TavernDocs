---
title: "ContentState"
description: "Whether a chunk's content is loaded or unloaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ContentState

An **enum** in `Root.Township`, `Alta.Chunks`.

Whether a chunk's content is loaded or unloaded. Used for `ChunkContentManager.DesiredState` and `CurrentProcess`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Values

| Member |
| --- |
| <Link id="m-loaded" /><code>{"Loaded = 0"}</code> |
| <Link id="m-unloaded" /><code>{"Unloaded = 1"}</code> |

## Used in

Members of other types that take, return or hold a `ContentState`:

[`ChunkContentManager.CurrentProcess`](/game-api/types/alta-world/chunkcontentmanager#m-currentprocess), [`ChunkContentManager.DesiredState`](/game-api/types/alta-world/chunkcontentmanager#m-desiredstate).
