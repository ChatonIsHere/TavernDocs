---
title: "ServerHandler.BootupStep"
description: "delegate ServerHandler.BootupStep in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerHandler.BootupStep

A **delegate** in `Root.Township`, `Alta.Networking.Servers`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Nested in** [`ServerHandler`](/game-api/types/alta-networking/serverhandler)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BootupStep(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(Action<string> progressNotification, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual Task EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual Task Invoke(Action<string> progressNotification)"}</code> |  |

## Used in

Members of other types that take, return or hold a `BootupStep`:

[`ServerHandler.AddBootupStep`](/game-api/types/alta-networking/serverhandler#m-addbootupstep), [`ServerHandler.bootupSteps`](/game-api/types/alta-networking/serverhandler#m-bootupsteps).
