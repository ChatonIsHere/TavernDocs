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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IServerAccess`](/mod/game-api/types/assembly-api-client/iserveraccess)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalServerAccess("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" info)"}</code> | <span className="api-desc">Creates a `LocalServerAccess` from `info`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | <span className="api-desc">Settable flag; nothing here reads it.</span> |
| <Link id="m-serverinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" ServerInfo { get; }"}</code> | <span className="api-desc">The server info it was made with.</span> |
| <Link id="m-serversession" /><code>{"int? ServerSession { get; }"}</code> | <span className="api-desc">Always null; there is no API session.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettemplateserver" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetTemplateServer()"}</code> | <span className="api-desc">Returns this server's own info.</span> |
| <Link id="m-ping" /><code>{"Task Ping()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-setonlineplayersasync" /><code>{"Task SetOnlinePlayersAsync(IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> onlinePlayers)"}</code> | <span className="api-desc">Stores the online player list on `ServerInfo` without sending it anywhere.</span> |
| <Link id="m-startasync" /><code>{"Task StartAsync("}<Link to="/mod/game-api/types/assembly-api-client/serverstartarguments">{"ServerStartArguments"}</Link>{" startupArgs)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-stopasync" /><code>{"Task StopAsync("}<Link to="/mod/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> | <span className="api-desc">Does nothing.</span> |
