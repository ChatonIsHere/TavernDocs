---
title: "IHighLevelApiClientManager"
description: "Internal interface for the object that owns the low-level Alta API client and can log it out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IHighLevelApiClientManager

An **internal interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal interface for the object that owns the low-level Alta API client and can log it out.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`HighLevelApiClient`](/mod/game-api/types/assembly-api-client/highlevelapiclient)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code><Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" ApiClient { get; }"}</code> | The low-level API client that makes the HTTP calls. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | Logs the client out. |

## Used in

Members of other types that take, return or hold a `IHighLevelApiClientManager`:

[`AchievementApiClient.AchievementApiClient`](/mod/game-api/types/assembly-api-client/achievementapiclient#m-ctor), [`AnalyticsClient.AnalyticsClient`](/mod/game-api/types/assembly-api-client/analyticsclient#m-ctor), [`FutureUserActionsClient.FutureUserActionsClient`](/mod/game-api/types/assembly-api-client/futureuseractionsclient#m-ctor), [`HighLevelApiClientBase.HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase#m-ctor), [`HighLevelApiClientBase.lowLevel`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase#m-lowlevel), [`InstancesClient.InstancesClient`](/mod/game-api/types/assembly-api-client/instancesclient#m-ctor), [`LauncherApiClient.LauncherApiClient`](/mod/game-api/types/assembly-api-client/launcherapiclient#m-ctor), [`MatchMakingClient.MatchMakingClient`](/mod/game-api/types/assembly-api-client/matchmakingclient#m-ctor), [`OculusClient.OculusClient`](/mod/game-api/types/assembly-api-client/oculusclient#m-ctor), [`OculusShop.clientManager`](/mod/game-api/types/assembly-api-client/oculusshop#m-clientmanager), [`OculusShop.OculusShop`](/mod/game-api/types/assembly-api-client/oculusshop#m-ctor), [`PlayerReportAdmin.lowLevel`](/mod/game-api/types/assembly-api-client/playerreportadmin#m-lowlevel), [`PlayerReportAdmin.PlayerReportAdmin`](/mod/game-api/types/assembly-api-client/playerreportadmin#m-ctor), [`PlayerReportsClient.PlayerReportsClient`](/mod/game-api/types/assembly-api-client/playerreportsclient#m-ctor), [`RecentPlayersClient.RecentPlayersClient`](/mod/game-api/types/assembly-api-client/recentplayersclient#m-ctor), [`SecurityApiClient.SecurityApiClient`](/mod/game-api/types/assembly-api-client/securityapiclient#m-ctor), [`ServerAccess.apiClient`](/mod/game-api/types/assembly-api-client/serveraccess#m-apiclient), [`ServerAccess.ServerAccess`](/mod/game-api/types/assembly-api-client/serveraccess#m-ctor), [`ServerApiClient.ServerApiClient`](/mod/game-api/types/assembly-api-client/serverapiclient#m-ctor), [`ServicesApiClient.ServicesApiClient`](/mod/game-api/types/assembly-api-client/servicesapiclient#m-ctor), [`SettingsClient.SettingsClient`](/mod/game-api/types/assembly-api-client/settingsclient#m-ctor), [`ShopAccount.clientManager`](/mod/game-api/types/assembly-api-client/shopaccount#m-clientmanager), [`ShopAccount.ShopAccount`](/mod/game-api/types/assembly-api-client/shopaccount#m-ctor), [`ShopEditor.clientManager`](/mod/game-api/types/assembly-api-client/shopeditor#m-clientmanager), [`ShopEditor.ShopEditor`](/mod/game-api/types/assembly-api-client/shopeditor#m-ctor), [`ShopPurchase.clientManager`](/mod/game-api/types/assembly-api-client/shoppurchase#m-clientmanager), [`ShopPurchase.ShopPurchase`](/mod/game-api/types/assembly-api-client/shoppurchase#m-ctor), [`SocialClient.SocialClient`](/mod/game-api/types/assembly-api-client/socialclient#m-ctor), [`UserApiClient.UserApiClient`](/mod/game-api/types/assembly-api-client/userapiclient#m-ctor), [`VoiceApiClient.VoiceApiClient`](/mod/game-api/types/assembly-api-client/voiceapiclient#m-ctor).
