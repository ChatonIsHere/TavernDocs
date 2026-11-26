---
title: "ChunkEventHandler"
description: "Callback with a chunk, used by NetworkEntity.AddedToChunk, RemovedFromChunk and Chunker.EnteredChunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkEventHandler

A **delegate** in `Root.Township`, no namespace.

Callback with a chunk, used by `NetworkEntity.AddedToChunk`, `RemovedFromChunk` and `Chunker.EnteredChunk`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkEventHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `ChunkEventHandler`:

[`NetworkEntity.AddedToChunk`](/game-api/types/alta-networking/networkentity#m-addedtochunk), [`NetworkEntity.RemovedFromChunk`](/game-api/types/alta-networking/networkentity#m-removedfromchunk), [`Chunker.EnteredChunk`](/game-api/types/global-c-d/chunker#m-enteredchunk), [`Chunker.LeftChunk`](/game-api/types/global-c-d/chunker#m-leftchunk).
