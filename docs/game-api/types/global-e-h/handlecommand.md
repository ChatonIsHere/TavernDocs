---
title: "HandleCommand"
description: "delegate HandleCommand in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandleCommand

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HandleCommand(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(byte[] buffer, int length, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(byte[] buffer, int length)"}</code> |

## Used in

Members of other types that take, return or hold a `HandleCommand`:

[`ClientCommandHandler.AddHandler`](/game-api/types/global-c-d/clientcommandhandler#m-addhandler), [`ClientCommandHandler.commandHandlers`](/game-api/types/global-c-d/clientcommandhandler#m-commandhandlers).
