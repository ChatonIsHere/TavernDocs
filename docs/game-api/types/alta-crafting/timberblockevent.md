---
title: "TimberBlockEvent"
description: "Callback with a TimberBlock, used for its Done and Modified events and the chiselling deck's block events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberBlockEvent

A **delegate** in `Root.Township`, `Alta.Carpentry`.

Callback with a `TimberBlock`, used for its `Done` and `Modified` events and the chiselling deck's block events.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimberBlockEvent(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `TimberBlockEvent`:

[`ChisellingDeck.blockModified`](/game-api/types/alta-crafting/chisellingdeck#m-blockmodified), [`ChisellingDeck.changedBlock`](/game-api/types/alta-crafting/chisellingdeck#m-changedblock), [`TimberBlock.Done`](/game-api/types/alta-crafting/timberblock#m-done), [`TimberBlock.Modified`](/game-api/types/alta-crafting/timberblock#m-modified).
