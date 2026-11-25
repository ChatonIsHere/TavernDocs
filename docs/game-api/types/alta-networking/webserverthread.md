---
title: "WebServerThread"
description: "class WebServerThread in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WebServerThread

A **class** in `Root.Township`, `Alta.WebServer`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WebServerThread(int port = 1761)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-port" /><code>{"const int Port"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-thread" /><code>{"private Thread thread"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-url" /><code>{"string Url { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-create" /><code>{"private WebServer Create()"}</code> |  |
| <Link id="m-run" /><code>{"private async void Run()"}</code> |  |
| <Link id="m-statechanged" /><code>{"private void StateChanged(object sender, WebServerStateChangedEventArgs e)"}</code> |  |

## Used in

Members of other types that take, return or hold a `WebServerThread`:

[`ServerHandler.webServer`](/game-api/types/alta-networking/serverhandler#m-webserver).
