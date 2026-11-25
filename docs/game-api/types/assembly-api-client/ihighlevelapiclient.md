---
title: "IHighLevelApiClient"
description: "One property per area, each its own client class:"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IHighLevelApiClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

One property per area, each its own client class:

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`HighLevelApiClient`](/game-api/types/assembly-api-client/highlevelapiclient), [`OfflineHighLevelApiClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient)
- **Documented in** [Alta's web API](/game-api/console-and-utilities/alta-web-api#ihighlevelapiclient)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code><Link to="/game-api/types/assembly-api-client/iaccountclient">{"IAccountClient"}</Link>{" Account { get; }"}</code> |  |
| <Link id="m-achievementclient" /><code><Link to="/game-api/types/assembly-api-client/iachievementclient">{"IAchievementClient"}</Link>{" AchievementClient { get; }"}</code> |  |
| <Link id="m-analytics" /><code><Link to="/game-api/types/assembly-api-client/ianalyticsclient">{"IAnalyticsClient"}</Link>{" Analytics { get; }"}</code> |  |
| <Link id="m-futureuseractions" /><code><Link to="/game-api/types/assembly-api-client/ifutureuseractions">{"IFutureUserActions"}</Link>{" FutureUserActions { get; }"}</code> |  |
| <Link id="m-groups" /><code><Link to="/game-api/types/assembly-api-client/igroupsclient">{"IGroupsClient"}</Link>{" Groups { get; }"}</code> |  |
| <Link id="m-instances" /><code><Link to="/game-api/types/assembly-api-client/iinstancesclient">{"IInstancesClient"}</Link>{" Instances { get; }"}</code> |  |
| <Link id="m-isloggedin" /><code>{"bool IsLoggedIn { get; }"}</code> |  |
| <Link id="m-launcherclient" /><code><Link to="/game-api/types/assembly-api-client/ilauncherapiclient">{"ILauncherApiClient"}</Link>{" LauncherClient { get; }"}</code> |  |
| <Link id="m-lowlevel" /><code><Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" LowLevel { get; }"}</code> |  |
| <Link id="m-matchmaking" /><code><Link to="/game-api/types/assembly-api-client/imatchmakingclient">{"IMatchMakingClient"}</Link>{" MatchMaking { get; }"}</code> |  |
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
| <Link id="m-userclient" /><code><Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" UserClient { get; }"}</code> |  |
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

## Used in

Members of other types that take, return or hold a `IHighLevelApiClient`:

[`HighLevelApiClientFactory.CreateHighLevelClient`](/game-api/types/assembly-api-client/highlevelapiclientfactory#m-createhighlevelclient), [`HighLevelApiClientFactory.CreateOfflineHighLevelClient`](/game-api/types/assembly-api-client/highlevelapiclientfactory#m-createofflinehighlevelclient), [`OfflineUserApiClient.highLevelClient`](/game-api/types/assembly-api-client/offlineuserapiclient#m-highlevelclient), [`OfflineUserApiClient.OfflineUserApiClient`](/game-api/types/assembly-api-client/offlineuserapiclient#m-ctor), [`AuthenticationUtility.apiClient`](/game-api/types/assembly-other/authenticationutility#m-apiclient), [`AuthenticationUtility.AuthenticationUtility`](/game-api/types/assembly-other/authenticationutility#m-ctor), [`LoginPreferences.apiClient`](/game-api/types/assembly-other/loginpreferences#m-apiclient), [`LoginPreferences.LoginPreferences`](/game-api/types/assembly-other/loginpreferences#m-ctor), [`AuthenticationService.apiClient`](/game-api/types/assembly-other/authenticationservice#m-apiclient), [`AuthenticationService.AuthenticationService`](/game-api/types/assembly-other/authenticationservice#m-ctor), [`UserService.UserService`](/game-api/types/assembly-other/userservice#m-ctor), [`ApiAccess.apiClient`](/game-api/types/global-a-b/apiaccess#m-apiclient), [`ApiAccess.ApiClient`](/game-api/types/global-a-b/apiaccess#m-apiclient-2), [`RedesignedAltaAccountLinker.apiClient`](/game-api/types/global-q-r/redesignedaltaaccountlinker#m-apiclient), [`RedesignedAltaAccountLinker.Inject`](/game-api/types/global-q-r/redesignedaltaaccountlinker#m-inject), [`UserPermissions.apiClient`](/game-api/types/assembly-other/userpermissions#m-apiclient).
