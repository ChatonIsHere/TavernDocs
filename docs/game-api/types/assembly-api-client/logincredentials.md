---
title: "LoginCredentials"
description: "class LoginCredentials in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginCredentials

A **class** in `Alta.Api.Client`, `Alta.Api.Client`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LoginCredentials(JwtSecurityToken accessToken, JwtSecurityToken refreshToken, JwtSecurityToken identityToken)"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-accesstoken" /><code>{"JwtSecurityToken AccessToken { get; set; }"}</code> |
| <Link id="m-identitytoken" /><code>{"JwtSecurityToken IdentityToken { get; set; }"}</code> |
| <Link id="m-refreshtoken" /><code>{"JwtSecurityToken RefreshToken { get; set; }"}</code> |

## Used in

Members of other types that take, return or hold a `LoginCredentials`:

[`HighLevelApiClient.UserCredentials`](/game-api/types/assembly-api-client/highlevelapiclient#m-usercredentials), [`HighLevelApiClientFactory.CreateOfflineHighLevelClient`](/game-api/types/assembly-api-client/highlevelapiclientfactory#m-createofflinehighlevelclient), [`IHighLevelApiClient.UserCredentials`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-usercredentials), [`OfflineHighLevelApiClient.OfflineHighLevelApiClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-ctor), [`OfflineHighLevelApiClient.UserCredentials`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-usercredentials), [`LoginCredentialsChangedHandler.BeginInvoke`](/game-api/types/assembly-api-client/logincredentialschangedhandler#m-begininvoke), [`LoginCredentialsChangedHandler.Invoke`](/game-api/types/assembly-api-client/logincredentialschangedhandler#m-invoke), [`LowLevelApiClient.Credentials`](/game-api/types/assembly-api-client/lowlevelapiclient#m-credentials), [`LowLevelApiClient.OnNewCredentials`](/game-api/types/assembly-api-client/lowlevelapiclient#m-onnewcredentials), [`ILoginPreferences.SaveCredentials`](/game-api/types/assembly-other/iloginpreferences#m-savecredentials), [`LoginPreferences.OnCredentialsChanged`](/game-api/types/assembly-other/loginpreferences#m-oncredentialschanged), [`LoginPreferences.SaveCredentials`](/game-api/types/assembly-other/loginpreferences#m-savecredentials), [`ApiAccess.CanUseOffline`](/game-api/types/global-a-b/apiaccess#m-canuseoffline), [`ApiAccess.StartOffline`](/game-api/types/global-a-b/apiaccess#m-startoffline), [`ApiAccess.TryGetLoginCredentials`](/game-api/types/global-a-b/apiaccess#m-trygetlogincredentials), [`ApplicationStartupManager.StoreOfflineCredentials`](/game-api/types/global-a-b/applicationstartupmanager#m-storeofflinecredentials-2), [`ApplicationStartupManager.StoreUpdatedOfflineCredentials`](/game-api/types/global-a-b/applicationstartupmanager#m-storeupdatedofflinecredentials).
