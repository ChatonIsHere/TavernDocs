---
title: "WebServerThread"
description: "Server: small HTTP server on its own thread that serves the save cache at /cache, output files at /output and the console at /console, with CORS open."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebServerThread

A **class** in `Root.Township`, `Alta.WebServer`.

Server: small HTTP server on its own thread that serves the save cache at `/cache`, output files at `/output` and the console at `/console`, with CORS open. `ServerHandler` starts it.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WebServerThread(int port = 1761)"}</code> | <span className="api-desc">Creates a `WebServerThread` from `port`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-port" /><code>{"const int Port"}</code> | <span className="api-desc">Default port, 1761.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-thread" /><code>{"private Thread thread"}</code> | <span className="api-desc">The thread the web server runs on.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-url" /><code>{"string Url { get; }"}</code> | <span className="api-desc">URL prefix the server listens on, all hosts on the given port.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Aborts the web server thread.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"private WebServer Create()"}</code> | <span className="api-desc">Builds the EmbedIO web server with the CORS, cache, output and console modules.</span> |
| <Link id="m-run" /><code>{"private async void Run()"}</code> | <span className="api-desc">Thread entry: runs the web server. If it fails to start, the whole game server is stopped.</span> |
| <Link id="m-statechanged" /><code>{"private void StateChanged(object sender, WebServerStateChangedEventArgs e)"}</code> | <span className="api-desc">Logs web server state changes.</span> |

</details>

## Used in

Members of other types that take, return or hold a `WebServerThread`:

<div className="api-used-in">

[`ServerHandler.webServer`](/mod/game-api/types/alta-networking/serverhandler#m-webserver).

</div>
