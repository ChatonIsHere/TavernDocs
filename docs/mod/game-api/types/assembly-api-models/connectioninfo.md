---
title: "ConnectionInfo"
description: "API model for how to reach a game server: its addresses and ports."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConnectionInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

API model for how to reach a game server: its addresses and ports. Comes back in a server join result and is used by the console and web socket clients.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Documented in** [Server settings](/mod/game-api/networking/server-settings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConnectionInfo()"}</code> | <span className="api-desc">Creates a `ConnectionInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-address" /><code>{"IPAddress Address { get; set; }"}</code> | <span className="api-desc">Public IP address of the server. Defaults to loopback.</span> |
| <Link id="m-consoleport" /><code>{"int? ConsolePort { get; set; }"}</code> | <span className="api-desc">Port of the server's console, if it has one.</span> |
| <Link id="m-gameport" /><code>{"int GamePort { get; set; }"}</code> | <span className="api-desc">Port players connect to. Defaults to 1757.</span> |
| <Link id="m-localaddress" /><code>{"IPAddress LocalAddress { get; set; }"}</code> | <span className="api-desc">Server's local network IP. Defaults to loopback.</span> |
| <Link id="m-loggingport" /><code>{"int? LoggingPort { get; set; }"}</code> | <span className="api-desc">Port for the server's log stream, if any.</span> |
| <Link id="m-podname" /><code>{"string PodName { get; set; }"}</code> | <span className="api-desc">Name of the hosting pod the server runs in.</span> |
| <Link id="m-serverid" /><code>{"int ServerId { get; set; }"}</code> | <span className="api-desc">The server's ID.</span> |
| <Link id="m-webserverport" /><code>{"int? WebServerPort { get; set; }"}</code> | <span className="api-desc">Port of the server's web server, if any.</span> |
| <Link id="m-websocketport" /><code>{"int? WebSocketPort { get; set; }"}</code> | <span className="api-desc">Port of the server's web socket, if any.</span> |

## Used in

Members of other types that take, return or hold a `ConnectionInfo`:

<div className="api-used-in">

[`AllocationResult.ConnectionInfo`](/mod/game-api/types/assembly-api-models/allocationresult#m-connectioninfo), [`ServerJoinResult.ConnectionInfo`](/mod/game-api/types/assembly-api-models/serverjoinresult#m-connectioninfo), [`ServerCommandModule.MigrateClientToNewInstance`](/mod/game-api/types/alta-console/servercommandmodule#m-migrateclienttonewinstance), [`JoinedServerInfo.ConnectionInfo`](/mod/game-api/types/alta-networking/joinedserverinfo#m-connectioninfo), [`DevGameServerInfo.ConnectionInfo`](/mod/game-api/types/global-c-d/devgameserverinfo#m-connectioninfo), [`JoinServerPipeline.connectionInfo`](/mod/game-api/types/global-i-l/joinserverpipeline#m-connectioninfo).

</div>
