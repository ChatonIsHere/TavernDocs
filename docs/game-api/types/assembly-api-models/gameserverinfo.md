---
title: "GameServerInfo"
description: "class GameServerInfo in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`GameServerInfoMinimal`](/game-api/types/assembly-api-models/gameserverinfominimal)
- **Derived types** [`DevGameServerInfo`](/game-api/types/global-c-d/devgameserverinfo)
- **Documented in** [Server settings](/game-api/networking/server-settings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameServerInfo()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaultfleetname" /><code>{"const string DefaultFleetName"}</code> |  |
| <Link id="m-publicservers" /><code>{"static readonly HashSet<int> PublicServers"}</code> |  |
| <Link id="m-fleetmapping" /><code>{"private static readonly Dictionary<int, string> FleetMapping"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> |  |
| <Link id="m-currentplayercount" /><code>{"int CurrentPlayerCount { get; set; }"}</code> |  |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> |  |
| <Link id="m-finalstatus" /><code><Link to="/game-api/types/assembly-api-models/gameserverstatus">{"GameServerStatus"}</Link>{" FinalStatus { get; set; }"}</code> |  |
| <Link id="m-fleetname" /><code>{"string FleetName { get; set; }"}</code> |  |
| <Link id="m-groupidentifier" /><code>{"int? GroupIdentifier { get; set; }"}</code> |  |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> |  |
| <Link id="m-jointype" /><code><Link to="/game-api/types/assembly-api-models/serverjointype">{"ServerJoinType"}</Link>{" JoinType { get; set; }"}</code> |  |
| <Link id="m-lastonline" /><code>{"DateTime? LastOnline { get; set; }"}</code> |  |
| <Link id="m-lastonlineping" /><code>{"DateTime? LastOnlinePing { get; set; }"}</code> |  |
| <Link id="m-laststartedversion" /><code>{"string LastStartedVersion { get; set; }"}</code> |  |
| <Link id="m-launchregion" /><code>{"string LaunchRegion { get; set; }"}</code> |  |
| <Link id="m-localserver" /><code>{"static "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" LocalServer { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> |  |
| <Link id="m-offlineserver" /><code>{"static "}<Link to="/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" OfflineServer { get; }"}</code> |  |
| <Link id="m-onlineplayers" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> OnlinePlayers { get; set; }"}</code> |  |
| <Link id="m-owneridentifier" /><code>{"int OwnerIdentifier { get; set; }"}</code> |  |
| <Link id="m-ownertype" /><code><Link to="/game-api/types/assembly-api-models/serverownertype">{"ServerOwnerType"}</Link>{" OwnerType { get; set; }"}</code> |  |
| <Link id="m-playability" /><code>{"float Playability { get; set; }"}</code> |  |
| <Link id="m-playerlimit" /><code>{"int? PlayerLimit { get; set; }"}</code> |  |
| <Link id="m-sceneindex" /><code>{"int SceneIndex { get; set; }"}</code> |  |
| <Link id="m-serverstatus" /><code><Link to="/game-api/types/assembly-api-models/gameserverstatus">{"GameServerStatus"}</Link>{" ServerStatus { get; set; }"}</code> |  |
| <Link id="m-servertype" /><code><Link to="/game-api/types/assembly-api-models/servertype">{"ServerType"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/servertype">{"ServerType"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-target" /><code>{"int Target { get; set; }"}</code> |  |
| <Link id="m-transportsystem" /><code>{"int? TransportSystem { get; set; }"}</code> |  |
| <Link id="m-uptime" /><code>{"TimeSpan Uptime { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfleetname" /><code>{"static string GetFleetName(int target)"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |

## Used in

Members of other types that take, return or hold a `GameServerInfo`:

[`IMatchMakingClient.GetTutorialServer`](/game-api/types/assembly-api-client/imatchmakingclient#m-gettutorialserver), [`IServerAccess.GetTemplateServer`](/game-api/types/assembly-api-client/iserveraccess#m-gettemplateserver), [`IServerAccess.ServerInfo`](/game-api/types/assembly-api-client/iserveraccess#m-serverinfo), [`IServerApiClient.DiscoverServers`](/game-api/types/assembly-api-client/iserverapiclient#m-discoverservers), [`IServerApiClient.GetJoinedServersAsync`](/game-api/types/assembly-api-client/iserverapiclient#m-getjoinedserversasync), [`IServerApiClient.GetOnlineServersAsync`](/game-api/types/assembly-api-client/iserverapiclient#m-getonlineserversasync), [`IServerApiClient.GetOpenServersAsync`](/game-api/types/assembly-api-client/iserverapiclient#m-getopenserversasync), [`IServerApiClient.GetPublicServersAsync`](/game-api/types/assembly-api-client/iserverapiclient#m-getpublicserversasync), [`IServerApiClient.GetServerAsync`](/game-api/types/assembly-api-client/iserverapiclient#m-getserverasync), [`IServerApiClient.GetServersByName`](/game-api/types/assembly-api-client/iserverapiclient#m-getserversbyname), [`IServerApiClient.GetServersWithPlayer`](/game-api/types/assembly-api-client/iserverapiclient#m-getserverswithplayer), [`LocalServerAccess.GetTemplateServer`](/game-api/types/assembly-api-client/localserveraccess#m-gettemplateserver), [`LocalServerAccess.LocalServerAccess`](/game-api/types/assembly-api-client/localserveraccess#m-ctor), [`LocalServerAccess.ServerInfo`](/game-api/types/assembly-api-client/localserveraccess#m-serverinfo), [`MatchMakingClient.GetTutorialServer`](/game-api/types/assembly-api-client/matchmakingclient#m-gettutorialserver), [`OfflineServerApiClient.DiscoverServers`](/game-api/types/assembly-api-client/offlineserverapiclient#m-discoverservers), [`OfflineServerApiClient.GetJoinedServersAsync`](/game-api/types/assembly-api-client/offlineserverapiclient#m-getjoinedserversasync), [`OfflineServerApiClient.GetOnlineServersAsync`](/game-api/types/assembly-api-client/offlineserverapiclient#m-getonlineserversasync), [`OfflineServerApiClient.GetOpenServersAsync`](/game-api/types/assembly-api-client/offlineserverapiclient#m-getopenserversasync), [`OfflineServerApiClient.GetPublicServersAsync`](/game-api/types/assembly-api-client/offlineserverapiclient#m-getpublicserversasync), [`OfflineServerApiClient.GetServerAsync`](/game-api/types/assembly-api-client/offlineserverapiclient#m-getserverasync), [`OfflineServerApiClient.GetServersByName`](/game-api/types/assembly-api-client/offlineserverapiclient#m-getserversbyname), [`OfflineServerApiClient.GetServersWithPlayer`](/game-api/types/assembly-api-client/offlineserverapiclient#m-getserverswithplayer), [`ServerAccess.GetTemplateServer`](/game-api/types/assembly-api-client/serveraccess#m-gettemplateserver), [`ServerAccess.ServerAccess`](/game-api/types/assembly-api-client/serveraccess#m-ctor), [`ServerAccess.ServerInfo`](/game-api/types/assembly-api-client/serveraccess#m-serverinfo), [`ServerAccess.templateServer`](/game-api/types/assembly-api-client/serveraccess#m-templateserver), [`ServerApiClient.DiscoverServers`](/game-api/types/assembly-api-client/serverapiclient#m-discoverservers), [`ServerApiClient.GetJoinedServersAsync`](/game-api/types/assembly-api-client/serverapiclient#m-getjoinedserversasync), [`ServerApiClient.GetOnlineServersAsync`](/game-api/types/assembly-api-client/serverapiclient#m-getonlineserversasync), [`ServerApiClient.GetOpenServersAsync`](/game-api/types/assembly-api-client/serverapiclient#m-getopenserversasync), [`ServerApiClient.GetPublicServersAsync`](/game-api/types/assembly-api-client/serverapiclient#m-getpublicserversasync), [`ServerApiClient.GetServerAsync`](/game-api/types/assembly-api-client/serverapiclient#m-getserverasync), [`ServerApiClient.GetServersByName`](/game-api/types/assembly-api-client/serverapiclient#m-getserversbyname), [`ServerApiClient.GetServersWithPlayer`](/game-api/types/assembly-api-client/serverapiclient#m-getserverswithplayer), [`LowLevelApiClient.CreateServer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-createserver), [`LowLevelApiClient.DiscoverServers`](/game-api/types/assembly-api-client/lowlevelapiclient#m-discoverservers), [`LowLevelApiClient.GetBestServer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getbestserver), [`LowLevelApiClient.GetControllableServers`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getcontrollableservers), [`LowLevelApiClient.GetJoinedServers`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getjoinedservers), [`LowLevelApiClient.GetOnlineServers`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getonlineservers), [`LowLevelApiClient.GetOpenServers`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getopenservers), [`LowLevelApiClient.GetPublicServers`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getpublicservers), [`LowLevelApiClient.GetServerInfo`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getserverinfo), [`LowLevelApiClient.GetServersByName`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getserversbyname), [`LowLevelApiClient.GetServersWithPlayer`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getserverswithplayer), [`QuickCreateResponse.Server`](/game-api/types/assembly-api-models/quickcreateresponse#m-server), [`GameCommandModule.GetServerInfo`](/game-api/types/alta-console/gamecommandmodule#m-getserverinfo), [`GameCommandModule.recentlyShownServers`](/game-api/types/alta-console/gamecommandmodule#m-recentlyshownservers), [`GameCommandModule.SetRecentlyShownServers`](/game-api/types/alta-console/gamecommandmodule#m-setrecentlyshownservers), [`ServerCommandModule.RequestMigrationFromWebApi`](/game-api/types/alta-console/servercommandmodule#m-requestmigrationfromwebapi), [`JoinedServerInfo.JoinedServerInfo`](/game-api/types/alta-networking/joinedserverinfo#m-ctor), [`NetworkingSettings.GetTransportSystem`](/game-api/types/alta-networking/networkingsettings#m-gettransportsystem), [`ConnectToServerUtility.ConnectToServer`](/game-api/types/alta-networking/connecttoserverutility#m-connecttoserver), [`ServerHandler.ServerInfo`](/game-api/types/alta-networking/serverhandler#m-serverinfo), [`ServerLifetimePipeline.currentServer`](/game-api/types/alta-networking/serverlifetimepipeline#m-currentserver), [`ServerSaveUtility.DeleteSave`](/game-api/types/alta-utilities/serversaveutility#m-deletesave), [`ServerSaveUtility.GetConfig`](/game-api/types/alta-utilities/serversaveutility#m-getconfig), [`ServerSaveUtility.GetServerSavesFolder`](/game-api/types/alta-utilities/serversaveutility#m-getserversavesfolder), [`ServerSaveUtility.ServerSaveUtility`](/game-api/types/alta-utilities/serversaveutility#m-ctor-2) and 26 more.
