---
title: "UserInfoWithPermissions"
description: "class UserInfoWithPermissions in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UserInfoWithPermissions

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`UserInfo`](/game-api/types/assembly-api-models/userinfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UserInfoWithPermissions(int identifier, string username, bool isVerified, IEnumerable<string> policies)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isverified" /><code>{"bool IsVerified { get; private set; }"}</code> |  |
| <Link id="m-policies" /><code>{"HashSet<string> Policies { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromtoken" /><code>{"static "}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" FromToken(JwtSecurityToken token)"}</code> |  |
| <Link id="m-setverified" /><code>{"void SetVerified()"}</code> |  |

## Used in

Members of other types that take, return or hold a `UserInfoWithPermissions`:

[`HighLevelApiClient.CreateLoggedInApiClients`](/game-api/types/assembly-api-client/highlevelapiclient#m-createloggedinapiclients), [`IUserApiClient.GetUserInfoWithPermissionsAsync`](/game-api/types/assembly-api-client/iuserapiclient#m-getuserinfowithpermissionsasync), [`IUserApiClient.LoggedInUserInfo`](/game-api/types/assembly-api-client/iuserapiclient#m-loggedinuserinfo), [`OfflineUserApiClient.GetUserInfoWithPermissionsAsync`](/game-api/types/assembly-api-client/offlineuserapiclient#m-getuserinfowithpermissionsasync), [`OfflineUserApiClient.LoggedInUserInfo`](/game-api/types/assembly-api-client/offlineuserapiclient#m-loggedinuserinfo), [`OfflineUserApiClient.OfflineUserApiClient`](/game-api/types/assembly-api-client/offlineuserapiclient#m-ctor), [`UserApiClient.GetUserInfoWithPermissionsAsync`](/game-api/types/assembly-api-client/userapiclient#m-getuserinfowithpermissionsasync), [`UserApiClient.LoggedInUserInfo`](/game-api/types/assembly-api-client/userapiclient#m-loggedinuserinfo), [`LowLevelApiClient.GetUserWithPermissionsAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getuserwithpermissionsasync), [`LowLevelApiClient.HandleNewAuthenticationTokens`](/game-api/types/assembly-api-client/lowlevelapiclient#m-handlenewauthenticationtokens), [`LowLevelApiClient.HandleRefreshTokenResponseAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-handlerefreshtokenresponseasync), [`LowLevelApiClient.HandleTokenResponseAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-handletokenresponseasync), [`LowLevelApiClient.LoggedInUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-loggedinuser), [`LowLevelApiClient.LoginAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-loginasync), [`LowLevelApiClient.LoginWithEmailAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-loginwithemailasync), [`LowLevelApiClient.LoginWithOculusUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-loginwithoculususer), [`LowLevelApiClient.LoginWithPicoUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-loginwithpicouser), [`LowLevelApiClient.LoginWithTokenAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-loginwithtokenasync), [`LowLevelApiClient.RefreshLoginAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-refreshloginasync), [`LowLevelApiClient.RefreshLoginSessionUsingTokenAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-refreshloginsessionusingtokenasync), [`CommandContext.CallingUser`](/game-api/types/alta-console/commandcontext#m-callinguser), [`CommandContext.CommandContext`](/game-api/types/alta-console/commandcontext#m-ctor), [`WebSocketCommandHandler.UserInfo`](/game-api/types/alta-console/websocketcommandhandler#m-userinfo), [`WebSocketRemoteConsole.ConsoleConnected`](/game-api/types/alta-console/websocketremoteconsole#m-consoleconnected), [`WebSocketRemoteConsole.ConsoleDisconnected`](/game-api/types/alta-console/websocketremoteconsole#m-consoledisconnected), [`ClientCommandHandler.ClientCommandHandler`](/game-api/types/global-c-d/clientcommandhandler#m-ctor), [`ClientCommandHandler.userInfo`](/game-api/types/global-c-d/clientcommandhandler#m-userinfo), [`ClientHandler.UserInfo`](/game-api/types/global-c-d/clienthandler#m-userinfo), [`IRemoteConsole.ConsoleConnected`](/game-api/types/global-i-l/iremoteconsole#m-consoleconnected), [`IRemoteConsole.ConsoleDisconnected`](/game-api/types/global-i-l/iremoteconsole#m-consoledisconnected), [`IRemoteConsoleHandler.UserInfo`](/game-api/types/global-i-l/iremoteconsolehandler#m-userinfo), [`ServerConsoleManager.ConsoleConnected`](/game-api/types/global-s/serverconsolemanager#m-consoleconnected), [`ServerConsoleManager.ConsoleDisconnected`](/game-api/types/global-s/serverconsolemanager#m-consoledisconnected), [`ServerConsoleManager.HandleConsoleConnected`](/game-api/types/global-s/serverconsolemanager#m-handleconsoleconnected), [`ServerConsoleManager.HandleConsoleDisconnected`](/game-api/types/global-s/serverconsolemanager#m-handleconsoledisconnected), [`ServerRemoteConsole.ConsoleConnected`](/game-api/types/global-s/serverremoteconsole#m-consoleconnected), [`ServerRemoteConsole.ConsoleDisconnected`](/game-api/types/global-s/serverremoteconsole#m-consoledisconnected), [`SocialService.CanBanFromServer`](/game-api/types/global-s/socialservice#m-canbanfromserver).
