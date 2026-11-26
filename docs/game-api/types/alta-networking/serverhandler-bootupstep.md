---
title: "ServerHandler.BootupStep"
description: "An async step run while the server boots, added with ServerHandler.AddBootupStep."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerHandler.BootupStep

A **delegate** in `Root.Township`, `Alta.Networking.Servers`.

An async step run while the server boots, added with `ServerHandler.AddBootupStep`. It can report progress text through the callback.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Nested in** [`ServerHandler`](/game-api/types/alta-networking/serverhandler)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BootupStep(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(Action<string> progressNotification, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual Task EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual Task Invoke(Action<string> progressNotification)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `BootupStep`:

[`ServerHandler.AddBootupStep`](/game-api/types/alta-networking/serverhandler#m-addbootupstep), [`ServerHandler.bootupSteps`](/game-api/types/alta-networking/serverhandler#m-bootupsteps).
