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
| `LoginCredentials` | class |  | 4 |  |

## Alta.Api.Client.HighLevel

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AcceptReject` | abstract class |  | 2 |  |
| `AccountClient` | internal class | `HighLevelApiClientBase`, `IAccountClient` | 6 |  |
| `AchievementApiClient` | class | `HighLevelApiClientBase`, `IAchievementClient` | 5 |  |
| `AnalyticsClient` | class | `HighLevelApiClientBase`, `IAnalyticsClient` | 4 |  |
| `FutureUserActionsClient` | class | `HighLevelApiClientBase`, `IFutureUserActions` | 3 |  |
| `GroupBan` | class | `Outgoing` | 2 |  |
| `GroupBans` | class | `PaginatedListWithAdd<GroupBan>` | 2 |  |
| `GroupCreator` | class |  | 3 |  |
| `GroupDiscovery` | class |  | 3 |  |
| `GroupGet` | class | `PaginatedList<JoinableGroupInfo>` | 0 |  |
| `GroupInfoManager` | class |  | 3 |  |
| `GroupInfoUpdate` | class |  | 2 |  |
| `GroupInvites` | class | `PaginatedListWithAdd<OutgoingGroupInvite>` | 2 |  |
| `GroupJoinRequests` | class | `PaginatedList<IncomingGroupJoinRequest>` | 0 |  |
| `GroupMember` | class |  | 4 |  |
| `GroupMembers` | class | `PaginatedList<GroupMember>` | 0 |  |
| `GroupRoles` | class |  | 2 |  |
| `GroupsClient` | internal class | `HighLevelApiClientBase`, `IGroupsClient` | 7 |  |
| `HighLevelApiClient` | class | `IHighLevelApiClientManager`, `IHighLevelApiClient` | 35 |  |
| `HighLevelApiClientBase` | abstract class |  | 0 |  |
| `HighLevelApiClientFactory` | static class |  | 16 |  |
| `IAccountClient` | interface |  | 5 |  |
| `IAchievementClient` | interface |  | 4 |  |
| `IAnalyticsClient` | interface |  | 4 |  |
| `IFutureUserActions` | interface |  | 3 |  |
| `IGroupsClient` | interface |  | 6 |  |
| `IHighLevelApiClient` | interface |  | 35 | [Alta's web API](../console-and-utilities/alta-web-api.md#ihighlevelapiclient): One property per area, each its own client class: |
| `IHighLevelApiClientManager` | internal interface |  | 2 |  |
| `IInstancesClient` | interface |  | 1 |  |
| `ILauncherApiClient` | interface |  | 2 |  |
| `IMatchMakingClient` | interface |  | 1 |  |
| `IncomingGroupInvite` | class | `AcceptReject` | 3 |  |
| `IncomingGroupJoinRequest` | class | `AcceptReject` | 3 |  |
| `InstancesClient` | internal class | `HighLevelApiClientBase`, `IInstancesClient` | 2 |  |
| `InvitedGroups` | class | `PaginatedList<IncomingGroupInvite>` | 0 |  |
| `IOculusClient` | interface |  | 4 |  |
| `IOculusShop` | interface |  | 1 |  |
| `IPicoClient` | interface |  | 4 |  |
| `IPlayerReportsClient` | interface |  | 3 |  |
| `IRecentPlayersClient` | interface |  | 2 |  |
| `ISecurityApiClient` | interface |  | 6 |  |
| `IServerAccess` | interface |  | 8 |  |
| `IServerApiClient` | interface |  | 22 |  |
| `IServicesApiClient` | interface |  | 7 |  |
| `ISettingsClient` | interface |  | 2 |  |
| `IShopAccount` | interface |  | 6 |  |
| `IShopApiClient` | interface |  | 11 |  |
| `IShopEditor` | interface |  | 9 |  |
| `IShopPurchase` | interface |  | 1 |  |
| `ISocialClient` | interface |  | 9 |  |
| `IUserApiClient` | interface |  | 21 |  |
| `IVoiceApiClient` | interface |  | 2 |  |
| `JoinableGroupInfo` | class |  | 2 |  |
| `JoinedGroupManager` | class |  | 7 |  |
| `JoinedGroups` | class | `PaginatedList<JoinedGroupManager>` | 1 |  |
| `LauncherApiClient` | class | `HighLevelApiClientBase`, `ILauncherApiClient` | 2 |  |
| `LocalServerAccess` | class | `IServerAccess` | 9 |  |
| `MatchMakingClient` | internal class | `HighLevelApiClientBase`, `IMatchMakingClient` | 2 |  |
| `OculusClient` | class | `HighLevelApiClientBase`, `IOculusClient` | 4 |  |
| `OculusShop` | class | `IOculusShop` | 1 |  |
| `OfflineAchievementApiClient` | class | `IAchievementClient` | 5 |  |
| `OfflineGroupsClient` | internal class | `IGroupsClient` | 6 |  |
| `OfflineHighLevelApiClient` | class | `IHighLevelApiClient` | 36 |  |
| `OfflineLauncherApiClient` | class | `ILauncherApiClient` | 2 |  |
| `OfflineSecurityApiClient` | class | `ISecurityApiClient` | 7 |  |
| `OfflineServerApiClient` | class | `IServerApiClient` | 22 |  |
| `OfflineServicesApiClient` | class | `IServicesApiClient` | 8 |  |
| `OfflineShopAccount` | class | `IShopAccount` | 6 |  |
| `OfflineShopApiClient` | class | `IShopApiClient` | 12 |  |
| `OfflineShopEditor` | class | `IShopEditor` | 9 |  |
| `OfflineShopPurchase` | class | `IShopPurchase` | 2 |  |
| `OfflineSocialClient` | class | `ISocialClient` | 9 |  |
| `OfflineUserApiClient` | class | `IUserApiClient` | 21 |  |
| `OfflineVoiceClient` | class | `IVoiceApiClient` | 2 |  |
| `Outgoing` | abstract class |  | 1 |  |
| `OutgoingGroupInvite` | class | `Outgoing` | 2 |  |
| `OutgoingGroupJoinRequest` | class | `Outgoing` | 2 |  |
| `OutgoingPrivateGroupJoinRequest` | class | `Outgoing` | 2 |  |
| `PaginatedList<T>` | abstract class |  | 2 |  |
| `PaginatedListWithAdd<T>` | abstract class | `PaginatedList<T>` | 1 |  |
| `PersonalGroups` | class |  | 3 |  |
| `PicoClient` | internal class | `HighLevelApiClientBase`, `IPicoClient` | 5 |  |
| `PlayerReportAdmin` | class |  | 3 |  |
| `PlayerReportsClient` | class | `HighLevelApiClientBase`, `IPlayerReportsClient` | 3 |  |
| `PlayerReportSummary` | class |  | 10 |  |
| `RecentPlayersClient` | class | `HighLevelApiClientBase`, `IRecentPlayersClient` | 2 |  |
| `RequestedGroups` | class | `PaginatedList<OutgoingGroupJoinRequest>` | 0 |  |
| `SecurityApiClient` | class | `HighLevelApiClientBase`, `ISecurityApiClient` | 6 |  |
| `ServerAccess` | class | `IServerAccess` | 8 |  |
| `ServerApiClient` | class | `HighLevelApiClientBase`, `IServerApiClient` | 22 |  |
| `ServerReportCollection` | class |  | 1 |  |
| `ServerStartArguments` | class |  | 9 |  |
| `ServicesApiClient` | class | `HighLevelApiClientBase`, `IServicesApiClient` | 7 |  |
| `SettingsClient` | class | `HighLevelApiClientBase`, `ISettingsClient` | 2 | [Alta's web API](../console-and-utilities/alta-web-api.md) |
| `ShopAccount` | class | `IShopAccount` | 6 |  |
| `ShopApiClient` | class | `HighLevelApiClientBase`, `IShopApiClient` | 12 |  |
| `ShopEditor` | class | `IShopEditor` | 9 |  |
| `ShopPurchase` | class | `IShopPurchase` | 1 |  |
| `SocialClient` | class | `HighLevelApiClientBase`, `ISocialClient` | 9 |  |
| `Status` | class |  | 11 |  |
| `Status.StatusPlatform` | enum |  | 4 |  |
| `Status.StatusRegion` | enum |  | 4 |  |
| `Status.StatusSeverity` | enum |  | 4 |  |
| `Status.StatusType` | enum |  | 2 |  |
| `StatusAPI` | class |  | 2 |  |
| `UserApiClient` | class | `HighLevelApiClientBase`, `IUserApiClient` | 21 |  |
| `VoiceApiClient` | class | `HighLevelApiClientBase`, `IVoiceApiClient` | 2 |  |

## Alta.Api.Client.HighLevel.Subscriptions

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `Test` | static class |  | 1 |  |
| `WebSocketManager` | class |  | 3 |  |

## Alta.Api.Client.LowLevel

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ApiBatchRequestService` | static class |  | 1 |  |
| `BatchedRequestEntry` | class |  | 2 |  |
| `ConvertedPagedResult<TSource, T>` | class | `IPagedResult<T>` | 5 |  |
| `DoubleBufferedQueue<T>` | class |  | 3 |  |
| `IPagedResult<T>` | interface |  | 4 |  |
| `LoginCredentialsChangedHandler` | delegate |  | 0 |  |
| `LowLevelApiClient` | class |  | 164 |  |
| `PagedConfig` | class |  | 4 |  |
| `PagedResult<T>` | class | `IPagedResult<T>` | 5 |  |

## Alta.Api.Client.Utility

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ClientTokenUtility` | static class |  | 1 |  |
| `LoginUtilities` | static class |  | 1 |  |
