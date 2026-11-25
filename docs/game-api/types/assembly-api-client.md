---
title: Alta.Api.Client
description: "Types in the Alta.Api.Client assembly, the client for Alta's (now closed) web API."
sidebar_position: 24
---

# Alta.Api.Client

Types in the Alta.Api.Client assembly, the client for Alta's (now closed) web API. 121 types, 2 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Api.Client

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`LoginCredentials`](/game-api/types/assembly-api-client/logincredentials) | class |  | 4 |  |

## Alta.Api.Client.HighLevel

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AcceptReject`](/game-api/types/assembly-api-client/acceptreject) | abstract class |  | 2 |  |
| [`AccountClient`](/game-api/types/assembly-api-client/accountclient) | internal class | `HighLevelApiClientBase`, `IAccountClient` | 6 |  |
| [`AchievementApiClient`](/game-api/types/assembly-api-client/achievementapiclient) | class | `HighLevelApiClientBase`, `IAchievementClient` | 5 |  |
| [`AnalyticsClient`](/game-api/types/assembly-api-client/analyticsclient) | class | `HighLevelApiClientBase`, `IAnalyticsClient` | 4 |  |
| [`FutureUserActionsClient`](/game-api/types/assembly-api-client/futureuseractionsclient) | class | `HighLevelApiClientBase`, `IFutureUserActions` | 3 |  |
| [`GroupBan`](/game-api/types/assembly-api-client/groupban) | class | `Outgoing` | 2 |  |
| [`GroupBans`](/game-api/types/assembly-api-client/groupbans) | class | `PaginatedListWithAdd<GroupBan>` | 2 |  |
| [`GroupCreator`](/game-api/types/assembly-api-client/groupcreator) | class |  | 3 |  |
| [`GroupDiscovery`](/game-api/types/assembly-api-client/groupdiscovery) | class |  | 3 |  |
| [`GroupGet`](/game-api/types/assembly-api-client/groupget) | class | `PaginatedList<JoinableGroupInfo>` | 0 |  |
| [`GroupInfoManager`](/game-api/types/assembly-api-client/groupinfomanager) | class |  | 3 |  |
| [`GroupInfoUpdate`](/game-api/types/assembly-api-client/groupinfoupdate) | class |  | 2 |  |
| [`GroupInvites`](/game-api/types/assembly-api-client/groupinvites) | class | `PaginatedListWithAdd<OutgoingGroupInvite>` | 2 |  |
| [`GroupJoinRequests`](/game-api/types/assembly-api-client/groupjoinrequests) | class | `PaginatedList<IncomingGroupJoinRequest>` | 0 |  |
| [`GroupMember`](/game-api/types/assembly-api-client/groupmember) | class |  | 4 |  |
| [`GroupMembers`](/game-api/types/assembly-api-client/groupmembers) | class | `PaginatedList<GroupMember>` | 0 |  |
| [`GroupRoles`](/game-api/types/assembly-api-client/grouproles) | class |  | 2 |  |
| [`GroupsClient`](/game-api/types/assembly-api-client/groupsclient) | internal class | `HighLevelApiClientBase`, `IGroupsClient` | 7 |  |
| [`HighLevelApiClient`](/game-api/types/assembly-api-client/highlevelapiclient) | class | `IHighLevelApiClientManager`, `IHighLevelApiClient` | 35 |  |
| [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase) | abstract class |  | 0 |  |
| [`HighLevelApiClientFactory`](/game-api/types/assembly-api-client/highlevelapiclientfactory) | static class |  | 16 |  |
| [`IAccountClient`](/game-api/types/assembly-api-client/iaccountclient) | interface |  | 5 |  |
| [`IAchievementClient`](/game-api/types/assembly-api-client/iachievementclient) | interface |  | 4 |  |
| [`IAnalyticsClient`](/game-api/types/assembly-api-client/ianalyticsclient) | interface |  | 4 |  |
| [`IFutureUserActions`](/game-api/types/assembly-api-client/ifutureuseractions) | interface |  | 3 |  |
| [`IGroupsClient`](/game-api/types/assembly-api-client/igroupsclient) | interface |  | 6 |  |
| [`IHighLevelApiClient`](/game-api/types/assembly-api-client/ihighlevelapiclient) | interface |  | 35 | [Alta's web API](../console-and-utilities/alta-web-api.md#ihighlevelapiclient): One property per area, each its own client class: |
| [`IHighLevelApiClientManager`](/game-api/types/assembly-api-client/ihighlevelapiclientmanager) | internal interface |  | 2 |  |
| [`IInstancesClient`](/game-api/types/assembly-api-client/iinstancesclient) | interface |  | 1 |  |
| [`ILauncherApiClient`](/game-api/types/assembly-api-client/ilauncherapiclient) | interface |  | 2 |  |
| [`IMatchMakingClient`](/game-api/types/assembly-api-client/imatchmakingclient) | interface |  | 1 |  |
| [`IncomingGroupInvite`](/game-api/types/assembly-api-client/incominggroupinvite) | class | `AcceptReject` | 3 |  |
| [`IncomingGroupJoinRequest`](/game-api/types/assembly-api-client/incominggroupjoinrequest) | class | `AcceptReject` | 3 |  |
| [`InstancesClient`](/game-api/types/assembly-api-client/instancesclient) | internal class | `HighLevelApiClientBase`, `IInstancesClient` | 2 |  |
| [`InvitedGroups`](/game-api/types/assembly-api-client/invitedgroups) | class | `PaginatedList<IncomingGroupInvite>` | 0 |  |
| [`IOculusClient`](/game-api/types/assembly-api-client/ioculusclient) | interface |  | 4 |  |
| [`IOculusShop`](/game-api/types/assembly-api-client/ioculusshop) | interface |  | 1 |  |
| [`IPicoClient`](/game-api/types/assembly-api-client/ipicoclient) | interface |  | 4 |  |
| [`IPlayerReportsClient`](/game-api/types/assembly-api-client/iplayerreportsclient) | interface |  | 3 |  |
| [`IRecentPlayersClient`](/game-api/types/assembly-api-client/irecentplayersclient) | interface |  | 2 |  |
| [`ISecurityApiClient`](/game-api/types/assembly-api-client/isecurityapiclient) | interface |  | 6 |  |
| [`IServerAccess`](/game-api/types/assembly-api-client/iserveraccess) | interface |  | 8 |  |
| [`IServerApiClient`](/game-api/types/assembly-api-client/iserverapiclient) | interface |  | 22 |  |
| [`IServicesApiClient`](/game-api/types/assembly-api-client/iservicesapiclient) | interface |  | 7 |  |
| [`ISettingsClient`](/game-api/types/assembly-api-client/isettingsclient) | interface |  | 2 |  |
| [`IShopAccount`](/game-api/types/assembly-api-client/ishopaccount) | interface |  | 6 |  |
| [`IShopApiClient`](/game-api/types/assembly-api-client/ishopapiclient) | interface |  | 11 |  |
| [`IShopEditor`](/game-api/types/assembly-api-client/ishopeditor) | interface |  | 9 |  |
| [`IShopPurchase`](/game-api/types/assembly-api-client/ishoppurchase) | interface |  | 1 |  |
| [`ISocialClient`](/game-api/types/assembly-api-client/isocialclient) | interface |  | 9 |  |
| [`IUserApiClient`](/game-api/types/assembly-api-client/iuserapiclient) | interface |  | 21 |  |
| [`IVoiceApiClient`](/game-api/types/assembly-api-client/ivoiceapiclient) | interface |  | 2 |  |
| [`JoinableGroupInfo`](/game-api/types/assembly-api-client/joinablegroupinfo) | class |  | 2 |  |
| [`JoinedGroupManager`](/game-api/types/assembly-api-client/joinedgroupmanager) | class |  | 7 |  |
| [`JoinedGroups`](/game-api/types/assembly-api-client/joinedgroups) | class | `PaginatedList<JoinedGroupManager>` | 1 |  |
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
| [`OutgoingGroupInvite`](/game-api/types/assembly-api-client/outgoinggroupinvite) | class | `Outgoing` | 2 |  |
| [`OutgoingGroupJoinRequest`](/game-api/types/assembly-api-client/outgoinggroupjoinrequest) | class | `Outgoing` | 2 |  |
| [`OutgoingPrivateGroupJoinRequest`](/game-api/types/assembly-api-client/outgoingprivategroupjoinrequest) | class | `Outgoing` | 2 |  |
| [`PaginatedList<T>`](/game-api/types/assembly-api-client/paginatedlist-t) | abstract class |  | 2 |  |
| [`PaginatedListWithAdd<T>`](/game-api/types/assembly-api-client/paginatedlistwithadd-t) | abstract class | `PaginatedList<T>` | 1 |  |
| [`PersonalGroups`](/game-api/types/assembly-api-client/personalgroups) | class |  | 3 |  |
| [`PicoClient`](/game-api/types/assembly-api-client/picoclient) | internal class | `HighLevelApiClientBase`, `IPicoClient` | 5 |  |
| [`PlayerReportAdmin`](/game-api/types/assembly-api-client/playerreportadmin) | class |  | 3 |  |
| [`PlayerReportsClient`](/game-api/types/assembly-api-client/playerreportsclient) | class | `HighLevelApiClientBase`, `IPlayerReportsClient` | 3 |  |
| [`PlayerReportSummary`](/game-api/types/assembly-api-client/playerreportsummary) | class |  | 10 |  |
| [`RecentPlayersClient`](/game-api/types/assembly-api-client/recentplayersclient) | class | `HighLevelApiClientBase`, `IRecentPlayersClient` | 2 |  |
| [`RequestedGroups`](/game-api/types/assembly-api-client/requestedgroups) | class | `PaginatedList<OutgoingGroupJoinRequest>` | 0 |  |
| [`SecurityApiClient`](/game-api/types/assembly-api-client/securityapiclient) | class | `HighLevelApiClientBase`, `ISecurityApiClient` | 6 |  |
| [`ServerAccess`](/game-api/types/assembly-api-client/serveraccess) | class | `IServerAccess` | 8 |  |
| [`ServerApiClient`](/game-api/types/assembly-api-client/serverapiclient) | class | `HighLevelApiClientBase`, `IServerApiClient` | 22 |  |
| [`ServerReportCollection`](/game-api/types/assembly-api-client/serverreportcollection) | class |  | 1 |  |
| [`ServerStartArguments`](/game-api/types/assembly-api-client/serverstartarguments) | class |  | 9 |  |
| [`ServicesApiClient`](/game-api/types/assembly-api-client/servicesapiclient) | class | `HighLevelApiClientBase`, `IServicesApiClient` | 7 |  |
| [`SettingsClient`](/game-api/types/assembly-api-client/settingsclient) | class | `HighLevelApiClientBase`, `ISettingsClient` | 2 | [Alta's web API](../console-and-utilities/alta-web-api.md) |
| [`ShopAccount`](/game-api/types/assembly-api-client/shopaccount) | class | `IShopAccount` | 6 |  |
| [`ShopApiClient`](/game-api/types/assembly-api-client/shopapiclient) | class | `HighLevelApiClientBase`, `IShopApiClient` | 12 |  |
| [`ShopEditor`](/game-api/types/assembly-api-client/shopeditor) | class | `IShopEditor` | 9 |  |
| [`ShopPurchase`](/game-api/types/assembly-api-client/shoppurchase) | class | `IShopPurchase` | 1 |  |
| [`SocialClient`](/game-api/types/assembly-api-client/socialclient) | class | `HighLevelApiClientBase`, `ISocialClient` | 9 |  |
| [`Status`](/game-api/types/assembly-api-client/status) | class |  | 11 |  |
| [`Status.StatusPlatform`](/game-api/types/assembly-api-client/status-statusplatform) | enum |  | 4 |  |
| [`Status.StatusRegion`](/game-api/types/assembly-api-client/status-statusregion) | enum |  | 4 |  |
| [`Status.StatusSeverity`](/game-api/types/assembly-api-client/status-statusseverity) | enum |  | 4 |  |
| [`Status.StatusType`](/game-api/types/assembly-api-client/status-statustype) | enum |  | 2 |  |
| [`StatusAPI`](/game-api/types/assembly-api-client/statusapi) | class |  | 2 |  |
| [`UserApiClient`](/game-api/types/assembly-api-client/userapiclient) | class | `HighLevelApiClientBase`, `IUserApiClient` | 21 |  |
| [`VoiceApiClient`](/game-api/types/assembly-api-client/voiceapiclient) | class | `HighLevelApiClientBase`, `IVoiceApiClient` | 2 |  |

## Alta.Api.Client.HighLevel.Subscriptions

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`Test`](/game-api/types/assembly-api-client/test) | static class |  | 1 |  |
| [`WebSocketManager`](/game-api/types/assembly-api-client/websocketmanager) | class |  | 3 |  |

## Alta.Api.Client.LowLevel

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ApiBatchRequestService`](/game-api/types/assembly-api-client/apibatchrequestservice) | static class |  | 1 |  |
| [`BatchedRequestEntry`](/game-api/types/assembly-api-client/batchedrequestentry) | class |  | 2 |  |
| [`ConvertedPagedResult<TSource, T>`](/game-api/types/assembly-api-client/convertedpagedresult-tsource-t) | class | `IPagedResult<T>` | 5 |  |
| [`DoubleBufferedQueue<T>`](/game-api/types/assembly-api-client/doublebufferedqueue-t) | class |  | 3 |  |
| [`IPagedResult<T>`](/game-api/types/assembly-api-client/ipagedresult-t) | interface |  | 4 |  |
| [`LoginCredentialsChangedHandler`](/game-api/types/assembly-api-client/logincredentialschangedhandler) | delegate |  | 0 |  |
| [`LowLevelApiClient`](/game-api/types/assembly-api-client/lowlevelapiclient) | class |  | 164 |  |
| [`PagedConfig`](/game-api/types/assembly-api-client/pagedconfig) | class |  | 4 |  |
| [`PagedResult<T>`](/game-api/types/assembly-api-client/pagedresult-t) | class | `IPagedResult<T>` | 5 |  |

## Alta.Api.Client.Utility

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ClientTokenUtility`](/game-api/types/assembly-api-client/clienttokenutility) | static class |  | 1 |  |
| [`LoginUtilities`](/game-api/types/assembly-api-client/loginutilities) | static class |  | 1 |  |
