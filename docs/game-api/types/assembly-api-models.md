---
title: Alta.Api.DataTransferModels
description: "Types in the Alta.Api.DataTransferModels assembly: requests, responses and shared models of Alta's web API."
sidebar_position: 25
---

# Alta.Api.DataTransferModels

Types in the Alta.Api.DataTransferModels assembly: requests, responses and shared models of Alta's web API. 277 types, 4 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Api.DataTransferModels.Constants

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `CustomClaimTypes` | static class |  | 13 |  |

## Alta.Api.DataTransferModels.Converters

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ForceDefaultConverter` | class | `JsonConverter` | 5 |  |
| `IPAddressJsonConverter` | class | `JsonConverter` | 3 |  |
| `JwtSecurityTokenJsonConverter` | class | `JsonConverter` | 3 |  |
| `JWTUtility` | static class |  | 1 |  |
| `RegionEndpointJsonConverter` | class | `JsonConverter` | 3 |  |
| `SensitiveStringConverter` | class | `JsonConverter` | 3 |  |

## Alta.Api.DataTransferModels.Enums

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AssignableRoles` | enum |  | 1 |  |
| `GameServerStatus` | enum |  | 3 |  |
| `GameServerWebsocketResponseType` | enum |  | 3 |  |
| `ImageType` | enum |  | 5 |  |
| `PermissionType` | enum |  | 8 |  |
| `Region` | enum |  | 2 |  |
| `ServerType` | enum |  | 2 |  |
| `ShopTransactionStatus` | enum |  | 11 |  |

## Alta.Api.DataTransferModels.Enums.Alta.WebApi.Models

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `FormQueryType` | enum |  | 11 |  |

## Alta.Api.DataTransferModels.Errors

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ApiError` | class |  | 11 |  |
| `ErrorCode` | enum |  | 60 |  |
| `NotFoundApiError` | class | `ApiError` | 1 |  |
| `ValidationError` | class |  | 5 |  |

## Alta.Api.DataTransferModels.Exceptions

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ApiErrorException` | class | `Exception` | 4 |  |
| `AuthorizationException` | class | `Exception` | 3 |  |
| `ForbiddenException` | class | `Exception` | 3 |  |
| `HttpException` | class | `Exception` | 4 |  |
| `OfflineException` | class | `Exception` | 1 |  |

## Alta.Api.DataTransferModels.Extensions

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `EnumerableExtensions` | static class |  | 6 |  |
| `GuidExtensions` | static class |  | 3 |  |
| `HttpClientExtensions` | static class |  | 7 |  |
| `HttpClientExtensions.JsonContent` | class | `StringContent` | 1 |  |
| `HttpContentExtensions` | static class |  | 1 |  |
| `HttpResponseExtensionMethods` | static class |  | 4 |  |
| `QueryExtensions` | static class |  | 1 |  |
| `WebRequestExtensions` | static class |  | 3 |  |

## Alta.Api.DataTransferModels.Helpers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ShopHelper` | static class |  | 3 |  |

## Alta.Api.DataTransferModels.Interfaces

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `IIdentifiable` | interface |  | 1 |  |

## Alta.Api.DataTransferModels.Models.Agones

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AgonesAllocationFailureType` | enum |  | 5 |  |
| `AgonesGameServer` | class | `AgonesObject` | 3 |  |
| `AgonesObject` | abstract class |  | 6 |  |
| `AgonesServerList` | class |  | 1 |  |
| `AllocationResult` | class |  | 4 |  |
| `DictionaryExtension` | static class |  | 1 |  |
| `GameServerAllocation` | class | `AgonesObject` | 2 |  |
| `GameServerAllocationSpec` | class |  | 4 |  |
| `GameServerAllocationSpec.RequiredSpec` | class |  | 1 |  |
| `GameServerSpec` | class |  | 2 |  |
| `GameServerSpec.GameServerTemplate` | class |  | 1 |  |
| `GameServerSpec.GameServerTemplate.GameServerTemplateSpec` | class |  | 1 |  |
| `GameServerSpec.GameServerTemplate.GameServerTemplateSpec.ContainerConfig` | class |  | 2 |  |
| `Metadata` | class |  | 7 |  |
| `PortConfig` | class |  | 2 |  |
| `SpecPortConfig` | class |  | 4 |  |
| `Status` | class |  | 5 |  |
| `Status.GameServerState` | enum |  | 11 |  |

## Alta.Api.DataTransferModels.Models.Requests

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AccountLinkData` | class |  | 3 |  |
| `AccountRequestBase` | class |  | 3 |  |
| `AllocationRequest` | class |  | 1 |  |
| `BanRequest` | class |  | 7 |  |
| `BooleanRequest` | class |  | 1 |  |
| `BufferChangeRequest` | class |  | 3 |  |
| `ChangeBalanceRequest` | class |  | 1 |  |
| `ChangePasswordRequest` | class |  | 4 |  |
| `ChangeUsernameRequest` | class |  | 4 |  |
| `ConsoleCommandRequest` | class |  | 1 |  |
| `CreateGroupAndServerRequest` | class | `QuickCreateRequest` | 4 |  |
| `CreateGroupRequest` | class |  | 3 |  |
| `CreateGroupServerRequest` | class |  | 3 |  |
| `CreatePresetRequest` | class |  | 3 |  |
| `CreateReportRequest` | class |  | 3 |  |
| `DeleteItemRequest` | class |  | 1 |  |
| `EditGroupRequest` | class |  | 5 |  |
| `EditGroupRoleRequest` | class |  | 4 |  |
| `EmailAndUsernameRequest` | class |  | 2 |  |
| `EmailValidationRequest` | class |  | 1 |  |
| `FutureUserActionCreateRequest` | class |  | 4 |  |
| `FutureUserActionType` | enum |  | 2 |  |
| `GameServerCreateRequest` | class |  | 9 |  |
| `GameServerWebsocketRequest` | struct |  | 2 |  |
| `GenerateSignUpCodeRequest` | class |  | 5 |  |
| `GetShardsTokenRequest` | class |  | 2 |  |
| `GetSubscriptionTokenRequest` | class |  | 1 |  |
| `GiveRoleRequest` | class |  | 1 |  |
| `GroupPermissionsCheckRequest` | class |  | 1 |  |
| `GroupRoleRequest` | class |  | 2 |  |
| `IdentityTokenRequest` | class |  | 1 |  |
| `IdentityTokenValidationRequest` | class |  | 3 |  |
| `InstallationEventRequest` | class |  | 5 |  |
| `ItemDeleteRequest` | class | `ItemPurchaseRequest` | 1 |  |
| `ItemPurchaseRequest` | class | `PurchaseRequest` | 1 |  |
| `ItemSetRequest` | class |  | 3 |  |
| `JoinServerRequest` | class |  | 5 |  |
| `LaunchInstanceRequest` | class |  | 5 |  |
| `LaunchLocalServerRequest` | class |  | 8 |  |
| `LinkAccountRequest` | class | `AccountRequestBase` | 2 |  |
| `LoginRequest` | class | `LoginRequestBase` | 3 |  |
| `LoginRequestBase` | class | `RefreshRequest` | 3 |  |
| `LoginViaLinkedAccountRequest` | class | `AccountRequestBase` | 1 |  |
| `LoginWithEmailRequest` | class | `LoginRequestBase` | 3 |  |
| `LogoutRequest` | class |  | 3 |  |
| `MatchMakingRequirements` | class |  | 2 |  |
| `MigrateWebsocketRequest` | class |  | 1 |  |
| `ModifyReportRequest` | class |  | 1 |  |
| `OculusFriendsList` | class |  | 1 |  |
| `PurchaseCouponRequest` | class |  | 2 |  |
| `PurchaseItemTokenRequest` | class |  | 2 |  |
| `PurchaseRequest` | class |  | 1 |  |
| `QuickCreateRequest` | class |  | 1 |  |
| `RecentPlayerInteractionRequest` | class |  | 2 |  |
| `RedeemCouponRequest` | class |  | 1 |  |
| `RefreshRequest` | class |  | 2 |  |
| `RegisterRequest` | class | `EmailAndUsernameRequest`, `IRequest<UserInfo>`, `IBaseRequest` | 4 |  |
| `RequestPasswordResetRequest` | class |  | 3 |  |
| `RequestShopTokenRequest` | class |  | 0 |  |
| `ResetPasswordRequest` | class |  | 2 |  |
| `SearchByUsernameRequest` | class |  | 1 |  |
| `SendMessageRequest` | class |  | 2 |  |
| `ServerSaveFileRequest` | class |  | 1 |  |
| `ServerStatusRequest` | class |  | 1 |  |
| `SetGroupPermissionsRequest` | class |  | 1 |  |
| `SetGroupPermissionsRequest.OldGroupPermission` | enum |  | 3 |  |
| `SetServersOnlinePlayersRequest` | class |  | 2 |  |
| `ShopItemsRequest` | class |  | 1 |  |
| `StatProgress` | class |  | 3 |  |
| `StopInstanceRequest` | class |  | 1 |  |
| `UnlinkAccountRequest` | class |  | 1 |  |
| `UpdateAchievementRequest` | class |  | 2 |  |
| `UpdateActionStatRequest` | class |  | 3 |  |
| `UpdateUserInfoRequest` | class | `EmailAndUsernameRequest` | 0 |  |
| `UsernameValidationRequest` | class |  | 1 |  |
| `UserType` | enum |  | 3 |  |
| `ValidateItemOwnershipRequest` | class |  | 3 |  |
| `ValidateUsersJoinRequest` | class |  | 4 |  |
| `VerificationEmailRequest` | class |  | 1 |  |
| `VerifyUserRequest` | class |  | 3 |  |
| `VirtualCurrencyPurchaseRequest` | class | `PurchaseRequest` | 1 |  |
| `VoiceChatTokenRequest` | class |  | 2 |  |
| `VoiceChatTokenRequestType` | enum |  | 2 |  |
| `WebhookPayload` | class |  | 1 |  |
| `WebsocketMessageBody` | class |  | 5 |  |
| `WebsocketResponseBody` | class |  | 5 |  |

## Alta.Api.DataTransferModels.Models.Requests.DTOs.Requests

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `FriendRequestResponse` | class |  | 1 |  |

## Alta.Api.DataTransferModels.Models.Responses

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AltaApiResponse<T>` | class |  | 3 |  |
| `BanInfo` | class |  | 10 |  |
| `BooleanResponse` | class |  | 2 |  |
| `ClaimOculusItemsResponse` | class |  | 2 |  |
| `Comment` | class |  | 7 |  |
| `Condition` | class |  | 3 |  |
| `ConnectionInfo` | class |  | 9 | [Server settings](../networking/server-settings.md) |
| `CouponRedeemedResponse` | class |  | 3 |  |
| `CreateCheckResponse` | class |  | 3 |  |
| `DiscordSupporterRoleVerificationResults` | class |  | 3 |  |
| `FleetInfo` | class |  | 4 |  |
| `Form` | class |  | 10 |  |
| `FormResponse` | class | `FormResponseSummary` | 4 |  |
| `FormResponseSummary` | class |  | 6 |  |
| `FriendRequestedType` | enum |  | 4 |  |
| `FriendshipInfo` | class | `UserInfo` | 3 |  |
| `FriendshipType` | enum |  | 4 |  |
| `GameHomeConfiguration` | class |  | 1 |  |
| `GameServerInfo` | class | `GameServerInfoMinimal` | 30 | [Server settings](../networking/server-settings.md) |
| `GameServerInfoMinimal` | class | `INamedEntity` | 2 |  |
| `GameServerWebsocketResponse` | class |  | 6 |  |
| `GiftResult` | class |  | 3 |  |
| `GiftResultType` | enum |  | 3 |  |
| `GiftRewardComment` | class |  | 1 |  |
| `GroupInfo` | class |  | 8 |  |
| `GroupInfoDetailed` | class | `GroupInfo` | 3 |  |
| `GroupMemberInfo` | class |  | 10 |  |
| `GroupMemberType` | enum |  | 6 |  |
| `GroupPermissions` | enum |  | 12 |  |
| `GroupRoleIdentifier` | enum |  | 4 |  |
| `GroupRoleInfo` | class |  | 9 |  |
| `GroupServerInfo` | class |  | 4 |  |
| `GroupType` | enum |  | 3 |  |
| `GroupTypeExtensions` | static class |  | 1 |  |
| `HomeElement` | class |  | 8 |  |
| `HomeElementPage` | class |  | 3 |  |
| `IConvertableModel<TModel>` | interface |  | 1 |  |
| `INamedEntity` | interface |  | 2 |  |
| `InvitedGroupInfo` | class | `GroupInfoDetailed` | 1 |  |
| `JoinedGroupInfo` | class |  | 2 |  |
| `LauncherGameInfoFull` | class | `LauncherGameInfoShort` | 9 |  |
| `LauncherGameInfoShort` | class |  | 6 |  |
| `LinkedAccountInfo` | class |  | 4 |  |
| `MembershipStatusResponse` | class |  | 2 |  |
| `MigrationDetailsResponse` | class |  | 3 |  |
| `NewComment` | class |  | 2 |  |
| `OculusFriendInfo` | class | `FriendshipInfo` | 1 |  |
| `Option` | class |  | 4 |  |
| `Page` | class |  | 3 |  |
| `PageResponse` | class |  | 2 |  |
| `PatchNotes` | class |  | 2 |  |
| `PersonalUserInfoResponse` | class | `PublicUserInfoResponse` | 3 |  |
| `PlayerAchievementResponse` | class |  | 1 |  |
| `PlayerActionStatResponse` | class |  | 1 |  |
| `PlayerReportInfo` | class |  | 9 |  |
| `PublicUserInfoResponse` | class | `UserInfo` | 2 |  |
| `PurchaseResult` | class |  | 4 |  |
| `PurchaseResultType` | enum |  | 8 |  |
| `Query` | class |  | 9 |  |
| `QueryMeta` | class |  | 4 |  |
| `QueryResponse` | class |  | 2 |  |
| `QuickCreateResponse` | class |  | 2 |  |
| `RecentPlayerInteractionInfo` | class |  | 4 |  |
| `RecentPlayerInteractionType` | enum |  | 3 |  |
| `RegionInfo` | class |  | 4 |  |
| `ReportStatus` | enum |  | 3 |  |
| `ReportType` | enum |  | 3 |  |
| `ResolveComment` | class |  | 2 |  |
| `ServerJoinFailResult` | enum |  | 14 |  |
| `ServerJoinResponse` | class |  | 4 |  |
| `ServerJoinResult` | class |  | 9 |  |
| `ServerJoinType` | enum |  | 7 |  |
| `ServerOwnerType` | enum |  | 4 |  |
| `ServerSaveFileResponse` | class |  | 1 |  |
| `Settings` | class |  | 2 | [Settings and files](../console-and-utilities/settings-and-files.md): Where the game keeps its settings and files, and the helpers it uses to read and write them. |
| `ShopAccountInfo` | class |  | 4 |  |
| `ShopAccountInfo.SubscriptionStatus` | class |  | 4 |  |
| `ShopItemConfiguration` | class |  | 6 |  |
| `ShopPageConfiguration` | class |  | 5 |  |
| `ShopPageConfigurationWithBanner` | class | `ShopPageConfiguration` | 2 |  |
| `ShopTokenResponse` | class |  | 4 |  |
| `ShopTransactionStatusResponse` | class |  | 1 |  |
| `ShutdownReason` | class |  | 6 |  |
| `SimpleTokenResultResponse` | class |  | 2 |  |
| `SingleTokenResponse` | class |  | 1 |  |
| `SocialMediaInfo` | class |  | 2 |  |
| `StartServerSessionResponse` | class |  | 1 |  |
| `StoreRotationGraphicConfig` | class |  | 3 |  |
| `SubscriptionRefreshResult` | class |  | 3 |  |
| `SubscriptionRefreshResult.Reward` | class |  | 2 |  |
| `TokenResultResponse` | class |  | 4 |  |
| `Transitions` | class |  | 2 |  |
| `UserInfo` | class | `INamedEntity` | 7 | [Player](../networking/player.md#userinfo): Two are equal when their ids are equal, whatever the names. |
| `UserInfoWithPermissions` | class | `UserInfo` | 5 |  |
| `UserPresetDataInfo` | class |  | 5 |  |
| `UserStatistics` | class |  | 2 |  |
| `ValidateItemOwnershipResponse` | class |  | 1 |  |
| `ValidationResultModel` | class |  | 4 |  |
| `VersionMarker` | class |  | 2 |  |

## Alta.Api.DataTransferModels.Models.Responses.DTOs.Responses

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `FriendRequestResult` | class |  | 3 |  |
| `InstallationEventInfo` | class |  | 8 |  |

## Alta.Api.DataTransferModels.Models.Shared

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AnalyticsEventData` | class |  | 9 |  |
| `BanMethod` | enum |  | 3 |  |
| `BanType` | enum |  | 3 |  |
| `ChargeInfo` | class |  | 2 |  |
| `ClientTokenConfig` | class |  | 3 |  |
| `Duration` | class |  | 3 |  |
| `DurationType` | enum |  | 3 |  |
| `GameVersion` | class | `IEquatable<GameVersion>` | 15 |  |
| `InstanceInfo` | class |  | 6 |  |
| `ItemCategory` | enum |  | 25 |  |
| `ItemSetType` | enum |  | 2 |  |
| `OwnedShopItem` | class | `IIdentifiable` | 5 |  |
| `PriceType` | enum |  | 2 |  |
| `Region` | class |  | 12 |  |
| `ShopItem` | class | `IIdentifiable` | 9 |  |
| `ShopItemDetailed` | class | `ShopItem` | 4 |  |
| `ShopItemDetailedForUser` | class | `ShopItemDetailed` | 2 |  |
| `ShopItemIdentifier` | class |  | 3 |  |
| `ShopItemImage` | class |  | 6 |  |
| `ShopItemModificationRequest` | class | `IIdentifiable` | 14 |  |
| `ShopItemSet` | class | `IIdentifiable` | 4 |  |
| `ShopItemSetModificationRequest` | class | `ShopItemModificationRequest` | 1 |  |
| `ShopPrice` | class |  | 3 |  |
| `SubscriptionPlanInfo` | class |  | 7 |  |
| `TownshipItemCategory` | class | `IIdentifiable` | 6 |  |
| `TownshipItemCategoryModificationRequest` | class | `TownshipItemCategory` | 1 |  |
| `UserRoles` | class |  | 3 |  |
| `UserSubscription` | class |  | 10 |  |
| `UserSubscriptionInfoStatus` | enum |  | 3 |  |

## Alta.Api.DataTransferModels.Settings

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `GameServerSettings` | static class |  | 8 |  |
| `NamingSettings` | static class |  | 7 |  |

## Alta.Api.DataTransferModels.Utility

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `Device` | static class |  | 2 |  |
| `JsonUtility` | static class |  | 3 |  |
| `JwtTokenHandler` | static class |  | 1 |  |
| `RetryHandler` | class | `HttpClientHandler` | 2 |  |
| `UserRolesUtility` | static class |  | 2 |  |
