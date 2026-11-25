---
title: "IServerAccess"
description: "interface IServerAccess in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IServerAccess

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`LocalServerAccess`](/game-api/types/assembly-api-client/localserveraccess), [`ServerAccess`](/game-api/types/assembly-api-client/serveraccess)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> |  |
| <Link id="m-serverinfo" /><code><Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" ServerInfo { get; }"}</code> |  |
| <Link id="m-serversession" /><code>{"int? ServerSession { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gettemplateserver" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{"> GetTemplateServer()"}</code> |  |
| <Link id="m-ping" /><code>{"Task Ping()"}</code> |  |
| <Link id="m-setonlineplayersasync" /><code>{"Task SetOnlinePlayersAsync(IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> onlinePlayers)"}</code> |  |
| <Link id="m-startasync" /><code>{"Task StartAsync("}<Link to="/game-api/types/assembly-api-client/serverstartarguments">{"ServerStartArguments"}</Link>{" startupArgs)"}</code> |  |
| <Link id="m-stopasync" /><code>{"Task StopAsync("}<Link to="/game-api/types/assembly-api-models/shutdownreason">{"ShutdownReason"}</Link>{" reason)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IServerAccess`:

[`IServerApiClient.CreateNewServerAsync`](/game-api/types/assembly-api-client/iserverapiclient#m-createnewserverasync), [`IServerApiClient.GetControllableServerAsync`](/game-api/types/assembly-api-client/iserverapiclient#m-getcontrollableserverasync), [`IServerApiClient.GetControllableServersAsync`](/game-api/types/assembly-api-client/iserverapiclient#m-getcontrollableserversasync), [`OfflineServerApiClient.CreateNewServerAsync`](/game-api/types/assembly-api-client/offlineserverapiclient#m-createnewserverasync), [`OfflineServerApiClient.GetControllableServerAsync`](/game-api/types/assembly-api-client/offlineserverapiclient#m-getcontrollableserverasync), [`OfflineServerApiClient.GetControllableServersAsync`](/game-api/types/assembly-api-client/offlineserverapiclient#m-getcontrollableserversasync), [`ServerApiClient.CreateNewServerAsync`](/game-api/types/assembly-api-client/serverapiclient#m-createnewserverasync), [`ServerApiClient.GetControllableServerAsync`](/game-api/types/assembly-api-client/serverapiclient#m-getcontrollableserverasync), [`ServerApiClient.GetControllableServersAsync`](/game-api/types/assembly-api-client/serverapiclient#m-getcontrollableserversasync), [`ServersManager.SelectedServerChanged`](/game-api/types/alta-networking/serversmanager#m-selectedserverchanged), [`ServersManager.servers`](/game-api/types/alta-networking/serversmanager#m-servers), [`ServerHandler.ServerApiAccess`](/game-api/types/alta-networking/serverhandler#m-serverapiaccess), [`ServerHandler.ServerHandler`](/game-api/types/alta-networking/serverhandler#m-ctor-2), [`ServerLifetimePipeline.AttemptToStartServer`](/game-api/types/alta-networking/serverlifetimepipeline#m-attempttostartserver), [`ServerLifetimePipeline.StartServerHandler`](/game-api/types/alta-networking/serverlifetimepipeline#m-startserverhandler), [`ServerSaveUtility.ServerSaveUtility`](/game-api/types/alta-utilities/serversaveutility#m-ctor), [`GameModeManager.StartLocalTest`](/game-api/types/global-e-h/gamemodemanager#m-startlocaltest), [`GameModeManager.StartServer`](/game-api/types/global-e-h/gamemodemanager#m-startserver), [`LocalTestGameMode.LocalTestGameMode`](/game-api/types/global-i-l/localtestgamemode#m-ctor), [`LocalTestGameMode.serverAccess`](/game-api/types/global-i-l/localtestgamemode#m-serveraccess), [`MenuSettings.LocalGameServerAccess`](/game-api/types/global-m-o/menusettings#m-localgameserveraccess), [`ServerHostingGameMode.server`](/game-api/types/global-s/serverhostinggamemode#m-server), [`ServerHostingGameMode.ServerHostingGameMode`](/game-api/types/global-s/serverhostinggamemode#m-ctor).
