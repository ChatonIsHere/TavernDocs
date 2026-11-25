---
title: "TimberPieceDelegate"
description: "delegate TimberPieceDelegate in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimberPieceDelegate

A **delegate** in `Root.Township`, `Alta.Carpentry`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimberPieceDelegate(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-crafting/timberpiecebase">{"TimberPieceBase"}</Link>{" piece)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TimberPieceDelegate`:

[`TimberPieceBase.OnChanged`](/game-api/types/alta-crafting/timberpiecebase#m-onchanged), [`TimberPieceBase.OnDone`](/game-api/types/alta-crafting/timberpiecebase#m-ondone).
