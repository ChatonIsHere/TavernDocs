---
title: "ServerHandler.ConnectionStep"
description: "delegate ServerHandler.ConnectionStep in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerHandler.ConnectionStep

A **delegate** in `Root.Township`, `Alta.Networking.Servers`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Nested in** [`ServerHandler`](/game-api/types/alta-networking/serverhandler)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConnectionStep(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, Action<string> progressNotification, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual Task EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual Task Invoke("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, Action<string> progressNotification)"}</code> |

## Used in

Members of other types that take, return or hold a `ConnectionStep`:

[`ServerHandler.AddConnectionStep`](/game-api/types/alta-networking/serverhandler#m-addconnectionstep), [`ServerHandler.connectionSteps`](/game-api/types/alta-networking/serverhandler#m-connectionsteps).
