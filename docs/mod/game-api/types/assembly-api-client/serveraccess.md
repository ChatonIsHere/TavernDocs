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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IServerAccess`](/mod/game-api/types/assembly-api-client/iserveraccess)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal ServerAccess("}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" info, "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" apiClient)"}</code> | <span className="api-desc">Creates a `ServerAccess` from `info` and `apiClient`.</span> |

</details>

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" apiClient"}</code> | <span className="api-desc">The client manager requests are sent through.</span> |
| <Link id="m-isrunninglocally" /><code>{"private bool isRunningLocally"}</code> | <span className="api-desc">Whether the server started as a local server, which picks the stop call.</span> |
| <Link id="m-serversession" /><code>{"private int? serverSession"}</code> | <span className="api-desc">Backing field for `ServerSession`.</span> |
| <Link id="m-templateserver" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" templateServer"}</code> | <span className="api-desc">Cached template server info.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | <span className="api-desc">When false, start, ping, player updates and stop skip the API. Set false after stopping.</span> |
| <Link id="m-serverinfo" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" ServerInfo { get; }"}</code> | <span className="api-desc">The server's info from the API.</span> |
| <Link id="m-serversession-2" /><code>{"int? ServerSession { get; }"}</code> | <span className="api-desc">The session ID the API gave on start, null before start or after stop.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettemplateserver" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetTemplateServer()"}</code> | <span className="api-desc">For a world-owned server, fetches and caches the owner's template server info. Otherwise null.</span> |
| <Link id="m-ping" /><code>{"Task Ping()"}</code> | <span className="api-desc">Pings the session on the API while active.</span> |
| <Link id="m-setonlineplayersasync" /><code>{"async Task SetOnlinePlayersAsync(IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> onlinePlayers)"}</code> | <span className="api-desc">Stores the online players and sends them to the API, once a session exists and while active.</span> |
| <Link id="m-startasync" /><code>{"async Task StartAsync("}<Link to="/mod/game-api/types/assembly-api-client/serverstartarguments">{"ServerStartArguments"}</Link>{" startupArgs)"}</code> | <span className="api-desc">Starts a session on the API, as a local or hosted server depending on the start arguments.</span> |
| <Link id="m-stopasync" /><code>{"async Task StopAsync("}<Link to="/mod/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" endReason)"}</code> | <span className="api-desc">Ends the session with a shutdown reason and marks the access inactive.</span> |
