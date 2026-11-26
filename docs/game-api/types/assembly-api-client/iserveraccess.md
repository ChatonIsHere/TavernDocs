---
title: "IServerAccess"
description: "Server-side handle for reporting one game server's session to the Alta API: start, stop, ping and online players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IServerAccess

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Server-side handle for reporting one game server's session to the Alta API: start, stop, ping and online players. `ServerAccess` calls the API; `LocalServerAccess` does nothing.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`LocalServerAccess`](/game-api/types/assembly-api-client/localserveraccess), [`ServerAccess`](/game-api/types/assembly-api-client/serveraccess)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | Whether calls go to the API. `StopAsync` sets it false. |
| <Link id="m-serverinfo" /><code><Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" ServerInfo { get; }"}</code> | The API's info for this game server. |
| <Link id="m-serversession" /><code>{"int? ServerSession { get; }"}</code> | The session id the API returned from `StartAsync`, or null when no session is running. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettemplateserver" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetTemplateServer()"}</code> | Gets the template server info for a world-owned server (cached after the first call). Null otherwise. |
| <Link id="m-ping" /><code>{"Task Ping()"}</code> | Pings the current server session so the API knows the server is alive. |
| <Link id="m-setonlineplayersasync" /><code>{"Task SetOnlinePlayersAsync(IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> onlinePlayers)"}</code> | Updates the server's online player list locally and, when active with a session, on the API. |
| <Link id="m-startasync" /><code>{"Task StartAsync("}<Link to="/game-api/types/assembly-api-client/serverstartarguments">{"ServerStartArguments"}</Link>{" startupArgs)"}</code> | Starts a server session on the API (or registers a local server) and stores the session id. |
| <Link id="m-stopasync" /><code>{"Task StopAsync("}<Link to="/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> | Ends the server session on the API with the given reason and marks the access inactive. |

## Used in

Members of other types that take, return or hold a `IServerAccess`:

[`IServerApiClient.CreateNewServerAsync`](/game-api/types/assembly-api-client/iserverapiclient#m-createnewserverasync), [`IServerApiClient.GetControllableServerAsync`](/game-api/types/assembly-api-client/iserverapiclient#m-getcontrollableserverasync), [`IServerApiClient.GetControllableServersAsync`](/game-api/types/assembly-api-client/iserverapiclient#m-getcontrollableserversasync), [`OfflineServerApiClient.CreateNewServerAsync`](/game-api/types/assembly-api-client/offlineserverapiclient#m-createnewserverasync), [`OfflineServerApiClient.GetControllableServerAsync`](/game-api/types/assembly-api-client/offlineserverapiclient#m-getcontrollableserverasync), [`OfflineServerApiClient.GetControllableServersAsync`](/game-api/types/assembly-api-client/offlineserverapiclient#m-getcontrollableserversasync), [`ServerApiClient.CreateNewServerAsync`](/game-api/types/assembly-api-client/serverapiclient#m-createnewserverasync), [`ServerApiClient.GetControllableServerAsync`](/game-api/types/assembly-api-client/serverapiclient#m-getcontrollableserverasync), [`ServerApiClient.GetControllableServersAsync`](/game-api/types/assembly-api-client/serverapiclient#m-getcontrollableserversasync), [`ServersManager.SelectedServerChanged`](/game-api/types/alta-networking/serversmanager#m-selectedserverchanged), [`ServersManager.servers`](/game-api/types/alta-networking/serversmanager#m-servers), [`ServerHandler.ServerApiAccess`](/game-api/types/alta-networking/serverhandler#m-serverapiaccess), [`ServerHandler.ServerHandler`](/game-api/types/alta-networking/serverhandler#m-ctor-2), [`ServerLifetimePipeline.AttemptToStartServer`](/game-api/types/alta-networking/serverlifetimepipeline#m-attempttostartserver), [`ServerLifetimePipeline.StartServerHandler`](/game-api/types/alta-networking/serverlifetimepipeline#m-startserverhandler), [`ServerSaveUtility.ServerSaveUtility`](/game-api/types/alta-utilities/serversaveutility#m-ctor), [`GameModeManager.StartLocalTest`](/game-api/types/global-e-h/gamemodemanager#m-startlocaltest), [`GameModeManager.StartServer`](/game-api/types/global-e-h/gamemodemanager#m-startserver), [`LocalTestGameMode.LocalTestGameMode`](/game-api/types/global-i-l/localtestgamemode#m-ctor), [`LocalTestGameMode.serverAccess`](/game-api/types/global-i-l/localtestgamemode#m-serveraccess), [`MenuSettings.LocalGameServerAccess`](/game-api/types/global-m-o/menusettings#m-localgameserveraccess), [`ServerHostingGameMode.server`](/game-api/types/global-s/serverhostinggamemode#m-server), [`ServerHostingGameMode.ServerHostingGameMode`](/game-api/types/global-s/serverhostinggamemode#m-ctor).
