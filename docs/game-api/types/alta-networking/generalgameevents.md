---
title: "GeneralGameEvents"
description: "Static events for when a client connects to a server and when a server starts or ends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneralGameEvents

A **static class** in `Root.Township`, `Alta.Networking`.

Static events for when a client connects to a server and when a server starts or ends. Exceptions from handlers are logged, not thrown.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for handler errors. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-clientstarted" /><code>{"static event Action ClientStarted"}</code> | Client: raised by `ConnectToServerUtility` when it connects to a server. |
| <Link id="m-serverended" /><code>{"static event Action ServerEnded"}</code> | Server: raised by `ServerHandler` when the server shuts down. |
| <Link id="m-serverstarted" /><code>{"static event Action ServerStarted"}</code> | Server: raised by `ServerHandler` once the server has started. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onclientstarted" /><code>{"static void OnClientStarted()"}</code> | Raises `ClientStarted`. |
| <Link id="m-onserverended" /><code>{"static void OnServerEnded()"}</code> | Raises `ServerEnded`. |
| <Link id="m-onserverstarted" /><code>{"static void OnServerStarted()"}</code> | Raises `ServerStarted`. |
