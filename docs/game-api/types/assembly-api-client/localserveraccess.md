---
title: "LocalServerAccess"
description: "Server session that never talks to the API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalServerAccess

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Server session that never talks to the API. Used for a server started with a negative ID (`/start_server -1`, how Tavern starts servers) and by the offline client.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IServerAccess`](/game-api/types/assembly-api-client/iserveraccess)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LocalServerAccess("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" info)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | Settable flag; nothing here reads it. |
| <Link id="m-serverinfo" /><code><Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" ServerInfo { get; }"}</code> | The server info it was made with. |
| <Link id="m-serversession" /><code>{"int? ServerSession { get; }"}</code> | Always null; there is no API session. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettemplateserver" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetTemplateServer()"}</code> | Returns this server's own info. |
| <Link id="m-ping" /><code>{"Task Ping()"}</code> | Does nothing. |
| <Link id="m-setonlineplayersasync" /><code>{"Task SetOnlinePlayersAsync(IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> onlinePlayers)"}</code> | Stores the online player list on `ServerInfo` without sending it anywhere. |
| <Link id="m-startasync" /><code>{"Task StartAsync("}<Link to="/game-api/types/assembly-api-client/serverstartarguments">{"ServerStartArguments"}</Link>{" startupArgs)"}</code> | Does nothing. |
| <Link id="m-stopasync" /><code>{"Task StopAsync("}<Link to="/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> | Does nothing. |
