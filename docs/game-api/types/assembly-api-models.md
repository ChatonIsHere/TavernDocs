---
title: Alta.Api.DataTransferModels
description: "Types in the Alta.Api.DataTransferModels assembly: requests, responses and shared models of Alta's web API."
sidebar_position: 25
---

# Alta.Api.DataTransferModels

Types in the Alta.Api.DataTransferModels assembly: requests, responses and shared models of Alta's web API. 277 types, 4 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Api.DataTransferModels.Constants

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`CustomClaimTypes`](/game-api/types/assembly-api-models/customclaimtypes) | static class |  | 13 |  |

## Alta.Api.DataTransferModels.Converters

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ForceDefaultConverter`](/game-api/types/assembly-api-models/forcedefaultconverter) | class | `JsonConverter` | 5 |  |
| [`IPAddressJsonConverter`](/game-api/types/assembly-api-models/ipaddressjsonconverter) | class | `JsonConverter` | 3 |  |
| [`JwtSecurityTokenJsonConverter`](/game-api/types/assembly-api-models/jwtsecuritytokenjsonconverter) | class | `JsonConverter` | 3 |  |
| [`JWTUtility`](/game-api/types/assembly-api-models/jwtutility) | static class |  | 1 |  |
| [`RegionEndpointJsonConverter`](/game-api/types/assembly-api-models/regionendpointjsonconverter) | class | `JsonConverter` | 3 |  |
| [`SensitiveStringConverter`](/game-api/types/assembly-api-models/sensitivestringconverter) | class | `JsonConverter` | 3 |  |

## Alta.Api.DataTransferModels.Enums

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AssignableRoles`](/game-api/types/assembly-api-models/assignableroles) | enum |  | 1 | Account roles the Alta API lets you assign. Only `PreAlphaPlayer`. |
| [`GameServerStatus`](/game-api/types/assembly-api-models/gameserverstatus) | enum |  | 3 | Online state of a game server in the Alta API: forced offline, offline or online. |
| [`GameServerWebsocketResponseType`](/game-api/types/assembly-api-models/gameserverwebsocketresponsetype) | enum |  | 3 | Kind of `GameServerWebsocketResponse` sent over the game server websocket: system message, subscription event or command result. |
| [`ImageType`](/game-api/types/assembly-api-models/imagetype) | enum |  | 5 | Which slot a shop item image fills (primary, hover, carousel, detailed or gallery). Used by `LowLevelApiClient.AddImageToItemAsync`. |
| [`PermissionType`](/game-api/types/assembly-api-models/permissiontype) | enum |  | 8 | Flags for what a user may do with an Alta web API form: edit, respond, view responses or comments, comment, resolve and unresolve. |
| [`Region`](/game-api/types/assembly-api-models/region) | enum |  | 2 | Which Alta platform region an account belongs to: Global or China. |
| [`ServerType`](/game-api/types/assembly-api-models/servertype) | enum |  | 2 | Alta server type: `Normal` or `World`. |
| [`ShopTransactionStatus`](/game-api/types/assembly-api-models/shoptransactionstatus) | enum |  | 11 | State of an Alta shop purchase, from started and processing to successful or refunded, with values for each kind of failure. |

## Alta.Api.DataTransferModels.Enums.Alta.WebApi.Models

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FormQueryType`](/game-api/types/assembly-api-models/formquerytype) | enum |  | 11 | Kind of question in an Alta web API form, such as boolean, text, rating, choice, or a pick of an item, server or player. |

## Alta.Api.DataTransferModels.Errors

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ApiError`](/game-api/types/assembly-api-models/apierror) | class |  | 11 | Error body returned by the Alta web API: message, error code, request validation errors and optional context. |
| [`ErrorCode`](/game-api/types/assembly-api-models/errorcode) | enum |  | 60 | Error codes the Alta web API returns, covering shop, accounts, bans, groups, servers and login failures. |
| [`NotFoundApiError`](/game-api/types/assembly-api-models/notfoundapierror) | class | `ApiError` | 1 |  |
| [`ValidationError`](/game-api/types/assembly-api-models/validationerror) | class |  | 5 | One field-level validation error in an API error response. |

## Alta.Api.DataTransferModels.Exceptions

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ApiErrorException`](/game-api/types/assembly-api-models/apierrorexception) | class | `Exception` | 4 | Exception that carries an `ApiError` and an HTTP status code (500 unless given). |
| [`AuthorizationException`](/game-api/types/assembly-api-models/authorizationexception) | class | `Exception` | 3 |  |
| [`ForbiddenException`](/game-api/types/assembly-api-models/forbiddenexception) | class | `Exception` | 3 |  |
| [`HttpException`](/game-api/types/assembly-api-models/httpexception) | class | `Exception` | 4 |  |
| [`OfflineException`](/game-api/types/assembly-api-models/offlineexception) | class | `Exception` | 1 |  |

## Alta.Api.DataTransferModels.Extensions

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`EnumerableExtensions`](/game-api/types/assembly-api-models/enumerableextensions) | static class |  | 6 |  |
| [`GuidExtensions`](/game-api/types/assembly-api-models/guidextensions) | static class |  | 3 |  |
| [`HttpClientExtensions`](/game-api/types/assembly-api-models/httpclientextensions) | static class |  | 7 |  |
| [`HttpClientExtensions.JsonContent`](/game-api/types/assembly-api-models/httpclientextensions-jsoncontent) | class | `StringContent` | 1 | HTTP string content holding an object serialized to UTF-8 JSON. Used by the JSON post, put, patch and delete helpers. |
| [`HttpContentExtensions`](/game-api/types/assembly-api-models/httpcontentextensions) | static class |  | 1 |  |
| [`HttpResponseExtensionMethods`](/game-api/types/assembly-api-models/httpresponseextensionmethods) | static class |  | 4 |  |
| [`QueryExtensions`](/game-api/types/assembly-api-models/queryextensions) | static class |  | 1 |  |
| [`WebRequestExtensions`](/game-api/types/assembly-api-models/webrequestextensions) | static class |  | 3 |  |

## Alta.Api.DataTransferModels.Helpers

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ShopHelper`](/game-api/types/assembly-api-models/shophelper) | static class |  | 3 |  |

## Alta.Api.DataTransferModels.Interfaces

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IIdentifiable`](/game-api/types/assembly-api-models/iidentifiable) | interface |  | 1 |  |

## Alta.Api.DataTransferModels.Models.Agones

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AgonesAllocationFailureType`](/game-api/types/assembly-api-models/agonesallocationfailuretype) | enum |  | 5 | Why allocating an Agones game server failed: no access to the cluster, web request failed, could not allocate, or server locked. |
| [`AgonesGameServer`](/game-api/types/assembly-api-models/agonesgameserver) | class | `AgonesObject` | 3 | An Agones `GameServer` Kubernetes object, as sent to or read from the Agones API. |
| [`AgonesObject`](/game-api/types/assembly-api-models/agonesobject) | abstract class |  | 6 |  |
| [`AgonesServerList`](/game-api/types/assembly-api-models/agonesserverlist) | class |  | 1 |  |
| [`AllocationResult`](/game-api/types/assembly-api-models/allocationresult) | class |  | 4 | Result of asking Agones (the game server hosting system) for a server: whether one was allocated and how to connect. |
| [`DictionaryExtension`](/game-api/types/assembly-api-models/dictionaryextension) | static class |  | 1 |  |
| [`GameServerAllocation`](/game-api/types/assembly-api-models/gameserverallocation) | class | `AgonesObject` | 2 |  |
| [`GameServerAllocationSpec`](/game-api/types/assembly-api-models/gameserverallocationspec) | class |  | 4 | Spec of an Agones game server allocation request: which servers may be picked and metadata to set on the chosen one. |
| [`GameServerAllocationSpec.RequiredSpec`](/game-api/types/assembly-api-models/gameserverallocationspec-requiredspec) | class |  | 1 | Label selector in an Agones game server allocation request. |
| [`GameServerSpec`](/game-api/types/assembly-api-models/gameserverspec) | class |  | 2 | Spec of an Agones game server: its ports and pod template. |
| [`GameServerSpec.GameServerTemplate`](/game-api/types/assembly-api-models/gameserverspec-gameservertemplate) | class |  | 1 | Pod template inside an Agones game server spec. |
| [`GameServerSpec.GameServerTemplate.GameServerTemplateSpec`](/game-api/types/assembly-api-models/gameserverspec-gameservertemplate-gameservertemplatespec) | class |  | 1 | Pod spec inside an Agones game server template. |
| [`GameServerSpec.GameServerTemplate.GameServerTemplateSpec.ContainerConfig`](/game-api/types/assembly-api-models/gameserverspec-gameservertemplate-gameservertemplatespec-containerconfig) | class |  | 2 | One container in an Agones game server pod. |
| [`Metadata`](/game-api/types/assembly-api-models/metadata) | class |  | 7 | Kubernetes object metadata as used in Agones requests and responses. |
| [`PortConfig`](/game-api/types/assembly-api-models/portconfig) | class |  | 2 | A named port in an Agones game server's status. |
| [`SpecPortConfig`](/game-api/types/assembly-api-models/specportconfig) | class |  | 4 | A port in an Agones game server spec. |
| [`Status`](/game-api/types/assembly-api-models/status) | class |  | 5 | Status of an Agones game server: its state, address and ports. |
| [`Status.GameServerState`](/game-api/types/assembly-api-models/status-gameserverstate) | enum |  | 11 | Lifecycle state of an Agones game server, from `Creating` through `Ready` and `Allocated` to `Shutdown` or `Unhealthy`. |

## Alta.Api.DataTransferModels.Models.Requests

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AccountLinkData`](/game-api/types/assembly-api-models/accountlinkdata) | class |  | 3 | Platform account details sent when registering an Oculus or Pico user, so the new Alta account is linked to it. |
| [`AccountRequestBase`](/game-api/types/assembly-api-models/accountrequestbase) | class |  | 3 | Web API request body for Oculus account linking: the platform account ID, its proof token and the region. Built by `OculusClient`. |
| [`AllocationRequest`](/game-api/types/assembly-api-models/allocationrequest) | class |  | 1 | Body of the Alta web API call that allocates a server for migration (`AllocateServerForMigration`). |
| [`BanRequest`](/game-api/types/assembly-api-models/banrequest) | class |  | 7 | Body of an Alta web API request to ban a user. |
| [`BooleanRequest`](/game-api/types/assembly-api-models/booleanrequest) | class |  | 1 |  |
| [`BufferChangeRequest`](/game-api/types/assembly-api-models/bufferchangerequest) | class |  | 3 | Request body for `LowLevelApiClient.RequestBufferChange`, which asked Alta's API to change the number of spare servers kept for a fleet and region. |
| [`ChangeBalanceRequest`](/game-api/types/assembly-api-models/changebalancerequest) | class |  | 1 |  |
| [`ChangePasswordRequest`](/game-api/types/assembly-api-models/changepasswordrequest) | class |  | 4 | Body of an Alta web API request to change the account password. Sends hashes, not plain passwords. |
| [`ChangeUsernameRequest`](/game-api/types/assembly-api-models/changeusernamerequest) | class |  | 4 | Body of an Alta web API request to change the account's username, confirmed with the password hash. |
| [`ConsoleCommandRequest`](/game-api/types/assembly-api-models/consolecommandrequest) | class |  | 1 |  |
| [`CreateGroupAndServerRequest`](/game-api/types/assembly-api-models/creategroupandserverrequest) | class | `QuickCreateRequest` | 4 | Body for the API's groups quick-create call, which makes a group and its server together. The launch region comes from `QuickCreateRequest`. |
| [`CreateGroupRequest`](/game-api/types/assembly-api-models/creategrouprequest) | class |  | 3 |  |
| [`CreateGroupServerRequest`](/game-api/types/assembly-api-models/creategroupserverrequest) | class |  | 3 |  |
| [`CreatePresetRequest`](/game-api/types/assembly-api-models/createpresetrequest) | class |  | 3 | Body of the Alta web API call that saves a cosmetic preset (`CreateCosmeticPreset`). |
| [`CreateReportRequest`](/game-api/types/assembly-api-models/createreportrequest) | class |  | 3 | Body of an Alta web API request to report a player. |
| [`DeleteItemRequest`](/game-api/types/assembly-api-models/deleteitemrequest) | class |  | 1 |  |
| [`EditGroupRequest`](/game-api/types/assembly-api-models/editgrouprequest) | class |  | 5 | Body for updating a group's details on the Alta web API. |
| [`EditGroupRoleRequest`](/game-api/types/assembly-api-models/editgrouprolerequest) | class |  | 4 |  |
| [`EmailAndUsernameRequest`](/game-api/types/assembly-api-models/emailandusernamerequest) | class |  | 2 |  |
| [`EmailValidationRequest`](/game-api/types/assembly-api-models/emailvalidationrequest) | class |  | 1 | Body of an Alta web API request to check an email address. |
| [`FutureUserActionCreateRequest`](/game-api/types/assembly-api-models/futureuseractioncreaterequest) | class |  | 4 | Body of the Alta web API call that queues an action to apply to a user later (`CreateFutureUserActions`). |
| [`FutureUserActionType`](/game-api/types/assembly-api-models/futureuseractiontype) | enum |  | 2 | Kind of future user action stored for an outside user: add a friend or invite to a group. |
| [`GameServerCreateRequest`](/game-api/types/assembly-api-models/gameservercreaterequest) | class |  | 9 | Request body for creating a game server through Alta's web API. |
| [`GameServerWebsocketRequest`](/game-api/types/assembly-api-models/gameserverwebsocketrequest) | struct |  | 2 |  |
| [`GenerateSignUpCodeRequest`](/game-api/types/assembly-api-models/generatesignupcoderequest) | class |  | 5 | Body of an Alta web API request to generate a sign-up code for someone. |
| [`GetShardsTokenRequest`](/game-api/types/assembly-api-models/getshardstokenrequest) | class |  | 2 |  |
| [`GetSubscriptionTokenRequest`](/game-api/types/assembly-api-models/getsubscriptiontokenrequest) | class |  | 1 |  |
| [`GiveRoleRequest`](/game-api/types/assembly-api-models/giverolerequest) | class |  | 1 | Body of an Alta web API request to give a user a role. |
| [`GroupPermissionsCheckRequest`](/game-api/types/assembly-api-models/grouppermissionscheckrequest) | class |  | 1 | Body for asking the API whether a user has permissions in a group or on a server. |
| [`GroupRoleRequest`](/game-api/types/assembly-api-models/grouprolerequest) | class |  | 2 |  |
| [`IdentityTokenRequest`](/game-api/types/assembly-api-models/identitytokenrequest) | class |  | 1 | Body of the Alta web API call that generates an identity token (`GenerateIdentityTokenAsync`). |
| [`IdentityTokenValidationRequest`](/game-api/types/assembly-api-models/identitytokenvalidationrequest) | class |  | 3 | Body of an Alta web API request to check an identity token. |
| [`InstallationEventRequest`](/game-api/types/assembly-api-models/installationeventrequest) | class |  | 5 |  |
| [`ItemDeleteRequest`](/game-api/types/assembly-api-models/itemdeleterequest) | class | `ItemPurchaseRequest` | 1 |  |
| [`ItemPurchaseRequest`](/game-api/types/assembly-api-models/itempurchaserequest) | class | `PurchaseRequest` | 1 |  |
| [`ItemSetRequest`](/game-api/types/assembly-api-models/itemsetrequest) | class |  | 3 | Request body for creating or updating a shop item set (a bundle) through Alta's web API. |
| [`JoinServerRequest`](/game-api/types/assembly-api-models/joinserverrequest) | class |  | 5 | Body for joining a server or connecting the console through the Alta web API. |
| [`LaunchInstanceRequest`](/game-api/types/assembly-api-models/launchinstancerequest) | class |  | 5 |  |
| [`LaunchLocalServerRequest`](/game-api/types/assembly-api-models/launchlocalserverrequest) | class |  | 8 | Body of the Alta web API call a locally run server makes to start a session (`StartLocalServer`), with its addresses and ports. |
| [`LinkAccountRequest`](/game-api/types/assembly-api-models/linkaccountrequest) | class | `AccountRequestBase` | 2 | Body of an Alta web API request to link an outside account to an Alta user. |
| [`LoginRequest`](/game-api/types/assembly-api-models/loginrequest) | class | `LoginRequestBase` | 3 | Body of an Alta web API login with a username, password hash and device id. |
| [`LoginRequestBase`](/game-api/types/assembly-api-models/loginrequestbase) | class | `RefreshRequest` | 3 |  |
| [`LoginViaLinkedAccountRequest`](/game-api/types/assembly-api-models/loginvialinkedaccountrequest) | class | `AccountRequestBase` | 1 | Body for logging in with a linked platform account (used for Oculus and Pico). |
| [`LoginWithEmailRequest`](/game-api/types/assembly-api-models/loginwithemailrequest) | class | `LoginRequestBase` | 3 | Body of an Alta web API login with an email, password hash and device id. |
| [`LogoutRequest`](/game-api/types/assembly-api-models/logoutrequest) | class |  | 3 |  |
| [`MatchMakingRequirements`](/game-api/types/assembly-api-models/matchmakingrequirements) | class |  | 2 | Body of the Alta web API call that picks the best server to join (`GetBestServer`). |
| [`MigrateWebsocketRequest`](/game-api/types/assembly-api-models/migratewebsocketrequest) | class |  | 1 |  |
| [`ModifyReportRequest`](/game-api/types/assembly-api-models/modifyreportrequest) | class |  | 1 | Body of an Alta web API request to change a report's status. |
| [`OculusFriendsList`](/game-api/types/assembly-api-models/oculusfriendslist) | class |  | 1 | Body of an Alta web API request that sends the user's Oculus friends. |
| [`PurchaseCouponRequest`](/game-api/types/assembly-api-models/purchasecouponrequest) | class |  | 2 |  |
| [`PurchaseItemTokenRequest`](/game-api/types/assembly-api-models/purchaseitemtokenrequest) | class |  | 2 | Alta web API request body for buying a shop item. |
| [`PurchaseRequest`](/game-api/types/assembly-api-models/purchaserequest) | class |  | 1 |  |
| [`QuickCreateRequest`](/game-api/types/assembly-api-models/quickcreaterequest) | class |  | 1 |  |
| [`RecentPlayerInteractionRequest`](/game-api/types/assembly-api-models/recentplayerinteractionrequest) | class |  | 2 | One recent player interaction sent to the Alta web API. Queued through `ApiBatchRequestService` and sent in batches. |
| [`RedeemCouponRequest`](/game-api/types/assembly-api-models/redeemcouponrequest) | class |  | 1 |  |
| [`RefreshRequest`](/game-api/types/assembly-api-models/refreshrequest) | class |  | 2 |  |
| [`RegisterRequest`](/game-api/types/assembly-api-models/registerrequest) | class | `EmailAndUsernameRequest`, `IRequest<UserInfo>`, `IBaseRequest` | 4 | Body of an Alta web API request to create an account, with optional Oculus or Pico links. |
| [`RequestPasswordResetRequest`](/game-api/types/assembly-api-models/requestpasswordresetrequest) | class |  | 3 | Body of an Alta web API request to send a password reset email. |
| [`RequestShopTokenRequest`](/game-api/types/assembly-api-models/requestshoptokenrequest) | class |  | 0 | Empty body of the Alta web API call that gets a shop token (`GetShopTokenAsync`). |
| [`ResetPasswordRequest`](/game-api/types/assembly-api-models/resetpasswordrequest) | class |  | 2 | Body of an Alta web API request that sets a new password with a reset token. |
| [`SearchByUsernameRequest`](/game-api/types/assembly-api-models/searchbyusernamerequest) | class |  | 1 | Body of an Alta web API request to find users by username. |
| [`SendMessageRequest`](/game-api/types/assembly-api-models/sendmessagerequest) | class |  | 2 |  |
| [`ServerSaveFileRequest`](/game-api/types/assembly-api-models/serversavefilerequest) | class |  | 1 |  |
| [`ServerStatusRequest`](/game-api/types/assembly-api-models/serverstatusrequest) | class |  | 1 |  |
| [`SetGroupPermissionsRequest`](/game-api/types/assembly-api-models/setgrouppermissionsrequest) | class |  | 1 |  |
| [`SetGroupPermissionsRequest.OldGroupPermission`](/game-api/types/assembly-api-models/setgrouppermissionsrequest-oldgrouppermission) | enum |  | 3 | Old flag-style group permission levels (member, moderator, admin), still used by `GroupMemberInfo.Permissions`. |
| [`SetServersOnlinePlayersRequest`](/game-api/types/assembly-api-models/setserversonlineplayersrequest) | class |  | 2 | Body of the Alta web API call a server makes to report who is online (`SetOnlinePlayers`). |
| [`ShopItemsRequest`](/game-api/types/assembly-api-models/shopitemsrequest) | class |  | 1 |  |
| [`StatProgress`](/game-api/types/assembly-api-models/statprogress) | class |  | 3 | Progress on one achievement action stat, read from and sent to the web API by the achievement client. |
| [`StopInstanceRequest`](/game-api/types/assembly-api-models/stopinstancerequest) | class |  | 1 |  |
| [`UnlinkAccountRequest`](/game-api/types/assembly-api-models/unlinkaccountrequest) | class |  | 1 | Body of an Alta web API request to unlink an outside account. |
| [`UpdateAchievementRequest`](/game-api/types/assembly-api-models/updateachievementrequest) | class |  | 2 | Body for updating one achievement for a user on the Alta web API. |
| [`UpdateActionStatRequest`](/game-api/types/assembly-api-models/updateactionstatrequest) | class |  | 3 | Alta web API request body for updating a user's action stats. |
| [`UpdateUserInfoRequest`](/game-api/types/assembly-api-models/updateuserinforequest) | class | `EmailAndUsernameRequest` | 0 |  |
| [`UsernameValidationRequest`](/game-api/types/assembly-api-models/usernamevalidationrequest) | class |  | 1 | Body of an Alta web API request to check a username. |
| [`UserType`](/game-api/types/assembly-api-models/usertype) | enum |  | 3 | Which kind of account a user id belongs to: Alta, Oculus or Discord. |
| [`ValidateItemOwnershipRequest`](/game-api/types/assembly-api-models/validateitemownershiprequest) | class |  | 3 | Body of an Alta web API request to check whether a user owns some shop items. |
| [`ValidateUsersJoinRequest`](/game-api/types/assembly-api-models/validateusersjoinrequest) | class |  | 4 |  |
| [`VerificationEmailRequest`](/game-api/types/assembly-api-models/verificationemailrequest) | class |  | 1 | Body for sending a user a verification email. |
| [`VerifyUserRequest`](/game-api/types/assembly-api-models/verifyuserrequest) | class |  | 3 | Body of an Alta web API request to verify an account with a token. |
| [`VirtualCurrencyPurchaseRequest`](/game-api/types/assembly-api-models/virtualcurrencypurchaserequest) | class | `PurchaseRequest` | 1 |  |
| [`VoiceChatTokenRequest`](/game-api/types/assembly-api-models/voicechattokenrequest) | class |  | 2 | Body of an Alta web API request for a voice chat token, to log in or to join a server's channel. |
| [`VoiceChatTokenRequestType`](/game-api/types/assembly-api-models/voicechattokenrequesttype) | enum |  | 2 | What a voice chat token is for: `Login` or `JoinChannel`. |
| [`WebhookPayload`](/game-api/types/assembly-api-models/webhookpayload) | class |  | 1 |  |
| [`WebsocketMessageBody`](/game-api/types/assembly-api-models/websocketmessagebody) | class |  | 5 |  |
| [`WebsocketResponseBody`](/game-api/types/assembly-api-models/websocketresponsebody) | class |  | 5 |  |

## Alta.Api.DataTransferModels.Models.Requests.DTOs.Requests

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FriendRequestResponse`](/game-api/types/assembly-api-models/friendrequestresponse) | class |  | 1 |  |

## Alta.Api.DataTransferModels.Models.Responses

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaApiResponse<T>`](/game-api/types/assembly-api-models/altaapiresponse-t) | class |  | 3 |  |
| [`BanInfo`](/game-api/types/assembly-api-models/baninfo) | class |  | 10 | API model for a ban on a user, IP address or device, with its reason, scope and end time. |
| [`BooleanResponse`](/game-api/types/assembly-api-models/booleanresponse) | class |  | 2 | A web API response that wraps a single true or false value. |
| [`ClaimOculusItemsResponse`](/game-api/types/assembly-api-models/claimoculusitemsresponse) | class |  | 2 | Alta web API reply to claiming all of a user's Oculus purchases (`ConsumeAllOculusPurchases`). |
| [`Comment`](/game-api/types/assembly-api-models/comment) | class |  | 7 | A comment from the Alta web API, with its author and whether it is hidden or posted by the system. |
| [`Condition`](/game-api/types/assembly-api-models/condition) | class |  | 3 | A condition from the Alta web API on a query (probably a form question), with allowed and blocked answers. |
| [`ConnectionInfo`](/game-api/types/assembly-api-models/connectioninfo) | class |  | 9 | [Server settings](../networking/server-settings.md) |
| [`CouponRedeemedResponse`](/game-api/types/assembly-api-models/couponredeemedresponse) | class |  | 3 |  |
| [`CreateCheckResponse`](/game-api/types/assembly-api-models/createcheckresponse) | class |  | 3 | Alta web API reply to `CanCreateGroups`: how many more groups the user may create on each platform. |
| [`DiscordSupporterRoleVerificationResults`](/game-api/types/assembly-api-models/discordsupporterroleverificationresults) | class |  | 3 |  |
| [`FleetInfo`](/game-api/types/assembly-api-models/fleetinfo) | class |  | 4 |  |
| [`Form`](/game-api/types/assembly-api-models/form) | class |  | 10 |  |
| [`FormResponse`](/game-api/types/assembly-api-models/formresponse) | class | `FormResponseSummary` | 4 |  |
| [`FormResponseSummary`](/game-api/types/assembly-api-models/formresponsesummary) | class |  | 6 |  |
| [`FriendRequestedType`](/game-api/types/assembly-api-models/friendrequestedtype) | enum |  | 4 | Outcome of a friend request: befriended, request sent, already friends or already requested. |
| [`FriendshipInfo`](/game-api/types/assembly-api-models/friendshipinfo) | class | `UserInfo` | 3 | A user returned by the Alta web API's friends endpoints, with when the friendship started and its state. |
| [`FriendshipType`](/game-api/types/assembly-api-models/friendshiptype) | enum |  | 4 | State of a friendship between two accounts in the Alta API: none, waiting for reply, requested or accepted. |
| [`GameHomeConfiguration`](/game-api/types/assembly-api-models/gamehomeconfiguration) | class |  | 1 | API response describing what the game's home screen shows. |
| [`GameServerInfo`](/game-api/types/assembly-api-models/gameserverinfo) | class | `GameServerInfoMinimal` | 30 | [Server settings](../networking/server-settings.md) |
| [`GameServerInfoMinimal`](/game-api/types/assembly-api-models/gameserverinfominimal) | class | `INamedEntity` | 2 | A game server's id and name only, as Alta's web API returned in short lists. |
| [`GameServerWebsocketResponse`](/game-api/types/assembly-api-models/gameserverwebsocketresponse) | class |  | 6 |  |
| [`GiftResult`](/game-api/types/assembly-api-models/giftresult) | class |  | 3 | Alta API response to gifting a shop item to someone. |
| [`GiftResultType`](/game-api/types/assembly-api-models/giftresulttype) | enum |  | 3 | Result of giving a shop item: `Failed`, `AlreadyOwned` or `Success`. |
| [`GiftRewardComment`](/game-api/types/assembly-api-models/giftrewardcomment) | class |  | 1 |  |
| [`GroupInfo`](/game-api/types/assembly-api-models/groupinfo) | class |  | 8 | API model with the basic public info for a group (server group): name, description, type, member count and tags. |
| [`GroupInfoDetailed`](/game-api/types/assembly-api-models/groupinfodetailed) | class | `GroupInfo` | 3 | A group's info from the web API with its servers and roles included. |
| [`GroupMemberInfo`](/game-api/types/assembly-api-models/groupmemberinfo) | class |  | 10 | API response describing one member of a group (server group), with their role and permissions. |
| [`GroupMemberType`](/game-api/types/assembly-api-models/groupmembertype) | enum |  | 6 | A user's state in a group: banned, requested to join, invited, accepted (a member), left or kicked. |
| [`GroupPermissions`](/game-api/types/assembly-api-models/grouppermissions) | enum |  | 12 | Permissions a role can grant in an Alta group (server community): inviting, banning, kicking, managing servers, console access, roles, reports and saves. |
| [`GroupRoleIdentifier`](/game-api/types/assembly-api-models/grouproleidentifier) | enum |  | 4 |  |
| [`GroupRoleInfo`](/game-api/types/assembly-api-models/grouproleinfo) | class |  | 9 | A role in a group: id, name, colour, permissions and allowed console commands. Constants give the fixed ids of the built-in roles. |
| [`GroupServerInfo`](/game-api/types/assembly-api-models/groupserverinfo) | class |  | 4 | Web API model for one game server as listed inside a group's details (`GroupInfoDetailed.Servers`). |
| [`GroupType`](/game-api/types/assembly-api-models/grouptype) | enum |  | 3 | Group join type: Open, Public or Private. Group discovery lists the public and open ones. |
| [`GroupTypeExtensions`](/game-api/types/assembly-api-models/grouptypeextensions) | static class |  | 1 |  |
| [`HomeElement`](/game-api/types/assembly-api-models/homeelement) | class |  | 8 | Web API model for one element of the game's home screen layout (`GameHomeConfiguration.Elements`). |
| [`HomeElementPage`](/game-api/types/assembly-api-models/homeelementpage) | class |  | 3 | Web API model for one page inside a `HomeElement` on the home screen. |
| [`IConvertableModel<TModel>`](/game-api/types/assembly-api-models/iconvertablemodel-tmodel) | interface |  | 1 |  |
| [`INamedEntity`](/game-api/types/assembly-api-models/inamedentity) | interface |  | 2 | Anything from the web API with a numeric ID and a name, such as `UserInfo` and `GameServerInfoMinimal`. |
| [`InvitedGroupInfo`](/game-api/types/assembly-api-models/invitedgroupinfo) | class | `GroupInfoDetailed` | 1 | Group details from the Alta web API for a group the user was invited to. |
| [`JoinedGroupInfo`](/game-api/types/assembly-api-models/joinedgroupinfo) | class |  | 2 | Web API model for a group the user has joined, paired with their membership. Returned by `LowLevelApiClient.GetJoinedGroups`. |
| [`LauncherGameInfoFull`](/game-api/types/assembly-api-models/launchergameinfofull) | class | `LauncherGameInfoShort` | 9 | Full details of a game for Alta's launcher, from `LowLevelApiClient.GetLauncherGame`. |
| [`LauncherGameInfoShort`](/game-api/types/assembly-api-models/launchergameinfoshort) | class |  | 6 | Short details of a game for the list in Alta's launcher. `LauncherGameInfoFull` extends it. |
| [`LinkedAccountInfo`](/game-api/types/assembly-api-models/linkedaccountinfo) | class |  | 4 | An external account linked to a user, returned by the web API's Discord account endpoints. |
| [`MembershipStatusResponse`](/game-api/types/assembly-api-models/membershipstatusresponse) | class |  | 2 | Whether a user has a supporter membership, from `LowLevelApiClient.GetMembershipStatus`. |
| [`MigrationDetailsResponse`](/game-api/types/assembly-api-models/migrationdetailsresponse) | class |  | 3 | A server's latest save storage (EFS) migration, from `LowLevelApiClient.GetLatestEfsMigrationForServer`. |
| [`NewComment`](/game-api/types/assembly-api-models/newcomment) | class |  | 2 |  |
| [`OculusFriendInfo`](/game-api/types/assembly-api-models/oculusfriendinfo) | class | `FriendshipInfo` | 1 | A friendship returned for an Oculus friends list, from `LowLevelApiClient.GetOculusFriendships`. |
| [`Option`](/game-api/types/assembly-api-models/option) | class |  | 4 | One choice in a web API form question (`Query.Options`). |
| [`Page`](/game-api/types/assembly-api-models/page) | class |  | 3 | One page of a web API form (`Form.Pages`): its questions and the rules for which page comes next. |
| [`PageResponse`](/game-api/types/assembly-api-models/pageresponse) | class |  | 2 | A user's answers for one form page, part of a `FormResponse`. |
| [`PatchNotes`](/game-api/types/assembly-api-models/patchnotes) | class |  | 2 | Web API model for the patch notes of a game version, part of `LauncherGameInfoFull`. |
| [`PersonalUserInfoResponse`](/game-api/types/assembly-api-models/personaluserinforesponse) | class | `PublicUserInfoResponse` | 3 | A user's public info plus their private name and email, from the Alta web API. |
| [`PlayerAchievementResponse`](/game-api/types/assembly-api-models/playerachievementresponse) | class |  | 1 | Web API model listing the achievements a player has. |
| [`PlayerActionStatResponse`](/game-api/types/assembly-api-models/playeractionstatresponse) | class |  | 1 | Web API model listing a player's action stats. |
| [`PlayerReportInfo`](/game-api/types/assembly-api-models/playerreportinfo) | class |  | 9 | A player report as stored by the web API: who reported whom, on which server, its type and what moderators did. |
| [`PublicUserInfoResponse`](/game-api/types/assembly-api-models/publicuserinforesponse) | class | `UserInfo` | 2 |  |
| [`PurchaseResult`](/game-api/types/assembly-api-models/purchaseresult) | class |  | 4 | Alta API response to buying a shop item. |
| [`PurchaseResultType`](/game-api/types/assembly-api-models/purchaseresulttype) | enum |  | 8 | Outcome of a shop purchase, such as success, not enough shards, already owned or premium only. |
| [`Query`](/game-api/types/assembly-api-models/query) | class |  | 9 | One question on a web API form page (`Page.Queries`). |
| [`QueryMeta`](/game-api/types/assembly-api-models/querymeta) | class |  | 4 | Paging info for a list response from the API. |
| [`QueryResponse`](/game-api/types/assembly-api-models/queryresponse) | class |  | 2 | A user's answer to one form question, part of a `PageResponse`. |
| [`QuickCreateResponse`](/game-api/types/assembly-api-models/quickcreateresponse) | class |  | 2 | Response from the groups quick-create call: the new group and its server. |
| [`RecentPlayerInteractionInfo`](/game-api/types/assembly-api-models/recentplayerinteractioninfo) | class |  | 4 | API response for one recent interaction with another player: who, what kind, when and on which server. |
| [`RecentPlayerInteractionType`](/game-api/types/assembly-api-models/recentplayerinteractiontype) | enum |  | 3 | How you recently met another player, in the Alta API: combat, nearby or on the same server. |
| [`RegionInfo`](/game-api/types/assembly-api-models/regioninfo) | class |  | 4 | A server region from the Alta API. |
| [`ReportStatus`](/game-api/types/assembly-api-models/reportstatus) | enum |  | 3 | State of a player report: awaiting action, ignored, or acted on. |
| [`ReportType`](/game-api/types/assembly-api-models/reporttype) | enum |  | 3 | What a player report is for: griefing, harassment, or cheating and exploits. |
| [`ResolveComment`](/game-api/types/assembly-api-models/resolvecomment) | class |  | 2 |  |
| [`ServerJoinFailResult`](/game-api/types/assembly-api-models/serverjoinfailresult) | enum |  | 14 | Why the API refused a server join, such as not allowed, not online, banned, wrong game version or player limit reached. |
| [`ServerJoinResponse`](/game-api/types/assembly-api-models/serverjoinresponse) | class |  | 4 | Web API answer to whether a user may join a server, with ban details when they may not. The offline security client always returns allowed. |
| [`ServerJoinResult`](/game-api/types/assembly-api-models/serverjoinresult) | class |  | 9 | Web API reply to a request to join a game server: whether it's allowed, why not, and the connection details and token if so. |
| [`ServerJoinType`](/game-api/types/assembly-api-models/serverjointype) | enum |  | 7 | Who may join a server: group members, public, open group, supporters only, world instance or public group. `PrivateGroup` is the same value as `GroupMember`. |
| [`ServerOwnerType`](/game-api/types/assembly-api-models/serverownertype) | enum |  | 4 | Who owns a server: an individual, a group or the world. `GroupAdmins` is the same value as `Group`. |
| [`ServerSaveFileResponse`](/game-api/types/assembly-api-models/serversavefileresponse) | class |  | 1 |  |
| [`Settings`](/game-api/types/assembly-api-models/settings) | class |  | 2 | [Settings and files](../console-and-utilities/settings-and-files.md): Where the game keeps its settings and files, and the helpers it uses to read and write them. |
| [`ShopAccountInfo`](/game-api/types/assembly-api-models/shopaccountinfo) | class |  | 4 | Web API reply with a user's shop balance: shards, wallet money and supporter subscription status. |
| [`ShopAccountInfo.SubscriptionStatus`](/game-api/types/assembly-api-models/shopaccountinfo-subscriptionstatus) | class |  | 4 | Supporter subscription state inside `ShopAccountInfo.MemberStatus`. |
| [`ShopItemConfiguration`](/game-api/types/assembly-api-models/shopitemconfiguration) | class |  | 6 | One entry of Alta's shop configuration: an item's discount, shard price or promotion. |
| [`ShopPageConfiguration`](/game-api/types/assembly-api-models/shoppageconfiguration) | class |  | 5 | Layout data for one page of the in-game shop as sent by the web API: its subtitle, item slots and graphics. |
| [`ShopPageConfigurationWithBanner`](/game-api/types/assembly-api-models/shoppageconfigurationwithbanner) | class | `ShopPageConfiguration` | 2 | A shop page layout with a banner image taken from the game home configuration. |
| [`ShopTokenResponse`](/game-api/types/assembly-api-models/shoptokenresponse) | class |  | 4 | Web API model for a shop purchase token from the Xsolla payment provider. |
| [`ShopTransactionStatusResponse`](/game-api/types/assembly-api-models/shoptransactionstatusresponse) | class |  | 1 |  |
| [`ShutdownReason`](/game-api/types/assembly-api-models/shutdownreason) | class |  | 6 | Why a game server shut down, as a message and whether the shutdown was expected. |
| [`SimpleTokenResultResponse`](/game-api/types/assembly-api-models/simpletokenresultresponse) | class |  | 2 | Web API model that wraps a single JWT. |
| [`SingleTokenResponse`](/game-api/types/assembly-api-models/singletokenresponse) | class |  | 1 |  |
| [`SocialMediaInfo`](/game-api/types/assembly-api-models/socialmediainfo) | class |  | 2 | A social media link shown in the launcher, part of `LauncherGameInfoFull.SocialMedia`. |
| [`StartServerSessionResponse`](/game-api/types/assembly-api-models/startserversessionresponse) | class |  | 1 | API response when a server session is started. |
| [`StoreRotationGraphicConfig`](/game-api/types/assembly-api-models/storerotationgraphicconfig) | class |  | 3 | One graphic in the shop page's rotation (`ShopPageConfiguration.Graphics`). |
| [`SubscriptionRefreshResult`](/game-api/types/assembly-api-models/subscriptionrefreshresult) | class |  | 3 | Result of checking for supporter subscription rewards, from `CheckForSubscriptionRewardsAsync`. The offline shop returns an empty one. |
| [`SubscriptionRefreshResult.Reward`](/game-api/types/assembly-api-models/subscriptionrefreshresult-reward) | class |  | 2 | One reward granted when a supporter subscription is refreshed. |
| [`TokenResultResponse`](/game-api/types/assembly-api-models/tokenresultresponse) | class |  | 4 | Web API model holding the three JWTs a login returns. |
| [`Transitions`](/game-api/types/assembly-api-models/transitions) | class |  | 2 | A rule on a form `Page` that says which page comes next when its conditions are met. |
| [`UserInfo`](/game-api/types/assembly-api-models/userinfo) | class | `INamedEntity` | 7 | [Player](../networking/player.md#userinfo): Two are equal when their ids are equal, whatever the names. |
| [`UserInfoWithPermissions`](/game-api/types/assembly-api-models/userinfowithpermissions) | class | `UserInfo` | 5 | A user plus the policies (permissions) and verified flag read from their Alta JWT. |
| [`UserPresetDataInfo`](/game-api/types/assembly-api-models/userpresetdatainfo) | class |  | 5 | A saved cosmetics preset from the web API, packed as an array of `uint` values. |
| [`UserStatistics`](/game-api/types/assembly-api-models/userstatistics) | class |  | 2 | Account stats from the Alta API. |
| [`ValidateItemOwnershipResponse`](/game-api/types/assembly-api-models/validateitemownershipresponse) | class |  | 1 | Web API answer to `ValidateItemsOwnershipAsync`, which checks that a user owns a list of shop items. |
| [`ValidationResultModel`](/game-api/types/assembly-api-models/validationresultmodel) | class |  | 4 | List of field validation errors, attached to an `ApiError` for a bad request. |
| [`VersionMarker`](/game-api/types/assembly-api-models/versionmarker) | class |  | 2 | A named game version shown in the launcher, part of `LauncherGameInfoFull.VersionMarkers`. |

## Alta.Api.DataTransferModels.Models.Responses.DTOs.Responses

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FriendRequestResult`](/game-api/types/assembly-api-models/friendrequestresult) | class |  | 3 | The web API's reply to a friend request: what happened, plus the friendship records each way. |
| [`InstallationEventInfo`](/game-api/types/assembly-api-models/installationeventinfo) | class |  | 8 |  |

## Alta.Api.DataTransferModels.Models.Shared

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AnalyticsEventData`](/game-api/types/assembly-api-models/analyticseventdata) | class |  | 9 | One analytics event as sent to the Alta web API. |
| [`BanMethod`](/game-api/types/assembly-api-models/banmethod) | enum |  | 3 | Flags for what a ban applies to: the user id, the IP address, the device id or any mix. Passed to `SecurityApiClient.BanUserAsync`. |
| [`BanType`](/game-api/types/assembly-api-models/bantype) | enum |  | 3 | Scope of a ban in the web API: one server, global, or public servers (probably). |
| [`ChargeInfo`](/game-api/types/assembly-api-models/chargeinfo) | class |  | 2 | How much a subscription plan charges and how often. |
| [`ClientTokenConfig`](/game-api/types/assembly-api-models/clienttokenconfig) | class |  | 3 | OAuth client credentials sent to log in as a client rather than a user. `HighLevelApiClient.LoginViaOauth` builds one. |
| [`Duration`](/game-api/types/assembly-api-models/duration) | class |  | 3 | A length of time as a count and a unit (day, month or year), used for subscription trial and charge periods. |
| [`DurationType`](/game-api/types/assembly-api-models/durationtype) | enum |  | 3 | Unit of a `Duration`: day, month or year. |
| [`GameVersion`](/game-api/types/assembly-api-models/gameversion) | class | `IEquatable<GameVersion>` | 15 | A game build version: stream plus title, season, major, minor and changeset numbers. |
| [`InstanceInfo`](/game-api/types/assembly-api-models/instanceinfo) | class |  | 6 | A running server instance in Alta's hosting, as listed by `IInstancesClient`. |
| [`ItemCategory`](/game-api/types/assembly-api-models/itemcategory) | enum |  | 25 | Category of a cosmetic shop item, from body types and skin colours to clothing, accessories, outfits and bundles. Also set on each customization category. |
| [`ItemSetType`](/game-api/types/assembly-api-models/itemsettype) | enum |  | 2 | Kind of shop item set: an outfit or a bundle. Used when shop editors create or update sets. |
| [`OwnedShopItem`](/game-api/types/assembly-api-models/ownedshopitem) | class | `IIdentifiable` | 5 | A shop item a user owns, as returned by the web API. |
| [`PriceType`](/game-api/types/assembly-api-models/pricetype) | enum |  | 2 | Currency of a `ShopPrice`: US dollars or shards. |
| [`Region`](/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared) | class |  | 12 |  |
| [`ShopItem`](/game-api/types/assembly-api-models/shopitem) | class | `IIdentifiable` | 9 | An item in Alta's shop, such as a cosmetic or a set. |
| [`ShopItemDetailed`](/game-api/types/assembly-api-models/shopitemdetailed) | class | `ShopItem` | 4 | API model for a shop item with its full details: description, category, images and Xsolla id. |
| [`ShopItemDetailedForUser`](/game-api/types/assembly-api-models/shopitemdetailedforuser) | class | `ShopItemDetailed` | 2 | A shop item with details for one user: whether they own it and the price they would pay. |
| [`ShopItemIdentifier`](/game-api/types/assembly-api-models/shopitemidentifier) | class |  | 3 | Identifies a shop item by its numeric id and SKU. |
| [`ShopItemImage`](/game-api/types/assembly-api-models/shopitemimage) | class |  | 6 | An image for a shop item, with optional alternative formats. |
| [`ShopItemModificationRequest`](/game-api/types/assembly-api-models/shopitemmodificationrequest) | class | `IIdentifiable` | 14 |  |
| [`ShopItemSet`](/game-api/types/assembly-api-models/shopitemset) | class | `IIdentifiable` | 4 | API model for a set of shop items sold together under one SKU. |
| [`ShopItemSetModificationRequest`](/game-api/types/assembly-api-models/shopitemsetmodificationrequest) | class | `ShopItemModificationRequest` | 1 |  |
| [`ShopPrice`](/game-api/types/assembly-api-models/shopprice) | class |  | 3 | A price in the shop: an amount and its currency. Defaults to 1 shard. |
| [`SubscriptionPlanInfo`](/game-api/types/assembly-api-models/subscriptionplaninfo) | class |  | 7 | Web API model for a supporter subscription plan. |
| [`TownshipItemCategory`](/game-api/types/assembly-api-models/townshipitemcategory) | class | `IIdentifiable` | 6 |  |
| [`TownshipItemCategoryModificationRequest`](/game-api/types/assembly-api-models/townshipitemcategorymodificationrequest) | class | `TownshipItemCategory` | 1 |  |
| [`UserRoles`](/game-api/types/assembly-api-models/userroles) | class |  | 3 | Roles read from a user's identity token by `UserRolesUtility.GetRolesFromIdentityToken`. |
| [`UserSubscription`](/game-api/types/assembly-api-models/usersubscription) | class |  | 10 |  |
| [`UserSubscriptionInfoStatus`](/game-api/types/assembly-api-models/usersubscriptioninfostatus) | enum |  | 3 | State of a user's subscription: active, cancelled or non-renewing. |

## Alta.Api.DataTransferModels.Settings

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`GameServerSettings`](/game-api/types/assembly-api-models/gameserversettings) | static class |  | 8 |  |
| [`NamingSettings`](/game-api/types/assembly-api-models/namingsettings) | static class |  | 7 |  |

## Alta.Api.DataTransferModels.Utility

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Device`](/game-api/types/assembly-api-models/device) | static class |  | 2 |  |
| [`JsonUtility`](/game-api/types/assembly-api-models/jsonutility) | static class |  | 3 |  |
| [`JwtTokenHandler`](/game-api/types/assembly-api-models/jwttokenhandler) | static class |  | 1 |  |
| [`RetryHandler`](/game-api/types/assembly-api-models/retryhandler) | class | `HttpClientHandler` | 2 |  |
| [`UserRolesUtility`](/game-api/types/assembly-api-models/userrolesutility) | static class |  | 2 |  |
