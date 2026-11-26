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
| [`LoginCredentials`](/mod/game-api/types/assembly-api-client/logincredentials) | class |  | 4 | The JWT tokens returned when a user or server logs in to the Alta API. |

## Alta.Api.Client.HighLevel

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AcceptReject`](/mod/game-api/types/assembly-api-client/acceptreject) | abstract class |  | 2 | Base for an incoming API request (such as a group join request) that you can accept or reject. Calls Alta's web API, which no longer answers. |
| [`AccountClient`](/mod/game-api/types/assembly-api-client/accountclient) | internal class | `HighLevelApiClientBase`, `IAccountClient` | 6 | Online client for linking an Alta account to Discord. Reached as `ApiAccess.ApiClient.Account`; calls Alta's web API, which no longer answers. |
| [`AchievementApiClient`](/mod/game-api/types/assembly-api-client/achievementapiclient) | class | `HighLevelApiClientBase`, `IAchievementClient` | 5 | Online client for a user's achievements and action stats stored by Alta's web API, which no longer answers. Reached as `ApiAccess.ApiClient.AchievementClient`. |
| [`AnalyticsClient`](/mod/game-api/types/assembly-api-client/analyticsclient) | class | `HighLevelApiClientBase`, `IAnalyticsClient` | 4 | Online client that queues analytics events to Alta's web API, which no longer answers. Reached as `ApiAccess.ApiClient.Analytics`; failures are logged with stack traces unless a mod stubs it. |
| [`FutureUserActionsClient`](/mod/game-api/types/assembly-api-client/futureuseractionsclient) | class | `HighLevelApiClientBase`, `IFutureUserActions` | 3 | Online client for actions the API should run for a platform user later, such as friending or inviting an Oculus user once they join. Calls Alta's web API, which no longer answers. |
| [`GroupBan`](/mod/game-api/types/assembly-api-client/groupban) | class | `Outgoing` | 2 | A ban of one user from a group, from the Alta web API. Revoke it to lift the ban. |
| [`GroupBans`](/mod/game-api/types/assembly-api-client/groupbans) | class | `PaginatedListWithAdd<GroupBan>` | 2 | Paged list of a group's bans from the Alta web API, with a way to ban more users. |
| [`GroupCreator`](/mod/game-api/types/assembly-api-client/groupcreator) | class |  | 3 | Alta web API calls for creating a group and its server. Reached through `ApiAccess.ApiClient.Groups.CreateGroup`. The API is gone, so calls fail after timing out. |
| [`GroupDiscovery`](/mod/game-api/types/assembly-api-client/groupdiscovery) | class |  | 3 | Alta web API lists of groups a player can find and join. Reached through `ApiAccess.ApiClient.Groups.Discovery`. The API is gone, so calls fail after timing out. |
| [`GroupGet`](/mod/game-api/types/assembly-api-client/groupget) | class | `PaginatedList<JoinableGroupInfo>` | 0 | Paged list of joinable groups of one group type, fetched from the Alta web API and wrapped as `JoinableGroupInfo`. |
| [`GroupInfoManager`](/mod/game-api/types/assembly-api-client/groupinfomanager) | class |  | 3 | Admin view of a joined group: its editable info, roles and members. |
| [`GroupInfoUpdate`](/mod/game-api/types/assembly-api-client/groupinfoupdate) | class |  | 2 | Wraps a group so its info can be edited through the Alta web API. |
| [`GroupInvites`](/mod/game-api/types/assembly-api-client/groupinvites) | class | `PaginatedListWithAdd<OutgoingGroupInvite>` | 2 | Paged list of a group's outgoing invites from the Alta web API, with a way to invite more users. |
| [`GroupJoinRequests`](/mod/game-api/types/assembly-api-client/groupjoinrequests) | class | `PaginatedList<IncomingGroupJoinRequest>` | 0 | Paged list of requests from users to join a group, from the Alta web API. |
| [`GroupMember`](/mod/game-api/types/assembly-api-client/groupmember) | class |  | 4 | One member of a joined group in Alta's web API, with calls to kick, ban or change their role. Those services are gone, so the calls fail. |
| [`GroupMembers`](/mod/game-api/types/assembly-api-client/groupmembers) | class | `PaginatedList<GroupMember>` | 0 | Paged list of a joined group's members from the Alta web API. |
| [`GroupRoles`](/mod/game-api/types/assembly-api-client/grouproles) | class |  | 2 | A joined group's roles from the current user's point of view, with a permission check. |
| [`GroupsClient`](/mod/game-api/types/assembly-api-client/groupsclient) | internal class | `HighLevelApiClientBase`, `IGroupsClient` | 7 | Online client for Alta groups. Reached as `ApiAccess.ApiClient.Groups`; calls Alta's web API, which no longer answers. |
| [`HighLevelApiClient`](/mod/game-api/types/assembly-api-client/highlevelapiclient) | class | `IHighLevelApiClientManager`, `IHighLevelApiClient` | 35 | The online client for Alta's web API, one sub-client per area. Made by `HighLevelApiClientFactory` and reached through `ApiAccess.ApiClient`. Both sides; most calls now time out because the services are gone. |
| [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase) | abstract class |  | 0 | Internal base for the high level web API client parts; each holds a reference to the low level client manager. Not constructible outside the API client assembly. |
| [`HighLevelApiClientFactory`](/mod/game-api/types/assembly-api-client/highlevelapiclientfactory) | static class |  | 16 | Makes the API client the game uses (`ApiAccess` calls it) and holds the known API addresses. All of Alta's addresses here no longer answer. |
| [`IAccountClient`](/mod/game-api/types/assembly-api-client/iaccountclient) | interface |  | 5 | Alta web API calls for linking a Discord account to an Alta account. `ApiAccess.ApiClient.Account`. The API is gone, so calls fail. |
| [`IAchievementClient`](/mod/game-api/types/assembly-api-client/iachievementclient) | interface |  | 4 | Alta web API calls for a user's achievements and action stats. `ApiAccess.ApiClient.AchievementClient`. The API is gone, so calls fail. |
| [`IAnalyticsClient`](/mod/game-api/types/assembly-api-client/ianalyticsclient) | interface |  | 4 | Alta web API calls for sending analytics events. `ApiAccess.ApiClient.Analytics`. The API is gone, so each event fails and is logged. |
| [`IFutureUserActions`](/mod/game-api/types/assembly-api-client/ifutureuseractions) | interface |  | 3 | Alta web API calls that store an action to run for an outside user (an Oculus user, for example) once they have an Alta account. `ApiAccess.ApiClient.FutureUserActions`. |
| [`IGroupsClient`](/mod/game-api/types/assembly-api-client/igroupsclient) | interface |  | 6 | Alta web API calls for groups (the communities that own servers). `ApiAccess.ApiClient.Groups`. The API is gone, so calls fail. |
| [`IHighLevelApiClient`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient) | interface |  | 35 | [Alta's web API](../console-and-utilities/alta-web-api.md#ihighlevelapiclient): One property per area, each its own client class: |
| [`IHighLevelApiClientManager`](/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager) | internal interface |  | 2 | Internal interface for the object that owns the low-level Alta API client and can log it out. |
| [`IInstancesClient`](/mod/game-api/types/assembly-api-client/iinstancesclient) | interface |  | 1 | Alta web API call that lists running server instances in Alta's hosting. `ApiAccess.ApiClient.Instances`. |
| [`ILauncherApiClient`](/mod/game-api/types/assembly-api-client/ilauncherapiclient) | interface |  | 2 | Alta web API calls for the games listed in Alta's launcher. `ApiAccess.ApiClient.LauncherClient`. |
| [`IMatchMakingClient`](/mod/game-api/types/assembly-api-client/imatchmakingclient) | interface |  | 1 | Alta web API matchmaking. `ApiAccess.ApiClient.MatchMaking`. |
| [`IncomingGroupInvite`](/mod/game-api/types/assembly-api-client/incominggroupinvite) | class | `AcceptReject` | 3 | An invite to a group that the current user received, with calls to accept or reject it through the Alta web API. |
| [`IncomingGroupJoinRequest`](/mod/game-api/types/assembly-api-client/incominggroupjoinrequest) | class | `AcceptReject` | 3 | A request from a user to join a group, which the group's admin can accept or reject. Calls Alta's web API, which no longer answers. |
| [`InstancesClient`](/mod/game-api/types/assembly-api-client/instancesclient) | internal class | `HighLevelApiClientBase`, `IInstancesClient` | 2 | Online client that lists Alta's running game server instances. Reached as `ApiAccess.ApiClient.Instances`; calls Alta's web API, which no longer answers. |
| [`InvitedGroups`](/mod/game-api/types/assembly-api-client/invitedgroups) | class | `PaginatedList<IncomingGroupInvite>` | 0 | Paged list of group invites the current user has received, from the Alta web API. |
| [`IOculusClient`](/mod/game-api/types/assembly-api-client/ioculusclient) | interface |  | 4 | Alta web API calls for linking an Oculus account to an Alta account. `ApiAccess.ApiClient.Oculus`. |
| [`IOculusShop`](/mod/game-api/types/assembly-api-client/ioculusshop) | interface |  | 1 | Alta web API call for turning Oculus store purchases into Alta shop items. `ShopClient.Oculus`. |
| [`IPicoClient`](/mod/game-api/types/assembly-api-client/ipicoclient) | interface |  | 4 | Alta web API calls for linking a Pico account to an Alta account, per Pico region. `ApiAccess.ApiClient.Pico`. |
| [`IPlayerReportsClient`](/mod/game-api/types/assembly-api-client/iplayerreportsclient) | interface |  | 3 | Alta web API calls for reporting players and reading reports. `ApiAccess.ApiClient.PlayerReports`. |
| [`IRecentPlayersClient`](/mod/game-api/types/assembly-api-client/irecentplayersclient) | interface |  | 2 | Alta web API calls for the recent players list. `ApiAccess.ApiClient.RecentPlayers`. |
| [`ISecurityApiClient`](/mod/game-api/types/assembly-api-client/isecurityapiclient) | interface |  | 6 | Alta web API calls for bans and identity token checks. `ApiAccess.ApiClient.SecurityClient`. |
| [`IServerAccess`](/mod/game-api/types/assembly-api-client/iserveraccess) | interface |  | 8 | Server-side handle for reporting one game server's session to the Alta API: start, stop, ping and online players. `ServerAccess` calls the API; `LocalServerAccess` does nothing. |
| [`IServerApiClient`](/mod/game-api/types/assembly-api-client/iserverapiclient) | interface |  | 22 | Alta web API calls for servers: lists, joining, permissions and online status. `ApiAccess.ApiClient.ServerClient`. The API is gone, so calls fail after timing out; see the Alta web API guide for which are stubbed. |
| [`IServicesApiClient`](/mod/game-api/types/assembly-api-client/iservicesapiclient) | interface |  | 7 | Alta web API helper calls: public IP lookup, passwords, verification and identity tokens. `ApiAccess.ApiClient.ServicesClient`. |
| [`ISettingsClient`](/mod/game-api/types/assembly-api-client/isettingsclient) | interface |  | 2 | Alta web API calls for named settings stored as text. `ApiAccess.ApiClient.SettingsClient`. |
| [`IShopAccount`](/mod/game-api/types/assembly-api-client/ishopaccount) | interface |  | 6 | Alta web API calls for a user's shop account and owned items. `ShopClient.Account`. |
| [`IShopApiClient`](/mod/game-api/types/assembly-api-client/ishopapiclient) | interface |  | 11 | Alta web API calls for the cosmetics shop. `ApiAccess.ApiClient.ShopClient`. The API is gone; mods stub the rotation and purchase checks. |
| [`IShopEditor`](/mod/game-api/types/assembly-api-client/ishopeditor) | interface |  | 9 | Alta web API calls for creating and editing shop items and item sets. `ShopClient.Editor`. Probably staff only. |
| [`IShopPurchase`](/mod/game-api/types/assembly-api-client/ishoppurchase) | interface |  | 1 | Alta web API call for buying a shop item. `ShopClient.Purchase`. |
| [`ISocialClient`](/mod/game-api/types/assembly-api-client/isocialclient) | interface |  | 9 | Alta web API calls for friends. `ApiAccess.ApiClient.SocialClient`. TavernEssentials swaps in its own social client. |
| [`IUserApiClient`](/mod/game-api/types/assembly-api-client/iuserapiclient) | interface |  | 21 | The user account part of Alta's web API: user lookups, verification, roles and cosmetic presets. Reached through `ApiAccess.ApiClient.UserClient`. Every method except `Logout` makes a web request. |
| [`IVoiceApiClient`](/mod/game-api/types/assembly-api-client/ivoiceapiclient) | interface |  | 2 | Alta web API calls for Vivox voice chat tokens. `ApiAccess.ApiClient.VoiceClient`. Voice no longer works. |
| [`JoinableGroupInfo`](/mod/game-api/types/assembly-api-client/joinablegroupinfo) | class |  | 2 | A group the current user can ask to join through the Alta web API. |
| [`JoinedGroupManager`](/mod/game-api/types/assembly-api-client/joinedgroupmanager) | class |  | 7 | High-level API handle for a group the current user is a member of, with its join requests, invites, bans and info managers. |
| [`JoinedGroups`](/mod/game-api/types/assembly-api-client/joinedgroups) | class | `PaginatedList<JoinedGroupManager>` | 1 | Paged list of the groups the logged-in user is a member of, from the Alta web API. `Groups.Joined`. |
| [`LauncherApiClient`](/mod/game-api/types/assembly-api-client/launcherapiclient) | class | `HighLevelApiClientBase`, `ILauncherApiClient` | 2 | Online client for the game list shown by Alta's launcher. Reached as `ApiAccess.ApiClient.LauncherClient`; calls Alta's web API, which no longer answers. |
| [`LocalServerAccess`](/mod/game-api/types/assembly-api-client/localserveraccess) | class | `IServerAccess` | 9 | Server session that never talks to the API. Used for a server started with a negative ID (`/start_server -1`, how Tavern starts servers) and by the offline client. |
| [`MatchMakingClient`](/mod/game-api/types/assembly-api-client/matchmakingclient) | internal class | `HighLevelApiClientBase`, `IMatchMakingClient` | 2 | Online client for matchmaking. Reached as `ApiAccess.ApiClient.MatchMaking`; calls Alta's web API, which no longer answers. |
| [`OculusClient`](/mod/game-api/types/assembly-api-client/oculusclient) | class | `HighLevelApiClientBase`, `IOculusClient` | 4 | Online client for linking an Alta account to an Oculus (Meta) user. Reached as `ApiAccess.ApiClient.Oculus`; calls Alta's web API, which no longer answers. |
| [`OculusShop`](/mod/game-api/types/assembly-api-client/oculusshop) | class | `IOculusShop` | 1 | Online client that claims a player's Oculus store purchases into their Alta shop account. Reached through `ShopClient.Oculus`; calls Alta's web API, which no longer answers. |
| [`OfflineAchievementApiClient`](/mod/game-api/types/assembly-api-client/offlineachievementapiclient) | class | `IAchievementClient` | 5 | Offline stand-in for the achievement client: no requests, nothing is stored. |
| [`OfflineGroupsClient`](/mod/game-api/types/assembly-api-client/offlinegroupsclient) | internal class | `IGroupsClient` | 6 | Offline stand-in for the groups client. Every member throws `OfflineException`. |
| [`OfflineHighLevelApiClient`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient) | class | `IHighLevelApiClient` | 36 | The API client used when the game starts offline (`ApiAccess.StartOffline`). It answers locally, and logs in from the stored access token's claims. Several areas are left null. |
| [`OfflineLauncherApiClient`](/mod/game-api/types/assembly-api-client/offlinelauncherapiclient) | class | `ILauncherApiClient` | 2 | Offline stand-in for the launcher client. |
| [`OfflineSecurityApiClient`](/mod/game-api/types/assembly-api-client/offlinesecurityapiclient) | class | `ISecurityApiClient` | 7 | Offline stand-in for the security client. Bans are unavailable and every token and join is accepted. |
| [`OfflineServerApiClient`](/mod/game-api/types/assembly-api-client/offlineserverapiclient) | class | `IServerApiClient` | 22 | Offline stand-in for the server client. It hands out `GameServerInfo.OfflineServer` wrapped in `LocalServerAccess`, allows every join, and throws `OfflineException` for the rest. |
| [`OfflineServicesApiClient`](/mod/game-api/types/assembly-api-client/offlineservicesapiclient) | class | `IServicesApiClient` | 8 | Offline stand-in for the services client. Only the public IP lookup answers; the rest throw `OfflineException`. |
| [`OfflineShopAccount`](/mod/game-api/types/assembly-api-client/offlineshopaccount) | class | `IShopAccount` | 6 | Offline stand-in for the shop account: a fixed supporter account with 100000 shards and no owned items. |
| [`OfflineShopApiClient`](/mod/game-api/types/assembly-api-client/offlineshopapiclient) | class | `IShopApiClient` | 12 | Offline stand-in for the shop client. Ownership checks always pass; shop configuration calls throw `OfflineException`. |
| [`OfflineShopEditor`](/mod/game-api/types/assembly-api-client/offlineshopeditor) | class | `IShopEditor` | 9 | Offline stand-in for the shop editor. Every method throws `OfflineException`. |
| [`OfflineShopPurchase`](/mod/game-api/types/assembly-api-client/offlineshoppurchase) | class | `IShopPurchase` | 2 | Offline stand-in for shop purchases. Every method throws `OfflineException`. |
| [`OfflineSocialClient`](/mod/game-api/types/assembly-api-client/offlinesocialclient) | class | `ISocialClient` | 9 | Offline stand-in for the friends client. Lists come back empty; changing friendships throws `OfflineException`. |
| [`OfflineUserApiClient`](/mod/game-api/types/assembly-api-client/offlineuserapiclient) | class | `IUserApiClient` | 21 | Offline stand-in for the user client, created on offline login from the stored access token. Simple calls succeed locally; account and preset calls throw `OfflineException`. |
| [`OfflineVoiceClient`](/mod/game-api/types/assembly-api-client/offlinevoiceclient) | class | `IVoiceApiClient` | 2 | Offline stand-in for the Vivox voice token client. |
| [`Outgoing`](/mod/game-api/types/assembly-api-client/outgoing) | abstract class |  | 1 | Base for something the logged-in user sent or set in a group (an invite, a join request, a ban) that can be taken back. Calls Alta's web API, which no longer answers. |
| [`OutgoingGroupInvite`](/mod/game-api/types/assembly-api-client/outgoinggroupinvite) | class | `Outgoing` | 2 | An invite the group has sent to a user, which can be revoked through the Alta web API. |
| [`OutgoingGroupJoinRequest`](/mod/game-api/types/assembly-api-client/outgoinggroupjoinrequest) | class | `Outgoing` | 2 | A join request the current user has sent to a group. Revoke it to withdraw. |
| [`OutgoingPrivateGroupJoinRequest`](/mod/game-api/types/assembly-api-client/outgoingprivategroupjoinrequest) | class | `Outgoing` | 2 | A join request to a group known only by id. Revoke it to withdraw. |
| [`PaginatedList<T>`](/mod/game-api/types/assembly-api-client/paginatedlist-t) | abstract class |  | 2 | Base for a paged list from the API, such as group members, bans, invites and join requests. Calls Alta's web API, which no longer answers. |
| [`PaginatedListWithAdd<T>`](/mod/game-api/types/assembly-api-client/paginatedlistwithadd-t) | abstract class | `PaginatedList<T>` | 1 | Paged API list that a user can also be added to, such as a group's bans or invites. |
| [`PersonalGroups`](/mod/game-api/types/assembly-api-client/personalgroups) | class |  | 3 | The logged-in user's group join requests and invites, from the Alta web API. `Groups.Personal`. |
| [`PicoClient`](/mod/game-api/types/assembly-api-client/picoclient) | internal class | `HighLevelApiClientBase`, `IPicoClient` | 5 | Online client for linking an Alta account to a Pico user. Reached as `ApiAccess.ApiClient.Pico`; calls Alta's web API, which no longer answers. |
| [`PlayerReportAdmin`](/mod/game-api/types/assembly-api-client/playerreportadmin) | class |  | 3 | High-level API handle for moderating one player report: mark it ignored or acted on. |
| [`PlayerReportsClient`](/mod/game-api/types/assembly-api-client/playerreportsclient) | class | `HighLevelApiClientBase`, `IPlayerReportsClient` | 3 | Online client for reporting players and reading reports. Reached as `ApiAccess.ApiClient.PlayerReports`; calls Alta's web API, which no longer answers. |
| [`PlayerReportSummary`](/mod/game-api/types/assembly-api-client/playerreportsummary) | class |  | 10 | All admin reports against one player on one server, grouped by `ServerReportCollection`. Built by the player reports client from report data fetched from the web API. |
| [`RecentPlayersClient`](/mod/game-api/types/assembly-api-client/recentplayersclient) | class | `HighLevelApiClientBase`, `IRecentPlayersClient` | 2 | Online client for the players you recently met. Reached as `ApiAccess.ApiClient.RecentPlayers`; calls Alta's web API, which no longer answers. |
| [`RequestedGroups`](/mod/game-api/types/assembly-api-client/requestedgroups) | class | `PaginatedList<OutgoingGroupJoinRequest>` | 0 | Paged list of groups the current user has asked to join, from the Alta web API. |
| [`SecurityApiClient`](/mod/game-api/types/assembly-api-client/securityapiclient) | class | `HighLevelApiClientBase`, `ISecurityApiClient` | 6 | Online client for bans and identity token checks. Reached as `ApiAccess.ApiClient.SecurityClient`; calls Alta's web API, which no longer answers. |
| [`ServerAccess`](/mod/game-api/types/assembly-api-client/serveraccess) | class | `IServerAccess` | 8 | A server's session with Alta's web API: start, ping, online players and stop. Server side; returned by `ServerApiClient` for a positive server ID. Every call goes to the API, which no longer answers. |
| [`ServerApiClient`](/mod/game-api/types/assembly-api-client/serverapiclient) | class | `HighLevelApiClientBase`, `IServerApiClient` | 22 | Online client for servers: lists, info, joining, sessions and permissions. Reached as `ApiAccess.ApiClient.ServerClient`; calls Alta's web API, which no longer answers. |
| [`ServerReportCollection`](/mod/game-api/types/assembly-api-client/serverreportcollection) | class |  | 1 | Player reports for one server, grouped into one summary per reported player. Built by `PlayerReportsClient.ViewAllReportsAsSummary`. |
| [`ServerStartArguments`](/mod/game-api/types/assembly-api-client/serverstartarguments) | class |  | 9 | What a server tells the Alta web API when it starts its session. Built by `ServerHandler` and passed to `IServerAccess.StartAsync`. |
| [`ServicesApiClient`](/mod/game-api/types/assembly-api-client/servicesapiclient) | class | `HighLevelApiClientBase`, `IServicesApiClient` | 7 | Online client for general services: public IP lookup, password resets, sign-up codes, verification and identity tokens. Reached as `ApiAccess.ApiClient.ServicesClient`; calls Alta's web API, which no longer answers. |
| [`SettingsClient`](/mod/game-api/types/assembly-api-client/settingsclient) | class | `HighLevelApiClientBase`, `ISettingsClient` | 2 | [Alta's web API](../console-and-utilities/alta-web-api.md) |
| [`ShopAccount`](/mod/game-api/types/assembly-api-client/shopaccount) | class | `IShopAccount` | 6 | Online client for a player's shop account: balance, owned items and gifts. Reached through `ShopClient.Account`; calls Alta's web API, which no longer answers. |
| [`ShopApiClient`](/mod/game-api/types/assembly-api-client/shopapiclient) | class | `HighLevelApiClientBase`, `IShopApiClient` | 12 | Online client for the cosmetics shop. Reached as `ApiAccess.ApiClient.ShopClient`; calls Alta's web API, which no longer answers. |
| [`ShopEditor`](/mod/game-api/types/assembly-api-client/shopeditor) | class | `IShopEditor` | 9 | Online client for managing shop items and item sets, an Alta staff tool. Reached through `ShopClient.Editor`; calls Alta's web API, which no longer answers. |
| [`ShopPurchase`](/mod/game-api/types/assembly-api-client/shoppurchase) | class | `IShopPurchase` | 1 | Online client for buying shop items with shards. Reached through `ShopClient.Purchase`; calls Alta's web API, which no longer answers. |
| [`SocialClient`](/mod/game-api/types/assembly-api-client/socialclient) | class | `HighLevelApiClientBase`, `ISocialClient` | 9 | Online client for friends. Reached as `ApiAccess.ApiClient.SocialClient`; calls Alta's web API, which no longer answers. TavernEssentials swaps in its own. |
| [`Status`](/mod/game-api/types/assembly-api-client/status) | class |  | 11 | A service status notice (an outage or incident message) as JSON from the web API, with its region, platform and severity. |
| [`Status.StatusPlatform`](/mod/game-api/types/assembly-api-client/status-statusplatform) | enum |  | 4 | Platform a service status notice applies to: `Quest`, `Pc`, `Pico` or `All`. |
| [`Status.StatusRegion`](/mod/game-api/types/assembly-api-client/status-statusregion) | enum |  | 4 | Region a service status notice applies to: `Australia`, `Usa`, `Europe` or `Global`. |
| [`Status.StatusSeverity`](/mod/game-api/types/assembly-api-client/status-statusseverity) | enum |  | 4 | Severity of a service status notice, from `Low` to `Critical`. |
| [`Status.StatusType`](/mod/game-api/types/assembly-api-client/status-statustype) | enum |  | 2 | Whether a service status notice is `OnGoing` or `Resolved`. |
| [`StatusAPI`](/mod/game-api/types/assembly-api-client/statusapi) | class |  | 2 | Fetches service status notices from Alta's Strapi site (strapi.townshiptale.dev). |
| [`UserApiClient`](/mod/game-api/types/assembly-api-client/userapiclient) | class | `HighLevelApiClientBase`, `IUserApiClient` | 21 | High-level Alta API calls about user accounts: user info, verification, username and password changes, roles and cosmetic presets. Thin wrapper over the low-level API client. |
| [`VoiceApiClient`](/mod/game-api/types/assembly-api-client/voiceapiclient) | class | `HighLevelApiClientBase`, `IVoiceApiClient` | 2 | High-level Alta API calls that get voice chat tokens. |

## Alta.Api.Client.HighLevel.Subscriptions

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Test`](/mod/game-api/types/assembly-api-client/test) | static class |  | 1 | Leftover static class holding one LINQ-style extension method. |
| [`WebSocketManager`](/mod/game-api/types/assembly-api-client/websocketmanager) | class |  | 3 | A small WebSocket client for the Alta API that sends JSON messages and routes incoming events to handlers by event name. Opens the socket lazily on the first send. |

## Alta.Api.Client.LowLevel

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ApiBatchRequestService`](/mod/game-api/types/assembly-api-client/apibatchrequestservice) | static class |  | 1 | Collects small API posts and sends them in batches: entries are queued and flushed every 30 seconds or at 100 entries, grouped by URI into one JSON list per URI. |
| [`BatchedRequestEntry`](/mod/game-api/types/assembly-api-client/batchedrequestentry) | class |  | 2 | One queued request in `ApiBatchRequestService`. Entries for the same address are sent together as one JSON list. |
| [`ConvertedPagedResult<TSource, T>`](/mod/game-api/types/assembly-api-client/convertedpagedresult-tsource-t) | class | `IPagedResult<T>` | 5 | Wraps a paged API result and converts each item with a function, so a page of one model type can be read as another. |
| [`DoubleBufferedQueue<T>`](/mod/game-api/types/assembly-api-client/doublebufferedqueue-t) | class |  | 3 | Two queues that swap: entries collect in one until a timer runs out or it is full, then it is passed to `ProcessQueue` and the other takes new entries. Used by `ApiBatchRequestService` (30 s, 100 entries). |
| [`IPagedResult<T>`](/mod/game-api/types/assembly-api-client/ipagedresult-t) | interface |  | 4 | A paged list result from the Alta web API, fetched one page at a time. |
| [`LoginCredentialsChangedHandler`](/mod/game-api/types/assembly-api-client/logincredentialschangedhandler) | delegate |  | 0 | Callback for `CredentialsChanged`, given the old and the new login credentials. |
| [`LowLevelApiClient`](/mod/game-api/types/assembly-api-client/lowlevelapiclient) | class |  | 164 | The HTTP layer under `IHighLevelApiClient`: one method per endpoint of Alta's web API, which no longer answers. Most methods first refresh the login if needed (throwing `AuthorizationException` with none), and failed responses throw `ApiErrorException`, `ForbiddenException` or `HttpException`. |
| [`PagedConfig`](/mod/game-api/types/assembly-api-client/pagedconfig) | class |  | 4 | Page size and continuation token for paged API calls. |
| [`PagedResult<T>`](/mod/game-api/types/assembly-api-client/pagedresult-t) | class | `IPagedResult<T>` | 5 | Pages through a paged Alta API endpoint, following the `paginationToken` response header. |

## Alta.Api.Client.Utility

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ClientTokenUtility`](/mod/game-api/types/assembly-api-client/clienttokenutility) | static class |  | 1 | Helper for checking JWT tokens on the client. |
| [`LoginUtilities`](/mod/game-api/types/assembly-api-client/loginutilities) | static class |  | 1 | Hashing helper used when logging in: the API takes password hashes, not passwords. |
