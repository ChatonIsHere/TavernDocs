---
title: "ServerAccess"
description: "class ServerAccess in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerAccess

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IServerAccess`](/game-api/types/assembly-api-client/iserveraccess)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal ServerAccess("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" info, "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" apiClient)"}</code> |

</details>

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-apiclient" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" apiClient"}</code> |
| <Link id="m-isrunninglocally" /><code>{"private bool isRunningLocally"}</code> |
| <Link id="m-serversession" /><code>{"private int? serverSession"}</code> |
| <Link id="m-templateserver" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" templateServer"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> |
| <Link id="m-serverinfo" /><code><Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" ServerInfo { get; }"}</code> |
| <Link id="m-serversession-2" /><code>{"int? ServerSession { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-gettemplateserver" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetTemplateServer()"}</code> |
| <Link id="m-ping" /><code>{"Task Ping()"}</code> |
| <Link id="m-setonlineplayersasync" /><code>{"async Task SetOnlinePlayersAsync(IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> onlinePlayers)"}</code> |
| <Link id="m-startasync" /><code>{"async Task StartAsync("}<Link to="/game-api/types/assembly-api-client/serverstartarguments">{"ServerStartArguments"}</Link>{" startupArgs)"}</code> |
| <Link id="m-stopasync" /><code>{"async Task StopAsync("}<Link to="/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" endReason)"}</code> |
