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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IHighLevelApiClient`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineHighLevelApiClient("}<Link to="/mod/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> | <span className="api-desc">Creates an `OfflineHighLevelApiClient` from `credentials`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code><Link to="/mod/game-api/types/assembly-api-client/iaccountclient">{"IAccountClient"}</Link>{" Account { get; }"}</code> | <span className="api-desc">Always null offline.</span> |
| <Link id="m-achievementclient" /><code><Link to="/mod/game-api/types/assembly-api-client/iachievementclient">{"IAchievementClient"}</Link>{" AchievementClient { get; }"}</code> | <span className="api-desc">An `OfflineAchievementApiClient`.</span> |
| <Link id="m-analytics" /><code><Link to="/mod/game-api/types/assembly-api-client/ianalyticsclient">{"IAnalyticsClient"}</Link>{" Analytics { get; }"}</code> | <span className="api-desc">Always null offline.</span> |
| <Link id="m-futureuseractions" /><code><Link to="/mod/game-api/types/assembly-api-client/ifutureuseractions">{"IFutureUserActions"}</Link>{" FutureUserActions { get; }"}</code> | <span className="api-desc">Always null offline.</span> |
| <Link id="m-groups" /><code><Link to="/mod/game-api/types/assembly-api-client/igroupsclient">{"IGroupsClient"}</Link>{" Groups { get; }"}</code> | <span className="api-desc">An `OfflineGroupsClient`, which throws on every call.</span> |
| <Link id="m-instances" /><code><Link to="/mod/game-api/types/assembly-api-client/iinstancesclient">{"IInstancesClient"}</Link>{" Instances { get; private set; }"}</code> | <span className="api-desc">Always null offline.</span> |
| <Link id="m-isloggedin" /><code>{"bool IsLoggedIn { get; }"}</code> | <span className="api-desc">True once one of the login methods has created `UserClient`.</span> |
| <Link id="m-launcherclient" /><code><Link to="/mod/game-api/types/assembly-api-client/ilauncherapiclient">{"ILauncherApiClient"}</Link>{" LauncherClient { get; }"}</code> | <span className="api-desc">An `OfflineLauncherApiClient`.</span> |
| <Link id="m-lowlevel" /><code><Link to="/mod/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" LowLevel { get; }"}</code> | <span className="api-desc">Always null offline, so code that uses `LowLevel` directly fails.</span> |
| <Link id="m-matchmaking" /><code><Link to="/mod/game-api/types/assembly-api-client/imatchmakingclient">{"IMatchMakingClient"}</Link>{" MatchMaking { get; private set; }"}</code> | <span className="api-desc">Always null offline.</span> |
| <Link id="m-oculus" /><code><Link to="/mod/game-api/types/assembly-api-client/ioculusclient">{"IOculusClient"}</Link>{" Oculus { get; }"}</code> | <span className="api-desc">Always null offline.</span> |
| <Link id="m-pico" /><code><Link to="/mod/game-api/types/assembly-api-client/ipicoclient">{"IPicoClient"}</Link>{" Pico { get; }"}</code> | <span className="api-desc">Always null offline.</span> |
| <Link id="m-playerreports" /><code><Link to="/mod/game-api/types/assembly-api-client/iplayerreportsclient">{"IPlayerReportsClient"}</Link>{" PlayerReports { get; }"}</code> | <span className="api-desc">Always null offline.</span> |
| <Link id="m-recentplayers" /><code><Link to="/mod/game-api/types/assembly-api-client/irecentplayersclient">{"IRecentPlayersClient"}</Link>{" RecentPlayers { get; }"}</code> | <span className="api-desc">Always null offline.</span> |
| <Link id="m-securityclient" /><code><Link to="/mod/game-api/types/assembly-api-client/isecurityapiclient">{"ISecurityApiClient"}</Link>{" SecurityClient { get; }"}</code> | <span className="api-desc">An `OfflineSecurityApiClient`.</span> |
| <Link id="m-serverclient" /><code><Link to="/mod/game-api/types/assembly-api-client/iserverapiclient">{"IServerApiClient"}</Link>{" ServerClient { get; }"}</code> | <span className="api-desc">An `OfflineServerApiClient`.</span> |
| <Link id="m-servicesclient" /><code><Link to="/mod/game-api/types/assembly-api-client/iservicesapiclient">{"IServicesApiClient"}</Link>{" ServicesClient { get; }"}</code> | <span className="api-desc">An `OfflineServicesApiClient`.</span> |
| <Link id="m-settingsclient" /><code><Link to="/mod/game-api/types/assembly-api-client/isettingsclient">{"ISettingsClient"}</Link>{" SettingsClient { get; }"}</code> | <span className="api-desc">Always null offline.</span> |
| <Link id="m-shopclient" /><code><Link to="/mod/game-api/types/assembly-api-client/ishopapiclient">{"IShopApiClient"}</Link>{" ShopClient { get; }"}</code> | <span className="api-desc">An `OfflineShopApiClient`.</span> |
| <Link id="m-socialclient" /><code><Link to="/mod/game-api/types/assembly-api-client/isocialclient">{"ISocialClient"}</Link>{" SocialClient { get; }"}</code> | <span className="api-desc">An `OfflineSocialClient`.</span> |
| <Link id="m-userclient" /><code><Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" UserClient { get; private set; }"}</code> | <span className="api-desc">The `OfflineUserApiClient` after login, null before.</span> |
| <Link id="m-usercredentials" /><code><Link to="/mod/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" UserCredentials { get; }"}</code> | <span className="api-desc">The stored credentials the client was made with.</span> |
| <Link id="m-voiceclient" /><code><Link to="/mod/game-api/types/assembly-api-client/ivoiceapiclient">{"IVoiceApiClient"}</Link>{" VoiceClient { get; }"}</code> | <span className="api-desc">An `OfflineVoiceClient`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-credentialschanged" /><code>{"event "}<Link to="/mod/game-api/types/assembly-api-client/logincredentialschangedhandler">{"LoginCredentialsChangedHandler"}</Link>{" CredentialsChanged"}</code> | <span className="api-desc">Never raised by the offline client.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loginasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginAsync(string username, string passwordHash)"}</code> | <span className="api-desc">Ignores the username and password and logs in from the stored token.</span> |
| <Link id="m-loginviaoauth" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginViaOauth(string clientId, string clientSecret, string scope)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-loginwithemailasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithEmailAsync(string email, string passwordHash)"}</code> | <span className="api-desc">Ignores the email and password and logs in from the stored token.</span> |
| <Link id="m-loginwithoculus" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithOculus(string userNonce, ulong userIdentifier)"}</code> | <span className="api-desc">Ignores the Oculus details and logs in from the stored token.</span> |
| <Link id="m-loginwithpico" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithPico(string userToken, ulong userIdentifier)"}</code> | <span className="api-desc">Ignores the Pico details and logs in from the stored token.</span> |
| <Link id="m-loginwithrefreshtokenasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithRefreshTokenAsync(string refreshToken)"}</code> | <span className="api-desc">Ignores the refresh token and logs in from the stored token.</span> |
| <Link id="m-loginwithtokens" /><code><Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" LoginWithTokens(string accessToken, string refreshToken, string identityToken)"}</code> | <span className="api-desc">Ignores the given tokens and logs in from the stored credentials' access token.</span> |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | <span className="api-desc">Clears `UserClient`, so `IsLoggedIn` becomes false.</span> |
| <Link id="m-registeroculususerasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterOculusUserAsync(string username, string passwordHash, string email, string referral, "}<Link to="/mod/game-api/types/assembly-api-models/accountlinkdata">{"AccountLinkData"}</Link>{" linkData)"}</code> | <span className="api-desc">Throws `NotImplementedException`.</span> |
| <Link id="m-registerpicouserasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterPicoUserAsync(string username, string passwordHash, string email, string referral, "}<Link to="/mod/game-api/types/assembly-api-models/accountlinkdata">{"AccountLinkData"}</Link>{" linkData)"}</code> | <span className="api-desc">Throws `NotImplementedException`.</span> |
| <Link id="m-registeruserasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterUserAsync(string username, string passwordHash, string email, string referral)"}</code> | <span className="api-desc">Throws `NotImplementedException`.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createloggedinapiclients" /><code>{"private void CreateLoggedInApiClients()"}</code> | <span className="api-desc">Builds the user info from the stored access token and creates the `OfflineUserApiClient`.</span> |
| <Link id="m-login" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" Login()"}</code> | <span className="api-desc">Creates the user client from the stored token. Throws `AuthorizationException` if already logged in.</span> |

</details>
