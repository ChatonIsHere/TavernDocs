---
title: "LaunchLocalServerRequest"
description: "Body of the Alta web API call a locally run server makes to start a session (StartLocalServer), with its addresses and ports."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LaunchLocalServerRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Body of the Alta web API call a locally run server makes to start a session (`StartLocalServer`), with its addresses and ports.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LaunchLocalServerRequest()"}</code> | Creates a `LaunchLocalServerRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-address" /><code>{"IPAddress Address { get; set; }"}</code> | Public address of the server. |
| <Link id="m-consoleport" /><code>{"int? ConsolePort { get; set; }"}</code> | Port for the remote console, if any. |
| <Link id="m-gameport" /><code>{"int GamePort { get; set; }"}</code> | Port players connect to. |
| <Link id="m-gameversion" /><code><Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" { get; set; }"}</code> | Version of the game the server runs. |
| <Link id="m-localaddress" /><code>{"IPAddress LocalAddress { get; set; }"}</code> | Address of the server on its local network. |
| <Link id="m-loggingport" /><code>{"int? LoggingPort { get; set; }"}</code> | Port for the logging connection, if any. |
| <Link id="m-webserverport" /><code>{"int? WebServerPort { get; set; }"}</code> | Port for the server's web server, if any. |
| <Link id="m-websocketport" /><code>{"int? WebSocketPort { get; set; }"}</code> | Port for the web socket, if any. |

## Used in

Members of other types that take, return or hold a `LaunchLocalServerRequest`:

[`LowLevelApiClient.StartLocalServer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-startlocalserver).
