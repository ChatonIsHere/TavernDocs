---
title: "PathWalker.OnTargetReached"
description: "Handler for PathWalker.OnPathEndReached, called when the walker reaches the end of its path."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PathWalker.OnTargetReached

A **delegate** in `Root.Township`, the global namespace.

Handler for `PathWalker.OnPathEndReached`, called when the walker reaches the end of its path.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PathWalker`](/mod/game-api/types/global-p/pathwalker)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OnTargetReached(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke()"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `OnTargetReached`:

[`PathWalker.OnPathEndReached`](/mod/game-api/types/global-p/pathwalker#m-onpathendreached).
