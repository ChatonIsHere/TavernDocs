---
title: "OfflineHighLevelApiClient"
description: "The API client used when the game starts offline (ApiAccess.StartOffline)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineHighLevelApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

The API client used when the game starts offline (`ApiAccess.StartOffline`). It answers locally, and logs in from the stored access token's claims. Several areas are left null.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IHighLevelApiClient`](/game-api/types/assembly-api-client/ihighlevelapiclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineHighLevelApiClient("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> | Creates an `OfflineHighLevelApiClient` from `credentials`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code><Link to="/game-api/types/assembly-api-client/iaccountclient">{"IAccountClient"}</Link>{" Account { get; }"}</code> | Always null offline. |
| <Link id="m-achievementclient" /><code><Link to="/game-api/types/assembly-api-client/iachievementclient">{"IAchievementClient"}</Link>{" AchievementClient { get; }"}</code> | An `OfflineAchievementApiClient`. |
| <Link id="m-analytics" /><code><Link to="/game-api/types/assembly-api-client/ianalyticsclient">{"IAnalyticsClient"}</Link>{" Analytics { get; }"}</code> | Always null offline. |
| <Link id="m-futureuseractions" /><code><Link to="/game-api/types/assembly-api-client/ifutureuseractions">{"IFutureUserActions"}</Link>{" FutureUserActions { get; }"}</code> | Always null offline. |
| <Link id="m-groups" /><code><Link to="/game-api/types/assembly-api-client/igroupsclient">{"IGroupsClient"}</Link>{" Groups { get; }"}</code> | An `OfflineGroupsClient`, which throws on every call. |
| <Link id="m-instances" /><code><Link to="/game-api/types/assembly-api-client/iinstancesclient">{"IInstancesClient"}</Link>{" Instances { get; private set; }"}</code> | Always null offline. |
| <Link id="m-isloggedin" /><code>{"bool IsLoggedIn { get; }"}</code> | True once one of the login methods has created `UserClient`. |
| <Link id="m-launcherclient" /><code><Link to="/game-api/types/assembly-api-client/ilauncherapiclient">{"ILauncherApiClient"}</Link>{" LauncherClient { get; }"}</code> | An `OfflineLauncherApiClient`. |
| <Link id="m-lowlevel" /><code><Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" LowLevel { get; }"}</code> | Always null offline, so code that uses `LowLevel` directly fails. |
| <Link id="m-matchmaking" /><code><Link to="/game-api/types/assembly-api-client/imatchmakingclient">{"IMatchMakingClient"}</Link>{" MatchMaking { get; private set; }"}</code> | Always null offline. |
| <Link id="m-oculus" /><code><Link to="/game-api/types/assembly-api-client/ioculusclient">{"IOculusClient"}</Link>{" Oculus { get; }"}</code> | Always null offline. |
| <Link id="m-pico" /><code><Link to="/game-api/types/assembly-api-client/ipicoclient">{"IPicoClient"}</Link>{" Pico { get; }"}</code> | Always null offline. |
| <Link id="m-playerreports" /><code><Link to="/game-api/types/assembly-api-client/iplayerreportsclient">{"IPlayerReportsClient"}</Link>{" PlayerReports { get; }"}</code> | Always null offline. |
| <Link id="m-recentplayers" /><code><Link to="/game-api/types/assembly-api-client/irecentplayersclient">{"IRecentPlayersClient"}</Link>{" RecentPlayers { get; }"}</code> | Always null offline. |
| <Link id="m-securityclient" /><code><Link to="/game-api/types/assembly-api-client/isecurityapiclient">{"ISecurityApiClient"}</Link>{" SecurityClient { get; }"}</code> | An `OfflineSecurityApiClient`. |
| <Link id="m-serverclient" /><code><Link to="/game-api/types/assembly-api-client/iserverapiclient">{"IServerApiClient"}</Link>{" ServerClient { get; }"}</code> | An `OfflineServerApiClient`. |
| <Link id="m-servicesclient" /><code><Link to="/game-api/types/assembly-api-client/iservicesapiclient">{"IServicesApiClient"}</Link>{" ServicesClient { get; }"}</code> | An `OfflineServicesApiClient`. |
| <Link id="m-settingsclient" /><code><Link to="/game-api/types/assembly-api-client/isettingsclient">{"ISettingsClient"}</Link>{" SettingsClient { get; }"}</code> | Always null offline. |
| <Link id="m-shopclient" /><code><Link to="/game-api/types/assembly-api-client/ishopapiclient">{"IShopApiClient"}</Link>{" ShopClient { get; }"}</code> | An `OfflineShopApiClient`. |
| <Link id="m-socialclient" /><code><Link to="/game-api/types/assembly-api-client/isocialclient">{"ISocialClient"}</Link>{" SocialClient { get; }"}</code> | An `OfflineSocialClient`. |
| <Link id="m-userclient" /><code><Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" UserClient { get; private set; }"}</code> | The `OfflineUserApiClient` after login, null before. |
| <Link id="m-usercredentials" /><code><Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" UserCredentials { get; }"}</code> | The stored credentials the client was made with. |
| <Link id="m-voiceclient" /><code><Link to="/game-api/types/assembly-api-client/ivoiceapiclient">{"IVoiceApiClient"}</Link>{" VoiceClient { get; }"}</code> | An `OfflineVoiceClient`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-credentialschanged" /><code>{"event "}<Link to="/game-api/types/assembly-api-client/logincredentialschangedhandler">{"LoginCredentialsChangedHandler"}</Link>{" CredentialsChanged"}</code> | Never raised by the offline client. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loginasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginAsync(string username, string passwordHash)"}</code> | Ignores the username and password and logs in from the stored token. |
| <Link id="m-loginviaoauth" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginViaOauth(string clientId, string clientSecret, string scope)"}</code> | Throws `OfflineException`. |
| <Link id="m-loginwithemailasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithEmailAsync(string email, string passwordHash)"}</code> | Ignores the email and password and logs in from the stored token. |
| <Link id="m-loginwithoculus" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithOculus(string userNonce, ulong userIdentifier)"}</code> | Ignores the Oculus details and logs in from the stored token. |
| <Link id="m-loginwithpico" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithPico(string userToken, ulong userIdentifier)"}</code> | Ignores the Pico details and logs in from the stored token. |
| <Link id="m-loginwithrefreshtokenasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithRefreshTokenAsync(string refreshToken)"}</code> | Ignores the refresh token and logs in from the stored token. |
| <Link id="m-loginwithtokens" /><code><Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" LoginWithTokens(string accessToken, string refreshToken, string identityToken)"}</code> | Ignores the given tokens and logs in from the stored credentials' access token. |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | Clears `UserClient`, so `IsLoggedIn` becomes false. |
| <Link id="m-registeroculususerasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterOculusUserAsync(string username, string passwordHash, string email, string referral, "}<Link to="/game-api/types/assembly-api-models/accountlinkdata">{"AccountLinkData"}</Link>{" linkData)"}</code> | Throws `NotImplementedException`. |
| <Link id="m-registerpicouserasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterPicoUserAsync(string username, string passwordHash, string email, string referral, "}<Link to="/game-api/types/assembly-api-models/accountlinkdata">{"AccountLinkData"}</Link>{" linkData)"}</code> | Throws `NotImplementedException`. |
| <Link id="m-registeruserasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterUserAsync(string username, string passwordHash, string email, string referral)"}</code> | Throws `NotImplementedException`. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createloggedinapiclients" /><code>{"private void CreateLoggedInApiClients()"}</code> | Builds the user info from the stored access token and creates the `OfflineUserApiClient`. |
| <Link id="m-login" /><code>{"private "}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" Login()"}</code> | Creates the user client from the stored token. Throws `AuthorizationException` if already logged in. |

</details>
