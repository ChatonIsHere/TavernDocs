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
| [`CustomClaimTypes`](/mod/game-api/types/assembly-api-models/customclaimtypes) | static class |  | 13 | Names of the claims and policies found in Alta API JWT tokens. |

## Alta.Api.DataTransferModels.Converters

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ForceDefaultConverter`](/mod/game-api/types/assembly-api-models/forcedefaultconverter) | class | `JsonConverter` | 5 | A JSON converter that can neither read nor write, so Json.NET falls back to default handling for a property marked with it. Its methods all throw. |
| [`IPAddressJsonConverter`](/mod/game-api/types/assembly-api-models/ipaddressjsonconverter) | class | `JsonConverter` | 3 | JSON converter that writes an `IPAddress` as its string and parses it back. |
| [`JwtSecurityTokenJsonConverter`](/mod/game-api/types/assembly-api-models/jwtsecuritytokenjsonconverter) | class | `JsonConverter` | 3 | JSON converter that stores a `JwtSecurityToken` as its encoded string. |
| [`JWTUtility`](/mod/game-api/types/assembly-api-models/jwtutility) | static class |  | 1 | Builds a `JwtSecurityToken` from a raw token string without checking its signature. |
| [`RegionEndpointJsonConverter`](/mod/game-api/types/assembly-api-models/regionendpointjsonconverter) | class | `JsonConverter` | 3 | JSON converter that stores a `Region` as its short name. |
| [`SensitiveStringConverter`](/mod/game-api/types/assembly-api-models/sensitivestringconverter) | class | `JsonConverter` | 3 | JSON converter for strings that masks secrets: any value whose JSON path contains `password`, `token` or `nonce` is written as `*`. Meant for logging. |

## Alta.Api.DataTransferModels.Enums

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AssignableRoles`](/mod/game-api/types/assembly-api-models/assignableroles) | enum |  | 1 | Account roles the Alta API lets you assign. Only `PreAlphaPlayer`. |
| [`GameServerStatus`](/mod/game-api/types/assembly-api-models/gameserverstatus) | enum |  | 3 | Online state of a game server in the Alta API: forced offline, offline or online. |
| [`GameServerWebsocketResponseType`](/mod/game-api/types/assembly-api-models/gameserverwebsocketresponsetype) | enum |  | 3 | Kind of `GameServerWebsocketResponse` sent over the game server websocket: system message, subscription event or command result. |
| [`ImageType`](/mod/game-api/types/assembly-api-models/imagetype) | enum |  | 5 | Which slot a shop item image fills (primary, hover, carousel, detailed or gallery). Used by `LowLevelApiClient.AddImageToItemAsync`. |
| [`PermissionType`](/mod/game-api/types/assembly-api-models/permissiontype) | enum |  | 8 | Flags for what a user may do with an Alta web API form: edit, respond, view responses or comments, comment, resolve and unresolve. |
| [`Region`](/mod/game-api/types/assembly-api-models/region) | enum |  | 2 | Which Alta platform region an account belongs to: Global or China. |
| [`ServerType`](/mod/game-api/types/assembly-api-models/servertype) | enum |  | 2 | Alta server type: `Normal` or `World`. |
| [`ShopTransactionStatus`](/mod/game-api/types/assembly-api-models/shoptransactionstatus) | enum |  | 11 | State of an Alta shop purchase, from started and processing to successful or refunded, with values for each kind of failure. |

## Alta.Api.DataTransferModels.Enums.Alta.WebApi.Models

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FormQueryType`](/mod/game-api/types/assembly-api-models/formquerytype) | enum |  | 11 | Kind of question in an Alta web API form, such as boolean, text, rating, choice, or a pick of an item, server or player. |

## Alta.Api.DataTransferModels.Errors

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ApiError`](/mod/game-api/types/assembly-api-models/apierror) | class |  | 11 | Error body returned by the Alta web API: message, error code, request validation errors and optional context. |
| [`ErrorCode`](/mod/game-api/types/assembly-api-models/errorcode) | enum |  | 60 | Error codes the Alta web API returns, covering shop, accounts, bans, groups, servers and login failures. |
| [`NotFoundApiError`](/mod/game-api/types/assembly-api-models/notfoundapierror) | class | `ApiError` | 1 | An `ApiError` preset for a missing object: message `Not found`, code `ObjectNotFound`. |
| [`ValidationError`](/mod/game-api/types/assembly-api-models/validationerror) | class |  | 5 | One field-level validation error in an API error response. |

## Alta.Api.DataTransferModels.Exceptions

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ApiErrorException`](/mod/game-api/types/assembly-api-models/apierrorexception) | class | `Exception` | 4 | Exception that carries an `ApiError` and an HTTP status code (500 unless given). |
| [`AuthorizationException`](/mod/game-api/types/assembly-api-models/authorizationexception) | class | `Exception` | 3 | Exception for a failed authorization in the API client. |
| [`ForbiddenException`](/mod/game-api/types/assembly-api-models/forbiddenexception) | class | `Exception` | 3 | Thrown when an API call returns 403 Forbidden. |
| [`HttpException`](/mod/game-api/types/assembly-api-models/httpexception) | class | `Exception` | 4 | Thrown when an API call fails with an HTTP status other than 400 or 403. Carries the status and the response. |
| [`OfflineException`](/mod/game-api/types/assembly-api-models/offlineexception) | class | `Exception` | 1 | Thrown when an API method is called while the client is in offline mode. The message names the calling method. |

## Alta.Api.DataTransferModels.Extensions

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`EnumerableExtensions`](/mod/game-api/types/assembly-api-models/enumerableextensions) | static class |  | 6 | Small collection helpers used by the API models. |
| [`GuidExtensions`](/mod/game-api/types/assembly-api-models/guidextensions) | static class |  | 3 | Helpers for turning GUIDs into short strings. |
| [`HttpClientExtensions`](/mod/game-api/types/assembly-api-models/httpclientextensions) | static class |  | 7 | `HttpClient` helpers for the API client: JSON post, put, patch and delete, with debug logging of requests and responses. |
| [`HttpClientExtensions.JsonContent`](/mod/game-api/types/assembly-api-models/httpclientextensions-jsoncontent) | class | `StringContent` | 1 | HTTP string content holding an object serialized to UTF-8 JSON. Used by the JSON post, put, patch and delete helpers. |
| [`HttpContentExtensions`](/mod/game-api/types/assembly-api-models/httpcontentextensions) | static class |  | 1 | Reads HTTP response content as JSON. |
| [`HttpResponseExtensionMethods`](/mod/game-api/types/assembly-api-models/httpresponseextensionmethods) | static class |  | 4 | Turns API responses into results or exceptions, and logs them. |
| [`QueryExtensions`](/mod/game-api/types/assembly-api-models/queryextensions) | static class |  | 1 | Builds URL query strings. |
| [`WebRequestExtensions`](/mod/game-api/types/assembly-api-models/webrequestextensions) | static class |  | 3 | Turns request bodies and response headers into readable strings for the API client's logs, hiding secrets. |

## Alta.Api.DataTransferModels.Helpers

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ShopHelper`](/mod/game-api/types/assembly-api-models/shophelper) | static class |  | 3 | Helpers for shop SKUs. Item sets are told apart from single items by a `set_` prefix on the SKU. |

## Alta.Api.DataTransferModels.Interfaces

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`IIdentifiable`](/mod/game-api/types/assembly-api-models/iidentifiable) | interface |  | 1 | An API model with an integer database id. |

## Alta.Api.DataTransferModels.Models.Agones

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AgonesAllocationFailureType`](/mod/game-api/types/assembly-api-models/agonesallocationfailuretype) | enum |  | 5 | Why allocating an Agones game server failed: no access to the cluster, web request failed, could not allocate, or server locked. |
| [`AgonesGameServer`](/mod/game-api/types/assembly-api-models/agonesgameserver) | class | `AgonesObject` | 3 | An Agones `GameServer` Kubernetes object, as sent to or read from the Agones API. |
| [`AgonesObject`](/mod/game-api/types/assembly-api-models/agonesobject) | abstract class |  | 6 | Base for Agones (Kubernetes game server manager) objects as the Alta API reads and writes them in JSON. |
| [`AgonesServerList`](/mod/game-api/types/assembly-api-models/agonesserverlist) | class |  | 1 | A list of Agones game servers as returned by Kubernetes. |
| [`AllocationResult`](/mod/game-api/types/assembly-api-models/allocationresult) | class |  | 4 | Result of asking Agones (the game server hosting system) for a server: whether one was allocated and how to connect. |
| [`DictionaryExtension`](/mod/game-api/types/assembly-api-models/dictionaryextension) | static class |  | 1 | Dictionary lookup helper used with the Agones models. |
| [`GameServerAllocation`](/mod/game-api/types/assembly-api-models/gameserverallocation) | class | `AgonesObject` | 2 | An Agones `GameServerAllocation` request, which asks Agones for a ready game server. |
| [`GameServerAllocationSpec`](/mod/game-api/types/assembly-api-models/gameserverallocationspec) | class |  | 4 | Spec of an Agones game server allocation request: which servers may be picked and metadata to set on the chosen one. |
| [`GameServerAllocationSpec.RequiredSpec`](/mod/game-api/types/assembly-api-models/gameserverallocationspec-requiredspec) | class |  | 1 | Label selector in an Agones game server allocation request. |
| [`GameServerSpec`](/mod/game-api/types/assembly-api-models/gameserverspec) | class |  | 2 | Spec of an Agones game server: its ports and pod template. |
| [`GameServerSpec.GameServerTemplate`](/mod/game-api/types/assembly-api-models/gameserverspec-gameservertemplate) | class |  | 1 | Pod template inside an Agones game server spec. |
| [`GameServerSpec.GameServerTemplate.GameServerTemplateSpec`](/mod/game-api/types/assembly-api-models/gameserverspec-gameservertemplate-gameservertemplatespec) | class |  | 1 | Pod spec inside an Agones game server template. |
| [`GameServerSpec.GameServerTemplate.GameServerTemplateSpec.ContainerConfig`](/mod/game-api/types/assembly-api-models/gameserverspec-gameservertemplate-gameservertemplatespec-containerconfig) | class |  | 2 | One container in an Agones game server pod. |
| [`Metadata`](/mod/game-api/types/assembly-api-models/metadata) | class |  | 7 | Kubernetes object metadata as used in Agones requests and responses. |
| [`PortConfig`](/mod/game-api/types/assembly-api-models/portconfig) | class |  | 2 | A named port in an Agones game server's status. |
| [`SpecPortConfig`](/mod/game-api/types/assembly-api-models/specportconfig) | class |  | 4 | A port in an Agones game server spec. |
| [`Status`](/mod/game-api/types/assembly-api-models/status) | class |  | 5 | Status of an Agones game server: its state, address and ports. |
| [`Status.GameServerState`](/mod/game-api/types/assembly-api-models/status-gameserverstate) | enum |  | 11 | Lifecycle state of an Agones game server, from `Creating` through `Ready` and `Allocated` to `Shutdown` or `Unhealthy`. |

## Alta.Api.DataTransferModels.Models.Requests

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AccountLinkData`](/mod/game-api/types/assembly-api-models/accountlinkdata) | class |  | 3 | Platform account details sent when registering an Oculus or Pico user, so the new Alta account is linked to it. |
| [`AccountRequestBase`](/mod/game-api/types/assembly-api-models/accountrequestbase) | class |  | 3 | Web API request body for Oculus account linking: the platform account ID, its proof token and the region. Built by `OculusClient`. |
| [`AllocationRequest`](/mod/game-api/types/assembly-api-models/allocationrequest) | class |  | 1 | Body of the Alta web API call that allocates a server for migration (`AllocateServerForMigration`). |
| [`BanRequest`](/mod/game-api/types/assembly-api-models/banrequest) | class |  | 7 | Body of an Alta web API request to ban a user. |
| [`BooleanRequest`](/mod/game-api/types/assembly-api-models/booleanrequest) | class |  | 1 | Request body holding a single true or false, sent as `value`. |
| [`BufferChangeRequest`](/mod/game-api/types/assembly-api-models/bufferchangerequest) | class |  | 3 | Request body for `LowLevelApiClient.RequestBufferChange`, which asked Alta's API to change the number of spare servers kept for a fleet and region. |
| [`ChangeBalanceRequest`](/mod/game-api/types/assembly-api-models/changebalancerequest) | class |  | 1 | Request body for changing a balance by an amount, probably a user's virtual currency. |
| [`ChangePasswordRequest`](/mod/game-api/types/assembly-api-models/changepasswordrequest) | class |  | 4 | Body of an Alta web API request to change the account password. Sends hashes, not plain passwords. |
| [`ChangeUsernameRequest`](/mod/game-api/types/assembly-api-models/changeusernamerequest) | class |  | 4 | Body of an Alta web API request to change the account's username, confirmed with the password hash. |
| [`ConsoleCommandRequest`](/mod/game-api/types/assembly-api-models/consolecommandrequest) | class |  | 1 | Request body carrying one console command to run, probably on a game server. |
| [`CreateGroupAndServerRequest`](/mod/game-api/types/assembly-api-models/creategroupandserverrequest) | class | `QuickCreateRequest` | 4 | Body for the API's groups quick-create call, which makes a group and its server together. The launch region comes from `QuickCreateRequest`. |
| [`CreateGroupRequest`](/mod/game-api/types/assembly-api-models/creategrouprequest) | class |  | 3 | Request body for creating a group. |
| [`CreateGroupServerRequest`](/mod/game-api/types/assembly-api-models/creategroupserverrequest) | class |  | 3 | Request body for creating a game server for a group. |
| [`CreatePresetRequest`](/mod/game-api/types/assembly-api-models/createpresetrequest) | class |  | 3 | Body of the Alta web API call that saves a cosmetic preset (`CreateCosmeticPreset`). |
| [`CreateReportRequest`](/mod/game-api/types/assembly-api-models/createreportrequest) | class |  | 3 | Body of an Alta web API request to report a player. |
| [`DeleteItemRequest`](/mod/game-api/types/assembly-api-models/deleteitemrequest) | class |  | 1 | Request body naming a shop item to delete. |
| [`EditGroupRequest`](/mod/game-api/types/assembly-api-models/editgrouprequest) | class |  | 5 | Body for updating a group's details on the Alta web API. |
| [`EditGroupRoleRequest`](/mod/game-api/types/assembly-api-models/editgrouprolerequest) | class |  | 4 | Request body for changing a group role. |
| [`EmailAndUsernameRequest`](/mod/game-api/types/assembly-api-models/emailandusernamerequest) | class |  | 2 | Request body holding an email and a username. |
| [`EmailValidationRequest`](/mod/game-api/types/assembly-api-models/emailvalidationrequest) | class |  | 1 | Body of an Alta web API request to check an email address. |
| [`FutureUserActionCreateRequest`](/mod/game-api/types/assembly-api-models/futureuseractioncreaterequest) | class |  | 4 | Body of the Alta web API call that queues an action to apply to a user later (`CreateFutureUserActions`). |
| [`FutureUserActionType`](/mod/game-api/types/assembly-api-models/futureuseractiontype) | enum |  | 2 | Kind of future user action stored for an outside user: add a friend or invite to a group. |
| [`GameServerCreateRequest`](/mod/game-api/types/assembly-api-models/gameservercreaterequest) | class |  | 9 | Request body for creating a game server through Alta's web API. |
| [`GameServerWebsocketRequest`](/mod/game-api/types/assembly-api-models/gameserverwebsocketrequest) | struct |  | 2 | A command sent to a game server over its WebSocket, with an id to match the reply to. |
| [`GenerateSignUpCodeRequest`](/mod/game-api/types/assembly-api-models/generatesignupcoderequest) | class |  | 5 | Body of an Alta web API request to generate a sign-up code for someone. |
| [`GetShardsTokenRequest`](/mod/game-api/types/assembly-api-models/getshardstokenrequest) | class |  | 2 | Request body for getting a payment token to buy a shards package. |
| [`GetSubscriptionTokenRequest`](/mod/game-api/types/assembly-api-models/getsubscriptiontokenrequest) | class |  | 1 | Request body for getting a payment token for a subscription plan. |
| [`GiveRoleRequest`](/mod/game-api/types/assembly-api-models/giverolerequest) | class |  | 1 | Body of an Alta web API request to give a user a role. |
| [`GroupPermissionsCheckRequest`](/mod/game-api/types/assembly-api-models/grouppermissionscheckrequest) | class |  | 1 | Body for asking the API whether a user has permissions in a group or on a server. |
| [`GroupRoleRequest`](/mod/game-api/types/assembly-api-models/grouprolerequest) | class |  | 2 | Request body for a group role with a name and permissions. |
| [`IdentityTokenRequest`](/mod/game-api/types/assembly-api-models/identitytokenrequest) | class |  | 1 | Body of the Alta web API call that generates an identity token (`GenerateIdentityTokenAsync`). |
| [`IdentityTokenValidationRequest`](/mod/game-api/types/assembly-api-models/identitytokenvalidationrequest) | class |  | 3 | Body of an Alta web API request to check an identity token. |
| [`InstallationEventRequest`](/mod/game-api/types/assembly-api-models/installationeventrequest) | class |  | 5 | Request body reporting an install or update event to the API, probably from the launcher. |
| [`ItemDeleteRequest`](/mod/game-api/types/assembly-api-models/itemdeleterequest) | class | `ItemPurchaseRequest` | 1 | An `ItemPurchaseRequest` with a reason, used to remove an item. |
| [`ItemPurchaseRequest`](/mod/game-api/types/assembly-api-models/itempurchaserequest) | class | `PurchaseRequest` | 1 | Request body for buying a shop item with a payment method. |
| [`ItemSetRequest`](/mod/game-api/types/assembly-api-models/itemsetrequest) | class |  | 3 | Request body for creating or updating a shop item set (a bundle) through Alta's web API. |
| [`JoinServerRequest`](/mod/game-api/types/assembly-api-models/joinserverrequest) | class |  | 5 | Body for joining a server or connecting the console through the Alta web API. |
| [`LaunchInstanceRequest`](/mod/game-api/types/assembly-api-models/launchinstancerequest) | class |  | 5 | Request body for launching a game server instance. |
| [`LaunchLocalServerRequest`](/mod/game-api/types/assembly-api-models/launchlocalserverrequest) | class |  | 8 | Body of the Alta web API call a locally run server makes to start a session (`StartLocalServer`), with its addresses and ports. |
| [`LinkAccountRequest`](/mod/game-api/types/assembly-api-models/linkaccountrequest) | class | `AccountRequestBase` | 2 | Body of an Alta web API request to link an outside account to an Alta user. |
| [`LoginRequest`](/mod/game-api/types/assembly-api-models/loginrequest) | class | `LoginRequestBase` | 3 | Body of an Alta web API login with a username, password hash and device id. |
| [`LoginRequestBase`](/mod/game-api/types/assembly-api-models/loginrequestbase) | class | `RefreshRequest` | 3 | Base for login request bodies: a password hash plus the device id and platform target from `RefreshRequest`. |
| [`LoginViaLinkedAccountRequest`](/mod/game-api/types/assembly-api-models/loginvialinkedaccountrequest) | class | `AccountRequestBase` | 1 | Body for logging in with a linked platform account (used for Oculus and Pico). |
| [`LoginWithEmailRequest`](/mod/game-api/types/assembly-api-models/loginwithemailrequest) | class | `LoginRequestBase` | 3 | Body of an Alta web API login with an email, password hash and device id. |
| [`LogoutRequest`](/mod/game-api/types/assembly-api-models/logoutrequest) | class |  | 3 | Request body for logging out, which hands back the refresh token. |
| [`MatchMakingRequirements`](/mod/game-api/types/assembly-api-models/matchmakingrequirements) | class |  | 2 | Body of the Alta web API call that picks the best server to join (`GetBestServer`). |
| [`MigrateWebsocketRequest`](/mod/game-api/types/assembly-api-models/migratewebsocketrequest) | class |  | 1 | Request body carrying a token for moving a WebSocket session, probably to another connection. |
| [`ModifyReportRequest`](/mod/game-api/types/assembly-api-models/modifyreportrequest) | class |  | 1 | Body of an Alta web API request to change a report's status. |
| [`OculusFriendsList`](/mod/game-api/types/assembly-api-models/oculusfriendslist) | class |  | 1 | Body of an Alta web API request that sends the user's Oculus friends. |
| [`PurchaseCouponRequest`](/mod/game-api/types/assembly-api-models/purchasecouponrequest) | class |  | 2 | Request body for buying coupons for a currency package. |
| [`PurchaseItemTokenRequest`](/mod/game-api/types/assembly-api-models/purchaseitemtokenrequest) | class |  | 2 | Alta web API request body for buying a shop item. |
| [`PurchaseRequest`](/mod/game-api/types/assembly-api-models/purchaserequest) | class |  | 1 | Base request body for a purchase: which saved payment method to charge. |
| [`QuickCreateRequest`](/mod/game-api/types/assembly-api-models/quickcreaterequest) | class |  | 1 | Request body for quickly creating a server in a region. |
| [`RecentPlayerInteractionRequest`](/mod/game-api/types/assembly-api-models/recentplayerinteractionrequest) | class |  | 2 | One recent player interaction sent to the Alta web API. Queued through `ApiBatchRequestService` and sent in batches. |
| [`RedeemCouponRequest`](/mod/game-api/types/assembly-api-models/redeemcouponrequest) | class |  | 1 | Request body for redeeming a coupon code. |
| [`RefreshRequest`](/mod/game-api/types/assembly-api-models/refreshrequest) | class |  | 2 | Request body for refreshing login tokens, and the base of the login requests. |
| [`RegisterRequest`](/mod/game-api/types/assembly-api-models/registerrequest) | class | `EmailAndUsernameRequest`, `IRequest<UserInfo>`, `IBaseRequest` | 4 | Body of an Alta web API request to create an account, with optional Oculus or Pico links. |
| [`RequestPasswordResetRequest`](/mod/game-api/types/assembly-api-models/requestpasswordresetrequest) | class |  | 3 | Body of an Alta web API request to send a password reset email. |
| [`RequestShopTokenRequest`](/mod/game-api/types/assembly-api-models/requestshoptokenrequest) | class |  | 0 | Empty body of the Alta web API call that gets a shop token (`GetShopTokenAsync`). |
| [`ResetPasswordRequest`](/mod/game-api/types/assembly-api-models/resetpasswordrequest) | class |  | 2 | Body of an Alta web API request that sets a new password with a reset token. |
| [`SearchByUsernameRequest`](/mod/game-api/types/assembly-api-models/searchbyusernamerequest) | class |  | 1 | Body of an Alta web API request to find users by username. |
| [`SendMessageRequest`](/mod/game-api/types/assembly-api-models/sendmessagerequest) | class |  | 2 | Request body for sending a message to a list of users. |
| [`ServerSaveFileRequest`](/mod/game-api/types/assembly-api-models/serversavefilerequest) | class |  | 1 | Request body asking for a server's save files by path; the matching answer is probably a `ServerSaveFileResponse`. |
| [`ServerStatusRequest`](/mod/game-api/types/assembly-api-models/serverstatusrequest) | class |  | 1 | Request body for setting a game server's status. |
| [`SetGroupPermissionsRequest`](/mod/game-api/types/assembly-api-models/setgrouppermissionsrequest) | class |  | 1 | Request body for setting group permissions with the older Member, Moderator and Admin flags. |
| [`SetGroupPermissionsRequest.OldGroupPermission`](/mod/game-api/types/assembly-api-models/setgrouppermissionsrequest-oldgrouppermission) | enum |  | 3 | Old flag-style group permission levels (member, moderator, admin), still used by `GroupMemberInfo.Permissions`. |
| [`SetServersOnlinePlayersRequest`](/mod/game-api/types/assembly-api-models/setserversonlineplayersrequest) | class |  | 2 | Body of the Alta web API call a server makes to report who is online (`SetOnlinePlayers`). |
| [`ShopItemsRequest`](/mod/game-api/types/assembly-api-models/shopitemsrequest) | class |  | 1 | Request body listing shop item ids. |
| [`StatProgress`](/mod/game-api/types/assembly-api-models/statprogress) | class |  | 3 | Progress on one achievement action stat, read from and sent to the web API by the achievement client. |
| [`StopInstanceRequest`](/mod/game-api/types/assembly-api-models/stopinstancerequest) | class |  | 1 | Request body for stopping a game server instance. |
| [`UnlinkAccountRequest`](/mod/game-api/types/assembly-api-models/unlinkaccountrequest) | class |  | 1 | Body of an Alta web API request to unlink an outside account. |
| [`UpdateAchievementRequest`](/mod/game-api/types/assembly-api-models/updateachievementrequest) | class |  | 2 | Body for updating one achievement for a user on the Alta web API. |
| [`UpdateActionStatRequest`](/mod/game-api/types/assembly-api-models/updateactionstatrequest) | class |  | 3 | Alta web API request body for updating a user's action stats. |
| [`UpdateUserInfoRequest`](/mod/game-api/types/assembly-api-models/updateuserinforequest) | class | `EmailAndUsernameRequest` | 0 | Request body for changing a user's email and username. Adds nothing to `EmailAndUsernameRequest`. |
| [`UsernameValidationRequest`](/mod/game-api/types/assembly-api-models/usernamevalidationrequest) | class |  | 1 | Body of an Alta web API request to check a username. |
| [`UserType`](/mod/game-api/types/assembly-api-models/usertype) | enum |  | 3 | Which kind of account a user id belongs to: Alta, Oculus or Discord. |
| [`ValidateItemOwnershipRequest`](/mod/game-api/types/assembly-api-models/validateitemownershiprequest) | class |  | 3 | Body of an Alta web API request to check whether a user owns some shop items. |
| [`ValidateUsersJoinRequest`](/mod/game-api/types/assembly-api-models/validateusersjoinrequest) | class |  | 4 | Request body for checking that a player may join a game server, probably sent by the server when someone connects. |
| [`VerificationEmailRequest`](/mod/game-api/types/assembly-api-models/verificationemailrequest) | class |  | 1 | Body for sending a user a verification email. |
| [`VerifyUserRequest`](/mod/game-api/types/assembly-api-models/verifyuserrequest) | class |  | 3 | Body of an Alta web API request to verify an account with a token. |
| [`VirtualCurrencyPurchaseRequest`](/mod/game-api/types/assembly-api-models/virtualcurrencypurchaserequest) | class | `PurchaseRequest` | 1 | Request body for buying a virtual currency package with a payment method. |
| [`VoiceChatTokenRequest`](/mod/game-api/types/assembly-api-models/voicechattokenrequest) | class |  | 2 | Body of an Alta web API request for a voice chat token, to log in or to join a server's channel. |
| [`VoiceChatTokenRequestType`](/mod/game-api/types/assembly-api-models/voicechattokenrequesttype) | enum |  | 2 | What a voice chat token is for: `Login` or `JoinChannel`. |
| [`WebhookPayload`](/mod/game-api/types/assembly-api-models/webhookpayload) | class |  | 1 | Body of a webhook call carrying one message. |
| [`WebsocketMessageBody`](/mod/game-api/types/assembly-api-models/websocketmessagebody) | class |  | 5 | A message sent to the Alta API over its WebSocket: an HTTP-style request with method, path and JSON content. |
| [`WebsocketResponseBody`](/mod/game-api/types/assembly-api-models/websocketresponsebody) | class |  | 5 | A message received from the Alta API over its WebSocket, either a reply or a subscription event. |

## Alta.Api.DataTransferModels.Models.Requests.DTOs.Requests

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FriendRequestResponse`](/mod/game-api/types/assembly-api-models/friendrequestresponse) | class |  | 1 | Request body answering a friend request. |

## Alta.Api.DataTransferModels.Models.Responses

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AltaApiResponse<T>`](/mod/game-api/types/assembly-api-models/altaapiresponse-t) | class |  | 3 | A list response from the Alta API: the items plus query metadata. |
| [`BanInfo`](/mod/game-api/types/assembly-api-models/baninfo) | class |  | 10 | API model for a ban on a user, IP address or device, with its reason, scope and end time. |
| [`BooleanResponse`](/mod/game-api/types/assembly-api-models/booleanresponse) | class |  | 2 | A web API response that wraps a single true or false value. |
| [`ClaimOculusItemsResponse`](/mod/game-api/types/assembly-api-models/claimoculusitemsresponse) | class |  | 2 | Alta web API reply to claiming all of a user's Oculus purchases (`ConsumeAllOculusPurchases`). |
| [`Comment`](/mod/game-api/types/assembly-api-models/comment) | class |  | 7 | A comment from the Alta web API, with its author and whether it is hidden or posted by the system. |
| [`Condition`](/mod/game-api/types/assembly-api-models/condition) | class |  | 3 | A condition from the Alta web API on a query (probably a form question), with allowed and blocked answers. |
| [`ConnectionInfo`](/mod/game-api/types/assembly-api-models/connectioninfo) | class |  | 9 | [Server settings](../networking/server-settings.md) |
| [`CouponRedeemedResponse`](/mod/game-api/types/assembly-api-models/couponredeemedresponse) | class |  | 3 | The API's answer after a coupon is redeemed: what it gave. |
| [`CreateCheckResponse`](/mod/game-api/types/assembly-api-models/createcheckresponse) | class |  | 3 | Alta web API reply to `CanCreateGroups`: how many more groups the user may create on each platform. |
| [`DiscordSupporterRoleVerificationResults`](/mod/game-api/types/assembly-api-models/discordsupporterroleverificationresults) | class |  | 3 | Result of checking supporters against the Discord supporter role: who gained it and who lost it. |
| [`FleetInfo`](/mod/game-api/types/assembly-api-models/fleetinfo) | class |  | 4 | Info about a fleet of game servers. |
| [`Form`](/mod/game-api/types/assembly-api-models/form) | class |  | 10 | A form served by the Alta API, with its pages of questions and the dates it's open. |
| [`FormResponse`](/mod/game-api/types/assembly-api-models/formresponse) | class | `FormResponseSummary` | 4 | A full submitted answer to a `Form`: the answers per page plus staff comments. |
| [`FormResponseSummary`](/mod/game-api/types/assembly-api-models/formresponsesummary) | class |  | 6 | Short info about a submitted form response, without the answers. |
| [`FriendRequestedType`](/mod/game-api/types/assembly-api-models/friendrequestedtype) | enum |  | 4 | Outcome of a friend request: befriended, request sent, already friends or already requested. |
| [`FriendshipInfo`](/mod/game-api/types/assembly-api-models/friendshipinfo) | class | `UserInfo` | 3 | A user returned by the Alta web API's friends endpoints, with when the friendship started and its state. |
| [`FriendshipType`](/mod/game-api/types/assembly-api-models/friendshiptype) | enum |  | 4 | State of a friendship between two accounts in the Alta API: none, waiting for reply, requested or accepted. |
| [`GameHomeConfiguration`](/mod/game-api/types/assembly-api-models/gamehomeconfiguration) | class |  | 1 | API response describing what the game's home screen shows. |
| [`GameServerInfo`](/mod/game-api/types/assembly-api-models/gameserverinfo) | class | `GameServerInfoMinimal` | 30 | [Server settings](../networking/server-settings.md) |
| [`GameServerInfoMinimal`](/mod/game-api/types/assembly-api-models/gameserverinfominimal) | class | `INamedEntity` | 2 | A game server's id and name only, as Alta's web API returned in short lists. |
| [`GameServerWebsocketResponse`](/mod/game-api/types/assembly-api-models/gameserverwebsocketresponse) | class |  | 6 | A message from a game server over its WebSocket: a system message, a subscription event or a command result. Time-stamped (UTC) when made. |
| [`GiftResult`](/mod/game-api/types/assembly-api-models/giftresult) | class |  | 3 | Alta API response to gifting a shop item to someone. |
| [`GiftResultType`](/mod/game-api/types/assembly-api-models/giftresulttype) | enum |  | 3 | Result of giving a shop item: `Failed`, `AlreadyOwned` or `Success`. |
| [`GiftRewardComment`](/mod/game-api/types/assembly-api-models/giftrewardcomment) | class |  | 1 | A body holding one comment, used when giving a reward. |
| [`GroupInfo`](/mod/game-api/types/assembly-api-models/groupinfo) | class |  | 8 | API model with the basic public info for a group (server group): name, description, type, member count and tags. |
| [`GroupInfoDetailed`](/mod/game-api/types/assembly-api-models/groupinfodetailed) | class | `GroupInfo` | 3 | A group's info from the web API with its servers and roles included. |
| [`GroupMemberInfo`](/mod/game-api/types/assembly-api-models/groupmemberinfo) | class |  | 10 | API response describing one member of a group (server group), with their role and permissions. |
| [`GroupMemberType`](/mod/game-api/types/assembly-api-models/groupmembertype) | enum |  | 6 | A user's state in a group: banned, requested to join, invited, accepted (a member), left or kicked. |
| [`GroupPermissions`](/mod/game-api/types/assembly-api-models/grouppermissions) | enum |  | 12 | Permissions a role can grant in an Alta group (server community): inviting, banning, kicking, managing servers, console access, roles, reports and saves. |
| [`GroupRoleIdentifier`](/mod/game-api/types/assembly-api-models/grouproleidentifier) | enum |  | 4 | Built-in group role ids: Default, Member, Moderator and Owner. |
| [`GroupRoleInfo`](/mod/game-api/types/assembly-api-models/grouproleinfo) | class |  | 9 | A role in a group: id, name, colour, permissions and allowed console commands. Constants give the fixed ids of the built-in roles. |
| [`GroupServerInfo`](/mod/game-api/types/assembly-api-models/groupserverinfo) | class |  | 4 | Web API model for one game server as listed inside a group's details (`GroupInfoDetailed.Servers`). |
| [`GroupType`](/mod/game-api/types/assembly-api-models/grouptype) | enum |  | 3 | Group join type: Open, Public or Private. Group discovery lists the public and open ones. |
| [`GroupTypeExtensions`](/mod/game-api/types/assembly-api-models/grouptypeextensions) | static class |  | 1 | Maps a group's type to how players join its servers. |
| [`HomeElement`](/mod/game-api/types/assembly-api-models/homeelement) | class |  | 8 | Web API model for one element of the game's home screen layout (`GameHomeConfiguration.Elements`). |
| [`HomeElementPage`](/mod/game-api/types/assembly-api-models/homeelementpage) | class |  | 3 | Web API model for one page inside a `HomeElement` on the home screen. |
| [`IConvertableModel<TModel>`](/mod/game-api/types/assembly-api-models/iconvertablemodel-tmodel) | interface |  | 1 | A response model that can turn itself into another model type. |
| [`INamedEntity`](/mod/game-api/types/assembly-api-models/inamedentity) | interface |  | 2 | Anything from the web API with a numeric ID and a name, such as `UserInfo` and `GameServerInfoMinimal`. |
| [`InvitedGroupInfo`](/mod/game-api/types/assembly-api-models/invitedgroupinfo) | class | `GroupInfoDetailed` | 1 | Group details from the Alta web API for a group the user was invited to. |
| [`JoinedGroupInfo`](/mod/game-api/types/assembly-api-models/joinedgroupinfo) | class |  | 2 | Web API model for a group the user has joined, paired with their membership. Returned by `LowLevelApiClient.GetJoinedGroups`. |
| [`LauncherGameInfoFull`](/mod/game-api/types/assembly-api-models/launchergameinfofull) | class | `LauncherGameInfoShort` | 9 | Full details of a game for Alta's launcher, from `LowLevelApiClient.GetLauncherGame`. |
| [`LauncherGameInfoShort`](/mod/game-api/types/assembly-api-models/launchergameinfoshort) | class |  | 6 | Short details of a game for the list in Alta's launcher. `LauncherGameInfoFull` extends it. |
| [`LinkedAccountInfo`](/mod/game-api/types/assembly-api-models/linkedaccountinfo) | class |  | 4 | An external account linked to a user, returned by the web API's Discord account endpoints. |
| [`MembershipStatusResponse`](/mod/game-api/types/assembly-api-models/membershipstatusresponse) | class |  | 2 | Whether a user has a supporter membership, from `LowLevelApiClient.GetMembershipStatus`. |
| [`MigrationDetailsResponse`](/mod/game-api/types/assembly-api-models/migrationdetailsresponse) | class |  | 3 | A server's latest save storage (EFS) migration, from `LowLevelApiClient.GetLatestEfsMigrationForServer`. |
| [`NewComment`](/mod/game-api/types/assembly-api-models/newcomment) | class |  | 2 | Body for adding a comment, which may be hidden. |
| [`OculusFriendInfo`](/mod/game-api/types/assembly-api-models/oculusfriendinfo) | class | `FriendshipInfo` | 1 | A friendship returned for an Oculus friends list, from `LowLevelApiClient.GetOculusFriendships`. |
| [`Option`](/mod/game-api/types/assembly-api-models/option) | class |  | 4 | One choice in a web API form question (`Query.Options`). |
| [`Page`](/mod/game-api/types/assembly-api-models/page) | class |  | 3 | One page of a web API form (`Form.Pages`): its questions and the rules for which page comes next. |
| [`PageResponse`](/mod/game-api/types/assembly-api-models/pageresponse) | class |  | 2 | A user's answers for one form page, part of a `FormResponse`. |
| [`PatchNotes`](/mod/game-api/types/assembly-api-models/patchnotes) | class |  | 2 | Web API model for the patch notes of a game version, part of `LauncherGameInfoFull`. |
| [`PersonalUserInfoResponse`](/mod/game-api/types/assembly-api-models/personaluserinforesponse) | class | `PublicUserInfoResponse` | 3 | A user's public info plus their private name and email, from the Alta web API. |
| [`PlayerAchievementResponse`](/mod/game-api/types/assembly-api-models/playerachievementresponse) | class |  | 1 | Web API model listing the achievements a player has. |
| [`PlayerActionStatResponse`](/mod/game-api/types/assembly-api-models/playeractionstatresponse) | class |  | 1 | Web API model listing a player's action stats. |
| [`PlayerReportInfo`](/mod/game-api/types/assembly-api-models/playerreportinfo) | class |  | 9 | A player report as stored by the web API: who reported whom, on which server, its type and what moderators did. |
| [`PublicUserInfoResponse`](/mod/game-api/types/assembly-api-models/publicuserinforesponse) | class | `UserInfo` | 2 | Public user info plus statistics and supporter status. |
| [`PurchaseResult`](/mod/game-api/types/assembly-api-models/purchaseresult) | class |  | 4 | Alta API response to buying a shop item. |
| [`PurchaseResultType`](/mod/game-api/types/assembly-api-models/purchaseresulttype) | enum |  | 8 | Outcome of a shop purchase, such as success, not enough shards, already owned or premium only. |
| [`Query`](/mod/game-api/types/assembly-api-models/query) | class |  | 9 | One question on a web API form page (`Page.Queries`). |
| [`QueryMeta`](/mod/game-api/types/assembly-api-models/querymeta) | class |  | 4 | Paging info for a list response from the API. |
| [`QueryResponse`](/mod/game-api/types/assembly-api-models/queryresponse) | class |  | 2 | A user's answer to one form question, part of a `PageResponse`. |
| [`QuickCreateResponse`](/mod/game-api/types/assembly-api-models/quickcreateresponse) | class |  | 2 | Response from the groups quick-create call: the new group and its server. |
| [`RecentPlayerInteractionInfo`](/mod/game-api/types/assembly-api-models/recentplayerinteractioninfo) | class |  | 4 | API response for one recent interaction with another player: who, what kind, when and on which server. |
| [`RecentPlayerInteractionType`](/mod/game-api/types/assembly-api-models/recentplayerinteractiontype) | enum |  | 3 | How you recently met another player, in the Alta API: combat, nearby or on the same server. |
| [`RegionInfo`](/mod/game-api/types/assembly-api-models/regioninfo) | class |  | 4 | A server region from the Alta API. |
| [`ReportStatus`](/mod/game-api/types/assembly-api-models/reportstatus) | enum |  | 3 | State of a player report: awaiting action, ignored, or acted on. |
| [`ReportType`](/mod/game-api/types/assembly-api-models/reporttype) | enum |  | 3 | What a player report is for: griefing, harassment, or cheating and exploits. |
| [`ResolveComment`](/mod/game-api/types/assembly-api-models/resolvecomment) | class |  | 2 | Body for adding a comment that also marks something resolved or not. |
| [`ServerJoinFailResult`](/mod/game-api/types/assembly-api-models/serverjoinfailresult) | enum |  | 14 | Why the API refused a server join, such as not allowed, not online, banned, wrong game version or player limit reached. |
| [`ServerJoinResponse`](/mod/game-api/types/assembly-api-models/serverjoinresponse) | class |  | 4 | Web API answer to whether a user may join a server, with ban details when they may not. The offline security client always returns allowed. |
| [`ServerJoinResult`](/mod/game-api/types/assembly-api-models/serverjoinresult) | class |  | 9 | Web API reply to a request to join a game server: whether it's allowed, why not, and the connection details and token if so. |
| [`ServerJoinType`](/mod/game-api/types/assembly-api-models/serverjointype) | enum |  | 7 | Who may join a server: group members, public, open group, supporters only, world instance or public group. `PrivateGroup` is the same value as `GroupMember`. |
| [`ServerOwnerType`](/mod/game-api/types/assembly-api-models/serverownertype) | enum |  | 4 | Who owns a server: an individual, a group or the world. `GroupAdmins` is the same value as `Group`. |
| [`ServerSaveFileResponse`](/mod/game-api/types/assembly-api-models/serversavefileresponse) | class |  | 1 | The API's answer to a `ServerSaveFileRequest`: download links for the files. |
| [`Settings`](/mod/game-api/types/assembly-api-models/settings) | class |  | 2 | [Settings and files](../console-and-utilities/settings-and-files.md): Where the game keeps its settings and files, and the helpers it uses to read and write them. |
| [`ShopAccountInfo`](/mod/game-api/types/assembly-api-models/shopaccountinfo) | class |  | 4 | Web API reply with a user's shop balance: shards, wallet money and supporter subscription status. |
| [`ShopAccountInfo.SubscriptionStatus`](/mod/game-api/types/assembly-api-models/shopaccountinfo-subscriptionstatus) | class |  | 4 | Supporter subscription state inside `ShopAccountInfo.MemberStatus`. |
| [`ShopItemConfiguration`](/mod/game-api/types/assembly-api-models/shopitemconfiguration) | class |  | 6 | One entry of Alta's shop configuration: an item's discount, shard price or promotion. |
| [`ShopPageConfiguration`](/mod/game-api/types/assembly-api-models/shoppageconfiguration) | class |  | 5 | Layout data for one page of the in-game shop as sent by the web API: its subtitle, item slots and graphics. |
| [`ShopPageConfigurationWithBanner`](/mod/game-api/types/assembly-api-models/shoppageconfigurationwithbanner) | class | `ShopPageConfiguration` | 2 | A shop page layout with a banner image taken from the game home configuration. |
| [`ShopTokenResponse`](/mod/game-api/types/assembly-api-models/shoptokenresponse) | class |  | 4 | Web API model for a shop purchase token from the Xsolla payment provider. |
| [`ShopTransactionStatusResponse`](/mod/game-api/types/assembly-api-models/shoptransactionstatusresponse) | class |  | 1 | The status of a shop transaction. |
| [`ShutdownReason`](/mod/game-api/types/assembly-api-models/shutdownreason) | class |  | 6 | Why a game server shut down, as a message and whether the shutdown was expected. |
| [`SimpleTokenResultResponse`](/mod/game-api/types/assembly-api-models/simpletokenresultresponse) | class |  | 2 | Web API model that wraps a single JWT. |
| [`SingleTokenResponse`](/mod/game-api/types/assembly-api-models/singletokenresponse) | class |  | 1 | An API response holding a single JWT token. |
| [`SocialMediaInfo`](/mod/game-api/types/assembly-api-models/socialmediainfo) | class |  | 2 | A social media link shown in the launcher, part of `LauncherGameInfoFull.SocialMedia`. |
| [`StartServerSessionResponse`](/mod/game-api/types/assembly-api-models/startserversessionresponse) | class |  | 1 | API response when a server session is started. |
| [`StoreRotationGraphicConfig`](/mod/game-api/types/assembly-api-models/storerotationgraphicconfig) | class |  | 3 | One graphic in the shop page's rotation (`ShopPageConfiguration.Graphics`). |
| [`SubscriptionRefreshResult`](/mod/game-api/types/assembly-api-models/subscriptionrefreshresult) | class |  | 3 | Result of checking for supporter subscription rewards, from `CheckForSubscriptionRewardsAsync`. The offline shop returns an empty one. |
| [`SubscriptionRefreshResult.Reward`](/mod/game-api/types/assembly-api-models/subscriptionrefreshresult-reward) | class |  | 2 | One reward granted when a supporter subscription is refreshed. |
| [`TokenResultResponse`](/mod/game-api/types/assembly-api-models/tokenresultresponse) | class |  | 4 | Web API model holding the three JWTs a login returns. |
| [`Transitions`](/mod/game-api/types/assembly-api-models/transitions) | class |  | 2 | A rule on a form `Page` that says which page comes next when its conditions are met. |
| [`UserInfo`](/mod/game-api/types/assembly-api-models/userinfo) | class | `INamedEntity` | 7 | [Player](../networking/player.md#userinfo): Two are equal when their ids are equal, whatever the names. |
| [`UserInfoWithPermissions`](/mod/game-api/types/assembly-api-models/userinfowithpermissions) | class | `UserInfo` | 5 | A user plus the policies (permissions) and verified flag read from their Alta JWT. |
| [`UserPresetDataInfo`](/mod/game-api/types/assembly-api-models/userpresetdatainfo) | class |  | 5 | A saved cosmetics preset from the web API, packed as an array of `uint` values. |
| [`UserStatistics`](/mod/game-api/types/assembly-api-models/userstatistics) | class |  | 2 | Account stats from the Alta API. |
| [`ValidateItemOwnershipResponse`](/mod/game-api/types/assembly-api-models/validateitemownershipresponse) | class |  | 1 | Web API answer to `ValidateItemsOwnershipAsync`, which checks that a user owns a list of shop items. |
| [`ValidationResultModel`](/mod/game-api/types/assembly-api-models/validationresultmodel) | class |  | 4 | List of field validation errors, attached to an `ApiError` for a bad request. |
| [`VersionMarker`](/mod/game-api/types/assembly-api-models/versionmarker) | class |  | 2 | A named game version shown in the launcher, part of `LauncherGameInfoFull.VersionMarkers`. |

## Alta.Api.DataTransferModels.Models.Responses.DTOs.Responses

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`FriendRequestResult`](/mod/game-api/types/assembly-api-models/friendrequestresult) | class |  | 3 | The web API's reply to a friend request: what happened, plus the friendship records each way. |
| [`InstallationEventInfo`](/mod/game-api/types/assembly-api-models/installationeventinfo) | class |  | 8 | A stored install or update event as the API returns it; the read side of `InstallationEventRequest`. |

## Alta.Api.DataTransferModels.Models.Shared

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`AnalyticsEventData`](/mod/game-api/types/assembly-api-models/analyticseventdata) | class |  | 9 | One analytics event as sent to the Alta web API. |
| [`BanMethod`](/mod/game-api/types/assembly-api-models/banmethod) | enum |  | 3 | Flags for what a ban applies to: the user id, the IP address, the device id or any mix. Passed to `SecurityApiClient.BanUserAsync`. |
| [`BanType`](/mod/game-api/types/assembly-api-models/bantype) | enum |  | 3 | Scope of a ban in the web API: one server, global, or public servers (probably). |
| [`ChargeInfo`](/mod/game-api/types/assembly-api-models/chargeinfo) | class |  | 2 | How much a subscription plan charges and how often. |
| [`ClientTokenConfig`](/mod/game-api/types/assembly-api-models/clienttokenconfig) | class |  | 3 | OAuth client credentials sent to log in as a client rather than a user. `HighLevelApiClient.LoginViaOauth` builds one. |
| [`Duration`](/mod/game-api/types/assembly-api-models/duration) | class |  | 3 | A length of time as a count and a unit (day, month or year), used for subscription trial and charge periods. |
| [`DurationType`](/mod/game-api/types/assembly-api-models/durationtype) | enum |  | 3 | Unit of a `Duration`: day, month or year. |
| [`GameVersion`](/mod/game-api/types/assembly-api-models/gameversion) | class | `IEquatable<GameVersion>` | 15 | A game build version: stream plus title, season, major, minor and changeset numbers. |
| [`InstanceInfo`](/mod/game-api/types/assembly-api-models/instanceinfo) | class |  | 6 | A running server instance in Alta's hosting, as listed by `IInstancesClient`. |
| [`ItemCategory`](/mod/game-api/types/assembly-api-models/itemcategory) | enum |  | 25 | Category of a cosmetic shop item, from body types and skin colours to clothing, accessories, outfits and bundles. Also set on each customization category. |
| [`ItemSetType`](/mod/game-api/types/assembly-api-models/itemsettype) | enum |  | 2 | Kind of shop item set: an outfit or a bundle. Used when shop editors create or update sets. |
| [`OwnedShopItem`](/mod/game-api/types/assembly-api-models/ownedshopitem) | class | `IIdentifiable` | 5 | A shop item a user owns, as returned by the web API. |
| [`PriceType`](/mod/game-api/types/assembly-api-models/pricetype) | enum |  | 2 | Currency of a `ShopPrice`: US dollars or shards. |
| [`Region`](/mod/game-api/types/assembly-api-models/region-alta-api-datatransfermodels-models-shared) | class |  | 12 | A server region, with the fixed list of known regions. Note the constructor arguments are swapped in the presets: `FriendlyName` holds the code (`USEast1`) and `ShortName` holds the long name. |
| [`ShopItem`](/mod/game-api/types/assembly-api-models/shopitem) | class | `IIdentifiable` | 9 | An item in Alta's shop, such as a cosmetic or a set. |
| [`ShopItemDetailed`](/mod/game-api/types/assembly-api-models/shopitemdetailed) | class | `ShopItem` | 4 | API model for a shop item with its full details: description, category, images and Xsolla id. |
| [`ShopItemDetailedForUser`](/mod/game-api/types/assembly-api-models/shopitemdetailedforuser) | class | `ShopItemDetailed` | 2 | A shop item with details for one user: whether they own it and the price they would pay. |
| [`ShopItemIdentifier`](/mod/game-api/types/assembly-api-models/shopitemidentifier) | class |  | 3 | Identifies a shop item by its numeric id and SKU. |
| [`ShopItemImage`](/mod/game-api/types/assembly-api-models/shopitemimage) | class |  | 6 | An image for a shop item, with optional alternative formats. |
| [`ShopItemModificationRequest`](/mod/game-api/types/assembly-api-models/shopitemmodificationrequest) | class | `IIdentifiable` | 14 | A shop item as staff create or edit it through the API. |
| [`ShopItemSet`](/mod/game-api/types/assembly-api-models/shopitemset) | class | `IIdentifiable` | 4 | API model for a set of shop items sold together under one SKU. |
| [`ShopItemSetModificationRequest`](/mod/game-api/types/assembly-api-models/shopitemsetmodificationrequest) | class | `ShopItemModificationRequest` | 1 | A shop item set as staff create or edit it: a shop item plus the items in the set. |
| [`ShopPrice`](/mod/game-api/types/assembly-api-models/shopprice) | class |  | 3 | A price in the shop: an amount and its currency. Defaults to 1 shard. |
| [`SubscriptionPlanInfo`](/mod/game-api/types/assembly-api-models/subscriptionplaninfo) | class |  | 7 | Web API model for a supporter subscription plan. |
| [`TownshipItemCategory`](/mod/game-api/types/assembly-api-models/townshipitemcategory) | class | `IIdentifiable` | 6 | A shop item category, which can sit under a parent category. |
| [`TownshipItemCategoryModificationRequest`](/mod/game-api/types/assembly-api-models/townshipitemcategorymodificationrequest) | class | `TownshipItemCategory` | 1 | A shop category as staff create or edit it. Same as `TownshipItemCategory` but the parent is sent as an id. |
| [`UserRoles`](/mod/game-api/types/assembly-api-models/userroles) | class |  | 3 | Roles read from a user's identity token by `UserRolesUtility.GetRolesFromIdentityToken`. |
| [`UserSubscription`](/mod/game-api/types/assembly-api-models/usersubscription) | class |  | 10 | A user's subscription (supporter membership) and its billing dates. |
| [`UserSubscriptionInfoStatus`](/mod/game-api/types/assembly-api-models/usersubscriptioninfostatus) | enum |  | 3 | State of a user's subscription: active, cancelled or non-renewing. |

## Alta.Api.DataTransferModels.Settings

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`GameServerSettings`](/mod/game-api/types/assembly-api-models/gameserversettings) | static class |  | 8 | Constants about game servers shared with the Alta API: ping timing, default port and, probably, how servers are ranked for players. |
| [`NamingSettings`](/mod/game-api/types/assembly-api-models/namingsettings) | static class |  | 7 | Length and character limits for names, emails, password hashes and sign-up codes in the Alta API. |

## Alta.Api.DataTransferModels.Utility

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`Device`](/mod/game-api/types/assembly-api-models/device) | static class |  | 2 | Static info about this device that the API client sends with logins and joins. `ApiAccess` fills it at startup. |
| [`JsonUtility`](/mod/game-api/types/assembly-api-models/jsonutility) | static class |  | 3 | Shared Json.NET settings for the Alta API: its converters, ISO UTC dates and nulls left out. |
| [`JwtTokenHandler`](/mod/game-api/types/assembly-api-models/jwttokenhandler) | static class |  | 1 | Turns a `JwtSecurityToken` back into its encoded string. |
| [`RetryHandler`](/mod/game-api/types/assembly-api-models/retryhandler) | class | `HttpClientHandler` | 2 | HTTP handler for the API client that adds a timeout per attempt and retries failed requests with a doubling delay (2, 4, ... seconds). |
| [`UserRolesUtility`](/mod/game-api/types/assembly-api-models/userrolesutility) | static class |  | 2 | Reads a user's roles from the policy claims in their identity token. |
