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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Documented in** [Server settings](/game-api/networking/server-settings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConnectionInfo()"}</code> | Creates a `ConnectionInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-address" /><code>{"IPAddress Address { get; set; }"}</code> | Public IP address of the server. Defaults to loopback. |
| <Link id="m-consoleport" /><code>{"int? ConsolePort { get; set; }"}</code> | Port of the server's console, if it has one. |
| <Link id="m-gameport" /><code>{"int GamePort { get; set; }"}</code> | Port players connect to. Defaults to 1757. |
| <Link id="m-localaddress" /><code>{"IPAddress LocalAddress { get; set; }"}</code> | Server's local network IP. Defaults to loopback. |
| <Link id="m-loggingport" /><code>{"int? LoggingPort { get; set; }"}</code> | Port for the server's log stream, if any. |
| <Link id="m-podname" /><code>{"string PodName { get; set; }"}</code> | Name of the hosting pod the server runs in. |
| <Link id="m-serverid" /><code>{"int ServerId { get; set; }"}</code> | The server's ID. |
| <Link id="m-webserverport" /><code>{"int? WebServerPort { get; set; }"}</code> | Port of the server's web server, if any. |
| <Link id="m-websocketport" /><code>{"int? WebSocketPort { get; set; }"}</code> | Port of the server's web socket, if any. |

## Used in

Members of other types that take, return or hold a `ConnectionInfo`:

[`AllocationResult.ConnectionInfo`](/game-api/types/assembly-api-models/allocationresult#m-connectioninfo), [`ServerJoinResult.ConnectionInfo`](/game-api/types/assembly-api-models/serverjoinresult#m-connectioninfo), [`ServerCommandModule.MigrateClientToNewInstance`](/game-api/types/alta-console/servercommandmodule#m-migrateclienttonewinstance), [`JoinedServerInfo.ConnectionInfo`](/game-api/types/alta-networking/joinedserverinfo#m-connectioninfo), [`DevGameServerInfo.ConnectionInfo`](/game-api/types/global-c-d/devgameserverinfo#m-connectioninfo), [`JoinServerPipeline.connectionInfo`](/game-api/types/global-i-l/joinserverpipeline#m-connectioninfo).
