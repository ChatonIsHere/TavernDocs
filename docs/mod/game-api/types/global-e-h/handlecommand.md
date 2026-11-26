---
title: "HandleCommand"
description: "Handler for a remote console command received by ClientCommandHandler: gets the raw message buffer and its length."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandleCommand

A **delegate** in `Root.Township`, the global namespace.

Handler for a remote console command received by `ClientCommandHandler`: gets the raw message buffer and its length. Registered per command type with `AddHandler`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandleCommand(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(byte[] buffer, int length, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(byte[] buffer, int length)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `HandleCommand`:

[`ClientCommandHandler.AddHandler`](/mod/game-api/types/global-c-d/clientcommandhandler#m-addhandler), [`ClientCommandHandler.commandHandlers`](/mod/game-api/types/global-c-d/clientcommandhandler#m-commandhandlers).
