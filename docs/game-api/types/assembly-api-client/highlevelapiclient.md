---
title: "HighLevelApiClient"
description: "The online client for Alta's web API, one sub-client per area."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HighLevelApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

The online client for Alta's web API, one sub-client per area. Made by `HighLevelApiClientFactory` and reached through `ApiAccess.ApiClient`. Both sides; most calls now time out because the services are gone.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IHighLevelApiClientManager`](/game-api/types/assembly-api-client/ihighlevelapiclientmanager), [`IHighLevelApiClient`](/game-api/types/assembly-api-client/ihighlevelapiclient)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal HighLevelApiClient(string endpointUri, string websocketUri, string userAgent = null, int timeout = 40)"}</code> | Creates a `HighLevelApiClient` from `endpointUri`, `websocketUri`, `userAgent` and `timeout`. |

</details>

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | Logger for this class. |
| <Link id="m-websocketuri" /><code>{"private string websocketUri"}</code> | Websocket address passed in by the factory. Stored but not read by this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code><Link to="/game-api/types/assembly-api-client/iaccountclient">{"IAccountClient"}</Link>{" Account { get; private set; }"}</code> | Account client. Made at login, null before. |
| <Link id="m-achievementclient" /><code><Link to="/game-api/types/assembly-api-client/iachievementclient">{"IAchievementClient"}</Link>{" AchievementClient { get; private set; }"}</code> | Achievements client. Made at login, null before. |
| <Link id="m-analytics" /><code><Link to="/game-api/types/assembly-api-client/ianalyticsclient">{"IAnalyticsClient"}</Link>{" Analytics { get; }"}</code> | Analytics client. Made in the constructor, so it exists before login. |
| <Link id="m-futureuseractions" /><code><Link to="/game-api/types/assembly-api-client/ifutureuseractions">{"IFutureUserActions"}</Link>{" FutureUserActions { get; private set; }"}</code> | Future user actions client. Made at login, null before. |
| <Link id="m-groups" /><code><Link to="/game-api/types/assembly-api-client/igroupsclient">{"IGroupsClient"}</Link>{" Groups { get; private set; }"}</code> | Groups client. Made at login, null before. |
| <Link id="m-instances" /><code><Link to="/game-api/types/assembly-api-client/iinstancesclient">{"IInstancesClient"}</Link>{" Instances { get; private set; }"}</code> | Instances client. Made at login, null before. |
| <Link id="m-isloggedin" /><code>{"bool IsLoggedIn { get; }"}</code> | True when `UserClient.LoggedInUserInfo` is set. |
| <Link id="m-launcherclient" /><code><Link to="/game-api/types/assembly-api-client/ilauncherapiclient">{"ILauncherApiClient"}</Link>{" LauncherClient { get; private set; }"}</code> | Launcher client. Made at login, null before. |
| <Link id="m-lowlevel" /><code><Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" LowLevel { get; }"}</code> | The `LowLevelApiClient` that makes the HTTP requests and holds the tokens. |
| <Link id="m-matchmaking" /><code><Link to="/game-api/types/assembly-api-client/imatchmakingclient">{"IMatchMakingClient"}</Link>{" MatchMaking { get; private set; }"}</code> | Matchmaking client. Made at login, null before. |
| <Link id="m-oculus" /><code><Link to="/game-api/types/assembly-api-client/ioculusclient">{"IOculusClient"}</Link>{" Oculus { get; }"}</code> | Oculus client. Made in the constructor. |
| <Link id="m-pico" /><code><Link to="/game-api/types/assembly-api-client/ipicoclient">{"IPicoClient"}</Link>{" Pico { get; }"}</code> | Pico client. Made in the constructor. |
| <Link id="m-playerreports" /><code><Link to="/game-api/types/assembly-api-client/iplayerreportsclient">{"IPlayerReportsClient"}</Link>{" PlayerReports { get; private set; }"}</code> | Player reports client. Made at login, null before. |
| <Link id="m-recentplayers" /><code><Link to="/game-api/types/assembly-api-client/irecentplayersclient">{"IRecentPlayersClient"}</Link>{" RecentPlayers { get; private set; }"}</code> | Recent players client. Made at login, null before. |
| <Link id="m-securityclient" /><code><Link to="/game-api/types/assembly-api-client/isecurityapiclient">{"ISecurityApiClient"}</Link>{" SecurityClient { get; private set; }"}</code> | Security client (bans and similar). Made at login, null before. |
| <Link id="m-serverclient" /><code><Link to="/game-api/types/assembly-api-client/iserverapiclient">{"IServerApiClient"}</Link>{" ServerClient { get; private set; }"}</code> | Server client (server lists, permissions, joining). Made at login, null before. |
| <Link id="m-servicesclient" /><code><Link to="/game-api/types/assembly-api-client/iservicesapiclient">{"IServicesApiClient"}</Link>{" ServicesClient { get; }"}</code> | Services client (public IP lookup, token checks). Made in the constructor. |
| <Link id="m-settingsclient" /><code><Link to="/game-api/types/assembly-api-client/isettingsclient">{"ISettingsClient"}</Link>{" SettingsClient { get; private set; }"}</code> | Settings client. Made at login, null before. |
| <Link id="m-shopclient" /><code><Link to="/game-api/types/assembly-api-client/ishopapiclient">{"IShopApiClient"}</Link>{" ShopClient { get; private set; }"}</code> | Shop client. Made at login, null before. |
| <Link id="m-socialclient" /><code><Link to="/game-api/types/assembly-api-client/isocialclient">{"ISocialClient"}</Link>{" SocialClient { get; private set; }"}</code> | Social client (friends). Made at login, null before. |
| <Link id="m-userclient" /><code><Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" UserClient { get; }"}</code> | User client; its `LoggedInUserInfo` is the current login. Made in the constructor. |
| <Link id="m-usercredentials" /><code><Link to="/game-api/types/assembly-api-client/logincredentials">{"LoginCredentials"}</Link>{" UserCredentials { get; }"}</code> | The current login tokens, from `LowLevel.Credentials`. |
| <Link id="m-voiceclient" /><code><Link to="/game-api/types/assembly-api-client/ivoiceapiclient">{"IVoiceApiClient"}</Link>{" VoiceClient { get; private set; }"}</code> | Voice client. Made at login, null before. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-api-client-highlevel-ihighlevelapiclientmanager-apiclient" /><code>{"private "}<Link to="/game-api/types/assembly-api-client/lowlevelapiclient">{"LowLevelApiClient"}</Link>{" Alta.Api.Client.HighLevel.IHighLevelApiClientManager.ApiClient { get; }"}</code> | Gives the sub-clients the shared `LowLevel` client. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-credentialschanged" /><code>{"event "}<Link to="/game-api/types/assembly-api-client/logincredentialschangedhandler">{"LoginCredentialsChangedHandler"}</Link>{" CredentialsChanged"}</code> | Raised by the low level client when the login tokens change, with the old and new credentials. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loginasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginAsync(string username, string passwordHash)"}</code> | Logs in with a username and password hash, sending the device id. Throws if already logged in. |
| <Link id="m-loginviaoauth" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginViaOauth(string clientId, string clientSecret, string scope)"}</code> | Logs in with an OAuth client id, secret and scope; `AuthenticationUtility` uses it. Throws if already logged in. |
| <Link id="m-loginwithemailasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithEmailAsync(string email, string passwordHash)"}</code> | Logs in with an email and password hash. Throws if already logged in. |
| <Link id="m-loginwithoculus" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithOculus(string userNonce, ulong userIdentifier)"}</code> | Logs in with a linked Oculus account's nonce and user id. Throws if already logged in. |
| <Link id="m-loginwithpico" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithPico(string userToken, ulong userIdentifier)"}</code> | Logs in with a linked Pico account's token and user id. Throws if already logged in. |
| <Link id="m-loginwithrefreshtokenasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{"> LoginWithRefreshTokenAsync(string refreshToken)"}</code> | Logs in by exchanging a refresh token. Throws if already logged in. |
| <Link id="m-loginwithtokens" /><code><Link to="/game-api/types/assembly-api-client/iuserapiclient">{"IUserApiClient"}</Link>{" LoginWithTokens(string accessToken, string refreshToken, string identityToken)"}</code> | Logs in from access, refresh and identity tokens without a request, reading the user from their claims. How `/access_token` and TavernLib log in. |
| <Link id="m-logout" /><code>{"void Logout()"}</code> | Clears the low level login and the logged-in user. The logged-in sub-clients are left in place. |
| <Link id="m-registeroculususerasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterOculusUserAsync(string username, string passwordHash, string email, string referral, "}<Link to="/game-api/types/assembly-api-models/accountlinkdata">{"AccountLinkData"}</Link>{" accountLink = null)"}</code> | Registers a new account linked to an Oculus account. |
| <Link id="m-registerpicouserasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterPicoUserAsync(string username, string passwordHash, string email, string referral, "}<Link to="/game-api/types/assembly-api-models/accountlinkdata">{"AccountLinkData"}</Link>{" accountLink = null)"}</code> | Registers a new account linked to a Pico account. |
| <Link id="m-registeruserasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{"> RegisterUserAsync(string username, string passwordHash, string email, string referral)"}</code> | Registers a new account with a username, password hash, email and referral. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createloggedinapiclients" /><code>{"private void CreateLoggedInApiClients("}<Link to="/game-api/types/assembly-api-models/userinfowithpermissions">{"UserInfoWithPermissions"}</Link>{" loggedInUser)"}</code> | Stores the logged-in user and creates every sub-client that needs a login. Called by each login method. |

</details>

## Used in

Members of other types that take, return or hold a `HighLevelApiClient`:

[`AccountClient.AccountClient`](/game-api/types/assembly-api-client/accountclient#m-ctor), [`GroupsClient.GroupsClient`](/game-api/types/assembly-api-client/groupsclient#m-ctor), [`PicoClient.PicoClient`](/game-api/types/assembly-api-client/picoclient#m-ctor), [`ShopApiClient.ShopApiClient`](/game-api/types/assembly-api-client/shopapiclient#m-ctor).
