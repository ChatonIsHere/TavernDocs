---
title: "LocalServerAccess"
description: "class LocalServerAccess in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalServerAccess

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IServerAccess`](/game-api/types/assembly-api-client/iserveraccess)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LocalServerAccess("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" info)"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> |
| <Link id="m-serverinfo" /><code><Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" ServerInfo { get; }"}</code> |
| <Link id="m-serversession" /><code>{"int? ServerSession { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-gettemplateserver" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetTemplateServer()"}</code> |
| <Link id="m-ping" /><code>{"Task Ping()"}</code> |
| <Link id="m-setonlineplayersasync" /><code>{"Task SetOnlinePlayersAsync(IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> onlinePlayers)"}</code> |
| <Link id="m-startasync" /><code>{"Task StartAsync("}<Link to="/game-api/types/assembly-api-client/serverstartarguments">{"ServerStartArguments"}</Link>{" startupArgs)"}</code> |
| <Link id="m-stopasync" /><code>{"Task StopAsync("}<Link to="/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> |
