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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`HighLevelApiClient`](/game-api/types/assembly-api-client/highlevelapiclient)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-apiclient" /><code><Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" ApiClient { get; }"}</code> | The low-level API client that makes the HTTP calls. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | Logs the client out. |

## Used in

Members of other types that take, return or hold a `IHighLevelApiClientManager`:

[`AchievementApiClient.AchievementApiClient`](/game-api/types/assembly-api-client/achievementapiclient#m-ctor), [`AnalyticsClient.AnalyticsClient`](/game-api/types/assembly-api-client/analyticsclient#m-ctor), [`FutureUserActionsClient.FutureUserActionsClient`](/game-api/types/assembly-api-client/futureuseractionsclient#m-ctor), [`HighLevelApiClientBase.HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase#m-ctor), [`HighLevelApiClientBase.lowLevel`](/game-api/types/assembly-api-client/highlevelapiclientbase#m-lowlevel), [`InstancesClient.InstancesClient`](/game-api/types/assembly-api-client/instancesclient#m-ctor), [`LauncherApiClient.LauncherApiClient`](/game-api/types/assembly-api-client/launcherapiclient#m-ctor), [`MatchMakingClient.MatchMakingClient`](/game-api/types/assembly-api-client/matchmakingclient#m-ctor), [`OculusClient.OculusClient`](/game-api/types/assembly-api-client/oculusclient#m-ctor), [`OculusShop.clientManager`](/game-api/types/assembly-api-client/oculusshop#m-clientmanager), [`OculusShop.OculusShop`](/game-api/types/assembly-api-client/oculusshop#m-ctor), [`PlayerReportAdmin.lowLevel`](/game-api/types/assembly-api-client/playerreportadmin#m-lowlevel), [`PlayerReportAdmin.PlayerReportAdmin`](/game-api/types/assembly-api-client/playerreportadmin#m-ctor), [`PlayerReportsClient.PlayerReportsClient`](/game-api/types/assembly-api-client/playerreportsclient#m-ctor), [`RecentPlayersClient.RecentPlayersClient`](/game-api/types/assembly-api-client/recentplayersclient#m-ctor), [`SecurityApiClient.SecurityApiClient`](/game-api/types/assembly-api-client/securityapiclient#m-ctor), [`ServerAccess.apiClient`](/game-api/types/assembly-api-client/serveraccess#m-apiclient), [`ServerAccess.ServerAccess`](/game-api/types/assembly-api-client/serveraccess#m-ctor), [`ServerApiClient.ServerApiClient`](/game-api/types/assembly-api-client/serverapiclient#m-ctor), [`ServicesApiClient.ServicesApiClient`](/game-api/types/assembly-api-client/servicesapiclient#m-ctor), [`SettingsClient.SettingsClient`](/game-api/types/assembly-api-client/settingsclient#m-ctor), [`ShopAccount.clientManager`](/game-api/types/assembly-api-client/shopaccount#m-clientmanager), [`ShopAccount.ShopAccount`](/game-api/types/assembly-api-client/shopaccount#m-ctor), [`ShopEditor.clientManager`](/game-api/types/assembly-api-client/shopeditor#m-clientmanager), [`ShopEditor.ShopEditor`](/game-api/types/assembly-api-client/shopeditor#m-ctor), [`ShopPurchase.clientManager`](/game-api/types/assembly-api-client/shoppurchase#m-clientmanager), [`ShopPurchase.ShopPurchase`](/game-api/types/assembly-api-client/shoppurchase#m-ctor), [`SocialClient.SocialClient`](/game-api/types/assembly-api-client/socialclient#m-ctor), [`UserApiClient.UserApiClient`](/game-api/types/assembly-api-client/userapiclient#m-ctor), [`VoiceApiClient.VoiceApiClient`](/game-api/types/assembly-api-client/voiceapiclient#m-ctor).
