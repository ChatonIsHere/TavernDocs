---
title: "IHighLevelApiClient"
description: "The game's client for Alta's old web API, one property per area. You get it from ApiAccess.ApiClient. The services are gone, so most calls time out un"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IHighLevelApiClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

The game's client for Alta's old web API, one property per area. You get it from `ApiAccess.ApiClient`. The services are gone, so most calls time out unless a mod answers them.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`HighLevelApiClient`](/game-api/types/assembly-api-client/highlevelapiclient), [`OfflineHighLevelApiClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient)
- **Documented in** [Alta's web API](/game-api/console-and-utilities/alta-web-api#ihighlevelapiclient)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code><Link to="/game-api/types/assembly-api-client/iaccountclient">{"IAccountClient"}</Link>{" Account { get; }"}</code> | Account client. Null until logged in. |
| <Link id="m-achievementclient" /><code><Link to="/game-api/types/assembly-api-client/iachievementclient">{"IAchievementClient"}</Link>{" AchievementClient { get; }"}</code> | Achievements client. Null until logged in. |
| <Link id="m-analytics" /><code><Link to="/game-api/types/assembly-api-client/ianalyticsclient">{"IAnalyticsClient"}</Link>{" Analytics { get; }"}</code> | Analytics event client. Exists before login. |
| <Link id="m-futureuseractions" /><code><Link to="/game-api/types/assembly-api-client/ifutureuseractions">{"IFutureUserActions"}</Link>{" FutureUserActions { get; }"}</code> | Client for scheduled user actions. Null until logged in. |
| <Link id="m-groups" /><code><Link to="/game-api/types/assembly-api-client/igroupsclient">{"IGroupsClient"}</Link>{" Groups { get; }"}</code> | Groups (server communities) client. Null until logged in. |
| <Link id="m-instances" /><code><Link to="/game-api/types/assembly-api-client/iinstancesclient">{"IInstancesClient"}</Link>{" Instances { get; }"}</code> | Server instances client. Null until logged in. |
| <Link id="m-isloggedin" /><code>{"bool IsLoggedIn { get; }"}</code> | True when `UserClient.LoggedInUserInfo` is set. |
| <Link id="m-launcherclient" /><code><Link to="/game-api/types/assembly-api-client/ilauncherapiclient">{"ILauncherApiClient"}</Link>{" LauncherClient { get; }"}</code> | Launcher client. Null until logged in. |
| <Link id="m-lowlevel" /><code><Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" LowLevel { get; }"}</code> | The `LowLevelApiClient` that makes the HTTP requests and holds the tokens. |
| <Link id="m-matchmaking" /><code><Link to="/game-api/types/assembly-api-client/imatchmakingclient">{"IMatchMakingClient"}</Link>{" MatchMaking { get; }"}</code> | Matchmaking client. Null until logged in. |
| <Link id="m-oculus" /><code><Link to="/game-api/types/assembly-api-client/ioculusclient">{"IOculusClient"}</Link>{" Oculus { get; }"}</code> | Oculus platform client. Exists before login. |
| <Link id="m-pico" /><code><Link to="/game-api/types/assembly-api-client/ipicoclient">{"IPicoClient"}</Link>{" Pico { get; }"}</code> | Pico platform client. Exists before login. |
| <Link id="m-playerreports" /><code><Link to="/game-api/types/assembly-api-client/iplayerreportsclient">{"IPlayerReportsClient"}</Link>{" PlayerReports { get; }"}</code> | Player reports client. Null until logged in. |
| <Link id="m-recentplayers" /><code><Link to="/game-api/types/assembly-api-client/irecentplayersclient">{"IRecentPlayersClient"}</Link>{" RecentPlayers { get; }"}</code> | Recent players client. Null until logged in. |
| <Link id="m-securityclient" /><code><Link to="/game-api/types/assembly-api-client/isecurityapiclient">{"ISecurityApiClient"}</Link>{" SecurityClient { get; }"}</code> | Security client. Null until logged in. |
| <Link id="m-serverclient" /><code><Link to="/game-api/types/assembly-api-client/iserverapiclient">{"IServerApiClient"}</Link>{" ServerClient { get; }"}</code> | Server list, permissions and join client. Null until logged in. |
| <Link id="m-servicesclient" /><code><Link to="/game-api/types/assembly-api-client/iservicesapiclient">{"IServicesApiClient"}</Link>{" ServicesClient { get; }"}</code> | General services client (public IP lookup, identity token checks). Exists before login. |
| <Link id="m-settingsclient" /><code><Link to="/game-api/types/assembly-api-client/isettingsclient">{"ISettingsClient"}</Link>{" SettingsClient { get; }"}</code> | User settings client. Null until logged in. |
| <Link id="m-shopclient" /><code><Link to="/game-api/types/assembly-api-client/ishopapiclient">{"IShopApiClient"}</Link>{" ShopClient { get; }"}</code> | Shop client. Null until logged in. |
| <Link id="m-socialclient" /><code><Link to="/game-api/types/assembly-api-client/isocialclient">{"ISocialClient"}</Link>{" SocialClient { get; }"}</code> | Friends client. Null until logged in. |
| <Link id="m-userclient" /><code><Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" UserClient { get; }"}</code> | User account client. Holds the logged-in user's info. Exists before login. |
| <Link id="m-usercredentials" /><code><Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" UserCredentials { get; }"}</code> | The current login tokens, from the low-level client. |
| <Link id="m-voiceclient" /><code><Link to="/game-api/types/assembly-api-client/ivoiceapiclient">{"IVoiceApiClient"}</Link>{" VoiceClient { get; }"}</code> | Voice chat client. Null until logged in. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-credentialschanged" /><code>{"event "}<Link to="/game-api/types/assembly-api-client/logincredentialschangedhandler">{"LoginCredentialsChangedHandler"}</Link>{" CredentialsChanged"}</code> | Raised when the low-level client's login tokens change, such as after a refresh. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loginasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginAsync(string username, string passwordHash)"}</code> | Logs in with a username and password hash, then creates the logged-in clients. Throws if already logged in. |
| <Link id="m-loginviaoauth" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginViaOauth(string clientId, string clientSecret, string scope)"}</code> | Logs in with OAuth client credentials (client id, secret and scope). Throws if already logged in. |
| <Link id="m-loginwithemailasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithEmailAsync(string email, string passwordHash)"}</code> | Logs in with an email and password hash. Throws if already logged in. |
| <Link id="m-loginwithoculus" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithOculus(string userNonce, ulong userIdentifier)"}</code> | Logs in through a linked Oculus account (nonce and user id). Throws if already logged in. |
| <Link id="m-loginwithpico" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithPico(string userToken, ulong userIdentifier)"}</code> | Logs in through a linked Pico account (token and user id). Throws if already logged in. |
| <Link id="m-loginwithrefreshtokenasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithRefreshTokenAsync(string refreshToken)"}</code> | Logs in with a refresh token. Throws if already logged in. |
| <Link id="m-loginwithtokens" /><code><Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" LoginWithTokens(string accessToken, string refreshToken, string identityToken)"}</code> | Logs in from existing access, refresh and identity tokens without a web request. Throws if already logged in. |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | Clears the login tokens and the logged-in user info. |
| <Link id="m-registeroculususerasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterOculusUserAsync(string username, string passwordHash, string email, string referral, "}<Link to="/game-api/types/assembly-api-models/accountlinkdata">{"AccountLinkData"}</Link>{" linkData)"}</code> | Registers a new account linked to an Oculus account. |
| <Link id="m-registerpicouserasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterPicoUserAsync(string username, string passwordHash, string email, string referral, "}<Link to="/game-api/types/assembly-api-models/accountlinkdata">{"AccountLinkData"}</Link>{" linkData)"}</code> | Registers a new account linked to a Pico account. |
| <Link id="m-registeruserasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterUserAsync(string username, string passwordHash, string email, string referral)"}</code> | Registers a new account with a username, password hash, email and referral. |

## Used in

Members of other types that take, return or hold a `IHighLevelApiClient`:

[`HighLevelApiClientFactory.CreateHighLevelClient`](/game-api/types/assembly-api-client/highlevelapiclientfactory#m-createhighlevelclient), [`HighLevelApiClientFactory.CreateOfflineHighLevelClient`](/game-api/types/assembly-api-client/highlevelapiclientfactory#m-createofflinehighlevelclient), [`OfflineUserApiClient.highLevelClient`](/game-api/types/assembly-api-client/offlineuserapiclient#m-highlevelclient), [`OfflineUserApiClient.OfflineUserApiClient`](/game-api/types/assembly-api-client/offlineuserapiclient#m-ctor), [`AuthenticationUtility.apiClient`](/game-api/types/assembly-other/authenticationutility#m-apiclient), [`AuthenticationUtility.AuthenticationUtility`](/game-api/types/assembly-other/authenticationutility#m-ctor), [`LoginPreferences.apiClient`](/game-api/types/assembly-other/loginpreferences#m-apiclient), [`LoginPreferences.LoginPreferences`](/game-api/types/assembly-other/loginpreferences#m-ctor), [`AuthenticationService.apiClient`](/game-api/types/assembly-other/authenticationservice#m-apiclient), [`AuthenticationService.AuthenticationService`](/game-api/types/assembly-other/authenticationservice#m-ctor), [`UserService.UserService`](/game-api/types/assembly-other/userservice#m-ctor), [`ApiAccess.apiClient`](/game-api/types/global-a-b/apiaccess#m-apiclient), [`ApiAccess.ApiClient`](/game-api/types/global-a-b/apiaccess#m-apiclient-2), [`RedesignedAltaAccountLinker.apiClient`](/game-api/types/global-q-r/redesignedaltaaccountlinker#m-apiclient), [`RedesignedAltaAccountLinker.Inject`](/game-api/types/global-q-r/redesignedaltaaccountlinker#m-inject), [`UserPermissions.apiClient`](/game-api/types/assembly-other/userpermissions#m-apiclient).
