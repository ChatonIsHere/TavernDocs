---
title: "OfflineHighLevelApiClient"
description: "class OfflineHighLevelApiClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineHighLevelApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IHighLevelApiClient`](/game-api/types/assembly-api-client/ihighlevelapiclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineHighLevelApiClient("}<Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" credentials)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code><Link to="/game-api/types/assembly-api-client/iaccountclient">{"IAccountClient"}</Link>{" Account { get; }"}</code> |  |
| <Link id="m-achievementclient" /><code><Link to="/game-api/types/assembly-api-client/iachievementclient">{"IAchievementClient"}</Link>{" AchievementClient { get; }"}</code> |  |
| <Link id="m-analytics" /><code><Link to="/game-api/types/assembly-api-client/ianalyticsclient">{"IAnalyticsClient"}</Link>{" Analytics { get; }"}</code> |  |
| <Link id="m-futureuseractions" /><code><Link to="/game-api/types/assembly-api-client/ifutureuseractions">{"IFutureUserActions"}</Link>{" FutureUserActions { get; }"}</code> |  |
| <Link id="m-groups" /><code><Link to="/game-api/types/assembly-api-client/igroupsclient">{"IGroupsClient"}</Link>{" Groups { get; }"}</code> |  |
| <Link id="m-instances" /><code><Link to="/game-api/types/assembly-api-client/iinstancesclient">{"IInstancesClient"}</Link>{" Instances { get; private set; }"}</code> |  |
| <Link id="m-isloggedin" /><code>{"bool IsLoggedIn { get; }"}</code> |  |
| <Link id="m-launcherclient" /><code><Link to="/game-api/types/assembly-api-client/ilauncherapiclient">{"ILauncherApiClient"}</Link>{" LauncherClient { get; }"}</code> |  |
| <Link id="m-lowlevel" /><code><Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" LowLevel { get; }"}</code> |  |
| <Link id="m-matchmaking" /><code><Link to="/game-api/types/assembly-api-client/imatchmakingclient">{"IMatchMakingClient"}</Link>{" MatchMaking { get; private set; }"}</code> |  |
| <Link id="m-oculus" /><code><Link to="/game-api/types/assembly-api-client/ioculusclient">{"IOculusClient"}</Link>{" Oculus { get; }"}</code> |  |
| <Link id="m-pico" /><code><Link to="/game-api/types/assembly-api-client/ipicoclient">{"IPicoClient"}</Link>{" Pico { get; }"}</code> |  |
| <Link id="m-playerreports" /><code><Link to="/game-api/types/assembly-api-client/iplayerreportsclient">{"IPlayerReportsClient"}</Link>{" PlayerReports { get; }"}</code> |  |
| <Link id="m-recentplayers" /><code><Link to="/game-api/types/assembly-api-client/irecentplayersclient">{"IRecentPlayersClient"}</Link>{" RecentPlayers { get; }"}</code> |  |
| <Link id="m-securityclient" /><code><Link to="/game-api/types/assembly-api-client/isecurityapiclient">{"ISecurityApiClient"}</Link>{" SecurityClient { get; }"}</code> |  |
| <Link id="m-serverclient" /><code><Link to="/game-api/types/assembly-api-client/iserverapiclient">{"IServerApiClient"}</Link>{" ServerClient { get; }"}</code> |  |
| <Link id="m-servicesclient" /><code><Link to="/game-api/types/assembly-api-client/iservicesapiclient">{"IServicesApiClient"}</Link>{" ServicesClient { get; }"}</code> |  |
| <Link id="m-settingsclient" /><code><Link to="/game-api/types/assembly-api-client/isettingsclient">{"ISettingsClient"}</Link>{" SettingsClient { get; }"}</code> |  |
| <Link id="m-shopclient" /><code><Link to="/game-api/types/assembly-api-client/ishopapiclient">{"IShopApiClient"}</Link>{" ShopClient { get; }"}</code> |  |
| <Link id="m-socialclient" /><code><Link to="/game-api/types/assembly-api-client/isocialclient">{"ISocialClient"}</Link>{" SocialClient { get; }"}</code> |  |
| <Link id="m-userclient" /><code><Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" UserClient { get; private set; }"}</code> |  |
| <Link id="m-usercredentials" /><code><Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" UserCredentials { get; }"}</code> |  |
| <Link id="m-voiceclient" /><code><Link to="/game-api/types/assembly-api-client/ivoiceapiclient">{"IVoiceApiClient"}</Link>{" VoiceClient { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-credentialschanged" /><code>{"event "}<Link to="/game-api/types/assembly-api-client/logincredentialschangedhandler">{"LoginCredentialsChangedHandler"}</Link>{" CredentialsChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loginasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginAsync(string username, string passwordHash)"}</code> |  |
| <Link id="m-loginviaoauth" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginViaOauth(string clientId, string clientSecret, string scope)"}</code> |  |
| <Link id="m-loginwithemailasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithEmailAsync(string email, string passwordHash)"}</code> |  |
| <Link id="m-loginwithoculus" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithOculus(string userNonce, ulong userIdentifier)"}</code> |  |
| <Link id="m-loginwithpico" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithPico(string userToken, ulong userIdentifier)"}</code> |  |
| <Link id="m-loginwithrefreshtokenasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithRefreshTokenAsync(string refreshToken)"}</code> |  |
| <Link id="m-loginwithtokens" /><code><Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" LoginWithTokens(string accessToken, string refreshToken, string identityToken)"}</code> |  |
| <Link id="m-logout" /><code>{"void Logout()"}</code> |  |
| <Link id="m-registeroculususerasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterOculusUserAsync(string username, string passwordHash, string email, string referral, "}<Link to="/game-api/types/assembly-api-models/accountlinkdata">{"AccountLinkData"}</Link>{" linkData)"}</code> |  |
| <Link id="m-registerpicouserasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterPicoUserAsync(string username, string passwordHash, string email, string referral, "}<Link to="/game-api/types/assembly-api-models/accountlinkdata">{"AccountLinkData"}</Link>{" linkData)"}</code> |  |
| <Link id="m-registeruserasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterUserAsync(string username, string passwordHash, string email, string referral)"}</code> |  |
| <Link id="m-createloggedinapiclients" /><code>{"private void CreateLoggedInApiClients()"}</code> |  |
| <Link id="m-login" /><code>{"private "}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" Login()"}</code> |  |
