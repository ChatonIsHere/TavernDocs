---
title: "GameServerInfo"
description: "A game server as returned by the Alta web API: id, name, status, region, owner, fleet and online players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameServerInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A game server as returned by the Alta web API: id, name, status, region, owner, fleet and online players. A plain JSON model.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`GameServerInfoMinimal`](/mod/game-api/types/assembly-api-models/gameserverinfominimal)
- **Derived types** [`DevGameServerInfo`](/mod/game-api/types/global-c-d/devgameserverinfo)
- **Documented in** [Server settings](/mod/game-api/networking/server-settings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameServerInfo()"}</code> | <span className="api-desc">Creates a `GameServerInfo` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaultfleetname" /><code>{"const string DefaultFleetName"}</code> | <span className="api-desc">The fallback fleet name, "att-release".</span> |
| <Link id="m-publicservers" /><code>{"static readonly HashSet<int> PublicServers"}</code> | <span className="api-desc">Hard-coded set of server ids treated as official public servers.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fleetmapping" /><code>{"private static readonly Dictionary<int, string> FleetMapping"}</code> | <span className="api-desc">Maps a server `Target` number to its fleet name (1 is `att-release`, 2 is `att-quest`); read by `GetFleetName`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-createdat" /><code>{"DateTime CreatedAt { get; set; }"}</code> | <span className="api-desc">When the server was created.</span> |
| <Link id="m-currentplayercount" /><code>{"int CurrentPlayerCount { get; set; }"}</code> | <span className="api-desc">Number of players on the server, as reported by the API.</span> |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | <span className="api-desc">The server's description text.</span> |
| <Link id="m-finalstatus" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverstatus">{"GameServerStatus"}</Link>{" FinalStatus { get; set; }"}</code> | <span className="api-desc">Status the server is heading toward (for example while it starts or stops).</span> |
| <Link id="m-fleetname" /><code>{"string FleetName { get; set; }"}</code> | <span className="api-desc">Which server fleet hosts it (for example "att-release" or "att-quest").</span> |
| <Link id="m-groupidentifier" /><code>{"int? GroupIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the group that owns the server, if any.</span> |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | <span className="api-desc">The server's id.</span> |
| <Link id="m-jointype" /><code><Link to="/mod/game-api/types/assembly-api-models/serverjointype">{"ServerJoinType"}</Link>{" JoinType { get; set; }"}</code> | <span className="api-desc">How players can join the server.</span> |
| <Link id="m-lastonline" /><code>{"DateTime? LastOnline { get; set; }"}</code> | <span className="api-desc">When the server was last online.</span> |
| <Link id="m-lastonlineping" /><code>{"DateTime? LastOnlinePing { get; set; }"}</code> | <span className="api-desc">When the server last pinged the API as online.</span> |
| <Link id="m-laststartedversion" /><code>{"string LastStartedVersion { get; set; }"}</code> | <span className="api-desc">Game version the server last started with.</span> |
| <Link id="m-launchregion" /><code>{"string LaunchRegion { get; set; }"}</code> | <span className="api-desc">Region the server runs in.</span> |
| <Link id="m-localserver" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" LocalServer { get; }"}</code> | <span className="api-desc">Static placeholder named "Local Server" with id -1.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The server's name.</span> |
| <Link id="m-offlineserver" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-models/gameserverinfo">{"GameServerInfo"}</Link>{" OfflineServer { get; }"}</code> | <span className="api-desc">Static placeholder named "Offline Server" with id -1.</span> |
| <Link id="m-onlineplayers" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> OnlinePlayers { get; set; }"}</code> | <span className="api-desc">Users currently on the server.</span> |
| <Link id="m-owneridentifier" /><code>{"int OwnerIdentifier { get; set; }"}</code> | <span className="api-desc">Id of the owner (user or group, see `OwnerType`).</span> |
| <Link id="m-ownertype" /><code><Link to="/mod/game-api/types/assembly-api-models/serverownertype">{"ServerOwnerType"}</Link>{" OwnerType { get; set; }"}</code> | <span className="api-desc">Whether a user or a group owns the server.</span> |
| <Link id="m-playability" /><code>{"float Playability { get; set; }"}</code> | <span className="api-desc">A float score the API reports for the server.</span> |
| <Link id="m-playerlimit" /><code>{"int? PlayerLimit { get; set; }"}</code> | <span className="api-desc">Maximum players, if set.</span> |
| <Link id="m-sceneindex" /><code>{"int SceneIndex { get; set; }"}</code> | <span className="api-desc">Index of the scene (map) the server runs.</span> |
| <Link id="m-serverstatus" /><code><Link to="/mod/game-api/types/assembly-api-models/gameserverstatus">{"GameServerStatus"}</Link>{" ServerStatus { get; set; }"}</code> | <span className="api-desc">Current status of the server.</span> |
| <Link id="m-servertype" /><code><Link to="/mod/game-api/types/assembly-api-models/servertype">{"ServerType"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/servertype">{"ServerType"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The kind of server.</span> |
| <Link id="m-target" /><code>{"int Target { get; set; }"}</code> | <span className="api-desc">Platform target bit mask. Joining checks it against the player's platform.</span> |
| <Link id="m-transportsystem" /><code>{"int? TransportSystem { get; set; }"}</code> | <span className="api-desc">Network transport the server uses, if set; read when connecting.</span> |
| <Link id="m-uptime" /><code>{"TimeSpan Uptime { get; set; }"}</code> | <span className="api-desc">How long the server has been up.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfleetname" /><code>{"static string GetFleetName(int target)"}</code> | <span className="api-desc">Maps a target number to a fleet name: 1 is "att-release", 2 is "att-quest", anything else "att-release".</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Multi-line text listing the server's main fields, for logs.</span> |

## Used in

Members of other types that take, return or hold a `GameServerInfo`:

<div className="api-used-in">

[`IMatchMakingClient.GetTutorialServer`](/mod/game-api/types/assembly-api-client/imatchmakingclient#m-gettutorialserver), [`IServerAccess.GetTemplateServer`](/mod/game-api/types/assembly-api-client/iserveraccess#m-gettemplateserver), [`IServerAccess.ServerInfo`](/mod/game-api/types/assembly-api-client/iserveraccess#m-serverinfo), [`IServerApiClient.DiscoverServers`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-discoverservers), [`IServerApiClient.GetJoinedServersAsync`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-getjoinedserversasync), [`IServerApiClient.GetOnlineServersAsync`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-getonlineserversasync), [`IServerApiClient.GetOpenServersAsync`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-getopenserversasync), [`IServerApiClient.GetPublicServersAsync`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-getpublicserversasync), [`IServerApiClient.GetServerAsync`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-getserverasync), [`IServerApiClient.GetServersByName`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-getserversbyname), [`IServerApiClient.GetServersWithPlayer`](/mod/game-api/types/assembly-api-client/iserverapiclient#m-getserverswithplayer), [`LocalServerAccess.GetTemplateServer`](/mod/game-api/types/assembly-api-client/localserveraccess#m-gettemplateserver), [`LocalServerAccess.LocalServerAccess`](/mod/game-api/types/assembly-api-client/localserveraccess#m-ctor), [`LocalServerAccess.ServerInfo`](/mod/game-api/types/assembly-api-client/localserveraccess#m-serverinfo), [`MatchMakingClient.GetTutorialServer`](/mod/game-api/types/assembly-api-client/matchmakingclient#m-gettutorialserver), [`OfflineServerApiClient.DiscoverServers`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-discoverservers), [`OfflineServerApiClient.GetJoinedServersAsync`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-getjoinedserversasync), [`OfflineServerApiClient.GetOnlineServersAsync`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-getonlineserversasync), [`OfflineServerApiClient.GetOpenServersAsync`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-getopenserversasync), [`OfflineServerApiClient.GetPublicServersAsync`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-getpublicserversasync), [`OfflineServerApiClient.GetServerAsync`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-getserverasync), [`OfflineServerApiClient.GetServersByName`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-getserversbyname), [`OfflineServerApiClient.GetServersWithPlayer`](/mod/game-api/types/assembly-api-client/offlineserverapiclient#m-getserverswithplayer), [`ServerAccess.GetTemplateServer`](/mod/game-api/types/assembly-api-client/serveraccess#m-gettemplateserver), [`ServerAccess.ServerAccess`](/mod/game-api/types/assembly-api-client/serveraccess#m-ctor), [`ServerAccess.ServerInfo`](/mod/game-api/types/assembly-api-client/serveraccess#m-serverinfo), [`ServerAccess.templateServer`](/mod/game-api/types/assembly-api-client/serveraccess#m-templateserver), [`ServerApiClient.DiscoverServers`](/mod/game-api/types/assembly-api-client/serverapiclient#m-discoverservers), [`ServerApiClient.GetJoinedServersAsync`](/mod/game-api/types/assembly-api-client/serverapiclient#m-getjoinedserversasync), [`ServerApiClient.GetOnlineServersAsync`](/mod/game-api/types/assembly-api-client/serverapiclient#m-getonlineserversasync), [`ServerApiClient.GetOpenServersAsync`](/mod/game-api/types/assembly-api-client/serverapiclient#m-getopenserversasync), [`ServerApiClient.GetPublicServersAsync`](/mod/game-api/types/assembly-api-client/serverapiclient#m-getpublicserversasync), [`ServerApiClient.GetServerAsync`](/mod/game-api/types/assembly-api-client/serverapiclient#m-getserverasync), [`ServerApiClient.GetServersByName`](/mod/game-api/types/assembly-api-client/serverapiclient#m-getserversbyname), [`ServerApiClient.GetServersWithPlayer`](/mod/game-api/types/assembly-api-client/serverapiclient#m-getserverswithplayer), [`LowLevelApiClient.CreateServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-createserver), [`LowLevelApiClient.DiscoverServers`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-discoverservers), [`LowLevelApiClient.GetBestServer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getbestserver), [`LowLevelApiClient.GetControllableServers`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getcontrollableservers), [`LowLevelApiClient.GetJoinedServers`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getjoinedservers), [`LowLevelApiClient.GetOnlineServers`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getonlineservers), [`LowLevelApiClient.GetOpenServers`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getopenservers), [`LowLevelApiClient.GetPublicServers`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getpublicservers), [`LowLevelApiClient.GetServerInfo`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getserverinfo), [`LowLevelApiClient.GetServersByName`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getserversbyname), [`LowLevelApiClient.GetServersWithPlayer`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getserverswithplayer), [`QuickCreateResponse.Server`](/mod/game-api/types/assembly-api-models/quickcreateresponse#m-server), [`GameCommandModule.GetServerInfo`](/mod/game-api/types/alta-console/gamecommandmodule#m-getserverinfo), [`GameCommandModule.recentlyShownServers`](/mod/game-api/types/alta-console/gamecommandmodule#m-recentlyshownservers), [`GameCommandModule.SetRecentlyShownServers`](/mod/game-api/types/alta-console/gamecommandmodule#m-setrecentlyshownservers), [`ServerCommandModule.RequestMigrationFromWebApi`](/mod/game-api/types/alta-console/servercommandmodule#m-requestmigrationfromwebapi), [`JoinedServerInfo.JoinedServerInfo`](/mod/game-api/types/alta-networking/joinedserverinfo#m-ctor), [`NetworkingSettings.GetTransportSystem`](/mod/game-api/types/alta-networking/networkingsettings#m-gettransportsystem), [`ConnectToServerUtility.ConnectToServer`](/mod/game-api/types/alta-networking/connecttoserverutility#m-connecttoserver), [`ServerHandler.ServerInfo`](/mod/game-api/types/alta-networking/serverhandler#m-serverinfo), [`ServerLifetimePipeline.currentServer`](/mod/game-api/types/alta-networking/serverlifetimepipeline#m-currentserver), [`ServerSaveUtility.DeleteSave`](/mod/game-api/types/alta-utilities/serversaveutility#m-deletesave), [`ServerSaveUtility.GetConfig`](/mod/game-api/types/alta-utilities/serversaveutility#m-getconfig), [`ServerSaveUtility.GetServerSavesFolder`](/mod/game-api/types/alta-utilities/serversaveutility#m-getserversavesfolder), [`ServerSaveUtility.ServerSaveUtility`](/mod/game-api/types/alta-utilities/serversaveutility#m-ctor-2) and 26 more.

</div>
