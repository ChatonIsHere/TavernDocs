---
title: Alta.Api.Client
description: "Types in the Alta.Api.Client assembly, the client for Alta's (now closed) web API."
sidebar_position: 24
---

# Alta.Api.Client

Types in the Alta.Api.Client assembly, the client for Alta's (now closed) web API. 121 types, 2 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Api.Client

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`LoginCredentials`](/game-api/types/assembly-api-client/logincredentials) | class |  | 4 | The JWT tokens returned when a user or server logs in to the Alta API. |

## Alta.Api.Client.HighLevel

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AcceptReject`](/game-api/types/assembly-api-client/acceptreject) | abstract class |  | 2 |  |
| [`AccountClient`](/game-api/types/assembly-api-client/accountclient) | internal class | `HighLevelApiClientBase`, `IAccountClient` | 6 |  |
| [`AchievementApiClient`](/game-api/types/assembly-api-client/achievementapiclient) | class | `HighLevelApiClientBase`, `IAchievementClient` | 5 |  |
| [`AnalyticsClient`](/game-api/types/assembly-api-client/analyticsclient) | class | `HighLevelApiClientBase`, `IAnalyticsClient` | 4 |  |
| [`FutureUserActionsClient`](/game-api/types/assembly-api-client/futureuseractionsclient) | class | `HighLevelApiClientBase`, `IFutureUserActions` | 3 |  |
| [`GroupBan`](/game-api/types/assembly-api-client/groupban) | class | `Outgoing` | 2 | A ban of one user from a group, from the Alta web API. Revoke it to lift the ban. |
| [`GroupBans`](/game-api/types/assembly-api-client/groupbans) | class | `PaginatedListWithAdd<GroupBan>` | 2 | Paged list of a group's bans from the Alta web API, with a way to ban more users. |
| [`GroupCreator`](/game-api/types/assembly-api-client/groupcreator) | class |  | 3 | Alta web API calls for creating a group and its server. Reached through `ApiAccess.ApiClient.Groups.CreateGroup`. The API is gone, so calls fail after timing out. |
| [`GroupDiscovery`](/game-api/types/assembly-api-client/groupdiscovery) | class |  | 3 | Alta web API lists of groups a player can find and join. Reached through `ApiAccess.ApiClient.Groups.Discovery`. The API is gone, so calls fail after timing out. |
| [`GroupGet`](/game-api/types/assembly-api-client/groupget) | class | `PaginatedList<JoinableGroupInfo>` | 0 | Paged list of joinable groups of one group type, fetched from the Alta web API and wrapped as `JoinableGroupInfo`. |
| [`GroupInfoManager`](/game-api/types/assembly-api-client/groupinfomanager) | class |  | 3 | Admin view of a joined group: its editable info, roles and members. |
| [`GroupInfoUpdate`](/game-api/types/assembly-api-client/groupinfoupdate) | class |  | 2 | Wraps a group so its info can be edited through the Alta web API. |
| [`GroupInvites`](/game-api/types/assembly-api-client/groupinvites) | class | `PaginatedListWithAdd<OutgoingGroupInvite>` | 2 | Paged list of a group's outgoing invites from the Alta web API, with a way to invite more users. |
| [`GroupJoinRequests`](/game-api/types/assembly-api-client/groupjoinrequests) | class | `PaginatedList<IncomingGroupJoinRequest>` | 0 | Paged list of requests from users to join a group, from the Alta web API. |
| [`GroupMember`](/game-api/types/assembly-api-client/groupmember) | class |  | 4 | One member of a joined group in Alta's web API, with calls to kick, ban or change their role. Those services are gone, so the calls fail. |
| [`GroupMembers`](/game-api/types/assembly-api-client/groupmembers) | class | `PaginatedList<GroupMember>` | 0 | Paged list of a joined group's members from the Alta web API. |
| [`GroupRoles`](/game-api/types/assembly-api-client/grouproles) | class |  | 2 | A joined group's roles from the current user's point of view, with a permission check. |
| [`GroupsClient`](/game-api/types/assembly-api-client/groupsclient) | internal class | `HighLevelApiClientBase`, `IGroupsClient` | 7 |  |
| [`HighLevelApiClient`](/game-api/types/assembly-api-client/highlevelapiclient) | class | `IHighLevelApiClientManager`, `IHighLevelApiClient` | 35 | The online client for Alta's web API, one sub-client per area. Made by `HighLevelApiClientFactory` and reached through `ApiAccess.ApiClient`. Both sides; most calls now time out because the services are gone. |
| [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase) | abstract class |  | 0 | Internal base for the high level web API client parts; each holds a reference to the low level client manager. Not constructible outside the API client assembly. |
| [`HighLevelApiClientFactory`](/game-api/types/assembly-api-client/highlevelapiclientfactory) | static class |  | 16 |  |
| [`IAccountClient`](/game-api/types/assembly-api-client/iaccountclient) | interface |  | 5 | Alta web API calls for linking a Discord account to an Alta account. `ApiAccess.ApiClient.Account`. The API is gone, so calls fail. |
| [`IAchievementClient`](/game-api/types/assembly-api-client/iachievementclient) | interface |  | 4 | Alta web API calls for a user's achievements and action stats. `ApiAccess.ApiClient.AchievementClient`. The API is gone, so calls fail. |
| [`IAnalyticsClient`](/game-api/types/assembly-api-client/ianalyticsclient) | interface |  | 4 | Alta web API calls for sending analytics events. `ApiAccess.ApiClient.Analytics`. The API is gone, so each event fails and is logged. |
| [`IFutureUserActions`](/game-api/types/assembly-api-client/ifutureuseractions) | interface |  | 3 | Alta web API calls that store an action to run for an outside user (an Oculus user, for example) once they have an Alta account. `ApiAccess.ApiClient.FutureUserActions`. |
| [`IGroupsClient`](/game-api/types/assembly-api-client/igroupsclient) | interface |  | 6 | Alta web API calls for groups (the communities that own servers). `ApiAccess.ApiClient.Groups`. The API is gone, so calls fail. |
| [`IHighLevelApiClient`](/game-api/types/assembly-api-client/ihighlevelapiclient) | interface |  | 35 | [Alta's web API](../console-and-utilities/alta-web-api.md#ihighlevelapiclient): One property per area, each its own client class: |
| [`IHighLevelApiClientManager`](/game-api/types/assembly-api-client/ihighlevelapiclientmanager) | internal interface |  | 2 | Internal interface for the object that owns the low-level Alta API client and can log it out. |
| [`IInstancesClient`](/game-api/types/assembly-api-client/iinstancesclient) | interface |  | 1 | Alta web API call that lists running server instances in Alta's hosting. `ApiAccess.ApiClient.Instances`. |
| [`ILauncherApiClient`](/game-api/types/assembly-api-client/ilauncherapiclient) | interface |  | 2 | Alta web API calls for the games listed in Alta's launcher. `ApiAccess.ApiClient.LauncherClient`. |
| [`IMatchMakingClient`](/game-api/types/assembly-api-client/imatchmakingclient) | interface |  | 1 | Alta web API matchmaking. `ApiAccess.ApiClient.MatchMaking`. |
| [`IncomingGroupInvite`](/game-api/types/assembly-api-client/incominggroupinvite) | class | `AcceptReject` | 3 | An invite to a group that the current user received, with calls to accept or reject it through the Alta web API. |
| [`IncomingGroupJoinRequest`](/game-api/types/assembly-api-client/incominggroupjoinrequest) | class | `AcceptReject` | 3 |  |
| [`InstancesClient`](/game-api/types/assembly-api-client/instancesclient) | internal class | `HighLevelApiClientBase`, `IInstancesClient` | 2 |  |
| [`InvitedGroups`](/game-api/types/assembly-api-client/invitedgroups) | class | `PaginatedList<IncomingGroupInvite>` | 0 | Paged list of group invites the current user has received, from the Alta web API. |
| [`IOculusClient`](/game-api/types/assembly-api-client/ioculusclient) | interface |  | 4 | Alta web API calls for linking an Oculus account to an Alta account. `ApiAccess.ApiClient.Oculus`. |
| [`IOculusShop`](/game-api/types/assembly-api-client/ioculusshop) | interface |  | 1 | Alta web API call for turning Oculus store purchases into Alta shop items. `ShopClient.Oculus`. |
| [`IPicoClient`](/game-api/types/assembly-api-client/ipicoclient) | interface |  | 4 | Alta web API calls for linking a Pico account to an Alta account, per Pico region. `ApiAccess.ApiClient.Pico`. |
| [`IPlayerReportsClient`](/game-api/types/assembly-api-client/iplayerreportsclient) | interface |  | 3 | Alta web API calls for reporting players and reading reports. `ApiAccess.ApiClient.PlayerReports`. |
| [`IRecentPlayersClient`](/game-api/types/assembly-api-client/irecentplayersclient) | interface |  | 2 | Alta web API calls for the recent players list. `ApiAccess.ApiClient.RecentPlayers`. |
| [`ISecurityApiClient`](/game-api/types/assembly-api-client/isecurityapiclient) | interface |  | 6 | Alta web API calls for bans and identity token checks. `ApiAccess.ApiClient.SecurityClient`. |
| [`IServerAccess`](/game-api/types/assembly-api-client/iserveraccess) | interface |  | 8 | Server-side handle for reporting one game server's session to the Alta API: start, stop, ping and online players. `ServerAccess` calls the API; `LocalServerAccess` does nothing. |
| [`IServerApiClient`](/game-api/types/assembly-api-client/iserverapiclient) | interface |  | 22 | Alta web API calls for servers: lists, joining, permissions and online status. `ApiAccess.ApiClient.ServerClient`. The API is gone, so calls fail after timing out; see the Alta web API guide for which are stubbed. |
| [`IServicesApiClient`](/game-api/types/assembly-api-client/iservicesapiclient) | interface |  | 7 | Alta web API helper calls: public IP lookup, passwords, verification and identity tokens. `ApiAccess.ApiClient.ServicesClient`. |
| [`ISettingsClient`](/game-api/types/assembly-api-client/isettingsclient) | interface |  | 2 | Alta web API calls for named settings stored as text. `ApiAccess.ApiClient.SettingsClient`. |
| [`IShopAccount`](/game-api/types/assembly-api-client/ishopaccount) | interface |  | 6 | Alta web API calls for a user's shop account and owned items. `ShopClient.Account`. |
| [`IShopApiClient`](/game-api/types/assembly-api-client/ishopapiclient) | interface |  | 11 | Alta web API calls for the cosmetics shop. `ApiAccess.ApiClient.ShopClient`. The API is gone; mods stub the rotation and purchase checks. |
| [`IShopEditor`](/game-api/types/assembly-api-client/ishopeditor) | interface |  | 9 | Alta web API calls for creating and editing shop items and item sets. `ShopClient.Editor`. Probably staff only. |
| [`IShopPurchase`](/game-api/types/assembly-api-client/ishoppurchase) | interface |  | 1 | Alta web API call for buying a shop item. `ShopClient.Purchase`. |
| [`ISocialClient`](/game-api/types/assembly-api-client/isocialclient) | interface |  | 9 | Alta web API calls for friends. `ApiAccess.ApiClient.SocialClient`. TavernEssentials swaps in its own social client. |
| [`IUserApiClient`](/game-api/types/assembly-api-client/iuserapiclient) | interface |  | 21 | The user account part of Alta's web API: user lookups, verification, roles and cosmetic presets. Reached through `ApiAccess.ApiClient.UserClient`. Every method except `Logout` makes a web request. |
| [`IVoiceApiClient`](/game-api/types/assembly-api-client/ivoiceapiclient) | interface |  | 2 | Alta web API calls for Vivox voice chat tokens. `ApiAccess.ApiClient.VoiceClient`. Voice no longer works. |
| [`JoinableGroupInfo`](/game-api/types/assembly-api-client/joinablegroupinfo) | class |  | 2 | A group the current user can ask to join through the Alta web API. |
| [`JoinedGroupManager`](/game-api/types/assembly-api-client/joinedgroupmanager) | class |  | 7 | High-level API handle for a group the current user is a member of, with its join requests, invites, bans and info managers. |
| [`JoinedGroups`](/game-api/types/assembly-api-client/joinedgroups) | class | `PaginatedList<JoinedGroupManager>` | 1 | Paged list of the groups the logged-in user is a member of, from the Alta web API. `Groups.Joined`. |
| [`LauncherApiClient`](/game-api/types/assembly-api-client/launcherapiclient) | class | `HighLevelApiClientBase`, `ILauncherApiClient` | 2 |  |
| [`LocalServerAccess`](/game-api/types/assembly-api-client/localserveraccess) | class | `IServerAccess` | 9 |  |
| [`MatchMakingClient`](/game-api/types/assembly-api-client/matchmakingclient) | internal class | `HighLevelApiClientBase`, `IMatchMakingClient` | 2 |  |
| [`OculusClient`](/game-api/types/assembly-api-client/oculusclient) | class | `HighLevelApiClientBase`, `IOculusClient` | 4 |  |
| [`OculusShop`](/game-api/types/assembly-api-client/oculusshop) | class | `IOculusShop` | 1 |  |
| [`OfflineAchievementApiClient`](/game-api/types/assembly-api-client/offlineachievementapiclient) | class | `IAchievementClient` | 5 |  |
| [`OfflineGroupsClient`](/game-api/types/assembly-api-client/offlinegroupsclient) | internal class | `IGroupsClient` | 6 |  |
| [`OfflineHighLevelApiClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient) | class | `IHighLevelApiClient` | 36 |  |
| [`OfflineLauncherApiClient`](/game-api/types/assembly-api-client/offlinelauncherapiclient) | class | `ILauncherApiClient` | 2 |  |
| [`OfflineSecurityApiClient`](/game-api/types/assembly-api-client/offlinesecurityapiclient) | class | `ISecurityApiClient` | 7 |  |
| [`OfflineServerApiClient`](/game-api/types/assembly-api-client/offlineserverapiclient) | class | `IServerApiClient` | 22 |  |
| [`OfflineServicesApiClient`](/game-api/types/assembly-api-client/offlineservicesapiclient) | class | `IServicesApiClient` | 8 |  |
| [`OfflineShopAccount`](/game-api/types/assembly-api-client/offlineshopaccount) | class | `IShopAccount` | 6 |  |
| [`OfflineShopApiClient`](/game-api/types/assembly-api-client/offlineshopapiclient) | class | `IShopApiClient` | 12 |  |
| [`OfflineShopEditor`](/game-api/types/assembly-api-client/offlineshopeditor) | class | `IShopEditor` | 9 |  |
| [`OfflineShopPurchase`](/game-api/types/assembly-api-client/offlineshoppurchase) | class | `IShopPurchase` | 2 |  |
| [`OfflineSocialClient`](/game-api/types/assembly-api-client/offlinesocialclient) | class | `ISocialClient` | 9 |  |
| [`OfflineUserApiClient`](/game-api/types/assembly-api-client/offlineuserapiclient) | class | `IUserApiClient` | 21 |  |
| [`OfflineVoiceClient`](/game-api/types/assembly-api-client/offlinevoiceclient) | class | `IVoiceApiClient` | 2 |  |
| [`Outgoing`](/game-api/types/assembly-api-client/outgoing) | abstract class |  | 1 |  |
| [`OutgoingGroupInvite`](/game-api/types/assembly-api-client/outgoinggroupinvite) | class | `Outgoing` | 2 | An invite the group has sent to a user, which can be revoked through the Alta web API. |
| [`OutgoingGroupJoinRequest`](/game-api/types/assembly-api-client/outgoinggroupjoinrequest) | class | `Outgoing` | 2 | A join request the current user has sent to a group. Revoke it to withdraw. |
| [`OutgoingPrivateGroupJoinRequest`](/game-api/types/assembly-api-client/outgoingprivategroupjoinrequest) | class | `Outgoing` | 2 | A join request to a group known only by id. Revoke it to withdraw. |
| [`PaginatedList<T>`](/game-api/types/assembly-api-client/paginatedlist-t) | abstract class |  | 2 |  |
| [`PaginatedListWithAdd<T>`](/game-api/types/assembly-api-client/paginatedlistwithadd-t) | abstract class | `PaginatedList<T>` | 1 |  |
| [`PersonalGroups`](/game-api/types/assembly-api-client/personalgroups) | class |  | 3 | The logged-in user's group join requests and invites, from the Alta web API. `Groups.Personal`. |
| [`PicoClient`](/game-api/types/assembly-api-client/picoclient) | internal class | `HighLevelApiClientBase`, `IPicoClient` | 5 |  |
| [`PlayerReportAdmin`](/game-api/types/assembly-api-client/playerreportadmin) | class |  | 3 | High-level API handle for moderating one player report: mark it ignored or acted on. |
| [`PlayerReportsClient`](/game-api/types/assembly-api-client/playerreportsclient) | class | `HighLevelApiClientBase`, `IPlayerReportsClient` | 3 |  |
| [`PlayerReportSummary`](/game-api/types/assembly-api-client/playerreportsummary) | class |  | 10 | All admin reports against one player on one server, grouped by `ServerReportCollection`. Built by the player reports client from report data fetched from the web API. |
| [`RecentPlayersClient`](/game-api/types/assembly-api-client/recentplayersclient) | class | `HighLevelApiClientBase`, `IRecentPlayersClient` | 2 |  |
| [`RequestedGroups`](/game-api/types/assembly-api-client/requestedgroups) | class | `PaginatedList<OutgoingGroupJoinRequest>` | 0 | Paged list of groups the current user has asked to join, from the Alta web API. |
| [`SecurityApiClient`](/game-api/types/assembly-api-client/securityapiclient) | class | `HighLevelApiClientBase`, `ISecurityApiClient` | 6 |  |
| [`ServerAccess`](/game-api/types/assembly-api-client/serveraccess) | class | `IServerAccess` | 8 |  |
| [`ServerApiClient`](/game-api/types/assembly-api-client/serverapiclient) | class | `HighLevelApiClientBase`, `IServerApiClient` | 22 |  |
| [`ServerReportCollection`](/game-api/types/assembly-api-client/serverreportcollection) | class |  | 1 |  |
| [`ServerStartArguments`](/game-api/types/assembly-api-client/serverstartarguments) | class |  | 9 | What a server tells the Alta web API when it starts its session. Built by `ServerHandler` and passed to `IServerAccess.StartAsync`. |
| [`ServicesApiClient`](/game-api/types/assembly-api-client/servicesapiclient) | class | `HighLevelApiClientBase`, `IServicesApiClient` | 7 |  |
| [`SettingsClient`](/game-api/types/assembly-api-client/settingsclient) | class | `HighLevelApiClientBase`, `ISettingsClient` | 2 | [Alta's web API](../console-and-utilities/alta-web-api.md) |
| [`ShopAccount`](/game-api/types/assembly-api-client/shopaccount) | class | `IShopAccount` | 6 |  |
| [`ShopApiClient`](/game-api/types/assembly-api-client/shopapiclient) | class | `HighLevelApiClientBase`, `IShopApiClient` | 12 |  |
| [`ShopEditor`](/game-api/types/assembly-api-client/shopeditor) | class | `IShopEditor` | 9 |  |
| [`ShopPurchase`](/game-api/types/assembly-api-client/shoppurchase) | class | `IShopPurchase` | 1 |  |
| [`SocialClient`](/game-api/types/assembly-api-client/socialclient) | class | `HighLevelApiClientBase`, `ISocialClient` | 9 |  |
| [`Status`](/game-api/types/assembly-api-client/status) | class |  | 11 | A service status notice (an outage or incident message) as JSON from the web API, with its region, platform and severity. |
| [`Status.StatusPlatform`](/game-api/types/assembly-api-client/status-statusplatform) | enum |  | 4 | Platform a service status notice applies to: `Quest`, `Pc`, `Pico` or `All`. |
| [`Status.StatusRegion`](/game-api/types/assembly-api-client/status-statusregion) | enum |  | 4 | Region a service status notice applies to: `Australia`, `Usa`, `Europe` or `Global`. |
| [`Status.StatusSeverity`](/game-api/types/assembly-api-client/status-statusseverity) | enum |  | 4 | Severity of a service status notice, from `Low` to `Critical`. |
| [`Status.StatusType`](/game-api/types/assembly-api-client/status-statustype) | enum |  | 2 | Whether a service status notice is `OnGoing` or `Resolved`. |
| [`StatusAPI`](/game-api/types/assembly-api-client/statusapi) | class |  | 2 | Fetches service status notices from Alta's Strapi site (strapi.townshiptale.dev). |
| [`UserApiClient`](/game-api/types/assembly-api-client/userapiclient) | class | `HighLevelApiClientBase`, `IUserApiClient` | 21 |  |
| [`VoiceApiClient`](/game-api/types/assembly-api-client/voiceapiclient) | class | `HighLevelApiClientBase`, `IVoiceApiClient` | 2 |  |

## Alta.Api.Client.HighLevel.Subscriptions

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Test`](/game-api/types/assembly-api-client/test) | static class |  | 1 |  |
| [`WebSocketManager`](/game-api/types/assembly-api-client/websocketmanager) | class |  | 3 |  |

## Alta.Api.Client.LowLevel

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ApiBatchRequestService`](/game-api/types/assembly-api-client/apibatchrequestservice) | static class |  | 1 |  |
| [`BatchedRequestEntry`](/game-api/types/assembly-api-client/batchedrequestentry) | class |  | 2 | One queued request in `ApiBatchRequestService`. Entries for the same address are sent together as one JSON list. |
| [`ConvertedPagedResult<TSource, T>`](/game-api/types/assembly-api-client/convertedpagedresult-tsource-t) | class | `IPagedResult<T>` | 5 |  |
| [`DoubleBufferedQueue<T>`](/game-api/types/assembly-api-client/doublebufferedqueue-t) | class |  | 3 | Two queues that swap: entries collect in one until a timer runs out or it is full, then it is passed to `ProcessQueue` and the other takes new entries. Used by `ApiBatchRequestService` (30 s, 100 entries). |
| [`IPagedResult<T>`](/game-api/types/assembly-api-client/ipagedresult-t) | interface |  | 4 | A paged list result from the Alta web API, fetched one page at a time. |
| [`LoginCredentialsChangedHandler`](/game-api/types/assembly-api-client/logincredentialschangedhandler) | delegate |  | 0 | Callback for `CredentialsChanged`, given the old and the new login credentials. |
| [`LowLevelApiClient`](/game-api/types/assembly-api-client/lowlevelapiclient) | class |  | 164 | The HTTP layer under `IHighLevelApiClient`: one method per endpoint of Alta's web API, which no longer answers. Most methods first refresh the login if needed (throwing `AuthorizationException` with none), and failed responses throw `ApiErrorException`, `ForbiddenException` or `HttpException`. |
| [`PagedConfig`](/game-api/types/assembly-api-client/pagedconfig) | class |  | 4 | Page size and continuation token for paged API calls. |
| [`PagedResult<T>`](/game-api/types/assembly-api-client/pagedresult-t) | class | `IPagedResult<T>` | 5 | Pages through a paged Alta API endpoint, following the `paginationToken` response header. |

## Alta.Api.Client.Utility

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ClientTokenUtility`](/game-api/types/assembly-api-client/clienttokenutility) | static class |  | 1 |  |
| [`LoginUtilities`](/game-api/types/assembly-api-client/loginutilities) | static class |  | 1 |  |
