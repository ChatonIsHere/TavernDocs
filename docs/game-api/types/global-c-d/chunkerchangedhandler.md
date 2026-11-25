---
title: "ChunkerChangedHandler"
description: "delegate ChunkerChangedHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkerChangedHandler

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkerChangedHandler(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" oldChunker, "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" newChunker, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" oldChunker, "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" newChunker)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ChunkerChangedHandler`:

[`Chunker.ParentChanged`](/game-api/types/global-c-d/chunker#m-parentchanged).
