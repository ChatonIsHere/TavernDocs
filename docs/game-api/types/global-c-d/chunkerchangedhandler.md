---
title: "ChunkerChangedHandler"
description: "Delegate raised when an object's Chunker changes, with the old and new chunker."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkerChangedHandler

A **delegate** in `Root.Township`, no namespace.

Delegate raised when an object's `Chunker` changes, with the old and new chunker.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkerChangedHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" oldChunker, "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" newChunker, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" oldChunker, "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" newChunker)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `ChunkerChangedHandler`:

[`Chunker.ParentChanged`](/game-api/types/global-c-d/chunker#m-parentchanged).
