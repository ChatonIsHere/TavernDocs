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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LaunchLocalServerRequest()"}</code> | <span className="api-desc">Creates a `LaunchLocalServerRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-address" /><code>{"IPAddress Address { get; set; }"}</code> | <span className="api-desc">Public address of the server.</span> |
| <Link id="m-consoleport" /><code>{"int? ConsolePort { get; set; }"}</code> | <span className="api-desc">Port for the remote console, if any.</span> |
| <Link id="m-gameport" /><code>{"int GamePort { get; set; }"}</code> | <span className="api-desc">Port players connect to.</span> |
| <Link id="m-gameversion" /><code><Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/gameversion">{"GameVersion"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Version of the game the server runs.</span> |
| <Link id="m-localaddress" /><code>{"IPAddress LocalAddress { get; set; }"}</code> | <span className="api-desc">Address of the server on its local network.</span> |
| <Link id="m-loggingport" /><code>{"int? LoggingPort { get; set; }"}</code> | <span className="api-desc">Port for the logging connection, if any.</span> |
| <Link id="m-webserverport" /><code>{"int? WebServerPort { get; set; }"}</code> | <span className="api-desc">Port for the server's web server, if any.</span> |
| <Link id="m-websocketport" /><code>{"int? WebSocketPort { get; set; }"}</code> | <span className="api-desc">Port for the web socket, if any.</span> |

## Used in

Members of other types that take, return or hold a `LaunchLocalServerRequest`:

<div className="api-used-in">

[`LowLevelApiClient.StartLocalServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-startlocalserver).

</div>
