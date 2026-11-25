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
| [`CustomClaimTypes`](/game-api/types/assembly-api-models/customclaimtypes) | static class |  | 13 |  |

## Alta.Api.DataTransferModels.Converters

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ForceDefaultConverter`](/game-api/types/assembly-api-models/forcedefaultconverter) | class | `JsonConverter` | 5 |  |
| [`IPAddressJsonConverter`](/game-api/types/assembly-api-models/ipaddressjsonconverter) | class | `JsonConverter` | 3 |  |
| [`JwtSecurityTokenJsonConverter`](/game-api/types/assembly-api-models/jwtsecuritytokenjsonconverter) | class | `JsonConverter` | 3 |  |
| [`JWTUtility`](/game-api/types/assembly-api-models/jwtutility) | static class |  | 1 |  |
| [`RegionEndpointJsonConverter`](/game-api/types/assembly-api-models/regionendpointjsonconverter) | class | `JsonConverter` | 3 |  |
| [`SensitiveStringConverter`](/game-api/types/assembly-api-models/sensitivestringconverter) | class | `JsonConverter` | 3 |  |

## Alta.Api.DataTransferModels.Enums

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AssignableRoles`](/game-api/types/assembly-api-models/assignableroles) | enum |  | 1 |  |
| [`GameServerStatus`](/game-api/types/assembly-api-models/gameserverstatus) | enum |  | 3 |  |
| [`GameServerWebsocketResponseType`](/game-api/types/assembly-api-models/gameserverwebsocketresponsetype) | enum |  | 3 |  |
| [`ImageType`](/game-api/types/assembly-api-models/imagetype) | enum |  | 5 |  |
| [`PermissionType`](/game-api/types/assembly-api-models/permissiontype) | enum |  | 8 |  |
| [`Region`](/game-api/types/assembly-api-models/region) | enum |  | 2 |  |
| [`ServerType`](/game-api/types/assembly-api-models/servertype) | enum |  | 2 |  |
| [`ShopTransactionStatus`](/game-api/types/assembly-api-models/shoptransactionstatus) | enum |  | 11 |  |

## Alta.Api.DataTransferModels.Enums.Alta.WebApi.Models

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`FormQueryType`](/game-api/types/assembly-api-models/formquerytype) | enum |  | 11 |  |

## Alta.Api.DataTransferModels.Errors

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ApiError`](/game-api/types/assembly-api-models/apierror) | class |  | 11 |  |
| [`ErrorCode`](/game-api/types/assembly-api-models/errorcode) | enum |  | 60 |  |
| [`NotFoundApiError`](/game-api/types/assembly-api-models/notfoundapierror) | class | `ApiError` | 1 |  |
| [`ValidationError`](/game-api/types/assembly-api-models/validationerror) | class |  | 5 |  |

## Alta.Api.DataTransferModels.Exceptions

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ApiErrorException`](/game-api/types/assembly-api-models/apierrorexception) | class | `Exception` | 4 |  |
| [`AuthorizationException`](/game-api/types/assembly-api-models/authorizationexception) | class | `Exception` | 3 |  |
| [`ForbiddenException`](/game-api/types/assembly-api-models/forbiddenexception) | class | `Exception` | 3 |  |
| [`HttpException`](/game-api/types/assembly-api-models/httpexception) | class | `Exception` | 4 |  |
| [`OfflineException`](/game-api/types/assembly-api-models/offlineexception) | class | `Exception` | 1 |  |

## Alta.Api.DataTransferModels.Extensions

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`EnumerableExtensions`](/game-api/types/assembly-api-models/enumerableextensions) | static class |  | 6 |  |
| [`GuidExtensions`](/game-api/types/assembly-api-models/guidextensions) | static class |  | 3 |  |
| [`HttpClientExtensions`](/game-api/types/assembly-api-models/httpclientextensions) | static class |  | 7 |  |
| [`HttpClientExtensions.JsonContent`](/game-api/types/assembly-api-models/httpclientextensions-jsoncontent) | class | `StringContent` | 1 |  |
| [`HttpContentExtensions`](/game-api/types/assembly-api-models/httpcontentextensions) | static class |  | 1 |  |
| [`HttpResponseExtensionMethods`](/game-api/types/assembly-api-models/httpresponseextensionmethods) | static class |  | 4 |  |
| [`QueryExtensions`](/game-api/types/assembly-api-models/queryextensions) | static class |  | 1 |  |
| [`WebRequestExtensions`](/game-api/types/assembly-api-models/webrequestextensions) | static class |  | 3 |  |

## Alta.Api.DataTransferModels.Helpers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ShopHelper`](/game-api/types/assembly-api-models/shophelper) | static class |  | 3 |  |

## Alta.Api.DataTransferModels.Interfaces

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`IIdentifiable`](/game-api/types/assembly-api-models/iidentifiable) | interface |  | 1 |  |

## Alta.Api.DataTransferModels.Models.Agones

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AgonesAllocationFailureType`](/game-api/types/assembly-api-models/agonesallocationfailuretype) | enum |  | 5 |  |
| [`AgonesGameServer`](/game-api/types/assembly-api-models/agonesgameserver) | class | `AgonesObject` | 3 |  |
| [`AgonesObject`](/game-api/types/assembly-api-models/agonesobject) | abstract class |  | 6 |  |
| [`AgonesServerList`](/game-api/types/assembly-api-models/agonesserverlist) | class |  | 1 |  |
| [`AllocationResult`](/game-api/types/assembly-api-models/allocationresult) | class |  | 4 |  |
| [`DictionaryExtension`](/game-api/types/assembly-api-models/dictionaryextension) | static class |  | 1 |  |
| [`GameServerAllocation`](/game-api/types/assembly-api-models/gameserverallocation) | class | `AgonesObject` | 2 |  |
| [`GameServerAllocationSpec`](/game-api/types/assembly-api-models/gameserverallocationspec) | class |  | 4 |  |
| [`GameServerAllocationSpec.RequiredSpec`](/game-api/types/assembly-api-models/gameserverallocationspec-requiredspec) | class |  | 1 |  |
| [`GameServerSpec`](/game-api/types/assembly-api-models/gameserverspec) | class |  | 2 |  |
| [`GameServerSpec.GameServerTemplate`](/game-api/types/assembly-api-models/gameserverspec-gameservertemplate) | class |  | 1 |  |
| [`GameServerSpec.GameServerTemplate.GameServerTemplateSpec`](/game-api/types/assembly-api-models/gameserverspec-gameservertemplate-gameservertemplatespec) | class |  | 1 |  |
| [`GameServerSpec.GameServerTemplate.GameServerTemplateSpec.ContainerConfig`](/game-api/types/assembly-api-models/gameserverspec-gameservertemplate-gameservertemplatespec-containerconfig) | class |  | 2 |  |
| [`Metadata`](/game-api/types/assembly-api-models/metadata) | class |  | 7 |  |
| [`PortConfig`](/game-api/types/assembly-api-models/portconfig) | class |  | 2 |  |
| [`SpecPortConfig`](/game-api/types/assembly-api-models/specportconfig) | class |  | 4 |  |
| [`Status`](/game-api/types/assembly-api-models/status) | class |  | 5 |  |
| [`Status.GameServerState`](/game-api/types/assembly-api-models/status-gameserverstate) | enum |  | 11 |  |

## Alta.Api.DataTransferModels.Models.Requests

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AccountLinkData`](/game-api/types/assembly-api-models/accountlinkdata) | class |  | 3 |  |
| [`AccountRequestBase`](/game-api/types/assembly-api-models/accountrequestbase) | class |  | 3 |  |
| [`AllocationRequest`](/game-api/types/assembly-api-models/allocationrequest) | class |  | 1 |  |
| [`BanRequest`](/game-api/types/assembly-api-models/banrequest) | class |  | 7 |  |
| [`BooleanRequest`](/game-api/types/assembly-api-models/booleanrequest) | class |  | 1 |  |
| [`BufferChangeRequest`](/game-api/types/assembly-api-models/bufferchangerequest) | class |  | 3 |  |
| [`ChangeBalanceRequest`](/game-api/types/assembly-api-models/changebalancerequest) | class |  | 1 |  |
| [`ChangePasswordRequest`](/game-api/types/assembly-api-models/changepasswordrequest) | class |  | 4 |  |
| [`ChangeUsernameRequest`](/game-api/types/assembly-api-models/changeusernamerequest) | class |  | 4 |  |
| [`ConsoleCommandRequest`](/game-api/types/assembly-api-models/consolecommandrequest) | class |  | 1 |  |
| [`CreateGroupAndServerRequest`](/game-api/types/assembly-api-models/creategroupandserverrequest) | class | `QuickCreateRequest` | 4 |  |
| [`CreateGroupRequest`](/game-api/types/assembly-api-models/creategrouprequest) | class |  | 3 |  |
| [`CreateGroupServerRequest`](/game-api/types/assembly-api-models/creategroupserverrequest) | class |  | 3 |  |
| [`CreatePresetRequest`](/game-api/types/assembly-api-models/createpresetrequest) | class |  | 3 |  |
| [`CreateReportRequest`](/game-api/types/assembly-api-models/createreportrequest) | class |  | 3 |  |
| [`DeleteItemRequest`](/game-api/types/assembly-api-models/deleteitemrequest) | class |  | 1 |  |
| [`EditGroupRequest`](/game-api/types/assembly-api-models/editgrouprequest) | class |  | 5 |  |
| [`EditGroupRoleRequest`](/game-api/types/assembly-api-models/editgrouprolerequest) | class |  | 4 |  |
| [`EmailAndUsernameRequest`](/game-api/types/assembly-api-models/emailandusernamerequest) | class |  | 2 |  |
| [`EmailValidationRequest`](/game-api/types/assembly-api-models/emailvalidationrequest) | class |  | 1 |  |
| [`FutureUserActionCreateRequest`](/game-api/types/assembly-api-models/futureuseractioncreaterequest) | class |  | 4 |  |
| [`FutureUserActionType`](/game-api/types/assembly-api-models/futureuseractiontype) | enum |  | 2 |  |
| [`GameServerCreateRequest`](/game-api/types/assembly-api-models/gameservercreaterequest) | class |  | 9 |  |
| [`GameServerWebsocketRequest`](/game-api/types/assembly-api-models/gameserverwebsocketrequest) | struct |  | 2 |  |
| [`GenerateSignUpCodeRequest`](/game-api/types/assembly-api-models/generatesignupcoderequest) | class |  | 5 |  |
| [`GetShardsTokenRequest`](/game-api/types/assembly-api-models/getshardstokenrequest) | class |  | 2 |  |
| [`GetSubscriptionTokenRequest`](/game-api/types/assembly-api-models/getsubscriptiontokenrequest) | class |  | 1 |  |
| [`GiveRoleRequest`](/game-api/types/assembly-api-models/giverolerequest) | class |  | 1 |  |
| [`GroupPermissionsCheckRequest`](/game-api/types/assembly-api-models/grouppermissionscheckrequest) | class |  | 1 |  |
| [`GroupRoleRequest`](/game-api/types/assembly-api-models/grouprolerequest) | class |  | 2 |  |
| [`IdentityTokenRequest`](/game-api/types/assembly-api-models/identitytokenrequest) | class |  | 1 |  |
| [`IdentityTokenValidationRequest`](/game-api/types/assembly-api-models/identitytokenvalidationrequest) | class |  | 3 |  |
| [`InstallationEventRequest`](/game-api/types/assembly-api-models/installationeventrequest) | class |  | 5 |  |
| [`ItemDeleteRequest`](/game-api/types/assembly-api-models/itemdeleterequest) | class | `ItemPurchaseRequest` | 1 |  |
| [`ItemPurchaseRequest`](/game-api/types/assembly-api-models/itempurchaserequest) | class | `PurchaseRequest` | 1 |  |
| [`ItemSetRequest`](/game-api/types/assembly-api-models/itemsetrequest) | class |  | 3 |  |
| [`JoinServerRequest`](/game-api/types/assembly-api-models/joinserverrequest) | class |  | 5 |  |
| [`LaunchInstanceRequest`](/game-api/types/assembly-api-models/launchinstancerequest) | class |  | 5 |  |
| [`LaunchLocalServerRequest`](/game-api/types/assembly-api-models/launchlocalserverrequest) | class |  | 8 |  |
| [`LinkAccountRequest`](/game-api/types/assembly-api-models/linkaccountrequest) | class | `AccountRequestBase` | 2 |  |
| [`LoginRequest`](/game-api/types/assembly-api-models/loginrequest) | class | `LoginRequestBase` | 3 |  |
| [`LoginRequestBase`](/game-api/types/assembly-api-models/loginrequestbase) | class | `RefreshRequest` | 3 |  |
| [`LoginViaLinkedAccountRequest`](/game-api/types/assembly-api-models/loginvialinkedaccountrequest) | class | `AccountRequestBase` | 1 |  |
| [`LoginWithEmailRequest`](/game-api/types/assembly-api-models/loginwithemailrequest) | class | `LoginRequestBase` | 3 |  |
| [`LogoutRequest`](/game-api/types/assembly-api-models/logoutrequest) | class |  | 3 |  |
| [`MatchMakingRequirements`](/game-api/types/assembly-api-models/matchmakingrequirements) | class |  | 2 |  |
| [`MigrateWebsocketRequest`](/game-api/types/assembly-api-models/migratewebsocketrequest) | class |  | 1 |  |
| [`ModifyReportRequest`](/game-api/types/assembly-api-models/modifyreportrequest) | class |  | 1 |  |
| [`OculusFriendsList`](/game-api/types/assembly-api-models/oculusfriendslist) | class |  | 1 |  |
| [`PurchaseCouponRequest`](/game-api/types/assembly-api-models/purchasecouponrequest) | class |  | 2 |  |
| [`PurchaseItemTokenRequest`](/game-api/types/assembly-api-models/purchaseitemtokenrequest) | class |  | 2 |  |
| [`PurchaseRequest`](/game-api/types/assembly-api-models/purchaserequest) | class |  | 1 |  |
| [`QuickCreateRequest`](/game-api/types/assembly-api-models/quickcreaterequest) | class |  | 1 |  |
| [`RecentPlayerInteractionRequest`](/game-api/types/assembly-api-models/recentplayerinteractionrequest) | class |  | 2 |  |
| [`RedeemCouponRequest`](/game-api/types/assembly-api-models/redeemcouponrequest) | class |  | 1 |  |
| [`RefreshRequest`](/game-api/types/assembly-api-models/refreshrequest) | class |  | 2 |  |
| [`RegisterRequest`](/game-api/types/assembly-api-models/registerrequest) | class | `EmailAndUsernameRequest`, `IRequest<UserInfo>`, `IBaseRequest` | 4 |  |
| [`RequestPasswordResetRequest`](/game-api/types/assembly-api-models/requestpasswordresetrequest) | class |  | 3 |  |
| [`RequestShopTokenRequest`](/game-api/types/assembly-api-models/requestshoptokenrequest) | class |  | 0 |  |
| [`ResetPasswordRequest`](/game-api/types/assembly-api-models/resetpasswordrequest) | class |  | 2 |  |
| [`SearchByUsernameRequest`](/game-api/types/assembly-api-models/searchbyusernamerequest) | class |  | 1 |  |
| [`SendMessageRequest`](/game-api/types/assembly-api-models/sendmessagerequest) | class |  | 2 |  |
| [`ServerSaveFileRequest`](/game-api/types/assembly-api-models/serversavefilerequest) | class |  | 1 |  |
| [`ServerStatusRequest`](/game-api/types/assembly-api-models/serverstatusrequest) | class |  | 1 |  |
| [`SetGroupPermissionsRequest`](/game-api/types/assembly-api-models/setgrouppermissionsrequest) | class |  | 1 |  |
| [`SetGroupPermissionsRequest.OldGroupPermission`](/game-api/types/assembly-api-models/setgrouppermissionsrequest-oldgrouppermission) | enum |  | 3 |  |
| [`SetServersOnlinePlayersRequest`](/game-api/types/assembly-api-models/setserversonlineplayersrequest) | class |  | 2 |  |
| [`ShopItemsRequest`](/game-api/types/assembly-api-models/shopitemsrequest) | class |  | 1 |  |
| [`StatProgress`](/game-api/types/assembly-api-models/statprogress) | class |  | 3 |  |
| [`StopInstanceRequest`](/game-api/types/assembly-api-models/stopinstancerequest) | class |  | 1 |  |
| [`UnlinkAccountRequest`](/game-api/types/assembly-api-models/unlinkaccountrequest) | class |  | 1 |  |
| [`UpdateAchievementRequest`](/game-api/types/assembly-api-models/updateachievementrequest) | class |  | 2 |  |
| [`UpdateActionStatRequest`](/game-api/types/assembly-api-models/updateactionstatrequest) | class |  | 3 |  |
| [`UpdateUserInfoRequest`](/game-api/types/assembly-api-models/updateuserinforequest) | class | `EmailAndUsernameRequest` | 0 |  |
| [`UsernameValidationRequest`](/game-api/types/assembly-api-models/usernamevalidationrequest) | class |  | 1 |  |
| [`UserType`](/game-api/types/assembly-api-models/usertype) | enum |  | 3 |  |
| [`ValidateItemOwnershipRequest`](/game-api/types/assembly-api-models/validateitemownershiprequest) | class |  | 3 |  |
| [`ValidateUsersJoinRequest`](/game-api/types/assembly-api-models/validateusersjoinrequest) | class |  | 4 |  |
| [`VerificationEmailRequest`](/game-api/types/assembly-api-models/verificationemailrequest) | class |  | 1 |  |
| [`VerifyUserRequest`](/game-api/types/assembly-api-models/verifyuserrequest) | class |  | 3 |  |
| [`VirtualCurrencyPurchaseRequest`](/game-api/types/assembly-api-models/virtualcurrencypurchaserequest) | class | `PurchaseRequest` | 1 |  |
| [`VoiceChatTokenRequest`](/game-api/types/assembly-api-models/voicechattokenrequest) | class |  | 2 |  |
| [`VoiceChatTokenRequestType`](/game-api/types/assembly-api-models/voicechattokenrequesttype) | enum |  | 2 |  |
| [`WebhookPayload`](/game-api/types/assembly-api-models/webhookpayload) | class |  | 1 |  |
| [`WebsocketMessageBody`](/game-api/types/assembly-api-models/websocketmessagebody) | class |  | 5 |  |
| [`WebsocketResponseBody`](/game-api/types/assembly-api-models/websocketresponsebody) | class |  | 5 |  |

## Alta.Api.DataTransferModels.Models.Requests.DTOs.Requests

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`FriendRequestResponse`](/game-api/types/assembly-api-models/friendrequestresponse) | class |  | 1 |  |

## Alta.Api.DataTransferModels.Models.Responses

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AltaApiResponse<T>`](/game-api/types/assembly-api-models/altaapiresponse-t) | class |  | 3 |  |
| [`BanInfo`](/game-api/types/assembly-api-models/baninfo) | class |  | 10 |  |
| [`BooleanResponse`](/game-api/types/assembly-api-models/booleanresponse) | class |  | 2 |  |
| [`ClaimOculusItemsResponse`](/game-api/types/assembly-api-models/claimoculusitemsresponse) | class |  | 2 |  |
| [`Comment`](/game-api/types/assembly-api-models/comment) | class |  | 7 |  |
| [`Condition`](/game-api/types/assembly-api-models/condition) | class |  | 3 |  |
| [`ConnectionInfo`](/game-api/types/assembly-api-models/connectioninfo) | class |  | 9 | [Server settings](../networking/server-settings.md) |
| [`CouponRedeemedResponse`](/game-api/types/assembly-api-models/couponredeemedresponse) | class |  | 3 |  |
| [`CreateCheckResponse`](/game-api/types/assembly-api-models/createcheckresponse) | class |  | 3 |  |
| [`DiscordSupporterRoleVerificationResults`](/game-api/types/assembly-api-models/discordsupporterroleverificationresults) | class |  | 3 |  |
| [`FleetInfo`](/game-api/types/assembly-api-models/fleetinfo) | class |  | 4 |  |
| [`Form`](/game-api/types/assembly-api-models/form) | class |  | 10 |  |
| [`FormResponse`](/game-api/types/assembly-api-models/formresponse) | class | `FormResponseSummary` | 4 |  |
| [`FormResponseSummary`](/game-api/types/assembly-api-models/formresponsesummary) | class |  | 6 |  |
| [`FriendRequestedType`](/game-api/types/assembly-api-models/friendrequestedtype) | enum |  | 4 |  |
| [`FriendshipInfo`](/game-api/types/assembly-api-models/friendshipinfo) | class | `UserInfo` | 3 |  |
| [`FriendshipType`](/game-api/types/assembly-api-models/friendshiptype) | enum |  | 4 |  |
| [`GameHomeConfiguration`](/game-api/types/assembly-api-models/gamehomeconfiguration) | class |  | 1 |  |
| [`GameServerInfo`](/game-api/types/assembly-api-models/gameserverinfo) | class | `GameServerInfoMinimal` | 30 | [Server settings](../networking/server-settings.md) |
| [`GameServerInfoMinimal`](/game-api/types/assembly-api-models/gameserverinfominimal) | class | `INamedEntity` | 2 |  |
| [`GameServerWebsocketResponse`](/game-api/types/assembly-api-models/gameserverwebsocketresponse) | class |  | 6 |  |
| [`GiftResult`](/game-api/types/assembly-api-models/giftresult) | class |  | 3 |  |
| [`GiftResultType`](/game-api/types/assembly-api-models/giftresulttype) | enum |  | 3 |  |
| [`GiftRewardComment`](/game-api/types/assembly-api-models/giftrewardcomment) | class |  | 1 |  |
| [`GroupInfo`](/game-api/types/assembly-api-models/groupinfo) | class |  | 8 |  |
| [`GroupInfoDetailed`](/game-api/types/assembly-api-models/groupinfodetailed) | class | `GroupInfo` | 3 |  |
| [`GroupMemberInfo`](/game-api/types/assembly-api-models/groupmemberinfo) | class |  | 10 |  |
| [`GroupMemberType`](/game-api/types/assembly-api-models/groupmembertype) | enum |  | 6 |  |
| [`GroupPermissions`](/game-api/types/assembly-api-models/grouppermissions) | enum |  | 12 |  |
| [`GroupRoleIdentifier`](/game-api/types/assembly-api-models/grouproleidentifier) | enum |  | 4 |  |
| [`GroupRoleInfo`](/game-api/types/assembly-api-models/grouproleinfo) | class |  | 9 |  |
| [`GroupServerInfo`](/game-api/types/assembly-api-models/groupserverinfo) | class |  | 4 |  |
| [`GroupType`](/game-api/types/assembly-api-models/grouptype) | enum |  | 3 |  |
| [`GroupTypeExtensions`](/game-api/types/assembly-api-models/grouptypeextensions) | static class |  | 1 |  |
| [`HomeElement`](/game-api/types/assembly-api-models/homeelement) | class |  | 8 |  |
| [`HomeElementPage`](/game-api/types/assembly-api-models/homeelementpage) | class |  | 3 |  |
| [`IConvertableModel<TModel>`](/game-api/types/assembly-api-models/iconvertablemodel-tmodel) | interface |  | 1 |  |
| [`INamedEntity`](/game-api/types/assembly-api-models/inamedentity) | interface |  | 2 |  |
| [`InvitedGroupInfo`](/game-api/types/assembly-api-models/invitedgroupinfo) | class | `GroupInfoDetailed` | 1 |  |
| [`JoinedGroupInfo`](/game-api/types/assembly-api-models/joinedgroupinfo) | class |  | 2 |  |
| [`LauncherGameInfoFull`](/game-api/types/assembly-api-models/launchergameinfofull) | class | `LauncherGameInfoShort` | 9 |  |
| [`LauncherGameInfoShort`](/game-api/types/assembly-api-models/launchergameinfoshort) | class |  | 6 |  |
| [`LinkedAccountInfo`](/game-api/types/assembly-api-models/linkedaccountinfo) | class |  | 4 |  |
| [`MembershipStatusResponse`](/game-api/types/assembly-api-models/membershipstatusresponse) | class |  | 2 |  |
| [`MigrationDetailsResponse`](/game-api/types/assembly-api-models/migrationdetailsresponse) | class |  | 3 |  |
| [`NewComment`](/game-api/types/assembly-api-models/newcomment) | class |  | 2 |  |
| [`OculusFriendInfo`](/game-api/types/assembly-api-models/oculusfriendinfo) | class | `FriendshipInfo` | 1 |  |
| [`Option`](/game-api/types/assembly-api-models/option) | class |  | 4 |  |
| [`Page`](/game-api/types/assembly-api-models/page) | class |  | 3 |  |
| [`PageResponse`](/game-api/types/assembly-api-models/pageresponse) | class |  | 2 |  |
| [`PatchNotes`](/game-api/types/assembly-api-models/patchnotes) | class |  | 2 |  |
| [`PersonalUserInfoResponse`](/game-api/types/assembly-api-models/personaluserinforesponse) | class | `PublicUserInfoResponse` | 3 |  |
| [`PlayerAchievementResponse`](/game-api/types/assembly-api-models/playerachievementresponse) | class |  | 1 |  |
| [`PlayerActionStatResponse`](/game-api/types/assembly-api-models/playeractionstatresponse) | class |  | 1 |  |
| [`PlayerReportInfo`](/game-api/types/assembly-api-models/playerreportinfo) | class |  | 9 |  |
| [`PublicUserInfoResponse`](/game-api/types/assembly-api-models/publicuserinforesponse) | class | `UserInfo` | 2 |  |
| [`PurchaseResult`](/game-api/types/assembly-api-models/purchaseresult) | class |  | 4 |  |
| [`PurchaseResultType`](/game-api/types/assembly-api-models/purchaseresulttype) | enum |  | 8 |  |
| [`Query`](/game-api/types/assembly-api-models/query) | class |  | 9 |  |
| [`QueryMeta`](/game-api/types/assembly-api-models/querymeta) | class |  | 4 |  |
| [`QueryResponse`](/game-api/types/assembly-api-models/queryresponse) | class |  | 2 |  |
| [`QuickCreateResponse`](/game-api/types/assembly-api-models/quickcreateresponse) | class |  | 2 |  |
| [`RecentPlayerInteractionInfo`](/game-api/types/assembly-api-models/recentplayerinteractioninfo) | class |  | 4 |  |
| [`RecentPlayerInteractionType`](/game-api/types/assembly-api-models/recentplayerinteractiontype) | enum |  | 3 |  |
| [`RegionInfo`](/game-api/types/assembly-api-models/regioninfo) | class |  | 4 |  |
| [`ReportStatus`](/game-api/types/assembly-api-models/reportstatus) | enum |  | 3 |  |
| [`ReportType`](/game-api/types/assembly-api-models/reporttype) | enum |  | 3 |  |
| [`ResolveComment`](/game-api/types/assembly-api-models/resolvecomment) | class |  | 2 |  |
| [`ServerJoinFailResult`](/game-api/types/assembly-api-models/serverjoinfailresult) | enum |  | 14 |  |
| [`ServerJoinResponse`](/game-api/types/assembly-api-models/serverjoinresponse) | class |  | 4 |  |
| [`ServerJoinResult`](/game-api/types/assembly-api-models/serverjoinresult) | class |  | 9 |  |
| [`ServerJoinType`](/game-api/types/assembly-api-models/serverjointype) | enum |  | 7 |  |
| [`ServerOwnerType`](/game-api/types/assembly-api-models/serverownertype) | enum |  | 4 |  |
| [`ServerSaveFileResponse`](/game-api/types/assembly-api-models/serversavefileresponse) | class |  | 1 |  |
| [`Settings`](/game-api/types/assembly-api-models/settings) | class |  | 2 | [Settings and files](../console-and-utilities/settings-and-files.md): Where the game keeps its settings and files, and the helpers it uses to read and write them. |
| [`ShopAccountInfo`](/game-api/types/assembly-api-models/shopaccountinfo) | class |  | 4 |  |
| [`ShopAccountInfo.SubscriptionStatus`](/game-api/types/assembly-api-models/shopaccountinfo-subscriptionstatus) | class |  | 4 |  |
| [`ShopItemConfiguration`](/game-api/types/assembly-api-models/shopitemconfiguration) | class |  | 6 |  |
| [`ShopPageConfiguration`](/game-api/types/assembly-api-models/shoppageconfiguration) | class |  | 5 |  |
| [`ShopPageConfigurationWithBanner`](/game-api/types/assembly-api-models/shoppageconfigurationwithbanner) | class | `ShopPageConfiguration` | 2 |  |
| [`ShopTokenResponse`](/game-api/types/assembly-api-models/shoptokenresponse) | class |  | 4 |  |
| [`ShopTransactionStatusResponse`](/game-api/types/assembly-api-models/shoptransactionstatusresponse) | class |  | 1 |  |
| [`ShutdownReason`](/game-api/types/assembly-api-models/shutdownreason) | class |  | 6 |  |
| [`SimpleTokenResultResponse`](/game-api/types/assembly-api-models/simpletokenresultresponse) | class |  | 2 |  |
| [`SingleTokenResponse`](/game-api/types/assembly-api-models/singletokenresponse) | class |  | 1 |  |
| [`SocialMediaInfo`](/game-api/types/assembly-api-models/socialmediainfo) | class |  | 2 |  |
| [`StartServerSessionResponse`](/game-api/types/assembly-api-models/startserversessionresponse) | class |  | 1 |  |
| [`StoreRotationGraphicConfig`](/game-api/types/assembly-api-models/storerotationgraphicconfig) | class |  | 3 |  |
| [`SubscriptionRefreshResult`](/game-api/types/assembly-api-models/subscriptionrefreshresult) | class |  | 3 |  |
| [`SubscriptionRefreshResult.Reward`](/game-api/types/assembly-api-models/subscriptionrefreshresult-reward) | class |  | 2 |  |
| [`TokenResultResponse`](/game-api/types/assembly-api-models/tokenresultresponse) | class |  | 4 |  |
| [`Transitions`](/game-api/types/assembly-api-models/transitions) | class |  | 2 |  |
| [`UserInfo`](/game-api/types/assembly-api-models/userinfo) | class | `INamedEntity` | 7 | [Player](../networking/player.md#userinfo): Two are equal when their ids are equal, whatever the names. |
| [`UserInfoWithPermissions`](/game-api/types/assembly-api-models/userinfowithpermissions) | class | `UserInfo` | 5 |  |
| [`UserPresetDataInfo`](/game-api/types/assembly-api-models/userpresetdatainfo) | class |  | 5 |  |
| [`UserStatistics`](/game-api/types/assembly-api-models/userstatistics) | class |  | 2 |  |
| [`ValidateItemOwnershipResponse`](/game-api/types/assembly-api-models/validateitemownershipresponse) | class |  | 1 |  |
| [`ValidationResultModel`](/game-api/types/assembly-api-models/validationresultmodel) | class |  | 4 |  |
| [`VersionMarker`](/game-api/types/assembly-api-models/versionmarker) | class |  | 2 |  |

## Alta.Api.DataTransferModels.Models.Responses.DTOs.Responses

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`FriendRequestResult`](/game-api/types/assembly-api-models/friendrequestresult) | class |  | 3 |  |
| [`InstallationEventInfo`](/game-api/types/assembly-api-models/installationeventinfo) | class |  | 8 |  |

## Alta.Api.DataTransferModels.Models.Shared

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AnalyticsEventData`](/game-api/types/assembly-api-models/analyticseventdata) | class |  | 9 |  |
| [`BanMethod`](/game-api/types/assembly-api-models/banmethod) | enum |  | 3 |  |
| [`BanType`](/game-api/types/assembly-api-models/bantype) | enum |  | 3 |  |
| [`ChargeInfo`](/game-api/types/assembly-api-models/chargeinfo) | class |  | 2 |  |
| [`ClientTokenConfig`](/game-api/types/assembly-api-models/clienttokenconfig) | class |  | 3 |  |
| [`Duration`](/game-api/types/assembly-api-models/duration) | class |  | 3 |  |
| [`DurationType`](/game-api/types/assembly-api-models/durationtype) | enum |  | 3 |  |
| [`GameVersion`](/game-api/types/assembly-api-models/gameversion) | class | `IEquatable<GameVersion>` | 15 |  |
| [`InstanceInfo`](/game-api/types/assembly-api-models/instanceinfo) | class |  | 6 |  |
| [`ItemCategory`](/game-api/types/assembly-api-models/itemcategory) | enum |  | 25 |  |
| [`ItemSetType`](/game-api/types/assembly-api-models/itemsettype) | enum |  | 2 |  |
| [`OwnedShopItem`](/game-api/types/assembly-api-models/ownedshopitem) | class | `IIdentifiable` | 5 |  |
| [`PriceType`](/game-api/types/assembly-api-models/pricetype) | enum |  | 2 |  |
| [`Region`](/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared) | class |  | 12 |  |
| [`ShopItem`](/game-api/types/assembly-api-models/shopitem) | class | `IIdentifiable` | 9 |  |
| [`ShopItemDetailed`](/game-api/types/assembly-api-models/shopitemdetailed) | class | `ShopItem` | 4 |  |
| [`ShopItemDetailedForUser`](/game-api/types/assembly-api-models/shopitemdetailedforuser) | class | `ShopItemDetailed` | 2 |  |
| [`ShopItemIdentifier`](/game-api/types/assembly-api-models/shopitemidentifier) | class |  | 3 |  |
| [`ShopItemImage`](/game-api/types/assembly-api-models/shopitemimage) | class |  | 6 |  |
| [`ShopItemModificationRequest`](/game-api/types/assembly-api-models/shopitemmodificationrequest) | class | `IIdentifiable` | 14 |  |
| [`ShopItemSet`](/game-api/types/assembly-api-models/shopitemset) | class | `IIdentifiable` | 4 |  |
| [`ShopItemSetModificationRequest`](/game-api/types/assembly-api-models/shopitemsetmodificationrequest) | class | `ShopItemModificationRequest` | 1 |  |
| [`ShopPrice`](/game-api/types/assembly-api-models/shopprice) | class |  | 3 |  |
| [`SubscriptionPlanInfo`](/game-api/types/assembly-api-models/subscriptionplaninfo) | class |  | 7 |  |
| [`TownshipItemCategory`](/game-api/types/assembly-api-models/townshipitemcategory) | class | `IIdentifiable` | 6 |  |
| [`TownshipItemCategoryModificationRequest`](/game-api/types/assembly-api-models/townshipitemcategorymodificationrequest) | class | `TownshipItemCategory` | 1 |  |
| [`UserRoles`](/game-api/types/assembly-api-models/userroles) | class |  | 3 |  |
| [`UserSubscription`](/game-api/types/assembly-api-models/usersubscription) | class |  | 10 |  |
| [`UserSubscriptionInfoStatus`](/game-api/types/assembly-api-models/usersubscriptioninfostatus) | enum |  | 3 |  |

## Alta.Api.DataTransferModels.Settings

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`GameServerSettings`](/game-api/types/assembly-api-models/gameserversettings) | static class |  | 8 |  |
| [`NamingSettings`](/game-api/types/assembly-api-models/namingsettings) | static class |  | 7 |  |

## Alta.Api.DataTransferModels.Utility

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`Device`](/game-api/types/assembly-api-models/device) | static class |  | 2 |  |
| [`JsonUtility`](/game-api/types/assembly-api-models/jsonutility) | static class |  | 3 |  |
| [`JwtTokenHandler`](/game-api/types/assembly-api-models/jwttokenhandler) | static class |  | 1 |  |
| [`RetryHandler`](/game-api/types/assembly-api-models/retryhandler) | class | `HttpClientHandler` | 2 |  |
| [`UserRolesUtility`](/game-api/types/assembly-api-models/userrolesutility) | static class |  | 2 |  |
