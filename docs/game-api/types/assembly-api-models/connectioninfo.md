---
title: "ConnectionInfo"
description: "class ConnectionInfo in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConnectionInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Documented in** [Server settings](/game-api/networking/server-settings)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConnectionInfo()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-address" /><code>{"IPAddress Address { get; set; }"}</code> |
| <Link id="m-consoleport" /><code>{"int? ConsolePort { get; set; }"}</code> |
| <Link id="m-gameport" /><code>{"int GamePort { get; set; }"}</code> |
| <Link id="m-localaddress" /><code>{"IPAddress LocalAddress { get; set; }"}</code> |
| <Link id="m-loggingport" /><code>{"int? LoggingPort { get; set; }"}</code> |
| <Link id="m-podname" /><code>{"string PodName { get; set; }"}</code> |
| <Link id="m-serverid" /><code>{"int ServerId { get; set; }"}</code> |
| <Link id="m-webserverport" /><code>{"int? WebServerPort { get; set; }"}</code> |
| <Link id="m-websocketport" /><code>{"int? WebSocketPort { get; set; }"}</code> |

## Used in

Members of other types that take, return or hold a `ConnectionInfo`:

[`AllocationResult.ConnectionInfo`](/game-api/types/assembly-api-models/allocationresult#m-connectioninfo), [`ServerJoinResult.ConnectionInfo`](/game-api/types/assembly-api-models/serverjoinresult#m-connectioninfo), [`ServerCommandModule.MigrateClientToNewInstance`](/game-api/types/alta-console/servercommandmodule#m-migrateclienttonewinstance), [`JoinedServerInfo.ConnectionInfo`](/game-api/types/alta-networking/joinedserverinfo#m-connectioninfo), [`DevGameServerInfo.ConnectionInfo`](/game-api/types/global-c-d/devgameserverinfo#m-connectioninfo), [`JoinServerPipeline.connectionInfo`](/game-api/types/global-i-l/joinserverpipeline#m-connectioninfo).
