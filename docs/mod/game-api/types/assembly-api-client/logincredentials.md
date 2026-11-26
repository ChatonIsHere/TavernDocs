---
title: "LoginCredentials"
description: "The JWT tokens returned when a user or server logs in to the Alta API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginCredentials

A **class** in `Alta.Api.Client`, `Alta.Api.Client`.

The JWT tokens returned when a user or server logs in to the Alta API.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LoginCredentials(JwtSecurityToken accessToken, JwtSecurityToken refreshToken, JwtSecurityToken identityToken)"}</code> | Creates a `LoginCredentials` from `accessToken`, `refreshToken` and `identityToken`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accesstoken" /><code>{"JwtSecurityToken AccessToken { get; set; }"}</code> | Token sent with API requests. |
| <Link id="m-identitytoken" /><code>{"JwtSecurityToken IdentityToken { get; set; }"}</code> | Token with the user's identity claims. |
| <Link id="m-refreshtoken" /><code>{"JwtSecurityToken RefreshToken { get; set; }"}</code> | Token used to get new access tokens. |

## Used in

Members of other types that take, return or hold a `LoginCredentials`:

[`HighLevelApiClient.UserCredentials`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-usercredentials), [`HighLevelApiClientFactory.CreateOfflineHighLevelClient`](/mod/game-api/types/assembly-api-client/highlevelapiclientfactory#m-createofflinehighlevelclient), [`IHighLevelApiClient.UserCredentials`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-usercredentials), [`OfflineHighLevelApiClient.OfflineHighLevelApiClient`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-ctor), [`OfflineHighLevelApiClient.UserCredentials`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-usercredentials), [`LoginCredentialsChangedHandler.BeginInvoke`](/mod/game-api/types/assembly-api-client/logincredentialschangedhandler#m-begininvoke), [`LoginCredentialsChangedHandler.Invoke`](/mod/game-api/types/assembly-api-client/logincredentialschangedhandler#m-invoke), [`LowLevelApiClient.Credentials`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-credentials), [`LowLevelApiClient.OnNewCredentials`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-onnewcredentials), [`ILoginPreferences.SaveCredentials`](/mod/game-api/types/assembly-other/iloginpreferences#m-savecredentials), [`LoginPreferences.OnCredentialsChanged`](/mod/game-api/types/assembly-other/loginpreferences#m-oncredentialschanged), [`LoginPreferences.SaveCredentials`](/mod/game-api/types/assembly-other/loginpreferences#m-savecredentials), [`ApiAccess.CanUseOffline`](/mod/game-api/types/global-a-b/apiaccess#m-canuseoffline), [`ApiAccess.StartOffline`](/mod/game-api/types/global-a-b/apiaccess#m-startoffline), [`ApiAccess.TryGetLoginCredentials`](/mod/game-api/types/global-a-b/apiaccess#m-trygetlogincredentials), [`ApplicationStartupManager.StoreOfflineCredentials`](/mod/game-api/types/global-a-b/applicationstartupmanager#m-storeofflinecredentials-2), [`ApplicationStartupManager.StoreUpdatedOfflineCredentials`](/mod/game-api/types/global-a-b/applicationstartupmanager#m-storeupdatedofflinecredentials).
