---
title: "TimberBlockEvent"
description: "delegate TimberBlockEvent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberBlockEvent

A **delegate** in `Root.Township`, `Alta.Carpentry`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimberBlockEvent(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-crafting/timberblock">{"TimberBlock"}</Link>{" block)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TimberBlockEvent`:

[`ChisellingDeck.blockModified`](/game-api/types/alta-crafting/chisellingdeck#m-blockmodified), [`ChisellingDeck.changedBlock`](/game-api/types/alta-crafting/chisellingdeck#m-changedblock), [`TimberBlock.Done`](/game-api/types/alta-crafting/timberblock#m-done), [`TimberBlock.Modified`](/game-api/types/alta-crafting/timberblock#m-modified).
