---
title: "ChunkerChangedHandler"
description: "Delegate raised when an object's Chunker changes, with the old and new chunker."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkerChangedHandler

A **delegate** in `Root.Township`, the global namespace.

Delegate raised when an object's `Chunker` changes, with the old and new chunker.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkerChangedHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" oldChunker, "}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" newChunker, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" oldChunker, "}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" newChunker)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `ChunkerChangedHandler`:

<div className="api-used-in">

[`Chunker.ParentChanged`](/mod/game-api/types/global-c-d/chunker#m-parentchanged).

</div>
