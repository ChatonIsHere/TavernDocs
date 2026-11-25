---
title: "ChunkEventHandler"
description: "delegate ChunkEventHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkEventHandler

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChunkEventHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |

## Used in

Members of other types that take, return or hold a `ChunkEventHandler`:

[`NetworkEntity.AddedToChunk`](/game-api/types/alta-networking/networkentity#m-addedtochunk), [`NetworkEntity.RemovedFromChunk`](/game-api/types/alta-networking/networkentity#m-removedfromchunk), [`Chunker.EnteredChunk`](/game-api/types/global-c-d/chunker#m-enteredchunk), [`Chunker.LeftChunk`](/game-api/types/global-c-d/chunker#m-leftchunk).
