---
title: "ServerAccess"
description: "A server's session with Alta's web API: start, ping, online players and stop."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerAccess

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

A server's session with Alta's web API: start, ping, online players and stop. Server side; returned by `ServerApiClient` for a positive server ID. Every call goes to the API, which no longer answers.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IServerAccess`](/game-api/types/assembly-api-client/iserveraccess)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal ServerAccess("}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" info, "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" apiClient)"}</code> | Creates a `ServerAccess` from `info` and `apiClient`. |

</details>

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" apiClient"}</code> | The client manager requests are sent through. |
| <Link id="m-isrunninglocally" /><code>{"private bool isRunningLocally"}</code> | Whether the server started as a local server, which picks the stop call. |
| <Link id="m-serversession" /><code>{"private int? serverSession"}</code> | Backing field for `ServerSession`. |
| <Link id="m-templateserver" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" templateServer"}</code> | Cached template server info. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | When false, start, ping, player updates and stop skip the API. Set false after stopping. |
| <Link id="m-serverinfo" /><code><Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" ServerInfo { get; }"}</code> | The server's info from the API. |
| <Link id="m-serversession-2" /><code>{"int? ServerSession { get; }"}</code> | The session ID the API gave on start, null before start or after stop. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettemplateserver" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetTemplateServer()"}</code> | For a world-owned server, fetches and caches the owner's template server info. Otherwise null. |
| <Link id="m-ping" /><code>{"Task Ping()"}</code> | Pings the session on the API while active. |
| <Link id="m-setonlineplayersasync" /><code>{"async Task SetOnlinePlayersAsync(IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> onlinePlayers)"}</code> | Stores the online players and sends them to the API, once a session exists and while active. |
| <Link id="m-startasync" /><code>{"async Task StartAsync("}<Link to="/game-api/types/assembly-api-client/serverstartarguments">{"ServerStartArguments"}</Link>{" startupArgs)"}</code> | Starts a session on the API, as a local or hosted server depending on the start arguments. |
| <Link id="m-stopasync" /><code>{"async Task StopAsync("}<Link to="/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" endReason)"}</code> | Ends the session with a shutdown reason and marks the access inactive. |
