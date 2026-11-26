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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `IDisposable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WebServerThread(int port = 1761)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-port" /><code>{"const int Port"}</code> | Default port, 1761. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-thread" /><code>{"private Thread thread"}</code> | The thread the web server runs on. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-url" /><code>{"string Url { get; }"}</code> | URL prefix the server listens on, all hosts on the given port. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Aborts the web server thread. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"private WebServer Create()"}</code> | Builds the EmbedIO web server with the CORS, cache, output and console modules. |
| <Link id="m-run" /><code>{"private async void Run()"}</code> | Thread entry: runs the web server. If it fails to start, the whole game server is stopped. |
| <Link id="m-statechanged" /><code>{"private void StateChanged(object sender, WebServerStateChangedEventArgs e)"}</code> | Logs web server state changes. |

</details>

## Used in

Members of other types that take, return or hold a `WebServerThread`:

[`ServerHandler.webServer`](/game-api/types/alta-networking/serverhandler#m-webserver).
