---
title: "UserInfoWithPermissions"
description: "A user plus the policies (permissions) and verified flag read from their Alta JWT."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserInfoWithPermissions

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

A user plus the policies (permissions) and verified flag read from their Alta JWT.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`UserInfo`](/mod/game-api/types/assembly-api-models/userinfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserInfoWithPermissions(int identifier, string username, bool isVerified, IEnumerable<string> policies)"}</code> | Creates an `UserInfoWithPermissions` from `identifier`, `username`, `isVerified` and `policies`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isverified" /><code>{"bool IsVerified { get; private set; }"}</code> | Whether the token carried an `is_verified` claim, or `SetVerified` was called. |
| <Link id="m-policies" /><code>{"HashSet<string> Policies { get; private set; }"}</code> | The permission policy names from the token's `Policy` claims. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromtoken" /><code>{"static "}<Link to="/mod/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" FromToken(JwtSecurityToken token)"}</code> | Builds one from a JWT's `UserId`, `Username`, `is_verified` and `Policy` claims. Comma separated policies are split. |
| <Link id="m-setverified" /><code>{"void SetVerified()"}</code> | Marks the user as verified. |

## Used in

Members of other types that take, return or hold a `UserInfoWithPermissions`:

[`HighLevelApiClient.CreateLoggedInApiClients`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-createloggedinapiclients), [`IUserApiClient.GetUserInfoWithPermissionsAsync`](/mod/game-api/types/assembly-api-client/iuserapiclient#m-getuserinfowithpermissionsasync), [`IUserApiClient.LoggedInUserInfo`](/mod/game-api/types/assembly-api-client/iuserapiclient#m-loggedinuserinfo), [`OfflineUserApiClient.GetUserInfoWithPermissionsAsync`](/mod/game-api/types/assembly-api-client/offlineuserapiclient#m-getuserinfowithpermissionsasync), [`OfflineUserApiClient.LoggedInUserInfo`](/mod/game-api/types/assembly-api-client/offlineuserapiclient#m-loggedinuserinfo), [`OfflineUserApiClient.OfflineUserApiClient`](/mod/game-api/types/assembly-api-client/offlineuserapiclient#m-ctor), [`UserApiClient.GetUserInfoWithPermissionsAsync`](/mod/game-api/types/assembly-api-client/userapiclient#m-getuserinfowithpermissionsasync), [`UserApiClient.LoggedInUserInfo`](/mod/game-api/types/assembly-api-client/userapiclient#m-loggedinuserinfo), [`LowLevelApiClient.GetUserWithPermissionsAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getuserwithpermissionsasync), [`LowLevelApiClient.HandleNewAuthenticationTokens`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-handlenewauthenticationtokens), [`LowLevelApiClient.HandleRefreshTokenResponseAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-handlerefreshtokenresponseasync), [`LowLevelApiClient.HandleTokenResponseAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-handletokenresponseasync), [`LowLevelApiClient.LoggedInUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-loggedinuser), [`LowLevelApiClient.LoginAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-loginasync), [`LowLevelApiClient.LoginWithEmailAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-loginwithemailasync), [`LowLevelApiClient.LoginWithOculusUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-loginwithoculususer), [`LowLevelApiClient.LoginWithPicoUser`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-loginwithpicouser), [`LowLevelApiClient.LoginWithTokenAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-loginwithtokenasync), [`LowLevelApiClient.RefreshLoginAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-refreshloginasync), [`LowLevelApiClient.RefreshLoginSessionUsingTokenAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-refreshloginsessionusingtokenasync), [`CommandContext.CallingUser`](/mod/game-api/types/alta-console/commandcontext#m-callinguser), [`CommandContext.CommandContext`](/mod/game-api/types/alta-console/commandcontext#m-ctor), [`WebSocketCommandHandler.UserInfo`](/mod/game-api/types/alta-console/websocketcommandhandler#m-userinfo), [`WebSocketRemoteConsole.ConsoleConnected`](/mod/game-api/types/alta-console/websocketremoteconsole#m-consoleconnected), [`WebSocketRemoteConsole.ConsoleDisconnected`](/mod/game-api/types/alta-console/websocketremoteconsole#m-consoledisconnected), [`ClientCommandHandler.ClientCommandHandler`](/mod/game-api/types/global-c-d/clientcommandhandler#m-ctor), [`ClientCommandHandler.userInfo`](/mod/game-api/types/global-c-d/clientcommandhandler#m-userinfo), [`ClientHandler.UserInfo`](/mod/game-api/types/global-c-d/clienthandler#m-userinfo), [`IRemoteConsole.ConsoleConnected`](/mod/game-api/types/global-i-l/iremoteconsole#m-consoleconnected), [`IRemoteConsole.ConsoleDisconnected`](/mod/game-api/types/global-i-l/iremoteconsole#m-consoledisconnected), [`IRemoteConsoleHandler.UserInfo`](/mod/game-api/types/global-i-l/iremoteconsolehandler#m-userinfo), [`ServerConsoleManager.ConsoleConnected`](/mod/game-api/types/global-s/serverconsolemanager#m-consoleconnected), [`ServerConsoleManager.ConsoleDisconnected`](/mod/game-api/types/global-s/serverconsolemanager#m-consoledisconnected), [`ServerConsoleManager.HandleConsoleConnected`](/mod/game-api/types/global-s/serverconsolemanager#m-handleconsoleconnected), [`ServerConsoleManager.HandleConsoleDisconnected`](/mod/game-api/types/global-s/serverconsolemanager#m-handleconsoledisconnected), [`ServerRemoteConsole.ConsoleConnected`](/mod/game-api/types/global-s/serverremoteconsole#m-consoleconnected), [`ServerRemoteConsole.ConsoleDisconnected`](/mod/game-api/types/global-s/serverremoteconsole#m-consoledisconnected), [`SocialService.CanBanFromServer`](/mod/game-api/types/global-s/socialservice#m-canbanfromserver).
