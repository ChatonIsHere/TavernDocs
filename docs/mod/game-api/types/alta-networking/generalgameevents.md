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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for handler errors.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-clientstarted" /><code>{"static event Action ClientStarted"}</code> | <span className="api-desc">Client: raised by `ConnectToServerUtility` when it connects to a server.</span> |
| <Link id="m-serverended" /><code>{"static event Action ServerEnded"}</code> | <span className="api-desc">Server: raised by `ServerHandler` when the server shuts down.</span> |
| <Link id="m-serverstarted" /><code>{"static event Action ServerStarted"}</code> | <span className="api-desc">Server: raised by `ServerHandler` once the server has started.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onclientstarted" /><code>{"static void OnClientStarted()"}</code> | <span className="api-desc">Raises `ClientStarted`.</span> |
| <Link id="m-onserverended" /><code>{"static void OnServerEnded()"}</code> | <span className="api-desc">Raises `ServerEnded`.</span> |
| <Link id="m-onserverstarted" /><code>{"static void OnServerStarted()"}</code> | <span className="api-desc">Raises `ServerStarted`.</span> |
